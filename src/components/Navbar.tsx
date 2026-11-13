import React, { useState } from 'react';
import { Globe, ExternalLink, Menu, X, Building2, Palette, Globe2, User } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface NavbarProps {
  currentCategory: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits';
  onSelectCategory: (catId: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits') => void;
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onGoHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCategory,
  onSelectCategory,
  currentLang,
  onToggleLang,
  onGoHome
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      id: 'architecture' as const,
      labelDe: 'Architecture',
      labelEn: 'Architecture',
      labelFa: 'معماری',
      icon: <Building2 className="w-4 h-4" />
    },
    {
      id: 'fine-art' as const,
      labelDe: 'Fine Art',
      labelEn: 'Fine Art',
      labelFa: 'هنرهای زیبا',
      icon: <Palette className="w-4 h-4" />
    },
    {
      id: 'social-environmental' as const,
      labelDe: 'Social Themes',
      labelEn: 'Social Themes',
      labelFa: 'مضامین اجتماعی',
      icon: <Globe2 className="w-4 h-4" />
    },
    {
      id: 'portraits' as const,
      labelDe: 'Portraits',
      labelEn: 'Portraits',
      labelFa: 'پرتره‌ها',
      icon: <User className="w-4 h-4" />
    }
  ];

  const handleCategoryClick = (catId: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits') => {
    onSelectCategory(catId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#faf8f5]/95 border-b border-stone-200/90 text-stone-900 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
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
            <span className="text-stone-600 text-xs sm:text-sm tracking-wide font-medium hidden sm:inline">
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

        {/* Desktop Category Navigation (Integrated single bar) */}
        <nav className="hidden lg:flex items-center space-x-1.5 rtl:space-x-reverse">
          {categories.map(cat => {
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-sm'
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
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Domain & Language Switcher & Mobile Menu Button */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse shrink-0">
          
          {/* Domain Shortcut */}
          <div className="hidden sm:flex items-center text-xs text-stone-600 bg-white border border-stone-200/90 px-3 py-1.5 rounded-full shadow-2xs hover:border-amber-700 transition-colors">
            <a
              href="https://schirzan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-800 transition-colors flex items-center gap-1 font-medium"
            >
              <span>schirzan.com</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
          </div>

          {/* Language Switcher: DE | EN | FA */}
          <div className="flex items-center bg-white border border-stone-200 rounded-full p-1 shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-stone-400 ml-1.5 mr-1 rtl:ml-1 rtl:mr-1.5" />
            
            <button
              onClick={() => onToggleLang('de')}
              title="Deutsch"
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                currentLang === 'de'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              DE
            </button>

            <button
              onClick={() => onToggleLang('en')}
              title="English"
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              EN
            </button>

            <button
              onClick={() => onToggleLang('fa')}
              title="فارسی"
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                currentLang === 'fa'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              فا
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-200/60 rounded-xl transition-colors cursor-pointer"
            aria-label="Navigation öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Responsive dropdown inside single navigation) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white/98 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <p className="text-[11px] uppercase tracking-wider font-mono text-stone-400 px-2 py-1 font-semibold">
            {currentLang === 'de' ? 'Kategorien' : currentLang === 'fa' ? 'دسته‌بندی‌ها' : 'Categories'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {categories.map(cat => {
              const isActive = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left rtl:text-right cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
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

          <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 px-2">
            <span>{currentLang === 'fa' ? 'دامنه رسمی' : 'Official website'}</span>
            <a
              href="https://schirzan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 font-medium flex items-center gap-1 hover:underline"
            >
              <span>schirzan.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
