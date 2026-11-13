import React, { useState } from 'react';
import { Globe, Menu, X, Building2, Palette, Globe2, User, GraduationCap, Newspaper, ArrowDown } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface NavbarProps {
  currentCategory: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press';
  onSelectCategory: (catId: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press') => void;
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onGoHome: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCategory,
  onSelectCategory,
  currentLang,
  onToggleLang,
  onGoHome,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // The 4 Core Art Categories as requested by client
  const coreCategories = [
    {
      id: 'architecture' as const,
      labelDe: 'Architecture',
      labelEn: 'Architecture',
      labelFa: 'معماری',
      icon: <Building2 className="w-3.5 h-3.5" />
    },
    {
      id: 'fine-art' as const,
      labelDe: 'Fine Art',
      labelEn: 'Fine Art',
      labelFa: 'هنرهای زیبا',
      icon: <Palette className="w-3.5 h-3.5" />
    },
    {
      id: 'social-environmental' as const,
      labelDe: 'Social Themes',
      labelEn: 'Social Themes',
      labelFa: 'مضامین اجتماعی',
      icon: <Globe2 className="w-3.5 h-3.5" />
    },
    {
      id: 'portraits' as const,
      labelDe: 'Portraits',
      labelEn: 'Portraits',
      labelFa: 'پرتره‌ها',
      icon: <User className="w-3.5 h-3.5" />
    }
  ];

  // Preserved WordPress sections
  const secondarySections = [
    {
      id: 'biography' as const,
      labelDe: 'Vita & Engagement',
      labelEn: 'Vita & Activism',
      labelFa: 'زندگی‌نامه و تعهدات',
      icon: <GraduationCap className="w-3.5 h-3.5" />
    },
    {
      id: 'press' as const,
      labelDe: 'Press & Media',
      labelEn: 'Press & Media',
      labelFa: 'رسانه‌ها',
      icon: <Newspaper className="w-3.5 h-3.5" />
    }
  ];

  const handleSelect = (catId: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press') => {
    onSelectCategory(catId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#faf8f5]/95 border-b border-stone-200/90 text-stone-900 shadow-xs transition-colors w-full">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 h-20 flex items-center justify-between gap-4">
        
        {/* Brand / Artist Logo */}
        <button
          onClick={onGoHome}
          className="text-left group focus:outline-none cursor-pointer flex flex-col justify-center shrink-0"
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-2xl font-serif tracking-widest font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
              SchirZan
            </span>
            <span className="text-stone-300 text-sm hidden sm:inline">|</span>
            <span className="text-stone-700 text-xs sm:text-sm tracking-wide font-medium hidden sm:inline">
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

        {/* Desktop Category Navigation: Core 4 Categories + Preserved WP Pages */}
        <nav className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse">
          {coreCategories.map(cat => {
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                {cat.icon}
                <span>
                  {currentLang === 'de'
                    ? cat.labelDe
                    : currentLang === 'fa'
                    ? cat.labelFa
                    : cat.labelEn}
                </span>
                <ArrowDown className={`w-3 h-3 transition-opacity ${isActive ? 'opacity-80' : 'opacity-30'}`} />
              </button>
            );
          })}

          <span className="h-4 w-px bg-stone-300 mx-1" />

          {secondarySections.map(sec => {
            const isActive = currentCategory === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleSelect(sec.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-stone-500 hover:text-stone-800 hover:bg-stone-200/50'
                }`}
              >
                {sec.icon}
                <span>
                  {currentLang === 'de'
                    ? sec.labelDe
                    : currentLang === 'fa'
                    ? sec.labelFa
                    : sec.labelEn}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Medium Screen Navbar Shortcut (Core 4 Categories) */}
        <nav className="hidden lg:flex xl:hidden items-center space-x-1 rtl:space-x-reverse">
          {coreCategories.map(cat => {
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <span>
                  {currentLang === 'de'
                    ? cat.labelDe
                    : currentLang === 'fa'
                    ? cat.labelFa
                    : cat.labelEn}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Bar: Language Switcher (DE / EN / FA) & Contact Button */}
        <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
          
          {/* Trilingual Toggle Pill */}
          <div className="flex items-center bg-stone-200/70 p-1 rounded-full text-xs border border-stone-300/60 shadow-2xs">
            <Globe className="w-3.5 h-3.5 mx-1.5 text-stone-500" />
            
            <button
              onClick={() => onToggleLang('de')}
              className={`px-2.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                currentLang === 'de'
                  ? 'bg-white text-stone-900 shadow-2xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Deutsch (Original)"
            >
              DE
            </button>

            <button
              onClick={() => onToggleLang('en')}
              className={`px-2.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-white text-stone-900 shadow-2xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="English (International)"
            >
              EN
            </button>

            <button
              onClick={() => onToggleLang('fa')}
              className={`px-2.5 py-1 rounded-full font-medium transition-all cursor-pointer font-sans ${
                currentLang === 'fa'
                  ? 'bg-amber-800 text-white shadow-2xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="فارسی (فرهنگ و ریشه‌ها)"
            >
              فارسی
            </button>
          </div>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold tracking-wide transition-all shadow-2xs hover:shadow-xs cursor-pointer"
          >
            <span>{currentLang === 'de' ? 'Kontakt' : currentLang === 'fa' ? 'تماس' : 'Contact'}</span>
          </button>

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu (Full coverage for smartphones) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-stone-300/80 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-amber-800 font-mono font-bold mb-2">
              {currentLang === 'de' ? 'Kunst & Werkgruppen' : currentLang === 'fa' ? 'دسته‌بندی‌های هنری' : 'Art Categories'}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {coreCategories.map(cat => {
                const isActive = currentCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelect(cat.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all text-left rtl:text-right cursor-pointer ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white border border-stone-200 text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    {cat.icon}
                    <span>
                      {currentLang === 'de'
                        ? cat.labelDe
                        : currentLang === 'fa'
                        ? cat.labelFa
                        : cat.labelEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-500 font-mono font-bold mb-2">
              {currentLang === 'de' ? 'Vita & Archiv' : currentLang === 'fa' ? 'سوابق و آرشیو' : 'Vita & Archive'}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {secondarySections.map(sec => {
                const isActive = currentCategory === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleSelect(sec.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium transition-all text-left rtl:text-right cursor-pointer ${
                      isActive
                        ? 'bg-amber-800 text-white shadow-xs'
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {sec.icon}
                    <span>
                      {currentLang === 'de'
                        ? sec.labelDe
                        : currentLang === 'fa'
                        ? sec.labelFa
                        : sec.labelEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-xl bg-amber-800 text-white text-xs font-semibold shadow-xs"
            >
              {currentLang === 'de' ? 'Kontakt aufnehmen' : currentLang === 'fa' ? 'تماس با هنرمند' : 'Get in Touch'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
