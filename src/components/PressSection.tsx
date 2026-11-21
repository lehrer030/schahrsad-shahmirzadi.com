import React from 'react';
import {
  PRESS_ITEMS,
  EXHIBITIONS_DATA,
  type Language,
  type PhotoItem
} from '../data/photographyData';
import {
  ExternalLink,
  MapPin,
  Calendar,
  Sparkles,
  Eye
} from 'lucide-react';
import { PublicationsGallery } from './PublicationsGallery';
import { resolveAsset } from '../utils/resolveAsset';
import { SectionHeader } from './SectionHeader';

const EXHIBITION_ARTWORK_IMAGES: Record<string, string> = {
  'trieste-photo-days-2026': '/images/2026_07_In-Between-Spaces-scaled.jpg',
  'trieste-photo-fringe-2026': '/images/2026_10_amp-2026-elegance-structure-bw-01-scaled.webp'
};

interface PressSectionProps {
  currentLang: Language;
  onOpenLightbox?: (photos: PhotoItem[], index: number) => void;
}

export const PressSection: React.FC<PressSectionProps> = ({ currentLang, onOpenLightbox }) => {
  return (
    <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
      
      {/* 1. Ausstellungen / Exhibitions 2026 (Trieste Photo Days & Fringe, Italien) */}
      <section id="exhibitions" className="scroll-mt-16 lg:scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <SectionHeader
          num="03"
          shortTitleDe="Ausstellungen"
          shortTitleEn="Exhibitions"
          shortTitleFa="نمایشگاه‌ها"
          fullTitleDe="Ausstellungen – Gruppenausstellungen 2026 (Trieste Photo Days)"
          fullTitleEn="Exhibitions – Group Exhibitions 2026 (Trieste Photo Days)"
          fullTitleFa="نمایشگاه‌ها – نمایشگاه‌های گروهی ۲۰۲۶ (روزهای عکاسی تریست ایتالیا)"
          descDe="Internationale Ausstellungsbeteiligungen beim renommierten Festival in Triest, Italien (Sala Veruda & Photo Fringe)."
          descEn="International group exhibition showcases at the renowned photography festival in Trieste, Italy."
          descFa="حضور در نمایشگاه‌های بین‌المللی در فستیوال معتبر عکاسی تریست در کشور ایتالیا."
          currentLang={currentLang}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXHIBITIONS_DATA.map((ex) => {
            const exImg = EXHIBITION_ARTWORK_IMAGES[ex.id];
            return (
              <div
                key={ex.id}
                className="rounded-2xl bg-[#faf8f5] border border-stone-200/90 overflow-hidden flex flex-col justify-between hover:border-amber-700/40 transition-colors group"
              >
                {exImg && (
                  <div
                    onClick={() => {
                      if (onOpenLightbox) {
                        onOpenLightbox([{
                          id: ex.id,
                          src: exImg,
                          alt: ex.featuredWorkDe,
                          captionDe: `${ex.featuredWorkDe} — ${ex.titleDe} (${ex.venue})`,
                          captionEn: `${ex.featuredWorkEn} — ${ex.titleEn} (${ex.venue})`,
                          captionFa: `${ex.featuredWorkFa} — ${ex.titleFa} (${ex.venue})`,
                        }], 0);
                      } else if (ex.link) {
                        window.open(ex.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="relative aspect-[16/10] overflow-hidden bg-stone-900 group/img flex items-center justify-center cursor-pointer select-none"
                    title={currentLang === 'de' ? 'Klicken für Vollbild-Ansicht' : 'Click for full view'}
                  >
                    <img
                      src={resolveAsset(exImg)}
                      alt={ex.featuredWorkDe}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 protected-art"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-xs text-stone-900 rounded-full p-2.5 shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4 text-stone-800" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-800 font-bold uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>
                        {currentLang === 'de' ? ex.festivalDe : currentLang === 'fa' ? ex.festivalFa : ex.festivalEn}
                      </span>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                      {currentLang === 'de' ? ex.titleDe : currentLang === 'fa' ? ex.titleFa : ex.titleEn}
                    </h4>

                    <div className="text-xs text-stone-600 space-y-1.5 pt-1">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-stone-800">{ex.venue}</strong> · {ex.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-stone-500 shrink-0" />
                        <span>
                          {currentLang === 'de' ? ex.datesDe : currentLang === 'fa' ? ex.datesFa : ex.datesEn}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-stone-200/80 text-xs text-stone-800">
                      <span className="font-semibold text-stone-900 block mb-0.5">
                        {currentLang === 'de' ? 'Ausgestelltes Werk:' : currentLang === 'fa' ? 'اثر به نمایش درآمده:' : 'Featured Artwork:'}
                      </span>
                      <span className="text-amber-900 font-medium font-serif">
                        {currentLang === 'de' ? ex.featuredWorkDe : currentLang === 'fa' ? ex.featuredWorkFa : ex.featuredWorkEn}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {ex.link && (
                      <a
                        href={ex.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors"
                      >
                        <span>{currentLang === 'fa' ? 'مشاهده اثر' : currentLang === 'de' ? 'Werk ansehen' : 'View Work'}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                      </a>
                    )}
                    {ex.festivalLink && (
                      <a
                        href={ex.festivalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-stone-100 text-stone-700 rounded-lg text-xs font-medium border border-stone-200 transition-colors"
                      >
                        <span>{currentLang === 'fa' ? 'سایت فستیوال' : currentLang === 'de' ? 'Festival-Webseite' : 'Festival Info'}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Publications, Winners E-Books, Videos & Editor's Choice */}
      <section id="publications" className="scroll-mt-16 lg:scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <SectionHeader
          num="04"
          shortTitleDe="Publikationen"
          shortTitleEn="Publications"
          shortTitleFa="نشریات"
          fullTitleDe="Publikationen – Photography, Editor's Choice, Videos & E-Books"
          fullTitleEn="Publications – Photography, Editor's Choice, Videos & E-Books"
          fullTitleFa="نشریات – عکاسی، انتخاب‌های ویژه سردبیر، ویدیوها و کتاب‌ها"
          descDe="Offizielle Druckausgaben mit Hardcover ISBN, kuratierte Preisträger-Galerien (Global Lens 3. Platz & PERSPA Editor’s Choice), Spider Awards Preisträgerfilme und internationale Gewinner-Jahrbücher mit Beitexten."
          descEn="Official print editions with hardcover ISBN, curated winners galleries (Global Lens 3rd Place & PERSPA Editor’s Choice), Spider Awards winning films, and international annual compendiums."
          descFa="انتشارات رسمی چاپی با شابک، گالری‌های برگزیده سردبیر، فیلم‌های مستند جوایز اسپایدر و کتاب‌های سالانه رسمی."
          currentLang={currentLang}
        />

        <PublicationsGallery currentLang={currentLang} onOpenLightbox={onOpenLightbox} />
      </section>

      {/* 3. Press Coverage & Features */}
      <section id="press-features" className="scroll-mt-16 lg:scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <SectionHeader
          num="05"
          shortTitleDe="Presse"
          shortTitleEn="Press"
          shortTitleFa="مطبوعات"
          fullTitleDe="Presse – Internationale Medienberichte & Rezensionen"
          fullTitleEn="Press – Media Coverage & Features"
          fullTitleFa="مطبوعات – بازتاب در رسانه‌های بین‌المللی و نقدها"
          descDe="Internationale Berichterstattung und Rezensionen über die architektonischen Werke und Auszeichnungen von SchirZan."
          descEn="International journalistic coverage and critical reception of SchirZan’s architectural photographs and honors."
          descFa="پوشش مطبوعاتی و نقدهای رسانه‌های تخصصی پیرامون آثار معماری و افتخارات شیرزن."
          currentLang={currentLang}
        />

        <div className="grid grid-cols-1 gap-6">
          {PRESS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/80 hover:border-amber-700/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
                  <span className="text-amber-800 font-bold uppercase">{item.outlet}</span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 font-normal leading-relaxed">
                  {currentLang === 'de'
                    ? item.descriptionDe
                    : currentLang === 'fa'
                    ? item.descriptionFa
                    : item.descriptionEn}
                </p>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-stone-100 text-stone-900 text-xs font-semibold rounded-full border border-stone-200 transition-colors shrink-0 self-start md:self-auto shadow-2xs cursor-pointer"
                >
                  <span>{currentLang === 'fa' ? 'مطالعه مقاله' : currentLang === 'de' ? 'Artikel lesen' : 'Read Article'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      </div>
  );
};

