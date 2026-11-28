/* ============ More lessons, quizzes, missions and videos ============ */
// Q(answerIndex, [question, options, why] in English, [...] in Chinese)
const Q = (a, en, zh) => ({ a, en: { q: en[0], opts: en[1], why: en[2] }, zh: { q: zh[0], opts: zh[1], why: zh[2] } });
// S(visual, params, English caption, Chinese caption, labels {en, zh})
const S = (v, p, en, zh, lab) => ({ v, p: p || {}, en, zh, lab });
const M = (en, zh, check) => ({ en, zh, check });
const youTrades = () => state.journal.filter(e => e.by === "you");

const NEW_LESSONS = [
  {
    id: "orders", a: 0, tryIt: {},
    data: () => { const s = selected, p = price(s); return { s, p: fmtP(s, p), p10: fmtP(s, 10 * p) }; },
    en: {
      title: "Order types: market, limit and stop", try: "Go to Trade",
      body: d => `
        <p>An <b>order</b> is your instruction to buy or sell. The type of order decides <i>when</i> it happens and <i>at what price</i>.</p>
        <ul>
          <li><b>Market order:</b> buy or sell right now at the current price. Fast, but the price can move a little before it fills.</li>
          <li><b>Limit order:</b> only buy at your price or lower, or only sell at your price or higher. You control the price, but it may never fill.</li>
          <li><b>Stop order:</b> turns into a market order once the price reaches a level you set. A <b>stop-loss</b> is a stop order that sells to limit a loss.</li>
        </ul>
        <p>You don't have to sell everything at once, either. Selling <b>part</b> of a position is a common way to lock in some profit or lower your risk.</p>
        ${key("market = now, limit = your price, stop = an automatic exit.")}
        ${live(`In StockPilot you can use all three: pick Market, Limit or Stop-loss above the Buy and Sell buttons. ${d.s} is <b>${d.p}</b> right now, so a market order for 10 shares would cost about <b>${d.p10}</b>.`)}`,
      q: "You want to buy a stock, but only if it drops to $95. It is $100 now. Which order fits?",
      opts: ["A limit order at $95", "A market order", "A stop order at $105"],
      why: "A limit order at $95 only goes through at $95 or lower.",
    },
    zh: {
      title: "下單方式：市價單、限價單和停損單", try: "前往交易",
      body: d => `
        <p><b>委託單</b>就是你買進或賣出的指令。委託的種類決定交易<i>什麼時候</i>、以<i>什麼價格</i>成交。</p>
        <ul>
          <li><b>市價單：</b>以現在的價格立刻買進或賣出。很快，但成交前價格可能會小幅變動。</li>
          <li><b>限價單：</b>只在你指定的價格或更低時買進，或只在指定價格或更高時賣出。價格由你控制，但可能一直不會成交。</li>
          <li><b>停損單：</b>價格碰到你設定的水準時，就變成市價單。<b>停損</b>就是用停損單賣出，來限制虧損。</li>
        </ul>
        <p>你也不一定要一次全部賣掉。賣出<b>部分</b>持股，是鎖住部分獲利或降低風險的常見做法。</p>
        ${key("市價單＝現在成交，限價單＝你的價格，停損單＝自動出場。")}
        ${live(`在 StockPilot 裡三種都能用：在「買進」「賣出」按鈕上方選擇市價、限價或停損。${d.s} 現在是 <b>${d.p}</b>，所以用市價單買 10 股約需 <b>${d.p10}</b>。`)}`,
      q: "你想買一檔股票，但只在它跌到 $95 時才買。現在是 $100。哪一種委託適合？",
      opts: ["$95 的限價單", "市價單", "$105 的停損單"],
      why: "$95 的限價單只會在 $95 或更低時成交。",
    },
  },
  {
    id: "psychology", a: 0, tryIt: { goto: "journal" },
    data: () => { const mine = youTrades(); return { n: mine.length, r: mine.filter(e => normGrade(e.grade) === "risky").length }; },
    en: {
      title: "Your emotions: fear, greed and FOMO", try: "Open the Journal",
      body: d => `
        <p>The hardest part of trading is often not the math. It's <b>you</b>. Two feelings cause most mistakes:</p>
        <ul>
          <li><b>Greed and FOMO</b> (fear of missing out): buying something just because it has gone up and everyone is talking about it.</li>
          <li><b>Fear and panic:</b> selling after a sudden drop, often right at the bottom.</li>
        </ul>
        <p>Other common traps: holding a losing stock too long because selling feels like admitting a mistake, and trading too often because doing something feels better than waiting.</p>
        <p>The fix is a <b>plan written before you trade</b>, plus a habit of reviewing your trades. That's what the Journal tab is for.</p>
        ${key("make the plan when you're calm, then follow it when you're not.")}
        ${live(d.n ? `Your Journal has <b>${d.n}</b> of your trades in this zone, and <b>${d.r}</b> were rated Risky steps. Open the Journal to see what to work on.` : "You haven't made any trades in this zone yet. After you do, the Journal will show which habits to work on.")}`,
      q: "A stock went up 40% this month and everyone online is talking about it. Which feeling might push you to buy without a plan?",
      opts: ["FOMO, the fear of missing out", "Patience", "Diversification"],
      why: "FOMO makes a rising stock feel like a train you must catch. A plan helps you check whether it really fits.",
    },
    zh: {
      title: "你的情緒：恐懼、貪婪和 FOMO", try: "打開交易日誌",
      body: d => `
        <p>交易最難的部分往往不是數學，而是<b>你自己</b>。大多數錯誤來自兩種感覺：</p>
        <ul>
          <li><b>貪婪和 FOMO</b>（錯失恐懼）：只因為某檔股票漲了、大家都在討論，就跟著買。</li>
          <li><b>恐懼和恐慌：</b>突然下跌後就賣出，常常正好賣在最低點。</li>
        </ul>
        <p>其他常見陷阱：虧錢的股票抱太久，因為賣掉就像承認自己錯了；還有交易太頻繁，因為「做點什麼」感覺比等待舒服。</p>
        <p>解決方法是<b>在交易前寫好計畫</b>，再養成檢討交易的習慣。這正是交易日誌的用途。</p>
        ${key("冷靜的時候訂計畫，不冷靜的時候照著計畫做。")}
        ${live(d.n ? `這個區的交易日誌裡有 <b>${d.n}</b> 筆你的交易，其中 <b>${d.r}</b> 筆被評為冒險的一步。打開交易日誌，看看哪裡需要加強。` : "你在這個區還沒有任何交易。交易之後，交易日誌會告訴你哪些習慣需要加強。")}`,
      q: "一檔股票這個月漲了 40%，網路上大家都在討論。哪種感覺可能讓你沒有計畫就買進？",
      opts: ["FOMO，錯失恐懼", "耐心", "分散投資"],
      why: "FOMO 會讓上漲的股票感覺像一定要趕上的火車。有計畫可以幫你確認它是否真的適合。",
    },
  },
  {
    id: "compound", a: 0, tryIt: {},
    data: () => ({ v: fmt$(1000 * Math.pow(1.08, 30)) }),
    en: {
      title: "Time and compound growth", try: "Go to Trade",
      body: d => `
        <p><b>Compound growth</b> means your gains start earning gains of their own. If you earn 8% in a year, the next year you earn 8% on a bigger amount, and so on.</p>
        <p>The longer you wait, the faster it grows. That's why time is one of an investor's best friends, and why starting early matters more than starting big.</p>
        <ul>
          <li>$1,000 growing 8% a year becomes about <b>$1,469</b> after 5 years, <b>$2,159</b> after 10, and <b>$4,661</b> after 20.</li>
          <li>Losses compound too: after a 50% loss you need a 100% gain just to get back to even.</li>
        </ul>
        <p>Real markets don't grow by the same amount every year, and some years are down. The 8% here is only an example.</p>
        ${key("time × steady growth beats trying to get rich fast.")}
        ${live(`If you put <b>$1,000</b> into a fund that grew 8% a year, you'd have about <b>${d.v}</b> after 30 years, without adding anything.`)}`,
      q: "$1,000 grows 10% a year. About how much is it after 2 years?",
      opts: ["$1,210", "$1,200", "$1,100"],
      why: "Year 1: $1,100. Year 2: 10% of $1,100 is $110, so $1,210. The extra $10 is compounding.",
    },
    zh: {
      title: "時間和複利", try: "前往交易",
      body: d => `
        <p><b>複利</b>是指你賺到的錢會再幫你賺錢。如果一年賺 8%，第二年就是在更大的金額上再賺 8%，一直這樣下去。</p>
        <p>時間越長，成長得越快。所以時間是投資人最好的朋友之一，這也是為什麼「早點開始」比「一次投很多」更重要。</p>
        <ul>
          <li>$1,000 每年成長 8%，5 年後約 <b>$1,469</b>，10 年後約 <b>$2,159</b>，20 年後約 <b>$4,661</b>。</li>
          <li>虧損也會累積：虧 50% 之後，要賺 100% 才能回本。</li>
        </ul>
        <p>真實市場不會每年都成長一樣多，有些年份會下跌。這裡的 8% 只是例子。</p>
        ${key("時間 × 穩定成長，勝過想要快速致富。")}
        ${live(`如果把 <b>$1,000</b> 放進每年成長 8% 的基金，就算不再加錢，30 年後約有 <b>${d.v}</b>。`)}`,
      q: "$1,000 每年成長 10%。2 年後大約是多少？",
      opts: ["$1,210", "$1,200", "$1,100"],
      why: "第 1 年：$1,100。第 2 年：$1,100 的 10% 是 $110，所以是 $1,210。多出來的 $10 就是複利。",
    },
  },
  {
    id: "dividends", a: 0, tryIt: { sym: "2412" },
    data: () => { const p = price("2412"); return { p: fmtP("2412", p), y: (5 / p * 100).toFixed(1) + "%" }; },
    en: {
      title: "Dividends: getting paid to own a stock", try: "Look at Chunghwa Telecom (2412)",
      body: d => `
        <p>Some companies share part of their profits with shareholders as cash. That cash is a <b>dividend</b>, usually paid one to four times a year.</p>
        <p>The <b>dividend yield</b> compares the yearly dividend with the share price. A $100 stock that pays $4 a year has a 4% yield.</p>
        <ul>
          <li>Steady, mature companies such as telecoms and banks often pay dividends. Fast-growing companies often pay little or nothing and reinvest in growth instead.</li>
          <li>Many investors <b>reinvest</b> dividends to buy more shares, which makes compound growth stronger.</li>
          <li>A very high yield can be a warning sign: sometimes the price has fallen because the business is in trouble, and the dividend may be cut.</li>
        </ul>
        <p>Taiwan investors are known for loving dividends, and the yearly ex-dividend season (除權息) is a big event.</p>
        ${key("a dividend is cash from profits; yield = yearly dividend ÷ price.")}
        ${live(`Chunghwa Telecom (2412) is <b>${d.p}</b> per share in the simulator. If it paid NT$5 a year, its yield would be about <b>${d.y}</b>. StockPilot doesn't pay dividends yet; this is just an example.`)}`,
      q: "A $50 stock pays $2 in dividends a year. What is its dividend yield?",
      opts: ["4%", "2%", "25%"],
      why: "$2 ÷ $50 = 0.04, which is 4%.",
    },
    zh: {
      title: "股利：持有股票也能領錢", try: "看中華電（2412）",
      body: d => `
        <p>有些公司會把部分獲利用現金分給股東，這筆錢叫做<b>股利</b>（股息），通常一年發一到四次。</p>
        <p><b>殖利率</b>是一年股利和股價的比較。股價 $100、一年發 $4，殖利率就是 4%。</p>
        <ul>
          <li>穩定、成熟的公司（例如電信、銀行）常常發股利。快速成長的公司常常發很少或不發，把錢拿去投資成長。</li>
          <li>很多投資人會把股利<b>再投入</b>買更多股票，讓複利效果更強。</li>
          <li>殖利率特別高可能是警訊：有時候是因為公司出問題、股價大跌，股利也可能被砍。</li>
        </ul>
        <p>台灣投資人以喜歡股利聞名，每年的除權息季是一件大事。</p>
        ${key("股利是來自獲利的現金；殖利率 = 一年股利 ÷ 股價。")}
        ${live(`中華電（2412）在模擬器裡每股 <b>${d.p}</b>。如果一年發 NT$5，殖利率約為 <b>${d.y}</b>。StockPilot 目前不會發放股利，這只是例子。`)}`,
      q: "一檔 $50 的股票一年發 $2 股利。殖利率是多少？",
      opts: ["4%", "2%", "25%"],
      why: "$2 ÷ $50 = 0.04，也就是 4%。",
    },
  },
  {
    id: "valuation", a: 0, tryIt: { vocab: "P/E" },
    data: () => ({}),
    en: {
      title: "Cheap or expensive? The P/E ratio", try: "Find P/E in the Vocabulary",
      body: () => `
        <p>A stock's price alone doesn't tell you whether it's cheap. A $1,000 stock can be a bargain and a $10 stock can be overpriced. What matters is the price compared with what the company <b>earns</b>.</p>
        <p>The <b>P/E ratio</b> (price-to-earnings) divides the share price by the company's yearly profit per share, called <b>EPS</b>. A P/E of 20 means investors pay $20 for every $1 of yearly profit.</p>
        <ul>
          <li>A <b>high P/E</b> often means investors expect fast growth. If that growth doesn't come, the price can fall hard.</li>
          <li>A <b>low P/E</b> can mean a bargain, or a business people are worried about.</li>
          <li>Compare P/E with similar companies in the same industry, not across very different ones.</li>
        </ul>
        ${key("price alone tells you very little; compare it with earnings.")}
        ${live("StockPilot doesn't show earnings, so try an example: a $60 stock that earns $3 per share has a P/E of <b>20</b>. If the price rises to $90 while earnings stay at $3, the P/E becomes <b>30</b>: the stock got more expensive.")}`,
      q: "A stock costs $40 and earns $2 per share each year. What is its P/E?",
      opts: ["20", "80", "2"],
      why: "$40 ÷ $2 = 20.",
    },
    zh: {
      title: "便宜還是貴？本益比", try: "在詞彙表中找本益比",
      body: () => `
        <p>只看股價，看不出一檔股票便不便宜。$1,000 的股票可能很划算，$10 的股票也可能太貴。重點是股價和公司<b>賺多少錢</b>的比較。</p>
        <p><b>本益比</b>（P/E）是股價除以公司每股一年的獲利，也就是<b>每股盈餘（EPS）</b>。本益比 20 代表投資人花 $20 買每年 $1 的獲利。</p>
        <ul>
          <li><b>本益比高</b>通常代表投資人預期快速成長。如果成長沒有出現，股價可能會大跌。</li>
          <li><b>本益比低</b>可能是便宜貨，也可能是大家擔心的公司。</li>
          <li>要和同產業的類似公司比較本益比，不要拿差很多的公司來比。</li>
        </ul>
        ${key("只看股價沒有什麼意義，要和獲利一起比較。")}
        ${live("StockPilot 沒有顯示公司獲利，所以用例子練習：股價 $60、每股賺 $3，本益比就是 <b>20</b>。如果股價漲到 $90，但每股獲利還是 $3，本益比就變成 <b>30</b>：這檔股票變貴了。")}`,
      q: "一檔股票價格 $40，每股一年賺 $2。本益比是多少？",
      opts: ["20", "80", "2"],
      why: "$40 ÷ $2 = 20。",
    },
  },
  {
    id: "cycles", a: 0, tryIt: { range: "all" },
    data: () => {
      const s = selected, a = series(s), hi = Math.max(...a.slice(-130)), dd = Math.max(0, 1 - price(s) / hi);
      return { s, dd: (dd * 100).toFixed(1) + "%", zone: dd >= 0.2 ? 2 : dd >= 0.1 ? 1 : 0 };
    },
    en: {
      title: "Bull markets, bear markets and cycles", try: "See the whole chart history",
      body: d => `
        <p>Markets move in long waves. A <b>bull market</b> is a long period of rising prices. A <b>bear market</b> is a fall of 20% or more from a recent high.</p>
        <p>Smaller drops of about 10% are called <b>corrections</b>. They happen fairly often, even inside bull markets.</p>
        <ul>
          <li>Bear markets feel scary, but so far the US stock market has eventually recovered from every one of them, though some took years.</li>
          <li>Nobody can reliably call the top or the bottom. Investors who stay diversified and patient usually do better than those who jump in and out.</li>
        </ul>
        ${key("ups and downs are normal; time and diversification help you ride them out.")}
        ${live(`${d.s} is <b>${d.dd}</b> below its 6-month high. ${["That's a normal wiggle.", "That's correction territory.", "A fall this big would be called a bear market for this stock."][d.zone]}`)}`,
      q: "The market falls 25% from its high. What is that called?",
      opts: ["A bear market", "A bull market", "A dividend"],
      why: "A fall of 20% or more from a recent high is a bear market.",
    },
    zh: {
      title: "牛市、熊市和景氣循環", try: "看完整的走勢歷史",
      body: d => `
        <p>市場會以長長的波浪移動。<b>牛市</b>（多頭市場）是價格長期上漲的時期，<b>熊市</b>（空頭市場）是從近期高點下跌 20% 以上。</p>
        <p>約 10% 的較小跌幅叫做<b>修正</b>，即使在牛市中也經常發生。</p>
        <ul>
          <li>熊市讓人害怕，但到目前為止，美國股市每次熊市後最終都恢復了，只是有些花了好幾年。</li>
          <li>沒有人能可靠地猜中最高點或最低點。保持分散、有耐心的投資人，通常比頻繁進出的人表現更好。</li>
        </ul>
        ${key("漲漲跌跌很正常；時間和分散投資能幫你度過起伏。")}
        ${live(`${d.s} 比 6 個月內的最高點低了 <b>${d.dd}</b>。${["這是正常的波動。", "這已經是修正的幅度。", "跌這麼多，對這檔股票來說就是熊市了。"][d.zone]}`)}`,
      q: "市場從高點下跌 25%。這叫做什麼？",
      opts: ["熊市", "牛市", "股利"],
      why: "從近期高點下跌 20% 以上就是熊市。",
    },
  },
  {
    id: "economy", a: 0, tryIt: { vocabCat: "economy" },
    data: () => { const ms = state.news.filter(n => n.kind === "mkt"); return { n: ms.length, h: ms[0] ? newsHeadline(ms[0]) : null, c: ms[0] ? fmtPct(ms[0].chg) : "" }; },
    en: {
      title: "Interest rates, inflation and the economy", try: "Open the Economy words",
      body: d => `
        <p>Stocks don't live in a bubble. The whole economy affects them, and three things matter most:</p>
        <ul>
          <li><b>Interest rates</b> are the cost of borrowing money, set mainly by the central bank (the Federal Reserve in the US, the Central Bank in Taiwan). Higher rates make borrowing expensive and savings more attractive, which often pushes stock prices down. Lower rates often help them.</li>
          <li><b>Inflation</b> means the prices of everyday things rise. High inflation usually leads central banks to raise rates.</li>
          <li><b>Economic growth</b> (GDP), jobs and exports. A growing economy usually means growing company profits. Exports matter a lot for Taiwan, especially chips.</li>
        </ul>
        <p>That's why whole-market news in StockPilot moves almost every stock at once.</p>
        ${key("interest rates are like gravity for stock prices.")}
        ${live(`There have been <b>${d.n}</b> whole-market headlines in this zone so far.${d.h ? ` The latest: <b>${d.h}</b> (${d.c}).` : ""}`)}`,
      q: "The central bank raises interest rates sharply. What usually happens to stocks?",
      opts: ["They often fall", "They always rise", "Nothing at all"],
      why: "Higher rates make borrowing costlier and savings more attractive, which often pulls stock prices down.",
    },
    zh: {
      title: "利率、通膨和經濟", try: "打開經濟類詞彙",
      body: d => `
        <p>股票不是活在泡泡裡，整體經濟都會影響它們，最重要的有三件事：</p>
        <ul>
          <li><b>利率</b>是借錢的成本，主要由中央銀行決定（美國是聯準會，台灣是中央銀行）。利率高時借錢變貴、存款變得更有吸引力，常讓股價下跌；利率低時則常有幫助。</li>
          <li><b>通貨膨脹</b>是日常東西的價格上漲。通膨太高時，中央銀行通常會升息。</li>
          <li><b>經濟成長</b>（GDP）、就業和出口。經濟成長通常代表公司獲利成長。出口對台灣非常重要，特別是晶片。</li>
        </ul>
        <p>這就是為什麼 StockPilot 裡的整體市場新聞，幾乎會讓每一檔股票同時變動。</p>
        ${key("利率就像股價的地心引力。")}
        ${live(`到目前為止，這個區出現了 <b>${d.n}</b> 則整體市場新聞。${d.h ? `最新一則：<b>${d.h}</b>（${d.c}）。` : ""}`)}`,
      q: "中央銀行大幅升息。股票通常會怎樣？",
      opts: ["常常下跌", "一定上漲", "完全沒影響"],
      why: "升息讓借錢更貴、存款更有吸引力，常常讓股價下跌。",
    },
  },
  {
    id: "plan", a: 0, tryIt: {},
    data: () => { const { total } = portfolioTotals(); return { n: Object.keys(state.holdings).length, cash: (state.cash / total * 100).toFixed(0) + "%" }; },
    en: {
      title: "Build your first investing plan", try: "Go to Trade",
      body: d => `
        <p>You've learned the pieces. Now put them together into a simple plan you could actually follow:</p>
        <ul>
          <li><b>Goal and time:</b> what is the money for, and when will you need it? Money you need within a few years shouldn't be in stocks.</li>
          <li><b>Core:</b> a broad, low-cost fund (such as an index ETF) as the base, so you own many companies at once.</li>
          <li><b>Satellites:</b> if you want to pick stocks, keep each one small, about 5% or less.</li>
          <li><b>Rules:</b> your buy checklist, your stop-loss, and how often you'll review.</li>
          <li><b>Keep learning:</b> review your trades, read, and adjust slowly.</li>
        </ul>
        ${key("goal → core fund → small picks → written rules → regular review.")}
        ${live(`In this zone you hold <b>${d.n}</b> stock${d.n === 1 ? "" : "s"}, with <b>${d.cash}</b> of your portfolio in cash.`)}`,
      q: "You'll need some money for school in 1 year. Where should it NOT go?",
      opts: ["Into a few risky stocks", "A savings account", "Somewhere safe and easy to take out"],
      why: "Stocks can fall a lot in a single year. Money you need soon should stay safe.",
    },
    zh: {
      title: "建立你的第一個投資計畫", try: "前往交易",
      body: d => `
        <p>你已經學會各個部分了，現在把它們組合成一個真的能照著做的簡單計畫：</p>
        <ul>
          <li><b>目標和時間：</b>這筆錢要做什麼、什麼時候要用？幾年內就要用的錢，不應該放在股票裡。</li>
          <li><b>核心：</b>用一檔分散又低成本的基金（例如指數型 ETF）當基礎，一次擁有很多公司。</li>
          <li><b>衛星：</b>如果想自己挑股票，每一檔都要小，約 5% 以下。</li>
          <li><b>規則：</b>你的買進檢查清單、停損點，以及多久檢討一次。</li>
          <li><b>持續學習：</b>檢討你的交易、多閱讀，慢慢調整。</li>
        </ul>
        ${key("目標 → 核心基金 → 小額選股 → 寫下規則 → 定期檢討。")}
        ${live(`你在這個區持有 <b>${d.n}</b> 檔股票，投資組合中有 <b>${d.cash}</b> 是現金。`)}`,
      q: "你 1 年後要用一筆錢繳學費。這筆錢「不應該」放在哪裡？",
      opts: ["幾檔高風險的股票", "儲蓄帳戶", "安全又容易提領的地方"],
      why: "股票一年內可能跌很多。很快就要用的錢應該放在安全的地方。",
    },
  },
];

