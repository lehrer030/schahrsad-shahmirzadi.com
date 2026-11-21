export type Language = 'de' | 'en' | 'fa' | 'fr' | 'it' | 'tr';

export interface AwardBadge {
  id: string;
  name: string;
  year: string;
  category?: string;
  award: string;
  awardFa?: string;
  badgeImage: string;
  link: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'inline';
}

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  objectPosition?: string;
  captionDe?: string;
  captionEn?: string;
  captionFa?: string;
  externalLink?: string;
  externalLinkTextDe?: string;
  externalLinkTextEn?: string;
  externalLinkTextFa?: string;
  badgeDe?: string;
  badgeEn?: string;
  badgeFa?: string;
  locationDe?: string;
  locationEn?: string;
  locationFa?: string;
}

export interface PhotoSeries {
  id: string;
  category: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits';
  titleDe: string;
  titleEn: string;
  titleFa: string;
  titleFr?: string;
  titleIt?: string;
  titleTr?: string;
  subtitleDe: string;
  subtitleEn: string;
  subtitleFa: string;
  subtitleFr?: string;
  subtitleIt?: string;
  subtitleTr?: string;
  descriptionDe: string;
  descriptionEn: string;
  descriptionFa: string;
  descriptionFr?: string;
  descriptionIt?: string;
  descriptionTr?: string;
  personalNoteDe?: string;
  personalNoteEn?: string;
  personalNoteFa?: string;
  personalNoteFr?: string;
  personalNoteIt?: string;
  personalNoteTr?: string;
  coverImage: string;
  photos: PhotoItem[];
  badges: AwardBadge[];
}

export interface FurtherWork {
  id: string;
  themeGroup?: string;
  titleDe: string;
  titleEn: string;
  titleFa: string;
  category: string;
  categoryFa?: string;
  awardsDe: string;
  awardsEn: string;
  awardsFa: string;
  badgeNames: string[];
  badges?: AwardBadge[];
  link?: string;
  previewImage?: string;
  galleryPhotos?: PhotoItem[];
  descriptionDe?: string;
  descriptionEn?: string;
  descriptionFa?: string;
  personalNoteDe?: string;
  personalNoteEn?: string;
  personalNoteFa?: string;
}

export interface CategoryInfo {
  id: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press';
  titleDe: string;
  titleEn: string;
  titleFa: string;
  titleFr?: string;
  titleIt?: string;
  titleTr?: string;
  descriptionDe: string;
  descriptionEn: string;
  descriptionFa: string;
  descriptionFr?: string;
  descriptionIt?: string;
  descriptionTr?: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'architecture',
    titleDe: 'Architektur',
    titleEn: 'Architecture',
    titleFa: 'معماری',
    titleFr: 'Architecture',
    titleIt: 'Architettura',
    titleTr: 'Mimari',
    descriptionDe: 'Prämierte Architekturphotographien mit Schwerpunkt auf solitären Bauwerken und geometrischen Strukturen.',
    descriptionEn: 'Award-winning architectural photography focusing on solitary structures and geometric forms.',
    descriptionFa: 'عکس‌های برگزیده معماری با تمرکز بر تک‌بناها و ساختارهای هندسی.',
    descriptionFr: 'Photographies d’architecture primées mettant l’accent sur les structures solitaires et les formes géométriques.',
    descriptionIt: 'Fotografie di architettura premiate con focus su strutture solitarie e forme geometriche.',
    descriptionTr: 'Tekil yapılar ve geometrik formlara odaklanan ödüllü mimari fotoğrafçılık.'
  },
  {
    id: 'fine-art',
    titleDe: 'Fine Art',
    titleEn: 'Fine Art',
    titleFa: 'هنرهای زیبا (فاین آرت)',
    titleFr: 'Beaux-Arts',
    titleIt: 'Fine Art',
    titleTr: 'Güzel Sanatlar',
    descriptionDe: 'Photographische Arbeiten im Bereich Fine Art und Bildkomposition.',
    descriptionEn: 'Photographic works in fine art and visual composition.',
    descriptionFa: 'آثار عکاسی در حوزه هنرهای زیبا و ترکیب‌بندی تصویر.',
    descriptionFr: 'Œuvres photographiques dans le domaine des beaux-arts et de la composition visuelle.',
    descriptionIt: 'Opere fotografiche nel campo del fine art e della composizione visiva.',
    descriptionTr: 'Güzel sanatlar ve görsel kompozisyon alanında sanatsal fotoğraf çalışmaları.'
  },
  {
    id: 'social-environmental',
    titleDe: 'Gesellschaft & Umwelt',
    titleEn: 'Social & Environmental Themes',
    titleFa: 'مضامین اجتماعی و زیست‌محیطی',
    titleFr: 'Société & Environnement',
    titleIt: 'Società & Ambiente',
    titleTr: 'Toplum & Çevre',
    descriptionDe: 'Photographische Dokumentationen zu Menschenrechten, gesellschaftlichen Themen und Tierschutz.',
    descriptionEn: 'Photographic documentation on human rights, social issues, and animal welfare.',
    descriptionFa: 'مستندسازی‌های عکاسی در حوزه حقوق بشر، موضوعات اجتماعی و حمایت از حیوانات.',
    descriptionFr: 'Documentations photographiques sur les droits humains, les questions sociales et la protection animale.',
    descriptionIt: 'Documentazioni fotografiche su diritti umani, tematiche sociali e tutela degli animali.',
    descriptionTr: 'İnsan hakları, toplumsal meseleler ve hayvan hakları üzerine fotoğrafik belgesel çalışmalar.'
  },
  {
    id: 'portraits',
    titleDe: 'Porträts',
    titleEn: 'Portraits',
    titleFa: 'پرتره‌ها',
    titleFr: 'Portraits',
    titleIt: 'Ritratti',
    titleTr: 'Portreler',
    descriptionDe: 'Photographische Porträts und Selbstporträts.',
    descriptionEn: 'Photographic portraits and self-portraits.',
    descriptionFa: 'پرتره‌ها و خودنگاره‌های عکاسی.',
    descriptionFr: 'Portraits photographiques et autoportraits artistiques.',
    descriptionIt: 'Ritratti fotografici e autoritratti artistici.',
    descriptionTr: 'Fotoğrafik portreler ve sanatsal otoportreler.'
  },
  {
    id: 'biography',
    titleDe: 'Vita & Engagement',
    titleEn: 'Vita & Commitment',
    titleFa: 'زندگی‌نامه و تعهدات',
    titleFr: 'Biographie & Engagement',
    titleIt: 'Biografia & Impegno',
    titleTr: 'Biyografi & Sosyal Sorumluluk',
    descriptionDe: 'Biografie, akademischer Werdegang, sportliche Erfolge im Kickboxen und soziales Engagement.',
    descriptionEn: 'Biography, academic career, kickboxing achievements, and community engagement.',
    descriptionFa: 'زندگی‌نامه، پیشینه دانشگاهی، موفقیت‌های ورزشی در کیک‌بوکسینگ و فعالیت‌های اجتماعی.',
    descriptionFr: 'Biographie, parcours universitaire, succès sportifs en kickboxing et engagement social.',
    descriptionIt: 'Biografia, carriera accademica, successi sportivi nel kickboxing e impegno sociale.',
    descriptionTr: 'Biyografi, akademik kariyer, kickboksta dünya şampiyonlukları ve toplumsal dayanışma.'
  },
  {
    id: 'press',
    titleDe: 'Presse & Medien',
    titleEn: 'Press & Media',
    titleFa: 'رسانه‌ها و مطبوعات',
    titleFr: 'Presse & Médias',
    titleIt: 'Stampa & Media',
    titleTr: 'Basın & Medya',
    descriptionDe: 'Internationale Publikationen, Medienberichte und offizielle Auszeichnungskataloge.',
    descriptionEn: 'International publications, press features, and official award catalogues.',
    descriptionFa: 'انتشارات بین‌المللی، گزارش‌های رسانه‌ای و کتاب‌های برگزیدگان مسابقات.',
    descriptionFr: 'Publications internationales, articles de presse et catalogues officiels de concours.',
    descriptionIt: 'Pubblicazioni internazionali, articoli di stampa e cataloghi ufficiali dei concorsi.',
    descriptionTr: 'Uluslararası yayınlar, medya haberleri ve resmi ödül katalogları.'
  }
];

export const INTRO_CONTENT = {
  mainHeader: 'Photography & Art – Works · Int’l Awards',
  mainHeaderDe: 'Photographie & Kunst – Werke · Int’l Awards',
  mainHeaderFa: 'عکاسی و هنر – آثار · جوایز بین‌المللی',
  subtitleDe: 'Photographin & Bildende Künstlerin | 10-fache Kickbox-Weltmeisterin',
  subtitleEn: 'Photographer & Visual Artist | 10-Time Kickboxing World Champion',
  subtitleFa: 'عکاس و هنرمند تجسمی | ۱۰ دوره قهرمان جهان در کیک‌بوکسینگ',
  competitions: [
    'International Photography Awards (IPA) 2026',
    'Architecture MasterPrize (AMP) 2026',
    'Prix de la Perspective Architecturale (PERSPA - France) 2026',
    'Budapest International Foto Awards (BIFA) 2026',
    'URBAN Photo Awards 2026',
    'Global Lens Photography Awards (GL) 2026',
    'Architecture MasterPrize (AMP) 2025',
    'International Photography Awards (IPA) 2025',
    'ND Awards 2025',
    'Black & White Spider Awards 2025',
    'London International Creative Competition (LICC) 2025'
  ],
  competitionsDetailed: [
    { name: 'International Photography Awards (IPA) 2026', url: 'https://www.photoawards.com/' },
    { name: 'Architecture MasterPrize (AMP) 2026', url: 'https://architectureprize.com/' },
    { name: 'Prix de la Perspective Architecturale (PERSPA - France) 2026', url: 'https://perspa.fr/' },
    { name: 'Budapest International Foto Awards (BIFA) 2026', url: 'https://budapestfotoawards.com/' },
    { name: 'URBAN Photo Awards 2026', url: 'https://www.urbanphotoawards.com/' },
    { name: 'Global Lens Photography Awards (GL) 2026', url: 'https://globallensawards.com/winners-gallery/2026/architecture-photography/' },
    { name: 'Architecture MasterPrize (AMP) 2025', url: 'https://architectureprize.com/' },
    { name: 'International Photography Awards (IPA) 2025', url: 'https://www.photoawards.com/' },
    { name: 'ND Awards 2025', url: 'https://ndawards.net/' },
    { name: 'Black & White Spider Awards 2025', url: 'https://www.thespiderawards.com/' },
    { name: 'London International Creative Competition (LICC) 2025', url: 'https://licc.uk/' }
  ],
  photoCredit: 'Photo: Steve Barret',
  artistSectionTitleDe: 'Namensbedeutung »SchirZan« & Philosophie des Lichts vertiefen',
  artistSectionTitleEn: 'Artist Name SchirZan & Drawing with Light',
  artistSectionTitleFa: 'عکاسی، نام هنری و الهام‌بخش · شیرزن',
  artistNameDe: 'SchirZan | Schahrsad Shahmirzadi',
  artistNameEn: 'SchirZan | Schahrsad Shahmirzadi',
  artistNameFa: 'شیرزن | شهرزاد شاهمیرزادی',
  artistExplanationDe: `Schahrsad Shahmirzadi präsentiert ihre Photographie und Kunst gemeinsam mit ihrem Künstlernamen SchirZan. Der Name stammt aus dem Persischen und verbindet zwei Worte:

• Shir (شیر), bedeutet »Löwe«
• Zan (زن), bedeutet »Frau«

Zusammen bedeutet »SchirZan« die »Löwenfrau« oder »Löwin« und verkörpert den Mut, seinen eigenen Weg zu gehen.

Für sie steht »SchirZan« auch für das Engagement, sich für benachteiligte Menschen einzusetzen, deren Stimmen Sichtbarkeit zu verleihen und für Gerechtigkeit, Gleichberechtigung und Menschlichkeit einzutreten.

Durch Photographie kann sie einen Moment gelebter Erfahrung für die Ewigkeit bewahren – ein Gedanke, der sie jedes Mal aufs Neue bewegt.

Das Wort »Photographie« leitet sich aus dem Altgriechischen ab: φῶς, phōs (Genitiv φωτός, phōtos), was »Licht« bedeutet, und γράφειν, gráphein, was »schreiben« oder »zeichnen« bedeutet. Im übertragenen Sinne bedeutet es »Zeichnen mit Licht«.

Ihre bewusste Wahl der traditionellen deutschen Schreibweise »Photographie« mit »ph« statt »f« spiegelt diesen Ursprung wider. Durch die konsequente Beibehaltung dieser Schreibweise macht sie die Verbindung zur Geschichte des Mediums sichtbar und unterstreicht ihren Anspruch, bewusst und künstlerisch mit dem Licht zu arbeiten.`,
  artistExplanationEn: `Schahrsad Shahmirzadi presents her photography and art together with her artist name, SchirZan. The name comes from Persian and combines two words:

• Shir (شیر), meaning "lion"
• Zan (زن), meaning "woman"

Together, "SchirZan" conveys "lion-woman" or "lioness" and embodies the courage to follow one's own path.

For her, "SchirZan" also represents a commitment to standing up for disadvantaged people, bringing visibility to their voices, and advocating for justice, equality, and humanity.

Through photography, she can preserve a moment of lived experience for eternity—a thought that moves her anew each time.

The word "photography" derives from Ancient Greek: φῶς, phōs (genitive phōtos), meaning "light," and γράφειن, gráphein, meaning "to write" or "to draw." Figuratively, it means "drawing with light."

Her deliberate use of the traditional German spelling "Photographie," with "ph" rather than "f," reflects this origin. By consistently choosing this spelling, she makes the connection to the medium's history visible and emphasises her commitment to working consciously and artistically with light.`,
  artistExplanationFa: `شهزاد شاهمیرزادی آثار عکاسی و هنری خود را همراه با نام هنری «شیرزن» (SchirZan) ارائه می‌دهد. این نام اصیل از زبان فارسی برگرفته شده و از ترکیب دو واژه پدید آمده است:

• شیر (Shir)، به معنای نماد شجاعت و دلیری
• زن (Zan)، به معنای زن و آفریننده

ترکیب «شیرزن» تجلی زنی شجاع و جسور است که شهامت پیمودن مسیر مستقل و ویژه خویش را داراست.

برای او، «شیرزن» فراتر از یک نام، تعهدی عمیق در جهت ایستادگی در کنار انسان‌های کم‌برخوردار، بخشیدن صدا و دیده‌شدن به آنان و دفاع از عدالت، برابری و انسانیت است.

از دریچه عکاسی، او می‌تواند لحظه‌ای سرشار از تجربه زیسته را برای همیشه و ابدیت ثبت و ماندگار سازد — اندیشه‌ای والا که هر بار روح او را از نو به وجد می‌آورد.

واژه عکاسی (Photographie) ریشه در زبان یونانی باستان دارد: φῶς (phōs)، به معنای «نور»، و γράفειν (gráphein)، به معنای «نگاشتن یا رسم کردن». در تعبیر نمادین، این هنر به مفهوم «نقاشی و نگارش با نور» است.

انتخاب آگاهانه املای سنتی و تاریخی آلمانی «Photographie» با حروف «ph» به جای «f»، بازتابی مستقیم از این خاستگاه کهن است تا پیوند زنده با تاریخچه این رسانه همواره مشهود مانده و بر رویکرد هوشمندانه و هنرمندانه او با عنصر نور تأکید ورزد.`,
  artistExplanationFr: `Schahrsad Shahmirzadi présente sa photographie et son art sous son nom d'artiste SchirZan. Le nom provient du persan et associe deux mots :

• Shir (شیر), signifiant « lion »
• Zan (زن), signifiant « femme »

Ensemble, « SchirZan » évoque la « femme-lionne » ou « lionne » et incarne le courage d’emprunter sa propre voie et de repousser les limites.

Pour elle, « SchirZan » représente également un engagement profond à soutenir les personnes défavorisées, à donner de la visibilité à leurs voix et à défendre la justice, l'égalité et l'humanité.

À travers la photographie, elle immortalise l'expérience vécue pour l'éternité — une inspiration qui renouvelle sa passion à chaque prise de vue.

Le terme « photographie » puise son origine dans le grec ancien : φῶς (phōs), qui signifie « lumière », et γράφειν (gráphein), qui signifie « écrire » ou « dessiner ». Au sens propre comme figuré, il s'agit de « dessiner avec la lumière ».

Son choix délibéré de l'orthographe historique « Photographie » avec « ph » plutôt que « f » témoigne de cet enracinement dans l'histoire visuelle et affirme son travail exigeant et artistique avec la lumière.`,
  artistExplanationIt: `Schahrsad Shahmirzadi presenta la sua fotografia e la sua arte con il suo nome d'arte SchirZan. Il nome proviene dal persiano e unisce due parole:

• Shir (شیر), che significa «leone»
• Zan (زن), che significa «donna»

Insieme, «SchirZan» esprime la «donna-leonessa» o «leonessa», incarnando il coraggio di forgiare il proprio cammino e sfidare le convenzioni.

Per lei, «SchirZan» rappresenta anche l'impegno costante a favore dei più deboli, per dare risalto alla loro voce e sostenere la giustizia, l'uguaglianza e l'umanità.

Attraverso la fotografia, preserva per l'eternità un istante di vita vissuta — una visione che la emoziona profondamente ogni volta.

Il termine «fotografia» trae origine dal greco antico: φῶς (phōs), «luce», e γράφειν (gráphein), «scrivere» o «disegnare». In senso figurato, significa «disegnare con la luce».

La scelta accurata della grafia storica «Photographie» con «ph» anziché «f» rispecchia questa nobile genesi, rendendo tangibile il legame con la storia dell'arte visiva e celebrando la luce come materia poetica.`,
  artistExplanationTr: `Schahrsad Shahmirzadi, fotoğraf ve sanat çalışmalarını sanatçı ismi olan SchirZan çatısı altında sunmaktadır. Bu isim Farsçadan doğmuş olup iki sözcüğün birleşiminden oluşur:

• Şir (شیر), «aslan» anlamına gelir
• Zen (زن), «kadın» anlamına gelir

Birlikte «SchirZan», «dişi aslan» veya «aslan yürekli kadın» anlamına gelerek kişinin kendi bağımsız rotasını çizme cesaretini simgeler.

Sanatçı için «SchirZan», aynı zamanda toplumda dezavantajlı durumda olanların yanında durma, onların sesini görünür kılma; adalet, eşitlik ve insan onurunu savunma misyonunu temsil eder.

Fotoğraf sanatı vasıtasıyla, hayatın içinden süzülen bir deneyim ânını sonsuzluğa armağan eder — bu düşünce onun her deklanşöre basışında ruhuna ilham verir.

«Fotoğraf» (Photographie) kelimesi Antik Yunanca kökenlidir: φῶς (phōs - ışık) ve γράφειν (gráphein - yazmak veya çizmek). Mecazi derinliğiyle «ışıkla resmetmek» anlamını taşır.

Geleneksel «ph» harfleriyle «Photographie» yazımını titizlikle sürdürmesi, sanat medyumunun köklü geçmişine olan saygısını ve ışığı bilinçli bir estetik güç olarak işleme kararlılığını vurgular.`
};

