import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import type { PhotoItem, Language } from '../data/photographyData';
import { resolveAsset } from '../utils/resolveAsset';

interface LightboxModalProps {
  photos: PhotoItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  currentLang: Language;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  currentLang
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];
  const isRtl = currentLang === 'fa';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-2 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close Button */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-60"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 bg-stone-900/80 px-4 py-1.5 rounded-full border border-stone-700/80 text-xs font-mono">
          <span>{currentIndex + 1} / {photos.length}</span>
          <span className="text-stone-500">|</span>
          <span className="text-stone-300">SchirZan Collection</span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white rounded-full border border-stone-700/80 transition-colors cursor-pointer"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Navigation Button */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + photos.length) % photos.length);
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-60 p-3 bg-stone-900/70 hover:bg-stone-800/90 text-white rounded-full border border-stone-700/80 transition-all hover:scale-105 cursor-pointer"
          aria-label="Vorheriges Bild"
        >
          {isRtl ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
        </button>
      )}

      {/* Central Image View */}
      <div
        className="relative max-w-6xl max-h-[85vh] w-full flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl">
          <img
            src={resolveAsset(currentPhoto.src)}
            alt={currentPhoto.alt}
            draggable={false}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto select-none"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.endsWith('.webp')) {
                target.src = target.src.replace(/\.webp$/, '.jpg');
              }
            }}
          />

          {/* Transparent Protective Shield against right click & drag */}
          <div 
            className="absolute inset-0 z-10 select-none cursor-default" 
            onContextMenu={(e) => e.preventDefault()} 
          />

          {/* Protective Watermark */}
          <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-xs text-white/70 font-serif bg-stone-950/60 px-2.5 py-1 rounded-md backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>© SchirZan · Schahrsad Shahmirzadi</span>
          </div>
        </div>

        {/* Caption & Beitext */}
        <div className="mt-3.5 max-w-2xl px-4 text-center space-y-1">
          {currentPhoto.alt && (
            <h4 className="text-sm sm:text-base font-serif font-bold text-white tracking-wide">
              {currentPhoto.alt}
            </h4>
          )}
          {(currentPhoto.captionDe || currentPhoto.captionFa || currentPhoto.captionEn) && (
            <p className="text-xs sm:text-sm text-stone-300 font-sans tracking-wide leading-relaxed font-normal">
              {currentLang === 'de'
                ? currentPhoto.captionDe
                : currentLang === 'fa'
                ? currentPhoto.captionFa
                : currentPhoto.captionEn}
            </p>
          )}
        </div>

        {/* Optional External Donation / Fundraising Link */}
        {currentPhoto.externalLink && (
          <div className="mt-3 flex justify-center">
            <a
              href={currentPhoto.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs sm:text-sm font-semibold transition-colors shadow-lg"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>
                {currentLang === 'de'
                  ? (currentPhoto.externalLinkTextDe || 'Support the fundraising run →')
                  : currentLang === 'fa'
                  ? (currentPhoto.externalLinkTextFa || 'Support the fundraising run →')
                  : (currentPhoto.externalLinkTextEn || 'Support the fundraising run →')}
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-90" />
            </a>
          </div>
        )}
      </div>

      {/* Next Navigation Button */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % photos.length);
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-60 p-3 bg-stone-900/70 hover:bg-stone-800/90 text-white rounded-full border border-stone-700/80 transition-all hover:scale-105 cursor-pointer"
          aria-label="Nächstes Bild"
        >
          {isRtl ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
        </button>
      )}
    </div>
  );
};

