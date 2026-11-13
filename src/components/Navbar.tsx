import React from 'react';
import { Globe, ExternalLink } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
  onSelectCategory: (catId: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits') => void;
  onGoHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onSelectCategory,
  onGoHome
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/90 border-b border-neutral-800 text-neutral-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={onGoHome}
          className="text-left group transition-transform focus:outline-none cursor-pointer flex flex-col justify-center"
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-2xl font-serif tracking-widest font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
              SchirZan
            </span>
            <span className="text-neutral-500 text-sm hidden sm:inline">|</span>
            <span className="text-neutral-400 text-xs sm:text-sm tracking-wider font-light hidden sm:inline">
              {currentLang === 'fa' ? 'شهزاد شاهمیرزادی' : 'Schahrsad Shahmirzadi'}
            </span>
          </div>
          <p className="text-[10px] tracking-widest uppercase text-neutral-400 font-sans group-hover:text-neutral-300 mt-0.5">
            {currentLang === 'de'
              ? 'Photographie & Kunst'
              : currentLang === 'fa'
              ? 'عکاسی و هنر · شیرزن'
              : 'Photography & Art'}
          </p>
        </button>

        {/* Center Navigation Shortcuts */}
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse text-sm font-sans tracking-wide text-neutral-300">
          <button
            onClick={() => onSelectCategory('architecture')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            {currentLang === 'fa' ? 'معماری' : 'Architecture'}
          </button>
          <button
            onClick={() => onSelectCategory('fine-art')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            {currentLang === 'fa' ? 'هنرهای زیبا' : 'Fine Art'}
          </button>
          <button
            onClick={() => onSelectCategory('social-environmental')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            {currentLang === 'fa' ? 'مضامین اجتماعی' : 'Social Themes'}
          </button>
          <button
            onClick={() => onSelectCategory('portraits')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            {currentLang === 'fa' ? 'پرتره‌ها' : 'Portraits'}
          </button>
        </nav>

        {/* Language Switcher and Domains */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Domains pill */}
          <div className="hidden lg:flex items-center text-xs text-neutral-400 space-x-2 rtl:space-x-reverse bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full">
            <a
              href="https://schirzan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <span>schirzan.com</span>
              <ExternalLink className="w-3 h-3 text-neutral-500" />
            </a>
          </div>

          {/* 3-Way Language Switcher: DE | EN | FA */}
          <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-full p-1 shadow-inner">
            <Globe className="w-3.5 h-3.5 text-neutral-400 ml-1.5 mr-1 rtl:ml-1 rtl:mr-1.5" />
            
            <button
              onClick={() => onToggleLang('de')}
              title="Deutsch"
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                currentLang === 'de'
                  ? 'bg-amber-500 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-100'
              }`}
            >
              DE
            </button>

            <button
              onClick={() => onToggleLang('en')}
              title="English"
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-amber-500 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-100'
              }`}
            >
              EN
            </button>

            <button
              onClick={() => onToggleLang('fa')}
              title="فارسی (Persian)"
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                currentLang === 'fa'
                  ? 'bg-amber-500 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-100 font-sans'
              }`}
            >
              فا
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};
