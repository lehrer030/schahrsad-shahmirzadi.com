import React, { useState } from 'react';
import { INTRO_CONTENT, type Language, type PhotoItem } from '../data/photographyData';
import { Award, ChevronDown, ChevronUp, Feather, Maximize2, ShieldCheck, Building2, Palette, Globe2, User, GraduationCap, Newspaper, ArrowDown } from 'lucide-react';

interface HeaderIntroProps {
  currentLang: Language;
  currentCategory: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press';
  onSelectCategory: (catId: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press') => void;
  onOpenLightbox?: (photos: PhotoItem[], index: number) => void;
}

export const HeaderIntro: React.FC<HeaderIntroProps> = ({
  currentLang,
  currentCategory,
  onSelectCategory,
  onOpenLightbox
}) => {
  const [showPhilosophy, setShowPhilosophy] = useState(false);

  const artistPhotoItem: PhotoItem = {
    id: 'steve-barret-portrait',
    src: '/images/2025_07_photoart.jpg',
    alt: 'SchirZan – Schahrsad Shahmirzadi. Photographiert von Steve Barret',
    captionDe: 'Schahrsad Shahmirzadi (SchirZan) – Porträt photographiert von Steve Barret',
    captionEn: 'Schahrsad Shahmirzadi (SchirZan) – Portrait by Steve Barret',
    captionFa: 'شهزاد شاهمیرزادی (شیرزن) – پرتره عکاسی‌شده توسط استیو بارت'
  };

  // 4 Core Subheaders requested by client
  const coreSubheaders = [
    {
      id: 'architecture' as const,
      labelDe: 'Architecture',
      labelEn: 'Architecture',
      labelFa: 'معماری',
      taglineDe: 'Solitäre & Urbane Geometrie',
      taglineEn: 'Solitaires & Urban Geometry',
      taglineFa: 'تک‌بناها و هندسه شهری',
      badgeCount: 'AMP · IPA · PERSPA · BIFA',
      icon: <Building2 className="w-4 h-4" />
    },
    {
      id: 'fine-art' as const,
      labelDe: 'Fine Art',
      labelEn: 'Fine Art',
      labelFa: 'هنرهای زیبا',
      taglineDe: 'Poesie des Lichts & Zeit',
      taglineEn: 'Poetry of Light & Time',
      taglineFa: 'شعر نور و زمان',
      badgeCount: 'IPA · LICC · PERSPA',
      icon: <Palette className="w-4 h-4" />
    },
    {
      id: 'social-environmental' as const,
      labelDe: 'Social & Environmental Themes',
      labelEn: 'Social & Environmental Themes',
      labelFa: 'مضامین اجتماعی و زیست‌محیطی',
      taglineDe: 'Menschenrechte, Frieden & Natur',
      taglineEn: 'Human Rights, Peace & Nature',
      taglineFa: 'حقوق بشر، صلح و طبیعت',
      badgeCount: 'BIFA · IPA · URBAN · LICC',
      icon: <Globe2 className="w-4 h-4" />
    },
    {
      id: 'portraits' as const,
      labelDe: 'Portraits',
      labelEn: 'Portraits',
      labelFa: 'پرتره‌ها',
      taglineDe: 'Stärke, Dynamik & Authentizität',
      taglineEn: 'Strength & Authenticity',
      taglineFa: 'قدرت، پویایی و اصالت',
      badgeCount: 'IPA 2026 Winner',
      icon: <User className="w-4 h-4" />
    }
  ];

  const secondaryTabs = [
    {
      id: 'biography' as const,
      labelDe: 'Vita & Engagement',
      labelEn: 'Vita & Activism',
      labelFa: 'زندگی‌نامه و تعهدات',
      icon: <GraduationCap className="w-3.5 h-3.5" />
    },
    {
      id: 'press' as const,
      labelDe: 'Press & Media',
      labelEn: 'Press & Media',
      labelFa: 'رسانه‌ها و مطبوعات',
      icon: <Newspaper className="w-3.5 h-3.5" />
    }
  ];

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#fbfbfa] via-[#f7f3eb] to-[#faf8f5] text-stone-900 border-b border-stone-200/90 w-full">
      {/* Subtle warm architectural ambient glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-200/25 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-stone-300/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-8 sm:pt-12 pb-8 sm:pb-10 relative z-10">
        
        {/* Main Grid: Exhibition Hero Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column (Span 7): Main Header, Intro, Recognition */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Top Curator Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-amber-300/80 text-amber-950 text-xs font-semibold tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span>
                {currentLang === 'de'
                  ? 'Offizielles Werkverzeichnis & Portfolio'
                  : currentLang === 'fa'
                  ? 'مجموعه رسمی آثار و جوایز بین‌المللی'
                  : 'Official Works Catalog & Portfolio'}
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-amber-800 font-serif italic">Berlin</span>
            </div>

            {/* Main Header as requested by client: "Photography – Works – International Awards" */}
            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-serif tracking-tight text-stone-900 leading-[1.12] font-bold">
                {currentLang === 'fa' ? INTRO_CONTENT.mainHeaderFa : INTRO_CONTENT.mainHeader}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-stone-700 font-light max-w-2xl leading-relaxed">
                {currentLang === 'de'
                  ? INTRO_CONTENT.subtitleDe
                  : currentLang === 'fa'
                  ? INTRO_CONTENT.subtitleFa
                  : INTRO_CONTENT.subtitleEn}
              </p>
            </div>

            {/* International Award Honors / Competitions */}
            <div className="pt-1">
              <div className="flex items-center gap-2 mb-2.5">
                <Award className="w-4 h-4 text-amber-700" />
                <span className="text-xs uppercase tracking-widest text-stone-600 font-mono font-semibold">
                  {currentLang === 'de'
                    ? 'Prämierte Wettbewerbe'
                    : currentLang === 'fa'
                    ? 'مسابقات برگزیده بین‌المللی'
                    : 'Award-Winning Competitions'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTRO_CONTENT.competitions.map((comp, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-[11px] sm:text-xs bg-white/90 text-stone-800 border border-stone-200/90 shadow-2xs px-3 py-1.5 rounded-lg hover:border-amber-700/50 hover:text-amber-950 transition-colors"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy & Artist Name Toggle Button */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPhilosophy(!showPhilosophy)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-900 hover:text-amber-700 transition-colors group cursor-pointer bg-white border border-amber-200/90 px-4 py-2.5 rounded-full shadow-2xs hover:shadow-xs"
              >
                <Feather className="w-4 h-4 text-amber-700" />
                <span>
                  {currentLang === 'de'
                    ? INTRO_CONTENT.artistSectionTitleDe
                    : currentLang === 'fa'
                    ? INTRO_CONTENT.artistSectionTitleFa
                    : INTRO_CONTENT.artistSectionTitleEn}
                </span>
                {showPhilosophy ? (
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                )}
              </button>

              <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Original Urheberschutz & Verifiziertes Archiv</span>
              </div>
            </div>

          </div>

          {/* Right Column (Span 5): STEVE BARRET MASTER PORTRAIT PRESENTATION */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md xl:max-w-lg">
              
              {/* Museum Editorial Frame */}
              <div className="relative group bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-stone-200/90 transition-all duration-300 hover:shadow-2xl">
                
                {/* Photo Container */}
                <div 
                  className="relative overflow-hidden rounded-2xl bg-stone-100 cursor-pointer aspect-[4/3] sm:aspect-[4/3]"
                  onClick={() => onOpenLightbox && onOpenLightbox([artistPhotoItem], 0)}
                  title={currentLang === 'de' ? 'Klicken für Vollbildansicht' : 'Click to enlarge'}
                >
                  <img
                    src="/images/2025_07_photoart.jpg"
                    alt="SchirZan – Schahrsad Shahmirzadi (Photo: Steve Barret)"
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Zoom indicator icon */}
                  <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-xs text-stone-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Maximize2 className="w-4 h-4 text-stone-700" />
                  </div>

                  {/* On-image Name Overlay for mobile */}
                  <div className="absolute bottom-3 left-3 right-3 sm:hidden text-white drop-shadow-md">
                    <p className="font-serif font-bold text-base">Schahrsad Shahmirzadi</p>
                    <p className="text-amber-300 text-xs font-mono">Photo: Steve Barret</p>
                  </div>
                </div>

                {/* Museum Attribution Plaque (Below Image) */}
                <div className="mt-3.5 pt-3 border-t border-stone-100 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-stone-900 font-bold text-base leading-snug">
                      {currentLang === 'fa' ? 'شهزاد شاهمیرزادی (شیرزن)' : 'Schahrsad Shahmirzadi (SchirZan)'}
                    </h3>
                    <p className="text-xs text-amber-800 font-medium">
                      {currentLang === 'fa' ? 'هنرمند، عکاس و فعال اجتماعی' : 'Photographer, Visual Artist & Humanist'}
                    </p>
                  </div>

                  {/* Steve Barret Plaque Credit */}
                  <div className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-stone-100/90 border border-stone-200/80 px-2.5 py-1 rounded-md text-[11px] font-mono text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>{INTRO_CONTENT.photoCredit}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Collapsible Artist Philosophy Section */}
        {showPhilosophy && (
          <div className="mt-8 pt-8 border-t border-stone-200 bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-stone-200 transition-all">
            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
                <Feather className="w-3.5 h-3.5 text-amber-700" />
                <span>{currentLang === 'fa' ? 'نام و رسالت' : 'Inspiration & Identity'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-amber-950 font-bold">
                {currentLang === 'de'
                  ? 'Künstlername SchirZan & Die Philosophie des Lichts'
                  : currentLang === 'fa'
                  ? 'نام هنری «شیرزن» و فلسفه نگارش با نور'
                  : 'Artist Name SchirZan & The Philosophy of Light'}
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
            CLIENT'S REQUEST: THE 4 SUBHEADERS FAN OUT!
            "Hauptheader: Photography – Works – International Awards, 
             darunter fächern sich 4 weitere Unterheader auf: 
             Architecture; Fine Art; Social and Environmental Themes; Portraits"
            One-Pager Mode: Clicking smoothly scrolls directly down to the section!
           ========================================================================= */}
        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-stone-200/90">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold">
                {currentLang === 'de' ? 'Unterheader / Werkgruppen' : currentLang === 'fa' ? 'زیرمجموعه‌های هنری' : 'Subheaders / Categories'}
              </span>
              <p className="text-xs sm:text-sm text-stone-600 font-light">
                {currentLang === 'de'
                  ? 'Klicken Sie auf einen Unterheader, um direkt zur jeweiligen Ausstellung zu scrollen:'
                  : currentLang === 'fa'
                  ? 'برای حرکت مستقیم به هر بخش، روی کارت مربوطه کلیک کنید:'
                  : 'Click any subheader to scroll directly down to the exhibition:'}
              </p>
            </div>

            {/* Preserved Secondary Pages (Vita & Press) as compact quick-scroll links */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {secondaryTabs.map(sec => {
                const isSecActive = currentCategory === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => onSelectCategory(sec.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      isSecActive
                        ? 'bg-amber-800 text-white shadow-2xs font-semibold'
                        : 'bg-white/80 hover:bg-white text-stone-600 hover:text-stone-900 border border-stone-200/90'
                    }`}
                  >
                    {sec.icon}
                    <span>
                      {currentLang === 'de' ? sec.labelDe : currentLang === 'fa' ? sec.labelFa : sec.labelEn}
                    </span>
                    <ArrowDown className="w-3 h-3 opacity-60" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* The 4 Core Subheader Cards (Interactive One-Pager Anchors with Smooth Scroll & Visual Indicator) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 w-full">
            {coreSubheaders.map(sub => {
              const isActive = currentCategory === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => onSelectCategory(sub.id)}
                  className={`text-left group relative p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-600/60 ring-offset-2 ring-offset-[#faf8f5]'
                      : 'bg-white hover:bg-amber-50/50 text-stone-900 border-stone-200/90 hover:border-amber-400 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  {/* Top Bar: Icon & Active Indicator */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isActive
                          ? 'bg-amber-700 text-white'
                          : 'bg-amber-100/70 text-amber-900 group-hover:bg-amber-200/70'
                      }`}
                    >
                      {sub.icon}
                    </div>

                    <div className="flex items-center gap-1">
                      {isActive ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider bg-amber-600 text-white px-2 py-0.5 rounded-full font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>Aktiv</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-stone-600 group-hover:text-amber-800 transition-colors">
                          {sub.badgeCount}
                        </span>
                      )}
                      <ArrowDown className={`w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5 ${isActive ? 'text-amber-300' : 'text-stone-400'}`} />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-serif font-bold transition-colors ${
                        isActive ? 'text-white' : 'text-stone-900 group-hover:text-amber-950'
                      }`}
                    >
                      {currentLang === 'de' ? sub.labelDe : currentLang === 'fa' ? sub.labelFa : sub.labelEn}
                    </h3>
                    <p
                      className={`text-xs mt-1 font-light leading-snug line-clamp-1 ${
                        isActive ? 'text-stone-300' : 'text-stone-500 group-hover:text-stone-700'
                      }`}
                    >
                      {currentLang === 'de' ? sub.taglineDe : currentLang === 'fa' ? sub.taglineFa : sub.taglineEn}
                    </p>
                  </div>

                  {/* Bottom Active Glow Accent Bar */}
                  {isActive && (
                    <div className="absolute -bottom-px left-6 right-6 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </header>
  );
};
