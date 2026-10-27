/* 컨텐츠 안내 상세 글 — 1028 마스터 구술(한국어 = 원문, 맞춤법만 손봄). 17개 언어.
   쓰는 법: CONTENTS_TEXT['칸 id'][언어] = [문단, 문단, …]. 이 목록에 없는 칸(개발자 노트)은 '준비 중입니다.'가 나온다.
   용어 = 게임 언어팩 표기(협회·마석·범람 게이트·월드 게이트·성좌·잠재 초기화권·스킬북·장비 강화석). */
window.CONTENTS_TEXT = {
 'world-gate': {
  ko: [
   '지역에 나타난 게이트를 클리어하지 못하면 게이트가 범람합니다. 다른 차원의 존재가 지구를 침범하게 됩니다. 이때부터 게이트는 협회가 모든 헌터에게 공개하고, 모두가 참여해서 공략해야 하는 던전이 됩니다.',
   '범람 게이트에 입장할 때마다 두 차원 간의 경계가 옅어집니다. 마석을 회수하여 돌아오면 괜찮지만, 회수하지 못한다면 범람 게이트가 더 강력해집니다.',
   '10회 동안 범람 게이트를 공략하지 못하면 차원의 경계가 완전히 허물어져 걷잡을 수 없게 됩니다. 이때부터 협회는 지방의 헌터뿐만 아니라 세계의 내로라하는 헌터들을 소집합니다.',
   '11단계 범람 게이트부터 협회는 이를 월드게이트로 규정합니다.',
   '월드게이트의 내부는 일반 게이트보다 훨씬 넓어 더 많은 몬스터가 등장합니다. 한 명의 헌터가 모든 지역을 단시간에 처리할 수 없기 때문에 다수의 헌터가 입장하게 됩니다. 더 많은 몬스터를 공략하는 만큼 더 많은 경험치와 골드를 획득할 수 있으며, 종종 특별한 보물을 발견하기도 합니다.',
   '월드게이트도 공략에 실패할 수 있습니다.',
   '실패하면 던전이 이쪽 세계의 존재를 알아채고 방어에 들어갑니다. 공략 난이도가 올라갑니다.',
   '월드게이트는 3단계(13단계 범람 게이트)까지 존재하며, 13단계 게이트 공략에 실패하면 그 게이트 주변은 적 차원의 지배지가 됩니다. 다시 회복하려면 많은 노력이 필요합니다.'
  ],
  en: [
   'If a gate that appears in a region is not cleared, it overflows. Beings from another dimension begin to invade Earth. From then on, the Association discloses the gate to every Hunter, and it becomes a dungeon that everyone must join forces to conquer.',
   'Each time someone enters an Overflow Gate, the boundary between the two dimensions grows thinner. Returning with the Magic Stone is fine, but if it is not recovered, the Overflow Gate grows stronger.',
   'If an Overflow Gate goes unconquered for 10 attempts, the boundary between dimensions collapses completely and the situation spirals out of control. From that point, the Association summons not only local Hunters but the most renowned Hunters in the world.',
   'From stage 11, the Association designates an Overflow Gate as a World Gate.',
   'The inside of a World Gate is far larger than a normal gate, and many more monsters appear. Since no single Hunter can clear every area in a short time, many Hunters enter together. Defeating more monsters means earning more EXP and gold, and sometimes discovering special treasures.',
   'A World Gate raid can also fail.',
   'When it fails, the dungeon becomes aware of our world and goes on the defensive. The difficulty rises.',
   'World Gates go up to tier 3 (a stage 13 Overflow Gate). If a stage 13 gate is not conquered, the area around it falls under the rule of the enemy dimension. Taking it back requires great effort.'
  ],
  ja: [
   '地域に現れたゲートをクリアできないと、ゲートは氾濫します。別の次元の存在が地球を侵し始めます。この時からゲートは協会がすべてのハンターに公開し、全員で攻略すべきダンジョンとなります。',
   '氾濫ゲートに入場するたびに、二つの次元の境界は薄れていきます。魔石を回収して戻れば問題ありませんが、回収できなければ氾濫ゲートはさらに強力になります。',
   '10回にわたって氾濫ゲートを攻略できないと、次元の境界は完全に崩れ、手がつけられなくなります。この時から協会は地方のハンターだけでなく、世界に名だたるハンターたちを招集します。',
   '11段階の氾濫ゲートから、協会はこれをワールドゲートと定めます。',
   'ワールドゲートの内部は一般のゲートよりはるかに広く、より多くのモンスターが出現します。一人のハンターがすべての地域を短時間で片付けることはできないため、多数のハンターが入場します。より多くのモンスターを攻略する分、より多くの経験値とゴールドを獲得でき、時には特別な宝物を見つけることもあります。',
   'ワールドゲートの攻略も失敗することがあります。',
   '失敗すると、ダンジョンはこちらの世界の存在に気づき、防御に入ります。攻略難易度が上がります。',
   'ワールドゲートは3段階(13段階の氾濫ゲート)まで存在し、13段階のゲートの攻略に失敗すると、そのゲートの周辺は敵の次元の支配地となります。取り戻すには多くの努力が必要です。'
  ],
  'zh-Hans': [
   '如果未能通关出现在某地区的传送门，传送门就会泛滥。来自其他次元的存在将开始入侵地球。从这时起，协会会向所有猎人公开该传送门，它将成为需要所有人共同参与攻略的地下城。',
   '每次进入泛滥传送门，两个次元之间的界限都会变得更加稀薄。只要回收魔石归来便无大碍，但如果未能回收，泛滥传送门就会变得更加强大。',
   '如果连续 10 次未能攻略泛滥传送门，次元的界限将彻底崩塌，局势一发不可收拾。从这时起，协会不仅会召集地方猎人，还会召集世界上数一数二的猎人。',
   '从第 11 阶段泛滥传送门起，协会将其定为世界传送门。',
   '世界传送门的内部比普通传送门广阔得多，会出现更多怪物。由于单个猎人无法在短时间内清理所有区域，因此会有众多猎人一同进入。攻略的怪物越多，获得的经验值和金币也越多，有时还会发现特别的宝物。',
   '世界传送门的攻略也可能失败。',
   '一旦失败，地下城就会察觉到我们这个世界的存在并转入防御，攻略难度随之上升。',
   '世界传送门最多存在 3 个阶段（第 13 阶段泛滥传送门）。如果第 13 阶段传送门攻略失败，该传送门周边将沦为敌方次元的统治地。要想重新夺回，需要付出巨大的努力。'
  ],
  'zh-Hant': [
   '如果未能通關出現在某地區的傳送門，傳送門就會氾濫。來自其他次元的存在將開始入侵地球。從這時起，協會會向所有獵人公開該傳送門，它將成為需要所有人共同參與攻略的地下城。',
   '每次進入氾濫傳送門，兩個次元之間的界線都會變得更加稀薄。只要回收魔石歸來便無大礙，但如果未能回收，氾濫傳送門就會變得更加強大。',
   '如果連續 10 次未能攻略氾濫傳送門，次元的界線將徹底崩塌，局勢一發不可收拾。從這時起，協會不僅會召集地方獵人，還會召集世界上數一數二的獵人。',
   '從第 11 階段氾濫傳送門起，協會將其定為世界傳送門。',
   '世界傳送門的內部比一般傳送門廣闊得多，會出現更多怪物。由於單一獵人無法在短時間內清理所有區域，因此會有眾多獵人一同進入。攻略的怪物越多，獲得的經驗值與金幣也越多，有時還會發現特別的寶物。',
   '世界傳送門的攻略也可能失敗。',
   '一旦失敗，地下城就會察覺到我們這個世界的存在並轉入防禦，攻略難度隨之上升。',
   '世界傳送門最多存在 3 個階段（第 13 階段氾濫傳送門）。如果第 13 階段傳送門攻略失敗，該傳送門周邊將淪為敵方次元的統治地。要想重新奪回，需要付出極大的努力。'
  ],
  de: [
   'Wird ein Tor, das in einer Region erscheint, nicht bezwungen, kommt es zur Überflutung. Wesen aus einer anderen Dimension beginnen, in die Erde einzudringen. Ab diesem Moment macht der Verband das Tor allen Jägern bekannt, und es wird zu einem Dungeon, den alle gemeinsam erobern müssen.',
   'Mit jedem Betreten eines Überflutungs-Tors wird die Grenze zwischen den beiden Dimensionen dünner. Wer mit dem Magiestein zurückkehrt, richtet keinen Schaden an – wird er jedoch nicht geborgen, wird das Überflutungs-Tor stärker.',
   'Wird ein Überflutungs-Tor 10-mal nicht erobert, bricht die Grenze zwischen den Dimensionen vollständig zusammen und die Lage gerät außer Kontrolle. Ab dann ruft der Verband nicht nur die Jäger der Region, sondern die namhaftesten Jäger der ganzen Welt zusammen.',
   'Ab Stufe 11 stuft der Verband ein Überflutungs-Tor als Welt-Tor ein.',
   'Das Innere eines Welt-Tors ist weit größer als ein gewöhnliches Tor, und es erscheinen viel mehr Monster. Da kein einzelner Jäger alle Gebiete in kurzer Zeit räumen kann, betreten viele Jäger es gemeinsam. Wer mehr Monster besiegt, erhält mehr EP und Gold – und findet manchmal besondere Schätze.',
   'Auch die Eroberung eines Welt-Tors kann scheitern.',
   'Scheitert sie, bemerkt der Dungeon unsere Welt und geht in die Verteidigung. Der Schwierigkeitsgrad steigt.',
   'Welt-Tore gibt es bis Rang 3 (ein Überflutungs-Tor der Stufe 13). Scheitert die Eroberung eines Tors der Stufe 13, fällt seine Umgebung unter die Herrschaft der feindlichen Dimension. Sie zurückzugewinnen erfordert große Anstrengung.'
  ],
  fr: [
   'Si un portail apparu dans une région n’est pas terminé, il déborde. Des êtres d’une autre dimension commencent à envahir la Terre. Dès lors, l’Association révèle le portail à tous les Chasseurs, et il devient un donjon que tout le monde doit conquérir ensemble.',
   'Chaque entrée dans un Portail en débordement amincit la frontière entre les deux dimensions. Revenir avec la Pierre Magique ne pose pas de problème, mais si elle n’est pas récupérée, le Portail en débordement devient plus puissant.',
   'Si un Portail en débordement n’est pas conquis en 10 tentatives, la frontière entre les dimensions s’effondre totalement et la situation devient incontrôlable. L’Association convoque alors non seulement les Chasseurs locaux, mais aussi les Chasseurs les plus renommés du monde.',
   'À partir du niveau 11, l’Association classe le Portail en débordement comme Portail mondial.',
   'L’intérieur d’un Portail mondial est bien plus vaste qu’un portail ordinaire, et beaucoup plus de monstres y apparaissent. Aucun Chasseur ne pouvant nettoyer toutes les zones seul en peu de temps, de nombreux Chasseurs y entrent ensemble. Plus de monstres vaincus signifie plus d’EXP et d’or, et parfois la découverte de trésors spéciaux.',
   'La conquête d’un Portail mondial peut aussi échouer.',
   'En cas d’échec, le donjon prend conscience de notre monde et passe en défense. La difficulté augmente.',
   'Les Portails mondiaux vont jusqu’au rang 3 (un Portail en débordement de niveau 13). Si un portail de niveau 13 n’est pas conquis, ses environs tombent sous la domination de la dimension ennemie. Les reprendre demande de grands efforts.'
  ],
  es: [
   'Si una puerta que aparece en una región no se supera, se desborda. Seres de otra dimensión comienzan a invadir la Tierra. A partir de ese momento, la Asociación revela la puerta a todos los Cazadores y se convierte en una mazmorra que todos deben conquistar juntos.',
   'Cada vez que alguien entra en una Puerta desbordada, la frontera entre las dos dimensiones se debilita. Volver con la Piedra Mágica no supone problema, pero si no se recupera, la Puerta desbordada se vuelve más poderosa.',
   'Si una Puerta desbordada no se conquista en 10 intentos, la frontera entre dimensiones se derrumba por completo y la situación se vuelve incontrolable. Desde entonces, la Asociación convoca no solo a los Cazadores locales, sino a los Cazadores más renombrados del mundo.',
   'A partir del nivel 11, la Asociación designa la Puerta desbordada como Puerta del Mundo.',
   'El interior de una Puerta del Mundo es mucho más amplio que el de una puerta normal y aparecen muchos más monstruos. Como ningún Cazador puede despejar todas las zonas en poco tiempo, entran muchos Cazadores juntos. Derrotar a más monstruos significa ganar más EXP y oro, y a veces descubrir tesoros especiales.',
   'La conquista de una Puerta del Mundo también puede fracasar.',
   'Si fracasa, la mazmorra percibe la existencia de nuestro mundo y se pone a la defensiva. La dificultad aumenta.',
   'Las Puertas del Mundo llegan hasta el rango 3 (una Puerta desbordada de nivel 13). Si no se conquista una puerta de nivel 13, sus alrededores pasan a estar dominados por la dimensión enemiga. Recuperarlos exige un gran esfuerzo.'
  ],
  it: [
   'Se un portale apparso in una regione non viene completato, straripa. Esseri di un’altra dimensione iniziano a invadere la Terra. Da quel momento l’Associazione rende noto il portale a tutti i Cacciatori, e diventa un dungeon che tutti devono conquistare insieme.',
   'Ogni volta che si entra in un Portale di Marea, il confine tra le due dimensioni si assottiglia. Tornare con la Pietra Magica non crea problemi, ma se non viene recuperata il Portale di Marea diventa più potente.',
   'Se un Portale di Marea non viene conquistato per 10 volte, il confine tra le dimensioni crolla del tutto e la situazione sfugge a ogni controllo. Da allora l’Associazione convoca non solo i Cacciatori locali, ma anche i Cacciatori più rinomati del mondo.',
   'Dal livello 11 l’Associazione classifica il Portale di Marea come Portale del Mondo.',
   'L’interno di un Portale del Mondo è molto più vasto di un portale normale e vi compaiono molti più mostri. Poiché nessun Cacciatore può ripulire tutte le aree da solo in poco tempo, vi entrano molti Cacciatori insieme. Sconfiggere più mostri significa ottenere più EXP e oro, e a volte scoprire tesori speciali.',
   'Anche la conquista di un Portale del Mondo può fallire.',
   'In caso di fallimento, il dungeon si accorge del nostro mondo e passa alla difesa. La difficoltà aumenta.',
   'I Portali del Mondo arrivano fino al grado 3 (un Portale di Marea di livello 13). Se un portale di livello 13 non viene conquistato, i suoi dintorni cadono sotto il dominio della dimensione nemica. Riconquistarli richiede grandi sforzi.'
  ],
  pt: [
   'Se um portal que surge em uma região não for concluído, ele transborda. Seres de outra dimensão começam a invadir a Terra. A partir daí, a Associação revela o portal a todos os Caçadores, e ele se torna uma masmorra que todos precisam conquistar juntos.',
   'Cada vez que alguém entra em um Portal transbordado, a fronteira entre as duas dimensões fica mais fina. Voltar com a Pedra Mágica não causa problemas, mas se ela não for recuperada, o Portal transbordado fica mais poderoso.',
   'Se um Portal transbordado não for conquistado em 10 tentativas, a fronteira entre as dimensões desmorona por completo e a situação foge do controle. A partir daí, a Associação convoca não só os Caçadores locais, mas os Caçadores mais renomados do mundo.',
   'A partir do estágio 11, a Associação classifica o Portal transbordado como Portal Mundial.',
   'O interior de um Portal Mundial é muito maior que o de um portal comum, e muito mais monstros aparecem. Como nenhum Caçador consegue limpar todas as áreas sozinho em pouco tempo, muitos Caçadores entram juntos. Derrotar mais monstros significa ganhar mais EXP e ouro, e às vezes encontrar tesouros especiais.',
   'A conquista de um Portal Mundial também pode falhar.',
   'Em caso de falha, a masmorra percebe a existência do nosso mundo e entra em defesa. A dificuldade aumenta.',
   'Os Portais Mundiais vão até o nível 3 (um Portal transbordado de estágio 13). Se um portal de estágio 13 não for conquistado, os arredores dele passam a ser dominados pela dimensão inimiga. Recuperá-los exige muito esforço.'
  ],
  pl: [
   'Jeśli brama, która pojawiła się w regionie, nie zostanie ukończona, następuje przełom. Istoty z innego wymiaru zaczynają najeżdżać Ziemię. Od tej chwili Stowarzyszenie ujawnia bramę wszystkim Łowcom i staje się ona lochem, który wszyscy muszą wspólnie zdobyć.',
   'Z każdym wejściem do Wrót przełomu granica między dwoma wymiarami słabnie. Powrót z Kamieniem Magii nie szkodzi, ale jeśli nie zostanie odzyskany, Wrota przełomu stają się silniejsze.',
   'Jeśli Wrota przełomu nie zostaną zdobyte przez 10 prób, granica między wymiarami całkowicie się rozpada i sytuacja wymyka się spod kontroli. Od tej pory Stowarzyszenie wzywa nie tylko miejscowych Łowców, ale i najsłynniejszych Łowców świata.',
   'Od 11. poziomu Stowarzyszenie uznaje Wrota przełomu za Bramę Świata.',
   'Wnętrze Bramy Świata jest znacznie rozleglejsze niż zwykłej bramy i pojawia się w nim o wiele więcej potworów. Żaden Łowca nie oczyści wszystkich obszarów sam w krótkim czasie, dlatego wchodzi wielu Łowców naraz. Więcej pokonanych potworów to więcej PD i złota, a czasem także odkrycie wyjątkowych skarbów.',
   'Zdobywanie Bramy Świata również może się nie powieść.',
   'W razie porażki loch dostrzega istnienie naszego świata i przechodzi do obrony. Poziom trudności rośnie.',
   'Bramy Świata mają do 3 stopni (Wrota przełomu 13. poziomu). Jeśli brama 13. poziomu nie zostanie zdobyta, jej okolica przechodzi pod panowanie wrogiego wymiaru. Odzyskanie jej wymaga wielkiego wysiłku.'
  ],
  ru: [
   'Если врата, появившиеся в регионе, не пройдены, они переполняются. Существа из другого измерения начинают вторгаться на Землю. С этого момента Ассоциация открывает врата для всех Охотников, и они становятся подземельем, которое нужно штурмовать всем вместе.',
   'С каждым входом во Врата Наводнения граница между двумя измерениями истончается. Если вернуться с Маг. камнем — ничего страшного, но если его не вернуть, Врата Наводнения становятся сильнее.',
   'Если Врата Наводнения не удаётся пройти 10 раз, граница между измерениями полностью рушится, и ситуация выходит из-под контроля. С этого момента Ассоциация созывает не только местных Охотников, но и самых прославленных Охотников мира.',
   'Начиная с 11-й ступени, Ассоциация признаёт Врата Наводнения Мировыми Вратами.',
   'Внутри Мировые Врата гораздо обширнее обычных, и монстров там намного больше. Один Охотник не может быстро зачистить все зоны, поэтому туда входит множество Охотников. Чем больше побеждённых монстров, тем больше опыта и золота, а иногда удаётся найти особые сокровища.',
   'Штурм Мировых Врат тоже может провалиться.',
   'При провале подземелье замечает наш мир и переходит к обороне. Сложность возрастает.',
   'Мировые Врата существуют до 3-го уровня (Врата Наводнения 13-й ступени). Если врата 13-й ступени не пройдены, их окрестности переходят под власть вражеского измерения. Чтобы вернуть их, потребуется много усилий.'
  ],
  tr: [
   'Bir bölgede beliren geçit temizlenemezse taşar. Başka bir boyuttan varlıklar Dünya’yı istila etmeye başlar. Bu andan itibaren Birlik geçidi tüm Avcılara açıklar ve geçit herkesin birlikte fethetmesi gereken bir zindana dönüşür.',
   'Bir Taşkın Geçidi’ne her girişte iki boyut arasındaki sınır incelir. Büyü Taşı’nı alıp dönmek sorun değildir, ancak geri alınamazsa Taşkın Geçidi daha da güçlenir.',
   'Bir Taşkın Geçidi 10 kez fethedilemezse boyutlar arasındaki sınır tamamen çöker ve durum kontrolden çıkar. Bu andan itibaren Birlik yalnızca yerel Avcıları değil, dünyanın en ünlü Avcılarını da çağırır.',
   '11. aşamadan itibaren Birlik, Taşkın Geçidi’ni Dünya Geçidi olarak tanımlar.',
   'Dünya Geçidi’nin içi sıradan bir geçitten çok daha geniştir ve çok daha fazla canavar ortaya çıkar. Tek bir Avcı tüm bölgeleri kısa sürede temizleyemeyeceği için çok sayıda Avcı birlikte girer. Daha fazla canavar yenmek daha fazla TP ve altın demektir; bazen özel hazineler de bulunur.',
   'Dünya Geçidi’nin fethi de başarısız olabilir.',
   'Başarısız olunursa zindan bizim dünyamızın varlığını fark eder ve savunmaya geçer. Zorluk artar.',
   'Dünya Geçitleri 3. kademeye (13. aşama Taşkın Geçidi) kadar vardır. 13. aşama geçit fethedilemezse çevresi düşman boyutun egemenliğine girer. Orayı geri almak büyük çaba gerektirir.'
  ],
  vi: [
   'Nếu cánh cổng xuất hiện ở một khu vực không được chinh phục, cổng sẽ tràn. Những sinh vật từ chiều không gian khác bắt đầu xâm lấn Trái Đất. Từ lúc này, Hiệp hội công khai cánh cổng cho mọi Thợ săn, và nó trở thành hầm ngục mà tất cả phải cùng nhau chinh phục.',
   'Mỗi lần có người bước vào Cổng Tràn, ranh giới giữa hai chiều không gian lại mỏng đi. Mang được Đá Phép trở về thì không sao, nhưng nếu không thu hồi được, Cổng Tràn sẽ càng mạnh hơn.',
   'Nếu Cổng Tràn không được chinh phục trong 10 lần, ranh giới giữa các chiều không gian sẽ sụp đổ hoàn toàn và tình hình vượt khỏi tầm kiểm soát. Từ lúc này, Hiệp hội triệu tập không chỉ Thợ săn địa phương mà cả những Thợ săn lừng danh nhất thế giới.',
   'Từ Cổng Tràn cấp 11, Hiệp hội xếp nó vào Cổng Thế giới.',
   'Bên trong Cổng Thế giới rộng hơn cổng thường rất nhiều và xuất hiện nhiều quái vật hơn. Vì một Thợ săn không thể dọn sạch mọi khu vực trong thời gian ngắn, nhiều Thợ săn sẽ cùng tiến vào. Hạ được nhiều quái vật hơn đồng nghĩa với nhiều EXP và vàng hơn, đôi khi còn tìm thấy kho báu đặc biệt.',
   'Việc chinh phục Cổng Thế giới cũng có thể thất bại.',
   'Khi thất bại, hầm ngục sẽ nhận ra sự tồn tại của thế giới chúng ta và chuyển sang phòng thủ. Độ khó tăng lên.',
   'Cổng Thế giới có tối đa 3 bậc (Cổng Tràn cấp 13). Nếu chinh phục cổng cấp 13 thất bại, khu vực quanh cổng sẽ rơi vào vùng thống trị của chiều không gian kẻ thù. Muốn giành lại cần rất nhiều nỗ lực.'
  ],
  id: [
   'Jika gerbang yang muncul di suatu wilayah tidak ditaklukkan, gerbang itu akan meluap. Makhluk dari dimensi lain mulai menyerbu Bumi. Sejak saat itu, Asosiasi membuka gerbang tersebut untuk semua Pemburu, dan gerbang itu menjadi dungeon yang harus ditaklukkan bersama-sama.',
   'Setiap kali seseorang memasuki Gerbang Banjir, batas antara dua dimensi makin menipis. Kembali dengan membawa Batu Ajaib tidak masalah, tetapi jika tidak berhasil diambil, Gerbang Banjir menjadi makin kuat.',
   'Jika Gerbang Banjir tidak ditaklukkan selama 10 kali, batas antardimensi runtuh sepenuhnya dan keadaan tak terkendali. Sejak saat itu, Asosiasi memanggil bukan hanya Pemburu lokal, tetapi juga para Pemburu ternama di dunia.',
   'Mulai Gerbang Banjir tahap 11, Asosiasi menetapkannya sebagai Gerbang Dunia.',
   'Bagian dalam Gerbang Dunia jauh lebih luas daripada gerbang biasa, dan jauh lebih banyak monster muncul. Karena satu Pemburu tidak mungkin membersihkan semua area dalam waktu singkat, banyak Pemburu masuk bersama. Mengalahkan lebih banyak monster berarti mendapat lebih banyak EXP dan emas, dan terkadang menemukan harta istimewa.',
   'Penaklukan Gerbang Dunia juga bisa gagal.',
   'Jika gagal, dungeon menyadari keberadaan dunia kita dan beralih ke pertahanan. Tingkat kesulitannya naik.',
   'Gerbang Dunia ada hingga tingkat 3 (Gerbang Banjir tahap 13). Jika gerbang tahap 13 gagal ditaklukkan, sekitar gerbang itu menjadi wilayah kekuasaan dimensi musuh. Butuh usaha besar untuk merebutnya kembali.'
  ],
  th: [
   'หากไม่สามารถเคลียร์เกตที่ปรากฏในพื้นที่ได้ เกตจะเกิดน้ำหลาก สิ่งมีชีวิตจากมิติอื่นจะเริ่มรุกรานโลก นับจากนั้น สมาคมจะเปิดเผยเกตนี้ต่อฮันเตอร์ทุกคน และเกตจะกลายเป็นดันเจี้ยนที่ทุกคนต้องร่วมกันพิชิต',
   'ทุกครั้งที่เข้าเกตน้ำหลาก เส้นแบ่งระหว่างสองมิติจะยิ่งบางลง หากนำหินเวทมนตร์กลับมาได้ก็ไม่เป็นไร แต่หากเก็บกลับมาไม่ได้ เกตน้ำหลากจะยิ่งแข็งแกร่งขึ้น',
   'หากไม่สามารถพิชิตเกตน้ำหลากได้ครบ 10 ครั้ง เส้นแบ่งมิติจะพังทลายลงอย่างสิ้นเชิงจนควบคุมไม่ได้ นับจากนั้น สมาคมจะเรียกรวมพลไม่เพียงแค่ฮันเตอร์ในท้องถิ่น แต่รวมถึงฮันเตอร์ระดับแนวหน้าของโลก',
   'ตั้งแต่เกตน้ำหลากขั้นที่ 11 สมาคมจะกำหนดให้เป็นเวิลด์เกต',
   'ภายในเวิลด์เกตกว้างกว่าเกตทั่วไปมาก และมีมอนสเตอร์ปรากฏมากกว่า เนื่องจากฮันเตอร์คนเดียวไม่สามารถจัดการทุกพื้นที่ได้ในเวลาอันสั้น ฮันเตอร์จำนวนมากจึงเข้าไปพร้อมกัน ยิ่งพิชิตมอนสเตอร์ได้มาก ก็ยิ่งได้ค่าประสบการณ์และโกลด์มากขึ้น และบางครั้งยังพบสมบัติพิเศษด้วย',
   'การพิชิตเวิลด์เกตก็อาจล้มเหลวได้',
   'เมื่อล้มเหลว ดันเจี้ยนจะรับรู้ถึงการมีอยู่ของโลกฝั่งนี้และเข้าสู่การป้องกัน ความยากในการพิชิตจะสูงขึ้น',
   'เวิลด์เกตมีถึงระดับ 3 (เกตน้ำหลากขั้นที่ 13) หากพิชิตเกตขั้นที่ 13 ล้มเหลว พื้นที่รอบเกตจะตกเป็นดินแดนใต้การปกครองของมิติศัตรู การกอบกู้คืนต้องใช้ความพยายามอย่างมาก'
  ],
  ar: [
   'إذا لم تُطهَّر البوابة التي تظهر في منطقة ما، فإنها تفيض. وتبدأ كائنات من بُعد آخر في غزو الأرض. ومنذ تلك اللحظة تكشف الجمعية البوابة لجميع الصيادين، فتصبح زنزانة يجب على الجميع المشاركة في غزوها.',
   'في كل مرة يدخل فيها أحد بوابة الفيضان يرقّ الحد الفاصل بين البُعدين. لا بأس إن عدت ومعك حجر السحر، أما إن لم تستعده فإن بوابة الفيضان تزداد قوة.',
   'إذا لم تُغزَ بوابة الفيضان طوال 10 محاولات، ينهار الحد الفاصل بين الأبعاد تمامًا ويخرج الوضع عن السيطرة. ومنذ ذلك الحين تستدعي الجمعية لا صيادي المنطقة فحسب، بل أشهر الصيادين في العالم.',
   'ابتداءً من المرحلة 11 تصنّف الجمعية بوابة الفيضان على أنها بوابة عالمية.',
   'داخل البوابة العالمية أوسع بكثير من البوابة العادية وتظهر فيه وحوش أكثر بكثير. ولأن صيادًا واحدًا لا يستطيع تطهير كل المناطق في وقت قصير، يدخلها عدد كبير من الصيادين معًا. وكلما هزمت وحوشًا أكثر نلت خبرة وذهبًا أكثر، وقد تعثر أحيانًا على كنوز خاصة.',
   'قد يفشل غزو البوابة العالمية أيضًا.',
   'عند الفشل تدرك الزنزانة وجود عالمنا وتتخذ وضع الدفاع، فترتفع الصعوبة.',
   'توجد البوابات العالمية حتى الدرجة 3 (بوابة فيضان من المرحلة 13). وإذا فشل غزو بوابة المرحلة 13، تصبح المنطقة المحيطة بها تحت سيطرة البُعد المعادي، واستعادتها تتطلب جهدًا كبيرًا.'
  ]
 },

 'boss-raid': {
  ko: ['보스레이드는 실시간으로 파티를 이뤄 참여하는 전투입니다. 파티원을 모집하여 던전에 입장하며, 일반 몬스터와는 차이가 나는 보상을 획득할 수 있습니다.'],
  en: ['Boss Raid is a real-time party battle. Recruit party members to enter the dungeon and earn rewards far beyond those from regular monsters.'],
  ja: ['ボスレイドはリアルタイムでパーティーを組んで参加する戦闘です。パーティーメンバーを募集してダンジョンに入場し、一般のモンスターとは一線を画す報酬を獲得できます。'],
  'zh-Hans': ['首领突袭是实时组队参与的战斗。招募队员进入地下城，可获得与普通怪物截然不同的奖励。'],
  'zh-Hant': ['首領突襲是即時組隊參與的戰鬥。招募隊員進入地下城，可獲得與一般怪物截然不同的獎勵。'],
  de: ['Der Boss-Raid ist ein Echtzeit-Gruppenkampf. Stelle eine Gruppe zusammen, betritt den Dungeon und verdiene Belohnungen, die weit über die gewöhnlicher Monster hinausgehen.'],
  fr: ['Le Raid de boss est un combat en groupe en temps réel. Recrutez des membres, entrez dans le donjon et obtenez des récompenses bien supérieures à celles des monstres ordinaires.'],
  es: ['La Incursión de jefe es un combate en grupo en tiempo real. Recluta miembros, entra en la mazmorra y consigue recompensas muy superiores a las de los monstruos comunes.'],
  it: ['Il Raid del boss è una battaglia di gruppo in tempo reale. Recluta i membri del gruppo, entra nel dungeon e ottieni ricompense ben superiori a quelle dei mostri comuni.'],
  pt: ['O Raide de chefe é uma batalha em grupo em tempo real. Recrute membros, entre na masmorra e ganhe recompensas muito superiores às dos monstros comuns.'],
  pl: ['Rajd na bossa to walka drużynowa w czasie rzeczywistym. Zbierz drużynę, wejdź do lochu i zdobądź nagrody znacznie lepsze niż za zwykłe potwory.'],
  ru: ['Рейд на босса — это групповой бой в реальном времени. Соберите группу, войдите в подземелье и получите награды, несравнимые с наградами за обычных монстров.'],
  tr: ['Boss Baskını, gerçek zamanlı bir grup savaşıdır. Grup üyeleri toplayıp zindana girin ve sıradan canavarlardan çok daha değerli ödüller kazanın.'],
  vi: ['Raid trùm là trận chiến tham gia theo tổ đội theo thời gian thực. Chiêu mộ thành viên để vào hầm ngục và nhận phần thưởng vượt xa quái vật thông thường.'],
  id: ['Raid Bos adalah pertarungan party secara real-time. Rekrut anggota party untuk memasuki dungeon dan dapatkan hadiah yang jauh berbeda dari monster biasa.'],
  th: ['บอสเรดคือการต่อสู้แบบรวมปาร์ตี้แบบเรียลไทม์ รวบรวมสมาชิกปาร์ตี้เพื่อเข้าสู่ดันเจี้ยน และรับรางวัลที่เหนือกว่ามอนสเตอร์ทั่วไปอย่างชัดเจน'],
  ar: ['غارة الزعيم معركة جماعية في الوقت الفعلي. اجمع أعضاء فريقك وادخل الزنزانة لتحصل على مكافآت تفوق بكثير مكافآت الوحوش العادية.']
 },

 'guild': {
  ko: ['길드는 헌터들이 자신과 어울리는 동료를 찾아 모인 그룹입니다. 어떤 길드는 협회와 같은 역할을 하며, 자체 건물을 운영하고 헌터를 위한 서비스를 제공하는 등 공공기관의 역할을 수행하는 동시에, 협회가 발주하는 길드 단위 임무에 참여할 수 있습니다(길드 레이드). 또한 주기적으로 다른 길드와 친선 경기를 치르며 전투력을 키우고 전략을 공유합니다(길드전).'],
  en: ['A guild is a group of Hunters who have found companions that suit them. Some guilds take on a role like the Association\'s: running their own buildings and providing services for Hunters as a public institution would, while also taking part in guild-level missions commissioned by the Association (Guild Raids). Guilds also hold regular friendly matches with other guilds to grow their combat power and share strategies (Guild Wars).'],
  ja: ['ギルドは、ハンターたちが自分に合う仲間を求めて集まったグループです。協会のような役割を担うギルドもあり、自前の建物を運営してハンター向けのサービスを提供するなど公的機関の役割を果たしながら、協会が発注するギルド単位の任務に参加できます(ギルドレイド)。また、定期的に他のギルドと親善試合を行い、戦闘力を高め、戦略を共有します(ギルド戦)。'],
  'zh-Hans': ['公会是猎人们寻找志同道合的伙伴而组成的团体。有的公会承担着类似协会的职能：经营自己的建筑、为猎人提供服务，发挥公共机构的作用，同时还能参与协会委托的公会级任务（公会突袭）。此外，公会会定期与其他公会进行友谊赛，提升战斗力并交流战术（公会战）。'],
  'zh-Hant': ['公會是獵人們尋找志同道合的夥伴而組成的團體。有的公會承擔著類似協會的職能：經營自己的建築、為獵人提供服務，發揮公共機構的作用，同時還能參與協會委託的公會級任務（公會突襲）。此外，公會會定期與其他公會進行友誼賽，提升戰鬥力並交流戰術（公會戰）。'],
  de: ['Eine Gilde ist eine Gruppe von Jägern, die passende Gefährten gefunden haben. Manche Gilden übernehmen eine Rolle wie der Verband: Sie betreiben eigene Gebäude und bieten Jägern Dienste an wie eine öffentliche Einrichtung – und nehmen zugleich an Gildenaufträgen des Verbands teil (Gilden-Raid). Außerdem tragen sie regelmäßig Freundschaftsspiele gegen andere Gilden aus, um ihre Kampfkraft zu steigern und Strategien auszutauschen (Gildenkrieg).'],
  fr: ['Une guilde est un groupe de Chasseurs réunis autour de compagnons qui leur correspondent. Certaines guildes jouent un rôle proche de celui de l\'Association : elles gèrent leurs propres bâtiments et offrent des services aux Chasseurs comme un organisme public, tout en participant aux missions de guilde commandées par l\'Association (raid de guilde). Elles disputent aussi régulièrement des matchs amicaux contre d\'autres guildes pour renforcer leur puissance et partager leurs stratégies (guerre de guildes).'],
  es: ['Un gremio es un grupo de Cazadores que se reúnen con compañeros afines. Algunos gremios cumplen un papel similar al de la Asociación: gestionan sus propios edificios y ofrecen servicios a los Cazadores como una institución pública, a la vez que participan en misiones de gremio encargadas por la Asociación (incursión de gremio). Además, disputan con regularidad partidos amistosos contra otros gremios para aumentar su poder de combate y compartir estrategias (guerra de gremios).'],
  it: ['Una gilda è un gruppo di Cacciatori che hanno trovato compagni a loro affini. Alcune gilde svolgono un ruolo simile a quello dell\'Associazione: gestiscono edifici propri e offrono servizi ai Cacciatori come un ente pubblico, partecipando al tempo stesso alle missioni di gilda commissionate dall\'Associazione (raid di gilda). Inoltre disputano regolarmente incontri amichevoli con altre gilde per accrescere la propria potenza e condividere strategie (guerra tra gilde).'],
  pt: ['Uma guilda é um grupo de Caçadores que se reuniram com companheiros afins. Algumas guildas exercem um papel semelhante ao da Associação: administram seus próprios edifícios e oferecem serviços aos Caçadores como uma instituição pública, ao mesmo tempo em que participam de missões de guilda encomendadas pela Associação (raide de guilda). Também disputam regularmente partidas amistosas com outras guildas para aumentar o poder de combate e compartilhar estratégias (guerra de guildas).'],
  pl: ['Gildia to grupa Łowców, którzy odnaleźli pasujących do siebie towarzyszy. Niektóre gildie pełnią rolę podobną do Stowarzyszenia: prowadzą własne budynki i świadczą usługi dla Łowców jak instytucja publiczna, a jednocześnie biorą udział w misjach gildyjnych zlecanych przez Stowarzyszenie (rajd gildii). Regularnie rozgrywają też mecze towarzyskie z innymi gildiami, by zwiększać siłę bojową i wymieniać się strategiami (wojna gildii).'],
  ru: ['Гильдия — это группа Охотников, нашедших подходящих себе соратников. Некоторые гильдии выполняют роль, подобную Ассоциации: содержат собственные здания и оказывают услуги Охотникам как общественное учреждение, а также участвуют в гильдейских заданиях по заказу Ассоциации (гильдейский рейд). Кроме того, они регулярно проводят товарищеские матчи с другими гильдиями, чтобы наращивать боевую мощь и обмениваться тактикой (война гильдий).'],
  tr: ['Lonca, Avcıların kendilerine uygun yoldaşlar bularak bir araya geldiği bir gruptur. Bazı loncalar Birlik’e benzer bir rol üstlenir: kendi binalarını işletir ve bir kamu kurumu gibi Avcılara hizmet sunarken, Birlik’in verdiği lonca görevlerine de katılabilir (Lonca Baskını). Ayrıca düzenli olarak diğer loncalarla dostluk maçları yaparak savaş gücünü artırır ve stratejilerini paylaşır (Lonca Savaşı).'],
  vi: ['Bang hội là nhóm các Thợ săn tụ họp sau khi tìm được những đồng đội hợp với mình. Có những bang hội đảm nhận vai trò giống Hiệp hội: vận hành công trình riêng và cung cấp dịch vụ cho Thợ săn như một cơ quan công, đồng thời tham gia các nhiệm vụ cấp bang hội do Hiệp hội giao (Raid bang hội). Bang hội cũng định kỳ thi đấu giao hữu với các bang hội khác để nâng cao sức chiến đấu và chia sẻ chiến thuật (Bang chiến).'],
  id: ['Guild adalah kelompok Pemburu yang berkumpul setelah menemukan rekan yang cocok. Beberapa guild menjalankan peran seperti Asosiasi: mengelola bangunan sendiri dan memberikan layanan bagi Pemburu layaknya lembaga publik, sekaligus ikut serta dalam misi tingkat guild yang ditugaskan Asosiasi (Raid Guild). Guild juga rutin mengadakan pertandingan persahabatan dengan guild lain untuk meningkatkan kekuatan tempur dan berbagi strategi (Perang Guild).'],
  th: ['กิลด์คือกลุ่มของฮันเตอร์ที่มารวมตัวกันหลังจากพบเพื่อนร่วมทางที่เข้ากันได้ บางกิลด์ทำหน้าที่คล้ายสมาคม คือดูแลอาคารของตนเองและให้บริการแก่ฮันเตอร์เช่นเดียวกับหน่วยงานสาธารณะ พร้อมกันนั้นยังเข้าร่วมภารกิจระดับกิลด์ที่สมาคมมอบหมายได้ (กิลด์เรด) นอกจากนี้ยังจัดการแข่งขันกระชับมิตรกับกิลด์อื่นเป็นประจำ เพื่อเพิ่มพลังต่อสู้และแบ่งปันกลยุทธ์ (กิลด์วอร์)'],
  ar: ['النقابة مجموعة من الصيادين اجتمعوا بعد أن وجدوا رفاقًا يناسبونهم. وتؤدي بعض النقابات دورًا شبيهًا بدور الجمعية، فتدير مبانيها الخاصة وتقدّم الخدمات للصيادين كما تفعل المؤسسات العامة، وفي الوقت نفسه تشارك في مهام النقابات التي تكلّف بها الجمعية (غارة النقابة). كما تخوض بانتظام مباريات ودية مع نقابات أخرى لتعزيز قوتها القتالية وتبادل الخطط (حرب النقابات).']
 },

 'ground-stadium': {
  ko: ['지상의 스타디움은 헌터를 응원하기 위한 문화 공간입니다.', '전투에 도움이 되는 버프를 얻을 수 있고, 종종 다음 업데이트에 추가될 캐릭터를 미리 만나 볼 수도 있습니다. 스타디움에서 스포트라이트를 받아 보세요.'],
  en: ['The Ground Stadium is a cultural space for cheering on Hunters.', 'You can gain buffs that help in battle, and sometimes meet characters coming in the next update ahead of time. Step into the spotlight at the stadium.'],
  ja: ['地上スタジアムは、ハンターを応援するための文化空間です。', '戦闘に役立つバフを得られるほか、次のアップデートで追加されるキャラクターに先駆けて会えることもあります。スタジアムでスポットライトを浴びてみましょう。'],
  'zh-Hans': ['地面体育场是为猎人加油助威的文化空间。', '在这里可以获得有助于战斗的增益，有时还能抢先见到下次更新将加入的角色。来体育场沐浴聚光灯吧。'],
  'zh-Hant': ['地面體育場是為獵人加油打氣的文化空間。', '在這裡可以獲得有助於戰鬥的增益，有時還能搶先見到下次更新將加入的角色。來體育場沐浴聚光燈吧。'],
  de: ['Das Bodenstadion ist ein kultureller Ort, an dem Jäger angefeuert werden.', 'Hier erhältst du Buffs, die im Kampf helfen, und triffst manchmal schon vorab Charaktere, die mit dem nächsten Update kommen. Tritt ins Rampenlicht des Stadions.'],
  fr: ['Le Stade terrestre est un espace culturel dédié à l’encouragement des Chasseurs.', 'Vous pouvez y obtenir des buffs utiles au combat, et parfois rencontrer en avant-première les personnages de la prochaine mise à jour. Venez sous les projecteurs du stade.'],
  es: ['El Estadio terrestre es un espacio cultural para animar a los Cazadores.', 'Puedes obtener mejoras útiles para el combate y, a veces, conocer por adelantado a personajes que llegarán en la próxima actualización. Ponte bajo los focos del estadio.'],
  it: ['Lo Stadio terrestre è uno spazio culturale dedicato al tifo per i Cacciatori.', 'Qui puoi ottenere buff utili in battaglia e, a volte, incontrare in anteprima i personaggi in arrivo con il prossimo aggiornamento. Prenditi i riflettori dello stadio.'],
  pt: ['O Estádio terrestre é um espaço cultural para torcer pelos Caçadores.', 'Você pode obter buffs que ajudam no combate e, às vezes, conhecer antes da hora personagens que chegarão na próxima atualização. Receba os holofotes do estádio.'],
  pl: ['Stadion naziemny to przestrzeń kulturalna, w której kibicuje się Łowcom.', 'Można tu zdobyć buffy pomocne w walce, a czasem poznać przedpremierowo postacie z następnej aktualizacji. Stań w świetle reflektorów na stadionie.'],
  ru: ['Наземный стадион — культурное пространство, где болеют за Охотников.', 'Здесь можно получить баффы, полезные в бою, а иногда заранее встретить персонажей из следующего обновления. Окажитесь в свете прожекторов стадиона.'],
  tr: ['Kara Stadyumu, Avcıları desteklemek için bir kültür alanıdır.', 'Savaşta işe yarayan buff’lar kazanabilir, bazen bir sonraki güncellemeyle gelecek karakterlerle önceden tanışabilirsiniz. Stadyumda spot ışıklarının altına çıkın.'],
  vi: ['Sân vận động mặt đất là không gian văn hóa để cổ vũ các Thợ săn.', 'Bạn có thể nhận buff hỗ trợ chiến đấu, và đôi khi gặp trước những nhân vật sẽ ra mắt trong bản cập nhật tiếp theo. Hãy đón ánh đèn sân khấu tại sân vận động.'],
  id: ['Stadion Darat adalah ruang budaya untuk menyemangati para Pemburu.', 'Kamu bisa mendapatkan buff yang membantu dalam pertarungan, dan terkadang bertemu lebih awal dengan karakter yang akan hadir di pembaruan berikutnya. Raih sorotan di stadion.'],
  th: ['สเตเดียมภาคพื้นคือพื้นที่ทางวัฒนธรรมสำหรับเชียร์ฮันเตอร์', 'คุณสามารถรับบัฟที่ช่วยในการต่อสู้ และบางครั้งยังได้พบตัวละครที่จะเพิ่มเข้ามาในอัปเดตถัดไปก่อนใคร มารับสปอตไลต์ที่สเตเดียมกันเถอะ'],
  ar: ['الملعب الأرضي مساحة ثقافية لتشجيع الصيادين.', 'يمكنك الحصول على تعزيزات تفيدك في القتال، وأحيانًا مقابلة شخصيات التحديث القادم قبل الجميع. تقدّم إلى دائرة الضوء في الملعب.']
 },

 'airship-stadium': {
  ko: ['비공정 스타디움은 성좌들이 지켜보는 전투의 장입니다. 헌터 대 헌터 대련을 펼치고 만족스러운 전투를 보여 주면, 플레이어를 지켜보는 성좌들로부터 후원(잠재 초기화권, 스킬북, 장비 강화석 등)을 받을 수 있습니다.'],
  en: ['The Airship Stadium is an arena watched over by the Constellations. Spar Hunter against Hunter, and if you put on a satisfying fight, the Constellations watching you may offer their patronage (Potential Reset Tickets, Skill Books, Equipment Enhancement Stones, and more).'],
  ja: ['飛空艇スタジアムは、星座たちが見守る戦いの場です。ハンター同士の手合わせを行い、満足のいく戦いを見せれば、プレイヤーを見守る星座たちから後援(潜在初期化券、スキルブック、装備強化石など)を受けられます。'],
  'zh-Hans': ['飞空艇体育场是星座们注视下的战斗之地。进行猎人对猎人的切磋，若能展现令人满意的战斗，就能获得注视着玩家的星座们的赞助（潜能重置券、技能书、装备强化石等）。'],
  'zh-Hant': ['飛空艇體育場是星座們注視下的戰鬥之地。進行獵人對獵人的切磋，若能展現令人滿意的戰鬥，就能獲得注視著玩家的星座們的贊助（潛能重置券、技能書、裝備強化石等）。'],
  de: ['Das Luftschiff-Stadion ist eine Kampfarena unter den Augen der Sternbilder. Tritt Jäger gegen Jäger zum Übungskampf an – zeigst du einen überzeugenden Kampf, gewähren dir die zuschauenden Sternbilder ihre Gunst (Potenzial-Reset-Tickets, Skillbücher, Ausrüstungs-Verstärkungssteine und mehr).'],
  fr: ['Le Stade dirigeable est une arène observée par les Constellations. Affrontez d’autres Chasseurs en duel d’entraînement : si votre combat les satisfait, les Constellations qui vous observent vous accordent leur parrainage (tickets de réinitialisation de potentiel, grimoires de compétences, pierres d’amélioration d’équipement, etc.).'],
  es: ['El Estadio aeronave es un campo de batalla observado por las Constelaciones. Enfréntate a otros Cazadores en combates de práctica y, si ofreces una pelea que las satisfaga, las Constelaciones que te observan te darán su patrocinio (vales de reinicio de potencial, libros de habilidades, piedras de mejora de equipo y más).'],
  it: ['Lo Stadio aeronave è un’arena osservata dalle Costellazioni. Affronta altri Cacciatori in duelli di allenamento: se offri uno scontro che le soddisfa, le Costellazioni che ti osservano ti concederanno il loro patrocinio (buoni reset potenziale, libri delle abilità, pietre di potenziamento equipaggiamento e altro).'],
  pt: ['O Estádio aeronave é uma arena observada pelas Constelações. Enfrente outros Caçadores em duelos de treino e, se mostrar uma luta satisfatória, as Constelações que observam você oferecerão patrocínio (vales de redefinição de potencial, livros de habilidades, pedras de aprimoramento de equipamento e mais).'],
  pl: ['Stadion powietrzny to arena walk obserwowana przez Konstelacje. Toczysz sparingi Łowca kontra Łowca, a jeśli pokażesz satysfakcjonującą walkę, obserwujące cię Konstelacje obejmą cię patronatem (bilety resetu potencjału, księgi umiejętności, kamienie wzmocnienia ekwipunku i więcej).'],
  ru: ['Стадион-дирижабль — арена, за которой наблюдают Созвездия. Проводите спарринги Охотник против Охотника, и если бой придётся им по душе, наблюдающие за вами Созвездия окажут покровительство (талоны сброса потенциала, книги навыков, камни усиления снаряжения и другое).'],
  tr: ['Hava Gemisi Stadyumu, Takımyıldızların izlediği bir savaş alanıdır. Avcıya karşı Avcı idman maçları yapın; tatmin edici bir savaş sergilerseniz sizi izleyen Takımyıldızlar himayelerini sunar (Potansiyel Sıfırlama Bileti, Yetenek Kitabı, Ekipman Güçlendirme Taşı ve daha fazlası).'],
  vi: ['Sân vận động phi thuyền là đấu trường dưới sự dõi theo của các Chòm sao. Hãy giao đấu Thợ săn với Thợ săn, và nếu bạn thể hiện một trận đấu đầy thuyết phục, các Chòm sao đang dõi theo sẽ ban cho bạn sự bảo trợ (Phiếu đặt lại tiềm năng, Sách Kỹ năng, Đá Cường Hóa Trang Bị, v.v.).'],
  id: ['Stadion Kapal Udara adalah arena pertarungan yang disaksikan para Rasi Bintang. Lakukan latih tanding Pemburu lawan Pemburu, dan jika kamu menampilkan pertarungan yang memuaskan, para Rasi Bintang yang menyaksikanmu akan memberikan sokongan (Tiket Reset Potensi, Buku Skill, Batu Penguat Perlengkapan, dan lainnya).'],
  th: ['สเตเดียมเรือเหาะคือสังเวียนการต่อสู้ที่เหล่ากลุ่มดาวเฝ้ามอง ประลองฝีมือระหว่างฮันเตอร์กับฮันเตอร์ และหากแสดงการต่อสู้ที่น่าพอใจ ก็จะได้รับการอุปถัมภ์จากกลุ่มดาวที่เฝ้ามองผู้เล่นอยู่ (ตั๋วรีเซ็ตศักยภาพ หนังสือสกิล หินอัปเกรดอุปกรณ์ ฯลฯ)'],
  ar: ['ملعب المنطاد ساحة قتال تراقبها الكوكبات. خض نزالات تدريبية بين الصيادين، وإذا قدّمت قتالًا يرضيها فستمنحك الكوكبات التي تراقبك رعايتها (تذاكر إعادة تعيين الإمكانات، كتب المهارات، أحجار تحسين العتاد وغيرها).']
 }
};
