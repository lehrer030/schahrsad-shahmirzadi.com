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
}

export interface CategoryInfo {
  id: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits';
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
    titleDe: 'Architecture',
    titleEn: 'Architecture',
    titleFa: 'معماری',
    descriptionDe: 'Internationale prämierte Architektur-Fotografie mit Fokus auf Solitäre, Licht, Geometrie und urbane Abstraktion.',
    descriptionEn: 'Internationally awarded architectural photography focusing on solitaires, light, geometry, and urban abstraction.',
    descriptionFa: 'عکاسی معماری با جوایز بین‌المللی با تمرکز بر تک‌بناها، نور، هندسه و انتزاع شهری.'
  },
  {
    id: 'fine-art',
    titleDe: 'Fine Art',
    titleEn: 'Fine Art',
    titleFa: 'هنرهای زیبا (فاین آرت)',
    descriptionDe: 'Künstlerische Erkundungen von Form, Raum, Zeit und Poesie des Lichts.',
    descriptionEn: 'Artistic explorations of form, space, time, and the poetry of light.',
    descriptionFa: 'کاوش‌های هنری در فرم، فضا، زمان و شعر بصری نور.'
  },
  {
    id: 'social-environmental',
    titleDe: 'Social & Environmental Themes',
    titleEn: 'Social & Environmental Themes',
    titleFa: 'مضامین اجتماعی و زیست‌محیطی',
    descriptionDe: 'Engagierte Fotografie für Menschenrechte, Vielfalt, Tierschutz und gesellschaftliche Verantwortung.',
    descriptionEn: 'Dedicated photography advocating for human rights, diversity, animal welfare, and social responsibility.',
    descriptionFa: 'عکاسی متعهد در دفاع از حقوق بشر، تنوع، حمایت از حیوانات و مسئولیت اجتماعی.'
  },
  {
    id: 'portraits',
    titleDe: 'Portraits',
    titleEn: 'Portraits',
    titleFa: 'پرتره‌ها',
    descriptionDe: 'Ausdrucksstarke Porträts und Selbstporträts im Spannungsfeld von Stärke und Authentizität.',
    descriptionEn: 'Expressive portraits and self-portraits bridging strength, dynamism, and authenticity.',
    descriptionFa: 'پرتره‌ها و خودنگاره‌های بیانی پرشور در پیوند میان قدرت و اصالت.'
  }
];