export const SOLITAIRE_SERIES_1: PhotoSeries = {
  id: 'the-solitaire-as-abstraction-in-harmony-with-nature',
  category: 'architecture',
  titleDe: 'Der Solitär als Abstraktion – Im Einklang mit der Natur',
  titleEn: 'The Solitaire as Abstraction – In Harmony with Nature',
  titleFa: 'The Solitaire as Abstraction – In Harmony with Nature (تک‌بنا به مثابه انتزاع – در هماهنگی با طبیعت)',
  titleFr: 'Le Solitaire comme Abstraction – En Harmonie avec la Nature',
  titleIt: 'Il Solitario come Astrazione – In Armonia con la Natura',
  titleTr: 'Soyutlama Olarak Tek Yapı – Doğa ile Uyum İçinde',
  subtitleDe: 'Architektur · Sonstige Außenaufnahmen · 7 Werke',
  subtitleEn: 'Architecture · Other Exterior · 7 Works',
  subtitleFa: 'معماری · سازه‌های بیرونی · ۷ اثر',
  subtitleFr: 'Architecture · Autres Vues Extérieures · 7 Œuvres',
  subtitleIt: 'Architettura · Altri Esterni · 7 Opere',
  subtitleTr: 'Mimari · Diğer Dış Mekanlar · 7 Eser',
  descriptionDe: `Diese Serie transformiert eine solitäre urbane Fassade in ein abstraktes Bekenntnis zu Individualität und Harmonie mit der Natur. Jedes Bild erforscht eine andere Facette von Geometrie, Licht und Perspektive – und offenbart, wie architektonische Form mit dem Himmel und der Umgebung verschmilzt. Das Wechselspiel klarer Linien, wandernder Schatten und subtiler Reflexionen lässt den »Solitär« zwischen materieller Präzision und poetischer Abstraktion oszillieren. Durch Minimalismus und rhythmische Komposition ist der Betrachter eingeladen, nicht nur die innere Ordnung der Struktur, sondern auch ihren unerwarteten Dialog mit der natürlichen Welt zu entdecken.`,
  descriptionEn: `This series transforms a singular urban facade into an abstract statement of individuality and harmony with nature. Each image explores a different facet of geometry, light, and perspective— revealing how architectural form merges with the sky and environment. The interplay of crisp lines, shifting shadows, and subtle reflections allows the “solitaire” to oscillate between material precision and poetic abstraction. Through minimalism and rhythmic composition, the viewer is invited to discover not only the structure’s inner order but also its unexpected dialogue with the natural world.`,
  descriptionFa: `این مجموعه عکاسی، ساختار یک بنای منفرد شهری را به بیانیه‌ای انتزاعی از فردیت و هماهنگی با طبیعت بدل می‌سازد. هر اثر زاویه‌ای نو از هندسه، نور و پرسپکتیو را می‌کاود.`,
  descriptionFr: `Cette série transforme une façade urbaine solitaire en une ode abstraite à l’individualité et à l’harmonie avec la nature. Chaque photographie explore une facette distincte de la géométrie, de la lumière et du point de vue, dévoilant comment la forme architecturale fusionne avec le ciel et le paysage environnant. Le jeu subtil de lignes précises, d’ombres mouvantes et de reflets fait osciller le « solitaire » entre rigueur plastique et poésie architecturale.`,
  descriptionIt: `Questa serie trasforma una facciata urbana solitaria in un manifesto astratto di individualità e armonia con la natura. Ogni immagine esplora una sfaccettatura differente di geometria, luce e prospettiva, svelando come la forma architettonica si fonde con il cielo e l'ambiente. Il dialogo tra linee decise, ombre mobili e riflessi luminosi fa oscillare il «solitario» tra precisione materica e astrazione poetica.`,
  descriptionTr: `Bu seri, tekil bir kentsel cepheyi bireysellik ve doğayla uyumun soyut bir manifestosuna dönüştürüyor. Her kare geometri, ışık ve perspektifin farklı bir katmanını keşfederek mimari yapının gökyüzü ve çevreyle nasıl kaynaştığını açığa çıkarıyor. Keskin hatların, dinamik gölgelerin ve zarif yansımaların oyunu, «tekil yapıyı» geometrik disiplin ile şiirsel soyutlama arasında buluşturuyor.`,
  coverImage: '/images/wetransfer/solitaire_harmony_01.webp',
  badges: [
    {
      id: 'ipa-2026-hm',
      name: 'International Photography Awards 2026',
      year: '2026',
      award: 'Honorable Mention & Official Selection',
      awardFa: 'تقدیر ویژه و برگزیده رسمی',
      badgeImage: '/images/email_badges/ipa_2026_hm_ribbon.png',
      link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613449-25',
      position: 'top-left'
    },
    {
      id: 'globallens-2026-3rd',
      name: 'Global Lens Photography Awards 2026',
      year: '2026',
      award: '3rd Place · Architecture: Abstract',
      awardFa: 'مقام سوم · عکاسی معماری: انتزاعی',
      badgeImage: '/images/badges_custom/globallens_2026_3rd_place.png',
      link: 'https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/',
      position: 'top-right'
    },
    {
      id: 'amp-2025-winner',
      name: 'Architecture MasterPrize 2025',
      year: '2025',
      award: 'Student Photography Winner (Other Exterior)',
      awardFa: 'برنده جایزه عکاسی دانشجویی (معماری بیرونی)',
      badgeImage: '/images/2026_01_winners_badge-AMP-2025-768x355.webp',
      link: 'https://architectureprize.com/winners/winner.php?id=8533',
      position: 'bottom-left'
    },
    {
      id: 'perspa-2026-hm',
      name: 'Prix de la Perspective Architecturale 2026',
      year: '2026',
      award: 'Honorable Mention & Editor’s Choice',
      awardFa: 'تقدیر ویژه و انتخاب سردبیر',
      badgeImage: '/images/2026_10_perspa-awards-2026-honourable-mention-abstract-300x300.webp',
      link: 'https://perspa.fr/winners/architectural-perspective/#work-132',
      position: 'bottom-center'
    },
    {
      id: 'bifa-2026-hm',
      name: 'Budapest International Foto Awards 2026',
      year: '2026',
      award: 'Honorable Mention 2026',
      awardFa: 'تقدیر ویژه ۲۰۲۶',
      badgeImage: '/images/badges_custom/bifa_2026_hm.png',
      link: 'https://budapestfotoawards.com/',
      position: 'bottom-right'
    }
  ],
  photos: [
    {
      id: 'solitaire-harmony-01',
      src: '/images/wetransfer/solitaire_harmony_01.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature 01',
      captionDe: 'Image 01',
      captionEn: 'Image 01',
      captionFa: 'تصویر ۰۱'
    },
    {
      id: 'solitaire-harmony-02',
      src: '/images/wetransfer/solitaire_harmony_02.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature 02',
      captionDe: 'Image 02',
      captionEn: 'Image 02',
      captionFa: 'تصویر ۰۲'
    },
    {
      id: 'solitaire-harmony-03',
      src: '/images/wetransfer/solitaire_harmony_03.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature 03',
      captionDe: 'Image 03',
      captionEn: 'Image 03',
      captionFa: 'تصویر ۰۳'
    },
    {
      id: 'solitaire-harmony-04',
      src: '/images/wetransfer/solitaire_harmony_04.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature 04',
      captionDe: 'Image 04',
      captionEn: 'Image 04',
      captionFa: 'تصویر ۰۴'
    },
    {
      id: 'solitaire-harmony-05',
      src: '/images/wetransfer/solitaire_harmony_05.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature 05',
      captionDe: 'Image 05',
      captionEn: 'Image 05',
      captionFa: 'تصویر ۰۵'
    },
    {
      id: 'solitaire-harmony-06',
      src: '/images/wetransfer/solitaire_harmony_06.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature 06',
      captionDe: 'Image 06',
      captionEn: 'Image 06',
      captionFa: 'تصویر ۰۶'
    },
    {
      id: 'solitaire-harmony-07',
      src: '/images/wetransfer/solitaire_harmony_07.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature 07',
      captionDe: 'Image 07',
      captionEn: 'Image 07',
      captionFa: 'تصویر ۰۷'
    }
  ]
};

export const SOLITAIRE_SERIES_2: PhotoSeries = {
  id: 'the-solitaire-as-an-abstraction-revised',
  category: 'architecture',
  titleDe: 'Der Solitär als Abstraktion – Überarbeitete Fassung',
  titleEn: 'The Solitaire as an Abstraction (Revised)',
  titleFa: 'The Solitaire as an Abstraction (Revised) – تک‌بنا به مثابه انتزاع، نسخه بازنگری‌شده',
  titleFr: 'The Solitaire as an Abstraction (Version Révisée)',
  titleIt: 'The Solitaire as an Abstraction (Versione Revisionata)',
  titleTr: 'The Solitaire as an Abstraction (Yenilenmiş Seri)',
  subtitleDe: 'Architektur · Abstrakt · 5 Werke',
  subtitleEn: 'Architecture · Abstract · 5 Works',
  subtitleFa: 'معماری · انتزاعی · ۵ اثر',
  subtitleFr: 'Architecture · Abstrait · 5 Œuvres',
  subtitleIt: 'Architettura · Astratto · 5 Opere',
  subtitleTr: 'Mimari · Soyut · 5 Eser',
  descriptionDe: `Diese Serie wurde für IPA 2026 neu überarbeitet. Sie fängt moderne urbane Architektur im Spiel von Licht und Schatten ein. Klare Linien, geometrische Strukturen und markante Perspektiven vermitteln sowohl Energie als auch Ästhetik. Reflexionen und das Zusammenspiel von Gebäude und Himmel schaffen Tiefe und laden zum Erkunden ein, während sorgfältig gewählte Blickwinkel eine Spannung zwischen Strenge und Leichtigkeit offenbaren. Die Serie, präsentiert in verschiedenen Versionen, wurde mehrfach bei internationalen Photographie-Preisen ausgezeichnet.`,
  descriptionEn: `This series has been newly reworked for IPA 2026. It captures modern urban architecture in a play of light and shadow. Clear lines, geometric structures, and distinctive perspectives convey both energy and aesthetics. Reflections and the interplay between building and sky create depth and invite exploration, while carefully chosen angles reveal a tension between rigor and lightness. The series, presented in different versions, has been honored multiple times at international photography awards.`,
  descriptionFa: `این مجموعه برای مسابقات IPA 2026 بازنگری شده است. خطوط دقیق، تقارن و بازتاب‌های آسمان، گفت‌وگویی زنده میان معماری شهری و فضای بیکران خلق می‌کنند.`,
  descriptionFr: `Cette série a été remaniée pour l'IPA 2026. Elle capte l'architecture urbaine contemporaine dans un dialogue virtuose entre ombre et lumière. Des lignes nettes, des structures géométriques et des perspectives saisissantes expriment à la fois énergie et pureté esthétique. Les reflets et l'interaction entre l'édifice et le ciel créent une profondeur qui invite à l'exploration, tandis que les angles choisis avec rigueur révèlent une tension constante entre gravité et légèreté. Cette série a été récompensée à plusieurs reprises lors de concours photographiques internationaux majeurs.`,
  descriptionIt: `Questa serie è stata rielaborata per l'IPA 2026. Cattura l'architettura urbana moderna nel gioco di luce e ombra. Linee chiare, strutture geometriche e prospettive marcate trasmettono al contempo energia ed estetica. I riflessi e l'interazione tra edificio e cielo creano profondità e invitano all'esplorazione, mentre gli angoli attentamente scelti svelano una tensione tra rigore e leggerezza. La serie è stata più volte premiata a livello internazionale.`,
  descriptionTr: `Bu seri, IPA 2026 için özel olarak yeniden düzenlendi. Modern kentsel mimariyi ışık ve gölgenin büyüleyici oyununda yakalar. Net çizgiler, geometrik yapılar ve çarpıcı perspektifler hem enerjiyi hem de estetik zarafeti yansıtır. Yapı ile gökyüzü arasındaki yansımalar ve etkileşim, derinlik yaratarak izleyiciyi keşfe davet ederken, titizlikle seçilen açılar katı düzen ile hafiflik arasındaki gerilimi ortaya koyar. Seri, önde gelen uluslararası fotoğraf ödüllerinde defalarca ödüle layık görülmüştür.`,
  personalNoteDe: 'Persönliche Anmerkung: The Solitaire as an Abstraction entstand am Vatertag, dem 29. Mai 2025, in Berlin-Halensee und ist meinem Vater Kh. Shahmirzadi gewidmet.',
  personalNoteEn: 'Personal Note: The Solitaire as an Abstraction was created on Father’s Day, May 29, 2025, in Berlin-Halensee and is dedicated to my father, Kh. Shahmirzadi.',
  personalNoteFa: 'یادداشت و تقدیم شخصی: مجموعه The Solitaire as an Abstraction در روز پدر، ۲۹ مه ۲۰۲۵، در برلین-هالنزه‌ خلق شد و به پدرم خ. شاهمیرزادی تقدیم گردیده است.',
  personalNoteFr: 'Note personnelle : The Solitaire as an Abstraction a été créée le jour de la fête des pères, le 29 mai 2025, à Berlin-Halensee et est dédiée à mon père, Kh. Shahmirzadi.',
  personalNoteIt: 'Nota personale: The Solitaire as an Abstraction è stata creata il giorno della festa del papà, il 29 maggio 2025, a Berlino-Halensee ed è dedicata a mio padre, Kh. Shahmirzadi.',
  personalNoteTr: 'Kişisel Not: The Solitaire as an Abstraction, 29 Mayıs 2025 Babalar Günü’nde Berlin-Halensee’de çekilmiş olup sevgili babam Kh. Shahmirzadi’ye ithaf edilmiştir.',
  coverImage: '/images/series_solitaire/solitaire_revised/solitaire_revised_01.jpeg',
  badges: [
    {
      id: 'amp-2026-winner',
      name: 'Architecture MasterPrize 2026',
      year: '2026',
      award: 'Student Photography Winner 2026',
      awardFa: 'برنده جایزه عکاسی دانشجویی ۲۰۲۶',
      badgeImage: '/images/2026_10_winners_badge-AMP-2026-768x355.webp',
      link: 'https://architectureprize.com/winners/winner.php?id=10332',
      position: 'top-right'
    },
    {
      id: 'perspa-2026-2nd',
      name: 'Prix de la Perspective Architecturale 2026',
      year: '2026',
      award: 'Second Prize (Abstract Architecture)',
      awardFa: 'جایزه دوم (معماری انتزاعی)',
      badgeImage: '/images/docx_badges/perspa_2026_second_prize_abstract.jpeg',
      link: 'https://perspa.fr/winners/architectural-perspective/#work-412',
      position: 'bottom-left'
    },
    {
      id: 'ipa-2026-os',
      name: 'International Photography Awards 2026',
      year: '2026',
      award: 'Official Selection (Non-Professional)',
      awardFa: 'برگزیده رسمی بخش غیرحرفه‌ای',
      badgeImage: '/images/docx_badges/ipa_2026_official_selection_rose.png',
      link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722617898-26',
      position: 'bottom-right'
    }
  ],
  photos: [
    {
      id: 'solitaire-revised-01',
      src: '/images/series_solitaire/solitaire_revised/solitaire_revised_01.jpeg',
      alt: 'The Solitaire as an Abstraction (Revised) 01',
      captionDe: 'Image 01',
      captionEn: 'Image 01',
      captionFa: 'تصویر ۰۱'
    },
    {
      id: 'solitaire-revised-02',
      src: '/images/series_solitaire/solitaire_revised/solitaire_revised_02.jpeg',
      alt: 'The Solitaire as an Abstraction (Revised) 02',
      captionDe: 'Image 02',
      captionEn: 'Image 02',
      captionFa: 'تصویر ۰۲'
    },
    {
      id: 'solitaire-revised-03',
      src: '/images/series_solitaire/solitaire_revised/solitaire_revised_03.jpeg',
      alt: 'The Solitaire as an Abstraction (Revised) 03',
      captionDe: 'Image 03',
      captionEn: 'Image 03',
      captionFa: 'تصویر ۰۳'
    },
    {
      id: 'solitaire-revised-04',
      src: '/images/series_solitaire/solitaire_revised/solitaire_revised_04.jpeg',
      alt: 'The Solitaire as an Abstraction (Revised) 04',
      captionDe: 'Image 04',
      captionEn: 'Image 04',
      captionFa: 'تصویر ۰۴'
    },
    {
      id: 'solitaire-revised-05',
      src: '/images/series_solitaire/solitaire_revised/solitaire_revised_05.jpeg',
      alt: 'The Solitaire as an Abstraction (Revised) 05',
      captionDe: 'Image 05',
      captionEn: 'Image 05',
      captionFa: 'تصویر ۰۵'
    }
  ]
};

