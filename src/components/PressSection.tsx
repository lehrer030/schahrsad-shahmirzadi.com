import React from 'react';
import {
  PRESS_ITEMS,
  EXHIBITIONS_DATA,
  PUBLICATIONS_DATA,
  type Language
} from '../data/photographyData';
import {
  ExternalLink,
  BookOpen,
  Film,
  MapPin,
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';

interface PressSectionProps {
  currentLang: Language;
}

export const PressSection: React.FC<PressSectionProps> = ({ currentLang }) => {
  return (
    <div className="space-y-16 max-w-5xl mx-auto py-6 sm:py-10">
      
      {/* 1. Press Coverage */}
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-stone-100 text-stone-900 text-xs font-semibold rounded-full border border-stone-200 transition-colors shrink-0 self-start md:self-auto shadow-2xs cursor-pointer"
                >
                  <span>{currentLang === 'fa' ? 'مطالعه مقاله' : 'Read Article'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 2. Ausstellungen / Exhibitions 2026 (Trieste Photo Days & Fringe, Italien) */}
      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
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
                    <span>{currentLang === 'fa' ? 'مشاهده اثر' : 'View Work'}</span>
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
                    <span>{currentLang === 'fa' ? 'سایت فستیوال' : 'Festival Info'}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Publications, Winners E-Books, Videos & Editor's Choice */}
      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="border-b border-stone-100 pb-6 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold mb-1">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>
              {currentLang === 'de'
                ? 'Offizielle Publikationen & Kataloge'
                : currentLang === 'fa'
                ? 'کتاب‌های سالانه و انتشارات رسمی'
                : 'Official Publications & Catalogues'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
            {currentLang === 'de'
              ? 'Editor’s Choice, Winners E-Books & Videos'
              : currentLang === 'fa'
              ? 'کتاب‌ها، ویدیوها و انتخاب‌های ویژه سردبیر'
              : 'Editor’s Choice, Winners E-Books & Videos'}
          </h3>
          <p className="text-sm text-stone-700 mt-2 font-normal max-w-2xl leading-relaxed">
            {currentLang === 'de'
              ? 'Offizielle Druckausgaben mit ISBN, digitale Preisträger-Kataloge und Videopräsentationen führender internationaler Fotowettbewerbe.'
              : currentLang === 'fa'
              ? 'کتاب‌های رسمی چاپی با شابک، کاتالوگ‌های دیجیتال برگزیدگان و ویدیوهای مستند جوایز بین‌المللی.'
              : 'Official print editions with ISBN, digital compendiums, and showcase video reels from premier international awards.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PUBLICATIONS_DATA.map((pub) => {
            const isVideo = pub.type === 'video';
            const isBook = pub.type === 'book';

            return (
              <div
                key={pub.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/90 flex flex-col justify-between hover:border-amber-700/40 transition-colors space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-800 uppercase">
                      {isVideo ? (
                        <Film className="w-3.5 h-3.5 text-amber-700" />
                      ) : isBook ? (
                        <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                      ) : (
                        <Award className="w-3.5 h-3.5 text-amber-700" />
                      )}
                      <span>{pub.publisher}</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-200/80 text-stone-700 uppercase">
                      {pub.type}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-snug">
                    {currentLang === 'de' ? pub.titleDe : currentLang === 'fa' ? pub.titleFa : pub.titleEn}
                  </h4>

                  <p className="text-xs text-amber-950 font-medium">
                    {currentLang === 'de' ? pub.subtitleDe : currentLang === 'fa' ? pub.subtitleFa : pub.subtitleEn}
                  </p>

                  {(pub.detailsDe || pub.detailsEn) && (
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {currentLang === 'de' ? pub.detailsDe : currentLang === 'fa' ? pub.detailsFa : pub.detailsEn}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-medium transition-colors shadow-2xs"
                  >
                    <span>
                      {currentLang === 'de' ? pub.linkTextDe : currentLang === 'fa' ? pub.linkTextFa : pub.linkTextEn}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

