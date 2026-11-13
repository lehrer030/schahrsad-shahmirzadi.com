import React, { useState } from 'react';
import { INTRO_CONTENT, type Language } from '../data/photographyData';
import { Award, ChevronDown, ChevronUp, Sparkles, Feather } from 'lucide-react';

interface HeaderIntroProps {
  currentLang: Language;
}

export const HeaderIntro: React.FC<HeaderIntroProps> = ({ currentLang }) => {
  const [showPhilosophy, setShowPhilosophy] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfbfa] via-[#f7f4ee] to-[#faf8f5] text-stone-900 py-10 sm:py-14 md:py-16 border-b border-stone-200/90 w-full">
      
      {/* Subtle warm architectural glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Competitions */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-300/80 text-amber-900 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>
                {currentLang === 'de'
                  ? 'Offizielles Portfolio & Werkverzeichnis'
                  : currentLang === 'fa'
                  ? 'مجموعه رسمی آثار و جوایز بین‌المللی'
                  : 'Official Portfolio & Works Catalog'}
              </span>
            </div>

            {/* Main Header as requested by client */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-stone-900 leading-tight font-bold">
              {currentLang === 'fa' ? INTRO_CONTENT.mainHeaderFa : INTRO_CONTENT.mainHeader}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-stone-700 font-light max-w-3xl leading-relaxed">
              {currentLang === 'de'
                ? INTRO_CONTENT.subtitleDe
                : currentLang === 'fa'
                ? INTRO_CONTENT.subtitleFa
                : INTRO_CONTENT.subtitleEn}
            </p>

            {/* Competition Recognition Badges / Ticker */}
            <div className="pt-1 sm:pt-2">
              <p className="text-xs uppercase tracking-widest text-stone-600 mb-2.5 flex items-center gap-2 font-semibold font-mono">
                <Award className="w-4 h-4 text-amber-700" />
                <span>
                  {currentLang === 'de'
                    ? 'Internationale Wettbewerbe & Auszeichnungen'
                    : currentLang === 'fa'
                    ? 'مسابقات و افتخارات بین‌المللی'
                    : 'International Competitions & Recognition'}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {INTRO_CONTENT.competitions.map((comp, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs bg-white text-stone-800 border border-stone-200/90 shadow-2xs px-3 py-1.5 rounded-lg hover:border-amber-700/50 hover:text-amber-950 transition-colors"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy Toggle Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowPhilosophy(!showPhilosophy)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-900 hover:text-amber-700 transition-colors group cursor-pointer bg-white/80 border border-amber-200/80 px-4 py-2 rounded-full shadow-2xs"
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

          {/* Right Column: Artist Portrait */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group max-w-xs w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/images/2025_07_photoart.jpg"
                  alt="SchirZan - Schahrsad Shahmirzadi"
                  className="w-full h-80 object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white font-serif text-base font-semibold">
                    {currentLang === 'fa' ? 'شهزاد شاهمیرزادی' : 'Schahrsad Shahmirzadi'}
                  </p>
                  <p className="text-amber-300 text-xs tracking-wider font-medium">
                    {currentLang === 'fa' ? 'شیرزن (SchirZan) · هنرمند و عکاس' : 'SchirZan · Artist & Photographer'}
                  </p>
                  <p className="text-[11px] text-stone-300 mt-1">
                    {INTRO_CONTENT.photoCredit}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Collapsible Artist Philosophy Section */}
        {showPhilosophy && (
          <div className="mt-8 pt-8 border-t border-stone-200 bg-white/95 rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200 transition-all">
            <div className="max-w-4xl space-y-4">
              <h3 className="text-xl font-serif text-amber-900 font-bold">
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
    </section>
  );
};
