/* ============ Lessons (each has live data + English and Chinese text) ============ */
const live = html => `<div class="live-box"><span class="live-label">${t("l.live")}</span>${html}</div>`;
const key = html => `<div class="key-idea"><b>${t("l.key")}</b> ${html}</div>`;
const B = (cls, txt) => `<b class="${cls}">${txt}</b>`;

const LESSONS = [
  {
    id: "basics", a: 0, tryIt: {},
    data: () => ({ n: STOCKS.length, mk: new Set(STOCKS.map(s => s.mkt)).size, us: STOCKS.filter(s => s.mkt === "US").length, tw: STOCKS.filter(s => s.mkt === "TW").length }),
    en: {
      title: "What is a stock?", try: "Browse the watchlist",
      body: d => `
        <p>A company is owned by its <b>shareholders</b>. A <b>stock</b>, also called a <b>share</b>, is one small slice of that ownership. Apple has roughly 15 billion shares, so owning one share means owning a very tiny piece of Apple.</p>
        <p>Companies first sell shares to raise money. After that, people buy and sell shares with each other on a <b>stock exchange</b>, such as Nasdaq and the New York Stock Exchange in the US, or the Taiwan Stock Exchange.</p>
        <p>The price changes all day because buyers and sellers keep agreeing on new prices. When more people want to buy than sell, the price goes up. When more want to sell, it goes down.</p>
        ${key("a stock price is what buyers and sellers agree a slice of the company is worth right now.")}
        ${live(`The watchlist has <b>${d.n} stocks</b> from ${d.mk} markets, including ${d.us} from the US and ${d.tw} from Taiwan. Each one has a short code called a <b>ticker</b>: AAPL is Apple, and 2330 is TSMC.`)}`,
      q: "What does owning one share of a company mean?",
      opts: ["You own a small piece of the company", "You lent the company money and it pays you back with interest", "You work for the company"],
      why: "A share is part ownership. Lending money to a company is called a bond, which is a different kind of investment.",
    },
    zh: {
      title: "什麼是股票？", try: "瀏覽觀察清單",
      body: d => `
        <p>公司是由<b>股東</b>擁有的。<b>股票</b>就是公司所有權的一小部分。蘋果大約有 150 億股，所以持有一股，就代表擁有蘋果非常非常小的一部分。</p>
        <p>公司一開始賣股票來籌措資金。之後，大家在<b>證券交易所</b>互相買賣股票，例如美國的那斯達克、紐約證券交易所，或是台灣證券交易所。</p>
        <p>股價整天都在變，因為買方和賣方不斷談出新的價格。想買的人比想賣的人多，價格就上漲；想賣的人比較多，價格就下跌。</p>
        ${key("股價就是買方和賣方現在同意這一小部分公司值多少錢。")}
        ${live(`觀察清單裡有來自 ${d.mk} 個市場的 <b>${d.n} 檔股票</b>，其中 ${d.us} 檔美股、${d.tw} 檔台股。每一檔都有一個簡短的<b>股票代號</b>：AAPL 是蘋果，2330 是台積電。`)}`,
      q: "持有一家公司的一股，代表什麼？",
      opts: ["你擁有這家公司的一小部分", "你借錢給公司，公司會連本帶利還你", "你在這家公司上班"],
      why: "股票代表部分所有權。借錢給公司叫做債券，是另一種投資。",
    },
  },
  {
    id: "buysell", a: 1, tryIt: { qty: 1 },
    data: () => {
      const s = selected, p = price(s);
      return { s, p: fmtP(s, p), p10: fmtP(s, 10 * p), usd10: market[s].mkt === "TW" ? fmt$(10 * usd(s)) : null };
    },
    en: {
      title: "Buying and selling shares", try: "Buy 1 share",
      body: d => `
        <p>To buy, you pick a stock and how many shares you want. The cost is the number of shares times the price.</p>
        <p>You make money if you later sell for <b>more</b> than you paid, and lose money if you sell for <b>less</b>. Until you sell, any gain or loss exists only on paper and can still change.</p>
        ${key("cost = shares × price. Profit = (sell price − buy price) × shares.")}
        ${live(`${d.s} costs <b>${d.p}</b> per share, so 10 shares would cost <b>${d.p10}</b>.${d.usd10 ? ` That is about <b>${d.usd10}</b> in US dollars.` : ""}`)}`,
      q: "You buy 5 shares at $100 each and later sell them at $120 each. What is your profit?",
      opts: ["$20", "$100", "$600"],
      why: "Each share gained $20, and you had 5 of them: (120 − 100) × 5 = $100. The $600 is the total you get back when you sell.",
    },
    zh: {
      title: "買進和賣出股票", try: "買進 1 股",
      body: d => `
        <p>買股票時，你要選一檔股票和想買的股數。成本就是股數乘以股價。</p>
        <p>之後如果賣出的價格比買進價<b>高</b>，你就賺錢；如果比較<b>低</b>，你就虧錢。在賣出之前，賺或賠都只是帳面上的，還會繼續變動。</p>
        ${key("成本 = 股數 × 股價。獲利 = （賣出價 − 買進價）× 股數。")}
        ${live(`${d.s} 每股 <b>${d.p}</b>，所以 10 股要 <b>${d.p10}</b>。${d.usd10 ? `約等於 <b>${d.usd10}</b> 美元。` : ""}`)}`,
      q: "你用每股 $100 買了 5 股，之後以每股 $120 賣出。你賺了多少？",
      opts: ["$20", "$100", "$600"],
      why: "每股賺 $20，你有 5 股：（120 − 100）× 5 = $100。$600 是賣出時拿回的總金額。",
    },
  },
  {
    id: "pnl", a: 1, tryIt: {},
    data: () => {
      const { mv, total } = portfolioTotals(), change = total - START_CASH;
      return { cash: fmt$(state.cash), mv: fmt$(mv), n: Object.keys(state.holdings).length, total: fmt$(total), up: change >= 0, amt: fmt$(Math.abs(change)) };
    },
    en: {
      title: "Profit, loss and portfolio value", try: "Look at your holdings",
      body: d => `
        <p>Your <b>portfolio</b> is everything in your account: your cash plus all the stocks you own.</p>
        <p><b>P&amp;L</b> stands for profit and loss. The Holdings table compares each stock's current value with your <b>average cost</b>, which is what you paid per share on average across all your buys.</p>
        <ul>
          <li><b>Unrealized</b> P&amp;L is a gain or loss on stocks you still own. It changes every time the price moves.</li>
          <li><b>Realized</b> P&amp;L is locked in once you sell.</li>
        </ul>
        ${key("portfolio value = cash + the current value of every stock you own.")}
        ${live(`You have <b>${d.cash}</b> in cash and <b>${d.mv}</b> in ${d.n} stock${d.n === 1 ? "" : "s"}, for a total of <b>${d.total}</b>. That is ${B(d.up ? "pos" : "neg", `${d.up ? "up" : "down"} ${d.amt}`)} from the $100,000 you started with.`)}`,
      q: "You buy the same number of shares twice: once at $50 and once at $70. What is your average cost per share?",
      opts: ["$50", "$60", "$70"],
      why: "Equal amounts bought at $50 and $70 average out to $60 per share.",
    },
    zh: {
      title: "損益和投資組合價值", try: "看看你的持股",
      body: d => `
        <p>你的<b>投資組合</b>就是帳戶裡的所有東西：現金加上你持有的所有股票。</p>
        <p><b>損益</b>就是賺和賠。持股表會把每檔股票的現值和你的<b>平均成本</b>比較，平均成本就是你所有買進的每股平均價格。</p>
        <ul>
          <li><b>未實現</b>損益是你還持有的股票的賺賠，每次股價變動都會改變。</li>
          <li><b>已實現</b>損益是賣出之後就確定的賺賠。</li>
        </ul>
        ${key("投資組合價值 = 現金 + 你持有的每檔股票的現值。")}
        ${live(`你有 <b>${d.cash}</b> 現金，以及 ${d.n} 檔股票共 <b>${d.mv}</b>，總共 <b>${d.total}</b>。和一開始的 $100,000 相比，${B(d.up ? "pos" : "neg", `${d.up ? "多了" : "少了"} ${d.amt}`)}。`)}`,
      q: "你分兩次買進相同股數：一次 $50，一次 $70。你的每股平均成本是多少？",
      opts: ["$50", "$60", "$70"],
      why: "在 $50 和 $70 各買相同數量，平均下來每股 $60。",
    },
  },
  {
    id: "chart", a: 0, tryIt: {},
    data: () => {
      const s = selected, a = series(s), p = price(s), last90 = a.slice(-91);
      const lo = Math.min(...last90), hi = Math.max(...last90), c30 = p / a[a.length - 31] - 1;
      return { s, c30: fmtPct(c30), pos: c30 >= 0, lo: fmtP(s, lo), hi: fmtP(s, hi), where: Math.round((p - lo) / ((hi - lo) || 1) * 100) };
    },
    en: {
      title: "Reading a price chart", try: "Hover over the chart",
      body: d => `
        <p>The chart on the Trade tab shows the price over the last 90 trading days. The left side is older and the dot on the right edge is today's live price.</p>
        <p>Look at the direction over weeks, not single days. A line that climbs from left to right is an <b>uptrend</b>. One that slides down is a <b>downtrend</b>. Prices wiggle every day, so one bad day on its own tells you very little.</p>
        <p>The <b>90-day high and low</b> show the range the price has moved in. A price near the high has been rising, and a price near the low has been falling.</p>
        ${key("zoom out. The trend over weeks matters more than today's move.")}
        ${live(`${d.s} is ${B(d.pos ? "pos" : "neg", d.c30)} over 30 days. Its 90-day range is ${d.lo} to ${d.hi}, and today it sits <b>${d.where}%</b> of the way up from the low.`)}`,
      q: "A stock fell 2% today but is up 15% over the last three months. What is the bigger picture?",
      opts: ["It has been in an uptrend, and today is a small dip", "It is crashing and should be sold right away", "Charts can't tell you anything"],
      why: "A 2% dip inside a 15% climb is normal day-to-day noise. The longer trend is still up.",
    },
    zh: {
      title: "看懂價格走勢圖", try: "把滑鼠移到走勢圖上",
      body: d => `
        <p>交易頁面的走勢圖顯示最近 90 個交易日的價格。左邊是比較舊的，右邊的圓點是今天的即時價格。</p>
        <p>要看幾週的方向，而不是單一一天。從左往右往上爬的線是<b>上升趨勢</b>，往下滑的是<b>下降趨勢</b>。股價每天都會上下波動，所以只看一天的下跌，能看出的東西很少。</p>
        <p><b>90 日最高和最低</b>顯示價格的波動範圍。價格接近最高點代表一直在上漲，接近最低點代表一直在下跌。</p>
        ${key("把眼光放遠。幾週的趨勢比今天的漲跌更重要。")}
        ${live(`${d.s} 30 天漲跌 ${B(d.pos ? "pos" : "neg", d.c30)}。90 日區間是 ${d.lo} 到 ${d.hi}，今天的位置在從最低點往上 <b>${d.where}%</b> 的地方。`)}`,
      q: "一檔股票今天跌了 2%，但過去三個月漲了 15%。整體來看是怎樣？",
      opts: ["它處於上升趨勢，今天只是小幅回落", "它正在崩盤，應該馬上賣掉", "走勢圖看不出任何東西"],
      why: "上漲 15% 當中的 2% 下跌，只是正常的每日波動。較長期的趨勢仍然向上。",
    },
  },
  {
    id: "news", a: 0, tryIt: {},
    data: () => {
      const latest = state.news.find(n => !n.recap);
      return { latest: latest ? newsHeadline(latest) : null, chg: latest ? fmtPct(latest.chg) : "", ups: STOCKS.filter(s => dayChange(s.sym) > 0).length, n: STOCKS.length };
    },
    en: {
      title: "How news moves prices", try: "Read the market news",
      body: d => `
        <p>Prices move the most when there is news. There are three main kinds:</p>
        <ul>
          <li><b>Company news</b> such as profit reports, new products or lawsuits. It moves one stock, sometimes a lot in a single day.</li>
          <li><b>Industry news</b> affects similar companies together. When demand for AI chips jumps, NVIDIA, TSMC and MediaTek often rise together.</li>
          <li><b>Market-wide news</b> such as interest rates, inflation or the economy. It moves almost every stock at once.</li>
        </ul>
        <p>Prices react within seconds, so by the time you read a headline the move has usually already happened. Buying <i>because</i> of a headline you just saw is a common beginner mistake.</p>
        ${key("news moves prices fast. By the time you hear it, it's usually already in the price.")}
        ${live(`${d.latest ? `Latest headline: <b>${d.latest}</b> (${d.chg}). ` : ""}Right now <b>${d.ups} of ${d.n}</b> stocks are up today. Watch the Market news card on the Trade tab to see how headlines move prices.`)}`,
      q: "The central bank unexpectedly raises interest rates. What usually happens?",
      opts: ["Most stocks move at the same time, often down", "Only bank stocks move", "Nothing; stocks ignore interest rates"],
      why: "Interest rates affect the whole economy, so news like this moves almost every stock. Higher rates usually push prices down.",
    },
    zh: {
      title: "新聞如何影響股價", try: "看市場新聞",
      body: d => `
        <p>有新聞時，股價變動最大。新聞主要有三種：</p>
        <ul>
          <li><b>公司新聞</b>，例如財報、新產品或訴訟。它會影響單一股票，有時一天就大漲或大跌。</li>
          <li><b>產業新聞</b>會同時影響類似的公司。AI 晶片需求大增時，輝達、台積電和聯發科常常一起上漲。</li>
          <li><b>整體市場新聞</b>，例如利率、通膨或經濟狀況。它幾乎會同時影響每一檔股票。</li>
        </ul>
        <p>股價幾秒內就會反應，所以等你看到標題時，漲跌通常已經發生了。<i>因為</i>剛看到一則標題就買進，是新手常犯的錯。</p>
        ${key("新聞讓股價變動得很快。等你聽到時，通常已經反映在股價上了。")}
        ${live(`${d.latest ? `最新標題：<b>${d.latest}</b>（${d.chg}）。` : ""}現在 <b>${d.n} 檔中有 ${d.ups} 檔</b>今天上漲。看看交易頁面的市場新聞，觀察標題怎麼影響股價。`)}`,
      q: "中央銀行意外升息。通常會發生什麼事？",
      opts: ["大部分股票同時變動，而且常常下跌", "只有銀行股會變動", "沒事，股票不受利率影響"],
      why: "利率影響整體經濟，所以這類新聞幾乎會影響每一檔股票。升息通常會讓股價下跌。",
    },
  },
  {
    id: "ma", a: 0, tryIt: {},
    data: () => { const s = selected, an = analyze(s), c = cur(s); return { s, a: c + an.s20.toFixed(2), b: c + an.s50.toFixed(2), up: an.s20 > an.s50 }; },
    en: {
      title: "Trends and moving averages", try: "See the trend on the chart",
      body: d => `
        <p>A <b>moving average</b> is the average closing price over the last few days. It smooths out daily wiggles so the trend is easier to see. The dashed line on the chart is the 20-day average.</p>
        <ul>
          <li>The <b>20-day average</b> shows the recent trend.</li>
          <li>The <b>50-day average</b> shows the longer trend.</li>
        </ul>
        <p>When the 20-day average is above the 50-day, recent prices are higher than older ones, which suggests an uptrend. When it is below, it suggests a downtrend. Trends in real markets often last for weeks, which is why traders watch them.</p>
        ${key("20-day above 50-day suggests an uptrend so far. It doesn't promise what comes next.")}
        ${live(`For ${d.s}, the 20-day average is <b>${d.a}</b> and the 50-day is <b>${d.b}</b>, so the trend looks ${B(d.up ? "pos" : "neg", d.up ? "up" : "down")}.`)}`,
      q: "A stock's 20-day average is $105 and its 50-day average is $98. What does that suggest?",
      opts: ["Recent prices are higher than before: an uptrend", "Recent prices are lower than before: a downtrend", "The stock is guaranteed to keep rising"],
      why: "The recent average is higher than the longer one, so the trend has been up. It describes the past; it isn't a guarantee.",
    },
    zh: {
      title: "趨勢和移動平均線", try: "在走勢圖上看趨勢",
      body: d => `
        <p><b>移動平均線</b>（均線）是最近幾天收盤價的平均。它把每天的小波動抹平，讓趨勢更容易看清楚。走勢圖上的虛線就是 20 日均線。</p>
        <ul>
          <li><b>20 日均線</b>顯示近期的趨勢。</li>
          <li><b>50 日均線</b>顯示較長期的趨勢。</li>
        </ul>
        <p>20 日均線高於 50 日均線時，代表最近的價格比之前高，暗示上升趨勢；低於時則暗示下降趨勢。真實市場的趨勢常常會持續幾週，所以交易者很重視它。</p>
        ${key("20 日均線高於 50 日均線，代表到目前為止是上升趨勢，但不保證之後會怎樣。")}
        ${live(`${d.s} 的 20 日均線是 <b>${d.a}</b>，50 日均線是 <b>${d.b}</b>，所以趨勢看起來${B(d.up ? "pos" : "neg", d.up ? "向上" : "向下")}。`)}`,
      q: "一檔股票的 20 日均線是 $105，50 日均線是 $98。這代表什麼？",
      opts: ["最近的價格比之前高：上升趨勢", "最近的價格比之前低：下降趨勢", "這檔股票保證會繼續上漲"],
      why: "近期平均高於較長期的平均，所以趨勢一直向上。這描述的是過去，並不是保證。",
    },
  },
  {
    id: "rsi", a: 0, tryIt: {},
    data: () => { const s = selected, an = analyze(s); return { s, r: an.rsi.toFixed(0), zone: an.rsi > 70 ? 2 : an.rsi < 30 ? 0 : 1, mom: fmtPct(an.mom30), pos: an.mom30 >= 0 }; },
    en: {
      title: "Momentum and RSI", try: "Open the coach's signals",
      body: d => `
        <p><b>Momentum</b> is how strongly a price has moved recently. The coach looks at the change over the last 30 days.</p>
        <p><b>RSI</b> (Relative Strength Index) compares the size of recent up days with recent down days over 14 days and turns it into a number from 0 to 100.</p>
        <ul>
          <li><b>Above 70:</b> the price has risen fast and may be <b>overbought</b>, so it could pull back.</li>
          <li><b>Below 30:</b> the price has fallen fast and may be <b>oversold</b>, so it could bounce.</li>
          <li><b>30 to 70:</b> neutral.</li>
        </ul>
        <p>These are warnings, not rules. A strong stock can stay overbought for months.</p>
        ${key("RSI tells you how fast a price has moved, not where it will go.")}
        ${live(`${d.s} has an RSI of <b>${d.r}</b> (${["oversold", "neutral", "overbought"][d.zone]}) and momentum of ${B(d.pos ? "pos" : "neg", d.mom)} over 30 days.`)}`,
      q: "A stock's RSI is 82. What does that usually mean?",
      opts: ["It has risen fast and may be overbought", "It is cheap and must go up", "The company is losing money"],
      why: "An RSI above 70 means recent gains have been unusually strong. It says nothing about the company's profits.",
    },
    zh: {
      title: "動能和 RSI", try: "打開教練的訊號",
      body: d => `
        <p><b>動能</b>是價格最近變動的力道。教練會看過去 30 天的漲跌。</p>
        <p><b>RSI</b>（相對強弱指標）比較 14 天內上漲日和下跌日的幅度，轉換成 0 到 100 的數字。</p>
        <ul>
          <li><b>高於 70：</b>價格漲得很快，可能<b>超買</b>，有機會回檔。</li>
          <li><b>低於 30：</b>價格跌得很快，可能<b>超賣</b>，有機會反彈。</li>
          <li><b>30 到 70：</b>中性。</li>
        </ul>
        <p>這些是警訊，不是規則。強勢的股票可能連續好幾個月都處於超買。</p>
        ${key("RSI 告訴你價格變動得多快，而不是它會往哪裡去。")}
        ${live(`${d.s} 的 RSI 是 <b>${d.r}</b>（${["超賣", "中性", "超買"][d.zone]}），30 天動能為 ${B(d.pos ? "pos" : "neg", d.mom)}。`)}`,
      q: "一檔股票的 RSI 是 82。這通常代表什麼？",
      opts: ["它漲得很快，可能超買了", "它很便宜，一定會漲", "這家公司在虧錢"],
      why: "RSI 高於 70 代表最近的漲幅特別強，和公司有沒有賺錢無關。",
    },
  },
  {
    id: "risk", a: 0, tryIt: { pick: "mostVolatile" },
    data: () => {
      const r = STOCKS.map(s => ({ sym: s.sym, v: volatility(series(s.sym)) })).sort((a, b) => b.v - a.v);
      return { hi: r[0].sym, hiV: pct0(r[0].v), lo: r[r.length - 1].sym, loV: pct0(r[r.length - 1].v) };
    },
    en: {
      title: "Risk and volatility", try: "Look at the most volatile stock",
      body: d => `
        <p><b>Volatility</b> measures how much a price swings up and down. This app shows it as a yearly percentage. A higher number means bigger swings.</p>
        <p>Bigger swings work both ways: bigger possible gains and bigger possible losses. A useful question before buying is: <i>if this dropped 30%, could I stay calm and not panic-sell?</i></p>
        ${key("higher volatility means a bumpier ride, in both directions.")}
        ${live(`The most volatile stock right now is <b>${d.hi}</b> at ${d.hiV} a year. The calmest is <b>${d.lo}</b> at ${d.loV}.`)}`,
      q: "Stock A has 12% volatility and Stock B has 45%. Which one usually swings more?",
      opts: ["Stock B", "Stock A", "They swing about the same"],
      why: "45% volatility means much bigger typical moves than 12%.",
    },
    zh: {
      title: "風險和波動度", try: "看波動最大的股票",
      body: d => `
        <p><b>波動度</b>衡量價格上下擺動的幅度。這個 app 用每年的百分比表示，數字越大代表起伏越大。</p>
        <p>起伏大是雙向的：可能賺得多，也可能賠得多。買進前可以問自己：<i>如果它跌 30%，我能保持冷靜、不恐慌賣出嗎？</i></p>
        ${key("波動越大，過程越顛簸，上下都是。")}
        ${live(`目前波動最大的是 <b>${d.hi}</b>，每年約 ${d.hiV}；最平穩的是 <b>${d.lo}</b>，約 ${d.loV}。`)}`,
      q: "股票 A 的波動度是 12%，股票 B 是 45%。哪一檔通常起伏比較大？",
      opts: ["股票 B", "股票 A", "差不多"],
      why: "45% 的波動度代表一般的漲跌幅比 12% 大很多。",
    },
  },
  {
    id: "diversify", a: 0, tryIt: { sym: "0050" },
    data: () => {
      const { total } = portfolioTotals();
      const rows = Object.entries(state.holdings).map(([sym, h]) => ({ sym, v: h.shares * usd(sym) })).sort((a, b) => b.v - a.v);
      return { n: rows.length, mk: new Set(rows.map(r => market[r.sym].mkt)).size, big: rows[0] ? rows[0].sym : "", bigP: rows[0] ? (rows[0].v / total * 100).toFixed(1) + "%" : "" };
    },
    en: {
      title: "Don't put all your eggs in one basket", try: "Look at the 0050 ETF",
      body: d => `
        <p><b>Diversification</b> means spreading your money across many companies, industries and even countries. If one company has bad news, the others soften the hit.</p>
        <p><b>Position sizing</b> means deciding how much money goes into any one stock. The auto-pilot here never puts more than 15% of the portfolio into a single stock.</p>
        <p>A fund such as an <b>ETF</b> holds many stocks at once. <b>0050</b> in the watchlist is an ETF that holds about 50 of Taiwan's biggest companies, so one purchase gives you a slice of all of them.</p>
        ${key("no single stock should be able to sink your whole portfolio.")}
        ${live(d.n ? `You own <b>${d.n}</b> stock${d.n === 1 ? "" : "s"} across <b>${d.mk}</b> market${d.mk === 1 ? "" : "s"}. Your biggest position, <b>${d.big}</b>, is <b>${d.bigP}</b> of your portfolio.` : "You don't own any stocks yet. Once you do, this box will show how spread out your money is.")}`,
      q: "Which portfolio is the most diversified?",
      opts: ["10 stocks across tech, banking and telecom in two countries", "All your money in one stock you really like", "Two chip-making companies"],
      why: "Different industries and countries tend not to fall at the same time, which spreads the risk.",
    },
    zh: {
      title: "不要把雞蛋放在同一個籃子裡", try: "看 0050 ETF",
      body: d => `
        <p><b>分散投資</b>是把錢分散到許多公司、產業，甚至不同國家。一家公司有壞消息時，其他的可以減輕衝擊。</p>
        <p><b>部位大小</b>是決定每檔股票要放多少錢。這裡的自動駕駛不會把超過 15% 的投資組合放在同一檔股票。</p>
        <p><b>ETF</b> 這類基金一次持有許多股票。觀察清單裡的 <b>0050</b> 是持有台灣約 50 家最大公司的 ETF，買一次就等於擁有它們每一家的一小部分。</p>
        ${key("不應該有任何一檔股票能拖垮你整個投資組合。")}
        ${live(d.n ? `你持有 <b>${d.n}</b> 檔股票，分布在 <b>${d.mk}</b> 個市場。最大的部位 <b>${d.big}</b> 占投資組合的 <b>${d.bigP}</b>。` : "你還沒有持股。買進之後，這裡會顯示你的資金分散得如何。")}`,
      q: "哪一個投資組合最分散？",
      opts: ["兩個國家、科技、金融和電信產業共 10 檔股票", "所有錢都放在一檔你很喜歡的股票", "兩家晶片公司"],
      why: "不同產業和國家通常不會同時下跌，這樣可以分散風險。",
    },
  },
  {
    id: "whenact", a: 0, tryIt: {},
    data: () => { const co = coach(selected); return { s: selected, sum: co.summary, first: co.actions[0].replace(/<button[^>]*>.*?<\/button>/g, "") }; },
    en: {
      title: "When to buy and when to sell", try: "Read the Coach card",
      body: d => `
        <p>Good traders decide their rules <b>before</b> they trade, so fear and excitement don't make the decision for them. Here is a simple plan. The Coach on the Trade tab follows it, and the Journal tab checks every trade you make against it.</p>
        <div class="checklist">
          <div><h4>Consider buying when…</h4><ul>
            <li>The trend is up (20-day average above the 50-day).</li>
            <li>It isn't overbought (RSI below 70).</li>
            <li>You can say <i>why</i> you're buying in one sentence.</li>
            <li>The amount is small: about 5–10% of your portfolio.</li>
            <li>You already know the price where you'd sell if you're wrong.</li></ul></div>
          <div><h4>Consider selling when…</h4><ul>
            <li>It hits your <b>stop-loss</b>, for example 8% below what you paid.</li>
            <li>The trend turns down and your reason for buying no longer holds.</li>
            <li>It has grown into too big a part of your portfolio.</li>
            <li>It has gained a lot, and you want to lock in part of the profit.</li></ul></div>
          <div><h4>Try not to…</h4><ul>
            <li>Buy just because everyone is talking about it (FOMO, fear of missing out).</li>
            <li>Panic-sell after one bad day.</li>
            <li>Buy more of a falling stock only to "get back to even."</li>
            <li>Put everything into one stock.</li></ul></div>
        </div>
        ${key("plan the exit before you enter. Know why you're buying, how much, and when you'd sell.")}
        ${live(`The Coach's view on <b>${d.s}</b>: ${d.sum}<br><br><b>Its suggestion:</b> ${d.first}`)}`,
      q: "You bought a stock at $100 with a rule to sell if it falls 8%. It's now $91. What does your plan say?",
      opts: ["Sell, because it's below your $92 stop-loss", "Buy more to lower your average cost", "Ignore it; it will come back"],
      why: "8% below $100 is $92, and $91 is past that line. Sticking to the rule keeps a small loss from growing.",
    },
    zh: {
      title: "什麼時候買，什麼時候賣", try: "看教練卡片",
      body: d => `
        <p>好的交易者會在交易<b>之前</b>就定好規則，這樣恐懼和興奮就不會替他們做決定。下面是一個簡單的計畫。交易頁面的教練會照著它給建議，交易日誌也會用它檢查你的每一筆交易。</p>
        <div class="checklist">
          <div><h4>可以考慮買進的時候…</h4><ul>
            <li>趨勢向上（20 日均線高於 50 日均線）。</li>
            <li>沒有超買（RSI 低於 70）。</li>
            <li>你能用一句話說出<i>為什麼</i>要買。</li>
            <li>金額不大：約投資組合的 5–10%。</li>
            <li>你已經知道判斷錯誤時要在什麼價格賣出。</li></ul></div>
          <div><h4>可以考慮賣出的時候…</h4><ul>
            <li>碰到你的<b>停損</b>，例如比買進價低 8%。</li>
            <li>趨勢轉為向下，而且當初買進的理由已經不成立。</li>
            <li>它在投資組合中占比變得太大。</li>
            <li>它已經漲了很多，你想鎖住部分獲利。</li></ul></div>
          <div><h4>盡量不要…</h4><ul>
            <li>只因為大家都在討論就買（FOMO，錯失恐懼）。</li>
            <li>因為一天下跌就恐慌賣出。</li>
            <li>只為了「攤平回本」而加碼下跌中的股票。</li>
            <li>把所有錢都放在一檔股票。</li></ul></div>
        </div>
        ${key("進場前先規劃出場。知道為什麼買、買多少，以及什麼時候賣。")}
        ${live(`教練對 <b>${d.s}</b> 的看法：${d.sum}<br><br><b>它的建議：</b>${d.first}`)}`,
      q: "你以 $100 買進一檔股票，規則是下跌 8% 就賣。現在是 $91。你的計畫怎麼說？",
      opts: ["賣出，因為已經低於 $92 的停損價", "加碼買進來降低平均成本", "不用管，它會漲回來"],
      why: "$100 的 8% 以下是 $92，$91 已經超過這條線。遵守規則能避免小虧擴大。",
    },
  },
  {
    id: "taiwan", a: 0, tryIt: { sym: "2330" },
    data: () => { const p = price("2330"); return { p: fmtP("2330", p), usd: fmt$(usd("2330")), lot: fmtP("2330", p * 1000), rate: MARKETS.TW.perUSD }; },
    en: {
      title: "Investing in Taiwan stocks", try: "Look at TSMC (2330)",
      body: d => `
        <p>The <b>Taiwan Stock Exchange</b> (臺灣證券交易所, TWSE) uses numbers instead of letters for tickers: <b>2330</b> is TSMC and <b>2317</b> is Hon Hai, also known as Foxconn. ETFs usually start with 00, like <b>0050</b>.</p>
        <p>Prices are in <b>New Taiwan dollars (NT$)</b>. This app keeps your cash in US dollars and converts at a fixed NT$${d.rate} = US$1. In real life the exchange rate moves every day, so a Taiwan stock can rise in NT$ and still lose value in US$. That is called <b>currency risk</b>.</p>
        <div class="facts">
          <div class="fact"><div class="fact-k">Trading hours</div><div class="fact-v">9:00 to 13:30, Monday to Friday, Taiwan time</div></div>
          <div class="fact"><div class="fact-k">Board lot (一張)</div><div class="fact-v">1,000 shares. Odd-lot trading (零股) lets you buy fewer.</div></div>
          <div class="fact"><div class="fact-k">Daily price limit</div><div class="fact-v">At most 10% up or down from the previous close in one day. This app enforces it and shows a tag.</div></div>
          <div class="fact"><div class="fact-k">Price steps</div><div class="fact-v">Prices move in fixed steps. Above NT$1,000 the step is NT$5, so TSMC can't trade at NT$1,083.</div></div>
          <div class="fact"><div class="fact-k">Colors</div><div class="fact-v"><b>Red means up</b> and green means down, the opposite of this app and of US apps.</div></div>
        </div>
        <p>TSMC is by far the largest company on the exchange, so its price has a big effect on the whole Taiwan market.</p>
        ${key("Taiwan stocks trade in NT$, in lots of 1,000 shares, with a 10% daily limit, and red means up.")}
        ${live(`TSMC (2330) is <b>${d.p}</b> per share, about <b>${d.usd}</b>. One full board lot of 1,000 shares would cost <b>${d.lot}</b>. In this app you can buy single shares, like odd-lot trading.`)}`,
      q: "On a Taiwanese stock app, a price shown in red means…",
      opts: ["The price went up", "The price went down", "Trading is paused"],
      why: "In Taiwan, as in mainland China, Hong Kong and Japan, red marks a rising price. In the US and Europe it is usually the other way round.",
    },
    zh: {
      title: "投資台股", try: "看台積電（2330）",
      body: d => `
        <p><b>台灣證券交易所</b>（TWSE）用數字而不是英文字母當股票代號：<b>2330</b> 是台積電，<b>2317</b> 是鴻海。ETF 的代號通常以 00 開頭，例如 <b>0050</b>。</p>
        <p>價格以<b>新台幣（NT$）</b>計算。這個 app 用美元保管你的現金，並以固定的 NT$${d.rate} = US$1 換算。現實中匯率每天都在變，所以台股可能以新台幣計算上漲，但換成美元卻變少。這叫做<b>匯率風險</b>。</p>
        <div class="facts">
          <div class="fact"><div class="fact-k">交易時間</div><div class="fact-v">週一至週五 9:00 到 13:30（台灣時間）</div></div>
          <div class="fact"><div class="fact-k">一張</div><div class="fact-v">1,000 股。零股交易可以買少於一張。</div></div>
          <div class="fact"><div class="fact-k">漲跌幅限制</div><div class="fact-v">一天最多比昨收上漲或下跌 10%。這個 app 也有這個限制，並會顯示標籤。</div></div>
          <div class="fact"><div class="fact-k">升降單位</div><div class="fact-v">價格以固定的級距變動。超過 NT$1,000 時級距是 NT$5，所以台積電不會出現 NT$1,083 的價格。</div></div>
          <div class="fact"><div class="fact-k">顏色</div><div class="fact-v">台股<b>紅色代表上漲</b>、綠色代表下跌，和這個 app 以及美國的 app 相反。</div></div>
        </div>
        <p>台積電是交易所裡規模最大的公司，所以它的股價對整個台股影響很大。</p>
        ${key("台股以新台幣交易、一張 1,000 股、每天漲跌幅限制 10%，而且紅色代表上漲。")}
        ${live(`台積電（2330）每股 <b>${d.p}</b>，約 <b>${d.usd}</b>。一整張 1,000 股要 <b>${d.lot}</b>。在這個 app 裡你可以只買一股，就像零股交易。`)}`,
      q: "在台灣的看盤 app 上，價格顯示紅色代表…",
      opts: ["價格上漲", "價格下跌", "暫停交易"],
      why: "在台灣，和中國大陸、香港、日本一樣，紅色代表上漲。在美國和歐洲通常相反。",
    },
  },
  {
    id: "predict", a: 0, tryIt: {},
    data: () => { const { total } = portfolioTotals(), c = total - START_CASH; return { up: c >= 0, amt: fmt$(Math.abs(c)), p: fmtPct(c / START_CASH) }; },
    en: {
      title: "Why nobody can predict the market", try: "Try auto-pilot",
      body: d => `
        <p>Every signal in these lessons is a <b>hint, not a promise</b>. Prices react to news that nobody knows in advance: a surprise profit report, a new law, a factory fire.</p>
        <p>This simulator works the same way. Trends tend to last a while, so the signals help a little, but surprise news and random moves often overwhelm them. Turn on auto-pilot and watch: it wins some trades and loses others.</p>
        <p>Even professionals find it hard. Over long periods, most professional fund managers fail to beat a simple fund that just holds the whole market.</p>
        <p>If you invest real money someday, a few habits help:</p>
        <ul>
          <li>Learn first, and think in years rather than days.</li>
          <li>Spread your money out, for example with a broad market fund.</li>
          <li>Only invest money you won't need soon.</li>
          <li>Watch out for fees, and for anyone promising guaranteed returns.</li>
          <li>Talk it over with someone you trust before you start.</li>
        </ul>
        ${key("anyone who says they can predict the market for sure is wrong, or selling something.")}
        ${live(`Your simulated account is ${B(d.up ? "pos" : "neg", `${d.up ? "up" : "down"} ${d.amt} (${d.p})`)} since you started.`)}`,
      q: "Can any AI or expert reliably predict tomorrow's stock prices?",
      opts: ["No. Signals can help you think, but nobody predicts prices reliably", "Yes, with enough data", "Only for big, famous companies"],
      why: "Markets react to new information that nobody has yet. That is why risk control and diversification matter more than predictions.",
    },
    zh: {
      title: "為什麼沒有人能預測市場", try: "試試自動駕駛",
      body: d => `
        <p>這些課程裡的每個訊號都是<b>提示，不是保證</b>。股價會因為沒人能事先知道的新聞而變動：意外的財報、新法律、工廠失火。</p>
        <p>這個模擬器也是一樣。趨勢通常會持續一陣子，所以訊號有一點幫助，但意外的新聞和隨機的波動常常會蓋過它們。開啟自動駕駛觀察看看：它有些交易賺、有些賠。</p>
        <p>就連專業人士也覺得很難。長期來看，大多數專業基金經理人都贏不過一檔單純持有整個市場的基金。</p>
        <p>如果有一天你要投資真的錢，這些習慣會有幫助：</p>
        <ul>
          <li>先學習，用「年」而不是「天」來思考。</li>
          <li>分散你的資金，例如投資涵蓋整個市場的基金。</li>
          <li>只投資短期內不會用到的錢。</li>
          <li>注意手續費，也要小心任何保證獲利的人。</li>
          <li>開始之前，先和你信任的人討論。</li>
        </ul>
        ${key("說自己一定能預測市場的人，不是錯了，就是想賣你東西。")}
        ${live(`你的模擬帳戶從開始到現在${B(d.up ? "pos" : "neg", `${d.up ? "賺了" : "虧了"} ${d.amt}（${d.p}）`)}。`)}`,
      q: "有任何 AI 或專家能可靠地預測明天的股價嗎？",
      opts: ["不能。訊號可以幫助思考，但沒有人能可靠地預測股價", "可以，只要資料夠多", "只有大公司可以"],
      why: "市場會對還沒有人知道的新資訊做出反應。所以控制風險和分散投資，比預測更重要。",
    },
  },
];
// Lesson text in the current language (简体中文 is converted from 繁體中文)
const LT = l => {
  if (lang !== "zhs") return l[lang] || l.en;
  const z = l.zh;
  return { title: toS(z.title), try: toS(z.try), q: toS(z.q), opts: toS(z.opts), why: toS(z.why), body: d => toS(z.body(d)) };
};
