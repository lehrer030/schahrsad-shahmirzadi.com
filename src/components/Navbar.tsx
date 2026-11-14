import React, { useState, useEffect, useRef } from 'react';
import { Globe, Menu, X, ChevronDown, Sparkles, Trophy, BookOpen, MapPin, Award, Newspaper, Heart, GraduationCap, Mail, User, Image as ImageIcon, ExternalLink } from 'lucide-react';
import type { Language } from '../data/photographyData';

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
  onSelectCategory: (catId: NavigationCategory) => void;
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onGoHome: () => void;
  onOpenContact: () => void;
}

export interface OriginalMenuItem {
  id: string;
  num: string;
  labelEn: string;
  labelDe: string;
  labelFa: string;
  targetId: string;
  isContact?: boolean;
  category?: NavigationCategory;
}

export const ORIGINAL_11_MENU_ITEMS: OriginalMenuItem[] = [
  {
    id: 'works',
    num: '01',
    labelEn: 'Photography - Works - International Awards',
    labelDe: 'Fotografie – Werke & Auszeichnungen',
    labelFa: 'عکاسی – آثار و جوایز بین‌المللی',
    targetId: 'architecture',
    category: 'architecture'
  },
  {
    id: 'publications',
    num: '02',
    labelEn: "Photography, Editor's Choice, Videos & E-Books",
    labelDe: "Fotografie, Editor's Choice, Videos & E-Books",
    labelFa: 'عکاسی، انتخاب سردبیر، ویدیوها و کتاب‌ها',
    targetId: 'publications',
    category: 'press'
  },
  {
    id: 'exhibitions',
    num: '03',
    labelEn: 'Exhibitions',
    labelDe: 'Ausstellungen 2026',
    labelFa: 'نمایشگاه‌ها',
    targetId: 'exhibitions',
    category: 'press'
  },
  {
    id: 'award-references',
    num: '04',
    labelEn: 'International Photography Award References',
    labelDe: 'Internationale Fotopreis-Referenzen (Awards)',
    labelFa: 'مراجع جوایز بین‌المللی عکاسی',
    targetId: 'award-references',
    category: 'press'
  },
  {
    id: 'press',
    num: '05',
    labelEn: 'Press',
    labelDe: 'Presse & Medienberichte',
    labelFa: 'مطبوعات و رسانه‌ها',
    targetId: 'press',
    category: 'press'
  },
  {
    id: 'kickboxing',
    num: '06',
    labelEn: 'World Champion Kickboxing',
    labelDe: 'Kickbox-Weltmeisterin (10× Titel)',
    labelFa: 'قهرمانی جهان کیک‌بوکسینگ',
    targetId: 'kickboxing',
    category: 'kickboxing'
  },
  {
    id: 'engagement',
    num: '07',
    labelEn: 'Committed to Environmental Protection, Human Rights and Peace',
    labelDe: 'Einsatz für Umweltschutz, Menschenrechte & Frieden',
    labelFa: 'تعهد به محیط زیست، حقوق بشر و صلح',
    targetId: 'engagement',
    category: 'biography'
  },
  {
    id: 'education',
    num: '08',
    labelEn: 'Interdisciplinary Academic Education',
    labelDe: 'Interdisziplinärer akademischer Bildungsweg',
    labelFa: 'تحصیلات دانشگاهی بین‌رشته‌ای',
    targetId: 'education',
    category: 'biography'
  },
  {
    id: 'contact',
    num: '09',
    labelEn: 'Contact',
    labelDe: 'Kontakt & Anfragen',
    labelFa: 'تماس و اخذ مجوز',
    targetId: 'contact',
    isContact: true
  },
  {
    id: 'biography',
    num: '10',
    labelEn: 'Biography',
    labelDe: 'Biografie & Vita',
    labelFa: 'زندگی‌نامه',
    targetId: 'biography',
    category: 'biography'
  },
  {
    id: 'gallery',
    num: '11',
    labelEn: 'Gallery',
    labelDe: 'Galerie & Impressionen',
    labelFa: 'گالری',
    targetId: 'gallery',
    category: 'gallery'
  }
];

export interface MobileSectionItem {
  id: string;
  num: string;
  shortDe: string;
  shortEn: string;
  shortFa: string;
  targetId: string;
}

