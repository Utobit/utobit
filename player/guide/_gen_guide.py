import os
ROOT = r"D:\Unity\Player\utobit\player"
PLAY = "https://play.google.com/store/apps/details?id=com.utobit.playerfinalraid"
A = "/player/assets/"
G = "/player/globe/"
TBD = '<span class="tbd">준비 중</span>'

HEAD = """<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 공사중 동안 검색 노출 막음 — 내용이 채워지면 이 줄을 지운다 -->
  <meta name="robots" content="noindex">
  <title>{title} | Player : Final Raid</title>
  <meta name="description" content="{desc}">
  <link rel="canonical" href="https://utobit.net{href}">
  <link rel="icon" href="/player/assets/icon-180.png">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-F93QE1MMT8"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', 'G-F93QE1MMT8');
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;800;900&family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/player/guide/guide.css">
</head>
<body>
  <header class="top">
    <div class="top-row">
      <a class="brand" href="/player/"><img src="/player/assets/icon.jpg" alt="">PLAYER : FINAL RAID</a>
      <a class="top-cta" href="{play}" target="_blank" rel="noopener">Google Play</a>
    </div>
    <nav class="gnav" id="gnav" aria-label="컨텐츠 안내"></nav>
  </header>

  <main>
    <div class="hero">
      <div class="hero-bg"></div>
      <div class="hero-in">
        <div>
          <p class="label">{label}</p>
          <h1>{title}</h1>
          <!-- 작성: 한 줄 정의(이 컨텐츠가 무엇인지) -->
          <p class="def">{tagline}</p>
          <!-- 작성: 두세 줄 소개 -->
          <p class="def-sub">{defsub}</p>
          <span class="wip">공사중 · 내용을 채우고 있습니다</span>
        </div>
        <div class="hero-visual">{visual}</div>
      </div>
    </div>
"""

FOOT = """
    <section class="block cta">
      <h2>지금 게이트가 열렸습니다</h2>
      <a class="btn" href="{play}" target="_blank" rel="noopener">Google Play에서 받기</a>
      <div class="pager" id="pager"></div>
    </section>
  </main>

  <footer>
    <span>© 2026 MANAMUHAN STUDIO · UTOBIT</span>
    <nav>
      <a href="/player/terms/">이용약관</a>
      <a href="/player/privacy/">개인정보처리방침</a>
      <a href="/player/location-terms/">위치기반서비스 이용약관</a>
      <a href="/player/refund/">청약철회 및 환불정책</a>
    </nav>
  </footer>
  <script src="/player/guide/guide.js"></script>
</body>
</html>
"""

def phone(src, alt=""):
    return f'<img class="phone" src="{A}{src}" alt="{alt}" loading="lazy">'

def emblem(src, spin=False):
    return f'<img class="emblem{" spin" if spin else ""}" src="{G}{src}" alt="" loading="lazy">'

PH = '<div class="ph">그림 준비 중</div>'

