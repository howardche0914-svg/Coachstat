"""The AI brain: research the market online, then produce a structured trade plan.

Two phases per cycle:
  1. research() — Claude with the server-side web search tool reads current news,
     prices, earnings, and analyst commentary for the watchlist and holdings.
  2. decide()   — a second call converts that research into a validated,
     machine-readable TradePlan (Pydantic schema).

The plan is advisory only; risk.py has final say before any order is placed.
"""

from typing import List, Literal

import anthropic
from pydantic import BaseModel, Field

from config import settings

client = anthropic.Anthropic()

MAX_PAUSE_RESTARTS = 5

RESEARCH_SYSTEM = """You are the research analyst for a small, disciplined stock \
portfolio. You manage it cautiously: you would rather miss an opportunity than \
take a bad risk, you never chase hype, and you accept that markets cannot be \
predicted reliably.

Use web search to gather CURRENT information before forming any view:
- today's overall market conditions and any major macro news
- recent news, earnings, and analyst commentary for each holding and watchlist symbol
- anything that materially changes the thesis for a position already held

Then write a concise research report with one short section per symbol that has \
something actionable, and a final section listing which symbols look like buys, \
sells, or holds and why. Flag how confident you are and what could prove you wrong. \
If the news is stale or you could not verify something, say so instead of guessing."""

DECIDE_SYSTEM = """You convert a stock research report into a concrete trade plan \
for a cautious portfolio. Rules:
- Only include symbols from the provided watchlist or current positions.
- 'sell' only for symbols currently held. Never propose short selling.
- notional_usd is the dollar amount to trade. Keep individual trades modest \
relative to the portfolio; it is normal for most symbols to be 'hold'.
- confidence is your honest 0-1 estimate; use low values when the evidence is thin.
- Doing nothing is a perfectly good plan. Do not trade for the sake of trading."""


class Decision(BaseModel):
    symbol: str = Field(description="Ticker symbol, e.g. AAPL")
    action: Literal["buy", "sell", "hold"]
    notional_usd: float = Field(description="Dollar amount to trade; 0 for hold")
    confidence: float = Field(ge=0, le=1)
    reasoning: str = Field(description="One or two sentences citing the research")


class TradePlan(BaseModel):
    market_summary: str = Field(description="Two or three sentences on overall conditions")
    decisions: List[Decision]


def research(portfolio_description: str) -> str:
    """Run the web-research phase and return the report text."""
    prompt = (
        f"Here is the portfolio right now:\n\n{portfolio_description}\n\n"
        f"Watchlist: {', '.join(settings.watchlist)}\n\n"
        "Research current market conditions and these symbols, then write your report."
    )
    messages = [{"role": "user", "content": prompt}]

    restarts = 0
    while True:
        response = client.messages.create(
            model=settings.model,
            max_tokens=16000,
            system=RESEARCH_SYSTEM,
            thinking={"type": "adaptive"},
            output_config={"effort": "high"},
            tools=[{
                "type": "web_search_20260209",
                "name": "web_search",
                "max_uses": settings.max_web_searches,
            }],
            messages=messages,
        )
        if response.stop_reason == "pause_turn":
            restarts += 1
            if restarts > MAX_PAUSE_RESTARTS:
                break
            messages = [
                {"role": "user", "content": prompt},
                {"role": "assistant", "content": response.content},
            ]
            continue
        break

    report = "\n\n".join(b.text for b in response.content if b.type == "text")
    if not report.strip():
        raise RuntimeError("Research phase returned no text report")
    return report


def decide(report: str, portfolio_description: str) -> TradePlan:
    """Convert the research report into a validated TradePlan."""
    response = client.messages.parse(
        model=settings.model,
        max_tokens=16000,
        system=DECIDE_SYSTEM,
        messages=[{
            "role": "user",
            "content": (
                f"Portfolio:\n{portfolio_description}\n\n"
                f"Watchlist: {', '.join(settings.watchlist)}\n\n"
                f"Research report:\n{report}\n\n"
                "Produce the trade plan."
            ),
        }],
        output_format=TradePlan,
    )
    plan = response.parsed_output
    if plan is None:
        raise RuntimeError("Decision phase returned no parseable trade plan")
    return plan
