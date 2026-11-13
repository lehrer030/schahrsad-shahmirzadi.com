import React, { useState } from 'react';
import { INTRO_CONTENT, type Language, type PhotoItem } from '../data/photographyData';
import { ChevronDown, ChevronUp, Feather, Maximize2 } from 'lucide-react';

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
    <header className="relative bg-[#faf8f5] text-stone-900 border-b border-stone-200/90 w-full">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-10 sm:pt-14 pb-10 sm:pb-14 relative z-10">
        
        {/* Main Grid: Exhibition Hero Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column (Span 7): Main Header, Intro, Recognition */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            
            {/* Museum Catalog Tagline (Editorial Typography, No SaaS Pill) */}
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-stone-500">
              <span>Berlin</span>
              <span className="mx-2 text-stone-300">/</span>
              <span>
                {currentLang === 'de'
                  ? 'Werkverzeichnis & Portfolio'
                  : currentLang === 'fa'
                  ? 'مجموعه رسمی آثار و جوایز'
                  : 'Catalog of Works & Portfolio'}
              </span>
            </div>

            {/* Main Header as requested by client: "Photography – Works – International Awards" */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-serif tracking-tight text-stone-900 leading-[1.15] font-bold">
                {currentLang === 'de'
                  ? (INTRO_CONTENT.mainHeaderDe || 'Photographie – Werke – Internationale Auszeichnungen')
                  : currentLang === 'fa'
                  ? INTRO_CONTENT.mainHeaderFa
                  : INTRO_CONTENT.mainHeader}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light max-w-2xl leading-relaxed">
                {currentLang === 'de'
                  ? INTRO_CONTENT.subtitleDe
                  : currentLang === 'fa'
                  ? INTRO_CONTENT.subtitleFa
                  : INTRO_CONTENT.subtitleEn}
              </p>
            </div>

            {/* Mobile-Only Prominent Hero Portrait: Directly visible on mobile with key info */}
            <div className="block lg:hidden pt-1 pb-2">
              <div className="bg-white p-3 border border-stone-200 shadow-xs rounded max-w-md mx-auto">
                <div 
                  className="relative overflow-hidden bg-stone-100 cursor-pointer aspect-[4/3] rounded-xs"
                  onClick={() => onOpenLightbox && onOpenLightbox([artistPhotoItem], 0)}
                  title={currentLang === 'de' ? 'Vollbild' : 'Full size'}
                >
                  <img
                    src="/images/2025_07_photoart.jpg"
                    alt="SchirZan – Schahrsad Shahmirzadi (Photo: Steve Barret)"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-white/90 text-stone-700 p-1.5 rounded shadow-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Attribution Plaque */}
                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-stone-900 font-bold text-sm leading-tight">
                      {currentLang === 'fa' ? 'شهزاد شاهمیرزادی (شیرزن)' : 'Schahrsad Shahmirzadi (SchirZan)'}
                    </h3>
                    <p className="text-[11px] text-stone-600 font-normal">
                      {currentLang === 'fa' ? 'عکاسی و هنرهای تجسمی' : 'Photographie & Bildende Kunst'}
                    </p>
                  </div>
                  <div className="bg-stone-50 border border-stone-200 px-2 py-0.5 text-[10px] font-mono text-stone-600 shrink-0">
                    <span>{INTRO_CONTENT.photoCredit}</span>
                  </div>
                </div>

                {/* Compact informative text as requested: shows the most important facts directly */}
                <p className="mt-2.5 pt-2 border-t border-stone-100 text-xs text-stone-600 font-light leading-relaxed">
                  {currentLang === 'de'
                    ? 'Mehrfach international prämierte Architektur-, Fine-Art- und Dokumentarfotografie (AMP 2025/2026, IPA, PERSPA Paris, BIFA).'
                    : currentLang === 'fa'
                    ? 'عکاسی برگزیده معماری، هنرهای زیبا و مستند در مسابقات جهانی (AMP، IPA، PERSPA، BIFA).'
                    : 'Multiple internationally awarded architectural, fine art, and documentary photography (AMP 2025/2026, IPA, PERSPA Paris, BIFA).'}
                </p>
              </div>
            </div>

            {/* International Award Honors / Competitions */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-widest text-stone-500 font-mono font-medium mb-3">
                {currentLang === 'de'
                  ? 'Prämierte Wettbewerbe'
                  : currentLang === 'fa'
                  ? 'مسابقات برگزیده بین‌المللی'
                  : 'Award-Winning Competitions'}
              </span>
              <div className="flex flex-wrap gap-2">
                {INTRO_CONTENT.competitions.map((comp, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-[11px] sm:text-xs bg-white text-stone-700 border border-stone-200 px-3 py-1.5 rounded hover:border-stone-400 transition-colors"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy & Artist Name Toggle Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowPhilosophy(!showPhilosophy)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-800 hover:text-stone-950 transition-colors cursor-pointer bg-white border border-stone-200 px-4 py-2 rounded hover:border-stone-400"
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

          {/* Right Column (Span 5): STEVE BARRET MASTER PORTRAIT PRESENTATION (Desktop view) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 flex-col items-center justify-center">
            <div className="w-full max-w-md xl:max-w-lg">
              
              {/* Museum Editorial Frame */}
              <div className="bg-white p-3 sm:p-4 border border-stone-200 shadow-sm">
                
                {/* Photo Container */}
                <div 
                  className="relative overflow-hidden bg-stone-100 cursor-pointer aspect-[4/3] sm:aspect-[4/3]"
                  onClick={() => onOpenLightbox && onOpenLightbox([artistPhotoItem], 0)}
                  title={currentLang === 'de' ? 'Vollbild' : 'Full size'}
                >
                  <img
                    src="/images/2025_07_photoart.jpg"
                    alt="SchirZan – Schahrsad Shahmirzadi (Photo: Steve Barret)"
                    className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  
                  {/* Zoom indicator icon */}
                  <div className="absolute top-3 right-3 bg-white/90 text-stone-700 p-2 rounded opacity-0 hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Museum Attribution Plaque (Below Image) */}
                <div className="mt-3.5 pt-3 border-t border-stone-100 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-stone-900 font-bold text-base leading-snug">
                      {currentLang === 'fa' ? 'شهزاد شاهمیرزادی (شیرزن)' : 'Schahrsad Shahmirzadi (SchirZan)'}
                    </h3>
                    <p className="text-xs text-stone-600 font-normal">
                      {currentLang === 'fa' ? 'هنرمند، عکاس و پژوهشگر' : 'Photographie & Bildende Kunst'}
                    </p>
                  </div>

                  {/* Steve Barret Plaque Credit */}
                  <div className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-stone-50 border border-stone-200 px-2.5 py-1 text-[11px] font-mono text-stone-600">
                    <span>{INTRO_CONTENT.photoCredit}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Collapsible Artist Philosophy Section */}
        {showPhilosophy && (
          <div className="mt-8 pt-8 border-t border-stone-200 bg-white p-6 sm:p-8 md:p-10 border border-stone-200 transition-all">
            <div className="max-w-4xl space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-stone-500 font-medium">
                {currentLang === 'fa' ? 'نام و رسالت' : 'Inspiration & Identity'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
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
