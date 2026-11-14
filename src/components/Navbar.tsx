import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Sparkles, Trophy, BookOpen, MapPin, Award, Newspaper, Heart, GraduationCap, Mail, User, Image as ImageIcon, ExternalLink } from 'lucide-react';
import type { Language } from '../data/photographyData';
import { scrollToElementWithOffset } from '../utils/scrollHelper';
import { resolveAsset } from '../utils/resolveAsset';

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
    labelEn: 'International Photography Award References',
    labelDe: 'Internationale Photopreis-Referenzen & Awards',
    labelFa: 'مراجع جوایز بین‌المللی عکاسی',
    shortDe: 'Awards',
    shortEn: 'Awards',
    shortFa: 'جوایز',
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

  // Präzises ScrollSpy: Zu jedem Zeitpunkt leuchtet genau der eine aktuell sichtbare Bereich auf
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;

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

  const currentSection = ORIGINAL_11_MENU_ITEMS.find(s => s.id === activeMenuId);

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

    // Direct, exact scroll so the clicked heading/card sits immediately under the sticky header
    // with equal top spacing matching the left screen margin (16px on mobile matching px-4)
    const targetId = item.id === 'biography' ? 'biography-profile' : item.targetId;
    scrollToElementWithOffset(targetId, 60);
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
    <header
      className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-stone-200 text-stone-900 transition-colors w-full"
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      {/* Top Colored Spendenlauf Announcement Banner - Automatisch gesteuert nach Datum */}
      {isCampaignActive && (
        <a
          id="spendenlauf-banner"
          href={SPENDENLAUF_CONFIG.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spendenlauf für Menschenrechte 2027 beim ECCHR online unterstützen"
          className="group relative z-10 block bg-gradient-to-r from-red-700 via-rose-600 to-amber-600 hover:from-red-800 hover:via-rose-700 hover:to-amber-700 text-white transition-all duration-200 border-b border-red-800/40 shadow-xs cursor-pointer"
        >
          <div className="max-w-[1720px] mx-auto px-2.5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-1 sm:py-1.5 flex items-center justify-between sm:justify-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs md:text-sm">
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 shrink-0">
                <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-white animate-pulse" />
              </span>
              <span className="font-semibold tracking-wide truncate">
                {currentLang === 'fa'
                  ? 'کمپین دویدن برای حقوق بشر ۲۰۲۷:'
                  : currentLang === 'en'
                    ? 'Run for Human Rights 2027:'
                    : 'Spendenlauf für Menschenrechte 2027:'}
              </span>
              <span className="font-normal opacity-95 group-hover:opacity-100 transition-opacity hidden md:inline truncate">
                {currentLang === 'fa'
                  ? 'حمایت از کارزار شیرزن برای ECCHR'
                  : currentLang === 'en'
                    ? 'Support SchirZan’s fundraising campaign at ECCHR'
                    : 'Unterstützen Sie SchirZans Spendenkampagne beim ECCHR'}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 font-semibold text-[9.5px] sm:text-xs bg-white text-red-700 group-hover:bg-amber-100 group-hover:text-red-900 px-2 sm:px-2.5 py-0.5 rounded-full shadow-xs transition-colors shrink-0 whitespace-nowrap">
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

      <div id="brand-header-bar" className="max-w-[1720px] mx-auto px-3 sm:px-6 md:px-8 lg:px-6 xl:px-12 2xl:px-20 min-h-16 sm:min-h-18 lg:min-h-20 py-2 sm:py-2.5 flex items-center justify-between gap-3 xl:gap-6">

        {/* Brand / Artist Logo with Emblem */}
        <button
          onClick={onGoHome}
          className="text-left rtl:text-right group focus:outline-none cursor-pointer flex items-center gap-2.5 sm:gap-3 shrink-0"
        >
          <img
            src={resolveAsset('/images/schirzan-logo.webp')}
            alt="SchirZan Emblem"
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-xl sm:text-2xl font-serif tracking-widest font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
                SchirZan
              </span>
              <span className="text-stone-300 text-sm hidden sm:inline">|</span>
              <span className="text-stone-600 text-xs sm:text-sm tracking-wide font-normal hidden sm:inline">
                {currentLang === 'fa' ? 'شهزاد شاهمیرزادی' : 'Schahrsad Shahmirzadi'}
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase text-stone-500 font-mono group-hover:text-amber-900 mt-0.5 whitespace-nowrap font-medium transition-colors">
              {currentLang === 'de'
                ? 'KUNST · KAMPF · VISION'
                : currentLang === 'fa'
                  ? 'هنر · مبارزه · آرمان'
                  : 'ART · FIGHT · VISION'}
            </p>
          </div>
        </button>

        {/* Desktop Header Navigation: 2 Rows of 5 items each (01-05 and 06-10) */}
        <nav className="hidden lg:flex flex-col gap-1 items-center justify-center shrink min-w-0" aria-label="Hauptnavigation">
          {/* Row 1: Items 01 to 05 */}
          <div className="flex items-center gap-1 xl:gap-1.5 flex-nowrap justify-center">
            {ORIGINAL_11_MENU_ITEMS.slice(0, 5).map((item) => {
              const isActive = !item.isContact && activeMenuId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigateToItem(item)}
                  className={`group px-2 xl:px-2.5 py-0.5 xl:py-1 rounded-md text-xs font-medium tracking-tight transition-all cursor-pointer flex items-center gap-1 xl:gap-1.5 shrink-0 ${isActive
                    ? 'bg-stone-900 text-white shadow-xs font-semibold'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                    }`}
                  title={getItemLabel(item)}
                >
                  <span
                    className={`font-mono text-[9px] xl:text-[9.5px] 2xl:text-[10px] font-bold px-1.5 py-0.5 rounded leading-none transition-colors shrink-0 ${isActive
                      ? 'bg-amber-400 text-stone-950 font-bold border border-amber-300'
                      : 'bg-stone-200/90 group-hover:bg-amber-100 text-stone-700 group-hover:text-amber-950 border border-stone-300/80 group-hover:border-amber-300'
                      }`}
                  >
                    {item.num}
                  </span>
                  <span className="whitespace-nowrap text-[11px] xl:text-[11.5px] 2xl:text-xs">
                    {getHeaderItemLabel(item)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Row 2: Items 06 to 10 */}
          <div className="flex items-center gap-1 xl:gap-1.5 flex-nowrap justify-center">
            {ORIGINAL_11_MENU_ITEMS.slice(5, 10).map((item) => {
              const isActive = !item.isContact && activeMenuId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigateToItem(item)}
                  className={`group px-2 xl:px-2.5 py-0.5 xl:py-1 rounded-md text-xs font-medium tracking-tight transition-all cursor-pointer flex items-center gap-1 xl:gap-1.5 shrink-0 ${isActive
                    ? 'bg-stone-900 text-white shadow-xs font-semibold'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                    }`}
                  title={getItemLabel(item)}
                >
                  <span
                    className={`font-mono text-[9px] xl:text-[9.5px] 2xl:text-[10px] font-bold px-1.5 py-0.5 rounded leading-none transition-colors shrink-0 ${isActive
                      ? 'bg-amber-400 text-stone-950 font-bold border border-amber-300'
                      : 'bg-stone-200/90 group-hover:bg-amber-100 text-stone-700 group-hover:text-amber-950 border border-stone-300/80 group-hover:border-amber-300'
                      }`}
                  >
                    {item.num}
                  </span>
                  <span className="whitespace-nowrap text-[11px] xl:text-[11.5px] 2xl:text-xs">
                    {getHeaderItemLabel(item)}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Right Tools: Language Switcher (DE / EN / FA) & Contact */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse shrink-0">

          {/* Trilingual Switcher (DE / EN / FA) */}
          <div className="flex items-center bg-white border border-stone-200 p-0.5 rounded text-xs shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-stone-400 ml-1.5 mr-0.5 shrink-0" />
            <button
              onClick={() => onToggleLang('de')}
              className={`px-2 py-1 rounded text-xs transition-all cursor-pointer ${currentLang === 'de'
                ? 'bg-stone-900 text-white font-medium'
                : 'text-stone-600 hover:text-stone-900'
                }`}
              title="Deutsch"
            >
              DE
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2 py-1 rounded text-xs transition-all cursor-pointer ${currentLang === 'en'
                ? 'bg-stone-900 text-white font-medium'
                : 'text-stone-600 hover:text-stone-900'
                }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => onToggleLang('fa')}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${currentLang === 'fa'
                ? 'bg-stone-900 text-white font-medium'
                : 'text-stone-600 hover:text-stone-900'
                }`}
              title="فارسی"
            >
              فارسی
            </button>
          </div>

          {/* Separate Contact Button on the right */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium tracking-wide transition-all cursor-pointer shadow-2xs"
          >
            <span>{currentLang === 'de' ? 'Kontakt' : currentLang === 'fa' ? 'تماس' : 'Contact'}</span>
          </button>

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
            aria-label="Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Live Section Indicator Bar (Only rendered when scrolled into section 01-10) */}
      {currentSection && (
        <div id="mobile-section-indicator" className="lg:hidden bg-[#f7f5f0]/95 backdrop-blur-xs border-t border-stone-200/80 px-3 sm:px-6 py-1.5 flex items-center text-xs transition-colors shadow-2xs">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 animate-pulse" />
            <span className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-1.5 py-0.5 rounded border border-amber-200/80 shrink-0">
              {currentSection.num}
            </span>
            <span className="text-stone-300 text-xs shrink-0">/</span>
            <span className="font-serif font-bold text-stone-900 truncate text-[11px] sm:text-xs tracking-tight">
              {currentLang === 'fa' ? currentSection.shortFa : currentLang === 'de' ? currentSection.shortDe : currentSection.shortEn}
            </span>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu: ALL 11 ITEMS FROM WORDPRESS PRESERVED, OPTIMIZED FOR MOBILE & TABLET */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-stone-900/40 backdrop-blur-2xs z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden absolute top-full inset-x-0 bg-[#faf8f5] border-b border-stone-300 px-4 pt-4 pb-8 space-y-4 max-h-[80vh] overflow-y-auto shadow-2xl z-50 animate-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <span className="text-[11px] uppercase tracking-widest text-amber-800 font-mono font-bold">
                {currentLang === 'de' ? 'Bereiche der Website' : currentLang === 'fa' ? 'فهرست بخش‌های سایت' : 'Site Sections'}
              </span>
              <span className="text-[10px] font-mono text-stone-500">
                {currentLang === 'de' ? '10 Bereiche' : currentLang === 'fa' ? '۱۰ بخش' : '10 Sections'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {ORIGINAL_11_MENU_ITEMS.map((item) => {
                const isActive = !item.isContact && activeMenuId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigateToItem(item)}
                    className={`w-full p-2.5 sm:p-3 rounded-xl border transition-all flex items-center justify-between text-left rtl:text-right cursor-pointer group shadow-2xs ${isActive
                      ? 'bg-amber-50/90 border-amber-300 text-amber-950 font-semibold'
                      : 'bg-white border-stone-200/80 hover:bg-stone-50 text-stone-900'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <span className={`text-[10px] font-mono font-bold w-5 shrink-0 ${isActive ? 'text-amber-900' : 'text-amber-800'}`}>
                        {item.num}
                      </span>
                      <div className="shrink-0">{getItemIcon(item.id)}</div>
                      <span className="text-xs truncate">
                        {getItemLabel(item)}
                      </span>
                    </div>
                    <span className={`text-xs shrink-0 ml-1.5 ${isActive ? 'text-amber-700' : 'text-stone-300 group-hover:text-stone-500'}`}>
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 sm:py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold tracking-wide transition-all text-center cursor-pointer shadow-xs"
              >
                {currentLang === 'de' ? 'Direkte Nachricht senden · Kontakt' : currentLang === 'fa' ? 'ارسال پیام مستقیم · تماس' : 'Send Direct Message · Contact'}
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
