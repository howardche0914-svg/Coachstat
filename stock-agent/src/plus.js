/* ================================================================
   StockPilot Plus
   ----------------------------------------------------------------
   Plus features are FREE during the preview.
   To start charging later:
     1. set PLUS.requirePayment to true, and
     2. replace the check in plusUnlocked() with a real payment check
        (an account + payment service such as Stripe, verified on a server).
   Nothing else needs to change: every Plus feature asks plusUnlocked().
   ================================================================ */
const PLUS = { requirePayment: false, price: "$4.99" };
function plusUnlocked() {
  if (!PLUS.requirePayment) return true;
  return !!(learn.plus && learn.plus.active);   // placeholder until real payments exist
}

/* ============ History challenges (Plus) ============ */
// Each challenge follows the shape of a real market event. Anchor points are rough,
// rounded historical levels; the path between them is filled in with seeded noise,
// so everyone sees the same chart. fx converts the asset's price into US dollars.
const CH_START_CASH = 10000;
const CHALLENGES = [
  { id: "dotcom", emoji: "💻", level: 2, unit: "week", cur: "", fx: 1, vol: 0.045, seed: 1999,
    start: "1999-01-04", end: "2002-12-30",
    pts: [["1999-01-04", 2200], ["1999-04-12", 2500], ["1999-07-19", 2700], ["1999-10-25", 2800], ["1999-12-27", 4069],
          ["2000-03-10", 5048], ["2000-04-14", 3321], ["2000-07-17", 4200], ["2000-09-29", 3670], ["2000-12-29", 2470],
          ["2001-04-04", 1640], ["2001-07-16", 2030], ["2001-09-21", 1423], ["2001-12-31", 1950], ["2002-03-18", 1850],
          ["2002-07-23", 1330], ["2002-10-09", 1114], ["2002-12-30", 1335]],
    news: ["1999-12-27", "2000-03-10", "2000-04-14", "2001-09-17", "2002-10-09"] },
  { id: "gfc", emoji: "🏦", level: 3, unit: "week", cur: "", fx: 1, vol: 0.035, seed: 2008,
    start: "2007-10-08", end: "2009-12-28",
    pts: [["2007-10-09", 1565], ["2007-11-26", 1407], ["2007-12-10", 1515], ["2008-01-22", 1310], ["2008-03-10", 1273],
          ["2008-05-19", 1426], ["2008-07-15", 1214], ["2008-08-11", 1305], ["2008-09-15", 1192], ["2008-10-10", 899],
          ["2008-11-04", 1005], ["2008-11-20", 752], ["2009-01-06", 935], ["2009-03-09", 676], ["2009-06-12", 946],
          ["2009-08-25", 1028], ["2009-12-28", 1115]],
    news: ["2008-03-17", "2008-09-15", "2008-10-03", "2009-03-09"] },
  { id: "covid", emoji: "🦠", level: 1, unit: "day", cur: "", fx: 1, vol: 0.018, seed: 2020,
    start: "2020-02-03", end: "2020-12-31",
    pts: [["2020-02-03", 3248], ["2020-02-19", 3386], ["2020-02-28", 2954], ["2020-03-09", 2746], ["2020-03-16", 2386],
          ["2020-03-23", 2237], ["2020-03-26", 2630], ["2020-04-17", 2875], ["2020-05-13", 2820], ["2020-06-08", 3232],
          ["2020-06-26", 3009], ["2020-07-31", 3271], ["2020-09-02", 3580], ["2020-09-23", 3237], ["2020-10-12", 3534],
          ["2020-10-30", 3270], ["2020-11-09", 3550], ["2020-12-31", 3756]],
    news: ["2020-02-24", "2020-03-11", "2020-03-23", "2020-11-09"] },
  { id: "rates", emoji: "📈", level: 2, unit: "week", cur: "", fx: 1, vol: 0.035, seed: 2022,
    start: "2022-01-03", end: "2023-06-26",
    pts: [["2022-01-03", 15833], ["2022-01-27", 13353], ["2022-02-02", 14417], ["2022-03-14", 12581], ["2022-03-29", 14620],
          ["2022-05-11", 11364], ["2022-06-16", 10646], ["2022-08-15", 13128], ["2022-09-30", 10576], ["2022-10-13", 10500],
          ["2022-11-30", 11468], ["2022-12-28", 10214], ["2023-02-02", 12200], ["2023-03-13", 11188], ["2023-06-26", 13500]],
    news: ["2022-03-16", "2022-06-13", "2022-10-13", "2022-11-30"] },
  { id: "ai", emoji: "🤖", level: 2, unit: "week", cur: "$", fx: 1, vol: 0.06, seed: 2023,
    start: "2023-01-02", end: "2024-12-30",
    pts: [["2023-01-03", 14.3], ["2023-02-02", 21.7], ["2023-03-31", 27.8], ["2023-05-22", 31], ["2023-05-29", 39],
          ["2023-07-18", 47.5], ["2023-10-26", 40.3], ["2023-12-29", 49.5], ["2024-02-22", 78.5], ["2024-03-08", 87.5],
          ["2024-04-19", 76.2], ["2024-06-18", 135.6], ["2024-07-30", 103.7], ["2024-08-19", 130], ["2024-09-06", 102.8],
          ["2024-11-07", 148.9], ["2024-12-30", 134.3]],
    news: ["2023-01-03", "2023-05-25", "2024-02-22", "2024-06-18", "2024-08-05"] },
  { id: "tsmc", emoji: "🔬", level: 1, unit: "week", cur: "NT$", fx: 32, vol: 0.035, seed: 2330,
    start: "2022-01-03", end: "2024-12-30",
    pts: [["2022-01-03", 615], ["2022-01-17", 688], ["2022-03-08", 545], ["2022-04-05", 600], ["2022-07-01", 433],
          ["2022-08-01", 509], ["2022-10-25", 371], ["2022-11-15", 450], ["2023-01-30", 542], ["2023-04-25", 491],
          ["2023-06-14", 593], ["2023-10-04", 517], ["2023-12-29", 593], ["2024-03-08", 784], ["2024-04-19", 750],
          ["2024-07-11", 1080], ["2024-08-05", 815], ["2024-10-17", 1085], ["2024-12-30", 1075]],
    news: ["2022-02-24", "2022-10-25", "2022-11-15", "2024-07-11"] },
];
// challenge texts live in I18N[lang].chs; missing ones fall back to English
const chText = (id, k) => {
  const d = (I18N[dictLang()] || {}).chs, o = d && d[id] && d[id][k] !== undefined ? d[id][k] : I18N.en.chs[id][k];
  return lang === "zhs" ? toS(o) : o;
};

