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
}

export const FurtherWorks: React.FC<FurtherWorksProps> = ({
  works,
  currentLang,
  sectionTitleDe = 'Weitere Werke',
  sectionTitleEn = 'Further Works',
  sectionTitleFa = 'سایر آثار',
  onOpenLightbox
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

        {/* Works Grid: Responsive 1 / 2 / 3 / 4 Columns with Image Previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 w-full">
          {works.map((work, idx) => (
            <div
              key={work.id}
              className="group bg-white hover:bg-stone-50 border border-stone-200 hover:border-stone-400 rounded p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                
                {/* Photo Preview */}
                {work.previewImage && (
                  <div
                    className="relative overflow-hidden rounded mb-3 bg-stone-100 aspect-[16/10] cursor-pointer group/img"
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
                      className="w-full h-full object-cover group-hover/img:scale-102 transition-transform duration-500 ease-out select-none"
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
                    <div className="absolute inset-0 bg-stone-900/10 group-hover/img:bg-transparent transition-colors" />
                    
                    {/* Photo count indicator */}
                    {work.galleryPhotos && work.galleryPhotos.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                        <ImageIcon className="w-3 h-3 text-stone-300" />
                        <span>
                          {currentLang === 'fa'
                            ? `${work.galleryPhotos.length} تصویر`
                            : currentLang === 'de'
                            ? `${work.galleryPhotos.length} Fotos`
                            : `${work.galleryPhotos.length} Photos`}
                        </span>
                      </div>
                    )}

                    <div className="absolute top-2 right-2 bg-white/90 p-1.5 rounded opacity-0 group-hover/img:opacity-100 transition-opacity shadow-sm">
                      <Eye className="w-3.5 h-3.5 text-stone-700" />
                    </div>
                  </div>
                )}

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
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {currentLang === 'de'
                    ? work.awardsDe
                    : currentLang === 'fa'
                    ? work.awardsFa
                    : work.awardsEn}
                </p>
              </div>

              {/* Clean External link without badges */}
              {work.link && (
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-end">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <span>
                      {currentLang === 'de'
                        ? 'Wettbewerb ansehen'
                        : currentLang === 'fa'
                        ? 'مشاهده مسابقه'
                        : 'View Competition'}
                    </span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
