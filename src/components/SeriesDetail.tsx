import React, { useEffect } from 'react';
import type { PhotoSeries, AwardBadge, Language } from '../data/photographyData';
import { ExternalLink, ShieldCheck, Maximize2, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { resolveAsset } from '../utils/resolveAsset';

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
  // ESC key to close modal and body scroll lock
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onBack]);

  // Badges for Image 1:
  // AMP strictly top-right (höchste Auszeichnung in Blau), GL strictly top-left if present
  const badges = series.badges || [];
  const ampBadge = badges.find(b => b.name.includes('AMP') || b.id.includes('amp') || b.position === 'top-right');
  const glBadge = badges.find(b => b.name.includes('Global Lens') || b.id.includes('globallens') || (b.position === 'top-left' && b !== ampBadge));
  const ipaBadge = badges.find(b => b.position === 'bottom-right' || b.name.includes('IPA'));
  const otherBadges = badges.filter(b => b !== ampBadge && b !== glBadge && b !== ipaBadge);
  const perspaBadge = otherBadges.find(b => b.name.includes('Perspective') || b.id.includes('perspa')) || otherBadges[0] || null;
  const bifaBadge = otherBadges.find(b => b !== perspaBadge) || null;

  const renderBadgeItem = (badge: AwardBadge | null | undefined) => {
    if (!badge) return null;

    const awardText = currentLang === 'fa' && badge.awardFa ? badge.awardFa : badge.award;
    return (
      <a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        title={`${badge.name}: ${awardText}`}
        className="group flex flex-col items-center justify-center w-full h-20 sm:h-24 p-2 sm:p-2.5 bg-white hover:bg-stone-50 border border-stone-200/90 hover:border-amber-600 rounded-xl shadow-xs transition-all duration-300 hover:scale-103 cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${resolveAsset(badge.badgeImage)}?v=2`}
          alt={badge.name}
          className="max-h-11 sm:max-h-15 max-w-full object-contain filter group-hover:brightness-105"
        />
        <span className="text-[10.5px] sm:text-xs text-stone-600 group-hover:text-amber-800 font-sans font-medium tracking-tight truncate w-full text-center mt-1 flex items-center justify-center gap-1">
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
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/75 backdrop-blur-md p-2 sm:p-4 md:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onBack}
    >
      {/* Die darüber liegende Kachel: Onepager im Hintergrund bleibt voll erhalten */}
      <div
        className="relative bg-[#faf8f5] w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl border border-stone-300 shadow-2xl overflow-hidden text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header: Serie, Werkanzahl & Schließen-Button */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 sm:px-8 py-3.5 border-b border-stone-200 flex items-center justify-between gap-3 shadow-2xs">
          <div className="min-w-0 pr-2">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block truncate">
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
            <h2 className="text-base sm:text-xl font-serif text-stone-900 font-bold truncate">
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
                : series.titleEn}{' '}
              <span className="text-stone-500 font-sans font-normal text-xs sm:text-sm">
                · {series.photos.length}{' '}
                {currentLang === 'de'
                  ? 'Werke'
                  : currentLang === 'fa'
                  ? 'اثر'
                  : currentLang === 'fr'
                  ? 'Œuvres'
                  : currentLang === 'it'
                  ? 'Opere'
                  : currentLang === 'tr'
                  ? 'Eser'
                  : 'Works'}
              </span>
            </h2>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 hover:text-stone-950 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer shrink-0"
            aria-label={currentLang === 'de' ? 'Zurück' : currentLang === 'fa' ? 'بازگشت' : currentLang === 'fr' ? 'Retour' : currentLang === 'it' ? 'Indietro' : currentLang === 'tr' ? 'Geri' : 'Back'}
          >
            <span>
              {currentLang === 'de'
                ? 'Zurück'
                : currentLang === 'fa'
                ? 'بازگشت'
                : currentLang === 'fr'
                ? 'Retour'
                : currentLang === 'it'
                ? 'Indietro'
                : currentLang === 'tr'
                ? 'Geri'
                : 'Back'}
            </span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content inside the Kachel */}
        <div className="overflow-y-auto px-4 sm:px-8 md:px-10 py-6 sm:py-8 space-y-8 flex-1">
          
          {/* 1. HEADLINE & SUBTITLE */}
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-900 mt-1 leading-tight font-bold">
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
            </h1>
          </div>

          {/* 2. TEXT (Description & Personal Dedication) */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-7 space-y-4 shadow-xs">
            <p className="text-stone-800 leading-relaxed text-sm sm:text-base font-normal">
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

            {(series.personalNoteDe || series.personalNoteFa || series.personalNoteEn || series.personalNoteFr || series.personalNoteIt || series.personalNoteTr) && (
              <div className="pt-3 border-t border-stone-100 text-sm text-stone-700 italic font-serif">
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

            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-stone-600" />
              <span>
                {currentLang === 'de'
                  ? 'Urheberschaft: Schahrsad Shahmirzadi · SchirZan'
                  : currentLang === 'fa'
                  ? 'مالکیت اثر: شهزاد شاهمیرزادی · شیرزن'
                  : currentLang === 'fr'
                  ? 'Droits d’auteur : Schahrsad Shahmirzadi · SchirZan'
                  : currentLang === 'it'
                  ? 'Diritti d’autore: Schahrsad Shahmirzadi · SchirZan'
                  : currentLang === 'tr'
                  ? 'Telif Hakkı: Schahrsad Shahmirzadi · SchirZan'
                  : 'Copyright: Schahrsad Shahmirzadi · SchirZan'}
              </span>
            </div>
          </div>

          {/* 3. PHOTO SECTION */}
          <div className="pt-2 space-y-14">
            
            {/* PHOTO 1: SURROUNDED BY ALL AWARDS MATCHING HER EMAIL MOCKUP */}
            <div className="space-y-4 max-w-2xl sm:max-w-3xl mx-auto">
              <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                <span className="uppercase tracking-wider text-amber-800 font-bold">
                  {currentLang === 'de'
                    ? 'Hauptwerk · Bild 01 · Prämiert'
                    : currentLang === 'fa'
                    ? 'اثر اصلی · تصویر ۰۱ · برنده جوایز'
                    : currentLang === 'fr'
                    ? 'Œuvre principale · Image 01 · Primée'
                    : currentLang === 'it'
                    ? 'Opera principale · Immagine 01 · Premiata'
                    : currentLang === 'tr'
                    ? 'Ana Eser · Görsel 01 · Ödüllü'
                    : 'Lead Work · Image 01 · Awarded'}
                </span>
                <span>
                  1 / {series.photos.length}
                </span>
              </div>

              {/* TOP ROW: Global Lens (top-left) & AMP (strictly top-right in blau: höchste Auszeichnung) */}
              {(ampBadge || glBadge) && (
                <div className="w-full flex items-center justify-between mb-2 gap-2">
                  <div className="w-28 sm:w-36 flex justify-start">
                    {renderBadgeItem(glBadge)}
                  </div>
                  <div className="w-28 sm:w-36 flex justify-end">
                    {renderBadgeItem(ampBadge)}
                  </div>
                </div>
              )}

              {/* PHOTO 1 CONTAINER - Clean image, NO BADGES OVERLAYING THE ARTWORK */}
              <div
                onClick={() => onOpenLightbox(series.photos, 0)}
                className="group/first relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-md cursor-pointer w-full aspect-[3/4] flex items-center justify-center select-none"
              >
                <img
                  src={resolveAsset(firstPhoto.src)}
                  alt={firstPhoto.alt}
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/first:scale-105 select-none protected-art"
                />

                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover/first:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="p-3 bg-white/95 rounded-full shadow-lg text-stone-900">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                <div className="absolute bottom-2.5 right-3 text-[10px] tracking-wider text-white/95 font-serif pointer-events-none select-none drop-shadow-md bg-stone-900/50 px-2 py-0.5 rounded backdrop-blur-xs shadow-xs z-10">
                  SchirZan | Schahrsad Shahmirzadi
                </div>
              </div>

              {/* BOTTOM ROW: Equal Proportion Badges (PERSPA / BIFA / IPA) */}
              <div className={`w-full pt-2 grid ${bifaBadge ? 'grid-cols-3' : 'grid-cols-2'} gap-2 sm:gap-3 items-center`}>
                <div className="flex justify-start">
                  {renderBadgeItem(perspaBadge)}
                </div>
                {bifaBadge && (
                  <div className="flex justify-center">
                    {renderBadgeItem(bifaBadge)}
                  </div>
                )}
                <div className="flex justify-end">
                  {renderBadgeItem(ipaBadge)}
                </div>
              </div>
            </div>

            {/* SUBSEQUENT PHOTOS: EXACT MATCHING ASPECT-[3/4] UNIFORM SIZE (die Bilder unter 1) */}
            {subsequentPhotos.map((photo, index) => (
              <div key={photo.id} className="space-y-4 pt-8 border-t border-stone-200 max-w-2xl sm:max-w-3xl mx-auto">
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span className="font-semibold text-amber-800">
                    {currentLang === 'de'
                      ? `Bild 0${index + 2}`
                      : currentLang === 'fa'
                      ? `تصویر ۰${index + 2}`
                      : currentLang === 'fr'
                      ? `Image 0${index + 2}`
                      : currentLang === 'it'
                      ? `Immagine 0${index + 2}`
                      : currentLang === 'tr'
                      ? `Görsel 0${index + 2}`
                      : `Image 0${index + 2}`}
                  </span>
                  <span>
                    {index + 2} / {series.photos.length}
                  </span>
                </div>

                <div
                  onClick={() => onOpenLightbox(series.photos, index + 1)}
                  className="group/photo relative rounded-xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-md cursor-pointer w-full aspect-[3/4] flex items-center justify-center select-none"
                >
                  <img
                    src={resolveAsset(photo.src)}
                    alt={photo.alt}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105 select-none protected-art"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="p-3 bg-white/95 rounded-full shadow-lg text-stone-900">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-3 text-[10px] tracking-wider text-white/95 font-serif pointer-events-none select-none drop-shadow-md bg-stone-900/50 px-2 py-0.5 rounded backdrop-blur-xs shadow-xs z-10">
                    SchirZan | Schahrsad Shahmirzadi
                  </div>
                </div>

                {(photo.captionDe || photo.captionFa) && !photo.captionDe?.startsWith('Image ') && (
                  <div className="max-w-2xl sm:max-w-3xl mx-auto p-2.5 bg-white border border-stone-200/90 rounded-xl text-center shadow-2xs">
                    <p className="text-xs sm:text-sm text-stone-900 font-medium leading-snug">
                      {currentLang === 'de'
                        ? photo.captionDe
                        : currentLang === 'fa'
                        ? photo.captionFa
                        : photo.captionEn}
                    </p>
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* Bottom Back Button inside Kachel */}
          <div className="mt-12 pt-6 border-t border-stone-200 flex justify-center pb-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>
                {currentLang === 'de'
                  ? 'Zurück'
                  : currentLang === 'fa'
                  ? 'بازگشت'
                  : currentLang === 'fr'
                  ? 'Retour'
                  : currentLang === 'it'
                  ? 'Indietro'
                  : currentLang === 'tr'
                  ? 'Geri'
                  : 'Back'}
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
