import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeaderIntro } from './components/HeaderIntro';
import { ArtworkCard } from './components/ArtworkCard';
import { SeriesDetail } from './components/SeriesDetail';
import { FurtherWorks } from './components/FurtherWorks';
import { ArtistVita } from './components/ArtistVita';
import { PressSection } from './components/PressSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { LegalModal } from './components/LegalModal';
import { ContactModal } from './components/ContactModal';
import { CookieBanner } from './components/CookieBanner';
import { BackToTop } from './components/BackToTop';
import {
  CATEGORIES,
  SOLITAIRE_SERIES_1,
  SOLITAIRE_SERIES_2,
  FURTHER_WORKS_ARCHITECTURE,
  FINE_ART_WORKS,
  SOCIAL_ENVIRONMENTAL_WORKS,
  PORTRAIT_WORKS,
  type PhotoSeries,
  type PhotoItem,
  type Language
} from './data/photographyData';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const [currentCategory, setCurrentCategory] = useState<
    'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press'
  >('architecture');
  const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>(null);

  // Modern Must-Have Features State
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    photos: PhotoItem[];
    currentIndex: number;
  }>({
    isOpen: false,
    photos: [],
    currentIndex: 0
  });

  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: 'impressum' | 'datenschutz';
  }>({
    isOpen: false,
    type: 'impressum'
  });

  const [contactModalOpen, setContactModalOpen] = useState(false);

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

  const handleSelectCategory = (cat: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press') => {
    setCurrentCategory(cat);
    setSelectedSeriesId(null);
  };

  const handleOpenLightbox = (photos: PhotoItem[], index: number) => {
    setLightboxState({
      isOpen: true,
      photos,
      currentIndex: index
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (index: number) => {
    setLightboxState(prev => ({ ...prev, currentIndex: index }));
  };

  const handleOpenLegal = (type: 'impressum' | 'datenschutz') => {
    setLegalModal({
      isOpen: true,
      type
    });
  };

  const handleCloseLegal = () => {
    setLegalModal(prev => ({ ...prev, isOpen: false }));
  };

  const activeSeries = selectedSeriesId ? seriesMap[selectedSeriesId] : null;
  const activeCatInfo = CATEGORIES.find(c => c.id === currentCategory);

  return (
    <div
      dir={currentLang === 'fa' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950 w-full"
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
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Header & Artist Intro Section */}
      <HeaderIntro currentLang={currentLang} />

      {/* Active Category Header Banner */}
      <div className="bg-[#f5f2eb] border-b border-stone-200/80 py-5 sm:py-6 w-full">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold">
              {currentLang === 'de' ? 'Ausgewählter Bereich' : currentLang === 'fa' ? 'بخش انتخابی' : 'Selected Section'}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif text-stone-900 font-bold mt-0.5">
              {currentLang === 'de'
                ? activeCatInfo?.titleDe
                : currentLang === 'fa'
                ? activeCatInfo?.titleFa
                : activeCatInfo?.titleEn}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl font-light leading-relaxed">
            {currentLang === 'de'
              ? activeCatInfo?.descriptionDe
              : currentLang === 'fa'
              ? activeCatInfo?.descriptionFa
              : activeCatInfo?.descriptionEn}
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <main className="flex-1 w-full">
        {activeSeries ? (
          /* Dedicated Series Subpage View */
          <SeriesDetail
            series={activeSeries}
            onBack={handleBackToOverview}
            onOpenLightbox={handleOpenLightbox}
            currentLang={currentLang}
          />
        ) : (
          /* Category Overview Content (Responsive for all screen sizes) */
          <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 space-y-12">
            
            {/* 1. ARCHITECTURE (PRIMARY FOCUS) */}
            {currentCategory === 'architecture' && (
              <>
                {/* Intro note for architecture */}
                <div className="text-center max-w-3xl mx-auto">
                  <span className="text-xs uppercase tracking-widest text-amber-800 font-mono font-bold">
                    {currentLang === 'de'
                      ? 'Fokus Architektur'
                      : currentLang === 'fa'
                      ? 'بخش معماری'
                      : 'Architecture Focus'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 mt-1 font-bold">
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
                  onOpenLightbox={handleOpenLightbox}
                  currentLang={currentLang}
                />

                {/* Series 2: The Solitaire as an Abstraction (Revised) (5 photos) */}
                <ArtworkCard
                  series={SOLITAIRE_SERIES_2}
                  onOpenSeries={handleOpenSeries}
                  onOpenLightbox={handleOpenLightbox}
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

            {/* 2. FINE ART */}
            {currentCategory === 'fine-art' && (
              <FurtherWorks
                works={FINE_ART_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Fine Art – Ausgezeichnete Werkserien"
                sectionTitleEn="Fine Art – Award-Winning Series"
                sectionTitleFa="هنرهای زیبا – مجموعه‌های برنده جوایز"
              />
            )}

            {/* 3. SOCIAL & ENVIRONMENTAL THEMES */}
            {currentCategory === 'social-environmental' && (
              <FurtherWorks
                works={SOCIAL_ENVIRONMENTAL_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Social and Environmental Themes – Prämierte Werke"
                sectionTitleEn="Social and Environmental Themes – Awarded Works"
                sectionTitleFa="مضامین اجتماعی و زیست‌محیطی – آثار برگزیده"
              />
            )}

            {/* 4. PORTRAITS */}
            {currentCategory === 'portraits' && (
              <FurtherWorks
                works={PORTRAIT_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Portraits &amp; Self-Portraits"
                sectionTitleEn="Portraits &amp; Self-Portraits"
                sectionTitleFa="پرتره‌ها و خودنگاره‌ها"
              />
            )}

            {/* 5. PRESERVED WORDPRESS CONTENT: BIOGRAPHY & COMMITMENT */}
            {currentCategory === 'biography' && (
              <ArtistVita currentLang={currentLang} />
            )}

            {/* 6. PRESERVED WORDPRESS CONTENT: PRESS & MEDIA */}
            {currentCategory === 'press' && (
              <PressSection currentLang={currentLang} />
            )}

          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        currentLang={currentLang}
        onOpenLegal={handleOpenLegal}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* MODERN MUST-HAVES: Lightbox Modal */}
      <LightboxModal
        photos={lightboxState.photos}
        currentIndex={lightboxState.currentIndex}
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
        currentLang={currentLang}
      />

      {/* MODERN MUST-HAVES: Legal Modal (Impressum / Datenschutz) */}
      <LegalModal
        type={legalModal.type}
        isOpen={legalModal.isOpen}
        onClose={handleCloseLegal}
        currentLang={currentLang}
      />

      {/* MODERN MUST-HAVES: Quick Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        currentLang={currentLang}
      />

      {/* MODERN MUST-HAVES: GDPR/DSGVO Cookie Banner */}
      <CookieBanner
        onOpenLegal={handleOpenLegal}
        currentLang={currentLang}
      />

      {/* MODERN MUST-HAVES: Floating Back to Top */}
      <BackToTop />
    </div>
  );
}

export default App;
