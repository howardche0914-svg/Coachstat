"""Hard risk guardrails, enforced in code after the AI proposes a plan.

The AI's trade plan is advisory. Every proposed trade passes through these
checks, and anything the checks reject is simply not executed. The limits
live in config.py and cannot be changed by the model.
"""

from dataclasses import dataclass

from brain import TradePlan
from broker import PortfolioSnapshot
from config import settings


@dataclass
class ApprovedOrder:
    symbol: str
    side: str  # "buy" | "sell"
    notional_usd: float
    confidence: float
    reasoning: str
    position_value: float = 0.0  # for sells


@dataclass
class RiskReview:
    approved: list[ApprovedOrder]
    rejected: list[str]  # human-readable reasons
    halted: bool = False
    halt_reason: str = ""


def review(plan: TradePlan, snapshot: PortfolioSnapshot) -> RiskReview:
    approved: list[ApprovedOrder] = []
    rejected: list[str] = []

    # Circuit breaker: stop trading entirely on a bad day.
    if snapshot.daily_change_pct <= -settings.max_daily_loss_pct:
        return RiskReview(
            approved=[], rejected=[], halted=True,
            halt_reason=(
                f"Daily loss circuit breaker: equity is {snapshot.daily_change_pct:.2f}% "
                f"today (limit -{settings.max_daily_loss_pct}%). No trades this run."
            ),
        )

    positions = {p["symbol"]: p for p in snapshot.positions}
    min_cash = snapshot.equity * settings.cash_reserve_pct / 100
    available_cash = snapshot.cash
    max_position_value = snapshot.equity * settings.max_position_pct / 100

    for d in plan.decisions:
        symbol = d.symbol.upper()
        if d.action == "hold":
            continue
        if len(approved) >= settings.max_trades_per_run:
            rejected.append(f"{symbol}: max trades per run ({settings.max_trades_per_run}) reached")
            continue
        if d.confidence < settings.min_confidence:
            rejected.append(
                f"{symbol} {d.action}: confidence {d.confidence:.2f} below minimum {settings.min_confidence}"
            )
            continue
        if symbol not in settings.watchlist and symbol not in positions:
            rejected.append(f"{symbol} {d.action}: not in watchlist or current positions")
            continue

        if d.action == "buy":
            notional = min(d.notional_usd, settings.max_order_usd)
            held = positions.get(symbol, {}).get("market_value", 0.0)
            notional = min(notional, max_position_value - held)
            notional = min(notional, available_cash - min_cash)
            if notional < 1:
                rejected.append(
                    f"{symbol} buy: blocked by position cap ({settings.max_position_pct}% of equity) "
                    f"or cash reserve ({settings.cash_reserve_pct}%)"
                )
                continue
            available_cash -= notional
            approved.append(ApprovedOrder(symbol, "buy", round(notional, 2),
                                          d.confidence, d.reasoning))

        elif d.action == "sell":
            if symbol not in positions:
                rejected.append(f"{symbol} sell: no position held (shorting is disabled)")
                continue
            position_value = positions[symbol]["market_value"]
            notional = min(d.notional_usd, position_value)
            if notional < 1:
                rejected.append(f"{symbol} sell: notional too small")
                continue
            approved.append(ApprovedOrder(symbol, "sell", round(notional, 2),
                                          d.confidence, d.reasoning,
                                          position_value=position_value))

    return RiskReview(approved=approved, rejected=rejected)
