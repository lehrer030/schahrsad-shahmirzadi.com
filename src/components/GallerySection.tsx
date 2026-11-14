import React from 'react';
import { Play, ExternalLink, Trophy, Flame, Award, Eye, Heart } from 'lucide-react';
import type { Language, PhotoItem } from '../data/photographyData';
import { GALLERY_PAGE_DATA } from '../data/galleryData';
import { resolveAsset } from '../utils/resolveAsset';

interface GallerySectionProps {
  currentLang: Language;
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  currentLang,
  onOpenLightbox
}) => {
  const { kickboxing, running, athensGala } = GALLERY_PAGE_DATA;

  return (
    <section id="gallery" className="scroll-mt-24 pt-6 border-t border-stone-200">
      {/* Section Top Header */}
      <div className="border-b border-stone-200 pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-stone-100 text-stone-700 text-xs font-medium uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {currentLang === 'de'
                ? 'Originale WordPress-Galerie'
                : currentLang === 'fa'
                ? 'گالری اصلی وردپرس'
                : 'Original WordPress Gallery'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
            {currentLang === 'de'
              ? 'Galerie: Sport, Engagement & IPA Athen'
              : currentLang === 'fa'
              ? 'گالری: ورزش، فعالیت اجتماعی و فستیوال آتن'
              : 'Gallery: Sports, Advocacy & IPA Athens'}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 max-w-xl font-normal">
          {currentLang === 'de'
            ? 'Dokumentarische Aufnahmen, Weltmeister-Video und Impressionen der internationalen Preisverleihung.'
            : currentLang === 'fa'
            ? 'تصاویر مستند، ویدیوی قهرمانی جهان و لحظات اهدای جوایز بین‌المللی.'
            : 'Documentary photography, world champion video, and international award gala impressions.'}
        </p>
      </div>

      <div className="space-y-16 sm:space-y-24">
        {/* =========================================================================
            BLOCK 1: KICKBOXING VIDEO
           ========================================================================= */}
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left/Right Text column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>
                  {currentLang === 'de'
                    ? kickboxing.subtitleDe
                    : currentLang === 'fa'
                    ? kickboxing.subtitleFa
                    : kickboxing.subtitleEn}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                {currentLang === 'de'
                  ? kickboxing.titleDe
                  : currentLang === 'fa'
                  ? kickboxing.titleFa
                  : kickboxing.titleEn}
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {currentLang === 'de'
                  ? kickboxing.descriptionDe
                  : currentLang === 'fa'
                  ? kickboxing.descriptionFa
                  : kickboxing.descriptionEn}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={resolveAsset(kickboxing.videoSrcMp4)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-medium rounded transition-colors"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>
                    {currentLang === 'de'
                      ? 'Video in neuem Tab öffnen'
                      : currentLang === 'fa'
                      ? 'باز کردن ویدیو در تب جدید'
                      : 'Open Video in New Tab'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
                <span className="text-xs text-stone-500 font-medium">
                  {currentLang === 'de'
                    ? 'Original-Trainingsvideo · SchirZan (52 Sek.)'
                    : currentLang === 'fa'
                    ? 'ویدیوی تمرینی اصلی · شیرزن (۵۲ ثانیه)'
                    : 'Original Training Footage · SchirZan (52s)'}
                </span>
              </div>
            </div>

            {/* Video Player Column: Native HTML5 Player with the Original Extracted Footage */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-stone-950 shadow-md border border-stone-800">
                <video
                  controls
                  playsInline
                  poster={resolveAsset(kickboxing.posterImage)}
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={resolveAsset(kickboxing.videoSrcMp4)} type="video/mp4" />
                  <source src={resolveAsset(kickboxing.videoSrcMov)} type="video/quicktime" />
                  {currentLang === 'de'
                    ? 'Ihr Browser unterstützt das Video-Tag leider nicht.'
                    : 'Your browser does not support the video tag.'}
                </video>
              </div>
            </div>

          </div>

          {/* Kickboxing Photo Gallery Grid */}
          {kickboxing.photos && kickboxing.photos.length > 0 && (
            <div className="mt-10 pt-8 border-t border-stone-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span>
                    {currentLang === 'de'
                      ? 'Dokumentation & Titelkämpfe · WKU-Weltmeisterschaft'
                      : currentLang === 'fa'
                      ? 'مستندات و رقابت‌های قهرمانی · قهرمانی جهان WKU'
                      : 'Documentary & Championship Bouts · WKU World Championship'}
                  </span>
                </div>
                <span className="text-xs text-stone-500 font-medium">
                  {currentLang === 'de'
                    ? `${kickboxing.photos.length} Aufnahmen · Klicken zum Vergrößern`
                    : currentLang === 'fa'
                    ? `${kickboxing.photos.length} تصویر · برای بزرگنمایی کلیک کنید`
                    : `${kickboxing.photos.length} photographs · Click to enlarge`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {kickboxing.photos.map((photo, index) => {
                  const caption =
                    currentLang === 'de'
                      ? photo.captionDe
                      : currentLang === 'fa'
                      ? photo.captionFa
                      : photo.captionEn;

                  return (
                    <div
                      key={photo.id}
                      onClick={() => onOpenLightbox(kickboxing.photos, index)}
                      className="group relative bg-white border border-stone-200 hover:border-stone-400 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 group/img">
                        <img
                          src={resolveAsset(photo.src)}
                          alt={photo.alt}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 protected-art"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src.endsWith('.webp')) {
                              target.src = target.src.replace(/\.webp$/, '.jpg');
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm text-stone-900 rounded-full p-2.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <Eye className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {caption && (
                        <div className="p-3.5 flex-1 flex flex-col justify-between bg-white border-t border-stone-100">
                          <p className="text-xs text-stone-800 leading-relaxed font-medium">
                            {caption}
                          </p>
                          <span className="text-[11px] text-stone-400 mt-2 block">
                            {currentLang === 'de'
                              ? `Aufnahme ${index + 1} von ${kickboxing.photos.length} · Vergrößern`
                              : currentLang === 'fa'
                              ? `تصویر ${index + 1} از ${kickboxing.photos.length} · بزرگنمایی`
                              : `Photo ${index + 1} of ${kickboxing.photos.length} · Enlarge`}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>


        {/* =========================================================================
            BLOCK 2: RUNNING (MARATHON & ADVOCACY)
           ========================================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                {currentLang === 'de'
                  ? running.subtitleDe
                  : currentLang === 'fa'
                  ? running.subtitleFa
                  : running.subtitleEn}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-900">
                {currentLang === 'de'
                  ? running.titleDe
                  : currentLang === 'fa'
                  ? running.titleFa
                  : running.titleEn}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              {currentLang === 'de'
                ? running.descriptionDe
                : currentLang === 'fa'
                ? running.descriptionFa
                : running.descriptionEn}
            </p>
          </div>

          {/* Running Gallery Grid: 4 columns desktop, 2 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {running.photos.map((photo, index) => {
              const caption =
                currentLang === 'de'
                  ? photo.captionDe
                  : currentLang === 'fa'
                  ? photo.captionFa
                  : photo.captionEn;
              const badge =
                currentLang === 'de'
                  ? photo.badgeDe
                  : currentLang === 'fa'
                  ? photo.badgeFa
                  : photo.badgeEn;
              const linkText =
                currentLang === 'de'
                  ? (photo.externalLinkTextDe || 'Spendenlauf unterstützen →')
                  : currentLang === 'fa'
                  ? (photo.externalLinkTextFa || 'حمایت از کمپین حقوق بشر ←')
                  : (photo.externalLinkTextEn || 'Support the fundraising run →');

              return (
                <div
                  key={photo.id}
                  onClick={() => onOpenLightbox(running.photos, index)}
                  className={`group relative bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer ${
                    photo.externalLink ? 'border-red-300 ring-1 ring-red-100 hover:border-red-500' : 'border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 group/img">
                    {badge && (
                      <div className="absolute top-2.5 left-2.5 right-2.5 z-20 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-600/95 text-white rounded text-[11px] font-bold shadow-md tracking-wide">
                          <Heart className="w-3 h-3 fill-white" />
                          {badge}
                        </span>
                      </div>
                    )}
                    <img
                      src={resolveAsset(photo.src)}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 protected-art"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.endsWith('.webp')) {
                          target.src = target.src.replace(/\.webp$/, '.jpg');
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm text-stone-900 rounded-full p-2.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {caption && (
                    <div className="p-4 flex-1 flex flex-col justify-between bg-white border-t border-stone-100">
                      <div>
                        <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                          {caption}
                        </p>
                      </div>

                      <div className="pt-2">
                        {photo.externalLink ? (
                          <div className="mt-2 pt-2 border-t border-red-100">
                            <a
                              href={photo.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-full inline-flex items-center justify-between gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold transition-all shadow-sm hover:shadow"
                            >
                              <span className="flex items-center gap-1.5">
                                <Heart className="w-3.5 h-3.5 fill-white" />
                                {linkText}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-90" />
                            </a>
                          </div>
                        ) : (
                          <span className="text-[11px] text-stone-400 mt-2 block">
                            {currentLang === 'de'
                              ? `Aufnahme ${index + 1} von ${running.photos.length} · Vergrößern`
                              : currentLang === 'fa'
                              ? `تصویر ${index + 1} از ${running.photos.length} · بزرگنمایی`
                              : `Photo ${index + 1} of ${running.photos.length} · Enlarge`}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>


        {/* =========================================================================
            BLOCK 3: ATHENS IPA GALA 2025
           ========================================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
                <Award className="w-4 h-4 text-amber-600" />
                <span>
                  {currentLang === 'de'
                    ? athensGala.subtitleDe
                    : currentLang === 'fa'
                    ? athensGala.subtitleFa
                    : athensGala.subtitleEn}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-900">
                {currentLang === 'de'
                  ? athensGala.titleDe
                  : currentLang === 'fa'
                  ? athensGala.titleFa
                  : athensGala.titleEn}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              {currentLang === 'de'
                ? athensGala.descriptionDe
                : currentLang === 'fa'
                ? athensGala.descriptionFa
                : athensGala.descriptionEn}
            </p>
          </div>

          {/* Athens Gallery Grid: 3 columns desktop, 2 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {athensGala.photos.map((photo, index) => {
              const caption =
                currentLang === 'de'
                  ? photo.captionDe
                  : currentLang === 'fa'
                  ? photo.captionFa
                  : photo.captionEn;

              const isCertificate = photo.id === 'ipa-athens-06';
              const isPortraitPerson = photo.id === 'ipa-athens-05' || photo.id === 'ipa-athens-04';

              // Smart object positioning: ensure faces & heads are framed prominently at top
              const objectPosClass = isPortraitPerson
                ? 'object-top'
                : 'object-center';

              return (
                <div
                  key={photo.id}
                  onClick={() => onOpenLightbox(athensGala.photos, index)}
                  className={`group relative bg-white border rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer ${
                    isCertificate
                      ? 'border-amber-300/80 ring-1 ring-amber-100 hover:border-amber-500 bg-linear-to-b from-amber-50/20 to-white'
                      : 'border-stone-200 hover:border-stone-400'
                  }`}
                >
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-stone-100 group/img">
                    {/* Badge for official award / certificate */}
                    {isCertificate && (
                      <div className="absolute top-2.5 left-2.5 right-2.5 z-20 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-900/90 text-amber-100 rounded text-[11px] font-bold shadow-md tracking-wide backdrop-blur-xs">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>
                            {currentLang === 'fa'
                              ? 'گواهی و مدال رسمی مسابقه'
                              : currentLang === 'en'
                              ? 'Official Award & Medal'
                              : 'Offizielles Zertifikat & Medaille'}
                          </span>
                        </span>
                      </div>
                    )}

                    {photo.id === 'ipa-athens-05' && (
                      <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-900/85 text-white rounded text-[10px] font-mono font-medium shadow-md tracking-wider backdrop-blur-xs">
                          <Trophy className="w-3 h-3 text-amber-400" />
                          <span>IPA Gala 2025 · Athen</span>
                        </span>
                      </div>
                    )}

                    <img
                      src={resolveAsset(photo.src)}
                      alt={photo.alt}
                      loading="lazy"
                      className={`w-full h-full ${
                        isCertificate
                          ? 'object-contain p-2 sm:p-2.5 bg-[#18181b]'
                          : `object-cover ${objectPosClass}`
                      } transition-transform duration-500 group-hover:scale-105 protected-art`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.endsWith('.webp')) {
                          target.src = target.src.replace(/\.webp$/, '.jpg');
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm text-stone-900 rounded-full p-2.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {caption && (
                    <div className="p-4 flex-1 flex flex-col justify-between bg-white border-t border-stone-100">
                      <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                        {caption}
                      </p>
                      <span className="text-[11px] text-stone-400 mt-2 block">
                        {currentLang === 'de'
                          ? `Aufnahme ${index + 1} von ${athensGala.photos.length} · Vergrößern`
                          : currentLang === 'fa'
                          ? `تصویر ${index + 1} از ${athensGala.photos.length} · بزرگنمایی`
                          : `Photo ${index + 1} of ${athensGala.photos.length} · Enlarge`}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
