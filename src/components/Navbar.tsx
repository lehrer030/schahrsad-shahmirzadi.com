import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Sparkles, Trophy, BookOpen, MapPin, Award, Newspaper, Heart, GraduationCap, Mail, User, Image as ImageIcon, ExternalLink } from 'lucide-react';
import type { Language } from '../data/photographyData';
import { scrollToElementWithOffset } from '../utils/scrollHelper';

export type NavigationCategory =
  | 'architecture'
  | 'fine-art'
  | 'social-environmental'
  | 'portraits'
  | 'kickboxing'
  | 'biography'
  | 'press'
  | 'gallery';

interface NavbarProps {
  currentCategory: NavigationCategory;
  onSelectCategory: (catId: NavigationCategory, skipScroll?: boolean) => void;
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onGoHome: () => void;
  onOpenContact: () => void;
}

// Automatische Steuerung des Spendenlauf-Banners anhand des Datums:
// Der Berliner Halbmarathon 2027 findet im April 2027 statt.
// Sobald dieses Datum überschritten ist, blendet sich der obere rote Banner vollautomatisch aus.
export const SPENDENLAUF_CONFIG = {
  // Enddatum im ISO-Format: Jahr-Monat-TagTHH:MM:SS (inkl. 30. April 2027, 23:59:59 Uhr)
  endDate: '2027-04-30T23:59:59',
  url: 'https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights'
};

export interface OriginalMenuItem {
  id: string;
  num: string;
  labelEn: string;
  labelDe: string;
  labelFa: string;
  shortDe: string;
  shortEn: string;
  shortFa: string;
  targetId: string;
  isContact?: boolean;
  category?: NavigationCategory;
}

export const ORIGINAL_11_MENU_ITEMS: OriginalMenuItem[] = [
  {
    id: 'works',
    num: '01',
    labelEn: 'Photography - Works - International Awards',
    labelDe: 'Photographie – Werke & Auszeichnungen',
    labelFa: 'عکاسی – آثار و جوایز بین‌المللی',
    shortDe: 'Photographie',
    shortEn: 'Photography',
    shortFa: 'عکاسی',
    targetId: 'architecture',
    category: 'architecture'
  },
  {
    id: 'award-references',
    num: '02',
    labelEn: "International Photography Award References",
    labelDe: "Internationale Photopreis-Referenzen & Awards",
    labelFa: 'مراجع جوایز بین‌المللی عکاسی',
    shortDe: "International Awards",
    shortEn: "International Awards",
    shortFa: 'جوایز بین‌المللی',
    targetId: 'award-references',
    category: 'press'
  },
  {
    id: 'exhibitions',
    num: '03',
    labelEn: 'Exhibitions',
    labelDe: 'Ausstellungen 2026',
    labelFa: 'نمایشگاه‌ها',
    shortDe: 'Ausstellungen',
    shortEn: 'Exhibitions',
    shortFa: 'نمایشگاه‌ها',
    targetId: 'exhibitions',
    category: 'press'
  },
  {
    id: 'publications',
    num: '04',
    labelEn: "Photography, Editor's Choice, Videos & E-Books",
    labelDe: "Photographie, Editor's Choice, Videos & E-Books",
    labelFa: 'عکاسی، انتخاب سردبیر، ویدیوها و کتاب‌ها',
    shortDe: 'Publikationen',
    shortEn: 'Publications',
    shortFa: 'نشریات',
    targetId: 'publications',
    category: 'press'
  },
  {
    id: 'press',
    num: '05',
    labelEn: 'Press & Media Reports',
    labelDe: 'Presse & Medienberichte',
    labelFa: 'مطبوعات و رسانه‌ها',
    shortDe: 'Presse',
    shortEn: 'Press',
    shortFa: 'مطبوعات',
    targetId: 'press-features',
    category: 'press'
  },
  {
    id: 'kickboxing',
    num: '06',
    labelEn: 'World Champion Kickboxing',
    labelDe: '10-fache Kickbox-Weltmeisterin',
    labelFa: 'قهرمانی جهان کیک‌بوکسینگ',
    shortDe: 'Kickboxen',
    shortEn: 'Kickboxing',
    shortFa: 'کیک‌بوکسینگ',
    targetId: 'kickboxing',
    category: 'kickboxing'
  },
  {
    id: 'biography',
    num: '07',
    labelEn: 'Biography & Career',
    labelDe: 'Biografie & Werdegang',
    labelFa: 'زندگی‌نامه',
    shortDe: 'Biografie',
    shortEn: 'Biography',
    shortFa: 'زندگی‌نامه',
    targetId: 'biography-profile',
    category: 'biography'
  },
  {
    id: 'education',
    num: '08',
    labelEn: 'Interdisciplinary Academic Education',
    labelDe: 'Interdisziplinärer akademischer Bildungsweg',
    labelFa: 'تحصیلات دانشگاهی بین‌رشته‌ای',
    shortDe: 'Bildungsweg',
    shortEn: 'Education',
    shortFa: 'تحصیلات',
    targetId: 'education',
    category: 'biography'
  },
  {
    id: 'engagement',
    num: '09',
    labelEn: 'Committed to Environmental Protection, Human Rights and Peace',
    labelDe: 'Einsatz für Umweltschutz, Menschenrechte & Frieden',
    labelFa: 'تعهد به محیط زیست، حقوق بشر و صلح',
    shortDe: 'Engagement',
    shortEn: 'Advocacy',
    shortFa: 'فعالیت‌ها',
    targetId: 'engagement',
    category: 'biography'
  },
  {
    id: 'gallery',
    num: '10',
    labelEn: 'Gallery: Sports, Advocacy & IPA Athens',
    labelDe: 'Galerie: Sport, Engagement & IPA Athen',
    labelFa: 'گالری',
    shortDe: 'Galerie',
    shortEn: 'Gallery',
    shortFa: 'گالری',
    targetId: 'gallery',
    category: 'gallery'
  }
];

