import React, { useState } from 'react';
import { INTRO_CONTENT, type Language, type PhotoItem } from '../data/photographyData';
import {
  ChevronDown,
  ChevronUp,
  Feather,
  Maximize2,
  Camera,
  Trophy,
  Heart,
  Award,
  ExternalLink
} from 'lucide-react';
import { resolveAsset } from '../utils/resolveAsset';

interface HeaderIntroProps {
  currentLang: Language;
  onOpenLightbox?: (photos: PhotoItem[], index: number) => void;
}

export const HeaderIntro: React.FC<HeaderIntroProps> = ({
  currentLang,
  onOpenLightbox
}) => {
  const [showPhilosophy, setShowPhilosophy] = useState(true);

  const artistPhotoItem: PhotoItem = {
    id: 'steve-barret-portrait',
    src: resolveAsset('/images/2025_07_photoart_bw.jpg'),
    alt: 'Schahrsad Shahmirzadi (SchirZan) – Photographie & Kunst · Porträt von Steve Barret',
    captionDe: 'Schahrsad Shahmirzadi · Künstlername SchirZan – Porträt photographiert von Steve Barret',
    captionEn: 'Schahrsad Shahmirzadi · Artist name SchirZan – Portrait by Steve Barret',
    captionFa: 'شهرزاد شاهمیرزادی · نام هنری شیرزن – عکس از استیو بارت'
  };

  return (
    <header className="relative bg-[#faf8f5] text-stone-900 border-b border-stone-200/90 w-full">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-8 sm:pt-12 pb-10 sm:pb-14 relative z-10 space-y-10 sm:space-y-12">

        {/* =========================================================================
            TEIL 1: EINLADENDE PERSONENVORSTELLUNG („Alles zur Person auf den ersten Blick“)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">

          {/* Left Column (Span 7): Personal Welcome, Name & 3 Core Pillars */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">

            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-stone-500">
              <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
              <span>
                {currentLang === 'de'
                  ? 'Berlin · Künstlerin, Photographin & 10× Weltmeisterin'
                  : currentLang === 'fa'
                  ? 'برلین · هنرمند، عکاس و ۱۰ دوره قهرمان جهان'
                  : 'Berlin · Artist, Photographer & 10× World Champion'}
              </span>
            </div>

            {/* Main Personal Title */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem] font-serif tracking-tight text-stone-900 leading-[1.15] font-bold break-words">
                {currentLang === 'fa' ? 'شیرزن | شهزاد شاهمیرزادی' : 'SchirZan | Schahrsad Shahmirzadi'}
              </h1>

              {/* Subtitle / Artist Designation */}
              <div className="pt-0.5">
                <p className="text-sm sm:text-base font-serif italic text-amber-900 font-semibold tracking-wide">
                  {currentLang === 'de'
                    ? 'Photographin & Bildende Künstlerin | 10-fache Kickbox-Weltmeisterin'
                    : currentLang === 'fa'
                    ? 'عکاس و هنرمند تجسمی | ۱۰ دوره قهرمان جهان در کیک‌بوکسینگ'
                    : 'Photographer & Visual Artist | 10-Time Kickboxing World Champion'}
                </p>
              </div>
            </div>

            {/* Desktop Intro View (lg and up) */}
            <div className="hidden lg:block text-sm sm:text-base text-stone-700 leading-relaxed space-y-3 font-normal pt-1">
              <p>
                {currentLang === 'de' ? (
                  <>
                    Schahrsad Shahmirzadi präsentiert ihre Photographie und Kunst gemeinsam mit ihrem Künstlernamen{' '}
                    <strong className="text-stone-950 font-serif font-bold">SchirZan</strong>. Der Name stammt aus dem Persischen und verbindet zwei Worte:{' '}
                    <em>Shir</em> (شیر) bedeutet »Löwe«, <em>Zan</em> (زن) bedeutet »Frau« – die »Löwin« als Verkörperung des Mutes, den eigenen Weg
                    zu gehen und Konventionen herauszufordern.
                  </>
                ) : currentLang === 'fa' ? (
                  <>
                    شهزاد شاهمیرزادی آثار عکاسی و هنری خود را همراه با نام هنری{' '}
                    <strong className="text-stone-950 font-serif font-bold">شیرزن (SchirZan)</strong> ارائه می‌دهد.
                    این نام برگرفته از زبان فارسی و پیوند دو واژه است: شیر و زن — مظهر شهامت و شجاعت برای پیمودن مسیر مستقل و افتخارآفرین.
                  </>
                ) : (
                  <>
                    Schahrsad Shahmirzadi presents her photography and art together with her artist name,{' '}
                    <strong className="text-stone-950 font-serif font-bold">SchirZan</strong>. The name comes from Persian and combines two words:{' '}
                    <em>Shir</em> = lion, and <em>Zan</em> = woman — the "lioness" embodying the courage to forge one’s own path.
                  </>
                )}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'de'
                  ? 'Durch Photographie bewahrt sie gelebte Momente für die Ewigkeit — getragen von der Philosophie des Lichts (dem altgriechischen »Zeichnen mit Licht«), der Disziplin einer 10-fachen Weltmeisterin im Kickboxen und ihrem leidenschaftlichen Einsatz für Menschenrechte, Gleichberechtigung und den Schutz unserer Umwelt.'
                  : currentLang === 'fa'
                  ? 'او از دریچه عکاسی، لحظات زیسته را برای ابدیت ماندگار می‌سازد — با تکیه بر فلسفه اصیل نگارش با نور، روحیه مبارزه‌جوی ۱۰ دوره قهرمانی جهان در کیک‌بوکسینگ و تعهدی استوار به عدالت، حقوق بشر و حفاظت از محیط زیست.'
                  : 'Through photography, she preserves lived experience for eternity — guided by the philosophy of light ("drawing with light"), the discipline of a 10-time world champion in kickboxing, and her profound commitment to human rights, equality, and environmental protection.'}
              </p>
            </div>

            {/* Mobile-Only Side-by-Side Presentation (lg:hidden): Bild und Text nahtlos im Fluss ohne Lücke */}
            <div className="block lg:hidden pt-1">
              {/* Float Portrait to the right */}
              <div className="float-right rtl:float-left ml-3.5 rtl:ml-0 rtl:mr-3.5 mb-2.5 w-[38%] max-w-[160px] min-w-[125px]">
                <div
                  className="relative overflow-hidden bg-stone-100 cursor-pointer aspect-[3/4] rounded-xl shadow-xs border border-stone-200/90 group"
                  onClick={() => onOpenLightbox && onOpenLightbox([artistPhotoItem], 0)}
                  title={currentLang === 'de' ? 'Vollbild' : 'Full size'}
                >
                  <img
                    src={resolveAsset('/images/2025_07_photoart_bw.jpg')}
                    alt="Schahrsad Shahmirzadi (SchirZan) – Photographie & Kunst · Porträt von Steve Barret"
                    title="Schahrsad Shahmirzadi · SchirZan"
                    draggable={false}
                    className="w-full h-full object-cover object-center select-none group-hover:scale-102 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  {/* Name-Tag direkt auf dem Bild */}
                  <div className="absolute bottom-1.5 left-1.5 z-10 pointer-events-none">
                    <span className="inline-flex items-center px-1.5 py-0.5 bg-stone-900/85 backdrop-blur-xs text-white rounded text-[9.5px] font-medium tracking-wide shadow-xs">
                      {currentLang === 'fa' ? 'شیرزن' : 'SchirZan'}
                    </span>
                  </div>
                  <div className="absolute top-1.5 right-1.5 bg-white/90 text-stone-700 p-1 rounded shadow-2xs">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>
                <div className="text-[9.5px] font-mono text-stone-500 mt-1 text-center truncate">
                  {INTRO_CONTENT.photoCredit}
                </div>
              </div>

              {/* Text fließt nahtlos ohne Lücke neben und unter das Bild */}
              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal space-y-2">
                <p>
                  {currentLang === 'de' ? (
                    <>
                      Schahrsad Shahmirzadi präsentiert ihre Photographie und Kunst gemeinsam mit ihrem Künstlernamen{' '}
                      <strong className="text-stone-950 font-serif font-bold">SchirZan</strong>. Der Name stammt aus dem Persischen und verbindet zwei Worte:{' '}
                      <em>Shir</em> (Löwe) und <em>Zan</em> (Frau) – die »Löwin« als Verkörperung des Mutes, den eigenen Weg zu gehen.
                    </>
                  ) : currentLang === 'fa' ? (
                    <>
                      شهزاد شاهمیرزادی آثار عکاسی و هنری خود را همراه با نام هنری{' '}
                      <strong className="text-stone-950 font-serif font-bold">شیرزن (SchirZan)</strong> ارائه می‌دهد
                      (شیر + زن: مظهر شهامت و شجاعت برای پیمودن مسیر مستقل).
                    </>
                  ) : (
                    <>
                      Schahrsad Shahmirzadi presents her photography and art together with her artist name,{' '}
                      <strong className="text-stone-950 font-serif font-bold">SchirZan</strong> (from Persian:{' '}
                      <em>Shir</em> = lion, <em>Zan</em> = woman — "lioness").
                    </>
                  )}
                </p>
                <p className="text-stone-600">
                  {currentLang === 'de'
                    ? 'Durch Photographie bewahrt sie gelebte Momente für die Ewigkeit — getragen von der Philosophie des Lichts (dem altgriechischen »Zeichnen mit Licht«), der Disziplin einer 10-fachen Weltmeisterin im Kickboxen und ihrem leidenschaftlichen Einsatz für Menschenrechte, Gleichberechtigung und den Schutz unserer Umwelt.'
                    : currentLang === 'fa'
                    ? 'او از دریچه عکاسی، لحظات زیسته را برای ابدیت ماندگار می‌سازد — با تکیه بر فلسفه اصیل نگارش با نور، روحیه مبارزه‌جوی ۱۰ دوره قهرمانی جهان در کیک‌بوکسینگ و تعهد به حقوق بشر و محیط زیست.'
                    : 'Through photography, she preserves lived experience for eternity — guided by the philosophy of light, the discipline of a 10-time world champion in kickboxing, and her commitment to human rights and the environment.'}
                </p>
              </div>
              <div className="clear-both" />
            </div>

            {/* 3 Core Pillars: The Person At a Glance */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {/* Pillar 1: Photography */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs space-y-2 hover:border-amber-700/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-800">
                  <Camera className="w-4 h-4 shrink-0 text-amber-700" />
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-stone-900">
                    {currentLang === 'fa' ? 'عکاسی و هنر' : 'Photographie & Kunst'}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                  {currentLang === 'de'
                    ? 'Mehrfach international prämierte Architektur- & Fine-Art-Photographie (AMP Los Angeles, IPA New York, PERSPA Paris, BIFA).'
                    : currentLang === 'fa'
                    ? 'عکاسی معماری و تجسمی برگزیده در مسابقات جهانی از جمله AMP، IPA، PERSPA و BIFA.'
                    : 'Internationally recognized architectural & fine art photography (AMP Los Angeles, IPA New York, PERSPA Paris, BIFA).'}
                </p>
              </div>

              {/* Pillar 2: World Champion Kickboxing */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs space-y-2 hover:border-amber-700/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-800">
                  <Trophy className="w-4 h-4 shrink-0 text-amber-700" />
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-stone-900">
                    {currentLang === 'fa' ? '۱۰ دوره قهرمانی جهان' : '10× Weltmeisterin'}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                  {currentLang === 'de'
                    ? '10-fache Weltmeisterin im Profi-Kickboxen — ein Jahrzehnt ungeschlagener Rekord und athletische Spitzenleistung.'
                    : currentLang === 'fa'
                    ? '۱۰ دوره قهرمانی جهان در کیک‌بوکسینگ حرفه‌ای — کارنامه بدون شکست و افتخارآفرین ورزشی.'
                    : '10-time professional kickboxing world champion — an undefeated record and world-class athletic excellence.'}
                </p>
              </div>

              {/* Pillar 3: Human Rights & Environment */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs space-y-2 hover:border-amber-700/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-800">
                  <Heart className="w-4 h-4 shrink-0 text-red-600" />
                  <span className="font-serif font-bold text-xs sm:text-[13px] text-stone-900">
                    {currentLang === 'fa' ? 'حقوق بشر و محیط زیست' : 'Engagement & Umwelt'}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                  {currentLang === 'de'
                    ? 'Einsatz für Menschenrechte, Spendenläufe für das ECCHR und akademischer Werdegang im Gewässer- & Umweltschutz.'
                    : currentLang === 'fa'
                    ? 'فعالیت‌های حقوق بشری، دویدن‌های خیریه برای ECCHR و پیشینه علمی در حفاظت از محیط زیست.'
                    : 'Human rights advocacy, fundraising runs for ECCHR, and an academic foundation in water and environmental protection.'}
                </p>
              </div>
            </div>

            {/* Philosophy Toggle Button */}
            <div className="pt-1">
              <button
                onClick={() => setShowPhilosophy(!showPhilosophy)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-800 hover:text-stone-950 transition-colors cursor-pointer bg-white border border-stone-200 px-4 py-2 rounded-lg hover:border-stone-400 shadow-2xs"
              >
                <Feather className="w-4 h-4 text-stone-600" />
                <span>
                  {currentLang === 'de'
                    ? INTRO_CONTENT.artistSectionTitleDe
                    : currentLang === 'fa'
                    ? INTRO_CONTENT.artistSectionTitleFa
                    : INTRO_CONTENT.artistSectionTitleEn}
                </span>
                {showPhilosophy ? (
                  <ChevronUp className="w-4 h-4 text-stone-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-stone-500" />
                )}
              </button>
            </div>

          </div>

          {/* Right Column (Span 5): Master Portrait (Desktop View) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 flex-col items-center justify-center space-y-4">
            <div className="w-full max-w-md xl:max-w-lg bg-white p-5 sm:p-6 border border-stone-200 shadow-sm rounded-2xl space-y-4">
              
              {/* Steve Barret Portrait Container */}
              <div
                className="relative overflow-hidden bg-stone-100 cursor-pointer aspect-[4/3] rounded-xl group"
                onClick={() => onOpenLightbox && onOpenLightbox([artistPhotoItem], 0)}
                title={currentLang === 'de' ? 'Vollbild' : 'Full size'}
              >
                <img
                  src={resolveAsset('/images/2025_07_photoart_bw.jpg')}
                  alt="Schahrsad Shahmirzadi (SchirZan) – Photographie & Kunst · Porträt von Steve Barret"
                  title="Schahrsad Shahmirzadi · SchirZan"
                  draggable={false}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out select-none"
                  loading="eager"
                />

                {/* Name-Tag direkt auf dem Bild */}
                <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                  <span className="inline-flex items-center px-2 py-0.5 bg-stone-900/85 backdrop-blur-xs text-white rounded text-xs font-medium tracking-wide shadow-xs">
                    {currentLang === 'fa' ? 'شیرزن' : 'SchirZan'}
                  </span>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 text-stone-700 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Museum Attribution Plaque: Generous white frame, Name & Wikipedia button below photo */}
              <div className="pt-3 border-t border-stone-100 space-y-2.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="font-serif text-stone-900 font-bold text-base leading-snug">
                      {currentLang === 'fa' ? 'شیرزن | شهرزاد شاهمیرزادی' : 'SchirZan | Schahrsad Shahmirzadi'}
                    </h3>
                    <p className="text-xs text-stone-600 font-normal">
                      {currentLang === 'de'
                        ? 'Photographin & Bildende Künstlerin | 10-fache Kickbox-Weltmeisterin'
                        : currentLang === 'fa'
                        ? 'عکاس و هنرمند تجسمی | ۱۰ دوره قهرمان جهان در کیک‌بوکسینگ'
                        : 'Photographer & Visual Artist | 10-Time Kickboxing World Champion'}
                    </p>
                  </div>

                  <div className="bg-stone-50 border border-stone-200 px-2.5 py-1 text-[11px] font-mono text-stone-600 shrink-0 rounded">
                    <span>{INTRO_CONTENT.photoCredit}</span>
                  </div>
                </div>

                {/* Wikipedia-Button etwas weiter herunter gesetzt aus dem Bild */}
                <div className="pt-1 flex items-center justify-between">
                  <a
                    href="https://de.wikipedia.org/wiki/Schahrsad_Shahmirzadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-50 hover:bg-stone-900 text-stone-700 hover:text-white border border-stone-200 text-xs font-mono transition-colors shadow-2xs group/wiki"
                    title={currentLang === 'fa' ? 'مدخل رسمی در دانشنامه ویکی‌پدیا' : 'Offizieller Wikipedia-Artikel: Schahrsad Shahmirzadi'}
                  >
                    <span className="font-serif font-black text-xs">W</span>
                    <span>Wikipedia</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover/wiki:opacity-100" />
                  </a>
                  <span className="text-[11px] font-mono text-stone-400">Berlin</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Collapsible Expanded Philosophy & Etymology Section */}
        {showPhilosophy && (
          <div className="pt-6 border-t border-stone-200 bg-white p-6 sm:p-8 md:p-10 border border-stone-200 transition-all rounded-2xl shadow-xs">
            <div className="max-w-4xl space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-stone-500 font-medium">
                {currentLang === 'fa' ? 'نام و رسالت' : 'Inspiration & Identity'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
                {currentLang === 'de'
                  ? 'Künstlername SchirZan & Zeichnen mit Licht'
                  : currentLang === 'fa'
                  ? 'نام هنری «شیرزن» و نگارش با نور'
                  : 'Artist Name SchirZan & Drawing with Light'}
              </h3>
              <div className="text-stone-700 leading-relaxed space-y-4 whitespace-pre-line text-sm sm:text-base font-normal">
                {currentLang === 'de'
                  ? INTRO_CONTENT.artistExplanationDe
                  : currentLang === 'fa'
                  ? INTRO_CONTENT.artistExplanationFa
                  : INTRO_CONTENT.artistExplanationEn}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TEIL 2: DIE WEITEREN INFORMATIONEN („kommen direkt darunter“)
            - Prämierte Wettbewerbe
            - Überleitung zu Sektion 01: Photographie – Werke & Auszeichnungen
           ========================================================================= */}
        <div className="pt-8 sm:pt-10 border-t border-stone-200 space-y-6">

          <div className="space-y-2 max-w-3xl">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-stone-500 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>
                {currentLang === 'de'
                  ? 'Werkverzeichnis, Auszeichnungen & Jurys'
                  : currentLang === 'fa'
                  ? 'کاتالوگ آثار، جوایز و داوری‌های بین‌المللی'
                  : 'Catalog of Works, Honors & International Juror Panels'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              {currentLang === 'fa'
                ? 'عکاسی و هنر – آثار · جوایز بین‌المللی'
                : 'Photography & Art – Works · Int’l Awards'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              {currentLang === 'de'
                ? 'Katalog der kuratorischen Bilderserien, Architekturobjekte und verifizierten Auszeichnungen ab Werk 01.'
                : currentLang === 'fa'
                ? 'مجموعه آثار عکاسی معماری، انتزاع‌های شهری و مدارک رسمی مسابقات جهانی از بخش ۰۱.'
                : 'Catalog of curated fine art series, architectural abstractions, and verified award compendiums starting at Section 01.'}
            </p>
          </div>

          {/* Award-Winning Competitions Register */}
          <div className="space-y-2.5 pt-1">
            <span className="block text-xs uppercase tracking-widest text-stone-500 font-mono font-medium">
              {currentLang === 'de'
                ? 'Prämierte Wettbewerbe & Führende Jurys:'
                : currentLang === 'fa'
                ? 'مسابقات برگزیده بین‌المللی و هیئت‌های داوری:'
                : 'Award-Winning Competitions & Leading Juror Panels:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {INTRO_CONTENT.competitionsDetailed.map((comp, idx) => (
                <a
                  key={idx}
                  href={comp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-950 border border-stone-200/90 hover:border-amber-400 px-3 py-1.5 rounded-lg transition-all shadow-2xs hover:shadow-xs font-medium group"
                >
                  <span>{comp.name}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-stone-400 group-hover:text-amber-700 transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