/* Extra quiz questions, missions and video scenes for every lesson */
const EXTRAS = {
  basics: {
    more: [
      Q(0, ["Where do people buy and sell shares with each other?", ["On a stock exchange", "Only at the company's office", "In a bank vault"], "Stock exchanges such as Nasdaq or the Taiwan Stock Exchange match buyers with sellers."],
           ["大家在哪裡互相買賣股票？", ["證券交易所", "只能在公司的辦公室", "銀行金庫"], "那斯達克、台灣證券交易所這類交易所，會幫買方和賣方配對。"]),
      Q(0, ["More people want to buy a stock than sell it. What usually happens to the price?", ["It goes up", "It goes down", "It stays exactly the same"], "When buyers outnumber sellers, they bid the price up."],
           ["想買一檔股票的人比想賣的人多。價格通常會怎樣？", ["上漲", "下跌", "完全不變"], "買方比賣方多時，價格就會被買上去。"]),
    ],
    mission: M("Open 3 different stocks from the watchlist", "從觀察清單打開 3 檔不同的股票", () => (learn.flags.viewed || []).length >= 3),
    video: [
      S("title", { emoji: "🏢" }, "A company can be split into millions of tiny pieces called shares.", "一家公司可以分成數百萬個小部分，叫做股票。"),
      S("pie", { pct: 9 }, "Own one share and you own a small slice of the company.", "持有一股，你就擁有公司的一小片。", { en: { you: "Your share" }, zh: { you: "你的股份" } }),
      S("scale", { down: "left", arrow: "up", lw: 4, rw: 1 }, "When more people want to buy than sell, the price goes up.", "想買的人比想賣的人多，價格就上漲。", { en: { l: "Buyers", r: "Sellers", arrow: "Price" }, zh: { l: "買方", r: "賣方", arrow: "股價" } }),
      S("scale", { down: "right", arrow: "down", lw: 1, rw: 4 }, "When more people want to sell, the price goes down.", "想賣的人比較多，價格就下跌。", { en: { l: "Buyers", r: "Sellers", arrow: "Price" }, zh: { l: "買方", r: "賣方", arrow: "股價" } }),
    ],
  },
  buysell: {
    more: [
      Q(0, ["You buy 20 shares at $10 each. How much do you pay?", ["$200", "$30", "$2"], "20 × $10 = $200."],
           ["你用每股 $10 買了 20 股。要付多少錢？", ["$200", "$30", "$2"], "20 × $10 = $200。"]),
      Q(0, ["You bought at $50, the price is now $45, and you haven't sold. What is true?", ["You have a loss on paper that can still change", "The money is lost for good", "You made a profit"], "Until you sell, a gain or loss is only on paper."],
           ["你在 $50 買進，現在是 $45，你還沒賣。哪一個正確？", ["你有帳面虧損，而且還會變動", "錢已經永遠虧掉了", "你賺錢了"], "在賣出之前，賺或賠都只是帳面上的。"]),
    ],
    mission: M("Buy any stock", "買進任何一檔股票", () => youTrades().some(e => e.side === "buy")),
    video: [
      S("title", { emoji: "🛒" }, "Buying a stock is like shopping: pick what you want and how many.", "買股票就像購物：選好要什麼、要幾個。"),
      S("math", {}, "The cost is the number of shares times the price.", "成本就是股數乘以股價。", { en: { lines: ["10 shares × $50", "= $500"] }, zh: { lines: ["10 股 × $50", "= $500"] } }),
      S("line", { shape: "up", dots: [[0.12, "buy"], [0.92, "sell"]] }, "Sell for more than you paid and you make a profit.", "賣出價高於買進價，你就賺錢。", { en: { tag: "Sold higher → profit" }, zh: { tag: "賣得比較高 → 賺錢" } }),
      S("line", { shape: "down", dots: [[0.12, "buy"], [0.92, "sell"]] }, "Sell for less and you lose money. Until you sell, it's only on paper.", "賣得比較低就虧錢。賣出之前，賺賠都只是帳面上的。", { en: { tag: "Sold lower → loss" }, zh: { tag: "賣得比較低 → 虧錢" } }),
    ],
  },
  pnl: {
    more: [
      Q(0, ["You have $30,000 in cash and stocks worth $70,000. What is your portfolio value?", ["$100,000", "$70,000", "$40,000"], "Cash plus stocks: $30,000 + $70,000 = $100,000."],
           ["你有 $30,000 現金和價值 $70,000 的股票。投資組合價值是多少？", ["$100,000", "$70,000", "$40,000"], "現金加股票：$30,000 + $70,000 = $100,000。"]),
      Q(0, ["Which profit is locked in?", ["Realized profit, after you sell", "Unrealized profit, while you still own the stock", "Neither"], "Once you sell, the gain is realized and can't change any more."],
           ["哪一種獲利已經確定了？", ["已實現獲利，也就是賣出之後", "未實現獲利，也就是還持有時", "都沒有"], "賣出之後，獲利就實現了，不會再變。"]),
    ],
    mission: M("Sell a stock you own", "賣出一檔你持有的股票", () => youTrades().some(e => e.side === "sell")),
    video: [
      S("math", {}, "Your portfolio is your cash plus the value of all your stocks.", "投資組合就是現金加上所有股票的價值。", { en: { lines: ["Cash $60,000", "+ Stocks $40,000", "= Portfolio $100,000"] }, zh: { lines: ["現金 $60,000", "+ 股票 $40,000", "= 投資組合 $100,000"] } }),
      S("math", {}, "Your average cost is what you paid per share, on average.", "平均成本是你每股平均付出的價格。", { en: { lines: ["Buy 1 @ $50", "Buy 1 @ $70", "Average cost = $60"] }, zh: { lines: ["買 1 股 @ $50", "買 1 股 @ $70", "平均成本 = $60"] } }),
      S("line", { shape: "wave" }, "While you still own a stock, your profit or loss is unrealized: it changes with the price.", "還持有時，損益是未實現的，會跟著股價變動。", { en: { tag: "Unrealized" }, zh: { tag: "未實現" } }),
      S("stamp", { kind: "good" }, "Once you sell, the profit or loss is realized and locked in.", "賣出之後，損益就實現、確定了。", { en: { text: "Realized" }, zh: { text: "已實現" } }),
    ],
  },
  orders: {
    more: [
      Q(0, ["What is the main risk of a limit order?", ["It might never fill if the price doesn't reach your limit", "It always fills at a worse price", "It only works for Taiwan stocks"], "You control the price, but if the stock never gets there, nothing happens."],
           ["限價單最大的風險是什麼？", ["如果價格沒碰到你的限價，可能一直不會成交", "一定會用更差的價格成交", "只能用在台股"], "價格由你控制，但如果股價一直沒到，就什麼都不會發生。"]),
      Q(0, ["You own 100 shares that have risen a lot. What locks in some profit and keeps some shares?", ["Selling part of the position, for example 50 shares", "Never selling anything", "Buying 100 more"], "Selling part locks in some gain while you keep the rest in case it keeps rising."],
           ["你持有 100 股，已經漲了很多。怎樣可以鎖住部分獲利，又保留一些股票？", ["賣出一部分，例如 50 股", "永遠不賣", "再買 100 股"], "賣出一部分可以鎖住部分獲利，剩下的繼續持有，以防它還會漲。"]),
    ],
    mission: M("Sell part of a position and keep some shares", "賣出部分持股，但保留一些股票", () => youTrades().some(e => e.side === "sell" && e.left > 0)),
    video: [
      S("title", { emoji: "🧾" }, "Every trade starts with an order: your instruction to buy or sell.", "每一筆交易都從委託單開始：你買進或賣出的指令。"),
      S("orderline", { kind: "limit" }, "A limit order waits for your price. Here it fills only when the price drops to the dashed line.", "限價單會等你的價格。這裡只有價格跌到虛線時才會成交。", { en: { limit: "Limit $95", done: "Filled ✓" }, zh: { limit: "限價 $95", done: "成交 ✓" } }),
      S("math", {}, "Market orders fill now, limit orders wait for your price, and stop orders are an automatic exit.", "市價單現在成交，限價單等你的價格，停損單是自動出場。", { en: { lines: ["Market order → now", "Limit order → your price", "Stop order → automatic exit"] }, zh: { lines: ["市價單 → 現在成交", "限價單 → 你的價格", "停損單 → 自動出場"] } }),
      S("math", {}, "You can also sell part of a position: lock in some profit and keep the rest.", "你也可以只賣一部分：鎖住部分獲利，保留其餘的。", { en: { lines: ["Own 100 shares", "Sell 50 → lock in profit", "Keep 50 → still in the game"] }, zh: { lines: ["持有 100 股", "賣 50 股 → 鎖住獲利", "留 50 股 → 繼續參與"] } }),
    ],
  },
  chart: {
    more: [
      Q(0, ["On a price chart, where is today?", ["At the right edge", "At the left edge", "In the middle"], "Charts read from left (past) to right (now)."],
           ["在價格走勢圖上，今天在哪裡？", ["最右邊", "最左邊", "中間"], "走勢圖從左（過去）看到右（現在）。"]),
      Q(0, ["What does a line that climbs from left to right over months show?", ["An uptrend", "A downtrend", "A dividend"], "Rising over weeks and months is an uptrend."],
           ["幾個月來從左往右往上爬的線，代表什麼？", ["上升趨勢", "下降趨勢", "股利"], "幾週、幾個月持續往上，就是上升趨勢。"]),
    ],
    mission: M("Open the enlarged chart", "打開放大圖表", () => !!learn.flags.zoom),
    video: [
      S("line", { shape: "up" }, "A price chart shows how the price moved. The left is the past; the right edge is today.", "走勢圖顯示價格怎麼變動。左邊是過去，右邊是今天。", { en: { tag: "Today" }, zh: { tag: "今天" } }),
      S("line", { shape: "up", ma: true }, "Look at the direction over weeks: climbing from left to right is an uptrend.", "看幾週的方向：從左往右往上爬就是上升趨勢。", { en: { tag: "Uptrend ↗" }, zh: { tag: "上升趨勢 ↗" } }),
      S("line", { shape: "down", ma: true }, "Sliding down is a downtrend.", "往下滑就是下降趨勢。", { en: { tag: "Downtrend ↘" }, zh: { tag: "下降趨勢 ↘" } }),
      S("line", { shape: "updip" }, "One bad day inside a long climb is usually just noise. Zoom out!", "長期上漲中的一天下跌，通常只是雜訊。把眼光放遠！", { en: { tag: "Just one bad day" }, zh: { tag: "只是一天下跌" } }),
    ],
  },
  news: {
    more: [
      Q(0, ["Demand for AI chips jumps. Which stocks are likely to move together?", ["Chip makers like NVIDIA, TSMC and MediaTek", "Only banks", "Only telecom companies"], "Industry news moves similar companies together."],
           ["AI 晶片需求大增。哪些股票可能一起變動？", ["輝達、台積電、聯發科等晶片公司", "只有銀行", "只有電信公司"], "產業新聞會讓同類公司一起變動。"]),
      Q(0, ["A stock jumped 5% a minute ago on good news. What's the main risk of buying now?", ["The news may already be in the price", "There is no risk", "News never moves prices"], "Prices react within seconds, so late buyers often buy the top of the jump."],
           ["一檔股票一分鐘前因為好消息漲了 5%。現在買進最大的風險是什麼？", ["新聞可能已經反映在股價上了", "沒有風險", "新聞從來不會影響股價"], "股價幾秒內就會反應，所以晚買的人常常買在跳漲的高點。"]),
    ],
    mission: M("Tap a stock button in the Market news", "點一下市場新聞裡的股票按鈕", () => !!learn.flags.newsClick),
    video: [
      S("news", { chg: 4.2 }, "News moves prices, sometimes a lot in a single day.", "新聞會讓股價變動，有時一天就變很多。", { en: { h: "AI chip demand jumps" }, zh: { h: "AI 晶片需求大增" } }),
      S("checklist", {}, "There are three kinds of news, and each moves a different group of stocks.", "新聞有三種，每種影響不同的一群股票。", { en: { items: ["Company news → one stock", "Industry news → similar companies", "Market news → almost everything"] }, zh: { items: ["公司新聞 → 單一股票", "產業新聞 → 同類公司", "市場新聞 → 幾乎全部"] } }),
      S("line", { shape: "spike" }, "Prices react within seconds. By the time you read the headline, the move has usually happened.", "股價幾秒內就會反應。等你看到標題時，漲跌通常已經發生了。", { en: { tag: "Already moved!" }, zh: { tag: "已經漲了！" } }),
      S("stamp", { kind: "bad" }, "So don't buy just because of a headline you just saw.", "所以不要只因為剛看到一則標題就買進。", { en: { text: "Don't chase headlines" }, zh: { text: "不要追新聞" } }),
    ],
  },
  ma: {
    more: [
      Q(0, ["What does a moving average do?", ["Smooths out daily wiggles so the trend is easier to see", "Predicts tomorrow's price exactly", "Shows the company's profit"], "It averages recent prices to make the trend clearer."],
           ["移動平均線的作用是什麼？", ["抹平每天的小波動，讓趨勢更容易看清楚", "準確預測明天的股價", "顯示公司的獲利"], "它把最近的價格平均，讓趨勢更清楚。"]),
      Q(0, ["The 20-day average just dropped below the 50-day. What does that suggest?", ["The trend may be turning down", "The stock must rise tomorrow", "Nothing at all"], "Recent prices are now lower than older ones, a sign the trend may be weakening."],
           ["20 日均線剛跌破 50 日均線。這代表什麼？", ["趨勢可能正在轉弱", "明天一定會漲", "完全沒有意義"], "最近的價格已經比之前低，是趨勢可能轉弱的跡象。"]),
    ],
    mission: M("Buy a stock that is in an uptrend", "買進一檔處於上升趨勢的股票", () => youTrades().some(e => e.side === "buy" && e.checks.some(c => c.id === "buy-uptrend"))),
    video: [
      S("line", { shape: "wave", ma: true }, "A moving average is the average price of the last few days. It smooths out the wiggles.", "移動平均線是最近幾天的平均價格，把小波動抹平。", { en: { tag: "20-day average" }, zh: { tag: "20 日均線" } }),
      S("line", { shape: "up", ma: true, ma50: true }, "When the 20-day average is above the 50-day, the trend has been up.", "20 日均線高於 50 日均線，代表趨勢一直向上。", { en: { tag: "20 above 50 ↗" }, zh: { tag: "20 日 > 50 日 ↗" } }),
      S("line", { shape: "down", ma: true, ma50: true }, "When it's below, the trend has been down.", "低於的時候，代表趨勢一直向下。", { en: { tag: "20 below 50 ↘" }, zh: { tag: "20 日 < 50 日 ↘" } }),
      S("stamp", { kind: "warn" }, "It describes the past. It's a clue, not a promise.", "它描述的是過去，是線索，不是保證。", { en: { text: "Clue, not promise" }, zh: { text: "線索，不是保證" } }),
    ],
  },
  rsi: {
    more: [
      Q(0, ["A stock's RSI is 25. Which zone is that?", ["Oversold", "Overbought", "Neutral"], "Below 30 is the oversold zone."],
           ["一檔股票的 RSI 是 25。這是哪一區？", ["超賣", "超買", "中性"], "低於 30 是超賣區。"]),
      Q(0, ["Does an RSI of 80 mean the price must fall tomorrow?", ["No, it's a warning, not a rule", "Yes, always", "Only on Mondays"], "Strong stocks can stay overbought for a long time."],
           ["RSI 80 代表明天一定會跌嗎？", ["不是，它是警訊，不是規則", "是，一定會", "只有星期一會"], "強勢股可能長時間處於超買。"]),
    ],
    mission: M("Buy a stock without chasing (RSI under 70)", "買進時不追高（RSI 低於 70）", () => youTrades().some(e => e.side === "buy" && e.checks.some(c => c.id === "buy-nochase"))),
    video: [
      S("gauge", { value: 50 }, "RSI is a score from 0 to 100 that shows how fast a price has moved.", "RSI 是 0 到 100 的分數，顯示價格變動得多快。", { en: { zone: "Neutral" }, zh: { zone: "中性" } }),
      S("gauge", { value: 82 }, "Above 70, the price has risen fast and may be overbought.", "高於 70，價格漲得很快，可能超買。", { en: { zone: "Overbought" }, zh: { zone: "超買" } }),
      S("gauge", { value: 22 }, "Below 30, it has fallen fast and may be oversold.", "低於 30，價格跌得很快，可能超賣。", { en: { zone: "Oversold" }, zh: { zone: "超賣" } }),
      S("line", { shape: "up" }, "These are warnings, not rules: strong stocks can stay overbought for a long time.", "這些是警訊，不是規則：強勢股可能長時間處於超買。", { en: { tag: "RSI 85… still rising" }, zh: { tag: "RSI 85…還在漲" } }),
    ],
  },
  risk: {
    more: [
      Q(0, ["Why use a smaller amount for a very volatile stock?", ["So a big drop can't hurt your whole account too much", "Because volatile stocks are always bad", "To pay lower fees"], "Smaller positions keep big swings from damaging your whole portfolio."],
           ["為什麼波動很大的股票要用比較少的金額？", ["這樣大跌時才不會傷到整個帳戶太多", "因為波動大的股票一定不好", "為了少付手續費"], "部位小，大波動才不會傷害整個投資組合。"]),
      Q(0, ["Which usually swings more: a big telecom company or a young electric-car company?", ["The young electric-car company", "The big telecom company", "They swing about the same"], "Young, fast-changing companies are usually much more volatile than steady utilities."],
           ["哪一個通常波動比較大：大型電信公司，還是年輕的電動車公司？", ["年輕的電動車公司", "大型電信公司", "差不多"], "年輕、變化快的公司，通常比穩定的公用事業波動大得多。"]),
    ],
    mission: M("Open a stock with volatility above 40%", "打開一檔波動度超過 40% 的股票", () => !!learn.flags.volView),
    video: [
      S("vol", {}, "Volatility measures how much a price swings.", "波動度衡量價格擺動的幅度。", { en: { a: "Calm stock", b: "Jumpy stock" }, zh: { a: "平穩的股票", b: "波動大的股票" } }),
      S("line", { shape: "wild" }, "Big swings mean bigger possible gains, and bigger possible losses.", "起伏大代表可能賺更多，也可能賠更多。", { en: { tag: "+30% … −30%" }, zh: { tag: "+30% … −30%" } }),
      S("math", {}, "Before buying, ask yourself: could I handle a big drop without panicking?", "買進前先問自己：如果大跌，我能不恐慌嗎？", { en: { lines: ["Ask yourself:", "If it fell 30%…", "could I stay calm?"] }, zh: { lines: ["問問自己：", "如果它跌了 30%…", "我能保持冷靜嗎？"] } }),
      S("math", {}, "For jumpy stocks, use a smaller amount.", "波動大的股票，金額要少一點。", { en: { lines: ["Jumpy stock", "→ smaller amount"] }, zh: { lines: ["波動大的股票", "→ 金額少一點"] } }),
    ],
  },
  diversify: {
    more: [
      Q(0, ["A stock is 5% of your portfolio and falls 20%. About how much does your whole portfolio fall?", ["About 1%", "About 20%", "About 5%"], "5% × 20% = 1%."],
           ["一檔股票占你投資組合的 5%，它跌了 20%。整個投資組合大約跌多少？", ["約 1%", "約 20%", "約 5%"], "5% × 20% = 1%。"]),
      Q(0, ["What is an ETF?", ["A fund that holds many stocks and trades like one stock", "A single company's share", "A kind of bank account"], "One ETF purchase gives you a slice of many companies."],
           ["什麼是 ETF？", ["持有許多股票、像單一股票一樣交易的基金", "單一公司的股票", "一種銀行帳戶"], "買一次 ETF，就等於擁有許多公司的一小部分。"]),
    ],
    mission: M("Own US and Taiwan stocks at the same time", "同時持有美股和台股", () => new Set(Object.keys(state.holdings).map(s => market[s].mkt)).size >= 2),
    video: [
      S("baskets", {}, "Putting all your eggs in one basket is risky: one drop and they all break.", "把所有雞蛋放在同一個籃子裡很危險：掉一次就全破了。", { en: { l: "One basket", r: "Many baskets" }, zh: { l: "一個籃子", r: "很多籃子" } }),
      S("pie", { segs: [22, 18, 16, 14, 12, 10, 8] }, "Spread your money across many companies, industries and countries.", "把錢分散到許多公司、產業和國家。", { en: { main: "Many small slices" }, zh: { main: "很多小片" } }),
      S("math", {}, "If each stock is a small part of your portfolio, one bad stock can't sink you.", "如果每檔股票只占一小部分，一檔表現差也不會拖垮你。", { en: { lines: ["One stock −20%", "in a 5% position", "= only −1% for you"] }, zh: { lines: ["一檔股票 −20%", "部位只占 5%", "= 你只少 1%"] } }),
      S("title", { emoji: "🧺" }, "An ETF holds many stocks in one purchase, an easy way to diversify.", "ETF 一次持有許多股票，是分散投資的簡單方法。"),
    ],
  },
  psychology: {
    more: [
      Q(0, ["Your stock falls 3% in one day, but its trend is still up. What is panic selling?", ["Selling just because of the scary drop, without checking your plan", "Following your stop-loss rule", "Buying more because the trend is up"], "Panic selling means fear makes the decision. One bad day is often just noise."],
           ["你的股票一天跌了 3%，但趨勢仍然向上。什麼是恐慌性賣出？", ["只因為可怕的下跌就賣出，沒有看自己的計畫", "照著停損規則賣出", "因為趨勢向上而加碼"], "恐慌性賣出就是讓恐懼做決定。一天的下跌常常只是雜訊。"]),
      Q(0, ["What helps most against emotional decisions?", ["A written plan made before trading, and reviewing your trades", "Checking prices every minute", "Trading more often"], "A plan decided while calm, plus honest review, keeps feelings from taking over."],
           ["什麼最能避免情緒化的決定？", ["交易前寫好的計畫，再加上檢討交易", "每分鐘看一次價格", "更常交易"], "冷靜時訂好的計畫，加上誠實的檢討，能避免被情緒牽著走。"]),
    ],
    mission: M("Open the Journal tab and read your review", "打開交易日誌，看看你的檢討", () => !!learn.flags.journalOpen),
    video: [
      S("faces", {}, "Prices go up and down, and so do our feelings.", "價格上上下下，我們的心情也是。"),
      S("line", { shape: "spike" }, "When a stock shoots up and everyone is talking about it, FOMO makes us want to jump in at the top.", "股票飆漲、大家都在討論時，FOMO 會讓我們想在高點跳進去。", { en: { tag: "Everyone is buying!" }, zh: { tag: "大家都在買！" } }),
      S("line", { shape: "dip" }, "When it suddenly drops, fear makes us want to sell, often right at the bottom.", "突然下跌時，恐懼會讓我們想賣掉，常常正好賣在最低點。", { en: { tag: "Panic!" }, zh: { tag: "好可怕！" } }),
      S("checklist", {}, "The cure: plan when you're calm, follow the plan, and review every trade.", "解藥：冷靜時訂計畫、照計畫做，並檢討每一筆交易。", { en: { items: ["Write your plan first", "Follow it", "Review in the Journal"] }, zh: { items: ["先寫好計畫", "照著做", "在交易日誌中檢討"] } }),
    ],
  },
  whenact: {
    more: [
      Q(0, ["Which of these is NOT on a good buy checklist?", ["Everyone online is excited about it", "The trend is up", "You know where you'd sell if you're wrong"], "Excitement online is FOMO, not a reason."],
           ["下面哪一個「不」屬於好的買進檢查清單？", ["網路上大家都很興奮", "趨勢向上", "知道判斷錯誤時要在哪裡賣"], "網路上的興奮是 FOMO，不是理由。"]),
      Q(0, ["A stock you own has grown to 30% of your portfolio. What is a reasonable step?", ["Trim it to lower your risk", "Buy more", "Ignore it"], "Trimming an oversized position keeps one stock from controlling your results."],
           ["你持有的一檔股票已經占投資組合的 30%。合理的做法是什麼？", ["減碼來降低風險", "再加碼", "不用管"], "減碼過大的部位，避免一檔股票主宰你的結果。"]),
    ],
    mission: M("Make a trade the Journal rates as a Good step", "做出一筆被交易日誌評為「好的一步」的交易", () => youTrades().some(e => normGrade(e.grade) === "good")),
    video: [
      S("checklist", {}, "Before buying, run through a checklist.", "買進之前，先跑一遍檢查清單。", { en: { items: ["Trend is up", "RSI below 70", "A clear reason", "A small amount", "Exit price ready"] }, zh: { items: ["趨勢向上", "RSI 低於 70", "理由清楚", "金額不大", "想好出場價"] } }),
      S("orderline", { kind: "stop" }, "Decide your stop-loss in advance, for example 8% below what you paid.", "事先決定停損點，例如比買進價低 8%。", { en: { limit: "Stop-loss −8%", done: "Sold ✓" }, zh: { limit: "停損 −8%", done: "賣出 ✓" } }),
      S("checklist", {}, "Know your reasons to sell, too.", "也要清楚自己賣出的理由。", { en: { items: ["Stop-loss hit", "Trend turned down", "Position too big", "Take some profit"] }, zh: { items: ["碰到停損", "趨勢轉弱", "部位太大", "獲利了結一部分"] } }),
      S("stamp", { kind: "good" }, "Plan the exit before you enter, and the Journal will check how well you followed it.", "進場前先規劃出場，交易日誌會檢查你做得如何。", { en: { text: "Plan the exit first" }, zh: { text: "先規劃出場" } }),
    ],
  },
  compound: {
    more: [
      Q(0, ["Why does starting to invest early help so much?", ["Gains have more years to earn their own gains", "Stocks are cheaper for young people", "You pay no fees"], "More time means more rounds of compounding."],
           ["為什麼早點開始投資幫助很大？", ["獲利有更多年可以再幫你賺錢", "年輕人買股票比較便宜", "不用付手續費"], "時間越長，複利的次數就越多。"]),
      Q(0, ["A stock falls 50%. How much does it need to rise to get back to its old price?", ["100%", "50%", "25%"], "$100 falls to $50. Getting from $50 back to $100 means doubling: a 100% rise."],
           ["一檔股票跌了 50%。要漲多少才能回到原本的價格？", ["100%", "50%", "25%"], "$100 跌到 $50。從 $50 回到 $100 要翻倍，也就是漲 100%。"]),
    ],
    mission: M("Keep a stock you bought for 3 trading days", "持有一檔你買的股票滿 3 個交易日", () => youTrades().some(e => e.side === "buy" && e.cn != null && state.holdings[e.sym] && market[e.sym].closes - e.cn >= 3)),
    video: [
      S("title", { emoji: "🌱" }, "Compound growth: your gains start earning gains of their own.", "複利：你賺到的錢會再幫你賺錢。"),
      S("bars", { values: [1000, 1080, 1166, 1260, 1360, 1469], xs: ["0", "1", "2", "3", "4", "5"] }, "Each year, 8% is added on top of a bigger amount, so the bars grow faster and faster.", "每一年都在更大的金額上多 8%，所以長條越長越快。", { en: { unit: "years" }, zh: { unit: "年" } }),
      S("bars", { values: [1000, 1469, 2159, 3172, 4661], xs: ["0", "5", "10", "15", "20"] }, "After 20 years at 8% a year, $1,000 becomes about $4,661.", "每年 8%，20 年後 $1,000 會變成約 $4,661。", { en: { unit: "years" }, zh: { unit: "年" } }),
      S("math", {}, "Losses compound too: after a 50% drop you need a 100% gain to get back. Protecting your money matters.", "虧損也會累積：跌 50% 之後要漲 100% 才能回本。保護你的錢很重要。", { en: { lines: ["−50%: $100 → $50", "+100%: $50 → $100", "Avoid big losses!"] }, zh: { lines: ["−50%：$100 → $50", "+100%：$50 → $100", "避免大虧損！"] } }),
    ],
  },
  dividends: {
    more: [
      Q(0, ["Which kind of company is more likely to pay a steady dividend?", ["A mature company with steady profits, like a telecom", "A brand-new startup that is losing money", "Any company whose stock rose this week"], "Steady profits make steady dividends possible."],
           ["哪一種公司比較可能穩定發股利？", ["獲利穩定的成熟公司，例如電信公司", "還在虧錢的新創公司", "任何這週股價上漲的公司"], "穩定的獲利，才能穩定地發股利。"]),
      Q(0, ["A stock suddenly shows a 15% dividend yield. What should you think?", ["Be careful: the price may have crashed because of trouble", "It's free money with no risk", "Yields never change"], "Yield = dividend ÷ price. A crashing price makes the yield look huge, and the dividend may be cut."],
           ["一檔股票突然顯示 15% 的殖利率。你應該怎麼想？", ["要小心：股價可能因為出問題而大跌", "這是沒有風險的免費的錢", "殖利率永遠不變"], "殖利率 = 股利 ÷ 股價。股價大跌會讓殖利率看起來很高，而且股利可能被砍。"]),
    ],
    mission: M("Buy shares of Chunghwa Telecom (2412)", "買進中華電（2412）", () => youTrades().some(e => e.side === "buy" && e.sym === "2412")),
    video: [
      S("coins", {}, "Some companies share their profits with shareholders as cash: a dividend.", "有些公司會把獲利用現金分給股東，這就是股利。", { en: { t: "Dividends" }, zh: { t: "股利" } }),
      S("math", {}, "The dividend yield compares the yearly dividend with the price.", "殖利率是一年股利和股價的比較。", { en: { lines: ["Yearly dividend $4", "Share price $100", "Yield = 4 ÷ 100 = 4%"] }, zh: { lines: ["一年股利 $4", "股價 $100", "殖利率 = 4 ÷ 100 = 4%"] } }),
      S("bars", { values: [100, 104, 108, 112, 117, 122], xs: ["0", "1", "2", "3", "4", "5"] }, "Reinvesting dividends buys more shares, and those shares pay dividends too.", "把股利再投入可以買更多股票，這些股票也會發股利。", { en: { unit: "years" }, zh: { unit: "年" } }),
      S("line", { shape: "down" }, "Watch out: a huge yield can mean the price crashed because the business is in trouble.", "小心：殖利率特別高，可能是公司出問題、股價大跌。", { en: { tag: "15% yield?! 🚩" }, zh: { tag: "殖利率 15%？！🚩" } }),
    ],
  },
  valuation: {
    more: [
      Q(0, ["Stock A costs $500 and stock B costs $20. Which is cheaper?", ["You can't tell from the price alone; compare price with earnings", "A, because it's more famous", "B, because the number is smaller"], "Cheap or expensive depends on price compared with earnings."],
           ["A 股票 $500，B 股票 $20。哪一檔比較便宜？", ["只看股價看不出來，要和獲利比較", "A，因為比較有名", "B，因為數字比較小"], "便宜或貴，要看股價和獲利的比較。"]),
      Q(0, ["Why might a fast-growing tech company have a high P/E?", ["Investors expect its profits to grow a lot", "It has no shareholders", "A high P/E always means a bargain"], "People pay more today for profits they expect tomorrow."],
           ["為什麼快速成長的科技公司本益比可能很高？", ["投資人預期它的獲利會大幅成長", "它沒有股東", "本益比高一定代表便宜"], "大家願意為未來預期的獲利，現在付比較多錢。"]),
    ],
    mission: M("Find \"P/E ratio\" in the Vocabulary", "在詞彙表中找到「本益比」", () => !!learn.flags.vocabPE),
    video: [
      S("title", { emoji: "🏷️" }, "Is a $1,000 stock expensive? Not necessarily. Price alone tells you very little.", "$1,000 的股票很貴嗎？不一定。只看股價，能看出的東西很少。"),
      S("math", {}, "The P/E ratio divides the price by yearly earnings per share.", "本益比是股價除以每股一年的盈餘。", { en: { lines: ["Price $60", "Earnings per share $3", "P/E = 60 ÷ 3 = 20"] }, zh: { lines: ["股價 $60", "每股盈餘 $3", "本益比 = 60 ÷ 3 = 20"] } }),
      S("math", {}, "If the price rises but earnings don't, the stock gets more expensive.", "股價上漲但獲利沒有增加，股票就變貴了。", { en: { lines: ["Price $90", "Earnings still $3", "P/E = 30 → pricier"] }, zh: { lines: ["股價 $90", "盈餘還是 $3", "本益比 = 30 → 變貴了"] } }),
      S("checklist", {}, "Use P/E to compare similar companies, and remember it's one clue, not the whole story.", "用本益比比較類似的公司，並記得它只是線索之一，不是全部。", { en: { items: ["High P/E: big hopes", "Low P/E: bargain or worry", "Compare within an industry"] }, zh: { items: ["本益比高：期望很高", "本益比低：便宜或令人擔心", "在同產業內比較"] } }),
    ],
  },
  cycles: {
    more: [
      Q(0, ["What is a correction?", ["A drop of about 10%, which happens fairly often", "A fall of more than 50%", "A rise of 20%"], "Corrections are common, even in bull markets."],
           ["什麼是修正？", ["約 10% 的下跌，相當常見", "超過 50% 的下跌", "上漲 20%"], "修正很常見，即使在牛市中也會發生。"]),
      Q(0, ["What has usually worked best through market cycles?", ["Staying diversified and patient", "Selling everything at every drop", "Guessing the exact top and bottom"], "Nobody times cycles reliably; patience and diversification do the heavy lifting."],
           ["面對景氣循環，通常什麼做法最有效？", ["保持分散和耐心", "每次下跌就全部賣掉", "猜準最高點和最低點"], "沒有人能可靠地抓準循環，耐心和分散才是關鍵。"]),
    ],
    mission: M("Set the chart range to All", "把走勢圖的時間範圍設為「全部」", () => !!learn.flags.rangeAll),
    video: [
      S("bullbear", {}, "A bull market is a long rise. A bear market is a fall of 20% or more.", "牛市是長期上漲，熊市是下跌 20% 以上。", { en: { bull: "Bull market", bear: "Bear market" }, zh: { bull: "牛市", bear: "熊市" } }),
      S("line", { shape: "wave" }, "Smaller drops of about 10%, called corrections, happen often, even when the big trend is up.", "約 10% 的小幅下跌叫做修正，即使大趨勢向上也常常發生。", { en: { tag: "−10% correction" }, zh: { tag: "−10% 修正" } }),
      S("line", { shape: "recover" }, "So far, the US market has eventually recovered from every bear market, though some took years.", "到目前為止，美國股市每次熊市後最終都恢復了，只是有些花了好幾年。", { en: { tag: "Recovery" }, zh: { tag: "恢復" } }),
      S("checklist", {}, "Nobody can time the cycle reliably. Diversification and patience help you ride it out.", "沒有人能可靠地抓準循環。分散投資和耐心能幫你度過起伏。", { en: { items: ["Stay diversified", "Be patient", "Don't guess tops and bottoms"] }, zh: { items: ["保持分散", "保持耐心", "不要猜高點和低點"] } }),
    ],
  },
  taiwan: {
    more: [
      Q(0, ["How many shares are in one board lot (一張) in Taiwan?", ["1,000", "100", "10"], "One board lot is 1,000 shares."],
           ["在台股，一張是多少股？", ["1,000 股", "100 股", "10 股"], "一張是 1,000 股。"]),
      Q(0, ["A Taiwan stock closed at NT$100 yesterday. What is the highest it can trade today?", ["NT$110", "NT$150", "NT$200"], "The daily limit is 10% above or below the previous close."],
           ["一檔台股昨天收盤 NT$100。今天最高能交易到多少？", ["NT$110", "NT$150", "NT$200"], "每日漲跌幅限制是昨收的上下 10%。"]),
    ],
    mission: M("Buy a Taiwan stock", "買進一檔台股", () => youTrades().some(e => e.side === "buy" && market[e.sym] && market[e.sym].mkt === "TW")),
    video: [
      S("flags", { l: "🇹🇼", r: "🇺🇸" }, "Taiwan stocks trade on the Taiwan Stock Exchange, in New Taiwan dollars.", "台股在台灣證券交易所交易，以新台幣計價。", { en: { mid: "NT$ ⇄ US$", l: "Taiwan", r: "United States" }, zh: { mid: "NT$ ⇄ US$", l: "台灣", r: "美國" } }),
      S("clocks", {}, "Taiwan trades from 9:00 to 13:30. The US trades from 9:30 to 16:00 New York time.", "台股 9:00 到 13:30 交易，美股在紐約時間 9:30 到 16:00 交易。", { en: { tw: "Taiwan 9:00–13:30", us: "US 9:30–16:00" }, zh: { tw: "台股 9:00–13:30", us: "美股 9:30–16:00" } }),
      S("math", {}, "A board lot is 1,000 shares, and prices can move at most 10% a day.", "一張是 1,000 股，價格一天最多變動 10%。", { en: { lines: ["1 board lot = 1,000 shares", "Odd lots: fewer shares", "Daily limit: ±10%"] }, zh: { lines: ["一張 = 1,000 股", "零股：少於一張", "漲跌幅限制：±10%"] } }),
      S("math", {}, "And remember: in Taiwan, red means up!", "還有記得：在台股，紅色代表上漲！", { en: { lines: ["🔴 Red = up in Taiwan", "🟢 Green = down"] }, zh: { lines: ["🔴 台股紅色 = 上漲", "🟢 綠色 = 下跌"] } }),
    ],
  },
  economy: {
    more: [
      Q(0, ["What is inflation?", ["Prices of goods and services rising over time", "A stock going up fast", "A company paying dividends"], "Inflation is about everyday prices, not one stock."],
           ["什麼是通貨膨脹？", ["商品和服務的價格隨時間上漲", "一檔股票快速上漲", "公司發放股利"], "通膨說的是日常物價，不是單一股票。"]),
      Q(0, ["Why do Taiwan's export numbers matter so much for Taiwan stocks?", ["Many big Taiwan companies, like chip makers, sell mostly to other countries", "Exports decide the color of prices", "They don't matter"], "Taiwan's biggest companies earn much of their money abroad."],
           ["為什麼台灣的出口數字對台股這麼重要？", ["很多台灣大公司（例如晶片公司）主要賣到國外", "出口決定股價顯示的顏色", "一點都不重要"], "台灣最大的公司，很多收入都來自國外。"]),
    ],
    mission: M("Open the Economy words in the Vocabulary", "在詞彙表中打開「經濟」類詞彙", () => !!learn.flags.econCat),
    video: [
      S("title", { emoji: "🏦" }, "The whole economy moves stocks, and the central bank sits at the center.", "整體經濟會影響股票，而中央銀行就在中心。"),
      S("scale", { down: "right", arrow: "down", lw: 1, rw: 1, le: "🏦", re: "📈" }, "When interest rates go up, stock prices often go down, like a seesaw.", "利率上升時，股價常常下跌，就像翹翹板。", { en: { l: "Interest rates ↑", r: "Stocks ↓", arrow: "Stocks" }, zh: { l: "利率 ↑", r: "股價 ↓", arrow: "股價" } }),
      S("math", {}, "High inflation usually leads to higher interest rates.", "通膨太高通常會導致升息。", { en: { lines: ["Inflation ↑", "→ central bank raises rates", "→ stocks often ↓"] }, zh: { lines: ["通膨 ↑", "→ 中央銀行升息", "→ 股價常常 ↓"] } }),
      S("flags", { l: "🇹🇼", r: "🌍" }, "Growth, jobs and exports matter too. For Taiwan, chip exports are a huge deal.", "成長、就業和出口也很重要。對台灣來說，晶片出口特別重要。", { en: { mid: "Chips →", l: "Taiwan", r: "The world" }, zh: { mid: "晶片 →", l: "台灣", r: "全世界" } }),
    ],
  },
  plan: {
    more: [
      Q(0, ["What is a 'core' holding in a simple plan?", ["A broad, low-cost fund that holds many companies", "Your single favorite stock", "A stock you heard about online"], "The core is the diversified base everything else sits around."],
           ["簡單計畫中的「核心」持股是什麼？", ["持有很多公司、分散又低成本的基金", "你最喜歡的單一股票", "在網路上聽說的股票"], "核心是分散的基礎，其他持股都圍繞著它。"]),
      Q(0, ["How big should each individual stock pick usually be in a beginner's plan?", ["Small, about 5% or less of the portfolio", "Half the portfolio", "Everything"], "Small picks let you learn without risking your whole account."],
           ["在新手的計畫中，每一檔自選股通常應該占多少？", ["很小，約投資組合的 5% 以下", "投資組合的一半", "全部"], "小額選股讓你可以學習，又不會拿整個帳戶冒險。"]),
    ],
    mission: M("Hold 5 or more different stocks at once", "同時持有 5 檔以上不同的股票", () => Object.keys(state.holdings).length >= 5),
    video: [
      S("title", { emoji: "🗺️" }, "Time to put it all together into a plan you can follow.", "是時候把所學組合成一個能照著做的計畫了。"),
      S("pie", { segs: [80, 5, 5, 5, 5] }, "A broad fund as the core, plus a few small stock picks around it.", "以分散的基金為核心，周圍再放幾檔小額選股。", { en: { main: "Core fund 80% · picks 5% each" }, zh: { main: "核心基金 80% · 自選股各 5%" } }),
      S("checklist", {}, "Write down your rules before you trade.", "交易前先寫下你的規則。", { en: { items: ["Goal and time", "Buy checklist", "Stop-loss", "Monthly review"] }, zh: { items: ["目標和時間", "買進檢查清單", "停損點", "每月檢討"] } }),
      S("title", { emoji: "🚀" }, "Then keep learning: review, read, and adjust slowly. Good luck!", "然後持續學習：檢討、閱讀、慢慢調整。祝你好運！"),
    ],
  },
  predict: {
    more: [
      Q(0, ["Someone online promises you'll double your money in a month, guaranteed. What should you think?", ["It's a red flag; nobody can guarantee that", "Great deal, invest everything", "Guarantees are normal in stocks"], "Guaranteed high returns are a classic sign of a scam."],
           ["網路上有人保證你一個月內資金翻倍。你應該怎麼想？", ["這是警訊，沒有人能保證", "好划算，全部投進去", "股票保證獲利很正常"], "保證高報酬是詐騙的典型特徵。"]),
      Q(0, ["Which of these can you actually control as an investor?", ["Your diversification, costs and how much risk you take", "Tomorrow's news", "The exact price next week"], "Focus on what you control: spreading risk, keeping costs low, and position sizes."],
           ["身為投資人，下面哪一個是你真的能控制的？", ["分散程度、成本，以及承擔多少風險", "明天的新聞", "下週的準確價格"], "專注在能控制的事：分散風險、降低成本，以及部位大小。"]),
    ],
    mission: M("Turn on auto-pilot", "開啟自動駕駛", () => !!state.autoPilot),
    video: [
      S("line", { shape: "random" }, "Every signal is a hint, not a promise. News nobody expects can move prices at any time.", "每個訊號都是提示，不是保證。沒人料到的新聞隨時會讓股價變動。", { en: { tag: "?" }, zh: { tag: "？" } }),
      S("math", {}, "Over the long run, even most professionals fail to beat a simple fund that holds the whole market.", "長期來看，就連大多數專業人士也贏不過持有整個市場的簡單基金。", { en: { lines: ["Most professional funds", "fail to beat", "a simple index fund"] }, zh: { lines: ["大多數專業基金", "長期贏不過", "單純的指數基金"] } }),
      S("checklist", {}, "So focus on what you can control: time, diversification, risk and costs.", "所以專注在你能控制的事：時間、分散、風險和成本。", { en: { items: ["Think in years", "Spread it out", "Only spare money", "Watch fees"] }, zh: { items: ["用年來思考", "分散投資", "只用閒錢", "注意費用"] } }),
      S("stamp", { kind: "warn" }, "And be careful of anyone who promises guaranteed returns.", "還有，小心任何保證獲利的人。", { en: { text: "Guaranteed? 🚩" }, zh: { text: "保證獲利？🚩" } }),
    ],
  },
};