# slug, label, title, 한 줄 정의, 히어로 그림, 한눈에 보기 항목, 진행 순서 제목, 자세히(제목, 작성 메모, 그림), 카드 썸네일
PAGES = [
  dict(slug="vision", label="OUR VISION", title="우리의 비전", tag="Player : Final Raid 가 만들고 싶은 세계",
       visual=phone("shot1.jpg"), facts=None, steps=None,
       feats=[("우리가 만드는 게임", "어떤 게임인지 한 문단", phone("shot3.jpg")),
              ("현실과 연결된 세계", "실제 지도·실제 장소에서 펼쳐지는 의미", phone("shot1.jpg")),
              ("함께 만드는 이야기", "유저·길드·세계가 같이 움직이는 방향", phone("shot5.jpg")),
              ("앞으로의 길", "장기 로드맵·약속", PH)],
       thumb=("hero.jpg", A, False), desc="우리가 만들고 싶은 세계"),
  dict(slug="gate", label="GATE", title="게이트", tag="내 주변에 열리는 던전, 헌터의 시작",
       visual=phone("shot3.jpg"),
       facts=["어디서", "누가", "등급", "보상"],
       steps="게이트를 이렇게 공략해요",
       feats=[("게이트란?", "세계관 속 게이트의 정체", PH),
              ("게이트 찾기", "지도에서 게이트를 만나는 방법", phone("shot1.jpg")),
              ("게이트 등급", "등급과 난이도", phone("shot3.jpg")),
              ("범람 게이트", "범람 게이트가 무엇이고 왜 열리는지", PH),
              ("보상", "클리어 보상", phone("shot4.jpg"))],
       thumb=("shot3.jpg", A, False), desc="내 주변에 열리는 던전"),
  dict(slug="world-gate", label="WORLD GATE", title="월드게이트", tag="세계의 헌터가 함께 맞서는 월드급 게이트",
       visual=emblem("worldgate.png", True),
       facts=["발생", "참가 인원", "진행", "보상"],
       steps="월드게이트는 이렇게 진행돼요",
       feats=[("월드게이트란?", "정체·발생 조건", emblem("worldgate_red.png", True)),
              ("원정 참가", "모집·참가 방법", PH),
              ("섹터전과 보스전", "진행 흐름", emblem("frostwolf.png")),
              ("보상", "참여·클리어 보상", PH),
              ("지금 열린 월드게이트", "지구본(/player/globe/) 연결 안내", PH)],
       thumb=("worldgate.png", G, True), desc="세계의 헌터가 함께 맞서는 게이트"),
  dict(slug="sky-stadium", label="SKY STADIUM", title="하늘의 스타디움", tag="하늘에 떠다니는 거대한 경기장",
       visual=phone("shot5.jpg"),
       facts=["위치", "열리는 조건", "효과", "이야기"],
       steps=None,
       feats=[("하늘의 스타디움이란?", "정체·세계관", phone("shot5.jpg")),
              ("어디서 볼 수 있나", "지도에서 만나는 법", PH),
              ("스타디움의 힘", "버프·해금 조건 등", PH),
              ("스타디움 이야기", "스타디움에 얽힌 설정", PH)],
       thumb=("shot5.jpg", A, False), desc="하늘에 떠다니는 경기장"),
  dict(slug="stadium-event", label="STADIUM EVENT", title="스타디움 이벤트", tag="스타디움에서 열리는 특별한 시간",
       visual=phone("shot5.jpg"),
       facts=["일정", "참가 조건", "진행", "보상"],
       steps="이벤트는 이렇게 참여해요",
       feats=[("스타디움 이벤트란?", "개요", PH),
              ("일정", "언제 열리는지", PH),
              ("참가 방법", "참가 조건·방법", PH),
              ("보상", "보상 안내", PH)],
       thumb=("shot5.jpg", A, False), desc="스타디움에서 열리는 특별한 시간"),
  dict(slug="guild", label="GUILD", title="길드", tag="함께 싸우고, 함께 성장하는 헌터들의 집",
       visual="",
       facts=["창설", "가입", "활동", "랭킹"],
       steps="길드는 이렇게 시작해요",
       feats=[("길드란?", "개요", PH),
              ("길드 창설과 가입", "창설 조건·가입 방식", PH),
              ("길드 본부", "길드 본부 설치", PH),
              ("길드 활동", "출석·기부·미션·업적", PH),
              ("세계 5대 길드", "랭킹 기준", PH)],
       thumb=("shot1.jpg", A, False), desc="함께 성장하는 헌터들의 집"),
]
DEVNOTE_CARD = dict(slug=None, href="/player/devnotes/", label="DEV NOTES", title="개발자 노트",
                    desc="개발팀이 직접 전하는 이야기", thumb=("icon.jpg", A, True))

def card(p, tag="h3"):
    href = p.get("href") or f"/player/guide/{p['slug']}/"
    src, base, contain = p["thumb"]
    cls = "thumb contain" if contain else "thumb"
    return f"""        <a class="card" href="{href}">
          <div class="{cls}" style="background-image:url('{base}{src}')"></div>
          <div class="txt">
            <span class="k">{p['label']}</span>
            <{tag}>{p['title']}</{tag}>
            <p>{p['desc']}</p>
          </div>
        </a>
"""

def write(rel, html):
    path = os.path.join(ROOT, rel, "index.html")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(html)

def head(title, label, tag, href, desc, visual, defsub=TBD):
    return HEAD.format(title=title, label=label, tagline=tag, href=href, desc=desc,
                       visual=visual, play=PLAY, defsub=defsub)

