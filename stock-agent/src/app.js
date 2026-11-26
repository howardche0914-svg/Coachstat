/* ============ Language ============ */
function load(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
function store(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
const LANG_KEY = "stockpilot-lang";
const LANGS = ["en", "zh", "zhs"];
function detectLang() {
  const n = (navigator.language || "").toLowerCase();
  if (!n.startsWith("zh")) return "en";
  return /(cn|sg|hans)/.test(n) ? "zhs" : "zh";
}
let lang = load(LANG_KEY) || detectLang();
if (!LANGS.includes(lang)) lang = "en";
const dictLang = () => lang === "zhs" ? "zh" : lang;   // 简体中文 uses the 繁體中文 dictionary, converted
function t(k, v = {}) {
  const d = I18N[dictLang()];
  const s = d[k] !== undefined ? d[k] : I18N.en[k];
  if (s === undefined) return k;
  let out = typeof s === "function" ? s(v)
    : typeof s === "string" ? s.replace(/\{(\w+)\}/g, (_, x) => v[x] !== undefined ? v[x] : "") : s;
  return lang === "zhs" ? toS(out) : out;
}
function applyStatic() {
  document.documentElement.lang = { en: "en", zh: "zh-Hant", zhs: "zh-Hans" }[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  document.querySelectorAll("[data-i18n-ph]").forEach(el => el.setAttribute("placeholder", t(el.dataset.i18nPh)));
  $("langSel").value = lang;
}

/* ============ Markets ============ */
// Cash is kept in US dollars. Taiwan stocks are priced in New Taiwan dollars
// and converted at a fixed, simulated exchange rate.
const MARKETS = {
  US: { cur: "$",   perUSD: 1,  vol: 0.009 },
  TW: { cur: "NT$", perUSD: 32, vol: 0.010 },
};
// Daily volatility of each industry's shared moves
const SECTORS = { chips: 0.014, tech: 0.008, finance: 0.007, consumer: 0.008, shipping: 0.016, telecom: 0.003, fund: 0 };

/* ============ Universe (starting prices are rough, simulated levels) ============ */
const STOCKS = [
  { sym: "AAPL",  name: "Apple",           zh: "蘋果 Apple",      short: "Apple",      zhShort: "蘋果",   base: 232,  drift: 0.0003, vol: 0.015, beta: 1.0, sector: "tech",     mkt: "US" },
  { sym: "MSFT",  name: "Microsoft",       zh: "微軟 Microsoft",  short: "Microsoft",  zhShort: "微軟",   base: 448,  drift: 0.0004, vol: 0.014, beta: 0.9, sector: "tech",     mkt: "US" },
  { sym: "NVDA",  name: "NVIDIA",          zh: "輝達 NVIDIA",     short: "NVIDIA",     zhShort: "輝達",   base: 138,  drift: 0.0007, vol: 0.028, beta: 1.6, sector: "chips",    mkt: "US" },
  { sym: "GOOGL", name: "Alphabet",        zh: "Alphabet（谷歌）", short: "Alphabet",   zhShort: "Alphabet", base: 182, drift: 0.0003, vol: 0.017, beta: 1.1, sector: "tech",   mkt: "US" },
  { sym: "AMZN",  name: "Amazon",          zh: "亞馬遜 Amazon",   short: "Amazon",     zhShort: "亞馬遜", base: 205,  drift: 0.0004, vol: 0.019, beta: 1.2, sector: "tech",     mkt: "US" },
  { sym: "META",  name: "Meta Platforms",  zh: "Meta",            short: "Meta",       zhShort: "Meta",   base: 585,  drift: 0.0005, vol: 0.021, beta: 1.3, sector: "tech",     mkt: "US" },
  { sym: "TSLA",  name: "Tesla",           zh: "特斯拉 Tesla",    short: "Tesla",      zhShort: "特斯拉", base: 248,  drift: 0.0002, vol: 0.034, beta: 1.8, sector: "consumer", mkt: "US" },
  { sym: "BRK.B", name: "Berkshire Hath.", zh: "波克夏 Berkshire", short: "Berkshire", zhShort: "波克夏", base: 462,  drift: 0.0003, vol: 0.010, beta: 0.6, sector: "finance",  mkt: "US" },
  { sym: "JPM",   name: "JPMorgan Chase",  zh: "摩根大通 JPMorgan", short: "JPMorgan", zhShort: "摩根大通", base: 244, drift: 0.0003, vol: 0.013, beta: 1.0, sector: "finance", mkt: "US" },
  { sym: "V",     name: "Visa",            zh: "Visa",            short: "Visa",       zhShort: "Visa",   base: 312,  drift: 0.0003, vol: 0.012, beta: 0.8, sector: "finance",  mkt: "US" },
  { sym: "NFLX",  name: "Netflix",         zh: "網飛 Netflix",    short: "Netflix",    zhShort: "網飛",   base: 892,  drift: 0.0004, vol: 0.023, beta: 1.2, sector: "consumer", mkt: "US" },
  { sym: "DIS",   name: "Walt Disney",     zh: "迪士尼 Disney",   short: "Disney",     zhShort: "迪士尼", base: 112,  drift: 0.0001, vol: 0.016, beta: 1.0, sector: "consumer", mkt: "US" },
  { sym: "2330",  name: "TSMC 台積電",       zh: "台積電",           short: "TSMC",       zhShort: "台積電", base: 1085, drift: 0.0005, vol: 0.020, beta: 1.1, sector: "chips",    mkt: "TW" },
  { sym: "2317",  name: "Hon Hai 鴻海",      zh: "鴻海",             short: "Hon Hai",    zhShort: "鴻海",   base: 212,  drift: 0.0003, vol: 0.022, beta: 1.0, sector: "tech",     mkt: "TW" },
  { sym: "2454",  name: "MediaTek 聯發科",   zh: "聯發科",           short: "MediaTek",   zhShort: "聯發科", base: 1340, drift: 0.0004, vol: 0.024, beta: 1.2, sector: "chips",    mkt: "TW" },
  { sym: "2308",  name: "Delta 台達電",      zh: "台達電",           short: "Delta",      zhShort: "台達電", base: 405,  drift: 0.0004, vol: 0.019, beta: 1.0, sector: "tech",     mkt: "TW" },
  { sym: "2412",  name: "Chunghwa Tel 中華電", zh: "中華電",          short: "Chunghwa Telecom", zhShort: "中華電", base: 126, drift: 0.0001, vol: 0.006, beta: 0.3, sector: "telecom", mkt: "TW" },
  { sym: "2881",  name: "Fubon 富邦金",      zh: "富邦金",           short: "Fubon",      zhShort: "富邦金", base: 88,   drift: 0.0003, vol: 0.013, beta: 0.9, sector: "finance",  mkt: "TW" },
  { sym: "2603",  name: "Evergreen 長榮",    zh: "長榮",             short: "Evergreen",  zhShort: "長榮",   base: 198,  drift: 0.0001, vol: 0.030, beta: 1.2, sector: "shipping", mkt: "TW" },
  { sym: "0050",  name: "Taiwan 50 ETF 元大台灣50", zh: "元大台灣50", short: "Taiwan 50 ETF", zhShort: "元大台灣50", base: 192, drift: 0.0003, vol: 0.011, beta: 1.0, sector: "fund", mkt: "TW" },
];
const HISTORY_DAYS = 180;
const TICK_MS = 2500;
const TICKS_PER_DAY = 26;   // one tick = 15 simulated minutes, 9:30 to 16:00
const START_CASH = 100000;
const TW_LIMIT = 0.10;      // Taiwan daily price limit: ±10% from previous close

/* ============ Random numbers ============ */
function mulberry32(a) {
  return function() {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let x = Math.imul(a ^ (a >>> 15), 1 | a);
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}
function gaussWith(rng) { // Box-Muller
  const u = Math.max(rng(), 1e-9), v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
const gauss = () => gaussWith(Math.random);
const randInt = n => Math.floor(Math.random() * n);

/* ============ Price model ============ */
const market = {};
for (const s of STOCKS) {
  market[s.sym] = {
    ...s, closes: 0, closedNow: false,
    idio: Math.sqrt(Math.max(
      s.vol ** 2 - (s.beta * MARKETS[s.mkt].vol) ** 2 - SECTORS[s.sector] ** 2,
      (0.3 * s.vol) ** 2)),
  };
}
function twTick(p) { return p < 10 ? 0.01 : p < 50 ? 0.05 : p < 100 ? 0.1 : p < 500 ? 0.5 : p < 1000 ? 1 : 5; }
function roundPx(sym, p) {
  if (market[sym].mkt === "TW") { const s = twTick(p); return +(Math.round(p / s) * s).toFixed(2); }
  return Math.round(p * 100) / 100;
}
// Shared moves for one period: a global factor links the US and Taiwan markets.
function drawFactors(rnd) {
  const g = rnd();
  const f = { US: 0.6 * g + 0.8 * rnd(), TW: 0.6 * g + 0.8 * rnd(), sector: {} };
  for (const k of Object.keys(SECTORS)) f.sector[k] = rnd();
  return f;
}
// Return of one stock over one period. `scale` = sqrt of the fraction of a day.
function periodReturn(m, f, scale, rnd) {
  return (m.drift + m.mu) * scale * scale
    + scale * (m.beta * MARKETS[m.mkt].vol * f[m.mkt] + SECTORS[m.sector] * f.sector[m.sector] + m.idio * rnd());
}
function updateTrend(m, rnd) { m.mu = 0.96 * m.mu + 0.0006 * rnd(); } // trends persist for weeks, then fade

/* ============ Build 180 days of history (seeded, so everyone starts the same) ============ */
function buildHistory() {
  const rng = mulberry32(20261122);
  const rnd = () => gaussWith(rng);
  const raw = {};
  for (const s of STOCKS) { market[s.sym].mu = 0; raw[s.sym] = [s.base * (0.8 + rng() * 0.2)]; }
  const recent = [];
  for (let d = 1; d < HISTORY_DAYS; d++) {
    const f = drawFactors(rnd);
    for (const s of STOCKS) {
      const m = market[s.sym];
      updateTrend(m, rnd);
      let r = periodReturn(m, f, 1, rnd);
      if (rng() < 0.012) { // occasional company news gap
        const shock = (rng() < 0.55 ? 1 : -1) * (0.03 + rng() * 0.05);
        r += shock;
        if (d >= HISTORY_DAYS - 6) recent.push({ sym: s.sym, chg: shock, ago: HISTORY_DAYS - 1 - d, i: Math.floor(rng() * 5) });
      }
      if (s.mkt === "TW") r = Math.max(-TW_LIMIT, Math.min(TW_LIMIT, r));
      const arr = raw[s.sym];
      arr.push(Math.max(1, arr[arr.length - 1] * (1 + r)));
    }
  }
  for (const s of STOCKS) {
    const arr = raw[s.sym], k = s.base / arr[arr.length - 1], m = market[s.sym];
    m.daily = arr.map(x => roundPx(s.sym, x * k));
    m.raw = m.daily[m.daily.length - 1];
    m.px = m.raw;
    m.mu *= 0.5;
  }
  return recent;
}

/* ============ Saved state: two zones, each with its own market and account ============ */
// "practice": prices move all the time (1-minute days). "real": follows real market hours.
const ZONES = ["practice", "real"];
const ZONE_KEY = "stockpilot-zone";
const LEARN_KEY = "stockpilot-learn-v1";
const zoneKeys = z => ({ s: `stockpilot-${z}-state`, m: `stockpilot-${z}-market` });
let zone = load(ZONE_KEY);
if (!ZONES.includes(zone)) zone = "practice";
const freshState = () => ({ cash: START_CASH, holdings: {}, history: [], aiFeed: [], news: [], journal: [], jFilter: "you", autoPilot: false, mktFilter: "ALL", chartRange: "3m", mode: "fast", dayStartTotal: null });
const freshSim = () => ({ day: 1, tick: 0, ticks: 0, sess: { US: { date: null, open: false }, TW: { date: null, open: false } } });
let state = freshState(), sim = freshSim();

function loadZone(z) {
  const k = zoneKeys(z);
  // the practice zone picks up progress saved by earlier versions of the app
  const saved = load(k.s) || (z === "practice" ? load("stockpilot-v1") : null);
  const savedMarket = load(k.m) || (z === "practice" ? load("stockpilot-market-v2") : null);
  state = freshState();
  if (saved && typeof saved.cash === "number") state = { ...state, ...saved };
  state.mode = z === "real" ? "real" : "fast";
  for (const key of ["history", "aiFeed", "news", "journal"]) if (!Array.isArray(state[key])) state[key] = [];
  for (const sym of Object.keys(state.holdings)) if (!market[sym]) delete state.holdings[sym];

  sim = freshSim();
  for (const s of STOCKS) { market[s.sym].closes = 0; market[s.sym].closedNow = false; }
  const ok = savedMarket && savedMarket.s && STOCKS.every(s => savedMarket.s[s.sym] && Array.isArray(savedMarket.s[s.sym].d));
  if (ok) {
    sim = { ...sim, day: savedMarket.day || 1, tick: savedMarket.tick || 0, ticks: savedMarket.ticks || 0,
            sess: z === "real" && savedMarket.sess ? savedMarket.sess : sim.sess };
    for (const s of STOCKS) {
      const m = market[s.sym], v = savedMarket.s[s.sym];
      m.daily = [...v.d]; m.raw = v.r; m.mu = v.mu || 0; m.closes = v.c || 0;
      m.closedNow = z === "real" && !!v.cl;
      m.px = m.closedNow ? m.daily[m.daily.length - 1] : roundPx(s.sym, m.raw);
    }
  } else {
    const recent = buildHistory();
    if (!state.news.length) {
      state.news = recent.sort((x, y) => x.ago - y.ago).slice(0, 6)
        .map(n => ({ kind: "co", sym: n.sym, pos: n.chg > 0, i: n.i, chg: n.chg, ago: n.ago + 1, dayNum: -n.ago }));
    }
  }
  if (z === "real") syncReal();
  if (state.dayStartTotal == null) state.dayStartTotal = portfolioTotals().total;
}
function saveMarket() {
  const s = {};
  for (const st of STOCKS) {
    const m = market[st.sym];
    s[st.sym] = { d: m.daily.slice(-260), r: +m.raw.toFixed(4), mu: +m.mu.toFixed(6), c: m.closes || 0, cl: m.closedNow ? 1 : 0 };
  }
  store(zoneKeys(zone).m, { day: sim.day, tick: sim.tick, ticks: sim.ticks, sess: sim.sess, s });
}
function save() { store(zoneKeys(zone).s, state); }

let learn = blankLearn();
const savedLearn = load(LEARN_KEY);
if (savedLearn && typeof savedLearn.done === "object") learn = { ...learn, ...savedLearn };
for (const k of ["done", "quiz", "watched", "missions", "perfect", "badges", "flags"]) if (!learn[k] || typeof learn[k] !== "object") learn[k] = {};
if (!learn.streak || typeof learn.streak !== "object") learn.streak = { n: 0, last: null };
function saveLearn() { store(LEARN_KEY, learn); }

let selected = STOCKS[0].sym;

/* ============ Helpers ============ */
const $ = id => document.getElementById(id);
const fmt$ = n => n.toLocaleString("en-US", { style: "currency", currency: "USD" });
const fmtPct = n => (n >= 0 ? "+" : "") + (n * 100).toFixed(2) + "%";
const pct0 = x => (x * 100).toFixed(0) + "%";
const colored = (x, txt) => `<b class="${x >= 0 ? "pos" : "neg"}">${txt}</b>`;
const mktOf = sym => MARKETS[market[sym].mkt];
const cur = sym => mktOf(sym).cur;
const nameOf = sym => lang === "en" ? market[sym].name : lang === "zhs" ? toS(market[sym].zh) : market[sym].zh;
const shortOf = sym => lang === "en" ? market[sym].short : lang === "zhs" ? toS(market[sym].zhShort) : market[sym].zhShort;
function fmtP(sym, v) {
  return cur(sym) + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function price(sym) { return market[sym].px; }
function prevClose(sym) { const d = market[sym].daily; return d[d.length - 1]; }
// daily closes + today's live price (a closed market has no live point)
function series(sym) { const m = market[sym]; return m.closedNow ? [...m.daily] : [...m.daily, m.px]; }
function usd(sym) { return price(sym) / mktOf(sym).perUSD; }
function dayChange(sym) {
  const m = market[sym], d = m.daily;
  if (m.closedNow && d.length > 1) return d[d.length - 1] / d[d.length - 2] - 1;  // last session's move
  return price(sym) / prevClose(sym) - 1;
}
function simTime(tick) {
  const mins = 9 * 60 + 30 + tick * 15;
  return `${Math.floor(mins / 60)}:${String(mins % 60).padStart(2, "0")}`;
}
const stampText = (d, tk) => t("stamp", { d, time: simTime(tk) });
const LOCALE = () => ({ en: "en-US", zh: "zh-TW", zhs: "zh-CN" })[lang];
const fmtTs = ts => new Date(ts).toLocaleString(LOCALE(), { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false });
const stampNow = () => state.mode === "real" ? { ts: Date.now() } : { d: sim.day, tk: sim.tick };
const itemTime = it => it.ts ? fmtTs(it.ts) : it.d != null ? stampText(it.d, it.tk) : (it.t || "");
function portfolioTotals() {
  let mv = 0;
  for (const [sym, h] of Object.entries(state.holdings)) mv += h.shares * usd(sym);
  return { mv, total: state.cash + mv };
}
function atLimit(sym) {
  if (market[sym].mkt !== "TW" || market[sym].closedNow) return 0;
  const pc = prevClose(sym), p = price(sym);
  if (p >= roundPx(sym, pc * (1 + TW_LIMIT)) - 1e-9) return 1;
  if (p <= roundPx(sym, pc * (1 - TW_LIMIT)) + 1e-9) return -1;
  return 0;
}

/* ============ News text ============ */
function newsHeadline(n) {
  if (n.headline) return n.headline;  // saved by an older version
  if (n.kind === "co") return t(n.pos ? "news.pos" : "news.neg")[n.i % 5].replace("{n}", shortOf(n.sym));
  if (n.kind === "sec") return t(n.pos ? "news.secPos" : "news.secNeg")[n.sec];
  if (n.kind === "mkt") return t(n.pos ? "news.mktPos" : "news.mktNeg")[n.mk][n.i % 2];
  return "";
}
function newsTime(n) {
  if (n.ago != null) return n.ago === 1 ? t("news.yday") : t("news.ago", { d: n.ago });
  return itemTime(n);
}

/* ============ Signals ============ */
function sma(arr, n) {
  if (arr.length < n) return null;
  let s = 0;
  for (let i = arr.length - n; i < arr.length; i++) s += arr[i];
  return s / n;
}
function rsi(arr, n = 14) {
  if (arr.length < n + 1) return 50;
  let up = 0, dn = 0;
  for (let i = arr.length - n; i < arr.length; i++) {
    const d = arr[i] - arr[i - 1];
    if (d > 0) up += d; else dn -= d;
  }
  if (dn === 0) return 100;
  return 100 - 100 / (1 + up / dn);
}
function volatility(arr, n = 30) {
  const rets = [];
  for (let i = Math.max(1, arr.length - n); i < arr.length; i++) rets.push(arr[i] / arr[i - 1] - 1);
  const mean = rets.reduce((a, b) => a + b, 0) / rets.length;
  const varc = rets.reduce((a, b) => a + (b - mean) ** 2, 0) / rets.length;
  return Math.sqrt(varc) * Math.sqrt(252);
}
function analyze(sym) {
  const a = series(sym), c = cur(sym), p = a[a.length - 1];
  const s20 = sma(a, 20), s50 = sma(a, 50), r = rsi(a), mom30 = p / a[a.length - 31] - 1, vol = volatility(a);
  const reasons = [];
  let score = 0;
  const ab = { a: c + s20.toFixed(2), b: c + s50.toFixed(2) };
  if (s20 > s50) { score += 1.2; reasons.push({ k: "r.trendUp", v: ab }); }
  else           { score -= 1.2; reasons.push({ k: "r.trendDown", v: ab }); }
  if (mom30 > 0.05)       { score += 1; reasons.push({ k: "r.momUp", v: { p: fmtPct(mom30) } }); }
  else if (mom30 < -0.05) { score -= 1; reasons.push({ k: "r.momDown", v: { p: fmtPct(mom30) } }); }
  else                    { reasons.push({ k: "r.momFlat", v: { p: fmtPct(mom30) } }); }
  if (r < 30)      { score += 1; reasons.push({ k: "r.rsiLow", v: { r: r.toFixed(0) } }); }
  else if (r > 70) { score -= 1; reasons.push({ k: "r.rsiHigh", v: { r: r.toFixed(0) } }); }
  else             { reasons.push({ k: "r.rsiMid", v: { r: r.toFixed(0) } }); }
  if (vol > 0.45) { score -= 0.5; reasons.push({ k: "r.volHigh", v: { p: pct0(vol) } }); }
  let rec = "HOLD";
  if (score >= 1.5) rec = "BUY";
  else if (score <= -1.5) rec = "SELL";
  const confidence = Math.min(95, Math.round(55 + Math.abs(score) * 12));
  return { rec, score, confidence, reasons, rsi: r, mom30, vol, s20, s50 };
}
const reasonText = r => r ? t(r.k, r.v) : "";

/* ============ Coach: plain-language summary + what to consider ============ */
const why = id => `<button type="button" class="lesson-link" data-lesson="${id}">${t("why")}</button>`;

function coach(sym) {
  const an = analyze(sym);
  const up = an.s20 > an.s50;
  let summary = t("c.trend", { name: shortOf(sym), up, pos: an.mom30 >= 0, mom: Math.abs(an.mom30 * 100).toFixed(1) });
  const r = an.rsi.toFixed(0);
  summary += an.rsi > 70 ? t("c.rsiHigh", { r }) : an.rsi < 30 ? t("c.rsiLow", { r }) : t("c.rsiMid", { r });
  summary += t("c.vol", { w: an.vol < 0.2 ? 0 : an.vol < 0.4 ? 1 : 2, p: (an.vol * 100).toFixed(0) });
  const lim = atLimit(sym);
  if (lim) summary += t("c.limit", { up: lim > 0 });
  const news = state.news.find(n => n.sym === sym && (n.cn != null ? market[sym].closes - n.cn <= 2 : n.dayNum >= sim.day - 2));
  if (news) summary += t("c.news", { h: newsHeadline(news), c: fmtPct(news.chg) });

  const h = state.holdings[sym];
  const { total } = portfolioTotals();
  const acts = [];
  if (h) {
    const pl = usd(sym) / h.avgCost - 1;
    const posPct = h.shares * usd(sym) / total;
    if (pl <= -0.08) acts.push(t("a.stop", { p: Math.abs(pl * 100).toFixed(1) }) + " " + why("whenact"));
    if (pl >= 0.15) acts.push(t("a.profit", { p: (pl * 100).toFixed(1) }) + " " + why("whenact"));
    if (posPct > 0.2) acts.push(t("a.big", { p: (posPct * 100).toFixed(0) }) + " " + why("diversify"));
    if (!acts.length) acts.push(up ? t("a.hold") + " " + why("whenact") : t("a.exit") + " " + why("ma"));
  } else {
    if (up && an.rsi <= 70) acts.push(t("a.buy") + " " + why("whenact"));
    else if (up) acts.push(t("a.chase") + " " + why("rsi"));
    else if (an.rsi < 30) acts.push(t("a.knife") + " " + why("rsi"));
    else acts.push(t("a.wait") + " " + why("ma"));
  }
  if (an.vol > 0.40 && acts.length < 3) acts.push(t("a.vol") + " " + why("risk"));
  if (news && acts.length < 3) acts.push(t("a.news") + " " + why("news"));
  return { an, summary, actions: acts.slice(0, 3) };
}

function portfolioCoach() {
  const { total } = portfolioTotals();
  const rows = Object.entries(state.holdings)
    .map(([sym, h]) => ({ sym, v: h.shares * usd(sym), pl: usd(sym) / h.avgCost - 1 }))
    .sort((a, b) => b.v - a.v);
  const P = `<b>${t("pc.prefix")}</b> `;
  if (!rows.length) return P + t("pc.none");
  const big = rows[0], bigPct = big.v / total;
  if (bigPct > 0.25) return P + t("pc.big", { sym: big.sym, p: (bigPct * 100).toFixed(0), d: (bigPct * 20).toFixed(1) });
  const loser = rows.filter(r => r.pl <= -0.08).sort((a, b) => a.pl - b.pl)[0];
  if (loser) return P + t("pc.loser", { sym: loser.sym, p: Math.abs(loser.pl * 100).toFixed(1) });
  if (rows.length < 4) return P + t("pc.few", { n: rows.length });
  const mkts = new Set(rows.map(r => market[r.sym].mkt));
  if (mkts.size === 1) return P + t("pc.oneMkt", { m: t("mkt." + [...mkts][0]) });
  if (state.cash / total > 0.7) return P + t("pc.cash", { p: (state.cash / total * 100).toFixed(0) });
  return P + t("pc.good", { n: rows.length });
}

/* ============ Charts (SVG, hand-built) ============ */
function sparkline(sym, w = 64, h = 24) {
  const a = series(sym).slice(-30);
  const min = Math.min(...a), max = Math.max(...a), span = max - min || 1;
  const pts = a.map((v, i) =>
    `${(i / (a.length - 1) * w).toFixed(1)},${(h - 2 - (v - min) / span * (h - 4)).toFixed(1)}`
  ).join(" ");
  const up = a[a.length - 1] >= a[0];
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true">
    <polyline points="${pts}" fill="none" stroke="${up ? "var(--up)" : "var(--down)"}" stroke-width="1.5"/>
  </svg>`;
}

const RANGES = [["1m", 21], ["3m", 63], ["6m", 126], ["all", 0]];
const geoms = {};
function rangeDays() { const r = RANGES.find(x => x[0] === state.chartRange) || RANGES[1]; return r[1]; }
function renderRanges() {
  document.querySelectorAll(".range-seg").forEach(el => {
    el.innerHTML = RANGES.map(([k]) => `<button type="button" data-range="${k}" aria-pressed="${state.chartRange === k}">${t("range." + k)}</button>`).join("");
  });
}
function maAt(all, j, n) {
  if (j < n - 1) return null;
  let s = 0; for (let k = j - n + 1; k <= j; k++) s += all[k];
  return s / n;
}

// Draws the price chart into a wrapper. `big` is the enlarged view with both averages.
function drawChart(sym, wrapId, big) {
  const wrap = $(wrapId);
  const old = wrap.querySelector("svg");
  if (old) old.remove();

  const c = cur(sym);
  const all = series(sym);
  const n = rangeDays();
  const a = n ? all.slice(-(n + 1)) : all;
  const off = all.length - a.length;
  // The enlarged chart is drawn at the wrapper's real pixel size, so text stays readable on phones
  const cw = big ? Math.round(Math.min(1200, Math.max(300, wrap.clientWidth || 1200))) : 720;
  const W = cw, H = big ? Math.round(Math.min(520, Math.max(260, W < 600 ? innerHeight * 0.5 : W * 0.42))) : 260;
  const padL = big ? (W < 600 ? 54 : 72) : 62, padR = 14, padT = big ? 14 : 12, padB = 26;
  const min = Math.min(...a), max = Math.max(...a);
  const span = (max - min) || 1;
  const x = i => padL + i / (a.length - 1) * (W - padL - padR);
  const y = v => padT + (1 - (Math.min(max, Math.max(min, v)) - min) / span) * (H - padT - padB);

  let grid = "", labels = "";
  for (let g = 0; g <= 4; g++) {
    const v = min + span * g / 4, yy = y(v);
    grid += `<line x1="${padL}" y1="${yy}" x2="${W - padR}" y2="${yy}" stroke="var(--grid)" stroke-width="1"/>`;
    labels += `<text x="${padL - 8}" y="${yy + 4}" text-anchor="end" font-size="${big ? 12 : 11}" fill="var(--muted)" style="font-variant-numeric:tabular-nums">${c}${v.toFixed(v < 100 ? 1 : 0)}</text>`;
  }
  const last = a.length - 1;
  for (let k = 0; k <= 3; k++) {
    const i = Math.round(last - k * last / 3), ago = last - i;
    labels += `<text x="${x(i)}" y="${H - 8}" text-anchor="${k === 0 ? "end" : k === 3 ? "start" : "middle"}" font-size="${big ? 12 : 11}" fill="var(--muted)">${ago === 0 ? t("chart.today") : t("chart.days", { d: -ago })}</text>`;
  }
  const maLine = len => a.map((_, i) => { const v = maAt(all, off + i, len); return v == null ? null : `${x(i).toFixed(1)},${y(v).toFixed(1)}`; }).filter(Boolean).join(" ");
  const line = a.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${padL},${H - padB} ` + line + ` ${W - padR},${H - padB}`;

  // your trades in this stock, placed on the day they happened
  const marks = state.journal.filter(e => e.sym === sym && e.by === "you").map(e => {
    const back = e.cn != null ? (market[sym].closes - e.cn) - (market[sym].closedNow ? 1 : 0) : sim.day - e.day;
    const i = (all.length - 1) - back - off;
    if (i < 0 || i > last) return "";
    const xx = x(i), yy = y(e.px), buy = e.side === "buy", s = big ? 7 : 5;
    const pts = buy ? `${xx},${yy + 3} ${xx - s},${yy + 3 + s * 1.6} ${xx + s},${yy + 3 + s * 1.6}`
                    : `${xx},${yy - 3} ${xx - s},${yy - 3 - s * 1.6} ${xx + s},${yy - 3 - s * 1.6}`;
    return `<polygon points="${pts}" fill="${buy ? "var(--up)" : "var(--down)"}" stroke="var(--surface)" stroke-width="1"><title>${t(buy ? "marker.buy" : "marker.sell", { n: e.shares, px: fmtP(sym, e.px) })}</title></polygon>`;
  }).join("");
  const legend = (big ? t("chart.legendBig") : t("chart.legend")) + (marks ? "   " + t("chart.markers") : "");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", t("chart.aria", { sym }));
  svg.innerHTML = `
    ${grid}
    <polygon points="${area}" fill="var(--series-soft)"/>
    ${big ? `<polyline points="${maLine(50)}" fill="none" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="1.5 3"/>` : ""}
    <polyline points="${maLine(20)}" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <polyline points="${line}" fill="none" stroke="var(--series)" stroke-width="${big ? 2.2 : 2}"/>
    <circle cx="${x(last)}" cy="${y(a[last])}" r="${big ? 4.5 : 3.5}" fill="var(--series)"/>
    ${marks}
    <line x1="${padL}" y1="${H - padB}" x2="${W - padR}" y2="${H - padB}" stroke="var(--baseline)" stroke-width="1"/>
    ${labels}
    ${big ? "" : `<text x="${padL + 6}" y="${padT + 12}" font-size="11" fill="var(--muted)" style="white-space:pre">${legend}</text>`}
    <line class="xhair" x1="0" y1="${padT}" x2="0" y2="${H - padB}" stroke="var(--baseline)" stroke-width="1" style="display:none"/>
    <circle class="xdot" r="4" fill="var(--series)" stroke="var(--surface)" stroke-width="2" style="display:none"/>
  `;
  wrap.appendChild(svg);
  if (big) $("cmLegend").innerHTML = legend.split(/\s{3}/).map(x => `<span>${x}</span>`).join("");
  geoms[wrapId] = { sym, a, x, y, padL, padR, W, H, svg };
}

function chartHover(ev, wrapId) {
  const g = geoms[wrapId];
  if (!g) return;
  const { sym, a, x, y, padL, padR, W, svg } = g;
  const rect = svg.getBoundingClientRect();
  const px = (ev.clientX - rect.left) / rect.width * W;
  const tip = $(wrapId).querySelector(".tooltip");
  const hair = svg.querySelector(".xhair"), dot = svg.querySelector(".xdot");
  if (px < padL || px > W - padR) { chartLeave(wrapId); return; }
  const i = Math.round((px - padL) / (W - padL - padR) * (a.length - 1));
  const v = a[i], xx = x(i), yy = y(v);
  hair.setAttribute("x1", xx); hair.setAttribute("x2", xx); hair.style.display = "";
  dot.setAttribute("cx", xx); dot.setAttribute("cy", yy); dot.style.display = "";
  const daysAgo = a.length - 1 - i;
  tip.querySelector(".t-date").textContent = daysAgo === 0 ? t("tip.today") : daysAgo === 1 ? t("tip.yday") : t("tip.ago", { d: daysAgo });
  tip.querySelector(".t-val").textContent = fmtP(sym, v);
  tip.style.display = "block";
  const wrapRect = $(wrapId).getBoundingClientRect();
  const tx = xx / W * rect.width;
  tip.style.left = Math.min(wrapRect.width - 140, Math.max(0, tx + 12)) + "px";
  tip.style.top = Math.max(0, yy / g.H * rect.height - 48) + "px";
}
function chartLeave(wrapId) {
  const g = geoms[wrapId];
  $(wrapId).querySelector(".tooltip").style.display = "none";
  if (g) { g.svg.querySelector(".xhair").style.display = "none"; g.svg.querySelector(".xdot").style.display = "none"; }
}

/* ============ Enlarged chart ============ */
const zoomOpen = () => !$("chartModal").hidden;
function renderZoom() {
  const sym = selected, all = series(sym), n = rangeDays();
  const a = n ? all.slice(-(n + 1)) : all;
  const p = price(sym), chg = dayChange(sym), an = analyze(sym), c = cur(sym), rc = p / a[0] - 1;
  $("cmTitle").textContent = sym;
  $("cmName").textContent = nameOf(sym);
  $("cmPx").textContent = fmtP(sym, p);
  $("cmChg").textContent = t(market[sym].closedNow ? "chg.last" : "chg.today", { p: fmtPct(chg) });
  $("cmChg").className = "big-chg " + (chg >= 0 ? "pos" : "neg");
  $("chartModal").querySelector(".cm-box").setAttribute("aria-label", t("chart.dialog", { sym }));
  $("cmStats").innerHTML = [
    `${t("cm.change")} (${t("range." + state.chartRange)}): ${colored(rc, fmtPct(rc))}`,
    `${t("cm.high")}: <b>${fmtP(sym, Math.max(...a))}</b>`, `${t("cm.low")}: <b>${fmtP(sym, Math.min(...a))}</b>`,
    `${t("cm.ma20")}: <b>${c}${an.s20.toFixed(2)}</b>`, `${t("cm.ma50")}: <b>${c}${an.s50.toFixed(2)}</b>`,
    `RSI: <b>${an.rsi.toFixed(0)}</b>`,
  ].map(x => `<span>${x}</span>`).join("");
  renderRanges();
  drawChart(sym, "bigChartWrap", true);
}
function openZoom() {
  setFlag("zoom");
  $("chartModal").hidden = false;
  document.body.classList.add("modal-open");
  renderZoom();
  $("cmClose").focus();
}
function closeZoom() {
  if (!zoomOpen()) return;
  $("chartModal").hidden = true;
  document.body.classList.remove("modal-open");
  $("zoomBtn").focus();
}

/* ============ Rendering: trade view ============ */
function renderWatchlist() {
  document.querySelectorAll(".seg button[data-mkt]").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.mkt === state.mktFilter)));
  document.querySelectorAll("[data-zone]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.zone === zone)));
  $("simClock").innerHTML = state.mode === "real"
    ? `${marketLine("TW")}${marketLine("US")}<span class="mhint">${t("mode.realHint")}</span>`
    : `${t("clock", { d: sim.day, time: simTime(sim.tick) })} · ${t("mode.fastHint")}`;
  const list = STOCKS.filter(s => state.mktFilter === "ALL" || s.mkt === state.mktFilter);
  $("watchlist").innerHTML = list.map(s => {
    const chg = dayChange(s.sym), lim = atLimit(s.sym);
    return `<button class="stock-row${s.sym === selected ? " active" : ""}" data-sym="${s.sym}">
      <span style="min-width:0"><span class="sym">${s.sym}</span>${s.mkt === "TW" ? '<span class="mkt-tag">TW</span>' : ""}${lim ? `<span class="limit-tag ${lim > 0 ? "limit-up" : "limit-down"}">${t(lim > 0 ? "limit.up" : "limit.down")}</span>` : ""}
      <span class="name">${nameOf(s.sym)}</span></span>
      ${sparkline(s.sym)}
      <span class="right"><span class="px">${fmtP(s.sym, price(s.sym))}</span><br>
      <span class="chg ${chg >= 0 ? "pos" : "neg"}">${fmtPct(chg)}</span></span>
    </button>`;
  }).join("");
}

function renderDetail() {
  const s = market[selected];
  const p = price(selected), chg = dayChange(selected);
  $("dSym").textContent = s.sym;
  $("dName").textContent = nameOf(selected);
  $("dPx").textContent = fmtP(selected, p);
  const chgEl = $("dChg");
  chgEl.textContent = t(s.closedNow ? "chg.last" : "chg.today", { p: fmtPct(chg) });
  chgEl.className = "big-chg " + (chg >= 0 ? "pos" : "neg");
  const pc = prevClose(selected);
  $("dFx").textContent = s.closedNow ? t("fx.closed", { pc: fmtP(selected, pc) }) : s.mkt === "TW"
    ? t("fx.tw", { usd: fmt$(usd(selected)), rate: MARKETS.TW.perUSD, lo: fmtP(selected, roundPx(selected, pc * (1 - TW_LIMIT))), hi: fmtP(selected, roundPx(selected, pc * (1 + TW_LIMIT))) })
    : t("fx.us", { pc: fmtP(selected, pc) });

  const a = series(selected);
  const c30 = p / a[a.length - 31] - 1;
  const last90 = a.slice(-91);
  $("s30").textContent = fmtPct(c30);
  $("s30").className = "value " + (c30 >= 0 ? "pos" : "neg");
  $("sHigh").textContent = fmtP(selected, Math.max(...last90));
  $("sLow").textContent = fmtP(selected, Math.min(...last90));
  $("sVol").textContent = (volatility(a) * 100).toFixed(0) + "%";
  if (volatility(a) > 0.4 && !learn.flags.volView) setFlag("volView");
  const h = state.holdings[selected];
  $("sOwn").textContent = t("shares", { n: h ? h.shares : 0 });

  renderRanges();
  drawChart(selected, "chartWrap", false);

  const co = coach(selected);
  const pill = $("recPill");
  pill.textContent = t("signals", { rec: t("rec." + co.an.rec) });
  pill.className = "rec-pill rec-" + co.an.rec;
  $("recConf").textContent = t("strength", { c: co.an.confidence });
  $("coachSummary").textContent = co.summary;
  $("coachActions").innerHTML = co.actions.map(x => `<li>${x}</li>`).join("");
  $("recReasons").innerHTML = co.an.reasons.map(r => `<li>${reasonText(r)}</li>`).join("");
  updateTradeCost();
}

function updateTradeCost() {
  const q = Math.max(0, parseInt($("qty").value || "0", 10));
  if (q <= 0) { $("tradeCost").textContent = ""; return; }
  const native = fmtP(selected, q * price(selected));
  $("tradeCost").textContent = market[selected].mkt === "TW" ? `≈ ${native} (≈ ${fmt$(q * usd(selected))})` : `≈ ${native}`;
}

function renderPortfolio() {
  $("cashValue").textContent = fmt$(state.cash);
  const rows = Object.entries(state.holdings).map(([sym, h]) => {
    const pl = h.shares * usd(sym) - h.shares * h.avgCost;
    return `<tr><td class="sym-cell">${sym}</td><td>${h.shares}</td><td>${fmtP(sym, price(sym))}</td>
      <td class="${pl >= 0 ? "pos" : "neg"}">${fmt$(pl)}</td></tr>`;
  });
  $("holdings").innerHTML = rows.length
    ? `<table><thead><tr><th>${t("th.sym")}</th><th>${t("th.shares")}</th><th>${t("th.price")}</th><th>${t("th.pl")}</th></tr></thead><tbody>${rows.join("")}</tbody></table>`
    : `<div class="empty">${t("hold.empty")}</div>`;
  const { total } = portfolioTotals();
  $("pvValue").textContent = fmt$(total);
  const totalPl = total - START_CASH;
  const d = $("pvDelta");
  d.textContent = t("pv.delta", { arrow: totalPl >= 0 ? "▲" : "▼", amt: fmt$(Math.abs(totalPl)), p: fmtPct(totalPl / START_CASH) });
  d.className = "delta " + (totalPl >= 0 ? "pos" : "neg");
  $("portfolioCoach").innerHTML = portfolioCoach();
}

function feedText(f) {
  if (f.msg) return f.msg;  // saved by an older version
  return t(f.k, { ...f.v, reason: reasonText(f.r) });
}
function histText(f) {
  if (f.msg) return f.msg;
  return t("hist", { ai: f.ai ? "🤖 " : "", verb: t("verb." + f.side), n: f.shares, sym: f.sym, px: fmtP(f.sym, f.px) });
}
function renderFeeds() {
  $("aiFeed").innerHTML = state.aiFeed.length
    ? state.aiFeed.slice(0, 30).map(f => `<li><span class="time">${itemTime(f)}</span>${feedText(f)}</li>`).join("")
    : `<li class="empty">${t("ap.empty")}</li>`;
  $("history").innerHTML = state.history.length
    ? state.history.slice(0, 30).map(f => `<li><span class="time">${itemTime(f)}</span>${histText(f)}</li>`).join("")
    : `<li class="empty">${t("hist.empty")}</li>`;
  $("newsFeed").innerHTML = state.news.length
    ? state.news.slice(0, 40).map(n => {
        if (n.recapM) {
          const r = n.recapM;
          return `<li class="recap"><span class="time">${itemTime(n)}</span>${t("recap.mkt", { m: t("mkt." + r.mk), avg: colored(r.avg, fmtPct(r.avg)), sym: r.sym, c: fmtPct(r.c) })}</li>`;
        }
        if (n.recap) {
          const r = n.recap;
          if (typeof r === "string") return `<li class="recap"><span class="time">${n.t || ""}</span>${r}</li>`;
          return `<li class="recap"><span class="time">${t("recap.t", { d: r.d })}</span>${t("recap", {
            d: r.d, us: colored(r.us, fmtPct(r.us)), tw: colored(r.tw, fmtPct(r.tw)),
            pd: colored(r.pd, `${r.pd >= 0 ? "+" : "−"}${fmt$(Math.abs(r.pd))}`), sym: r.sym, c: fmtPct(r.c) })}</li>`;
        }
        const label = n.sym ? `<button type="button" class="news-sym" data-sym="${n.sym}">${n.sym}</button>`
          : n.kind === "sec" ? `<b>${t("news.industry")}</b> ` : n.kind === "mkt" ? `<b>${t("news.market", { m: t("mkt." + n.mk) })}</b> ` : (n.mktLabel ? `<b>${n.mktLabel}</b> ` : "");
        return `<li><span class="time">${newsTime(n)}</span>${label}${newsHeadline(n)} ${colored(n.chg, fmtPct(n.chg))}</li>`;
      }).join("")
    : `<li class="empty">${t("news.empty")}</li>`;
}

function renderAll() {
  renderWatchlist(); renderDetail(); renderPortfolio(); renderFeeds();
  const mine = state.journal.filter(e => e.by === "you").length;
  $("journalCount").textContent = mine ? String(mine) : "";
  save();
  checkMissions();
}

/* ============ Trading ============ */
function trade(sym, shares, side, byAI = false) {
  const p = price(sym), pu = usd(sym);
  const msgEl = $("tradeMsg");
  if (!(shares >= 1)) return false;
  if (!canTrade(sym)) {
    if (!byAI) { const mk = market[sym].mkt; msgEl.textContent = t("ms.closedTrade", { m: t("mkt." + mk), hours: t("hours." + mk) }); msgEl.className = "trade-msg neg"; }
    return false;
  }
  const pre = snapshot(sym);
  if (side === "buy") {
    const cost = shares * pu;
    if (cost > state.cash) {
      if (!byAI) { msgEl.textContent = t("msg.nocash"); msgEl.className = "trade-msg neg"; }
      return false;
    }
    state.cash -= cost;
    const h = state.holdings[sym] || { shares: 0, avgCost: 0 };
    h.avgCost = (h.avgCost * h.shares + cost) / (h.shares + shares); // avg cost per share, in US$
    h.shares += shares;
    state.holdings[sym] = h;
  } else {
    const h = state.holdings[sym];
    if (!h || h.shares < shares) {
      if (!byAI) { msgEl.textContent = t("msg.noshares"); msgEl.className = "trade-msg neg"; }
      return false;
    }
    h.shares -= shares;
    state.cash += shares * pu;
    if (h.shares === 0) delete state.holdings[sym];
  }
  state.history.unshift({ ...stampNow(), side, shares, sym, px: p, ai: byAI });
  state.history = state.history.slice(0, 100);
  const j = recordTrade({ sym, side, shares, byAI, pre, px: p, pu });
  if (!byAI) {
    msgEl.innerHTML = `${t("msg.done", { verb: t("verb." + side), n: shares, sym, px: fmtP(sym, p) })} ${t("msg.journal")} ` +
      `<span class="grade grade-${j.grade}">${t("g." + j.grade)}</span> <button type="button" class="lesson-link" data-goto="journal">${t("msg.why")}</button>`;
    msgEl.className = "trade-msg";
  }
  return true;
}

/* ============ AI auto-pilot ============ */
let autoCounter = 0;
function runAutoPilot() {
  if (!state.autoPilot) return;
  autoCounter++;
  if (autoCounter % 4 !== 0) return; // act every ~10s, not every tick
  const analyses = STOCKS.filter(s => canTrade(s.sym)).map(s => ({ sym: s.sym, ...analyze(s.sym) }));
  const { total } = portfolioTotals();
  for (const [sym, h] of Object.entries(state.holdings)) {
    const an = analyses.find(a => a.sym === sym);
    if (an && an.rec === "SELL" && h.shares > 0 && trade(sym, h.shares, "sell", true)) {
      state.aiFeed.unshift({ ...stampNow(), k: "ap.sold", v: { sym }, r: an.reasons[0] });
    }
  }
  const buys = analyses.filter(a => a.rec === "BUY").sort((a, b) => b.score - a.score);
  for (const an of buys) {
    const pu = usd(an.sym);
    const held = state.holdings[an.sym] ? state.holdings[an.sym].shares * pu : 0;
    const room = total * 0.15 - held;
    if (room < pu) continue;
    const spendable = state.cash - total * 0.10; // always keep 10% of the portfolio in cash
    const shares = Math.floor(Math.min(room, spendable, state.cash * 0.5) / pu);
    if (shares >= 1 && shares * pu >= total * 0.01 && trade(an.sym, shares, "buy", true)) { // skip tiny buys
      state.aiFeed.unshift({ ...stampNow(), k: "ap.bought", v: { n: shares, sym: an.sym, c: an.confidence }, r: an.reasons[0] });
      break; // one buy per cycle
    }
  }
  state.aiFeed = state.aiFeed.slice(0, 100);
}

/* ============ Live market ============ */
function addNews(item) {
  state.news.unshift({ ...stampNow(), dayNum: sim.day, tickNum: sim.tick, tc: sim.ticks, cn: item.sym ? market[item.sym].closes : undefined, ...item });
  state.news = state.news.slice(0, 60);
}

function closeDay() {
  const { total } = portfolioTotals();
  const avg = mk => { const xs = STOCKS.filter(s => s.mkt === mk).map(s => dayChange(s.sym)); return xs.reduce((a, b) => a + b, 0) / xs.length; };
  const top = STOCKS.map(s => ({ sym: s.sym, c: dayChange(s.sym) })).sort((a, b) => Math.abs(b.c) - Math.abs(a.c))[0];
  const start = state.dayStartTotal || total;
  state.news.unshift({ dayNum: sim.day, recap: { d: sim.day, us: avg("US"), tw: avg("TW"), pd: total - start, sym: top.sym, c: top.c } });
  state.news = state.news.slice(0, 60);
  for (const s of STOCKS) {
    const m = market[s.sym];
    m.daily.push(m.px);
    if (m.daily.length > 260) m.daily.shift();
    m.closes = (m.closes || 0) + 1;
    updateTrend(m, gauss);
  }
  sim.day++;
  sim.tick = 0;
  state.dayStartTotal = total;
}

// One piece of random news. `pool` = stocks that may be hit; `rate` scales how often.
function maybeNews(pool, rate) {
  const shock = {};
  const r = Math.random();
  const mks = [...new Set(pool.map(s => s.mkt))];
  if (r < 0.03 * rate) {             // company news
    const s = pool[randInt(pool.length)];
    const pos = Math.random() < 0.55;
    const size = (pos ? 1 : -1) * (0.02 + Math.random() * 0.045);
    shock[s.sym] = size;
    addNews({ kind: "co", sym: s.sym, pos, i: randInt(5), chg: size });
  } else if (r < 0.038 * rate) {     // industry news
    const secs = [...new Set(pool.map(s => s.sector))].filter(k => k !== "fund");
    if (!secs.length) return shock;
    const sec = secs[randInt(secs.length)];
    const pos = Math.random() < 0.5;
    const size = (pos ? 1 : -1) * (0.012 + Math.random() * 0.02);
    for (const s of pool) if (s.sector === sec) shock[s.sym] = size;
    addNews({ kind: "sec", sec, pos, chg: size });
  } else if (r < 0.044 * rate) {     // whole-market news
    const mk = mks[randInt(mks.length)];
    const pos = Math.random() < 0.5;
    const size = (pos ? 1 : -1) * (0.006 + Math.random() * 0.012);
    for (const s of pool) if (s.mkt === mk) shock[s.sym] = size * s.beta;
    addNews({ kind: "mkt", mk, pos, i: randInt(2), chg: size });
  }
  return shock;
}
function moveStocks(pool, f, scale, shock) {
  for (const s of pool) {
    const m = market[s.sym];
    let raw = m.raw * (1 + periodReturn(m, f, scale, gauss) + (shock[s.sym] || 0));
    if (s.mkt === "TW") {
      const pc = prevClose(s.sym);
      raw = Math.max(pc * (1 - TW_LIMIT), Math.min(pc * (1 + TW_LIMIT), raw));
    }
    m.raw = Math.max(1, raw);
    m.px = roundPx(s.sym, m.raw);
  }
}

/* ---- Fast practice: both markets open, ~1-minute days ---- */
function tickFast() {
  const shock = maybeNews(STOCKS, 1);
  moveStocks(STOCKS, drawFactors(gauss), 1 / Math.sqrt(TICKS_PER_DAY), shock);
  sim.tick++;
  if (sim.tick >= TICKS_PER_DAY) closeDay();
}

/* ---- Real market hours ---- */
const HOURS = {
  TW: { tz: "Asia/Taipei",      open: 9 * 60,      close: 13 * 60 + 30, flag: "🇹🇼" },
  US: { tz: "America/New_York", open: 9 * 60 + 30, close: 16 * 60,      flag: "🇺🇸" },
};
const WD = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
function mktStatus(mk, now = new Date()) {
  const H = HOURS[mk];
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-US", { timeZone: H.tz, weekday: "short", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
    .formatToParts(now).map(x => [x.type, x.value]));
  const wd = WD[p.weekday], mins = (+p.hour % 24) * 60 + (+p.minute);
  const weekday = wd >= 1 && wd <= 5;
  return { wd, mins, weekday, date: `${p.year}-${p.month}-${p.day}`, open: weekday && mins >= H.open && mins < H.close };
}
const addDays = (ds, k) => { const d = new Date(ds + "T00:00:00Z"); d.setUTCDate(d.getUTCDate() + k); return d.toISOString().slice(0, 10); };
const isWeekday = ds => { const w = new Date(ds + "T00:00:00Z").getUTCDay(); return w >= 1 && w <= 5; };
function lastCompleted(mk, st) {     // date of the most recent session that has already closed
  if (st.weekday && st.mins >= HOURS[mk].close) return st.date;
  let d = addDays(st.date, -1);
  while (!isWeekday(d)) d = addDays(d, -1);
  return d;
}
function nextOpen(mk, st) {
  const H = HOURS[mk];
  for (let k = 0; k < 8; k++) {
    const wd = (st.wd + k) % 7;
    if (wd >= 1 && wd <= 5 && (k > 0 || st.mins < H.open)) return new Date(Date.now() + ((k * 1440 + H.open - st.mins) * 60 - new Date().getSeconds()) * 1000);
  }
  return new Date();
}
const fmtIn = (date, tz, wd) => new Intl.DateTimeFormat(LOCALE(), { ...(tz ? { timeZone: tz } : {}), ...(wd ? { weekday: "short" } : {}), hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(date);
function marketLine(mk) {
  const st = mktStatus(mk), H = HOURS[mk];
  const at = st.open ? new Date(Date.now() + (H.close - st.mins) * 60000) : nextOpen(mk, st);
  const there = fmtIn(at, H.tz, !st.open), here = fmtIn(at, null, !st.open);
  const v = { flag: H.flag, m: t("mkt." + mk), tz: t("tz." + mk), local: there === here ? "" : t("ms.local", { t: here }) };
  return `<span class="mline">${st.open ? t("ms.open", { ...v, close: there }) : t("ms.closed", { ...v, when: there })}</span>`;
}
const canTrade = sym => state.mode !== "real" || !!sim.sess[market[sym].mkt].open;
const poolOf = mk => STOCKS.filter(s => s.mkt === mk);

function closeMarket(mk) {
  const pool = poolOf(mk);
  for (const s of pool) {
    const m = market[s.sym];
    m.daily.push(m.px);
    if (m.daily.length > 260) m.daily.shift();
    m.closes = (m.closes || 0) + 1;
    m.closedNow = true;
    updateTrend(m, gauss);
  }
  const ch = pool.map(s => ({ sym: s.sym, c: dayChange(s.sym) }));
  const avg = ch.reduce((a, b) => a + b.c, 0) / ch.length;
  const top = ch.sort((a, b) => Math.abs(b.c) - Math.abs(a.c))[0];
  state.news.unshift({ ts: Date.now(), dayNum: sim.day, recapM: { mk, avg, sym: top.sym, c: top.c } });
  state.news = state.news.slice(0, 60);
}
function simulateDay(mk) {           // a whole session that passed while the page was closed
  const f = drawFactors(gauss);
  for (const s of poolOf(mk)) {
    const m = market[s.sym];
    let r = periodReturn(m, f, 1, gauss);
    if (s.mkt === "TW") r = Math.max(-TW_LIMIT, Math.min(TW_LIMIT, r));
    m.raw = Math.max(1, m.raw * (1 + r));
    m.px = roundPx(s.sym, m.raw);
    m.daily.push(m.px);
    if (m.daily.length > 260) m.daily.shift();
    m.closes = (m.closes || 0) + 1;
    m.closedNow = true;
    updateTrend(m, gauss);
  }
}
function catchUp(mk, from, to) {     // sessions after `from`, up to and including `to`
  if (!from || from >= to) return;
  let d = addDays(from, 1), n = 0;
  while (d <= to && n < 60) { if (isWeekday(d)) { simulateDay(mk); n++; } d = addDays(d, 1); }
}
function openMarket(mk, date) {
  for (const s of poolOf(mk)) {
    const m = market[s.sym];
    let raw = m.raw * (1 + 0.004 * gauss());   // small overnight gap at the open
    if (s.mkt === "TW") { const pc = prevClose(s.sym); raw = Math.max(pc * (1 - TW_LIMIT), Math.min(pc * (1 + TW_LIMIT), raw)); }
    m.raw = raw; m.px = roundPx(s.sym, raw); m.closedNow = false;
  }
  sim.sess[mk] = { date, open: true };
}
function syncReal() {                // bring each market in line with the real clock
  for (const mk of ["TW", "US"]) {
    const st = mktStatus(mk), s = sim.sess[mk];
    if (s.open && (!st.open || s.date !== st.date)) { closeMarket(mk); s.open = false; }
    if (st.open) {
      if (s.date !== st.date) { catchUp(mk, s.date, addDays(st.date, -1)); openMarket(mk, st.date); }
    } else {
      const lc = lastCompleted(mk, st);
      if (!s.date) {
        s.date = lc;
        for (const x of poolOf(mk)) {
          const m = market[x.sym];
          if (m.closedNow) continue;
          // coming from fast practice mid-day: today's price becomes the latest close
          if (m.px !== m.daily[m.daily.length - 1]) { m.daily.push(m.px); m.closes = (m.closes || 0) + 1; }
          m.closedNow = true;
        }
      }
      else if (s.date < lc) { catchUp(mk, s.date, lc); s.date = lc; }
    }
  }
}
function tickReal() {
  syncReal();
  const f = drawFactors(gauss);
  for (const mk of ["TW", "US"]) {
    if (!sim.sess[mk].open) continue;
    const H = HOURS[mk], sessionMs = (H.close - H.open) * 60000;
    const pool = poolOf(mk);
    // about 3 company stories, 1 industry story and half a market story per session
    const shock = maybeNews(pool, 100 * TICK_MS / sessionMs);
    moveStocks(pool, f, Math.sqrt(TICK_MS / sessionMs), shock);
  }
}
function setZone(z) {
  if (z === zone || !ZONES.includes(z)) return;
  save(); saveMarket();
  zone = z;
  store(ZONE_KEY, z);
  loadZone(z);
  closeZoom();
  $("autoPilot").checked = state.autoPilot;
  $("tradeMsg").textContent = "";
  renderAll();
  showView(currentView);
}

function tick() {
  sim.ticks = (sim.ticks || 0) + 1;
  if (state.mode === "real") tickReal(); else tickFast();
  runAutoPilot();
  saveMarket();
  renderAll();
  if (!$("journalView").hidden) renderJournal();
  if (zoomOpen()) renderZoom();
}

/* ============ Trade journal: record every step and review it ============ */
function snapshot(sym) {
  const an = analyze(sym), h = state.holdings[sym], { total } = portfolioTotals();
  const win = state.mode === "real" ? 120 : 4;   // "just came out": 4 fast ticks, or about 5 real minutes
  const news = state.news.find(n => n.sym === sym && (n.tc != null ? sim.ticks - n.tc <= win : n.dayNum === sim.day && n.tickNum != null && sim.tick - n.tickNum <= 4));
  return {
    an, total, dayChg: dayChange(sym),
    posPct: h ? h.shares * usd(sym) / total : 0,
    pl: h ? usd(sym) / h.avgCost - 1 : null,
    news: news ? { n: { ...news }, chg: news.chg } : null,
  };
}
const ck = (id, level, lesson, v = {}) => ({ id, level, lesson, v });

function judgeBuy(pre, post) {
  const an = pre.an, up = an.s20 > an.s50, r = an.rsi.toFixed(0), c = [];
  if (!up && an.rsi < 30) c.push(ck("buy-knife", "bad", "rsi", { r }));
  else if (!up) c.push(ck("buy-downtrend", "bad", "ma"));
  else c.push(ck("buy-uptrend", "good", "ma"));
  if (an.rsi > 70) c.push(ck("buy-chase", "bad", "rsi", { r }));
  else if (up) c.push(ck("buy-nochase", "good", "rsi", { r }));
  if (pre.pl != null && pre.pl <= -0.05 && !up) c.push(ck("buy-avgdown", "bad", "whenact", { p: pct0(-pre.pl) }));
  if (post.posPct > 0.20) c.push(ck("buy-big", "bad", "diversify", { p: pct0(post.posPct), d: (post.posPct * 20).toFixed(1) }));
  else if (post.posPct > 0.10) c.push(ck("buy-large", "warn", "diversify", { p: pct0(post.posPct) }));
  else c.push(ck("buy-small", "good", "diversify", { p: pct0(post.posPct) }));
  if (post.cashPct < 0.05) c.push(ck("buy-nocash", "bad", "diversify", { p: pct0(post.cashPct) }));
  if (pre.news && pre.news.chg > 0) c.push(ck("buy-news", "bad", "news", { news: pre.news.n }));
  if (an.vol > 0.40 && post.posPct > 0.08) c.push(ck("buy-jumpy", "warn", "risk", { p: pct0(an.vol) }));
  return c;
}

function judgeSell(pre) {
  const an = pre.an, up = an.s20 > an.s50, pl = pre.pl, c = [];
  if (pl != null && pl <= -0.08) {
    c.push(ck("sell-stoploss", "good", "whenact", { p: pct0(-pl) }));
    if (pl <= -0.15) c.push(ck("sell-late", "bad", "whenact"));
  }
  if (pl != null && pl >= 0.15) c.push(ck("sell-profit", "good", "whenact", { p: pct0(pl) }));
  if (!up && (pl == null || pl > -0.08)) c.push(ck("sell-trend", "good", "ma"));
  if (pre.posPct > 0.20) c.push(ck("sell-trim", "good", "diversify", { p: pct0(pre.posPct) }));
  if (an.rsi > 70 && pl != null && pl > 0) c.push(ck("sell-strength", "good", "rsi", { r: an.rsi.toFixed(0) }));
  if (up && pre.dayChg <= -0.02 && (pl == null || pl > -0.08)) c.push(ck("sell-panic", "bad", "chart", { p: (-pre.dayChg * 100).toFixed(1) + "%" }));
  else if (up && pl != null && pl >= 0 && pl < 0.05 && an.rsi <= 70 && !c.length) c.push(ck("sell-early", "bad", "whenact"));
  if (pre.news && pre.news.chg < 0) c.push(ck("sell-news", "warn", "news", { news: pre.news.n }));
  if (!c.length) c.push(ck("sell-noreason", "warn", "whenact"));
  return c;
}
// Check text is looked up at display time, so it follows the chosen language
function ckVals(c) { return c.v && c.v.news ? { ...c.v, h: newsHeadline(c.v.news) } : (c.v || {}); }
const ckTitle = c => c.title || t(`ck.${c.id}.t`, ckVals(c));
const ckWhy = c => c.why || t(`ck.${c.id}.w`, ckVals(c));

function gradeOf(checks) {
  const good = checks.filter(c => c.level === "good").length;
  const bad = checks.filter(c => c.level === "bad").length;
  const warn = checks.filter(c => c.level === "warn").length;
  if (!bad && !warn) return "good";
  if (!bad || good > bad) return "mixed";
  return "risky";
}
const normGrade = g => g === "Good step" ? "good" : g === "Mixed step" ? "mixed" : g === "Risky step" ? "risky" : g;

function recordTrade({ sym, side, shares, byAI, pre, px, pu }) {
  const { total } = portfolioTotals();
  const h = state.holdings[sym];
  const post = { posPct: h ? h.shares * pu / total : 0, cashPct: state.cash / total };
  const checks = side === "buy" ? judgeBuy(pre, post) : judgeSell(pre);
  const an = pre.an;
  const entry = {
    id: Date.now() + "-" + Math.random().toString(36).slice(2, 7),
    sym, side, shares, px, pu, day: sim.day, tick: sim.tick, ...(state.mode === "real" ? { ts: Date.now() } : {}),
    cn: market[sym].closes || 0, left: h ? h.shares : 0, by: byAI ? "auto" : "you",
    grade: gradeOf(checks), checks,
    seen: { up: an.s20 > an.s50, rsi: an.rsi, mom30: an.mom30, vol: an.vol, dayChg: pre.dayChg,
            posPct: side === "buy" ? post.posPct : pre.posPct, pl: pre.pl, news: pre.news ? pre.news.n : null },
  };
  state.journal.unshift(entry);
  state.journal = state.journal.slice(0, 200);
  return entry;
}

function outcome(e) {
  const days = e.cn != null ? market[e.sym].closes - e.cn : (sim.day - e.day) + (sim.tick - e.tick) / TICKS_PER_DAY;
  if (days < 1) return { text: t("o.early"), kind: null };
  const now = price(e.sym), chg = now / e.px - 1;
  const v = { who: t("o.who." + e.by), sym: e.sym, move: `${fmtP(e.sym, e.px)} → ${fmtP(e.sym, now)}`, amt: fmt$(Math.abs(usd(e.sym) - e.pu) * e.shares) };
  if (e.side === "buy") return { kind: chg >= 0 ? "win" : "loss", text: t("o.buy", { ...v, p: colored(chg, fmtPct(chg)), win: chg >= 0 }) };
  return chg <= 0
    ? { kind: "win", text: t("o.sellWin", { ...v, p: `<b class="pos">${(Math.abs(chg) * 100).toFixed(2)}%</b>` }) }
    : { kind: "loss", text: t("o.sellLoss", { ...v, p: `<b class="neg">${(chg * 100).toFixed(2)}%</b>` }) };
}
function verdict(e, kind) {
  if (!kind) return "";
  const good = normGrade(e.grade) !== "risky";
  return t(good ? (kind === "win" ? "vd.gg" : "vd.gb") : (kind === "win" ? "vd.bg" : "vd.bb"));
}

function renderJournal() {
  document.querySelectorAll("[data-jfilter]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.jfilter === state.jFilter)));
  const list = state.journal.filter(e => state.jFilter === "all" || e.by === state.jFilter);
  const all = list.flatMap(e => e.checks);
  const good = all.filter(c => c.level === "good").length, bad = all.filter(c => c.level === "bad").length;
  const count = g => list.filter(e => normGrade(e.grade) === g).length;
  const score = good + bad ? Math.round(good / (good + bad) * 100) : null;
  const tile = (label, value, hint, style = "") => `<div class="j-stat"><div class="label">${label}</div><div class="value"${style}>${value}</div><div class="hint">${hint}</div></div>`;
  $("jStats").innerHTML =
    tile(t("js.trades"), list.length, t("js.tradesHint", { b: list.filter(e => e.side === "buy").length, s: list.filter(e => e.side === "sell").length })) +
    tile(t("js.good"), count("good"), t("js.goodHint"), ' style="color:var(--up)"') +
    tile(t("js.mixed"), count("mixed"), t("js.mixedHint"), ' style="color:var(--warn-ink)"') +
    tile(t("js.risky"), count("risky"), t("js.riskyHint"), ' style="color:var(--down)"') +
    tile(t("js.score"), score == null ? "—" : score + "%", t("js.scoreHint"));

  const tally = level => {
    const m = {};
    for (const c of all.filter(c => c.level === level)) (m[c.id] = m[c.id] || { c, n: 0 }).n++;
    return Object.values(m).sort((a, b) => b.n - a.n).slice(0, 3);
  };
  const strengths = tally("good"), mistakes = [...tally("bad"), ...tally("warn")].slice(0, 3);
  const item = ({ c, n }) => `<li><b>${ckTitle(c).replace(/\s*[（(].*[)）]$/, "")}</b> ${t("jh.times", { n })} ${ckWhy(c)} <button type="button" class="lesson-link" data-lesson="${c.lesson}">${t("lesson")}</button></li>`;
  $("jHabits").innerHTML = list.length ? `
    <div><h3 class="pos">${t("jh.well")}</h3>${strengths.length ? `<ul>${strengths.map(item).join("")}</ul>` : `<p class="empty">${t("jh.noWell")}</p>`}</div>
    <div><h3 class="neg">${t("jh.work")}</h3>${mistakes.length ? `<ul>${mistakes.map(item).join("")}</ul>` : `<p class="empty">${t("jh.noWork")}</p>`}</div>`
    : `<div><h3>${t("jh.title")}</h3><p class="empty">${t("jh.empty")}</p></div>`;

  const lessonName = id => { const l = LESSONS.find(x => x.id === id); return l ? LT(l).title : t("lesson"); };
  const icon = { good: "✓", bad: "✗", warn: "!" };
  $("jList").innerHTML = list.length ? list.slice(0, 60).map(e => {
    const s = e.seen, o = outcome(e), v = verdict(e, o.kind), g = normGrade(e.grade);
    const seen = [
      t("seen.trend", { up: s.up }), t("seen.rsi", { r: s.rsi.toFixed(0) }), t("seen.mom", { p: fmtPct(s.mom30) }), t("seen.day", { p: fmtPct(s.dayChg) }),
      t("seen.vol", { p: pct0(s.vol) }), t(e.side === "buy" ? "seen.posAfter" : "seen.posBefore", { p: pct0(s.posPct) }),
      s.pl != null ? t(e.side === "sell" ? "seen.pl" : "seen.holding", { p: fmtPct(s.pl) }) : null,
      s.news ? t("seen.news", { h: typeof s.news === "string" ? s.news : (s.news.headline || newsHeadline(s.news)) }) : null,
    ].filter(Boolean).join(" · ");
    return `<article class="card">
      <div class="j-top">
        <span class="side-pill side-${e.side}">${t("rec." + (e.side === "buy" ? "BUY" : "SELL"))}</span>
        <b>${t("shares", { n: e.shares })} ${e.sym}</b> @ ${fmtP(e.sym, e.px)}
        <span class="time">${e.ts ? fmtTs(e.ts) : (e.t || stampText(e.day, e.tick))}</span>
        <span class="who">${t("who." + e.by)}</span>
        <span class="grade grade-${g}">${t("g." + g)}</span>
      </div>
      <div class="j-seen"><b>${t("seen." + e.by)}</b> ${seen}</div>
      <ul class="j-checks">${e.checks.map(c => `<li class="ck-${c.level}"><span class="ck-icon" aria-hidden="true">${icon[c.level]}</span>
        <div><b>${ckTitle(c)}${t("punct.stop")}</b> ${ckWhy(c)} <button type="button" class="lesson-link" data-lesson="${c.lesson}">${t("lesson.named", { t: lessonName(c.lesson) })}</button></div></li>`).join("")}</ul>
      <div class="j-outcome"><b>${t("o.title")}</b> ${o.text}${v ? `<span class="verdict">${v}</span>` : ""}</div>
    </article>`;
  }).join("") : `<div class="card j-empty">
      <p><b>${t("j.emptyTitle", { auto: state.jFilter === "auto" })}</b></p>
      <p>${t(state.jFilter === "auto" ? "j.emptyAuto" : "j.emptyYou")}</p>
      <button type="button" class="btn btn-primary" data-goto="trade">${t("j.go")}</button>
    </div>`;
}

/* ============ Animated lesson videos: scene visuals ============ */
// Each visual draws one 640×360 SVG scene. CSS classes (a-pop, a-fade, a-draw,
// a-grow, a-tilt, a-slide, a-drop, a-bob) animate it; delays are inline.
const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const dl = d => d != null ? ` style="animation-delay:${d}s"` : "";
function tx(x, y, s, o = {}) {
  return `<text x="${x}" y="${y}" text-anchor="${o.a || "middle"}" font-size="${o.size || 22}" font-weight="${o.w || 600}" fill="${o.fill || "var(--ink)"}"${o.cls ? ` class="${o.cls}"` : ""}${dl(o.d)}>${esc(s)}</text>`;
}
const textW = (s, size) => [...String(s)].reduce((w, ch) => w + (ch.charCodeAt(0) > 0x2e80 ? size : size * 0.56), 0);
function tagBox(cx, cy, s, color, d) {
  const w = Math.min(560, textW(s, 20) + 28), x = Math.max(8, Math.min(632 - w, cx - w / 2));
  return `<g class="a-pop"${dl(d)}><rect x="${x}" y="${cy - 20}" width="${w}" height="34" rx="17" fill="${color}"/>${tx(x + w / 2, cy + 4, s, { size: 20, fill: "#fff", w: 700 })}</g>`;
}
function shapeSeries(shape, n = 60) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1), w = Math.sin(i * 1.7) * 0.4 + Math.sin(i * 0.63 + 1) * 0.6 + Math.sin(i * 0.29 + 2) * 0.5;
    let v;
    if (shape === "up") v = t * 6 + w;
    else if (shape === "down") v = (1 - t) * 6 + w;
    else if (shape === "wave") v = Math.sin(t * Math.PI * 3) * 2 + t * 2.5 + w * 0.5;
    else if (shape === "spike") v = (t < 0.72 ? t * 1.6 : 1.15 + (t - 0.72) * 22) + w * 0.35;
    else if (shape === "dip") v = (t < 0.7 ? 3 + t * 1.5 : 4.05 - (t - 0.7) * 16) + w * 0.35;
    else if (shape === "updip") v = t * 6 + w * 0.45 - (i === n - 8 ? 1.9 : i === n - 7 ? 0.9 : 0);
    else if (shape === "wild") v = Math.sin(i * 0.9) * 3 + Math.sin(i * 2.3) * 2 + t;
    else if (shape === "recover") v = (t < 0.45 ? 6 - t * 12 : 0.6 + (t - 0.45) * 13) + w * 0.4;
    else v = Math.sin(i * 1.3) * 1.5 + Math.sin(i * 0.37) * 2 + Math.cos(i * 2.1);
    out.push(v);
  }
  return out;
}
function plotPts(s, x0 = 50, x1 = 590, y0 = 50, y1 = 300) {
  const min = Math.min(...s), max = Math.max(...s), span = max - min || 1;
  return s.map((v, i) => [x0 + i / (s.length - 1) * (x1 - x0), y1 - (v - min) / span * (y1 - y0)]);
}
const ptsStr = pts => pts.map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
function movAvg(s, k) { return s.map((_, i) => i < k - 1 ? null : s.slice(i - k + 1, i + 1).reduce((a, b) => a + b, 0) / k); }
function arcD(cx, cy, r, a0, a1) {   // angles in degrees, 0 = up, clockwise
  const p = a => [cx + r * Math.sin(a * Math.PI / 180), cy - r * Math.cos(a * Math.PI / 180)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(1)},${y1.toFixed(1)}`;
}

const VIS = {
  title(p, lab, ctx) {
    return `<g class="a-pop"><g class="a-bob">${tx(320, 190, p.emoji, { size: 120, w: 400 })}</g></g>` +
      tx(320, 300, ctx.title, { size: textW(ctx.title, 30) > 600 ? 22 : 30, w: 700, cls: "a-fade", d: 0.5 });
  },
  pie(p, lab) {
    const cx = 320, cy = 175, r = 120;
    const slice = (a0, a1, fill, off, d) => {
      const mid = (a0 + a1) / 2 * Math.PI / 180, dx = Math.sin(mid) * off, dy = -Math.cos(mid) * off;
      const big = a1 - a0 > 180 ? 1 : 0, P = a => [cx + r * Math.sin(a * Math.PI / 180), cy - r * Math.cos(a * Math.PI / 180)];
      const [x0, y0] = P(a0), [x1, y1] = P(a1);
      return `<g transform="translate(${dx.toFixed(1)},${dy.toFixed(1)})"><path class="a-pop"${dl(d)} d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${big} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z" fill="${fill}" stroke="var(--surface)" stroke-width="3"/></g>`;
    };
    if (p.segs) {
      const cols = ["var(--series)", "var(--up)", "var(--warn-border)", "var(--down)", "var(--accent)", "var(--muted)", "var(--ink-2)"];
      let a = 0, out = "";
      p.segs.forEach((v, i) => { const a1 = a + v * 3.6; out += slice(a, a1, cols[i % cols.length], 4, 0.15 + i * 0.22); a = a1; });
      return out + (lab.main ? tx(320, 335, lab.main, { size: 22, w: 700, cls: "a-fade", d: 1.6 }) : "");
    }
    const a1 = p.pct * 3.6;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--series-soft)" stroke="var(--series)" stroke-width="3" class="a-pop"/>` +
      slice(0, a1, "var(--accent)", 22, 0.7) +
      (lab.you ? tx(cx + 175, cy - 95, "← " + lab.you, { size: 24, w: 700, fill: "var(--accent)", cls: "a-fade", d: 1.2, a: "middle" }) : "");
  },
  scale(p, lab) {
    const deg = p.down === "left" ? -11 : p.down === "right" ? 11 : 0;
    const le = (p.le || "🙋").repeat(p.lw || 1), re = (p.re || "🙋").repeat(p.rw || 1);
    const up = p.arrow === "up";
    return `<polygon points="320,236 286,300 354,300" fill="var(--ink-2)"/>
      <g class="a-tilt" style="--deg:${deg}deg;transform-origin:320px 232px;animation-delay:.5s">
        <rect x="110" y="226" width="420" height="10" rx="5" fill="var(--ink-2)"/>
        ${tx(175, 214, le, { size: 30, w: 400 })}${tx(465, 214, re, { size: 30, w: 400 })}
        ${tx(175, 268, lab.l, { size: 22, w: 700 })}${tx(465, 268, lab.r, { size: 22, w: 700 })}
      </g>
      <g class="a-pop" style="animation-delay:1.7s">${tx(565, 92, up ? "▲" : "▼", { size: 56, fill: up ? "var(--up)" : "var(--down)" })}${tx(565, 128, lab.arrow, { size: 18, w: 700, fill: up ? "var(--up)" : "var(--down)" })}</g>`;
  },
  line(p, lab) {
    const s = shapeSeries(p.shape), pts = plotPts(s), n = pts.length, end = pts[n - 1];
    let out = `<polygon points="50,300 ${ptsStr(pts)} 590,300" fill="var(--series)" fill-opacity=".14" class="a-fade" style="animation-delay:1.4s"/>
      <line x1="50" y1="300" x2="590" y2="300" stroke="var(--baseline)" stroke-width="2"/>
      <polyline points="${ptsStr(pts)}" pathLength="1" class="a-draw" fill="none" stroke="var(--series)" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>`;
    const maLine = (k, dash, color, d) => {
      const mp = plotPts(s);
      const m = movAvg(s, k), min = Math.min(...s), max = Math.max(...s), span = max - min || 1;
      const ps = m.map((v, i) => v == null ? null : [mp[i][0], 300 - (v - min) / span * 250]).filter(Boolean);
      return `<polyline points="${ptsStr(ps)}" fill="none" stroke="${color}" stroke-width="3" stroke-dasharray="${dash}" class="a-fade"${dl(d)}/>`;
    };
    if (p.ma) out += maLine(8, "9 6", "var(--muted)", 2.0);
    if (p.ma50) out += maLine(20, "2 6", "var(--ink-2)", 2.3);
    (p.dots || []).forEach(([f, kind], j) => {
      const [x, y] = pts[Math.round(f * (n - 1))], buy = kind === "buy";
      out += `<g class="a-pop"${dl(j ? 2.2 : 0.5)}><circle cx="${x}" cy="${y}" r="10" fill="${buy ? "var(--up)" : "var(--down)"}" stroke="var(--surface)" stroke-width="3"/>${tx(x, buy ? y + 36 : y - 20, t(buy ? "rec.BUY" : "rec.SELL"), { size: 18, w: 800, fill: buy ? "var(--up)" : "var(--down)" })}</g>`;
    });
    out += `<circle cx="${end[0]}" cy="${end[1]}" r="8" fill="var(--series)" class="a-pop" style="animation-delay:2.2s"/>`;
    if (lab.tag) out += tagBox(end[0] - 70, Math.max(32, Math.min(328, end[1] - 44)), lab.tag, "var(--accent)", 2.4);
    return out;
  },
  math(p, lab) {
    const lines = lab.lines || [], n = lines.length, y0 = 185 - (n - 1) * 32;
    return lines.map((s, i) => {
      const last = i === n - 1 && n > 1, size = Math.min(last ? 40 : 34, 600 / Math.max(1, textW(s, 1)));
      return tx(320, y0 + i * 64, s, { size, w: last ? 800 : 600, fill: last ? "var(--accent)" : "var(--ink)", cls: "a-fade", d: i * 0.9 });
    }).join("");
  },
  checklist(p, lab) {
    const items = lab.items || [], n = items.length, step = Math.min(60, 280 / n), y0 = 180 - (n - 1) * step / 2;
    const longest = Math.max(...items.map(s => textW(s, 26))), x = Math.max(60, 320 - (longest + 60) / 2);
    return items.map((s, i) => {
      const y = y0 + i * step, d = 0.2 + i * 0.8;
      return `<rect x="${x}" y="${y - 20}" width="34" height="34" rx="8" fill="none" stroke="var(--baseline)" stroke-width="3" class="a-fade"${dl(d)}/>` +
        tx(x + 17, y + 9, "✓", { size: 28, w: 800, fill: "var(--up)", cls: "a-pop", d: d + 0.45 }) +
        tx(x + 52, y + 8, s, { size: 26, a: "start", cls: "a-fade", d });
    }).join("");
  },
  stamp(p, lab) {
    const col = p.kind === "good" ? "var(--up)" : p.kind === "bad" ? "var(--down)" : "var(--warn-border)";
    const icon = p.kind === "good" ? "✓" : p.kind === "bad" ? "✗" : "!";
    const size = 36, w = Math.min(600, textW(lab.text, size) + 70);
    return `<g transform="rotate(-6 320 200)"><g class="a-pop">
      <rect x="${320 - w / 2}" y="150" width="${w}" height="100" rx="18" fill="none" stroke="${col}" stroke-width="8"/>
      ${tx(320, 213, lab.text, { size, w: 800, fill: col })}</g></g>
      ${tx(320, 112, icon, { size: 70, w: 800, fill: col, cls: "a-pop", d: 0.4 })}`;
  },
  gauge(p, lab) {
    const cx = 320, cy = 260, r = 165, A = v => -90 + v * 1.8;   // value → clock angle
    const z = (v0, v1, col) => `<path d="${arcD(cx, cy, r, A(v0), A(v1))}" fill="none" stroke="${col}" stroke-width="28"/>`;
    const lbl = v => { const a = A(v) * Math.PI / 180; return tx(cx + (r + 34) * Math.sin(a), cy - (r + 34) * Math.cos(a) + 8, v, { size: 20, fill: "var(--muted)" }); };
    const col = p.value > 70 ? "var(--down)" : p.value < 30 ? "var(--up)" : "var(--ink)";
    return z(0, 30, "var(--up)") + z(30, 70, "var(--baseline)") + z(70, 100, "var(--down)") + lbl(0) + lbl(30) + lbl(70) + lbl(100) +
      `<g class="a-tilt" style="--deg:${p.value * 1.8}deg;transform-origin:${cx}px ${cy}px;animation-delay:.4s"><line x1="${cx}" y1="${cy}" x2="${cx - 140}" y2="${cy}" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/></g>
      <circle cx="${cx}" cy="${cy}" r="14" fill="var(--ink)"/>` +
      tx(cx, 335, `RSI ${p.value}${lab.zone ? " · " + lab.zone : ""}`, { size: 30, w: 800, fill: col, cls: "a-pop", d: 1.5 });
  },
  baskets(p, lab) {
    let out = `<line x1="320" y1="40" x2="320" y2="320" stroke="var(--grid)" stroke-width="3"/>` +
      tx(170, 170, "🥚🥚🥚🥚🥚", { size: 30, w: 400, cls: "a-fade", d: 0.2 }) + tx(170, 262, "🧺", { size: 90, w: 400 }) +
      tx(170, 225, "💥", { size: 90, w: 400, cls: "a-pop", d: 1.6 }) + tx(170, 330, lab.l, { size: 22, w: 700, fill: "var(--down)" });
    for (let i = 0; i < 5; i++) {
      const x = 390 + i * 40, d = 0.4 + i * 0.25;
      out += tx(x, 212, "🥚", { size: 24, w: 400, cls: "a-pop", d }) + tx(x, 258, "🧺", { size: 40, w: 400, cls: "a-pop", d });
    }
    return out + tx(470, 140, "✓", { size: 64, w: 800, fill: "var(--up)", cls: "a-pop", d: 2 }) + tx(470, 330, lab.r, { size: 22, w: 700, fill: "var(--up)" });
  },
  news(p, lab) {
    const up = p.chg >= 0, col = up ? "var(--up)" : "var(--down)";
    return `<g class="a-slide"><rect x="50" y="70" width="390" height="220" rx="16" fill="var(--surface)" stroke="var(--border)" stroke-width="2"/>
        ${tx(84, 130, "📰", { size: 44, w: 400, a: "start" })}
        ${tx(84, 190, lab.h, { size: Math.min(30, 330 / Math.max(1, textW(lab.h, 1))), w: 800, a: "start" })}
        <rect x="84" y="220" width="320" height="10" rx="5" fill="var(--grid)"/><rect x="84" y="244" width="250" height="10" rx="5" fill="var(--grid)"/></g>
      <g class="a-pop" style="animation-delay:1.1s"><rect x="468" y="110" width="132" height="130" rx="14" fill="${up ? "var(--up-soft)" : "var(--down-soft)"}"/>
        ${tx(534, 168, up ? "▲" : "▼", { size: 44, fill: col })}${tx(534, 214, (up ? "+" : "") + p.chg + "%", { size: 32, w: 800, fill: col })}</g>`;
  },
  clocks(p, lab) {
    const face = (cx, cy, h0, m0, h1, m1, flag, label, d) => {
      const a0 = ((h0 % 12) + m0 / 60) * 30, a1raw = ((h1 % 12) + m1 / 60) * 30, a1 = a1raw <= a0 ? a1raw + 360 : a1raw;
      let ticks = "";
      for (let k = 0; k < 12; k++) { const a = k * 30 * Math.PI / 180; ticks += `<line x1="${cx + 80 * Math.sin(a)}" y1="${cy - 80 * Math.cos(a)}" x2="${cx + 90 * Math.sin(a)}" y2="${cy - 90 * Math.cos(a)}" stroke="var(--ink-2)" stroke-width="3"/>`; }
      return `<g class="a-pop"${dl(d)}><circle cx="${cx}" cy="${cy}" r="96" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="4"/>${ticks}
        <path d="${arcD(cx, cy, 66, a0, a1)}" fill="none" stroke="var(--accent)" stroke-width="16" opacity=".55"/>
        <g class="a-tilt" style="--deg:${a0}deg;transform-origin:${cx}px ${cy}px;animation-delay:${d + 0.5}s"><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - 50}" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/></g>
        <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy + (m0 === 30 ? 72 : -72)}" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="${cx}" cy="${cy}" r="7" fill="var(--ink)"/></g>
        ${tx(cx, 62, flag, { size: 34, w: 400 })}${tx(cx, 312, label, { size: 22, w: 700, cls: "a-fade", d: d + 0.8 })}`;
    };
    return face(190, 180, 9, 0, 13, 30, "🇹🇼", lab.tw, 0.1) + face(450, 180, 9, 30, 16, 0, "🇺🇸", lab.us, 0.6);
  },
  bars(p, lab) {
    const v = p.values, n = v.length, max = Math.max(...v), slot = 500 / n, bw = slot * 0.6;
    return `<line x1="70" y1="300" x2="590" y2="300" stroke="var(--baseline)" stroke-width="2"/>` + v.map((val, i) => {
      const h = val / max * 210, x = 80 + i * slot + (slot - bw) / 2, d = i * 0.35;
      return `<rect x="${x}" y="${300 - h}" width="${bw}" height="${h}" rx="6" fill="${i === n - 1 ? "var(--up)" : "var(--accent)"}" class="a-grow"${dl(d)}/>` +
        tx(x + bw / 2, 290 - h, "$" + val.toLocaleString("en-US"), { size: 17, w: 700, cls: "a-fade", d: d + 0.5 }) +
        tx(x + bw / 2, 326, (p.xs || [])[i] || "", { size: 18, fill: "var(--muted)" });
    }).join("") + (lab.unit ? tx(590, 352, lab.unit, { size: 16, a: "end", fill: "var(--muted)" }) : "");
  },
  faces() {
    const pts = []; for (let i = 0; i <= 60; i++) { const tt = i / 60; pts.push([40 + tt * 560, 180 - Math.sin(tt * Math.PI * 3) * 100]); }
    const mark = (tt, e, d, dy) => { const x = 40 + tt * 560, y = 180 - Math.sin(tt * Math.PI * 3) * 100; return tx(x, y + dy, e, { size: 54, w: 400, cls: "a-pop", d }); };
    return `<polyline points="${ptsStr(pts)}" pathLength="1" class="a-draw" fill="none" stroke="var(--series)" stroke-width="5" stroke-linecap="round"/>` +
      mark(1 / 6, "🤩", 0.5, -26) + mark(1 / 2, "😱", 1.3, 64) + mark(5 / 6, "🤑", 2.1, -26);
  },
  bullbear(p, lab) {
    const up = [[50, 280], [100, 250], [140, 262], [190, 200], [230, 215], [290, 110]], dn = [[350, 110], [400, 150], [440, 135], [490, 210], [530, 195], [590, 280]];
    return `<line x1="320" y1="40" x2="320" y2="320" stroke="var(--grid)" stroke-width="3"/>
      <polyline points="${ptsStr(up)}" pathLength="1" class="a-draw" fill="none" stroke="var(--up)" stroke-width="6" stroke-linejoin="round"/>
      <polyline points="${ptsStr(dn)}" pathLength="1" class="a-draw" fill="none" stroke="var(--down)" stroke-width="6" stroke-linejoin="round" style="animation-delay:1s"/>` +
      tx(105, 130, "🐂", { size: 80, w: 400, cls: "a-pop", d: 0.4 }) + tx(540, 130, "🐻", { size: 80, w: 400, cls: "a-pop", d: 1.4 }) +
      tx(170, 334, lab.bull, { size: 24, w: 800, fill: "var(--up)" }) + tx(470, 334, lab.bear, { size: 24, w: 800, fill: "var(--down)" });
  },
  orderline(p, lab) {
    const col = p.kind === "stop" ? "var(--down)" : "var(--accent)", pts = [];
    for (let i = 0; i <= 40; i++) { const f = i / 40; pts.push([50 + f * 430, i === 40 ? 230 : 90 + 140 * Math.pow(f, 1.3) + Math.sin(i * 1.3) * 16 * (1 - f)]); }
    return `<line x1="50" y1="230" x2="600" y2="230" stroke="${col}" stroke-width="3" stroke-dasharray="12 8"/>` +
      tx(600, 218, lab.limit, { size: 20, w: 800, a: "end", fill: col }) +
      `<polyline points="${ptsStr(pts)}" pathLength="1" class="a-draw" fill="none" stroke="var(--series)" stroke-width="4" stroke-linejoin="round"/>
       <circle cx="480" cy="230" r="12" fill="${col}" class="a-pop" style="animation-delay:2.2s"/>` +
      tagBox(480, 285, lab.done, col, 2.5);
  },
  coins(p, lab) {
    let out = tx(130, 140, "🏢", { size: 90, w: 400 }) + tx(470, 285, "🐷", { size: 110, w: 400, cls: "a-pop", d: 0.2 });
    for (let i = 0; i < 5; i++) out += `<text x="440" y="150" font-size="40" class="a-drop" style="animation-delay:${0.5 + i * 0.45}s">💰</text>`;
    return out + tx(575, 300, "💰💰", { size: 34, w: 400, cls: "a-fade", d: 2.7 }) + tx(320, 345, lab.t, { size: 28, w: 800, fill: "var(--accent)", cls: "a-fade", d: 2.6 });
  },
  flags(p, lab) {
    return tx(160, 190, p.l, { size: 110, w: 400, cls: "a-pop" }) + tx(480, 190, p.r, { size: 110, w: 400, cls: "a-pop", d: 0.4 }) +
      tx(320, 175, lab.mid, { size: 28, w: 800, fill: "var(--accent)", cls: "a-fade", d: 1 }) +
      tx(160, 300, lab.l, { size: 24, w: 700 }) + tx(480, 300, lab.r, { size: 24, w: 700 });
  },
  vol(p, lab) {
    const mk = (cy, amp, k) => { const ps = []; for (let i = 0; i <= 60; i++) ps.push([60 + i * 9, cy - (Math.sin(i * 0.9 * k) * 0.6 + Math.sin(i * 2.1) * 0.4) * amp]); return ps; };
    return tx(60, 58, lab.a, { size: 22, w: 700, a: "start" }) +
      `<polyline points="${ptsStr(mk(110, 10, 1))}" pathLength="1" class="a-draw" fill="none" stroke="var(--up)" stroke-width="4"/>` +
      tx(60, 205, lab.b, { size: 22, w: 700, a: "start" }) +
      `<polyline points="${ptsStr(mk(270, 58, 1.3))}" pathLength="1" class="a-draw" fill="none" stroke="var(--down)" stroke-width="4" style="animation-delay:.9s"/>`;
  },
};