/* Course order and units */
const UNITS = [
  { id: "u1", ids: ["basics", "buysell", "pnl", "orders"] },
  { id: "u2", ids: ["chart", "news", "ma", "rsi"] },
  { id: "u3", ids: ["risk", "diversify", "psychology", "whenact"] },
  { id: "u4", ids: ["compound", "dividends", "valuation", "cycles"] },
  { id: "u5", ids: ["taiwan", "economy", "plan", "predict"] },
];
(() => {
  const all = [...LESSONS, ...NEW_LESSONS];
  LESSONS.length = 0;
  for (const u of UNITS) for (const id of u.ids) {
    const l = all.find(x => x.id === id);
    Object.assign(l, EXTRAS[id], { unit: u.id });
    LESSONS.push(l);
  }
})();
const unitOf = id => UNITS.find(u => u.ids.includes(id));

// Language helpers for lesson parts (简体中文 is converted from 繁體中文)
const cv = s => lang === "zhs" ? toS(s) : s;
const pickLang = o => !o ? o : o[lang] != null ? o[lang] : lang === "zhs" ? cv(o.zh) : o.en;
// Small deterministic shuffle so the right answer isn't always in the same place
function seededOrder(seed, n) {
  let h = 2166136261;
  for (const c of seed) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  const r = mulberry32(h >>> 0), idx = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return idx;
}
// The lesson's 3 questions in the current language, options shuffled
function quizOf(l) {
  const d = l[lang] ? lang : lang === "zhs" ? "zh" : "en";
  const base = { a: l.a, q: l[d].q, opts: l[d].opts, why: l[d].why };
  const list = [base, ...(l.more || []).map(m => ({ a: m.a, ...(m[d] || m.en) }))];
  return list.map((x, qi) => {
    const order = seededOrder(l.id + qi, x.opts.length);
    return { q: cv(x.q), why: cv(x.why), opts: order.map(i => cv(x.opts[i])), a: order.indexOf(x.a) };
  });
}

/* ============ Extra languages ============ */
// Each lang_xx.js file adds its interface text to I18N and calls addLanguage()
// with translated lessons (same option order as English), missions, video
// captions and labels, and the vocabulary list in GLOSSARY order.
const GLOSS_TR = {};
function addLanguage(code, c) {
  for (const l of LESSONS) {
    const x = c.lessons[l.id];
    if (!x) continue;
    l[code] = { title: x.title, try: x.try, body: x.body, q: x.quiz[0][0], opts: x.quiz[0][1], why: x.quiz[0][2] };
    (l.more || []).forEach((m, j) => { const qq = x.quiz[j + 1]; if (qq) m[code] = { q: qq[0], opts: qq[1], why: qq[2] }; });
    if (x.mission && l.mission) l.mission[code] = x.mission;
    (x.video || []).forEach((v, i) => {
      const sc = l.video[i];
      if (!sc || !v) return;
      sc[code] = v[0];
      if (v[1]) { sc.lab = sc.lab || {}; sc.lab[code] = v[1]; }
    });
  }
  if (c.glossary) GLOSS_TR[code] = c.glossary;
}
function glossaryFor(g) { const tr = GLOSS_TR[lang]; return tr ? tr[GLOSSARY.indexOf(g)] || null : null; }
