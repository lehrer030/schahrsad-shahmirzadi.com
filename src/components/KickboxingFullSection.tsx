import React, { useState } from 'react';
import {
  Trophy,
  Award,
  ExternalLink,
  Shield,
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  Sparkles,
  Calendar,
  MapPin,
  Heart
} from 'lucide-react';
import type { Language } from '../data/photographyData';
import { resolveAsset } from '../utils/resolveAsset';
import { SectionHeader } from './SectionHeader';

interface KickboxingFullSectionProps {
  currentLang: Language;
}

export const KickboxingFullSection: React.FC<KickboxingFullSectionProps> = ({ currentLang }) => {
  const [showAllAmateur, setShowAllAmateur] = useState(true);

  const amateurTitles = [
    {
      year: '2016',
      titleDe: 'ISKA Weltmeisterin im Vollkontakt · Damen bis 58 kg in Deutschland',
      titleEn: 'ISKA World Champion – Women’s Full Contact, −58 kg, Germany',
      titleFa: 'قهرمان جهان ISKA در فول‌کنتاکت بانوان · وزن منهای ۵۸ کیلوگرم در آلمان'
    },
    {
      year: '2016',
      titleDe: 'WMAC World Martial Arts Games Siegerin im Vollkontakt · Offene Klasse in Bad Kissingen',
      titleEn: 'WMAC World Martial Arts Games Winner – Women’s Full Contact, Open Weight, Bad Kissingen',
      titleFa: 'قهرمان بازی‌های جهانی هنرهای رزمی WMAC در کلاس آزاد در آلمان'
    },
    {
      year: '2015',
      titleDe: 'ISKA Weltmeisterin im Vollkontakt · Damen bis 57 kg in Portugal',
      titleEn: 'ISKA World Champion – Women’s Full Contact, −57 kg, Portugal',
      titleFa: 'قهرمان جهان ISKA در فول‌کنتاکت بانوان · وزن منهای ۵۷ کیلوگرم در پرتغال'
    },
    {
      year: '2015',
      titleDe: 'ISKA Weltmeisterin im Lowkick · Damen bis 57 kg in Portugal',
      titleEn: 'ISKA World Champion – Women’s Low Kick, −57 kg, Portugal',
      titleFa: 'قهرمان جهان ISKA در لوکیک بانوان · وزن منهای ۵۷ کیلوگرم در پرتغال'
    },
    {
      year: '2015',
      titleDe: 'ICO Weltmeisterin im Vollkontakt · Damen bis 60 kg in Stuttgart',
      titleEn: 'ICO World Champion – Women’s Full Contact, −60 kg, Stuttgart',
      titleFa: 'قهرمان جهان ICO در فول‌کنتاکت بانوان · وزن منهای ۶۰ کیلوگرم در اشتوتگارت'
    },
    {
      year: '2015',
      titleDe: 'WKU World Cup Siegerin im K-1 · Damen bis 55 kg in Kroatien',
      titleEn: 'WKU World Cup Winner – Women’s K-1, −55 kg, Croatia',
      titleFa: 'قهرمان جام جهانی WKU در K-1 در کرواسی'
    },
    {
      year: '2014',
      titleDe: 'WKU Weltmeisterin im Vollkontakt · Damen bis 55 kg in London',
      titleEn: 'WKU World Champion – Women’s Full Contact, −55 kg, London',
      titleFa: 'قهرمان جهان WKU در فول‌کنتاکت بانوان · وزن منهای ۵۵ کیلوگرم در لندن'
    },
    {
      year: '2014',
      titleDe: 'WKU Weltmeisterin im K-1 · Damen bis 55 kg in London',
      titleEn: 'WKU World Champion – Women’s K-1, −55 kg, London',
      titleFa: 'قهرمان جهان WKU در K-1 بانوان · وزن منهای ۵۵ کیلوگرم در لندن'
    },
    {
      year: '2014',
      titleDe: 'IAKSA World Cup Siegerin im K-1 · Damen bis 60 kg in San Marino',
      titleEn: 'IAKSA World Cup Winner – Women’s K-1, −60 kg, San Marino',
      titleFa: 'قهرمان جام جهانی IAKSA در K-1 در سان‌مارینو'
    },
    {
      year: '2014',
      titleDe: 'ICO Europameisterin im Vollkontakt · Damen bis 60 kg in England',
      titleEn: 'ICO European Champion – Women’s Full Contact, −60 kg, England',
      titleFa: 'قهرمان اروپا ICO در فول‌کنتاکت در انگلستان'
    },
    {
      year: '2013',
      titleDe: 'WKU Weltmeisterin im Vollkontakt · Damen bis 55 kg in Griechenland',
      titleEn: 'WKU World Champion – Women’s Full Contact, −55 kg, Greece',
      titleFa: 'قهرمان جهان WKU در فول‌کنتاکت بانوان · وزن منهای ۵۵ کیلوگرم در یونان'
    },
    {
      year: '2013',
      titleDe: 'WKU Weltmeisterin im K-1 · Damen bis 55 kg in Griechenland',
      titleEn: 'WKU World Champion – Women’s K-1, −55 kg, Greece',
      titleFa: 'قهرمان جهان WKU در K-1 بانوان · وزن منهای ۵۵ کیلوگرم در یونان'
    },
    {
      year: '2013',
      titleDe: 'ISKA German Pro/Am Champion im Vollkontakt · Damen bis 58,2 kg',
      titleEn: 'ISKA German Pro/Am Champion – Women’s Full Contact, −58.2 kg',
      titleFa: 'قهرمان حرفه‌ای/آماتور ISKA آلمان'
    },
    {
      year: '2010–2016',
      titleDe: '15-fache Deutsche und Int. Deutsche Meisterin in den Verbänden WAKO, WKA, WKU, ISKA, IAKSA, ICO und WKC',
      titleEn: '15-time German or International German Champion across 7 federations: WAKO, WKA, WKU, ISKA, IAKSA, ICO, WKC',
      titleFa: '۱۵ دوره قهرمان آلمان و بین‌المللی در ۷ فدراسیون معتبر'
    },
    {
      year: '2010–2012',
      titleDe: 'Dreifache Baden-Württembergische Meisterin des Verbandes WAKO',
      titleEn: 'Three-time Baden-Württemberg Champion (WAKO)',
      titleFa: 'سه دوره قهرمان ایالت بادن-وورتمبرگ فدراسیون WAKO'
    },
    {
      year: '2009',
      titleDe: 'Mack-Mania Siegerin in Mannheim',
      titleEn: 'Mack-Mania Winner in Mannheim',
      titleFa: 'قهرمان تورنمنت معتبر مک‌مانیا در مانهایم'
    }
  ];

  const sportingHonours = [
    {
      period: '2010–2015, 2017',
      titleDe: 'Mehrfache Sportlerehrung der Stadt Mannheim für herausragende internationale Erfolge im Kickboxen',
      titleEn: 'City of Mannheim sporting honours: Multiple awards for international kickboxing achievements',
      titleFa: 'تقدیر و تجلیل مکرر ورزشی توسط شهرداری مانهایم برای افتخارات جهانی'
    },
    {
      period: '2014 & 2016',
      titleDe: 'Sportlerehrung der Berliner Polizei: 2014 und 2016 – Ehrung durch die Senatsverwaltung für Inneres und Sport (SenInnDS)',
      titleEn: 'Berlin Police sporting honours: 2014 and 2016 – Senate Department for the Interior and Sports Berlin (SenInnDS)',
      titleFa: 'تجلیل ورزشی پلیس برلین: ۲۰۱۴ و ۲۰۱۶ – اداره امور داخلی و ورزش سنای برلین (SenInnDS)'
    },
    {
      period: '2014',
      titleDe: 'Bundesweite Ehrung der Spitzen-Polizeisportlerinnen (DPSK) in Anerkennung für herausragende sportliche Leistungen',
      titleEn: 'Sporting honours from the German federal and state police forces (DPSK): 2014 – In recognition of her outstanding sporting achievements',
      titleFa: 'تجلیل ورزشی پلیس فدرال و ایالات آلمان (DPSK) ۲۰۱۴ – در تقدیر از دستاوردهای برجسته ورزشی',
      link: 'https://www.land.nrw/pressemitteilung/spitzensportler-der-polizei-wurden-olympiasieger-europa-und-weltmeister'
    },
    {
      period: '2014',
      titleDe: 'Ehrung für herausragende sportliche Leistungen durch den Polizeipräsidenten in Berlin',
      titleEn: 'Honoured for outstanding athletic achievements by the Berlin Police President',
      titleFa: 'تجلیل ویژه توسط رئیس پلیس برلین برای افتخارات برجسته ورزشی'
    },
    {
      period: 'L&T Sport',
      titleDe: 'Ehrung im bundesweiten TV-Werbespot „Ode an den Sport“ zur Eröffnung des Sporthauses L&T',
      titleEn: 'Honoured in the high-profile nationwide campaign and commercial "Ode to Sport" by L&T Sport',
      titleFa: 'تجلیل در تیزر تبلیغاتی تلویزیونی سراسری «قصیده‌ای برای ورزش» (L&T Sport)',
      link: 'https://www.youtube.com/watch?v=p9cGqvKUnV8&pp=ygUQb2RlIGFuIGRlbiBzcG9ydA%3D%3D'
    },
    {
      period: 'L&T Sport',
      titleDe: 'Beitrag zum Motivationsbuch „Und weiter“ von L&T Sport',
      titleEn: 'Contribution to L&T Sport’s motivational book “Und weiter”',
      titleFa: 'مشارکت در نگارش کتاب انگیزشی «Und weiter» توسط L&T Sport'
    }
  ];

  const mediaLinks = [
    {
      title: currentLang === 'en'
        ? 'Berliner Kurier: “Berlin’s Kickboxing World Champion: A Policewoman Beat Me Up”'
        : currentLang === 'fa'
          ? 'روزنامه Berliner Kurier: «قهرمان کیک‌بوکسینگ جهان در برلین: یک افسر پلیس مرا شکست داد»'
          : 'Berliner Kurier: „Berlins Kickbox-Weltmeisterin: Eine Polizistin hat mich vermöbelt“',
      url: 'https://www.berliner-kurier.de/archiv/berlins-kickbox-weltmeisterin-eine-polizistin-hat-mich-vermoebelt-li.1597461',
      source: 'Berliner Kurier',
      date: 'Archiv'
    },
    {
      title: currentLang === 'en'
        ? 'Berliner Kurier: “Open to Everyone: Truly Berlin. Truly Multicultural. Truly Police.”'
        : currentLang === 'fa'
          ? 'روزنامه Berliner Kurier: «به روی همه باز است: اصالتاً برلینی، چندفرهنگی و متعلق به پلیس»'
          : 'Berliner Kurier: „Offen für alle – echt Berlin, echt multikulti, echt Polizei“',
      url: 'https://www.berliner-kurier.de/archiv/offen-fuer-alle-echt-berlin-echt-multikulti-echt-polizei-li.1480689',
      source: 'Berliner Kurier',
      date: 'Archiv'
    },
    {
      title: currentLang === 'en'
        ? 'Land NRW Press Release: “Elite Police Athletes Became Olympic, European and World Champions”'
        : currentLang === 'fa'
          ? 'بیانیه رسمی ایالت NRW: «ورزشکاران نخبه پلیس قهرمان المپیک، اروپا و جهان شدند»'
          : 'Land NRW Pressemitteilung: „Spitzensportler der Polizei wurden Olympiasieger, Europa- und Weltmeister“',
      url: 'https://www.land.nrw/pressemitteilung/spitzensportler-der-polizei-wurden-olympiasieger-europa-und-weltmeister',
      source: currentLang === 'en' ? 'State Portal North Rhine-Westphalia' : 'Landesportal Nordrhein-Westfalen',
      date: 'Offizielle Mitteilung'
    },
    {
      title: currentLang === 'en'
        ? 'transform magazine: “Taking Up Space Through Martial Arts”'
        : currentLang === 'fa'
          ? 'مجله transform: «فضاسازی از طریق هنرهای رزمی»'
          : 'transform magazin: „Durch Kampfsport Raum einnehmen“',
      url: 'https://transform-magazin.de/schahrsad/',
      source: 'transform magazin',
      date: 'Interview'
    },
    {
      title: currentLang === 'en'
        ? 'Kampfkunst Budo International: Report on the Professional European Championship Title Bout (pp. 122–123)'
        : currentLang === 'fa'
          ? 'مجله بین‌المللی هنرهای رزمی: گزارش مبارزه قهرمانی حرفه‌ای اروپا (صفحات ۱۲۲–۱۲۳)'
          : 'Kampfkunst Budo International: Reportage über den Profi-Europameisterschaftstitelkampf (S. 122–123)',
      url: 'https://issuu.com/budoweb/docs/kampfkunst_budo_international_277-_',
      source: 'Kampfkunst-International',
      date: 'Magazin'
    }
  ];

  return (
    <section id="kickboxing" className="scroll-mt-[148px] lg:scroll-mt-[190px] pt-6 border-t border-stone-200 relative">
      <div id="kickboxen" className="absolute -top-24 left-0 pointer-events-none" />

      {/* 06 Kickboxen Header – Matching Navbar 06 */}
      <SectionHeader
        num="06"
        shortTitleDe="Kickboxen"
        shortTitleEn="Kickboxing"
        shortTitleFa="کیک‌بوکسینگ"
        fullTitleDe="Kickboxen – 10-fache Weltmeisterin SchirZan | Schahrsad Shahmirzadi"
        fullTitleEn="Kickboxing – 10-Time World Champion SchirZan | Schahrsad Shahmirzadi"
        fullTitleFa="کیک‌بوکسینگ – ۱۰ بار قهرمان جهان شیرزن | شهزاد شاهمیرزادی"
        descDe="Erfolgreichste deutsche Kickboxerin: 10-fache Weltmeisterin (WKU, ISKA, ICO), zweifache Europameisterin, dreifache Weltcupsiegerin und Trägerin des 3. Dan (Schwarzer Gürtel). Disziplin, mentale Stärke und Willenskraft."
        descEn="One of Germany’s most accomplished female kickboxers: 10× World Champion (WKU, ISKA, ICO), 2× European Champion, 3× World Cup Winner and 3rd Dan Black Belt."
        descFa="یکی از پرافتخارترین بانوان کیک‌بوکسینگ آلمان: ۱۰ بار قهرمان جهان (WKU, ISKA, ICO)، ۲ بار قهرمان اروپا، ۳ بار قهرمان جام جهانی و دارنده دان ۳ کمربند سیاه."
        currentLang={currentLang}
        extraRight={
          <div className="lg:max-w-xs shrink-0 bg-[#faf8f5] border-l-2 border-amber-800/80 p-4 sm:p-5 rounded-r-lg shadow-2xs">
            <span className="text-3xl font-serif text-amber-800/30 leading-none select-none block -mb-2">“</span>
            <p className="text-base sm:text-lg font-serif italic text-stone-800 leading-snug">
              {currentLang === 'fa'
                ? 'پیروزی در ذهن آغاز می‌شود!'
                : currentLang === 'en'
                  ? 'Winning starts in the mind!'
                  : 'Gewinnen fängt im Kopf an!'}
            </p>
            <div className="mt-2 text-[11px] font-mono uppercase tracking-wider text-stone-400">
              — SchirZan
            </div>
          </div>
        }
      />

      {/* Key Pillars Stats: 4-Column Responsive Grid (Wettkampferfolge) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-12">
        <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs text-center">
          <Trophy className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
          <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">10×</div>
          <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-600 mt-1">
            {currentLang === 'fa' ? 'قهرمان جهان · فدراسیون‌های WKU, ISKA, ICO' : 'Weltmeisterin · WKU, ISKA, ICO'}
          </div>
          <div className="text-[10px] text-stone-400 mt-0.5">
            {currentLang === 'fa' ? 'شامل ۲ عنوان حرفه‌ای' : 'Inkl. 2 Profi-Weltmeistertitel'}
          </div>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs text-center">
          <Award className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
          <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">2× / 1×</div>
          <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-600 mt-1">
            {currentLang === 'fa'
              ? 'قهرمان جام جهانی و مسابقات جهانی هنرهای رزمی (World Martial Arts Games)'
              : currentLang === 'en'
                ? 'World Cup & World Martial Arts Games Winner'
                : 'Weltcup & World Martial Arts Games Siegerin'}
          </div>
          <div className="text-[10px] text-stone-400 mt-0.5">
            {currentLang === 'fa' ? 'فدراسیون‌های WKU و IAKSA / WMAC' : 'WKU & IAKSA / WMAC'}
          </div>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs text-center">
          <Award className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
          <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">2×</div>
          <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-600 mt-1">
            {currentLang === 'fa' ? 'قهرمان اروپا · فدراسیون‌های WKU و ICO' : 'Europameisterin · WKU & ICO'}
          </div>
          <div className="text-[10px] text-stone-400 mt-0.5">
            {currentLang === 'fa' ? 'شامل قهرمانی حرفه‌ای اروپا' : 'Inkl. Profi-Europameisterin'}
          </div>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs text-center">
          <Shield className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
          <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">15×</div>
          <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-600 mt-1">
            {currentLang === 'fa' ? 'قهرمان آلمان در ۷ فدراسیون' : 'Dt. / Int. Dt. Meisterin'}
          </div>
          <div className="text-[10px] text-stone-400 mt-0.5">
            {currentLang === 'fa' ? 'WAKO, WKA, WKU, ISKA, ICO' : 'In 7 Spitzen-Verbänden'}
          </div>
        </div>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">

        {/* Section A: Werdegang & Sportliche Entwicklung */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              {currentLang === 'fa' ? 'رشد و پرورش ورزشی' : currentLang === 'en' ? 'Sporting Development & Competitive Career' : 'Sportliche Entwicklung & Wettkampfkarriere'}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
              {currentLang === 'fa'
                ? 'از سالن تمرین تا سکوی افتخار جهانی'
                : currentLang === 'en'
                  ? 'Sporting Development & Competitive Career'
                  : 'Vom Berliner Dojo zur Weltspitze'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-700 leading-relaxed font-normal">
            <div className="space-y-3">
              <p>
                {currentLang === 'fa'
                  ? 'شهزاد شاهمیرزادی از سن ۱۵ سالگی در یک سالن سنتی و معتبر در ویلمرزدورف برلین به فراگیری دفاع شخصی پرداخت. در ۱۶ سالگی علاقه و تمرکز خود را به کیک‌بوکسینگ معطوف ساخت—شوق و اشتیاقی که ابتدا به عنوان آماتور و سپس در سال‌های ۲۰۱۵ تا ۲۰۲۶ به عنوان ورزشکار حرفه‌ای دنبال شد.'
                  : currentLang === 'fr'
                  ? 'À l’âge de 15 ans, Schahrsad Shahmirzadi a débuté l’apprentissage de la self-défense dans un dojo traditionnel de Berlin-Wilmersdorf. Dès 16 ans, elle s’est consacrée au kickboxing — une passion vécue d’abord en amateur, puis au plus haut niveau professionnel mondial de 2015 à 2026.'
                  : currentLang === 'it'
                  ? 'All’età di 15 anni, Schahrsad Shahmirzadi ha iniziato a praticare l’autodifesa in un dojo tradizionale a Berlino-Wilmersdorf. A 16 anni si è dedicata al kickboxing, una passione coltivata prima a livello dilettantistico e poi da professionista d’élite dal 2015 al 2026.'
                  : currentLang === 'tr'
                  ? '15 yaşında Berlin-Wilmersdorf’taki köklü bir dojoda öz savunma eğitimine başlayan Schahrsad Shahmirzadi, 16 yaşında kickboksa yöneldi. Önce amatör seviyede, ardından 2015-2026 yılları arasında tam profesyonel olarak dünyanın zirvesinde bu tutkuyu sürdürdü.'
                  : currentLang === 'en'
                  ? 'At age 15, Schahrsad Shahmirzadi began practicing self-defense in a traditional dojo in Berlin-Wilmersdorf. At 16, she dedicated herself to kickboxing—a passion she pursued initially as an amateur and, from 2015 to 2026, as an elite professional on the world stage.'
                  : 'Mit 15 Jahren begann Schahrsad Shahmirzadi mit Selbstverteidigung in einem traditionsreichen Dojo in Berlin-Wilmersdorf. Mit 16 wandte sie sich dem Kickboxen zu – einer Leidenschaft, die sie zunächst im Amateurbereich und ab 2015 bis 2026 als Vollprofi auf höchstem internationalen Niveau lebte.'}
              </p>
              <p>
                {currentLang === 'fa'
                  ? 'فعالیت‌های قهرمانی او از سال ۲۰۰۹ آغاز شد. در سال‌های ۲۰۱۰ تا ۲۰۱۱، او عضو کادر ملی فول‌کنتاکت فدراسیون WAKO آلمان بود، قهرمان آلمان و قهرمان بین‌المللی آلمان شد و جام معتبر گئورگ اف. بروکتر را فتح کرد.'
                  : currentLang === 'fr'
                  ? 'Sa carrière en compétition a débuté en 2009. De 2010 à 2011, elle a été membre de l’équipe nationale allemande de plein contact (WAKO), a été sacrée championne d’Allemagne et championne internationale, et a remporté la prestigieuse coupe Georg-F.-Brückner.'
                  : currentLang === 'it'
                  ? 'La sua carriera agonistica è iniziata nel 2009. Dal 2010 al 2011 è stata membro della squadra nazionale di full-contact della WAKO Germania, laureandosi campionessa tedesca e campionessa internazionale, oltre a vincere la prestigiosa coppa Georg-F.-Brückner.'
                  : currentLang === 'tr'
                  ? 'Müsabaka kariyeri 2009’da başladı. 2010-2011 yıllarında WAKO Almanya Full-Contact Milli Takımı üyesi olarak Almanya Şampiyonu ve Uluslararası Almanya Şampiyonu oldu ve prestijli Georg-F.-Brückner Kupası’nı kazandı.'
                  : currentLang === 'en'
                  ? 'Her competitive career began in 2009. From 2010 to 2011, she was a member of the German national full-contact squad (WAKO), winning both German and International German Championships and the prestigious Georg-F.-Brückner Cup.'
                  : 'Ihre Wettkampfkarriere begann 2009. Von 2010 bis 2011 war sie Mitglied im Bundeskader Vollkontakt der WAKO Deutschland, wurde Deutsche Meisterin und Internationale Deutsche Meisterin und gewann den renommierten Georg-F.-Brückner-Pokal.'}
              </p>
            </div>

            <div className="space-y-3">
              <p>
                {currentLang === 'fa'
                  ? 'پس از حضور در مسابقات قهرمانی اروپا و جهان، او در سال ۲۰۱۲ به فدراسیون WKA، امروزه WKUWORLD، پیوست و همچنین در فدراسیون‌های بزرگ جهانی از جمله ISKA، IAKSA، ICO و WMAC درخشید.'
                  : currentLang === 'fr'
                  ? 'Après avoir disputé des championnats d’Europe et du monde, elle a rejoint en 2012 la WKA (aujourd’hui WKUWORLD) et a combattu au sein des fédérations mondiales de premier plan, notamment l’ISKA, l’IAKSA, l’ICO et la WMAC.'
                  : currentLang === 'it'
                  ? 'Dopo le partecipazioni a campionati europei e mondiali, nel 2012 è passata alla WKA (oggi WKUWORLD), gareggiando nelle più importanti federazioni mondiali, tra cui ISKA, IAKSA, ICO e WMAC.'
                  : currentLang === 'tr'
                  ? 'Avrupa ve dünya şampiyonalarındaki mücadelelerinin ardından 2012 yılında WKA’ya (bugünkü WKUWORLD) katıldı ve ardından ISKA, IAKSA, ICO ve WMAC gibi dünyanın önde gelen federasyonlarında ringe çıktı.'
                  : currentLang === 'en'
                  ? 'Following European and World Championships, she joined the WKA (now WKUWORLD) in 2012, competing in premier global sanctioning bodies including ISKA, IAKSA, ICO, and WMAC.'
                  : 'Nach Einsätzen bei Europa- und Weltmeisterschaften wechselte sie 2012 zur WKA, heute WKUWORLD, und kämpfte fortan in weltweit führenden Verbänden, darunter auch ISKA, IAKSA, ICO und WMAC.'}
              </p>
              <p>
                {currentLang === 'fa'
                  ? 'او عمدتاً در اوزان ۵۵ تا ۶۰ کیلوگرم در رشته‌های فول‌کنتاکت و K-1 به مبارزه می‌پرداخت و به عنوان یکی از اندک بانوان موفق به کسب کمربند مشکی دان ۳ شد.'
                  : currentLang === 'fr'
                  ? 'Elle a combattu principalement entre 55 et 60 kg, se spécialisant en plein contact et K-1. Elle est titulaire du 3e Dan, ceinture noire de kickboxing – un grade que très peu de femmes atteignent.'
                  : currentLang === 'it'
                  ? 'Ha combattuto soprattutto nelle categorie di peso tra 55 e 60 kg, specializzandosi in full-contact e K-1. È cintura nera 3° Dan nel kickboxing, un grado raggiunto da pochissime donne.'
                  : currentLang === 'tr'
                  ? 'Özellikle 55 ila 60 kg ağırlık sınıflarında Full-Contact ve K-1 disiplinlerinde uzmanlaştı. Dünyada çok az kadının ulaşabildiği 3. Dan siyah kuşak derecesine sahiptir.'
                  : currentLang === 'en'
                  ? 'She competed primarily in the 55 to 60 kg weight classes, specializing in full contact and K-1. She holds the 3rd Dan Black Belt in kickboxing—a rank achieved by only very few women.'
                  : 'Sie kämpfte vor allem in den Gewichtsklassen zwischen 55 und 60 kg und spezialisierte sich auf Vollkontakt und K-1. Sie ist Trägerin des 3. Dan, des Schwarzen Gürtels im Kickboxen – eine Stufe, die nur wenige Frauen erreichen.'}
              </p>
            </div>
          </div>
        </div>

        {/* Section B: Profi-Titelkämpfe (Schloss Diedersdorf & Offizielle Kampftabellen) */}
        <div id="profi-fight-records" className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              {currentLang === 'fa'
                ? 'مبارزات رسمی و رکوردهای حرفه‌ای'
                : currentLang === 'fr'
                ? 'Statistiques & Palmarès Professionnel'
                : currentLang === 'it'
                ? 'Statistiche Ufficiali Titoli Professionistici'
                : currentLang === 'tr'
                ? 'Resmi Profesyonel Unvan İstatistikleri'
                : currentLang === 'en'
                ? 'Official Professional Fight Records'
                : 'Offizielle Profi-Kampfstatistiken'}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
              {currentLang === 'fa'
                ? 'مبارزات بر سر عنوان قهرمانی حرفه‌ای اروپا و جهان · فول‌کنتاکت −۵۷٫۵ کیلوگرم'
                : currentLang === 'fr'
                ? 'Combats Professionnels pour les Titres Européens & Mondiaux – Plein Contact (−57,5 kg)'
                : currentLang === 'it'
                ? 'Titoli Professionistici Europei & Mondiali – Full Contact fino a 57,5 kg'
                : currentLang === 'tr'
                ? 'Profesyonel Avrupa & Dünya Şampiyonluk Maçları – Full-Contact −57,5 kg'
                : currentLang === 'en'
                ? 'Professional European & World Title Bouts – Full Contact (−57.5 kg)'
                : 'Profi-Europa- & Weltmeisterschaftstitelkämpfe – Vollkontakt bis 57,5 kg'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              {currentLang === 'fa'
                ? 'جدول رسمی تمام مبارزات حرفه‌ای بر سر کمربند قهرمانی با پیروزی‌های قاطع پس از ۷ و ۱۰ راند سنگین.'
                : currentLang === 'fr'
                ? 'Statistiques officielles des combats pour les titres mondiaux et européens — invaincue, avec des victoires unanimes aux points sur 7 et 10 rounds complets.'
                : currentLang === 'it'
                ? 'Statistiche ufficiali dei combattimenti per i titoli — imbattuta con vittorie all’unanimità ai punti sulla distanza di 7 e 10 round.'
                : currentLang === 'tr'
                ? 'Resmi unvan maçları istatistikleri — 7 ve 10 rauntluk zorlu mücadeleler sonucunda oy birliğiyle namağlup zaferler.'
                : currentLang === 'en'
                ? 'Official statistics of professional title bouts—undefeated with unanimous decision victories over the full 7 and 10 round distances.'
                : 'Offizielle Kampfstatistiken der Profi-Titelkämpfe – ungeschlagen mit einstimmigen Punktsiegen über die volle Distanz von 7 und 10 Runden.'}
            </p>
          </div>

          {/* TABLE 2: Professional World Title Bouts */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-800 shrink-0" />
                <span>
                  {currentLang === 'fa'
                    ? 'مبارزات عنوان قهرمانی حرفه‌ای جهان – فول‌کنتاکت کیک‌بوکسینگ، −۵۷٫۵ کیلوگرم'
                    : currentLang === 'de'
                      ? 'Profi-Weltmeisterschaftstitelkämpfe – Vollkontakt Kickboxen, −57,5 kg'
                      : 'Professional World Title Bouts – Full-Contact Kickboxing, −57.5 kg'}
                </span>
              </h4>
              <span className="text-[11px] font-mono text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200 font-semibold">
                10 Runden · WKU World Title
              </span>
            </div>

            {/* Mobile Responsive Fight Cards (md:hidden) — No horizontal scrolling */}
            <div className="md:hidden space-y-3">
              {/* Fight 2: Sofia Cavallo (2017) */}
              <div className="bg-white rounded-2xl border border-stone-200/90 p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-stone-700">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{currentLang === 'fa' ? '۸ اکتبر ۲۰۱۷' : currentLang === 'de' ? '8. Okt. 2017' : '8 Oct 2017'}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <Trophy className="w-3 h-3 text-emerald-700" />
                    <span>{currentLang === 'fa' ? 'پیروزی (UD)' : currentLang === 'de' ? 'Sieg (UD)' : 'Win (UD)'}</span>
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block">
                    {currentLang === 'fa' ? 'حریف' : currentLang === 'de' ? 'Gegnerin' : 'Opponent'}
                  </span>
                  <h5 className="font-serif font-bold text-base text-stone-900 pt-0.5">
                    {currentLang === 'fa' ? 'سوفیا کاوالو · ایتالیا' : currentLang === 'de' ? 'Sofia Cavallo · Italien' : 'Sofia Cavallo · Italy'}
                  </h5>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-stone-100">
                  <div>
                    <span className="text-[10px] text-stone-400 font-mono block">
                      {currentLang === 'fa' ? 'عنوان و راندها' : currentLang === 'de' ? 'Titel & Runden' : 'Title & Rounds'}
                    </span>
                    <span className="font-medium text-stone-800 text-[11px] block">
                      WKU World Title Defence (10 Runden)
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-mono block">
                      {currentLang === 'fa' ? 'نحوه پیروزی' : currentLang === 'de' ? 'Wertung' : 'Method'}
                    </span>
                    <span className="font-medium text-stone-800 text-[11px] block">
                      {currentLang === 'fa' ? 'رأی قاطع داوران' : currentLang === 'de' ? 'Einstimmiger Punktsieg' : 'Unanimous decision'}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-stone-600 flex items-center gap-1.5 pt-1.5 border-t border-stone-100">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="text-[11px]">Schloss Diedersdorf, Brandenburg</span>
                </div>
              </div>

              {/* Fight 1: Jessica Marazzi (2016) */}
              <div className="bg-white rounded-2xl border border-stone-200/90 p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-stone-700">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{currentLang === 'fa' ? '۱۳ اکتبر ۲۰۱۶' : currentLang === 'de' ? '13. Okt. 2016' : '13 Oct 2016'}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <Trophy className="w-3 h-3 text-emerald-700" />
                    <span>{currentLang === 'fa' ? 'پیروزی (UD)' : currentLang === 'de' ? 'Sieg (UD)' : 'Win (UD)'}</span>
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block">
                    {currentLang === 'fa' ? 'حریف' : currentLang === 'de' ? 'Gegnerin' : 'Opponent'}
                  </span>
                  <h5 className="font-serif font-bold text-base text-stone-900 pt-0.5">
                    {currentLang === 'fa' ? 'جسیکا مارازی · سوئیس' : currentLang === 'de' ? 'Jessica Marazzi · Schweiz' : 'Jessica Marazzi · Switzerland'}
                  </h5>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-stone-100">
                  <div>
                    <span className="text-[10px] text-stone-400 font-mono block">
                      {currentLang === 'fa' ? 'عنوان و راندها' : currentLang === 'de' ? 'Titel & Runden' : 'Title & Rounds'}
                    </span>
                    <span className="font-medium text-stone-800 text-[11px] block">
                      WKU World Championship (10 Runden)
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-mono block">
                      {currentLang === 'fa' ? 'نحوه پیروزی' : currentLang === 'de' ? 'Wertung' : 'Method'}
                    </span>
                    <span className="font-medium text-stone-800 text-[11px] block">
                      {currentLang === 'fa' ? 'رأی قاطع داوران' : currentLang === 'de' ? 'Einstimmiger Punktsieg' : 'Unanimous decision'}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-stone-600 flex items-center gap-1.5 pt-1.5 border-t border-stone-100">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="text-[11px]">Schloss Diedersdorf, Brandenburg</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block overflow-x-auto rounded-2xl border border-stone-200/90 shadow-2xs bg-white">
              <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-100/90 border-b border-stone-200 text-stone-700 font-mono text-[11px] uppercase tracking-wider">
                    <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'تاریخ' : currentLang === 'de' ? 'Datum' : 'Date'}</th>
                    <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'حریف' : currentLang === 'de' ? 'Gegnerin' : 'Opponent'}</th>
                    <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'محل برگزاری' : currentLang === 'de' ? 'Austragungsort' : 'Venue'}</th>
                    <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'فدراسیون / عنوان' : currentLang === 'de' ? 'Verband / Titel' : 'Federation / Title'}</th>
                    <th scope="col" className="py-3 px-4 font-semibold text-center">{currentLang === 'fa' ? 'نتیجه' : currentLang === 'de' ? 'Ergebnis' : 'Result'}</th>
                    <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'نحوه پیروزی' : currentLang === 'de' ? 'Wertung' : 'Method'}</th>
                    <th scope="col" className="py-3 px-4 font-semibold text-center">{currentLang === 'fa' ? 'راندها' : currentLang === 'de' ? 'Runden' : 'Rounds'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-normal text-stone-800">
                  {/* Fight 2: Sofia Cavallo (2017) */}
                  <tr className="hover:bg-[#faf8f5] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-stone-600 whitespace-nowrap">
                      {currentLang === 'fa' ? '۸ اکتبر ۲۰۱۷' : currentLang === 'de' ? '8. Okt. 2017' : '8 Oct 2017'}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-stone-900 whitespace-nowrap">
                      {currentLang === 'fa' ? 'سوفیا کاوالو · ایتالیا' : currentLang === 'de' ? 'Sofia Cavallo · Italien' : 'Sofia Cavallo · Italy'}
                    </td>
                    <td className="py-3.5 px-4 text-stone-700">
                      Schloss Diedersdorf, Brandenburg
                    </td>
                    <td className="py-3.5 px-4 text-stone-800 font-medium">
                      WKU Professional World Title Defence
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                        <Trophy className="w-3 h-3 text-emerald-700" />
                        <span>{currentLang === 'fa' ? 'پیروزی' : currentLang === 'de' ? 'Sieg' : 'Win'}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-stone-700 whitespace-nowrap">
                      {currentLang === 'fa' ? 'رأی قاطع داوران (UD)' : currentLang === 'de' ? 'Einstimmiger Punktsieg' : 'Unanimous decision'}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-semibold text-stone-700 whitespace-nowrap">
                      10
                    </td>
                  </tr>

                  {/* Fight 1: Jessica Marazzi (2016) */}
                  <tr className="hover:bg-[#faf8f5] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-stone-600 whitespace-nowrap">
                      {currentLang === 'fa' ? '۱۳ اکتبر ۲۰۱۶' : currentLang === 'de' ? '13. Okt. 2016' : '13 Oct 2016'}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-stone-900 whitespace-nowrap">
                      {currentLang === 'fa' ? 'جسیکا مارازی · سوئیس' : currentLang === 'de' ? 'Jessica Marazzi · Schweiz' : 'Jessica Marazzi · Switzerland'}
                    </td>
                    <td className="py-3.5 px-4 text-stone-700">
                      Schloss Diedersdorf, Brandenburg
                    </td>
                    <td className="py-3.5 px-4 text-stone-800 font-medium">
                      WKU Professional World Championship
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                        <Trophy className="w-3 h-3 text-emerald-700" />
                        <span>{currentLang === 'fa' ? 'پیروزی' : currentLang === 'de' ? 'Sieg' : 'Win'}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-stone-700 whitespace-nowrap">
                      {currentLang === 'fa' ? 'رأی قاطع داوران (UD)' : currentLang === 'de' ? 'Einstimmiger Punktsieg' : 'Unanimous decision'}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-semibold text-stone-700 whitespace-nowrap">
                      10
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* TABLE 1: Professional European Title Bout */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>
                    {currentLang === 'fa'
                      ? 'مبارزه عنوان قهرمانی حرفه‌ای اروپا – فول‌کنتاکت کیک‌بوکسینگ، −۵۷٫۵ کیلوگرم'
                      : currentLang === 'de'
                        ? 'Profi-Europameisterschaftstitelkampf – Vollkontakt Kickboxen, −57,5 kg'
                        : 'Professional European Title Bout – Full-Contact Kickboxing, −57.5 kg'}
                  </span>
                </h4>
                <span className="text-[11px] font-mono text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200 font-semibold">
                  7 Runden · WKU Pro Title
                </span>
              </div>

              {/* Mobile Responsive Fight Card (md:hidden) — No horizontal scrolling */}
              <div className="md:hidden space-y-3">
                <div className="bg-white rounded-2xl border border-stone-200/90 p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-stone-700">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{currentLang === 'fa' ? '۹ اکتبر ۲۰۱۴' : currentLang === 'de' ? '9. Okt. 2014' : '9 Oct 2014'}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <Trophy className="w-3 h-3 text-emerald-700" />
                      <span>{currentLang === 'fa' ? 'پیروزی (UD)' : currentLang === 'de' ? 'Sieg (UD)' : 'Win (UD)'}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block">
                      {currentLang === 'fa' ? 'حریف' : currentLang === 'de' ? 'Gegnerin' : 'Opponent'}
                    </span>
                    <h5 className="font-serif font-bold text-base text-stone-900 pt-0.5">
                      {currentLang === 'fa' ? 'کارمن برتیچی · کرواسی' : currentLang === 'de' ? 'Karmen Bertici · Kroatien' : 'Karmen Bertici · Croatia'}
                    </h5>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-stone-100">
                    <div>
                      <span className="text-[10px] text-stone-400 font-mono block">
                        {currentLang === 'fa' ? 'عنوان و راندها' : currentLang === 'de' ? 'Titel & Runden' : 'Title & Rounds'}
                      </span>
                      <span className="font-medium text-stone-800 text-[11px] block">
                        WKU European Title (7 Runden)
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 font-mono block">
                        {currentLang === 'fa' ? 'نحوه پیروزی' : currentLang === 'de' ? 'Wertung' : 'Method'}
                      </span>
                      <span className="font-medium text-stone-800 text-[11px] block">
                        {currentLang === 'fa' ? 'رأی قاطع داوران' : currentLang === 'de' ? 'Einstimmiger Punktsieg' : 'Unanimous decision'}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-stone-600 flex items-center gap-1.5 pt-1.5 border-t border-stone-100">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="text-[11px]">Schloss Diedersdorf, Brandenburg</span>
                  </div>
                </div>
              </div>

              {/* Desktop Full Table (hidden md:block) */}
              <div className="hidden md:block overflow-x-auto rounded-2xl border border-stone-200/90 shadow-2xs bg-white">
                <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-stone-100/90 border-b border-stone-200 text-stone-700 font-mono text-[11px] uppercase tracking-wider">
                      <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'تاریخ' : currentLang === 'de' ? 'Datum' : 'Date'}</th>
                      <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'حریف' : currentLang === 'de' ? 'Gegnerin' : 'Opponent'}</th>
                      <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'محل برگزاری' : currentLang === 'de' ? 'Austragungsort' : 'Venue'}</th>
                      <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'فدراسیون / عنوان' : currentLang === 'de' ? 'Verband / Titel' : 'Federation / Title'}</th>
                      <th scope="col" className="py-3 px-4 font-semibold text-center">{currentLang === 'fa' ? 'نتیجه' : currentLang === 'de' ? 'Ergebnis' : 'Result'}</th>
                      <th scope="col" className="py-3 px-4 font-semibold">{currentLang === 'fa' ? 'نحوه پیروزی' : currentLang === 'de' ? 'Wertung' : 'Method'}</th>
                      <th scope="col" className="py-3 px-4 font-semibold text-center">{currentLang === 'fa' ? 'راندها' : currentLang === 'de' ? 'Runden' : 'Rounds'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-normal text-stone-800">
                    <tr className="hover:bg-[#faf8f5] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-medium text-stone-600 whitespace-nowrap">
                        {currentLang === 'fa' ? '۹ اکتبر ۲۰۱۴' : currentLang === 'de' ? '9. Okt. 2014' : '9 Oct 2014'}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-stone-900 whitespace-nowrap">
                        {currentLang === 'fa' ? 'کارمن برتیچی · کرواسی' : currentLang === 'de' ? 'Karmen Bertici · Kroatien' : 'Karmen Bertici · Croatia'}
                      </td>
                      <td className="py-3.5 px-4 text-stone-700">
                        Schloss Diedersdorf, Brandenburg
                      </td>
                      <td className="py-3.5 px-4 text-stone-800 font-medium">
                        WKU European Championship
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <Trophy className="w-3 h-3 text-emerald-700" />
                          <span>{currentLang === 'fa' ? 'پیروزی' : currentLang === 'de' ? 'Sieg' : 'Win'}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-stone-700 whitespace-nowrap">
                        {currentLang === 'fa' ? 'رأی قاطع داوران (UD)' : currentLang === 'de' ? 'Einstimmiger Punktsieg' : 'Unanimous decision'}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono font-semibold text-stone-700 whitespace-nowrap">
                        7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 bg-stone-50 border border-stone-200/80 rounded-xl text-xs text-stone-600 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <strong className="text-stone-900">{currentLang === 'fa' ? 'پوشش رسانه‌ای:' : 'Medienbericht / Fachpresse:'} </strong>
                  <span>
                    {currentLang === 'fa'
                      ? 'گزارش اختصاصی در مجله تخصصی Kampfkunst Budo International، نوامبر ۲۰۱۴، صفحات ۱۲۲–۱۲۳.'
                      : 'Ausführliche Reportage im internationalen Fachmagazin Kampfkunst Budo International, Ausgabe November 2014, S. 122–123.'}
                  </span>
                </div>
                <a
                  href="https://issuu.com/budoweb/docs/kampfkunst_budo_international_277-_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-950 font-mono text-xs font-semibold hover:underline"
                >
                  <span>{currentLang === 'fa' ? 'مطالعه در Issuu' : 'Bericht auf Issuu ansehen'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Official Fight Photos from WordPress Original */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {/* Fight Photo 1: vs Sofia Cavallo */}
              <div className="bg-[#faf8f5] rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs group flex flex-col justify-between">
                <div className="overflow-hidden aspect-4/3 bg-stone-100 relative">
                  <img
                    src={resolveAsset('/images/2025_11_vs-Sofia-Cavallo.webp')}
                    alt="Schahrsad Shahmirzadi vs. Sofia Cavallo (WKU Profi-Weltmeisterschaft)"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800">
                    {currentLang === 'fa' ? 'دفاع از عنوان قهرمانی جهان' : 'WKU Profi-Weltmeisterschaftstitelverteidigung'}
                  </span>
                  <h5 className="font-serif font-bold text-stone-900 text-sm">
                    vs. Sofia Cavallo · Italien
                  </h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentLang === 'fa'
                      ? 'پیروزی مقتدرانه بر سر کمربند قهرمانی جهان پس از ۱۰ راند مبارزه نفس‌گیر.'
                      : 'Einstimmiger Punktsieg und erfolgreiche Titelverteidigung nach 10 Runden.'}
                  </p>
                </div>
              </div>

              {/* Fight Photo 2: vs Jessica Marazzi */}
              <div className="bg-[#faf8f5] rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs group flex flex-col justify-between">
                <div className="overflow-hidden aspect-4/3 bg-stone-100 relative">
                  <img
                    src={resolveAsset('/images/2025_11_vs.-Jessica-Marazzi.webp')}
                    alt="Schahrsad Shahmirzadi vs. Jessica Marazzi (WKU Profi-Weltmeisterschaft)"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800">
                    {currentLang === 'fa' ? 'مبارزه قهرمانی حرفه‌ای جهان' : 'WKU Profi-Weltmeisterschaftstitelkampf'}
                  </span>
                  <h5 className="font-serif font-bold text-stone-900 text-sm">
                    vs. Jessica Marazzi · Schweiz
                  </h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentLang === 'fa'
                      ? 'فتح کمربند قهرمانی حرفه‌ای جهان با پیروزی قاطع پس از ۱۰ راند مبارزه سرنوشت‌ساز.'
                      : 'Sieg und Gewinn des WKU-Weltmeistergürtels nach 10 Runden.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section C: Vollständige Titelliste (Amateur & Profi) */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
                {currentLang === 'fa' ? 'فهرست رسمی عناوین' : currentLang === 'en' ? 'Championship Overview' : 'Wettkampferfolge im Überblick'}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                {currentLang === 'fa' ? 'افتخارات آماتور و بین‌المللی' : currentLang === 'en' ? 'Amateur Kickboxing Achievements' : 'Amateur- & Weltcup-Erfolge'}
              </h3>
            </div>

            <button
              onClick={() => setShowAllAmateur(!showAllAmateur)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>
                {showAllAmateur
                  ? (currentLang === 'fa' ? 'کاهش نمایش' : currentLang === 'en' ? 'Show less' : 'Weniger anzeigen')
                  : (currentLang === 'fa' ? 'نمایش تمام ۱۶ عنوان' : currentLang === 'en' ? 'Show all 16 titles' : 'Alle 16 Titel anzeigen')}
              </span>
              {showAllAmateur ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="space-y-3">
            {(showAllAmateur ? amateurTitles : amateurTitles.slice(0, 8)).map((t, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-[#faf8f5] border border-stone-200/70 hover:border-amber-700/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-mono font-bold shrink-0">
                    {t.year}
                  </span>
                  <span className="text-xs sm:text-sm text-stone-800 font-medium">
                    {currentLang === 'fa' ? t.titleFa : currentLang === 'en' ? t.titleEn : t.titleDe}
                  </span>
                </div>
                <Trophy className="w-4 h-4 text-amber-700 shrink-0 opacity-70" />
              </div>
            ))}
          </div>
        </div>

        {/* Section D: Sportliche Ehrungen & Staatliche Würdigungen */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              {currentLang === 'fa' ? 'جوایز و تقدیرهای دولتی' : 'Sportliche Ehrungen & Auszeichnungen'}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
              {currentLang === 'fa'
                ? 'تقدیرهای رسمی از سوی وزارت کشور، پلیس و شهرها'
                : currentLang === 'en'
                  ? 'Recognition for Outstanding Sporting Achievements'
                  : 'Anerkennung für herausragende sportliche Leistungen'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sportingHonours.map((h, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-800 uppercase block">
                    {h.period}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                    {currentLang === 'fa' ? h.titleFa : currentLang === 'en' ? h.titleEn : h.titleDe}
                  </p>
                </div>

                {h.link && (
                  <a
                    href={h.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-950 font-medium hover:underline pt-1"
                  >
                    <span>{currentLang === 'fa' ? 'مشاهده سند / گزارش' : 'Offiziellen Bericht ansehen'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section E: Kampfname, Mentale Stärke & Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Card 1 (Links): Trainer & Team - Mentoren, Trainer & Wegbegleiter */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-800 font-mono text-xs uppercase tracking-wider font-bold">
                <Users className="w-4 h-4" />
                <span>{currentLang === 'fa' ? 'مربیان و همراهان' : currentLang === 'en' ? 'Coaches and Team' : 'Trainer & Team'}</span>
              </div>

              <h4 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                {currentLang === 'fa' ? 'یاران و مربیان راه قهرمانی' : currentLang === 'en' ? 'Coaches and Team' : 'Mentoren, Trainer & Wegbegleiter'}
              </h4>

              <ul className="text-xs sm:text-sm text-stone-700 space-y-3 leading-relaxed font-normal">
                <li>
                  <strong className="text-amber-800 font-semibold">Michael C.: </strong>
                  {currentLang === 'fa' ? 'آموزش اصول فنی و پایه‌گذاری مسیر اولیه قهرمانی' : currentLang === 'en' ? 'Taught the technical fundamentals and laid the groundwork.' : 'Vermittelte die technischen Grundlagen und schuf das Fundament.'}
                </li>
                <li>
                  <strong className="text-amber-800 font-semibold">Ferdinand Mack: </strong>
                  {currentLang === 'fa' ? 'اسطوره کیک‌بوکسینگ و قهرمان چندباره جهان، مربی و راهنمای او در تمام پیروزی‌های بزرگ (۲۰۰۹–۲۰۱۸)' : currentLang === 'en' ? 'Kickboxing legend and multiple world champion; accompanied her from 2009 to 2018 as mentor and coach through all her triumphs.' : 'Kickbox-Legende und mehrfacher Weltmeister; begleitete sie von 2009 bis 2018 als Mentor und Trainer bei all ihren Triumphen.'}
                </li>
                <li>
                  <strong className="text-amber-800 font-semibold">Gia Khudoev: </strong>
                  {currentLang === 'fa'
                    ? 'همراه و حریف تمرینی دیرینه و مبارز حرفه‌ای سابق'
                    : currentLang === 'en'
                    ? 'Long-standing training partner and former professional fighter.'
                    : currentLang === 'fr'
                    ? 'Partenaire d’entraînement de longue date et ancien combattant professionnel.'
                    : currentLang === 'it'
                    ? 'Partner di allenamento di lunga data ed ex atleta professionista.'
                    : currentLang === 'tr'
                    ? 'Uzun yıllar antrenman partneri ve eski profesyonel dövüşçü.'
                    : 'Langjähriger Trainingspartner und ehemaliger Profikämpfer.'}
                </li>
                <li>
                  <strong className="text-amber-800 font-semibold">Asly Aguilar: </strong>
                  {currentLang === 'fa'
                    ? 'همراه و حریف تمرینی دیرینه، بعدها رستوران‌دار موفق و سرآشپز برجسته'
                    : currentLang === 'en'
                    ? 'Long-standing training partner, later successful restaurateur and chef.'
                    : currentLang === 'fr'
                    ? 'Partenaire d’entraînement de longue date, plus tard restaurateur à succès et chef cuisinier.'
                    : currentLang === 'it'
                    ? 'Partner di allenamento di lunga data, successivamente ristoratore di successo e chef.'
                    : currentLang === 'tr'
                    ? 'Uzun yıllar antrenman partneri, daha sonra başarılı bir restoran işletmecisi ve şef.'
                    : 'Langjähriger Trainingspartner, später erfolgreicher Restaurantbesitzer und Koch.'}
                </li>
                <li>
                  <strong className="text-amber-800 font-semibold">Steve Barret: </strong>
                  {currentLang === 'fa' ? 'هنرمند، مربی و مدیر برنامه‌های حرفه‌ای او؛ طراح رویداد LeySha Fight Night و سازنده ویدیوی Stay With Me' : currentLang === 'en' ? 'Artist, coach, and manager in professional combat sports (from 2018); joint LeySha Fight Night Berlin 2023 and music video "Stay With Me".' : 'Künstler, Trainer und Manager im Profibereich (ab 2018); gemeinsame LeySha Fight Night Berlin 2023 und Musikvideo „Stay With Me“.'}
                </li>
              </ul>
            </div>

            {/* Persönliche Anmerkung / Personal Note mit Herz-Symbol */}
            <div className="pt-3 border-t border-stone-100 bg-[#faf8f5] p-3.5 sm:p-4 rounded-xl border border-stone-200/80">
              <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                <span>{currentLang === 'fa' ? 'یادداشت شخصی' : currentLang === 'en' ? 'Personal Note' : 'Persönliche Anmerkung'}</span>
                <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600 inline shrink-0" />
              </span>
              <p className="text-xs sm:text-sm italic text-stone-800 leading-relaxed font-serif">
                {currentLang === 'fa'
                  ? '«حمایت‌ها و تجربیات مشترک با آن‌ها زندگی مرا برای همیشه شکل داد. از صمیم قلب برای وجودشان سپاسگزارم.»'
                  : currentLang === 'en'
                    ? '“Their support and our shared experiences have shaped who I am and will stay with me throughout my life. For that, I am deeply grateful.”'
                    : '„Ihre Unterstützung und die gemeinsamen Erfahrungen haben mich für mein Leben geprägt. Dafür bin ich ihnen von Herzen dankbar.“'}
              </p>
            </div>
          </div>

          {/* Card 2 (Rechts): Ring Name & Mentale Stärke / Inner Strength */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-800 font-mono text-xs uppercase tracking-wider font-bold">
                <Sparkles className="w-4 h-4" />
                <span>{currentLang === 'fa' ? 'نام رزم و قدرت درونی' : currentLang === 'en' ? 'Ring Name & Inner Strength' : 'Kampfname & Mentale Stärke'}</span>
              </div>

              <h4 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                {currentLang === 'fa' ? 'از «پرنسس» تا «شیرزن»' : currentLang === 'en' ? 'Ring Name & Inner Strength – In Sport and in Life' : 'Von »Prinzessin« zu »SchirZan« · Innere Stärke'}
              </h4>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {currentLang === 'fa'
                  ? 'از سال ۲۰۰۹ تا ۲۰۲۳، او در رینگ با نام «پرنسس» (ترجمه نام خود شهزاد) شناخته می‌شد. امروز او با افتخار نام «شیرزن» (شیر + زن) را برگزیده است—نمادی اصیل از شجاعت، ایستادگی و قدرت درونی زنان.'
                  : currentLang === 'en'
                    ? 'From 2009 to 2023, she was known by her former ring name “Prinzessin” (“Princess”), a translation of her first name, Schahrsad. She no longer uses this name and is now known as “SchirZan”.'
                    : 'Von 2009 bis 2023 stieg sie unter dem Ringnamen „Prinzessin“ in den Ring (einer Übersetzung ihres Vornamens Schahrsad). Heute tritt sie als „SchirZan“ auf – die persische Verbindung von Shir (Löwe) und Zan (Frau), die für Mut, Würde und Frauenrechte steht.'}
              </p>

              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal pt-3 border-t border-stone-100 space-y-2.5">
                <h5 className="font-serif font-bold text-stone-900 text-xs sm:text-sm">
                  {currentLang === 'fa' ? 'قدرت درونی – در ورزش و در زندگی' : currentLang === 'en' ? 'Inner Strength – In Sport and in Life' : 'Innere Stärke – Im Sport und im Leben'}
                </h5>
                <p>
                  {currentLang === 'fa'
                    ? 'برای شهزاد شاهمیرزادی، کیک‌بوکسینگ فراتر از یک ورزش بود: او را سرپا و استوار نگه می‌داشت، انضباط او را تقویت می‌کرد و در غلبه بر شکست‌ها یاری‌اش می‌رساند. قدرت ذهنی دست‌کم به اندازه آمادگی جسمانی برایش اهمیت داشت—و تاب‌آوری و اعتمادبه‌نفس او را در زندگی روزمره و محیط کار بارور می‌ساخت.'
                    : currentLang === 'en'
                      ? 'For Schahrsad Shahmirzadi, kickboxing was more than a sport: it kept her grounded, strengthened her discipline, and helped her overcome setbacks. Mental strength was at least as important to her as physical preparation—and also fostered resilience and self-confidence in everyday life and at work.'
                      : 'Für Schahrsad Shahmirzadi war Kickboxen mehr als ein Sport: Es gab ihr Erdung, stärkte ihre Disziplin und half ihr, Rückschläge zu überwinden. Mentale Stärke war ihr mindestens ebenso wichtig wie physische Vorbereitung – und förderte auch im Alltag und Beruf Widerstandskraft und Selbstvertrauen.'}
                </p>
                <p>
                  {currentLang === 'fa'
                    ? 'او شجاعت، پشتکار، اراده پولادین و باور به خود را ارکان اصلی موفقیت می‌دانست. همراهی تیمی پشتیبان، تنوع و لذت بردن از آنچه انجام می‌داد نیز به همان اندازه مهم بودند. طبیعت به او نیرویی مضاعف می‌بخشید و در پذیرش شکست‌ها و تجدید قوا یاری‌رسانش بود.'
                    : currentLang === 'en'
                      ? 'She considered courage, perseverance, willpower, and self-belief essential to her success. A supportive team, versatility, and enjoyment of what she did were equally important. Nature gave her additional strength, helping her process defeats and recharge.'
                      : 'Mut, Beharrlichkeit, Willenskraft und der Glaube an sich selbst betrachtete sie als unverzichtbar für ihren Erfolg. Ein unterstützendes Team, Vielseitigkeit und die Freude an dem, was sie tat, waren ebenso wichtig. Die Natur gab ihr zusätzliche Kraft, um Niederlagen zu verarbeiten und neue Energie zu schöpfen.'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Section F1: Representing Germany */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-amber-800 font-mono text-xs uppercase tracking-wider font-bold">
            <Trophy className="w-4 h-4 text-amber-700" />
            <span>{currentLang === 'fa' ? 'حضور در میادین با پرچم آلمان' : 'Representing Germany'}</span>
          </div>
          <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'نمایندگی آلمان و عضویت در تیم ملی'
              : currentLang === 'de'
                ? 'Im Nationalteam für Deutschland'
                : 'Competing for the German National Team'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {currentLang === 'fa'
              ? 'با وجود آن‌که شهزاد شاهمیرزادی دارای ریشه‌های دوگانه آلمانی و ایرانی است، در تمام دوران فعالیت قهرمانی کیک‌بوکسینگ منحصراً برای کشور آلمان به میدان رفت. او عضو رسمی تیم ملی آلمان بود و تمامی عناوین قهرمانی و موفقیت‌های بزرگ ورزشی خود را زیر پرچم آلمان کسب نمود.'
              : currentLang === 'en'
                ? 'Although Schahrsad Shahmirzadi has both German and Iranian roots, she competed exclusively for Germany in kickboxing. She was a member of the German national team and won all her titles and achieved all her sporting successes under the German flag.'
                : 'Obwohl Schahrsad Shahmirzadi sowohl deutsche als auch iranische Wurzeln hat, trat sie im Kickboxen ausschließlich für Deutschland an. Sie war Mitglied der deutschen Nationalmannschaft und gewann all ihre Titel und sportlichen Erfolge unter deutscher Flagge.'}
          </p>
        </div>

        {/* Section F2: Spitzensportförderung & Dienst */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-amber-800 font-mono text-xs uppercase tracking-wider font-bold">
            <Shield className="w-4 h-4 text-amber-700" />
            <span>{currentLang === 'fa' ? 'حمایت از ورزش قهرمانی و خدمت در پلیس' : currentLang === 'en' ? 'Elite Sports Support & Service' : 'Spitzensportförderung & Dienst'}</span>
          </div>
          <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa' ? 'پلیس برلین (۲۰۰۹–۲۰۲۴)' : currentLang === 'en' ? 'Berlin Police (2009–2024)' : 'Polizei Berlin (2009–2024)'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {currentLang === 'fa'
              ? 'شهزاد شاهمیرزادی از سال ۲۰۰۹ تا ۲۰۲۴ در پلیس برلین خدمت کرد. در بازه ۲۰۱۵ تا ۲۰۲۳، او مشمول طرح حمایت از ورزش قهرمانی بود و ۳ بار (3×) برای موفقیت‌های ورزشی خود در پلیس مورد تقدیر و تجلیل رسمی قرار گرفت (۲۰۱۴ و ۲۰۱۶ توسط سنای امور داخلی و ورزش برلین، ۲۰۱۴ توسط رئیس پلیس برلین و ۲۰۱۴ در چارچوب تجلیل سراسری از ورزشکاران نخبه پلیس DPSK).'
              : currentLang === 'en'
                ? 'Schahrsad Shahmirzadi was with the Berlin Police from 2009 to 2024. From 2015 to 2023, she received needs-based elite sports support and was honoured 3 times (3×) by the police for her athletic achievements (2014 & 2016 by the Senate Department for the Interior and Sports, 2014 by the Berlin Police President, and 2014 within the nationwide honours for top police athletes DPSK).'
                : 'Schahrsad Shahmirzadi war von 2009 bis 2024 bei der Berliner Polizei tätig. Von 2015 bis 2023 erhielt sie anlassbezogene Spitzensportförderung und wurde 3× für ihre sportlichen Erfolge bei der Polizei ausgezeichnet (2014 & 2016 durch die Senatsverwaltung für Inneres und Sport, 2014 durch den Polizeipräsidenten in Berlin sowie 2014 im Rahmen der bundesweiten Ehrung der Spitzen-Polizeisportlerinnen DPSK).'}
          </p>
        </div>

        {/* Section F2: 3rd Dan */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 text-amber-800 font-mono text-xs uppercase tracking-wider font-bold">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>{currentLang === 'fa' ? 'درجه استادی' : currentLang === 'de' ? 'Meistergrad' : 'Black Belt'}</span>
              </div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                {currentLang === 'fa'
                  ? 'دان ۳ در کیک‌بوکسینگ'
                  : currentLang === 'de'
                    ? '3. Dan im Kickboxen'
                    : '3rd Dan in Kickboxing'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {currentLang === 'fa'
                  ? 'شهزاد شاهمیرزادی یکی از معدود زنانی است که موفق به کسب کمربند مشکی دان ۳ در کیک‌بوکسینگ شده است. این درجه استادی بیانگر سال‌ها تجربه، مهارت‌های پیشرفته فنی و تعهدی استثنایی به هنرهای رزمی است.'
                  : currentLang === 'en'
                    ? 'Schahrsad Shahmirzadi is one of the few women to hold a third-degree black belt (3rd Dan) in kickboxing. This rank reflects many years of experience, advanced technical proficiency, and a particular commitment to martial arts.'
                    : 'Schahrsad Shahmirzadi ist eine der wenigen Frauen, die den 3. Dan (Schwarzgurt) im Kickboxen tragen. Dieser Meistergrad spiegelt langjährige Erfahrung, fortgeschrittenes technisches Können und eine besondere Hingabe an den Kampfsport wider.'}
              </p>
            </div>

            {/* 3. Dan Meistergrad-Badge */}
            <div className="shrink-0 bg-[#faf8f5] border border-stone-200/90 rounded-2xl p-5 text-center min-w-[220px] shadow-2xs self-center md:self-auto w-full md:w-auto">
              <Sparkles className="w-6 h-6 text-amber-600 mx-auto mb-1.5" />
              <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">3. Dan</div>
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-stone-600 mt-1">
                {currentLang === 'fa' ? 'دان ۳ مشکی · درجه استادی' : 'Schwarzer Gürtel · 3. Dan'}
              </div>
              <div className="text-[10px] text-stone-400 mt-0.5">
                {currentLang === 'fa' ? 'یکی از معدود بانوان این رتبه' : 'Höchste meisterliche Reife'}
              </div>
            </div>
          </div>
        </div>

        {/* Section F3: Competitions – Selected Achievements and Experiences */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-amber-800 font-mono text-xs uppercase tracking-wider font-bold">
            <Trophy className="w-4 h-4 text-amber-700" />
            <span>{currentLang === 'fa' ? 'تجارب و رویدادهای سرنوشت‌ساز' : currentLang === 'de' ? 'Ausgewählte Meilensteine' : 'Key Milestones'}</span>
          </div>
          <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'مسابقات – تجارب و دستاوردهای برگزیده'
              : currentLang === 'de'
                ? 'Wettkämpfe – Ausgewählte Erfolge und Erfahrungen'
                : 'Competitions – Selected Achievements and Experiences'}
          </h4>
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 font-normal">
            <p>
              {currentLang === 'fa'
                ? 'در سال ۲۰۱۳، او با فتح دو عنوان نخست قهرمانی جهان آماتور در فول‌کنتاکت و K-1 در فدراسیون WKU/WKUWORLD به رویای دیرینه خود دست یافت. عناوین قهرمانی جهان دیگری در سازمان‌های معتبر از جمله ISKA و ICO به دنبال آن آمدند.'
                : currentLang === 'en'
                  ? 'In 2013, she fulfilled a long-held dream by winning her first two amateur world titles in full-contact kickboxing and K-1 with WKU/WKUWORLD. Further world titles followed in other federations, including ISKA and ICO.'
                  : '2013 erfüllte sie sich mit dem Gewinn ihrer ersten beiden Amateur-Weltmeistertitel im Vollkontakt und K-1 bei der WKU/WKUWORLD einen lang gehegten Traum. Weitere Weltmeistertitel folgten in weiteren Spitzenverbänden wie ISKA und ICO.'}
            </p>
            <p>
              {currentLang === 'fa'
                ? 'پس از موفقیت‌های متعدد آماتور، او در سال ۲۰۱۵ وارد دنیای حرفه‌ای شد. نقطه عطف او در سال ۲۰۱۶ رقم خورد: در ۱۳ اکتبر، او قهرمان حرفه‌ای جهان WKU/WKUWORLD در فول‌کنتاکت بانوان وزن منهای ۵۷٫۵ کیلوگرم شد و در سال ۲۰۱۷ با موفقیت از عنوان قهرمانی خود دفاع کرد.'
                : currentLang === 'en'
                  ? 'After numerous amateur successes, she turned professional in 2015. Her breakthrough came in 2016: on 13 October, she became WKU/WKUWORLD Professional World Champion in women’s full-contact kickboxing, −57.5 kg. She successfully defended her title in 2017.'
                  : 'Nach zahlreichen Amateur-Erfolgen wechselte sie 2015 ins Profilager. Der internationale Durchbruch gelang ihr 2016: Am 13. Oktober wurde sie WKU/WKUWORLD Profi-Weltmeisterin im Vollkontakt-Kickboxen der Damen bis 57,5 kg. Ihren Titel verteidigte sie 2017 erfolgreich.'}
            </p>
            <p>
              {currentLang === 'fa'
                ? 'در سال ۲۰۲۳، او در رویداد LeySha Fight Night در برلین که با همراهی شریک ورزشی‌اش سازماندهی شده بود، در نبردی دشوار برابر مبارز نامدار یونانی آنتونیا پریفتی (Andonia Prifti) بر سر کمربند جهانی K-1 وزن منهای ۵۷٫۵ کیلوگرم تن به شکستی آموزنده داد.'
                : currentLang === 'en'
                  ? 'In 2023, she suffered a difficult defeat against the renowned Greek fighter Andonia Prifti at the LeySha Fight Night, an event she and her partner had organised themselves. The bout was for the WKU women’s K-1 world title, −57.5 kg.'
                  : '2023 musste sie bei der selbst initiierten und organisierten LeySha Fight Night in Berlin eine schmerzhafte Niederlage gegen die renommierte griechische Spitzenkämpferin Andonia Prifti um den WKU K-1 Weltmeistertitel bis 57,5 kg hinnehmen.'}
            </p>
            <p className="italic text-stone-800 bg-[#faf8f5] p-3 rounded-xl border border-stone-200/70 font-medium">
              {currentLang === 'fa'
                ? 'در اواخر اکتبر ۲۰۲۶، او بازنشستگی رسمی خود را از ورزش قهرمانی و میادین کیک‌بوکسینگ اعلام کرد.'
                : currentLang === 'en'
                  ? 'In late October 2026, she announced her retirement from kickboxing.'
                  : 'Ende Oktober 2026 gab sie ihren offiziellen Rücktritt vom aktiven Leistungssport im Kickboxen bekannt.'}
            </p>
          </div>
        </div>



        {/* Section G: Video- und Pressearchiv */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              {currentLang === 'fa' ? 'ویدیوها و پوشش رسانه‌ای' : 'Offizielle Videos & Presseberichte'}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
              {currentLang === 'fa' ? 'بازتاب در رسانه‌ها و تولیدات ویدیویی' : 'Mediale Dokumentationen & Berichte'}
            </h3>
          </div>

          {/* Embedded Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Video 1: Steve Barret */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between space-y-3">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-stone-950 border border-stone-200/80 shadow-2xs">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/B3M_FcVURA4"
                  title="Steve Barret – Stay With Me (Offizielles Musikvideo)"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-1 pt-1">
                <div className="space-y-0.5 min-w-0">
                  <h5 className="font-serif font-bold text-stone-900 text-sm truncate">
                    Steve Barret – „Stay With Me“
                  </h5>
                  <p className="text-xs text-stone-500 font-mono truncate">
                    {currentLang === 'fa' ? 'موزیک ویدیو رسمی (نقش اصلی)' : 'Offizielles Musikvideo (Hauptrolle)'}
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=B3M_FcVURA4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-900 text-stone-600 hover:text-white transition-colors text-xs font-mono shrink-0 shadow-2xs"
                  title="Auf YouTube öffnen"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Video 2: L&T Sport */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-3.5 sm:p-4 shadow-xs flex flex-col justify-between space-y-3">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-stone-950 border border-stone-200/80 shadow-2xs">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/p9cGqvKUnV8"
                  title="L&T Sport – Ode an den Sport"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-1 pt-1">
                <div className="space-y-0.5 min-w-0">
                  <h5 className="font-serif font-bold text-stone-900 text-sm truncate">
                    L&T Sport – „Ode an den Sport“
                  </h5>
                  <p className="text-xs text-stone-500 font-mono truncate">
                    {currentLang === 'fa' ? 'تیزر تلویزیونی سراسری' : 'Bundesweiter TV-Werbespot'}
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=p9cGqvKUnV8&pp=ygUQb2RlIGFuIGRlbiBzcG9ydA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-900 text-stone-600 hover:text-white transition-colors text-xs font-mono shrink-0 shadow-2xs"
                  title="Auf YouTube öffnen"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Press Links */}
          <div className="pt-2 space-y-2.5">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-2">
              {currentLang === 'fa' ? 'گزارش‌های خبری آنلاین' : 'Presseartikel & Archivberichte'}
            </h5>
            {mediaLinks.map((m, idx) => (
              <a
                key={idx}
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors text-xs text-stone-800 group"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="font-medium group-hover:text-amber-900 transition-colors">{m.title}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] text-stone-400 hidden sm:inline">{m.source}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700" />
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
