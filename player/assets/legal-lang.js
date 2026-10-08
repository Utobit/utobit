/* Player : Final Raid — 법적 문서 언어 선택(2026-10-08).
   · 한국어 원문 주소(/player/<문서>/)로 들어온 사람의 브라우저 언어가 한국어가 아니면 그 언어판(/player/<문서>/<언어>/)으로 옮긴다.
     ?lang=<코드> 가 붙어 있으면 그 언어를 따른다(?lang=ko = 한국어 원문 그대로). 한 번 고른 언어는 기억한다.
   · 모든 판의 위쪽 메뉴에 언어 선택 상자를 넣는다.
   번역본은 편의용이며 한국어 원문이 우선한다(각 번역본 맨 위 안내). */
(function () {
  var LANGS = [["ko", "한국어"], ["en", "English"], ["ja", "日本語"], ["zh-Hans", "简体中文"], ["zh-Hant", "繁體中文"], ["es", "Español"], ["pt", "Português"],
    ["de", "Deutsch"], ["fr", "Français"], ["it", "Italiano"], ["ru", "Русский"], ["id", "Bahasa Indonesia"], ["th", "ไทย"], ["vi", "Tiếng Việt"],
    ["tr", "Türkçe"], ["pl", "Polski"], ["ar", "العربية"]];
  var CODES = {}; LANGS.forEach(function (l) { CODES[l[0]] = 1; });
  var m = location.pathname.match(/^\/player\/(terms|privacy|location-terms|refund|delete-account)\/(?:([A-Za-z-]+)\/)?(?:index\.html)?$/);
  if (!m) return;
  var doc = m[1], cur = m[2] && CODES[m[2]] ? m[2] : "ko";
  var KEY = "player_legal_lang";
  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) { } }
  function norm(code) {
    if (!code) return null;
    if (CODES[code]) return code;
    var l = String(code).toLowerCase();
    if (l.indexOf("zh") === 0) return /(tw|hk|mo|hant)/.test(l) ? "zh-Hant" : "zh-Hans";
    var base = l.split("-")[0];
    return CODES[base] ? base : null;
  }
  function wanted() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) { }
    var n = norm(q);
    if (n) { store(n); return n; }
    try { var s = localStorage.getItem(KEY); if (s && CODES[s]) return s; } catch (e) { }
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "ko"];
    for (var i = 0; i < list.length; i++) { var c = norm(list[i]); if (c) return c; }
    return "en";
  }
  function url(code) { return "/player/" + doc + "/" + (code === "ko" ? "" : code + "/") + location.hash; }
  if (cur === "ko") {
    var w = wanted();
    if (w !== "ko") { location.replace(url(w)); return; }
  }
  function mount() {
    var nav = document.querySelector("nav"); if (!nav) return;
    var sel = document.createElement("select");
    sel.setAttribute("aria-label", "Language");
    sel.style.cssText = "margin-inline-start:8px;font-size:0.8rem;padding:5px 6px;border:1px solid #e5e7eb;border-radius:6px;background:#fff;color:#374151;max-width:132px;flex:0 0 auto;";
    LANGS.forEach(function (l) { var o = document.createElement("option"); o.value = l[0]; o.textContent = l[1]; if (l[0] === cur) o.selected = true; sel.appendChild(o); });
    sel.addEventListener("change", function () { store(sel.value); location.href = sel.value === "ko" ? url("ko").replace(location.hash, "") + "?lang=ko" + location.hash : url(sel.value); });
    nav.appendChild(sel);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount); else mount();
})();
