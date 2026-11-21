import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Heart,
  ExternalLink,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
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
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Touch swipe handling for mobile devices
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Reset zoom on photo change
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  // Fullscreen tracking
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  // Keyboard navigation & Shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % photos.length);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'z' || e.key === 'Z') {
        setIsZoomed((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate, isZoomed, toggleFullscreen]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];
  const isRtl = currentLang === 'fa';

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isZoomed) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isZoomed || touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Horizontal swipe threshold: 45px
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        // Swipe left -> Next photo
        onNavigate((currentIndex + 1) % photos.length);
      } else {
        // Swipe right -> Prev photo
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      }
    } else if (deltaY > 120 && Math.abs(deltaX) < 60) {
      // Swipe down -> Close modal
      onClose();
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none overflow-hidden animate-in fade-in duration-200"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Left: Counter & Collection Tag */}
      <div
        className="absolute top-3 left-3 sm:top-5 sm:left-5 z-70 flex items-center gap-2 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 bg-stone-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-800 text-xs font-mono text-white/90 shadow-xl">
          <span className="font-bold text-amber-400">{currentIndex + 1}</span>
          <span className="text-stone-500">/</span>
          <span>{photos.length}</span>
          <span className="text-stone-600 hidden sm:inline">|</span>
          <span className="text-stone-300 hidden sm:inline">SchirZan Fine Art</span>
        </div>
      </div>

      {/* Top Right: Fullscreen, Zoom, Info, Close Controls */}
      <div
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-70 flex items-center gap-1.5 sm:gap-2 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toggle Zoom (1x vs 2x) */}
        <button
          type="button"
          onClick={() => setIsZoomed((prev) => !prev)}
          className="p-2 sm:p-2.5 bg-stone-950/80 hover:bg-stone-800 text-stone-200 hover:text-white rounded-full border border-stone-800 backdrop-blur-md transition-colors cursor-pointer shadow-lg"
          title={isZoomed ? 'Zoom zurücksetzen (Z)' : 'Details heranzoomen (Z)'}
          aria-label="Zoom"
        >
          {isZoomed ? <ZoomOut className="w-4 h-4 sm:w-4.5 sm:h-4.5" /> : <ZoomIn className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
        </button>

        {/* Toggle Browser Native Fullscreen */}
        <button
          type="button"
          onClick={toggleFullscreen}
          className="p-2 sm:p-2.5 bg-stone-950/80 hover:bg-stone-800 text-stone-200 hover:text-white rounded-full border border-stone-800 backdrop-blur-md transition-colors cursor-pointer shadow-lg hidden sm:flex"
          title={isFullscreen ? 'Vollbild beenden (F)' : 'Vollbildmodus (F)'}
          aria-label="Vollbild"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" /> : <Maximize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
        </button>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="p-2 sm:p-2.5 bg-stone-950/80 hover:bg-stone-800 text-stone-200 hover:text-white rounded-full border border-stone-800 backdrop-blur-md transition-colors cursor-pointer shadow-lg"
          title="Schließen (Esc)"
          aria-label="Schließen"
        >
          <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>
      </div>

      {/* Prev Navigation Button */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + photos.length) % photos.length);
          }}
          className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 z-70 p-2.5 sm:p-4 bg-stone-950/75 hover:bg-stone-900 text-white rounded-full border border-stone-800/80 backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-2xl"
          aria-label="Vorheriges Bild"
        >
          {isRtl ? <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" /> : <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      )}

      {/* Central Viewport - Maximal groß was die Auflösung des Endgerätes hergibt */}
      <div
        className={`relative w-full h-full flex items-center justify-center p-1 sm:p-2 ${
          isZoomed ? 'overflow-auto cursor-zoom-out' : 'overflow-hidden cursor-zoom-in'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setIsZoomed((prev) => !prev);
        }}
      >
        <div className="relative flex items-center justify-center max-w-full max-h-full">
          <img
            src={resolveAsset(currentPhoto.src)}
            alt={currentPhoto.alt}
            draggable={false}
            className={`max-w-[99vw] max-h-[96vh] sm:max-w-[98vw] sm:max-h-[96vh] w-auto h-auto object-contain select-none protected-art transition-transform duration-300 ease-out ${
              isZoomed ? 'scale-[1.8] sm:scale-[2.0]' : 'scale-100 shadow-2xl'
            }`}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.endsWith('.webp')) {
                target.src = target.src.replace(/\.webp$/, '.jpg');
              }
            }}
          />

          {/* Transparent Protective Shield against right click & drag */}
          <div
            className="absolute inset-0 z-10 select-none cursor-inherit"
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Protective Watermark - direkt unten auf dem Bild wie vorher */}
          <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 text-xs text-white/90 font-serif bg-stone-950/70 px-2.5 py-1 rounded-md backdrop-blur-xs shadow-md pointer-events-none select-none">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>SchirZan | Schahrsad Shahmirzadi</span>
          </div>
        </div>
      </div>

      {/* Next Navigation Button */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % photos.length);
          }}
          className="absolute right-1 sm:right-6 top-1/2 -translate-y-1/2 z-70 p-2.5 sm:p-4 bg-stone-950/75 hover:bg-stone-900 text-white rounded-full border border-stone-800/80 backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-2xl"
          aria-label="Nächstes Bild"
        >
          {isRtl ? <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" /> : <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      )}

      {/* Optional External Donation / Fundraising Link */}
      {currentPhoto.externalLink && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-70 flex justify-center pointer-events-auto">
          <a
            href={currentPhoto.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-semibold transition-colors shadow-lg"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>
              {currentLang === 'de'
                ? (currentPhoto.externalLinkTextDe || 'Spendenlauf unterstützen →')
                : currentLang === 'fa'
                ? (currentPhoto.externalLinkTextFa || 'حمایت از کمپین →')
                : (currentPhoto.externalLinkTextEn || 'Support the fundraising run →')}
            </span>
            <ExternalLink className="w-3 h-3 opacity-90" />
          </a>
        </div>
      )}
    </div>
  );
};
