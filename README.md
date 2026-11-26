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
`stock-agent/index.html` is a standalone stock trading practice app with
two zones, each with its own $100,000 virtual account and journal: a
Practice zone where prices move all the time (~1-minute trading days), and
a Real-hours zone where Taiwan stocks move only during Taiwan trading hours
(Mon–Fri 9:00–13:30 Taipei) and US stocks only during US hours (Mon–Fri
9:30–16:00 New York); closed markets can't be traded there, and sessions
missed while the page was closed are filled in on return. It has
a simulated market of 12 US and 8 Taiwan stocks (with trends, news headlines,
whole-market moves, daily recaps and Taiwan's 10% price limit), a virtual
$100,000 paper-trading account, a Coach that summarizes each stock and
suggests what a careful trader might do, an optional auto-pilot, a trade
Journal that records every buy and sell and reviews each step against the
lessons' rules, and a Learn tab with 20 lessons in 5 units (each with an
animated, narrated video, a 3-question quiz and a hands-on mission), XP,
levels, badges, daily streaks, a 45-word stock and economics vocabulary
and a flashcard game. The price chart has 1M / 3M / 6M /
All ranges and an enlarged view with both moving averages and your trades
marked. The whole app is available in English, Traditional Chinese
(繁體中文) and Simplified Chinese (简体中文). All prices and news are simulated
and no real money or brokerage account is involved. Open the file in any
browser — no build step or server needed.