export const FURTHER_WORKS_ARCHITECTURE: FurtherWork[] = [
  {
    id: 'echoes-water-tower',
    titleDe: 'Echoes of a Water Tower',
    titleEn: 'Echoes of a Water Tower',
    titleFa: 'Echoes of a Water Tower (پژواک برج آب)',
    category: 'Architecture & Fine Art',
    categoryFa: 'معماری و هنرهای زیبا',
    awardsDe: 'IPA 2026 — Honorable Mention & Official Selection · AMP 2026 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    awardsEn: 'IPA 2026 — Honorable Mention & Official Selection · AMP 2026 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    awardsFa: 'IPA 2026 — تقدیر و برگزیده رسمی · AMP 2026 — تقدیر ویژه · PERSPA 2026 — تقدیر ویژه',
    badgeNames: ['IPA 2026 HM', 'AMP 2026 HM', 'PERSPA 2026 HM'],
    badges: [
      {
        id: 'amp-echoes',
        name: 'Architecture MasterPrize 2026',
        award: 'Student Photography · Honorable Mention',
        year: '2026',
        badgeImage: '/images/badges_custom/amp_2026_student_hm.png',
        position: 'top-left',
        link: 'https://architectureprize.com/'
      },
      {
        id: 'perspa-echoes',
        name: 'PERSPA 2026',
        award: 'Black and White · Honorable Mention',
        year: '2026',
        badgeImage: '/images/badges_custom/perspa_2026_bw_hm.png',
        position: 'bottom-left',
        link: 'https://architectureperspectiveawards.com/'
      },
      {
        id: 'ipa-echoes',
        name: 'IPA 2026',
        award: 'Architecture · Honorable Mention',
        year: '2026',
        badgeImage: '/images/badges_custom/ipa_2026_hm_new.png',
        position: 'bottom-right',
        link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26'
      }
    ],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26',
    descriptionDe: 'Diese Photographie zeigt einen historischen Wasserturm, der, obwohl deutlich erkennbar, nur als reine Spiegelung in der Glasfassade des Bahnhofs erscheint und mit den vorbeiziehenden Wolken verschmilzt. Die Wolken steigen hinter der Fassade wie Dampf auf, hüllen Turm und Gebäude ein und schaffen ein völlig neues Bild. In diesem flüchtigen Zusammenspiel von Licht und Architektur stellt das Werk still die Frage, wo die Wirklichkeit liegt: im physischen Turm selbst oder in diesem wandelbaren Bild aus Glas, Reflexion und aufsteigendem »Dampf«?',
    descriptionEn: 'This photograph shows a historic water tower that, although clearly recognisable, appears only as a pure reflection in the glass façade of the station, merging with the passing clouds. The clouds rise behind the façade like steam, enveloping tower and building and creating an image that seems entirely new. In this fleeting interplay of light and architecture, the work quietly raises the question of where reality lies: in the physical tower itself, or in this shifting image of glass, reflection, and rising “steam”?',
    descriptionFa: 'این عکس بازتاب برج آب تاریخی را در نمای شیشه‌ای ایستگاه نشان می‌دهد که با ابرهای گذرنده درمی‌آمیزد و تصویری نو و استعاری پدید می‌آورد.',
    previewImage: '/images/wetransfer/echoes_water_tower_01.webp',
    galleryPhotos: [
      {
        id: 'echoes-water-tower-01',
        src: '/images/wetransfer/echoes_water_tower_01.webp',
        alt: 'Echoes of a Water Tower',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'architectural-piano',
    titleDe: 'Architectural Piano',
    titleEn: 'Architectural Piano',
    titleFa: 'Architectural Piano (پیانوی معماری)',
    category: 'Architecture / Abstract',
    categoryFa: 'معماری / انتزاعی',
    awardsDe: 'AMP 2026 — HM · IPA 2026 — Official Selection · Black & White Spider Awards 2025 — HM & Nominee · LICC 2025 — Official Selection',
    awardsEn: 'AMP 2026 — HM · IPA 2026 — Official Selection · Black & White Spider Awards 2025 — HM & Nominee · LICC 2025 — Official Selection',
    awardsFa: 'AMP 2026 — تقدیر · IPA 2026 — برگزیده رسمی · Spider Awards 2025 — نامزد و تقدیر · LICC 2025 — برگزیده رسمی',
    badgeNames: ['AMP 2026 HM', 'IPA 2026 OS', 'Spider Awards 2025 HM', 'LICC 2025 OS'],
    badges: [

      {
            "id": "amp-architectural-piano",
            "name": "Architecture MasterPrize 2026",
            "award": "Student Photography · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/amp_2026_student_hm.png",
            "position": "top-left",
            "link": "https://architectureprize.com/"
      },
      {
            "id": "spider-architectural-piano",
            "name": "Black & White Spider Awards 2025",
            "award": "Spider Awards 2025 · Honorable Mention & Nominee",
            "year": "2025",
            "badgeImage": "/images/2025_12_spiderfellow20thwinner-150x150.webp",
            "position": "bottom-left",
            "link": "https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=653&fid=309239"
      },
      {
            "id": "ipa-architectural-piano",
            "name": "IPA 2026",
            "award": "Architecture · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722613457-25"
      },
      {
            "id": "licc-architectural-piano",
            "name": "LICC 2025",
            "award": "London International Creative Competition · Official Selection",
            "year": "2025",
            "badgeImage": "/images/docx_badges/licc_2025_official_selection.png",
            "position": "top-right",
            "link": "http://www.licc.uk/winners/winner.php?id=2-37822-25&OS=true"
      }
],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613457-25',
    descriptionDe: 'Diese Serie abstrahiert eine moderne Fassade, deren vertikale Fenster wie die Tasten eines Pianos wirken. Rhythmus, Wiederholung und die präzise Ausrichtung der Fensterachsen erzeugen eine kraftvolle grafische Partitur, die die Struktur einer musikalischen Komposition widerspiegelt. Jedes Photo erforscht Geometrie, Licht und Schatten mit akribischer Kontrolle, während Schwarz-Weiß die Tonwertkontraste intensiviert und jede Nuance der Form offenbart. Das Gebäude wird zu visueller Musik – ein architektonisches Piano, das den Betrachter einlädt, die Resonanz der Stadt in Linien, Flächen und Variationen zu spüren und eine gewöhnliche Fassade in eine fesselnde musikalische Komposition verwandelt.',
    descriptionEn: 'This series abstracts a modern facade, where vertical windows appear like the keys of a piano. Rhythm, repetition, and the precise alignment of window axes create a powerful graphic score, echoing the structure of a musical composition. Each photo explores geometry, light, and shadow with meticulous control, while black & white intensify tonal contrasts and reveal every nuance of form. The building becomes visual music—an architectural piano that invites viewers to sense the city’s resonance in lines, surfaces, and variations, transforming an ordinary facade into a compelling musical composition.',
    descriptionFa: 'این مجموعه نمای مدرن یک ساختمان را انتزاع می‌کند؛ نوارهای عمودی پنجره‌ها همچون کلاویه‌های پیانو ضرب‌آهنگ یک پارتیتور بصری را خلق می‌کنند.',
    previewImage: '/images/wetransfer/architectural_piano_01.webp',
    galleryPhotos: [
      {
        id: 'architectural-piano-01',
        src: '/images/wetransfer/architectural_piano_01.webp',
        alt: 'Architectural Piano 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'architectural-piano-02',
        src: '/images/wetransfer/architectural_piano_02.webp',
        alt: 'Architectural Piano 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'architectural-piano-03',
        src: '/images/wetransfer/architectural_piano_03.webp',
        alt: 'Architectural Piano 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'architectural-piano-04',
        src: '/images/wetransfer/architectural_piano_04.webp',
        alt: 'Architectural Piano 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'elegance-of-structure-bw',
    themeGroup: 'elegance-of-structure',
    titleDe: 'Elegance of Structure – Black and White',
    titleEn: 'Elegance of Structure – Black and White',
    titleFa: 'Elegance of Structure – Black and White (شکوه ساختار – سیاه و سفید)',
    category: 'Architecture / Interior B&W',
    categoryFa: 'معماری / فضای داخلی سیاه و سفید',
    awardsDe: 'PERSPA 2026 — Editor’s Choice · AMP 2026 — HM (Interior Details) · BIFA 2026 — HM · IPA 2026 — Official Selection',
    awardsEn: 'PERSPA 2026 — Editor’s Choice · AMP 2026 — HM (Interior Details) · BIFA 2026 — HM · IPA 2026 — Official Selection',
    awardsFa: 'PERSPA 2026 — انتخاب سردبیر · AMP 2026 — تقدیر · BIFA 2026 — تقدیر · IPA 2026 — برگزیده رسمی',
    badgeNames: ['PERSPA Editor’s Choice', 'AMP 2026 HM', 'BIFA 2026 HM', 'IPA 2026 OS'],
    badges: [

      {
            "id": "amp-elegance-of-structure-bw",
            "name": "Architecture MasterPrize 2026",
            "award": "Student Photography · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/amp_2026_student_hm.png",
            "position": "top-left",
            "link": "https://architectureprize.com/"
      },
      {
            "id": "bifa-elegance-of-structure-bw",
            "name": "BIFA 2026",
            "award": "Budapest International Foto Awards · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/bifa_2026_hm.png",
            "position": "top-left",
            "link": "https://budapestfotoawards.com/"
      },
      {
            "id": "ipa-elegance-of-structure-bw",
            "name": "IPA 2026",
            "award": "Architecture · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722624977-26"
      }
],
    link: 'https://perspa.fr/2026/architectural-perspective/elegance-of-structure-black-and-white-2/',
    descriptionDe: 'Diese Photographie zeigt das Interieur der Griechischen Nationaloper in Athen, wo Licht, Materialien und Raumrhythmus präzise harmonieren. Architektur und Design verschmelzen zu einer geometrischen Komposition, in der Glasflächen, schlanke Säulen und sorgfältig durchdachte Details das Foyer in eine Bühne für Licht, Perspektive und Bewegung verwandeln. Dieser Raum übte eine geradezu magnetische Anziehungskraft auf mich aus und bleibt bis heute das eindrucksvollste Beispiel für Innenarchitektur, das ich je erlebt habe.',
    descriptionEn: 'This photograph shows the interior of the Greek National Opera in Athens, where light, materials, and spatial rhythm are precisely harmonised. Architecture and design merge into a geometric composition in which glass surfaces, slender columns, and carefully considered details transform the foyer into a stage for light, perspective, and movement. This space exerted a magnetic pull on me and remains, to this day, the most compelling example of interior architecture I have ever experienced.',
    descriptionFa: 'این عکس فضای داخلی اپرای ملی یونان در آتن را به تصویر می‌کشد که در آن نور، مصالح و ریتم فضایی پیوندی هماهنگ و چشم‌نواز پدید آورده‌اند.',
    previewImage: '/images/wetransfer/elegance_structure_bw_01.webp',
    galleryPhotos: [
      {
        id: 'elegance-structure-bw-01',
        src: '/images/wetransfer/elegance_structure_bw_01.webp',
        alt: 'Elegance of Structure – Black and White',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'elegance-of-structure-color',
    themeGroup: 'elegance-of-structure',
    titleDe: 'Elegance of Structure – An Interior Symphony of Light, Forms and Lines',
    titleEn: 'Elegance of Structure – An Interior Symphony of Light, Forms and Lines',
    titleFa: 'Elegance of Structure – سمفونی درونی نور، فرم‌ها و خطوط',
    category: 'Architecture / Interior Color',
    categoryFa: 'معماری / فضای داخلی رنگی',
    awardsDe: 'IPA 2026 — Official Selection · AMP 2026 — Honorable Mention',
    awardsEn: 'IPA 2026 — Official Selection · AMP 2026 — Honorable Mention',
    awardsFa: 'IPA 2026 — برگزیده رسمی · AMP 2026 — تقدیر ویژه',
    badgeNames: ['IPA 2026 OS', 'AMP 2026 HM'],
    badges: [

      {
            "id": "amp-elegance-of-structure-color",
            "name": "Architecture MasterPrize 2026",
            "award": "Student Photography · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/amp_2026_student_hm.png",
            "position": "top-left",
            "link": "https://architectureprize.com/"
      },
      {
            "id": "ipa-elegance-of-structure-color",
            "name": "IPA 2026",
            "award": "Architecture · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722613460-25"
      }
],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613460-25',
    descriptionDe: 'Diese Photographien zeigen das Interieur der Griechischen Nationaloper in Athen, wo Licht, Materialien und Raumrhythmus präzise harmonieren. Architektur und Design verschmelzen zu geometrischen Kompositionen, in denen Glasflächen, schlanke Säulen und sorgfältig durchdachte Details das Foyer in eine Bühne für Licht, Perspektive und Bewegung verwandeln. Diese Räume übten eine geradezu magnetische Anziehungskraft auf mich aus und bleiben bis heute die faszinierendsten Beispiele für Innenarchitektur, die ich je erlebt habe.',
    descriptionEn: 'These photographs show the interior of the Greek National Opera in Athens, where light, materials, and spatial rhythm are precisely harmonised. Architecture and design merge into geometric compositions in which glass surfaces, slender columns, and carefully considered details transform the foyer into a stage for light, perspective, and movement. These spaces exerted a magnetic pull on me and remain, to this day, the most compelling examples of interior architecture I have ever experienced.',
    descriptionFa: 'این عکس‌ها فضای داخلی اپرای ملی یونان را در ترکیب‌بندی‌های هندسی رنگی، سطوح شیشه‌ای و ریتم باشکوه خطوط و نور ثبت می‌کنند.',
    previewImage: '/images/wetransfer/elegance_symphony_01.webp',
    galleryPhotos: [
      {
        id: 'elegance-interior-01',
        src: '/images/wetransfer/elegance_symphony_01.webp',
        alt: 'Elegance of Structure – Symphony of Light 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'elegance-interior-02',
        src: '/images/wetransfer/elegance_symphony_02.webp',
        alt: 'Elegance of Structure – Symphony of Light 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'elegance-interior-03',
        src: '/images/wetransfer/elegance_symphony_03.webp',
        alt: 'Elegance of Structure – Symphony of Light 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'elegance-interior-04',
        src: '/images/wetransfer/elegance_symphony_04.webp',
        alt: 'Elegance of Structure – Symphony of Light 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'cloud-mirror-architecture-i',
    themeGroup: 'cloud-mirror',
    titleDe: 'Cloud Mirror Architecture I: Heaven’s Bridge',
    titleEn: 'Cloud Mirror Architecture I: Heaven’s Bridge',
    titleFa: 'Cloud Mirror Architecture I: Heaven’s Bridge (معماری آینه ابرها ۱: پل بهشت)',
    category: 'Architecture / Exterior',
    categoryFa: 'معماری / سازه‌های بیرونی',
    awardsDe: 'AMP 2026 — Honorable Mention',
    awardsEn: 'AMP 2026 — Honorable Mention',
    awardsFa: 'AMP 2026 — تقدیر ویژه',
    badgeNames: ['AMP 2026 HM'],
    badges: [

      {
            "id": "amp-cloud-mirror-architecture-i",
            "name": "Architecture MasterPrize 2026",
            "award": "Student Photography · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/amp_2026_student_hm.png",
            "position": "top-left",
            "link": "https://architectureprize.com/"
      }
],
    link: 'https://architectureprize.com/winners/winner.php?id=14719&mode=hm&compID=12821',
    descriptionDe: '»Cloud Mirror Architecture I: Heaven’s Bridge« zeigt moderne Architektur, die sich wie eine Brücke zwischen Stadt und Himmel erhebt. Wolkenspiegelungen in der Glasfassade schaffen einen kontinuierlichen visuellen Dialog zwischen Atmosphäre und gebauter Struktur. In einer Photographie wirkt die Architektur wie eine Himmelstreppe, während im letzten Bild die gewählte Perspektive einen geraden Weg in eine sanfte Kurve verwandelt und die Raumwahrnehmung subtil verschiebt. Die Serie erforscht die Spiegelung von Architektur und Wolken als Brücke zwischen Stadt und Himmel. Gewidmet Steve Barret.',
    descriptionEn: '“Cloud Mirror Architecture I: Heaven’s Bridge” shows a piece of modern architecture that itself seems to rise like a bridge between city and sky. Reflections of clouds in the glass façade create a continuous visual dialogue between atmosphere and built structure. In one photograph, the architecture appears like a stairway to heaven, while in the final photograph the chosen perspective turns a straight path into a gentle curve, subtly shifting spatial perception. The series explores the mirroring of architecture and clouds as a bridge between city and sky. Dedicated to Steve Barret.',
    descriptionFa: '«معماری آینه ابرها ۱: پل بهشت» پیوندی میان آسمان و شهر پدید می‌آورد و بازتاب ابرها در نمای شیشه‌ای، گفت‌وگویی مدام با سازه ایجاد می‌کند. تقدیم به استیو بارت.',
    personalNoteDe: 'Persönliche Widmung: Gewidmet Steve Barret.',
    personalNoteEn: 'Personal Note: Dedicated to Steve Barret.',
    personalNoteFa: 'تقدیر شخصی: تقدیم شده به استیو بارت.',
    previewImage: '/images/wetransfer/cloud_mirror_i_01.webp',
    galleryPhotos: [
      {
        id: 'cloud-mirror-i-01',
        src: '/images/wetransfer/cloud_mirror_i_01.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-i-02',
        src: '/images/wetransfer/cloud_mirror_i_02.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-i-03',
        src: '/images/wetransfer/cloud_mirror_i_03.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-i-04',
        src: '/images/wetransfer/cloud_mirror_i_04.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-i-05',
        src: '/images/wetransfer/cloud_mirror_i_05.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-i-06',
        src: '/images/wetransfer/cloud_mirror_i_06.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 06',
        captionDe: 'Image 06',
        captionEn: 'Image 06',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-i-07',
        src: '/images/wetransfer/cloud_mirror_i_07.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 07',
        captionDe: 'Image 07',
        captionEn: 'Image 07',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'cloud-mirror-architecture-ii',
    themeGroup: 'cloud-mirror',
    titleDe: 'Cloud Mirror Architecture II: Stormy Sea (Black & White)',
    titleEn: 'Cloud Mirror Architecture II: Stormy Sea (Black & White)',
    titleFa: 'Cloud Mirror Architecture II: Stormy Sea (B&W) (دریای طوفانی)',
    category: 'Architecture / Exterior B&W',
    categoryFa: 'معماری / سازه‌های بیرونی سیاه و سفید',
    awardsDe: 'AMP 2026 — Honorable Mention',
    awardsEn: 'AMP 2026 — Honorable Mention',
    awardsFa: 'AMP 2026 — تقدیر ویژه',
    badgeNames: ['AMP 2026 HM'],
    badges: [

      {
            "id": "amp-cloud-mirror-architecture-ii",
            "name": "Architecture MasterPrize 2026",
            "award": "Student Photography · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/amp_2026_student_hm.png",
            "position": "top-left",
            "link": "https://architectureprize.com/"
      }
],
    link: 'https://architectureprize.com/winners/winner.php?id=14704&mode=hm&compID=12821',
    descriptionDe: 'In »Cloud Mirror Architecture II: Stormy Sea (B&W)« erzeugen Reflexionen und architektonische Formen die Präsenz eines Schiffes. Eine gekippte Perspektive verwandelt die Fassade in ein stürmisches Meer: Ein schiffsähnlicher Bug schneidet in einen turbulenten Himmel, die Glasfläche fängt unruhige Wolkenspiegelungen wie Wellen ein, Fensterreihen erinnern an Bullaugen und ein abschließendes Photo deutet einen Hafen an. Die Serie erforscht, wie Glasarchitektur und ihre gespiegelte Umgebung zu einem Schiff werden, das durch ein stürmisches Meer aus Himmel, Licht und Wolken zieht – und verschiebt die Wahrnehmung von einem statischen Bauwerk zu einem reisenden Objekt. Meiner Mutter gewidmet.',
    descriptionEn: 'In “Cloud Mirror Architecture II: Stormy Sea (B&W)”, reflections and architectural forms create the presence of a ship. A tilted perspective turns the façade into a stormy sea: a ship-like bow cuts into a turbulent sky, the glass surface catching restless cloud reflections like waves, rows of windows evoke portholes, and a final photograph suggests a harbour. The series explores how glass architecture and its mirrored surroundings become a vessel moving through a stormy sea of sky, light and clouds, shifting perception from static structure to travelling object. Dedicated to my mother.',
    descriptionFa: 'در بخش دوم «دریای طوفانی»، بازتاب‌ها و فرم‌های معماری حس حضور یک کشتی را در تلاطم امواج و ابرها تداعی می‌کنند. با تمام عشق تقدیم به مادرم.',
    personalNoteDe: 'Persönliche Widmung: Meiner Mutter gewidmet.',
    personalNoteEn: 'Personal Note: Dedicated to my mother.',
    personalNoteFa: 'تقدیر شخصی: با عشق تقدیم به مادرم.',
    previewImage: '/images/wetransfer/cloud_mirror_ii_bw_01.webp',
    galleryPhotos: [
      {
        id: 'cloud-mirror-ii-bw-01',
        src: '/images/wetransfer/cloud_mirror_ii_bw_01.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (B&W) 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-ii-bw-02',
        src: '/images/wetransfer/cloud_mirror_ii_bw_02.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (B&W) 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-ii-bw-03',
        src: '/images/wetransfer/cloud_mirror_ii_bw_03.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (B&W) 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-ii-bw-04',
        src: '/images/wetransfer/cloud_mirror_ii_bw_04.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (B&W) 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'cloud-mirror-ii-bw-05',
        src: '/images/wetransfer/cloud_mirror_ii_bw_05.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (B&W) 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'mirrored-single',
    themeGroup: 'mirrored',
    titleDe: 'Mirrored',
    titleEn: 'Mirrored',
    titleFa: 'Mirrored (بازتاب)',
    category: 'Architecture / Single Shot',
    categoryFa: 'معماری / تک عکس',
    awardsDe: 'IPA 2026 — Honorable Mention & Official Selection',
    awardsEn: 'IPA 2026 — Honorable Mention & Official Selection',
    awardsFa: 'IPA 2026 — تقدیر ویژه و برگزیده رسمی',
    badgeNames: ['IPA 2026 HM'],
    badges: [

      {
            "id": "ipa-mirrored-single",
            "name": "IPA 2026",
            "award": "Architecture · Honorable Mention & Official Selection",
            "year": "2026",
            "badgeImage": "/images/badges_custom/ipa_2026_hm_new.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722624747-26"
      }
],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722624747-26',
    descriptionDe: 'Die Spiegelung transformiert die Geometrie der Architektur und verwandelt die Uferfassade in eine fast meditative Komposition. Das Photo spielt mit der Wahrnehmung, indem Wasser und Himmel nahezu vertauscht wirken und den Betrachter einladen zu hinterfragen, was festes Bauwerk und was Reflexion ist.',
    descriptionEn: 'The mirroring transforms the geometry of the architecture, turning the riverside façade into an almost meditative composition. The photograph plays with perception, as water and sky appear almost reversed, inviting the viewer to question what is solid and what is reflection.',
    descriptionFa: 'بازتاب، هندسه معماری را دگرگون می‌سازد و نمای کرانه آب را به ترکیبی آرامش‌بخش بدل می‌کند.',
    previewImage: '/images/wetransfer/mirrored_01.webp',
    galleryPhotos: [
      {
        id: 'mirrored-single-01',
        src: '/images/wetransfer/mirrored_01.webp',
        alt: 'Mirrored',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'mirrored-ii',
    themeGroup: 'mirrored',
    titleDe: 'Mirrored II',
    titleEn: 'Mirrored II',
    titleFa: 'Mirrored II (بازتاب ۲)',
    category: 'Architecture / Urban Landscape',
    categoryFa: 'معماری / چشم‌انداز شهری',
    awardsDe: 'AMP 2026 — Honorable Mention',
    awardsEn: 'AMP 2026 — Honorable Mention',
    awardsFa: 'AMP 2026 — تقدیر ویژه',
    badgeNames: ['AMP 2026 HM'],
    badges: [

      {
            "id": "amp-mirrored-ii",
            "name": "Architecture MasterPrize 2026",
            "award": "Student Photography · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/amp_2026_student_hm.png",
            "position": "top-left",
            "link": "https://architectureprize.com/"
      }
],
    link: 'https://architectureprize.com/winners/winner.php?id=14661&mode=hm&compID=12821',
    descriptionDe: 'Entlang der Uferpromenade spiegelt sich die Architektur in einer ruhigen Wasseroberfläche, wo Wasser, Himmel und Wolken eine klare Symmetrieachse zwischen Stadt und Atmosphäre bilden. »Mirrored II« offenbart die Beziehung zwischen gebautem Raum, Fassadenrhythmus und Baumreihen, bis Architektur und Reflexion mit dem Himmel zu einer fast grafischen, symmetrischen Struktur verschmelzen.',
    descriptionEn: 'Along the waterfront promenade, the architecture is reflected in a calm water surface where water, sky and clouds form a clear axis of symmetry between the city and the atmospheric space. „Mirrored II” reveals the relationship between built space, façade rhythm and repeating tree lines, until architecture and its reflection on the calm water surface merge with the sky into an almost graphic, symmetrical structure.',
    descriptionFa: 'در امتداد تفرجگاه ساحلی، معماری در آبی آرام منعکس می‌شود و محور تقارنی شفاف میان شهر و ابرها می‌آفریند.',
    previewImage: '/images/wetransfer/mirrored_ii_01.webp',
    galleryPhotos: [
      {
        id: 'mirrored-ii-01',
        src: '/images/wetransfer/mirrored_ii_01.webp',
        alt: 'Mirrored II',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'mirrored-iii-bw',
    themeGroup: 'mirrored',
    titleDe: 'Mirrored III (Black & White)',
    titleEn: 'Mirrored III (Black & White)',
    titleFa: 'Mirrored III (Black & White) (بازتاب ۳ سیاه و سفید)',
    category: 'Architecture / B&W',
    categoryFa: 'معماری / سیاه و سفید',
    awardsDe: 'AMP 2026 — Honorable Mention',
    awardsEn: 'AMP 2026 — Honorable Mention',
    awardsFa: 'AMP 2026 — تقدیر ویژه',
    badgeNames: ['AMP 2026 HM'],
    badges: [

      {
            "id": "amp-mirrored-iii-bw",
            "name": "Architecture MasterPrize 2026",
            "award": "Student Photography · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/amp_2026_student_hm.png",
            "position": "top-left",
            "link": "https://architectureprize.com/"
      }
],
    link: 'https://architectureprize.com/winners/winner.php?id=14725&mode=hm&compID=12821',
    descriptionDe: 'Entlang der Uferpromenade wird Architektur zum zentralen Motiv: Ihre klare Fassadenstruktur und der Rhythmus der Fenster spiegeln sich nahezu nahtlos im ruhigen Wasser wider. In Schwarz-Weiß gehalten, konzentriert sich »Mirrored III (Black & White)« auf die gebaute Form und ihre Spiegelung. Tonwertkontraste, Baumasse, vertikale Linien und strukturelle Details verschmelzen zu einer symmetrischen Komposition, in der das Wasser das Gebäude nicht nur spiegelt, sondern eigenständig erweitert.',
    descriptionEn: 'Along the waterfront promenade, architecture becomes the central motif: its clear façade structure and the rhythm of its windows are reflected almost seamlessly in the calm water. Presented in black and white, “Mirrored III (Black & White)” focuses on the built form and its reflection in the water. Tonal contrasts, architectural mass, vertical lines and structural details coalesce into an almost complete, symmetrical composition in which the water not only reflects the building but independently extends it.',
    descriptionFa: 'در نسخه سیاه‌وسفید «بازتاب ۳»، تقابل پرمایه سایه‌روشن‌ها و خطوط عمودی، حجم ساختمان را به وسعت آب پیوند می‌دهد.',
    previewImage: '/images/wetransfer/mirrored_iii_bw_01.webp',
    galleryPhotos: [
      {
        id: 'mirrored-iii-bw-01',
        src: '/images/wetransfer/mirrored_iii_bw_01.webp',
        alt: 'Mirrored III (Black & White)',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'black-red-gold',
    titleDe: 'Black Red Gold – Office of the Federal President of Germany',
    titleEn: 'Black Red Gold – Office of the Federal President of Germany',
    titleFa: 'Black Red Gold – Office of the Federal President of Germany (سیاه سرخ طلایی)',
    category: 'Architecture / Exterior',
    categoryFa: 'معماری / سازه‌های بیرونی',
    awardsDe: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsEn: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsFa: 'AMP 2026 — تقدیر ویژه سازه‌های بیرونی',
    badgeNames: ['AMP 2026 HM'],
    badges: [

      {
            "id": "amp-black-red-gold",
            "name": "Architecture MasterPrize 2026",
            "award": "Student Photography · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/amp_2026_student_hm.png",
            "position": "top-left",
            "link": "https://architectureprize.com/"
      }
],
    link: 'https://architectureprize.com/',
    descriptionDe: 'Schwarz, Rot und Gold spiegeln sich in der Architektur des Bundespräsidialamtes in Berlin wider. Meine Serie übersetzt dies in eine abstrakte photographische Sequenz, entstanden unter demokratischen Bedingungen. Ausschnitte offenbaren die Vielfalt des Amtes durch Farbe. Trotz Überwachungskameras begann ich das Projekt mit Mut. Die Bundespolizei überprüfte kurz meine Arbeit und erkannte sie als Architekturphotographie an. Aus Respekt vor Sicherheitsbedenken stellte ich das Photographieren ein. Die Kontrolle war respektvoll – ein Tribut an die Demokratie! Alle Photographien sind unbearbeitet.',
    descriptionEn: 'Black, red, and gold are reflected in the architecture of the Federal President’s Office in Berlin. My series translates this into an abstract photographic sequence, created under democratic conditions. Excerpts reveal the diversity of the office through color. Despite surveillance cameras, I began the project with courage. The federal police briefly checked my work and recognized it as architectural photography. Out of respect for security concerns, I stopped photographing. The control was respectful—a tribute to democracy! All photographs are unedited.',
    descriptionFa: 'رنگ‌های سیاه، سرخ و طلایی در معماری دفتر ریاست‌جمهوری فدرال در برلین بازتاب یافته‌اند. این مجموعه ادای احترامی به دموکراسی و شفافیت مدنی است.',
    previewImage: '/images/wetransfer/black_red_gold_01.webp',
    galleryPhotos: [
      {
        id: 'black-red-gold-01',
        src: '/images/wetransfer/black_red_gold_01.webp',
        alt: 'Black Red Gold – Office of the Federal President 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'black-red-gold-02',
        src: '/images/wetransfer/black_red_gold_02.webp',
        alt: 'Black Red Gold – Office of the Federal President 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'black-red-gold-03',
        src: '/images/wetransfer/black_red_gold_03.webp',
        alt: 'Black Red Gold – Office of the Federal President 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'black-red-gold-04',
        src: '/images/wetransfer/black_red_gold_04.webp',
        alt: 'Black Red Gold – Office of the Federal President 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'black-red-gold-05',
        src: '/images/wetransfer/black_red_gold_05.webp',
        alt: 'Black Red Gold – Office of the Federal President 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      },
      {
        id: 'black-red-gold-06',
        src: '/images/wetransfer/black_red_gold_06.webp',
        alt: 'Black Red Gold – Office of the Federal President 06',
        captionDe: 'Image 06',
        captionEn: 'Image 06',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'hephaestus-legacy',
    titleDe: 'Hephaestus’ Legacy',
    titleEn: 'Hephaestus’ Legacy',
    titleFa: 'Hephaestus’ Legacy (میراث هفائستوس)',
    category: 'Architecture / Historic',
    categoryFa: 'معماری / تاریخی',
    awardsDe: 'PERSPA 2026 — Editor’s Choice · BIFA 2026 — Honorable Mention · IPA 2026 — Official Selection',
    awardsEn: 'PERSPA 2026 — Editor’s Choice · BIFA 2026 — Honorable Mention · IPA 2026 — Official Selection',
    awardsFa: 'PERSPA 2026 — انتخاب سردبیر · BIFA 2026 — تقدیر ویژه · IPA 2026 — برگزیده رسمی',
    badgeNames: ['PERSPA Editor’s Choice', 'BIFA 2026 HM', 'IPA 2026 OS'],
    badges: [

      {
            "id": "bifa-hephaestus-legacy",
            "name": "BIFA 2026",
            "award": "Budapest International Foto Awards · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/bifa_2026_hm.png",
            "position": "top-left",
            "link": "https://budapestfotoawards.com/"
      },
      {
            "id": "ipa-hephaestus-legacy",
            "name": "IPA 2026",
            "award": "Architecture · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722626529-26"
      }
],
    link: 'https://perspa.fr/2026/season-1-architectural-perspective/hephaestus-legacy-3/',
    descriptionDe: 'Der Hephaistos-Tempel ist dem Gott der Schmiede und des Feuers geweiht – ein Werk der Architektur reich an Symbolik und Handwerkskunst. Diese Serie stellt die Säulen ins Zentrum, wie sie Licht und Schatten in den Raum ziehen und Stärke sowie Kraft widerspiegeln. So entsteht ein visueller Dialog zwischen antiker Technik, mythologischer Inspiration und der zeitlosen Schönheit der Steinarchitektur.',
    descriptionEn: 'The Temple of Hephaistos is dedicated to the god of blacksmiths and fire—a work of architecture rich in symbolism and craftsmanship. This series places its columns at the center as they draw light and shadow into the space, reflecting strength and power. In doing so, a visual dialogue emerges between ancient technique, mythological inspiration, and the timeless beauty of stone architecture.',
    descriptionFa: 'معبد هفائستوس، وقف خدای صنعتگری و آتش؛ این مجموعه ستون‌های کهن را در گفت‌وگوی ابدی نور و سایه به تصویر می‌کشد.',
    previewImage: '/images/wetransfer/hephaestus_legacy_01.webp',
    galleryPhotos: [
      {
        id: 'hephaestus-01',
        src: '/images/wetransfer/hephaestus_legacy_01.webp',
        alt: 'Hephaestus’ Legacy 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'hephaestus-02',
        src: '/images/wetransfer/hephaestus_legacy_02.webp',
        alt: 'Hephaestus’ Legacy 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'hephaestus-03',
        src: '/images/wetransfer/hephaestus_legacy_03.webp',
        alt: 'Hephaestus’ Legacy 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'hephaestus-04',
        src: '/images/wetransfer/hephaestus_legacy_04.webp',
        alt: 'Hephaestus’ Legacy 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'hephaestus-05',
        src: '/images/wetransfer/hephaestus_legacy_05.webp',
        alt: 'Hephaestus’ Legacy 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'steps-of-sustainability',
    titleDe: 'Steps of Sustainability',
    titleEn: 'Steps of Sustainability',
    titleFa: 'Steps of Sustainability (پله‌های پایداری)',
    category: 'Architecture / Sustainable Design',
    categoryFa: 'معماری / طراحی پایدار',
    awardsDe: 'AMP 2025 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    awardsEn: 'AMP 2025 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    awardsFa: 'AMP 2025 — تقدیر ویژه · PERSPA 2026 — تقدیر ویژه',
    badgeNames: ['AMP 2025 HM', 'PERSPA 2026 HM'],
    badges: [

      {
            "id": "amp-2025-steps-of-sustainability",
            "name": "Architecture MasterPrize 2025",
            "award": "Student Photography · Honorable Mention",
            "year": "2025",
            "badgeImage": "/images/docx_badges/amp_2025_student_hm_orange.png",
            "position": "top-left",
            "link": "https://architectureprize.com/winners/winner.php?id=12441&mode=hm&compID=12816"
      },
      {
            "id": "perspa-steps-of-sustainability",
            "name": "PERSPA 2026",
            "award": "Stairs · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/docx_badges/perspa_2026_hm_stairs.png",
            "position": "bottom-left",
            "link": "https://perspa.fr/winners/architectural-perspective/#work-152"
      }
],
    link: 'https://architectureprize.com/winners/winner.php?id=12441&mode=hm&compID=12816',
    descriptionDe: 'Diese Serie transformiert das Treppenhaus des Ministeriums für Landwirtschaft, Umwelt und Klimaschutz (MLUK/MLEUV) des Landes Brandenburg in Potsdam in ein Paradigma nachhaltiger Architektur: Meditative Kompositionen visualisieren ökologische Verantwortung, ressourceneffizientes Bauen und architektonische Innovation. Übergänge und Brailleschrift-Details betonen das Bewusstsein für Inklusion, Klimaschutz und Wandel.',
    descriptionEn: 'This series transforms the stairwell of the Ministry of Agriculture, Food, Environment and Consumer Protection (MLEUV) of the State of Brandenburg in Potsdam into a paradigm of sustainable architecture: Meditative compositions visualize ecological responsibility, resource-efficient construction, and architectural innovation. Transitions and Braille detail highlight the impact on environmental awareness, social inclusion, and climate action. Each step represents ecological, economic, and social change in our society toward a better world.',
    descriptionFa: 'این مجموعه پلکان وزارت محیط زیست براندنبورگ در پوتسدام را به الگویی از معماری پایدار و فراگیر بدل می‌سازد.',
    previewImage: '/images/wetransfer/steps_sustainability_01.webp',
    galleryPhotos: [
      {
        id: 'steps-sustainability-01',
        src: '/images/wetransfer/steps_sustainability_01.webp',
        alt: 'Steps of Sustainability 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'steps-sustainability-02',
        src: '/images/wetransfer/steps_sustainability_02.webp',
        alt: 'Steps of Sustainability 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'steps-sustainability-03',
        src: '/images/wetransfer/steps_sustainability_03.webp',
        alt: 'Steps of Sustainability 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'steps-sustainability-04',
        src: '/images/wetransfer/steps_sustainability_04.webp',
        alt: 'Steps of Sustainability 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'steps-sustainability-05',
        src: '/images/wetransfer/steps_sustainability_05.webp',
        alt: 'Steps of Sustainability 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      },
      {
        id: 'steps-sustainability-06',
        src: '/images/wetransfer/steps_sustainability_06.webp',
        alt: 'Steps of Sustainability 06',
        captionDe: 'Image 06',
        captionEn: 'Image 06',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'dimensions-of-sustainability',
    titleDe: 'Dimensions of Sustainability',
    titleEn: 'Dimensions of Sustainability',
    titleFa: 'Dimensions of Sustainability (ابعاد پایداری)',
    category: 'Architecture / Abstract',
    categoryFa: 'معماری / انتزاعی',
    awardsDe: 'IPA 2026 — Official Selection',
    awardsEn: 'IPA 2026 — Official Selection',
    awardsFa: 'IPA 2026 — برگزیده رسمی',
    badgeNames: ['IPA 2026 OS'],
    badges: [

      {
            "id": "ipa-dimensions-of-sustainability",
            "name": "IPA 2026",
            "award": "Architecture · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722613455-25"
      }
],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613455-25',
    descriptionDe: '»Dimensions of Sustainability« entstand im Treppenhaus des Umweltministeriums in Brandenburg. Die abstrakte Serie erforscht Licht, Schatten und Materialien wie Stahl und Holz und verwandelt alltägliche Durchgänge in meditative Kompositionen. Inspiriert vom UN-Konzept der drei Dimensionen der Nachhaltigkeit – ökologisch, ökonomisch und sozial – repräsentiert jedes Photo eine Säule und macht gewöhnliche Strukturen zu Symbolen gemeinsamer Verantwortung.',
    descriptionEn: '“Dimensions of Sustainability” was created in the stairwell of the Environment Ministry in Brandenburg. The abstract series explores light, shadow, and materials such as steel and wood, transforming everyday passageways into meditative compositions. Inspired by the UN concept of three dimensions of sustainability—ecological, economic, and social—each photo represents one pillar and turns ordinary structures into symbols of shared responsibility.',
    descriptionFa: '«ابعاد پایداری» در پلکان وزارت محیط زیست براندنبورگ خلق شده و با الهام از سه بعد پایداری سازمان ملل، عناصر را به نمادهای مسئولیت مشترک بدل می‌کند.',
    previewImage: '/images/wetransfer/dimensions_sustainability_01.webp',
    galleryPhotos: [
      {
        id: 'dimensions-sustainability-01',
        src: '/images/wetransfer/dimensions_sustainability_01.webp',
        alt: 'Dimensions of Sustainability 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'dimensions-sustainability-02',
        src: '/images/wetransfer/dimensions_sustainability_02.webp',
        alt: 'Dimensions of Sustainability 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'dimensions-sustainability-03',
        src: '/images/wetransfer/dimensions_sustainability_03.webp',
        alt: 'Dimensions of Sustainability 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'razor-pull-berlin',
    titleDe: 'Razor Pull Berlin',
    titleEn: 'Razor Pull Berlin',
    titleFa: 'Razor Pull Berlin (ریزر پول برلین)',
    category: 'Architecture / Exterior',
    categoryFa: 'معماری / سازه‌های بیرونی',
    awardsDe: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsEn: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsFa: 'AMP 2026 — تقدیر ویژه',
    badgeNames: ['AMP 2026 HM'],
    badges: [

      {
            "id": "amp-razor-pull-berlin",
            "name": "Architecture MasterPrize 2026",
            "award": "Student Photography · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/amp_2026_student_hm.png",
            "position": "top-left",
            "link": "https://architectureprize.com/"
      }
],
    link: 'https://architectureprize.com/winners/winner.php?id=14703&mode=hm&compID=12821',
    descriptionDe: '»Razor Pull Berlin« verdichtet ein gewöhnliches städtisches Straßenbild zu einem fast abstrakten visuellen Raum. Durch extreme Perspektiven konvergieren Straßenlaternen, Glasfassaden und Klinkerstrukturen zu einer eigenständigen Architekturwahrnehmung, wobei die Glasfassade selbst wie eine Klinge erscheint. Die Serie zieht den Betrachter in einen subtilen, hypnotischen Sog. »Razor Pull Berlin« lädt dazu ein, die Stadt neu zu entdecken und die stille, markante Schönheit ihrer abstrakten Geometrie zu erkennen.',
    descriptionEn: '“Razor Pull Berlin” condenses an ordinary urban streetscape into an almost abstract visual space. Through extreme perspectives, streetlights, glass facades and brick structures converge into a distinct perception of architecture, the glass facade itself appearing as a blade. The series draws the viewer into a subtle yet hypnotic pull. The circular lamp detaches from its function, becoming an abstract plane that fuses with the surrounding buildings. “Razor Pull Berlin” invites us to rediscover the city and recognize the quiet, striking beauty of its abstract geometry.',
    descriptionFa: '«کشش تیغ برلین» چشم‌انداز خیابانی شهر را به میدانی انتزاعی تبدیل می‌کند که در آن شیشه‌ها، آجرها و چراغ‌ها در پرسپکتیوی گیرا به هم می‌پیوندند.',
    previewImage: '/images/wetransfer/razor_pull_berlin_01.webp',
    galleryPhotos: [
      {
        id: 'razor-pull-01',
        src: '/images/wetransfer/razor_pull_berlin_01.webp',
        alt: 'Razor Pull Berlin 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'razor-pull-02',
        src: '/images/wetransfer/razor_pull_berlin_02.webp',
        alt: 'Razor Pull Berlin 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'razor-pull-03',
        src: '/images/wetransfer/razor_pull_berlin_03.webp',
        alt: 'Razor Pull Berlin 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'razor-pull-04',
        src: '/images/wetransfer/razor_pull_berlin_04.webp',
        alt: 'Razor Pull Berlin 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'razor-pull-05',
        src: '/images/wetransfer/razor_pull_berlin_05.webp',
        alt: 'Razor Pull Berlin 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      },
      {
        id: 'razor-pull-06',
        src: '/images/wetransfer/razor_pull_berlin_06.webp',
        alt: 'Razor Pull Berlin 06',
        captionDe: 'Image 06',
        captionEn: 'Image 06',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'fragments-of-memory',
    titleDe: 'Fragments of Memory – Fragments of Time',
    titleEn: 'Fragments of Memory – Fragments of Time',
    titleFa: 'Fragments of Memory – Fragments of Time (خرده‌های خاطره - خرده‌های زمان)',
    category: 'Architecture / Historic',
    categoryFa: 'معماری / تاریخی',
    awardsDe: 'IPA 2026 — Official Selection',
    awardsEn: 'IPA 2026 — Official Selection',
    awardsFa: 'IPA 2026 — برگزیده رسمی',
    badgeNames: ['IPA 2026 OS'],
    badges: [

      {
            "id": "ipa-fragments-of-memory",
            "name": "IPA 2026",
            "award": "Architecture · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722613512-25"
      }
],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613512-25',
    descriptionDe: 'Die Kaiser-Wilhelm-Gedächtniskirche ist ein einzigartiger Ort der Erinnerung im Herzen Berlins. Ihr Ruinenturm erinnert an die Schrecken des Krieges, während die nach dem Anschlag von 2016 eingeführten Eingangssperren Schutz in einer offenen, aber verwundbaren Stadt symbolisieren. Dennoch strahlt die Kirche Schönheit aus: Historische Bausubstanz, leuchtende Mosaike und moderne Architektur verbinden Vergangenheit und Gegenwart. Menschen aus aller Welt versammeln sich hier in Momenten des Gedenkens, der Freude und der Hoffnung – ein lebendiges Symbol unserer Zeit.',
    descriptionEn: 'The Kaiser Wilhelm Memorial Church is a unique place of remembrance in the heart of Berlin. Its ruined tower recalls the horrors of war, while the entrance barriers introduced after the 2016 attack symbolize protection in an open yet vulnerable city. Still, the church radiates beauty: historic fabric, glowing mosaics and modern architecture connect past and present. People from all over the world gather here in moments of remembrance, joy and hope – a living symbol of our time.',
    descriptionFa: 'کلیسای یادبود قیصر ویلهلم یادمانی بی‌همتا در قلب برلین است؛ برجی ویران که وحشت جنگ را بازمی‌نماید و نماد همبستگی و امید است.',
    previewImage: '/images/wetransfer/fragments_of_memory_01.webp',
    galleryPhotos: [
      {
        id: 'fragments-01',
        src: '/images/wetransfer/fragments_of_memory_01.webp',
        alt: 'Fragments of Memory – Fragments of Time 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'fragments-02',
        src: '/images/wetransfer/fragments_of_memory_02.webp',
        alt: 'Fragments of Memory – Fragments of Time 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'fragments-03',
        src: '/images/wetransfer/fragments_of_memory_03.webp',
        alt: 'Fragments of Memory – Fragments of Time 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'fragments-04',
        src: '/images/wetransfer/fragments_of_memory_04.webp',
        alt: 'Fragments of Memory – Fragments of Time 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'fragments-05',
        src: '/images/wetransfer/fragments_of_memory_05.webp',
        alt: 'Fragments of Memory – Fragments of Time 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'symmetric-networks',
    titleDe: 'Symmetric Networks',
    titleEn: 'Symmetric Networks',
    titleFa: 'Symmetric Networks (شبکه‌های متقارن)',
    category: 'Architecture / Other',
    categoryFa: 'معماری / سایر',
    awardsDe: 'IPA 2026 — Official Selection',
    awardsEn: 'IPA 2026 — Official Selection',
    awardsFa: 'IPA 2026 — برگزیده رسمی',
    badgeNames: ['IPA 2026 OS'],
    badges: [

      {
            "id": "ipa-symmetric-networks",
            "name": "IPA 2026",
            "award": "Architecture · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722613543-25"
      }
],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613543-25',
    descriptionDe: 'Im weiteren Kontext eines pädagogischen Außenraums verwandelt sich ein Spielplatz-Klettergerüst in eine Studie über Symmetrie, Rhythmus und räumliche Spannung – eine Form von »Spielarchitektur«, in der Gitter und Verbindungspunkte ein Netzwerk aus Ordnung und Bewegung schaffen. Durch Wiederholungen und radiale Verbindungen wird ein Nutzobjekt zu einem abstrakten Diagramm von Gleichgewicht und Fluss.',
    descriptionEn: 'Within the wider context of an educational exterior, a playground climbing frame transforms into a study of symmetry, rhythm, and spatial tension — a form of “play architecture” in which grids and junctions create a network of order and movement. Through repeating patterns and radial connections, a utilitarian object becomes an abstract diagram of balance and flow, prompting reflection on the invisible frameworks that shape our perception of space and on how designed outdoor learning environments quietly teach structure, orientation and connectivity.',
    descriptionFa: 'در محوطه بیرونی یک مرکز آموزشی، اسکلت یک وسیله بازی به مطالعه‌ای ژرف در باب تقارن، ریتم و تنش فضایی بدل می‌شود.',
    previewImage: '/images/wetransfer/symmetric_networks_01.webp',
    galleryPhotos: [
      {
        id: 'symmetric-01',
        src: '/images/wetransfer/symmetric_networks_01.webp',
        alt: 'Symmetric Networks 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'symmetric-02',
        src: '/images/wetransfer/symmetric_networks_02.webp',
        alt: 'Symmetric Networks 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'symmetric-03',
        src: '/images/wetransfer/symmetric_networks_03.webp',
        alt: 'Symmetric Networks 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'symmetric-04',
        src: '/images/wetransfer/symmetric_networks_04.webp',
        alt: 'Symmetric Networks 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'symmetric-05',
        src: '/images/wetransfer/symmetric_networks_05.webp',
        alt: 'Symmetric Networks 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      },
      {
        id: 'symmetric-06',
        src: '/images/wetransfer/symmetric_networks_06.webp',
        alt: 'Symmetric Networks 06',
        captionDe: 'Image 06',
        captionEn: 'Image 06',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'solitaire-revised-licc',
    themeGroup: 'solitaire-2025',
    titleDe: 'The Solitaire as an Abstraction (Revised)',
    titleEn: 'The Solitaire as an Abstraction (Revised)',
    titleFa: 'The Solitaire as an Abstraction (Revised)',
    category: 'Architecture / Abstract',
    categoryFa: 'معماری / انتزاعی',
    awardsDe: 'LICC 2025 — Shortlist',
    awardsEn: 'LICC 2025 — Shortlist',
    awardsFa: 'LICC 2025 — فهرست کوتاه (Shortlisted)',
    badgeNames: ['LICC 2025 Shortlisted'],
    badges: [
      {
        id: 'licc-revised',
        name: 'London International Creative Competition 2025',
        award: 'Shortlist',
        year: '2025',
        badgeImage: '/images/docx_badges/licc_2025_shortlist.png',
        position: 'top-left',
        link: 'https://www.licc.uk/winners/winner.php?id=125857'
      }
    ],
    link: 'https://www.licc.uk/winners/winner.php?id=125857',
    descriptionDe: 'Internationale Auszeichnung bei den London International Creative Competition (LICC 2025) für die überarbeitete Fassung der Solitär-Serie.',
    descriptionEn: 'International recognition at London International Creative Competition (LICC 2025) for the revised edition of the Solitaire series.',
    descriptionFa: 'برگزیده رسمی در رقابت بین‌المللی خلاقیت لندن LICC 2025 برای نسخه بازنگری‌شده تک‌بنا.',
    previewImage: '/images/series_solitaire/solitaire_revised/solitaire_revised_01.jpeg',
    galleryPhotos: [
      { id: 'solitaire-revised-licc-01', src: '/images/series_solitaire/solitaire_revised/solitaire_revised_01.jpeg', alt: 'The Solitaire as an Abstraction (Revised) 01', captionDe: 'Image 01', captionEn: 'Image 01', captionFa: 'تک‌بنا به مثابه انتزاع (نسخه بازنگری‌شده) ۰۱' },
      { id: 'solitaire-revised-licc-02', src: '/images/series_solitaire/solitaire_revised/solitaire_revised_02.jpeg', alt: 'The Solitaire as an Abstraction (Revised) 02', captionDe: 'Image 02', captionEn: 'Image 02', captionFa: 'تک‌بنا به مثابه انتزاع (نسخه بازنگری‌شده) ۰۲' },
      { id: 'solitaire-revised-licc-03', src: '/images/series_solitaire/solitaire_revised/solitaire_revised_03.jpeg', alt: 'The Solitaire as an Abstraction (Revised) 03', captionDe: 'Image 03', captionEn: 'Image 03', captionFa: 'تک‌بنا به مثابه انتزاع (نسخه بازنگری‌شده) ۰۳' },
      { id: 'solitaire-revised-licc-04', src: '/images/series_solitaire/solitaire_revised/solitaire_revised_04.jpeg', alt: 'The Solitaire as an Abstraction (Revised) 04', captionDe: 'Image 04', captionEn: 'Image 04', captionFa: 'تک‌بنا به مثابه انتزاع (نسخه بازنگری‌شده) ۰۴' },
      { id: 'solitaire-revised-licc-05', src: '/images/series_solitaire/solitaire_revised/solitaire_revised_05.jpeg', alt: 'The Solitaire as an Abstraction (Revised) 05', captionDe: 'Image 05', captionEn: 'Image 05', captionFa: 'تک‌بنا به مثابه انتزاع (نسخه بازنگری‌شده) ۰۵' },
      { id: 'solitaire-revised-licc-06', src: '/images/series_solitaire/solitaire_revised/solitaire_revised_06.jpeg', alt: 'The Solitaire as an Abstraction (Revised) 06', captionDe: 'Image 06', captionEn: 'Image 06', captionFa: 'تک‌بنا به مثابه انتزاع (نسخه بازنگری‌شده) ۰۶' },
      { id: 'solitaire-revised-licc-07', src: '/images/series_solitaire/solitaire_revised/solitaire_revised_07.jpeg', alt: 'The Solitaire as an Abstraction (Revised) 07', captionDe: 'Image 07', captionEn: 'Image 07', captionFa: 'تک‌بنا به مثابه انتزاع (نسخه بازنگری‌شده) ۰۷' }
    ]
  },
  {
    id: 'solitaire-new-perspectives',
    themeGroup: 'solitaire-2025',
    titleDe: 'The Solitaire as an Abstraction – New Perspectives',
    titleEn: 'The Solitaire as an Abstraction – New Perspectives',
    titleFa: 'The Solitaire as an Abstraction – New Perspectives',
    category: 'Architecture / Abstract',
    categoryFa: 'معماری / انتزاعی',
    awardsDe: 'LICC 2025 — Shortlist',
    awardsEn: 'LICC 2025 — Shortlist',
    awardsFa: 'LICC 2025 — فهرست کوتاه (Shortlisted)',
    badgeNames: ['LICC 2025 Shortlisted'],
    badges: [
      {
        id: 'licc-perspectives',
        name: 'London International Creative Competition 2025',
        award: 'Shortlist',
        year: '2025',
        badgeImage: '/images/docx_badges/licc_2025_shortlist.png',
        position: 'top-left',
        link: 'https://www.licc.uk/winners/winner.php?id=125858'
      }
    ],
    link: 'https://www.licc.uk/winners/winner.php?id=125858',
    descriptionDe: 'Neue Perspektiven auf den Solitär: Erweiterte visuelle Erkundung von Fluchtpunkten, Materialoberflächen und Himmelsspiegelungen bei der London International Creative Competition (LICC 2025).',
    descriptionEn: 'New perspectives on the solitaire: Expanded exploration of vanishing lines, material textures, and reflections at the London International Creative Competition (LICC 2025).',
    descriptionFa: 'دیدگاه‌های نو به تک‌بنا: کاوش گسترده در نقاط گریز و بافت مصالح در رقابت LICC 2025.',
    previewImage: '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_01.jpeg',
    galleryPhotos: [
      { id: 'solitaire-new-perspectives-01', src: '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_01.jpeg', alt: 'The Solitaire as an Abstraction – New Perspectives 01', captionDe: 'Image 01', captionEn: 'Image 01', captionFa: 'تک‌بنا به مثابه انتزاع – چشم‌اندازهای نو ۰۱' },
      { id: 'solitaire-new-perspectives-02', src: '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_02.jpeg', alt: 'The Solitaire as an Abstraction – New Perspectives 02', captionDe: 'Image 02', captionEn: 'Image 02', captionFa: 'تک‌بنا به مثابه انتزاع – چشم‌اندازهای نو ۰۲' },
      { id: 'solitaire-new-perspectives-03', src: '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_03.jpeg', alt: 'The Solitaire as an Abstraction – New Perspectives 03', captionDe: 'Image 03', captionEn: 'Image 03', captionFa: 'تک‌بنا به مثابه انتزاع – چشم‌اندازهای نو ۰۳' },
      { id: 'solitaire-new-perspectives-04', src: '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_04.jpeg', alt: 'The Solitaire as an Abstraction – New Perspectives 04', captionDe: 'Image 04', captionEn: 'Image 04', captionFa: 'تک‌بنا به مثابه انتزاع – چشم‌اندازهای نو ۰۴' },
      { id: 'solitaire-new-perspectives-05', src: '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_05.jpeg', alt: 'The Solitaire as an Abstraction – New Perspectives 05', captionDe: 'Image 05', captionEn: 'Image 05', captionFa: 'تک‌بنا به مثابه انتزاع – چشم‌اندازهای نو ۰۵' }
    ]
  },
  {
    id: 'bw-solitaire',
    themeGroup: 'solitaire-2025',
    titleDe: 'Black & White Solitaire',
    titleEn: 'Black & White Solitaire',
    titleFa: 'Black & White Solitaire (تک‌بنای سیاه‌وسفید)',
    category: 'Architecture / Monochromatic',
    categoryFa: 'معماری / تک‌رنگ',
    awardsDe: 'Black & White Spider Awards 2025 — Nominee',
    awardsEn: 'Black & White Spider Awards 2025 — Nominee',
    awardsFa: 'Black & White Spider Awards 2025 — نامزد دریافت جایزه (Nominee)',
    badgeNames: ['Spider Awards 2025 Nominee'],
    badges: [
      {
        id: 'spider-solitaire',
        name: 'Black & White Spider Awards 2025',
        award: 'Nominee · Architecture',
        year: '2025',
        badgeImage: '/images/badges_custom/spider_awards_2025_nominee.jpg',
        position: 'bottom-left',
        link: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238'
      }
    ],
    link: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238',
    descriptionDe: 'Monochrome Reduktion der Solitär-Architektur auf reine geometrische Kontraste, Hell-Dunkel-Verläufe und architektonische Zeitlosigkeit.',
    descriptionEn: 'Monochrome reduction of solitary architecture to pure geometric contrasts, chiaroscuro gradations, and timeless form.',
    descriptionFa: 'تقلیل تک‌رنگ معماری تک‌بنا به کنتراست‌های خالص هندسی و جاودانگی فرم در جوایز بین‌المللی عکاسی اسپایدر.',
    previewImage: '/images/wetransfer/solitaire_bw_01.webp',
    galleryPhotos: [
      {
        id: 'bw-solitaire-01',
        src: '/images/wetransfer/solitaire_bw_01.webp',
        alt: 'Black & White Solitaire',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'solitaire-ipa-2025',
    themeGroup: 'solitaire-2025',
    titleDe: 'The Solitaire as an Abstraction',
    titleEn: 'The Solitaire as an Abstraction',
    titleFa: 'The Solitaire as an Abstraction',
    category: 'Architecture / Abstract',
    categoryFa: 'معماری / انتزاعی',
    awardsDe: 'AMP 2025 — Winner (Student / Other Exterior) · IPA 2025 — Honorable Mention',
    awardsEn: 'AMP 2025 — Winner (Student / Other Exterior) · IPA 2025 — Honorable Mention',
    awardsFa: 'AMP 2025 — برنده اصلی · IPA 2025 — تقدیر ویژه',
    badgeNames: ['AMP 2025 Winner', 'IPA 2025 HM'],
    badges: [
      {
        id: 'amp-2025-solitaire',
        name: 'Architecture MasterPrize 2025',
        award: 'Student Photography Winner (Other Exterior)',
        year: '2025',
        badgeImage: '/images/2026_01_winners_badge-AMP-2025-768x355.webp',
        position: 'top-right',
        link: 'https://architectureprize.com/winners/winner.php?id=8533'
      },
      {
        id: 'ipa-2025-solitaire',
        name: 'International Photography Awards (IPA) 2025',
        award: 'Honorable Mention · Architecture, Abstract',
        year: '2025',
        badgeImage: '/images/docx_badges/ipa_2025_hm_green.png',
        position: 'bottom-right',
        link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722606309-25'
      }
    ],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722606309-25',
    descriptionDe: 'Die originale Prämierungsserie der International Photography Awards 2025: Der Solitär im lebendigen Lichtdialog des urbanen Frühlings (10 Werke).',
    descriptionEn: 'The original awarded series from the International Photography Awards 2025: The Solitaire in dynamic daylight dialogue (10 Works).',
    descriptionFa: 'مجموعه برگزیده اولیه در جوایز جهانی عکاسی IPA ۲۰۲۵: تک‌بنا در گفت‌وگوی پویای نور روز شهری (۱۰ اثر).',
    previewImage: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_01.jpeg',
    galleryPhotos: [
      { id: 'solitaire-ipa-2025-01', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_01.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 01', captionDe: 'Image 01', captionEn: 'Image 01', captionFa: 'تصویر ۱' },
      { id: 'solitaire-ipa-2025-02', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_02.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 02', captionDe: 'Image 02', captionEn: 'Image 02', captionFa: 'تصویر ۲' },
      { id: 'solitaire-ipa-2025-03', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_03.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 03', captionDe: 'Image 03', captionEn: 'Image 03', captionFa: 'تصویر ۳' },
      { id: 'solitaire-ipa-2025-04', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_04.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 04', captionDe: 'Image 04', captionEn: 'Image 04', captionFa: 'تصویر ۴' },
      { id: 'solitaire-ipa-2025-05', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_05.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 05', captionDe: 'Image 05', captionEn: 'Image 05', captionFa: 'تصویر ۵' },
      { id: 'solitaire-ipa-2025-06', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_06.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 06', captionDe: 'Image 06', captionEn: 'Image 06', captionFa: 'تصویر ۶' },
      { id: 'solitaire-ipa-2025-07', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_07.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 07', captionDe: 'Image 07', captionEn: 'Image 07', captionFa: 'تصویر ۷' },
      { id: 'solitaire-ipa-2025-08', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_08.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 08', captionDe: 'Image 08', captionEn: 'Image 08', captionFa: 'تصویر ۸' },
      { id: 'solitaire-ipa-2025-09', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_09.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 09', captionDe: 'Image 09', captionEn: 'Image 09', captionFa: 'تصویر ۹' },
      { id: 'solitaire-ipa-2025-10', src: '/images/series_solitaire/solitaire_ipa/solitaire_ipa_10.jpeg', alt: 'The Solitaire as an Abstraction (IPA 2025) – 10', captionDe: 'Image 10', captionEn: 'Image 10', captionFa: 'تصویر ۱۰' }
    ]
  },
  {
    id: 'solitaire-short-version',
    themeGroup: 'solitaire-2025',
    titleDe: 'The Solitaire as an Abstraction (Short Version)',
    titleEn: 'The Solitaire as an Abstraction (Short Version)',
    titleFa: 'The Solitaire as an Abstraction (نسخه کوتاه)',
    category: 'Architecture / Others',
    categoryFa: 'معماری / سایر',
    awardsDe: 'ND Awards 2025 — Honorable Mention',
    awardsEn: 'ND Awards 2025 — Honorable Mention',
    awardsFa: 'ND Awards 2025 — تقدیر ویژه (Honorable Mention)',
    badgeNames: ['ND Awards 2025 HM'],
    badges: [
      {
        id: 'nd-awards-solitaire',
        name: 'ND Awards 2025',
        award: 'Honorable Mention · Architecture',
        year: '2025',
        badgeImage: '/images/badges_custom/nd_awards_2025_hm.png',
        position: 'bottom-right',
        link: 'https://ndawards.net/winners-gallery/nd-awards-2025/non-professional/other/hm/23252/'
      }
    ],
    link: 'https://ndawards.net/winners-gallery/nd-awards-2025/non-professional/other/hm/23252/',
    descriptionDe: 'Kompakte kuratierte Fassung der Solitär-Serie, fokussiert auf die prägnantesten formalen Spannungen zwischen Glas, Stahl und Himmelsraum (5 Werke).',
    descriptionEn: 'Compact curated edition of the Solitaire series, focusing on the most salient tensions between glass, steel, and sky (5 Works).',
    descriptionFa: 'نسخه گزیده و فشرده مجموعه تک‌بنا با تمرکز بر بارزترین کشش‌های فرمی میان شیشه، فولاد و آسمان (۵ اثر).',
    previewImage: '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_01.jpeg',
    galleryPhotos: [
      { id: 'solitaire-short-version-01', src: '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_01.jpeg', alt: 'The Solitaire as an Abstraction (Short Version) – 01', captionDe: 'Image 01', captionEn: 'Image 01', captionFa: 'تصویر ۱' },
      { id: 'solitaire-short-version-02', src: '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_02.jpeg', alt: 'The Solitaire as an Abstraction (Short Version) – 02', captionDe: 'Image 02', captionEn: 'Image 02', captionFa: 'تصویر ۲' },
      { id: 'solitaire-short-version-03', src: '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_03.jpeg', alt: 'The Solitaire as an Abstraction (Short Version) – 03', captionDe: 'Image 03', captionEn: 'Image 03', captionFa: 'تصویر ۳' },
      { id: 'solitaire-short-version-04', src: '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_04.jpeg', alt: 'The Solitaire as an Abstraction (Short Version) – 04', captionDe: 'Image 04', captionEn: 'Image 04', captionFa: 'تصویر ۴' },
      { id: 'solitaire-short-version-05', src: '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_05.jpeg', alt: 'The Solitaire as an Abstraction (Short Version) – 05', captionDe: 'Image 05', captionEn: 'Image 05', captionFa: 'تصویر ۵' }
    ]
  },
  {
    id: 'prismatic-berlin',
    titleDe: 'Prismatic Berlin',
    titleEn: 'Prismatic Berlin',
    titleFa: 'Prismatic Berlin (برلین منشوری)',
    category: 'Architecture / Shoot',
    categoryFa: 'معماری / عکاسی',
    awardsDe: 'LICC 2025 — Official Selection (Photo–Video)',
    awardsEn: 'LICC 2025 — Official Selection (Photo–Video)',
    awardsFa: 'LICC 2025 — برگزیده رسمی (بخش ویدیو/عکس)',
    badgeNames: ['LICC 2025 OS'],
    badges: [

      {
            "id": "licc-prismatic-berlin",
            "name": "LICC 2025",
            "award": "London International Creative Competition · Official Selection",
            "year": "2025",
            "badgeImage": "/images/badges_custom/licc_2025_official_selection.png",
            "position": "top-left",
            "link": "https://www.licc.uk/"
      }
],
    link: 'http://www.licc.uk/winners/winner.php?id=2-37342-25&OS=true',
    descriptionDe: 'Diese Photoserie entschlüsselt Berlins urbane Identität durch das Prisma zeitgenössischer Architektur. Glasfassaden werden zu Leinwänden des pulsierenden Stadtlebens und spiegeln vielschichtige Abstraktionen wider. Geometrische Klarheit, lebendige Farben, Licht, Schatten und ikonische Silhouetten erzeugen neue visuelle Rhythmen. Alle Photographien sind unbearbeitet direkt aus der Kamera – authentische Momente im Fluss der Zeit.',
    descriptionEn: 'This photo series deciphers Berlin’s urban identity through the prism of contemporary architecture. Glass facades transform into canvases for vibrant city life, echoing multi-layered abstractions. Geometric clarity, vivid colors, light, shadow, and iconic silhouettes generate new visual rhythms. All photographs are unedited and taken straight from the camera—authentic moments in time. Construction and illusion blend the familiar with the unexpected, allowing Berlin to shine in ever-changing perspectives and inviting viewers to radically reimagine the city.',
    descriptionFa: 'این مجموعه عکس هویت شهری برلین را از دریچه منشور معماری معاصر رمزگشایی می‌کند؛ شیشه‌ها، رنگ‌ها و خطوط در پرسپکتیوهایی نو متجلی می‌شوند.',
    previewImage: '/images/wetransfer/prismatic_berlin_01.webp',
    galleryPhotos: [
      {
        id: 'prismatic-berlin-01',
        src: '/images/wetransfer/prismatic_berlin_01.webp',
        alt: 'Prismatic Berlin 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'prismatic-berlin-02',
        src: '/images/wetransfer/prismatic_berlin_02.webp',
        alt: 'Prismatic Berlin 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'prismatic-berlin-03',
        src: '/images/wetransfer/prismatic_berlin_03.webp',
        alt: 'Prismatic Berlin 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'prismatic-berlin-04',
        src: '/images/wetransfer/prismatic_berlin_04.webp',
        alt: 'Prismatic Berlin 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'prismatic-berlin-05',
        src: '/images/wetransfer/prismatic_berlin_05.webp',
        alt: 'Prismatic Berlin 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'transformer',
    titleDe: 'Transformer',
    titleEn: 'Transformer',
    titleFa: 'Transformer (دگرگون‌شونده)',
    category: 'Architecture / Shoot',
    categoryFa: 'معماری / عکاسی',
    awardsDe: 'LICC 2025 — Official Selection (Photo–Video)',
    awardsEn: 'LICC 2025 — Official Selection (Photo–Video)',
    awardsFa: 'LICC 2025 — برگزیده رسمی',
    badgeNames: ['LICC 2025 OS'],
    badges: [

      {
            "id": "licc-transformer",
            "name": "LICC 2025",
            "award": "London International Creative Competition · Official Selection",
            "year": "2025",
            "badgeImage": "/images/badges_custom/licc_2025_official_selection.png",
            "position": "top-left",
            "link": "https://www.licc.uk/"
      }
],
    link: 'https://www.licc.uk/winners/winner.php?id=2-37351-25&OS=true',
    descriptionDe: 'In »Transformer« werden urbane Räume durch Reflexionen und Verzerrungen transformiert: Fassaden lösen sich auf und der wiederkehrende rote Kran als zentrales Motiv verbindet abstrakte Linien und Muster als Symbol urbanen Wandels und ständiger Veränderung. Architektur scheint zu fließen; vertraute Szenerien werden zu kaleidoskopartigen Projektionen. Alle Bilder sind unbearbeitet – authentische Momente der Metamorphose.',
    descriptionEn: 'In “Transformer,” urban spaces are transformed through reflections and distortions: facades dissolve and the recurring red crane, as a central motiv, links abstract lines and patterns, symbolizing urban transformation and constant change. Architecture appears to flow; familiar settings are reimagined as kaleidoscopic, shifting projections. All images are unedited (except occasional cropping), so viewers encounter authentic moments of metamorphosis: the familiar becomes a sign of radical change, merging reality and abstraction into new perspectives on urban transformation.',
    descriptionFa: 'در «دگرگون‌شونده»، فضاهای شهری از طریق بازتاب‌ها و تغییر زاویه‌ها دگرگون می‌شوند و جرثقیل سرخ به نماد دگرگونی مداوم بدل می‌گردد.',
    previewImage: '/images/wetransfer/transformer_01.webp',
    galleryPhotos: [
      {
        id: 'transformer-01',
        src: '/images/wetransfer/transformer_01.webp',
        alt: 'Transformer 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'transformer-02',
        src: '/images/wetransfer/transformer_02.webp',
        alt: 'Transformer 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'transformer-03',
        src: '/images/wetransfer/transformer_03.webp',
        alt: 'Transformer 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'transformer-04',
        src: '/images/wetransfer/transformer_04.webp',
        alt: 'Transformer 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'transformer-05',
        src: '/images/wetransfer/transformer_05.webp',
        alt: 'Transformer 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      },
      {
        id: 'transformer-06',
        src: '/images/wetransfer/transformer_06.webp',
        alt: 'Transformer 06',
        captionDe: 'Image 06',
        captionEn: 'Image 06',
        captionFa: 'تصویر'
      },
      {
        id: 'transformer-07',
        src: '/images/wetransfer/transformer_07.webp',
        alt: 'Transformer 07',
        captionDe: 'Image 07',
        captionEn: 'Image 07',
        captionFa: 'تصویر'
      },
      {
        id: 'transformer-08',
        src: '/images/wetransfer/transformer_08.webp',
        alt: 'Transformer 08',
        captionDe: 'Image 08',
        captionEn: 'Image 08',
        captionFa: 'تصویر'
      },
      {
        id: 'transformer-09',
        src: '/images/wetransfer/transformer_09.webp',
        alt: 'Transformer 09',
        captionDe: 'Image 09',
        captionEn: 'Image 09',
        captionFa: 'تصویر'
      },
      {
        id: 'transformer-10',
        src: '/images/wetransfer/transformer_10.webp',
        alt: 'Transformer 10',
        captionDe: 'Image 10',
        captionEn: 'Image 10',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'columns-here-and-now',
    titleDe: 'Columns in the Here and Now',
    titleEn: 'Columns in the Here and Now',
    titleFa: 'Columns in the Here and Now (ستون‌ها در همین‌جا و اکنون)',
    category: 'Architecture / Monochromatic',
    categoryFa: 'معماری / تک‌رنگ',
    awardsDe: 'Black & White Spider Awards 2025 — Nominee (Architectural)',
    awardsEn: 'Black & White Spider Awards 2025 — Nominee (Architectural)',
    awardsFa: 'Spider Awards 2025 — نامزد دریافت جایزه',
    badgeNames: ['Spider Awards 2025 Nominee'],
    badges: [

      {
            "id": "spider-columns-here-and-now",
            "name": "Black & White Spider Awards 2025",
            "award": "Spider Awards 2025 · Nominee",
            "year": "2025",
            "badgeImage": "/images/docx_badges/spider_20th_nominee.png",
            "position": "bottom-left",
            "link": "https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=653&fid=309240"
      }
],
    link: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=653&fid=309240',
    descriptionDe: 'Zeitlose Präsenz im modernen Licht und Schatten: Columns in the Here and Now erforscht den zeitlosen Dialog zwischen monumentalen Säulen, scharfen Schatten und großstädtischem Licht.',
    descriptionEn: 'Timeless Presence in Modern Light and Shadow: Columns in the Here and Now explores the timeless dialogue between monumental columns, stark shadows, and metropolitan light.',
    descriptionFa: 'حضور جاودان در نور و سایه مدرن: کاوشی در گفت‌وگوی ابدی ستون‌های پرشکوه با نور کلان‌شهر در جوایز عکاسی اسپایدر.',
    previewImage: '/images/2025_12_image00057-scaled.webp',
    galleryPhotos: [
      {
        id: 'columns-here-now-01',
        src: '/images/2025_12_image00057-scaled.webp',
        alt: 'Columns in the Here and Now',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'ستون‌ها در همین‌جا و اکنون – شیرزن'
      }
    ]
  }
];

export const FINE_ART_WORKS: FurtherWork[] = [
  {
    id: 'echoes-water-tower-fineart',
    titleDe: 'Echoes of a Water Tower',
    titleEn: 'Echoes of a Water Tower',
    titleFa: 'Echoes of a Water Tower (پژواک برج آب)',
    category: 'Fine Art / Architecture',
    categoryFa: 'هنرهای زیبا / معماری',
    awardsDe: 'IPA 2026 — Honorable Mention & Official Selection · AMP 2026 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    awardsEn: 'IPA 2026 — Honorable Mention & Official Selection · AMP 2026 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    awardsFa: 'IPA 2026 — تقدیر و برگزیده رسمی · AMP 2026 — تقدیر ویژه · PERSPA 2026 — تقدیر ویژه',
    badgeNames: ['IPA 2026 HM', 'AMP 2026 HM', 'PERSPA 2026 HM'],
    badges: [
      {
        id: 'amp-echoes',
        name: 'Architecture MasterPrize 2026',
        award: 'Student Photography · Honorable Mention',
        year: '2026',
        badgeImage: '/images/badges_custom/amp_2026_student_hm.png',
        position: 'top-left',
        link: 'https://architectureprize.com/'
      },
      {
        id: 'perspa-echoes',
        name: 'PERSPA 2026',
        award: 'Black and White · Honorable Mention',
        year: '2026',
        badgeImage: '/images/badges_custom/perspa_2026_bw_hm.png',
        position: 'bottom-left',
        link: 'https://architectureperspectiveawards.com/'
      },
      {
        id: 'ipa-echoes',
        name: 'IPA 2026',
        award: 'Architecture · Honorable Mention',
        year: '2026',
        badgeImage: '/images/badges_custom/ipa_2026_hm_new.png',
        position: 'bottom-right',
        link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26'
      }
    ],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26',
    descriptionDe: 'Diese Photographie zeigt einen historischen Wasserturm, der, obwohl deutlich erkennbar, nur als reine Spiegelung in der Glasfassade des Bahnhofs erscheint und mit den vorbeiziehenden Wolken verschmilzt. Die Wolken steigen hinter der Fassade wie Dampf auf, hüllen Turm und Gebäude ein und schaffen ein völlig neues Bild. In diesem flüchtigen Zusammenspiel von Licht und Architektur stellt das Werk still die Frage, wo die Wirklichkeit liegt: im physischen Turm selbst oder in diesem wandelbaren Bild aus Glas, Reflexion und aufsteigendem »Dampf«?',
    descriptionEn: 'This photograph shows a historic water tower that, although clearly recognisable, appears only as a pure reflection in the glass façade of the station, merging with the passing clouds. The clouds rise behind the façade like steam, enveloping tower and building and creating an image that seems entirely new. In this fleeting interplay of light and architecture, the work quietly raises the question of where reality lies: in the physical tower itself, or in this shifting image of glass, reflection, and rising “steam”?',
    descriptionFa: 'پژواک برج آب در قالب اثری فاین‌آرت که مرزهای واقعیت و تصویر را در سایه ابرهای شتابان به پرسش می‌کشد.',
    previewImage: '/images/wetransfer/echoes_water_tower_01.webp',
    galleryPhotos: [
      {
        id: 'echoes-fineart-01',
        src: '/images/wetransfer/echoes_water_tower_01.webp',
        alt: 'Echoes of a Water Tower',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'پژواک برج آب – شیرزن'
      }
    ]
  },
  {
    id: 'between-space-time',
    titleDe: 'Between Space and Time',
    titleEn: 'Between Space and Time',
    titleFa: 'Between Space and Time (میان فضا و زمان)',
    category: 'Fine Art / Conceptual',
    categoryFa: 'هنرهای زیبا / مفهومی',
    awardsDe: 'IPA 2026 — Official Selection · LICC 2025 — Official Selection',
    awardsEn: 'IPA 2026 — Official Selection · LICC 2025 — Official Selection',
    awardsFa: 'IPA 2026 — برگزیده رسمی · LICC 2025 — برگزیده رسمی',
    badgeNames: ['IPA 2026 OS', 'LICC 2025 OS'],
    badges: [

      {
            "id": "licc-between-space-time",
            "name": "LICC 2025",
            "award": "London International Creative Competition · Official Selection",
            "year": "2025",
            "badgeImage": "/images/badges_custom/licc_2025_official_selection.png",
            "position": "top-left",
            "link": "https://www.licc.uk/"
      },
      {
            "id": "ipa-between-space-time",
            "name": "IPA 2026",
            "award": "Fine Art · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722613510-25"
      }
],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613510-25',
    descriptionDe: 'In den Reflexionen von Pfützen verschmelzen Realität und Illusion – Stille verwebt sich mit Bewegung. Die Uhr, Symbol der Zeit, wirkt entrückt und in ihrem eigenen Zwischenraum schwebend. In den Glasfassaden eines medizinischen Zentrums spiegelt sich eine fast neue Dimension wider – eine Schwelle zwischen Krankheit und Genesung, Wahrnehmung und Wirklichkeit. Diese Photoserie erforscht die fragilen Grenzen zwischen Sehen und Erinnern, zwischen dem Greifbaren und dem, was sich im Moment des Betrachtens aufzulösen beginnt. Sie erinnert uns daran, dass Heilung sich nur durch Raum und Zeit entfaltet.',
    descriptionEn: 'In the reflections of puddles, reality and illusion merge—stillness intertwines with movement. The clock, symbol of time, appears estranged and suspended, caught within its own in-between space. Reflected in the glass façades of a medical center, an almost new dimension unfolds—a threshold between illness and recovery, perception and reality. This photo series explores the fragile boundaries between seeing and remembering, between what can be touched and what, in the very act of observation, begins to dissolve. It reminds us that healing unfolds only through space and time.',
    descriptionFa: 'در بازتاب چاله‌های باران، واقعیت و توهم، سکون و حرکت به هم می‌آمیزند؛ کاوشی در مرزهای شکننده ادراک و زمان.',
    previewImage: '/images/2026_09_os-10-between-space-and-time-01-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'between-space-time-01',
        src: '/images/2026_09_os-10-between-space-and-time-01-scaled.jpeg',
        alt: 'Between Space and Time 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر ۰۱'
      },
      {
        id: 'between-space-time-02',
        src: '/images/2026_09_os-10-between-space-and-time-02-scaled.jpeg',
        alt: 'Between Space and Time 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر ۰۲'
      },
      {
        id: 'between-space-time-03',
        src: '/images/2026_09_os-10-between-space-and-time-03-scaled.jpeg',
        alt: 'Between Space and Time 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر ۰۳'
      }
    ]
  },
  {
    id: 'blessed-are-those-who-mourn',
    titleDe: 'Blessed Are Those Who Mourn',
    titleEn: 'Blessed Are Those Who Mourn',
    titleFa: 'Blessed Are Those Who Mourn (خوشا به حال سوگواران)',
    category: 'Fine Art / Expressive',
    categoryFa: 'هنرهای زیبا / اکسپرسیو',
    awardsDe: 'LICC 2025 — Official Selection (Shoot / Photo–Video)',
    awardsEn: 'LICC 2025 — Official Selection (Shoot / Photo–Video)',
    awardsFa: 'LICC 2025 — برگزیده رسمی',
    badgeNames: ['LICC 2025 OS'],
    badges: [

      {
            "id": "licc-blessed-are-those-who-mourn",
            "name": "LICC 2025",
            "award": "London International Creative Competition · Official Selection",
            "year": "2025",
            "badgeImage": "/images/badges_custom/licc_2025_official_selection.png",
            "position": "top-left",
            "link": "https://www.licc.uk/"
      }
],
    link: 'http://www.licc.uk/winners/winner.php?id=2-37355-25&OS=true',
    descriptionDe: '»Blessed Are Those Who Mourn« übersetzt die Seligpreisungen in monumentale Architektur. Von Licht durchflutet, rahmen Säulen Reliefs, deren uralte Worte Trost und Gerechtigkeit verheißen. Hoffnung erwächst im Wechselspiel von Licht und Schatten und macht jede Fassade zu einem zeitlosen Zeichen. Die Architektur bildet eine Brücke zwischen biblischer Verheißung und zeitgenössischer Erfahrung und macht Trost und Hoffnung im heutigen Stadtraum sinnlich greifbar – alles genau so aufgenommen, wie gesehen, unbearbeitet und im Originalzustand: »Selig sind, die da Leid tragen, denn sie sollen getröstet werden.«',
    descriptionEn: '“Blessed Are Those Who Mourn” translates the Beatitudes into monumental architecture. Bathed in light, columns frame reliefs whose ancient words evoke comfort and justice. Hope emerges in the interplay of light and shadow, turning each façade into a timeless sign. The architecture forms a bridge between biblical promise and contemporary experience, making comfort and hope sensually tangible within today’s urban space—all captured exactly as seen, with every photograph in the series shown unedited and as originally taken, centered on: “Blessed are those who mourn, for they shall be comforted.”',
    descriptionFa: '«خوشا به حال سوگواران»: ترجمان بشارت‌ها در معماری باشکوه ستون‌ها که نور و سایه را به نمادهای امید و تسلی بدل می‌سازد.',
    previewImage: '/images/wetransfer/blessed_mourn_01.webp',
    galleryPhotos: [
      {
        id: 'blessed-mourn-01',
        src: '/images/wetransfer/blessed_mourn_01.webp',
        alt: 'Blessed Are Those Who Mourn 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'blessed-mourn-02',
        src: '/images/wetransfer/blessed_mourn_02.webp',
        alt: 'Blessed Are Those Who Mourn 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'blessed-mourn-03',
        src: '/images/wetransfer/blessed_mourn_03.webp',
        alt: 'Blessed Are Those Who Mourn 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'blessed-mourn-04',
        src: '/images/wetransfer/blessed_mourn_04.webp',
        alt: 'Blessed Are Those Who Mourn 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      }
    ]
  }
];

export const SOCIAL_ENVIRONMENTAL_WORKS: FurtherWork[] = [
  {
    id: 'berlin-attack-on-queer',
    titleDe: 'Berlin: Attack on Queer, Diversity and Freedom',
    titleEn: 'Berlin: Attack on Queer, Diversity and Freedom',
    titleFa: 'برلین: حمله به تنوع و آزادی (Attack on Diversity and Freedom)',
    category: 'Editorial / Photo Essay',
    categoryFa: 'مستند اجتماعی / فوتو اسِی',
    awardsDe: 'BIFA 2026 — Honorable Mention (Editorial / Photo Essay)',
    awardsEn: 'BIFA 2026 — Honorable Mention (Editorial / Photo Essay)',
    awardsFa: 'BIFA 2026 — تقدیر ویژه (بخش ادیتوریال / مقاله تصویری)',
    badgeNames: ['BIFA 2026 HM'],
    badges: [

      {
            "id": "bifa-berlin-attack-on-queer",
            "name": "BIFA 2026",
            "award": "Budapest International Foto Awards · Honorable Mention",
            "year": "2026",
            "badgeImage": "/images/badges_custom/bifa_2026_hm.png",
            "position": "top-left",
            "link": "https://budapestfotoawards.com/"
      }
],
    link: 'https://budapestfotoawards.com/winners/hm/2026/93-41283-26/',
    descriptionDe: 'Berlin ist meine Heimat, eine Stadt der Vielfalt und Freiheit. Während des Christopher Street Day (CSD) 2026 wurde ein Lieferwagen vorsätzlich in eine Menschenmenge gesteuert, und der Angreifer attackierte mit einer Machete, bevor er flüchtete. Die Behörden stuften den Täter als islamistischen Extremisten ein. Eine Frau wurde getötet, 31 Menschen verletzt. Obwohl ich nicht queer bin, stehe ich als Deutsch-Iranerin in Berlin in voller Solidarität, und dieser Anschlag hat mich tief erschüttert. Diese Photographien sind mein stiller Akt des Gedenkens für die Opfer und eine Mahnung, dass queeres Leben, Vielfalt und Freiheit gelebt und verteidigt werden müssen.',
    descriptionEn: 'Berlin is my home, a city of diversity and freedom. During Christopher Street Day (CSD) 2026, a van was deliberately driven into a crowd, and the attacker used a machete before fleeing. Authorities describe the perpetrator as an Islamist extremist. One woman was killed and 31 people were injured. Although I am not queer, as a German-Iranian living in Berlin, I stand in solidarity, and this attack affected me deeply. This series of photographs is my quiet act of remembrance for the victims. It is also a reminder that queer life, diversity and freedom must be lived and defended.',
    descriptionFa: 'مستندنگاری شجاعانه در همبستگی با قربانیان حمله به رژه رنگین‌کمانی برلین؛ یادبودی برای آزادی و دفاع از حرمت انسانی (تقدیر ویژه BIFA 2026).',
    previewImage: '/images/wetransfer/berlin_attack_queer_01.webp',
    galleryPhotos: [
      {
        id: 'attack-on-queer-01',
        src: '/images/wetransfer/berlin_attack_queer_01.webp',
        alt: 'Berlin: Attack on Queer, Diversity and Freedom 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر'
      },
      {
        id: 'attack-on-queer-02',
        src: '/images/wetransfer/berlin_attack_queer_02.webp',
        alt: 'Berlin: Attack on Queer, Diversity and Freedom 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر'
      },
      {
        id: 'attack-on-queer-03',
        src: '/images/wetransfer/berlin_attack_queer_03.webp',
        alt: 'Berlin: Attack on Queer, Diversity and Freedom 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر'
      },
      {
        id: 'attack-on-queer-04',
        src: '/images/wetransfer/berlin_attack_queer_04.webp',
        alt: 'Berlin: Attack on Queer, Diversity and Freedom 04',
        captionDe: 'Image 04',
        captionEn: 'Image 04',
        captionFa: 'تصویر'
      },
      {
        id: 'attack-on-queer-05',
        src: '/images/wetransfer/berlin_attack_queer_05.webp',
        alt: 'Berlin: Attack on Queer, Diversity and Freedom 05',
        captionDe: 'Image 05',
        captionEn: 'Image 05',
        captionFa: 'تصویر'
      }
    ]
  },
  {
    id: 'life-love-freedom-iran',
    titleDe: 'LIFE – LOVE – FREEDOM · IRAN',
    titleEn: 'LIFE – LOVE – FREEDOM · IRAN',
    titleFa: 'زن، زندگی، آزادی · ایران (LIFE – LOVE – FREEDOM · IRAN)',
    category: 'Special / Human Rights',
    categoryFa: 'بخش ویژه / حقوق بشر و آزادی',
    awardsDe: 'IPA 2026 — Official Selection (Special / Other)',
    awardsEn: 'IPA 2026 — Official Selection (Special / Other)',
    awardsFa: 'IPA 2026 — برگزیده رسمی (بخش ویژه)',
    badgeNames: ['IPA 2026 OS'],
    badges: [

      {
            "id": "ipa-life-love-freedom-iran",
            "name": "IPA 2026",
            "award": "Special / Other · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722616352-26"
      }
],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722616352-26',
    descriptionDe: 'Drei Pfeiler stehen für Leben, Liebe und Freiheit – für die Menschen im Iran und im Exil. Sie erheben sich aus der Dunkelheit, jeder für sich und doch miteinander verbunden; das seitliche Licht symbolisiert die Hoffnung, die ihren Weg durch die Nacht findet. Die leere Bahre steht für die Verweigerung medizinischer Hilfe für verletzte Demonstrierende und für Ärztinnen und Ärzte, die an ihrer Arbeit gehindert oder bedroht werden. Das leuchtende Kreuz markiert den Ort, an dem Heilung möglich sein sollte, und erinnert zugleich an Hospitäler, in denen Verletzte abgewiesen oder verfolgt werden. Für die Menschen im Iran und im Exil, die nach Würde und Freiheit streben.',
    descriptionEn: 'Three pillars stand for life, love and freedom – for people in Iran and in exile. They rise from the darkness, each on its own yet still connected; the side light represents hope finding its way through the night. The empty stretcher symbolizes the denial of medical treatment for injured protesters and doctors who are hindered or threatened in their work. The glowing cross marks the place where healing should be possible, and at the same time recalls hospitals where the injured are turned away or exposed to persecution. For the people in Iran and in exile striving for dignity and freedom.',
    descriptionFa: 'سه ستون نماد زندگی، عشق و آزادی – برای مردم شجاع در ایران و در تبعید؛ تجلی نوری که راه خود را از میان تاریکی می‌گشاید.',
    previewImage: '/images/2026_09_os-01-life-love-freedom-iran-01-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'iran-freedom-01',
        src: '/images/2026_09_os-01-life-love-freedom-iran-01-scaled.jpeg',
        alt: 'LIFE – LOVE – FREEDOM · IRAN 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر ۰۱'
      },
      {
        id: 'iran-freedom-02',
        src: '/images/2026_09_os-01-life-love-freedom-iran-02-scaled.jpeg',
        alt: 'LIFE – LOVE – FREEDOM · IRAN 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر ۰۲'
      },
      {
        id: 'iran-freedom-03',
        src: '/images/2026_09_os-01-life-love-freedom-iran-03-scaled.jpeg',
        alt: 'LIFE – LOVE – FREEDOM · IRAN 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر ۰۳'
      }
    ]
  },
  {
    id: 'in-between-spaces',
    titleDe: 'In-Between Spaces',
    titleEn: 'In-Between Spaces',
    titleFa: 'In-Between Spaces (فضاهای میانی)',
    category: 'Street & Social Documentation',
    categoryFa: 'عکاسی خیابانی و مستند اجتماعی',
    awardsDe: 'URBAN Photo Awards 2026 — Selected Photographer (Streets)',
    awardsEn: 'URBAN Photo Awards 2026 — Selected Photographer (Streets)',
    awardsFa: 'URBAN Photo Awards 2026 — عکاس منتخب (بخش خیابان)',
    badgeNames: ['URBAN Photo Awards 2026 Selected'],
    badges: [

      {
            "id": "urban-in-between-spaces",
            "name": "URBAN Photo Awards 2026",
            "award": "URBAN 2026 · Selected Photographer",
            "year": "2026",
            "badgeImage": "/images/URBAN-Photo-Awards-2026-2.png",
            "position": "top-left",
            "link": "https://www.urbanphotoawards.com/"
      }
],
    link: 'https://www.urbanphotoawards.com/en/photonew/?id=333556%2Fschirzan%2Fin-between-spaces',
    descriptionDe: '»In-Between Spaces« ist eine Photographie vom Berliner Alexanderplatz: Ein Mann aus Lettland schläft am Morgen auf einer Bank, umgeben von Taschen und Unrat. Zwischen Sichtbarkeit und Unsichtbarkeit offenbart das Bild, wie nah Ausgrenzung und urbanes Leben beieinander liegen. Die Photographie ruft zu mehr Mitgefühl für wohnungslose Menschen auf und mahnt uns, ihnen mit Respekt, Würde und Menschlichkeit zu begegnen. Das ausdrückliche Einverständnis der abgebildeten Person zur Veröffentlichung liegt vor.\n\nIn-Between Spaces (Area 14): Ausgestellt bei den Trieste Photo Days 2026 (Mercato Coperto, Triest). Photographische Erkundung urbaner Schwellenräume, Übergänge und Passagen, in denen Grenzen verschwimmen.',
    descriptionEn: '“In-Between Spaces” is a photograph taken at Berlin’s Alexanderplatz: a man from Latvia sleeping on a bench in the morning, surrounded by bags and litter. Between visibility and invisibility, it reveals how closely exclusion and urban life coexist. The photograph calls for greater compassion toward people experiencing homelessness and urges us to treat them with respect, dignity and humanity. The explicit consent of the depicted person for publication has been obtained.\n\nIn-Between Spaces (Area 14): Exhibited at Trieste Photo Days 2026 (Mercato Coperto, Trieste). Photographic inquiry into urban liminal zones, transitions, and passages where boundaries dissolve.',
    descriptionFa: '«فضاهای میانی»: ثبتی انسانی و مستند از الکساندرپلاتز برلین در دفاع از کرامت انسان‌های بی‌سرپناه؛ نمایش‌یافته در فستیوال عکس تریست ۲۰۲۶ در ایتالیا.',
    previewImage: '/images/2026_07_In-Between-Spaces-scaled.jpg',
    galleryPhotos: [
      {
        id: 'in-between-spaces-01',
        src: '/images/2026_07_In-Between-Spaces-scaled.jpg',
        alt: 'In-Between Spaces',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'فضاهای میانی – شیرزن (منتخب مسابقه URBAN 2026)'
      }
    ]
  },
  {
    id: 'dignity-of-animal',
    titleDe: 'The Dignity of the Animal is Inviolable',
    titleEn: 'The Dignity of the Animal is Inviolable',
    titleFa: 'The Dignity of the Animal is Inviolable (حرمت حیوان خدشه‌ناپذیر است)',
    category: 'Environmental & Animal Welfare',
    categoryFa: 'محیط‌زیست و حقوق حیوانات',
    awardsDe: 'LICC 2025 — Official Selection (Shoot / Photo–Video)',
    awardsEn: 'LICC 2025 — Official Selection (Shoot / Photo–Video)',
    awardsFa: 'LICC 2025 — برگزیده رسمی',
    badgeNames: ['LICC 2025 OS'],
    badges: [

      {
            "id": "licc-dignity-of-animal",
            "name": "LICC 2025",
            "award": "London International Creative Competition · Official Selection",
            "year": "2025",
            "badgeImage": "/images/badges_custom/licc_2025_official_selection.png",
            "position": "top-left",
            "link": "https://www.licc.uk/"
      }
],
    link: 'http://www.licc.uk/winners/winner.php?id=2-37357-25&OS=true',
    descriptionDe: 'Diese Serie markiert eine persönliche Transformation. Bei der Begegnung mit dem Löwen im Berliner Zoo sah ich kein Ausstellungsstück, sondern ein Wesen, dessen stiller, würdevoller Blick jede Barriere durchbrach. Durch mein Objektiv nahmen Individualität und die Sehnsucht nach Freiheit Gestalt an. Diese Bilder stellen Zoos als Relikte der Kontrolle infrage und fordern einen Wandel – von Zurschaustellung hin zu Fürsorge, von Gefangenschaft hin zu echtem Artenschutz. Sein Blick bleibt: Eine Würde, die nichts einsperren kann.',
    descriptionEn: 'This series marks a personal transformation. Meeting the lion at Berlin Zoo, I saw not an exhibit but a being whose silent, dignified gaze pierced every barrier. Through my lens, individuality and longing for freedom took form. These images challenge zoos as relics of control, urging a shift—from display to care, from captivity to wild protection. His gaze remains: dignity that nothing can confine.',
    descriptionFa: 'این مجموعه تحولی عمیق را نشان می‌دهد: رویارویی با نگاه پروقار شیر در باغ‌وحش برلین و تأکید بر اینکه کرامت جانداران در اسارت سلب‌ناپذیر است.',
    previewImage: '/images/2026_04_59097f0d6c9eece89abc78e06350bb1f-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'dignity-animal-01',
        src: '/images/2026_04_59097f0d6c9eece89abc78e06350bb1f-scaled.jpeg',
        alt: 'The Dignity of the Animal is Inviolable 01',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'تصویر ۰۱'
      },
      {
        id: 'dignity-animal-02',
        src: '/images/2026_04_f921f50c9aeb75ce30ac79453121ddda-scaled.jpeg',
        alt: 'The Dignity of the Animal is Inviolable 02',
        captionDe: 'Image 02',
        captionEn: 'Image 02',
        captionFa: 'تصویر ۰۲'
      },
      {
        id: 'dignity-animal-03',
        src: '/images/2026_04_4bacafa6404a9d91da6e9374e3feb98e-scaled.jpeg',
        alt: 'The Dignity of the Animal is Inviolable 03',
        captionDe: 'Image 03',
        captionEn: 'Image 03',
        captionFa: 'تصویر ۰۳'
      }
    ]
  }
];

export const PORTRAIT_WORKS: FurtherWork[] = [
  {
    id: 'kickboxing-self-portrait',
    titleDe: 'Kickboxing – From Fighting in the Ring to Lightning in the Frame',
    titleEn: 'Kickboxing – From Fighting in the Ring to Lightning in the Frame',
    titleFa: 'کیک‌بوکسینگ – از نبرد در رینگ تا آذرخش در قاب تصویر (Kickboxing)',
    category: 'People / Self-Portrait',
    categoryFa: 'انسان / خودنگاره (Self-Portrait)',
    awardsDe: 'IPA 2026 — Official Selection (People / Self-Portrait)',
    awardsEn: 'IPA 2026 — Official Selection (People / Self-Portrait)',
    awardsFa: 'IPA 2026 — برگزیده رسمی (بخش پرتره و سلف پرتره)',
    badgeNames: ['IPA 2026 OS'],
    badges: [

      {
            "id": "ipa-kickboxing-self-portrait",
            "name": "IPA 2026",
            "award": "People / Self-Portrait · Official Selection",
            "year": "2026",
            "badgeImage": "/images/email_badges/ipa_2026_os_ribbon.png",
            "position": "bottom-right",
            "link": "https://www.photoawards.com/social/zoom.php?eid=8-1722619299-26"
      }
],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722619299-26',
    descriptionDe: 'Vom Kampf im Ring zum Blitzlicht im Bild: Ein kraftvolles Selbstporträt, das den Übergang von zehnfacher sportlicher Weltmeisterschaft zur kompromisslosen photographischen Disziplin und Präzision visualisiert. Ausgezeichnet als Official Selection bei den International Photography Awards (IPA 2026).',
    descriptionEn: 'From Fighting in the Ring to Lightning in the Frame: A commanding self-portrait visualizing the transition from ten-time world champion kickboxer to uncompromising photographic precision (IPA 2026 Official Selection).',
    descriptionFa: 'از مبارزه در رینگ تا درخشش در قاب: خودنگاره‌ای قدرتمند از گذر پیروزمندانه از ۱۰ عنوان قهرمانی جهان به انضباط عکاسی (برگزیده رسمی IPA 2026).',
    previewImage: '/images/2026_09_os-02-kickboxing-from-fighting-in-the-ring-01-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'kickboxing-portrait-01',
        src: '/images/2026_09_os-02-kickboxing-from-fighting-in-the-ring-01-scaled.jpeg',
        alt: 'Kickboxing – From Fighting in the Ring to Lightning in the Frame',
        captionDe: 'Image 01',
        captionEn: 'Image 01',
        captionFa: 'کیک‌بوکسینگ – از مبارزه در رینگ تا آذرخش در قاب تصویر (برگزیده رسمی IPA 2026)'
      }
    ]
  }
];

export interface EducationMilestone {
  period: string;
  fieldDe: string;
  fieldEn: string;
  fieldFa: string;
  fieldFr?: string;
  fieldIt?: string;
  fieldTr?: string;
  institutionDe: string;
  institutionEn: string;
  institutionFa: string;
  institutionFr?: string;
  institutionIt?: string;
  institutionTr?: string;
  degreeDe: string;
  degreeEn: string;
  degreeFa: string;
  degreeFr?: string;
  degreeIt?: string;
  degreeTr?: string;
}

export const ACADEMIC_MILESTONES: EducationMilestone[] = [
  {
    period: 'bis 2004',
    fieldDe: 'Abitur',
    fieldEn: 'Abitur / High School Graduation',
    fieldFa: 'دیپلم دبیرستان (Abitur)',
    fieldFr: 'Baccalauréat (Abitur)',
    fieldIt: 'Maturità (Abitur)',
    fieldTr: 'Lise Diploması (Abitur)',
    institutionDe: 'Ev. Gymnasium zum Grauen Kloster Berlin',
    institutionEn: 'Evangelisches Gymnasium zum Grauen Kloster Berlin',
    institutionFa: 'کالج مشهور گراوئن کلوستر برلین',
    institutionFr: 'Ev. Gymnasium zum Grauen Kloster Berlin',
    institutionIt: 'Ev. Gymnasium zum Grauen Kloster Berlino',
    institutionTr: 'Ev. Gymnasium zum Grauen Kloster Berlin',
    degreeDe: 'Abitur erfolgreich bestanden',
    degreeEn: 'Successfully graduated (Abitur)',
    degreeFa: 'اخذ مدرک دیپلم متوسطه با موفقیت',
    degreeFr: 'Diplôme de fin d’études secondaires obtenu avec succès',
    degreeIt: 'Maturità conseguita con successo',
    degreeTr: 'Abitur lise diploması başarıyla tamamlandı'
  },
  {
    period: '2005–2010',
    fieldDe: 'Rechtswissenschaften',
    fieldEn: 'Law / Jurisprudence',
    fieldFa: 'رشته حقوق و علوم قضایی',
    fieldFr: 'Sciences Juridiques / Droit',
    fieldIt: 'Giurisprudenza / Diritto',
    fieldTr: 'Hukuk Eğitimi',
    institutionDe: 'Freie Universität Berlin FU',
    institutionEn: 'Free University of Berlin FU',
    institutionFa: 'دانشگاه آزاد برلین FU',
    institutionFr: 'Université Libre de Berlin (FU)',
    institutionIt: 'Freie Universität Berlin (FU)',
    institutionTr: 'Berlin Özgür Üniversitesi (FU)',
    degreeDe: 'Grundstudium erfolgreich abgeschlossen, Wechsel aufgrund privater und leistungssportlicher Gründe',
    degreeEn: 'Undergraduate legal studies completed, transition due to elite sports career',
    degreeFa: 'اتمام موفقیت‌آمیز دوره پایه حقوق و انتقال به دلیل تعهدات ورزش حرفه‌ای',
    degreeFr: 'Premier cycle validé avec succès, transition motivée par la carrière sportive d’élite',
    degreeIt: 'Studi universitari di base completati con successo, passaggio dovuto alla carriera sportiva d’élite',
    degreeTr: 'Lisans temel eğitimi başarıyla tamamlandı, profesyonel spor kariyeri nedeniyle geçiş yapıldı'
  },
  {
    period: '2009–2010',
    fieldDe: 'Polizeiausbildung',
    fieldEn: 'Police Academy Training',
    fieldFa: 'دوره آموزش حرفه‌ای پلیس',
    fieldFr: 'Formation des Cadres de Police',
    fieldIt: 'Formazione Accademia di Polizia',
    fieldTr: 'Polis Akademisi Eğitimi',
    institutionDe: 'Polizei Berlin',
    institutionEn: 'Berlin Police Department',
    institutionFa: 'پلیس برلین',
    institutionFr: 'Police de Berlin',
    institutionIt: 'Polizia di Berlino',
    institutionTr: 'Berlin Polisi',
    degreeDe: 'Nach einjähriger Polizeiausbildung nach Bestenauslese: Wechsel zum Polizeistudium',
    degreeEn: 'After 1-year training selected on merit: transfer to police degree studies',
    degreeFa: 'پس از یک سال آموزش بر اساس گزینش نخبگان: ورود به دوره عالی تحصیلات پلیس',
    degreeFr: 'Après un an de formation par sélection des meilleurs : passage aux études supérieures de police',
    degreeIt: 'Dopo un anno di formazione con selezione per merito: passaggio agli studi superiori di polizia',
    degreeTr: 'Üstün başarı ve liyakatle tamamlanan bir yıllık eğitimin ardından polis lisans programına geçiş'
  },
  {
    period: '2010–2013',
    fieldDe: 'Diplomverwaltungswirtin – Polizeivollzugsdienst',
    fieldEn: 'Diploma in Public Administration – Police Service',
    fieldFa: 'دانشنامه مدیریت خدمات دولتی – نیروی انتظامی',
    fieldFr: 'Diplôme en Administration Publique – Police Opérationnelle',
    fieldIt: 'Laurea in Amministrazione Pubblica – Servizio Operativo di Polizia',
    fieldTr: 'Kamu Yönetimi Diploması – Emniyet Hizmetleri',
    institutionDe: 'Hochschule für Wirtschaft und Recht Berlin HWR',
    institutionEn: 'Berlin School of Economics and Law HWR',
    institutionFa: 'دانشگاه اقتصاد و حقوق برلین HWR',
    institutionFr: 'École Supérieure d’Économie et de Droit de Berlin (HWR)',
    institutionIt: 'Scuola di Economia e Diritto di Berlino (HWR)',
    institutionTr: 'Berlin Ekonomi ve Hukuk Fakültesi (HWR)',
    degreeDe: 'Diplomverwaltungswirtin im Polizeivollzugsdienst erfolgreich abgeschlossen',
    degreeEn: 'Graduated as Diplom-Verwaltungswirtin in the Police Service',
    degreeFa: 'اخذ دانشنامه رسمی Diplomverwaltungswirtin در خدمات پلیس با موفقیت',
    degreeFr: 'Diplôme d’administratrice publique dans les services de police opérationnelle obtenu avec succès',
    degreeIt: 'Diploma di funzionario amministrativo nei servizi operativi di polizia conseguito con successo',
    degreeTr: 'Emniyet teşkilatı kamu yöneticiliği diploması başarıyla tamamlandı'
  },
  {
    period: 'Seit 2024',
    fieldDe: 'Laufendes Masterstudium: Angewandte Umweltwissenschaften (Fernstudium)',
    fieldEn: 'Ongoing Master’s Programme: Applied Environmental Sciences (Distance Learning)',
    fieldFa: 'تحصیلات جاری کارشناسی ارشد: علوم کاربردی محیط زیست · آموزش مجازی',
    fieldFr: 'Master en cours : Sciences Appliquées de l’Environnement (Formation à distance)',
    fieldIt: 'Master in corso: Scienze Ambientali Applicate (Formazione a distanza)',
    fieldTr: 'Devam Eden Yüksek Lisans: Uygulamalı Çevre Bilimleri (Uzaktan Eğitim)',
    institutionDe: 'Universität Koblenz – ZFUW: Zentrum für Fernstudien und Universitäre Weiterbildung',
    institutionEn: 'University of Koblenz – Centre for Distance Studies and Further Education ZFUW',
    institutionFa: 'دانشگاه کوبلنتس – مرکز آموزش‌های مجازی و تکمیلی دانشگاهی ZFUW',
    institutionFr: 'Université de Coblence – Centre d’études à distance et de formation continue ZFUW',
    institutionIt: 'Università di Coblenza – Centro per gli studi a distanza e la formazione continua ZFUW',
    institutionTr: 'Koblenz Üniversitesi – Uzaktan Eğitim ve Üniversite İhtisas Merkezi ZFUW',
    degreeDe: 'Laufendes Studium, kurz vor dem Masterabschluss (M.Sc.) · Seit 2024 · Derzeit im 5. Semester (Stand: November 2026)',
    degreeEn: 'Ongoing studies, nearing Master’s completion (M.Sc.) · Since 2024 · Currently in 5th Semester (as of November 2026)',
    degreeFa: 'تحصیلات جاری، در آستانه فارغ‌التحصیلی مقطع کارشناسی ارشد (M.Sc.) · از ۲۰۲۴ · در حال حاضر در ترم ۵ (نوامبر ۲۰۲۶)',
    degreeFr: 'Études en cours, finalisation imminente du Master (M.Sc.) · Depuis 2024 · Actuellement au 5e semestre',
    degreeIt: 'Studi in corso, prossimo al conseguimento del Master (M.Sc.) · Dal 2024 · Attualmente al 5° semestre',
    degreeTr: 'Eğitim devam ediyor, Master (M.Sc.) mezuniyeti aşamasında · 2024’ten beri · Şu anda 5. sömestrde'
  }
];

export const PRESS_ITEMS = [
  {
    outlet: '121 CLICKS',
    date: '17. Oktober 2026',
    title: 'PERSPA Awards 2026: 47 Winning Photos That Reveal Architecture in a Whole New Light',
    descriptionDe: '#3. Abstract – 2nd Place Winner: »The Solitaire as an Abstraction« by SchirZan, Germany',
    descriptionEn: '#3. Abstract – 2nd Place Winner: "The Solitaire as an Abstraction" by SchirZan, Germany',
    descriptionFa: 'رتبه دوم بخش معماری انتزاعی: تک‌بنا به مثابه انتزاع اثر شیرزن، آلمان',
    link: 'https://121clicks.com/inspirations/2026-perspa-awards-winners-architecture/'
  },
  {
    outlet: 'KOJARO · کجارو',
    date: '18. Oktober 2026',
    title: 'از تئاتر تاریخی ایتالیا تا هندسه ساختمان‌ها؛ برندگان نخستین جایزه عکاسی معماری پرسپکتیو',
    descriptionDe: 'Internationale Berichterstattung über die renommiertesten Architekturphotographien des Jahres – Auszeichnung für SchirZan · Werk Nr. 3.',
    descriptionEn: 'International press coverage on the year’s finest architectural photography – Honour for SchirZan · Work No. 3.',
    descriptionFa: 'پوشش مطبوعاتی بین‌المللی برترین آثار عکاسی معماری سال ۲۰۲۶ و درخشش شیرزن در میان برگزیدگان.',
    link: 'https://www.kojaro.com/travel-photos/310932-best-architectural-photography-2026/'
  }
];

export interface ExhibitionItem {
  id: string;
  titleDe: string;
  titleEn: string;
  titleFa: string;
  festivalDe: string;
  festivalEn: string;
  festivalFa: string;
  venue: string;
  address: string;
  datesDe: string;
  datesEn: string;
  datesFa: string;
  featuredWorkDe: string;
  featuredWorkEn: string;
  featuredWorkFa: string;
  link?: string;
  festivalLink?: string;
}

export const EXHIBITIONS_DATA: ExhibitionItem[] = [
  {
    id: 'trieste-photo-days-2026',
    titleDe: 'Trieste Photo Days 2026 – 13. Internationales Festival',
    titleEn: 'Trieste Photo Days 2026 – 13th International Festival of Urban Photography',
    titleFa: 'سیزدهمین فستیوال بین‌المللی عکس تریست ۲۰۲۶ در ایتالیا',
    festivalDe: 'Trieste Photo Days Festival 2026',
    festivalEn: 'Trieste Photo Days Festival 2026',
    festivalFa: 'فستیوال بین‌المللی عکاسی شهری تریست',
    venue: 'Mercato Coperto (Area 14)',
    address: 'Via Carducci, 36 – Triest, Italien',
    datesDe: '23. Oktober 2026 – 25. Oktober 2026',
    datesEn: 'Friday, October 23 – Sunday, October 25, 2026',
    datesFa: '۲۳ تا ۲۵ اکتبر ۲۰۲۶',
    featuredWorkDe: 'In-Between Spaces (URBAN Photo Awards Selected)',
    featuredWorkEn: 'In-Between Spaces (URBAN Photo Awards Selected)',
    featuredWorkFa: 'فضاهای میانی · In-Between Spaces',
    link: 'https://www.triestephotodays.com/en/exhibitions/urban-photo-awards-2026/',
    festivalLink: 'https://www.triestephotodays.com/'
  },
  {
    id: 'trieste-photo-fringe-2026',
    titleDe: 'Trieste Photo Fringe 2026',
    titleEn: 'Trieste Photo Fringe 2026',
    titleFa: 'فستیوال فرینج عکاسی تریست ۲۰۲۶',
    festivalDe: 'Trieste Photo Days – Widespread Festival',
    festivalEn: 'Trieste Photo Days – Widespread Festival',
    festivalFa: 'روزهای عکاسی تریست – فستیوال فرینج',
    venue: 'La Preferita',
    address: 'Viale XX Settembre, 29 – Triest, Italien',
    datesDe: '10. Oktober 2026 – 30. November 2026',
    datesEn: 'Saturday, October 10 – Monday, November 30, 2026',
    datesFa: '۱۰ اکتبر تا ۳۰ نوامبر ۲۰۲۶',
    featuredWorkDe: 'Elegance of Structure – Black and White',
    featuredWorkEn: 'Elegance of Structure – Black and White',
    featuredWorkFa: 'شکوه ساختار – سیاه و سفید · Elegance of Structure',
    link: 'https://www.triestephotodays.com/en/events/la-preferita-2026/',
    festivalLink: 'https://www.triestephotodays.com/en/exhibitions/'
  }
];

export interface PublicationItem {
  id: string;
  titleDe: string;
  titleEn: string;
  titleFa: string;
  subtitleDe: string;
  subtitleEn: string;
  subtitleFa: string;
  publisher: string;
  detailsDe?: string;
  detailsEn?: string;
  detailsFa?: string;
  link: string;
  linkTextDe: string;
  linkTextEn: string;
  linkTextFa: string;
  type: 'book' | 'ebook' | 'video' | 'editors-choice';
  coverImage?: string;
}

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: 'perspa-book-2026',
    titleDe: 'PERSPA Awards 2026 Book – Architectural Perspective',
    titleEn: 'PERSPA Awards 2026 Book – Architectural Perspective',
    titleFa: 'کتاب جوایز PERSPA فرانسه ۲۰۲۶ – چشم‌انداز معماری',
    subtitleDe: 'Offizielles Hardcover & E-Book Kompendium',
    subtitleEn: 'Official Hardcover & E-Book Compendium',
    subtitleFa: 'کتاب رسمی جلد سخت و نسخه دیجیتال',
    publisher: 'Prix de la Perspective Architecturale · Bourges, France',
    detailsDe: 'Hardcover ISBN: 979-1044810359 · SchirZans Werke auf den Seiten 20–21, 26, 41 und 168.',
    detailsEn: 'Hardcover ISBN: 979-1044810359 · SchirZan featured on pages 20–21, 26, 41, and 168.',
    detailsFa: 'شابک رسمی: 979-1044810359 · انتشار آثار شیرزن در صفحات ۲۰–۲۱، ۲۶، ۴۱ و ۱۶۸.',
    link: 'https://perspa.fr/book/#cover',
    linkTextDe: 'E-Book & Buchkatalog öffnen →',
    linkTextEn: 'Open E-Book & Catalogue →',
    linkTextFa: 'مشاهده کتاب دیجیتال ←',
    type: 'book',
    coverImage: '/images/2026_07_perspa-1186x2048.jpg'
  },
  {
    id: 'ipa-annual-book-2026',
    titleDe: 'The 2026 Annual International Photography Awards Book',
    titleEn: 'The 2026 Annual International Photography Awards Book',
    titleFa: 'کتاب سالانه جوایز بین‌المللی عکاسی IPA ۲۰۲۶',
    subtitleDe: 'Offizielles Jahrbuch der IPA Preisträger',
    subtitleEn: 'Official Annual IPA Winners Book',
    subtitleFa: 'کتاب رسمی برگزیدگان جوایز بین‌المللی عکاسی',
    publisher: 'International Photography Awards · IPA & Lucie Awards',
    detailsDe: 'Offizieller PDF-Katalog mit den prämierten Architekturserien.',
    detailsEn: 'Official annual commemorative publication featuring awarded architectural series.',
    detailsFa: 'انتشار رسمی کاتالوگ آثار برگزیده معماری.',
    link: 'https://www.photoawards.com/ebook/IPA-2026-ebook.pdf',
    linkTextDe: 'IPA 2026 E-Book · PDF →',
    linkTextEn: 'IPA 2026 E-Book · PDF →',
    linkTextFa: 'دریافت کتاب سالانه IPA ۲۰۲۶ · PDF ←',
    type: 'ebook',
    coverImage: '/images/2026_10_seite-1-1152x1536.jpg'
  },
  {
    id: 'bw-spider-book-2026',
    titleDe: 'Black & White Spider Awards: The Curated Collection 2026',
    titleEn: 'Black & White Spider Awards: The Curated Collection 2026',
    titleFa: 'جوایز بین‌المللی عکاسی اسپایدر: مجموعه برگزیده ۲۰۲۶',
    subtitleDe: 'Amateur Edition & Best of Show Official Awards Book',
    subtitleEn: 'Amateur Edition & Best of Show Official Awards Book',
    subtitleFa: 'کتاب رسمی برگزیدگان عکاسی سیاه و سفید',
    publisher: 'Black & White Spider Awards',
    detailsDe: 'SchirZans prämierte Arbeit »Piano« publiziert auf Seite 37.',
    detailsEn: 'SchirZan’s awarded work "Piano" published on page 37.',
    detailsFa: 'اثر پیانوی معماری در صفحه ۳۷ کتاب رسمی.',
    link: 'https://www.thespiderawards.com/publications/CC26/a/#page=37',
    linkTextDe: 'Katalog auf Seite 37 öffnen →',
    linkTextEn: 'Open Book on Page 37 →',
    linkTextFa: 'مشاهده صفحه ۳۷ در کتاب آنلاین ←',
    type: 'book',
    coverImage: '/images/2026_10_bwspider1-1157x1536.jpg'
  },
  {
    id: 'spider-awards-video',
    titleDe: '20th Annual Architecture Photography Showcase Film',
    titleEn: '20th Annual Architecture Photography Showcase Film',
    titleFa: 'فیلم رسمی برگزیدگان بیستمین دوره عکاسی معماری اسپایدر',
    subtitleDe: 'Offizielles Gewinner-Video der Spider Awards · Vimeo HD',
    subtitleEn: 'Official Spider Awards Winners Video Showcase · Vimeo HD',
    subtitleFa: 'ویدیوی رسمی معرفی آثار برگزیده در کیفیت بالا',
    publisher: 'Black & White Spider Awards',
    detailsDe: 'Internationale Präsentation der prämierten Architekturphotographien.',
    detailsEn: 'International showcase reel featuring the winning architecture photographs.',
    detailsFa: 'پخش رسمی ویدیوهای برگزیدگان بین‌المللی در ویمئو.',
    link: 'https://vimeo.com/1196875037?fl=pl&fe=sh',
    linkTextDe: 'Film auf Vimeo ansehen →',
    linkTextEn: 'Watch Film on Vimeo →',
    linkTextFa: 'تماشای فیلم در ویمئو ←',
    type: 'video'
  },
  {
    id: 'globallens-editors-choice',
    titleDe: 'Global Lens Photography Awards 2026 – 3. Platz (Third Place)',
    titleEn: 'Global Lens Photography Awards 2026 – 3rd Place (Third Place)',
    titleFa: 'مقام سوم جوایز بین‌المللی عکس گلوبال لنز ۲۰۲۶',
    subtitleDe: '3. Platz in Architecture Photography (Abstract) für »The Solitaire as Abstraction – In Harmony with Nature«',
    subtitleEn: '3rd Place in Architecture Photography (Abstract) for "The Solitaire as Abstraction – In Harmony with Nature"',
    subtitleFa: 'مقام سوم در عکاسی معماری (انتزاعی) برای تک‌بنا در هماهنگی با طبیعت',
    publisher: 'Global Lens Photography Awards',
    detailsDe: 'Offizielle internationale Prämierung mit dem 3. Platz (Third Place) in der Kategorie Architecture Photography / Abstract.',
    detailsEn: 'Official international award winning 3rd Place (Third Place) in Architecture Photography / Abstract.',
    detailsFa: 'کسب رتبه سوم بین‌المللی در بخش عکاسی معماری انتزاعی.',
    link: 'https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/',
    linkTextDe: 'Gewinner-Profil ansehen →',
    linkTextEn: 'View Winner Profile →',
    linkTextFa: 'مشاهده اثر در سایت گلوبال لنز ←',
    type: 'editors-choice',
    coverImage: '/images/badges_custom/globallens_2026_3rd_place.png'
  },
  {
    id: 'perspa-editors-choice',
    titleDe: 'PERSPA 2026 – Editor’s Choice Galerie in Bourges, Frankreich',
    titleEn: 'PERSPA 2026 – Editor’s Choice Gallery in Bourges, France',
    titleFa: 'گالری برگزیدگان سردبیر PERSPA فرانسه ۲۰۲۶',
    subtitleDe: 'Auswahl für Solitaire & Elegance of Structure',
    subtitleEn: 'Selection: Solitaire & Elegance of Structure',
    subtitleFa: 'انتخاب آثار برجسته معماری (سولیتر و الگانس)',
    publisher: 'Prix de la Perspective Architecturale',
    detailsDe: 'Ausgewählt für die kuratierte offizielle Editor’s Choice Galerie in Frankreich.',
    detailsEn: 'Selected for the official curated gallery showcase in France.',
    detailsFa: 'نمایش در گالری برگزیدگان رسمی در فرانسه.',
    link: 'https://perspa.fr/editor-choice/',
    linkTextDe: 'PERSPA Galerie öffnen →',
    linkTextEn: 'Open PERSPA Gallery →',
    linkTextFa: 'مشاهده گالری رسمی PERSPA ←',
    type: 'editors-choice',
    coverImage: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp'
  },
  {
    id: 'ipa-annual-book-2025',
    titleDe: 'The 2025 Annual International Photography Awards Book',
    titleEn: 'The 2025 Annual International Photography Awards Book',
    titleFa: 'کتاب سالانه جوایز بین‌المللی عکاسی IPA ۲۰۲۵',
    subtitleDe: 'Offizielles Jahrbuch der IPA Preisträger 2025',
    subtitleEn: 'Official Annual IPA Winners Book 2025',
    subtitleFa: 'کتاب رسمی برگزیدگان سال ۲۰۲۵',
    publisher: 'International Photography Awards · IPA & Lucie Awards',
    detailsDe: 'Preisträger-Publikation inklusive »The Solitaire as an Abstraction«.',
    detailsEn: 'Award winner edition featuring "The Solitaire as an Abstraction".',
    detailsFa: 'چاپ اثر شاخص تک‌بنا به عنوان یک انتزاع.',
    link: 'https://www.photoawards.com/books/IPA-2025-EBOOK.pdf',
    linkTextDe: 'IPA 2025 E-Book · PDF →',
    linkTextEn: 'IPA 2025 E-Book · PDF →',
    linkTextFa: 'دریافت کتاب سالانه IPA ۲۰۲۵ · PDF ←',
    type: 'ebook',
    coverImage: '/images/2026_06_ebook-01-1152x1536.jpg'
  },
  {
    id: 'apmp-magcloud-2025',
    titleDe: 'Architecture Photography MasterPrize Winners Book 2025',
    titleEn: 'Architecture Photography MasterPrize Winners Book 2025',
    titleFa: 'کتاب برگزیدگان مسترپرایز عکاسی معماری ۲۰۲۵',
    subtitleDe: 'Offizielle MagCloud-Katalogpublikation',
    subtitleEn: 'Official MagCloud Print & Digital Edition',
    subtitleFa: 'چاپ رسمی کاتالوگ بین‌المللی مسترپرایز معماری',
    publisher: 'Architecture MasterPrize · AMP & APMP',
    detailsDe: 'Gewinnerin in Exterior Architecture Photography – Other Exterior.',
    detailsEn: 'Winner in Exterior Architecture Photography – Other Exterior.',
    detailsFa: 'برنده جایزه عکاسی معماری نمای بیرونی.',
    link: 'https://www.magcloud.com/browse/issue/3262571',
    linkTextDe: 'MagCloud Magazin ansehen →',
    linkTextEn: 'View MagCloud Issue →',
    linkTextFa: 'مشاهده در مگ‌کلود ←',
    type: 'book'
  },
  {
    id: 'mleuv-newsletter-2025',
    titleDe: 'Ministerium für Umwelt Brandenburg: Titelphoto MLEUV-Newsletter',
    titleEn: 'Ministry for Environment Brandenburg: Newsletter Cover Feature',
    titleFa: 'تصویر روی جلد خبرنامه رسمی وزارت محیط زیست براندنبورگ',
    subtitleDe: 'Ausgabe Juli 2025 · Klatschmohn vor zeitgenössischer Architektur',
    subtitleEn: 'July 2025 Issue · Poppies in dialogue with contemporary architecture',
    subtitleFa: 'نسخه ژوئیه ۲۰۲۵ · شقایق‌های سرخ در تضاد با معماری مدرن',
    publisher: 'Ministerium für Landwirtschaft, Umwelt und Klimaschutz Brandenburg',
    detailsDe: 'Schahrsad Shahmirzadis Photographie von leuchtendem Mohn vor moderner Architektur erschien als Titelbild der offiziellen Publikation des Ministeriums in Potsdam.',
    detailsEn: 'Schahrsad Shahmirzadi’s photograph of radiant poppies before modern architecture was selected as the cover photo of the official ministry publication.',
    detailsFa: 'انتشار عکس شهزاد شاهمیرزادی به عنوان تصویر شاخص روی جلد نشریه رسمی وزارت محیط زیست در پوتسدام.',
    link: 'https://schahrsad-shahmirzadi.com/',
    linkTextDe: 'Offizielle Ministeriumspublikation →',
    linkTextEn: 'Official Ministry Publication →',
    linkTextFa: 'انتشارات رسمی وزارتخانه ←',
    type: 'ebook'
  }
];

// Helper to convert any FurtherWork into a full PhotoSeries for SeriesDetail modal viewing
function furtherWorkToSeries(
  work: FurtherWork,
  category: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits'
): PhotoSeries {
  return {
    id: work.id,
    category,
    titleDe: work.titleDe,
    titleEn: work.titleEn,
    titleFa: work.titleFa,
    subtitleDe: `${work.category} (${work.galleryPhotos?.length || 1} Werke)`,
    subtitleEn: `${work.category} (${work.galleryPhotos?.length || 1} Works)`,
    subtitleFa: `${work.categoryFa || work.category} (${work.galleryPhotos?.length || 1} اثر)`,
    descriptionDe: work.descriptionDe || work.awardsDe,
    descriptionEn: work.descriptionEn || work.awardsEn,
    descriptionFa: work.descriptionFa || work.awardsFa,
    personalNoteDe: work.personalNoteDe,
    personalNoteEn: work.personalNoteEn,
    personalNoteFa: work.personalNoteFa,
    coverImage: work.previewImage || (work.galleryPhotos && work.galleryPhotos[0]?.src) || '',
    photos: work.galleryPhotos || [],
    badges: (work.badgeNames || []).map((name, idx) => ({
      id: `${work.id}-badge-${idx}`,
      name,
      award: name,
      year: '2026',
      badgeImage: '/images/2026_10_winners_badge-1024x474.webp',
      link: work.link || 'https://schahrsad-shahmirzadi.com',
      position: 'inline' as const
    }))
  };
}

// Complete series registry enabling viewing full photo series for EVERY artwork on the website
export const ALL_SERIES_MAP: Record<string, PhotoSeries> = {
  [SOLITAIRE_SERIES_1.id]: SOLITAIRE_SERIES_1,
  [SOLITAIRE_SERIES_2.id]: SOLITAIRE_SERIES_2,
};

FURTHER_WORKS_ARCHITECTURE.forEach(w => {
  if (w.galleryPhotos && w.galleryPhotos.length > 0) {
    ALL_SERIES_MAP[w.id] = furtherWorkToSeries(w, 'architecture');
  }
});

FINE_ART_WORKS.forEach(w => {
  if (w.galleryPhotos && w.galleryPhotos.length > 0) {
    ALL_SERIES_MAP[w.id] = furtherWorkToSeries(w, 'fine-art');
  }
});

SOCIAL_ENVIRONMENTAL_WORKS.forEach(w => {
  if (w.galleryPhotos && w.galleryPhotos.length > 0) {
    ALL_SERIES_MAP[w.id] = furtherWorkToSeries(w, 'social-environmental');
  }
});

PORTRAIT_WORKS.forEach(w => {
  if (w.galleryPhotos && w.galleryPhotos.length > 0) {
    ALL_SERIES_MAP[w.id] = furtherWorkToSeries(w, 'portraits');
  }
});

export function findSeriesForPhoto(photo: PhotoItem | undefined | null): PhotoSeries | null {
  if (!photo) return null;
  // 1. Direct search in ALL_SERIES_MAP by photo ID or src
  for (const s of Object.values(ALL_SERIES_MAP)) {
    if (s.photos.some(p => (photo.id && p.id === photo.id) || (photo.src && p.src === photo.src))) {
      return s;
    }
  }
  // 2. Search by base ID (e.g. 'architectural-piano-02' -> 'architectural-piano')
  if (photo.id) {
    const baseId = photo.id.replace(/-\d+$/, '');
    if (ALL_SERIES_MAP[baseId]) {
      return ALL_SERIES_MAP[baseId];
    }
    if (ALL_SERIES_MAP[photo.id]) {
      return ALL_SERIES_MAP[photo.id];
    }
  }
  return null;
}