const ymd = d => d.toISOString().slice(0, 10);
const dayAfter = (ds, k) => { const d = new Date(ds + "T00:00:00Z"); d.setUTCDate(d.getUTCDate() + k); return ymd(d); };
function chDates(sc) {
  const out = [];
  if (sc.unit === "week") { for (let d = sc.start; d <= sc.end; d = dayAfter(d, 7)) out.push(d); }
  else { for (let d = sc.start; d <= sc.end; d = dayAfter(d, 1)) { const w = new Date(d + "T00:00:00Z").getUTCDay(); if (w > 0 && w < 6) out.push(d); } }
  return out;
}
const nearestStep = (dates, ds) => { let best = 0; for (let i = 0; i < dates.length; i++) if (Math.abs(Date.parse(dates[i]) - Date.parse(ds)) < Math.abs(Date.parse(dates[best]) - Date.parse(ds))) best = i; return best; };
// Log-linear path through the anchors, with a Brownian bridge between each pair so every anchor is hit exactly.
function chSeries(sc) {
  const dates = chDates(sc), rng = mulberry32(sc.seed), rnd = () => gaussWith(rng);
  const anchors = sc.pts.map(([d, v]) => [nearestStep(dates, d), v]).filter((a, i, arr) => i === 0 || a[0] > arr[i - 1][0]);
  if (anchors[0][0] !== 0) anchors.unshift([0, anchors[0][1]]);
  const last = dates.length - 1;
  if (anchors[anchors.length - 1][0] !== last) anchors.push([last, anchors[anchors.length - 1][1]]);
  const s = new Array(dates.length);
  for (let a = 0; a < anchors.length - 1; a++) {
    const [i0, v0] = anchors[a], [i1, v1] = anchors[a + 1], n = i1 - i0;
    const w = [0]; for (let k = 1; k <= n; k++) w.push(w[k - 1] + sc.vol * rnd());
    for (let k = 0; k <= n; k++) s[i0 + k] = Math.exp(Math.log(v0) + (Math.log(v1) - Math.log(v0)) * k / n + (w[k] - w[n] * k / n));
  }
  return { dates, s, newsAt: sc.news.map(d => nearestStep(dates, d)) };
}

