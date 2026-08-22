"""AI stock trading agent — main entry point.

One cycle = snapshot the portfolio, research the market online, get a trade
plan from Claude, pass it through the code-level risk guardrails, execute
what survives on the (paper) brokerage account, and log everything.

Usage:
  python agent.py               # one cycle (skips if market is closed)
  python agent.py --dry-run     # research + plan, but place no orders
  python agent.py --force       # run even if the market is closed
  python agent.py --loop        # keep running a cycle every LOOP_INTERVAL_MINUTES
"""

import argparse
import json
import time
from datetime import datetime, timezone
from pathlib import Path

import brain
import risk
from broker import Broker
from config import settings

LOG_DIR = Path(__file__).parent / "logs"


def log_cycle(entry: dict) -> None:
    LOG_DIR.mkdir(exist_ok=True)
    with open(LOG_DIR / "journal.jsonl", "a") as f:
        f.write(json.dumps(entry, default=str) + "\n")


def run_cycle(broker: Broker, dry_run: bool = False, force: bool = False) -> None:
    started = datetime.now(timezone.utc).isoformat()

    if not force and not broker.market_is_open():
        print("Market is closed — skipping this cycle (use --force to override).")
        return

    snapshot = broker.snapshot()
    portfolio = snapshot.describe()
    print(f"=== Cycle started {started} ({'PAPER' if settings.paper else 'LIVE'}) ===")
    print(portfolio)

    print("\nResearching the market online (this can take a few minutes)...")
    report = brain.research(portfolio)
    print("\n--- Research report ---\n" + report)

    print("\nBuilding trade plan...")
    plan = brain.decide(report, portfolio)
    print(f"\nMarket summary: {plan.market_summary}")
    for d in plan.decisions:
        print(f"  {d.action.upper():5} {d.symbol:6} ${d.notional_usd:,.0f}  "
              f"(confidence {d.confidence:.2f}) — {d.reasoning}")

    review = risk.review(plan, snapshot)
    if review.halted:
        print(f"\n⛔ {review.halt_reason}")
    for reason in review.rejected:
        print(f"  risk-check rejected: {reason}")

    executed = []
    if dry_run:
        print("\nDRY RUN — no orders placed.")
        for order in review.approved:
            print(f"  would {order.side} {order.symbol} for ${order.notional_usd:,.2f}")
    else:
        for order in review.approved:
            try:
                if order.side == "buy":
                    result = broker.buy(order.symbol, order.notional_usd)
                else:
                    result = broker.sell(order.symbol, order.notional_usd, order.position_value)
                executed.append(result)
                print(f"  ✅ {result['side']} {result['symbol']} ${result['notional_usd']:,.2f} "
                      f"→ {result['status']}")
            except Exception as e:
                executed.append({"symbol": order.symbol, "side": order.side, "error": str(e)})
                print(f"  ❌ {order.side} {order.symbol} failed: {e}")

    log_cycle({
        "started": started,
        "mode": "paper" if settings.paper else "live",
        "dry_run": dry_run,
        "equity": snapshot.equity,
        "daily_change_pct": snapshot.daily_change_pct,
        "market_summary": plan.market_summary,
        "decisions": [d.model_dump() for d in plan.decisions],
        "rejected": review.rejected,
        "halted": review.halted,
        "halt_reason": review.halt_reason,
        "executed": executed,
        "report": report,
    })
    print(f"\nCycle logged to {LOG_DIR / 'journal.jsonl'}")


def main() -> None:
    parser = argparse.ArgumentParser(description="AI stock trading agent (paper trading by default)")
    parser.add_argument("--dry-run", action="store_true", help="research and plan, but place no orders")
    parser.add_argument("--force", action="store_true", help="run even if the market is closed")
    parser.add_argument("--loop", action="store_true",
                        help=f"run a cycle every {settings.loop_interval_minutes} minutes")
    args = parser.parse_args()

    problems = settings.validate()
    if problems:
        raise SystemExit("Configuration problems:\n  - " + "\n  - ".join(problems))

    broker = Broker()

    if args.loop:
        while True:
            try:
                run_cycle(broker, dry_run=args.dry_run, force=args.force)
            except Exception as e:
                print(f"Cycle failed: {e}")
            print(f"Sleeping {settings.loop_interval_minutes} minutes...\n")
            time.sleep(settings.loop_interval_minutes * 60)
    else:
        run_cycle(broker, dry_run=args.dry_run, force=args.force)


if __name__ == "__main__":
    main()
