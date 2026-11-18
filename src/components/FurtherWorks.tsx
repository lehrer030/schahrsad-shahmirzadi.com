import React from 'react';
import type { FurtherWork, Language, PhotoItem } from '../data/photographyData';
import { ExternalLink, Image as ImageIcon, Eye } from 'lucide-react';
import { resolveAsset } from '../utils/resolveAsset';

interface FurtherWorksProps {
  works: FurtherWork[];
  currentLang: Language;
  sectionTitleDe?: string;
  sectionTitleEn?: string;
  sectionTitleFa?: string;
  onOpenLightbox?: (photos: PhotoItem[], index: number) => void;
  onOpenSeries?: (seriesId: string) => void;
}

export const FurtherWorks: React.FC<FurtherWorksProps> = ({
  works,
  currentLang,
  sectionTitleDe = 'Weitere Werke',
  sectionTitleEn = 'Further Works',
  sectionTitleFa = 'سایر آثار',
  onOpenLightbox,
  onOpenSeries
}) => {
  return (
    <section className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-stone-200 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
            {currentLang === 'de'
              ? sectionTitleDe
              : currentLang === 'fa'
              ? sectionTitleFa
              : sectionTitleEn}
          </h3>
        </div>

        {/* Works Grid: Responsive 1 / 2 / 3 Columns matching AwardReferencesSection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {works.map((work, idx) => (
            <div
              key={work.id}
              className="group bg-white hover:bg-stone-50 border border-stone-200/90 hover:border-amber-700/60 rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                
                {/* Photo Preview & Badges - Clean Gallery proportions matching AwardReferencesSection */}
                {work.previewImage && (() => {
                  const badges = work.badges || [];

                  return (
                    <div className="mb-3.5">
                      <div
                        className="relative overflow-hidden rounded-xl bg-stone-900 aspect-[3/4] cursor-pointer group/img border border-stone-200/80 flex items-center justify-center select-none"
                        onClick={() => {
                          if (onOpenLightbox && work.galleryPhotos && work.galleryPhotos.length > 0) {
                            onOpenLightbox(work.galleryPhotos, 0);
                          } else if (onOpenLightbox && work.previewImage) {
                            onOpenLightbox([{
                              id: work.id,
                              src: work.previewImage,
                              alt: work.titleDe,
                              captionDe: work.titleDe,
                              captionEn: work.titleEn,
                              captionFa: work.titleFa
                            }], 0);
                          }
                        }}
                      >
                        <img
                          src={resolveAsset(work.previewImage)}
                          alt={work.titleDe}
                          draggable={false}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out select-none protected-art"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            const count = parseInt(target.dataset.fallbackCount || '0', 10);
                            target.dataset.fallbackCount = String(count + 1);
                            if (count === 0) {
                              if (target.src.endsWith('.webp')) {
                                target.src = target.src.replace(/\.webp$/, '.jpg');
                              } else if (target.src.endsWith('.jpg')) {
                                target.src = target.src.replace(/\.jpg$/, '.jpeg');
                              } else if (target.src.endsWith('.jpeg')) {
                                target.src = target.src.replace(/\.jpeg$/, '.webp');
                              }
                            } else if (count === 1 && target.src.includes('-scaled')) {
                              target.src = target.src.replace('-scaled', '');
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div className="bg-white/95 backdrop-blur-xs text-stone-900 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-mono font-semibold transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                            <Eye className="w-3.5 h-3.5 text-amber-800" />
                            <span>{currentLang === 'fa' ? 'مشاهده بزرگ‌تر' : currentLang === 'en' ? 'Enlarge' : 'Großansicht'}</span>
                          </div>
                        </div>

                        {/* Photo count indicator bottom-left */}
                        {work.galleryPhotos && work.galleryPhotos.length > 1 && (
                          <div className="absolute bottom-2.5 left-2.5 rtl:left-auto rtl:right-2.5 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 shadow-sm z-10">
                            <ImageIcon className="w-3 h-3 text-stone-300" />
                            <span>
                              {currentLang === 'fa'
                                ? `${work.galleryPhotos.length} تصویر`
                                : `${work.galleryPhotos.length} Photos`}
                            </span>
                          </div>
                        )}

                        {/* Watermark badge on image: STRICTLY BOTTOM-RIGHT per customer document */}
                        <div className="absolute bottom-2.5 right-2.5 rtl:right-auto rtl:left-2.5 text-[9px] sm:text-[9.5px] tracking-wider text-white/95 font-serif pointer-events-none select-none bg-stone-900/60 px-1.5 py-0.5 rounded backdrop-blur-xs z-10">
                          SchirZan | Schahrsad Shahmirzadi
                        </div>
                      </div>

                      {/* Award Badges: Positioned cleanly outside the photo at the margin so they don't distract */}
                      {badges.length > 0 && (
                        <div className={`mt-2.5 grid ${badges.length === 1 ? 'grid-cols-1' : badges.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2 items-center`}>
                          {badges.map((b) => (
                            <a
                              key={b.id || b.name}
                              href={b.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`${b.name}: ${b.award}`}
                              onClick={(e) => e.stopPropagation()}
                              className="group/badge flex flex-col items-center justify-center p-1.5 bg-white hover:bg-stone-50 border border-stone-200 hover:border-amber-700/60 rounded-lg transition-all w-full h-13 sm:h-14 cursor-pointer shadow-2xs hover:shadow-xs"
                            >
                              <img
                                src={resolveAsset(b.badgeImage)}
                                alt={b.name}
                                className="max-h-7 max-w-full object-contain group-hover/badge:brightness-105 transition-all"
                              />
                              <span className="text-[9.5px] text-stone-500 group-hover/badge:text-stone-800 font-sans font-medium mt-0.5 truncate max-w-full text-center">
                                {b.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Number & Category */}
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-1.5">
                  <span className="text-stone-700 font-bold">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="truncate max-w-[200px] font-medium text-stone-500">
                    {currentLang === 'fa' && work.categoryFa ? work.categoryFa : work.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-serif text-stone-900 group-hover:text-stone-700 transition-colors font-bold leading-snug">
                  {currentLang === 'de'
                    ? work.titleDe
                    : currentLang === 'fa'
                    ? work.titleFa
                    : work.titleEn}
                </h4>

                {/* Recognition / Awards Description */}
                <p className="text-xs font-mono font-medium text-amber-800 mt-1.5 leading-snug">
                  {currentLang === 'de'
                    ? work.awardsDe
                    : currentLang === 'fa'
                    ? work.awardsFa
                    : work.awardsEn}
                </p>

                {/* Rich Curatorial Description */}
                {(work.descriptionDe || work.descriptionEn) && (
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed font-normal">
                    {currentLang === 'de'
                      ? work.descriptionDe
                      : currentLang === 'fa'
                      ? (work.descriptionFa || work.descriptionEn)
                      : work.descriptionEn}
                  </p>
                )}
              </div>

              {/* Action Bar: View full photo series and official award link */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenSeries) {
                      onOpenSeries(work.id);
                    } else if (onOpenLightbox && work.galleryPhotos) {
                      onOpenLightbox(work.galleryPhotos, 0);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors cursor-pointer group/btn"
                >
                  <span className="group-hover/btn:underline">
                    {currentLang === 'fa'
                      ? `مشاهده سری کامل · ${work.galleryPhotos?.length || 1} اثر ←`
                      : currentLang === 'de'
                      ? `Serie ansehen · ${work.galleryPhotos?.length || 1} Photos →`
                      : `View Series · ${work.galleryPhotos?.length || 1} Photos →`}
                  </span>
                </button>

                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-500 hover:text-stone-900 transition-colors shrink-0"
                    title={currentLang === 'fa' ? 'مشاهده جایزه' : currentLang === 'en' ? 'View award' : 'Auszeichnung ansehen'}
                  >
                    <span>
                      {currentLang === 'de'
                        ? 'Auszeichnung ansehen'
                        : currentLang === 'fa'
                        ? 'جایزه'
                        : 'View Award'}
                    </span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
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