for p in PAGES:
    href = f"/player/guide/{p['slug']}/"
    html = head(p["title"], p["label"], p["tag"], href, f"Player : Final Raid {p['title']} 안내", p["visual"])
    if p["facts"]:
        html += """
    <section class="block">
      <p class="sec-label">AT A GLANCE</p>
      <h2 class="sec-title">한눈에 보기</h2>
      <!-- 작성: 칸마다 짧은 답(예: 어디서 = 내 주변 지도) -->
      <dl class="facts">
""" + "".join(f'        <div class="fact"><dt>{k}</dt><dd>{TBD}</dd></div>\n' for k in p["facts"]) + """      </dl>
    </section>
"""
    if p["steps"]:
        html += f"""
    <section class="block">
      <p class="sec-label">HOW TO PLAY</p>
      <h2 class="sec-title">{p['steps']}</h2>
      <!-- 작성: 순서 3단계 — 제목 + 한 줄 -->
      <div class="steps">
""" + "".join(f'        <div class="step"><h3>{TBD}</h3><p class="tbd">설명 준비 중</p></div>\n' for _ in range(3)) + """      </div>
    </section>
"""
    html += """
    <section class="block">
      <p class="sec-label">DETAILS</p>
      <h2 class="sec-title">자세히 알아보기</h2>
"""
    for h, note, media in p["feats"]:
        html += f"""      <div class="feature">
        <div class="media">{media}</div>
        <div>
          <h3>{h}</h3>
          <!-- 작성: {note} -->
          <p class="tbd">준비 중인 내용입니다.</p>
        </div>
      </div>
"""
    html += "    </section>\n"
    others = [q for q in PAGES if q is not p][:2] + [DEVNOTE_CARD]
    html += """
    <section class="block">
      <p class="sec-label">MORE</p>
      <h2 class="sec-title">다른 컨텐츠</h2>
      <div class="cards">
""" + "".join(card(q) for q in others) + """      </div>
    </section>
"""
    html += FOOT.format(play=PLAY)
    write(f"guide/{p['slug']}", html)

# 컨텐츠 안내 첫 화면
hub = head("컨텐츠 안내", "GUIDE", "실제 지도 위에서 펼쳐지는 헌터의 세계", "/player/guide/",
           "Player : Final Raid 컨텐츠 안내 — 게이트·월드게이트·스타디움·길드",
           phone("shot1.jpg"), defsub="게이트부터 길드까지, 플레이어의 컨텐츠를 하나씩 소개합니다.")
hub += """
    <section class="block">
      <p class="sec-label">ABOUT</p>
      <h2 class="sec-title">PLAYER는 이런 게임입니다</h2>
      <!-- 작성: 게임 소개 세 줄(지금 문구 = 스토어 스크린샷 문구) -->
      <div class="intro">
        <div><b>실제 지도에서 펼쳐지는 RPG</b><span>세계 각지를 자유롭게 돌아다니자</span></div>
        <div><b>헌터가 되어 게이트를 클리어</b><span>내 주변에 생겨난 게이트에 도전하자</span></div>
        <div><b>나만의 고유 스킬</b><span>세계에 하나뿐인 스킬을 손에 넣자</span></div>
      </div>
    </section>

    <section class="block">
      <p class="sec-label">CONTENTS</p>
      <h2 class="sec-title">컨텐츠 둘러보기</h2>
      <div class="cards">
""" + "".join(card(p, "h2") for p in PAGES) + card(DEVNOTE_CARD, "h2") + """      </div>
    </section>
""" + FOOT.format(play=PLAY)
write("guide", hub)

# 개발자 노트
dn = head("개발자 노트", "DEV NOTES", "개발팀이 직접 전하는 이야기", "/player/devnotes/",
          "Player : Final Raid 개발자 노트", phone("shot4.jpg"), defsub="업데이트의 뒷이야기와 앞으로의 계획을 전합니다. 최신 글이 맨 위에 옵니다.")
dn += """
    <section class="block">
      <div class="notes">
        <!-- 새 글 = 아래 <article> 하나를 복사해 맨 위에 붙이고 날짜·제목·본문을 고친다. -->
        <article class="note" id="note-20261028">
          <time datetime="2026-10-28">2026.10.28</time>
          <h2>개발자 노트를 시작합니다</h2>
          <p class="tbd">준비 중인 내용입니다.</p>
        </article>
      </div>
    </section>
""" + FOOT.format(play=PLAY)
write("devnotes", dn)
print("ok")
