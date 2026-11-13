import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeaderIntro } from './components/HeaderIntro';
import { ArtworkCard } from './components/ArtworkCard';
import { SeriesDetail } from './components/SeriesDetail';
import { FurtherWorks } from './components/FurtherWorks';
import { ArtistVita } from './components/ArtistVita';
import { PressSection } from './components/PressSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { LegalModal } from './components/LegalModal';
import { ContactModal } from './components/ContactModal';
import { CookieBanner } from './components/CookieBanner';
import { BackToTop } from './components/BackToTop';
import { ImageProtectionToast } from './components/ImageProtectionToast';
import {
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

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    // 1. URL search parameter (?lang=de / ?lang=en / ?lang=fa)
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'de' || urlLang === 'en' || urlLang === 'fa') {
      return urlLang;
    }
    // 2. Saved user selection in localStorage
    const saved = localStorage.getItem('schirzan_preferred_lang');
    if (saved === 'de' || saved === 'en' || saved === 'fa') {
      return saved as Language;
    }
    // 3. Autonomous detection from browser / system language
    const browserLanguages = navigator.languages || [navigator.language || ''];
    for (const lang of browserLanguages) {
      const lower = lang.toLowerCase();
      if (lower.startsWith('fa')) return 'fa';
      if (lower.startsWith('de')) return 'de';
      if (lower.startsWith('en')) return 'en';
    }
  }
  return 'de';
};

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(getInitialLanguage);
  const [currentCategory, setCurrentCategory] = useState<
    'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press' | 'gallery'
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
  const [protectionToastOpen, setProtectionToastOpen] = useState(false);

  // Bild-Kopierschutz: Verhindert Rechtsklick / "Bild speichern unter" und Drag&Drop Download
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isArtworkImage = 
        target.tagName === 'IMG' || 
        target.closest('img') || 
        target.closest('.group\\/img') || 
        target.closest('.group\\/photo') || 
        target.closest('.group\\/first') ||
        target.classList.contains('protected-art');

      if (isArtworkImage) {
        e.preventDefault();
        setProtectionToastOpen(true);
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'IMG' || target.closest('img'))) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dragstart', handleDragStart);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  // Sync RTL / LTR direction, html lang attribute, and persist language selection
  useEffect(() => {
    if (currentLang === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'fa');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', currentLang);
    }
    localStorage.setItem('schirzan_preferred_lang', currentLang);
  }, [currentLang]);

  // Autonomous listener for browser language changes
  useEffect(() => {
    const handleLangChange = () => {
      const browserLanguages = navigator.languages || [navigator.language || ''];
      for (const lang of browserLanguages) {
        const lower = lang.toLowerCase();
        if (lower.startsWith('fa')) { setCurrentLang('fa'); return; }
        if (lower.startsWith('de')) { setCurrentLang('de'); return; }
        if (lower.startsWith('en')) { setCurrentLang('en'); return; }
      }
    };
    window.addEventListener('languagechange', handleLangChange);
    return () => window.removeEventListener('languagechange', handleLangChange);
  }, []);

  // One-Pager: ScrollSpy IntersectionObserver to track visible section on scroll
  useEffect(() => {
    if (selectedSeriesId) return;

    const sectionIds: Array<'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press' | 'gallery'> = [
      'architecture',
      'fine-art',
      'social-environmental',
      'portraits',
      'biography',
      'press',
      'gallery'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setCurrentCategory(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedSeriesId]);

  const seriesMap: Record<string, PhotoSeries> = {
    [SOLITAIRE_SERIES_1.id]: SOLITAIRE_SERIES_1,
    [SOLITAIRE_SERIES_2.id]: SOLITAIRE_SERIES_2
  };

  const handleOpenSeries = (seriesId: string) => {
    setSelectedSeriesId(seriesId);
  };

  const handleBackToOverview = () => {
    setSelectedSeriesId(null);
  };

  // One-Pager Smooth Scroll Action
  const handleSelectCategory = (cat: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press' | 'gallery') => {
    setCurrentCategory(cat);
    setSelectedSeriesId(null);

    // Smooth scroll down to the targeted section
    setTimeout(() => {
      const el = document.getElementById(cat);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
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

      {/* Main Header & Artist Intro Section with prominent Steve Barret portrait */}
      <HeaderIntro 
        currentLang={currentLang} 
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Main Content Body: Onepager bleibt stets klar definiert im Hintergrund */}
      <main className="flex-1 w-full">
        {/* =========================================================================
            MODERN ONE-PAGER ARCHITECTURE:
            All sections are accessible sequentially on one page with smooth scroll!
           ========================================================================= */}
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 space-y-20 sm:space-y-28">
            
            {/* -------------------------------------------------------------
                SECTION 1: ARCHITECTURE (PRIMARY FOCUS)
               ------------------------------------------------------------- */}
            <section id="architecture" className="scroll-mt-24 pt-4">
              
              {/* Category Sticky Heading / Divider */}
              <div className="border-b border-stone-200 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                    {currentLang === 'de' ? 'Architektur' : currentLang === 'fa' ? 'معماری' : 'Architecture'}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 max-w-xl font-normal">
                  {currentLang === 'de'
                    ? 'Prämierte Architekturfotografien mit Schwerpunkt auf solitären Bauwerken und geometrischen Strukturen.'
                    : currentLang === 'fa'
                    ? 'عکس‌های برگزیده معماری با تمرکز بر تک‌بناها و ساختارهای هندسی.'
                    : 'Award-winning architectural photography focusing on solitary structures and geometric forms.'}
                </p>
              </div>

              {/* Series 1: The Solitaire as Abstraction – In Harmony with Nature (7 photos) */}
              <div className="mb-12">
                <ArtworkCard
                  series={SOLITAIRE_SERIES_1}
                  onOpenSeries={handleOpenSeries}
                  onOpenLightbox={handleOpenLightbox}
                  currentLang={currentLang}
                />
              </div>

              {/* Series 2: The Solitaire as an Abstraction (Revised) (5 photos) */}
              <div className="mb-12">
                <ArtworkCard
                  series={SOLITAIRE_SERIES_2}
                  onOpenSeries={handleOpenSeries}
                  onOpenLightbox={handleOpenLightbox}
                  currentLang={currentLang}
                />
              </div>

              {/* Further Works in Architecture */}
              <FurtherWorks
                works={FURTHER_WORKS_ARCHITECTURE}
                currentLang={currentLang}
                sectionTitleDe="Weitere Arbeiten (Architektur)"
                sectionTitleEn="Further Works (Architecture)"
                sectionTitleFa="سایر آثار معماری"
                onOpenLightbox={handleOpenLightbox}
              />
            </section>


            {/* -------------------------------------------------------------
                SECTION 2: FINE ART
               ------------------------------------------------------------- */}
            <section id="fine-art" className="scroll-mt-24 pt-6 border-t border-stone-200">
              <div className="border-b border-stone-200 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                    {currentLang === 'de' ? 'Fine Art' : currentLang === 'fa' ? 'هنرهای زیبا (فاین آرت)' : 'Fine Art'}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 max-w-xl font-normal">
                  {currentLang === 'de'
                    ? 'Fotografische Arbeiten im Bereich Fine Art und Bildkomposition.'
                    : currentLang === 'fa'
                    ? 'آثار عکاسی در حوزه هنرهای زیبا و ترکیب‌بندی تصویر.'
                    : 'Photographic works in fine art and visual composition.'}
                </p>
              </div>

              <FurtherWorks
                works={FINE_ART_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Fine Art – Werkserien"
                sectionTitleEn="Fine Art – Series"
                sectionTitleFa="هنرهای زیبا – مجموعه‌ها"
                onOpenLightbox={handleOpenLightbox}
              />
            </section>


            {/* -------------------------------------------------------------
                SECTION 3: SOCIAL & ENVIRONMENTAL THEMES
               ------------------------------------------------------------- */}
            <section id="social-environmental" className="scroll-mt-24 pt-6 border-t border-stone-200">
              <div className="border-b border-stone-200 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                    {currentLang === 'de' ? 'Gesellschaft & Umwelt' : currentLang === 'fa' ? 'مضامین اجتماعی و زیست‌محیطی' : 'Social & Environmental Themes'}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 max-w-xl font-normal">
                  {currentLang === 'de'
                    ? 'Fotografische Dokumentationen zu Menschenrechten, gesellschaftlichen Themen und Tierschutz.'
                    : currentLang === 'fa'
                    ? 'مستندسازی‌های عکاسی در حوزه حقوق بشر، موضوعات اجتماعی و حمایت از حیوانات.'
                    : 'Photographic documentation on human rights, social issues, and animal welfare.'}
                </p>
              </div>

              <FurtherWorks
                works={SOCIAL_ENVIRONMENTAL_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Social & Environmental Themes – Werkserien"
                sectionTitleEn="Social and Environmental Themes – Series"
                sectionTitleFa="مضامین اجتماعی و زیست‌محیطی – مجموعه‌ها"
                onOpenLightbox={handleOpenLightbox}
              />
            </section>


            {/* -------------------------------------------------------------
                SECTION 4: PORTRAITS
               ------------------------------------------------------------- */}
            <section id="portraits" className="scroll-mt-24 pt-6 border-t border-stone-200">
              <div className="border-b border-stone-200 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                    {currentLang === 'de' ? 'Porträts' : currentLang === 'fa' ? 'پرتره‌ها' : 'Portraits'}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 max-w-xl font-normal">
                  {currentLang === 'de'
                    ? 'Fotografische Porträts und Selbstporträts.'
                    : currentLang === 'fa'
                    ? 'پرتره‌ها و خودنگاره‌های عکاسی.'
                    : 'Photographic portraits and self-portraits.'}
                </p>
              </div>

              <FurtherWorks
                works={PORTRAIT_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Porträts & Selbstporträts"
                sectionTitleEn="Portraits & Self-Portraits"
                sectionTitleFa="پرتره‌ها و خودنگاره‌ها"
                onOpenLightbox={handleOpenLightbox}
              />
            </section>


            {/* -------------------------------------------------------------
                SECTION 5: PRESERVED WORDPRESS CONTENT: BIOGRAPHY & COMMITMENT
               ------------------------------------------------------------- */}
            <section id="biography" className="scroll-mt-24 pt-6 border-t border-stone-200">
              <div className="border-b border-stone-200 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                    {currentLang === 'de' ? 'Vita & Engagement' : currentLang === 'fa' ? 'زندگی‌نامه و تعهدات' : 'Vita & Commitment'}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 max-w-xl font-normal">
                  {currentLang === 'de'
                    ? 'Biografie, akademischer Werdegang, sportliche Erfolge im Kickboxen und soziales Engagement.'
                    : currentLang === 'fa'
                    ? 'زندگی‌نامه، پیشینه دانشگاهی، موفقیت‌های ورزشی در کیک‌بوکسینگ و فعالیت‌های اجتماعی.'
                    : 'Biography, academic career, kickboxing achievements, and community engagement.'}
                </p>
              </div>

              <ArtistVita currentLang={currentLang} />
            </section>


            {/* -------------------------------------------------------------
                SECTION 6: PRESERVED WORDPRESS CONTENT: PRESS & MEDIA
               ------------------------------------------------------------- */}
            <section id="press" className="scroll-mt-24 pt-6 border-t border-stone-200">
              <div className="border-b border-stone-200 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                    {currentLang === 'de' ? 'Presse & Medien' : currentLang === 'fa' ? 'رسانه‌ها و مطبوعات' : 'Press & Media'}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 max-w-xl font-normal">
                  {currentLang === 'de'
                    ? 'Internationale Publikationen, Medienberichte und offizielle Auszeichnungskataloge.'
                    : currentLang === 'fa'
                    ? 'انتشارات بین‌المللی، گزارش‌های رسانه‌ای و کتاب‌های برگزیدگان مسابقات.'
                    : 'International publications, press features, and official award catalogues.'}
                </p>
              </div>

              <PressSection currentLang={currentLang} />
            </section>

            {/* -------------------------------------------------------------
                SECTION 7: GALLERY (WORDPRESS ORIGINAL: KICKBOXING VIDEO, RUNNING & IPA ATHENS GALA)
               ------------------------------------------------------------- */}
            <GallerySection
              currentLang={currentLang}
              onOpenLightbox={handleOpenLightbox}
            />

          </div>
      </main>

      {/* Global Footer */}
      <Footer
        currentLang={currentLang}
        onOpenLegal={handleOpenLegal}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* MODERN MUST-HAVES: Series Detail Overlay Kachel (bleibt als darüber liegende Kachel über dem Onepager) */}
      {activeSeries && (
        <SeriesDetail
          series={activeSeries}
          onBack={handleBackToOverview}
          onOpenLightbox={handleOpenLightbox}
          currentLang={currentLang}
        />
      )}

      {/* MODERN MUST-HAVES: Lightbox Modal */}
      <LightboxModal
        photos={lightboxState.photos}
        currentIndex={lightboxState.currentIndex}
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
        currentLang={currentLang}
      />

      {/* MODERN MUST-HAVES: Legal Modal (Impressum & Datenschutz) */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={handleCloseLegal}
        currentLang={currentLang}
      />

      {/* MODERN MUST-HAVES: Direct Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        currentLang={currentLang}
      />

      {/* MODERN MUST-HAVES: GDPR / DSGVO Cookie Banner */}
      <CookieBanner
        currentLang={currentLang}
        onOpenLegal={handleOpenLegal}
      />

      {/* MODERN MUST-HAVES: Back to Top Floating Action Button */}
      <BackToTop />

      {/* MODERN MUST-HAVES: Digital Copyright Protection Toast */}
      <ImageProtectionToast
        isOpen={protectionToastOpen}
        onClose={() => setProtectionToastOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
        currentLang={currentLang}
      />
    </div>
  );
}
