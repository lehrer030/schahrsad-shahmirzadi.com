import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeaderIntro } from './components/HeaderIntro';
import { ArtworkCard } from './components/ArtworkCard';
import { SeriesDetail } from './components/SeriesDetail';
import { FurtherWorks } from './components/FurtherWorks';
import { Footer } from './components/Footer';
import {
  CATEGORIES,
  SOLITAIRE_SERIES_1,
  SOLITAIRE_SERIES_2,
  FURTHER_WORKS_ARCHITECTURE,
  FINE_ART_WORKS,
  SOCIAL_ENVIRONMENTAL_WORKS,
  PORTRAIT_WORKS,
  type PhotoSeries,
  type Language
} from './data/photographyData';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const [currentCategory, setCurrentCategory] = useState<
    'architecture' | 'fine-art' | 'social-environmental' | 'portraits'
  >('architecture');
  const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>(null);

  // Sync RTL / LTR direction and html lang attribute
  useEffect(() => {
    if (currentLang === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'fa');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', currentLang);
    }
  }, [currentLang]);

  const seriesMap: Record<string, PhotoSeries> = {
    [SOLITAIRE_SERIES_1.id]: SOLITAIRE_SERIES_1,
    [SOLITAIRE_SERIES_2.id]: SOLITAIRE_SERIES_2
  };

  const handleOpenSeries = (seriesId: string) => {
    setSelectedSeriesId(seriesId);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    setSelectedSeriesId(null);
  };

  const handleSelectCategory = (cat: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits') => {
    setCurrentCategory(cat);
    setSelectedSeriesId(null);
  };

  const activeSeries = selectedSeriesId ? seriesMap[selectedSeriesId] : null;
  const activeCatInfo = CATEGORIES.find(c => c.id === currentCategory);

  return (
    <div
      dir={currentLang === 'fa' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950"
    >
      {/* EXCLUSIVELY ONE UNIFIED NAVIGATION BAR */}
      <Navbar
        currentCategory={currentCategory}
        onSelectCategory={handleSelectCategory}
        currentLang={currentLang}
        onToggleLang={setCurrentLang}
        onGoHome={() => {
          setSelectedSeriesId(null);
          setCurrentCategory('architecture');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Header & Artist Intro Section */}
      <HeaderIntro currentLang={currentLang} />

      {/* Active Category Header Banner */}
      <div className="bg-[#f5f2eb] border-b border-stone-200/80 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold">
              {currentLang === 'de' ? 'Aktive Kategorie' : currentLang === 'fa' ? 'دسته‌بندی فعال' : 'Active Category'}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-stone-900 font-bold mt-0.5">
              {currentLang === 'de'
                ? activeCatInfo?.titleDe
                : currentLang === 'fa'
                ? activeCatInfo?.titleFa
                : activeCatInfo?.titleEn}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-light leading-relaxed">
            {currentLang === 'de'
              ? activeCatInfo?.descriptionDe
              : currentLang === 'fa'
              ? activeCatInfo?.descriptionFa
              : activeCatInfo?.descriptionEn}
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <main className="flex-1">
        {activeSeries ? (
          /* Dedicated Series Subpage View */
          <SeriesDetail
            series={activeSeries}
            onBack={handleBackToOverview}
            currentLang={currentLang}
          />
        ) : (
          /* Category Overview Content */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
            {currentCategory === 'architecture' && (
              <>
                {/* Intro note for architecture */}
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-xs uppercase tracking-widest text-amber-800 font-mono font-bold">
                    {currentLang === 'de'
                      ? 'Fokus Architektur'
                      : currentLang === 'fa'
                      ? 'بخش معماری'
                      : 'Architecture Focus'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mt-1 font-bold">
                    {currentLang === 'de'
                      ? 'Die Solitaire-Serien'
                      : currentLang === 'fa'
                      ? 'مجموعه‌های تک‌بنا (Solitaire)'
                      : 'The Solitaire Series'}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                    {currentLang === 'de'
                      ? 'Klicken Sie auf das jeweilige Titelbild, um die gesamte Serie in Ruhe und ohne ablenkende Auszeichnungen zu betrachten.'
                      : currentLang === 'fa'
                      ? 'برای مشاهده کامل مجموعه عکس‌ها در فضایی آرام و بدون نشان‌های جایزه بر روی تصویر کلیک فرمایید.'
                      : 'Click any cover photo to explore the complete series cleanly without distracting badges.'}
                  </p>
                </div>

                {/* Series 1: The Solitaire as Abstraction – In Harmony with Nature (7 photos) */}
                <ArtworkCard
                  series={SOLITAIRE_SERIES_1}
                  onOpenSeries={handleOpenSeries}
                  currentLang={currentLang}
                />

                {/* Series 2: The Solitaire as an Abstraction (Revised) (5 photos) */}
                <ArtworkCard
                  series={SOLITAIRE_SERIES_2}
                  onOpenSeries={handleOpenSeries}
                  currentLang={currentLang}
                />

                {/* Further Works in Architecture (Title and Badges only, NO images!) */}
                <FurtherWorks
                  works={FURTHER_WORKS_ARCHITECTURE}
                  currentLang={currentLang}
                  sectionTitleDe="Further Works (Architektur)"
                  sectionTitleEn="Further Works (Architecture)"
                  sectionTitleFa="سایر آثار معماری و جوایز بین‌المللی"
                />
              </>
            )}

            {currentCategory === 'fine-art' && (
              <FurtherWorks
                works={FINE_ART_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Fine Art – Ausgezeichnete Werkserien"
                sectionTitleEn="Fine Art – Award-Winning Series"
                sectionTitleFa="هنرهای زیبا – مجموعه‌های برنده جوایز"
              />
            )}

            {currentCategory === 'social-environmental' && (
              <FurtherWorks
                works={SOCIAL_ENVIRONMENTAL_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Social and Environmental Themes – Prämierte Werke"
                sectionTitleEn="Social and Environmental Themes – Awarded Works"
                sectionTitleFa="مضامین اجتماعی و زیست‌محیطی – آثار برگزیده"
              />
            )}

            {currentCategory === 'portraits' && (
              <FurtherWorks
                works={PORTRAIT_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Portraits &amp; Self-Portraits"
                sectionTitleEn="Portraits &amp; Self-Portraits"
                sectionTitleFa="پرتره‌ها و خودنگاره‌ها"
              />
            )}
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;