export interface ScrollCheckpoint {
  menuId: string;
  domId: string;
}

export const SCROLL_CHECKPOINTS: ScrollCheckpoint[] = [
  { menuId: 'works', domId: 'architecture' },
  { menuId: 'works', domId: 'fine-art' },
  { menuId: 'works', domId: 'social-environmental' },
  { menuId: 'works', domId: 'portraits' },
  { menuId: 'award-references', domId: 'award-references' },
  { menuId: 'exhibitions', domId: 'exhibitions' },
  { menuId: 'publications', domId: 'publications' },
  { menuId: 'press', domId: 'press-features' },
  { menuId: 'kickboxing', domId: 'kickboxing' },
  { menuId: 'biography', domId: 'biography' },
  { menuId: 'biography', domId: 'biography-profile' },
  { menuId: 'education', domId: 'education' },
  { menuId: 'engagement', domId: 'engagement' },
  { menuId: 'gallery', domId: 'gallery' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentCategory: _currentCategory,
  onSelectCategory,
  currentLang,
  onToggleLang,
  onGoHome,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Body-Scroll sperren, wenn das mobile Menü geöffnet ist
  useEffect(() => {
    if (mobileMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Präzises ScrollSpy: Zu jedem Zeitpunkt leuchtet genau der eine aktuell sichtbare Bereich auf
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      // Hysterese verhindert Flickern/Blinken an der Schwelle:
      // Aktivierung ab 60px Scrolltiefe, Deaktivierung erst wieder unter 20px
      setIsScrolled(prev => {
        if (!prev && scrollY > 60) return true;
        if (prev && scrollY < 20) return false;
        return prev;
      });

      // Wenn das Seitenende erreicht ist, Galerie aktivieren
      if (clientHeight + scrollY >= scrollHeight - 90) {
        setActiveMenuId('gallery');
        return;
      }

      // Dynamischer Lesebereich
      const checkpointOffset = Math.max(200, Math.min(clientHeight * 0.40, 320));

      // Solange man oben im Intro / Startseiten-Bereich ist und die Architektur-Sektion
      // den Lesebereich noch nicht erreicht hat, ist auf der Startseite keine Sektion 01-10 aktiv!
      const archEl = document.getElementById('architecture');
      if (archEl) {
        const archRect = archEl.getBoundingClientRect();
        if (archRect.top > checkpointOffset) {
          setActiveMenuId('home');
          return;
        }
      }

      let active = 'works';

      // Gehe alle Checkpoints in Reihenfolge durch: der letzte, der den Lesebereich erreicht hat, wird aktiv
      for (const cp of SCROLL_CHECKPOINTS) {
        const el = document.getElementById(cp.domId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= checkpointOffset) {
            active = cp.menuId;
          }
        }
      }

      setActiveMenuId(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToItem = (item: OriginalMenuItem) => {
    setMobileMenuOpen(false);

    if (item.isContact) {
      onOpenContact();
      return;
    }

    if (item.category) {
      onSelectCategory(item.category, true);
    }

    setActiveMenuId(item.id);

    // Präzises Scrollen zur Zielsektion mit kurzem Delay für sanftes Schließen des Mobilmenüs
    const targetId = item.id === 'biography' ? 'biography-profile' : item.targetId;
    setTimeout(() => {
      scrollToElementWithOffset(targetId);
    }, 100);
  };

  const getItemLabel = (item: OriginalMenuItem) => {
    if (currentLang === 'de') return item.labelDe;
    if (currentLang === 'fa') return item.labelFa;
    return item.labelEn;
  };

  const getHeaderItemLabel = (item: OriginalMenuItem) => {
    if (currentLang === 'de') return item.shortDe;
    if (currentLang === 'fa') return item.shortFa;
    return item.shortEn;
  };

  const getItemIcon = (id: string) => {
    switch (id) {
      case 'works': return <Sparkles className="w-3.5 h-3.5 text-amber-700" />;
      case 'publications': return <BookOpen className="w-3.5 h-3.5 text-stone-700" />;
      case 'exhibitions': return <MapPin className="w-3.5 h-3.5 text-stone-700" />;
      case 'award-references': return <Award className="w-3.5 h-3.5 text-amber-700" />;
      case 'press': return <Newspaper className="w-3.5 h-3.5 text-stone-700" />;
      case 'kickboxing': return <Trophy className="w-3.5 h-3.5 text-amber-700" />;
      case 'engagement': return <Heart className="w-3.5 h-3.5 text-red-600" />;
      case 'education': return <GraduationCap className="w-3.5 h-3.5 text-stone-700" />;
      case 'contact': return <Mail className="w-3.5 h-3.5 text-stone-700" />;
      case 'biography': return <User className="w-3.5 h-3.5 text-stone-700" />;
      case 'gallery': return <ImageIcon className="w-3.5 h-3.5 text-stone-700" />;
      default: return null;
    }
  };

  // Kampagnen-Banner vollautomatisch ausblenden, sobald das Enddatum überschritten ist
  const isCampaignActive = new Date() <= new Date(SPENDENLAUF_CONFIG.endDate);

  return (
    <>
      {/* Top Colored Spendenlauf Announcement Banner - Befindet sich im normalen Dokumentfluss über dem Header */}
      {isCampaignActive && (
        <a
          id="spendenlauf-banner"
          href={SPENDENLAUF_CONFIG.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spendenlauf für Menschenrechte 2027 beim ECCHR online unterstützen"
          className="group relative z-30 block bg-gradient-to-r from-red-700 via-rose-600 to-amber-600 hover:from-red-800 hover:via-rose-700 hover:to-amber-700 text-white transition-all duration-200 border-b border-red-800/40 shadow-2xs cursor-pointer"
        >
          <div className="max-w-[1720px] mx-auto px-2.5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-1.5 flex items-center justify-between sm:justify-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs md:text-sm">
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 shrink-0">
                <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-white animate-pulse" />
              </span>
              <span className="font-semibold text-white tracking-wide truncate">
                {currentLang === 'fa'
                  ? 'کمپین دویدن برای حقوق بشر ۲۰۲۷:'
                  : currentLang === 'en'
                    ? 'Run for Human Rights 2027:'
                    : 'Spendenlauf für Menschenrechte 2027:'}
              </span>
              <span className="font-normal text-white/95 group-hover:text-white transition-opacity hidden md:inline truncate">
                {currentLang === 'fa'
                  ? 'حمایت از کارزار شیرزن برای ECCHR'
                  : currentLang === 'en'
                    ? 'Support SchirZan’s fundraising campaign at ECCHR'
                    : 'Unterstützen Sie SchirZans Spendenkampagne beim ECCHR'}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 font-semibold text-[9.5px] sm:text-xs bg-white text-red-700 group-hover:bg-rose-50 group-hover:text-red-800 px-2.5 py-0.5 rounded-full shadow-xs transition-colors shrink-0 whitespace-nowrap">
              <span>
                {currentLang === 'fa'
                  ? 'کمک آنلاین'
                  : currentLang === 'en'
                    ? 'Donate'
                    : 'Jetzt spenden'}
              </span>
              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
            </span>
          </div>
        </a>
      )}

      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200/90 shadow-xs'
            : 'bg-[#faf8f5]/95 backdrop-blur-sm border-b border-stone-200 text-stone-900'
        }`}
        style={{ position: 'sticky', top: 0, zIndex: 40 }}
      >
        {/* Row 1: Brand & Top Action Bar */}
        <div
          id="brand-header-bar"
          className={`max-w-[1720px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 transition-all duration-300 ease-in-out flex items-center justify-between gap-2 sm:gap-4 ${
            isScrolled ? 'h-10 sm:h-11 py-1' : 'h-13 sm:h-15 py-1.5'
          }`}
        >
          {/* Brand / Artist Title: SchirZan | Schahrsad Shahmirzadi (bleibt immer voll ausgeschrieben und lesbar) */}
          <button
            onClick={onGoHome}
            className="text-left rtl:text-right group focus:outline-none cursor-pointer flex items-center min-w-0"
            aria-label="Zur Startseite"
          >
            <div className="flex items-center space-x-1.5 sm:space-x-2 rtl:space-x-reverse min-w-0">
              <span
                className={`font-serif tracking-wider sm:tracking-widest font-bold text-stone-900 group-hover:text-stone-700 transition-all shrink-0 ${
                  isScrolled ? 'text-base sm:text-lg lg:text-xl' : 'text-lg sm:text-xl lg:text-2xl'
                }`}
              >
                SchirZan
              </span>
              <span className={`text-stone-300 font-light transition-all shrink-0 ${
                isScrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
              }`}>
                |
              </span>
              <span
                className={`text-stone-800 font-serif tracking-wide font-medium transition-all whitespace-nowrap overflow-hidden text-ellipsis ${
                  isScrolled ? 'text-xs sm:text-sm lg:text-base' : 'text-xs sm:text-sm lg:text-base'
                }`}
              >
                {currentLang === 'fa' ? 'شهرزاد شاهمیرزادی' : 'Schahrsad Shahmirzadi'}
              </span>
            </div>
          </button>

          {/* Desktop Right Tools: Language Switcher (DE / EN / FA) & Contact (visible on lg+) */}
          <div className="hidden lg:flex items-center space-x-2.5 rtl:space-x-reverse shrink-0">
            {/* Trilingual Switcher (DE / EN / FA) */}
            <div className={`flex items-center bg-white border border-stone-200 p-0.5 rounded text-xs shadow-2xs transition-all ${
              isScrolled ? 'scale-90 sm:scale-95' : 'scale-100'
            }`}>
              <Globe className="w-3.5 h-3.5 text-stone-400 ml-1.5 mr-0.5 shrink-0" />
              <button
                type="button"
                onClick={() => onToggleLang('de')}
                className={`px-2 py-0.5 rounded text-xs transition-all cursor-pointer ${
                  currentLang === 'de'
                    ? 'bg-stone-900 text-white font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Deutsch"
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2 py-0.5 rounded text-xs transition-all cursor-pointer ${
                  currentLang === 'en'
                    ? 'bg-stone-900 text-white font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('fa')}
                className={`px-2.5 py-0.5 rounded text-xs transition-all cursor-pointer ${
                  currentLang === 'fa'
                    ? 'bg-stone-900 text-white font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="فارسی"
              >
                فارسی
              </button>
            </div>

            {/* Contact Button */}
            <button
              type="button"
              onClick={onOpenContact}
              className={`inline-flex items-center rounded bg-stone-900 hover:bg-stone-800 text-white font-medium tracking-wide transition-all cursor-pointer shadow-2xs ${
                isScrolled ? 'px-2.5 py-1 text-[11px]' : 'px-3.5 py-1.5 text-xs'
              }`}
            >
              <span>{currentLang === 'de' ? 'Kontakt' : currentLang === 'fa' ? 'تماس' : 'Contact'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button: Sehr groß, taktil, prominent & unübersehbar */}
          <div className="flex lg:hidden items-center shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer shadow-xs select-none ${
                mobileMenuOpen
                  ? 'bg-amber-600 text-white ring-2 ring-amber-400/40'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold">
                    {currentLang === 'fa' ? 'بستن' : currentLang === 'en' ? 'Close' : 'Schließen'}
                  </span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold">
                    {currentLang === 'fa' ? 'منو' : currentLang === 'en' ? 'Menu' : 'Menü'}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Row 2 on Mobile: Utility Bar mit Sprachumschalter & Schnellkontakt */}
        <div
          id="mobile-utility-bar"
          className="lg:hidden w-full bg-[#f4efe8]/95 border-t border-stone-200/80 px-3 sm:px-6 py-1 flex items-center justify-between gap-2"
        >
          {/* Trilingual Switcher (DE / EN / FA) */}
          <div className="flex items-center bg-white border border-stone-200/90 p-0.5 rounded text-xs shadow-2xs">
            <Globe className="w-3 h-3 text-stone-400 ml-1 mr-1 shrink-0" />
            <button
              type="button"
              onClick={() => onToggleLang('de')}
              className={`px-2 py-0.5 rounded text-[10.5px] font-medium transition-all cursor-pointer ${
                currentLang === 'de'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Deutsch"
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              className={`px-2 py-0.5 rounded text-[10.5px] font-medium transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('fa')}
              className={`px-2.5 py-0.5 rounded text-[10.5px] font-medium transition-all cursor-pointer ${
                currentLang === 'fa'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="فارسی"
            >
              فارسی
            </button>
          </div>

          {/* Quick Contact Button */}
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-900 hover:bg-stone-800 text-white text-[11px] font-medium tracking-wide transition-all cursor-pointer shadow-2xs"
          >
            <Mail className="w-3 h-3" />
            <span>{currentLang === 'de' ? 'Kontakt' : currentLang === 'fa' ? 'تماس' : 'Contact'}</span>
          </button>
        </div>

        {/* Row 2: 10 Topics Navigation Bar - Desktop & Large Screens (lg:block) */}
        <nav
          id="topics-navigation-bar"
          className={`hidden lg:block w-full bg-[#f6f3ee]/95 backdrop-blur-xs border-t border-stone-200/80 transition-all duration-300 ${
            isScrolled ? 'py-0.5' : 'py-1.5'
          }`}
          aria-label="Themen-Navigation"
        >
          <div className="max-w-[1720px] mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20">
            <div className="flex items-center justify-center gap-1.5 xl:gap-2 flex-nowrap">
              {ORIGINAL_11_MENU_ITEMS.slice(0, 10).map((item) => {
                const isActive = !item.isContact && activeMenuId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigateToItem(item)}
                    className={`group px-2 xl:px-2.5 py-1 rounded-md font-medium tracking-tight transition-all cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap text-xs ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-xs font-semibold'
                        : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/70'
                    }`}
                    title={getItemLabel(item)}
                  >
                    <span
                      className={`font-mono text-[9.5px] xl:text-[10px] font-bold px-1.5 py-0.5 rounded leading-none transition-colors shrink-0 ${
                        isActive
                          ? 'bg-amber-400 text-stone-950 font-bold border border-amber-300'
                          : 'bg-stone-200/90 group-hover:bg-amber-100 text-stone-700 group-hover:text-amber-950 border border-stone-300/80 group-hover:border-amber-300'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span>
                      {getHeaderItemLabel(item)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer: Absolut stabil AUSSERHALB des Headers gerendert */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[100] flex flex-col justify-start"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menü"
        >
          {/* Full-screen Dark Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content sliding down from top */}
          <div className="relative w-full max-h-[92vh] bg-[#faf8f5] border-b-2 border-amber-600/30 px-4 pt-3.5 pb-6 space-y-3 overflow-y-auto shadow-2xl z-10 animate-in slide-in-from-top duration-200">
            {/* Header row inside drawer: Brand + Prominenter Schließen-Button */}
            <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
              <div className="flex items-center space-x-1.5 rtl:space-x-reverse min-w-0">
                <span className="text-base font-serif font-bold text-stone-900 tracking-wider">
                  SchirZan
                </span>
                <span className="text-stone-300 text-sm">|</span>
                <span className="text-xs font-serif text-stone-700 font-medium truncate">
                  {currentLang === 'fa' ? 'شهرزاد شاهمیرزادی' : 'Schahrsad Shahmirzadi'}
                </span>
              </div>

              {/* Prominenter Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-800 transition-colors cursor-pointer border border-stone-200 shadow-2xs"
                aria-label="Menü schließen"
              >
                <X className="w-4 h-4 text-stone-900" />
                <span className="text-xs font-semibold">
                  {currentLang === 'fa' ? 'بستن' : currentLang === 'en' ? 'Close' : 'Schließen'}
                </span>
              </button>
            </div>

            {/* Language Switcher inside drawer */}
            <div className="flex items-center justify-between bg-stone-100/90 p-2 rounded-lg border border-stone-200">
              <span className="text-xs font-medium text-stone-700 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-stone-500" />
                <span>{currentLang === 'fa' ? 'زبان:' : currentLang === 'en' ? 'Language:' : 'Sprache:'}</span>
              </span>
              <div className="flex items-center bg-white border border-stone-200 p-0.5 rounded text-xs shadow-2xs">
                <button
                  type="button"
                  onClick={() => onToggleLang('de')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    currentLang === 'de' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  DE
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    currentLang === 'en' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('fa')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    currentLang === 'fa' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  فارسی
                </button>
              </div>
            </div>

            {/* Section count / title */}
            <div className="flex items-center justify-between pt-0.5">
              <span className="text-[11px] uppercase tracking-widest text-amber-800 font-mono font-bold">
                {currentLang === 'fa' ? 'فهرست بخش‌های سایت' : currentLang === 'en' ? 'Site Sections' : 'Bereiche der Website'}
              </span>
              <span className="text-[10px] font-mono text-stone-500">
                {currentLang === 'fa' ? '۱۰ بخش' : currentLang === 'en' ? '10 Sections' : '10 Bereiche'}
              </span>
            </div>

            {/* Vertikales Menü: Alle 10 Themen sauber untereinander mit großer Touch-Fläche */}
            <div className="flex flex-col space-y-1.5">
              {ORIGINAL_11_MENU_ITEMS.slice(0, 10).map((item) => {
                const isActive = !item.isContact && activeMenuId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigateToItem(item)}
                    className={`w-full p-2.5 sm:p-3 rounded-xl border transition-all flex items-center justify-between text-left rtl:text-right cursor-pointer group shadow-2xs ${
                      isActive
                        ? 'bg-amber-50/95 border-amber-400 text-amber-950 font-semibold ring-1 ring-amber-300'
                        : 'bg-white border-stone-200/90 hover:bg-stone-50 text-stone-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-amber-400 text-stone-950 border border-amber-300' : 'bg-stone-100 text-amber-800 border border-stone-200'
                      }`}>
                        {item.num}
                      </span>
                      <div className="shrink-0">{getItemIcon(item.id)}</div>
                      <span className="text-xs sm:text-sm font-medium truncate">
                        {getItemLabel(item)}
                      </span>
                    </div>
                    <span className={`text-xs shrink-0 ml-1.5 ${isActive ? 'text-amber-800 font-bold' : 'text-stone-400 group-hover:text-stone-600'}`}>
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Contact Button */}
            <div className="pt-1.5 pb-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold tracking-wide transition-all text-center cursor-pointer shadow-xs flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{currentLang === 'de' ? 'Direkte Nachricht senden · Kontakt' : currentLang === 'fa' ? 'ارسال پیام مستقیم · تماس' : 'Send Direct Message · Contact'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
