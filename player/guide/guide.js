// 컨텐츠 안내 공용 — 메뉴·목차·이전/다음을 자동으로 만든다.
//  메뉴에 쪽을 더하거나 순서를 바꿀 때 = 아래 PAGES 만 고친다.
//  목차 = 본문 <h2> 제목을 모아 자동으로 만든다(쪽 글에서 목차를 따로 고칠 필요 없음).
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

  // 상단 메뉴
  var nav = document.getElementById('gnav');
  if (nav) {
    nav.innerHTML = PAGES.map(function (p, i) {
      return '<a href="' + p.href + '"' + (i === cur ? ' class="on" aria-current="page"' : '') + '>' + p.name + '</a>';
    }).join('');
    var on = nav.querySelector('.on');
    if (on) nav.scrollLeft = on.offsetLeft - 16;
  }

  // 목차 — <div id="toc"></div> 가 있는 쪽만
  var toc = document.getElementById('toc');
  if (toc) {
    var hs = document.querySelectorAll('.doc h2');
    if (hs.length >= 2) {
      var items = [];
      for (var j = 0; j < hs.length; j++) {
        if (!hs[j].id) hs[j].id = 's' + (j + 1);
        items.push('<li><a href="#' + hs[j].id + '">' + hs[j].textContent + '</a></li>');
      }
      toc.className = 'toc';
      toc.innerHTML = '<b>목차</b><ol>' + items.join('') + '</ol>';
    }
  }

  // 이전 / 다음
  var pager = document.getElementById('pager');
  if (pager && cur >= 0) {
    var prev = PAGES[cur - 1], next = PAGES[cur + 1];
    pager.innerHTML =
      (prev ? '<a href="' + prev.href + '">← ' + prev.name + '</a>' : '<span></span>') +
      (next ? '<a href="' + next.href + '">' + next.name + ' →</a>' : '');
  }
})();