/* ============ Video player (narration via Claude's voice where available) ============ */
const vp = { l: null, i: 0, playing: false, tok: 0 };
let narrP = null;
const ttsLang = () => ({ en: "en", zh: "zh-TW", zhs: "zh-CN" })[lang] || lang;
const sleep = ms => new Promise(r => setTimeout(r, ms));
function getNarrator() {
  if (narrP) return narrP;
  narrP = (async () => {
    try {
      const tts = window.claude && typeof window.claude.use === "function" ? await window.claude.use("tts") : null;
      if (tts) return { speak: s => tts.speak(s.slice(0, 1900), { language: ttsLang() }), stop: () => { try { tts.stop(); } catch (e) { /* ignore */ } } };
    } catch (e) { /* fall through */ }
    if (window.speechSynthesis && window.SpeechSynthesisUtterance) {
      return {
        speak: s => new Promise(res => {
          const u = new SpeechSynthesisUtterance(s);
          u.lang = ttsLang(); u.onend = res; u.onerror = res;
          speechSynthesis.cancel(); speechSynthesis.speak(u);
          setTimeout(res, Math.max(6000, s.length * 160));
        }),
        stop: () => { try { speechSynthesis.cancel(); } catch (e) { /* ignore */ } },
      };
    }
    return null;
  })();
  return narrP;
}
function stopSpeech() { if (narrP) narrP.then(n => n && n.stop()); }
const sceneText = sc => pickLang(sc) || sc.en;
const sceneMs = sc => Math.max(4200, (sceneText(sc) || "").length * (lang === "en" || lang === "es" || lang === "fr" ? 62 : 150) + 1600);
const videoSecs = l => Math.round(l.video.reduce((s, sc) => s + sceneMs(sc), 0) / 1000);

