/* 컨텐츠 안내 › 보스레이드 — 보스 목록(<body data-page="boss-raid">, #bosses) + 보스별 정보 쪽(<body data-view="boss">, ?id=).
   1124 마스터: "보스레이드 항목 쭉 나오고. 누르면 해당 몬스터의 외형, 컨셉샷, 보유스킬(패턴), 획득가능한 아이템"
   데이터 = bosses.js(window.BOSS_RAID, _gen_bosses.py 생성 — 게임 언어팩·보상표에서 뽑음). 정보가 없는 칸은 '준비중'. */
(function () {
  var D = window.BOSS_RAID, LANGS = D.langs, LB = D.labels;
  var LANG = (function () {
    var s = null; try { s = localStorage.getItem('globeLang'); } catch (e) {}
    var q = new URLSearchParams(location.search); q = q.get('hl') || q.get('lang');
    if (q && LANGS.indexOf(q) >= 0) return q;
    if (LANGS.indexOf(s) >= 0) return s;
    var nav = (navigator.language || 'en').toLowerCase();
    if (nav.indexOf('zh') === 0) return /tw|hk|mo|hant/.test(nav) ? 'zh-Hant' : 'zh-Hans';
    return LANGS.indexOf(nav.slice(0, 2)) >= 0 ? nav.slice(0, 2) : 'en';
  })();
  function t(o) { return o ? (o[LANG] || o.en || '') : ''; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function fmt(s) { var a = arguments; return s.replace(/\{(\d+)\}/g, function (m, i) { return a[+i + 1]; }); }
  function n(x) { return Number(x).toLocaleString('en-US'); }
  function $(id) { return document.getElementById(id); }
  var hl = '?hl=' + LANG;
  var UNKNOWN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 9a3 3 0 1 1 4.5 2.6c-.9.5-1.5 1.2-1.5 2.4"/><circle cx="12" cy="17.5" r=".6"/></svg>';
  function face(b, pre) { return b.face ? '<img src="' + pre + b.face + '" alt="">' : UNKNOWN; }
  function chip(b) { return '<span class="chip ' + (b.open ? 'on' : 'off') + '">' + esc(t(b.open ? LB.open : LB.soon)) + '</span>'; }
  function lv(b) { return b.lv ? 'Lv.' + esc(b.lv) : ''; }

  // ── 목록 ──
  if (document.body.getAttribute('data-view') !== 'boss') {
    var h = '<h2 class="sec">' + esc(t(LB.list)) + '</h2><nav class="blist">';
    D.bosses.forEach(function (b, i) {
      h += '<a class="brow" href="boss/' + hl + '&id=' + b.id + '">' +
           '<span class="no">' + (i + 1) + '</span>' +
           '<span class="bface' + (b.face ? '' : ' none') + '">' + face(b, '') + '</span>' +
           '<span class="binfo"><b>' + esc(t(b.name)) + '</b>' +
           (t(b.trait) ? '<i>' + esc(t(b.trait)) + '</i>' : '') + '</span>' +
           '<span class="bmeta"><em>' + lv(b) + '</em>' + chip(b) + '</span></a>';
    });
    $('bosses').innerHTML = h + '</nav>';
    return;
  }

  // ── 보스별 정보 ──
  document.documentElement.lang = LANG;
  if (LANG === 'ar') document.documentElement.dir = 'rtl';
  var id = new URLSearchParams(location.search).get('id');
  var b = D.bosses.filter(function (x) { return x.id === id; })[0] || D.bosses[0];
  var P = '../';
  document.title = t(b.name) + ' — ' + t(LB.raid) + ' — Player : Final Raid';
  $('back').href = '../' + hl; $('back').textContent = '‹ ' + t(LB.raid);
  $('title').className = 'hero';
  $('title').innerHTML = '<span class="bface lg' + (b.face ? '' : ' none') + '">' + face(b, P) + '</span>' +
    '<span class="htxt"><span>' + esc(t(b.name)) + '</span><small>' + [lv(b), esc(t(b.trait))].filter(Boolean).join(' · ') + '</small></span>' + chip(b);

  var tba = '<p class="wip sm">' + esc(t(LB.soon)) + '<br><small>' + esc(t(LB.tba)) + '</small></p>';
  function sec(title, body) { return '<section class="card"><h2>' + esc(t(title)) + '</h2>' + body + '</section>'; }
  function pic(src, cls) { return src ? '<img class="art ' + cls + '" src="' + P + src + '" alt="" loading="lazy">' : tba; }

  var html = '';
  if (b.where || b.rule) html += '<section class="card note">' + (b.where ? '<b>' + esc(t(b.where)) + '</b>' : '') + (b.rule ? '<p>' + esc(t(b.rule)) + '</p>' : '') + '</section>';
  html += sec(LB.look, pic(b.look, 'look'));
  html += sec(LB.concept, pic(b.concept, 'concept'));
  if (b.stages) html += '<div class="stages" id="stages"></div>';
  html += sec(LB.skills, b.patterns ? '<ul class="pats" id="pats"></ul>' : tba);
  html += sec(LB.items, b.drops ? '<div id="rew"></div>' : tba);
  $('body').innerHTML = html;
  if (!b.stages) return;

  var cur = 1;
  function draw() {
    var s = b.stages[cur - 1];
    $('stages').innerHTML = b.stages.map(function (x, i) {
      return '<button type="button" data-s="' + (i + 1) + '"' + (i + 1 === cur ? ' class="on"' : '') + '><b>' + esc(fmt(t(b.stageLabel), i + 1)) + '</b><span>Lv.' + x.lv + '</span></button>';
    }).join('') + '<p class="stat">' + esc(fmt(t(b.stats), s.hp, s.atk)).replace(/\n/g, '<br>') + '</p>';
    $('pats').innerHTML = b.patterns.filter(function (p) { return p.from <= cur; }).map(function (p) {
      var x = fmt(t(p.text), s.breath, s.freeze), k = x.search(/[:：]/);
      var nm = k > 0 ? x.slice(0, k) : x, ds = k > 0 ? x.slice(k + 1).trim() : '';
      return '<li><img src="' + P + p.icon + '" alt="" loading="lazy"><div><b>' + esc(nm) + '</b>' + (ds ? '<p>' + esc(ds) + '</p>' : '') + '</div></li>';
    }).join('');
    $('rew').innerHTML = '<p class="rline">' + esc(fmt(t(b.rewardLine), n(s.exp), n(s.gold), n(s.crystal))) + '</p><ul class="drops">' +
      b.drops.map(function (d) {
        return '<li><img src="' + P + d.icon + '" alt="" loading="lazy"><b>' + esc(t(d.name)) + '</b><em>' + d.pct + '%</em></li>';
      }).join('') + '</ul>';
  }
  $('body').addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('button[data-s]') : null;
    if (el) { cur = +el.getAttribute('data-s'); draw(); }
  });
  draw();
})();
