# -*- coding: utf-8 -*-
"""컨텐츠 안내 › 보스레이드 — 보스별 정보 쪽 데이터(bosses.js) 생성기. 1124 마스터:
"각 보스레이드마다 정보페이지 구성 … 누르면 해당 몬스터의 외형, 컨셉샷, 보유스킬(패턴), 획득가능한 아이템"

글·수치를 손으로 적지 않는다 — 전부 게임 쪽 원본에서 뽑는다:
  보스 순서·이름·특징·레벨 = ../../updates/roadmap.js party_raid (OBT_PLAN_2026-11-01, 이미 공개된 글 17개 언어)
  서리늑대 패턴·규칙·아이템 이름 = 게임 언어팩 Player/Assets/Resources/Localization/l10n_*.json (fwb.boss.* 등)
  단계별 배율·브레스 = CombatSimulator.cs Fw* 상수 / 보상 = lambda_boss_raid.py FW_REWARD·BOSS_DROPS·FW_STAGES
  (권위 문서 = Player/Docs/BOSSRAID_REWARD_TABLE.md)
이 쪽에만 있는 칸 제목(외형·컨셉 아트 등) = 아래 LABELS(17개 언어).
실행: python _gen_bosses.py  (게임 수치·글이 바뀌면 다시 돌린다)
"""
import io, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..', '..', '..'))          # D:\Unity\Player
L10N = os.path.join(ROOT, 'Player', 'Assets', 'Resources', 'Localization')
LANGS = ['ko', 'en', 'ja', 'zh-Hans', 'zh-Hant', 'de', 'fr', 'es', 'it', 'pt', 'pl', 'ru', 'tr', 'vi', 'id', 'th', 'ar']

# 보스 id(주소) — roadmap party_raid 줄 순서 그대로
IDS = ['frost-wolf', 'ruby-phoenix', 'network-system', 'world-serpent', 'world-tree-guardian', 'dimension-shard',
       'titan-trace', 'eclipse-servant', 'angel', 'thunder-sword-god', 'transcendent', 'savior-778',
       'dimension-manifest', 'eclipse-system', 'dimension-elevator']

