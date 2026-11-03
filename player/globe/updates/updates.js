/* 플레이어 지구본 › 업데이트 게시판 (1104 마스터 '웹 페이지에 업데이트 게시판'). 17개 언어.
   글 = notes.js (게임 CDN 패치노트 그대로 — _gen_updates.py). 최신 글은 펼친 채, 나머지는 눌러서 펼친다.
   그 언어 글이 없는 버전은 목록에 넣지 않는다(다른 언어로 대신 보여 주지 않는다). */
(function () {
  var LANGS = ['ko', 'en', 'ja', 'zh-Hans', 'zh-Hant', 'de', 'fr', 'es', 'it', 'pt', 'pl', 'ru', 'tr', 'vi', 'id', 'th', 'ar'];
  var T = {
    title:   {ko:'업데이트',en:'Updates',ja:'アップデート','zh-Hans':'更新公告','zh-Hant':'更新公告',de:'Aktualisierungen',fr:'Mises à jour',es:'Actualizaciones',it:'Aggiornamenti',pt:'Atualizações',pl:'Aktualizacje',ru:'Обновления',tr:'Güncellemeler',vi:'Cập nhật',id:'Pembaruan',th:'อัปเดต',ar:'التحديثات'},
    toGlobe: {ko:'플레이어 지구본',en:'Player Globe',ja:'プレイヤー地球儀','zh-Hans':'玩家地球仪','zh-Hant':'玩家地球儀',de:'Spieler-Globus',fr:'Globe des joueurs',es:'Globo de jugadores',it:'Globo dei giocatori',pt:'Globo dos jogadores',pl:'Globus graczy',ru:'Глобус игроков',tr:'Oyuncu Küresi',vi:'Địa cầu người chơi',id:'Globe Pemain',th:'ลูกโลกผู้เล่น',ar:'كرة اللاعبين'},
    latest:  {ko:'최신',en:'Latest',ja:'最新','zh-Hans':'最新','zh-Hant':'最新',de:'Neueste',fr:'Dernière',es:'Última',it:'Ultima',pt:'Mais recente',pl:'Najnowsza',ru:'Последнее',tr:'En yeni',vi:'Mới nhất',id:'Terbaru',th:'ล่าสุด',ar:'الأحدث'},
    more:    {ko:'더 보기',en:'Show more',ja:'もっと見る','zh-Hans':'查看更多','zh-Hant':'查看更多',de:'Mehr anzeigen',fr:'Afficher plus',es:'Ver más',it:'Mostra altro',pt:'Ver mais',pl:'Pokaż więcej',ru:'Показать ещё',tr:'Daha fazla göster',vi:'Xem thêm',id:'Lihat lainnya',th:'ดูเพิ่มเติม',ar:'عرض المزيد'},
    wip:     {ko:'준비 중입니다.',en:'Under construction.',ja:'準備中です。','zh-Hans':'准备中。','zh-Hant':'準備中。',de:'In Vorbereitung.',fr:'En préparation.',es:'En preparación.',it:'In preparazione.',pt:'Em preparação.',pl:'W przygotowaniu.',ru:'В разработке.',tr:'Hazırlanıyor.',vi:'Đang chuẩn bị.',id:'Sedang disiapkan.',th:'กำลังเตรียมข้อมูล',ar:'قيد الإعداد.'}
  };
  var PAGE = 15;                                   // 한 번에 보이는 글 수 — '더 보기'로 이어서

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
  document.documentElement.lang = LANG;
  if (LANG === 'ar') document.documentElement.dir = 'rtl';

  document.title = t(T.title) + ' — Player : Final Raid';
  $('back').href = '../?hl=' + LANG; $('back').textContent = '‹ ' + t(T.toGlobe);
  $('title').textContent = t(T.title);

  var notes = ((window.GLOBE_UPDATES || {}).notes || []).filter(function (n) { return n.t && n.t[LANG]; });
  var board = $('board'), more = $('more'), shown = 0;
  if (!notes.length) { board.appendChild(el('li', 'wip', t(T.wip))); return; }

  function post(n, i) {
    var li = el('li', 'post' + (i === 0 ? ' on' : ''));
    var b = el('button'); b.type = 'button'; b.setAttribute('aria-expanded', i === 0 ? 'true' : 'false');
    b.appendChild(el('span', 'ver', 'v' + n.v));
    if (i === 0) b.appendChild(el('span', 'new', t(T.latest)));
    b.appendChild(el('span', 'date', n.d.replace(/-/g, '.')));
    b.appendChild(el('i', 'arr'));
    b.addEventListener('click', function () {
      var on = li.classList.toggle('on');
      b.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
    li.appendChild(b);
    li.appendChild(el('div', 'txt', n.t[LANG]));   // 글은 textContent 로만(줄바꿈은 pre-line)
    return li;
  }
  function draw() {
    notes.slice(shown, shown + PAGE).forEach(function (n, k) { board.appendChild(post(n, shown + k)); });
    shown = Math.min(notes.length, shown + PAGE);
    more.hidden = shown >= notes.length;
  }
  more.textContent = t(T.more);
  more.addEventListener('click', draw);
  draw();
})();
