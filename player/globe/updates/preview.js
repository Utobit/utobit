/* 업데이트 게시판 맨 위 '다음 업데이트 예고' (손으로 쓴 글 — notes.js 와 달리 생성기가 덮지 않는다).
   1104 마스터 구술: 도준혁 출전 + 스킬 9종. 한국어 = 마스터 원문 그대로(이야기 = 1104 2차 구술, 문단 배열).
   용어 = 게임 언어팩(범람 게이트 raid.012·행운 ui.stat_luk·기본공격 등록형 skill_format.004·너클 weapon_type.010·마도구 weapon_type.004 …).
   '더 빠르게'는 설명 원문이 비어 있어 이름·종류만. 예고를 내리려면 window.GLOBE_PREVIEW = null. */
window.GLOBE_PREVIEW = {
  date: '2026-11-04',
  img: 'dojunhyeok.jpg',
  // 스킬 = [등급, 종류(basic|passive|active|counter|''), 무기 제한(true = 너클·마도구)]
  skills: [['EX','basic',true],['S','',false],['A','passive',false],['B','active',false],['S','passive',false],['C','passive',false],['B','counter',false],['S','',true],['A','active',false]],
  t: {
    ko: {
      name: '도준혁',
      head: "다음 업데이트 예고",
      title: "도준혁 출전",
      story: ["도준혁은 헌터사관학교 졸업생입니다.", "몬스터의 기습으로 생사의 기로에 서게된 순간, 도준혁은 플레이어로 각성하였고, 스스로 살아갈 방법을 개척하였습니다.", "이를 지켜보던 성좌의 선택을 받아 도준혁은 누구보다 빠르게 성장할 수 있었습니다.", "스스로 나아갈 길을 밝히는 플레이어. [성자] 도준혁을 만나보세요."],
      tag: {basic:'기본공격 등록형', passive:'패시브', active:'액티브', counter:'카운터'}, weapons: '너클 · 마도구', skillsTitle: '스킬',
      skills: [
        ['성자', '기본공격시 HP가 가장 낮은 아군의 HP를 자신의 행운 *3만큼 회복시킵니다. 같은 대상에 대해 3초에 1회만 적용됩니다. 회복시킬 아군이 없는 경우, 기본공격이 모든 적에게 행운 *10의 데미지를 가하는 공격으로 바뀝니다. 마법데미지.'],
        ['스스로 밝히는 자', '혼란한 상황에서도 나아갈 길을 찾을 수 있습니다. 상태이상에 5턴 이상 노출되는 경우 자신에게 걸려있는 상태이상 중 1개를 해제합니다.'],
        ['전투사제', "전투중 매 기본공격시 자신에게 '전투사제'를 부여합니다. 매 행동마다 자신의 잃은 HP의 3%를 회복하고, 회복분만큼 MP를 소모합니다. MP가 없는경우 회복되지 않습니다. MP소모량은 자신의 행운 수치만큼 감소합니다."],
        ['보호본능', '파티원 전체에 행운 * 3.5의 보호막을 부여합니다.'],
        ['더 빠르게', ''],
        ['믿을 수 있는 자', '아군 전체의 카운터 확률을 2% 증가시킵니다. 중복되지 않습니다.'],
        ['지원가의 덕목', '보호막이 없는 아군이 공격대상이 되었을때, 최대 MP의 5%를 소모하여 행운 *2의 보호막을 부여합니다.(남은 MP가 5%미만이면 발동하지 않음) 내가 공격대상이 될 때에는 반드시 발동합니다. (보호막의 최대치는 중첩되지 않습니다.). 소모되는 MP는 자신의 행운 *0.5만큼 감소합니다.'],
        ['마도 근접 전투술', '기본공격시 자신에게 중첩되는 배틀마법사 스택을 부여합니다. [배틀마법사]는 스택마다 공격속도를 6%씩 상승시킵니다. 자신의 공격속도가 최고속도(1턴에 1회)에 도달한 경우, 배틀마법사 스택 *3%만큼 자신의 피해량이 증폭됩니다. 최대 100스택.'],
        ['마도학자', '자신의 MP 30ㅣ45%를 소모합니다. 적 1명에게 소모 대상 MP의 1000ㅣ1500%의 피해를 입힙니다. 스킬 사용후 지+마+행 *1ㅣ1.5 만큼 MP가 회복됩니다.']
      ]
    },
    en: {
      name: 'Do Junhyeok',
      head: "Next Update Preview",
      title: "Do Junhyeok Joins the Fight",
      story: ["Do Junhyeok is a graduate of the Hunter Academy.", "At the moment a monster ambush left him between life and death, Do Junhyeok awakened as a Player and forged his own way to survive.", "Chosen by the Constellation that had been watching over him, Do Junhyeok was able to grow faster than anyone.", "A Player who lights his own path forward. Meet [Saint] Do Junhyeok."],
      tag: {basic:'Basic Attack Slot', passive:'Passive', active:'Active', counter:'Counter'}, weapons: 'Knuckles · Magic Tool', skillsTitle: 'Skills',
      skills: [
        ['Saint', 'On Basic Attack, restores HP equal to your LUK ×3 to the ally with the lowest HP. Applies only once every 3 seconds to the same target. If there is no ally to heal, your Basic Attack becomes an attack that deals LUK ×10 damage to all enemies. Magic damage.'],
        ['One Who Lights the Way', 'Finds the path forward even in chaos. When exposed to status effects for 5 or more turns, removes 1 status effect on yourself.'],
        ['Battle Priest', "In battle, each Basic Attack grants you 'Battle Priest'. Each action restores 3% of your lost HP and consumes MP equal to the amount restored. No HP is restored without MP. MP cost is reduced by your LUK value."],
        ['Protective Instinct', 'Grants all party members a shield equal to LUK ×3.5.'],
        ['Faster', ''],
        ['The Trustworthy', 'Increases the Counter chance of all allies by 2%. Does not stack.'],
        ["Supporter's Virtue", 'When an ally without a shield becomes the target of an attack, consumes 5% of Max MP to grant a shield equal to LUK ×2 (does not trigger if remaining MP is below 5%). Always triggers when you are the target. (Shield maximum does not stack.) The MP consumed is reduced by your LUK ×0.5.'],
        ['Arcane Close Combat', 'On Basic Attack, grants yourself a stacking Battle Mage stack. Each [Battle Mage] stack increases Attack Speed by 6%. When your Attack Speed reaches the maximum (once per turn), your damage is amplified by Battle Mage stacks ×3%. Up to 100 stacks.'],
        ['Arcane Scholar', 'Consumes 30 / 45% of your MP. Deals damage equal to 1000 / 1500% of the consumed MP to 1 enemy. After use, restores MP equal to (INT + MAG + LUK) ×1 / 1.5.']
      ]
    },
    ja: {
      name: 'ド・ジュンヒョク',
      head: "次回アップデート予告",
      title: "ド・ジュンヒョク出陣",
      story: ["ド・ジュンヒョクはハンター士官学校の卒業生です。", "モンスターの奇襲で生死の境に立たされた瞬間、ド・ジュンヒョクはプレイヤーとして覚醒し、自ら生き抜く道を切り開きました。", "その姿を見守っていた星座に選ばれ、ド・ジュンヒョクは誰よりも速く成長することができました。", "自ら進む道を照らすプレイヤー。[聖者] ド・ジュンヒョクに会いに来てください。"],
      tag: {basic:'通常攻撃登録型', passive:'パッシブ', active:'アクティブ', counter:'カウンター'}, weapons: 'ナックル · 魔導具', skillsTitle: 'スキル',
      skills: [
        ['聖者', '通常攻撃時、HPが最も低い味方のHPを自身の幸運×3回復します。同じ対象には3秒に1回のみ適用されます。回復する味方がいない場合、通常攻撃がすべての敵に幸運×10のダメージを与える攻撃に変わります。魔法ダメージ。'],
        ['自ら照らす者', '混乱した状況でも進むべき道を見つけられます。状態異常に5ターン以上さらされた場合、自身にかかっている状態異常のうち1つを解除します。'],
        ['戦闘司祭', '戦闘中、通常攻撃のたびに自身に「戦闘司祭」を付与します。行動のたびに失ったHPの3%を回復し、回復した分だけMPを消費します。MPがない場合は回復しません。MP消費量は自身の幸運の数値分減少します。'],
        ['保護本能', 'パーティーメンバー全員に幸運×3.5のシールドを付与します。'],
        ['もっと速く', ''],
        ['信頼できる者', '味方全員のカウンター確率を2%増加させます。重複しません。'],
        ['支援者の美徳', 'シールドのない味方が攻撃対象になった時、最大MPの5%を消費して幸運×2のシールドを付与します（残りMPが5%未満の場合は発動しません）。自分が攻撃対象になる時は必ず発動します。（シールドの最大値は重複しません。）消費するMPは自身の幸運×0.5分減少します。'],
        ['魔導近接戦闘術', '通常攻撃時、自身に重複するバトルメイジスタックを付与します。[バトルメイジ]はスタックごとに攻撃速度を6%ずつ上昇させます。自身の攻撃速度が最高速度（1ターンに1回）に達した場合、バトルメイジスタック×3%分、自身の与ダメージが増幅されます。最大100スタック。'],
        ['魔導学者', '自身のMPの30 / 45%を消費します。敵1体に消費したMPの1000 / 1500%のダメージを与えます。スキル使用後、(知力+魔力+幸運)×1 / 1.5分MPが回復します。']
      ]
    },
    'zh-Hans': {
      name: '都俊赫',
      head: "下次更新预告",
      title: "都俊赫 出战",
      story: ["都俊赫是猎人士官学校的毕业生。", "在因怪物突袭而徘徊于生死边缘的瞬间，都俊赫觉醒为玩家，亲自开辟了活下去的道路。", "一直注视着这一切的星座选择了他，都俊赫得以比任何人都更快地成长。", "亲自照亮前行之路的玩家。快来认识 [圣者] 都俊赫吧。"],
      tag: {basic:'普通攻击登录型', passive:'被动', active:'主动', counter:'反击'}, weapons: '拳套 · 魔导具', skillsTitle: '技能',
      skills: [
        ['圣者', '普通攻击时，为HP最低的友方恢复相当于自身幸运×3的HP。对同一目标每3秒仅生效1次。若没有可恢复的友方，普通攻击将变为对所有敌人造成幸运×10伤害的攻击。魔法伤害。'],
        ['自我照亮者', '即使在混乱中也能找到前行之路。受到异常状态影响达5回合以上时，解除自身身上的1个异常状态。'],
        ['战斗祭司', '战斗中每次普通攻击时为自身附加“战斗祭司”。每次行动恢复已损失HP的3%，并消耗与恢复量相同的MP。没有MP时不会恢复。MP消耗量减少自身幸运数值。'],
        ['保护本能', '为全体队员附加相当于幸运×3.5的护盾。'],
        ['更快一点', ''],
        ['值得信赖者', '使全体友方的反击概率提高2%。不可叠加。'],
        ['支援者的美德', '没有护盾的友方成为攻击目标时，消耗最大MP的5%，附加相当于幸运×2的护盾（剩余MP不足5%时不触发）。自身成为攻击目标时必定触发。（护盾上限不叠加。）消耗的MP减少自身幸运×0.5。'],
        ['魔导近战术', '普通攻击时为自身附加可叠加的战斗法师层数。每层[战斗法师]使攻击速度提高6%。自身攻击速度达到最高速度（每回合1次）时，自身造成的伤害提高战斗法师层数×3%。最多100层。'],
        ['魔导学者', '消耗自身30 / 45%的MP。对1名敌人造成所消耗MP 1000 / 1500%的伤害。使用技能后恢复（智力+魔力+幸运）×1 / 1.5的MP。']
      ]
    },
    'zh-Hant': {
      name: '都俊赫',
      head: "下次更新預告",
      title: "都俊赫 出戰",
      story: ["都俊赫是獵人士官學校的畢業生。", "在因怪物突襲而徘徊於生死邊緣的瞬間，都俊赫覺醒為玩家，親自開闢了活下去的道路。", "一直注視著這一切的星座選擇了他，都俊赫得以比任何人都更快地成長。", "親自照亮前行之路的玩家。快來認識 [聖者] 都俊赫吧。"],
      tag: {basic:'普通攻擊登錄型', passive:'被動', active:'主動', counter:'反擊'}, weapons: '拳套 · 魔導具', skillsTitle: '技能',
      skills: [
        ['聖者', '普通攻擊時，為HP最低的友方恢復相當於自身幸運×3的HP。對同一目標每3秒僅生效1次。若沒有可恢復的友方，普通攻擊將變為對所有敵人造成幸運×10傷害的攻擊。魔法傷害。'],
        ['自我照亮者', '即使在混亂中也能找到前行之路。受到異常狀態影響達5回合以上時，解除自身身上的1個異常狀態。'],
        ['戰鬥祭司', '戰鬥中每次普通攻擊時為自身附加「戰鬥祭司」。每次行動恢復已損失HP的3%，並消耗與恢復量相同的MP。沒有MP時不會恢復。MP消耗量減少自身幸運數值。'],
        ['保護本能', '為全體隊員附加相當於幸運×3.5的護盾。'],
        ['更快一點', ''],
        ['值得信賴者', '使全體友方的反擊機率提高2%。不可疊加。'],
        ['支援者的美德', '沒有護盾的友方成為攻擊目標時，消耗最大MP的5%，附加相當於幸運×2的護盾（剩餘MP不足5%時不觸發）。自身成為攻擊目標時必定觸發。（護盾上限不疊加。）消耗的MP減少自身幸運×0.5。'],
        ['魔導近戰術', '普通攻擊時為自身附加可疊加的戰鬥法師層數。每層[戰鬥法師]使攻擊速度提高6%。自身攻擊速度達到最高速度（每回合1次）時，自身造成的傷害提高戰鬥法師層數×3%。最多100層。'],
        ['魔導學者', '消耗自身30 / 45%的MP。對1名敵人造成所消耗MP 1000 / 1500%的傷害。使用技能後恢復（智力+魔力+幸運）×1 / 1.5的MP。']
      ]
    },
    de: {
      name: 'Do Junhyeok',
      head: "Vorschau auf das nächste Update",
      title: "Do Junhyeok zieht in den Kampf",
      story: ["Do Junhyeok ist ein Absolvent der Jäger-Akademie.", "In dem Moment, als ihn ein Monsterangriff zwischen Leben und Tod schweben ließ, erwachte Do Junhyeok als Spieler und bahnte sich selbst einen Weg zum Überleben.", "Von dem Sternbild auserwählt, das ihn dabei beobachtet hatte, konnte Do Junhyeok schneller wachsen als jeder andere.", "Ein Spieler, der sich seinen Weg selbst erhellt. Lerne [Heiliger] Do Junhyeok kennen."],
      tag: {basic:'Standardangriff-Slot', passive:'Passiv', active:'Aktiv', counter:'Konter'}, weapons: 'Schlagring · Magiegerät', skillsTitle: 'Fähigkeiten',
      skills: [
        ['Heiliger', 'Bei einem Standardangriff stellt der Verbündete mit den niedrigsten HP HP in Höhe deines Glücks ×3 wieder her. Wirkt beim selben Ziel nur einmal alle 3 Sekunden. Gibt es keinen Verbündeten zu heilen, wird dein Standardangriff zu einem Angriff, der allen Gegnern Schaden in Höhe von Glück ×10 zufügt. Magischer Schaden.'],
        ['Der seinen Weg erhellt', 'Findet selbst im Chaos den Weg nach vorn. Bist du 5 oder mehr Runden Statuseffekten ausgesetzt, wird 1 Statuseffekt auf dir aufgehoben.'],
        ['Kampfpriester', "Im Kampf erhältst du bei jedem Standardangriff „Kampfpriester“. Bei jeder Aktion stellst du 3 % deiner verlorenen HP wieder her und verbrauchst MP in Höhe der Heilung. Ohne MP erfolgt keine Heilung. Die MP-Kosten sinken um deinen Glückswert."],
        ['Schutzinstinkt', 'Gewährt allen Gruppenmitgliedern eine Barriere in Höhe von Glück ×3,5.'],
        ['Schneller', ''],
        ['Der Verlässliche', 'Erhöht die Konterchance aller Verbündeten um 2 %. Nicht stapelbar.'],
        ['Tugend des Unterstützers', 'Wird ein Verbündeter ohne Barriere zum Angriffsziel, werden 5 % der Max. MP verbraucht, um eine Barriere in Höhe von Glück ×2 zu gewähren (wird bei weniger als 5 % verbleibenden MP nicht ausgelöst). Wirst du selbst zum Ziel, wird es immer ausgelöst. (Das Barrieren-Maximum ist nicht stapelbar.) Die verbrauchten MP sinken um dein Glück ×0,5.'],
        ['Magischer Nahkampf', 'Bei einem Standardangriff erhältst du einen stapelbaren Kampfmagier-Stapel. Jeder [Kampfmagier]-Stapel erhöht das Angriffstempo um 6 %. Erreicht dein Angriffstempo das Maximum (einmal pro Runde), wird dein Schaden um Kampfmagier-Stapel ×3 % verstärkt. Maximal 100 Stapel.'],
        ['Magiegelehrter', 'Verbraucht 30 / 45 % deiner MP. Fügt 1 Gegner Schaden in Höhe von 1000 / 1500 % der verbrauchten MP zu. Nach dem Einsatz werden MP in Höhe von (Intelligenz + Magie + Glück) ×1 / 1,5 wiederhergestellt.']
      ]
    },
    fr: {
      name: 'Do Junhyeok',
      head: "Aperçu de la prochaine mise à jour",
      title: "Do Junhyeok entre en scène",
      story: ["Do Junhyeok est diplômé de l'Académie des Chasseurs.", "Au moment où une attaque surprise de monstres l'a placé entre la vie et la mort, Do Junhyeok s'est éveillé en tant que Joueur et s'est frayé lui-même un chemin pour survivre.", "Choisi par la Constellation qui l'observait, Do Junhyeok a pu progresser plus vite que quiconque.", "Un Joueur qui éclaire lui-même son chemin. Venez rencontrer [Saint] Do Junhyeok."],
      tag: {basic:'Attaque de base', passive:'Passif', active:'Actif', counter:'Contre'}, weapons: "Poings d'acier · Focus magique", skillsTitle: 'Compétences',
      skills: [
        ['Saint', "Lors d'une attaque de base, rend à l'allié ayant le moins de PV des PV égaux à votre CHA ×3. Ne s'applique qu'une fois toutes les 3 secondes sur une même cible. S'il n'y a aucun allié à soigner, l'attaque de base devient une attaque infligeant CHA ×10 dégâts à tous les ennemis. Dégâts magiques."],
        ['Celui qui éclaire sa voie', "Trouve son chemin même dans le chaos. Après 5 tours ou plus sous un effet d'altération, dissipe 1 effet d'altération qui vous affecte."],
        ['Prêtre de bataille', "En combat, chaque attaque de base vous confère « Prêtre de bataille ». À chaque action, vous récupérez 3 % de vos PV perdus et consommez autant de PM que les PV rendus. Sans PM, aucun soin n'a lieu. Le coût en PM est réduit de votre valeur de CHA."],
        ['Instinct protecteur', "Confère à tous les membres du groupe un bouclier égal à CHA ×3,5."],
        ['Plus vite', ''],
        ['Celui en qui on a confiance', "Augmente de 2 % la chance de contre de tous les alliés. Non cumulable."],
        ['Vertu du soutien', "Lorsqu'un allié sans bouclier devient la cible d'une attaque, consomme 5 % des PM max. pour lui conférer un bouclier égal à CHA ×2 (ne se déclenche pas s'il reste moins de 5 % de PM). Se déclenche toujours lorsque vous êtes la cible. (Le maximum du bouclier n'est pas cumulable.) Les PM consommés sont réduits de votre CHA ×0,5."],
        ['Combat rapproché arcanique', "Lors d'une attaque de base, vous confère une charge cumulable de Mage de bataille. Chaque charge de [Mage de bataille] augmente la vitesse d'attaque de 6 %. Lorsque votre vitesse d'attaque atteint le maximum (1 fois par tour), vos dégâts sont amplifiés de charges de Mage de bataille ×3 %. 100 charges max."],
        ['Érudit arcanique', "Consomme 30 / 45 % de vos PM. Inflige à 1 ennemi des dégâts égaux à 1000 / 1500 % des PM consommés. Après utilisation, rend des PM égaux à (INT + MAG + CHA) ×1 / 1,5."]
      ]
    },
    es: {
      name: 'Do Junhyeok',
      head: "Avance de la próxima actualización",
      title: "Do Junhyeok entra en combate",
      story: ["Do Junhyeok es egresado de la Academia de Cazadores.", "En el momento en que un ataque sorpresa de monstruos lo dejó entre la vida y la muerte, Do Junhyeok despertó como Jugador y se abrió por sí mismo un camino para sobrevivir.", "Elegido por la Constelación que lo observaba, Do Junhyeok pudo crecer más rápido que nadie.", "Un Jugador que ilumina su propio camino. Conoce a [Santo] Do Junhyeok."],
      tag: {basic:'Ataque básico registrado', passive:'Pasiva', active:'Activa', counter:'Contraataque'}, weapons: 'Manoplas · Foco mágico', skillsTitle: 'Habilidades',
      skills: [
        ['Santo', 'Al realizar un ataque básico, restaura al aliado con menos PV una cantidad de PV igual a tu SUE ×3. Solo se aplica una vez cada 3 segundos al mismo objetivo. Si no hay aliados que curar, el ataque básico se convierte en un ataque que inflige SUE ×10 de daño a todos los enemigos. Daño mágico.'],
        ['El que ilumina su camino', 'Encuentra el camino incluso en el caos. Si sufres estados alterados durante 5 turnos o más, elimina 1 estado alterado que te afecte.'],
        ['Sacerdote de batalla', 'En combate, cada ataque básico te otorga «Sacerdote de batalla». En cada acción recuperas el 3 % de tus PV perdidos y consumes MP igual a lo recuperado. Sin MP no hay curación. El consumo de MP se reduce en tu valor de SUE.'],
        ['Instinto protector', 'Otorga a todos los miembros del grupo un escudo igual a SUE ×3,5.'],
        ['Más rápido', ''],
        ['El confiable', 'Aumenta un 2 % la probabilidad de contraataque de todos los aliados. No se acumula.'],
        ['Virtud del apoyo', 'Cuando un aliado sin escudo se convierte en objetivo de un ataque, consume el 5 % de los MP máx. para otorgarle un escudo igual a SUE ×2 (no se activa si quedan menos del 5 % de MP). Siempre se activa cuando tú eres el objetivo. (El máximo del escudo no se acumula.) Los MP consumidos se reducen en tu SUE ×0,5.'],
        ['Combate cuerpo a cuerpo arcano', 'Al realizar un ataque básico, te otorga una acumulación de Mago de batalla. Cada acumulación de [Mago de batalla] aumenta la velocidad de ataque un 6 %. Cuando tu velocidad de ataque alcanza el máximo (1 vez por turno), tu daño se amplifica en acumulaciones de Mago de batalla ×3 %. Máximo 100 acumulaciones.'],
        ['Erudito arcano', 'Consume el 30 / 45 % de tus MP. Inflige a 1 enemigo daño igual al 1000 / 1500 % de los MP consumidos. Tras usarla, recupera MP igual a (INT + MAG + SUE) ×1 / 1,5.']
      ]
    },
    it: {
      name: 'Do Junhyeok',
      head: "Anteprima del prossimo aggiornamento",
      title: "Do Junhyeok scende in campo",
      story: ["Do Junhyeok è un diplomato dell'Accademia dei Cacciatori.", "Nel momento in cui un attacco improvviso dei mostri lo ha portato tra la vita e la morte, Do Junhyeok si è risvegliato come Giocatore e si è aperto da solo la strada per sopravvivere.", "Scelto dalla Costellazione che lo osservava, Do Junhyeok è riuscito a crescere più in fretta di chiunque altro.", "Un Giocatore che illumina da sé la propria strada. Incontra [Santo] Do Junhyeok."],
      tag: {basic:'Attacco base registrato', passive:'Passiva', active:'Attiva', counter:'Contrattacco'}, weapons: 'Tirapugni · Focus magico', skillsTitle: 'Abilità',
      skills: [
        ['Santo', "Con l'attacco base, ripristina all'alleato con meno PS una quantità di PS pari alla tua FRT ×3. Si applica solo una volta ogni 3 secondi sullo stesso bersaglio. Se non ci sono alleati da curare, l'attacco base diventa un attacco che infligge danni pari a FRT ×10 a tutti i nemici. Danno magico."],
        ['Colui che illumina la via', "Trova la strada anche nel caos. Se subisci alterazioni di stato per 5 o più turni, rimuove 1 alterazione di stato su di te."],
        ['Sacerdote da battaglia', "In battaglia, ogni attacco base ti conferisce «Sacerdote da battaglia». A ogni azione recuperi il 3% dei PS persi e consumi PM pari alla quantità recuperata. Senza PM non avviene alcuna cura. Il consumo di PM è ridotto del tuo valore di FRT."],
        ['Istinto protettivo', 'Conferisce a tutti i membri del gruppo uno scudo pari a FRT ×3,5.'],
        ['Più veloce', ''],
        ['Colui di cui fidarsi', 'Aumenta del 2% la probabilità di contrattacco di tutti gli alleati. Non cumulabile.'],
        ['Virtù del supporto', "Quando un alleato senza scudo diventa bersaglio di un attacco, consuma il 5% dei PM max per conferirgli uno scudo pari a FRT ×2 (non si attiva se restano meno del 5% di PM). Si attiva sempre quando il bersaglio sei tu. (Il massimo dello scudo non è cumulabile.) I PM consumati sono ridotti della tua FRT ×0,5."],
        ['Combattimento ravvicinato arcano', "Con l'attacco base ti conferisce un accumulo di Mago da battaglia. Ogni accumulo di [Mago da battaglia] aumenta la velocità di attacco del 6%. Quando la tua velocità di attacco raggiunge il massimo (1 volta per turno), i tuoi danni sono amplificati di accumuli di Mago da battaglia ×3%. Massimo 100 accumuli."],
        ['Studioso arcano', 'Consuma il 30 / 45% dei tuoi PM. Infligge a 1 nemico danni pari al 1000 / 1500% dei PM consumati. Dopo l\'uso, ripristina PM pari a (INT + MAG + FRT) ×1 / 1,5.']
      ]
    },
    pt: {
      name: 'Do Junhyeok',
      head: "Prévia da próxima atualização",
      title: "Do Junhyeok entra em combate",
      story: ["Do Junhyeok é formado pela Academia de Caçadores.", "No momento em que um ataque surpresa de monstros o deixou entre a vida e a morte, Do Junhyeok despertou como Jogador e abriu sozinho o próprio caminho para sobreviver.", "Escolhido pela Constelação que o observava, Do Junhyeok conseguiu crescer mais rápido do que qualquer um.", "Um Jogador que ilumina o próprio caminho. Conheça [Santo] Do Junhyeok."],
      tag: {basic:'Ataque básico registrado', passive:'Passiva', active:'Ativa', counter:'Contra-ataque'}, weapons: 'Manoplas · Foco mágico', skillsTitle: 'Habilidades',
      skills: [
        ['Santo', 'Ao usar o ataque básico, restaura ao aliado com menos HP uma quantidade de HP igual à sua Sorte ×3. Aplica-se apenas uma vez a cada 3 segundos no mesmo alvo. Se não houver aliado para curar, o ataque básico se torna um ataque que causa Sorte ×10 de dano a todos os inimigos. Dano mágico.'],
        ['Aquele que ilumina o caminho', 'Encontra o caminho mesmo no caos. Ao ficar sob efeitos de status por 5 turnos ou mais, remove 1 efeito de status em você.'],
        ['Sacerdote de batalha', 'Em combate, cada ataque básico concede «Sacerdote de batalha» a você. A cada ação, recupera 3% do HP perdido e consome MP igual ao valor recuperado. Sem MP, não há cura. O consumo de MP é reduzido pelo seu valor de Sorte.'],
        ['Instinto protetor', 'Concede a todos os membros do grupo um escudo igual a Sorte ×3,5.'],
        ['Mais rápido', ''],
        ['Aquele em quem se confia', 'Aumenta em 2% a chance de contra-ataque de todos os aliados. Não acumula.'],
        ['Virtude do suporte', 'Quando um aliado sem escudo se torna alvo de um ataque, consome 5% do MP máx. para conceder um escudo igual a Sorte ×2 (não ativa se restar menos de 5% de MP). Sempre ativa quando você é o alvo. (O máximo do escudo não acumula.) O MP consumido é reduzido pela sua Sorte ×0,5.'],
        ['Combate corpo a corpo arcano', 'Ao usar o ataque básico, concede a você um acúmulo de Mago de batalha. Cada acúmulo de [Mago de batalha] aumenta a velocidade de ataque em 6%. Quando sua velocidade de ataque atinge o máximo (1 vez por turno), seu dano é amplificado em acúmulos de Mago de batalha ×3%. Máximo de 100 acúmulos.'],
        ['Estudioso arcano', 'Consome 30 / 45% do seu MP. Causa a 1 inimigo dano igual a 1000 / 1500% do MP consumido. Após o uso, recupera MP igual a (Inteligência + Magia + Sorte) ×1 / 1,5.']
      ]
    },
    pl: {
      name: 'Do Junhyeok',
      head: "Zapowiedź następnej aktualizacji",
      title: "Do Junhyeok rusza do walki",
      story: ["Do Junhyeok jest absolwentem Akademii Łowców.", "W chwili, gdy nagły atak potworów postawił go między życiem a śmiercią, Do Junhyeok przebudził się jako Gracz i sam wywalczył sobie drogę do przetrwania.", "Wybrany przez konstelację, która go obserwowała, Do Junhyeok mógł rozwijać się szybciej niż ktokolwiek inny.", "Gracz, który sam oświetla swoją drogę. Poznaj [Święty] Do Junhyeok."],
      tag: {basic:'Atak podstawowy (slot)', passive:'Pasywna', active:'Aktywna', counter:'Kontra'}, weapons: 'Kastet · Przybór magiczny', skillsTitle: 'Umiejętności',
      skills: [
        ['Święty', 'Przy ataku podstawowym przywraca sojusznikowi z najniższym HP ilość HP równą twojemu LUK ×3. Działa na ten sam cel tylko raz na 3 sekundy. Jeśli nie ma sojusznika do uleczenia, atak podstawowy zmienia się w atak zadający wszystkim wrogom obrażenia równe LUK ×10. Obrażenia magiczne.'],
        ['Ten, który oświetla drogę', 'Odnajduje drogę nawet w chaosie. Gdy jesteś pod wpływem efektów statusu przez 5 lub więcej tur, usuwa 1 efekt statusu z ciebie.'],
        ['Kapłan bojowy', 'W walce każdy atak podstawowy nadaje ci „Kapłana bojowego”. Przy każdej akcji odzyskujesz 3% utraconego HP i zużywasz MP równe odzyskanej ilości. Bez MP leczenie nie następuje. Koszt MP zmniejsza się o wartość twojego LUK.'],
        ['Instynkt opiekuńczy', 'Nadaje wszystkim członkom drużyny tarczę równą LUK ×3,5.'],
        ['Szybciej', ''],
        ['Ten, któremu można ufać', 'Zwiększa szansę na kontrę wszystkich sojuszników o 2%. Nie kumuluje się.'],
        ['Cnota wsparcia', 'Gdy sojusznik bez tarczy staje się celem ataku, zużywa 5% maks. MP, aby nadać mu tarczę równą LUK ×2 (nie aktywuje się, jeśli zostało mniej niż 5% MP). Zawsze aktywuje się, gdy celem jesteś ty. (Maksimum tarczy się nie kumuluje.) Zużywane MP zmniejsza się o twoje LUK ×0,5.'],
        ['Magiczna walka wręcz', 'Przy ataku podstawowym nadaje ci kumulujący się ładunek Maga bojowego. Każdy ładunek [Maga bojowego] zwiększa szybkość ataku o 6%. Gdy twoja szybkość ataku osiągnie maksimum (1 raz na turę), twoje obrażenia rosną o ładunki Maga bojowego ×3%. Maksymalnie 100 ładunków.'],
        ['Uczony magii', 'Zużywa 30 / 45% twojego MP. Zadaje 1 wrogowi obrażenia równe 1000 / 1500% zużytego MP. Po użyciu przywraca MP równe (INT + MAG + LUK) ×1 / 1,5.']
      ]
    },
    ru: {
      name: 'До Джунхёк',
      head: "Анонс следующего обновления",
      title: "В бой вступает До Джунхёк",
      story: ["До Джунхёк — выпускник Академии охотников.", "В тот миг, когда внезапное нападение монстров поставило его на грань жизни и смерти, До Джунхёк пробудился как Игрок и сам проложил себе путь к выживанию.", "Избранный созвездием, которое наблюдало за ним, До Джунхёк смог расти быстрее всех.", "Игрок, который сам освещает свой путь. Встречайте: [Святой] До Джунхёк."],
      tag: {basic:'Слот обычной атаки', passive:'Пассивный', active:'Активный', counter:'Контратака'}, weapons: 'Кастет · Магический жезл', skillsTitle: 'Навыки',
      skills: [
        ['Святой', 'При обычной атаке восстанавливает союзнику с наименьшим HP количество HP, равное вашей Удаче ×3. Действует на одну и ту же цель не чаще раза в 3 секунды. Если лечить некого, обычная атака превращается в атаку, наносящую всем врагам урон, равный Удаче ×10. Магический урон.'],
        ['Освещающий свой путь', 'Находит дорогу даже в хаосе. Если вы находитесь под негативными эффектами 5 ходов или дольше, снимает с вас 1 негативный эффект.'],
        ['Боевой жрец', 'В бою каждая обычная атака даёт вам «Боевого жреца». При каждом действии восстанавливает 3% потерянного HP и расходует MP в объёме восстановленного. Без MP восстановления нет. Расход MP уменьшается на значение вашей Удачи.'],
        ['Инстинкт защитника', 'Даёт всем членам группы щит, равный Удаче ×3,5.'],
        ['Быстрее', ''],
        ['Надёжный', 'Повышает шанс контратаки всех союзников на 2%. Не суммируется.'],
        ['Добродетель поддержки', 'Когда союзник без щита становится целью атаки, расходует 5% макс. MP и даёт ему щит, равный Удаче ×2 (не срабатывает, если осталось меньше 5% MP). Когда целью становитесь вы, срабатывает всегда. (Максимум щита не суммируется.) Расходуемое MP уменьшается на вашу Удачу ×0,5.'],
        ['Магический ближний бой', 'При обычной атаке даёт вам суммирующийся заряд Боевого мага. Каждый заряд [Боевого мага] повышает скорость атаки на 6%. Когда ваша скорость атаки достигает максимума (1 раз за ход), ваш урон усиливается на заряды Боевого мага ×3%. Максимум 100 зарядов.'],
        ['Магический учёный', 'Расходует 30 / 45% вашего MP. Наносит 1 врагу урон, равный 1000 / 1500% израсходованного MP. После применения восстанавливает MP, равное (Интеллект + Магия + Удача) ×1 / 1,5.']
      ]
    },
    tr: {
      name: 'Do Junhyeok',
      head: "Sonraki güncelleme ön izlemesi",
      title: "Do Junhyeok sahada",
      story: ["Do Junhyeok, Avcı Akademisi mezunudur.", "Bir canavar baskını onu ölümle yaşam arasında bıraktığı anda Do Junhyeok bir Oyuncu olarak uyandı ve hayatta kalmanın yolunu kendisi açtı.", "Onu izleyen takımyıldız tarafından seçilen Do Junhyeok, herkesten daha hızlı gelişebildi.", "Kendi yolunu kendisi aydınlatan bir Oyuncu. [Aziz] Do Junhyeok ile tanışın."],
      tag: {basic:'Temel Saldırı Yuvası', passive:'Pasif', active:'Aktif', counter:'Kontra'}, weapons: 'Muşta · Büyü Aleti', skillsTitle: 'Yetenekler',
      skills: [
        ['Aziz', "Temel saldırıda, HP'si en düşük müttefikin HP'sini Şans ×3 kadar yeniler. Aynı hedefe 3 saniyede yalnızca 1 kez uygulanır. İyileştirilecek müttefik yoksa temel saldırı, tüm düşmanlara Şans ×10 hasar veren bir saldırıya dönüşür. Büyü hasarı."],
        ['Yolunu Aydınlatan', "Kaosun içinde bile ilerleyecek yolu bulur. 5 tur veya daha uzun süre durum etkilerine maruz kalırsanız, üzerinizdeki 1 durum etkisini kaldırır."],
        ['Savaş Rahibi', "Savaşta her temel saldırıda size 'Savaş Rahibi' verir. Her eylemde kaybettiğiniz HP'nin %3'ünü yeniler ve yenilenen miktar kadar MP harcar. MP yoksa yenileme olmaz. MP harcaması Şans değeriniz kadar azalır."],
        ['Koruma İçgüdüsü', 'Tüm parti üyelerine Şans ×3,5 kadar kalkan verir.'],
        ['Daha Hızlı', ''],
        ['Güvenilir Olan', 'Tüm müttefiklerin kontra şansını %2 artırır. Birikmez.'],
        ['Destekçinin Erdemi', "Kalkanı olmayan bir müttefik saldırı hedefi olduğunda, maks. MP'nin %5'ini harcayarak Şans ×2 kadar kalkan verir (kalan MP %5'in altındaysa tetiklenmez). Hedef siz olduğunuzda her zaman tetiklenir. (Kalkanın üst sınırı birikmez.) Harcanan MP, Şans ×0,5 kadar azalır."],
        ['Büyülü Yakın Dövüş', "Temel saldırıda size biriken bir Savaş Büyücüsü yükü verir. Her [Savaş Büyücüsü] yükü saldırı hızını %6 artırır. Saldırı hızınız azami hıza (turda 1 kez) ulaştığında, hasarınız Savaş Büyücüsü yükü ×%3 kadar artar. En fazla 100 yük."],
        ['Büyü Bilgini', "MP'nizin %30 / 45'ini harcar. 1 düşmana harcanan MP'nin %1000 / 1500'ü kadar hasar verir. Kullanımdan sonra (Zeka + Büyü + Şans) ×1 / 1,5 kadar MP yeniler."]
      ]
    },
    vi: {
      name: 'Do Junhyeok',
      head: "Báo trước bản cập nhật tiếp theo",
      title: "Do Junhyeok xuất trận",
      story: ["Do Junhyeok là học viên tốt nghiệp Học viện Thợ săn.", "Vào khoảnh khắc cuộc tập kích của quái vật đẩy cậu vào ranh giới sống chết, Do Junhyeok đã thức tỉnh thành Người chơi và tự mình khai phá con đường sống sót.", "Được Tinh tọa vẫn luôn dõi theo lựa chọn, Do Junhyeok đã có thể trưởng thành nhanh hơn bất kỳ ai.", "Một Người chơi tự soi sáng con đường phía trước. Hãy gặp gỡ [Thánh giả] Do Junhyeok."],
      tag: {basic:'Đăng ký đòn đánh thường', passive:'Bị động', active:'Chủ động', counter:'Phản đòn'}, weapons: 'Găng Đấm · Pháp Khí', skillsTitle: 'Kỹ năng',
      skills: [
        ['Thánh giả', 'Khi đánh thường, hồi cho đồng minh có HP thấp nhất lượng HP bằng May mắn ×3 của bản thân. Với cùng một mục tiêu chỉ áp dụng 1 lần mỗi 3 giây. Nếu không có đồng minh cần hồi, đòn đánh thường sẽ biến thành đòn gây sát thương bằng May mắn ×10 lên tất cả kẻ địch. Sát thương phép.'],
        ['Người tự soi đường', 'Có thể tìm ra con đường phía trước ngay cả trong hỗn loạn. Khi chịu hiệu ứng bất lợi từ 5 lượt trở lên, giải trừ 1 hiệu ứng bất lợi trên bản thân.'],
        ['Tư tế chiến đấu', "Trong trận, mỗi lần đánh thường sẽ nhận 'Tư tế chiến đấu'. Mỗi hành động hồi 3% HP đã mất và tiêu hao MP bằng lượng đã hồi. Không có MP thì không hồi. Lượng MP tiêu hao giảm theo chỉ số May mắn của bản thân."],
        ['Bản năng bảo vệ', 'Ban cho toàn bộ thành viên tổ đội lá chắn bằng May mắn ×3,5.'],
        ['Nhanh hơn nữa', ''],
        ['Người đáng tin cậy', 'Tăng 2% tỉ lệ phản đòn của toàn bộ đồng minh. Không cộng dồn.'],
        ['Đức tính của người hỗ trợ', 'Khi một đồng minh không có lá chắn trở thành mục tiêu tấn công, tiêu hao 5% MP tối đa để ban lá chắn bằng May mắn ×2 (không kích hoạt nếu MP còn lại dưới 5%). Luôn kích hoạt khi bản thân là mục tiêu. (Giới hạn lá chắn không cộng dồn.) MP tiêu hao giảm theo May mắn ×0,5 của bản thân.'],
        ['Cận chiến ma đạo', 'Khi đánh thường, nhận cho bản thân một tầng Pháp sư chiến đấu cộng dồn. Mỗi tầng [Pháp sư chiến đấu] tăng 6% tốc độ đánh. Khi tốc độ đánh đạt mức tối đa (1 lần mỗi lượt), sát thương gây ra được khuếch đại thêm số tầng Pháp sư chiến đấu ×3%. Tối đa 100 tầng.'],
        ['Học giả ma đạo', 'Tiêu hao 30 / 45% MP của bản thân. Gây sát thương bằng 1000 / 1500% lượng MP đã tiêu hao lên 1 kẻ địch. Sau khi dùng, hồi MP bằng (Trí tuệ + Ma lực + May mắn) ×1 / 1,5.']
      ]
    },
    id: {
      name: 'Do Junhyeok',
      head: "Pratinjau pembaruan berikutnya",
      title: "Do Junhyeok terjun ke medan tempur",
      story: ["Do Junhyeok adalah lulusan Akademi Pemburu.", "Pada saat serangan mendadak monster membuatnya berada di antara hidup dan mati, Do Junhyeok bangkit sebagai Pemain dan membuka sendiri jalan untuk bertahan hidup.", "Dipilih oleh konstelasi yang selama ini mengawasinya, Do Junhyeok mampu berkembang lebih cepat daripada siapa pun.", "Pemain yang menerangi jalannya sendiri. Temui [Santo] Do Junhyeok."],
      tag: {basic:'Slot Serangan Dasar', passive:'Pasif', active:'Aktif', counter:'Counter'}, weapons: 'Knuckle · Alat Sihir', skillsTitle: 'Skill',
      skills: [
        ['Santo', 'Saat Serangan Dasar, memulihkan HP sekutu dengan HP terendah sebesar Keberuntungan ×3 milikmu. Pada target yang sama hanya berlaku 1 kali setiap 3 detik. Jika tidak ada sekutu yang perlu dipulihkan, Serangan Dasar berubah menjadi serangan yang memberikan damage sebesar Keberuntungan ×10 ke semua musuh. Damage sihir.'],
        ['Penerang Jalan Sendiri', 'Mampu menemukan jalan ke depan bahkan dalam kekacauan. Jika terkena efek status selama 5 giliran atau lebih, menghapus 1 efek status pada dirimu.'],
        ['Pendeta Tempur', "Dalam pertempuran, setiap Serangan Dasar memberimu 'Pendeta Tempur'. Setiap aksi memulihkan 3% HP yang hilang dan menghabiskan MP sebesar jumlah yang dipulihkan. Tanpa MP, tidak ada pemulihan. Konsumsi MP berkurang sebesar nilai Keberuntunganmu."],
        ['Naluri Pelindung', 'Memberikan perisai sebesar Keberuntungan ×3,5 kepada seluruh anggota party.'],
        ['Lebih Cepat', ''],
        ['Yang Dapat Dipercaya', 'Meningkatkan peluang Counter semua sekutu sebesar 2%. Tidak dapat ditumpuk.'],
        ['Kebajikan Pendukung', 'Saat sekutu tanpa perisai menjadi target serangan, menghabiskan 5% MP Maks untuk memberikan perisai sebesar Keberuntungan ×2 (tidak aktif jika sisa MP di bawah 5%). Selalu aktif saat kamu yang menjadi target. (Batas maksimum perisai tidak menumpuk.) MP yang dihabiskan berkurang sebesar Keberuntungan ×0,5 milikmu.'],
        ['Pertarungan Jarak Dekat Sihir', 'Saat Serangan Dasar, memberimu tumpukan Penyihir Tempur. Setiap tumpukan [Penyihir Tempur] meningkatkan Kecepatan serang sebesar 6%. Saat Kecepatan serangmu mencapai batas maksimum (1 kali per giliran), damage-mu diperkuat sebesar tumpukan Penyihir Tempur ×3%. Maksimal 100 tumpukan.'],
        ['Cendekiawan Sihir', 'Menghabiskan 30 / 45% MP milikmu. Memberikan damage sebesar 1000 / 1500% dari MP yang dihabiskan kepada 1 musuh. Setelah digunakan, memulihkan MP sebesar (Kecerdasan + Sihir + Keberuntungan) ×1 / 1,5.']
      ]
    },
    th: {
      name: 'โด จุนฮยอก',
      head: "ตัวอย่างอัปเดตถัดไป",
      title: "โด จุนฮยอก ออกศึก",
      story: ["โด จุนฮยอกเป็นศิษย์จบจากสถาบันฮันเตอร์", "ในวินาทีที่การจู่โจมของมอนสเตอร์ทำให้เขาต้องยืนอยู่ระหว่างความเป็นและความตาย โด จุนฮยอกได้ตื่นขึ้นเป็นผู้เล่น และบุกเบิกหนทางเอาชีวิตรอดด้วยตนเอง", "กลุ่มดาวที่เฝ้ามองอยู่ได้เลือกเขา โด จุนฮยอกจึงเติบโตได้เร็วกว่าใคร", "ผู้เล่นที่ส่องทางเดินของตนเอง มาพบกับ [นักบุญ] โด จุนฮยอก"],
      tag: {basic:'แบบลงทะเบียนโจมตีพื้นฐาน', passive:'แพสซีฟ', active:'แอ็กทีฟ', counter:'เคาน์เตอร์'}, weapons: 'นักเกิล · ศาสตราเวท', skillsTitle: 'สกิล',
      skills: [
        ['นักบุญ', 'เมื่อโจมตีพื้นฐาน ฟื้นฟู HP ให้พันธมิตรที่มี HP ต่ำที่สุดเท่ากับโชค ×3 ของตนเอง กับเป้าหมายเดียวกันมีผลเพียง 1 ครั้งต่อ 3 วินาที หากไม่มีพันธมิตรให้ฟื้นฟู การโจมตีพื้นฐานจะเปลี่ยนเป็นการโจมตีที่สร้างความเสียหายเท่ากับโชค ×10 ใส่ศัตรูทั้งหมด ความเสียหายเวทมนตร์'],
        ['ผู้ส่องทางด้วยตนเอง', 'สามารถหาทางไปข้างหน้าได้แม้ในสถานการณ์วุ่นวาย เมื่อได้รับสถานะผิดปกติตั้งแต่ 5 เทิร์นขึ้นไป จะลบสถานะผิดปกติบนตนเอง 1 อย่าง'],
        ['นักบวชนักรบ', "ระหว่างต่อสู้ ทุกครั้งที่โจมตีพื้นฐานจะได้รับ 'นักบวชนักรบ' ทุกการกระทำจะฟื้นฟู HP ที่เสียไป 3% และใช้ MP เท่ากับปริมาณที่ฟื้นฟู หากไม่มี MP จะไม่ฟื้นฟู ปริมาณ MP ที่ใช้ลดลงตามค่าโชคของตนเอง"],
        ['สัญชาตญาณปกป้อง', 'มอบโล่เท่ากับโชค ×3.5 ให้สมาชิกปาร์ตี้ทั้งหมด'],
        ['เร็วขึ้นอีก', ''],
        ['ผู้ที่ไว้ใจได้', 'เพิ่มโอกาสเคาน์เตอร์ของพันธมิตรทั้งหมด 2% ไม่ซ้อนทับ'],
        ['คุณธรรมของผู้สนับสนุน', 'เมื่อพันธมิตรที่ไม่มีโล่ตกเป็นเป้าหมายการโจมตี จะใช้ MP 5% ของ MP สูงสุดเพื่อมอบโล่เท่ากับโชค ×2 (ไม่ทำงานหาก MP คงเหลือต่ำกว่า 5%) เมื่อตนเองเป็นเป้าหมายจะทำงานเสมอ (ค่าสูงสุดของโล่ไม่ซ้อนทับ) MP ที่ใช้ลดลงตามโชค ×0.5 ของตนเอง'],
        ['ศาสตร์การต่อสู้ระยะประชิดเวท', 'เมื่อโจมตีพื้นฐาน จะได้รับสแตกจอมเวทสงครามที่ซ้อนทับได้ [จอมเวทสงคราม] แต่ละสแตกเพิ่มความเร็วโจมตี 6% เมื่อความเร็วโจมตีถึงขีดสูงสุด (1 ครั้งต่อเทิร์น) ความเสียหายของตนเองจะเพิ่มขึ้นตามสแตกจอมเวทสงคราม ×3% สูงสุด 100 สแตก'],
        ['นักปราชญ์เวท', 'ใช้ MP ของตนเอง 30 / 45% สร้างความเสียหายเท่ากับ 1000 / 1500% ของ MP ที่ใช้ใส่ศัตรู 1 ตัว หลังใช้สกิลจะฟื้นฟู MP เท่ากับ (ปัญญา + เวทมนตร์ + โชค) ×1 / 1.5']
      ]
    },
    ar: {
      name: 'دو جون هيوك',
      head: "لمحة عن التحديث القادم",
      title: "دو جون هيوك يدخل المعركة",
      story: ["دو جون هيوك خريج أكاديمية الصيادين.", "في اللحظة التي وضعه فيها هجوم مباغت من الوحوش بين الحياة والموت، استيقظ دو جون هيوك لاعبًا وشقّ بنفسه طريقًا للبقاء.", "اختارته الكوكبة التي كانت تراقبه، فتمكّن دو جون هيوك من النمو أسرع من أي أحد.", "لاعب يُنير طريقه بنفسه. تعرّف على [القديس] دو جون هيوك."],
      tag: {basic:'نوع مُسجَّل للهجوم الأساسي', passive:'سلبية', active:'نشطة', counter:'مضادّة'}, weapons: 'قبضة حديدية · أداة سحرية', skillsTitle: 'المهارات',
      skills: [
        ['القديس', 'عند الهجوم الأساسي، يستعيد الحليف صاحب أقل HP قدرًا من HP يساوي الحظ ×3 لديك. يُطبَّق على الهدف نفسه مرة واحدة فقط كل 3 ثوانٍ. إذا لم يوجد حليف يحتاج إلى العلاج، يتحول الهجوم الأساسي إلى هجوم يُلحق ضررًا يساوي الحظ ×10 بجميع الأعداء. ضرر سحري.'],
        ['من يُنير طريقه', 'يجد طريقه حتى وسط الفوضى. عند التعرض لحالات سلبية لمدة 5 أدوار أو أكثر، يزيل حالة سلبية واحدة عنك.'],
        ['كاهن المعركة', "في القتال، يمنحك كل هجوم أساسي «كاهن المعركة». مع كل إجراء تستعيد 3% من HP المفقودة وتستهلك MP بقدر ما استعدت. لا يحدث علاج دون MP. ينخفض استهلاك MP بمقدار قيمة الحظ لديك."],
        ['غريزة الحماية', 'يمنح جميع أعضاء الفريق حاجزًا يساوي الحظ ×3.5.'],
        ['أسرع', ''],
        ['الجدير بالثقة', 'يزيد فرصة الهجوم المضاد لجميع الحلفاء بنسبة 2%. لا يتراكم.'],
        ['فضيلة الداعم', 'عندما يصبح حليف بلا حاجز هدفًا لهجوم، يستهلك 5% من أقصى MP ليمنحه حاجزًا يساوي الحظ ×2 (لا يُفعَّل إذا كان MP المتبقي أقل من 5%). يُفعَّل دائمًا عندما تكون أنت الهدف. (الحد الأقصى للحاجز لا يتراكم.) ينخفض MP المستهلك بمقدار الحظ ×0.5 لديك.'],
        ['فن القتال القريب السحري', 'عند الهجوم الأساسي، يمنحك شحنة متراكمة من ساحر المعركة. كل شحنة من [ساحر المعركة] تزيد سرعة الهجوم بنسبة 6%. عندما تبلغ سرعة هجومك الحد الأقصى (مرة واحدة في الدور)، يتضخم ضررك بمقدار شحنات ساحر المعركة ×3%. 100 شحنة كحد أقصى.'],
        ['عالِم السحر', 'يستهلك 30 / 45% من MP لديك. يُلحق بعدو واحد ضررًا يساوي 1000 / 1500% من MP المستهلك. بعد الاستخدام، يستعيد MP بمقدار (الذكاء + السحر + الحظ) ×1 / 1.5.']
      ]
    }
  }
};