LABELS = {
 'list':    {'ko':'보스 목록','en':'Bosses','ja':'ボス一覧','zh-Hans':'首领列表','zh-Hant':'首領列表','de':'Bosse','fr':'Boss','es':'Jefes','it':'Boss','pt':'Chefes','pl':'Bossowie','ru':'Боссы','tr':'Bosslar','vi':'Danh sách boss','id':'Daftar Bos','th':'รายชื่อบอส','ar':'الزعماء'},
 'look':    {'ko':'외형','en':'Appearance','ja':'外見','zh-Hans':'外形','zh-Hant':'外形','de':'Aussehen','fr':'Apparence','es':'Apariencia','it':'Aspetto','pt':'Aparência','pl':'Wygląd','ru':'Внешний вид','tr':'Görünüm','vi':'Ngoại hình','id':'Penampilan','th':'รูปลักษณ์','ar':'المظهر'},
 'concept': {'ko':'컨셉 아트','en':'Concept Art','ja':'コンセプトアート','zh-Hans':'概念图','zh-Hant':'概念圖','de':'Konzeptgrafik','fr':'Illustration conceptuelle','es':'Arte conceptual','it':'Concept art','pt':'Arte conceitual','pl':'Grafika koncepcyjna','ru':'Концепт-арт','tr':'Konsept Çizimi','vi':'Tranh ý tưởng','id':'Seni Konsep','th':'ภาพคอนเซปต์','ar':'الرسم التصوري'},
 'skills':  {'ko':'보유 스킬 (패턴)','en':'Skills (Patterns)','ja':'保有スキル（パターン）','zh-Hans':'持有技能（模式）','zh-Hant':'持有技能（模式）','de':'Fähigkeiten (Muster)','fr':'Compétences (schémas)','es':'Habilidades (patrones)','it':'Abilità (schemi)','pt':'Habilidades (padrões)','pl':'Umiejętności (wzorce)','ru':'Навыки (паттерны)','tr':'Beceriler (Düzenler)','vi':'Kỹ năng (mẫu đòn)','id':'Skill (Pola)','th':'สกิล (แพตเทิร์น)','ar':'المهارات (الأنماط)'},
 'items':   {'ko':'획득 가능 아이템','en':'Obtainable Items','ja':'入手可能アイテム','zh-Hans':'可获得道具','zh-Hant':'可獲得道具','de':'Erhältliche Gegenstände','fr':'Objets à obtenir','es':'Objetos obtenibles','it':'Oggetti ottenibili','pt':'Itens obteníveis','pl':'Przedmioty do zdobycia','ru':'Доступные предметы','tr':'Elde Edilebilir Eşyalar','vi':'Vật phẩm có thể nhận','id':'Item yang Bisa Didapat','th':'ไอเทมที่ได้รับ','ar':'العناصر المتاحة'},
 'open':    {'ko':'진행 중','en':'Open','ja':'開催中','zh-Hans':'开放中','zh-Hant':'開放中','de':'Geöffnet','fr':'Ouvert','es':'Abierto','it':'Aperto','pt':'Aberto','pl':'Otwarte','ru':'Открыто','tr':'Açık','vi':'Đang mở','id':'Dibuka','th':'เปิดอยู่','ar':'مفتوح'},
 'tba':     {'ko':'업데이트와 함께 공개됩니다.','en':'To be revealed with the update.','ja':'アップデートとともに公開されます。','zh-Hans':'将随更新一同公开。','zh-Hant':'將隨更新一同公開。','de':'Wird mit dem Update enthüllt.','fr':'Sera dévoilé avec la mise à jour.','es':'Se revelará con la actualización.','it':'Sarà svelato con l\'aggiornamento.','pt':'Será revelado com a atualização.','pl':'Zostanie ujawnione wraz z aktualizacją.','ru':'Будет раскрыто вместе с обновлением.','tr':'Güncellemeyle birlikte açıklanacak.','vi':'Sẽ được công bố cùng bản cập nhật.','id':'Akan diungkap bersama pembaruan.','th':'จะเปิดเผยพร้อมการอัปเดต','ar':'سيُكشف عنه مع التحديث.'},
 'raid':    {'ko':'보스레이드','en':'Boss Raid','ja':'ボスレイド','zh-Hans':'首领突袭','zh-Hant':'首領突襲','de':'Boss-Raid','fr':'Raid de boss','es':'Incursión de jefe','it':'Raid del boss','pt':'Raide de chefe','pl':'Rajd na bossa','ru':'Рейд на босса','tr':'Boss Baskını','vi':'Raid trùm','id':'Raid Bos','th':'บอสเรด','ar':'غارة الزعيم'},
}

def die(m): sys.exit('[_gen_bosses] ' + m)
def read(p):
    with io.open(p, encoding='utf-8-sig') as f: return f.read()

# ── 1) 순서·이름·특징·레벨: roadmap.js party_raid ──
rm = read(os.path.join(HERE, '..', '..', 'updates', 'roadmap.js'))
rm = json.loads(rm[rm.index('{'):rm.rindex('}') + 1])
pr = [x for x in rm['items'] if x['id'] == 'party_raid'][0]['text']
LINE = re.compile(r'^(.*?)(?:\s+—\s+(.*?))?(?:\s*\(([^()]*)\))?$')
bosses = [{'id': i, 'name': {}, 'trait': {}, 'lv': ''} for i in IDS]
for lang in LANGS:
    lines = [x for x in pr[lang].split('\n\n', 1)[1].split('\n') if x.strip()]
    if len(lines) != len(IDS): die('roadmap party_raid %s: %d줄 (기대 %d)' % (lang, len(lines), len(IDS)))
    for b, ln in zip(bosses, lines):
        m = LINE.match(ln.strip())
        b['name'][lang] = m.group(1).strip()
        if m.group(2): b['trait'][lang] = m.group(2).strip()
        if lang == 'ko' and m.group(3): b['lv'] = m.group(3).strip()
for b in bosses:                                   # 특징은 17개 언어 전부 있을 때만(일부 언어는 이름에 합쳐 번역됨 — 홍옥새)
    if len(b['trait']) != len(LANGS): b['trait'] = {}

