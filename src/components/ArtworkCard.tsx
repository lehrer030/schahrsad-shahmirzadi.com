import React from 'react';
import type { PhotoSeries, AwardBadge, Language } from '../data/photographyData';
import { ExternalLink, Images, ArrowUpRight, Maximize2, Award } from 'lucide-react';
import { resolveAsset } from '../utils/resolveAsset';

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
  // Top row badges:
  // AMP strictly top-right (höchste Auszeichnung in Blau), GL strictly top-left if present
  const ampBadge = series.badges.find(b => b.name.includes('AMP') || b.id.includes('amp') || b.position === 'top-right');
  const glBadge = series.badges.find(b => b.name.includes('Global Lens') || b.id.includes('globallens') || (b.position === 'top-left' && b !== ampBadge));
  const ipaBadge = series.badges.find(b => b.position === 'bottom-right' || b.name.includes('IPA'));
  
  // Other badges for bottom row
  const otherBadges = series.badges.filter(b => b !== ampBadge && b !== glBadge && b !== ipaBadge);
  const perspaBadge = otherBadges.find(b => b.name.includes('Perspective') || b.id.includes('perspa')) || otherBadges[0] || null;
  const bifaBadge = otherBadges.find(b => b !== perspaBadge) || null;

  // Helper to render uniform badge item with equal proportions (larger per customer feedback)
  const renderBadgeItem = (badge: AwardBadge | null | undefined) => {
    if (!badge) return null;

    const awardText = currentLang === 'fa' && badge.awardFa ? badge.awardFa : badge.award;
    const titleHint = `${badge.name}: ${awardText}`;

    return (
      <a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        title={titleHint}
        className="group/badge flex flex-col items-center justify-center w-full min-h-[64px] sm:min-h-[70px] h-auto py-2 px-2 bg-white hover:bg-stone-50 border border-stone-200 hover:border-stone-400 rounded-lg shadow-2xs transition-all duration-200 cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${resolveAsset(badge.badgeImage)}?v=2`}
          alt={badge.name}
          className="h-8 max-h-8 sm:h-9 sm:max-h-9 max-w-full object-contain shrink-0 filter group-hover/badge:brightness-105"
        />
        <span className="text-[10px] sm:text-[10.5px] text-stone-600 group-hover/badge:text-stone-900 font-sans font-medium tracking-tight truncate w-full text-center mt-1 flex items-center justify-center gap-1 leading-tight">
          <span>{badge.year}</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/badge:opacity-100 shrink-0" />
        </span>
      </a>
    );
  };

  return (
    <article className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs w-full">
      
      {/* Title & Top Metadata Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            {currentLang === 'de'
              ? series.subtitleDe
              : currentLang === 'fa'
              ? series.subtitleFa
              : currentLang === 'fr'
              ? (series.subtitleFr || series.subtitleEn)
              : currentLang === 'it'
              ? (series.subtitleIt || series.subtitleEn)
              : currentLang === 'tr'
              ? (series.subtitleTr || series.subtitleEn)
              : series.subtitleEn}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mt-1 font-bold">
            {currentLang === 'de'
              ? series.titleDe
              : currentLang === 'fa'
              ? series.titleFa
              : currentLang === 'fr'
              ? (series.titleFr || series.titleEn)
              : currentLang === 'it'
              ? (series.titleIt || series.titleEn)
              : currentLang === 'tr'
              ? (series.titleTr || series.titleEn)
              : series.titleEn}
          </h3>
        </div>

        <button
          onClick={() => onOpenSeries(series.id)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-all duration-200 self-start md:self-auto cursor-pointer"
        >
          <Images className="w-4 h-4" />
          <span>
            {currentLang === 'de'
              ? `${series.photos.length} Werke ansehen`
              : currentLang === 'fa'
              ? `مشاهده ${series.photos.length} اثر`
              : currentLang === 'fr'
              ? `Voir ${series.photos.length} œuvres`
              : currentLang === 'it'
              ? `Vedi ${series.photos.length} opere`
              : currentLang === 'tr'
              ? `${series.photos.length} Eseri İncele`
              : `View ${series.photos.length} Works`}
          </span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Responsive Layout: Cover image sized to match Award cards proportions! */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left / Center Column: Image with badges positioned OUTSIDE around it */}
        <div className="lg:col-span-5 flex flex-col items-center w-full max-w-xs sm:max-w-sm mx-auto">
          
          {/* TOP ROW: Global Lens (top-left) & AMP (strictly top-right in blau: höchste Auszeichnung) */}
          {(ampBadge || glBadge) && (
            <div className="w-full flex items-center justify-between mb-2.5 gap-2">
              <div className="w-28 sm:w-36 flex justify-start">
                {renderBadgeItem(glBadge)}
              </div>
              <div className="w-28 sm:w-36 flex justify-end">
                {renderBadgeItem(ampBadge)}
              </div>
            </div>
          )}

          {/* MAIN COVER PHOTO: Clean image, NO BADGES OVERLAYING THE ARTWORK */}
          <div
            onClick={() => onOpenSeries(series.id)}
            className="group/img relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200/90 cursor-pointer w-full aspect-[3/4] transition-all duration-300"
          >
            <img
              src={resolveAsset(series.coverImage)}
              alt={series.titleEn}
              draggable={false}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105 select-none protected-art"
              loading="lazy"
            />

            {/* Hover actions */}
            <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4 gap-3">
              <span className="px-3.5 py-1.5 bg-white text-stone-900 border border-stone-200 rounded text-xs font-medium tracking-wide flex items-center gap-1.5">
                <Images className="w-3.5 h-3.5 text-stone-700" />
                {currentLang === 'de'
                  ? `${series.photos.length} Werke ansehen`
                  : currentLang === 'fa'
                  ? `مشاهده ${series.photos.length} اثر`
                  : currentLang === 'fr'
                  ? `Voir ${series.photos.length} œuvres`
                  : currentLang === 'it'
                  ? `Vedi ${series.photos.length} opere`
                  : currentLang === 'tr'
                  ? `${series.photos.length} Eseri İncele`
                  : `View ${series.photos.length} Works`}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(series.photos, 0);
                }}
                className="p-1.5 bg-white text-stone-900 rounded hover:bg-stone-100 transition-colors cursor-pointer"
                title="Vollbild"
              >
                <Maximize2 className="w-4 h-4 text-stone-700" />
              </button>
            </div>

            {/* Watermark logo bottom-right (Rechtsschutzmarke direkt rechts unten auf dem Bild) */}
            <div className="absolute bottom-2.5 right-2.5 text-[9.5px] sm:text-[10px] tracking-wider text-white/95 font-serif pointer-events-none select-none bg-stone-900/60 backdrop-blur-xs px-2 py-0.5 rounded shadow-xs z-10">
              SchirZan | Schahrsad Shahmirzadi
            </div>
          </div>

          {/* BOTTOM ROW: Equal Proportion Badges (PERSPA / BIFA / IPA) OUTSIDE OF IMAGE */}
          <div className={`w-full mt-2.5 grid ${bifaBadge ? 'grid-cols-3' : 'grid-cols-2'} gap-2 sm:gap-2.5 items-center`}>
            {/* Bottom-Left: PERSPA */}
            <div className="flex justify-start">
              {renderBadgeItem(perspaBadge)}
            </div>

            {/* Bottom-Center: BIFA (if present) */}
            {bifaBadge && (
              <div className="flex justify-center">
                {renderBadgeItem(bifaBadge)}
              </div>
            )}

            {/* Bottom-Right: IPA ALWAYS BOTTOM-RIGHT */}
            <div className="flex justify-end">
              {renderBadgeItem(ipaBadge)}
            </div>
          </div>

        </div>

        {/* Right Column: Editorial Exhibition Curation Panel */}
        <div className="lg:col-span-7 space-y-5 bg-[#faf8f5] border border-stone-200/90 rounded-2xl p-5 sm:p-7">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-medium block mb-2">
              {currentLang === 'de'
                ? 'Werkbeschreibung'
                : currentLang === 'fa'
                ? 'شرح اثر'
                : currentLang === 'fr'
                ? 'Description de l’œuvre'
                : currentLang === 'it'
                ? 'Descrizione dell’opera'
                : currentLang === 'tr'
                ? 'Eser Açıklaması'
                : 'About the Artwork'}
            </span>
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
              {currentLang === 'de'
                ? series.descriptionDe
                : currentLang === 'fa'
                ? series.descriptionFa
                : currentLang === 'fr'
                ? (series.descriptionFr || series.descriptionEn)
                : currentLang === 'it'
                ? (series.descriptionIt || series.descriptionEn)
                : currentLang === 'tr'
                ? (series.descriptionTr || series.descriptionEn)
                : series.descriptionEn}
            </p>
          </div>

          {(series.personalNoteDe || series.personalNoteFa || series.personalNoteEn || series.personalNoteFr || series.personalNoteIt || series.personalNoteTr) && (
            <div className="p-4 bg-white rounded border border-stone-200 text-xs sm:text-sm text-stone-700 italic font-serif">
              {currentLang === 'de'
                ? series.personalNoteDe
                : currentLang === 'fa'
                ? series.personalNoteFa
                : currentLang === 'fr'
                ? (series.personalNoteFr || series.personalNoteEn)
                : currentLang === 'it'
                ? (series.personalNoteIt || series.personalNoteEn)
                : currentLang === 'tr'
                ? (series.personalNoteTr || series.personalNoteEn)
                : series.personalNoteEn}
            </div>
          )}

          {/* Key Facts & Registry Links */}
          <div className="pt-2 border-t border-stone-200 space-y-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold block">
              {currentLang === 'de'
                ? 'Internationale Registrierung'
                : currentLang === 'fa'
                ? 'ثبت رسمی در مسابقات جهانی'
                : currentLang === 'fr'
                ? 'Enregistrement International'
                : currentLang === 'it'
                ? 'Registrazione Internazionale'
                : currentLang === 'tr'
                ? 'Uluslararası Tescil'
                : 'International Registry'}
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
                : currentLang === 'fr'
                ? `Voir ${series.photos.length} œuvres`
                : currentLang === 'it'
                ? `Vedi ${series.photos.length} opere`
                : currentLang === 'tr'
                ? `${series.photos.length} Eseri İncele`
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
