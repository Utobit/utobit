# -*- coding: utf-8 -*-
"""지구본 › 업데이트 게시판 데이터 만들기 (1104 마스터 '웹 페이지에 업데이트 게시판').

원본 = 게임이 읽는 CDN 패치노트(l10n/patchnotes.json) — 게임 안 '업데이트' 화면과 같은 글.
  · 같은 버전이 두 번 있으면 위(최신 날짜) 것만.
  · 언어별로 그 언어 글이 있는 버전만 보인다(다른 언어로 대신 채우지 않는다 — 언어팩 규칙).
결과 = notes.js (window.GLOBE_UPDATES = {updated, notes:[{v, d, t:{lang: body}}]})
     + roadmap.js (window.GLOBE_ROADMAP = {updated, title:{lang}, items:[{id, title:{lang}, text:{lang}}]} — 1106 마스터 '업데이트, 로드맵 두개 다',
       원본 = 같은 파일의 pages[id=roadmap] = 게임 로그인 공지 '업데이트 예정' = 디코 #roadmap 글과 같은 내용, Player/Docs/NOTICE_PAGES.json).

  python utobit/player/globe/updates/_gen_updates.py          # CDN 에서 받아 만들기
  python utobit/player/globe/updates/_gen_updates.py <파일>   # 로컬 파일로 만들기
"""
import json, os, sys, urllib.request

CDN = "https://dn6yod17odscm.cloudfront.net/l10n/patchnotes.json"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "notes.js")
OUT_RM = os.path.join(os.path.dirname(os.path.abspath(__file__)), "roadmap.js")


def by_lang(rows):
    return {x["lang"]: x["body"].strip() for x in (rows or []) if isinstance(x, dict) and x.get("body", "").strip()}


def main():
    # 1114: --cut X.Y.Z.W = 스토어 게시 확인된 버전까지(디코 게시 전이라도). 파일 인자 = 로컬 patchnotes.json
    args = [a for a in sys.argv[1:] if not a.startswith("--cut")]
    cut_arg = next((a.split("=", 1)[1] for a in sys.argv[1:] if a.startswith("--cut=")), None)
    if args:
        raw = open(args[0], encoding="utf-8").read()
    else:
        raw = urllib.request.urlopen(CDN, timeout=30).read().decode("utf-8")
    src = json.loads(raw)
    # 출시 컷(1106): 디코 #patch-notes 에 올린 버전(tools/discord_patch_notes_posted.json — 게시 = 스토어 출시 뒤라는 1027 규칙)까지만 웹에 보인다.
    #  CDN 패치노트는 전처리 때 다음 버전 글이 먼저 올라가므로(예 1.0.2.1 이 빌드 전부터) 그대로 쓰면 미출시 버전이 웹에 나간다.
    def vkey(v): return tuple(int(x) if x.isdigit() else 0 for x in str(v).split("."))
    cut = None
    try:
        posted = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..", "tools", "discord_patch_notes_posted.json"), encoding="utf-8"))
        cut = max((k for k in posted.keys()), key=vkey)
        if cut_arg and vkey(cut_arg) > vkey(cut):
            cut = cut_arg
    except Exception as e:
        print(f"[updates] 출시 컷을 읽지 못함({e}) — 컷 없이 전부")
    seen, notes, held = set(), [], []
    for n in src.get("notes", []):
        v = n.get("version")
        if not v or v in seen:
            continue
        if cut and vkey(v) > vkey(cut):
            held.append(v); continue
        seen.add(v)
        t = {x["lang"]: x["body"].strip() for x in n.get("text", []) if x.get("body", "").strip()}
        if t:
            notes.append({"v": v, "d": n.get("date", ""), "t": t})
    data = {"updated": src.get("updated", ""), "notes": notes}
    body = "/* 자동 생성 — _gen_updates.py (원본 = 게임 CDN 패치노트). 손으로 고치지 않는다. */\n" \
           "window.GLOBE_UPDATES = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n"
    with open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write(body)
    # 로드맵
    rm = next((pg for pg in src.get("pages", []) if pg.get("id") == "roadmap"), None)
    if rm:
        items = [{"id": it.get("id"), "title": by_lang(it.get("title")), "text": by_lang(it.get("text"))} for it in rm.get("items", [])]
        rdata = {"updated": src.get("updated", ""), "title": by_lang(rm.get("title")), "items": items}
        rbody = "/* 자동 생성 — _gen_updates.py (원본 = 게임 CDN 패치노트 pages[roadmap] = 로그인 공지 '업데이트 예정'). 손으로 고치지 않는다. */\n" \
                "window.GLOBE_ROADMAP = " + json.dumps(rdata, ensure_ascii=False, separators=(",", ":")) + ";\n"
        with open(OUT_RM, "w", encoding="utf-8", newline="\n") as f:
            f.write(rbody)
        short = [it["id"] for it in items if len(it["text"]) < 17 or len(it["title"]) < 17]
        print(f"[roadmap] {len(items)}개 항목 / {len(rbody)} bytes → {OUT_RM}" + (f" · 17개 언어가 다 없는 항목: {short}" if short else ""))
    else:
        print("[roadmap] pages 에 roadmap 없음 — roadmap.js 그대로 둠")
    if held:
        print(f"[updates] 출시 컷 {cut} 뒤 버전 {len(held)}개는 웹에 안 올림(디코 #patch-notes 게시 뒤 다시 생성): {', '.join(held)}")
    part = [n["v"] for n in notes if len(n["t"]) < 17]
    sys.stdout.reconfigure(encoding="utf-8")
    print(f"[updates] {len(notes)}개 버전 / {len(body)} bytes → {OUT}")
    if part:
        print(f"[updates] 17개 언어가 다 없는 버전 {len(part)}개(그 언어 화면엔 안 보임): {', '.join(part)}")


if __name__ == "__main__":
    main()
