import React from 'react';
import type { FurtherWork } from '../data/photographyData';
import { Award, ExternalLink, Sparkles } from 'lucide-react';

interface FurtherWorksProps {
  works: FurtherWork[];
  currentLang: 'de' | 'en';
  sectionTitleDe?: string;
  sectionTitleEn?: string;
}

export const FurtherWorks: React.FC<FurtherWorksProps> = ({
  works,
  currentLang,
  sectionTitleDe = 'Further Works (Weitere prämierte Werke)',
  sectionTitleEn = 'Further Works (Additional Awarded Works)'
}) => {
  return (
    <section className="mt-16 pt-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLang === 'de' ? 'Werkverzeichnis & Auszeichnungen' : 'Works & Recognition Catalog'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-100">
            {currentLang === 'de' ? sectionTitleDe : sectionTitleEn}
          </h2>
          <p className="text-xs text-neutral-400 mt-1 max-w-2xl font-light">
            {currentLang === 'de'
              ? 'Kompaktübersicht mit Werktiteln, Auszeichnungen und direkter Verlinkung zu den internationalen Wettbewerben (ohne Vorschaubilder gemäß Portfolio-Vorgabe).'
              : 'Compact overview with artwork titles, international awards, and verified links to competition registries.'}
          </p>
        </div>

        {/* Works List / Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {works.map((work, idx) => (
            <div
              key={work.id}
              className="group bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 hover:border-amber-400/50 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                  <span className="text-amber-500 font-semibold">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="truncate max-w-[200px]">{work.category}</span>
                </div>

                <h4 className="text-base sm:text-lg font-serif text-neutral-100 group-hover:text-amber-300 transition-colors font-medium">
                  {currentLang === 'de' ? work.titleDe : work.titleEn}
                </h4>

                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  {currentLang === 'de' ? work.awardsDe : work.awardsEn}
                </p>
              </div>

              {/* Badges / Tags & External link */}
              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {work.badgeNames.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1 text-[10px] bg-neutral-800/90 text-neutral-300 px-2 py-0.5 rounded border border-neutral-700/60"
                    >
                      <Award className="w-2.5 h-2.5 text-amber-400" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>

                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>{currentLang === 'de' ? 'Wettbewerb' : 'Competition'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
