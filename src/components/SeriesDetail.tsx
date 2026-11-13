import React from 'react';
import type { PhotoSeries, AwardBadge } from '../data/photographyData';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';

interface SeriesDetailProps {
  series: PhotoSeries;
  onBack: () => void;
  currentLang: 'de' | 'en';
}

export const SeriesDetail: React.FC<SeriesDetailProps> = ({
  series,
  onBack,
  currentLang
}) => {
  // Badges for Image 1 (strictly AMP top-left, IPA bottom-right)
  const ampBadge = series.badges.find(b => b.position === 'top-left' || b.name.includes('AMP'));
  const ipaBadge = series.badges.find(b => b.position === 'bottom-right' || b.name.includes('IPA'));
  const otherBadges = series.badges.filter(b => b !== ampBadge && b !== ipaBadge);
  const perspaBadge = otherBadges.find(b => b.name.includes('Perspective') || b.id.includes('perspa')) || otherBadges[0] || null;
  const bifaBadge = otherBadges.find(b => b !== perspaBadge) || null;

  const renderBadgeItem = (badge: AwardBadge | null | undefined, alignment: 'left' | 'center' | 'right' = 'center') => {
    if (!badge) return null;
    return (
      <a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        title={`${badge.name}: ${badge.award}`}
        className={`group flex flex-col items-center justify-center w-28 h-16 sm:w-36 sm:h-20 p-2 bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-700/80 hover:border-amber-400 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer ${
          alignment === 'left' ? 'sm:self-start' : alignment === 'right' ? 'sm:self-end' : ''
        }`}
      >
        <img
          src={badge.badgeImage}
          alt={badge.name}
          className="max-h-9 sm:max-h-12 max-w-full object-contain filter drop-shadow group-hover:brightness-110"
        />
        <span className="text-[10px] text-neutral-400 group-hover:text-amber-300 font-sans tracking-tight truncate w-full text-center mt-1 flex items-center justify-center gap-1">
          <span>{badge.year}</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
        </span>
      </a>
    );
  };

  const firstPhoto = series.photos[0];
  const subsequentPhotos = series.photos.slice(1);

  return (
    <div className="py-8 md:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-amber-400 border border-neutral-800 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{currentLang === 'de' ? 'Zurück zur Übersicht' : 'Back to Overview'}</span>
        </button>
      </div>

      {/* STRICT CLIENT SEQUENCE: 1. HEADLINE -> 2. TEXT -> 3. PHOTO */}
      <section className="space-y-6">
        
        {/* 1. HEADLINE */}
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-medium">
            {currentLang === 'de' ? series.subtitleDe : series.subtitleEn}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-100 mt-2 leading-tight">
            {currentLang === 'de' ? series.titleDe : series.titleEn}
          </h1>
        </div>

        {/* 2. TEXT (Description & Personal Dedication) */}
        <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-4">
          <p className="text-neutral-200 leading-relaxed text-base sm:text-lg font-light">
            {currentLang === 'de' ? series.descriptionDe : series.descriptionEn}
          </p>

          {series.personalNoteDe && (
            <div className="pt-3 border-t border-neutral-800/80 text-sm text-amber-300/90 italic font-serif">
              {currentLang === 'de' ? series.personalNoteDe : series.personalNoteEn}
            </div>
          )}

          <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {currentLang === 'de'
                ? 'Urheberschaft: Schahrsad Shahmirzadi (SchirZan) · Signatur geschützt'
                : 'Copyright: Schahrsad Shahmirzadi (SchirZan) · Signature protected'}
            </span>
          </div>
        </div>

        {/* 3. PHOTO SECTION */}
        <div className="pt-6 space-y-16">
          
          {/* PHOTO 1: SURROUNDED BY ALL AWARDS MATCHING HER EMAIL MOCKUP */}
          <div className="space-y-4 max-w-xl mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                {currentLang === 'de' ? 'Hauptwerk / Bild 01 (Prämiert)' : 'Lead Work / Image 01 (Awarded)'}
              </span>
              <span className="text-xs text-neutral-400">
                1 / {series.photos.length}
              </span>
            </div>

            {/* TOP: AMP ALWAYS TOP-LEFT */}
            <div className="w-full flex justify-start">
              {renderBadgeItem(ampBadge, 'left')}
            </div>

            {/* PHOTO 1 CONTAINER */}
            <div className="rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl relative">
              <img
                src={firstPhoto.src}
                alt={firstPhoto.alt}
                className="w-full h-auto max-h-[640px] object-contain mx-auto"
              />
              <div className="absolute bottom-3 right-3 text-[11px] tracking-wider text-white/50 font-serif pointer-events-none select-none drop-shadow">
                © SchirZan
              </div>
            </div>

            {/* BOTTOM ROW: PERSPA (left), BIFA (center if present), IPA (right) */}
            <div className="w-full pt-2 flex items-center justify-between flex-wrap gap-3">
              <div>{renderBadgeItem(perspaBadge, 'left')}</div>
              {bifaBadge && (
                <div className="flex-1 flex justify-center">
                  {renderBadgeItem(bifaBadge, 'center')}
                </div>
              )}
              <div className="ml-auto">{renderBadgeItem(ipaBadge, 'right')}</div>
            </div>

            {firstPhoto.captionDe && (
              <p className="text-center text-xs text-neutral-400 font-sans tracking-wide pt-2">
                {currentLang === 'de' ? firstPhoto.captionDe : firstPhoto.captionEn}
              </p>
            )}
          </div>

          {/* SUBSEQUENT PHOTOS: CLEAN, UNINTERRUPTED, STRICTLY NO BADGES (as requested!) */}
          {subsequentPhotos.map((photo, index) => (
            <div key={photo.id} className="space-y-3 pt-6 border-t border-neutral-800/60">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-mono text-amber-500/80">
                  {currentLang === 'de' ? `Bild 0${index + 2}` : `Image 0${index + 2}`}
                </span>
                <span>
                  {index + 2} / {series.photos.length}
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80 shadow-2xl relative max-w-2xl mx-auto">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto max-h-[640px] object-contain mx-auto"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 text-[11px] tracking-wider text-white/50 font-serif pointer-events-none select-none drop-shadow">
                  © SchirZan
                </div>
              </div>

              {photo.captionDe && (
                <p className="text-center text-xs text-neutral-400 font-sans tracking-wide pt-2">
                  {currentLang === 'de' ? photo.captionDe : photo.captionEn}
                </p>
              )}
            </div>
          ))}

        </div>

      </section>

      {/* Bottom Back Button */}
      <div className="mt-16 pt-8 border-t border-neutral-800 flex justify-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-full text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-amber-500/20 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{currentLang === 'de' ? 'Zurück zur Übersicht' : 'Back to Overview'}</span>
        </button>
      </div>
    </div>
  );
};
