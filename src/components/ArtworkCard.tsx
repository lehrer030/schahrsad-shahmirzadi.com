import React from 'react';
import type { PhotoSeries, AwardBadge, Language } from '../data/photographyData';
import { ExternalLink, Images, ArrowUpRight, Maximize2, Award } from 'lucide-react';

interface ArtworkCardProps {
  series: PhotoSeries;
  onOpenSeries: (seriesId: string) => void;
  onOpenLightbox: (photos: PhotoSeries['photos'], index: number) => void;
  currentLang: Language;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  series,
  onOpenSeries,
  onOpenLightbox,
  currentLang
}) => {
  // Client rule: AMP strictly top-left, IPA strictly bottom-right
  const ampBadge = series.badges.find(b => b.position === 'top-left' || b.name.includes('AMP'));
  const ipaBadge = series.badges.find(b => b.position === 'bottom-right' || b.name.includes('IPA'));
  
  // Other badges
  const otherBadges = series.badges.filter(b => b !== ampBadge && b !== ipaBadge);
  const perspaBadge = otherBadges.find(b => b.name.includes('Perspective') || b.id.includes('perspa')) || otherBadges[0] || null;
  const bifaBadge = otherBadges.find(b => b !== perspaBadge) || null;

  // Helper to render uniform badge item with equal proportions
  const renderBadgeItem = (badge: AwardBadge | null | undefined, alignment: 'left' | 'center' | 'right' = 'center') => {
    if (!badge) return null;

    const awardText = currentLang === 'fa' && badge.awardFa ? badge.awardFa : badge.award;
    const titleHint = `${badge.name}: ${awardText}`;

    return (
      <a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        title={titleHint}
        className={`group/badge flex flex-col items-center justify-center w-28 h-16 sm:w-36 sm:h-20 p-2 bg-white hover:bg-stone-50 border border-stone-200 hover:border-stone-400 rounded transition-all duration-200 cursor-pointer ${
          alignment === 'left' ? 'sm:self-start' : alignment === 'right' ? 'sm:self-end' : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${badge.badgeImage}?v=2`}
          alt={badge.name}
          className="max-h-9 sm:max-h-12 max-w-full object-contain filter group-hover/badge:brightness-105"
        />
        <span className="text-[10px] text-stone-500 group-hover/badge:text-stone-800 font-sans font-medium tracking-tight truncate w-full text-center mt-1 flex items-center justify-center gap-1">
          <span>{badge.year}</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/badge:opacity-100" />
        </span>
      </a>
    );
  };

  return (
    <article className="bg-white border border-stone-200 rounded p-6 sm:p-8 lg:p-10 w-full">
      
      {/* Title & Top Metadata Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-medium">
            {currentLang === 'de'
              ? series.subtitleDe
              : currentLang === 'fa'
              ? series.subtitleFa
              : series.subtitleEn}
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 mt-1 font-bold">
            {currentLang === 'de'
              ? series.titleDe
              : currentLang === 'fa'
              ? series.titleFa
              : series.titleEn}
          </h3>
        </div>

        <button
          onClick={() => onOpenSeries(series.id)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded transition-all duration-200 self-start md:self-auto cursor-pointer"
        >
          <Images className="w-4 h-4" />
          <span>
            {currentLang === 'de'
              ? `${series.photos.length} Werke ansehen`
              : currentLang === 'fa'
              ? `مشاهده ${series.photos.length} اثر`
              : `View ${series.photos.length} Works`}
          </span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Responsive Layout: On large screens, photo on one side, editorial curation panel on the other! */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left / Center Column: The Visual Presentation Matching Her Exact Mockup */}
        <div className="lg:col-span-7 flex flex-col items-center w-full max-w-xl mx-auto">
          
          {/* TOP ROW: AMP ALWAYS TOP-LEFT */}
          <div className="w-full flex justify-start mb-3">
            {renderBadgeItem(ampBadge, 'left')}
          </div>

          {/* MAIN COVER PHOTO */}
          <div
            onClick={() => onOpenSeries(series.id)}
            className="group/img relative rounded overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer w-full transition-all duration-300"
          >
            <img
              src={series.coverImage}
              alt={series.titleEn}
              className="w-full h-auto max-h-[520px] object-contain mx-auto transition-transform duration-500 group-hover/img:scale-[1.01]"
              loading="lazy"
            />

            {/* Hover actions */}
            <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4 gap-3">
              <span className="px-4 py-2 bg-white text-stone-900 border border-stone-200 rounded text-xs font-medium tracking-wide flex items-center gap-2">
                <Images className="w-4 h-4 text-stone-700" />
                {currentLang === 'de'
                  ? `${series.photos.length} Werke ansehen`
                  : currentLang === 'fa'
                  ? `مشاهده ${series.photos.length} اثر`
                  : `View ${series.photos.length} Works`}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(series.photos, 0);
                }}
                className="p-2 bg-white text-stone-900 rounded hover:bg-stone-100 transition-colors cursor-pointer"
                title="Vollbild"
              >
                <Maximize2 className="w-4 h-4 text-stone-700" />
              </button>
            </div>

            {/* Watermark logo bottom-right */}
            <div className="absolute bottom-2.5 right-3 text-[10px] tracking-wider text-white/90 font-serif pointer-events-none select-none bg-stone-900/40 px-2 py-0.5 rounded">
              © SchirZan
            </div>
          </div>

          {/* BOTTOM ROW: Equal Proportion Badges matching her email mockup */}
          <div className="w-full mt-4 flex items-center justify-between flex-wrap gap-2.5 sm:gap-3">
            {/* Bottom-Left: PERSPA */}
            <div>
              {renderBadgeItem(perspaBadge, 'left')}
            </div>

            {/* Bottom-Center: BIFA (if present) */}
            {bifaBadge && (
              <div className="flex-1 flex justify-center">
                {renderBadgeItem(bifaBadge, 'center')}
              </div>
            )}

            {/* Bottom-Right: IPA ALWAYS BOTTOM-RIGHT */}
            <div className="ml-auto">
              {renderBadgeItem(ipaBadge, 'right')}
            </div>
          </div>

        </div>

        {/* Right Column: Editorial Exhibition Curation Panel */}
        <div className="lg:col-span-5 space-y-6 bg-[#faf8f5] border border-stone-200 rounded p-6 sm:p-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-medium block mb-2">
              {currentLang === 'de' ? 'Werkbeschreibung' : currentLang === 'fa' ? 'شرح اثر' : 'Exhibition Notes'}
            </span>
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
              {currentLang === 'de'
                ? series.descriptionDe
                : currentLang === 'fa'
                ? series.descriptionFa
                : series.descriptionEn}
            </p>
          </div>

          {(series.personalNoteDe || series.personalNoteFa) && (
            <div className="p-4 bg-white rounded border border-stone-200 text-xs sm:text-sm text-stone-700 italic font-serif">
              {currentLang === 'de'
                ? series.personalNoteDe
                : currentLang === 'fa'
                ? series.personalNoteFa
                : series.personalNoteEn}
            </div>
          )}

          {/* Key Facts & Registry Links */}
          <div className="pt-2 border-t border-stone-200 space-y-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold block">
              {currentLang === 'de' ? 'Internationale Registrierung' : currentLang === 'fa' ? 'ثبت رسمی در مسابقات جهانی' : 'International Registry'}
            </span>
            <div className="flex flex-col gap-2">
              {series.badges.map(b => (
                <a
                  key={b.id}
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs text-stone-700 hover:text-amber-800 p-2 rounded-lg bg-white border border-stone-200/80 hover:border-amber-700/50 transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium truncate">
                    <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span className="truncate">{b.name} ({b.year})</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-stone-400 shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => onOpenSeries(series.id)}
              className="flex-1 py-3 bg-stone-900 hover:bg-amber-800 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-xs text-center cursor-pointer"
            >
              {currentLang === 'de'
                ? `${series.photos.length} Werke ansehen`
                : currentLang === 'fa'
                ? `مشاهده ${series.photos.length} اثر`
                : `View ${series.photos.length} Works`}
            </button>
            <button
              onClick={() => onOpenLightbox(series.photos, 0)}
              className="p-3 bg-white hover:bg-stone-100 border border-stone-200 rounded-full text-stone-700 hover:text-stone-950 transition-colors cursor-pointer shadow-2xs"
              title="Vollbild öffnen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </article>
  );
};
