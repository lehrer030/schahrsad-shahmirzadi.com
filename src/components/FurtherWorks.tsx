import React from 'react';
import type { FurtherWork, Language } from '../data/photographyData';
import { Award, ExternalLink, Sparkles } from 'lucide-react';

interface FurtherWorksProps {
  works: FurtherWork[];
  currentLang: Language;
  sectionTitleDe?: string;
  sectionTitleEn?: string;
  sectionTitleFa?: string;
}

export const FurtherWorks: React.FC<FurtherWorksProps> = ({
  works,
  currentLang,
  sectionTitleDe = 'Further Works (Weitere prämierte Werke)',
  sectionTitleEn = 'Further Works (Additional Awarded Works)',
  sectionTitleFa = 'سایر آثار برگزیده و دارای افتخارات بین‌المللی'
}) => {
  return (
    <section className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-stone-200 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-300/80 text-amber-900 text-xs font-mono uppercase tracking-wider mb-2 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>
              {currentLang === 'de'
                ? 'Werkverzeichnis & Auszeichnungen'
                : currentLang === 'fa'
                ? 'فهرست آثار و افتخارات بین‌المللی'
                : 'Works & Recognition Catalog'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
            {currentLang === 'de'
              ? sectionTitleDe
              : currentLang === 'fa'
              ? sectionTitleFa
              : sectionTitleEn}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl font-light leading-relaxed">
            {currentLang === 'de'
              ? 'Kompaktübersicht mit Werktiteln, Auszeichnungen und direkter Verlinkung zu den internationalen Wettbewerben (ohne Vorschaubilder gemäß Portfolio-Vorgabe).'
              : currentLang === 'fa'
              ? 'نمای کلی و فشرده با عناوین آثار، جوایز بین‌المللی و لینک مستقیم به سامانه‌های ثبت مسابقات جهانی (بدون پیش‌نمایش تصویر بر اساس ساختار اختصاصی پورتفولیو).'
              : 'Compact overview with artwork titles, international awards, and verified links to competition registries (without preview images as specified).'}
          </p>
        </div>

        {/* Works List: Responsive 1 / 2 / 3 / 4 Columns (Full screen width utilization!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 w-full">
          {works.map((work, idx) => (
            <div
              key={work.id}
              className="group bg-white hover:bg-stone-50/80 border border-stone-200/90 hover:border-amber-700/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-2">
                  <span className="text-amber-800 font-bold">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="truncate max-w-[200px] font-medium">
                    {currentLang === 'fa' && work.categoryFa ? work.categoryFa : work.category}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-serif text-stone-900 group-hover:text-amber-900 transition-colors font-bold">
                  {currentLang === 'de'
                    ? work.titleDe
                    : currentLang === 'fa'
                    ? work.titleFa
                    : work.titleEn}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {currentLang === 'de'
                    ? work.awardsDe
                    : currentLang === 'fa'
                    ? work.awardsFa
                    : work.awardsEn}
                </p>
              </div>

              {/* Badges / Tags & External link */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {work.badgeNames.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1 text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md border border-stone-200 font-medium"
                    >
                      <Award className="w-2.5 h-2.5 text-amber-700" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>

                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 hover:text-amber-950 transition-colors"
                  >
                    <span>
                      {currentLang === 'de'
                        ? 'Wettbewerb'
                        : currentLang === 'fa'
                        ? 'مشاهده مسابقه'
                        : 'Competition'}
                    </span>
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
