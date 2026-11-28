/* ============ Clickable vocabulary words in lessons + first-time guide ============ */

/* ---- Vocabulary words: the first mention of each glossary word in a lesson becomes a button ---- */
let glossCache = { lang: null, re: null, map: null };
const NO_WORD_GAPS = ["zh", "zhs", "hi", "ar", "bn"];   // scripts where \b word boundaries don't work
function glossMatcher() {
  if (glossCache.lang === lang) return glossCache;
  const map = new Map();
  GLOSSARY.forEach((g, i) => {
    const term = String(glossRow(g)[0]);
    // "ETF (exchange-traded fund)" -> "ETF", "exchange-traded fund"; "Overbought / oversold" -> both
    for (let v of term.split(/\s*[\/／(（)）]\s*/)) {
      v = v.trim();
      const minLen = NO_WORD_GAPS.includes(lang) ? 2 : 3;
      if (v.length >= minLen && !map.has(v.toLowerCase())) map.set(v.toLowerCase(), i);
    }
  });
  const alts = [...map.keys()].sort((a, b) => b.length - a.length).map(v => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const re = NO_WORD_GAPS.includes(lang) ? new RegExp(`(${alts})`, "giu") : new RegExp(`(?<![\\p{L}\\p{N}])(${alts})(?:s|es)?(?![\\p{L}\\p{N}])`, "giu");
  glossCache = { lang, re, map };
  return glossCache;
}
function linkGlossary(root) {
  if (!root) return;
  const { re, map } = glossMatcher(), used = new Set();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => n.parentElement.closest("button, a, .gloss-word, .key-idea > b, h4") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  for (let cur of nodes) {
    while (cur) {
      re.lastIndex = 0;
      let m, hit = null;
      while ((m = re.exec(cur.data))) { const i = map.get(m[1].toLowerCase()); if (i != null && !used.has(i)) { hit = { m, i }; break; } }
      if (!hit) break;
      used.add(hit.i);
      const mid = cur.splitText(hit.m.index), rest = mid.splitText(hit.m[0].length);
      const btn = document.createElement("button");
      btn.type = "button"; btn.className = "gloss-word"; btn.dataset.gloss = String(hit.i); btn.textContent = mid.data;
      mid.replaceWith(btn);
      cur = rest;
    }
  }
}
function showGloss(btn) {
  const g = GLOSSARY[+btn.dataset.gloss];
  if (!g) return;
  const [term, def, ex] = glossRow(g);
  let pop = $("glossPop");
  if (!pop) { pop = document.createElement("div"); pop.id = "glossPop"; pop.className = "gloss-pop"; pop.setAttribute("role", "dialog"); document.body.appendChild(pop); }
  pop.innerHTML = `<b class="gp-term"></b><p class="gp-def"></p><p class="gp-ex"><b>${t("v.ex")}</b> <span></span></p>
    <button type="button" class="btn btn-ghost btn-sm" data-goto-vocab>${t("l.vocab")} →</button>`;
  pop.querySelector(".gp-term").textContent = term;
  pop.querySelector(".gp-def").textContent = def;
  pop.querySelector(".gp-ex span").textContent = ex;
  pop.hidden = false;
  const r = btn.getBoundingClientRect(), w = Math.min(320, innerWidth - 32);
  pop.style.width = w + "px";
  pop.style.left = Math.max(16, Math.min(innerWidth - w - 16, r.left)) + "px";
  pop.style.top = (r.bottom + 8 + pop.offsetHeight > innerHeight ? Math.max(8, r.top - pop.offsetHeight - 8) : r.bottom + 8) + "px";
  setFlag("glossWord");
}
const hideGloss = () => { const p = $("glossPop"); if (p) p.hidden = true; };

/* ---- First-time guide: six short steps on the Trade screen ---- */
const TOUR = [
  () => document.querySelector(".col-left .card"),
  () => $("chartWrap"),
  () => $("tradeBox"),
  () => document.querySelector(".tabs"),
  () => document.querySelector(".zone-seg"),
  () => $("langSel"),
];
let tourStep = -1;
function startTour() {
  hideGloss();
  if (currentView !== "trade") showView("trade");
  tourStep = 0;
  renderTour();
}
function endTour() {
  tourStep = -1;
  ["tourHi", "tourCard"].forEach(id => { const el = $(id); if (el) el.remove(); });
  learn.toured = true; saveLearn();
}
function renderTour() {
  const target = TOUR[tourStep] && TOUR[tourStep]();
  if (!target) { endTour(); return; }
  target.scrollIntoView({ block: "center", behavior: "instant" in document.documentElement.style ? "instant" : "auto" });
  let hi = $("tourHi"), card = $("tourCard");
  if (!hi) { hi = document.createElement("div"); hi.id = "tourHi"; hi.className = "tour-hi"; document.body.appendChild(hi); }
  if (!card) { card = document.createElement("div"); card.id = "tourCard"; card.className = "tour-card"; card.setAttribute("role", "dialog"); card.setAttribute("aria-modal", "true"); document.body.appendChild(card); }
  const r = target.getBoundingClientRect(), pad = 6;
  Object.assign(hi.style, { left: (r.left - pad) + "px", top: (r.top - pad) + "px", width: (r.width + pad * 2) + "px", height: (r.height + pad * 2) + "px" });
  const n = TOUR.length, last = tourStep === n - 1;
  card.innerHTML = `<div class="tour-step">${t("tour.step", { i: tourStep + 1, n })}</div>
    <h3>${t(`tour.${tourStep + 1}.t`)}</h3><p>${t(`tour.${tourStep + 1}.b`)}</p>
    <div class="tour-btns"><button type="button" class="btn btn-ghost btn-sm" data-tour="skip">${t("tour.skip")}</button>
      ${tourStep > 0 ? `<button type="button" class="btn btn-ghost btn-sm" data-tour="back">${t("tour.back")}</button>` : ""}
      <button type="button" class="btn btn-primary btn-sm" data-tour="next">${t(last ? "tour.done" : "tour.next")}</button></div>`;
  const w = Math.min(340, innerWidth - 32);
  card.style.width = w + "px";
  const below = r.bottom + 14, ch = card.offsetHeight;
  card.style.top = (below + ch < innerHeight ? below : Math.max(12, r.top - ch - 14)) + "px";
  card.style.left = Math.max(16, Math.min(innerWidth - w - 16, r.left)) + "px";
  card.querySelector('[data-tour="next"]').focus();
}

function initGuide() {
  document.addEventListener("click", e => {
    const w = e.target.closest(".gloss-word");
    if (w) { showGloss(w); return; }
    if (e.target.closest("[data-goto-vocab]")) { hideGloss(); learn.pane = "vocab"; saveLearn(); showView("learn"); return; }
    if (!e.target.closest("#glossPop")) hideGloss();
    const tb = e.target.closest("[data-tour]");
    if (tb) {
      const a = tb.dataset.tour;
      if (a === "start") startTour();
      else if (a === "skip") endTour();
      else if (a === "back") { tourStep--; renderTour(); }
      else if (a === "next") { if (tourStep >= TOUR.length - 1) endTour(); else { tourStep++; renderTour(); } }
    }
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { hideGloss(); if (tourStep >= 0) endTour(); } });
  window.addEventListener("resize", () => { hideGloss(); if (tourStep >= 0) renderTour(); });
  window.addEventListener("scroll", () => { hideGloss(); if (tourStep >= 0) { const tg = TOUR[tourStep](); const hi = $("tourHi"); if (tg && hi) { const r = tg.getBoundingClientRect(); hi.style.top = (r.top - 6) + "px"; hi.style.left = (r.left - 6) + "px"; } } }, { passive: true });
  // first visit: show the guide once, on the Trade screen
  if (!learn.toured && currentView === "trade") setTimeout(() => { if (!learn.toured && currentView === "trade" && tourStep < 0) startTour(); }, 900);
}
