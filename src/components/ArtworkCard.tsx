import React from 'react';
import type { PhotoSeries, AwardBadge } from '../data/photographyData';
import { ExternalLink, Images, ArrowUpRight } from 'lucide-react';

interface ArtworkCardProps {
  series: PhotoSeries;
  onOpenSeries: (seriesId: string) => void;
  currentLang: 'de' | 'en';
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
  const topRightBadge = otherBadges[0] || null;
  const bottomLeftBadge = otherBadges[1] || null;

  // Helper to render uniform badge item
  const renderBadgeItem = (badge: AwardBadge | null | undefined) => {
    if (!badge) return <div className="w-24 h-14 sm:w-28 sm:h-16" />;

    return (
      <a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        title={`${badge.name}: ${badge.award} (${currentLang === 'de' ? 'Offizielle Wettbewerbsseite öffnen' : 'Open official competition page'})`}
        className="group/badge relative flex flex-col items-center justify-center w-24 h-14 sm:w-28 sm:h-16 p-1.5 bg-neutral-900/95 hover:bg-neutral-800/95 border border-neutral-700/80 hover:border-amber-400 rounded-lg shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 z-20 cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={badge.badgeImage}
          alt={badge.name}
          className="max-h-8 sm:max-h-10 max-w-full object-contain filter drop-shadow group-hover/badge:brightness-110"
        />
        <span className="text-[9px] text-neutral-400 group-hover/badge:text-amber-300 font-sans tracking-tight truncate w-full text-center mt-0.5 flex items-center justify-center gap-0.5">
          <span>{badge.year}</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/badge:opacity-100" />
        </span>
      </a>
    );
  };

  return (
    <article className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-neutral-700">
      
      {/* Title & Metadata Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800/80 pb-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-medium">
            {currentLang === 'de' ? series.subtitleDe : series.subtitleEn}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-neutral-100 mt-1">
            {currentLang === 'de' ? series.titleDe : series.titleEn}
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
              : `View Full Series (${series.photos.length} Works)`}
          </span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Image Framing & Badges Container */}
      <div className="relative flex flex-col items-center">
        
        {/* DESKTOP BADGE LAYOUT: Framed around the cover image */}
        <div className="w-full max-w-2xl relative">
          
          {/* Top-Left: AMP ALWAYS (strictly per client instruction) */}
          <div className="hidden sm:block absolute -top-4 -left-6 z-20">
            {renderBadgeItem(ampBadge)}
          </div>

          {/* Top-Right: PERSPA / secondary award */}
          <div className="hidden sm:block absolute -top-4 -right-6 z-20">
            {renderBadgeItem(topRightBadge)}
          </div>

          {/* Bottom-Left: BIFA / Global Lens */}
          <div className="hidden sm:block absolute -bottom-4 -left-6 z-20">
            {renderBadgeItem(bottomLeftBadge)}
          </div>

          {/* Bottom-Right: IPA ALWAYS (strictly per client instruction) */}
          <div className="hidden sm:block absolute -bottom-4 -right-6 z-20">
            {renderBadgeItem(ipaBadge)}
          </div>

          {/* Centered Image with Moderate Size (Fixing client's complaint that image was too large on desktop!) */}
          <div
            onClick={() => onOpenSeries(series.id)}
            className="group/img relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl cursor-pointer mx-auto max-w-md sm:max-w-lg lg:max-w-xl transition-all duration-500 hover:shadow-amber-500/10 hover:border-amber-500/40"
          >
            <img
              src={series.coverImage}
              alt={series.titleEn}
              className="w-full h-auto max-h-[520px] object-contain mx-auto transition-transform duration-700 group-hover/img:scale-[1.02]"
              loading="lazy"
            />

            {/* Subtle overlay on hover inviting to click */}
            <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-5 py-2.5 bg-neutral-900/90 text-amber-300 border border-amber-400/50 rounded-full text-xs font-medium tracking-wider backdrop-blur-sm shadow-xl flex items-center gap-2">
                <Images className="w-4 h-4 text-amber-400" />
                {currentLang === 'de' ? 'Klicken, um gesamte Serie zu öffnen' : 'Click to view full series'}
              </span>
            </div>

            {/* Subtle watermark indication per client's note about artist logo */}
            <div className="absolute bottom-2.5 right-3 text-[10px] tracking-wider text-white/50 font-serif pointer-events-none select-none drop-shadow">
              © SchirZan
            </div>
          </div>
        </div>

        {/* MOBILE BADGES LAYOUT: Balanced 2x2 Grid (SOLVING client's complaint that badges were vertically stacked!) */}
        <div className="sm:hidden w-full mt-5">
          <p className="text-[11px] uppercase tracking-wider text-neutral-400 text-center mb-2.5">
            {currentLang === 'de' ? 'Auszeichnungen für dieses Werk:' : 'Awards for this work:'}
          </p>
          <div className="grid grid-cols-2 gap-2.5 max-w-xs mx-auto">
            {/* Top-Left: AMP */}
            <div className="flex justify-center">
              {renderBadgeItem(ampBadge)}
            </div>
            {/* Top-Right: PERSPA */}
            <div className="flex justify-center">
              {renderBadgeItem(topRightBadge)}
            </div>
            {/* Bottom-Left: BIFA */}
            <div className="flex justify-center">
              {renderBadgeItem(bottomLeftBadge)}
            </div>
            {/* Bottom-Right: IPA */}
            <div className="flex justify-center">
              {renderBadgeItem(ipaBadge)}
            </div>
          </div>
        </div>

      </div>

      {/* Brief Series Preview Description */}
      <div className="mt-6 pt-5 border-t border-neutral-800/80 text-sm text-neutral-400 line-clamp-2 font-light">
        {currentLang === 'de' ? series.descriptionDe : series.descriptionEn}
      </div>

    </article>
  );
};
