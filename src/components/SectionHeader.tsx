import React from 'react';
import type { Language } from '../data/photographyData';

interface SectionHeaderProps {
  num: string; // '01', '02', ..., '10'
  shortTitleDe: string;
  shortTitleEn: string;
  shortTitleFa: string;
  fullTitleDe: string;
  fullTitleEn: string;
  fullTitleFa: string;
  descDe?: string;
  descEn?: string;
  descFa?: string;
  currentLang: Language;
  extraRight?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  num,
  shortTitleDe,
  shortTitleEn,
  shortTitleFa,
  fullTitleDe,
  fullTitleEn,
  fullTitleFa,
  descDe,
  descEn,
  descFa,
  currentLang,
  extraRight
}) => {
  const shortTitle = currentLang === 'de' ? shortTitleDe : currentLang === 'fa' ? shortTitleFa : shortTitleEn;
  const fullTitle = currentLang === 'de' ? fullTitleDe : currentLang === 'fa' ? fullTitleFa : fullTitleEn;
  const desc = currentLang === 'de' ? descDe : currentLang === 'fa' ? descFa : descEn;

  return (
    <div className="border-b-2 border-stone-200/90 pb-5 mb-8 sm:mb-10 relative">
      <div className="space-y-2.5 w-full">
        {/* Header pill matching navbar */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#1c1917] text-white shadow-xs">
          <span className="px-1.5 py-0.5 rounded bg-amber-400 text-stone-950 font-mono font-bold text-xs tracking-tight">
            {num}
          </span>
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-stone-100">
            {shortTitle}
          </span>
        </div>

        {/* Prominent main title - proportional and elegant font size */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-serif text-stone-900 font-bold tracking-tight leading-snug">
          {fullTitle}
        </h2>

        {/* Explanatory description and optional right-side controls */}
        {(desc || extraRight) && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-0.5">
            {desc ? (
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-3xl">
                {desc}
              </p>
            ) : <div />}

            {extraRight && (
              <div className="shrink-0 self-start md:self-end">
                {extraRight}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Visual Accent bar on the divider */}
      <div className="absolute -bottom-[2px] left-0 w-24 h-[2px] bg-amber-500 rounded-full" />
    </div>
  );
};
