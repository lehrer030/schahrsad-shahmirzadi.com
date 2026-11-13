import type { PhotoItem } from './photographyData';

export interface GallerySectionData {
  kickboxing: {
    titleDe: string;
    titleEn: string;
    titleFa: string;
    subtitleDe: string;
    subtitleEn: string;
    subtitleFa: string;
    descriptionDe: string;
    descriptionEn: string;
    descriptionFa: string;
    videoSrcMp4: string;
    videoSrcMov: string;
    posterImage: string;
  };
  running: {
    titleDe: string;
    titleEn: string;
    titleFa: string;
    subtitleDe: string;
    subtitleEn: string;
    subtitleFa: string;
    descriptionDe: string;
    descriptionEn: string;
    descriptionFa: string;
    photos: PhotoItem[];
  };
  athensGala: {
    titleDe: string;
    titleEn: string;
    titleFa: string;
    subtitleDe: string;
    subtitleEn: string;
    subtitleFa: string;
    descriptionDe: string;
    descriptionEn: string;
    descriptionFa: string;
    photos: PhotoItem[];
  };
}

export const GALLERY_PAGE_DATA: GallerySectionData = {
  kickboxing: {
    titleDe: 'Kickboxen – Training & Fokus',
    titleEn: 'Kickboxing – Training & Focus',
    titleFa: 'کیک‌بوکسینگ – تمرین و تمرکز',
    subtitleDe: 'Sportliche Höchstleistung & mentale Stärke',
    subtitleEn: 'High Performance & Mental Strength',
    subtitleFa: 'اوج عملکرد ورزشی و قدرت ذهنی',
    descriptionDe: 'SchirZan blickt auf eine beeindruckende Laufbahn als Kickbox-Weltmeisterin zurück. Für sie ist der Sport die Schule der Konzentration, Disziplin und Willenskraft, die sich auch in ihrer kompromisslosen photographischen Ästhetik widerspiegelt.',
    descriptionEn: 'SchirZan looks back on an extraordinary career as a Kickboxing World Champion. For her, sports represent discipline, relentless focus, and resilience—qualities that resonate deeply throughout her photographic works.',
    descriptionFa: 'شیرزن پیشینه‌ای درخشان به عنوان قهرمان جهان در کیک‌بوکسینگ دارد. برای او ورزش مدرسه تمرکز، انضباط و اراده است که در زیبایی‌شناسی سازش‌ناپذیر عکاسی او نیز متجلی می‌شود.',
    videoSrcMp4: './videos/kickboxing-training.mp4',
    videoSrcMov: './videos/1000035211.mov',
    posterImage: './videos/kickboxing-poster.jpg'
  },
  running: {
    titleDe: 'Running – Berlin Marathon & Läufe für Menschenrechte',
    titleEn: 'Running – Berlin Marathon & Runs for Human Rights',
    titleFa: 'دویدن – ماراتن برلین و دویدن برای حقوق بشر',
    subtitleDe: 'Langstreckenläufe mit Botschaft für Gleichberechtigung & Freiheit',
    subtitleEn: 'Long-distance advocacy runs for equality & human dignity',
    subtitleFa: 'دوهای استقامت با پیام برابری، آزادی و کرامت انسانی',
    descriptionDe: 'In den Jahren 2025 und 2026 absolvierte SchirZan elf Halbmarathons sowie den prestigeträchtigen Berlin Marathon. Ihre Läufe widmet sie dem gesellschaftlichen Engagement: Für Würde, Gleichberechtigung aller Menschen und gegen patriarchale Unterdrückung.',
    descriptionEn: 'In 2025 and 2026, SchirZan completed eleven half-marathons and the prestigious Berlin Marathon. Each run carries an unequivocal statement: Standing for human dignity, gender equality, diversity, and against patriarchal violence.',
    descriptionFa: 'در سال‌های ۲۰۲۵ و ۲۰۲۶، شیرزن یازده نیمه‌ماراتن و ماراتن معتبر برلین را با موفقیت پشت سر گذاشت. او هر دویدن را به آرمان‌های والای انسانی پیوند می‌زند: برای کرامت، برابری جنسیتی، تنوع و علیه سرکوب‌های پدرسالارانه.',
    photos: [
      {
        id: 'run-gallery-01',
        src: './images/2026_10_image00001-scaled.webp',
        alt: 'Berlin Marathon 2026 – Running for dignity and equality',
        captionDe: 'Berlin Marathon 2026 — Als deutsch-iranische Frau gelaufen: Für Würde und Gleichberechtigung, gegen patriarchale Familienstrukturen.',
        captionEn: 'Berlin Marathon 2026 — I ran as a German-Iranian woman: for dignity and equality, against patriarchal structures within families.',
        captionFa: 'ماراتن برلین ۲۰۲۶ — دویدن به عنوان یک زن آلمانی-ایرانی: برای کرامت و برابری، علیه ساختارهای پدرسالارانه خانوادگی.'
      },
      {
        id: 'run-gallery-02',
        src: './images/2026_10_image00002-scaled.webp',
        alt: 'Berlin Marathon 2026 – Ziel & Medaille',
        captionDe: 'Berlin Marathon 2026 — Finisher-Impression und Medaille nach 42,195 Kilometern voller Entschlossenheit.',
        captionEn: 'Berlin Marathon 2026 — Finisher impression and medal after 42.195 km of sheer determination.',
        captionFa: 'ماراتن برلین ۲۰۲۶ — مدال و لحظه پایان پس از ۴۲٫۱۹۵ کیلومتر اراده استوار.'
      },
      {
        id: 'run-gallery-03',
        src: './images/2026_05_image00002-scaled.webp',
        alt: '45. Berliner Halbmarathon: Running for Free Iran',
        captionDe: '45. Berliner Halbmarathon: „Running for Free Iran“ — Kraftvolles Zeichen für Freiheit und Frauenrechte.',
        captionEn: '45th Berlin Half Marathon: "Running for Free Iran" — A powerful tribute to freedom and women’s rights.',
        captionFa: 'چهل و پنجمین نیمه‌ماراتن برلین: «دویدن برای ایران آزاد» — نمادی پرتوان برای آزادی و حقوق زنان.'
      },
      {
        id: 'run-gallery-04',
        src: './images/2026_05_image00001-scaled.webp',
        alt: '45. Berliner Halbmarathon – Strecke',
        captionDe: '45. Berliner Halbmarathon — Unterwegs auf den Straßen Berlins mit sportlichem Spirit.',
        captionEn: '45th Berlin Half Marathon — On the streets of Berlin with dedicated athletic spirit.',
        captionFa: 'چهل و پنجمین نیمه‌ماراتن برلین — در خیابان‌های برلین با روحیه‌ای ورزشی و پویا.'
      },
      {
        id: 'run-gallery-05',
        src: './images/2025_07_image00055-1-scaled.webp',
        alt: 'Halbmarathon Berlin – Konzentration & Vorbereitung',
        captionDe: 'Halbmarathon Berlin — Fokus, Athletik und Vorbereitung auf die Langstrecke.',
        captionEn: 'Berlin Half Marathon — Focus, athletic conditioning, and race preparation.',
        captionFa: 'نیمه‌ماراتن برلین — تمرکز، آمادگی بدنی و آماده‌سازی برای مسافت طولانی.'
      },
      {
        id: 'run-gallery-06',
        src: './images/2025_07_image00056-1-scaled.webp',
        alt: 'Halbmarathon Berlin – Ziellinie',
        captionDe: 'Halbmarathon Berlin — Ein weiterer erfolgreicher Lauf für Frieden und Menschlichkeit.',
        captionEn: 'Berlin Half Marathon — Another accomplished endurance run for peace and humanity.',
        captionFa: 'نیمه‌ماراتن برلین — دویی دیگر با موفقیت برای صلح و انسانیت.'
      },
      {
        id: 'run-gallery-07',
        src: './images/2026_08_Adidas-City-Night-Run-Berlin-2026-1152x1536.webp',
        alt: 'Adidas City Night Run Berlin 2026',
        captionDe: 'Adidas City Night Run Berlin 2026: In Solidarität mit den Opfern des CSD 2026 – Für queeres Leben, Vielfalt und Freiheit an der Kaiser-Wilhelm-Gedächtniskirche.',
        captionEn: 'Adidas City Night Run Berlin 2026: In Solidarity with the Victims of the CSD 2026 Attack – for Queer Lives, Diversity and Freedom at the Kaiser Wilhelm Memorial Church.',
        captionFa: 'دو شبانه آدیداس برلین ۲۰۲۶: در همبستگی با قربانیان حادثه CSD ۲۰۲۶ – برای زندگی کوئیر، تنوع و آزادی در کنار کلیسای یادبود قیصر ویلهلم.'
      },
      {
        id: 'run-gallery-08',
        src: './images/2026_08_ecchr-human-rights-support-4-1152x1536.webp',
        alt: 'SchirZan — Fundraising Run for Human Rights 2027 (ECCHR)',
        captionDe: 'SchirZan — Fundraising Run for Human Rights 2027 ✨ · Berlin Half Marathon 2027 zur Unterstützung des European Center for Constitutional and Human Rights (ECCHR).',
        captionEn: 'SchirZan — Fundraising Run for Human Rights 2027 ✨ · Berlin Half Marathon 2027 supporting the European Center for Constitutional and Human Rights (ECCHR).',
        captionFa: 'شیرزن — دویدن برای جمع‌آوری کمک مالی جهت حقوق بشر ۲۰۲۷ ✨ · نیمه‌ماراتن برلین ۲۰۲۷ در حمایت از مرکز اروپایی قانون اساسی و حقوق بشر (ECCHR).',
        externalLink: 'https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights',
        externalLinkTextDe: 'Support the fundraising run →',
        externalLinkTextEn: 'Support the fundraising run →',
        externalLinkTextFa: 'حمایت از کمپین حقوق بشر (کمک مالی) ←',
        badgeDe: 'Spendenaufruf / Fundraising Run 2027 ✨',
        badgeEn: 'Fundraising Run for Human Rights 2027 ✨',
        badgeFa: 'فراخوان حمایت مالی حقوق بشر ۲۰۲۷ ✨'
      }
    ]
  },
  athensGala: {
    titleDe: 'International Photography Awards (IPA), Photo-Fest & Gala 2025 – Athen',
    titleEn: 'International Photography Awards (IPA), Photo-Fest & Gala 2025 – Athens',
    titleFa: 'جوایز بین‌المللی عکاسی (IPA)، فستیوال عکس و مراسم گالا ۲۰۲۵ – آتن',
    subtitleDe: 'Eindrücke der Festtage und Preisverleihung im House of Lucie',
    subtitleEn: 'Festivities and award ceremony impressions at the House of Lucie',
    subtitleFa: 'تصاویر جشن‌ها و مراسم اهدای جوایز در خانه لوسی',
    descriptionDe: 'Dokumentation der feierlichen IPA Gala und des internationalen Photo-Fests 2025 in Athen. Ein Treffen etablierter Meister der Photographie, Galerist:innen und internationaler Preisträger:innen im renommierten House of Lucie.',
    descriptionEn: 'Documentation of the prestigious IPA Gala and international Photo-Fest 2025 in Athens, Greece. A celebration uniting masters of photography, gallery owners, and international award winners at the esteemed House of Lucie.',
    descriptionFa: 'مستندسازی مراسم باشکوه گالا IPA و فستیوال بین‌المللی عکس ۲۰۲۵ در آتن. گردهمایی استادان برجسته عکاسی، مدیران گالری‌ها و برگزیدگان بین‌المللی در خانه پرآوازه لوسی.',
    photos: [
      {
        id: 'ipa-athens-01',
        src: './images/2025_11_image00012-scaled.webp',
        alt: 'House of Lucie, Photo: Steve Barret, Photo-Fest IPA',
        captionDe: 'House of Lucie, Photo: Steve Barret, Photo-Fest IPA',
        captionEn: 'House of Lucie, Photo: Steve Barret, Photo-Fest IPA',
        captionFa: 'خانه لوسی (House of Lucie)، عکس: استیو بارت، فستیوال عکس IPA'
      },
      {
        id: 'ipa-athens-02',
        src: './images/2025_11_image00013-scaled.webp',
        alt: 'Signaturbuch IPA 2025',
        captionDe: 'Signaturbuch IPA 2025 – Erinnerung an die internationale Gemeinschaft und den gemeinsamen Einsatz für Photographie, Frieden & Umweltschutz.',
        captionEn: 'Signature Book IPA 2025 – Commemorating the international community and collective dedication to photography, peace, and environmental protection.',
        captionFa: 'دفتر یادبود امضای IPA ۲۰۲۵ – یادبود جامعه بین‌المللی و تعهد مشترک به عکاسی، صلح و محیط زیست.'
      },
      {
        id: 'ipa-athens-03',
        src: './images/2025_11_image00014-1024x768.webp',
        alt: 'International Photography Awards (IPA), Photo-Fest & Gala 2025 - Athen',
        captionDe: 'International Photography Awards (IPA), Photo-Fest & Gala 2025 - Athen: Die feierliche Abendveranstaltung.',
        captionEn: 'International Photography Awards (IPA), Photo-Fest & Gala 2025 - Athens: The festive evening gala.',
        captionFa: 'جوایز بین‌المللی عکاسی (IPA)، فستیوال عکس و گالا ۲۰۲۵ - آتن: شب پرشکوه گالا.'
      },
      {
        id: 'ipa-athens-04',
        src: './images/2025_11_image00015-scaled.webp',
        alt: 'House of Lucie, Meisterphoto Afghan Girl von Steve McCurry',
        captionDe: 'House of Lucie, präsentiertes Meisterphoto: „Afghan Girl“ von Steve McCurry – im Rahmen des IPA Photo-Festes',
        captionEn: 'House of Lucie, exhibited iconic masterpiece: "Afghan Girl" by Steve McCurry – during the IPA Photo-Fest',
        captionFa: 'خانه لوسی، شاهکار به نمایش درآمده: «دختر افغان» اثر استیو مک‌کوری – در فستیوال عکس IPA'
      },
      {
        id: 'ipa-athens-05',
        src: './images/2025_11_image00016-1206x2048.webp',
        alt: 'Winner Honorable Mention, Photo: Steve Barret, IPA Gala 2025 (Athen)',
        captionDe: 'Winner Honorable Mention, Photo: Steve Barret, IPA Gala 2025 (Athen)',
        captionEn: 'Winner Honorable Mention, Photo: Steve Barret, IPA Gala 2025 (Athens)',
        captionFa: 'برنده تقدیرنامه افتخاری، عکس: استیو بارت، مراسم گالا IPA ۲۰۲۵ (آتن)'
      },
      {
        id: 'ipa-athens-06',
        src: './images/2025_11_image00017-scaled.webp',
        alt: 'IPA Winner Honorable Mention 2025 – Preismedaille',
        captionDe: 'IPA Winner Honorable Mention 2025 – Auszeichnung und Preismedaille im offiziellen Buch der International Photography Awards',
        captionEn: 'IPA Winner Honorable Mention 2025 – Official award and medal published in the International Photography Awards book',
        captionFa: 'برنده تقدیرنامه افتخاری IPA ۲۰۲۵ – مدال و گواهی رسمی در کتاب جوایز بین‌المللی عکاسی'
      }
    ]
  }
};

