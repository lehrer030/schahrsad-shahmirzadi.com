import React from 'react';
import {
  PRESS_ITEMS,
  EXHIBITIONS_DATA,
  type Language
} from '../data/photographyData';
import {
  ExternalLink,
  BookOpen,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';
import { PublicationsGallery } from './PublicationsGallery';

interface PressSectionProps {
  currentLang: Language;
}

export const PressSection: React.FC<PressSectionProps> = ({ currentLang }) => {
  return (
    <div className="space-y-16 max-w-5xl mx-auto py-6 sm:py-10">
      
      {/* 1. Press Coverage */}
      <section id="press-features" className="scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="border-b border-stone-100 pb-6 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            {currentLang === 'de'
              ? 'Internationale Medienberichte'
              : currentLang === 'fa'
              ? 'بازتاب در رسانه‌های بین‌المللی'
              : 'International Media'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mt-1 font-bold">
            {currentLang === 'de'
              ? 'Press & Features'
              : currentLang === 'fa'
              ? 'مطبوعات و مصاحبه‌ها'
              : 'Press & Features'}
          </h3>
          <p className="text-sm text-stone-700 mt-2 font-normal max-w-2xl leading-relaxed">
            {currentLang === 'de'
              ? 'Internationale Berichterstattung und Rezensionen über die architektonischen Werke und Auszeichnungen von ShirZan.'
              : currentLang === 'fa'
              ? 'پوشش مطبوعاتی و نقدهای رسانه‌های تخصصی پیرامون آثار معماری و افتخارات شیرزن.'
              : 'International journalistic coverage and critical reception of ShirZan’s architectural photographs and honors.'}
          </p>
        </div>

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

      {/* 2. Ausstellungen / Exhibitions 2026 (Trieste Photo Days & Fringe, Italien) */}
      <section id="exhibitions" className="scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="border-b border-stone-100 pb-6 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold mb-1">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>
              {currentLang === 'de'
                ? 'Ausstellungen & Festivals'
                : currentLang === 'fa'
                ? 'نمایشگاه‌ها و رویدادهای بین‌المللی'
                : 'Exhibitions & Festivals'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
            {currentLang === 'de'
              ? 'Gruppenausstellungen 2026 – Trieste Photo Days'
              : currentLang === 'fa'
              ? 'نمایشگاه‌های گروهی ۲۰۲۶ – روزهای عکاسی تریست ایتالیا'
              : 'Group Exhibitions 2026 – Trieste Photo Days'}
          </h3>
          <p className="text-sm text-stone-700 mt-2 font-normal max-w-2xl leading-relaxed">
            {currentLang === 'de'
              ? 'Internationale Ausstellungsbeteiligungen beim renommierten Festival in Triest, Italien.'
              : currentLang === 'fa'
              ? 'حضور در نمایشگاه‌های بین‌المللی در فستیوال معتبر عکاسی تریست در کشور ایتالیا.'
              : 'International group exhibition showcases at the renowned photography festival in Trieste, Italy.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXHIBITIONS_DATA.map((ex) => (
            <div
              key={ex.id}
              className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/90 flex flex-col justify-between space-y-4 hover:border-amber-700/40 transition-colors"
            >
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
          ))}
        </div>
      </section>

      {/* 3. Publications, Winners E-Books, Videos & Editor's Choice */}
      <section id="publications" className="scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs relative">
        <div id="award-references" className="absolute -top-28 left-0 pointer-events-none" />
        <div className="border-b border-stone-100 pb-6 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold mb-1">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>
              {currentLang === 'de'
                ? 'Fotografie, Editor’s Choice, Videos & E-Books'
                : currentLang === 'fa'
                ? 'عکاسی، انتخاب‌های ویژه سردبیر، ویدیوها و کتاب‌ها'
                : 'Photography, Editor’s Choice, Videos & E-Books'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
            {currentLang === 'de'
              ? 'Photography, Editor’s Choice, Videos & E-Books'
              : currentLang === 'fa'
              ? 'عکاسی، برگزیدگان سردبیر، فیلم‌های مستند و کتاب‌های رسمی'
              : 'Photography, Editor’s Choice, Videos & E-Books'}
          </h3>
          <p className="text-sm text-stone-700 mt-2 font-normal max-w-2xl leading-relaxed">
            {currentLang === 'de'
              ? 'Offizielle Druckausgaben mit Hardcover ISBN, kuratierte Editor’s Choice Galerien (Global Lens & PERSPA), Spider Awards Preisträgerfilme und internationale Gewinner-Jahrbücher mit Beitexten.'
              : currentLang === 'fa'
              ? 'انتشارات رسمی چاپی با شابک، گالری‌های برگزیده سردبیر (گلوبال لنز و پرسپا)، فیلم‌های مستند جوایز اسپایدر و کتاب‌های سالانه با توضیحات کامل.'
              : 'Official print editions with hardcover ISBN, curated Editor’s Choice galleries (Global Lens & PERSPA), Spider Awards winning films, and international annual compendiums with detailed captions.'}
          </p>
        </div>

        <PublicationsGallery currentLang={currentLang} />
      </section>

    </div>
  );
};