function videoMarkup(l) {
  return `<div class="vplayer">
    <div class="vstage" id="vStage"></div>
    <button type="button" class="vbig" id="vBig"><span aria-hidden="true">▶</span><span>${learn.watched[l.id] ? t("vid.replay") : t("vid.watch", { s: videoSecs(l) })}</span></button>
    <div class="vcap" id="vCap" aria-live="polite"></div>
    <div class="vctrl">
      <button type="button" id="vPlay"></button>
      <button type="button" id="vPrev" aria-label="${t("vid.prev")}">⏮</button>
      <div class="vprog" id="vProg">${l.video.map((_, j) => `<button type="button" class="vseg" data-seg="${j}" aria-label="${j + 1} / ${l.video.length}"><span></span></button>`).join("")}</div>
      <button type="button" id="vNext" aria-label="${t("vid.next")}">⏭</button>
      <button type="button" id="vMute"></button>
    </div></div>`;
}
function drawScene(i, running) {
  const l = vp.l, sc = l.video[i];
  $("vStage").innerHTML = `<svg viewBox="0 0 640 360" role="img" aria-label="${esc(sceneText(sc))}"><rect width="640" height="360" fill="var(--series-soft)"/>${VIS[sc.v](sc.p || {}, pickLang(sc.lab) || {}, { title: LT(l).title })}</svg>`;
  $("vCap").textContent = sceneText(sc);
  $("vProg").querySelectorAll(".vseg").forEach((b, j) => {
    b.className = "vseg" + (j < i ? " done" : j === i ? " active" + (running ? " run" : "") : "");
    b.style.setProperty("--dur", sceneMs(sc) + "ms");
  });
}
function updateCtrl() {
  if (!$("vPlay")) return;
  $("vPlay").textContent = vp.playing ? "⏸" : "▶";
  $("vPlay").setAttribute("aria-label", t(vp.playing ? "vid.pause" : "vid.play"));
  $("vMute").textContent = learn.muted ? "🔇" : "🔊";
  $("vMute").setAttribute("aria-label", t(learn.muted ? "vid.mute" : "vid.sound"));
  $("vMute").setAttribute("aria-pressed", String(!learn.muted));
}
async function runScene() {
  const tok = ++vp.tok, l = vp.l, sc = l.video[vp.i];
  drawScene(vp.i, true);
  const start = Date.now();
  let spoken = false;
  if (!learn.muted) {
    const n = await getNarrator();
    if (tok !== vp.tok) return;
    if (n) { try { await n.speak(sceneText(sc)); spoken = true; } catch (e) { /* timer instead */ } }
  }
  if (tok !== vp.tok) return;
  await sleep(spoken ? Math.max(700, 3600 - (Date.now() - start)) : Math.max(0, sceneMs(sc) - (Date.now() - start)));
  if (tok !== vp.tok || !vp.playing) return;
  if (vp.i < l.video.length - 1) { vp.i++; runScene(); } else finishVideo();
}
function play() { vp.playing = true; $("vBig").hidden = true; updateCtrl(); runScene(); }
function pause() { vp.playing = false; vp.tok++; stopSpeech(); updateCtrl(); drawScene(vp.i, false); }
function jump(i) {
  if (!vp.l || i < 0 || i >= vp.l.video.length) return;
  vp.tok++; stopSpeech(); vp.i = i; $("vBig").hidden = true;
  if (vp.playing) runScene(); else drawScene(i, false);
}
function stopVideo() { vp.tok++; vp.playing = false; stopSpeech(); }
function finishVideo() {
  const l = vp.l;
  vp.playing = false; updateCtrl();
  $("vProg").querySelectorAll(".vseg").forEach(b => { b.className = "vseg done"; });
  const big = $("vBig");
  big.querySelector("span:last-child").textContent = t("vid.replay");
  big.hidden = false;
  vp.i = 0;
  if (!learn.watched[l.id]) {
    learn.watched[l.id] = true;
    addXP(15, t("xp.video"));
    renderLessonList();
  }
}
function initVideo(l) {
  vp.l = l; vp.i = 0; vp.playing = false;
  drawScene(0, false);
  $("vBig").onclick = play;
  $("vPlay").onclick = () => vp.playing ? pause() : play();
  $("vPrev").onclick = () => jump(vp.i - 1);
  $("vNext").onclick = () => jump(vp.i + 1);
  $("vProg").onclick = e => { const b = e.target.closest("[data-seg]"); if (b) jump(+b.dataset.seg); };
  $("vMute").onclick = () => { learn.muted = !learn.muted; saveLearn(); if (learn.muted) stopSpeech(); updateCtrl(); };
  updateCtrl();
}