# ── 2) 언어팩 ──
pack = {}
for lang in LANGS:
    d = json.loads(read(os.path.join(L10N, 'l10n_%s.json' % lang)))
    pack[lang] = dict(zip(d['keys'], d['values']))
def L(key):
    o = {}
    for lang in LANGS:
        v = pack[lang].get(key)
        if not v: die('언어팩 %s 에 %s 없음' % (lang, key))
        o[lang] = v
    return o

# ── 3) 서리늑대 수치: 엔진·서버 소스 ──
cs = read(os.path.join(ROOT, 'Player', 'Assets', 'Scripts', 'Combat', 'CombatSimulator.cs'))
def arr(name):
    m = re.search(r'\b%s\s*=\s*\{([^}]*)\}' % name, cs)
    if not m: die('CombatSimulator.%s 못 찾음' % name)
    return [float(x.strip().rstrip('f')) for x in m.group(1).split(',')]
sv = read(os.path.join(ROOT, 'Serverless', 'lambda_boss_raid.py'))
stages = eval(re.search(r'^FW_STAGES\s*=\s*(\{[^}]*\})', sv, re.M).group(1))
reward = eval(re.search(r'^FW_REWARD\s*=\s*(\{[^}]*\})', sv, re.M).group(1))
daily = int(re.search(r'^FW_CRY_DAILY\s*=\s*(\d+)', sv, re.M).group(1))
drops = eval(re.search(r'"MON_FROST_WOLF":\s*(\[.*?\]),\n', sv, re.S).group(1))
hp, atk, br, fz = arr('FwRaidHpMul'), arr('FwRaidAtkMul'), arr('FwBreathPct'), arr('FwBreathFreezes')
num = lambda x: int(x) if float(x) == int(x) else x

fw = bosses[0]
fw.update({
    'open': True,
    'face': '../../frostwolf.png',                       # 지구본 오슬로 얼굴(1028)
    'look': 'img/frost-wolf_look.png',
    'concept': 'img/frost-wolf_concept.jpg',
    'where': L('bossraid.fw.cell_loc'),
    'rule': L('fwb.rule'),
    'stageLabel': {k: v.split('\n')[0] for k, v in L('fwb.stage').items()},
    'stats': L('fwb.boss.stats'),
    'rewardLine': L('fwb.reward'),
    'stages': [{'lv': stages[s], 'hp': num(hp[s - 1]), 'atk': num(atk[s - 1]), 'breath': num(br[s - 1]), 'freeze': num(fz[s - 1]),
                'exp': reward[s][0], 'gold': reward[s][1], 'crystal': reward[s][2]} for s in sorted(stages)],
    'daily': daily,
    # 패턴: 게임 '보스 정보' 창과 같은 줄·같은 등장 단계(FrostWolfCampBoardView.FillBossInfo)
    'patterns': [{'icon': 'img/pat_%s.png' % k, 'from': f, 'text': L('fwb.boss.p_' + k)} for k, f in
                 [('basic', 1), ('breath', 1), ('claw', 2), ('icebreak', 3), ('spike', 4), ('hunger', 5), ('enrage', 1)]],
    'drops': [{'icon': '../../items/%s.png' % d['id'], 'name': L('item.name.' + d['id']), 'pct': ('%g' % (d['prob'] * 100))} for d in drops],
})
ph = bosses[1]
ph.update({'face': 'img/ruby-phoenix_face.png', 'concept': 'img/ruby-phoenix_concept.jpg'})   # 얼굴 = 게임 보스레이드 탭 홍옥새 칸 그림

out = {'langs': LANGS, 'labels': dict(LABELS, soon=L('bossraid.fw.soon')), 'bosses': bosses}
with io.open(os.path.join(HERE, 'bosses.js'), 'w', encoding='utf-8', newline='\n') as f:
    f.write('/* 생성 파일 — _gen_bosses.py 로 만든다. 손으로 고치지 않는다. */\nwindow.BOSS_RAID = ')
    f.write(json.dumps(out, ensure_ascii=False, separators=(',', ':')))
    f.write(';\n')
print('bosses.js: 보스 %d종, 언어 %d개' % (len(bosses), len(LANGS)))
