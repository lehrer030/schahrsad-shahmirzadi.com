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
    photos: PhotoItem[];
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
    posterImage: './videos/kickboxing-poster.jpg',
    photos: [
      {
        id: 'kb-gallery-01',
        src: './images/2025_06_ssh.webp',
        alt: 'SchirZan mit dem WKU-Weltmeistergürtel',
        locationDe: 'WKU Weltmeisterschaft · Schloss Diedersdorf',
        locationEn: 'WKU World Championship · Diedersdorf Castle',
        locationFa: 'قهرمانی جهان WKU · کاخ دیدرزدورف',
        captionDe: 'WKU Weltmeisterschaft',
        captionEn: 'WKU World Championship',
        captionFa: 'قهرمانی جهان WKU'
      },
      {
        id: 'kb-gallery-02',
        src: './images/2025_07_DSC_0701.webp',
        alt: 'SchirZan im roten Boxmantel – Photo by Steve Barret',
        locationDe: 'Schloss Diedersdorf · Brandenburg',
        locationEn: 'Diedersdorf Castle · Brandenburg',
        locationFa: 'کاخ دیدرزدورف · براندنبورگ',
        captionDe: 'Photo by Steve Barret',
        captionEn: 'Photo by Steve Barret',
        captionFa: 'عکس: استیو بارت (Photo by Steve Barret)'
      },
      {
        id: 'kb-gallery-03',
        src: './images/2025_07_ode-an-den-sport-e1753264342920.webp',
        alt: 'Filmporträt „Ode an den Sport“ – Photo by L&T Sport',
        locationDe: 'Filmporträt „Ode an den Sport“ · Berlin',
        locationEn: 'Film Portrait "Ode to Sports" · Berlin',
        locationFa: 'فیلم پرتره «قصیده‌ای برای ورزش» · برلین',
        captionDe: 'Photo by L&T Sport',
        captionEn: 'Photo by L&T Sport',
        captionFa: 'عکس: L&T Sport'
      }
    ]
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
        alt: 'BMW BERLIN-MARATHON 2026 — Finisher-Medaille & Friedenszeichen',
        locationDe: 'BMW BERLIN-MARATHON 2026 · Berlin',
        locationEn: 'BMW BERLIN-MARATHON 2026 · Berlin',
        locationFa: 'ماراتن برلین ۲۰۲۶ · برلین',
        captionDe: 'Berlin Marathon 2026 — Ich bin als deutsch-iranische Frau gelaufen: für Würde und Gleichberechtigung, gegen patriarchale Strukturen in Familien.',
        captionEn: 'Berlin Marathon 2026 — I ran as a German-Iranian woman: for dignity and equality, against patriarchal structures within families.',
        captionFa: 'ماراتن برلین ۲۰۲۶ — من به عنوان زنی ایرانی-آلمانی دویدم: برای کرامت و برابری، علیه ساختارهای پدرسالارانه در خانواده‌ها.'
      },
      {
        id: 'run-gallery-02',
        src: './images/2026_10_image00002-scaled.webp',
        alt: 'BMW BERLIN-MARATHON 2026 – Wall of Fame',
        locationDe: 'Berlin Marathon 2026 · Wall of Fame',
        locationEn: 'Berlin Marathon 2026 · Wall of Fame',
        locationFa: 'ماراتن برلین ۲۰۲۶ · تالار مشاهیر',
        captionDe: 'Alle Teilnehmerinnen und Teilnehmer des BMW BERLIN-MARATHON 2026 sowie alle Champions von 1974 bis 2025 sind alphabetisch auf der Wall of Fame verzeichnet.',
        captionEn: 'All participants in the 2026 BMW BERLIN-MARATHON, along with all champions from 1974 to 2025, are listed alphabetically on the Wall of Fame.',
        captionFa: 'کلیه شرکت‌کنندگان ماراتن بی‌ام‌و برلین ۲۰۲۶ به همراه تمامی قهرمانان از سال ۱۹۷۴ تا ۲۰۲۵ به ترتیب حروف الفبا بر روی تالار مشاهیر (Wall of Fame) ثبت شده‌اند.'
      },
      {
        id: 'run-gallery-03',
        src: './images/2025_07_image00055-1-scaled.webp',
        alt: 'Berliner Halbmarathon 2025 — SchirZan',
        locationDe: 'Berliner Halbmarathon 2025 · Berlin',
        locationEn: 'Berlin Half Marathon 2025 · Berlin',
        locationFa: 'نیمه‌ماراتن برلین ۲۰۲۵ · برلین',
        captionDe: 'Berliner Halbmarathon 2025: SchirZan mit Startnummer „SchirZan, B. Halbmarathon 2025, Für Umweltschutz & Frieden“.',
        captionEn: 'Berlin Half Marathon 2025: SchirZan with personalized bib "For Environmental Protection & Peace".',
        captionFa: 'نیمه‌ماراتن برلین ۲۰۲۵: شیرزن با شماره اختصاصی «برای حفاظت از محیط‌زیست و صلح».'
      },
      {
        id: 'run-gallery-04',
        src: './images/2025_07_image00056-1-scaled.webp',
        alt: 'Berliner Halbmarathon 2025 — Brandenburger Tor',
        locationDe: 'Brandenburger Tor · Berlin',
        locationEn: 'Brandenburg Gate · Berlin',
        locationFa: 'دروازه براندنبورگ · برلین',
        captionDe: 'Berliner Halbmarathon 2025 am Brandenburger Tor: Lauf für Umweltschutz und Frieden durch die historische Mitte Berlins.',
        captionEn: 'Berlin Half Marathon 2025 at the Brandenburg Gate: Running for environmental protection and peace through historic central Berlin.',
        captionFa: 'نیمه‌ماراتن برلین ۲۰۲۵ در کنار دروازه براندنبورگ: دویدن برای حفاظت از محیط‌زیست و صلح در مرکز تاریخی برلین.'
      },
      {
        id: 'run-gallery-05',
        src: './images/2026_05_image00001-scaled.webp',
        alt: 'SchirZan mit Deutschlandfahne — Sport & Demokratie',
        locationDe: 'Berlin · Sport & Demokratie',
        locationEn: 'Berlin · Sports & Democracy',
        locationFa: 'برلین · ورزش و دموکراسی',
        captionDe: 'Sportliche Botschaft für demokratischen Zusammenhalt, Freiheit und Menschenwürde.',
        captionEn: 'Sporting commitment to democratic cohesion, freedom, and human dignity.',
        captionFa: 'پیام ورزشی برای همبستگی دموکراتیک، آزادی و کرامت انسانی.'
      },
      {
        id: 'run-gallery-06',
        src: './images/2026_05_image00002-scaled.webp',
        alt: '45. Berliner Halbmarathon: Running for Free Iran',
        locationDe: '45. Berliner Halbmarathon · Berlin',
        locationEn: '45th Berlin Half Marathon · Berlin',
        locationFa: 'چهل و پنجمین نیمه‌ماراتن برلین · برلین',
        captionDe: '45. Berliner Halbmarathon: „Running for Free Iran“ — Kraftvolles sportliches Zeichen für Freiheit, Gleichberechtigung und Frauenrechte.',
        captionEn: '45th Berlin Half Marathon: "Running for Free Iran" — A powerful tribute to freedom, equality, and women’s rights.',
        captionFa: 'چهل و پنجمین نیمه‌ماراتن برلین: «دویدن برای ایران آزاد» — نمادی پرتوان برای آزادی، برابری و حقوق زنان.'
      },
      {
        id: 'run-gallery-07',
        src: './images/2026_08_Adidas-City-Night-Run-Berlin-2026-1536x2048.webp',
        alt: 'Adidas City Night Run Berlin 2026',
        locationDe: 'Gedächtniskirche · Berlin',
        locationEn: 'Kaiser Wilhelm Memorial Church · Berlin',
        locationFa: 'کلیسای یادبود قیصر ویلهلم · برلین',
        captionDe: 'Adidas City Night Run Berlin 2026: An der Kaiser-Wilhelm-Gedächtniskirche in Solidarität mit den Opfern des CSD 2026 – Für queeres Leben, Vielfalt und Freiheit.',
        captionEn: 'Adidas City Night Run Berlin 2026: In Solidarity with the Victims of the CSD 2026 Attack – for Queer Lives, Diversity and Freedom at the Kaiser Wilhelm Memorial Church.',
        captionFa: 'دو شبانه آدیداس برلین ۲۰۲۶: در همبستگی با قربانیان حادثه CSD ۲۰۲۶ – برای زندگی کوئیر، تنوع و آزادی در کنار کلیسای یادبود قیصر ویلهلم.'
      },
      {
        id: 'run-gallery-08',
        src: './images/2026_08_ecchr-human-rights-support-4-1536x2048.webp',
        alt: 'SchirZan — Fundraising Run for Human Rights 2027 (ECCHR)',
        locationDe: 'Spendenlauf 2027 · ECCHR Berlin',
        locationEn: 'Fundraising Run 2027 · ECCHR Berlin',
        locationFa: 'دویدن خیریه ۲۰۲۷ · ECCHR برلین',
        captionDe: 'SchirZan — Fundraising Run for Human Rights 2027 ✨ · Berlin Half Marathon 2027 zur Unterstützung des European Center for Constitutional and Human Rights (ECCHR): Solidarität und weltweite rechtliche Unterstützung für Betroffene von schweren Menschenrechtsverletzungen.',
        captionEn: 'SchirZan — Fundraising Run for Human Rights 2027 ✨ · Berlin Half Marathon 2027 supporting the European Center for Constitutional and Human Rights (ECCHR): Solidarity and worldwide legal action for survivors of human rights violations.',
        captionFa: 'شیرزن — دویدن برای جمع‌آوری کمک مالی جهت حقوق بشر ۲۰۲۷ ✨ · نیمه‌ماراتن برلین ۲۰۲۷ در حمایت از مرکز اروپایی قانون اساسی و حقوق بشر (ECCHR): همبستگی و دادخواهی حقوقی بین‌المللی برای بازماندگان نقض حقوق بشر.',
        externalLink: 'https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights',
        externalLinkTextDe: 'Spendenlauf unterstützen →',
        externalLinkTextEn: 'Support the fundraising run →',
        externalLinkTextFa: 'حمایت از کمپین حقوق بشر (کمک مالی) ←',
        badgeDe: 'Spendenaufruf – Lauf für Menschenrechte 2027 ✨',
        badgeEn: 'Fundraising Run for Human Rights 2027 ✨',
        badgeFa: 'فراخوان حمایت مالی حقوق بشر ۲۰۲۷ ✨'
      }
    ]
  },
  athensGala: {
    titleDe: 'International Photography Awards (IPA), Photo-Fest – Athens 2025',
    titleEn: 'International Photography Awards (IPA), Photo-Fest – Athens 2025',
    titleFa: 'جوایز بین‌المللی عکاسی (IPA)، فستیوال عکس – آتن ۲۰۲۵',
    subtitleDe: 'House of Lucie, Athens – Artist Talks',
    subtitleEn: 'House of Lucie, Athens – Artist Talks',
    subtitleFa: 'خانه لوسی، آتن – نشست‌ها و گفتگوهای هنرمندان',
    descriptionDe: 'Dokumentation des internationalen IPA Photo-Fests 2025 in Athen: Artist Talks, Meisterwerke und künstlerischer Austausch im renommierten House of Lucie.',
    descriptionEn: 'Documentation of the international IPA Photo-Fest 2025 in Athens: Artist talks, masterworks, and creative dialogue at the prestigious House of Lucie.',
    descriptionFa: 'مستندسازی فستیوال بین‌المللی عکس IPA ۲۰۲۵ در آتن: گفتگوهای هنرمندان، شاهکارهای عکاسی و گردهمایی بین‌المللی در خانه لوسی.',
    photos: [
      {
        id: 'ipa-athens-01',
        src: './images/2025_11_image00012-scaled.webp',
        alt: 'International Photography Awards (IPA), Photo-Fest – Athens 2025 · House of Lucie, Athens – Artist Talks',
        locationDe: 'House of Lucie · Athen',
        locationEn: 'House of Lucie · Athens',
        locationFa: 'خانه لوسی · آتن',
        captionDe: 'International Photography Awards (IPA), Photo-Fest – Athens 2025 · House of Lucie, Athens – Artist Talks (Photo: Steve Barret)',
        captionEn: 'International Photography Awards (IPA), Photo-Fest – Athens 2025 · House of Lucie, Athens – Artist Talks (Photo: Steve Barret)',
        captionFa: 'جوایز بین‌المللی عکاسی (IPA)، فستیوال عکس آتن ۲۰۲۵ · خانه لوسی، گفتگوهای هنرمندان (عکس: استیو بارت)'
      },
      {
        id: 'ipa-athens-02',
        src: './images/2025_11_image00013-scaled.webp',
        alt: 'Signaturbuch IPA 2025',
        locationDe: 'IPA Signaturbuch 2025 · Athen',
        locationEn: 'IPA Signature Book 2025 · Athens',
        locationFa: 'دفتر یادبود امضای IPA ۲۰۲۵ · آتن',
        captionDe: 'Signaturbuch IPA 2025 – Erinnerung an die internationale Gemeinschaft und den gemeinsamen Einsatz für Photographie, Frieden & Umweltschutz.',
        captionEn: 'Signature Book IPA 2025 – Commemorating the international community and collective dedication to photography, peace, and environmental protection.',
        captionFa: 'دفتر یادبود امضای IPA ۲۰۲۵ – یادبود جامعه بین‌المللی و تعهد مشترک به عکاسی، صلح و محیط زیست.'
      },
      {
        id: 'ipa-athens-03',
        src: './images/2025_11_image00014-1024x768.webp',
        alt: 'International Photography Awards (IPA), Photo-Fest & Gala 2025 - Athen',
        locationDe: 'IPA Gala 2025 · Athen',
        locationEn: 'IPA Gala 2025 · Athens',
        locationFa: 'مراسم گالا IPA ۲۰۲۵ · آتن',
        captionDe: 'International Photography Awards (IPA), Photo-Fest & Gala 2025 - Athen: Die feierliche Abendveranstaltung.',
        captionEn: 'International Photography Awards (IPA), Photo-Fest & Gala 2025 - Athens: The festive evening gala.',
        captionFa: 'جوایز بین‌المللی عکاسی (IPA)، فستیوال عکس و گالا ۲۰۲۵ - آتن: شب پرشکوه گالا.'
      },
      {
        id: 'ipa-athens-04',
        src: './images/2025_11_image00015-scaled.webp',
        alt: 'House of Lucie, Meisterphoto Afghan Girl von Steve McCurry',
        locationDe: 'House of Lucie · Athen',
        locationEn: 'House of Lucie · Athens',
        locationFa: 'خانه لوسی · آتن',
        captionDe: 'House of Lucie, präsentiertes Meisterphoto: „Afghan Girl“ von Steve McCurry – im Rahmen des IPA Photo-Festes',
        captionEn: 'House of Lucie, exhibited iconic masterpiece: "Afghan Girl" by Steve McCurry – during the IPA Photo-Fest',
        captionFa: 'خانه لوسی، شاهکار به نمایش درآمده: «دختر افغان» اثر استیو مک‌کوری – در فستیوال عکس IPA'
      },
      {
        id: 'ipa-athens-05',
        src: './images/2025_11_image00016-1206x2048.webp',
        alt: 'Winner Honorable Mention, Photo: Steve Barret, IPA Gala 2025 (Athen)',
        locationDe: 'IPA Gala 2025 · Athen',
        locationEn: 'IPA Gala 2025 · Athens',
        locationFa: 'مراسم گالا IPA ۲۰۲۵ · آتن',
        captionDe: 'Winner Honorable Mention, Photo: Steve Barret, IPA Gala 2025 (Athen)',
        captionEn: 'Winner Honorable Mention, Photo: Steve Barret, IPA Gala 2025 (Athens)',
        captionFa: 'برنده تقدیرنامه افتخاری، عکس: استیو بارت، مراسم گالا IPA ۲۰۲۵ (آتن)'
      },
      {
        id: 'ipa-athens-06',
        src: './images/2025_11_image00017-scaled.webp',
        alt: 'IPA Winner Honorable Mention 2025 – Preismedaille',
        locationDe: 'IPA Preismedaille · Athen',
        locationEn: 'IPA Official Medal · Athens',
        locationFa: 'مدال رسمی IPA · آتن',
        captionDe: 'IPA Winner Honorable Mention 2025 – Auszeichnung und Preismedaille im offiziellen Buch der International Photography Awards',
        captionEn: 'IPA Winner Honorable Mention 2025 – Official award and medal published in the International Photography Awards book',
        captionFa: 'برنده تقدیرنامه افتخاری IPA ۲۰۲۵ – مدال و گواهی رسمی در کتاب جوایز بین‌المللی عکاسی'
      }
    ]
  }
};