/* ============ XP, levels, badges, streaks ============ */
const LEVELS = [0, 100, 250, 450, 700, 1000, 1350, 1750];
const levelOf = xp => LEVELS.reduce((lv, th, i) => xp >= th ? i + 1 : lv, 1);
const BADGES = ["first", "perfect", "video5", "unit", "mission5", "streak3", "vocab", "all"];
const BADGE_ICON = { first: "🎓", perfect: "💯", video5: "🎬", unit: "🏅", mission5: "🎯", streak3: "🔥", vocab: "🃏", all: "🏆" };
const dayKey = d => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
function bumpStreak() {
  const s = learn.streak, today = dayKey(new Date());
  if (s.last === today) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  s.n = s.last === dayKey(y) ? s.n + 1 : 1;
  s.last = today;
}
function toast(html) {
  const w = $("toasts");
  if (!w) return;
  const el = document.createElement("div");
  el.className = "toast"; el.innerHTML = html;
  w.appendChild(el);
  while (w.children.length > 3) w.firstChild.remove();   // keep the stack short
  setTimeout(() => el.classList.add("out"), 2600);
  setTimeout(() => el.remove(), 3100);
}
function confetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = document.createElement("canvas"), ctx = c.getContext("2d");
  c.className = "confetti"; c.width = innerWidth; c.height = innerHeight;
  document.body.appendChild(c);
  const cols = ["#2a78d6", "#0ca30c", "#eda100", "#e66767", "#8b5cf6", "#14b8a6"];
  const ps = Array.from({ length: 140 }, () => ({
    x: innerWidth / 2 + (Math.random() - 0.5) * 200, y: innerHeight * 0.35,
    vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 14 - 4, s: 5 + Math.random() * 6,
    r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, c: cols[Math.floor(Math.random() * cols.length)],
  }));
  const t0 = performance.now();
  (function frame(now) {
    ctx.clearRect(0, 0, c.width, c.height);
    for (const p of ps) {
      p.vy += 0.38; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6); ctx.restore();
    }
    if (now - t0 < 2000) requestAnimationFrame(frame); else c.remove();
  })(t0);
}
function addXP(n, why) {
  learn.xp = (learn.xp || 0) + n;
  bumpStreak();
  toast(`<b>+${n} XP</b> · ${why}`);
  const lv = levelOf(learn.xp);
  if (lv > (learn.lvl || 1)) {
    learn.lvl = lv;
    setTimeout(() => { toast(t("lv.up", { n: lv, name: t("lvl." + lv) })); confetti(); }, 500);
  }
  checkBadges();
  saveLearn();
  renderXP();
}
function badgeEarned(id) {
  const cnt = o => Object.values(o || {}).filter(Boolean).length;
  switch (id) {
    case "first": return cnt(learn.done) >= 1;
    case "perfect": return cnt(learn.perfect) >= 1;
    case "video5": return cnt(learn.watched) >= 5;
    case "unit": return UNITS.some(u => u.ids.every(id2 => learn.done[id2]));
    case "mission5": return cnt(learn.missions) >= 5;
    case "streak3": return learn.streak.n >= 3;
    case "vocab": return (learn.fcKnown || 0) >= 10;
    case "all": return LESSONS.every(l => learn.done[l.id]);
  }
  return false;
}
function checkBadges() {
  let k = 0;
  for (const id of BADGES) {
    if (learn.badges[id] || !badgeEarned(id)) continue;
    learn.badges[id] = true;
    setTimeout(() => { toast(t("badge.got", { name: `${BADGE_ICON[id]} ${t(`b.${id}.n`)}` })); confetti(); }, 800 + 600 * k++);
  }
}
function renderXP() {
  if (!$("xpCard")) return;
  const xp = learn.xp || 0, lv = levelOf(xp), lo = LEVELS[lv - 1], hi = LEVELS[lv];
  const pctTo = hi ? Math.round((xp - lo) / (hi - lo) * 100) : 100;
  $("xpCard").innerHTML = `<div class="xp-lv"><small>Lv</small>${lv}</div>
    <div style="flex:1;min-width:0"><div class="xp-name">${t("lvl." + lv)}</div>
      <div class="xpbar" role="progressbar" aria-label="XP" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pctTo}"><div style="width:${pctTo}%"></div></div>
      <div class="xp-meta">${hi ? t("xp.of", { a: xp, b: hi }) : t("xp.max", { a: xp })}${learn.streak.n > 0 ? " · " + t("xp.streak", { n: learn.streak.n }) : ""}</div></div>`;
  const got = BADGES.filter(id => learn.badges[id]).length;
  $("badgeRow").innerHTML = `<div class="badge-h">${t("b.title", { a: got, b: BADGES.length })}</div>` + BADGES.map(id => {
    const name = `${t(`b.${id}.n`)}: ${t(`b.${id}.d`)}`;
    return `<span class="bdg${learn.badges[id] ? " on" : ""}" title="${esc(name)}" role="img" aria-label="${esc(name + (learn.badges[id] ? "" : " " + t("b.locked")))}">${BADGE_ICON[id]}</span>`;
  }).join("");
}

