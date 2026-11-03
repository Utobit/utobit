# -*- coding: utf-8 -*-
"""지구본 › 업데이트 게시판 데이터 만들기 (1104 마스터 '웹 페이지에 업데이트 게시판').

원본 = 게임이 읽는 CDN 패치노트(l10n/patchnotes.json) — 게임 안 '업데이트' 화면과 같은 글.
  · 같은 버전이 두 번 있으면 위(최신 날짜) 것만.
  · 언어별로 그 언어 글이 있는 버전만 보인다(다른 언어로 대신 채우지 않는다 — 언어팩 규칙).
결과 = notes.js (window.GLOBE_UPDATES = {updated, notes:[{v, d, t:{lang: body}}]}).

  python utobit/player/globe/updates/_gen_updates.py          # CDN 에서 받아 만들기
  python utobit/player/globe/updates/_gen_updates.py <파일>   # 로컬 파일로 만들기
"""
import json, os, sys, urllib.request

CDN = "https://dn6yod17odscm.cloudfront.net/l10n/patchnotes.json"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "notes.js")


def main():
    if len(sys.argv) > 1:
        raw = open(sys.argv[1], encoding="utf-8").read()
    else:
        raw = urllib.request.urlopen(CDN, timeout=30).read().decode("utf-8")
    src = json.loads(raw)
    seen, notes = set(), []
    for n in src.get("notes", []):
        v = n.get("version")
        if not v or v in seen:
            continue
        seen.add(v)
        t = {x["lang"]: x["body"].strip() for x in n.get("text", []) if x.get("body", "").strip()}
        if t:
            notes.append({"v": v, "d": n.get("date", ""), "t": t})
    data = {"updated": src.get("updated", ""), "notes": notes}
    body = "/* 자동 생성 — _gen_updates.py (원본 = 게임 CDN 패치노트). 손으로 고치지 않는다. */\n" \
           "window.GLOBE_UPDATES = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n"
    with open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write(body)
    part = [n["v"] for n in notes if len(n["t"]) < 17]
    sys.stdout.reconfigure(encoding="utf-8")
    print(f"[updates] {len(notes)}개 버전 / {len(body)} bytes → {OUT}")
    if part:
        print(f"[updates] 17개 언어가 다 없는 버전 {len(part)}개(그 언어 화면엔 안 보임): {', '.join(part)}")


if __name__ == "__main__":
    main()
