import React, { useState } from 'react';
import type { FurtherWork, Language, PhotoItem } from '../data/photographyData';
import { Award, ExternalLink, Image as ImageIcon, Eye, Layers } from 'lucide-react';

interface FurtherWorksProps {
  works: FurtherWork[];
  currentLang: Language;
  sectionTitleDe?: string;
  sectionTitleEn?: string;
  sectionTitleFa?: string;
  onOpenLightbox?: (photos: PhotoItem[], index: number) => void;
}

export const FurtherWorks: React.FC<FurtherWorksProps> = ({
  works,
  currentLang,
  sectionTitleDe = 'Further Works (Weitere prämierte Werke)',
  sectionTitleEn = 'Further Works (Additional Awarded Works)',
  sectionTitleFa = 'سایر آثار برگزیده و دارای افتخارات بین‌المللی',
  onOpenLightbox
}) => {
  const [showThumbnails, setShowThumbnails] = useState(false);

  // Check how many works have photos available
  const worksWithPhotosCount = works.filter(w => w.galleryPhotos && w.galleryPhotos.length > 0).length;

  return (
    <section className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-stone-200 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
              {currentLang === 'de'
                ? sectionTitleDe
                : currentLang === 'fa'
                ? sectionTitleFa
                : sectionTitleEn}
            </h3>
          </div>

          {/* Visual Gallery Mode Switcher */}
          {worksWithPhotosCount > 0 && (
            <div className="shrink-0 flex items-center gap-2 bg-white border border-stone-200/90 rounded-2xl p-1.5 shadow-2xs">
              <button
                onClick={() => setShowThumbnails(false)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  !showThumbnails
                    ? 'bg-amber-100/80 text-amber-950 font-semibold shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title={currentLang === 'de' ? 'Kompakte Übersicht' : 'Compact view'}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>
                  {currentLang === 'de'
                    ? 'Standard (Titel & Badges)'
                    : currentLang === 'fa'
                    ? 'ساختار متنی (بدون تصویر)'
                    : 'Standard (Titles & Badges)'}
                </span>
              </button>

              <button
                onClick={() => setShowThumbnails(true)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  showThumbnails
                    ? 'bg-amber-800 text-white font-semibold shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title={currentLang === 'de' ? 'Fotogalerie einblenden' : 'Show photo gallery'}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>
                  {currentLang === 'de'
                    ? `Fotogalerie (${worksWithPhotosCount} Serien)`
                    : currentLang === 'fa'
                    ? `گالری عکس‌ها (${worksWithPhotosCount} مجموعه)`
                    : `Photo Gallery (${worksWithPhotosCount} Series)`}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Works Grid: Responsive 1 / 2 / 3 / 4 Columns (Full screen width utilization!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 w-full">
          {works.map((work, idx) => (
            <div
              key={work.id}
              className="group bg-white hover:bg-stone-50/70 border border-stone-200/90 hover:border-amber-700/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-xs"
            >
              <div>
                
                {/* Optional Photo Thumbnail / Visual Preview when toggled */}
                {showThumbnails && work.previewImage && (
                  <div
                    className="relative overflow-hidden rounded-xl mb-4 bg-stone-100 aspect-[16/10] cursor-pointer group/img"
                    onClick={() => {
                      if (onOpenLightbox && work.galleryPhotos && work.galleryPhotos.length > 0) {
                        onOpenLightbox(work.galleryPhotos, 0);
                      }
                    }}
                  >
                    <img
                      src={work.previewImage}
                      alt={work.titleDe}
                      className="w-full h-full object-cover group-hover/img:scale-104 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 group-hover/img:bg-transparent transition-colors" />
                    
                    {/* Photo count indicator */}
                    {work.galleryPhotos && work.galleryPhotos.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                        <ImageIcon className="w-3 h-3 text-amber-300" />
                        <span>{work.galleryPhotos.length} Fotos</span>
                      </div>
                    )}

                    <div className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity shadow-sm">
                      <Eye className="w-3.5 h-3.5 text-stone-700" />
                    </div>
                  </div>
                )}

                {/* Number & Category */}
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-2">
                  <span className="text-amber-800 font-bold">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="truncate max-w-[200px] font-medium">
                    {currentLang === 'fa' && work.categoryFa ? work.categoryFa : work.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-serif text-stone-900 group-hover:text-amber-900 transition-colors font-bold leading-snug">
                  {currentLang === 'de'
                    ? work.titleDe
                    : currentLang === 'fa'
                    ? work.titleFa
                    : work.titleEn}
                </h4>

                {/* Awards Description */}
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {currentLang === 'de'
                    ? work.awardsDe
                    : currentLang === 'fa'
                    ? work.awardsFa
                    : work.awardsEn}
                </p>

                {/* If has gallery and in compact mode, subtle link to open photos */}
                {!showThumbnails && work.galleryPhotos && work.galleryPhotos.length > 0 && (
                  <button
                    onClick={() => onOpenLightbox && onOpenLightbox(work.galleryPhotos!, 0)}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-950 font-medium cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>
                      {currentLang === 'de'
                        ? `${work.galleryPhotos.length} Fotos ansehen`
                        : currentLang === 'fa'
                        ? `مشاهده ${work.galleryPhotos.length} عکس این اثر`
                        : `View ${work.galleryPhotos.length} photos`}
                    </span>
                  </button>
                )}
              </div>

              {/* Badges / Tags & External link */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {work.badgeNames.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1 text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md border border-stone-200 font-medium"
                    >
                      <Award className="w-2.5 h-2.5 text-amber-700" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>

                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 hover:text-amber-950 transition-colors"
                  >
                    <span>
                      {currentLang === 'de'
                        ? 'Wettbewerb'
                        : currentLang === 'fa'
                        ? 'مشاهده مسابقه'
                        : 'Competition'}
                    </span>
                    <ExternalLink className="w-3 h-3" />
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
