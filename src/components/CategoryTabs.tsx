import React from 'react';
import { CATEGORIES, type Language } from '../data/photographyData';
import { Building2, Palette, Globe2, User } from 'lucide-react';

interface CategoryTabsProps {
  currentCategory: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press';
  onSelectCategory: (id: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits' | 'biography' | 'press') => void;
  currentLang: Language;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  currentCategory,
  onSelectCategory,
  currentLang
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'architecture':
        return <Building2 className="w-4 h-4" />;
      case 'fine-art':
        return <Palette className="w-4 h-4" />;
      case 'social-environmental':
        return <Globe2 className="w-4 h-4" />;
      case 'portraits':
        return <User className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const activeCat = CATEGORIES.find(c => c.id === currentCategory);

  return (
    <div className="w-full bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-500 font-mono">
              {currentLang === 'de' ? 'Kategorien' : currentLang === 'fa' ? 'دسته‌بندی‌ها' : 'Categories'}
            </span>
            <h2 className="text-2xl font-serif text-neutral-100 mt-0.5">
              {currentLang === 'de'
                ? activeCat?.titleDe
                : currentLang === 'fa'
                ? activeCat?.titleFa
                : activeCat?.titleEn}
            </h2>
            <p className="text-xs text-neutral-300 mt-1 max-w-xl font-normal">
              {currentLang === 'de'
                ? activeCat?.descriptionDe
                : currentLang === 'fa'
                ? activeCat?.descriptionFa
                : activeCat?.descriptionEn}
            </p>
          </div>

          {/* Subheader Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => {
              const isActive = cat.id === currentCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 font-semibold shadow-lg shadow-amber-500/20'
                      : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                  }`}
                >
                  {getIcon(cat.id)}
                  <span>
                    {currentLang === 'de'
                      ? cat.titleDe
                      : currentLang === 'fa'
                      ? cat.titleFa
                      : cat.titleEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
