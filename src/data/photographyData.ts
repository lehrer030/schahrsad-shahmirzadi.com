export type Language = 'de' | 'en' | 'fa';

export interface AwardBadge {
  id: string;
  name: string;
  year: string;
  category?: string;
  award: string;
  awardFa?: string;
  badgeImage: string;
  link: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'inline';
}

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
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
}

export interface PhotoSeries {
  id: string;
  category: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits';
  titleDe: string;
  titleEn: string;
  titleFa: string;
  subtitleDe: string;
  subtitleEn: string;
  subtitleFa: string;
  descriptionDe: string;
  descriptionEn: string;
  descriptionFa: string;
  personalNoteDe?: string;
  personalNoteEn?: string;
  personalNoteFa?: string;
  coverImage: string;
  photos: PhotoItem[];
  badges: AwardBadge[];
}

export interface FurtherWork {
  id: string;
  titleDe: string;
  titleEn: string;
  titleFa: string;
  category: string;
  categoryFa?: string;
  awardsDe: string;
  awardsEn: string;
  awardsFa: string;
  badgeNames: string[];
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
  descriptionDe: string;
  descriptionEn: string;
  descriptionFa: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'architecture',
    titleDe: 'Architektur',
    titleEn: 'Architecture',
    titleFa: 'معماری',
    descriptionDe: 'Prämierte Architekturfotografien mit Schwerpunkt auf solitären Bauwerken und geometrischen Strukturen.',
    descriptionEn: 'Award-winning architectural photography focusing on solitary structures and geometric forms.',
    descriptionFa: 'عکس‌های برگزیده معماری با تمرکز بر تک‌بناها و ساختارهای هندسی.'
  },
  {
    id: 'fine-art',
    titleDe: 'Fine Art',
    titleEn: 'Fine Art',
    titleFa: 'هنرهای زیبا (فاین آرت)',
    descriptionDe: 'Fotografische Arbeiten im Bereich Fine Art und Bildkomposition.',
    descriptionEn: 'Photographic works in fine art and visual composition.',
    descriptionFa: 'آثار عکاسی در حوزه هنرهای زیبا و ترکیب‌بندی تصویر.'
  },
  {
    id: 'social-environmental',
    titleDe: 'Gesellschaft & Umwelt',
    titleEn: 'Social & Environmental Themes',
    titleFa: 'مضامین اجتماعی و زیست‌محیطی',
    descriptionDe: 'Fotografische Dokumentationen zu Menschenrechten, gesellschaftlichen Themen und Tierschutz.',
    descriptionEn: 'Photographic documentation on human rights, social issues, and animal welfare.',
    descriptionFa: 'مستندسازی‌های عکاسی در حوزه حقوق بشر، موضوعات اجتماعی و حمایت از حیوانات.'
  },
  {
    id: 'portraits',
    titleDe: 'Porträts',
    titleEn: 'Portraits',
    titleFa: 'پرتره‌ها',
    descriptionDe: 'Fotografische Porträts und Selbstporträts.',
    descriptionEn: 'Photographic portraits and self-portraits.',
    descriptionFa: 'پرتره‌ها و خودنگاره‌های عکاسی.'
  },
  {
    id: 'biography',
    titleDe: 'Vita & Engagement',
    titleEn: 'Vita & Commitment',
    titleFa: 'زندگی‌نامه و تعهدات',
    descriptionDe: 'Biografie, akademischer Werdegang, sportliche Erfolge im Kickboxen und soziales Engagement.',
    descriptionEn: 'Biography, academic career, kickboxing achievements, and community engagement.',
    descriptionFa: 'زندگی‌نامه، پیشینه دانشگاهی، موفقیت‌های ورزشی در کیک‌بوکسینگ و فعالیت‌های اجتماعی.'
  },
  {
    id: 'press',
    titleDe: 'Presse & Medien',
    titleEn: 'Press & Media',
    titleFa: 'رسانه‌ها و مطبوعات',
    descriptionDe: 'Internationale Publikationen, Medienberichte und offizielle Auszeichnungskataloge.',
    descriptionEn: 'International publications, press features, and official award catalogues.',
    descriptionFa: 'انتشارات بین‌المللی، گزارش‌های رسانه‌ای و کتاب‌های برگزیدگان مسابقات.'
  }
];

export const INTRO_CONTENT = {
  mainHeader: 'Photography – Works – International Awards',
  mainHeaderDe: 'Photographie – Werke – Internationale Auszeichnungen',
  mainHeaderFa: 'عکاسی – آثار – جوایز بین‌المللی',
  subtitleDe: 'Fotografie & Kunst · Mehrfach international ausgezeichnet & prämiert',
  subtitleEn: 'Photography & Art · Internationally awarded & recognized multiple times',
  subtitleFa: 'عکاسی و هنر · برنده جوایز متعدد و شناخته‌شده در سطح بین‌المللی',
  competitions: [
    'International Photography Awards (IPA) 2026',
    'Architecture MasterPrize (AMP) 2026',
    'PRIX DE LA PERSPECTIVE ARCHITECTURALE (PERSPA - FRANCE) 2026',
    'Budapest International Foto Awards (BIFA) 2026',
    'URBAN Photo Awards 2026',
    'Architecture MasterPrize (AMP) 2025',
    'International Photography Awards (IPA) 2025',
    'ND Awards 2025',
    'Black & White Spider Awards 2025',
    'London International Creative Competition (LICC) 2025'
  ],
  photoCredit: 'Photo: Steve Barret',
  artistSectionTitleDe: 'Photographie, Künstlername und Inspiration',
  artistSectionTitleEn: 'Photography, Artist Name and Inspiration',
  artistSectionTitleFa: 'عکاسی، نام هنری و الهام‌بخش (شیرزن)',
  artistNameDe: 'Schahrsad Shahmirzadi (SchirZan)',
  artistNameEn: 'Schahrsad Shahmirzadi (SchirZan)',
  artistNameFa: 'شهزاد شاهمیرزادی (شیرزن)',
  artistExplanationDe: `Schahrsad Shahmirzadi präsentiert ihre Fotografie und Kunst unter dem Künstlernamen SchirZan. Der Name stammt aus dem Persischen und verbindet zwei Worte:

• Shir (شیر), bedeutet »Löwe«
• Zan (زن), bedeutet »Frau«

Zusammen bedeutet »SchirZan« die »Löwenfrau« oder »Löwin« und verkörpert den Mut, seinen eigenen Weg zu gehen.

Für sie steht »SchirZan« auch für das Engagement, sich für benachteiligte Menschen einzusetzen, deren Stimmen Sichtbarkeit zu verleihen und für Gerechtigkeit, Gleichberechtigung und Menschlichkeit einzutreten.

Durch Fotografie kann sie einen Moment gelebter Erfahrung für die Ewigkeit bewahren – ein Gedanke, der sie jedes Mal aufs Neue bewegt.

Das Wort »Photographie« leitet sich aus dem Altgriechischen ab: φῶς, phōs (Genitiv φωτός, phōtos), was »Licht« bedeutet, und γράφειν, gráphein, was »schreiben« oder »zeichnen« bedeutet. Im übertragenen Sinne bedeutet es »Zeichnen mit Licht«.

Ihre bewusste Wahl der traditionellen deutschen Schreibweise »Photographie« mit »ph« statt »f« spiegelt diesen Ursprung wider. Durch die konsequente Beibehaltung dieser Schreibweise macht sie die Verbindung zur Geschichte des Mediums sichtbar und unterstreicht ihren Anspruch, bewusst und künstlerisch mit dem Licht zu arbeiten.`,
  artistExplanationEn: `Schahrsad Shahmirzadi presents her photography and art under the artist name SchirZan. The name comes from Persian and combines two words:

• Shir (شیر), meaning "lion"
• Zan (زن), meaning "woman"

Together, "SchirZan" conveys "lion-woman" or "lioness" and embodies the courage to follow one's own path.

For her, "SchirZan" also represents a commitment to standing up for disadvantaged people, bringing visibility to their voices, and advocating for justice, equality, and humanity.

Through photography, she can preserve a moment of lived experience for eternity—a thought that moves her anew each time.

The word "photography" derives from Ancient Greek: φῶς, phōs (genitive phōtos), meaning "light," and γράφειν, gráphein, meaning "to write" or "to draw." Figuratively, it means "drawing with light."

Her deliberate use of the traditional German spelling "Photographie," with "ph" rather than "f," reflects this origin. By consistently choosing this spelling, she makes the connection to the medium's history visible and emphasises her commitment to working consciously and artistically with light.`,
  artistExplanationFa: `شهزاد شاهمیرزادی آثار عکاسی و هنری خود را با نام هنری «شیرزن» (SchirZan) ارائه می‌دهد. این نام اصیل از زبان فارسی برگرفته شده و از ترکیب دو واژه پدید آمده است:

• شیر (Shir)، به معنای نماد شجاعت و دلیری
• زن (Zan)، به معنای زن و آفریننده

ترکیب «شیرزن» تجلی زنی شجاع و جسور است که شهامت پیمودن مسیر مستقل و ویژه خویش را داراست.

برای او، «شیرزن» فراتر از یک نام، تعهدی عمیق در جهت ایستادگی در کنار انسان‌های کم‌برخوردار، بخشیدن صدا و دیده‌شدن به آنان و دفاع از عدالت، برابری و انسانیت است.

از دریچه عکاسی، او می‌تواند لحظه‌ای سرشار از تجربه زیسته را برای همیشه و ابدیت ثبت و ماندگار سازد — اندیشه‌ای والا که هر بار روح او را از نو به وجد می‌آورد.

واژه عکاسی (Photographie) ریشه در زبان یونانی باستان دارد: φῶς (phōs)، به معنای «نور»، و γράφειن (gráphein)، به معنای «نگاشتن یا رسم کردن». در تعبیر نمادین، این هنر به مفهوم «نقاشی و نگارش با نور» است.

انتخاب آگاهانه املای سنتی و تاریخی آلمانی «Photographie» با حروف «ph» به جای «f»، بازتابی مستقیم از این خاستگاه کهن است تا پیوند زنده با تاریخچه این رسانه همواره مشهود مانده و بر رویکرد هوشمندانه و هنرمندانه او با عنصر نور تأکید ورزد.`
};

export const SOLITAIRE_SERIES_1: PhotoSeries = {
  id: 'the-solitaire-as-abstraction-in-harmony-with-nature',
  category: 'architecture',
  titleDe: 'Der Solitär als Abstraktion – Im Einklang mit der Natur',
  titleEn: 'The Solitaire as Abstraction – In Harmony with Nature',
  titleFa: 'The Solitaire as Abstraction – In Harmony with Nature (تک‌بنا به مثابه انتزاع – در هماهنگی با طبیعت)',
  subtitleDe: 'Architektur / Sonstige Außenaufnahmen (7 Werke)',
  subtitleEn: 'Architecture / Other Exterior (7 Works)',
  subtitleFa: 'معماری / سازه‌های بیرونی (۷ اثر)',
  descriptionDe: `Diese Serie untersucht eine solitäre urbane Gebäudestruktur im Wechselspiel mit Licht, Schatten und der umgebenden Natur. Die Fotografien fokussieren auf architektonische Geometrie, klare Kanten und die Reflexionen des Himmels auf der Fassade. Im Zentrum steht die visuelle Verbindung zwischen gebautem Raum und natürlicher Umwelt.`,
  descriptionEn: `This series investigates a solitary urban building structure in interaction with light, shadow, and surrounding nature. The photographs focus on architectural geometry, clear contours, and the sky’s reflections on the facade, examining the visual relationship between built space and the natural environment.`,
  descriptionFa: `این مجموعه عکاسی، ساختار یک بنای منفرد شهری را در پیوند با نور، سایه و طبیعت پیرامون بررسی می‌کند. تمرکز تصاویر بر هندسه معماری، خطوط صریح و بازتاب آسمان بر نما قرار دارد.`,
  coverImage: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp',
  badges: [
    {
      id: 'perspa-2026-hm',
      name: 'Prix de la Perspective Architecturale 2026',
      year: '2026',
      award: 'Honorable Mention & Editor’s Choice',
      awardFa: 'تقدیر ویژه و انتخاب سردبیر',
      badgeImage: '/images/email_badges/perspa_2026_silver.png',
      link: 'https://perspa.fr/winners/architectural-perspective/#work-132',
      position: 'bottom-left'
    },
    {
      id: 'bifa-2026-hm',
      name: 'Budapest International Foto Awards 2026',
      year: '2026',
      award: 'Honorable Mention 2026',
      awardFa: 'تقدیر ویژه ۲۰۲۶',
      badgeImage: '/images/email_badges/bifa_2026_gold.png',
      link: 'https://budapestfotoawards.com/',
      position: 'top-right'
    },
    {
      id: 'ipa-2026-hm',
      name: 'International Photography Awards 2026',
      year: '2026',
      award: 'Honorable Mention & Official Selection',
      awardFa: 'تقدیر ویژه و برگزیده رسمی',
      badgeImage: '/images/email_badges/ipa_2026_hm_ribbon.png',
      link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613449-25',
      position: 'bottom-right'
    },
    {
      id: 'amp-2025-winner',
      name: 'Architecture MasterPrize 2025',
      year: '2025',
      award: 'Student Photography Winner (Other Exterior)',
      awardFa: 'برنده جایزه عکاسی دانشجویی (معماری بیرونی)',
      badgeImage: '/images/email_badges/amp_2025_winner.png',
      link: 'https://architectureprize.com/winners/winner.php?id=8533',
      position: 'top-left'
    }
  ],
  photos: [
    {
      id: 'solitaire-harmony-01',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature I',
      captionDe: 'Bild 01 · Aufstrebende Geometrie und der Beginn des Himmelsdialogs',
      captionEn: 'Image 01 · Ascending geometry and the beginning dialogue with the sky',
      captionFa: 'تصویر ۰۱ · هندسه صعودی و آغاز گفت‌وگو با آسمان'
    },
    {
      id: 'solitaire-harmony-02',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-02-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature II',
      captionDe: 'Bild 02 · Fassadenschnitt und rhythmische Linienführung',
      captionEn: 'Image 02 · Facade section and rhythmic interplay of lines',
      captionFa: 'تصویر ۰۲ · برش نما و ریتم موزون خطوط'
    },
    {
      id: 'solitaire-harmony-03',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-03-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature III',
      captionDe: 'Bild 03 · Lichtspiel und prismatische Schattensetzungen',
      captionEn: 'Image 03 · Play of light and prismatic shadow dynamics',
      captionFa: 'تصویر ۰۳ · بازی نور و سایه‌روشن‌های منشوری'
    },
    {
      id: 'solitaire-harmony-04',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-04-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature IV',
      captionDe: 'Bild 04 · Vertikale Akzente und Reflexionen',
      captionEn: 'Image 04 · Vertical accents and atmospheric reflections',
      captionFa: 'تصویر ۰۴ · تأکیدهای عمودی و بازتاب‌های جوی'
    },
    {
      id: 'solitaire-harmony-05',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-05-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature V',
      captionDe: 'Bild 05 · Geometrische Reduktion und Balance',
      captionEn: 'Image 05 · Geometric reduction and balance',
      captionFa: 'تصویر ۰۵ · ایجاز هندسی و توازن ساختاری'
    },
    {
      id: 'solitaire-harmony-06',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-06-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature VI',
      captionDe: 'Bild 06 · Kantenschärfe und weicher Wolkenhorizont',
      captionEn: 'Image 06 · Edge clarity contrasting soft cloud horizons',
      captionFa: 'تصویر ۰۶ · تیزی لبه‌ها در تقابل با لطافت افق ابری'
    },
    {
      id: 'solitaire-harmony-07',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-07-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature VII',
      captionDe: 'Bild 07 · Synthese aus Baumaterial und natürlicher Weite',
      captionEn: 'Image 07 · Synthesis of architectural material and expansive nature',
      captionFa: 'تصویر ۰۷ · هم‌نشینی متریال معماری و وسعت بی‌پایان طبیعت'
    }
  ]
};

