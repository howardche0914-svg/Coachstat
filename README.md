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
a Real-hours zone where each market moves only during its own trading hours
(including Tokyo's and Hong Kong's lunch breaks and Saudi Arabia's
Sunday–Thursday week); closed markets can't be traded there, and sessions
missed while the page was closed are filled in on return. It has
a simulated market of 77 stocks from 7 markets: 26 US (including S&P 500 and
Nasdaq-100 ETFs), 20 Taiwan, 7 Japan, 6 India, 6 Hong Kong, 7 Europe and
5 Saudi Arabia, each priced in its own currency, with a market menu and
search box, trends, news headlines, whole-market moves, daily recaps and the
10% daily price limits of Taiwan and Saudi Arabia. It also has a virtual
$100,000 paper-trading account, a Coach that summarizes each stock and
suggests what a careful trader might do, an optional auto-pilot, a trade
Journal that records every buy and sell and reviews each step against the
lessons' rules, and a Learn tab with 20 lessons in 5 units (each with an
animated, narrated video, a 3-question quiz and a hands-on mission), XP,
levels, badges, daily streaks, a 45-word stock and economics vocabulary
and a flashcard game. The price chart has 1M / 3M / 6M /
All ranges and an enlarged view with both moving averages and your trades
marked. The whole app, including every lesson, video and vocabulary
word, is available in 8 languages: English, Traditional Chinese (繁體中文),
Simplified Chinese (简体中文), Spanish (Español), French (Français), Hindi
(हिन्दी), Arabic (العربية, right-to-left) and Bengali (বাংলা). All prices and news are simulated
and no real money or brokerage account is involved. Open the file in any
browser — no build step or server needed.

### StockPilot Plus (paid features, free during the preview)
Plus features are marked with a **PLUS** tag. They are free for now: in
`stock-agent/src/plus.js`, `PLUS.requirePayment` is `false`. Setting it to
`true` shows a locked "Upgrade to Plus" screen instead; before charging for
real, `plusUnlocked()` must be connected to an account system and a payment
service (for example Stripe) that is checked on a server.

- **History challenges:** replay 6 famous market events (the dot-com bubble,
  the 2008 financial crisis, the COVID crash, the 2022 rate shock, the AI chip
  boom and TSMC's 2022–2024 fall and comeback) with $10,000 of virtual money.
  Prices follow the shape of each real event with approximate numbers, real
  headlines pause the game, and the results compare you with buying and
  holding or staying in cash, award up to 3 stars and XP, and explain what
  really happened.
