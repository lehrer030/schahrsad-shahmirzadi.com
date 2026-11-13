import React from 'react';
import type { PhotoSeries, AwardBadge, Language } from '../data/photographyData';
import { ExternalLink, Images, ArrowUpRight } from 'lucide-react';

interface ArtworkCardProps {
  series: PhotoSeries;
  onOpenSeries: (seriesId: string) => void;
  currentLang: Language;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  series,
  onOpenSeries,
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
        className={`group/badge flex flex-col items-center justify-center w-28 h-16 sm:w-36 sm:h-20 p-2 bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-700/80 hover:border-amber-400 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer ${
          alignment === 'left' ? 'sm:self-start' : alignment === 'right' ? 'sm:self-end' : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={badge.badgeImage}
          alt={badge.name}
          className="max-h-9 sm:max-h-12 max-w-full object-contain filter drop-shadow group-hover/badge:brightness-110"
        />
        <span className="text-[10px] text-neutral-400 group-hover/badge:text-amber-300 font-sans tracking-tight truncate w-full text-center mt-1 flex items-center justify-center gap-1">
          <span>{badge.year}</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/badge:opacity-100" />
        </span>
      </a>
    );
  };

  return (
    <article className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-neutral-700/80">
      
      {/* Title & Metadata Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800/80 pb-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-medium">
            {currentLang === 'de'
              ? series.subtitleDe
              : currentLang === 'fa'
              ? series.subtitleFa
              : series.subtitleEn}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-neutral-100 mt-1">
            {currentLang === 'de'
              ? series.titleDe
              : currentLang === 'fa'
              ? series.titleFa
              : series.titleEn}
          </h3>
        </div>

        <button
          onClick={() => onOpenSeries(series.id)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 text-neutral-200 text-xs font-semibold rounded-full transition-all duration-200 border border-neutral-700 hover:border-amber-400 self-start md:self-auto cursor-pointer shadow-md"
        >
          <Images className="w-3.5 h-3.5" />
          <span>
            {currentLang === 'de'
              ? `Serie ansehen (${series.photos.length} Werke)`
              : currentLang === 'fa'
              ? `مشاهده کامل مجموعه (${series.photos.length} اثر)`
              : `View Full Series (${series.photos.length} Works)`}
          </span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Artwork Showcase matching Frau Shahmirzadi's Email Mockups */}
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* TOP ROW: AMP ALWAYS TOP-LEFT */}
        <div className="w-full flex justify-start mb-3">
          {renderBadgeItem(ampBadge, 'left')}
        </div>

        {/* CENTER: Moderately Sized Photo (Not huge desktop size!) */}
        <div
          onClick={() => onOpenSeries(series.id)}
          className="group/img relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl cursor-pointer w-full transition-all duration-500 hover:shadow-amber-500/10 hover:border-amber-500/40"
        >
          <img
            src={series.coverImage}
            alt={series.titleEn}
            className="w-full h-auto max-h-[540px] object-contain mx-auto transition-transform duration-700 group-hover/img:scale-[1.02]"
            loading="lazy"
          />

          {/* Hover overlay with button */}
          <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-5 py-2.5 bg-neutral-900/90 text-amber-300 border border-amber-400/50 rounded-full text-xs font-medium tracking-wider backdrop-blur-sm shadow-xl flex items-center gap-2">
              <Images className="w-4 h-4 text-amber-400" />
              {currentLang === 'de'
                ? 'Klicken, um gesamte Serie zu öffnen'
                : currentLang === 'fa'
                ? 'کلیک کنید تا کل مجموعه باز شود'
                : 'Click to view full series'}
            </span>
          </div>

          {/* Discreet Urheberrecht Copyright Logo bottom-right */}
          <div className="absolute bottom-2.5 right-3 text-[10px] tracking-wider text-white/50 font-serif pointer-events-none select-none drop-shadow">
            © SchirZan
          </div>
        </div>

        {/* BOTTOM ROW: Equal Proportion Badges exactly as in her email mockups */}
        <div className="w-full mt-4 flex items-center justify-between flex-wrap gap-3">
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

      {/* Brief Series Preview Description */}
      <div className="mt-8 pt-5 border-t border-neutral-800/80 text-sm text-neutral-400 line-clamp-2 font-light">
        {currentLang === 'de'
          ? series.descriptionDe
          : currentLang === 'fa'
          ? series.descriptionFa
          : series.descriptionEn}
      </div>

    </article>
  );
};
