/* 플레이어 지구본 › 업데이트 게시판 (1104 마스터 '웹 페이지에 업데이트 게시판' / 카페 업데이트 글 형식). 17개 언어.
   목록 = 예고(preview.js, 맨 위 고정) + 업데이트(notes.js = 게임 CDN 패치노트 그대로) — 대단원(X.Y.Z) › 글(X.Y.Z.W) 탐색기 형태.
   글 = ❖ 제목 · 줄 목록 · 일러스트 액자 카드. 주소 #p=pre(예고) / #p=v1.0.1.50(업데이트).
   그 언어 글이 없는 것은 목록에 넣지 않는다(다른 언어로 대신 보여 주지 않는다). */
(function () {
  var LANGS = ['ko', 'en', 'ja', 'zh-Hans', 'zh-Hant', 'de', 'fr', 'es', 'it', 'pt', 'pl', 'ru', 'tr', 'vi', 'id', 'th', 'ar'];
  var T = {
    title:   {ko:'업데이트',en:'Updates',ja:'アップデート','zh-Hans':'更新公告','zh-Hant':'更新公告',de:'Aktualisierungen',fr:'Mises à jour',es:'Actualizaciones',it:'Aggiornamenti',pt:'Atualizações',pl:'Aktualizacje',ru:'Обновления',tr:'Güncellemeler',vi:'Cập nhật',id:'Pembaruan',th:'อัปเดต',ar:'التحديثات'},
    preview: {ko:'예고',en:'Preview',ja:'予告','zh-Hans':'预告','zh-Hant':'預告',de:'Vorschau',fr:'Aperçu',es:'Avance',it:'Anteprima',pt:'Prévia',pl:'Zapowiedź',ru:'Анонс',tr:'Ön izleme',vi:'Báo trước',id:'Pratinjau',th:'ตัวอย่าง',ar:'لمحة'},
    list:    {ko:'목록',en:'List',ja:'一覧','zh-Hans':'列表','zh-Hant':'列表',de:'Liste',fr:'Liste',es:'Lista',it:'Elenco',pt:'Lista',pl:'Lista',ru:'Список',tr:'Liste',vi:'Danh sách',id:'Daftar',th:'รายการ',ar:'القائمة'},
    toGlobe: {ko:'플레이어 지구본',en:'Player Globe',ja:'プレイヤー地球儀','zh-Hans':'玩家地球仪','zh-Hant':'玩家地球儀',de:'Spieler-Globus',fr:'Globe des joueurs',es:'Globo de jugadores',it:'Globo dei giocatori',pt:'Globo dos jogadores',pl:'Globus graczy',ru:'Глобус игроков',tr:'Oyuncu Küresi',vi:'Địa cầu người chơi',id:'Globe Pemain',th:'ลูกโลกผู้เล่น',ar:'كرة اللاعبين'},
    roadmap: {ko:'로드맵',en:'Roadmap',ja:'ロードマップ','zh-Hans':'路线图','zh-Hant':'路線圖',de:'Roadmap',fr:'Feuille de route',es:'Hoja de ruta',it:'Roadmap',pt:'Roteiro',pl:'Plan rozwoju',ru:'Дорожная карта',tr:'Yol haritası',vi:'Lộ trình',id:'Peta jalan',th:'แผนงาน',ar:'خارطة الطريق'},
    updatedAt:{ko:'기준일',en:'As of',ja:'基準日','zh-Hans':'更新日期','zh-Hant':'更新日期',de:'Stand',fr:'Au',es:'Actualizado el',it:'Aggiornato al',pt:'Atualizado em',pl:'Stan na',ru:'По состоянию на',tr:'Güncelleme',vi:'Cập nhật ngày',id:'Per tanggal',th:'ข้อมูล ณ วันที่',ar:'حتى تاريخ'},
    more:    {ko:'더 보기',en:'Show more',ja:'もっと見る','zh-Hans':'查看更多','zh-Hant':'查看更多',de:'Mehr anzeigen',fr:'Afficher plus',es:'Ver más',it:'Mostra altro',pt:'Ver mais',pl:'Pokaż więcej',ru:'Показать ещё',tr:'Daha fazla göster',vi:'Xem thêm',id:'Lihat lainnya',th:'ดูเพิ่มเติม',ar:'عرض المزيد'},
    wip:     {ko:'준비 중입니다.',en:'Under construction.',ja:'準備中です。','zh-Hans':'准备中。','zh-Hant':'準備中。',de:'In Vorbereitung.',fr:'En préparation.',es:'En preparación.',it:'In preparazione.',pt:'Em preparação.',pl:'W przygotowaniu.',ru:'В разработке.',tr:'Hazırlanıyor.',vi:'Đang chuẩn bị.',id:'Sedang disiapkan.',th:'กำลังเตรียมข้อมูล',ar:'قيد الإعداد.'}
  };

  var LANG = (function () {
    var s = null; try { s = localStorage.getItem('globeLang'); } catch (e) {}
    var q = new URLSearchParams(location.search); q = q.get('hl') || q.get('lang');
    if (q && LANGS.indexOf(q) >= 0) return q;
    if (LANGS.indexOf(s) >= 0) return s;
    var nav = (navigator.language || 'en').toLowerCase();
    if (nav.indexOf('zh') === 0) return /tw|hk|mo|hant/.test(nav) ? 'zh-Hant' : 'zh-Hans';
    return LANGS.indexOf(nav.slice(0, 2)) >= 0 ? nav.slice(0, 2) : 'en';
  })();
  function t(o) { return o[LANG] || o.en; }
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function dot(d) { return (d || '').replace(/-/g, '.'); }
  document.documentElement.lang = LANG;
  if (LANG === 'ar') document.documentElement.dir = 'rtl';
  var HL = '?hl=' + LANG;

  // 글 목록 = [{id, cat, pre, title, date, render(body)}]
  var POSTS = [];
  var P = window.GLOBE_PREVIEW, pv = P && P.t && P.t[LANG];
  // 예고 제목 = '다음 업데이트 예고(2026.11.04)' (1104 마스터)
  if (pv) POSTS.push({ id: 'pre', pre: true, cat: t(T.preview), title: pv.head + '(' + dot(P.date) + ')', date: P.date || '', render: renderPreview });
  ((window.GLOBE_UPDATES || {}).notes || []).forEach(function (n) {
    if (!n.t || !n.t[LANG]) return;
    POSTS.push({ id: 'v' + n.v, cat: t(T.title), title: 'v' + n.v, date: n.d, note: n, render: renderNote });
  });

  function renderPreview(bd) {
    var p = pv;
    bd.appendChild(el('h3', null, p.title));
    var ul = el('ul');
    [].concat(p.story).forEach(function (s) { ul.appendChild(el('li', null, s)); });
    bd.appendChild(ul);
    // 일러스트 액자 카드 — 그림 위 글자는 띠 '다음 업데이트 예고' 하나만 (1104 마스터)
    var card = el('div', 'card');
    for (var i = 0; i < 4; i++) card.appendChild(el('i'));
    var inn = el('div', 'card-in'), img = el('img');
    img.src = P.img; img.alt = p.name; inn.appendChild(img); card.appendChild(inn);
    card.appendChild(el('div', 'band', p.head));
    bd.appendChild(card);
    // 스킬
    bd.appendChild(el('h3', null, '[' + p.skills[0][0] + '] ' + p.name + ' — ' + p.skillsTitle));
    P.skills.forEach(function (m, i) {
      var s = p.skills[i]; if (!s) return;
      var row = el('div', 'sk' + (m[0] === 'EX' ? ' ex' : ''));
      row.appendChild(el('span', 'gr ' + m[0], m[0]));
      var b = el('div'), hd = el('div', 'sk-hd');
      hd.appendChild(el('b', null, s[0]));
      if (m[1]) hd.appendChild(el('span', 'tg ' + m[1], p.tag[m[1]]));
      if (m[2]) hd.appendChild(el('span', 'tg wp', p.weapons));
      b.appendChild(hd);
      if (s[1]) b.appendChild(el('p', null, s[1]));
      row.appendChild(b); bd.appendChild(row);
    });
  }
  function renderNote(bd, post) {
    // 패치노트 = 줄 단위. '-'·'•'로 시작하는 줄은 목록, 나머지는 문단
    var lines = post.note.t[LANG].split('\n'), ul = null, buf = [];
    function flush() { if (buf.length) { bd.appendChild(el('p', 'plain', buf.join('\n'))); buf = []; } }
    lines.forEach(function (ln) {
      var m = ln.match(/^\s*[-•·]\s*(.*)$/);
      if (m) { flush(); if (!ul) { ul = el('ul'); bd.appendChild(ul); } if (m[1]) ul.appendChild(el('li', null, m[1])); }
      else if (ln.trim() === '') { flush(); ul = null; }
      else if (ul && ul.lastChild && /^\s/.test(ln)) { ul.lastChild.textContent += ' ' + ln.trim(); }
      else { ul = null; buf.push(ln); }
    });
    flush();
  }

  // 목록 = 탐색기 형태(1106 마스터 "대단원 1.0.1 / 1.0.2 … 하부에 1.0.1.1 이렇게 탐색기 형태로").
  // 대단원 = X.Y.Z(반고정 버전), 하부 = X.Y.Z.W 글. 펼침 상태·스크롤은 기억한다(1106 마스터 "펼쳐놨으면 계속 펼쳐놓으셈") —
  // 글에 들어갔다 나와도, 다시 열어도 그대로. 처음엔 가장 새 대단원만 펼침.
  function vnum(v) { return v.split('.').map(function (x) { return parseInt(x, 10) || 0; }); }
  function vcmp(a, b) { a = vnum(a); b = vnum(b); for (var i = 0; i < 4; i++) { if ((a[i] || 0) !== (b[i] || 0)) return (b[i] || 0) - (a[i] || 0); } return 0; }
  var GROUPS = [], gmap = {};
  POSTS.forEach(function (p) {
    if (p.pre) return;
    var k = p.note.v.split('.').slice(0, 3).join('.');
    if (!gmap[k]) { gmap[k] = { key: k, items: [] }; GROUPS.push(gmap[k]); }
    gmap[k].items.push(p);
  });
  GROUPS.sort(function (a, b) { return vcmp(a.key, b.key); });
  GROUPS.forEach(function (g) { g.items.sort(function (a, b) { return vcmp(a.note.v, b.note.v); }); });
  var latest = GROUPS.length ? GROUPS[0].items[0] : null;
  // 펼침 기억 = 유저가 직접 누른 것만(키 → true/false). 기본 = 가장 새 대단원만 펼침 → 새 대단원(1.0.2 …)이 생기면 누른 적이 없으니 자동으로 펼쳐진다.
  var STATE = {}, listScroll = 0, onList = false;
  try { var o = JSON.parse(localStorage.getItem('globeUpdState') || 'null'); if (o && typeof o === 'object' && o.length === undefined) STATE = o; } catch (e) {}
  function isOpen(key) { return key in STATE ? !!STATE[key] : (GROUPS.length > 0 && key === GROUPS[0].key); }
  try { listScroll = parseInt(sessionStorage.getItem('globeUpdScroll'), 10) || 0; } catch (e) {}
  function remember() {
    if (onList) listScroll = window.scrollY || window.pageYOffset || 0;
    try { localStorage.setItem('globeUpdState', JSON.stringify(STATE)); localStorage.setItem('globeRmState', JSON.stringify(RM_STATE)); sessionStorage.setItem('globeUpdScroll', String(listScroll)); } catch (e) {}
  }
  window.addEventListener('pagehide', remember);
  function row(p, cls) {
    var li = el('li', cls), a = el('a');
    a.href = '#p=' + encodeURIComponent(p.id);
    a.appendChild(el('span', 'cat' + (p.pre ? ' pre' : ''), p.cat));
    a.appendChild(el('span', 'tt', p.title));
    if (p.pre || p === latest) a.appendChild(el('span', 'new'));
    a.appendChild(el('span', 'dt', dot(p.date)));
    li.appendChild(a); return li;
  }
  // 탭(1106 마스터 "'업데이트, 로드맵' 두개 다 볼 수 있게") — 로드맵 = 게임 로그인 공지 '업데이트 예정'(= 디코 #roadmap) 같은 글, 17개 언어.
  var TAB = 'u', R = window.GLOBE_ROADMAP, RM_STATE = {};   // 로드맵 펼침 = 유저가 누른 것만 기억(기본 = 전부 펼침)
  try { var ro = JSON.parse(localStorage.getItem('globeRmState') || 'null'); if (ro && typeof ro === 'object' && ro.length === undefined) RM_STATE = ro; } catch (e) {}
  function rmItems() { return ((R && R.items) || []).filter(function (it) { return it.title && it.title[LANG] && it.text && it.text[LANG]; }); }
  function isRmOpen(id) { return id in RM_STATE ? !!RM_STATE[id] : true; }
  function tabs(v) {
    var bar = el('div', 'tabs');
    [['u', t(T.title), '#'], ['r', t(T.roadmap), '#r']].forEach(function (d) {
      var b = el('button', null, d[1]); b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', TAB === d[0] ? 'true' : 'false');
      b.addEventListener('click', function () { if (TAB !== d[0]) { remember(); location.hash = d[2]; } });
      bar.appendChild(b);
    });
    v.appendChild(bar);
  }
  function drawRoadmap() {
    document.title = t(T.roadmap) + ' — Player : Final Raid';
    $('back').href = '../' + HL; $('back').textContent = '‹ ' + t(T.toGlobe);
    $('title').textContent = t(T.title); $('title').hidden = false;
    var v = $('view'); v.innerHTML = ''; tabs(v);
    var items = rmItems();
    if (!items.length) { v.appendChild(el('p', 'wip', t(T.wip))); return; }
    if (R.updated) v.appendChild(el('div', 'rm-dt', t(T.updatedAt) + ' ' + dot(R.updated)));
    var ol = el('ol', 'list');
    items.forEach(function (it) {
      var open = isRmOpen(it.id);
      var li = el('li', 'grp' + (open ? ' open' : '')), b = el('button', 'gh');
      b.type = 'button'; b.setAttribute('aria-expanded', open ? 'true' : 'false');
      b.appendChild(el('span', 'tri')); b.appendChild(el('span', 'tt', it.title[LANG]));
      var sub = el('ol', 'sub'); sub.hidden = !open;
      // 본문 줄 하나 = 행 하나(레이드 목록처럼 줄마다 항목인 글)
      it.text[LANG].split('\n').forEach(function (ln) {
        if (!ln.trim()) return;
        var row = el('li', 'rm'), a = el('a'); a.appendChild(el('span', 'tt', ln.trim())); row.appendChild(a); sub.appendChild(row);
      });
      b.addEventListener('click', function () {
        var now = !isRmOpen(it.id); RM_STATE[it.id] = now;
        li.classList.toggle('open', now); sub.hidden = !now; b.setAttribute('aria-expanded', now ? 'true' : 'false');
        remember();
      });
      li.appendChild(b); li.appendChild(sub); ol.appendChild(li);
    });
    v.appendChild(ol);
    onList = true;
    var y = listScroll;
    requestAnimationFrame(function () { window.scrollTo(0, y); });
  }
  function drawList() {
    document.title = t(T.title) + ' — Player : Final Raid';
    $('back').href = '../' + HL; $('back').textContent = '‹ ' + t(T.toGlobe);
    $('title').textContent = t(T.title); $('title').hidden = false;
    var v = $('view'); v.innerHTML = ''; tabs(v);
    if (!POSTS.length) { v.appendChild(el('p', 'wip', t(T.wip))); return; }
    var ol = el('ol', 'list');
    POSTS.filter(function (p) { return p.pre; }).forEach(function (p) { ol.appendChild(row(p)); });
    GROUPS.forEach(function (g) {
      var open = isOpen(g.key);
      var li = el('li', 'grp' + (open ? ' open' : '')), b = el('button', 'gh');
      b.type = 'button'; b.setAttribute('aria-expanded', open ? 'true' : 'false');
      b.appendChild(el('span', 'tri'));
      b.appendChild(el('span', 'tt', 'v' + g.key));
      b.appendChild(el('span', 'cnt', String(g.items.length)));
      b.appendChild(el('span', 'dt', dot(g.items[g.items.length - 1].date) + ' ~ ' + dot(g.items[0].date)));
      var sub = el('ol', 'sub'); sub.hidden = !open;
      g.items.forEach(function (p) { sub.appendChild(row(p)); });
      b.addEventListener('click', function () {
        var now = !isOpen(g.key); STATE[g.key] = now;
        li.classList.toggle('open', now); sub.hidden = !now; b.setAttribute('aria-expanded', now ? 'true' : 'false');
        remember();
      });
      li.appendChild(b); li.appendChild(sub); ol.appendChild(li);
    });
    v.appendChild(ol);
    onList = true;
    var y = listScroll;
    requestAnimationFrame(function () { window.scrollTo(0, y); });
  }
  function drawPost(post) {
    remember(); onList = false;
    document.title = post.title + ' — Player : Final Raid';
    $('back').href = TAB === 'r' ? '#r' : '#'; $('back').textContent = '‹ ' + t(T.list);
    $('title').hidden = true;
    var v = $('view'); v.innerHTML = '';
    var art = el('article', 'art'), hd = el('header', 'art-hd');
    hd.appendChild(el('div', 'cat', '[' + post.cat + ']'));
    hd.appendChild(el('h2', null, post.title));
    if (post.date) hd.appendChild(el('div', 'dt', dot(post.date)));
    art.appendChild(hd);
    var bd = el('div', 'art-bd');
    post.render(bd, post);
    art.appendChild(bd);
    var ft = el('div', 'art-ft'), a = el('a', null, t(T.list)); a.href = TAB === 'r' ? '#r' : '#';
    ft.appendChild(a); art.appendChild(ft);
    v.appendChild(art);
    window.scrollTo(0, 0);
  }
  function route() {
    var m = location.hash.match(/p=([^&]+)/), id = m && decodeURIComponent(m[1]);
    var post = id && POSTS.filter(function (p) { return p.id === id; })[0];
    if (post) { drawPost(post); return; }
    var nt = location.hash === '#r' ? 'r' : 'u';
    if (nt !== TAB) listScroll = 0;   // 탭을 바꾸면 맨 위부터, 같은 탭 복귀는 그 자리
    TAB = nt;
    if (TAB === 'r') drawRoadmap(); else drawList();
  }
  window.addEventListener('hashchange', route);
  route();
})();
