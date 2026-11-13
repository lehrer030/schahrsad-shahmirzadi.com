import React, { useState } from 'react';
import { INTRO_CONTENT } from '../data/photographyData';
import { Award, ChevronDown, ChevronUp, Sparkles, Feather } from 'lucide-react';

interface HeaderIntroProps {
  currentLang: 'de' | 'en';
}

export const HeaderIntro: React.FC<HeaderIntroProps> = ({ currentLang }) => {
  const [showPhilosophy, setShowPhilosophy] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 py-12 md:py-16 border-b border-neutral-800">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Awards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {currentLang === 'de'
                  ? 'Offizielles Portfolio & Werkverzeichnis'
                  : 'Official Portfolio & Works Catalog'}
              </span>
            </div>

            {/* Main Header as requested by client */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-neutral-100 leading-tight">
              {INTRO_CONTENT.mainHeader}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-neutral-300 font-light max-w-3xl leading-relaxed">
              {currentLang === 'de' ? INTRO_CONTENT.subtitleDe : INTRO_CONTENT.subtitleEn}
            </p>

            {/* Competition Recognition Badges / Ticker */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>
                  {currentLang === 'de'
                    ? 'Internationale Wettbewerbe & Auszeichnungen'
                    : 'International Competitions & Recognition'}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {INTRO_CONTENT.competitions.map((comp, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs bg-neutral-800/90 text-neutral-200 border border-neutral-700/70 px-3 py-1.5 rounded-md hover:border-amber-400/50 hover:text-amber-200 transition-colors"
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
                className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer"
              >
                <Feather className="w-4 h-4 text-amber-400" />
                <span>
                  {currentLang === 'de'
                    ? INTRO_CONTENT.artistSectionTitleDe
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">
                <img
                  src="/images/2025_07_photoart.jpg"
                  alt="SchirZan - Schahrsad Shahmirzadi"
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white font-serif text-base font-semibold">
                    Schahrsad Shahmirzadi
                  </p>
                  <p className="text-amber-400 text-xs tracking-wider">
                    SchirZan · Artist &amp; Photographer
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    {INTRO_CONTENT.photoCredit}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Collapsible Artist Philosophy Section */}
        {showPhilosophy && (
          <div className="mt-8 pt-8 border-t border-neutral-800 bg-neutral-900/60 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl transition-all">
            <div className="max-w-4xl space-y-4">
              <h3 className="text-xl font-serif text-amber-300">
                {currentLang === 'de'
                  ? 'Künstlername SchirZan & Die Philosophie des Lichts'
                  : 'Artist Name SchirZan & The Philosophy of Light'}
              </h3>
              <div className="text-neutral-300 leading-relaxed space-y-4 whitespace-pre-line text-sm sm:text-base font-light">
                {currentLang === 'de'
                  ? INTRO_CONTENT.artistExplanationDe
                  : INTRO_CONTENT.artistExplanationEn}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
