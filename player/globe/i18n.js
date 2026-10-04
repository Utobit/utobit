/* 플레이어 지구본 — 게임 제공 언어 17개 중 한국어·영어를 뺀 15개 문구(한국어·영어는 index.html 안에 있다).
   T = 화면 문구(아래 K 순서). 시스템 안내서 본문은 guide.js 에 있다.
   {n} {g} {l} = 숫자·등급·레벨 자리. 빠진 값은 영어로 대신한다. */
window.GLOBE_I18N = {
  K: ['ph', 'go', 'level', 'stat', 'power', 'hint', 'searching', 'none', 'many', 'fail', 'grade', 'country', 'guild', 'guildHq', 'view', 'noHq',
      'equip', 'noEquip', 'rankTitle', 'rankPoints', 'rankOpen', 'rankEmpty', 'trail', 'trailUnit', 'walk', 'gate', 'noTrail', 'note', 'noMap',
      'gTitle', 'gOpen', 'gEmpty', 'gNote', 'gNoteNoKey', 'gClaiming', 'gNoKey', 'gClaimed', 'gDone', 'gGone', 'gBadKey', 'gLine', 'gStage',
      'menuOpen', 'guideTitle', 'langTitle', 'stadium', 'heritage', 'firstBy'],
  NAMES: [['ko', '한국어'], ['en', 'English'], ['ja', '日本語'], ['zh-Hans', '简体中文'], ['zh-Hant', '繁體中文'], ['de', 'Deutsch'], ['fr', 'Français'],
          ['es', 'Español'], ['it', 'Italiano'], ['pt', 'Português'], ['pl', 'Polski'], ['ru', 'Русский'], ['tr', 'Türkçe'], ['vi', 'Tiếng Việt'],
          ['id', 'Bahasa Indonesia'], ['th', 'ไทย'], ['ar', 'العربية']],
  L: {
    ja: {
      T: ['ニックネームまたは #ハンター番号', '検索', 'レベル', '総ステータス', '戦闘力', 'ドラッグで回転 · ホイールで拡大', '検索中…', '該当するハンターが見つかりません。', '{n}人見つかりました。ハンターを選択してください。', 'サーバーに接続できませんでした。しばらくしてからもう一度お試しください。', '等級', '国', 'ギルド', 'ギルド本部', '位置を見る', '未設立',
          '装備中', '装備中のアイテムはありません。', 'ランキング', '攻略ポイント', 'ランキングを開く', 'まだランキングがありません。', '足跡が届いた地域', 'か所', '歩いた道', 'ゲート攻略地域', 'まだ記録がありません', '詳細ステータスは公開されません。記録は数分ごとに更新されます。', '地図を読み込めませんでした。検索はそのまま利用できます。',
          '氾濫ゲート', '氾濫ゲート一覧', '現在開いている氾濫ゲートはありません。', 'ゲートをタップすると自分のゲート一覧(レイド › 危険)に登録されます。', 'ゲーム内から地球儀を開くと、タップしたゲートが自分のゲート一覧に登録されます。', 'ゲート一覧に登録中…', 'ゲーム内から地球儀を開くとゲート一覧に登録されます。', 'ゲート一覧に登録しました。ゲームのレイド › 危険から移動できます。', '登録済み', 'すでに閉じたゲートです。', 'アカウントを確認できませんでした。ゲームから地球儀を開き直してください。', '{g}級 · Lv.{l}', '氾濫 {n}段階',
          'メニュー', 'システム案内書', '言語', 'スタジアム', '遺跡', '最初の発見者']
    },
    'zh-Hans': {
      T: ['昵称或 #猎人编号', '搜索', '等级', '总属性', '战斗力', '拖动旋转 · 滚轮缩放', '搜索中…', '未找到该猎人。', '找到 {n} 名猎人，请选择。', '无法连接服务器，请稍后再试。', '评级', '国家', '公会', '公会总部', '查看位置', '未建立',
          '已装备', '没有已装备的物品。', '排行榜', '攻略点数', '打开排行榜', '暂无排行。', '足迹所至地区', '处', '走过的路', '攻略门的地区', '暂无记录', '详细属性不公开。记录每隔几分钟更新一次。', '无法加载地图，搜索仍可使用。',
          '泛滥之门', '泛滥之门列表', '当前没有开启的泛滥之门。', '点击门即可加入我的门列表(突袭 › 危险)。', '从游戏内打开地球仪后，点击的门会加入我的门列表。', '正在加入门列表…', '从游戏内打开地球仪即可加入门列表。', '已加入门列表。可在游戏的 突袭 › 危险 中前往。', '已登记', '该门已关闭。', '无法确认账号，请从游戏中重新打开地球仪。', '{g}级 · Lv.{l}', '泛滥 {n} 阶段',
          '菜单', '系统指南', '语言', '体育场', '遗迹', '首位发现者']
    },
    'zh-Hant': {
      T: ['暱稱或 #獵人編號', '搜尋', '等級', '總能力值', '戰鬥力', '拖曳旋轉 · 滾輪縮放', '搜尋中…', '找不到該獵人。', '找到 {n} 名獵人，請選擇。', '無法連線到伺服器，請稍後再試。', '評級', '國家', '公會', '公會總部', '查看位置', '尚未建立',
          '已裝備', '沒有已裝備的物品。', '排行榜', '攻略點數', '開啟排行榜', '尚無排行。', '足跡所至地區', '處', '走過的路', '攻略門的地區', '尚無紀錄', '詳細能力值不公開。紀錄每隔幾分鐘更新一次。', '無法載入地圖，搜尋仍可使用。',
          '氾濫之門', '氾濫之門列表', '目前沒有開啟的氾濫之門。', '點擊門即可加入我的門列表(突襲 › 危險)。', '從遊戲內開啟地球儀後，點擊的門會加入我的門列表。', '正在加入門列表…', '從遊戲內開啟地球儀即可加入門列表。', '已加入門列表。可在遊戲的 突襲 › 危險 中前往。', '已登記', '該門已關閉。', '無法確認帳號，請從遊戲中重新開啟地球儀。', '{g}級 · Lv.{l}', '氾濫 {n} 階段',
          '選單', '系統指南', '語言', '體育場', '遺跡', '首位發現者']
    },
    de: {
      T: ['Spitzname oder #Jägernummer', 'Suchen', 'STUFE', 'GESAMTWERTE', 'KAMPFKRAFT', 'ZIEHEN ZUM DREHEN · SCROLLEN ZUM ZOOMEN', 'Suche…', 'Kein Jäger gefunden.', '{n} Jäger gefunden. Bitte wählen.', 'Server nicht erreichbar. Bitte später erneut versuchen.', 'Rang', 'Land', 'Gilde', 'Gilden-HQ', 'Anzeigen', 'Nicht errichtet',
          'AUSGERÜSTET', 'Nichts ausgerüstet.', 'RANGLISTE', 'RAID-PUNKTE', 'Rangliste öffnen', 'Noch keine Rangliste.', 'Erreichte Gebiete', '', 'Gegangener Weg', 'Gebiet mit Tor-Abschluss', 'Noch keine Einträge', 'Detaillierte Werte sind privat. Einträge werden alle paar Minuten aktualisiert.', 'Die Karte konnte nicht geladen werden. Die Suche funktioniert weiterhin.',
          'FLUTTORE', 'Liste der Fluttore', 'Derzeit sind keine Fluttore offen.', 'Tippe ein Tor an, um es deiner Torliste hinzuzufügen (Raid › Gefahr).', 'Öffne den Globus aus dem Spiel heraus, damit angetippte Tore in deine Torliste kommen.', 'Wird zur Torliste hinzugefügt…', 'Öffne den Globus aus dem Spiel heraus, um dieses Tor hinzuzufügen.', 'Zur Torliste hinzugefügt. Reise im Spiel über Raid › Gefahr dorthin.', 'Hinzugefügt', 'Dieses Tor ist bereits geschlossen.', 'Konto konnte nicht bestätigt werden. Öffne den Globus erneut aus dem Spiel.', 'Rang {g} · Lv.{l}', 'Flutstufe {n}',
          'Menü', 'SYSTEMHANDBUCH', 'SPRACHE', 'Stadion', 'Kulturerbe', 'Erstentdecker']
    },
    fr: {
      T: ['Pseudo ou n° de chasseur (#)', 'Rechercher', 'NIVEAU', 'STATS TOTALES', 'PUISSANCE', 'GLISSER POUR TOURNER · MOLETTE POUR ZOOMER', 'Recherche…', 'Aucun chasseur trouvé.', '{n} chasseurs trouvés. Choisissez-en un.', 'Serveur injoignable. Réessayez dans un instant.', 'Rang', 'Pays', 'Guilde', 'QG de guilde', 'Afficher', 'Non construit',
          'ÉQUIPEMENT', 'Rien d’équipé.', 'CLASSEMENT', 'POINTS DE RAID', 'Ouvrir le classement', 'Pas encore de classement.', 'Zones atteintes', '', 'Chemin parcouru', 'Zone de portail conquise', 'Aucune trace pour l’instant', 'Les stats détaillées sont privées. Les données sont actualisées toutes les quelques minutes.', 'La carte n’a pas pu être chargée. La recherche fonctionne toujours.',
          'PORTAILS EN CRUE', 'Liste des portails en crue', 'Aucun portail en crue n’est ouvert pour le moment.', 'Touchez un portail pour l’ajouter à votre liste (Raid › Danger).', 'Ouvrez le globe depuis le jeu pour ajouter les portails touchés à votre liste.', 'Ajout à votre liste…', 'Ouvrez le globe depuis le jeu pour ajouter ce portail à votre liste.', 'Ajouté à votre liste. Rendez-vous-y depuis Raid › Danger dans le jeu.', 'Ajouté', 'Ce portail est déjà fermé.', 'Compte non vérifié. Rouvrez le globe depuis le jeu.', 'Rang {g} · Niv.{l}', 'Crue, palier {n}',
          'Menu', 'GUIDE DU SYSTÈME', 'LANGUE', 'Stade', 'Site historique', 'Premier découvreur']
    },
    es: {
      T: ['Apodo o n.º de cazador (#)', 'Buscar', 'NIVEL', 'ATRIBUTOS TOTALES', 'PODER DE COMBATE', 'ARRASTRA PARA GIRAR · RUEDA PARA ACERCAR', 'Buscando…', 'No se encontró ningún cazador.', 'Se encontraron {n} cazadores. Elige uno.', 'No se pudo conectar con el servidor. Inténtalo de nuevo en un momento.', 'Rango', 'País', 'Gremio', 'Sede del gremio', 'Mostrar', 'Sin construir',
          'EQUIPADO', 'Nada equipado.', 'CLASIFICACIÓN', 'PUNTOS DE INCURSIÓN', 'Abrir clasificación', 'Aún no hay clasificación.', 'Zonas alcanzadas', '', 'Camino recorrido', 'Zona de portal superado', 'Aún no hay registros', 'Los atributos detallados son privados. Los registros se actualizan cada pocos minutos.', 'No se pudo cargar el mapa. La búsqueda sigue funcionando.',
          'PORTALES DESBORDADOS', 'Lista de portales desbordados', 'No hay portales desbordados abiertos ahora mismo.', 'Toca un portal para añadirlo a tu lista (Incursión › Peligro).', 'Abre el globo desde el juego para añadir a tu lista los portales que toques.', 'Añadiendo a tu lista…', 'Abre el globo desde el juego para añadir este portal a tu lista.', 'Añadido a tu lista. Viaja a él desde Incursión › Peligro en el juego.', 'Añadido', 'Este portal ya se ha cerrado.', 'No se pudo verificar la cuenta. Vuelve a abrir el globo desde el juego.', 'Rango {g} · Nv.{l}', 'Desborde, fase {n}',
          'Menú', 'GUÍA DEL SISTEMA', 'IDIOMA', 'Estadio', 'Sitio histórico', 'Primer descubridor']
    },
    it: {
      T: ['Nickname o n. cacciatore (#)', 'Cerca', 'LIVELLO', 'STATISTICHE TOTALI', 'POTENZA', 'TRASCINA PER RUOTARE · ROTELLA PER ZOOM', 'Ricerca…', 'Nessun cacciatore trovato.', 'Trovati {n} cacciatori. Scegline uno.', 'Impossibile raggiungere il server. Riprova tra poco.', 'Grado', 'Paese', 'Gilda', 'Sede della gilda', 'Mostra', 'Non costruita',
          'EQUIPAGGIAMENTO', 'Nessun oggetto equipaggiato.', 'CLASSIFICA', 'PUNTI RAID', 'Apri classifica', 'Ancora nessuna classifica.', 'Zone raggiunte', '', 'Percorso compiuto', 'Zona con portale superato', 'Ancora nessun dato', 'Le statistiche dettagliate sono private. I dati si aggiornano ogni pochi minuti.', 'Impossibile caricare la mappa. La ricerca funziona comunque.',
          'PORTALI STRARIPATI', 'Elenco dei portali straripati', 'Al momento non ci sono portali straripati aperti.', 'Tocca un portale per aggiungerlo al tuo elenco (Raid › Pericolo).', 'Apri il globo dal gioco per aggiungere al tuo elenco i portali toccati.', 'Aggiunta al tuo elenco…', 'Apri il globo dal gioco per aggiungere questo portale al tuo elenco.', 'Aggiunto al tuo elenco. Raggiungilo da Raid › Pericolo nel gioco.', 'Aggiunto', 'Questo portale è già chiuso.', 'Impossibile verificare l’account. Riapri il globo dal gioco.', 'Grado {g} · Lv.{l}', 'Straripamento, stadio {n}',
          'Menu', 'GUIDA DEL SISTEMA', 'LINGUA', 'Stadio', 'Sito storico', 'Primo scopritore']
    },
    pt: {
      T: ['Apelido ou n.º de caçador (#)', 'Buscar', 'NÍVEL', 'ATRIBUTOS TOTAIS', 'PODER DE COMBATE', 'ARRASTE PARA GIRAR · ROLE PARA ZOOM', 'Buscando…', 'Nenhum caçador encontrado.', '{n} caçadores encontrados. Escolha um.', 'Não foi possível conectar ao servidor. Tente novamente em instantes.', 'Classe', 'País', 'Guilda', 'Sede da guilda', 'Mostrar', 'Não construída',
          'EQUIPADO', 'Nada equipado.', 'RANKING', 'PONTOS DE RAID', 'Abrir ranking', 'Ainda não há ranking.', 'Áreas alcançadas', '', 'Caminho percorrido', 'Área de portal concluído', 'Ainda sem registros', 'Atributos detalhados são privados. Os registros são atualizados a cada poucos minutos.', 'Não foi possível carregar o mapa. A busca continua funcionando.',
          'PORTAIS TRANSBORDADOS', 'Lista de portais transbordados', 'Não há portais transbordados abertos no momento.', 'Toque em um portal para adicioná-lo à sua lista (Raid › Perigo).', 'Abra o globo de dentro do jogo para adicionar à sua lista os portais tocados.', 'Adicionando à sua lista…', 'Abra o globo de dentro do jogo para adicionar este portal à sua lista.', 'Adicionado à sua lista. Viaje até ele em Raid › Perigo no jogo.', 'Adicionado', 'Este portal já foi fechado.', 'Não foi possível verificar a conta. Reabra o globo pelo jogo.', 'Classe {g} · Nv.{l}', 'Transbordo, estágio {n}',
          'Menu', 'GUIA DO SISTEMA', 'IDIOMA', 'Estádio', 'Sítio histórico', 'Primeiro descobridor']
    },
    pl: {
      T: ['Pseudonim lub nr łowcy (#)', 'Szukaj', 'POZIOM', 'SUMA STATYSTYK', 'SIŁA BOJOWA', 'PRZECIĄGNIJ, BY OBRÓCIĆ · KÓŁKO, BY PRZYBLIŻYĆ', 'Szukanie…', 'Nie znaleziono łowcy.', 'Znaleziono łowców: {n}. Wybierz jednego.', 'Nie udało się połączyć z serwerem. Spróbuj ponownie za chwilę.', 'Ranga', 'Kraj', 'Gildia', 'Siedziba gildii', 'Pokaż', 'Nie zbudowano',
          'WYPOSAŻENIE', 'Brak założonego wyposażenia.', 'RANKING', 'PUNKTY RAJDU', 'Otwórz ranking', 'Brak rankingu.', 'Odwiedzone obszary', '', 'Przebyta droga', 'Obszar zamkniętej bramy', 'Brak zapisów', 'Szczegółowe statystyki są prywatne. Dane odświeżają się co kilka minut.', 'Nie udało się wczytać mapy. Wyszukiwanie nadal działa.',
          'BRAMY WYLEWU', 'Lista bram wylewu', 'Obecnie nie ma otwartych bram wylewu.', 'Dotknij bramy, aby dodać ją do swojej listy (Rajd › Zagrożenie).', 'Otwórz globus z poziomu gry, aby dotknięte bramy trafiały na twoją listę.', 'Dodawanie do listy…', 'Otwórz globus z poziomu gry, aby dodać tę bramę do listy.', 'Dodano do listy bram. Udaj się do niej w grze: Rajd › Zagrożenie.', 'Dodano', 'Ta brama jest już zamknięta.', 'Nie udało się zweryfikować konta. Otwórz globus ponownie z gry.', 'Ranga {g} · Poz.{l}', 'Wylew, etap {n}',
          'Menu', 'PRZEWODNIK SYSTEMU', 'JĘZYK', 'Stadion', 'Zabytek', 'Pierwszy odkrywca']
    },
    ru: {
      T: ['Ник или № охотника (#)', 'Найти', 'УРОВЕНЬ', 'СУММА ХАРАКТЕРИСТИК', 'БОЕВАЯ МОЩЬ', 'ТЯНИТЕ ДЛЯ ВРАЩЕНИЯ · КОЛЕСО ДЛЯ МАСШТАБА', 'Поиск…', 'Охотник не найден.', 'Найдено охотников: {n}. Выберите одного.', 'Не удалось связаться с сервером. Повторите попытку чуть позже.', 'Ранг', 'Страна', 'Гильдия', 'Штаб гильдии', 'Показать', 'Не построен',
          'СНАРЯЖЕНИЕ', 'Ничего не надето.', 'РЕЙТИНГ', 'ОЧКИ РЕЙДА', 'Открыть рейтинг', 'Рейтинга пока нет.', 'Достигнутые области', '', 'Пройденный путь', 'Область закрытых врат', 'Записей пока нет', 'Подробные характеристики скрыты. Данные обновляются каждые несколько минут.', 'Не удалось загрузить карту. Поиск по-прежнему работает.',
          'ВРАТА РАЗЛИВА', 'Список врат разлива', 'Сейчас открытых врат разлива нет.', 'Нажмите на врата, чтобы добавить их в свой список (Рейд › Опасность).', 'Откройте глобус из игры, чтобы нажатые врата попадали в ваш список.', 'Добавление в список…', 'Откройте глобус из игры, чтобы добавить эти врата в список.', 'Добавлено в список врат. Переместиться можно в игре: Рейд › Опасность.', 'Добавлено', 'Эти врата уже закрыты.', 'Не удалось подтвердить аккаунт. Откройте глобус из игры заново.', 'Ранг {g} · Ур.{l}', 'Разлив, стадия {n}',
          'Меню', 'РУКОВОДСТВО СИСТЕМЫ', 'ЯЗЫК', 'Стадион', 'Наследие', 'Первооткрыватель']
    },
    tr: {
      T: ['Takma ad veya #avcı numarası', 'Ara', 'SEVİYE', 'TOPLAM STAT', 'SAVAŞ GÜCÜ', 'DÖNDÜRMEK İÇİN SÜRÜKLE · YAKINLAŞTIRMAK İÇİN KAYDIR', 'Aranıyor…', 'Avcı bulunamadı.', '{n} avcı bulundu. Birini seç.', 'Sunucuya ulaşılamadı. Lütfen biraz sonra tekrar dene.', 'Derece', 'Ülke', 'Lonca', 'Lonca Merkezi', 'Göster', 'Kurulmadı',
          'KUŞANILAN', 'Kuşanılmış bir şey yok.', 'SIRALAMA', 'BASKIN PUANI', 'Sıralamayı aç', 'Henüz sıralama yok.', 'Ulaşılan bölgeler', '', 'Yürünen yol', 'Kapı temizlenen bölge', 'Henüz kayıt yok', 'Ayrıntılı statlar gizlidir. Kayıtlar birkaç dakikada bir yenilenir.', 'Harita yüklenemedi. Arama yine de çalışır.',
          'TAŞKIN KAPILARI', 'Taşkın kapısı listesi', 'Şu anda açık taşkın kapısı yok.', 'Bir kapıya dokunarak kapı listene ekle (Baskın › Tehlike).', 'Dokunduğun kapıların listene eklenmesi için küreyi oyunun içinden aç.', 'Kapı listene ekleniyor…', 'Bu kapıyı listene eklemek için küreyi oyunun içinden aç.', 'Kapı listene eklendi. Oyunda Baskın › Tehlike üzerinden oraya git.', 'Eklendi', 'Bu kapı çoktan kapandı.', 'Hesap doğrulanamadı. Küreyi oyundan yeniden aç.', '{g} Derece · Sv.{l}', 'Taşkın aşaması {n}',
          'Menü', 'SİSTEM REHBERİ', 'DİL', 'Stadyum', 'Tarihi alan', 'İlk keşfeden']
    },
    vi: {
      T: ['Biệt danh hoặc #số thợ săn', 'Tìm', 'CẤP', 'TỔNG CHỈ SỐ', 'LỰC CHIẾN', 'KÉO ĐỂ XOAY · CUỘN ĐỂ PHÓNG TO', 'Đang tìm…', 'Không tìm thấy thợ săn.', 'Tìm thấy {n} thợ săn. Hãy chọn một người.', 'Không kết nối được máy chủ. Vui lòng thử lại sau giây lát.', 'Hạng', 'Quốc gia', 'Bang hội', 'Trụ sở bang hội', 'Xem', 'Chưa xây',
          'TRANG BỊ', 'Chưa trang bị gì.', 'XẾP HẠNG', 'ĐIỂM CHINH PHỤC', 'Mở xếp hạng', 'Chưa có xếp hạng.', 'Khu vực đã đặt chân', '', 'Đường đã đi', 'Khu vực đã phá cổng', 'Chưa có ghi nhận', 'Chỉ số chi tiết không công khai. Dữ liệu được cập nhật vài phút một lần.', 'Không tải được bản đồ. Tìm kiếm vẫn dùng được.',
          'CỔNG TRÀN', 'Danh sách cổng tràn', 'Hiện không có cổng tràn nào đang mở.', 'Chạm vào cổng để thêm vào danh sách cổng của bạn (Đột kích › Nguy hiểm).', 'Mở quả địa cầu từ trong game để cổng bạn chạm được thêm vào danh sách.', 'Đang thêm vào danh sách…', 'Mở quả địa cầu từ trong game để thêm cổng này vào danh sách.', 'Đã thêm vào danh sách cổng. Di chuyển tới đó tại Đột kích › Nguy hiểm trong game.', 'Đã thêm', 'Cổng này đã đóng.', 'Không xác minh được tài khoản. Hãy mở lại quả địa cầu từ game.', 'Hạng {g} · Lv.{l}', 'Tràn cấp {n}',
          'Menu', 'CẨM NANG HỆ THỐNG', 'NGÔN NGỮ', 'Sân vận động', 'Di tích', 'Người khám phá đầu tiên']
    },
    id: {
      T: ['Nama panggilan atau #nomor hunter', 'Cari', 'LEVEL', 'TOTAL STAT', 'KEKUATAN TEMPUR', 'SERET UNTUK MEMUTAR · GULIR UNTUK ZOOM', 'Mencari…', 'Hunter tidak ditemukan.', '{n} hunter ditemukan. Pilih salah satu.', 'Tidak dapat terhubung ke server. Coba lagi sebentar lagi.', 'Peringkat', 'Negara', 'Guild', 'Markas Guild', 'Lihat', 'Belum dibangun',
          'DIPAKAI', 'Tidak ada yang dipakai.', 'PERINGKAT', 'POIN RAID', 'Buka peringkat', 'Belum ada peringkat.', 'Wilayah yang dicapai', '', 'Jalan yang dilalui', 'Wilayah gate ditaklukkan', 'Belum ada catatan', 'Stat rinci bersifat pribadi. Catatan diperbarui setiap beberapa menit.', 'Peta gagal dimuat. Pencarian tetap bisa digunakan.',
          'GATE LUAPAN', 'Daftar gate luapan', 'Saat ini tidak ada gate luapan yang terbuka.', 'Ketuk gate untuk menambahkannya ke daftar gate-mu (Raid › Bahaya).', 'Buka globe dari dalam game agar gate yang diketuk masuk ke daftar gate-mu.', 'Menambahkan ke daftar…', 'Buka globe dari dalam game untuk menambahkan gate ini ke daftarmu.', 'Ditambahkan ke daftar gate. Pergi ke sana dari Raid › Bahaya di dalam game.', 'Ditambahkan', 'Gate ini sudah tertutup.', 'Akun tidak dapat diverifikasi. Buka ulang globe dari game.', 'Peringkat {g} · Lv.{l}', 'Luapan tahap {n}',
          'Menu', 'PANDUAN SISTEM', 'BAHASA', 'Stadion', 'Situs warisan', 'Penemu pertama']
    },
    th: {
      T: ['ชื่อเล่นหรือ #หมายเลขฮันเตอร์', 'ค้นหา', 'เลเวล', 'ค่าสถานะรวม', 'พลังต่อสู้', 'ลากเพื่อหมุน · เลื่อนเพื่อซูม', 'กำลังค้นหา…', 'ไม่พบฮันเตอร์', 'พบฮันเตอร์ {n} คน โปรดเลือก', 'เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ โปรดลองใหม่อีกครั้งในอีกสักครู่', 'ระดับ', 'ประเทศ', 'กิลด์', 'ฐานกิลด์', 'ดูตำแหน่ง', 'ยังไม่ได้สร้าง',
          'อุปกรณ์ที่สวมใส่', 'ยังไม่ได้สวมใส่อุปกรณ์', 'อันดับ', 'แต้มพิชิต', 'เปิดอันดับ', 'ยังไม่มีอันดับ', 'พื้นที่ที่ไปถึง', 'แห่ง', 'เส้นทางที่เดินผ่าน', 'พื้นที่ที่พิชิตเกต', 'ยังไม่มีบันทึก', 'ค่าสถานะโดยละเอียดไม่เปิดเผย ข้อมูลอัปเดตทุกไม่กี่นาที', 'โหลดแผนที่ไม่ได้ แต่ยังค้นหาได้ตามปกติ',
          'เกตเอ่อล้น', 'รายการเกตเอ่อล้น', 'ขณะนี้ไม่มีเกตเอ่อล้นที่เปิดอยู่', 'แตะเกตเพื่อเพิ่มลงในรายการเกตของคุณ (เรด › อันตราย)', 'เปิดลูกโลกจากในเกม แล้วเกตที่แตะจะถูกเพิ่มลงในรายการเกตของคุณ', 'กำลังเพิ่มลงในรายการเกต…', 'เปิดลูกโลกจากในเกมเพื่อเพิ่มเกตนี้ลงในรายการ', 'เพิ่มลงในรายการเกตแล้ว เดินทางไปได้จาก เรด › อันตราย ในเกม', 'เพิ่มแล้ว', 'เกตนี้ปิดไปแล้ว', 'ยืนยันบัญชีไม่ได้ โปรดเปิดลูกโลกจากเกมอีกครั้ง', 'ระดับ {g} · Lv.{l}', 'เอ่อล้นขั้น {n}',
          'เมนู', 'คู่มือระบบ', 'ภาษา', 'สนามกีฬา', 'โบราณสถาน', 'ผู้ค้นพบคนแรก']
    },
    ar: {
      T: ['الاسم المستعار أو #رقم الصياد', 'بحث', 'المستوى', 'إجمالي الإحصاءات', 'قوة القتال', 'اسحب للتدوير · مرّر للتكبير', 'جارٍ البحث…', 'لم يُعثر على صياد.', 'عُثر على {n} صيادين. اختر واحدًا.', 'تعذّر الاتصال بالخادم. حاول مرة أخرى بعد قليل.', 'الرتبة', 'الدولة', 'النقابة', 'مقر النقابة', 'عرض', 'غير مُنشأ',
          'المعدات المجهزة', 'لا توجد معدات مجهزة.', 'الترتيب', 'نقاط الغارة', 'فتح الترتيب', 'لا يوجد ترتيب بعد.', 'المناطق التي وصلت إليها', '', 'الطريق المقطوع', 'منطقة بوابة مُنجزة', 'لا توجد سجلات بعد', 'الإحصاءات التفصيلية خاصة. تُحدَّث السجلات كل بضع دقائق.', 'تعذّر تحميل الخريطة. البحث ما زال يعمل.',
          'بوابات الفيضان', 'قائمة بوابات الفيضان', 'لا توجد بوابات فيضان مفتوحة الآن.', 'اضغط على بوابة لإضافتها إلى قائمة بواباتك (الغارة › خطر).', 'افتح الكرة الأرضية من داخل اللعبة لتُضاف البوابات التي تضغط عليها إلى قائمتك.', 'جارٍ الإضافة إلى القائمة…', 'افتح الكرة الأرضية من داخل اللعبة لإضافة هذه البوابة إلى قائمتك.', 'أُضيفت إلى قائمة بواباتك. انتقل إليها من الغارة › خطر داخل اللعبة.', 'أُضيفت', 'هذه البوابة أُغلقت بالفعل.', 'تعذّر التحقق من الحساب. أعد فتح الكرة الأرضية من اللعبة.', 'الرتبة {g} · Lv.{l}', 'فيضان المرحلة {n}',
          'القائمة', 'دليل النظام', 'اللغة', 'الملعب', 'موقع تراثي', 'أول مكتشف']
    }
  }
};
