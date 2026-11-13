import React, { useState, useEffect, useRef } from 'react';
import { Globe, Menu, X, ChevronDown, Sparkles, Trophy, BookOpen, MapPin, Award, Newspaper, Heart, GraduationCap, Mail, User, Image as ImageIcon } from 'lucide-react';
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
    labelDe: 'Photography - Works - International Awards',
    labelFa: 'عکاسی – آثار و جوایز بین‌المللی',
    targetId: 'architecture',
    category: 'architecture'
  },
  {
    id: 'publications',
    num: '02',
    labelEn: "Photography, Editor's Choice, Videos & E-Books",
    labelDe: "Photography, Editor's Choice, Videos & E-Books",
    labelFa: 'عکاسی، انتخاب سردبیر، ویدیوها و کتاب‌ها',
    targetId: 'publications',
    category: 'press'
  },
  {
    id: 'exhibitions',
    num: '03',
    labelEn: 'Exhibitions',
    labelDe: 'Exhibitions (Ausstellungen 2026)',
    labelFa: 'نمایشگاه‌ها',
    targetId: 'exhibitions',
    category: 'press'
  },
  {
    id: 'award-references',
    num: '04',
    labelEn: 'International Photography Award References',
    labelDe: 'International Photography Award References',
    labelFa: 'مراجع جوایز بین‌المللی عکاسی',
    targetId: 'award-references',
    category: 'press'
  },
  {
    id: 'press',
    num: '05',
    labelEn: 'Press',
    labelDe: 'Press & Medienberichte',
    labelFa: 'مطبوعات و رسانه‌ها',
    targetId: 'press',
    category: 'press'
  },
  {
    id: 'kickboxing',
    num: '06',
    labelEn: 'World Champion Kickboxing',
    labelDe: 'World Champion Kickboxing (10× Weltmeisterin)',
    labelFa: 'قهرمانی جهان کیک‌بوکسینگ',
    targetId: 'kickboxing',
    category: 'kickboxing'
  },
  {
    id: 'engagement',
    num: '07',
    labelEn: 'Committed to Environmental Protection, Human Rights and Peace',
    labelDe: 'Committed to Environmental Protection, Human Rights and Peace',
    labelFa: 'تعهد به محیط زیست، حقوق بشر و صلح',
    targetId: 'engagement',
    category: 'biography'
  },
  {
    id: 'education',
    num: '08',
    labelEn: 'Interdisciplinary Academic Education',
    labelDe: 'Interdisciplinary Academic Education (Bildungsweg)',
    labelFa: 'تحصیلات دانشگاهی بین‌رشته‌ای',
    targetId: 'education',
    category: 'biography'
  },
  {
    id: 'contact',
    num: '09',
    labelEn: 'Contact',
    labelDe: 'Contact & Anfragen',
    labelFa: 'تماس و اخذ مجوز',
    targetId: 'contact',
    isContact: true
  },
  {
    id: 'biography',
    num: '10',
    labelEn: 'Biography',
    labelDe: 'Biography (Vita)',
    labelFa: 'زندگی‌نامه',
    targetId: 'biography',
    category: 'biography'
  },
  {
    id: 'gallery',
    num: '11',
    labelEn: 'Gallery',
    labelDe: 'Gallery & Momente',
    labelFa: 'گالری',
    targetId: 'gallery',
    category: 'gallery'
  }
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
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 h-20 flex items-center justify-between gap-4">
        
        {/* Brand / Artist Logo */}
        <button
          onClick={onGoHome}
          className="text-left rtl:text-right group focus:outline-none cursor-pointer flex flex-col justify-center shrink-0"
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-2xl font-serif tracking-widest font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
              SchirZan
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
                  <span className="text-[10px] text-stone-400 font-mono">11 Einträge</span>
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

      {/* Mobile Drawer Menu: ALL 11 ITEMS FROM WORDPRESS PRESERVED */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-stone-200 px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <span className="text-[11px] uppercase tracking-widest text-amber-800 font-mono font-bold">
              {currentLang === 'de' ? 'Alle 11 Bereiche der Website' : currentLang === 'fa' ? 'فهرست کامل ۱۱ بخش سایت' : 'All 11 Site Links'}
            </span>
            <span className="text-[10px] font-mono text-stone-500">11 Seiten</span>
          </div>

          <div className="space-y-1.5">
            {ORIGINAL_11_MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigateToItem(item)}
                className="w-full p-3 rounded-xl bg-white border border-stone-200/80 hover:bg-stone-50 transition-all flex items-center justify-between text-left rtl:text-right cursor-pointer group shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold text-amber-800 w-5 shrink-0">
                    {item.num}
                  </span>
                  <div className="shrink-0">{getItemIcon(item.id)}</div>
                  <span className="text-xs font-medium text-stone-900 group-hover:text-amber-900">
                    {getItemLabel(item)}
                  </span>
                </div>
                <span className="text-stone-300 text-xs">→</span>
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold tracking-wide transition-all text-center cursor-pointer shadow-xs"
            >
              {currentLang === 'de' ? 'Direkte Nachricht senden (Kontakt)' : currentLang === 'fa' ? 'ارسال پیام مستقیم (تماس)' : 'Send Direct Message (Contact)'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
