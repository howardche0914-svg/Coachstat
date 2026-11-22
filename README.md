# Coachstat
CoachStat website for basketball and soccer team stats tracking

## AI Trading Agent (autonomous, paper trading)
`trading-agent/` is an autonomous stock trading agent: it researches the
market online with Claude + live web search, produces a buy/sell/hold plan,
runs it through hard code-level risk guardrails, and executes on an Alpaca
**paper** (simulated-money) brokerage account. See `trading-agent/README.md`
for setup. It does not touch real money unless explicitly enabled, and no
AI can guarantee profitable decisions.

## StockPilot AI (paper trading app)
`stock-agent/index.html` is a standalone stock trading practice app:
a simulated market of 12 US and 8 Taiwan stocks (with trends, news headlines,
whole-market moves, daily recaps and Taiwan's 10% price limit), a virtual
$100,000 paper-trading account, a Coach that summarizes each stock and
suggests what a careful trader might do, an optional auto-pilot, and a Learn
tab with 12 beginner lessons and quizzes. All prices and news are simulated
and no real money or brokerage account is involved. Open the file in any
browser — no build step or server needed.
