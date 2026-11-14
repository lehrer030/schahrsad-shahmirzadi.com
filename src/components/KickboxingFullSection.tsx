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
  Sparkles
} from 'lucide-react';
import type { Language } from '../data/photographyData';
import { resolveAsset } from '../utils/resolveAsset';

interface KickboxingFullSectionProps {
  currentLang: Language;
}

export const KickboxingFullSection: React.FC<KickboxingFullSectionProps> = ({ currentLang }) => {
  const [showAllAmateur, setShowAllAmateur] = useState(false);

  const amateurTitles = [
    {
      year: '2013',
      titleDe: 'WKU Weltmeisterin – Vollkontakt (Damen –55 kg, Griechenland)',
      titleEn: 'WKU World Champion – Women’s Full Contact, −55 kg, Greece',
      titleFa: 'قهرمان جهان WKU در فول‌کنتاکت بانوان (–۵۵ ک.گ، یونان)'
    },
    {
      year: '2013',
      titleDe: 'WKU Weltmeisterin – K-1 (Damen –55 kg, Griechenland)',
      titleEn: 'WKU World Champion – Women’s K-1, −55 kg, Greece',
      titleFa: 'قهرمان جهان WKU در K-1 بانوان (–۵۵ ک.گ، یونان)'
    },
    {
      year: '2014',
      titleDe: 'WKU Weltmeisterin – Vollkontakt (Damen –55 kg, London)',
      titleEn: 'WKU World Champion – Women’s Full Contact, −55 kg, London',
      titleFa: 'قهرمان جهان WKU در فول‌کنتاکت بانوان (–۵۵ ک.گ، لندن)'
    },
    {
      year: '2014',
      titleDe: 'WKU Weltmeisterin – K-1 (Damen –55 kg, London)',
      titleEn: 'WKU World Champion – Women’s K-1, −55 kg, London',
      titleFa: 'قهرمان جهان WKU در K-1 بانوان (–۵۵ ک.گ، لندن)'
    },
    {
      year: '2015',
      titleDe: 'ISKA Weltmeisterin – Vollkontakt (Damen –57 kg, Portugal)',
      titleEn: 'ISKA World Champion – Women’s Full Contact, −57 kg, Portugal',
      titleFa: 'قهرمان جهان ISKA در فول‌کنتاکت بانوان (–۵۷ ک.گ، پرتغال)'
    },
    {
      year: '2015',
      titleDe: 'ISKA Weltmeisterin – Lowkick (Damen –57 kg, Portugal)',
      titleEn: 'ISKA World Champion – Women’s Low Kick, −57 kg, Portugal',
      titleFa: 'قهرمان جهان ISKA در لوکیک بانوان (–۵۷ ک.گ، پرتغال)'
    },
    {
      year: '2015',
      titleDe: 'ICO Weltmeisterin – Vollkontakt (Damen –60 kg, Stuttgart)',
      titleEn: 'ICO World Champion – Women’s Full Contact, −60 kg, Stuttgart',
      titleFa: 'قهرمان جهان ICO در فول‌کنتاکت بانوان (–۶۰ ک.گ، اشتوتگارت)'
    },
    {
      year: '2016',
      titleDe: 'ISKA Weltmeisterin – Vollkontakt (Damen –58 kg, Deutschland)',
      titleEn: 'ISKA World Champion – Women’s Full Contact, −58 kg, Germany',
      titleFa: 'قهرمان جهان ISKA در فول‌کنتاکت بانوان (–۵۸ ک.گ، آلمان)'
    },
    {
      year: '2016',
      titleDe: 'WMAC World Martial Arts Games Siegerin (Vollkontakt, Offene Klasse, Bad Kissingen)',
      titleEn: 'WMAC World Martial Arts Games Winner – Women’s Full Contact, Open Weight, Bad Kissingen',
      titleFa: 'قهرمان بازی‌های جهانی هنرهای رزمی WMAC (کلاس آزاد، آلمان)'
    },
    {
      year: '2014',
      titleDe: 'IAKSA World Cup Siegerin im K-1 (Damen –60 kg, San Marino)',
      titleEn: 'IAKSA World Cup Winner – Women’s K-1, −60 kg, San Marino',
      titleFa: 'قهرمان جام جهانی IAKSA در K-1 (سان‌مارینو)'
    },
    {
      year: '2015',
      titleDe: 'WKU World Cup Siegerin im K-1 (Damen –55 kg, Kroatien)',
      titleEn: 'WKU World Cup Winner – Women’s K-1, −55 kg, Croatia',
      titleFa: 'قهرمان جام جهانی WKU در K-1 (کرواسی)'
    },
    {
      year: '2014',
      titleDe: 'ICO Europameisterin im Vollkontakt (Damen –60 kg, England)',
      titleEn: 'ICO European Champion – Women’s Full Contact, −60 kg, England',
      titleFa: 'قهرمان اروپا ICO در فول‌کنتاکت (انگلستان)'
    },
    {
      year: '2013',
      titleDe: 'ISKA German Pro/Am Champion im Vollkontakt (Damen –58,2 kg)',
      titleEn: 'ISKA German Pro/Am Champion – Women’s Full Contact, −58.2 kg',
      titleFa: 'قهرمان حرفه‌ای/آماتور ISKA آلمان'
    },
    {
      year: '2010–2016',
      titleDe: '15-fache Deutsche / Int. Deutsche Meisterin in 7 Verbänden (WAKO, WKA, WKU, ISKA, IAKSA, ICO, WKC)',
      titleEn: '15-time German or International German Champion across 7 federations (WAKO, WKA, WKU, ISKA, IAKSA, ICO, WKC)',
      titleFa: '۱۵ دوره قهرمان آلمان و بین‌المللی در ۷ فدراسیون معتبر'
    },
    {
      year: '2010–2012',
      titleDe: 'Dreifache Baden-Württembergische Meisterin (WAKO)',
      titleEn: 'Three-time Baden-Württemberg Champion (WAKO)',
      titleFa: 'سه دوره قهرمان ایالت بادن-وورتمبرگ (WAKO)'
    },
    {
      year: '2009',
      titleDe: 'Mack-Mania Siegerin (Mannheim)',
      titleEn: 'Mack-Mania Winner (Mannheim)',
      titleFa: 'قهرمان تورنمنت معتبر مک‌مانیا (مانهایم)'
    }
  ];

  const sportingHonours = [
    {
      period: '2014 & 2016',
      titleDe: 'Zweifache Auszeichnung als herausragende Spitzensportlerin der Polizei durch den Innenminister des Landes Nordrhein-Westfalen (Ralf Jäger)',
      titleEn: 'Honoured twice as an outstanding police athlete by the Minister of the Interior of North Rhine-Westphalia',
      titleFa: 'دو بار تجلیل رسمی به عنوان ورزشکار نخبه پلیس توسط وزیر کشور ایالت نوردراین-وستفالن',
      link: 'https://www.land.nrw/pressemitteilung/spitzensportler-der-polizei-wurden-olympiasieger-europa-und-weltmeister'
    },
    {
      period: '2010–2015, 2017',
      titleDe: 'Mehrfache Sportlerehrung der Stadt Mannheim für herausragende internationale Erfolge im Kickboxen',
      titleEn: 'City of Mannheim sporting honours: Multiple awards for international kickboxing achievements',
      titleFa: 'تقدیر و تجلیل مکرر ورزشی توسط شهرداری مانهایم برای افتخارات جهانی'
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
    }
  ];

  const mediaLinks = [
    {
      title: 'Berliner Kurier: „Berlins Kickbox-Weltmeisterin: Eine Polizistin hat mich vermöbelt“',
      url: 'https://www.berliner-kurier.de/archiv/berlins-kickbox-weltmeisterin-eine-polizistin-hat-mich-vermoebelt-li.1597461',
      source: 'Berliner Kurier',
      date: 'Archiv'
    },
    {
      title: 'Berliner Kurier: „Offen für alle – echt Berlin, echt multikulti, echt Polizei“',
      url: 'https://www.berliner-kurier.de/archiv/offen-fuer-alle-echt-berlin-echt-multikulti-echt-polizei-li.1480689',
      source: 'Berliner Kurier',
      date: 'Archiv'
    },
    {
      title: 'Land NRW Pressemitteilung: Innenminister ehrt Spitzensportler der Polizei',
      url: 'https://www.land.nrw/pressemitteilung/spitzensportler-der-polizei-wurden-olympiasieger-europa-und-weltmeister',
      source: 'Landesportal Nordrhein-Westfalen',
      date: 'Offizielle Mitteilung'
    },
    {
      title: 'Transform Magazin: Porträt Schahrsad',
      url: 'https://transform-magazin.de/schahrsad/',
      source: 'Transform Magazin',
      date: 'Feature'
    },
    {
      title: 'Kampfkunst Budo International: Reportage über den Profi-Europameisterschaftstitelkampf',
      url: 'https://issuu.com/budoweb/docs/kampfkunst_budo_international_277-_',
      source: 'Kampfkunst-International (S. 122–123)',
      date: 'Magazin'
    }
  ];

  return (
    <section id="kickboxing" className="scroll-mt-24 pt-8 border-t border-stone-200 relative">
      <div id="kickboxen" className="absolute -top-24 left-0 pointer-events-none" />
      
      {/* Editorial Section Header */}
      <div className="border-b border-stone-200 pb-8 mb-10">
        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-8">
          <div className="space-y-4 flex-1 min-w-0 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-800">
              <Trophy className="w-3.5 h-3.5 text-amber-700" />
              <span>
                {currentLang === 'fa' ? 'پیشینه ورزشی و قهرمانی' : 'Sportliche Laufbahn & Weltmeistertitel'}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif text-stone-900 font-bold leading-snug tracking-normal text-balance">
                {currentLang === 'fa' ? (
                  'شهزاد شاهمیرزادی (شیرزن) – ۱۰ بار قهرمان جهان در کیک‌بوکسینگ'
                ) : currentLang === 'en' ? (
                  <>
                    Schahrsad Shahmirzadi (ShirZan) –{' '}
                    <span className="whitespace-nowrap">10-Time</span> Kickboxing World Champion
                  </>
                ) : (
                  <>
                    Schahrsad Shahmirzadi (ShirZan) –{' '}
                    <span className="whitespace-nowrap">10-fache</span> Kickbox-Weltmeisterin
                  </>
                )}
              </h2>

              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-xs text-stone-600 font-mono font-medium">
                  {currentLang === 'fa' ? '۱۰ عنوان قهرمانی جهان WKU' : '10× WKU World Championship Title'}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal pt-1">
              {currentLang === 'fa'
                ? 'در طول دوران فعالیت قهرمانی، شهزاد شاهمیرزادی یکی از موفق‌ترین بانوان کیک‌بوکسینگ تاریخ آلمان به شمار می‌رفت. ورزش برای او کانون انضباط، استقامت و تمرکز ذهنی سازش‌ناپذیر بود که در زیبایی‌شناسی عکاسی او نیز متجلی است.'
                : currentLang === 'en'
                ? 'During her active competitive career, Schahrsad Shahmirzadi was one of Germany’s most accomplished female kickboxers. For her, sport represented mental fortitude, relentless focus, and character—qualities that resonate deeply throughout her fine art and architectural photography.'
                : 'Während ihrer aktiven Wettkampfkarriere gehörte Schahrsad Shahmirzadi zu den erfolgreichsten deutschen Kickboxerinnen. Für sie war der Sport weit mehr als körperliche Höchstleistung: Er war die Schule der Konzentration, Disziplin und Willenskraft, die sich heute in ihrer präzisen photographischen Ästhetik widerspiegelt.'}
            </p>
          </div>

          {/* Editorial pull-quote */}
          <div className="lg:max-w-xs shrink-0 bg-[#faf8f5] border-l-2 border-amber-800/80 p-4 sm:p-5 rounded-r-lg shadow-2xs">
            <span className="text-3xl font-serif text-amber-800/30 leading-none select-none block -mb-2">“</span>
            <p className="text-base sm:text-lg font-serif italic text-stone-800 leading-snug">
              {currentLang === 'fa'
                ? 'پیروزی در ذهن آغاز می‌شود!'
                : 'Gewinnen fängt im Kopf an!'}
            </p>
            <div className="mt-2 text-[11px] font-mono uppercase tracking-wider text-stone-400">
              — ShirZan
            </div>
          </div>
        </div>
      </div>

      {/* 4 Key Pillars Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        <div className="bg-white border border-stone-200/90 rounded-2xl p-5 sm:p-6 shadow-xs text-center">
          <Trophy className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">10×</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mt-1">
            {currentLang === 'fa' ? 'قهرمان جهان (WKU, ISKA, ICO)' : 'Weltmeisterin (WKU, ISKA, ICO)'}
          </div>
          <div className="text-[11px] text-stone-400 mt-1">
            {currentLang === 'fa' ? 'شامل ۲ عنوان حرفه‌ای' : 'Inkl. 2 Profi-Weltmeistertitel'}
          </div>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-2xl p-5 sm:p-6 shadow-xs text-center">
          <Award className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">2×</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mt-1">
            {currentLang === 'fa' ? 'قهرمان اروپا (WKU & ICO)' : 'Europameisterin (WKU & ICO)'}
          </div>
          <div className="text-[11px] text-stone-400 mt-1">
            {currentLang === 'fa' ? 'شامل قهرمانی حرفه‌ای اروپا' : 'Inkl. Profi-Europameisterin'}
          </div>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-2xl p-5 sm:p-6 shadow-xs text-center">
          <Shield className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">15×</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mt-1">
            {currentLang === 'fa' ? 'قهرمان آلمان در ۷ فدراسیون' : 'Dt. / Int. Dt. Meisterin'}
          </div>
          <div className="text-[11px] text-stone-400 mt-1">
            {currentLang === 'fa' ? 'WAKO, WKA, WKU, ISKA, ICO' : 'In 7 Spitzen-Verbänden'}
          </div>
        </div>

        <div className="bg-white border border-stone-200/90 rounded-2xl p-5 sm:p-6 shadow-xs text-center">
          <Sparkles className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">3. Dan</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mt-1">
            {currentLang === 'fa' ? 'دان ۳ مشکی (Meistergrad)' : 'Schwarzer Gürtel (3. Dan)'}
          </div>
          <div className="text-[11px] text-stone-400 mt-1">
            {currentLang === 'fa' ? 'یکی از معدود بانوان این رتبه' : 'Höchste meisterliche Reife'}
          </div>
        </div>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">
        
        {/* Section A: Werdegang & Sportliche Entwicklung */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              {currentLang === 'fa' ? 'رشد و پرورش ورزشی' : 'Sportliche Entwicklung & Wettkampfkarriere'}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
              {currentLang === 'fa'
                ? 'از سالن تمرین تا سکوی افتخار جهانی'
                : 'Vom Berliner Dojo zur Weltspitze'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-700 leading-relaxed font-normal">
            <div className="space-y-3">
              <p>
                {currentLang === 'fa'
                  ? 'شهزاد شاهمیرزادی از سن ۱۵ سالگی در یک سالن سنتی و معتبر در ویلمرزدورف برلین به فراگیری دفاع شخصی پرداخت. در ۱۶ سالگی علاقه و تمرکز خود را به کیک‌بوکسینگ معطوف ساخت—شوق و اشتیاقی که ابتدا به عنوان آماتور و سپس در سال‌های ۲۰۱۵ تا ۲۰۲۶ به عنوان ورزشکار حرفه‌ای دنبال شد.'
                  : 'Mit 15 Jahren begann Schahrsad Shahmirzadi mit Selbstverteidigung in einem traditionsreichen Dojo in Berlin-Wilmersdorf. Mit 16 wandte sie sich dem Kickboxen zu – einer Leidenschaft, die sie zunächst im Amateurbereich und ab 2015 bis 2026 als Vollprofi auf höchstem internationalen Niveau lebte.'}
              </p>
              <p>
                {currentLang === 'fa'
                  ? 'فعالیت‌های قهرمانی او از سال ۲۰۰۹ آغاز شد. در سال‌های ۲۰۱۰ تا ۲۰۱۱، او عضو کادر ملی فول‌کنتاکت فدراسیون WAKO آلمان بود، قهرمان آلمان و قهرمان بین‌المللی آلمان شد و جام معتبر گئورگ اف. بروکتر را فتح کرد.'
                  : 'Ihre Wettkampfkarriere begann 2009. Von 2010 bis 2011 war sie Mitglied im Bundeskader Vollkontakt der WAKO Deutschland, wurde Deutsche Meisterin und Internationale Deutsche Meisterin und gewann den renommierten Georg-F.-Brückner-Pokal.'}
              </p>
            </div>

            <div className="space-y-3">
              <p>
                {currentLang === 'fa'
                  ? 'پس از حضور در مسابقات قهرمانی اروپا و جهان، او در سال ۲۰۱۲ به فدراسیون WKA (امروزه WKU/WKUWORLD) پیوست و همچنین در فدراسیون‌های بزرگ جهانی از جمله ISKA، IAKSA، ICO و WMAC درخشید.'
                  : 'Nach Einsätzen bei Europa- und Weltmeisterschaften wechselte sie 2012 zur WKA (heute WKU/WKUWORLD) und kämpfte fortan in weltweit führenden Verbänden, darunter auch ISKA, IAKSA, ICO und WMAC.'}
              </p>
              <p>
                {currentLang === 'fa'
                  ? 'او عمدتاً در اوزان ۵۵ تا ۶۰ کیلوگرم در رشته‌های فول‌کنتاکت و K-1 به مبارزه می‌پرداخت و به عنوان یکی از اندک بانوان موفق به کسب دان ۳ مشکی شد.'
                  : 'Sie kämpfte vor allem in den Gewichtsklassen zwischen 55 und 60 kg und spezialisierte sich auf Vollkontakt und K-1. Sie ist Trägerin des 3. Dan (Schwarzer Gürtel) im Kickboxen – eine Stufe, die nur wenige Frauen erreichen.'}
              </p>
            </div>
          </div>
        </div>

        {/* Section B: Profi-Titelkämpfe (Schloss Diedersdorf & Offizielle Kampftabellen) */}
        <div id="profi-fight-records" className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              {currentLang === 'fa' ? 'مبارزات رسمی و رکوردهای حرفه‌ای' : 'Offizielle Profi-Kampfstatistiken'}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
              {currentLang === 'fa'
                ? 'مبارزات بر سر عنوان قهرمانی حرفه‌ای اروپا و جهان (فول‌کنتاکت −۵۷٫۵ کیلوگرم)'
                : 'Profi-Europa- & Weltmeisterschaftstitelkämpfe – Vollkontakt (−57,5 kg)'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              {currentLang === 'fa'
                ? 'جدول رسمی تمام مبارزات حرفه‌ای بر سر کمربند قهرمانی در کاخ تاریخی دیدرزدورف براندنبورگ با پیروزی‌های قاطع پس از ۷ و ۱۰ راند سنگین.'
                : 'Offizielle Kampfstatistiken aller Titelkämpfe auf Schloss Diedersdorf (Brandenburg) – ungeschlagen mit einstimmigen Punktsiegen über die volle Distanz von 7 und 10 Runden.'}
            </p>
          </div>

          {/* TABLE 1: Professional European Title Bout */}
          <div className="space-y-3">
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

            <div className="overflow-x-auto rounded-2xl border border-stone-200/90 shadow-2xs bg-white">
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
                      {currentLang === 'fa' ? 'کارمن برتیچی (کرواسی)' : currentLang === 'de' ? 'Karmen Bertici (Kroatien)' : 'Karmen Bertici (Croatia)'}
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
                    ? 'گزارش اختصاصی در مجله تخصصی Kampfkunst Budo International (نوامبر ۲۰۱۴، صفحات ۱۲۲–۱۲۳).'
                    : 'Ausführliche Reportage im internationalen Fachmagazin Kampfkunst Budo International (Ausgabe November 2014, S. 122–123).'}
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

          {/* TABLE 2: Professional World Title Bouts */}
          <div className="space-y-4 pt-4 border-t border-stone-100">
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

            <div className="overflow-x-auto rounded-2xl border border-stone-200/90 shadow-2xs bg-white">
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
                  {/* Fight 1: Jessica Marazzi */}
                  <tr className="hover:bg-[#faf8f5] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-stone-600 whitespace-nowrap">
                      {currentLang === 'fa' ? '۱۳ اکتبر ۲۰۱۶' : currentLang === 'de' ? '13. Okt. 2016' : '13 Oct 2016'}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-stone-900 whitespace-nowrap">
                      {currentLang === 'fa' ? 'جسیکا مارازی (سوئیس)' : currentLang === 'de' ? 'Jessica Marazzi (Schweiz)' : 'Jessica Marazzi (Switzerland)'}
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

                  {/* Fight 2: Sofia Cavallo */}
                  <tr className="hover:bg-[#faf8f5] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-stone-600 whitespace-nowrap">
                      {currentLang === 'fa' ? '۸ اکتبر ۲۰۱۷' : currentLang === 'de' ? '8. Okt. 2017' : '8 Oct 2017'}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-stone-900 whitespace-nowrap">
                      {currentLang === 'fa' ? 'سوفیا کاوالو (ایتالیا)' : currentLang === 'de' ? 'Sofia Cavallo (Italien)' : 'Sofia Cavallo (Italy)'}
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
                </tbody>
              </table>
            </div>

            {/* Official Fight Photos from WordPress Original */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {/* Fight Photo 1: vs Sofia Cavallo */}
              <div className="bg-[#faf8f5] rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs group flex flex-col justify-between">
                <div className="overflow-hidden aspect-4/3 bg-stone-100 relative">
                  <img
                    src={resolveAsset('/images/2025_11_vs-Sofia-Cavallo.webp')}
                    alt="Schahrsad Shahmirzadi vs. Sofia Cavallo (WKU Profi-Weltmeisterschaft Schloss Diedersdorf)"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800">
                    {currentLang === 'fa' ? 'دفاع از عنوان قهرمانی جهان' : 'WKU Profi-Weltmeisterschaftstitelverteidigung'}
                  </span>
                  <h5 className="font-serif font-bold text-stone-900 text-sm">
                    vs. Sofia Cavallo (Italien)
                  </h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentLang === 'fa'
                      ? 'پیروزی مقتدرانه بر سر کمربند قهرمانی جهان پس از ۱۰ راند مبارزه نفس‌گیر در کاخ دیدرزدورف.'
                      : 'Schloss Diedersdorf, Brandenburg · Einstimmiger Punktsieg und erfolgreiche Titelverteidigung nach 10 Runden.'}
                  </p>
                </div>
              </div>

              {/* Fight Photo 2: vs Jessica Marazzi */}
              <div className="bg-[#faf8f5] rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs group flex flex-col justify-between">
                <div className="overflow-hidden aspect-4/3 bg-stone-100 relative">
                  <img
                    src={resolveAsset('/images/2025_11_vs.-Jessica-Marazzi.webp')}
                    alt="Schahrsad Shahmirzadi vs. Jessica Marazzi (WKU Profi-Weltmeisterschaft Schloss Diedersdorf)"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800">
                    {currentLang === 'fa' ? 'مبارزه قهرمانی حرفه‌ای جهان' : 'WKU Profi-Weltmeisterschaftstitelkampf'}
                  </span>
                  <h5 className="font-serif font-bold text-stone-900 text-sm">
                    vs. Jessica Marazzi (Schweiz)
                  </h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {currentLang === 'fa'
                      ? 'فتح کمربند قهرمانی حرفه‌ای جهان با پیروزی قاطع پس از ۱۰ راند مبارزه سرنوشت‌ساز.'
                      : 'Schloss Diedersdorf, Brandenburg · Sieg und Gewinn des WKU-Weltmeistergürtels nach 10 Runden.'}
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
                {currentLang === 'fa' ? 'افتخارات آماتور و بین‌المللی' : currentLang === 'en' ? 'Amateur & World Cup Achievements' : 'Amateur- & Weltcup-Erfolge'}
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
                : 'Anerkennung für herausragende sportliche Vorbildfunktion'}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Ring Name & Mentale Stärke */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-amber-800 font-mono text-xs uppercase tracking-wider font-bold">
              <Sparkles className="w-4 h-4" />
              <span>{currentLang === 'fa' ? 'نام رزم و فلسفه' : 'Kampfname & Mentale Stärke'}</span>
            </div>
            
            <h4 className="font-serif font-bold text-lg text-stone-900">
              {currentLang === 'fa' ? 'از «پرنسس» تا «شیرزن»' : 'Von »Prinzessin« zu »ShirZan«'}
            </h4>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
              {currentLang === 'fa'
                ? 'از سال ۲۰۰۹ تا ۲۰۲۳، او در رینگ با نام «پرنسس» (ترجمه نام خود شهزاد) شناخته می‌شد. امروز او با افتخار نام «شیرزن» (شیر + زن) را برگزیده است—نمادی اصیل از شجاعت، ایستادگی و قدرت درونی زنان.'
                : 'Von 2009 bis 2023 stieg sie unter dem Ringnamen „Prinzessin“ in den Ring (einer Übersetzung ihres Vornamens Schahrsad). Heute tritt sie als „ShirZan“ auf – die persische Verbindung von Shir (Löwe) und Zan (Frau), die für furchtlosen Mut, Würde und Frauenrechte steht.'}
            </p>

            <p className="text-xs text-stone-600 leading-relaxed font-normal pt-1 border-t border-stone-100">
              {currentLang === 'fa'
                ? 'قدرت ذهنی برای او به اندازه آمادگی جسمانی حیاتی بود: شجاعت، اراده تزلزل‌ناپذیر و اتصال با طبیعت که به او توان بازسازی و غلبه بر هر مانعی را می‌بخشید.'
                : 'Mentale Stärke war ihr ebenso wichtig wie körperliche Vorbereitung: Mut, Willenskraft und die Natur als Kraftquelle gaben ihr Standfestigkeit im Sport wie im Berufsleben.'}
            </p>
          </div>

          {/* Card 2: Trainer & Team */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-amber-800 font-mono text-xs uppercase tracking-wider font-bold">
              <Users className="w-4 h-4" />
              <span>{currentLang === 'fa' ? 'مربیان و همراهان' : 'Trainer, Team & Wegbegleiter'}</span>
            </div>
            
            <h4 className="font-serif font-bold text-lg text-stone-900">
              {currentLang === 'fa' ? 'یاران و مربیان راه قهرمانی' : 'Erfolgreiche Partnerschaften'}
            </h4>

            <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
              <li>
                <strong className="text-stone-900">Michael C.: </strong>
                {currentLang === 'fa' ? 'آموزش اصول فنی و پایه‌گذاری مسیر اولیه قهرمانی' : 'Vermittelte die technischen Grundlagen und schuf das Fundament.'}
              </li>
              <li>
                <strong className="text-stone-900">Ferdinand Mack: </strong>
                {currentLang === 'fa' ? 'اسطوره کیک‌بوکسینگ آلمان و جهان، مربی و راهنمای او در تمام پیروزی‌های بزرگ (۲۰۰۹–۲۰۱۸)' : 'Deutsche Kickbox-Legende und mehrfacher Weltmeister; begleitete sie von 2009 bis 2018 als Mentor und Trainer bei all ihren Triumphen.'}
              </li>
              <li>
                <strong className="text-stone-900">Steve Barret: </strong>
                {currentLang === 'fa' ? 'هنرمند، مربی و مدیر برنامه‌های حرفه‌ای او؛ طراح رویداد LeySha Fight Night و سازنده ویدیوی Stay With Me' : 'Künstler, Trainer und Manager im Profibereich (ab 2018); gemeinsame LeySha Fight Night Berlin 2023 und Musikvideo „Stay With Me“.'}
              </li>
              <li>
                <strong className="text-stone-900">Sparringspartnerinnen: </strong>
                {currentLang === 'fa' ? 'جیا ک. و اصلی آ. همراهان همیشگی تمرینات سخت' : 'Gia K. und Asly A. als langjährige sportliche Weggefährtinnen.'}
              </li>
            </ul>
          </div>

        </div>

        {/* Section F: Spitzensportförderung & Polizei */}
        <div className="bg-stone-50 border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-amber-800 font-mono text-xs uppercase tracking-wider font-bold">
            <Shield className="w-4 h-4" />
            <span>{currentLang === 'fa' ? 'حمایت از ورزش قهرمانی و خدمت در پلیس' : 'Spitzensportförderung & Dienst'}</span>
          </div>
          <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa' ? 'پلیس برلین (۲۰۰۹–۲۰۲۴)' : 'Polizei Berlin (2009–2024)'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {currentLang === 'fa'
              ? 'شهزاد شاهمیرزادی از سال ۲۰۰۹ تا ۲۰۲۴ در پلیس برلین خدمت کرد. در بازه ۲۰۱۵ تا ۲۰۲۳، او مشمول طرح حمایت از ورزش قهرمانی بود و بارها برای موفقیت‌های ورزشی خود مورد تقدیر رسمی قرار گرفت.'
              : 'Schahrsad Shahmirzadi war von 2009 bis 2024 bei der Berliner Polizei tätig. Von 2015 bis 2023 erhielt sie anlassbezogene Spitzensportförderung und wurde mehrfach für ihre sportlichen Erfolge gewürdigt. Für diese Unterstützung ist sie bis heute dankbar.'}
          </p>
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
