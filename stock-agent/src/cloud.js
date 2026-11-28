/* ============ Cloud save: keep progress in the viewer's own Claude account ============ */
// Progress is always saved in this browser (localStorage). When the page runs as a claude.ai
// artifact and the viewer is signed in, the same saves are copied to a private place in the
// viewer's account (db path data/users/<id>/..., which nobody else can read, not even the
// artifact's owner), so progress follows them to other devices.
// Each saved key carries the time it last changed; on load, a newer copy in the account wins.
const SYNC_META = "stockpilot-sync";
const syncKeys = () => [LANG_KEY, ZONE_KEY, LEARN_KEY, ...ZONES.flatMap(z => [zoneKeys(z).s, zoneKeys(z).m])];
let cloud = { state: "pending", db: null, uid: null, dirty: new Set(), early: new Set(), timer: null, busy: false };
function syncMeta() { try { return JSON.parse(localStorage.getItem(SYNC_META)) || { t: {} }; } catch (e) { return { t: {} }; } }
function setSyncTime(k, ms) { try { const m = syncMeta(); m.t[k] = ms; localStorage.setItem(SYNC_META, JSON.stringify(m)); } catch (e) { /* storage unavailable */ } }
// called by store() after every local save
function cloudTouch(k) {
  if (!syncKeys().includes(k)) return;
  if (cloud.state === "pending") { cloud.early.add(k); return; }   // decided after the first download
  setSyncTime(k, Date.now());
  if (cloud.state === "on" || cloud.state === "error") cloud.dirty.add(k);
}
function renderCloud() {
  const el = $("cloudStatus");
  if (!el) return;
  el.textContent = cloud.state === "on" ? t("cloud.on") : cloud.state === "error" ? t("cloud.error") : cloud.state === "pending" ? "" : t("cloud.local");
}
async function cloudPush() {
  if (cloud.busy || !cloud.db || !cloud.dirty.size) return;
  cloud.busy = true;
  const meta = syncMeta();
  try {
    for (const k of [...cloud.dirty]) {
      cloud.dirty.delete(k);
      const raw = localStorage.getItem(k);
      if (raw == null) continue;
      await cloud.db.doc(`data/users/${cloud.uid}/${k}`).set({ v: JSON.parse(raw), t: meta.t[k] || Date.now() });   // one write at a time
    }
    if (cloud.state === "error") cloud.state = "on";
  } catch (e) {
    cloud.state = "error";
    if (!e || e.code !== "invalid_argument") for (const k of syncKeys()) cloud.dirty.add(k);   // try again later (a too-big save cannot succeed)
  }
  cloud.busy = false;
  renderCloud();
}
async function initCloud() {
  let db = null, user = null;
  try {
    if (window.claude && typeof window.claude.use === "function") [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
  } catch (e) { db = null; }
  const uid = db && user ? await user.id().catch(() => null) : null;
  if (!uid) { cloud.state = "local"; finishEarly(); renderCloud(); return; }
  cloud.db = db; cloud.uid = uid;
  const meta = syncMeta();
  let pulled = false;
  try {
    for (const k of syncKeys()) {
      const snap = await db.doc(`data/users/${uid}/${k}`).get();
      const d = snap.exists ? snap.data() : null;
      if (d && typeof d.t === "number" && d.t > (meta.t[k] || 0) && d.v !== undefined) {
        localStorage.setItem(k, JSON.stringify(d.v));
        setSyncTime(k, d.t);
        cloud.early.delete(k);
        pulled = true;
      } else if (localStorage.getItem(k) != null && (!d || (meta.t[k] || 0) > (d.t || 0))) {
        if (!meta.t[k]) setSyncTime(k, Date.now());
        cloud.dirty.add(k);
      }
    }
    cloud.state = "on";
  } catch (e) { cloud.state = "error"; }
  finishEarly();
  if (pulled) applyCloudSave();
  renderCloud();
  cloud.timer = setInterval(cloudPush, 30000);
  const flush = () => { if (document.visibilityState === "hidden") cloudPush(); };
  document.addEventListener("visibilitychange", flush);
  window.addEventListener("pagehide", () => cloudPush());
  cloudPush();
}
// saves made before the first download count as real changes for the keys the account did not replace
function finishEarly() {
  for (const k of cloud.early) { setSyncTime(k, Date.now()); if (cloud.state === "on" || cloud.state === "error") cloud.dirty.add(k); }
  cloud.early.clear();
}
// a newer copy came from the account: reload everything from it
function applyCloudSave() {
  const l = load(LANG_KEY);
  if (LANGS.includes(l)) lang = l;
  const z = load(ZONE_KEY);
  if (ZONES.includes(z)) zone = z;
  learn = readLearn();
  loadZone(zone);
  $("autoPilot").checked = state.autoPilot;
  applyStatic(); renderMktOptions(); syncOrderForm(false);
  renderAll(); renderXP(); showView(currentView);
  toast(t("cloud.restored"));
}