export const MOBILE_SECTIONS: MobileSectionItem[] = [
  { id: 'architecture', num: '01', shortDe: 'Architektur · Werke', shortEn: 'Architecture · Works', shortFa: 'آثار معماری', targetId: 'architecture' },
  { id: 'fine-art', num: '02', shortDe: 'Fine Art · Serien', shortEn: 'Fine Art · Series', shortFa: 'هنرهای زیبا', targetId: 'fine-art' },
  { id: 'social-environmental', num: '03', shortDe: 'Gesellschaft & Umwelt', shortEn: 'Social & Environment', shortFa: 'اجتماع و محیط‌زیست', targetId: 'social-environmental' },
  { id: 'portraits', num: '04', shortDe: 'Porträts & Selbstporträts', shortEn: 'Portraits & Self-Portraits', shortFa: 'پرتره‌ها', targetId: 'portraits' },
  { id: 'kickboxing', num: '05', shortDe: 'Kickbox-Weltmeisterin (10×)', shortEn: 'World Champion Kickboxing', shortFa: 'قهرمانی کیک‌بوکسینگ', targetId: 'kickboxing' },
  { id: 'education', num: '06', shortDe: 'Akademische Bildung', shortEn: 'Academic Education', shortFa: 'تحصیلات دانشگاهی', targetId: 'education' },
  { id: 'engagement', num: '07', shortDe: 'Gesellschaftliches Engagement', shortEn: 'Advocacy & Human Rights', shortFa: 'فعالیت‌های اجتماعی و صلح', targetId: 'engagement' },
  { id: 'press-features', num: '08', shortDe: 'Presse & Medien', shortEn: 'Press & Media', shortFa: 'مطبوعات و رسانه‌ها', targetId: 'press-features' },
  { id: 'exhibitions', num: '09', shortDe: 'Ausstellungen 2026', shortEn: 'Exhibitions 2026', shortFa: 'نمایشگاه‌ها', targetId: 'exhibitions' },
  { id: 'publications', num: '10', shortDe: 'Publikationen & Bücher', shortEn: 'Publications & Books', shortFa: 'کتاب‌ها و نشریات', targetId: 'publications' },
  { id: 'award-references', num: '11', shortDe: 'Internationale Awards', shortEn: 'International Awards', shortFa: 'جوایز بین‌المللی', targetId: 'award-references' },
  { id: 'gallery', num: '12', shortDe: 'Galerie & Impressionen', shortEn: 'Gallery & Impressions', shortFa: 'گالری و ویدیوها', targetId: 'gallery' }
];

