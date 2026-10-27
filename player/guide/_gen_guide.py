# 컨텐츠 안내 최초 골격 생성기 — 1회용. 글을 채우기 시작한 뒤에는 돌리지 않는다(채운 글을 덮어쓴다).
import os
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
PLAY = "https://play.google.com/store/apps/details?id=com.utobit.playerfinalraid"

TOP = """<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 공사중 동안 검색 노출 막음 — 내용이 채워지면 이 줄을 지운다 -->
  <meta name="robots" content="noindex">
  <title>{title} | Player : Final Raid</title>
  <meta name="description" content="{summary}">
  <link rel="icon" href="/player/assets/icon-180.png">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-F93QE1MMT8"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', 'G-F93QE1MMT8');
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/player/guide/guide.css">
</head>
<body>
  <header class="top">
    <div class="top-row">
      <a class="brand" href="/player/">PLAYER : Final Raid</a>
      <a class="top-cta" href="{play}" target="_blank" rel="noopener">Google Play에서 받기</a>
    </div>
    <nav class="gnav" id="gnav"></nav>
  </header>

  <main class="doc">
<!-- ===================== 여기부터 글 =====================
  쓰는 법
  - 큰 제목 = <h2>제목</h2>   (목차에 자동으로 들어감)
  - 작은 제목 = <h3>제목</h3>
  - 문단 = <p>글</p>
  - 목록 = <ul><li>항목</li><li>항목</li></ul>
  - 그림 = <img src="그림.jpg" alt="설명">   (그림은 이 폴더에 넣는다)
  - 공사중 줄은 글을 다 채우면 지운다
========================================================= -->

    <h1>{title}</h1>
    <p class="summary">{summary}</p>
    <p class="wip">공사중 — 내용을 채우고 있습니다.</p>
"""

BOTTOM = """
<!-- ===================== 여기까지 글 ===================== -->
    <div class="pager" id="pager"></div>
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

T = "준비 중"

# slug, 제목, 한 줄 요약, 요약 표 항목, 본문 큰 제목들
PAGES = [
  ("vision", "우리의 비전", "Player : Final Raid 가 만들고 싶은 세계.",
   [], ["우리가 만드는 게임", "현실과 연결된 세계", "함께 만드는 이야기", "앞으로의 길"]),
  ("gate", "게이트", "내 주변에 열리는 던전. 헌터의 시작.",
   ["어디서", "누가", "등급", "보상"], ["게이트란?", "게이트 찾기", "게이트 등급", "범람 게이트", "보상", "공략 팁"]),
  ("world-gate", "월드게이트", "세계의 헌터가 함께 맞서는 월드급 게이트.",
   ["발생", "참가 인원", "진행", "보상"], ["월드게이트란?", "원정 참가", "섹터전과 보스전", "보상", "지금 열린 월드게이트"]),
  ("sky-stadium", "하늘의 스타디움", "하늘에 떠다니는 거대한 경기장.",
   ["위치", "열리는 조건", "효과"], ["하늘의 스타디움이란?", "어디서 볼 수 있나", "스타디움의 힘", "스타디움 이야기"]),
  ("stadium-event", "스타디움 이벤트", "스타디움에서 열리는 특별한 시간.",
   ["일정", "참가 조건", "보상"], ["스타디움 이벤트란?", "일정", "참가 방법", "보상"]),
  ("guild", "길드", "함께 싸우고, 함께 성장하는 헌터들의 모임.",
   ["창설", "가입", "주요 활동"], ["길드란?", "길드 창설과 가입", "길드 본부", "길드 활동", "세계 5대 길드"]),
]

def write(rel, html):
    path = os.path.join(ROOT, rel, "index.html")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(html)

def top(title, summary):
    return TOP.format(title=title, summary=summary, play=PLAY)

for slug, title, summary, facts, secs in PAGES:
    h = top(title, summary)
    if facts:
        h += "\n    <!-- 요약 표: 한 줄씩 <tr><th>항목</th><td>내용</td></tr> -->\n    <table>\n"
        h += "".join(f'      <tr><th>{k}</th><td class="tbd">{T}</td></tr>\n' for k in facts)
        h += "    </table>\n"
    h += '\n    <div id="toc"></div>\n'
    for s in secs:
        h += f'\n    <h2>{s}</h2>\n    <p class="tbd">{T}</p>\n'
    write(f"guide/{slug}", h + BOTTOM)

# 안내 첫 화면 — 컨텐츠 목록
hub = top("컨텐츠 안내", "Player : Final Raid 의 컨텐츠를 하나씩 소개합니다.")
hub += """
    <h2>PLAYER는 어떤 게임인가요?</h2>
    <p class="tbd">준비 중</p>

    <h2>컨텐츠</h2>
    <div class="list">
""" + "".join(f'      <a href="/player/guide/{s}/"><b>{t}</b><span>{sm}</span></a>\n' for s, t, sm, _, _ in PAGES) + \
"""      <a href="/player/devnotes/"><b>개발자 노트</b><span>개발팀이 직접 전하는 이야기.</span></a>
    </div>
"""
write("guide", hub + BOTTOM)

# 개발자 노트 — 최신 글이 맨 위
dn = top("개발자 노트", "개발팀이 직접 전하는 이야기. 최신 글이 맨 위에 옵니다.")
dn += """
    <!-- 새 글 = 아래 <article> 묶음을 복사해 맨 위에 붙이고 날짜·제목·글을 고친다 -->
    <article class="note">
      <time>2026.10.28</time>
      <h2>개발자 노트를 시작합니다</h2>
      <p class="tbd">준비 중</p>
    </article>
"""
write("devnotes", dn + BOTTOM)
print("ok")
