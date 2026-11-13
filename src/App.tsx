import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeaderIntro } from './components/HeaderIntro';
import { CategoryTabs } from './components/CategoryTabs';
import { ArtworkCard } from './components/ArtworkCard';
import { SeriesDetail } from './components/SeriesDetail';
import { FurtherWorks } from './components/FurtherWorks';
import { Footer } from './components/Footer';
import {
  SOLITAIRE_SERIES_1,
  SOLITAIRE_SERIES_2,
  FURTHER_WORKS_ARCHITECTURE,
  FINE_ART_WORKS,
  SOCIAL_ENVIRONMENTAL_WORKS,
  PORTRAIT_WORKS,
  type PhotoSeries
} from './data/photographyData';

export function App() {
  const [currentLang, setCurrentLang] = useState<'de' | 'en'>('de');
  const [currentCategory, setCurrentCategory] = useState<
    'architecture' | 'fine-art' | 'social-environmental' | 'portraits'
  >('architecture');
  const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>(null);

  const seriesMap: Record<string, PhotoSeries> = {
    [SOLITAIRE_SERIES_1.id]: SOLITAIRE_SERIES_1,
    [SOLITAIRE_SERIES_2.id]: SOLITAIRE_SERIES_2
  };

  const handleOpenSeries = (seriesId: string) => {
    setSelectedSeriesId(seriesId);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    setSelectedSeriesId(null);
  };

  const handleSelectCategory = (cat: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits') => {
    setCurrentCategory(cat);
    setSelectedSeriesId(null);
  };

  const activeSeries = selectedSeriesId ? seriesMap[selectedSeriesId] : null;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={setCurrentLang}
        onSelectCategory={handleSelectCategory}
        onGoHome={() => {
          setSelectedSeriesId(null);
          setCurrentCategory('architecture');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Header & Artist Intro Section */}
      <HeaderIntro currentLang={currentLang} />

      {/* 4 Category Subheaders Navigation */}
      <CategoryTabs
        currentCategory={currentCategory}
        onSelectCategory={handleSelectCategory}
        currentLang={currentLang}
      />

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
          /* Category Overview Views */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
            {currentCategory === 'architecture' && (
              <>
                {/* Intro note for architecture */}
                <div className="text-center max-w-2xl mx-auto">
                  <span className="text-xs uppercase tracking-widest text-amber-500 font-mono font-medium">
                    {currentLang === 'de' ? 'Fokus Architektur' : 'Architecture Focus'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-neutral-100 mt-1">
                    {currentLang === 'de' ? 'Die Solitaire-Serien' : 'The Solitaire Series'}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {currentLang === 'de'
                      ? 'Klicken Sie auf das jeweilige Titelbild, um die gesamte Serie in Ruhe und ohne ablenkende Auszeichnungen zu betrachten.'
                      : 'Click any cover photo to explore the complete series cleanly without distracting badges.'}
                  </p>
                </div>

                {/* Series 1: The Solitaire as Abstraction – In Harmony with Nature */}
                <ArtworkCard
                  series={SOLITAIRE_SERIES_1}
                  onOpenSeries={handleOpenSeries}
                  currentLang={currentLang}
                />

                {/* Series 2: The Solitaire as an Abstraction (Revised) */}
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
                />
              </>
            )}

            {currentCategory === 'fine-art' && (
              <FurtherWorks
                works={FINE_ART_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Fine Art – Ausgezeichnete Werkserien"
                sectionTitleEn="Fine Art – Award-Winning Series"
              />
            )}

            {currentCategory === 'social-environmental' && (
              <FurtherWorks
                works={SOCIAL_ENVIRONMENTAL_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Social and Environmental Themes – Prämierte Werke"
                sectionTitleEn="Social and Environmental Themes – Awarded Works"
              />
            )}

            {currentCategory === 'portraits' && (
              <FurtherWorks
                works={PORTRAIT_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Portraits &amp; Self-Portraits"
                sectionTitleEn="Portraits &amp; Self-Portraits"
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