export const Navbar: React.FC<NavbarProps> = ({
  currentCategory,
  onSelectCategory,
  currentLang,
  onToggleLang,
  onGoHome,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [allPagesDropdownOpen, setAllPagesDropdownOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('architecture');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Active section tracking on scroll for mobile & tablet breadcrumb indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = MOBILE_SECTIONS.length - 1; i >= 0; i--) {
        const item = MOBILE_SECTIONS[i];
        const el = document.getElementById(item.targetId);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            setActiveSectionId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSection = MOBILE_SECTIONS.find(s => s.id === activeSectionId) || MOBILE_SECTIONS[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAllPagesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigateToItem = (item: OriginalMenuItem) => {
    setAllPagesDropdownOpen(false);
    setMobileMenuOpen(false);

    if (item.isContact) {
      onOpenContact();
      return;
    }

    if (item.category) {
      onSelectCategory(item.category);
    }

    setTimeout(() => {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const getItemLabel = (item: OriginalMenuItem) => {
    if (currentLang === 'de') return item.labelDe;
    if (currentLang === 'fa') return item.labelFa;
    return item.labelEn;
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

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-stone-200 text-stone-900 transition-colors w-full">
      {/* Top Colored Spendenlauf Announcement Banner - Compact & Slender on Mobile & Tablet */}
      <a
        href="https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spendenlauf für Menschenrechte beim ECCHR online unterstützen"
        className="group relative z-10 block bg-gradient-to-r from-red-700 via-rose-600 to-amber-600 hover:from-red-800 hover:via-rose-700 hover:to-amber-700 text-white transition-all duration-200 border-b border-red-800/40 shadow-xs cursor-pointer"
      >
        <div className="max-w-[1720px] mx-auto px-2.5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-1 sm:py-1.5 flex items-center justify-between sm:justify-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs md:text-sm">
          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
            <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 shrink-0">
              <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-white animate-pulse" />
            </span>
            <span className="font-semibold tracking-wide truncate">
              {currentLang === 'fa'
                ? 'کمپین دویدن برای حقوق بشر:'
                : currentLang === 'en'
                ? 'Run for Human Rights:'
                : 'Spendenlauf für Menschenrechte:'}
            </span>
            <span className="font-normal opacity-95 group-hover:opacity-100 transition-opacity hidden md:inline truncate">
              {currentLang === 'fa'
                ? 'حمایت از کارزار شیرزن برای ECCHR'
                : currentLang === 'en'
                ? 'Support ShirZan’s fundraising campaign at ECCHR'
                : 'Unterstützen Sie ShirZans Spendenkampagne beim ECCHR'}
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

      <div className="max-w-[1720px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 h-16 sm:h-18 lg:h-20 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Brand / Artist Logo */}
        <button
          onClick={onGoHome}
          className="text-left rtl:text-right group focus:outline-none cursor-pointer flex flex-col justify-center shrink-0"
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-2xl font-serif tracking-widest font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
              ShirZan
            </span>
            <span className="text-stone-300 text-sm hidden sm:inline">|</span>
            <span className="text-stone-600 text-xs sm:text-sm tracking-wide font-normal hidden sm:inline">
              {currentLang === 'fa' ? 'شهزاد شاهمیرزادی' : 'Schahrsad Shahmirzadi'}
            </span>
          </div>
          <p className="text-[10px] tracking-widest uppercase text-stone-500 font-sans group-hover:text-stone-700 mt-0.5">
            {currentLang === 'de'
              ? 'Photographie & Kunst'
              : currentLang === 'fa'
              ? 'عکاسی و هنر · شیرزن'
              : 'Photography & Art'}
          </p>
        </button>

        {/* Desktop Category Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
          
          {/* 1. Architecture & Core Works */}
          <button
            onClick={() => onSelectCategory('architecture')}
            className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all cursor-pointer rounded ${
              currentCategory === 'architecture'
                ? 'bg-stone-900 text-white'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            {currentLang === 'de' ? 'Werke & Fotografie' : currentLang === 'fa' ? 'آثار عکاسی' : 'Photography & Works'}
          </button>

          {/* 2. World Champion Kickboxing */}
          <button
            onClick={() => onSelectCategory('kickboxing')}
            className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all cursor-pointer rounded flex items-center gap-1.5 ${
              currentCategory === 'kickboxing'
                ? 'bg-stone-900 text-white'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            <Trophy className={`w-3.5 h-3.5 ${currentCategory === 'kickboxing' ? 'text-amber-300' : 'text-amber-700'}`} />
            <span>{currentLang === 'de' ? 'Kickboxen' : currentLang === 'fa' ? 'کیک‌بوکسینگ' : 'Kickboxing'}</span>
          </button>

          {/* 3. Vita & Interdisciplinary Education */}
          <button
            onClick={() => onSelectCategory('biography')}
            className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all cursor-pointer rounded ${
              currentCategory === 'biography'
                ? 'bg-stone-900 text-white'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            {currentLang === 'de' ? 'Vita & Bildungsweg' : currentLang === 'fa' ? 'تحصیلات و زندگی‌نامه' : 'Vita & Education'}
          </button>

          {/* 4. Press & Exhibitions */}
          <button
            onClick={() => onSelectCategory('press')}
            className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all cursor-pointer rounded ${
              currentCategory === 'press'
                ? 'bg-stone-900 text-white'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            {currentLang === 'de' ? 'Presse & Ausstellungen' : currentLang === 'fa' ? 'رسانه‌ها و نمایشگاه‌ها' : 'Press & Exhibitions'}
          </button>

          {/* 5. Gallery */}
          <button
            onClick={() => onSelectCategory('gallery')}
            className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all cursor-pointer rounded ${
              currentCategory === 'gallery'
                ? 'bg-stone-900 text-white'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            {currentLang === 'de' ? 'Galerie' : currentLang === 'fa' ? 'گالری' : 'Gallery'}
          </button>

          <span className="h-4 w-px bg-stone-300 mx-1" />

          {/* COMPLETE 11 ORIGINAL WORDPRESS PAGES DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAllPagesDropdownOpen(!allPagesDropdownOpen)}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all cursor-pointer rounded flex items-center gap-1.5 border ${
                allPagesDropdownOpen
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white border-stone-200/90 text-stone-800 hover:border-stone-400 hover:bg-stone-50'
              }`}
            >
              <span className="font-mono text-[11px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 font-bold">11</span>
              <span>{currentLang === 'de' ? 'Alle Menüpunkte' : currentLang === 'fa' ? 'تمام صفحات' : 'All 11 Links'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${allPagesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu with all 11 items */}
            {allPagesDropdownOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-96 bg-white border border-stone-200 rounded-2xl shadow-xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-2 border-b border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold">
                    {currentLang === 'de' ? 'Originale Webseiten-Struktur' : currentLang === 'fa' ? 'فهرست کامل بخش‌ها' : 'Original Navigation'}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {currentLang === 'de' ? '11 Einträge' : currentLang === 'fa' ? '۱۱ بخش' : '11 Items'}
                  </span>
                </div>
                <div className="max-h-[480px] overflow-y-auto py-1 space-y-1">
                  {ORIGINAL_11_MENU_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigateToItem(item)}
                      className="w-full text-left rtl:text-right p-2.5 rounded-xl hover:bg-stone-50 transition-colors flex items-center gap-3 group cursor-pointer"
                    >
                      <span className="text-[10px] font-mono font-bold text-stone-400 group-hover:text-amber-800 shrink-0 w-5">
                        {item.num}
                      </span>
                      <div className="shrink-0">{getItemIcon(item.id)}</div>
                      <span className="text-xs font-medium text-stone-800 group-hover:text-stone-950 truncate">
                        {getItemLabel(item)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

        </nav>

        {/* Right Tools: Language Switcher (DE / EN / FA) & Contact */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          
          {/* Trilingual Switcher (DE / EN / FA) */}
          <div className="flex items-center bg-white border border-stone-200 p-0.5 rounded text-xs shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-stone-400 ml-1.5 mr-0.5 shrink-0" />
            <button
              onClick={() => onToggleLang('de')}
              className={`px-2 py-1 rounded text-xs transition-all cursor-pointer ${
                currentLang === 'de'
                  ? 'bg-stone-900 text-white font-medium'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Deutsch"
            >
              DE
            </button>
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2 py-1 rounded text-xs transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-stone-900 text-white font-medium'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => onToggleLang('fa')}
              className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                currentLang === 'fa'
                  ? 'bg-stone-900 text-white font-medium'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="فارسی"
            >
              فارسی
            </button>
          </div>

          {/* Contact Button */}
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

      {/* Mobile & Tablet Live Section Indicator Bar (Visible on mobile & tablet: lg:hidden) */}
      <div className="lg:hidden bg-[#f7f5f0]/95 backdrop-blur-xs border-t border-stone-200/80 px-3 sm:px-6 py-1.5 flex items-center justify-between text-xs transition-colors shadow-2xs">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 pr-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 animate-pulse" />
          <span className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-1.5 py-0.5 rounded border border-amber-200/80 shrink-0">
            {currentSection.num}
          </span>
          <span className="text-stone-300 text-xs shrink-0">/</span>
          <span className="font-serif font-bold text-stone-900 truncate text-[11px] sm:text-xs tracking-tight">
            {currentLang === 'fa' ? currentSection.shortFa : currentLang === 'de' ? currentSection.shortDe : currentSection.shortEn}
          </span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="shrink-0 text-[10px] sm:text-[11px] font-mono font-medium text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-50 px-2 sm:px-2.5 py-0.5 rounded border border-stone-200 transition-colors flex items-center gap-1 shadow-2xs cursor-pointer ml-2"
          aria-label="Bereichsnavigation"
        >
          <span>{currentLang === 'fa' ? 'بخش‌ها ▾' : currentLang === 'de' ? 'Bereiche ▾' : 'Sections ▾'}</span>
        </button>
      </div>

      {/* Mobile Drawer Menu: ALL 11 ITEMS FROM WORDPRESS PRESERVED, OPTIMIZED FOR MOBILE & TABLET */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-stone-200 px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <span className="text-[11px] uppercase tracking-widest text-amber-800 font-mono font-bold">
              {currentLang === 'de' ? 'Bereiche der Website' : currentLang === 'fa' ? 'فهرست بخش‌های سایت' : 'Site Sections'}
            </span>
            <span className="text-[10px] font-mono text-stone-500">
              {currentLang === 'de' ? '11 Bereiche' : currentLang === 'fa' ? '۱۱ بخش' : '11 Sections'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {ORIGINAL_11_MENU_ITEMS.map((item) => {
              const isActive = activeSectionId === item.targetId || (item.category && currentCategory === item.category);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigateToItem(item)}
                  className={`w-full p-2.5 sm:p-3 rounded-xl border transition-all flex items-center justify-between text-left rtl:text-right cursor-pointer group shadow-2xs ${
                    isActive
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
              {currentLang === 'de' ? 'Direkte Nachricht senden (Kontakt)' : currentLang === 'fa' ? 'ارسال پیام مستقیم (تماس)' : 'Send Direct Message (Contact)'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
