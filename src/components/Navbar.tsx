import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
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
      labelFa: 'معماری'
    },
    {
      id: 'fine-art' as const,
      labelDe: 'Fine Art',
      labelEn: 'Fine Art',
      labelFa: 'هنرهای زیبا'
    },
    {
      id: 'social-environmental' as const,
      labelDe: 'Social Themes',
      labelEn: 'Social Themes',
      labelFa: 'مضامین اجتماعی'
    },
    {
      id: 'portraits' as const,
      labelDe: 'Portraits',
      labelEn: 'Portraits',
      labelFa: 'پرتره‌ها'
    }
  ];

  // Preserved WordPress sections
  const secondarySections = [
    {
      id: 'biography' as const,
      labelDe: 'Vita',
      labelEn: 'Vita',
      labelFa: 'زندگی‌نامه'
    },
    {
      id: 'press' as const,
      labelDe: 'Press & Media',
      labelEn: 'Press & Media',
      labelFa: 'رسانه‌ها'
    }
  ];

  const handleSelect = (catId: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press') => {
    onSelectCategory(catId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-stone-200 text-stone-900 transition-colors w-full">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 h-20 flex items-center justify-between gap-4">
        
        {/* Brand / Artist Logo */}
        <button
          onClick={onGoHome}
          className="text-left group focus:outline-none cursor-pointer flex flex-col justify-center shrink-0"
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

        {/* Desktop Category Navigation: Core 4 Categories + Preserved WP Pages */}
        <nav className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse">
          {coreCategories.map(cat => {
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all cursor-pointer rounded ${
                  isActive
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
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

          <span className="h-4 w-px bg-stone-300 mx-2" />

          {secondarySections.map(sec => {
            const isActive = currentCategory === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleSelect(sec.id)}
                className={`px-3 py-1.5 text-xs font-medium transition-all cursor-pointer rounded ${
                  isActive
                    ? 'bg-stone-800 text-white'
                    : 'text-stone-500 hover:text-stone-800 hover:bg-stone-200/40'
                }`}
              >
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

        {/* Right Tools: Language Switcher (DE / EN / FA) & Contact */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          
          {/* Trilingual Switcher (DE / EN / FA) */}
          <div className="flex items-center bg-white border border-stone-200 p-0.5 rounded text-xs">
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
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium tracking-wide transition-all cursor-pointer"
          >
            <span>{currentLang === 'de' ? 'Kontakt' : currentLang === 'fa' ? 'تماس' : 'Contact'}</span>
          </button>

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
            aria-label="Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu (Full coverage for smartphones) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf8f5] border-b border-stone-200 px-4 pt-3 pb-6 space-y-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-500 font-mono font-medium mb-2">
              {currentLang === 'de' ? 'Werkgruppen' : currentLang === 'fa' ? 'مجموعه‌ها' : 'Categories'}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {coreCategories.map(cat => {
                const isActive = currentCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelect(cat.id)}
                    className={`p-2.5 rounded text-xs font-medium transition-all text-left rtl:text-right cursor-pointer ${
                      isActive
                        ? 'bg-stone-900 text-white'
                        : 'bg-white border border-stone-200 text-stone-800 hover:bg-stone-50'
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
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-stone-500 font-mono font-medium mb-2">
              {currentLang === 'de' ? 'Information' : currentLang === 'fa' ? 'اطلاعات' : 'Information'}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {secondarySections.map(sec => {
                const isActive = currentCategory === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleSelect(sec.id)}
                    className={`p-2.5 rounded text-xs font-medium transition-all text-left rtl:text-right cursor-pointer ${
                      isActive
                        ? 'bg-stone-800 text-white'
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
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
        </div>
      )}
    </header>
  );
};
