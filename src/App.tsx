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
import { Building2, Palette, Globe2, User, GraduationCap, Newspaper } from 'lucide-react';

export default function App() {
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

  // One-Pager: ScrollSpy IntersectionObserver to track visible section on scroll
  useEffect(() => {
    if (selectedSeriesId) return;

    const sectionIds: Array<'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press'> = [
      'architecture',
      'fine-art',
      'social-environmental',
      'portraits',
      'biography',
      'press'
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
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    setSelectedSeriesId(null);
  };

  // One-Pager Smooth Scroll Action
  const handleSelectCategory = (cat: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press') => {
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
          /* =========================================================================
              MODERN ONE-PAGER ARCHITECTURE:
              All sections are accessible sequentially on one page with smooth scroll!
             ========================================================================= */
          <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 space-y-20 sm:space-y-28">
            
            {/* -------------------------------------------------------------
                SECTION 1: ARCHITECTURE (PRIMARY FOCUS)
               ------------------------------------------------------------- */}
            <section id="architecture" className="scroll-mt-24 pt-4">
              
              {/* Category Sticky Heading / Divider */}
              <div className="border-b border-amber-900/10 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-stone-900 text-white shadow-xs">
                    <Building2 className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                      {currentLang === 'de' ? 'Architecture' : currentLang === 'fa' ? 'معماری' : 'Architecture'}
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-light">
                  {currentLang === 'de'
                    ? 'Internationale prämierte Architektur-Photographie mit Fokus auf Solitäre, Licht, Geometrie und urbane Abstraktion.'
                    : currentLang === 'fa'
                    ? 'عکاسی معماری با جوایز بین‌المللی با تمرکز بر تک‌بناها، نور، هندسه و انتزاع شهری.'
                    : 'Internationally awarded architectural photography focusing on solitaires, light, geometry, and urban abstraction.'}
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
                sectionTitleDe="Further Works (Architektur)"
                sectionTitleEn="Further Works (Architecture)"
                sectionTitleFa="سایر آثار معماری و جوایز بین‌المللی"
                onOpenLightbox={handleOpenLightbox}
              />
            </section>


            {/* -------------------------------------------------------------
                SECTION 2: FINE ART
               ------------------------------------------------------------- */}
            <section id="fine-art" className="scroll-mt-24 pt-6 border-t border-stone-200/90">
              <div className="border-b border-amber-900/10 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-amber-900 text-white shadow-xs">
                    <Palette className="w-5 h-5 text-amber-200" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                      {currentLang === 'de' ? 'Fine Art' : currentLang === 'fa' ? 'هنرهای زیبا (فاین آرت)' : 'Fine Art'}
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-light">
                  {currentLang === 'de'
                    ? 'Künstlerische Erkundungen von Form, Raum, Zeit und Poesie des Lichts.'
                    : currentLang === 'fa'
                    ? 'کاوش‌های هنری در فرم، فضا، زمان و شعر بصری نور.'
                    : 'Artistic explorations of form, space, time, and the poetry of light.'}
                </p>
              </div>

              <FurtherWorks
                works={FINE_ART_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Fine Art – Ausgezeichnete Werkserien"
                sectionTitleEn="Fine Art – Award-Winning Series"
                sectionTitleFa="هنرهای زیبا – مجموعه‌های برنده جوایز"
                onOpenLightbox={handleOpenLightbox}
              />
            </section>


            {/* -------------------------------------------------------------
                SECTION 3: SOCIAL & ENVIRONMENTAL THEMES
               ------------------------------------------------------------- */}
            <section id="social-environmental" className="scroll-mt-24 pt-6 border-t border-stone-200/90">
              <div className="border-b border-amber-900/10 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-emerald-900 text-white shadow-xs">
                    <Globe2 className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                      {currentLang === 'de' ? 'Social & Environmental Themes' : currentLang === 'fa' ? 'مضامین اجتماعی و زیست‌محیطی' : 'Social & Environmental Themes'}
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-light">
                  {currentLang === 'de'
                    ? 'Fotografische Arbeiten zu Menschenrechten, Frieden, gesellschaftlicher Vielfalt und Respekt vor Natur und Tier.'
                    : currentLang === 'fa'
                    ? 'آثار عکاسی متعهد به حقوق بشر، صلح، تنوع اجتماعی و احترام به طبیعت و حیات حیوانات.'
                    : 'Photographic works dedicated to human rights, peace, diversity, and environmental and animal respect.'}
                </p>
              </div>

              <FurtherWorks
                works={SOCIAL_ENVIRONMENTAL_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Social and Environmental Themes – Prämierte Werke"
                sectionTitleEn="Social and Environmental Themes – Awarded Works"
                sectionTitleFa="مضامین اجتماعی و زیست‌محیطی – آثار برگزیده"
                onOpenLightbox={handleOpenLightbox}
              />
            </section>


            {/* -------------------------------------------------------------
                SECTION 4: PORTRAITS
               ------------------------------------------------------------- */}
            <section id="portraits" className="scroll-mt-24 pt-6 border-t border-stone-200/90">
              <div className="border-b border-amber-900/10 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-amber-950 text-white shadow-xs">
                    <User className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                      {currentLang === 'de' ? 'Portraits' : currentLang === 'fa' ? 'پرتره‌ها' : 'Portraits'}
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-light">
                  {currentLang === 'de'
                    ? 'Ausdrucksstarke Porträts und Selbstporträts im Spannungsfeld von Stärke und Authentizität.'
                    : currentLang === 'fa'
                    ? 'پرتره‌ها و خودنگاره‌های بیانی پرشور در پیوند میان قدرت و اصالت.'
                    : 'Expressive portraits and self-portraits bridging strength, dynamism, and authenticity.'}
                </p>
              </div>

              <FurtherWorks
                works={PORTRAIT_WORKS}
                currentLang={currentLang}
                sectionTitleDe="Portraits & Self-Portraits"
                sectionTitleEn="Portraits & Self-Portraits"
                sectionTitleFa="پرتره‌ها و خودنگاره‌ها"
                onOpenLightbox={handleOpenLightbox}
              />
            </section>


            {/* -------------------------------------------------------------
                SECTION 5: PRESERVED WORDPRESS CONTENT: BIOGRAPHY & COMMITMENT
               ------------------------------------------------------------- */}
            <section id="biography" className="scroll-mt-24 pt-6 border-t border-stone-200/90">
              <div className="border-b border-amber-900/10 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-amber-800 text-white shadow-xs">
                    <GraduationCap className="w-5 h-5 text-amber-200" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold">
                      {currentLang === 'de' ? 'Künstlerin & Werdegang' : currentLang === 'fa' ? 'سوابق و فعالیت‌ها' : 'Artist & Background'}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                      {currentLang === 'de' ? 'Vita & Engagement' : currentLang === 'fa' ? 'زندگی‌نامه و تعهدات' : 'Vita & Commitment'}
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-light">
                  {currentLang === 'de'
                    ? 'Akademischer Bildungsweg, sportliche Erfolge (Weltmeisterin Kickboxen) und Engagement für Umweltschutz & Frieden.'
                    : currentLang === 'fa'
                    ? 'مسیر آکادمیک، افتخارات ورزشی (قهرمان جهان در کیک‌بوکسینگ) و فعالیت برای حفاظت از محیط زیست و صلح.'
                    : 'Academic career, athletic achievements (World Champion Kickboxing), and commitment to environmental protection & peace.'}
                </p>
              </div>

              <ArtistVita currentLang={currentLang} />
            </section>


            {/* -------------------------------------------------------------
                SECTION 6: PRESERVED WORDPRESS CONTENT: PRESS & MEDIA
               ------------------------------------------------------------- */}
            <section id="press" className="scroll-mt-24 pt-6 border-t border-stone-200/90">
              <div className="border-b border-amber-900/10 pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-stone-800 text-white shadow-xs">
                    <Newspaper className="w-5 h-5 text-stone-300" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-stone-600 font-bold">
                      {currentLang === 'de' ? 'Medien & Publikationen' : currentLang === 'fa' ? 'رسانه‌ها و انتشارات' : 'Media & Publications'}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold">
                      {currentLang === 'de' ? 'Press & Media' : currentLang === 'fa' ? 'رسانه‌ها و مطبوعات' : 'Press & Media'}
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xl font-light">
                  {currentLang === 'de'
                    ? 'Internationale Publikationen, Medienberichte (121 Clicks, Kojaro) und offizielle Auszeichnungskataloge.'
                    : currentLang === 'fa'
                    ? 'انتشارات بین‌المللی، گزارش‌های رسانه‌ای (۱۲۱ کلیکز، کجارو) و کتاب‌های برگزیدگان مسابقات.'
                    : 'International publications, press features (121 Clicks, Kojaro), and official award catalogues.'}
                </p>
              </div>

              <PressSection currentLang={currentLang} />
            </section>

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
    </div>
  );
}