let game = null;          // the challenge being played (not saved: a challenge takes about a minute)
let chTimer = null;
const chSpeedMs = sp => 1000 / (4 * sp);
const chFmtPx = (sc, v) => ltr(sc.cur + v.toLocaleString("en-US", { minimumFractionDigits: v < 100 ? 2 : 0, maximumFractionDigits: v < 100 ? 2 : 0 }));
const chFmtDate = ds => new Date(ds + "T12:00:00Z").toLocaleDateString(LOCALE(), { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
const chValue = (g, i = g.i) => g.cash + g.units * g.d.s[i] / g.sc.fx;

function chStart(id) {
  const sc = CHALLENGES.find(c => c.id === id);
  if (!sc) return;
  chStop();
  game = { sc, d: chSeries(sc), i: 0, cash: CH_START_CASH, units: 0, trades: [], news: [], speed: game ? game.speed : 1,
           autoPause: game ? game.autoPause : true, peak: CH_START_CASH, dd: 0, mPeak: 0, mDD: 0, over: false, paused: false };
  game.mPeak = game.d.s[0];
  chCheckNews();
  renderChallenges();
}
function chStop() { if (chTimer) { clearInterval(chTimer); chTimer = null; } }
function chPlay() {
  if (!game || game.over) return;
  chStop(); game.paused = false;
  chTimer = setInterval(chStep, chSpeedMs(game.speed));
  renderChallengeGame();
}
function chPause(byNews) { chStop(); if (game) game.paused = !!byNews; renderChallengeGame(); }
function chCheckNews() {
  const g = game;
  g.d.newsAt.forEach((at, k) => { if (at === g.i && !g.news.includes(k)) g.news.unshift(k); });
}
function chStep() {
  const g = game;
  if (!g || g.over) { chStop(); return; }
  g.i++;
  const v = chValue(g), p = g.d.s[g.i];
  g.peak = Math.max(g.peak, v); g.dd = Math.max(g.dd, 1 - v / g.peak);
  g.mPeak = Math.max(g.mPeak, p); g.mDD = Math.max(g.mDD, 1 - p / g.mPeak);
  const before = g.news.length;
  chCheckNews();
  if (g.i >= g.d.s.length - 1) { chFinish(); return; }
  if (g.news.length > before && g.autoPause) { chPause(true); return; }
  renderChallengeGame();
}
function chTrade(side, frac) {
  const g = game;
  if (!g || g.over) return;
  const px = g.d.s[g.i] / g.sc.fx;
  if (side === "buy") {
    const amt = g.cash * frac;
    if (amt < 1) return;
    g.cash -= amt; g.units += amt / px;
    g.trades.push({ i: g.i, side, amt });
  } else {
    const u = g.units * frac;
    if (u * px < 1) return;
    g.units -= u; g.cash += u * px;
    if (frac === 1) g.units = 0;
    g.trades.push({ i: g.i, side, amt: u * px });
  }
  renderChallengeGame();
}
function chFinish() {
  const g = game;
  chStop();
  g.over = true;
  const end = chValue(g), ret = end / CH_START_CASH - 1;
  const hold = g.d.s[g.d.s.length - 1] / g.d.s[0] - 1;
  g.stars = [true, end > CH_START_CASH, g.dd <= g.mDD + 1e-9 && g.trades.length > 0];
  const n = g.stars.filter(Boolean).length;
  learn.ch = learn.ch || {};
  const prev = learn.ch[g.sc.id] || { stars: 0, best: null, plays: 0 };
  const xp = (prev.plays ? 0 : 30) + 10 * Math.max(0, n - prev.stars);
  learn.ch[g.sc.id] = { stars: Math.max(prev.stars, n), best: prev.best == null ? ret : Math.max(prev.best, ret), plays: prev.plays + 1 };
  g.result = { end, ret, hold, n };
  saveLearn();
  if (xp) addXP(xp, t("ch.xp", { t: chText(g.sc.id, "title") }));
  if (n === 3) confetti();
  renderChallenges();
}

/* ---- Rendering ---- */
const pctTxt = x => fmtPct(x);
function chStarsHtml(n) { return `<span class="ch-stars" aria-label="${n}/3">${"★".repeat(n)}<span class="off">${"★".repeat(3 - n)}</span></span>`; }
function renderChallenges() {
  const v = $("challengeView");
  if (!v) return;
  const head = `<div class="ch-head"><div><h2>⭐ ${t("ch.title")} <span class="plus-tag">${t("plus.tag")}</span></h2>
      <p class="ch-sub">${t("ch.sub")}</p></div>
      ${PLUS.requirePayment ? "" : `<span class="plus-ribbon">🎁 ${t("plus.preview")}</span>`}</div>`;
  if (!plusUnlocked()) {
    v.innerHTML = `<div class="ch-wrap">${head}<div class="card plus-lock">
      <div class="plus-lock-icon" aria-hidden="true">🔒</div><h3>${t("plus.lockedTitle")}</h3><p>${t("plus.lockedBody", { price: PLUS.price })}</p>
      <ul class="plus-list">${["plus.f1", "plus.f2", "plus.f3"].map(k => `<li>${t(k)}</li>`).join("")}</ul>
      <button type="button" class="btn btn-primary" disabled>${t("plus.upgrade")}</button><p class="muted">${t("plus.soon")}</p></div></div>`;
    return;
  }
  if (game && game.over) { v.innerHTML = `<div class="ch-wrap">${head}${chResultHtml()}</div>`; return; }
  if (game) { v.innerHTML = `<div class="ch-wrap">${head}<div id="chGame"></div></div>`; renderChallengeGame(); return; }
  const cards = CHALLENGES.map(sc => {
    const p = (learn.ch || {})[sc.id];
    return `<div class="card ch-card">
      <div class="ch-emoji" aria-hidden="true">${sc.emoji}</div>
      <div class="ch-card-body"><h3>${chText(sc.id, "title")}</h3>
        <div class="ch-meta">${chText(sc.id, "period")} · ${chText(sc.id, "asset")} · ${t("ch.level." + sc.level)}</div>
        <p>${chText(sc.id, "intro")}</p>
        <div class="ch-card-foot">${p ? `${chStarsHtml(p.stars)} <span class="muted">${t("ch.best", { p: pctTxt(p.best) })}</span>` : `<span class="muted">${t("ch.notPlayed")}</span>`}
          <button type="button" class="btn btn-primary" data-ch="${sc.id}">${t(p ? "ch.replay" : "ch.play")}</button></div></div></div>`;
  }).join("");
  v.innerHTML = `<div class="ch-wrap">${head}<p class="ch-note">${t("ch.note")}</p><div class="ch-grid">${cards}</div></div>`;
}
function chChart(g) {
  const W = Math.max(300, Math.min(760, ($("chGame") || {}).clientWidth || 640) - 24), H = 260;
  const padL = 56, padR = 12, padT = 12, padB = 26, n = g.d.s.length;
  const seen = g.d.s.slice(0, g.i + 1);
  let lo = Math.min(...seen), hi = Math.max(...seen);
  if (hi - lo < hi * 0.04) { lo *= 0.97; hi *= 1.03; }
  const pad = (hi - lo) * 0.1; lo -= pad; hi += pad;
  const x = i => padL + (W - padL - padR) * i / (n - 1), y = v => padT + (H - padT - padB) * (1 - (v - lo) / (hi - lo));
  let grid = "";
  for (let k = 0; k <= 3; k++) { const v = lo + (hi - lo) * k / 3, yy = y(v);
    grid += `<line x1="${padL}" x2="${W - padR}" y1="${yy}" y2="${yy}" stroke="var(--grid)"/><text x="${padL - 6}" y="${yy + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${chFmtPx(g.sc, v)}</text>`; }
  const yearTicks = [];
  g.d.dates.forEach((d, i) => { if (i > 0 && d.slice(0, 4) !== g.d.dates[i - 1].slice(0, 4)) yearTicks.push([i, d.slice(0, 4)]); });
  const years = yearTicks.map(([i, yr]) => `<line x1="${x(i)}" x2="${x(i)}" y1="${padT}" y2="${H - padB}" stroke="var(--grid)" stroke-dasharray="2 3"/><text x="${x(i)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="var(--muted)">${yr}</text>`).join("");
  const line = seen.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${x(0)},${H - padB} ${line} ${x(g.i)},${H - padB}`;
  const news = g.d.newsAt.filter(at => at <= g.i).map(at => `<circle cx="${x(at)}" cy="${y(g.d.s[at])}" r="4" fill="var(--warn-ink)"/>`).join("");
  const marks = g.trades.map(tr => { const xx = x(tr.i), yy = y(g.d.s[tr.i]);
    return tr.side === "buy" ? `<path d="M${xx} ${yy + 6} l-6 10 h12 z" fill="var(--up)"/>` : `<path d="M${xx} ${yy - 6} l-6 -10 h12 z" fill="var(--down)"/>`; }).join("");
  return `<svg class="ch-chart" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${chText(g.sc.id, "asset")}">
    ${grid}${years}<polygon points="${area}" fill="var(--series-soft)"/><polyline points="${line}" fill="none" stroke="var(--series)" stroke-width="2" stroke-linejoin="round"/>
    ${news}${marks}<circle cx="${x(g.i)}" cy="${y(g.d.s[g.i])}" r="4.5" fill="var(--series)"/></svg>`;
}
function renderChallengeGame() {
  const box = $("chGame"), g = game;
  if (!box || !g || g.over) return;
  const v = chValue(g), ret = v / CH_START_CASH - 1, hold = CH_START_CASH * g.d.s[g.i] / g.d.s[0];
  const playing = !!chTimer, prog = g.i / (g.d.s.length - 1);
  const newsList = g.news.map(k => `<li><span class="time">${chFmtDate(g.d.dates[g.d.newsAt[k]])}</span>${chText(g.sc.id, "news")[k]}</li>`).join("");
  const hint = g.paused ? `<p class="ch-hint warn">${t("ch.newsPaused")}</p>` : g.i === 0 && !playing ? `<p class="ch-hint">${t("ch.startHint")}</p>` : "";
  const inv = g.units * g.d.s[g.i] / g.sc.fx;
  box.innerHTML = `<div class="ch-game">
    <div class="card ch-main">
      <div class="ch-top"><div><div class="ch-meta">${g.sc.emoji} ${chText(g.sc.id, "title")} · ${chText(g.sc.id, "asset")}</div>
        <div class="ch-date">${chFmtDate(g.d.dates[g.i])}</div></div>
        <div class="ch-px">${chFmtPx(g.sc, g.d.s[g.i])} <span class="${g.d.s[g.i] >= g.d.s[0] ? "pos" : "neg"}">${pctTxt(g.d.s[g.i] / g.d.s[0] - 1)}</span></div></div>
      ${chChart(g)}
      <div class="ch-prog" aria-hidden="true"><span style="width:${(prog * 100).toFixed(1)}%"></span></div>
      <div class="ch-controls">
        <button type="button" class="btn btn-primary" data-chact="${playing ? "pause" : "play"}">${playing ? "⏸ " + t("ch.pause") : "▶ " + t("ch.resume")}</button>
        <div class="seg" role="group" aria-label="${t("ch.speed")}">${[1, 2, 4].map(s => `<button type="button" data-chspeed="${s}" aria-pressed="${g.speed === s}">${s}×</button>`).join("")}</div>
        <label class="ch-check"><input type="checkbox" id="chAuto" ${g.autoPause ? "checked" : ""}> ${t("ch.autoPause")}</label>
        <button type="button" class="btn btn-ghost ch-quit" data-chact="quit">${t("ch.quit")}</button>
      </div>${hint}
    </div>
    <div class="ch-side">
      <div class="card">
        <div class="label">${t("ch.value")}</div>
        <div class="ch-big">${fmt$(v)} <span class="${ret >= 0 ? "pos" : "neg"}">${pctTxt(ret)}</span></div>
        <div class="ch-rows"><div><span>${t("ch.cash")}</span><b>${fmt$(g.cash)}</b></div><div><span>${t("ch.invested")}</span><b>${fmt$(inv)}</b></div>
          <div><span>${t("ch.hold")}</span><b>${fmt$(hold)}</b></div></div>
        <div class="ch-trade">
          ${[0.25, 0.5].map(f => `<button type="button" class="btn btn-buy" data-chbuy="${f}" ${g.cash < 1 ? "disabled" : ""}>${t("ch.buyPct", { p: f * 100 })}</button>`).join("")}
          <button type="button" class="btn btn-buy" data-chbuy="1" ${g.cash < 1 ? "disabled" : ""}>${t("ch.buyAll")}</button>
          ${[0.25, 0.5].map(f => `<button type="button" class="btn btn-sell" data-chsell="${f}" ${inv < 1 ? "disabled" : ""}>${t("ch.sellPct", { p: f * 100 })}</button>`).join("")}
          <button type="button" class="btn btn-sell" data-chsell="1" ${inv < 1 ? "disabled" : ""}>${t("ch.sellAll")}</button>
        </div>
        <p class="muted ch-small">${t("ch.trades", { n: g.trades.length })}</p>
      </div>
      <div class="card"><h3 class="ch-h3">📰 ${t("ch.news")}</h3><ul class="feed ch-news">${newsList || `<li class="empty">${t("ch.newsEmpty")}</li>`}</ul></div>
    </div></div>`;
}
function chResultHtml() {
  const g = game, r = g.result, id = g.sc.id;
  const holdEnd = CH_START_CASH * (1 + r.hold);
  const starRows = ["ch.star1", "ch.star2", "ch.star3"].map((k, i) => `<li class="${g.stars[i] ? "ok" : "no"}">${g.stars[i] ? "★" : "☆"} ${t(k)}</li>`).join("");
  return `<div class="card ch-result">
    <div class="ch-result-top"><div class="ch-emoji" aria-hidden="true">${g.sc.emoji}</div><div>
      <h3>${t("ch.done")} · ${chText(id, "title")}</h3>${chStarsHtml(r.n)}</div></div>
    <div class="ch-compare">
      <div><div class="label">${t("ch.you")}</div><div class="ch-big">${fmt$(r.end)}</div><div class="${r.ret >= 0 ? "pos" : "neg"}">${pctTxt(r.ret)}</div></div>
      <div><div class="label">${t("ch.holdShort")}</div><div class="ch-big">${fmt$(holdEnd)}</div><div class="${r.hold >= 0 ? "pos" : "neg"}">${pctTxt(r.hold)}</div></div>
      <div><div class="label">${t("ch.cashShort")}</div><div class="ch-big">${fmt$(CH_START_CASH)}</div><div class="muted">${pctTxt(0)}</div></div>
    </div>
    <p class="muted">${t("ch.dd", { a: pct0(g.dd), b: pct0(g.mDD) })} · ${t("ch.trades", { n: g.trades.length })}</p>
    <ul class="ch-starlist">${starRows}</ul>
    <h4>📜 ${t("ch.real")}</h4><p>${chText(id, "real")}</p>
    <div class="key-idea"><b>${t("ch.takeaway")}</b> ${chText(id, "lesson")}</div>
    <div class="ch-result-btns"><button type="button" class="btn btn-primary" data-ch="${id}">${t("ch.replay")}</button>
      <button type="button" class="btn btn-ghost" data-chact="back">${t("ch.back")}</button></div>
  </div>`;
}

/* ---- Events (wired once from app.js after everything has loaded) ---- */
function initPlus() {
  $("challengeView").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.ch) { chStart(b.dataset.ch); return; }
    if (b.dataset.chbuy) { chTrade("buy", +b.dataset.chbuy); return; }
    if (b.dataset.chsell) { chTrade("sell", +b.dataset.chsell); return; }
    if (b.dataset.chspeed) { game.speed = +b.dataset.chspeed; if (chTimer) chPlay(); else renderChallengeGame(); return; }
    const act = b.dataset.chact;
    if (act === "play") chPlay();
    else if (act === "pause") chPause(false);
    else if (act === "quit" || act === "back") { chStop(); game = null; renderChallenges(); }
  });
  $("challengeView").addEventListener("change", e => { if (e.target.id === "chAuto" && game) game.autoPause = e.target.checked; });
}
