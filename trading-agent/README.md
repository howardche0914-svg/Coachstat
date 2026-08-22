# AI Stock Trading Agent

An autonomous trading agent that researches the market online and trades a
brokerage account on its own:

1. **Snapshot** — reads your account equity, cash, and positions from Alpaca.
2. **Research** — Claude uses live web search to read current news, earnings,
   analyst commentary, and market conditions for your watchlist and holdings.
3. **Decide** — the research is turned into a structured buy/sell/hold plan
   with a dollar amount, a confidence score, and reasoning for every symbol.
4. **Risk check** — hard guardrails written in code (not controllable by the
   AI) cap position sizes, keep a cash reserve, skip low-confidence ideas,
   limit trades per run, and halt everything after a bad day.
5. **Execute & log** — surviving orders are placed as market orders and every
   cycle is journaled to `logs/journal.jsonl` (portfolio state, full research
   report, the plan, what was rejected and why, and order results).

## ⚠️ Read this first

**No AI can "make the right decision all the time."** Markets are not
reliably predictable — not by AI, not by professionals. This agent is built
to trade a **paper (simulated-money) account** so you can watch how it
performs with zero financial risk. It uses real live market prices and real
order mechanics, just not real dollars.

Live trading is deliberately hard to turn on, and you should only ever
consider it after months of watching paper results — and even then, nothing
here is financial advice, and losses are entirely possible.

## Setup (about 10 minutes)

1. **Get free API keys**
   - Anthropic (the AI): https://console.anthropic.com/ → API keys
   - Alpaca (the broker): https://app.alpaca.markets/ → sign up, switch to
     the **Paper** account (top-left), then generate API keys. Paper accounts
     are free and come with $100,000 of simulated money.

2. **Install**

   ```bash
   cd trading-agent
   python3 -m venv .venv && source .venv/bin/activate
   pip install -r requirements.txt
   cp .env.example .env
   # edit .env and paste in your three keys
   ```

3. **First run** — do a dry run: it researches and plans but places no orders.

   ```bash
   python agent.py --dry-run --force
   ```

4. **Let it trade (paper account)**

   ```bash
   python agent.py            # one cycle, only when the market is open
   python agent.py --loop     # a cycle every hour during market hours
   ```

   To run it on a schedule instead of `--loop`, a cron entry works well:

   ```
   # every weekday at 10:30 New York time (adjust for your timezone)
   30 10 * * 1-5  cd /path/to/trading-agent && .venv/bin/python agent.py
   ```

## Tuning it

All knobs live in `.env` (see `.env.example` for descriptions): the
watchlist, order/position caps, cash reserve, the confidence bar a trade has
to clear, the daily-loss circuit breaker, and how many web searches the AI
may run per cycle. Shorting is disabled entirely and is not configurable.

## What each file does

| File | Role |
|---|---|
| `agent.py` | Entry point — runs the cycle, wires everything together, logs |
| `brain.py` | The AI: web research phase + structured decision phase |
| `risk.py` | Hard guardrails applied to the AI's plan before execution |
| `broker.py` | Alpaca wrapper: account snapshot, market clock, orders |
| `config.py` | Settings loaded from `.env` |
| `logs/journal.jsonl` | One JSON line per cycle — the full audit trail |

## Reviewing performance

Every cycle appends a JSON line to `logs/journal.jsonl` containing the
equity, the research report, every decision with its reasoning, what the
risk checks rejected, and the order results. Your Alpaca paper dashboard
shows the equity curve over time.
