import React from 'react';
import { PRESS_ITEMS, type Language } from '../data/photographyData';
import { ExternalLink, Newspaper, BookOpen, Film } from 'lucide-react';

interface PressSectionProps {
  currentLang: Language;
}

export const PressSection: React.FC<PressSectionProps> = ({ currentLang }) => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 sm:py-10">
      
      {/* Press Coverage */}
      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
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
              ? 'Internationale Berichterstattung und Rezensionen über die architektonischen Werke und Auszeichnungen von SchirZan.'
              : currentLang === 'fa'
              ? 'پوشش مطبوعاتی و نقدهای رسانه‌های تخصصی پیرامون آثار معماری و افتخارات شیرزن.'
              : 'International journalistic coverage and critical reception of SchirZan’s architectural photographs and honors.'}
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-stone-100 text-stone-900 text-xs font-semibold rounded-full border border-stone-200 transition-colors shrink-0 self-start md:self-auto shadow-2xs"
                >
                  <span>{currentLang === 'fa' ? 'مطالعه مقاله' : 'Read Article'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Publications, Videos & eBooks from WordPress */}
      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="border-b border-stone-100 pb-6 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            {currentLang === 'de'
              ? 'Offizielle Publikationen'
              : currentLang === 'fa'
              ? 'انتشارات رسمی و ویدیوها'
              : 'Official Publications'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mt-1 font-bold">
            {currentLang === 'de'
              ? 'Editor’s Choice, Videos & E-Books'
              : currentLang === 'fa'
              ? 'انتخاب سردبیر، کتاب‌ها و ویدیوهای برگزیده'
              : 'Editor’s Choice, Videos & E-Books'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200/80 space-y-2">
            <Newspaper className="w-5 h-5 text-amber-800" />
            <h5 className="font-serif font-bold text-stone-900 text-sm">
              Global Lens &amp; PERSPA
            </h5>
            <p className="text-xs text-stone-700 font-normal leading-relaxed">
              {currentLang === 'de'
                ? 'Mehrfache Aufnahme in die offizielle Editor’s Choice Galerie der führenden Architekturwettbewerbe.'
                : currentLang === 'fa'
                ? 'انتخاب مکرر در گالری برگزیدگان سردبیر مسابقات بین‌المللی معماری.'
                : 'Multiple selections in official Editor’s Choice galleries across premier architecture awards.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200/80 space-y-2">
            <BookOpen className="w-5 h-5 text-amber-800" />
            <h5 className="font-serif font-bold text-stone-900 text-sm">
              Official Winners E-Books
            </h5>
            <p className="text-xs text-stone-700 font-normal leading-relaxed">
              {currentLang === 'de'
                ? 'Katalogpublikationen im Rahmen der Black & White Spider Awards und IPA Annual Compendium.'
                : currentLang === 'fa'
                ? 'انتشار در کتاب سالانه عکاسی سیاه و سفید اسپایدر اواردز و IPA.'
                : 'Featured in the annual commemorative hardcover and digital catalogues.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#faf8f5] border border-stone-200/80 space-y-2">
            <Film className="w-5 h-5 text-amber-800" />
            <h5 className="font-serif font-bold text-stone-900 text-sm">
              Official Showcase Videos
            </h5>
            <p className="text-xs text-stone-700 font-normal leading-relaxed">
              {currentLang === 'de'
                ? 'Internationale Videopräsentationen der 20. Annual Architecture Photography Exhibition.'
                : currentLang === 'fa'
                ? 'پخش در ویدیوهای رسمی نمایشگاه بیستمین دوره عکاسی معماری.'
                : 'Showcase reels of the 20th Annual Architecture Photography Winners.'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