export const SOLITAIRE_SERIES_2: PhotoSeries = {
  id: 'the-solitaire-as-an-abstraction-revised',
  category: 'architecture',
  titleDe: 'Der Solitär als Abstraktion (Überarbeitete Fassung)',
  titleEn: 'The Solitaire as an Abstraction (Revised)',
  titleFa: 'The Solitaire as an Abstraction (Revised) (تک‌بنا به مثابه انتزاع - نسخه بازنگری‌شده)',
  subtitleDe: 'Architektur / Abstrakt (5 Werke)',
  subtitleEn: 'Architecture / Abstract (5 Works)',
  subtitleFa: 'معماری / انتزاعی (۵ اثر)',
  descriptionDe: `Die Werkserie dokumentiert die architektonischen Linien einer urbanen Fassade im natürlichen Tageslichtverlauf. Präzise Blickwinkel betonen die geometrische Rhythmik, Materialität und die Kontraste zwischen Baukörper und offenem Himmel.`,
  descriptionEn: `This body of work documents the architectural lines of an urban facade throughout the course of natural daylight. Precise viewpoints emphasize geometric rhythm, materiality, and contrasts between structure and open sky.`,
  descriptionFa: `این مجموعه، خطوط معماری یک نمای شهری را در امتداد نور طبیعی روز مستند می‌سازد. زاویه‌های دقیق نگاه، ریتم هندسی، کیفیت مصالح و تضاد سازه با آسمان را برجسته می‌کنند.`,
  personalNoteDe: 'Persönliche Widmung: The Solitaire as an Abstraction entstand am Vatertag, dem 29. Mai 2025, in Berlin-Halensee und ist meinem Vater K. Shahmirzadi gewidmet.',
  personalNoteEn: 'Personal Note: The Solitaire as an Abstraction was created on Father’s Day, May 29, 2025, in Berlin-Halensee and is dedicated to my father, K. Shahmirzadi.',
  personalNoteFa: 'یادداشت و تقدیم شخصی: مجموعه «تک‌بنا به مثابه انتزاع» در روز پدر، ۲۹ مه ۲۰۲۵، در برلین-هالنزه‌ خلق شد و با تمام احترام به پدرم، ک. شاهمیرزادی، تقدیم گردیده است.',
  coverImage: '/images/2026_10_amp-2026-winner-solitaire-revised-01-scaled.webp',
  badges: [
    {
      id: 'amp-2026-winner',
      name: 'Architecture MasterPrize 2026',
      year: '2026',
      award: 'Student Photography Winner 2026',
      awardFa: 'برنده جایزه عکاسی دانشجویی ۲۰۲۶',
      badgeImage: '/images/email_badges/amp_2026_winner.png',
      link: 'https://architectureprize.com/',
      position: 'top-left'
    },
    {
      id: 'perspa-2026-2nd',
      name: 'Prix de la Perspective Architecturale 2026',
      year: '2026',
      award: 'Second Prize (Abstract Architecture)',
      awardFa: 'جایزه دوم (معماری انتزاعی)',
      badgeImage: '/images/email_badges/perspa_2026_second.png',
      link: 'https://perspa.fr/winners/architectural-perspective/#work-412',
      position: 'bottom-left'
    },
    {
      id: 'ipa-2026-os',
      name: 'International Photography Awards 2026',
      year: '2026',
      award: 'Official Selection (Non-Professional)',
      awardFa: 'برگزیده رسمی بخش غیرحرفه‌ای',
      badgeImage: '/images/email_badges/ipa_2026_os_ribbon.png',
      link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722617898-26',
      position: 'bottom-right'
    }
  ],
  photos: [
    {
      id: 'solitaire-revised-01',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-01-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) I',
      captionDe: 'Bild 01 · Monumentale Diagonale und Hell-Dunkel-Kontrast',
      captionEn: 'Image 01 · Monumental diagonal and chiaroscuro contrast',
      captionFa: 'تصویر ۰۱ · مورب باشکوه و تضاد چشمگیر سایه‌روشن'
    },
    {
      id: 'solitaire-revised-02',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-02-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) II',
      captionDe: 'Bild 02 · Geometrischer Rhythmus der Fassadenelemente',
      captionEn: 'Image 02 · Geometric rhythm of facade elements',
      captionFa: 'تصویر ۰۲ · ریتم موزون اجزای نما'
    },
    {
      id: 'solitaire-revised-03',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-03-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) III',
      captionDe: 'Bild 03 · Fluchtpunkt und Tiefenwirkung',
      captionEn: 'Image 03 · Vanishing point and profound depth',
      captionFa: 'تصویر ۰۳ · نقطه گریز و ژرفای بصری'
    },
    {
      id: 'solitaire-revised-04',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-04-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) IV',
      captionDe: 'Bild 04 · Strukturierte Reduktion auf Form und Fläche',
      captionEn: 'Image 04 · Structured reduction to form and plane',
      captionFa: 'تصویر ۰۴ · ایجاز ساختاریافته به فرم و سطح'
    },
    {
      id: 'solitaire-revised-05',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-05-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) V',
      captionDe: 'Bild 05 · Architektonischer Abschluss in Klarheit',
      captionEn: 'Image 05 · Architectural culmination in clarity',
      captionFa: 'تصویر ۰۵ · کمال معماری در شفافیت و صراحت'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26',
        descriptionDe: "Der Wasserturm als Wahrzeichen industrieller Berliner Baukultur wird aus unerwarteten Blickwinkeln portr\u00e4tiert. Die massive Klinkerarchitektur tritt in einen spannungsvollen Dialog mit dem offenen Himmelsraum.",
    descriptionEn: "The water tower as a landmark of Berlin\u2019s industrial heritage is portrayed from unexpected perspectives. The massive brick architecture enters into a compelling dialogue with the open sky.",
    descriptionFa: "\u0628\u0631\u062c \u0622\u0628 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0627\u062f\u06cc \u0627\u0632 \u0645\u06cc\u0631\u0627\u062b \u0635\u0646\u0639\u062a\u06cc \u0628\u0631\u0644\u06cc\u0646 \u0627\u0632 \u0632\u0648\u0627\u06cc\u0627\u06cc\u06cc \u0646\u0627\u0645\u0646\u062a\u0638\u0631 \u0628\u0647 \u062a\u0635\u0648\u06cc\u0631 \u06a9\u0634\u06cc\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a. \u0645\u0639\u0645\u0627\u0631\u06cc \u0622\u062c\u0631\u06cc \u062f\u0631 \u06af\u0641\u062a\u200c\u0648\u06af\u0648\u06cc\u06cc \u0632\u0646\u062f\u0647 \u0628\u0627 \u0641\u0636\u0627\u06cc \u0628\u0627\u0632 \u0622\u0633\u0645\u0627\u0646 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f.",
previewImage: '/images/2026_10_amp-2026-echoes-water-tower-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'echoes-water-tower-01',
        src: '/images/2026_10_amp-2026-echoes-water-tower-01-scaled.webp',
        alt: 'Echoes of a Water Tower – Schahrsad Shahmirzadi',
        captionDe: 'Echoes of a Water Tower – SchirZan',
        captionEn: 'Echoes of a Water Tower – SchirZan',
        captionFa: 'پژواک برج آب – شیرزن'
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
    link: 'https://architectureprize.com/',
        descriptionDe: "Diese Serie abstrahiert eine moderne Geb\u00e4udefassade, deren vertikale Fensterb\u00e4nder wie die Tasten eines Pianos wirken. Rhythmus, Wiederholung und die strenge Ausrichtung der Fensterachsen erzeugen eine visuelle Partitur architektonischer Harmonie.",
    descriptionEn: "This series abstracts a modern facade, where vertical windows appear like the keys of a piano. Rhythm, repetition, and the precise alignment of window axes create a powerful graphic score, echoing musical harmony.",
    descriptionFa: "\u0627\u06cc\u0646 \u0645\u062c\u0645\u0648\u0639\u0647 \u0646\u0645\u0627\u06cc \u0645\u062f\u0631\u0646 \u06cc\u06a9 \u0633\u0627\u062e\u062a\u0645\u0627\u0646 \u0631\u0627 \u0627\u0646\u062a\u0632\u0627\u0639 \u0645\u06cc\u200c\u06a9\u0646\u062f\u061b \u062c\u0627\u06cc\u06cc \u06a9\u0647 \u0646\u0648\u0627\u0631\u0647\u0627\u06cc \u0639\u0645\u0648\u062f\u06cc \u067e\u0646\u062c\u0631\u0647\u200c\u0647\u0627 \u0647\u0645\u0686\u0648\u0646 \u06a9\u0644\u0627\u0648\u06cc\u0647\u200c\u0647\u0627\u06cc \u067e\u06cc\u0627\u0646\u0648 \u062c\u0644\u0648\u0647\u200c\u06af\u0631 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0648 \u0636\u0631\u0628\u200c\u0622\u0647\u0646\u06af \u0648 \u062a\u06a9\u0631\u0627\u0631 \u06cc\u06a9 \u067e\u0627\u0631\u062a\u06cc\u062a\u0648\u0631 \u0628\u0635\u0631\u06cc \u062e\u0644\u0642 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.",
