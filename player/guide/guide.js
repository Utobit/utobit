// 컨텐츠 안내 메뉴 — 페이지를 더하거나 순서를 바꿀 때 여기 목록만 고친다.
//  각 페이지의 <nav class="gnav" id="gnav"></nav> 와 <div class="pager" id="pager"></div> 를 채운다.
(function () {
  var PAGES = [
    { href: '/player/guide/',              name: '컨텐츠 안내' },
    { href: '/player/guide/vision/',        name: '우리의 비전' },
    { href: '/player/guide/gate/',          name: '게이트' },
    { href: '/player/guide/world-gate/',    name: '월드게이트' },
    { href: '/player/guide/sky-stadium/',   name: '하늘의 스타디움' },
    { href: '/player/guide/stadium-event/', name: '스타디움 이벤트' },
    { href: '/player/guide/guild/',         name: '길드' },
    { href: '/player/devnotes/',            name: '개발자 노트' }
  ];
  var path = location.pathname.replace(/index\.html$/, '');
  if (path.slice(-1) !== '/') path += '/';
  var cur = -1;
  for (var i = 0; i < PAGES.length; i++) if (PAGES[i].href === path) cur = i;

  var nav = document.getElementById('gnav');
  if (nav) {
    nav.innerHTML = PAGES.map(function (p, i) {
      return '<a href="' + p.href + '"' + (i === cur ? ' class="on" aria-current="page"' : '') + '>' + p.name + '</a>';
    }).join('');
    var on = nav.querySelector('.on');
    if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  var pager = document.getElementById('pager');
  if (pager && cur >= 0) {
    var prev = PAGES[cur - 1], next = PAGES[cur + 1];
    pager.innerHTML =
      (prev ? '<a href="' + prev.href + '">← ' + prev.name + '</a>' : '<span></span>') +
      (next ? '<a href="' + next.href + '">' + next.name + ' →</a>' : '');
  }
})();