/* ============ Missions ============ */
function setFlag(k) {
  if (learn.flags[k]) return;
  learn.flags[k] = true;
  saveLearn();
  checkMissions();
}
function noteViewed(sym) {
  const v = learn.flags.viewed || (learn.flags.viewed = []);
  if (v.includes(sym)) return;
  v.push(sym);
  saveLearn();
  checkMissions();
}
function checkMissions() {
  for (const l of LESSONS) {
    if (learn.missions[l.id] || !l.mission) continue;
    let ok = false;
    try { ok = !!l.mission.check(); } catch (e) { ok = false; }
    if (!ok) continue;
    learn.missions[l.id] = true;
    addXP(25, t("xp.mission", { m: pickLang(l.mission) }));
    if (!$("learnView").hidden && learn.current === l.id && $("missionCard")) $("missionCard").innerHTML = missionMarkup(l);
  }
}
function missionMarkup(l) {
  const done = !!learn.missions[l.id];
  return `<div class="mission${done ? " done" : ""}"><span class="m-ico" aria-hidden="true">🎯</span>
    <div class="m-body"><div class="m-h">${t("m.title")} · +25 XP</div><div>${pickLang(l.mission)}</div></div>
    ${done ? `<span class="m-st">${t("m.done")}</span>` : `<button type="button" class="btn btn-ghost btn-sm" data-mission-go="1">${t("m.go")}</button>`}</div>`;
}