previewImage: '/images/2026_10_amp-2026-architectural-piano-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'architectural-piano-01',
        src: '/images/2026_10_amp-2026-architectural-piano-01-scaled.webp',
        alt: 'Architectural Piano 01 – Schahrsad Shahmirzadi',
        captionDe: 'Architectural Piano I – SchirZan',
        captionEn: 'Architectural Piano I – SchirZan',
        captionFa: 'پیانوی معماری ۱ – شیرزن'
      },
      {
        id: 'architectural-piano-02',
        src: '/images/2026_10_amp-2026-architectural-piano-02-scaled.webp',
        alt: 'Architectural Piano 02 – Schahrsad Shahmirzadi',
        captionDe: 'Architectural Piano II – SchirZan',
        captionEn: 'Architectural Piano II – SchirZan',
        captionFa: 'پیانوی معماری ۲ – شیرزن'
      },
      {
        id: 'architectural-piano-03',
        src: '/images/2026_10_amp-2026-architectural-piano-03-scaled.webp',
        alt: 'Architectural Piano 03 – Schahrsad Shahmirzadi',
        captionDe: 'Architectural Piano III – SchirZan',
        captionEn: 'Architectural Piano III – SchirZan',
        captionFa: 'پیانوی معماری ۳ – شیرزن'
      },
      {
        id: 'architectural-piano-04',
        src: '/images/2026_10_amp-2026-architectural-piano-04-scaled.webp',
        alt: 'Architectural Piano 04 – Schahrsad Shahmirzadi',
        captionDe: 'Architectural Piano IV – SchirZan',
        captionEn: 'Architectural Piano IV – SchirZan',
        captionFa: 'پیانوی معماری ۴ – شیرزن'
      }
    ]
  },
  {
    id: 'elegance-of-structure',
    titleDe: 'Elegance of Structure (B&W / Symphony of Light)',
    titleEn: 'Elegance of Structure (B&W / Symphony of Light)',
    titleFa: 'Elegance of Structure (شکوه و ظرافت ساختار)',
    category: 'Architecture / Interior',
    categoryFa: 'معماری / فضای داخلی',
    awardsDe: 'AMP 2026 — HM (Interior Details) · BIFA 2026 — HM · PERSPA 2026 — Editor’s Choice · IPA 2026 — Official Selection',
    awardsEn: 'AMP 2026 — HM (Interior Details) · BIFA 2026 — HM · PERSPA 2026 — Editor’s Choice · IPA 2026 — Official Selection',
    awardsFa: 'AMP 2026 — تقدیر جزئیات داخلی · BIFA 2026 — تقدیر ویژه · PERSPA 2026 — انتخاب سردبیر · IPA 2026 — برگزیده رسمی',
    badgeNames: ['AMP 2026 HM', 'BIFA 2026 HM', 'PERSPA Editor’s Choice', 'IPA 2026 OS'],
    link: 'https://perspa.fr/2026/season-1-architectural-perspective/elegance-of-structure-black-and-white-2/',
        descriptionDe: "Diese Fotografien pr\u00e4sentieren das Interieur der Griechischen Nationaloper in Athen als Gesamtkunstwerk \u2013 von weitl\u00e4ufigen Atrien bis zu raffinierten architektonischen Linien, in denen Licht, Materialien und Raumrhythmus pr\u00e4zise harmonieren.",
    descriptionEn: "These photographs present the interior of the Greek National Opera in Athens as a total work of art, from soaring atriums to refined architectural curves, where light, materials, and spatial rhythm are precisely harmonised.",
    descriptionFa: "\u0627\u06cc\u0646 \u0639\u06a9\u0633\u200c\u0647\u0627 \u0641\u0636\u0627\u06cc \u062f\u0627\u062e\u0644\u06cc \u0627\u067e\u0631\u0627\u06cc \u0645\u0644\u06cc \u06cc\u0648\u0646\u0627\u0646 \u062f\u0631 \u0622\u062a\u0646 \u0631\u0627 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0627\u062b\u0631\u06cc \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647 \u0628\u0647 \u062a\u0635\u0648\u06cc\u0631 \u0645\u06cc\u200c\u06a9\u0634\u0646\u062f \u06a9\u0647 \u062f\u0631 \u0622\u0646 \u0646\u0648\u0631\u060c \u0645\u0635\u0627\u0644\u062d \u0648 \u0631\u06cc\u062a\u0645 \u0641\u0636\u0627\u06cc\u06cc \u0628\u0647 \u0632\u06cc\u0628\u0627\u06cc\u06cc \u067e\u06cc\u0648\u0646\u062f \u062e\u0648\u0631\u062f\u0647\u200c\u0627\u0646\u062f.",
previewImage: '/images/2026_10_amp-2026-elegance-structure-bw-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'elegance-structure-bw-01',
        src: '/images/2026_10_amp-2026-elegance-structure-bw-01-scaled.webp',
        alt: 'Elegance of Structure – Black and White',
        captionDe: 'Elegance of Structure – Black and White',
        captionEn: 'Elegance of Structure – Black and White',
        captionFa: 'شکوه و ظرافت ساختار – سیاه و سفید'
      },
      {
        id: 'elegance-interior-01',
        src: '/images/2026_10_amp-2026-elegance-interior-symphony-01-scaled.webp',
        alt: 'An Interior Symphony of Light, Forms and Lines I',
        captionDe: 'An Interior Symphony of Light, Forms and Lines I',
        captionEn: 'An Interior Symphony of Light, Forms and Lines I',
        captionFa: 'سمفونی درونی نور، فرم‌ها و خطوط ۱'
      },
      {
        id: 'elegance-interior-02',
        src: '/images/2026_10_amp-2026-elegance-interior-symphony-02-scaled.webp',
        alt: 'An Interior Symphony of Light, Forms and Lines II',
        captionDe: 'An Interior Symphony of Light, Forms and Lines II',
        captionEn: 'An Interior Symphony of Light, Forms and Lines II',
        captionFa: 'سمفونی درونی نور، فرم‌ها و خطوط ۲'
      },
      {
        id: 'elegance-interior-03',
        src: '/images/2026_10_amp-2026-elegance-interior-symphony-03-scaled.webp',
        alt: 'An Interior Symphony of Light, Forms and Lines III',
        captionDe: 'An Interior Symphony of Light, Forms and Lines III',
        captionEn: 'An Interior Symphony of Light, Forms and Lines III',
        captionFa: 'سمفونی درونی نور، فرم‌ها و خطوط ۳'
      },
      {
        id: 'elegance-interior-04',
        src: '/images/2026_10_amp-2026-elegance-interior-symphony-04-scaled.webp',
        alt: 'An Interior Symphony of Light, Forms and Lines IV',
        captionDe: 'An Interior Symphony of Light, Forms and Lines IV',
        captionEn: 'An Interior Symphony of Light, Forms and Lines IV',
        captionFa: 'سمفونی درونی نور، فرم‌ها و خطوط ۴'
      }
    ]
  },
  {
    id: 'cloud-mirror-architecture',
    titleDe: 'Cloud Mirror Architecture I & II',
    titleEn: 'Cloud Mirror Architecture I & II',
    titleFa: 'Cloud Mirror Architecture I & II (معماری آینه ابرها)',
    category: 'Architecture / Exterior',
    categoryFa: 'معماری / سازه‌های بیرونی',
    awardsDe: 'AMP 2026 — 2 × Honorable Mention (Heaven’s Bridge & Stormy Sea B&W)',
    awardsEn: 'AMP 2026 — 2 × Honorable Mention (Heaven’s Bridge & Stormy Sea B&W)',
    awardsFa: 'AMP 2026 — ۲ بار تقدیر ویژه (پل بهشت و دریای طوفانی)',
    badgeNames: ['AMP 2026 HM (Heaven’s Bridge)', 'AMP 2026 HM (Stormy Sea)'],
    link: 'https://architectureprize.com/',
        descriptionDe: "\u201eCloud Mirror Architecture I: Heaven\u2019s Bridge\u201c zeigt moderne Architektur, die sich wie eine Br\u00fccke zwischen Stadt und Himmel erhebt. In \u201eCloud Mirror Architecture II: Stormy Sea (B&W)\u201c verdichten sich Spiegelungen zu einer ozeanischen Dynamik. Gewidmet Steve Barret.",
    descriptionEn: "\u201cCloud Mirror Architecture I: Heaven\u2019s Bridge\u201d rises like a bridge between city and sky, creating a visual dialogue. \u201cCloud Mirror Architecture II: Stormy Sea (B&W)\u201d condenses reflections into an oceanic drama. Dedicated to Steve Barret.",
    descriptionFa: "\u00ab\u0645\u0639\u0645\u0627\u0631\u06cc \u0622\u06cc\u0646\u0647 \u0627\u0628\u0631\u0647\u0627 \u06f1: \u067e\u0644 \u0628\u0647\u0634\u062a\u00bb \u067e\u06cc\u0648\u0646\u062f\u06cc \u0645\u06cc\u0627\u0646 \u0622\u0633\u0645\u0627\u0646 \u0648 \u0634\u0647\u0631 \u067e\u062f\u06cc\u062f \u0645\u06cc\u200c\u0622\u0648\u0631\u062f \u0648 \u0628\u062e\u0634 \u062f\u0648\u0645 \u0628\u0627\u0632\u062a\u0627\u0628\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u062f\u0631\u0627\u0645\u0627\u06cc\u06cc \u0627\u0642\u06cc\u0627\u0646\u0648\u0633\u06cc \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u062a\u0642\u062f\u06cc\u0645 \u0628\u0647 \u0627\u0633\u062a\u06cc\u0648 \u0628\u0627\u0631\u062a.",
    personalNoteDe: "Pers\u00f6nliche Widmung: Gewidmet Steve Barret.",
    personalNoteEn: "Personal Dedication: Dedicated to Steve Barret.",
    personalNoteFa: "\u062a\u0642\u062f\u06cc\u0645 \u0634\u062e\u0635\u06cc: \u062a\u0642\u062f\u06cc\u0645 \u0634\u062f\u0647 \u0628\u0647 \u0627\u0633\u062a\u06cc\u0648 \u0628\u0627\u0631\u062a.",
previewImage: '/images/2026_10_amp-2026-cloud-mirror-i-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'cloud-mirror-i-01',
        src: '/images/2026_10_amp-2026-cloud-mirror-i-01-scaled.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 01',
        captionDe: 'Cloud Mirror Architecture I: Heaven’s Bridge (Werk 01)',
        captionEn: 'Cloud Mirror Architecture I: Heaven’s Bridge (Work 01)',
        captionFa: 'معماری آینه ابرها ۱: پل بهشت (اثر ۰۱)'
      },
      {
        id: 'cloud-mirror-i-02',
        src: '/images/2026_10_amp-2026-cloud-mirror-i-02-scaled.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 02',
        captionDe: 'Cloud Mirror Architecture I: Heaven’s Bridge (Werk 02)',
        captionEn: 'Cloud Mirror Architecture I: Heaven’s Bridge (Work 02)',
        captionFa: 'معماری آینه ابرها ۱: پل بهشت (اثر ۰۲)'
      },
      {
        id: 'cloud-mirror-i-03',
        src: '/images/2026_10_amp-2026-cloud-mirror-i-03-scaled.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 03',
        captionDe: 'Cloud Mirror Architecture I: Heaven’s Bridge (Werk 03)',
        captionEn: 'Cloud Mirror Architecture I: Heaven’s Bridge (Work 03)',
        captionFa: 'معماری آینه ابرها ۱: پل بهشت (اثر ۰۳)'
      },
      {
        id: 'cloud-mirror-i-04',
        src: '/images/2026_10_amp-2026-cloud-mirror-i-04-scaled.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 04',
        captionDe: 'Cloud Mirror Architecture I: Heaven’s Bridge (Werk 04)',
        captionEn: 'Cloud Mirror Architecture I: Heaven’s Bridge (Work 04)',
        captionFa: 'معماری آینه ابرها ۱: پل بهشت (اثر ۰۴)'
      },
      {
        id: 'cloud-mirror-i-05',
        src: '/images/2026_10_amp-2026-cloud-mirror-i-05-scaled.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 05',
        captionDe: 'Cloud Mirror Architecture I: Heaven’s Bridge (Werk 05)',
        captionEn: 'Cloud Mirror Architecture I: Heaven’s Bridge (Work 05)',
        captionFa: 'معماری آینه ابرها ۱: پل بهشت (اثر ۰۵)'
      },
      {
        id: 'cloud-mirror-i-06',
        src: '/images/2026_10_amp-2026-cloud-mirror-i-06-scaled.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 06',
        captionDe: 'Cloud Mirror Architecture I: Heaven’s Bridge (Werk 06)',
        captionEn: 'Cloud Mirror Architecture I: Heaven’s Bridge (Work 06)',
        captionFa: 'معماری آینه ابرها ۱: پل بهشت (اثر ۰۶)'
      },
      {
        id: 'cloud-mirror-i-07',
        src: '/images/2026_10_amp-2026-cloud-mirror-i-07-scaled.webp',
        alt: 'Cloud Mirror Architecture I: Heaven’s Bridge 07',
        captionDe: 'Cloud Mirror Architecture I: Heaven’s Bridge (Werk 07)',
        captionEn: 'Cloud Mirror Architecture I: Heaven’s Bridge (Work 07)',
        captionFa: 'معماری آینه ابرها ۱: پل بهشت (اثر ۰۷)'
      },
      {
        id: 'cloud-mirror-ii-bw-01',
        src: '/images/2026_10_amp-2026-cloud-mirror-ii-bw-01-scaled.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (Black & White) 01',
        captionDe: 'Cloud Mirror Architecture II: Stormy Sea (B&W Werk 01)',
        captionEn: 'Cloud Mirror Architecture II: Stormy Sea (B&W Work 01)',
        captionFa: 'معماری آینه ابرها ۲: دریای طوفانی (سیاه و سفید ۱)'
      },
      {
        id: 'cloud-mirror-ii-bw-02',
        src: '/images/2026_10_amp-2026-cloud-mirror-ii-bw-02-scaled.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (Black & White) 02',
        captionDe: 'Cloud Mirror Architecture II: Stormy Sea (B&W Werk 02)',
        captionEn: 'Cloud Mirror Architecture II: Stormy Sea (B&W Work 02)',
        captionFa: 'معماری آینه ابرها ۲: دریای طوفانی (سیاه و سفید ۲)'
      },
      {
        id: 'cloud-mirror-ii-bw-03',
        src: '/images/2026_10_amp-2026-cloud-mirror-ii-bw-03-scaled.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (Black & White) 03',
        captionDe: 'Cloud Mirror Architecture II: Stormy Sea (B&W Werk 03)',
        captionEn: 'Cloud Mirror Architecture II: Stormy Sea (B&W Work 03)',
        captionFa: 'معماری آینه ابرها ۲: دریای طوفانی (سیاه و سفید ۳)'
      },
      {
        id: 'cloud-mirror-ii-bw-04',
        src: '/images/2026_10_amp-2026-cloud-mirror-ii-bw-04-scaled.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (Black & White) 04',
        captionDe: 'Cloud Mirror Architecture II: Stormy Sea (B&W Werk 04)',
        captionEn: 'Cloud Mirror Architecture II: Stormy Sea (B&W Work 04)',
        captionFa: 'معماری آینه ابرها ۲: دریای طوفانی (سیاه و سفید ۴)'
      },
      {
        id: 'cloud-mirror-ii-bw-05',
        src: '/images/2026_10_amp-2026-cloud-mirror-ii-bw-05-scaled.webp',
        alt: 'Cloud Mirror Architecture II: Stormy Sea (Black & White) 05',
        captionDe: 'Cloud Mirror Architecture II: Stormy Sea (B&W Werk 05)',
        captionEn: 'Cloud Mirror Architecture II: Stormy Sea (B&W Work 05)',
        captionFa: 'معماری آینه ابرها ۲: دریای طوفانی (سیاه و سفید ۵)'
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
    link: 'https://architectureprize.com/',
        descriptionDe: "Schwarz, Rot und Gold spiegeln sich in der Architektur des Bundespr\u00e4sidialamtes in Berlin wider. Die Werkserie \u00fcbersetzt die staatliche Symbolik und die markante Bauk\u00f6rper\u00e4sthetik in eine kraftvolle photographische Abstraktion.",
    descriptionEn: "Black, red, and gold are reflected in the architecture of the Federal President\u2019s Office in Berlin. The series translates state symbolism into an abstract photographic study of architectural presence.",
    descriptionFa: "\u0631\u0646\u06af\u200c\u0647\u0627\u06cc \u0633\u06cc\u0627\u0647\u060c \u0633\u0631\u062e \u0648 \u0637\u0644\u0627\u06cc\u06cc \u062f\u0631 \u0645\u0639\u0645\u0627\u0631\u06cc \u062f\u0641\u062a\u0631 \u0631\u06cc\u0627\u0633\u062a\u200c\u062c\u0645\u0647\u0648\u0631\u06cc \u0641\u062f\u0631\u0627\u0644 \u062f\u0631 \u0628\u0631\u0644\u06cc\u0646 \u0628\u0627\u0632\u062a\u0627\u0628 \u06cc\u0627\u0641\u062a\u0647\u200c\u0627\u0646\u062f. \u0627\u06cc\u0646 \u0645\u062c\u0645\u0648\u0639\u0647 \u0646\u0645\u0627\u062f\u0647\u0627\u06cc \u062d\u0627\u06a9\u0645\u06cc\u062a\u06cc \u0631\u0627 \u0628\u0647 \u0627\u0646\u062a\u0632\u0627\u0639\u06cc \u0646\u0627\u0628 \u0648 \u067e\u0631\u0627\u0628\u0647\u062a \u062f\u0631 \u0639\u06a9\u0627\u0633\u06cc \u0628\u062f\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f.",
previewImage: '/images/2026_10_amp-2026-black-red-gold-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'black-red-gold-01',
        src: '/images/2026_10_amp-2026-black-red-gold-01-scaled.webp',
        alt: 'Black Red Gold – Office of the Federal President of Germany 01',
        captionDe: 'Black Red Gold – Office of the Federal President I',
        captionEn: 'Black Red Gold – Office of the Federal President I',
        captionFa: 'سیاه سرخ طلایی – دفتر ریاست‌جمهوری آلمان ۱'
      },
      {
        id: 'black-red-gold-02',
        src: '/images/2026_10_amp-2026-black-red-gold-02-scaled.webp',
        alt: 'Black Red Gold – Office of the Federal President of Germany 02',
        captionDe: 'Black Red Gold – Office of the Federal President II',
        captionEn: 'Black Red Gold – Office of the Federal President II',
        captionFa: 'سیاه سرخ طلایی – دفتر ریاست‌جمهوری آلمان ۲'
      },
      {
        id: 'black-red-gold-03',
        src: '/images/2026_10_amp-2026-black-red-gold-03-scaled.webp',
        alt: 'Black Red Gold – Office of the Federal President of Germany 03',
        captionDe: 'Black Red Gold – Office of the Federal President III',
        captionEn: 'Black Red Gold – Office of the Federal President III',
        captionFa: 'سیاه سرخ طلایی – دفتر ریاست‌جمهوری آلمان ۳'
      },
      {
        id: 'black-red-gold-04',
        src: '/images/2026_10_amp-2026-black-red-gold-04-scaled.webp',
        alt: 'Black Red Gold – Office of the Federal President of Germany 04',
        captionDe: 'Black Red Gold – Office of the Federal President IV',
        captionEn: 'Black Red Gold – Office of the Federal President IV',
        captionFa: 'سیاه سرخ طلایی – دفتر ریاست‌جمهوری آلمان ۴'
      },
      {
        id: 'black-red-gold-05',
        src: '/images/2026_10_amp-2026-black-red-gold-05-scaled.webp',
        alt: 'Black Red Gold – Office of the Federal President of Germany 05',
        captionDe: 'Black Red Gold – Office of the Federal President V',
        captionEn: 'Black Red Gold – Office of the Federal President V',
        captionFa: 'سیاه سرخ طلایی – دفتر ریاست‌جمهوری آلمان ۵'
      },
      {
        id: 'black-red-gold-06',
        src: '/images/2026_10_amp-2026-black-red-gold-06-scaled.webp',
        alt: 'Black Red Gold – Office of the Federal President of Germany 06',
        captionDe: 'Black Red Gold – Office of the Federal President VI',
        captionEn: 'Black Red Gold – Office of the Federal President VI',
        captionFa: 'سیاه سرخ طلایی – دفتر ریاست‌جمهوری آلمان ۶'
      }
    ]
  },
  {
    id: 'mirrored-series',
    titleDe: 'Mirrored I, II & III',
    titleEn: 'Mirrored I, II & III',
    titleFa: 'Mirrored I, II & III (بازتاب‌ها)',
    category: 'Architecture / Urban & Landscape',
    categoryFa: 'معماری / چشم‌انداز شهری',
    awardsDe: 'IPA 2026 — HM & Official Selection · AMP 2026 — 2 × Honorable Mention',
    awardsEn: 'IPA 2026 — HM & Official Selection · AMP 2026 — 2 × Honorable Mention',
    awardsFa: 'IPA 2026 — تقدیر و برگزیده رسمی · AMP 2026 — ۲ بار تقدیر ویژه',
    badgeNames: ['IPA 2026 HM & OS', 'AMP 2026 HM (Urban)', 'AMP 2026 HM (B&W)'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722624747-26',
        descriptionDe: "Facettenreiche urbane Spiegelungen und Raumverschachtelungen zwischen Natur, Himmel und moderner Metropolenarchitektur. Die Bildserie untersucht, wie reflektierende Oberfl\u00e4chen statische Bauk\u00f6rper in fluide Lichtr\u00e4ume transformieren.",
    descriptionEn: "Multifaceted urban reflections and spatial interlacings between nature, sky, and modern metropolitan architecture. The series investigates how reflective surfaces transform static structures into fluid realms of light.",
    descriptionFa: "\u0628\u0627\u0632\u062a\u0627\u0628\u200c\u0647\u0627\u06cc \u0686\u0646\u062f\u0648\u062c\u0647\u06cc \u0634\u0647\u0631\u06cc \u0648 \u0647\u0645\u200c\u067e\u0648\u0634\u0627\u0646\u06cc\u200c\u0647\u0627\u06cc \u0641\u0636\u0627\u06cc\u06cc \u0645\u06cc\u0627\u0646 \u0637\u0628\u06cc\u0639\u062a\u060c \u0622\u0633\u0645\u0627\u0646 \u0648 \u0645\u0639\u0645\u0627\u0631\u06cc \u06a9\u0644\u0627\u0646\u200c\u0634\u0647\u0631 \u06a9\u0647 \u0627\u062d\u062c\u0627\u0645 \u062b\u0627\u0628\u062a \u0631\u0627 \u0628\u0647 \u062c\u0631\u06cc\u0627\u0646\u200c\u0647\u0627\u06cc \u0634\u0646\u0627\u0648\u0631 \u0646\u0648\u0631 \u0628\u062f\u0644 \u0645\u06cc\u200c\u0633\u0627\u0632\u0646\u062f.",
previewImage: '/images/2026_10_amp-2026-mirrored-ii-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'mirrored-ii-01',
        src: '/images/2026_10_amp-2026-mirrored-ii-01-scaled.webp',
        alt: 'Mirrored II – Schahrsad Shahmirzadi',
        captionDe: 'Mirrored II – Urban Landscape',
        captionEn: 'Mirrored II – Urban Landscape',
        captionFa: 'بازتاب ۲ – چشم‌انداز شهری'
      },
      {
        id: 'mirrored-iii-bw-01',
        src: '/images/2026_10_amp-2026-mirrored-iii-bw-01-scaled.webp',
        alt: 'Mirrored III (Black & White) – Schahrsad Shahmirzadi',
        captionDe: 'Mirrored III (Black & White)',
        captionEn: 'Mirrored III (Black & White)',
        captionFa: 'بازتاب ۳ (سیاه و سفید)'
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
    awardsDe: 'PERSPA 2026 — Honorable Mention (Stairs) · AMP 2025 — Honorable Mention (Sustainable Interior)',
    awardsEn: 'PERSPA 2026 — Honorable Mention (Stairs) · AMP 2025 — Honorable Mention (Sustainable Interior)',
    awardsFa: 'PERSPA 2026 — تقدیر ویژه پلکان · AMP 2025 — تقدیر فضای داخلی پایدار',
    badgeNames: ['PERSPA 2026 HM Stairs', 'AMP 2025 HM'],
    link: 'https://perspa.fr/winners/architectural-perspective/#work-152',
        descriptionDe: "Fotografische Detailstudien architektonischer Stufen und \u00dcberg\u00e4nge im Kontext \u00f6kologischer und nachhaltiger Bauweise. Formen und Materialien spiegeln das stetige Voranschreiten hin zu zukunftsf\u00e4higen Lebensr\u00e4umen wider.",
    descriptionEn: "Photographic detail studies of architectural steps and transitions within sustainable construction, where materials and forms signify the progression toward resilient environments.",
    descriptionFa: "\u0645\u0637\u0627\u0644\u0639\u0647 \u062c\u0632\u0626\u06cc\u0627\u062a \u0645\u0639\u0645\u0627\u0631\u06cc \u067e\u0644\u0647\u200c\u0647\u0627 \u0648 \u06af\u0630\u0631\u06af\u0627\u0647\u200c\u0647\u0627 \u062f\u0631 \u0632\u0645\u06cc\u0646\u0647 \u0633\u0627\u062e\u062a \u067e\u0627\u06cc\u062f\u0627\u0631 \u06a9\u0647 \u062d\u0631\u06a9\u062a \u067e\u06cc\u0648\u0633\u062a\u0647 \u0628\u0647 \u0633\u0648\u06cc \u0632\u06cc\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u062a\u0627\u0628\u200c\u0622\u0648\u0631 \u0631\u0627 \u0628\u0627\u0632\u0645\u06cc\u200c\u0646\u0645\u0627\u06cc\u0627\u0646\u062f.",
previewImage: '/images/2026_09_os-07-dimensions-of-sustainability-02-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'steps-sustainability-01',
        src: '/images/2026_09_os-07-dimensions-of-sustainability-02-scaled.jpeg',
        alt: 'Steps of Sustainability',
        captionDe: 'Steps of Sustainability – SchirZan',
        captionEn: 'Steps of Sustainability – SchirZan',
        captionFa: 'پله‌های پایداری – شیرزن'
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
    awardsDe: 'BIFA 2026 — Honorable Mention · PERSPA 2026 — Editor’s Choice · IPA 2026 — Official Selection',
    awardsEn: 'BIFA 2026 — Honorable Mention · PERSPA 2026 — Editor’s Choice · IPA 2026 — Official Selection',
    awardsFa: 'BIFA 2026 — تقدیر ویژه · PERSPA 2026 — انتخاب سردبیر · IPA 2026 — برگزیده رسمی',
    badgeNames: ['BIFA 2026 HM', 'PERSPA Editor’s Choice', 'IPA 2026 OS'],
    link: 'https://perspa.fr/2026/season-1-architectural-perspective/hephaestus-legacy-3/',
        descriptionDe: "Der Hephaistos-Tempel auf der Athener Agora ist dem Gott der Schmiedekunst und des Feuers geweiht. Diese Serie r\u00fcckt die dorischen S\u00e4ulen ins Zentrum, wie sie seit Jahrtausenden Licht und Schatten im sakralen Rhythmus b\u00fcndeln.",
    descriptionEn: "The Temple of Hephaistos is dedicated to the god of blacksmiths and fire\u2014a work of architecture rich in symbolism and craftsmanship. This series places its columns at the center as they draw light and shadow into dialogue across millennia.",
    descriptionFa: "\u0645\u0639\u0628\u062f \u0647\u0641\u0627\u0626\u0633\u062a\u0648\u0633 \u062f\u0631 \u0622\u06af\u0648\u0631\u0627\u06cc \u0628\u0627\u0633\u062a\u0627\u0646\u06cc \u0622\u062a\u0646\u060c \u0648\u0642\u0641 \u062e\u062f\u0627\u06cc \u0635\u0646\u0639\u062a\u06af\u0631\u06cc \u0648 \u0622\u062a\u0634 \u0627\u0633\u062a. \u0627\u06cc\u0646 \u0645\u062c\u0645\u0648\u0639\u0647 \u0633\u062a\u0648\u0646\u200c\u0647\u0627\u06cc \u06a9\u0647\u0646 \u0631\u0627 \u062f\u0631 \u06af\u0641\u062a\u200c\u0648\u06af\u0648\u06cc \u0627\u0628\u062f\u06cc \u0646\u0648\u0631 \u0648 \u0633\u0627\u06cc\u0647 \u0628\u0647 \u062a\u0635\u0648\u06cc\u0631 \u0645\u06cc\u200c\u06a9\u0634\u062f.",
previewImage: '/images/2026_09_os-06-hephaestus-legacy-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'hephaestus-01',
        src: '/images/2026_09_os-06-hephaestus-legacy-01-scaled.webp',
        alt: 'Hephaestus’ Legacy 01',
        captionDe: 'Hephaestus’ Legacy I',
        captionEn: 'Hephaestus’ Legacy I',
        captionFa: 'میراث هفائستوس ۱'
      },
      {
        id: 'hephaestus-02',
        src: '/images/2026_09_os-06-hephaestus-legacy-02-scaled.webp',
        alt: 'Hephaestus’ Legacy 02',
        captionDe: 'Hephaestus’ Legacy II',
        captionEn: 'Hephaestus’ Legacy II',
        captionFa: 'میراث هفائستوس ۲'
      },
      {
        id: 'hephaestus-03',
        src: '/images/2026_09_os-06-hephaestus-legacy-03-scaled.webp',
        alt: 'Hephaestus’ Legacy 03',
        captionDe: 'Hephaestus’ Legacy III',
        captionEn: 'Hephaestus’ Legacy III',
        captionFa: 'میراث هفائستوس ۳'
      },
      {
        id: 'hephaestus-04',
        src: '/images/2026_09_os-06-hephaestus-legacy-04-scaled.webp',
        alt: 'Hephaestus’ Legacy 04',
        captionDe: 'Hephaestus’ Legacy IV',
        captionEn: 'Hephaestus’ Legacy IV',
        captionFa: 'میراث هفائستوس ۴'
      },
      {
        id: 'hephaestus-05',
        src: '/images/2026_09_os-06-hephaestus-legacy-05-scaled.webp',
        alt: 'Hephaestus’ Legacy 05',
        captionDe: 'Hephaestus’ Legacy V',
        captionEn: 'Hephaestus’ Legacy V',
        captionFa: 'میراث هفائستوس ۵'
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
    link: 'https://architectureprize.com/',
        descriptionDe: "\u201eRazor Pull Berlin\u201c verdichtet den allt\u00e4glichen st\u00e4dtischen Stra\u00dfenraum zu einem abstrakten visuellen Kraftfeld. Durch extreme Blickwinkel und Fluchtlinien verschmelzen Stra\u00dfenleuchten, Glasfassaden und Klinkerbauten zu rasiermesserscharfen Konturen und geometrischer Spannung.",
    descriptionEn: "\u201cRazor Pull Berlin\u201d condenses an ordinary urban streetscape into an almost abstract visual space. Through extreme perspectives, streetlights, glass facades and brick structures converge into razor-sharp lines and geometric tension.",
    descriptionFa: "\u00ab\u06a9\u0634\u0634 \u062a\u06cc\u063a \u0628\u0631\u0644\u06cc\u0646\u00bb \u0686\u0634\u0645\u200c\u0627\u0646\u062f\u0627\u0632 \u062e\u06cc\u0627\u0628\u0627\u0646\u06cc \u0634\u0647\u0631 \u0631\u0627 \u0628\u0647 \u0645\u06cc\u062f\u0627\u0646\u06cc \u0627\u0646\u062a\u0632\u0627\u0639\u06cc \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u0647 \u062f\u0631 \u0622\u0646 \u0686\u0631\u0627\u063a\u200c\u0647\u0627\u060c \u0634\u06cc\u0634\u0647\u200c\u0647\u0627 \u0648 \u0622\u062c\u0631\u0647\u0627 \u062f\u0631 \u062e\u0637\u0648\u0637\u06cc \u062a\u06cc\u0632 \u0648 \u067e\u0631\u06a9\u0634\u0634 \u0628\u0647 \u0647\u0645 \u0645\u06cc\u200c\u0631\u0633\u0646\u062f.",
previewImage: '/images/2026_10_amp-2026-razor-pull-berlin-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'razor-pull-01',
        src: '/images/2026_10_amp-2026-razor-pull-berlin-01-scaled.webp',
        alt: 'Razor Pull Berlin 01',
        captionDe: 'Razor Pull Berlin I',
        captionEn: 'Razor Pull Berlin I',
        captionFa: 'ریزر پول برلین ۱'
      },
      {
        id: 'razor-pull-02',
        src: '/images/2026_10_amp-2026-razor-pull-berlin-02-scaled.webp',
        alt: 'Razor Pull Berlin 02',
        captionDe: 'Razor Pull Berlin II',
        captionEn: 'Razor Pull Berlin II',
        captionFa: 'ریزر پول برلین ۲'
      },
      {
        id: 'razor-pull-03',
        src: '/images/2026_10_amp-2026-razor-pull-berlin-03-scaled.webp',
        alt: 'Razor Pull Berlin 03',
        captionDe: 'Razor Pull Berlin III',
        captionEn: 'Razor Pull Berlin III',
        captionFa: 'ریزر پول برلین ۳'
      },
      {
        id: 'razor-pull-04',
        src: '/images/2026_10_amp-2026-razor-pull-berlin-04-scaled.webp',
        alt: 'Razor Pull Berlin 04',
        captionDe: 'Razor Pull Berlin IV',
        captionEn: 'Razor Pull Berlin IV',
        captionFa: 'ریزر پول برلین ۴'
      },
      {
        id: 'razor-pull-05',
        src: '/images/2026_10_amp-2026-razor-pull-berlin-05-scaled.webp',
        alt: 'Razor Pull Berlin 05',
        captionDe: 'Razor Pull Berlin V',
        captionEn: 'Razor Pull Berlin V',
        captionFa: 'ریزر پول برلین ۵'
      },
      {
        id: 'razor-pull-06',
        src: '/images/2026_10_amp-2026-razor-pull-berlin-06-scaled.webp',
        alt: 'Razor Pull Berlin 06',
        captionDe: 'Razor Pull Berlin VI',
        captionEn: 'Razor Pull Berlin VI',
        captionFa: 'ریزر پول برلین ۶'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613455-25',
        descriptionDe: "\u201eDimensions of Sustainability\u201c entstand im Treppenhaus des Ministeriums f\u00fcr Landwirtschaft, Umwelt und Klimaschutz (MLUK) des Landes Brandenburg in Potsdam. Die Werkserie untersucht das Zusammenspiel von Licht, Schatten, Stahl und Holz und transformiert funktionale Architekturelemente in Sinnbilder nachhaltiger Gestaltung.",
    descriptionEn: "\u201cDimensions of Sustainability\u201d was created in the stairwell of the Environment Ministry in Brandenburg. The abstract series explores light, shadow, and materials such as steel and wood, transforming everyday architectural elements into symbols of sustainable design.",
    descriptionFa: "\u00ab\u0627\u0628\u0639\u0627\u062f \u067e\u0627\u06cc\u062f\u0627\u0631\u06cc\u00bb \u062f\u0631 \u067e\u0644\u06a9\u0627\u0646 \u0648\u0632\u0627\u0631\u062a \u0645\u062d\u06cc\u0637 \u0632\u06cc\u0633\u062a \u0628\u0631\u0627\u0646\u062f\u0646\u0628\u0648\u0631\u06af \u062f\u0631 \u067e\u0648\u062a\u0633\u062f\u0627\u0645 \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a \u0648 \u0639\u0646\u0627\u0635\u0631 \u0631\u0648\u0632\u0645\u0631\u0647 \u0631\u0627 \u0628\u0647 \u0646\u0645\u0627\u062f\u0647\u0627\u06cc \u0637\u0631\u0627\u062d\u06cc \u067e\u0627\u06cc\u062f\u0627\u0631 \u0628\u062f\u0644 \u0645\u06cc\u200c\u0633\u0627\u0632\u062f.",
previewImage: '/images/2026_09_os-07-dimensions-of-sustainability-01-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'dimensions-01',
        src: '/images/2026_09_os-07-dimensions-of-sustainability-01-scaled.jpeg',
        alt: 'Dimensions of Sustainability I',
        captionDe: 'Dimensions of Sustainability I',
        captionEn: 'Dimensions of Sustainability I',
        captionFa: 'ابعاد پایداری ۱'
      },
      {
        id: 'dimensions-02',
        src: '/images/2026_09_os-07-dimensions-of-sustainability-02-scaled.jpeg',
        alt: 'Dimensions of Sustainability II',
        captionDe: 'Dimensions of Sustainability II',
        captionEn: 'Dimensions of Sustainability II',
        captionFa: 'ابعاد پایداری ۲'
      },
      {
        id: 'dimensions-03',
        src: '/images/2026_09_os-07-dimensions-of-sustainability-03-scaled.jpeg',
        alt: 'Dimensions of Sustainability III',
        captionDe: 'Dimensions of Sustainability III',
        captionEn: 'Dimensions of Sustainability III',
        captionFa: 'ابعاد پایداری ۳'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613512-25',
        descriptionDe: "Die Kaiser-Wilhelm-Ged\u00e4chtniskirche ist ein unvergleichlicher Erinnerungsort im Herzen Berlins. Der Ruinenturm mahnt an die Schrecken des Krieges, w\u00e4hrend die zeitgen\u00f6ssischen Sperrelemente nach dem Anschlag von 2016 die Verwundbarkeit und Wachsamkeit unserer heutigen offenen Gesellschaft spiegeln.",
    descriptionEn: "The Kaiser Wilhelm Memorial Church is a unique place of remembrance in Berlin. Its ruined tower recalls the horrors of war, while contemporary entrance barriers reflect our open society\u2019s vulnerability and vigilance.",
    descriptionFa: "\u06a9\u0644\u06cc\u0633\u0627\u06cc \u06cc\u0627\u062f\u0628\u0648\u062f \u0642\u06cc\u0635\u0631 \u0648\u06cc\u0644\u0647\u0644\u0645 \u06cc\u0627\u062f\u0645\u0627\u0646\u06cc \u0628\u06cc\u200c\u0647\u0645\u062a\u0627 \u062f\u0631 \u0642\u0644\u0628 \u0628\u0631\u0644\u06cc\u0646 \u0627\u0633\u062a\u061b \u0628\u0631\u062c\u06cc \u0648\u06cc\u0631\u0627\u0646 \u06a9\u0647 \u0648\u062d\u0634\u062a \u062c\u0646\u06af \u0631\u0627 \u06af\u0648\u0634\u0632\u062f \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u062d\u0635\u0627\u0631\u0647\u0627\u06cc \u0645\u062f\u0631\u0646 \u0627\u0645\u0631\u0648\u0632\u06cc \u06a9\u0647 \u0622\u0633\u06cc\u0628\u200c\u067e\u0630\u06cc\u0631\u06cc \u0648 \u0647\u0648\u0634\u06cc\u0627\u0631\u06cc \u062c\u0627\u0645\u0639\u0647 \u0628\u0627\u0632 \u0631\u0627 \u0628\u0627\u0632\u062a\u0627\u0628 \u0645\u06cc\u200c\u062f\u0647\u0646\u062f.",
previewImage: '/images/2026_09_os-09-fragments-of-memory-fragments-of-time-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'fragments-01',
        src: '/images/2026_09_os-09-fragments-of-memory-fragments-of-time-01-scaled.webp',
        alt: 'Fragments of Memory I',
        captionDe: 'Fragments of Memory I',
        captionEn: 'Fragments of Memory I',
        captionFa: 'خرده‌های خاطره ۱'
      },
      {
        id: 'fragments-02',
        src: '/images/2026_09_os-09-fragments-of-memory-fragments-of-time-02-scaled.webp',
        alt: 'Fragments of Memory II',
        captionDe: 'Fragments of Memory II',
        captionEn: 'Fragments of Memory II',
        captionFa: 'خرده‌های خاطره ۲'
      },
      {
        id: 'fragments-03',
        src: '/images/2026_09_os-09-fragments-of-memory-fragments-of-time-03-scaled.webp',
        alt: 'Fragments of Memory III',
        captionDe: 'Fragments of Memory III',
        captionEn: 'Fragments of Memory III',
        captionFa: 'خرده‌های خاطره ۳'
      },
      {
        id: 'fragments-04',
        src: '/images/2026_09_os-09-fragments-of-memory-fragments-of-time-04-scaled.webp',
        alt: 'Fragments of Memory IV',
        captionDe: 'Fragments of Memory IV',
        captionEn: 'Fragments of Memory IV',
        captionFa: 'خرده‌های خاطره ۴'
      },
      {
        id: 'fragments-05',
        src: '/images/2026_09_os-09-fragments-of-memory-fragments-of-time-05-scaled.webp',
        alt: 'Fragments of Memory V',
        captionDe: 'Fragments of Memory V',
        captionEn: 'Fragments of Memory V',
        captionFa: 'خرده‌های خاطره ۵'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613543-25',
        descriptionDe: "Im architektonischen Au\u00dfenraum eines Bildungsbaus wird ein Spielplatzkletterger\u00fcst zu einer tiefgr\u00fcndigen Studie \u00fcber Symmetrie, Rhythmus und r\u00e4umliche Spannung \u2013 eine Form von \u201eSpielarchitektur\u201c, in der Gitter und Verbindungspunkte ein abstraktes Raumnetzwerk entfalten.",
    descriptionEn: "Within the wider context of an educational exterior, a playground climbing frame transforms into a study of symmetry, rhythm, and spatial tension \u2014 a form of \u201cplay architecture\u201d in which grids and junctions create an abstract visual network.",
    descriptionFa: "\u062f\u0631 \u0645\u062d\u0648\u0637\u0647 \u0628\u06cc\u0631\u0648\u0646\u06cc \u06cc\u06a9 \u0645\u0631\u06a9\u0632 \u0622\u0645\u0648\u0632\u0634\u06cc\u060c \u0627\u0633\u06a9\u0644\u062a \u06cc\u06a9 \u0648\u0633\u06cc\u0644\u0647 \u0628\u0627\u0632\u06cc \u0628\u0647 \u0645\u0637\u0627\u0644\u0639\u0647\u200c\u0627\u06cc \u0698\u0631\u0641 \u062f\u0631 \u0628\u0627\u0628 \u062a\u0642\u0627\u0631\u0646\u060c \u0631\u06cc\u062a\u0645 \u0648 \u062a\u0646\u0634 \u0641\u0636\u0627\u06cc\u06cc \u0628\u062f\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0634\u0628\u06a9\u0647\u200c\u0627\u06cc \u0627\u0646\u062a\u0632\u0627\u0639\u06cc \u062e\u0644\u0642 \u0645\u06cc\u200c\u06a9\u0646\u062f.",
previewImage: '/images/2026_09_os-11-symmetric-networks-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'symmetric-01',
        src: '/images/2026_09_os-11-symmetric-networks-01-scaled.webp',
        alt: 'Symmetric Networks I',
        captionDe: 'Symmetric Networks I',
        captionEn: 'Symmetric Networks I',
        captionFa: 'شبکه‌های متقارن ۱'
      },
      {
        id: 'symmetric-02',
        src: '/images/2026_09_os-11-symmetric-networks-02-scaled.webp',
        alt: 'Symmetric Networks II',
        captionDe: 'Symmetric Networks II',
        captionEn: 'Symmetric Networks II',
        captionFa: 'شبکه‌های متقارن ۲'
      },
      {
        id: 'symmetric-03',
        src: '/images/2026_09_os-11-symmetric-networks-03-scaled.webp',
        alt: 'Symmetric Networks III',
        captionDe: 'Symmetric Networks III',
        captionEn: 'Symmetric Networks III',
        captionFa: 'شبکه‌های متقارن ۳'
      },
      {
        id: 'symmetric-04',
        src: '/images/2026_09_os-11-symmetric-networks-04-scaled.webp',
        alt: 'Symmetric Networks IV',
        captionDe: 'Symmetric Networks IV',
        captionEn: 'Symmetric Networks IV',
        captionFa: 'شبکه‌های متقارن ۴'
      },
      {
        id: 'symmetric-05',
        src: '/images/2026_09_os-11-symmetric-networks-05-scaled.webp',
        alt: 'Symmetric Networks V',
        captionDe: 'Symmetric Networks V',
        captionEn: 'Symmetric Networks V',
        captionFa: 'شبکه‌های متقارن ۵'
      },
      {
        id: 'symmetric-06',
        src: '/images/2026_09_os-11-symmetric-networks-06-scaled.webp',
        alt: 'Symmetric Networks VI',
        captionDe: 'Symmetric Networks VI',
        captionEn: 'Symmetric Networks VI',
        captionFa: 'شبکه‌های متقارن ۶'
      }
    ]
  },
  {
    id: 'solitaire-new-perspectives',
    titleDe: 'The Solitaire as an Abstraction – New Perspectives and Revised',
    titleEn: 'The Solitaire as an Abstraction – New Perspectives and Revised',
    titleFa: 'The Solitaire as an Abstraction – New Perspectives and Revised',
    category: 'Architecture / Abstract',
    categoryFa: 'معماری / انتزاعی',
    awardsDe: 'LICC 2025 — 2 × Shortlisted (Kategorien: »New Perspectives« & »Revised«)',
    awardsEn: 'LICC 2025 — 2 × Shortlisted ("New Perspectives" and "Revised")',
    awardsFa: 'LICC 2025 — دو بار در فهرست نهایی (Shortlisted)',
    badgeNames: ['LICC 2025 Shortlisted', 'LICC 2025 Revised'],
    link: 'http://www.licc.uk/winners/winner.php?id=125858',
        descriptionDe: "Neue Perspektiven auf den Solit\u00e4r: Erweiterte visuelle Erkundung von Fluchtpunkten, Materialoberfl\u00e4chen und Himmelsspiegelungen.",
    descriptionEn: "New perspectives on the solitaire: Expanded exploration of vanishing lines, material textures, and reflections.",
    descriptionFa: "\u062f\u06cc\u062f\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0646\u0648 \u0628\u0647 \u062a\u06a9\u200c\u0628\u0646\u0627: \u06a9\u0627\u0648\u0634 \u06af\u0633\u062a\u0631\u062f\u0647 \u062f\u0631 \u0646\u0642\u0627\u0637 \u06af\u0631\u06cc\u0632\u060c \u0628\u0627\u0641\u062a \u0645\u0635\u0627\u0644\u062d \u0648 \u0628\u0627\u0632\u062a\u0627\u0628\u200c\u0647\u0627\u06cc \u0622\u0633\u0645\u0627\u0646.",
previewImage: '/images/2026_10_amp-2026-winner-solitaire-revised-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'solitaire-new-perspectives-01',
        src: '/images/2026_10_amp-2026-winner-solitaire-revised-01-scaled.webp',
        alt: 'The Solitaire as an Abstraction – New Perspectives and Revised',
        captionDe: 'The Solitaire as an Abstraction – New Perspectives and Revised',
        captionEn: 'The Solitaire as an Abstraction – New Perspectives and Revised',
        captionFa: 'The Solitaire as an Abstraction – New Perspectives and Revised'
      }
    ]
  },
  {
    id: 'bw-solitaire',
    titleDe: 'Black & White Solitaire',
    titleEn: 'Black & White Solitaire',
    titleFa: 'Black & White Solitaire (تک‌بنای سیاه‌وسفید)',
    category: 'Architecture / Monochromatic',
    categoryFa: 'معماری / تک‌رنگ',
    awardsDe: 'Black & White Spider Awards 2025 — Nominee',
    awardsEn: 'Black & White Spider Awards 2025 — Nominee',
    awardsFa: 'Black & White Spider Awards 2025 — نامزد دریافت جایزه (Nominee)',
    badgeNames: ['Spider Awards 2025 Nominee'],
    link: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238',
        descriptionDe: "Monochrome Reduktion der Solit\u00e4r-Architektur auf reine geometrische Kontraste, Hell-Dunkel-Verl\u00e4ufe und architektonische Zeitlosigkeit.",
    descriptionEn: "Monochrome reduction of solitary architecture to pure geometric contrasts, chiaroscuro gradations, and timeless form.",
    descriptionFa: "\u062a\u0642\u0644\u06cc\u0644 \u062a\u06a9\u200c\u0631\u0646\u06af \u0645\u0639\u0645\u0627\u0631\u06cc \u062a\u06a9\u200c\u0628\u0646\u0627 \u0628\u0647 \u06a9\u0646\u062a\u0631\u0627\u0633\u062a\u200c\u0647\u0627\u06cc \u062e\u0627\u0644\u0635 \u0647\u0646\u062f\u0633\u06cc\u060c \u062f\u0631\u062c\u0627\u062a \u0646\u0648\u0631 \u0648 \u0633\u0627\u06cc\u0647 \u0648 \u062c\u0627\u0648\u062f\u0627\u0646\u06af\u06cc \u0641\u0631\u0645.",
previewImage: '/images/2026_10_amp-2026-elegance-structure-bw-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'bw-solitaire-01',
        src: '/images/2026_10_amp-2026-elegance-structure-bw-01-scaled.webp',
        alt: 'Black & White Solitaire',
        captionDe: 'Black & White Solitaire – SchirZan',
        captionEn: 'Black & White Solitaire – SchirZan',
        captionFa: 'تک‌بنای سیاه‌وسفید – شیرزن'
      }
    ]
  },
  {
    id: 'solitaire-ipa-2025',
    titleDe: 'The Solitaire as an Abstraction',
    titleEn: 'The Solitaire as an Abstraction',
    titleFa: 'The Solitaire as an Abstraction',
    category: 'Architecture / Abstract',
    categoryFa: 'معماری / انتزاعی',
    awardsDe: 'IPA 2025 — Honorable Mention',
    awardsEn: 'IPA 2025 — Honorable Mention',
    awardsFa: 'IPA 2025 — تقدیر ویژه (Honorable Mention)',
    badgeNames: ['IPA 2025 HM'],
    link: 'https://www.photoawards.com/winner/zoom.php?eid=8-1722606309-25',
        descriptionDe: "Die originale Pr\u00e4mierungsserie der International Photography Awards 2025: Der Solit\u00e4r im lebendigen Lichtdialog des urbanen Fr\u00fchlings.",
    descriptionEn: "The original awarded series from the International Photography Awards 2025: The Solitaire in dynamic daylight dialogue.",
    descriptionFa: "\u0645\u062c\u0645\u0648\u0639\u0647 \u0628\u0631\u06af\u0632\u06cc\u062f\u0647 \u0627\u0648\u0644\u06cc\u0647 \u062f\u0631 \u062c\u0648\u0627\u06cc\u0632 \u062c\u0647\u0627\u0646\u06cc \u0639\u06a9\u0627\u0633\u06cc \u06f2\u06f0\u06f2\u06f5: \u062a\u06a9\u200c\u0628\u0646\u0627 \u062f\u0631 \u06af\u0641\u062a\u200c\u0648\u06af\u0648\u06cc \u067e\u0648\u06cc\u0627\u06cc \u0646\u0648\u0631 \u0631\u0648\u0632 \u0634\u0647\u0631\u06cc.",
previewImage: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'solitaire-ipa-2025-01',
        src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp',
        alt: 'The Solitaire as an Abstraction (IPA 2025)',
        captionDe: 'The Solitaire as an Abstraction – SchirZan',
        captionEn: 'The Solitaire as an Abstraction – SchirZan',
        captionFa: 'تک‌بنا به مثابه انتزاع – شیرزن'
      }
    ]
  },
  {
    id: 'solitaire-short-version',
    titleDe: 'The Solitaire as an Abstraction (Short Version)',
    titleEn: 'The Solitaire as an Abstraction (Short Version)',
    titleFa: 'The Solitaire as an Abstraction (نسخه کوتاه)',
    category: 'Architecture / Others',
    categoryFa: 'معماری / سایر',
    awardsDe: 'ND Awards 2025 — Honorable Mention',
    awardsEn: 'ND Awards 2025 — Honorable Mention',
    awardsFa: 'ND Awards 2025 — تقدیر ویژه (Honorable Mention)',
    badgeNames: ['ND Awards 2025 HM'],
    link: 'https://ndawards.net/winners-gallery/nd-awards-2025/non-professional/other/hm/23252/',
        descriptionDe: "Kompakte kuratierte Fassung der Solit\u00e4r-Serie, fokussiert auf die pr\u00e4gnantesten formalen Spannungen zwischen Glas, Stahl und Himmelsraum.",
    descriptionEn: "Compact curated edition of the Solitaire series, focusing on the most salient tensions between glass, steel, and sky.",
    descriptionFa: "\u0646\u0633\u062e\u0647 \u06af\u0632\u06cc\u062f\u0647 \u0648 \u0641\u0634\u0631\u062f\u0647 \u0645\u062c\u0645\u0648\u0639\u0647 \u062a\u06a9\u200c\u0628\u0646\u0627 \u0628\u0627 \u062a\u0645\u0631\u06a9\u0632 \u0628\u0631 \u0628\u0627\u0631\u0632\u062a\u0631\u06cc\u0646 \u06a9\u0634\u0634\u200c\u0647\u0627\u06cc \u0641\u0631\u0645\u06cc \u0645\u06cc\u0627\u0646 \u0634\u06cc\u0634\u0647\u060c \u0641\u0648\u0644\u0627\u062f \u0648 \u0622\u0633\u0645\u0627\u0646.",
previewImage: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-02-scaled.webp',
    galleryPhotos: [
      {
        id: 'solitaire-short-version-01',
        src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-02-scaled.webp',
        alt: 'The Solitaire as an Abstraction (Short Version)',
        captionDe: 'The Solitaire as an Abstraction (Short Version)',
        captionEn: 'The Solitaire as an Abstraction (Short Version)',
        captionFa: 'تک‌بنا به مثابه انتزاع (نسخه کوتاه)'
      }
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
    link: 'https://licc.uk/',
    previewImage: '/images/2026_10_amp-2026-cloud-mirror-i-02-scaled.webp',
    galleryPhotos: [
      {
        id: 'prismatic-berlin-01',
        src: '/images/2026_10_amp-2026-cloud-mirror-i-02-scaled.webp',
        alt: 'Prismatic Berlin',
        captionDe: 'Prismatic Berlin – SchirZan',
        captionEn: 'Prismatic Berlin – SchirZan',
        captionFa: 'برلین منشوری – شیرزن'
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
    link: 'https://licc.uk/',
    previewImage: '/images/2026_10_amp-2026-cloud-mirror-i-04-scaled.webp',
    galleryPhotos: [
      {
        id: 'transformer-01',
        src: '/images/2026_10_amp-2026-cloud-mirror-i-04-scaled.webp',
        alt: 'Transformer',
        captionDe: 'Transformer – SchirZan',
        captionEn: 'Transformer – SchirZan',
        captionFa: 'دگرگون‌شونده – شیرزن'
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
    link: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238',
    previewImage: '/images/2026_10_amp-2026-razor-pull-berlin-03-scaled.webp',
    galleryPhotos: [
      {
        id: 'columns-here-now-01',
        src: '/images/2026_10_amp-2026-razor-pull-berlin-03-scaled.webp',
        alt: 'Columns in the Here and Now',
        captionDe: 'Columns in the Here and Now – SchirZan',
        captionEn: 'Columns in the Here and Now – SchirZan',
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26',
    previewImage: '/images/2026_10_amp-2026-echoes-water-tower-01-scaled.webp',
    galleryPhotos: [
      {
        id: 'echoes-fineart-01',
        src: '/images/2026_10_amp-2026-echoes-water-tower-01-scaled.webp',
        alt: 'Echoes of a Water Tower',
        captionDe: 'Echoes of a Water Tower – SchirZan',
        captionEn: 'Echoes of a Water Tower – SchirZan',
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613510-25',
        descriptionDe: "In den Reflexionen von Regenlachen verschmelzen Realit\u00e4t und Illusion, Stillstand und Bewegung. Die Uhr als universelles Symbol der Zeit wirkt entr\u00fcckt und im Zwischenraum von Raum und Zeit schwebend.",
    descriptionEn: "In the reflections of puddles, reality and illusion merge\u2014stillness intertwines with movement. The clock, symbol of time, appears estranged and suspended within its own in-between space.",
    descriptionFa: "\u062f\u0631 \u0628\u0627\u0632\u062a\u0627\u0628 \u0686\u0627\u0644\u0647\u200c\u0647\u0627\u06cc \u0628\u0627\u0631\u0627\u0646\u060c \u0648\u0627\u0642\u0639\u06cc\u062a \u0648 \u062a\u0648\u0647\u0645\u060c \u0633\u06a9\u0648\u0646 \u0648 \u062d\u0631\u06a9\u062a \u0628\u0647 \u0647\u0645 \u0645\u06cc\u200c\u0622\u0645\u06cc\u0632\u0646\u062f \u0648 \u0633\u0627\u0639\u062a \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0627\u062f \u0632\u0645\u0627\u0646\u060c \u062f\u0631 \u0645\u06cc\u0627\u0646 \u0641\u0636\u0627 \u0648 \u0632\u0645\u0627\u0646 \u0645\u0639\u0644\u0642 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.",
previewImage: '/images/2026_09_os-10-between-space-and-time-01-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'between-space-time-01',
        src: '/images/2026_09_os-10-between-space-and-time-01-scaled.jpeg',
        alt: 'Between Space and Time I',
        captionDe: 'Between Space and Time I',
        captionEn: 'Between Space and Time I',
        captionFa: 'میان فضا و زمان ۱'
      },
      {
        id: 'between-space-time-02',
        src: '/images/2026_09_os-10-between-space-and-time-02-scaled.jpeg',
        alt: 'Between Space and Time II',
        captionDe: 'Between Space and Time II',
        captionEn: 'Between Space and Time II',
        captionFa: 'میان فضا و زمان ۲'
      },
      {
        id: 'between-space-time-03',
        src: '/images/2026_09_os-10-between-space-and-time-03-scaled.jpeg',
        alt: 'Between Space and Time III',
        captionDe: 'Between Space and Time III',
        captionEn: 'Between Space and Time III',
        captionFa: 'میان فضا و زمان ۳'
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
    link: 'https://licc.uk/',
        descriptionDe: "\u201eSelig sind die Trauernden\u201c: Eine poetische, meditative Bildkomposition, die der stillen W\u00fcrde des Gedenkens Raum gibt und menschliche Verwundbarkeit mit Trost und innerer Einkehr verbindet.",
    descriptionEn: "\u201cBlessed Are Those Who Mourn\u201d: A poetic, meditative composition honoring the quiet dignity of grief, uniting human vulnerability with solace and spiritual contemplation.",
    descriptionFa: "\u00ab\u062e\u0648\u0634\u0627 \u0628\u0647 \u062d\u0627\u0644 \u0633\u0648\u06af\u0648\u0627\u0631\u0627\u0646\u00bb: \u062a\u0631\u06a9\u06cc\u0628\u06cc \u0634\u0627\u0639\u0631\u0627\u0646\u0647 \u0648 \u0698\u0631\u0641\u200c\u0627\u0646\u062f\u06cc\u0634\u0627\u0646\u0647 \u06a9\u0647 \u0628\u0647 \u0648\u0642\u0627\u0631 \u062e\u0627\u0645\u0648\u0634 \u0633\u0648\u06af\u0648\u0627\u0631\u06cc \u0627\u0631\u062c \u0646\u0647\u0627\u062f\u0647 \u0648 \u0634\u06a9\u0646\u0646\u062f\u06af\u06cc \u0627\u0646\u0633\u0627\u0646 \u0631\u0627 \u0628\u0627 \u0622\u0631\u0627\u0645\u0634 \u0648 \u062a\u0641\u06a9\u0631 \u067e\u06cc\u0648\u0646\u062f \u0645\u06cc\u200c\u0632\u0646\u062f.",
previewImage: '/images/2026_09_os-10-between-space-and-time-02-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'blessed-mourn-01',
        src: '/images/2026_09_os-10-between-space-and-time-02-scaled.jpeg',
        alt: 'Blessed Are Those Who Mourn',
        captionDe: 'Blessed Are Those Who Mourn – SchirZan',
        captionEn: 'Blessed Are Those Who Mourn – SchirZan',
        captionFa: 'خوشا به حال سوگواران – شیرزن'
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
    link: 'https://budapestfotoawards.com/',
        descriptionDe: "Eine couragierte visuelle Dokumentation gegen Ausgrenzung, Queerfeindlichkeit und patriarchale Unterdr\u00fcckung. Die Bilder treten f\u00fcr universelle Menschenw\u00fcrde, Vielfalt und den Schutz queeren Lebens im urbanen Raum ein. Ausgezeichnet mit einer Honorable Mention bei den Budapest International Foto Awards (BIFA 2026).",
    descriptionEn: "A courageous photographic documentation against marginalization, queerphobia, and patriarchal oppression, advocating for universal dignity, diversity, and the protection of queer lives in urban spaces (BIFA 2026 Honorable Mention).",
    descriptionFa: "\u0645\u0633\u062a\u0646\u062f\u0646\u06af\u0627\u0631\u06cc \u0634\u062c\u0627\u0639\u0627\u0646\u0647 \u0639\u0644\u06cc\u0647 \u0637\u0631\u062f\u060c \u062a\u0628\u0639\u06cc\u0636 \u0648 \u0633\u062a\u0645 \u067e\u062f\u0631\u0633\u0627\u0644\u0627\u0631\u0627\u0646\u0647\u060c \u062f\u0631 \u062f\u0641\u0627\u0639 \u0627\u0632 \u06a9\u0631\u0627\u0645\u062a \u062c\u0647\u0627\u0646\u06cc\u060c \u06af\u0648\u0646\u0627\u06af\u0648\u0646\u06cc \u0648 \u062d\u0642\u0648\u0642 \u0627\u0642\u0644\u06cc\u062a\u200c\u0647\u0627 \u062f\u0631 \u0641\u0636\u0627\u06cc \u0634\u0647\u0631\u06cc (\u062a\u0642\u062f\u06cc\u0631 \u0648\u06cc\u0698\u0647 BIFA \u06f2\u06f0\u06f2\u06f6).",
previewImage: '/images/2026_09_os-01-life-love-freedom-iran-02-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'attack-on-queer-01',
        src: '/images/2026_09_os-01-life-love-freedom-iran-02-scaled.jpeg',
        alt: 'Berlin: Attack on Queer, Diversity and Freedom',
        captionDe: 'Berlin: Attack on Queer, Diversity and Freedom – SchirZan',
        captionEn: 'Berlin: Attack on Queer, Diversity and Freedom – SchirZan',
        captionFa: 'برلین: حمله به تنوع و آزادی – شیرزن'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722616352-26',
        descriptionDe: "Drei Pfeiler stehen f\u00fcr Leben, Liebe und Freiheit \u2013 f\u00fcr die Menschen im Iran und im Exil. Sie erheben sich aus der Dunkelheit, jeder f\u00fcr sich und doch unaufl\u00f6slich verbunden. Das seitlich einfallende Licht symbolisiert die unbesiegbare Hoffnung.",
    descriptionEn: "Three pillars stand for life, love, and freedom\u2014for people in Iran and in exile. They rise from darkness, distinct yet inextricably linked; incoming side light embodies invincible hope.",
    descriptionFa: "\u0633\u0647 \u0633\u062a\u0648\u0646 \u0646\u0645\u0627\u062f \u0632\u0646\u062f\u06af\u06cc\u060c \u0639\u0634\u0642 \u0648 \u0622\u0632\u0627\u062f\u06cc\u200c\u0627\u0646\u062f \u2013 \u0628\u0631\u0627\u06cc \u0645\u0631\u062f\u0645 \u062f\u0631 \u0627\u06cc\u0631\u0627\u0646 \u0648 \u062f\u0631 \u062a\u0628\u0639\u06cc\u062f. \u0622\u0646\u200c\u0647\u0627 \u0627\u0632 \u062f\u0644 \u062a\u0627\u0631\u06cc\u06a9\u06cc \u0628\u0631\u0645\u06cc\u200c\u062e\u06cc\u0632\u0646\u062f \u0648 \u0646\u0648\u0631 \u062c\u0627\u0646\u0628\u06cc \u062a\u062c\u0633\u0645 \u0627\u0645\u06cc\u062f \u0634\u06a9\u0633\u062a\u200c\u0646\u0627\u067e\u0630\u06cc\u0631 \u0627\u0633\u062a.",
previewImage: '/images/2026_09_os-01-life-love-freedom-iran-01-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'iran-freedom-01',
        src: '/images/2026_09_os-01-life-love-freedom-iran-01-scaled.jpeg',
        alt: 'LIFE – LOVE – FREEDOM · IRAN 01',
        captionDe: 'LIFE – LOVE – FREEDOM · IRAN I',
        captionEn: 'LIFE – LOVE – FREEDOM · IRAN I',
        captionFa: 'زن، زندگی، آزادی · ایران ۱'
      },
      {
        id: 'iran-freedom-02',
        src: '/images/2026_09_os-01-life-love-freedom-iran-02-scaled.jpeg',
        alt: 'LIFE – LOVE – FREEDOM · IRAN 02',
        captionDe: 'LIFE – LOVE – FREEDOM · IRAN II',
        captionEn: 'LIFE – LOVE – FREEDOM · IRAN II',
        captionFa: 'زن، زندگی، آزادی · ایران ۲'
      },
      {
        id: 'iran-freedom-03',
        src: '/images/2026_09_os-01-life-love-freedom-iran-03-scaled.jpeg',
        alt: 'LIFE – LOVE – FREEDOM · IRAN 03',
        captionDe: 'LIFE – LOVE – FREEDOM · IRAN III',
        captionEn: 'LIFE – LOVE – FREEDOM · IRAN III',
        captionFa: 'زن، زندگی، آزادی · ایران ۳'
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
    link: 'https://www.urbanphotoawards.com/',
        descriptionDe: "In-Between Spaces (Area 14): Ausgestellt bei den Trieste Photo Days 2026 (Mercato Coperto, Triest). Fotografische Erkundung von urbanen Schwellenr\u00e4umen, Passagen und Zwischenzonen, in denen die Grenzen zwischen Innen und Au\u00dfen verschwimmen.",
    descriptionEn: "In-Between Spaces (Area 14): Exhibited at Trieste Photo Days 2026 (Mercato Coperto, Trieste). Photographic inquiry into urban liminal zones, transitions, and passages where boundaries dissolve.",
    descriptionFa: "\u0641\u0636\u0627\u0647\u0627\u06cc \u0645\u06cc\u0627\u0646\u06cc (\u0645\u0646\u0637\u0642\u0647 \u06f1\u06f4): \u0646\u0645\u0627\u06cc\u0634 \u062f\u0631 \u062c\u0634\u0646\u0648\u0627\u0631\u0647 \u0639\u06a9\u0633 \u062a\u0631\u06cc\u0633\u062a\u0647 \u06f2\u06f0\u06f2\u06f6 \u062f\u0631 \u0627\u06cc\u062a\u0627\u0644\u06cc\u0627\u061b \u06a9\u0627\u0648\u0634 \u0639\u06a9\u0627\u0633\u0627\u0646\u0647 \u062f\u0631 \u0641\u0636\u0627\u0647\u0627\u06cc \u0622\u0633\u062a\u0627\u0646\u0647\u200c\u0627\u06cc \u0648 \u06af\u0630\u0631\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0634\u0647\u0631\u06cc.",
previewImage: '/images/2026_07_In-Between-Spaces-scaled.jpg',
    galleryPhotos: [
      {
        id: 'in-between-spaces-01',
        src: '/images/2026_07_In-Between-Spaces-scaled.jpg',
        alt: 'In-Between Spaces – Schahrsad Shahmirzadi',
        captionDe: 'In-Between Spaces – SchirZan (URBAN Photo Awards 2026 Selected)',
        captionEn: 'In-Between Spaces – SchirZan (URBAN Photo Awards 2026 Selected)',
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
    link: 'https://licc.uk/',
        descriptionDe: "Die W\u00fcrde des Tieres ist unantastbar: Eine eindringliche gesellschaftsdokumentarische Fotoserie, die das Verh\u00e4ltnis zwischen Mensch, Tier und Natur im Spannungsfeld von Ausbeutung, Respekt und Verantwortung beleuchtet. Ausgezeichnet bei der London International Creative Competition (LICC 2025).",
    descriptionEn: "The Dignity of the Animal is Inviolable: A poignant documentary series examining human-animal relations between exploitation, profound respect, and ethical duty (LICC 2025 Official Selection).",
    descriptionFa: "\u06a9\u0631\u0627\u0645\u062a \u062d\u06cc\u0648\u0627\u0646 \u062a\u0639\u0631\u0636\u200c\u0646\u0627\u067e\u0630\u06cc\u0631 \u0627\u0633\u062a: \u0645\u062c\u0645\u0648\u0639\u0647\u200c\u0627\u06cc \u0627\u062b\u0631\u06af\u0630\u0627\u0631 \u062f\u0631 \u0628\u0627\u0628 \u0631\u0627\u0628\u0637\u0647 \u0627\u0646\u0633\u0627\u0646 \u0648 \u062d\u06cc\u0648\u0627\u0646 \u062f\u0631 \u0645\u06cc\u0627\u0646 \u0628\u0647\u0631\u0647\u200c\u06a9\u0634\u06cc\u060c \u0627\u062d\u062a\u0631\u0627\u0645 \u0648 \u0645\u0633\u0626\u0648\u0644\u06cc\u062a \u0627\u062e\u0644\u0627\u0642\u06cc (\u0645\u0646\u062a\u062e\u0628 LICC \u06f2\u06f0\u06f2\u06f5 \u0644\u0646\u062f\u0646).",
previewImage: '/images/2026_04_59097f0d6c9eece89abc78e06350bb1f-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'dignity-animal-01',
        src: '/images/2026_04_59097f0d6c9eece89abc78e06350bb1f-scaled.jpeg',
        alt: 'The Dignity of the Animal is Inviolable I',
        captionDe: 'The Dignity of the Animal is Inviolable I – SchirZan (LICC 2025 Official Selection)',
        captionEn: 'The Dignity of the Animal is Inviolable I – SchirZan (LICC 2025 Official Selection)',
        captionFa: 'حرمت حیوان خدشه‌ناپذیر است ۱ – شیرزن'
      },
      {
        id: 'dignity-animal-02',
        src: '/images/2026_04_f921f50c9aeb75ce30ac79453121ddda-scaled.jpeg',
        alt: 'The Dignity of the Animal is Inviolable II',
        captionDe: 'The Dignity of the Animal is Inviolable II – SchirZan (LICC 2025 Official Selection)',
        captionEn: 'The Dignity of the Animal is Inviolable II – SchirZan (LICC 2025 Official Selection)',
        captionFa: 'حرمت حیوان خدشه‌ناپذیر است ۲ – شیرزن'
      },
      {
        id: 'dignity-animal-03',
        src: '/images/2026_04_4bacafa6404a9d91da6e9374e3feb98e-scaled.jpeg',
        alt: 'The Dignity of the Animal is Inviolable III',
        captionDe: 'The Dignity of the Animal is Inviolable III – SchirZan (LICC 2025 Official Selection)',
        captionEn: 'The Dignity of the Animal is Inviolable III – SchirZan (LICC 2025 Official Selection)',
        captionFa: 'حرمت حیوان خدشه‌ناپذیر است ۳ – شیرزن'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722619299-26',
        descriptionDe: "Vom Kampf im Ring zum Blitzlicht im Bild: Ein kraftvolles Selbstportr\u00e4t, das den \u00dcbergang von zehnfacher sportlicher Weltmeisterschaft zur kompromisslosen photographischen Disziplin und Pr\u00e4zision visualisiert. Ausgezeichnet als Official Selection bei den International Photography Awards (IPA 2026).",
    descriptionEn: "From Fighting in the Ring to Lightning in the Frame: A commanding self-portrait visualizing the transition from ten-time world champion kickboxer to uncompromising photographic precision (IPA 2026 Official Selection).",
    descriptionFa: "\u0627\u0632 \u0645\u0628\u0627\u0631\u0632\u0647 \u062f\u0631 \u0631\u06cc\u0646\u06af \u062a\u0627 \u062f\u0631\u062e\u0634\u0634 \u062f\u0631 \u0642\u0627\u0628: \u062e\u0648\u062f\u0646\u06af\u0627\u0631\u0647\u200c\u0627\u06cc \u0642\u062f\u0631\u062a\u0645\u0646\u062f \u06a9\u0647 \u06af\u0630\u0631 \u0627\u0632 \u06f1\u06f0 \u0639\u0646\u0648\u0627\u0646 \u0642\u0647\u0631\u0645\u0627\u0646\u06cc \u062c\u0647\u0627\u0646 \u0628\u0647 \u062f\u0642\u062a \u0648 \u0627\u0646\u0636\u0628\u0627\u0637 \u0633\u0627\u0632\u0634\u200c\u0646\u0627\u067e\u0630\u06cc\u0631 \u0639\u06a9\u0627\u0633\u06cc \u0631\u0627 \u0628\u0647 \u062a\u0635\u0648\u06cc\u0631 \u0645\u06cc\u200c\u06a9\u0634\u062f (\u0645\u0646\u062a\u062e\u0628 \u0631\u0633\u0645\u06cc IPA \u06f2\u06f0\u06f2\u06f6).",
previewImage: '/images/2026_09_os-02-kickboxing-from-fighting-in-the-ring-01-scaled.jpeg',
    galleryPhotos: [
      {
        id: 'kickboxing-portrait-01',
        src: '/images/2026_09_os-02-kickboxing-from-fighting-in-the-ring-01-scaled.jpeg',
        alt: 'Kickboxing – Self-Portrait (Schahrsad Shahmirzadi / SchirZan)',
        captionDe: 'Kickboxing – From Fighting in the Ring to Lightning in the Frame (IPA 2026 Official Selection)',
        captionEn: 'Kickboxing – From Fighting in the Ring to Lightning in the Frame (IPA 2026 Official Selection)',
        captionFa: 'کیک‌بوکسینگ – از مبارزه در رینگ تا آذرخش در قاب تصویر (برگزیده رسمی IPA 2026)'
      }
    ]
  }
];

/* WordPress Content: Academic Vita, Environmental & Humanitarian Commitment, Press */
export interface EducationMilestone {
  period: string;
  fieldDe: string;
  fieldEn: string;
  fieldFa: string;
  institutionDe: string;
  institutionEn: string;
  institutionFa: string;
  degreeDe: string;
  degreeEn: string;
  degreeFa: string;
}

export const ACADEMIC_MILESTONES: EducationMilestone[] = [
  {
    period: 'bis 2004',
    fieldDe: 'Abitur',
    fieldEn: 'Abitur / High School Diploma',
    fieldFa: 'دیپلم متوسطه (Abitur)',
    institutionDe: 'Ev. Gymnasium zum Grauen Kloster Berlin',
    institutionEn: 'Gymnasium zum Grauen Kloster Berlin',
    institutionFa: 'کالج مشهور گرائن کلوستر برلین',
    degreeDe: 'Erfolgreich bestanden',
    degreeEn: 'Successfully graduated',
    degreeFa: 'فارغ‌التحصیلی با موفقیت'
  },
  {
    period: '2005–2009',
    fieldDe: 'Rechtswissenschaften',
    fieldEn: 'Law / Jurisprudence',
    fieldFa: 'حقوق و علوم قضایی',
    institutionDe: 'Freie Universität Berlin (FU Berlin)',
    institutionEn: 'Free University of Berlin (FU Berlin)',
    institutionFa: 'دانشگاه آزاد برلین (FU Berlin)',
    degreeDe: 'Grundstudium erfolgreich abgeschlossen',
    degreeEn: 'Undergraduate legal studies completed',
    degreeFa: 'پایان دوره مقدماتی حقوق'
  },
  {
    period: '2010–2013',
    fieldDe: 'Diplomverwaltungswirtin – Polizeivollzugsdienst',
    fieldEn: 'Diploma in Public Administration (Police Service)',
    fieldFa: 'دانشنامه مدیریت خدمات دولتی و پلیسی',
    institutionDe: 'Hochschule für Wirtschaft und Recht Berlin (HWR Berlin)',
    institutionEn: 'Berlin School of Economics and Law (HWR Berlin)',
    institutionFa: 'دانشگاه اقتصاد و حقوق برلین',
    degreeDe: 'Diplomverwaltungswirtin (FH)',
    degreeEn: 'Diplomverwaltungswirtin (FH)',
    degreeFa: 'کسب دانشنامه رسمی'
  },
  {
    period: 'Seit 2024',
    fieldDe: 'Umweltministerium & LAWA (Gewässerschutz)',
    fieldEn: 'Ministry of Environment & LAWA (Water Conservation)',
    fieldFa: 'وزارت محیط زیست پوتسدام و کارگروه حفاظت از آب (LAWA)',
    institutionDe: 'Ministerium für Umwelt, Klimaschutz und Landwirtschaft Potsdam',
    institutionEn: 'Ministry of Environment Potsdam',
    institutionFa: 'وزارت محیط زیست ایالت براندنبورگ',
    degreeDe: 'Referentin für Gewässerschutz & Wasserwirtschaft',
    degreeEn: 'Officer for Water Issues and Conservation',
    degreeFa: 'کارشناس ارشد حفاظت از منابع آب'
  },
  {
    period: 'Berufsbegleitend',
    fieldDe: 'Master of Science (M.Sc.) Applied Environmental Sciences',
    fieldEn: 'Master of Science in Applied Environmental Sciences',
    fieldFa: 'کارشناسی ارشد علوم محیط زیست کاربردی',
    institutionDe: 'Universität Koblenz',
    institutionEn: 'University of Koblenz',
    institutionFa: 'دانشگاه کوبلنتس',
    degreeDe: 'Masterstudium in Vertiefung',
    degreeEn: 'Ongoing Master’s studies',
    degreeFa: 'در حال تکمیل دوره کارشناسی ارشد'
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
    outlet: 'KOJARO (کجارو)',
    date: '18. Oktober 2026',
    title: 'از تئاتر تاریخی ایتالیا تا هندسه ساختمان‌ها؛ برندگان نخستین جایزه عکاسی معماری پرسپکتیو',
    descriptionDe: 'Internationale Berichterstattung über die renommiertesten Architekturfotografien des Jahres – Auszeichnung für SchirZan (Werk Nr. 3).',
    descriptionEn: 'International press coverage on the year’s finest architectural photography – Honour for SchirZan (Work No. 3).',
    descriptionFa: 'پوشش مطبوعاتی بین‌المللی برترین آثار عکاسی معماری سال ۲۰۲۶ و درخشش شیرزن در میان برگزیدگان.',
    link: 'https://www.kojaro.com/travel-photos/310932-best-architectural-photography-2026/'
  },
  {
    outlet: 'Black & White Spider Awards',
    date: '2025',
    title: '20th Annual Architecture Photography Winners | Official Winners Book & Video',
    descriptionDe: 'Würdigung der Arbeiten »Architectural Piano«, »Columns in the Here and Now« und »Black & White Solitaire«.',
    descriptionEn: 'Recognition of "Architectural Piano", "Columns in the Here and Now", and "Black & White Solitaire".',
    descriptionFa: 'تجلیل و انتشار آثار در کتاب رسمی و ویدیوی برگزیدگان بیستمین دوره جوایز اسپایدر.',
    link: 'https://www.thespiderawards.com/'
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
    titleDe: 'Urban Photographs: Trieste and the Cities of the World',
    titleEn: 'Urban Photographs: Trieste and the Cities of the World',
    titleFa: 'عکس‌های شهری: تریست و شهرهای جهان',
    festivalDe: 'Trieste Photo Days 2026 (Gruppenausstellung)',
    festivalEn: 'Trieste Photo Days 2026 (Group Exhibition)',
    festivalFa: 'روزهای عکاسی تریست ۲۰۲۶ (نمایشگاه گروهی)',
    venue: 'Mercato Coperto',
    address: 'Via Giosuè Carducci, 36 – Triest, Italien',
    datesDe: '5. Oktober 2026 – 21. November 2026',
    datesEn: 'Monday, October 5 – Saturday, November 21, 2026',
    datesFa: '۵ اکتبر تا ۲۱ نوامبر ۲۰۲۶',
    featuredWorkDe: 'In-Between Spaces (Area 14)',
    featuredWorkEn: 'In-Between Spaces (Area 14)',
    featuredWorkFa: 'فضاهای میانی (In-Between Spaces – Area 14)',
    link: 'https://www.urbanphotoawards.com/en/photonew/?id=333556%2Fschirzan%2Fin-between-spaces',
    festivalLink: 'https://www.triestephotodays.com/en/events/urban-photographs-trieste-and-the-cities-of-the-world/'
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
    featuredWorkFa: 'شکوه ساختار – سیاه و سفید (Elegance of Structure)',
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
    publisher: 'PRIX DE LA PERSPECTIVE ARCHITECTURALE (Bourges, France)',
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
    titleDe: 'The 2026 Annual International Photography Awards (IPA) Book',
    titleEn: 'The 2026 Annual International Photography Awards (IPA) Book',
    titleFa: 'کتاب سالانه جوایز بین‌المللی عکاسی (IPA) ۲۰۲۶',
    subtitleDe: 'Offizielles Jahrbuch der IPA Preisträger',
    subtitleEn: 'Official Annual IPA Winners Book',
    subtitleFa: 'کتاب رسمی برگزیدگان جوایز بین‌المللی عکاسی',
    publisher: 'International Photography Awards (IPA / Lucie Awards)',
    detailsDe: 'Offizieller PDF-Katalog mit den prämierten Architekturserien.',
    detailsEn: 'Official annual commemorative publication featuring awarded architectural series.',
    detailsFa: 'انتشار رسمی کاتالوگ آثار برگزیده معماری.',
    link: 'https://www.photoawards.com/ebook/IPA-2026-ebook.pdf',
    linkTextDe: 'IPA 2026 E-Book (PDF) →',
    linkTextEn: 'IPA 2026 E-Book (PDF) →',
    linkTextFa: 'دریافت کتاب سالانه IPA ۲۰۲۶ (PDF) ←',
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
    subtitleDe: 'Offizielles Gewinner-Video der Spider Awards (Vimeo HD)',
    subtitleEn: 'Official Spider Awards Winners Video Showcase (Vimeo HD)',
    subtitleFa: 'ویدیوی رسمی معرفی آثار برگزیده',
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
    titleDe: 'Global Lens Photography Awards (GL) 2026 – Editor’s Choice',
    titleEn: 'Global Lens Photography Awards (GL) 2026 – Editor’s Choice',
    titleFa: 'انتخاب سردبیر جوایز جهانی عکس گلوبال لنز ۲۰۲۶',
    subtitleDe: 'Besondere Würdigung »The Solitaire as Abstraction – In Harmony with Nature«',
    subtitleEn: 'Recognition: "The Solitaire as Abstraction – In Harmony with Nature"',
    subtitleFa: 'برگزیده ویژه سردبیر برای تک‌بنا در هماهنگی با طبیعت',
    publisher: 'Global Lens Photography Awards (GL)',
    detailsDe: 'Besondere redaktionelle Auszeichnung und Feature der Serie.',
    detailsEn: 'Special editorial recognition and feature for the Solitaire series.',
    detailsFa: 'انتخاب ویژه هیئت داوران و سردبیر.',
    link: 'https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/',
    linkTextDe: 'Editor’s Choice Profil ansehen →',
    linkTextEn: 'View Editor’s Choice Feature →',
    linkTextFa: 'مشاهده اثر در سایت گلوبال لنز ←',
    type: 'editors-choice',
    coverImage: '/images/2026_07_tsaaihwn-1008x2048.jpg'
  },
  {
    id: 'perspa-editors-choice',
    titleDe: 'PERSPA 2026 – Editor’s Choice Galerie (Bourges, Frankreich)',
    titleEn: 'PERSPA 2026 – Editor’s Choice Gallery (Bourges, France)',
    titleFa: 'گالری برگزیدگان سردبیر PERSPA فرانسه ۲۰۲۶',
    subtitleDe: 'Auswahl für Solitaire, Elegance of Structure & Hephaestus’ Legacy',
    subtitleEn: 'Triple Selection: Solitaire, Elegance of Structure & Hephaestus’ Legacy',
    subtitleFa: 'انتخاب سه‌گانه آثار برجسته معماری',
    publisher: 'PRIX DE LA PERSPECTIVE ARCHITECTURALE',
    detailsDe: 'Ausgewählt für die kuratierte offizielle Editor’s Choice Galerie in Frankreich.',
    detailsEn: 'Selected for the official curated gallery showcase in France.',
    detailsFa: 'نمایش در گالری برگزیدگان رسمی در فرانسه.',
    link: 'https://perspa.fr/editor-choice/',
    linkTextDe: 'PERSPA Galerie öffnen →',
    linkTextEn: 'Open PERSPA Gallery →',
    linkTextFa: 'مشاهده گالری رسمی PERSPA ←',
    type: 'editors-choice',
    coverImage: '/images/2026_07_haphaestus-1214x2048.jpg'
  },
  {
    id: 'ipa-annual-book-2025',
    titleDe: 'The 2025 Annual International Photography Awards (IPA) Book',
    titleEn: 'The 2025 Annual International Photography Awards (IPA) Book',
    titleFa: 'کتاب سالانه جوایز بین‌المللی عکاسی (IPA) ۲۰۲۵',
    subtitleDe: 'Offizielles Jahrbuch der IPA Preisträger 2025',
    subtitleEn: 'Official Annual IPA Winners Book 2025',
    subtitleFa: 'کتاب رسمی برگزیدگان سال ۲۰۲۵',
    publisher: 'International Photography Awards (IPA / Lucie Awards)',
    detailsDe: 'Preisträger-Publikation inklusive »The Solitaire as an Abstraction«.',
    detailsEn: 'Award winner edition featuring "The Solitaire as an Abstraction".',
    detailsFa: 'چاپ اثر شاخص تک‌بنا به عنوان یک انتزاع.',
    link: 'https://www.photoawards.com/books/IPA-2025-EBOOK.pdf',
    linkTextDe: 'IPA 2025 E-Book (PDF) →',
    linkTextEn: 'IPA 2025 E-Book (PDF) →',
    linkTextFa: 'دریافت کتاب سالانه IPA ۲۰۲۵ (PDF) ←',
    type: 'ebook',
    coverImage: '/images/2026_06_ebook-01-1152x1536.jpg'
  },
  {
    id: 'apmp-magcloud-2025',
    titleDe: 'Architecture Photography MasterPrize (APMP) Winners Book 2025',
    titleEn: 'Architecture Photography MasterPrize (APMP) Winners Book 2025',
    titleFa: 'کتاب برگزیدگان مسترپرایز عکاسی معماری ۲۰۲۵ (APMP)',
    subtitleDe: 'Offizielle MagCloud-Katalogpublikation',
    subtitleEn: 'Official MagCloud Print & Digital Edition',
    subtitleFa: 'چاپ رسمی کاتالوگ بین‌المللی مسترپرایز معماری',
    publisher: 'Architecture MasterPrize (AMP / APMP)',
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
    titleDe: 'Ministerium für Umwelt Brandenburg: Titelfoto MLEUV-Newsletter',
    titleEn: 'Ministry for Environment Brandenburg: Newsletter Cover Feature',
    titleFa: 'تصویر روی جلد خبرنامه رسمی وزارت محیط زیست براندنبورگ',
    subtitleDe: 'Ausgabe Juli 2025 · Klatschmohn vor zeitgenössischer Architektur',
    subtitleEn: 'July 2025 Issue · Poppies in dialogue with contemporary architecture',
    subtitleFa: 'نسخه ژوئیه ۲۰۲۵ · شقایق‌های سرخ در تضاد با معماری مدرن',
    publisher: 'Ministerium für Landwirtschaft, Umwelt und Klimaschutz Brandenburg',
    detailsDe: 'Schahrsad Shahmirzadis Fotografie von leuchtendem Mohn vor moderner Architektur erschien als Titelbild der offiziellen Publikation des Ministeriums in Potsdam.',
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

