/* 플레이어 지구본 › 컨텐츠 안내 — 6칸 목록 + 상세 쪽(지금은 전부 공사중). 17개 언어.
   1028 마스터: "햄버거에 컨텐츠 안내 추가" / "ui sprite 수준으로 6칸 구성. 눌러서 상세 페이지 들어가면 전부 일단 공사중"
   칸 = 월드게이트 · 보스레이드 · 길드 · 지상 스타디움 · 비공정 스타디움 · 개발자 노트
   상세 쪽 = <body data-page="칸 id">. 내용을 채울 때는 그 쪽 index.html 의 #body 안에 쓴다(비어 있으면 공사중 표시). */
(function () {
  var LANGS = ['ko', 'en', 'ja', 'zh-Hans', 'zh-Hant', 'de', 'fr', 'es', 'it', 'pt', 'pl', 'ru', 'tr', 'vi', 'id', 'th', 'ar'];
  var T = {
    title:   {ko:'컨텐츠 안내',en:'Content Guide',ja:'コンテンツ案内','zh-Hans':'内容指南','zh-Hant':'內容指南',de:'Inhaltsübersicht',fr:'Guide du contenu',es:'Guía de contenido',it:'Guida ai contenuti',pt:'Guia de conteúdo',pl:'Przewodnik po zawartości',ru:'Обзор контента',tr:'İçerik Rehberi',vi:'Hướng dẫn nội dung',id:'Panduan Konten',th:'แนะนำคอนเทนต์',ar:'دليل المحتوى'},
    toGlobe: {ko:'플레이어 지구본',en:'Player Globe',ja:'プレイヤー地球儀','zh-Hans':'玩家地球仪','zh-Hant':'玩家地球儀',de:'Spieler-Globus',fr:'Globe des joueurs',es:'Globo de jugadores',it:'Globo dei giocatori',pt:'Globo dos jogadores',pl:'Globus graczy',ru:'Глобус игроков',tr:'Oyuncu Küresi',vi:'Địa cầu người chơi',id:'Globe Pemain',th:'ลูกโลกผู้เล่น',ar:'كرة اللاعبين'},
    wip:     {ko:'준비 중입니다.',en:'Under construction.',ja:'準備中です。','zh-Hans':'准备中。','zh-Hant':'準備中。',de:'In Vorbereitung.',fr:'En préparation.',es:'En preparación.',it:'In preparazione.',pt:'Em preparação.',pl:'W przygotowaniu.',ru:'В разработке.',tr:'Hazırlanıyor.',vi:'Đang chuẩn bị.',id:'Sedang disiapkan.',th:'กำลังเตรียมข้อมูล',ar:'قيد الإعداد.'}
  };
  // 칸 이름 — 월드게이트·보스레이드·길드 = 게임 언어팩(raid.002·raid.tab.bossraid·ui.guild)과 같은 표기
  var ITEMS = [
    {id:'world-gate', icon:'img', src:'../worldgate.png',
     name:{ko:'월드게이트',en:'World Gate',ja:'ワールドゲート','zh-Hans':'世界传送门','zh-Hant':'世界傳送門',de:'Welt-Tor',fr:'Portail mondial',es:'Puerta del Mundo',it:'Portale del Mondo',pt:'Portal Mundial',pl:'Brama Świata',ru:'Мировые Врата',tr:'Dünya Geçidi',vi:'Cổng Thế giới',id:'Gerbang Dunia',th:'เวิลด์เกต',ar:'البوابة العالمية'}},
    {id:'boss-raid', icon:'img', src:'../frostwolf.png',
     name:{ko:'보스레이드',en:'Boss Raid',ja:'ボスレイド','zh-Hans':'首领突袭','zh-Hant':'首領突襲',de:'Boss-Raid',fr:'Raid de boss',es:'Incursión de jefe',it:'Raid del boss',pt:'Raide de chefe',pl:'Rajd na bossa',ru:'Рейд на босса',tr:'Boss Baskını',vi:'Raid trùm',id:'Raid Bos',th:'บอสเรด',ar:'غارة الزعيم'}},
    {id:'guild', icon:'guild',
     name:{ko:'길드',en:'Guild',ja:'ギルド','zh-Hans':'公会','zh-Hant':'公會',de:'Gilde',fr:'Guilde',es:'Gremio',it:'Gilda',pt:'Guilda',pl:'Gildia',ru:'Гильдия',tr:'Lonca',vi:'Bang hội',id:'Guild',th:'กิลด์',ar:'النقابة'}},
    {id:'ground-stadium', icon:'stadium',
     name:{ko:'지상 스타디움',en:'Ground Stadium',ja:'地上スタジアム','zh-Hans':'地面体育场','zh-Hant':'地面體育場',de:'Bodenstadion',fr:'Stade terrestre',es:'Estadio terrestre',it:'Stadio terrestre',pt:'Estádio terrestre',pl:'Stadion naziemny',ru:'Наземный стадион',tr:'Kara Stadyumu',vi:'Sân vận động mặt đất',id:'Stadion Darat',th:'สเตเดียมภาคพื้น',ar:'الملعب الأرضي'}},
    {id:'airship-stadium', icon:'airship',
     name:{ko:'비공정 스타디움',en:'Airship Stadium',ja:'飛空艇スタジアム','zh-Hans':'飞空艇体育场','zh-Hant':'飛空艇體育場',de:'Luftschiff-Stadion',fr:'Stade dirigeable',es:'Estadio aeronave',it:'Stadio aeronave',pt:'Estádio aeronave',pl:'Stadion powietrzny',ru:'Стадион-дирижабль',tr:'Hava Gemisi Stadyumu',vi:'Sân vận động phi thuyền',id:'Stadion Kapal Udara',th:'สเตเดียมเรือเหาะ',ar:'ملعب المنطاد'}},
    {id:'devnotes', icon:'note',
     name:{ko:'개발자 노트',en:'Developer Notes',ja:'開発者ノート','zh-Hans':'开发者笔记','zh-Hant':'開發者筆記',de:'Entwicklernotizen',fr:'Notes des développeurs',es:'Notas del desarrollador',it:'Note degli sviluppatori',pt:'Notas do desenvolvedor',pl:'Notatki twórców',ru:'Заметки разработчиков',tr:'Geliştirici Notları',vi:'Ghi chú nhà phát triển',id:'Catatan Pengembang',th:'บันทึกผู้พัฒนา',ar:'ملاحظات المطور'}}
  ];
  var SVG = {
    guild:   '<path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6z"/><path d="M8.5 11.5 11 14l4.5-5"/>',
    stadium: '<ellipse cx="12" cy="9" rx="9" ry="4"/><path d="M3 9v6c0 2.2 4 4 9 4s9-1.8 9-4V9"/><ellipse cx="12" cy="9" rx="4.5" ry="1.8"/>',
    airship: '<ellipse cx="12" cy="8" rx="9" ry="4"/><path d="M8 12.5 9 16h6l1-3.5"/><ellipse cx="12" cy="18.5" rx="5" ry="1.6"/><path d="M3 8H1.5M22.5 8H21"/>',
    note:    '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/>'
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
  document.documentElement.lang = LANG;
  if (LANG === 'ar') document.documentElement.dir = 'rtl';

  function icon(it) {
    if (it.icon === 'img') return '<img src="' + it.src + '" alt="">';
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + SVG[it.icon] + '</svg>';
  }

  var page = document.body.getAttribute('data-page');
  var hl = '?hl=' + LANG;
  if (!page) {                                   // 목록(6칸)
    document.title = t(T.title) + ' — Player : Final Raid';
    $('back').href = '../' + hl; $('back').textContent = '‹ ' + t(T.toGlobe);
    $('title').textContent = t(T.title);
    $('grid').innerHTML = ITEMS.map(function (it) {
      return '<a class="tile" href="' + it.id + '/' + hl + '"><span class="ic">' + icon(it) + '</span><b>' + t(it.name) + '</b></a>';
    }).join('');
  } else {                                       // 상세(공사중)
    var it = ITEMS.filter(function (x) { return x.id === page; })[0];
    var name = t(it.name);
    if (it.icon === 'img') it = { icon: 'img', src: '../' + it.src, name: it.name };
    document.title = name + ' — Player : Final Raid';
    $('back').href = '../' + hl; $('back').textContent = '‹ ' + t(T.title);
    $('title').innerHTML = '<span class="ic sm">' + icon(it) + '</span>' + name;
    var body = $('body');
    if (!body.innerHTML.trim()) body.innerHTML = '<p class="wip">' + t(T.wip) + '</p>';
  }
})();