/* ============ Rendering: learn view ============ */
function lessonIndex(id) { return Math.max(0, LESSONS.findIndex(l => l.id === id)); }
function blankLearn() {
  return { done: {}, current: "basics", pane: "lessons", vcat: "all", xp: 0, lvl: 1, quiz: {}, watched: {}, missions: {}, perfect: {},
           badges: {}, flags: {}, streak: { n: 0, last: null }, muted: false, fcKnown: 0 };
}

function renderLessonList() {
  const doneCount = LESSONS.filter(l => learn.done[l.id]).length;
  $("progressText").textContent = t("l.of", { a: doneCount, b: LESSONS.length });
  $("progressFill").style.width = (doneCount / LESSONS.length * 100) + "%";
  $("progressBar").setAttribute("aria-valuenow", String(doneCount));
  $("progressBar").setAttribute("aria-valuemax", String(LESSONS.length));
  $("learnCount").textContent = `${doneCount}/${LESSONS.length}`;
  $("lessonList").innerHTML = UNITS.map((u, ui) => {
    const ls = u.ids.map(id => LESSONS.find(l => l.id === id));
    return `<div class="unit-h"><span>${t("u." + (ui + 1))}</span><span>${ls.filter(l => learn.done[l.id]).length}/${ls.length}</span></div>` +
      ls.map(l => {
        const i = LESSONS.indexOf(l), done = learn.done[l.id];
        const icons = (learn.watched[l.id] ? "🎬" : "") + (learn.missions[l.id] ? "🎯" : "") + (learn.perfect[l.id] ? "⭐" : "");
        return `<button type="button" class="lesson-btn${done ? " done" : ""}" data-id="${l.id}" aria-current="${l.id === learn.current}">
          <span class="lesson-num" aria-hidden="true">${done ? "✓" : i + 1}</span>
          <span>${LT(l).title}${done ? `<span class="sr-only">${t("l.done")}</span>` : ""}</span>
          <span class="l-ico" aria-hidden="true">${icons}</span></button>`;
      }).join("");
  }).join("");
  renderXP();
}