export const INTRO_CONTENT = {
  mainHeader: 'Photography – Works – International Awards',
  mainHeaderFa: 'عکاسی – آثار – جوایز بین‌المللی',
  subtitleDe: 'Fotografie & Kunst · Mehrfach international ausgezeichnet & prämiert',
  subtitleEn: 'Photography & Art · Internationally awarded & recognized multiple times',
  subtitleFa: 'عکاسی و هنر · برنده جوایز متعدد و شناخته‌شده در سطح بین‌المللی',
  competitions: [
    'International Photography Awards (IPA) 2026',
    'Architecture MasterPrize (AMP) 2026',
    'PRIX DE LA PERSPECTIVE ARCHITECTURALE (PERSPA - FRANCE) 2026',
    'Budapest International Foto Awards (BIFA) 2026',
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
  titleDe: 'The Solitaire as Abstraction – In Harmony with Nature',
  titleEn: 'The Solitaire as Abstraction – In Harmony with Nature',
  titleFa: 'The Solitaire as Abstraction – In Harmony with Nature (تک‌بنا به مثابه انتزاع – در هماهنگی با طبیعت)',
  subtitleDe: 'Architektur / Sonstige Außenaufnahmen (7 Werke)',
  subtitleEn: 'Architecture / Other Exterior (7 Works)',
  subtitleFa: 'معماری / سازه‌های بیرونی (۷ اثر)',
  descriptionDe: `Diese Serie verwandelt eine solitäre urbane Fassade in ein abstraktes Statement von Individualität und Harmonie mit der Natur. Jedes Bild erkundet eine andere Facette von Geometrie, Licht und Perspektive – und offenbart, wie architektonische Form mit dem Himmel und der Umwelt verschmilzt. Das Zusammenspiel von klaren Linien, wandernden Schatten und subtilen Reflexionen lässt das »Solitär« zwischen materieller Präzision und poetischer Abstraktion oszillieren. Durch Minimalismus und rhythmische Komposition wird der Betrachter eingeladen, nicht nur die innere Ordnung der Struktur, sondern auch ihren unerwarteten Dialog mit der natürlichen Welt zu entdecken.`,
  descriptionEn: `This series transforms a singular urban facade into an abstract statement of individuality and harmony with nature. Each image explores a different facet of geometry, light, and perspective—revealing how architectural form merges with the sky and environment. The interplay of crisp lines, shifting shadows, and subtle reflections allows the “solitaire” to oscillate between material precision and poetic abstraction. Through minimalism and rhythmic composition, the viewer is invited to discover not only the structure’s inner order but also its unexpected dialogue with the natural world.`,
  descriptionFa: `این مجموعه عکاسی، نمای یک بنای شهری تک و برجسته را به بیانیه‌ای انتزاعی از فردیت و هماهنگی عمیق با طبیعت تبدیل می‌سازد. هر عکس جلوه‌ای متمایز از هندسه، بازی نور و زاویه دید را به تصویر کشیده و پیوند مسحورکننده فرم معماری با وسعت آسمان و محیط را نمایان می‌سازد. تلفیق خطوط شفاف، سایه‌های سیال و بازتاب‌های ظریف به «تک‌بنا» این امکان را می‌دهد تا میان صراحت ساختاری و انتزاع شاعرانه در نوسان باشد.`,
  coverImage: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp',
  badges: [
    {
      id: 'amp-2025-winner',
      name: 'Architecture MasterPrize 2025',
      year: '2025',
      award: 'Student Photography Winner (Other Exterior)',
      awardFa: 'برنده جایزه عکاسی دانشجویی (معماری بیرونی)',
      badgeImage: '/images/email_badges/amp_2025_winner.png',
      link: 'https://architectureprize.com/winners/winner.php?id=8533',
      position: 'top-left'
    },
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
  titleDe: 'The Solitaire as an Abstraction (Revised)',
  titleEn: 'The Solitaire as an Abstraction (Revised)',
  titleFa: 'The Solitaire as an Abstraction (Revised) (تک‌بنا به مثابه انتزاع - نسخه بازنگری‌شده)',
  subtitleDe: 'Architektur / Abstrakt (5 Werke)',
  subtitleEn: 'Architecture / Abstract (5 Works)',
  subtitleFa: 'معماری / انتزاعی (۵ اثر)',
  descriptionDe: `Diese Serie fängt die moderne Architektur einer urbanen Fassade im dynamischen Wechselspiel von Licht und Schatten ein. Klare Linien, geometrische Strukturen und ungewöhnliche Perspektiven betonen die Ästhetik und Energie des Bauwerks. Besonders faszinierend ist die Art und Weise, wie die Geometrie mit der Umgebung interagiert: Reflexionen und Kontraste zwischen Architektur und Himmel verleihen den Fotografien Tiefe und laden zum Erkunden ein. Durch sorgfältig gewählte Blickwinkel und Bildausschnitte werden sowohl die Strenge als auch die Leichtigkeit der Architektur spürbar.`,
  descriptionEn: `This series captures the modern architecture of an urban facade in a dynamic interplay of light and shadow. Clear lines, geometric structures, and unusual perspectives emphasize the building’s aesthetic and energy. Particularly fascinating is the way geometry interacts with the environment: reflections and contrasts between architecture and sky add depth to the photographs and invite viewers to explore. Through carefully chosen angles and framing, both the rigor and the lightness of the architecture are revealed.`,
  descriptionFa: `این مجموعه، معماری معاصر یک نمای شهری را در تعاملی پویا میان نور و سایه ماندگار می‌سازد. خطوط راسخ، ساختارهای متقارن هندسی و زوایای نامتعارف، انرژی و کمال زیبایی‌شناسانه بنا را برجسته می‌نمایند. عمق تصاویر از تضاد میان صلبیت سازه و گستره آسمان سرچشمه می‌گیرد و بیننده را به کاوشی بصری فرا می‌خواند.`,
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
    link: 'http://www.licc.uk/winners/winner.php?id=125858'
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
    link: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238'
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
    link: 'https://www.photoawards.com/winner/zoom.php?eid=8-1722606309-25'
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
    link: 'https://ndawards.net/winners-gallery/nd-awards-2025/non-professional/other/hm/23252/'
  },
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26'
  },
  {
    id: 'architectural-piano',
    titleDe: 'Architectural Piano',
    titleEn: 'Architectural Piano',
    titleFa: 'Architectural Piano (پیانوی معماری)',
    category: 'Architecture / Abstract',
    categoryFa: 'معماری / انتزاعی',
    awardsDe: 'Black & White Spider Awards 2025 — HM & Nominee · AMP 2026 — HM · IPA 2026 — Official Selection · LICC 2025 — Official Selection',
    awardsEn: 'Black & White Spider Awards 2025 — HM & Nominee · AMP 2026 — HM · IPA 2026 — Official Selection · LICC 2025 — Official Selection',
    awardsFa: 'Spider Awards 2025 — نامزد و تقدیر · AMP 2026 — تقدیر · IPA 2026 — برگزیده رسمی · LICC 2025 — برگزیده رسمی',
    badgeNames: ['Spider Awards 2025 HM', 'AMP 2026 HM', 'IPA 2026 OS', 'LICC 2025 OS'],
    link: 'https://architectureprize.com/'
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
    link: 'https://perspa.fr/2026/season-1-architectural-perspective/elegance-of-structure-black-and-white-2/'
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
    link: 'https://architectureprize.com/'
  },
  {
    id: 'black-red-gold',
    titleDe: 'Black Red Gold – Office of the Federal President of Germany',
    titleEn: 'Black Red Gold – Office of the Federal President of Germany',
    titleFa: 'Black Red Gold – Office of the Federal President of Germany',
    category: 'Architecture / Exterior',
    categoryFa: 'معماری / سازه‌های بیرونی',
    awardsDe: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsEn: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsFa: 'AMP 2026 — تقدیر ویژه سازه‌های بیرونی',
    badgeNames: ['AMP 2026 HM'],
    link: 'https://architectureprize.com/'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722624747-26'
  },
  {
    id: 'steps-of-sustainability',
    titleDe: 'Steps of Sustainability',
    titleEn: 'Steps of Sustainability',
    titleFa: 'Steps of Sustainability (پله‌های پایداری)',
    category: 'Architecture / Sustainable Design',
    categoryFa: 'معماری / طراحی پایدار',
    awardsDe: 'AMP 2025 — Honorable Mention (Sustainable Interior) · PERSPA 2026 — Honorable Mention (Stairs)',
    awardsEn: 'AMP 2025 — Honorable Mention (Sustainable Interior) · PERSPA 2026 — Honorable Mention (Stairs)',
    awardsFa: 'AMP 2025 — تقدیر فضای داخلی پایدار · PERSPA 2026 — تقدیر ویژه پلکان',
    badgeNames: ['AMP 2025 HM', 'PERSPA 2026 HM Stairs'],
    link: 'https://perspa.fr/winners/architectural-perspective/#work-152'
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
    link: 'https://perspa.fr/2026/season-1-architectural-perspective/hephaestus-legacy-3/'
  },
  {
    id: 'razor-pull-berlin',
    titleDe: 'Razor Pull Berlin',
    titleEn: 'Razor Pull Berlin',
    titleFa: 'Razor Pull Berlin',
    category: 'Architecture / Exterior',
    categoryFa: 'معماری / سازه‌های بیرونی',
    awardsDe: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsEn: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsFa: 'AMP 2026 — تقدیر ویژه',
    badgeNames: ['AMP 2026 HM'],
    link: 'https://architectureprize.com/'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613455-25'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613512-25'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613543-25'
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
    link: 'https://licc.uk/'
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
    link: 'https://licc.uk/'
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
    link: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613510-25'
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
    link: 'https://licc.uk/'
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
    link: 'https://budapestfotoawards.com/'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722616352-26'
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
    link: 'https://licc.uk/'
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
    link: 'https://www.urbanphotoawards.com/'
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
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722619299-26'
  }
];
