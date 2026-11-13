import React, { useState } from 'react';
import { INTRO_CONTENT, type Language, type PhotoItem } from '../data/photographyData';
import { Award, ChevronDown, ChevronUp, Feather, Maximize2 } from 'lucide-react';

interface HeaderIntroProps {
  currentLang: Language;
  onOpenLightbox?: (photos: PhotoItem[], index: number) => void;
}

export const HeaderIntro: React.FC<HeaderIntroProps> = ({
  currentLang,
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

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#fbfbfa] via-[#f7f3eb] to-[#faf8f5] text-stone-900 border-b border-stone-200/90 w-full">
      {/* Subtle warm architectural ambient glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-200/25 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-stone-300/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-8 sm:pt-12 pb-8 sm:pb-12 relative z-10">
        
        {/* Main Grid: Exhibition Hero Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column (Span 7): Main Header, Intro, Recognition */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Top Curator Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-200/90 text-stone-700 text-xs font-medium tracking-wide shadow-2xs">
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
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-900 hover:text-amber-700 transition-colors group cursor-pointer bg-white border border-amber-200/90 px-4 py-2 rounded-full shadow-2xs hover:shadow-xs"
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
                  title={currentLang === 'de' ? 'Vollbild' : 'Full size'}
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

      </div>
    </header>
  );
};