function quizBlock(q, qi, n, qs) {
  const solved = !!qs.r[qi];
  return `<div class="qblock" data-qi="${qi}">
    <p class="q"><span class="qn">${t("q.n", { i: qi + 1, n })}</span><br>${q.q}</p>
    <div class="quiz-opts">${q.opts.map((o, k) => `<button type="button" class="quiz-opt${solved && k === q.a ? " right" : ""}" data-k="${k}"${solved ? " disabled" : ""}>${o}</button>`).join("")}</div>
    <div class="quiz-feedback">${solved ? `<b class="pos">${t("l.correct")}</b> ${q.why}` : ""}</div></div>`;
}

function renderLesson() {
  stopVideo();
  const i = lessonIndex(learn.current), l = LESSONS[i], tx2 = LT(l), quiz = quizOf(l);
  const prev = LESSONS[i - 1], next = LESSONS[i + 1], ui = UNITS.indexOf(unitOf(l.id));
  const qs = learn.quiz[l.id] || { r: [], miss: [] };
  $("lessonPanel").innerHTML = `
    <div class="eyebrow">${t("u." + (ui + 1))} · ${t("l.lessonN", { i: i + 1, n: LESSONS.length })}<span id="doneMark">${learn.done[l.id] ? t("l.completed") : ""}</span></div>
    <h2>${tx2.title}</h2>
    ${videoMarkup(l)}
    <div class="lesson-body">${tx2.body(l.data())}</div>
    <div id="missionCard">${missionMarkup(l)}</div>
    <div class="quiz"><h3>${t("l.check")}</h3>${quiz.map((q, qi) => quizBlock(q, qi, quiz.length, qs)).join("")}
      <div class="quiz-feedback" id="quizDone"></div></div>
    <div class="lesson-nav">
      ${prev ? `<button type="button" class="btn btn-ghost" id="prevLesson">← ${LT(prev).title}</button>` : ""}
      <span class="spacer"></span>
      <button type="button" class="btn btn-ghost" id="tryIt">${tx2.try} →</button>
      ${next ? `<button type="button" class="btn btn-primary" id="nextLesson">${t("l.next")}</button>` : ""}
    </div>`;
  const panel = $("lessonPanel");
  panel.querySelectorAll(".qblock").forEach(b => b.querySelectorAll(".quiz-opt").forEach(o =>
    o.addEventListener("click", () => answerQuiz(l, +b.dataset.qi, +o.dataset.k))));
  if (prev) $("prevLesson").addEventListener("click", () => openLesson(prev.id, true));
  if (next) $("nextLesson").addEventListener("click", () => openLesson(next.id, true));
  $("tryIt").addEventListener("click", () => tryIt(l));
  panel.addEventListener("click", e => { if (e.target.closest("[data-mission-go]")) tryIt(l); });
  initVideo(l);
}

