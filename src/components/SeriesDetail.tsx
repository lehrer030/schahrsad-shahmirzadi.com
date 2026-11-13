import React from 'react';
import type { PhotoSeries, AwardBadge, Language } from '../data/photographyData';
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck, Maximize2 } from 'lucide-react';

interface SeriesDetailProps {
  series: PhotoSeries;
  onBack: () => void;
  onOpenLightbox: (photos: PhotoSeries['photos'], index: number) => void;
  currentLang: Language;
}

export const SeriesDetail: React.FC<SeriesDetailProps> = ({
  series,
  onBack,
  onOpenLightbox,
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

    const awardText = currentLang === 'fa' && badge.awardFa ? badge.awardFa : badge.award;
    return (
      <a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        title={`${badge.name}: ${awardText}`}
        className={`group flex flex-col items-center justify-center w-28 h-16 sm:w-36 sm:h-20 p-2 bg-white hover:bg-stone-50 border border-stone-200/90 hover:border-amber-600 rounded-xl shadow-xs transition-all duration-300 hover:scale-103 cursor-pointer ${
          alignment === 'left' ? 'sm:self-start' : alignment === 'right' ? 'sm:self-end' : ''
        }`}
      >
        <img
          src={`${badge.badgeImage}?v=2`}
          alt={badge.name}
          className="max-h-9 sm:max-h-12 max-w-full object-contain filter group-hover:brightness-105"
        />
        <span className="text-[10px] text-stone-600 group-hover:text-amber-800 font-sans font-medium tracking-tight truncate w-full text-center mt-1 flex items-center justify-center gap-1">
          <span>{badge.year}</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
        </span>
      </a>
    );
  };

  const firstPhoto = series.photos[0];
  const subsequentPhotos = series.photos.slice(1);
  const isRtl = currentLang === 'fa';

  return (
    <div className="py-6 sm:py-10 md:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-6 sm:mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-stone-100 text-stone-800 hover:text-stone-950 border border-stone-200/90 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-2xs cursor-pointer"
        >
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>
            {currentLang === 'de'
              ? 'Zurück zur Übersicht'
              : currentLang === 'fa'
              ? 'بازگشت به نمای کلی'
              : 'Back to Overview'}
          </span>
        </button>
      </div>

      {/* STRICT CLIENT SEQUENCE: 1. HEADLINE -> 2. TEXT -> 3. PHOTO */}
      <section className="space-y-6">
        
        {/* 1. HEADLINE */}
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            {currentLang === 'de'
              ? series.subtitleDe
              : currentLang === 'fa'
              ? series.subtitleFa
              : series.subtitleEn}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 mt-2 leading-tight font-bold">
            {currentLang === 'de'
              ? series.titleDe
              : currentLang === 'fa'
              ? series.titleFa
              : series.titleEn}
          </h1>
        </div>

        {/* 2. TEXT (Description & Personal Dedication) */}
        <div className="bg-white border border-stone-200 rounded p-6 sm:p-8 space-y-4">
          <p className="text-stone-700 leading-relaxed text-base sm:text-lg font-light">
            {currentLang === 'de'
              ? series.descriptionDe
              : currentLang === 'fa'
              ? series.descriptionFa
              : series.descriptionEn}
          </p>

          {(series.personalNoteDe || series.personalNoteFa) && (
            <div className="pt-3 border-t border-stone-100 text-sm text-stone-700 italic font-serif">
              {currentLang === 'de'
                ? series.personalNoteDe
                : currentLang === 'fa'
                ? series.personalNoteFa
                : series.personalNoteEn}
            </div>
          )}

          <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-stone-600" />
            <span>
              {currentLang === 'de'
                ? 'Urheberschaft: Schahrsad Shahmirzadi (SchirZan)'
                : currentLang === 'fa'
                ? 'مالکیت اثر: شهزاد شاهمیرزادی (شیرزن)'
                : 'Copyright: Schahrsad Shahmirzadi (SchirZan)'}
            </span>
          </div>
        </div>

        {/* 3. PHOTO SECTION */}
        <div className="pt-6 space-y-16">
          
          {/* PHOTO 1: SURROUNDED BY ALL AWARDS MATCHING HER EMAIL MOCKUP */}
          <div className="space-y-4 max-w-xl mx-auto">
            <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
              <span className="uppercase tracking-wider text-amber-800 font-bold">
                {currentLang === 'de'
                  ? 'Hauptwerk / Bild 01 (Prämiert)'
                  : currentLang === 'fa'
                  ? 'اثر اصلی / تصویر ۰۱ (برنده جوایز)'
                  : 'Lead Work / Image 01 (Awarded)'}
              </span>
              <span>
                1 / {series.photos.length}
              </span>
            </div>

            {/* TOP: AMP ALWAYS TOP-LEFT */}
            <div className="w-full flex justify-start">
              {renderBadgeItem(ampBadge, 'left')}
            </div>

            {/* PHOTO 1 CONTAINER */}
            <div
              onClick={() => onOpenLightbox(series.photos, 0)}
              className="group/first relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-md cursor-pointer"
            >
              <img
                src={firstPhoto.src}
                alt={firstPhoto.alt}
                className="w-full h-auto max-h-[620px] object-contain mx-auto transition-transform duration-500 group-hover/first:scale-[1.01]"
              />

              <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover/first:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 bg-white/95 rounded-full shadow-lg text-stone-900">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>

              <div className="absolute bottom-2.5 right-3 text-[10px] tracking-wider text-white/80 font-serif pointer-events-none select-none drop-shadow-md bg-stone-900/30 px-2 py-0.5 rounded backdrop-blur-xs">
                © SchirZan
              </div>
            </div>

            {/* BOTTOM ROW: PERSPA (left), BIFA (center if present), IPA (right) */}
            <div className="w-full pt-2 flex items-center justify-between flex-wrap gap-2.5 sm:gap-3">
              <div>{renderBadgeItem(perspaBadge, 'left')}</div>
              {bifaBadge && (
                <div className="flex-1 flex justify-center">
                  {renderBadgeItem(bifaBadge, 'center')}
                </div>
              )}
              <div className="ml-auto">{renderBadgeItem(ipaBadge, 'right')}</div>
            </div>

            {(firstPhoto.captionDe || firstPhoto.captionFa) && (
              <p className="text-center text-xs text-stone-600 font-sans tracking-wide pt-2 font-medium">
                {currentLang === 'de'
                  ? firstPhoto.captionDe
                  : currentLang === 'fa'
                  ? firstPhoto.captionFa
                  : firstPhoto.captionEn}
              </p>
            )}
          </div>

          {/* SUBSEQUENT PHOTOS: CLEAN, UNINTERRUPTED, STRICTLY NO BADGES (as requested!) */}
          {subsequentPhotos.map((photo, index) => (
            <div key={photo.id} className="space-y-3 pt-6 border-t border-stone-200">
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span className="font-semibold text-amber-800">
                  {currentLang === 'de'
                    ? `Bild 0${index + 2}`
                    : currentLang === 'fa'
                    ? `تصویر ۰${index + 2}`
                    : `Image 0${index + 2}`}
                </span>
                <span>
                  {index + 2} / {series.photos.length}
                </span>
              </div>

              <div
                onClick={() => onOpenLightbox(series.photos, index + 1)}
                className="group/photo relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-md max-w-xl mx-auto cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto max-h-[620px] object-contain mx-auto transition-transform duration-500 group-hover/photo:scale-[1.01]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 bg-white/95 rounded-full shadow-lg text-stone-900">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                <div className="absolute bottom-2.5 right-3 text-[10px] tracking-wider text-white/80 font-serif pointer-events-none select-none drop-shadow-md bg-stone-900/30 px-2 py-0.5 rounded backdrop-blur-xs">
                  © SchirZan
                </div>
              </div>

              {(photo.captionDe || photo.captionFa) && (
                <p className="text-center text-xs text-stone-600 font-sans tracking-wide pt-2 font-medium">
                  {currentLang === 'de'
                    ? photo.captionDe
                    : currentLang === 'fa'
                    ? photo.captionFa
                    : photo.captionEn}
                </p>
              )}
            </div>
          ))}

        </div>

      </section>

      {/* Bottom Back Button */}
      <div className="mt-16 pt-8 border-t border-stone-200 flex justify-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-amber-800 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-colors shadow-xs cursor-pointer"
        >
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>
            {currentLang === 'de'
              ? 'Zurück zur Übersicht'
              : currentLang === 'fa'
              ? 'بازگشت به نمای کلی'
              : 'Back to Overview'}
          </span>
        </button>
      </div>
    </div>
  );
};
