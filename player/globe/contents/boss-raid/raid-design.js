/* Boss artwork is public. Unreleased skills and drops remain explicitly labelled proposals. */
(function(){
'use strict';
var D=window.BOSS_RAID,L=D.labels,q=new URLSearchParams(location.search),saved='';
try{saved=localStorage.getItem('globeLang')||'';}catch(e){}
var lang=q.get('hl')||q.get('lang')||saved||navigator.language.slice(0,2);
if(D.langs.indexOf(lang)<0)lang='en';
var draft=q.get('draft')==='1',detail=document.body.dataset.view==='boss',P=detail?'../':'',suffix='?hl='+lang+(draft?'&draft=1':'');
document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.classList.add('raid-guide');
function t(x){return x&&(x[lang]||x.en||x.ko)||'';}
function e(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
var TR=(window.BOSS_RAID_I18N||{})[lang]||{},TRE=(window.BOSS_RAID_I18N||{}).en||{};
function tr(s){return lang==='ko'||!s?s:(TR[s]||TRE[s]||s);}
function w(k,v){return lang==='ko'?k:(TR[k]||v);}function $(id){return document.getElementById(id);}
function fmt(s){var a=arguments;return s.replace(/\{(\d+)\}/g,function(m,i){return a[+i+1];});}
function prop(b){return (window.BOSS_RAID_DRAFTS||{})[b.id]||null;}
function art(b){if(b.id==='ruby-phoenix')return b.concept||b.face||'';return b.id!=='frost-wolf'?'img/drafts/'+b.id+'.jpg':b.concept||b.look||b.face;}
function color(b){return (prop(b)||{}).color||'#90c6e7';}
function status(b){return '<span class="status '+(b.open?'available':'planned')+'">'+e(t(b.open?L.open:L.soon))+'</span>';}
function badge(){return '<span class="draft-badge">'+w('기획 초안','Design draft')+'</span>';}
function url(b){return(detail?'index.html':'boss/index.html')+suffix+'&id='+encodeURIComponent(b.id);}
function pic(b,c){return art(b)?'<img class="'+c+'" src="'+P+art(b)+'" alt="'+e(t(b.name))+'" loading="lazy">':'<div class="art-pending">'+e(t(L.tba))+'</div>';}
function sec(id,title,body,tag){return '<section id="'+id+'" class="detail-section"><div class="section-heading"><h2>'+e(title)+'</h2>'+(tag||'')+'</div>'+body+'</section>';}
function notice(){return '<aside class="review-note"><b>'+w('1차 디자인 검토본','First design review')+'</b><span>'+w('미출시 보스의 이미지와 스킬은 검토용 초안입니다.','Unreleased boss images and skills are review drafts.')+'</span></aside>';}
function skills(a){return '<div class="skill-grid">'+a.map(function(s){return '<article class="skill"><div class="skill-head"><div><small>'+e(tr(s[1]))+'</small><h3>'+e(tr(s[0]))+'</h3></div></div><p>'+e(tr(s[3]))+'</p></article>';}).join('')+'</div>';}
function drops(b,p){
 var a=b.drops;
 if(a&&a.length)return '<div class="reward-grid">'+a.map(function(d){return '<article class="reward"><img src="'+P+d.icon+'" alt="" loading="lazy"><div><h3>'+e(t(d.name))+'</h3><span class="drop-rate">'+e(d.pct)+'%</span></div></article>';}).join('')+'</div>';
 if(p&&p.rewards&&p.rewards.length)return '<div class="reward-grid">'+p.rewards.map(function(d){return '<article class="reward"><div><h3>'+e(tr(d[0]))+'</h3><p>'+e(tr(d[2]))+'</p></div></article>';}).join('')+'</div>';
 return '<p>'+e(t(L.tba))+'</p>';
}
if(!detail){
 document.title=t(L.raid)+' — PLAYER';$('title').className='catalog-title';$('title').innerHTML='<span class="eyebrow">PLAYER / FIELD ARCHIVE</span>'+e(t(L.raid));
 var guide=$('body').innerHTML;$('body').innerHTML=(draft?notice():'')+'<details class="guide-rules"><summary>'+w('레이드 입장 및 진행 안내','Entry & raid guide')+'</summary>'+guide+'</details>';
 $('bosses').innerHTML='<header class="catalog-head"><div><h2>'+e(t(L.list))+'</h2></div><span id="result-count"></span></header><div class="catalog-tools"><div class="filters" role="group" aria-label="'+w('공개 상태','Availability')+'"><button data-filter="all" aria-pressed="true">'+w('전체','All')+'</button><button data-filter="open" aria-pressed="false">'+e(t(L.open))+'</button><button data-filter="planned" aria-pressed="false">'+e(t(L.soon))+'</button></div><label class="search"><span>'+w('보스 검색','Search')+'</span><input id="boss-search" type="search" placeholder="'+w('이름 또는 특징','Name or trait')+'"></label></div><nav id="boss-grid" class="boss-grid" aria-label="'+e(t(L.list))+'"></nav>';
 var filter='all';function draw(){var term=$('boss-search').value.trim().toLowerCase(),a=D.bosses.filter(function(b){return(filter==='all'||(filter==='open'?b.open:!b.open))&&[t(b.name),t(b.trait),tr((prop(b)||{}).role||'')].join(' ').toLowerCase().includes(term);});
 $('result-count').textContent=a.length+' / '+D.bosses.length;
 $('boss-grid').innerHTML=a.length?a.map(function(b){var p=prop(b);return '<a class="boss-card" style="--accent:'+color(b)+'" href="'+url(b)+'"><div class="card-art">'+pic(b,'boss-art')+'<span class="catalog-number">'+String(D.bosses.indexOf(b)+1).padStart(2,'0')+'</span>'+status(b)+'</div><div class="card-copy"><div class="card-level">'+(b.lv?'LV. '+e(b.lv):w('레벨 미정','Level TBA'))+'</div><h3>'+e(t(b.name))+'</h3><p>'+e(p?tr(p.role):t(b.trait)||t(L.tba))+'</p><div class="card-footer"><span>'+w('상세 정보','View dossier')+'</span><span aria-hidden="true">↗</span></div></div></a>';}).join(''):'<p class="empty">'+w('검색 결과가 없습니다.','No matching bosses.')+'</p>';}
 $('boss-search').addEventListener('input',draw);document.querySelector('.filters').addEventListener('click',function(ev){var b=ev.target.closest('button[data-filter]');if(!b)return;filter=b.dataset.filter;this.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',String(x===b));});draw();});draw();return;
}
var b=D.bosses.find(function(x){return x.id===q.get('id');});$('back').href='../index.html'+suffix;$('back').textContent='‹ '+t(L.raid);
if(!b){$('title').textContent=w('보스를 찾을 수 없습니다.','Boss not found.');return;}
var p=prop(b),index=D.bosses.indexOf(b),official=!!b.stages;document.title=t(b.name)+' — '+t(L.raid)+' — PLAYER';document.body.style.setProperty('--accent',color(b));$('title').className='dossier-title';$('title').innerHTML='<span class="eyebrow">BOSS DOSSIER / '+String(index+1).padStart(2,'0')+'</span>'+e(t(b.name));
var html=(draft?notice():'')+'<div class="dossier-hero simple"><div class="dossier-art">'+pic(b,'hero-art')+'</div></div>';
html+='<section class="stage-panel"><div class="section-heading"><h2>'+w('난이도별 정보','Stage information')+'</h2>'+status(b)+'</div>'+(official?'<div class="stages" id="stages"></div><p id="stage-stat" class="stage-stat"></p>':'<p class="stage-stat">'+(b.lv?'Lv. '+e(b.lv):w('레벨 미정','Level TBA'))+'</p>')+'</section>';
html+=sec('patterns',t(L.skills),official?'<div id="pats" class="skill-grid" aria-live="polite"></div>':p?skills(p.skills):'<p>'+e(t(L.tba))+'</p>',!official&&p?badge():'');
html+=sec('drops',w('드랍 아이템','Item drops'),drops(b,p),!b.drops&&p?badge():'');
html+='<nav class="dossier-pagination">'+(index>0?'<a href="'+url(D.bosses[index-1])+'">‹ '+e(t(D.bosses[index-1].name))+'</a>':'<span></span>')+(index<D.bosses.length-1?'<a href="'+url(D.bosses[index+1])+'">'+e(t(D.bosses[index+1].name))+' ›</a>':'')+'</nav>';$('body').innerHTML=html;
if(!official)return;var cur=1;
function stage(){var s=b.stages[cur-1];$('stages').innerHTML=b.stages.map(function(x,i){return '<button data-stage="'+(i+1)+'" aria-pressed="'+(cur===i+1)+'"><b>'+e(fmt(t(b.stageLabel),i+1))+'</b><span>Lv.'+x.lv+'</span></button>';}).join('');$('stage-stat').textContent=fmt(t(b.stats),s.hp,s.atk);
 $('pats').innerHTML=b.patterns.filter(function(x){return x.from<=cur;}).map(function(x){var text=fmt(t(x.text),s.breath,s.freeze),k=text.search(/[:：]/);return '<article class="skill official"><div class="skill-head"><img src="'+P+x.icon+'" alt="" loading="lazy"><h3>'+e(k>0?text.slice(0,k):text)+'</h3></div><p>'+e(k>0?text.slice(k+1).trim():'')+'</p></article>';}).join('');
}
$('stages').addEventListener('click',function(ev){var el=ev.target.closest('button[data-stage]');if(el){cur=+el.dataset.stage;stage();}});stage();
})();