function answerQuiz(l, qi, k) {
  const quiz = quizOf(l), q = quiz[qi];
  const qs = learn.quiz[l.id] || (learn.quiz[l.id] = { r: [], miss: [] });
  if (qs.r[qi]) return;
  const block = $("lessonPanel").querySelector(`.qblock[data-qi="${qi}"]`);
  const buttons = block.querySelectorAll(".quiz-opt"), fb = block.querySelector(".quiz-feedback");
  if (k === q.a) {
    qs.r[qi] = true;
    buttons.forEach(b => { b.disabled = true; if (+b.dataset.k === k) b.classList.add("right"); });
    fb.innerHTML = `<b class="pos">${t("l.correct")}</b> ${q.why}`;
    const first = !qs.miss[qi];
    addXP(first ? 15 : 10, t(first ? "xp.first" : "xp.correct"));
    if (quiz.every((_, j) => qs.r[j])) completeLesson(l, qs);
  } else {
    qs.miss[qi] = true;
    buttons[k].classList.add("wrong");
    buttons[k].disabled = true;
    fb.innerHTML = `<b class="neg">${t("l.wrong")}</b> ${t("l.wrongMsg")}`;
    saveLearn();
  }
}
function completeLesson(l, qs) {
  if (learn.done[l.id]) return;
  learn.done[l.id] = true;
  if (!qs.miss.some(Boolean)) learn.perfect[l.id] = true;
  addXP(20, t("xp.lesson"));
  confetti();
  if ($("doneMark")) $("doneMark").textContent = t("l.completed");
  renderLessonList();
  if (LESSONS.every(x => learn.done[x.id])) $("quizDone").innerHTML = t("l.allDone", { n: LESSONS.length });
}

function openLesson(id, scroll) {
  learn.current = id;
  learn.pane = "lessons";
  saveLearn();
  renderLearn();
  if (scroll && window.matchMedia("(max-width: 860px)").matches) $("lessonPanel").scrollIntoView({ block: "start" });
}

function tryIt(l) {
  const tr = l.tryIt || {};
  stopVideo();
  if (tr.goto) { showView(tr.goto); window.scrollTo({ top: 0 }); return; }
  if (tr.vocab || tr.vocabCat) {
    learn.pane = "vocab";
    if (tr.vocabCat) learn.vcat = tr.vocabCat;
    if (tr.vocab) { learn.vcat = "all"; $("vocabSearch").value = tr.vocab; }
    fc = null;
    saveLearn();
    showView("learn");
    window.scrollTo({ top: 0 });
    return;
  }
  if (tr.range) { state.chartRange = tr.range; if (tr.range === "all") setFlag("rangeAll"); }
  let sym = tr.sym;
  if (tr.pick === "mostVolatile") sym = STOCKS.map(s => ({ sym: s.sym, v: volatility(series(s.sym)) })).sort((a, b) => b.v - a.v)[0].sym;
  if (sym) {
    selected = sym;
    noteViewed(sym);
    if (state.mktFilter !== "ALL" && state.mktFilter !== market[sym].mkt) state.mktFilter = "ALL";
  }
  if (tr.qty) $("qty").value = tr.qty;
  showView("trade");
  renderAll();
  const target = { news: "newsFeed", rsi: "recReasons", whenact: "coachSummary", ma: "chartWrap", chart: "chartWrap", cycles: "chartWrap",
                   pnl: "holdings", predict: "autoPilot", buysell: "qty", orders: "qty" }[l.id];
  if (l.id === "rsi") document.querySelector("details.signals").open = true;
  if (target) $(target).scrollIntoView({ block: "center" });
  else window.scrollTo({ top: 0 });
}

/* ============ Vocabulary + flashcards ============ */
const CATS = ["basics", "trading", "analysis", "risk", "economy"];
let fc = null;   // active flashcard game: { deck, i, flipped, known, seen }
function glossRow(g) {   // [term, definition, example, otherTerm] in the current language
  const [, enT, enD, enE, zhT, zhD, zhE] = g;
  if (lang === "en") return [enT, enD, enE, cv(zhT)];
  const tr = typeof glossaryFor === "function" ? glossaryFor(g) : null;
  if (tr) return [tr[0], tr[1], tr[2], enT];
  return [cv(zhT), cv(zhD), cv(zhE), enT];
}
function vocabRows() {
  const q = ($("vocabSearch").value || "").trim().toLowerCase();
  return GLOSSARY.map((g, i) => ({ g, i })).filter(({ g }) => (learn.vcat === "all" || g[0] === learn.vcat) &&
    (!q || (g.slice(1).join(" ") + " " + toS(g.slice(4).join(" ")) + " " + glossRow(g).join(" ")).toLowerCase().includes(q)));
}
function renderVocab() {
  if (fc) return renderFlash();
  $("vocabList").hidden = false; $("fcPane").hidden = true;
  $("vocabCats").innerHTML = ["all", ...CATS].map(c =>
    `<button type="button" class="chip" data-vcat="${c}" aria-pressed="${learn.vcat === c}">${c === "all" ? t("v.all") : t("cat." + c)}</button>`).join("");
  const rows = vocabRows(), q = ($("vocabSearch").value || "").trim();
  if (learn.vcat === "economy") setFlag("econCat");
  if (q && rows.some(({ g }) => g[1].startsWith("P/E"))) setFlag("vocabPE");
  $("vocabCount").textContent = t("v.count", { n: rows.length });
  $("vocabGrid").innerHTML = rows.length ? rows.map(({ g }) => {
    const [term, def, ex, alt] = glossRow(g);
    return `<article class="card term-card">
      <span class="cat">${t("cat." + g[0])}</span>
      <h3 class="term">${term}<span class="alt">${alt}</span></h3>
      <p>${def}</p>
      <p class="ex"><b>${t("v.ex")}</b> ${ex}</p>
    </article>`;
  }).join("") : `<p class="empty">${t("v.none")}</p>`;
}
function openFlash() {
  const deck = vocabRows().map(r => r.i);
  for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [deck[i], deck[j]] = [deck[j], deck[i]]; }
  fc = { deck, i: 0, flipped: false, known: 0, seen: 0 };
  renderFlash();
}
function renderFlash() {
  $("vocabList").hidden = true; $("fcPane").hidden = false;
  if (!fc.deck.length) {
    $("fcPane").innerHTML = `<div class="fc-wrap"><p class="empty">${t("v.none")}</p><button type="button" class="btn btn-ghost" data-fc="back">${t("fc.back")}</button></div>`;
    return;
  }
  const g = GLOSSARY[fc.deck[fc.i % fc.deck.length]], [term, def, ex, alt] = glossRow(g);
  $("fcPane").innerHTML = `<div class="fc-wrap">
    <div class="fc-score">${t("fc.score", { k: fc.known, s: fc.seen })}</div>
    <div class="fc-card${fc.flipped ? " flipped" : ""}"><div class="fc-inner">
      <div class="fc-face"><span class="cat">${t("cat." + g[0])}</span><div class="fc-q">${t("fc.prompt")}</div><div class="fc-term">${term}</div><div class="fc-alt">${alt}</div></div>
      <div class="fc-face fc-back"><div class="fc-term" style="font-size:22px">${term}</div><div class="fc-def">${def}</div><div class="fc-ex"><b>${t("v.ex")}</b> ${ex}</div></div>
    </div></div>
    <div class="fc-btns">${fc.flipped
      ? `<button type="button" class="btn btn-buy" data-fc="knew">${t("fc.knew")}</button><button type="button" class="btn btn-sell" data-fc="not">${t("fc.not")}</button>`
      : `<button type="button" class="btn btn-primary" data-fc="flip">${t("fc.show")}</button>`}</div>
    <button type="button" class="btn btn-ghost btn-sm" data-fc="back">${t("fc.back")}</button></div>`;
}
function flashAction(a) {
  if (a === "back") { fc = null; renderVocab(); return; }
  if (a === "flip") { fc.flipped = true; renderFlash(); return; }
  fc.seen++;
  if (a === "knew") {
    fc.known++;
    learn.fcKnown = (learn.fcKnown || 0) + 1;
    bumpStreak();
    checkBadges();
    saveLearn();
    renderXP();
  }
  fc.i++; fc.flipped = false;
  renderFlash();
}

function renderLearn() {
  document.querySelectorAll("[data-pane]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.pane === learn.pane)));
  $("lessonsPane").hidden = learn.pane !== "lessons";
  $("vocabPane").hidden = learn.pane !== "vocab";
  renderLessonList();
  if (learn.pane === "lessons") renderLesson(); else { stopVideo(); renderVocab(); }
}

/* ============ Views (Trade / Journal / Learn) ============ */
const VIEWS = ["trade", "journal", "learn"];
let currentView = "trade";
function showView(v) {
  if (v === "vocabulary") { learn.pane = "vocab"; v = "learn"; }
  if (!VIEWS.includes(v)) v = "trade";
  currentView = v;
  $("tradeView").hidden = v !== "trade";
  $("journalView").hidden = v !== "journal";
  $("learnView").hidden = v !== "learn";
  document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.view === v)));
  if (v === "learn") renderLearn();
  if (v === "journal") { renderJournal(); setFlag("journalOpen"); }
  const want = v === "trade" ? "" : "#" + v;
  if (location.hash !== want) {
    try { history.replaceState(null, "", want || location.pathname + location.search); } catch (e) { /* ignore */ }
  }
}

/* ============ Wire up ============ */
$("buyBtn").addEventListener("click", () => { if (trade(selected, parseInt($("qty").value || "0", 10), "buy")) renderAll(); });
$("sellBtn").addEventListener("click", () => { if (trade(selected, parseInt($("qty").value || "0", 10), "sell")) renderAll(); });
$("qty").addEventListener("input", updateTradeCost);
$("autoPilot").addEventListener("change", e => {
  state.autoPilot = e.target.checked;
  state.aiFeed.unshift({ ...stampNow(), k: state.autoPilot ? "ap.on" : "ap.off", v: {} });
  renderAll();
});

// Two-step reset (browser confirm dialogs are not always available)
let resetArmed = null;
$("resetBtn").addEventListener("click", () => {
  const btn = $("resetBtn");
  if (!resetArmed) {
    btn.textContent = t("reset.confirm");
    btn.className = "btn btn-danger-ghost";
    resetArmed = setTimeout(() => { resetArmed = null; btn.textContent = t("reset"); btn.className = "btn btn-ghost"; }, 4000);
    return;
  }
  clearTimeout(resetArmed); resetArmed = null;
  btn.textContent = t("reset"); btn.className = "btn btn-ghost";
  state = { ...state, cash: START_CASH, holdings: {}, history: [], aiFeed: [], journal: [], autoPilot: false, dayStartTotal: START_CASH };
  $("autoPilot").checked = false;
  $("tradeMsg").textContent = t("reset.done"); $("tradeMsg").className = "trade-msg pos";
  renderAll();
});

$("langSel").addEventListener("change", e => {
  lang = LANGS.includes(e.target.value) ? e.target.value : "en";
  store(LANG_KEY, lang);
  applyStatic();
  $("tradeMsg").textContent = "";
  renderAll();
  showView(currentView);
  if (zoomOpen()) renderZoom();
});
$("vocabSearch").addEventListener("input", () => { fc = null; renderVocab(); });
$("fcOpen").addEventListener("click", openFlash);

document.querySelectorAll(".tabs button").forEach(b => b.addEventListener("click", () => { showView(b.dataset.view); window.scrollTo({ top: 0 }); }));

// One click handler for everything rendered dynamically
document.addEventListener("click", e => {
  const el = sel => e.target.closest(sel);
  let b;
  if ((b = el("[data-lesson]"))) { learn.current = b.dataset.lesson; learn.pane = "lessons"; saveLearn(); showView("learn"); window.scrollTo({ top: 0 }); return; }
  if ((b = el("[data-zone]"))) { setZone(b.dataset.zone); return; }
  if ((b = el("[data-fc]"))) { flashAction(b.dataset.fc); return; }
  if ((b = el("[data-range]"))) { if (b.dataset.range === "all") setFlag("rangeAll"); state.chartRange = b.dataset.range; save(); renderDetail(); if (zoomOpen()) renderZoom(); return; }
  if ((b = el("[data-goto]"))) { showView(b.dataset.goto); window.scrollTo({ top: 0 }); return; }
  if ((b = el("[data-jfilter]"))) { state.jFilter = b.dataset.jfilter; save(); renderJournal(); return; }
  if ((b = el("[data-pane]"))) { learn.pane = b.dataset.pane; saveLearn(); renderLearn(); return; }
  if ((b = el("[data-vcat]"))) { learn.vcat = b.dataset.vcat; saveLearn(); renderVocab(); return; }
  if ((b = el("[data-mkt]"))) {
    state.mktFilter = b.dataset.mkt;
    const first = STOCKS.find(s => state.mktFilter === "ALL" || s.mkt === state.mktFilter);
    if (state.mktFilter !== "ALL" && market[selected].mkt !== state.mktFilter && first) selected = first.sym;
    renderAll(); return;
  }
  if ((b = el(".lesson-btn"))) { openLesson(b.dataset.id, true); return; }
  if ((b = el("[data-sym]")) && market[b.dataset.sym]) {
    selected = b.dataset.sym;
    noteViewed(selected);
    if (b.classList.contains("news-sym")) setFlag("newsClick");
    if (state.mktFilter !== "ALL" && state.mktFilter !== market[selected].mkt) state.mktFilter = "ALL";
    renderAll();
    if (b.classList.contains("news-sym")) $("dSym").scrollIntoView({ block: "center" });
  }
});
window.addEventListener("hashchange", () => showView(location.hash.slice(1) || "trade"));
for (const id of ["chartWrap", "bigChartWrap"]) {
  $(id).addEventListener("pointermove", e => chartHover(e, id));
  $(id).addEventListener("pointerleave", () => chartLeave(id));
}
$("zoomBtn").addEventListener("click", openZoom);
$("cmClose").addEventListener("click", closeZoom);
$("chartModal").addEventListener("click", e => { if (e.target === $("chartModal")) closeZoom(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeZoom(); });
window.addEventListener("resize", () => { if (zoomOpen()) renderZoom(); });

loadZone(zone);
$("autoPilot").checked = state.autoPilot;
applyStatic();
renderAll();
showView(location.hash.slice(1) || "trade");
setInterval(tick, TICK_MS);
