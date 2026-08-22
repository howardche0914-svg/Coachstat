"""Configuration for the AI trading agent.

Everything is driven by environment variables (see .env.example) with
conservative defaults. Risk limits here are enforced in code by risk.py —
the AI model cannot override them.
"""

import os
from dataclasses import dataclass, field

from dotenv import load_dotenv

load_dotenv()


def _env_float(name: str, default: float) -> float:
    try:
        return float(os.environ.get(name, default))
    except ValueError:
        return default


def _env_int(name: str, default: int) -> int:
    try:
        return int(os.environ.get(name, default))
    except ValueError:
        return default


@dataclass
class Settings:
    # --- Anthropic ---
    model: str = os.environ.get("AGENT_MODEL", "claude-opus-5")

    # --- Alpaca ---
    alpaca_api_key: str = os.environ.get("ALPACA_API_KEY", "")
    alpaca_secret_key: str = os.environ.get("ALPACA_SECRET_KEY", "")
    # Paper trading is the default. Live trading additionally requires
    # CONFIRM_LIVE_TRADING to be set to the exact confirmation phrase.
    paper: bool = os.environ.get("ALPACA_PAPER", "true").lower() != "false"
    live_confirmation: str = os.environ.get("CONFIRM_LIVE_TRADING", "")

    # --- Universe ---
    watchlist: list[str] = field(default_factory=lambda: [
        s.strip().upper()
        for s in os.environ.get(
            "WATCHLIST",
            "AAPL,MSFT,NVDA,GOOGL,AMZN,META,TSLA,SPY,QQQ,JPM",
        ).split(",")
        if s.strip()
    ])

    # --- Risk limits (enforced in code, not by the AI) ---
    max_order_usd: float = _env_float("MAX_ORDER_USD", 2_000.0)
    max_position_pct: float = _env_float("MAX_POSITION_PCT", 10.0)
    cash_reserve_pct: float = _env_float("CASH_RESERVE_PCT", 10.0)
    min_confidence: float = _env_float("MIN_CONFIDENCE", 0.6)
    max_trades_per_run: int = _env_int("MAX_TRADES_PER_RUN", 4)
    max_daily_loss_pct: float = _env_float("MAX_DAILY_LOSS_PCT", 3.0)
    allow_shorting: bool = False  # deliberately not configurable via env

    # --- Research ---
    max_web_searches: int = _env_int("MAX_WEB_SEARCHES", 12)

    # --- Loop mode ---
    loop_interval_minutes: int = _env_int("LOOP_INTERVAL_MINUTES", 60)

    def validate(self) -> list[str]:
        problems = []
        if not os.environ.get("ANTHROPIC_API_KEY"):
            problems.append("ANTHROPIC_API_KEY is not set")
        if not self.alpaca_api_key or not self.alpaca_secret_key:
            problems.append("ALPACA_API_KEY / ALPACA_SECRET_KEY are not set")
        if not self.watchlist:
            problems.append("WATCHLIST is empty")
        return problems


LIVE_CONFIRMATION_PHRASE = "I understand this trades real money"

settings = Settings()
