"""Thin wrapper around the Alpaca trading API.

Defaults to the paper-trading endpoint (simulated money, real market data).
Live trading is refused unless the user has explicitly opted in via
ALPACA_PAPER=false AND CONFIRM_LIVE_TRADING set to the confirmation phrase.
"""

from dataclasses import dataclass

from alpaca.trading.client import TradingClient
from alpaca.trading.enums import OrderSide, TimeInForce
from alpaca.trading.requests import MarketOrderRequest

from config import LIVE_CONFIRMATION_PHRASE, settings


@dataclass
class PortfolioSnapshot:
    equity: float
    last_equity: float
    cash: float
    buying_power: float
    positions: list[dict]

    @property
    def daily_change_pct(self) -> float:
        if self.last_equity <= 0:
            return 0.0
        return (self.equity - self.last_equity) / self.last_equity * 100

    def describe(self) -> str:
        lines = [
            f"Total equity: ${self.equity:,.2f} ({self.daily_change_pct:+.2f}% today)",
            f"Cash: ${self.cash:,.2f}",
        ]
        if self.positions:
            lines.append("Current positions:")
            for p in self.positions:
                lines.append(
                    f"  {p['symbol']}: {p['qty']} shares, market value ${p['market_value']:,.2f}, "
                    f"unrealized P/L {p['unrealized_plpc']:+.2f}% (avg entry ${p['avg_entry_price']:,.2f}, "
                    f"current ${p['current_price']:,.2f})"
                )
        else:
            lines.append("Current positions: none (all cash)")
        return "\n".join(lines)


class Broker:
    def __init__(self):
        if not settings.paper and settings.live_confirmation != LIVE_CONFIRMATION_PHRASE:
            raise SystemExit(
                "Refusing to start in LIVE trading mode. Set ALPACA_PAPER=true, or if you "
                "really intend to trade real money, also set CONFIRM_LIVE_TRADING to the "
                f"exact phrase: {LIVE_CONFIRMATION_PHRASE!r}"
            )
        self.client = TradingClient(
            settings.alpaca_api_key,
            settings.alpaca_secret_key,
            paper=settings.paper,
        )

    def market_is_open(self) -> bool:
        return bool(self.client.get_clock().is_open)

    def snapshot(self) -> PortfolioSnapshot:
        account = self.client.get_account()
        positions = []
        for p in self.client.get_all_positions():
            positions.append({
                "symbol": p.symbol,
                "qty": float(p.qty),
                "market_value": float(p.market_value),
                "avg_entry_price": float(p.avg_entry_price),
                "current_price": float(p.current_price),
                "unrealized_plpc": float(p.unrealized_plpc) * 100,
            })
        return PortfolioSnapshot(
            equity=float(account.equity),
            last_equity=float(account.last_equity),
            cash=float(account.cash),
            buying_power=float(account.buying_power),
            positions=positions,
        )

    def buy(self, symbol: str, notional_usd: float) -> dict:
        order = self.client.submit_order(MarketOrderRequest(
            symbol=symbol,
            notional=round(notional_usd, 2),
            side=OrderSide.BUY,
            time_in_force=TimeInForce.DAY,  # required for notional orders
        ))
        return {"id": str(order.id), "symbol": symbol, "side": "buy",
                "notional_usd": round(notional_usd, 2), "status": str(order.status)}

    def sell(self, symbol: str, notional_usd: float, position_value: float) -> dict:
        # Selling ~the whole position: close it outright to avoid leaving dust.
        if notional_usd >= position_value * 0.95:
            order = self.client.close_position(symbol)
            return {"id": str(order.id), "symbol": symbol, "side": "sell",
                    "notional_usd": round(position_value, 2), "status": str(order.status),
                    "closed_position": True}
        order = self.client.submit_order(MarketOrderRequest(
            symbol=symbol,
            notional=round(notional_usd, 2),
            side=OrderSide.SELL,
            time_in_force=TimeInForce.DAY,
        ))
        return {"id": str(order.id), "symbol": symbol, "side": "sell",
                "notional_usd": round(notional_usd, 2), "status": str(order.status)}
