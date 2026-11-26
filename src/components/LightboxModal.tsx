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
import { findSeriesForPhoto } from '../data/photographyData';

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
  const [isDesktopPanelOpen, setIsDesktopPanelOpen] = useState(true);

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

  // Find series context and thoughts/connection of SchirZan with this artwork
  const seriesInfo = findSeriesForPhoto(currentPhoto);

  const artworkTitle =
    (seriesInfo && (
      currentLang === 'de'
        ? seriesInfo.titleDe
        : currentLang === 'fa'
        ? seriesInfo.titleFa
        : currentLang === 'fr'
        ? (seriesInfo.titleFr || seriesInfo.titleEn)
        : currentLang === 'it'
        ? (seriesInfo.titleIt || seriesInfo.titleEn)
        : currentLang === 'tr'
        ? (seriesInfo.titleTr || seriesInfo.titleEn)
        : seriesInfo.titleEn
    )) || currentPhoto.alt || '';

  const rawDescription =
    (seriesInfo && (
      currentLang === 'de'
        ? seriesInfo.descriptionDe
        : currentLang === 'fa'
        ? seriesInfo.descriptionFa
        : currentLang === 'fr'
        ? (seriesInfo.descriptionFr || seriesInfo.descriptionEn)
        : currentLang === 'it'
        ? (seriesInfo.descriptionIt || seriesInfo.descriptionEn)
        : currentLang === 'tr'
        ? (seriesInfo.descriptionTr || seriesInfo.descriptionEn)
        : seriesInfo.descriptionEn
    )) || (currentPhoto.captionDe && !currentPhoto.captionDe.startsWith('Image 0') ? (currentLang === 'fa' ? currentPhoto.captionFa : currentLang === 'de' ? currentPhoto.captionDe : currentPhoto.captionEn) : '');

  const personalNote =
    seriesInfo && (
      currentLang === 'de'
        ? seriesInfo.personalNoteDe
        : currentLang === 'fa'
        ? seriesInfo.personalNoteFa
        : currentLang === 'fr'
        ? (seriesInfo.personalNoteFr || seriesInfo.personalNoteEn)
        : currentLang === 'it'
        ? (seriesInfo.personalNoteIt || seriesInfo.personalNoteEn)
        : currentLang === 'tr'
        ? (seriesInfo.personalNoteTr || seriesInfo.personalNoteEn)
        : seriesInfo.personalNoteEn
    );

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
      {/* Top Left: Counter & Theme des Werks */}
      <div
        className="absolute top-2 left-2 sm:top-5 sm:left-5 z-70 flex flex-col gap-1 pointer-events-auto max-w-[55vw] sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 bg-stone-950/80 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-stone-800 text-[11px] sm:text-xs font-mono text-white/90 shadow-xl self-start">
          <span className="font-bold text-amber-400">{currentIndex + 1}</span>
          <span className="text-stone-500">/</span>
          <span>{photos.length}</span>
          <span className="text-stone-600 hidden sm:inline">|</span>
          <span className="text-stone-300 hidden sm:inline">SchirZan Fine Art</span>
        </div>

        {artworkTitle && (
          <div className="hidden sm:block pl-1 pt-0.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/90 font-semibold block">
              {currentLang === 'fa' ? 'موضوع اثر:' : currentLang === 'de' ? 'Thema des Werks:' : currentLang === 'fr' ? 'Thème de l’œuvre :' : currentLang === 'it' ? 'Tema dell’opera:' : currentLang === 'tr' ? 'Eserin Teması:' : 'Artwork Theme:'}
            </span>
            <h3 className="text-sm sm:text-base font-serif font-bold text-white tracking-wide drop-shadow-md truncate">
              {artworkTitle}
            </h3>
          </div>
        )}
      </div>

      {/* Top Right: Fullscreen, Zoom, Close Controls */}
      <div
        className="absolute top-2 right-2 sm:top-5 sm:right-5 z-70 flex items-center gap-1.5 sm:gap-2 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toggle Zoom (1x vs 2x) */}
        <button
          type="button"
          onClick={() => setIsZoomed((prev) => !prev)}
          className="p-1.5 sm:p-2.5 bg-stone-950/80 hover:bg-stone-800 text-stone-200 hover:text-white rounded-full border border-stone-800 backdrop-blur-md transition-colors cursor-pointer shadow-lg"
          title={isZoomed ? 'Zoom zurücksetzen (Z)' : 'Details heranzoomen (Z)'}
          aria-label="Zoom"
        >
          {isZoomed ? <ZoomOut className="w-4 h-4 sm:w-4.5 sm:h-4.5" /> : <ZoomIn className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
        </button>

        {/* Toggle Browser Native Fullscreen */}
        <button
          type="button"
          onClick={toggleFullscreen}
          className="p-1.5 sm:p-2.5 bg-stone-950/80 hover:bg-stone-800 text-stone-200 hover:text-white rounded-full border border-stone-800 backdrop-blur-md transition-colors cursor-pointer shadow-lg hidden sm:flex"
          title={isFullscreen ? 'Vollbild beenden (F)' : 'Vollbildmodus (F)'}
          aria-label="Vollbild"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" /> : <Maximize2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
        </button>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 sm:p-2.5 bg-stone-950/80 hover:bg-stone-800 text-stone-200 hover:text-white rounded-full border border-stone-800 backdrop-blur-md transition-colors cursor-pointer shadow-lg"
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
        className={`relative w-full h-[100dvh] max-h-[100dvh] flex items-center justify-center p-0 sm:p-2 ${
          isZoomed ? 'overflow-auto cursor-zoom-out' : 'overflow-hidden cursor-zoom-in'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setIsZoomed((prev) => !prev);
        }}
      >
        <div className="relative inline-flex items-center justify-center max-w-full max-h-full">
          <img
            src={resolveAsset(currentPhoto.src)}
            alt={currentPhoto.alt}
            draggable={false}
            className={`max-w-[100vw] max-h-[100dvh] sm:max-w-[98vw] sm:max-h-[96dvh] w-auto h-auto object-contain select-none protected-art transition-transform duration-300 ease-out ${
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

          {/* Protective Watermark - rechtsbündig unten auf dem Bild per Kundenanweisung */}
          <div className="absolute bottom-2.5 sm:bottom-3.5 right-3 sm:right-6 rtl:right-auto rtl:left-3 sm:rtl:left-6 z-20 flex items-center gap-1.5 text-[10.5px] sm:text-xs text-amber-100/90 font-serif bg-stone-950/80 px-3 py-1 rounded-full border border-stone-800/80 backdrop-blur-xs shadow-lg pointer-events-none select-none whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
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

      {/* Desktop Curator Panel (rechts neben dem Bild auf dem PC - auf Mobilgeräten komplett ausgeblendet) */}
      {(rawDescription || personalNote) && isDesktopPanelOpen && (
        <aside
          className="absolute right-4 xl:right-8 top-20 bottom-16 w-80 xl:w-96 hidden lg:flex flex-col justify-center z-70 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-stone-950/85 backdrop-blur-md rounded-2xl border border-stone-800/90 p-5 xl:p-6 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto no-scrollbar text-left rtl:text-right">
            <div className="flex items-start justify-between gap-3 border-b border-stone-800/80 pb-3">
              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  {currentLang === 'de'
                    ? 'Was SchirZan mit dem Werk verbindet'
                    : currentLang === 'fa'
                    ? 'پیوند هنرمند با این اثر'
                    : currentLang === 'fr'
                    ? 'Ce qui lie SchirZan à l’œuvre'
                    : currentLang === 'it'
                    ? 'Cosa lega SchirZan all’opera'
                    : currentLang === 'tr'
                    ? 'SchirZan’ın Eserle Olan Bağı'
                    : 'What connects SchirZan with the work'}
                </span>
                <h4 className="text-base xl:text-lg font-serif font-bold text-white leading-snug">
                  {artworkTitle}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setIsDesktopPanelOpen(false)}
                className="p-1 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
                title={currentLang === 'de' ? 'Infotext einklappen' : 'Collapse info'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {rawDescription && (
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                  {currentLang === 'de'
                    ? 'Gedanken & Bildkonzept:'
                    : currentLang === 'fa'
                    ? 'ایده و دیدگاه هنری:'
                    : currentLang === 'fr'
                    ? 'Concept & Vision :'
                    : currentLang === 'it'
                    ? 'Concetto & Visione:'
                    : currentLang === 'tr'
                    ? 'Konsept ve Sanatsal Bakış:'
                    : 'Concept & Artistic Vision:'}
                </span>
                <p className="text-xs xl:text-sm text-stone-300 font-sans leading-relaxed font-normal">
                  {rawDescription}
                </p>
              </div>
            )}

            {personalNote && (
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/50 text-xs xl:text-sm text-amber-200/95 italic font-serif leading-relaxed">
                {personalNote}
              </div>
            )}

            <div className="pt-2 border-t border-stone-800/70 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span>{currentIndex + 1} / {photos.length}</span>
              <span className="flex items-center gap-1 text-stone-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>SchirZan Signature Collection</span>
              </span>
            </div>
          </div>
        </aside>
      )}

      {/* Button to reopen desktop panel if collapsed */}
      {(rawDescription || personalNote) && !isDesktopPanelOpen && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsDesktopPanelOpen(true);
          }}
          className="absolute right-4 xl:right-8 bottom-6 z-70 hidden lg:inline-flex items-center gap-2 px-3.5 py-2 bg-stone-950/85 hover:bg-stone-900 border border-stone-800 text-stone-200 hover:text-white rounded-full text-xs font-mono font-medium backdrop-blur-md shadow-xl transition-all cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>{currentLang === 'de' ? 'Über dieses Werk' : currentLang === 'fa' ? 'درباره این اثر' : 'About this work'}</span>
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
