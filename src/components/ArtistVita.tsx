import React, { useState } from 'react';
import { ACADEMIC_MILESTONES, type Language } from '../data/photographyData';
import { Heart, ExternalLink, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

interface ArtistVitaProps {
  currentLang: Language;
}

export const ArtistVita: React.FC<ArtistVitaProps> = ({ currentLang }) => {
  const [showTitlesDetail, setShowTitlesDetail] = useState(false);

  const kickboxingTitles = [
    { year: '2013', titleDe: 'WKU Weltmeisterin – K1 & Vollkontakt (Damen –55 kg, Griechenland)', titleEn: 'WKU World Champion – K1 & Full Contact (Women –55 kg, Greece)', titleFa: 'قهرمان جهان WKU در K1 و فول‌کنتاکت (یونان)' },
    { year: '2014', titleDe: 'WKU Weltmeisterin – K1 & Vollkontakt (Damen –55 kg, London)', titleEn: 'WKU World Champion – K1 & Full Contact (Women –55 kg, London)', titleFa: 'قهرمان جهان WKU در K1 و فول‌کنتاکت (لندن)' },
    { year: '2014', titleDe: 'WKU Pro-Europameisterin im Vollkontakt (Damen –57,5 kg, Sieg nach Punkten)', titleEn: 'WKU Pro European Champion Full Contact (Women –57.5 kg, Unanimous Decision)', titleFa: 'قهرمان حرفه‌ای اروپا WKU فول‌کنتاکت' },
    { year: '2014', titleDe: 'IAKSA World Cup Siegerin im K1 (Damen –60 kg, San Marino)', titleEn: 'IAKSA World Cup Winner K1 (Women –60 kg, San Marino)', titleFa: 'قهرمان جام جهانی IAKSA در سان‌مارینو' },
    { year: '2015', titleDe: 'ISKA Weltmeisterin – Vollkontakt & Lowkick (Damen –57 kg, Portugal)', titleEn: 'ISKA World Champion – Full Contact & Low Kick (Women –57 kg, Portugal)', titleFa: 'قهرمان جهان ISKA در فول‌کنتاکت و لوکیک (پرتغال)' },
    { year: '2015', titleDe: 'ICO Weltmeisterin im Vollkontakt (Damen –60 kg, Stuttgart)', titleEn: 'ICO World Champion Full Contact (Women –60 kg, Stuttgart)', titleFa: 'قهرمان جهان ICO در فول‌کنتاکت (اشتوتگارت)' },
    { year: '2015', titleDe: 'WKU World Cup Siegerin im K1 (Damen –55 kg, Kroatien)', titleEn: 'WKU World Cup Winner K1 (Women –55 kg, Croatia)', titleFa: 'قهرمان جام جهانی WKU در کرواسی' },
    { year: '2016', titleDe: 'ISKA Weltmeisterin im Vollkontakt (Damen –58 kg, Deutschland)', titleEn: 'ISKA World Champion Full Contact (Women –58 kg, Germany)', titleFa: 'قهرمان جهان ISKA در فول‌کنتاکت (آلمان)' },
    { year: '2016', titleDe: 'WMAC World Martial Arts Games Siegerin (Offene Klasse, Bad Kissingen)', titleEn: 'WMAC World Martial Arts Games Winner (Open Division, Bad Kissingen)', titleFa: 'قهرمان بازی‌های جهانی هنرهای رزمی WMAC' },
    { year: '2010–2016', titleDe: '15-fache Deutsche / Int. Deutsche Meisterin in 7 Verbänden (WAKO, WKA, WKU, ISKA, IAKSA, ICO, WKC)', titleEn: '15-time German / Int. German Champion across 7 Federations (WAKO, WKA, WKU, ISKA, IAKSA, ICO, WKC)', titleFa: '۱۵ دوره قهرمان آلمان و بین‌المللی در ۷ فدراسیون معتبر' }
  ];

  return (
    <div className="space-y-16 max-w-5xl mx-auto py-6 sm:py-10">
      
      {/* 1. ACADEMIC EDUCATION SECTION */}
      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="border-b border-stone-100 pb-6 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            {currentLang === 'de'
              ? 'Akademische Laufbahn'
              : currentLang === 'fa'
              ? 'سوابق تحصیلی و دانشگاهی'
              : 'Academic Background'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mt-1 font-bold">
            {currentLang === 'de'
              ? 'Interdisziplinärer Bildungsweg'
              : currentLang === 'fa'
              ? 'مسیر بین‌رشته‌ای آکادمیک'
              : 'Interdisciplinary Academic Education'}
          </h3>
          <p className="text-sm text-stone-700 mt-2 font-normal max-w-2xl leading-relaxed">
            {currentLang === 'de'
              ? 'Die Verbindung von Rechtswissenschaften, Verwaltungsexpertise, Umweltwissenschaften und künstlerischer Photographie prägt das präzise Werk von SchirZan.'
              : currentLang === 'fa'
              ? 'تلفیق دانش حقوقی، تخصص مدیریتی، علوم محیط‌زیست و عکاسی فاخر، شالوده دقت و ژرفای آثار شیرزن را شکل داده است.'
              : 'The synthesis of jurisprudence, public administration, environmental sciences, and fine art photography informs the analytical rigor of SchirZan’s work.'}
          </p>
        </div>

        {/* Milestone Timeline / Table */}
        <div className="space-y-6">
          {ACADEMIC_MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200/60"
            >
              <div className="md:col-span-3 text-xs font-mono text-amber-800 font-bold">
                {item.period}
              </div>
              <div className="md:col-span-5">
                <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900">
                  {currentLang === 'de'
                    ? item.fieldDe
                    : currentLang === 'fa'
                    ? item.fieldFa
                    : item.fieldEn}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  {currentLang === 'de'
                    ? item.institutionDe
                    : currentLang === 'fa'
                    ? item.institutionFa
                    : item.institutionEn}
                </p>
              </div>
              <div className="md:col-span-4 text-xs text-stone-600 font-medium md:text-right rtl:md:text-left self-center">
                {currentLang === 'de'
                  ? item.degreeDe
                  : currentLang === 'fa'
                  ? item.degreeFa
                  : item.degreeEn}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ATHLETIC WORLD CHAMPIONSHIP & ENVIRONMENTAL COMMITMENT */}
      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
                {currentLang === 'de'
                  ? 'Sport & Engagement'
                  : currentLang === 'fa'
                  ? 'ورزش قهرمانی و صلح'
                  : 'Athletics & Activism'}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-medium">
                {currentLang === 'de' ? '»Gewinnen fängt im Kopf an!«' : currentLang === 'fa' ? '«پیروزی در ذهن آغاز می‌شود!»' : '“Winning starts in the mind!”'}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
              {currentLang === 'de'
                ? '10-fache Weltmeisterin im Kickboxen & Läufe für den Frieden'
                : currentLang === 'fa'
                ? '۱۰ بار قهرمان جهان در کیک‌بوکسینگ و دویدن در راه صلح'
                : '10-Time Kickboxing World Champion & Runs for Peace'}
            </h3>

            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
              {currentLang === 'de'
                ? 'Für SchirZan ist Sport weit mehr als körperliche Höchstleistung: Er ist die lebendige Verkörperung von Standhaftigkeit, Mut und innerer Haltung. Mit zehn Weltmeistertiteln im Kickboxen bei den Amateuren und Profis, 15 deutschen Meistertiteln sowie zahlreichen Langstreckenläufen (u. a. elf Halbmarathons und der Berlin Marathon) verbindet sie sportliche Disziplin mit dem unermüdlichen Einsatz für Umweltschutz, Menschenrechte und Frieden.'
                : currentLang === 'fa'
                ? 'برای شیرزن، ورزش فراتر از تمرین بدنی است — ورزش تجلی استقامت، شجاعت و پیام‌رسانی ارزش‌هاست. با ۱۰ عنوان قهرمانی جهان در کیک‌بوکسینگ، ۱۵ قهرمانی آلمان و مسابقات استقامت (از جمله ۱۱ نیمه‌ماراتن و ماراتن برلین)، او انضباط ورزشی را با تعهد به صلح، محیط زیست و حقوق بشر پیوند می‌زند.'
                : 'For SchirZan, high-performance sport is a powerful vehicle for advocacy. With ten kickboxing world championship titles, 15 national championship victories, and extensive endurance runs (including eleven half-marathons and the full Berlin Marathon), she channels athletic resilience into dedicated action for peace, environmental protection, and human rights.'}
            </p>

            {/* Badges & Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-stone-600 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 rounded-lg border border-stone-200">
                <Trophy className="w-3.5 h-3.5 text-amber-800" />
                <span>{currentLang === 'fa' ? '۱۰ بار قهرمان جهان در کیک‌بوکسینگ' : '10× World Champion Kickboxing'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 rounded-lg border border-stone-200">
                <span>{currentLang === 'fa' ? 'ماراتن برلین · ۱۱ نیمه‌ماراتن' : 'Berlin Marathon · 11 Half-Marathons'}</span>
              </span>
              <button
                type="button"
                onClick={() => setShowTitlesDetail(!showTitlesDetail)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg border border-stone-200 transition-colors cursor-pointer"
              >
                <span>
                  {showTitlesDetail
                    ? (currentLang === 'de' ? 'Titel ausblenden' : currentLang === 'fa' ? 'بستن عناوین' : 'Hide Titles')
                    : (currentLang === 'de' ? 'Alle 10 WM-Titel ansehen' : currentLang === 'fa' ? 'مشاهده تمام عناوین قهرمانی' : 'View All 10 World Titles')}
                </span>
                {showTitlesDetail ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
              >
                <span>
                  {currentLang === 'de'
                    ? 'Fotos & Video in der Galerie →'
                    : currentLang === 'fa'
                    ? 'مشاهده عکس‌ها و ویدیو در گالری ←'
                    : 'View photos & video in gallery →'}
                </span>
              </a>
              <a
                href="https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>
                  {currentLang === 'de'
                    ? 'Support the fundraising run →'
                    : currentLang === 'fa'
                    ? 'حمایت از کمپین حقوق بشر (ECCHR) ←'
                    : 'Support the fundraising run →'}
                </span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" />
              </a>
            </div>

            {/* Collapsible Details of World Championship Titles from WP DB */}
            {showTitlesDetail && (
              <div className="mt-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2 animate-in fade-in duration-200">
                <p className="font-bold text-stone-900 mb-2">
                  {currentLang === 'de'
                    ? 'Wichtigste sportliche Titel im Kickboxen (Amateure & Profis):'
                    : currentLang === 'fa'
                    ? 'مهم‌ترین عناوین قهرمانی جهان و بین‌المللی در کیک‌بوکسینگ:'
                    : 'Major Kickboxing Titles (Amateur & Professional):'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-stone-700">
                  {kickboxingTitles.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded border border-stone-200/80">
                      <span className="font-mono font-bold text-amber-800 shrink-0">{t.year}:</span>
                      <span>
                        {currentLang === 'de' ? t.titleDe : currentLang === 'fa' ? t.titleFa : t.titleEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-[#faf8f5] border border-stone-200/90 rounded-2xl p-6 space-y-3">
            <h4 className="text-base font-serif font-bold text-stone-900">
              {currentLang === 'de'
                ? 'Engagiert für Gewässerschutz & LAWA'
                : currentLang === 'fa'
                ? 'فعالیت در حوزه منابع آب و محیط زیست'
                : 'Dedicated to Water Issues & LAWA'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
              {currentLang === 'de'
                ? 'Seit 2024 ist Schahrsad Shahmirzadi im Ministerium für Umwelt in Potsdam im Bereich Gewässerschutz sowie in der Bund/Länder-Arbeitsgemeinschaft Wasser (LAWA) aktiv und vertieft ihr Wissen im Masterstudiengang Angewandte Umweltwissenschaften.'
                : currentLang === 'fa'
                ? 'از سال ۲۰۲۴، شهزاد شاهمیرزادی در وزارت محیط زیست در حوزه حفاظت از منابع آب و کارگروه فدرال آب (LAWA) فعالیت نموده و همزمان در رشته کارشناسی ارشد علوم محیط‌زیست تحصیل می‌نماید.'
                : 'Since 2024, Schahrsad Shahmirzadi has served at the Ministry of Environment in Potsdam, contributing to water resource preservation within LAWA while completing her Master of Science.'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
