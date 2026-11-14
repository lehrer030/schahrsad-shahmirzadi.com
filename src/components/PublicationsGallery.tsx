import React, { useState } from 'react';
import {
  ExternalLink,
  BookOpen,
  Film,
  Award,
  FileText,
  Play,
  ChevronLeft,
  ChevronRight,
  Eye,
  Layers,
  Maximize2,
  Images
} from 'lucide-react';
import type { Language, PhotoItem } from '../data/photographyData';
import { resolveAsset } from '../utils/resolveAsset';

interface PublicationsGalleryProps {
  currentLang: Language;
  onOpenLightbox?: (photos: PhotoItem[], index: number) => void;
}

interface PerspaSeriesItem {
  id: string;
  choiceNum: number;
  title: string;
  subtitleDe: string;
  subtitleEn: string;
  subtitleFa: string;
  perspaUrl: string;
  photos: PhotoItem[];
}

const PERSPA_SERIES_LIST: PerspaSeriesItem[] = [
  {
    id: 'perspa-solitaire',
    choiceNum: 1,
    title: 'The Solitaire as Abstraction – In Harmony with Nature',
    subtitleDe: 'Serie: In Harmony with Nature · 7 Aufnahmen',
    subtitleEn: 'Series: In Harmony with Nature · 7 works',
    subtitleFa: 'مجموعه: در هماهنگی با طبیعت · ۷ اثر',
    perspaUrl: 'https://perspa.fr/2026/architectural-perspective/the-solitaire-as-abstraction-in-harmony-with-nature/',
    photos: [
      {
        id: 'solitaire-01',
        src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp',
        alt: 'The Solitaire as Abstraction – In Harmony with Nature I',
        captionDe: 'The Solitaire as Abstraction – In Harmony with Nature I · PERSPA Editor’s Choice 2026',
        captionEn: 'The Solitaire as Abstraction – In Harmony with Nature I · PERSPA Editor’s Choice 2026',
        captionFa: 'تک‌بنا به عنوان یک انتزاع – در هماهنگی با طبیعت ۱'
      },
      {
        id: 'solitaire-02',
        src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-02-scaled.webp',
        alt: 'The Solitaire as Abstraction – In Harmony with Nature II',
        captionDe: 'The Solitaire as Abstraction – In Harmony with Nature II',
        captionEn: 'The Solitaire as Abstraction – In Harmony with Nature II',
        captionFa: 'تک‌بنا به عنوان یک انتزاع – در هماهنگی با طبیعت ۲'
      },
      {
        id: 'solitaire-03',
        src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-03-scaled.webp',
        alt: 'The Solitaire as Abstraction – In Harmony with Nature III',
        captionDe: 'The Solitaire as Abstraction – In Harmony with Nature III',
        captionEn: 'The Solitaire as Abstraction – In Harmony with Nature III',
        captionFa: 'تک‌بنا به عنوان یک انتزاع – در هماهنگی با طبیعت ۳'
      },
      {
        id: 'solitaire-04',
        src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-04-scaled.webp',
        alt: 'The Solitaire as Abstraction – In Harmony with Nature IV',
        captionDe: 'The Solitaire as Abstraction – In Harmony with Nature IV',
        captionEn: 'The Solitaire as Abstraction – In Harmony with Nature IV',
        captionFa: 'تک‌بنا به عنوان یک انتزاع – در هماهنگی با طبیعت ۴'
      },
      {
        id: 'solitaire-05',
        src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-05-scaled.webp',
        alt: 'The Solitaire as Abstraction – In Harmony with Nature V',
        captionDe: 'The Solitaire as Abstraction – In Harmony with Nature V',
        captionEn: 'The Solitaire as Abstraction – In Harmony with Nature V',
        captionFa: 'تک‌بنا به عنوان یک انتزاع – در هماهنگی با طبیعت ۵'
      },
      {
        id: 'solitaire-06',
        src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-06-scaled.webp',
        alt: 'The Solitaire as Abstraction – In Harmony with Nature VI',
        captionDe: 'The Solitaire as Abstraction – In Harmony with Nature VI',
        captionEn: 'The Solitaire as Abstraction – In Harmony with Nature VI',
        captionFa: 'تک‌بنا به عنوان یک انتزاع – در هماهنگی با طبیعت ۶'
      },
      {
        id: 'solitaire-07',
        src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-07-scaled.webp',
        alt: 'The Solitaire as Abstraction – In Harmony with Nature VII',
        captionDe: 'The Solitaire as Abstraction – In Harmony with Nature VII',
        captionEn: 'The Solitaire as Abstraction – In Harmony with Nature VII',
        captionFa: 'تک‌بنا به عنوان یک انتزاع – در هماهنگی با طبیعت ۷'
      }
    ]
  },
  {
    id: 'perspa-elegance',
    choiceNum: 2,
    title: 'Elegance of Structure – Black and White',
    subtitleDe: 'Serie: Elegance of Structure · 5 Aufnahmen',
    subtitleEn: 'Series: Elegance of Structure · 5 works',
    subtitleFa: 'مجموعه: شکوه و ظرافت ساختار · ۵ اثر',
    perspaUrl: 'https://perspa.fr/2026/architectural-perspective/elegance-of-structure-black-and-white-2/',
    photos: [
      {
        id: 'elegance-01',
        src: '/images/2026_10_amp-2026-elegance-structure-bw-01-scaled.webp',
        alt: 'Elegance of Structure – Black and White I',
        captionDe: 'Elegance of Structure – Black and White I · Griechische Nationaloper (Athen)',
        captionEn: 'Elegance of Structure – Black and White I · Greek National Opera (Athens)',
        captionFa: 'شکوه و ظرافت ساختار – سیاه و سفید ۱'
      },
      {
        id: 'elegance-02',
        src: '/images/2026_10_amp-2026-elegance-interior-symphony-01-scaled.webp',
        alt: 'An Interior Symphony of Light, Forms and Lines I',
        captionDe: 'An Interior Symphony of Light, Forms and Lines I',
        captionEn: 'An Interior Symphony of Light, Forms and Lines I',
        captionFa: 'سمفونی درونی نور، فرم‌ها و خطوط ۱'
      },
      {
        id: 'elegance-03',
        src: '/images/2026_10_amp-2026-elegance-interior-symphony-02-scaled.webp',
        alt: 'An Interior Symphony of Light, Forms and Lines II',
        captionDe: 'An Interior Symphony of Light, Forms and Lines II',
        captionEn: 'An Interior Symphony of Light, Forms and Lines II',
        captionFa: 'سمفونی درونی نور، فرم‌ها و خطوط ۲'
      },
      {
        id: 'elegance-04',
        src: '/images/2026_10_amp-2026-elegance-interior-symphony-03-scaled.webp',
        alt: 'An Interior Symphony of Light, Forms and Lines III',
        captionDe: 'An Interior Symphony of Light, Forms and Lines III',
        captionEn: 'An Interior Symphony of Light, Forms and Lines III',
        captionFa: 'سمفونی درونی نور، فرم‌ها و خطوط ۳'
      },
      {
        id: 'elegance-05',
        src: '/images/2026_10_amp-2026-elegance-interior-symphony-04-scaled.webp',
        alt: 'An Interior Symphony of Light, Forms and Lines IV',
        captionDe: 'An Interior Symphony of Light, Forms and Lines IV',
        captionEn: 'An Interior Symphony of Light, Forms and Lines IV',
        captionFa: 'سمفونی درونی نور، فرم‌ها و خطوط ۴'
      }
    ]
  },
  {
    id: 'perspa-hephaestus',
    choiceNum: 3,
    title: 'Hephaestus’ Legacy',
    subtitleDe: 'Serie: Hephaestus’ Legacy · 5 Aufnahmen',
    subtitleEn: 'Series: Hephaestus’ Legacy · 5 works',
    subtitleFa: 'مجموعه: میراث هفائستوس · ۵ اثر',
    perspaUrl: 'https://perspa.fr/2026/architectural-perspective/hephaestus-legacy-3/',
    photos: [
      {
        id: 'hephaestus-01',
        src: '/images/2026_09_os-06-hephaestus-legacy-01-scaled.webp',
        alt: 'Hephaestus’ Legacy I',
        captionDe: 'Hephaestus’ Legacy I · Tempel des Hephaistos (Agora, Athen)',
        captionEn: 'Hephaestus’ Legacy I · Temple of Hephaestus (Agora, Athens)',
        captionFa: 'میراث هفائستوس ۱ · معبد هفائستوس (آتن)'
      },
      {
        id: 'hephaestus-02',
        src: '/images/2026_09_os-06-hephaestus-legacy-02-scaled.webp',
        alt: 'Hephaestus’ Legacy II',
        captionDe: 'Hephaestus’ Legacy II · Säulenordnung & Perspektive',
        captionEn: 'Hephaestus’ Legacy II · Columnar Rhythm & Perspective',
        captionFa: 'میراث هفائستوس ۲'
      },
      {
        id: 'hephaestus-03',
        src: '/images/2026_09_os-06-hephaestus-legacy-03-scaled.webp',
        alt: 'Hephaestus’ Legacy III',
        captionDe: 'Hephaestus’ Legacy III · Detailaufnahme & Relief',
        captionEn: 'Hephaestus’ Legacy III · Relief Details',
        captionFa: 'میراث هفائستوس ۳'
      },
      {
        id: 'hephaestus-04',
        src: '/images/2026_09_os-06-hephaestus-legacy-04-scaled.webp',
        alt: 'Hephaestus’ Legacy IV',
        captionDe: 'Hephaestus’ Legacy IV · Klassische Harmonie',
        captionEn: 'Hephaestus’ Legacy IV · Classical Harmony',
        captionFa: 'میراث هفائستوس ۴'
      },
      {
        id: 'hephaestus-05',
        src: '/images/2026_09_os-06-hephaestus-legacy-05-scaled.webp',
        alt: 'Hephaestus’ Legacy V',
        captionDe: 'Hephaestus’ Legacy V · Antikes Monument im Tageslicht',
        captionEn: 'Hephaestus’ Legacy V · Ancient Monument in Daylight',
        captionFa: 'میراث هفائستوس ۵'
      }
    ]
  }
];

const PerspaCard: React.FC<{
  item: PerspaSeriesItem;
  currentLang: Language;
  onOpenLightbox?: (photos: PhotoItem[], index: number) => void;
}> = ({ item, currentLang, onOpenLightbox }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isDe = currentLang === 'de';
  const isFa = currentLang === 'fa';

  const currentPhoto = item.photos[selectedIndex] || item.photos[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedIndex((prev) => (prev - 1 + item.photos.length) % item.photos.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedIndex((prev) => (prev + 1) % item.photos.length);
  };

  return (
    <div className="group/card relative flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-600/60 hover:shadow-lg transition-all duration-300">
      {/* Lead image presentation with no baked-in screenshot arrows */}
      <div
        className="relative block overflow-hidden bg-stone-900 aspect-3/4 sm:aspect-2/3 cursor-pointer select-none"
        onClick={() => onOpenLightbox?.(item.photos, selectedIndex)}
      >
        <img
          src={resolveAsset(currentPhoto.src)}
          alt={currentPhoto.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-102 protected-art"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-900/90 text-amber-100 shadow-md backdrop-blur-xs">
            PERSPA Choice #{item.choiceNum}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-mono font-medium bg-stone-950/80 text-white shadow-md backdrop-blur-xs">
            <Images className="w-3 h-3 text-amber-400" />
            <span>{selectedIndex + 1}/{item.photos.length}</span>
          </span>
        </div>

        {/* Fully functional Navigation Arrows — ONLY visible on card hover, and they actually work! */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label={isDe ? 'Vorheriges Bild' : 'Previous image'}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-stone-950/80 hover:bg-amber-700 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all shadow-md backdrop-blur-xs hover:scale-110 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label={isDe ? 'Nächstes Bild' : 'Next image'}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-stone-950/80 hover:bg-amber-700 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all shadow-md backdrop-blur-xs hover:scale-110 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* HOVER FENSTER: Displays the remaining images of this series on hover */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-0 inset-x-0 z-20 p-3 pt-6 bg-gradient-to-t from-stone-950 via-stone-950/90 to-transparent backdrop-blur-[2px] opacity-0 group-hover/card:opacity-100 pointer-events-none group-hover/card:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0"
        >
          <div className="flex items-center justify-between text-white text-[11px] mb-2 font-medium">
            <span className="flex items-center gap-1.5 text-stone-200">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {isFa
                  ? `سایر تصاویر مجموعه (${item.photos.length} تصویر)`
                  : isDe
                  ? `Restliche Bilder dieser Serie (${item.photos.length - 1} weitere)`
                  : `Remaining series images (${item.photos.length - 1} more)`}
              </span>
            </span>
            <button
              type="button"
              onClick={() => onOpenLightbox?.(item.photos, selectedIndex)}
              className="inline-flex items-center gap-1 text-[10px] text-amber-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>{isFa ? 'بزرگنمایی' : isDe ? 'Großansicht' : 'Enlarge'}</span>
              <Maximize2 className="w-3 h-3" />
            </button>
          </div>

          {/* Horizontal thumbnail strip of remaining pictures */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {item.photos.map((photo, pIdx) => {
              const isActive = pIdx === selectedIndex;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onMouseEnter={() => setSelectedIndex(pIdx)}
                  onClick={() => {
                    setSelectedIndex(pIdx);
                    onOpenLightbox?.(item.photos, pIdx);
                  }}
                  className={`relative shrink-0 w-11 h-13 rounded-md overflow-hidden border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-amber-400 ring-2 ring-amber-400/60 scale-105'
                      : 'border-white/30 hover:border-white/80 opacity-75 hover:opacity-100'
                  }`}
                  title={photo.alt}
                >
                  <img
                    src={resolveAsset(photo.src)}
                    alt={photo.alt}
                    className="w-full h-full object-cover protected-art"
                    loading="lazy"
                  />
                  <span className="absolute bottom-0.5 right-0.5 text-[8px] font-mono px-1 bg-black/75 text-white rounded">
                    {pIdx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card Info & Links Below */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 block">
            PERSPA Choice #{item.choiceNum}
          </span>
          <h5 className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-snug">
            {item.title}
          </h5>
          <p className="text-[11px] text-stone-500 font-sans">
            {isFa ? item.subtitleFa : isDe ? item.subtitleDe : item.subtitleEn}
          </p>
        </div>

        <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <a
            href={item.perspaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-stone-700 hover:text-amber-800 font-medium"
          >
            <span>{isFa ? 'مشاهده در PERSPA' : isDe ? 'Werkseite bei PERSPA' : 'Work page on PERSPA'}</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>
          <button
            type="button"
            onClick={() => onOpenLightbox?.(item.photos, selectedIndex)}
            className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-950 font-medium cursor-pointer"
          >
            <Eye className="w-3 h-3" />
            <span>{isFa ? 'نمایش مجموعه' : isDe ? 'Serie öffnen' : 'Open series'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const PublicationsGallery: React.FC<PublicationsGalleryProps> = ({ currentLang, onOpenLightbox }) => {
  const isDe = currentLang === 'de';
  const isFa = currentLang === 'fa';

  return (
    <div className="space-y-12">
      {/* =========================================================================
          1. EDITOR'S CHOICE: GLOBAL LENS PHOTOGRAPHY AWARDS (GL) 2026
         ========================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                Editor’s Choice
              </span>
              <span className="text-xs font-mono text-stone-500">2026</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Global Lens Photography Awards (GL) 2026
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://globallensawards.com/editor-choice/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-800 text-xs font-medium border border-stone-300 transition-colors shadow-2xs"
            >
              <span>{isFa ? 'فهرست برگزیدگان سردبیر' : isDe ? 'Übersicht Editor’s Choice' : 'Editor’s Choice Overview'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            </a>
            <a
              href="https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors shadow-2xs"
            >
              <span>{isFa ? 'صفحه رسمی اثر' : isDe ? 'Offizielle Werkseite' : 'Official Artwork Page'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl">
          {isDe
            ? 'Kuratierte Auszeichnung »Editor’s Choice« bei den Global Lens Photography Awards 2026 für das architektonische Hauptwerk »The Solitaire as Abstraction – In Harmony with Nature«.'
            : isFa
            ? 'تقدیر ویژه «انتخاب سردبیر» در جوایز جهانی عکس گلوبال لنز ۲۰۲۶ برای اثر معماری شاخص «تک‌بنا به عنوان یک انتزاع – در هماهنگی با طبیعت».'
            : 'Curated "Editor’s Choice" distinction at the Global Lens Photography Awards 2026 for the architectural work "The Solitaire as Abstraction – In Harmony with Nature".'}
        </p>

        {/* 3 Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {/* Image 1: Feature Page */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 sm:aspect-2/3 relative"
            >
              <img
                src={resolveAsset('/images/2026_10_image00012-scaled.webp')}
                alt="Global Lens Awards 2026 - Editor's Choice Feature Page"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors pointer-events-none" />
            </a>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <p className="text-xs text-stone-800 font-medium leading-snug">
                {isDe
                  ? 'Offizielle Preisträger-Präsentationsseite bei Global Lens Awards'
                  : isFa
                  ? 'صفحه معرفی رسمی برگزیدگان در جوایز بین‌المللی گلوبال لنز'
                  : 'Official Winner Showcase Page at Global Lens Awards'}
              </p>
              <a
                href="https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-800 hover:text-amber-950 font-semibold"
              >
                <span>globallensawards.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Image 2: Architectural Artwork */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 sm:aspect-2/3 relative"
            >
              <img
                src={resolveAsset('/images/2026_10_image00011-635x1024.webp')}
                alt="The Solitaire as Abstraction – In Harmony with Nature"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors pointer-events-none" />
            </a>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <p className="text-xs text-stone-800 font-medium leading-snug">
                {isDe
                  ? '»The Solitaire as Abstraction – In Harmony with Nature«'
                  : isFa
                  ? '«تک‌بنا به عنوان یک انتزاع – در هماهنگی با طبیعت»'
                  : '"The Solitaire as Abstraction – In Harmony with Nature"'}
              </p>
              <span className="text-[11px] font-mono text-stone-500">
                {isDe ? 'Editor’s Choice Prämierung' : isFa ? 'برگزیده ویژه سردبیر' : 'Editor’s Choice Selection'}
              </span>
            </div>
          </div>

          {/* Image 3: Detail / Certification */}
          <div className="group flex flex-col bg-white border border-amber-200/80 ring-1 ring-amber-100 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-400 hover:shadow-md transition-all">
            <a
              href="https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-50 aspect-3/4 sm:aspect-2/3 relative p-2 sm:p-3"
            >
              <img
                src={resolveAsset('/images/2026_10_image00013-875x1024.webp')}
                alt="Global Lens Awards 2026 - Detail & Winner Verification"
                className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300 drop-shadow-xs"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors pointer-events-none" />
            </a>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2 border-t border-amber-100/70 bg-linear-to-b from-amber-50/20 to-white">
              <p className="text-xs text-stone-800 font-medium leading-snug">
                {isDe
                  ? 'Offizielles Zertifikat & Werkbestätigung Global Lens 2026'
                  : isFa
                  ? 'گواهی رسمی و تاییدیه اثر در جوایز گلوبال لنز ۲۰۲۶'
                  : 'Official Certificate & Work Verification Global Lens 2026'}
              </p>
              <span className="text-[11px] font-mono text-amber-900/70">
                {isDe ? 'Internationale Fachjury · Zertifikat' : isFa ? 'هیئت داوران بین‌المللی · گواهینامه رسمی' : 'International Jury · Certificate'}
              </span>
            </div>
          </div>
        </div>

        {/* Beitexte List from WordPress */}
        <div className="p-4 bg-white/80 rounded-xl border border-stone-200/80 text-xs text-stone-700 space-y-1.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <strong className="text-stone-900">{isFa ? 'فهرست برگزیدگان:' : isDe ? 'Übersicht Editor’s Choice:' : 'Editor’s Choice Directory:'}</strong>
            <a
              href="https://globallensawards.com/editor-choice/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-amber-950 underline font-mono text-[11px]"
            >
              https://globallensawards.com/editor-choice/
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <strong className="text-stone-900">{isFa ? 'اثر برگزیده:' : isDe ? 'Ausgezeichnetes Werk:' : 'Awarded Work:'}</strong>
            <a
              href="https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-amber-950 underline font-serif font-semibold"
            >
              The Solitaire as Abstraction – In Harmony with Nature
            </a>
          </div>
        </div>
      </div>


      {/* =========================================================================
          2. EDITOR'S CHOICE: PERSPA - PRIX DE LA PERSPECTIVE ARCHITECTURALE 2026 (BOURGES, FRANCE)
         ========================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                Editor’s Choice (3 Werke)
              </span>
              <span className="text-xs font-mono text-stone-500">Bourges, Frankreich</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              PERSPA – Prix de la Perspective Architecturale 2026
            </h4>
          </div>

          <a
            href="https://perspa.fr/editor-choice/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors shadow-2xs"
          >
            <span>{isFa ? 'گالری رسمی PERSPA' : isDe ? 'PERSPA Galerie öffnen' : 'Open PERSPA Gallery'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl">
          {isDe
            ? 'Die renommierte französische Auszeichnung PERSPA wählte gleich drei Architekturserien von ShirZan in die offizielle Editor’s Choice Galerie:'
            : isFa
            ? 'جایزه معتبر فرانسوی PERSPA سه مجموعه عکاسی معماری شیرزن را برای گالری رسمی برگزیدگان سردبیر انتخاب نمود:'
            : 'The prestigious French award PERSPA selected three architectural series by ShirZan for its official Editor’s Choice gallery:'}
        </p>

        {/* 3 PERSPA Artworks Grid with Clean Photographs and Interactive Series Hover Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {PERSPA_SERIES_LIST.map((item) => (
            <PerspaCard
              key={item.id}
              item={item}
              currentLang={currentLang}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>

        {/* Beitexte Directory Note */}
        <div className="p-4 bg-white/80 rounded-xl border border-stone-200/80 text-xs text-stone-700 flex flex-wrap items-center gap-1.5">
          <strong className="text-stone-900">{isFa ? 'فهرست برگزیدگان:' : isDe ? 'Übersicht Editor’s Choice:' : 'Editor’s Choice Directory:'}</strong>
          <a
            href="https://perspa.fr/editor-choice/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-800 hover:text-amber-950 underline font-mono text-[11px]"
          >
            https://perspa.fr/editor-choice/
          </a>
        </div>
      </div>


      {/* =========================================================================
          3. OFFICIAL WINNERS VIDEOS: 20TH BLACK & WHITE SPIDER AWARDS (VIMEO HD)
         ========================================================================= */}
      <div id="winners-videos" className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                Official Winners Video
              </span>
              <span className="text-xs font-mono text-stone-500">20th Spider Awards</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Black &amp; White Spider Awards 20th Annual Architecture Photography Winners | Amateur
            </h4>
          </div>

          <a
            href="https://www.thespiderawards.com/films_am.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-800 text-xs font-medium border border-stone-300 transition-colors shadow-2xs"
          >
            <Film className="w-3.5 h-3.5 text-stone-500" />
            <span>{isFa ? 'فهرست کامل ویدیوها' : isDe ? 'Übersicht Winners Videos' : 'All Winners Videos'}</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>
        </div>

        {/* Video Card with Thumbnail and Play Button */}
        <div className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-amber-700/50 transition-all flex flex-col md:flex-row">
          <div className="md:w-3/5 relative overflow-hidden bg-stone-950 group">
            <img
              src={resolveAsset('/images/2026_06_b0358389-b876-497d-93a6-a0607455c136-1024x683.webp')}
              alt="20th Black & White Spider Awards Architecture Winners Showcase"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
            {/* Play Overlay */}
            <a
              href="https://vimeo.com/1196875037?fl=pl&fe=sh"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-stone-950/30 group-hover:bg-stone-950/20 transition-colors cursor-pointer"
              aria-label="Play on Vimeo"
            >
              <div className="w-16 h-16 rounded-full bg-white/95 text-stone-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-stone-900 ml-1 text-stone-900" />
              </div>
            </a>
            <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-md">
              Vimeo HD · 20th Annual Showcase
            </div>
          </div>

          <div className="p-6 md:w-2/5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800">
                Filmvorführung &amp; Gewinnerfilm
              </span>
              <h5 className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-snug">
                Offizieller Preisträgerfilm: Architecture Photography Winners
              </h5>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                {isDe
                  ? 'Der offizielle Film der 20. Spider Awards präsentiert ShirZans preisgekrönte Architekturfotografie im internationalen Verzeichnis herausragender Schwarz-Weiß-Arbeiten.'
                  : isFa
                  ? 'فیلم رسمی بیستمین دوره جوایز اسپایدر که آثار برگزیده معماری سیاه و سفید شیرزن را به تصویر می‌کشد.'
                  : 'The official 20th Spider Awards film presenting ShirZan’s awarded architectural photography in the international compendium.'}
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href="https://vimeo.com/1196875037?fl=pl&fe=sh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors shadow-2xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isFa ? 'تماشای فیلم در Vimeo' : isDe ? 'Film auf Vimeo ansehen' : 'Watch Film on Vimeo'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://www.thespiderawards.com/films_am.php"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-stone-600 hover:text-stone-900 text-[11px] transition-colors"
              >
                <span>{isFa ? 'فهرست رسمی فیلم‌ها (thespiderawards.com)' : isDe ? 'Übersicht Winners Videos – 20th Spider Awards' : 'Winners Videos Directory – 20th Spider Awards'}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* =========================================================================
          4. OFFICIAL WINNERS EBOOKS: INTERNATIONAL PHOTOGRAPHY AWARDS (IPA 2026 & 2025)
         ========================================================================= */}
      <div id="ipa-ebooks" className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                Official Winners E-Books
              </span>
              <span className="text-xs font-mono text-stone-500">IPA / Lucie Foundation (Los Angeles)</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              International Photography Awards (IPA) – Annual Winners Books
            </h4>
          </div>

          <span className="text-xs font-mono text-stone-500">
            {isDe ? 'Druck- & Digitalpublikationen' : isFa ? 'انتشارات چاپی و دیجیتال' : 'Print & Digital Compendiums'}
          </span>
        </div>

        {/* 4A: IPA 2026 Book */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h5 className="text-base sm:text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-800" />
              <span>The 2026 Annual International Photography Awards (IPA) Book</span>
            </h5>
            <a
              href="https://www.photoawards.com/ebook/IPA-2026-ebook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isFa ? 'دانلود کتاب سالانه ۲۰۲۶ (PDF)' : isDe ? 'IPA 2026 E-Book (PDF)' : 'IPA 2026 E-Book (PDF)'}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Page 1 Cover */}
            <div className="group bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all flex flex-col">
              <a
                href="https://www.photoawards.com/ebook/IPA-2026-ebook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
              >
                <img
                  src={resolveAsset('/images/2026_10_seite-1-1152x1536.webp')}
                  alt="The 2026 Annual International Photography Awards (IPA) Book Cover"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </a>
              <div className="p-3.5 flex items-center justify-between text-xs text-stone-700">
                <span className="font-medium">{isDe ? 'Titelseite / Cover des IPA 2026 Buchs' : isFa ? 'جلد کتاب سالانه IPA ۲۰۲۶' : 'IPA 2026 Book Cover'}</span>
                <span className="font-mono text-[11px] text-amber-800 font-semibold">PDF</span>
              </div>
            </div>

            {/* Page 2 Spread */}
            <div className="group bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all flex flex-col">
              <a
                href="https://www.photoawards.com/ebook/IPA-2026-ebook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
              >
                <img
                  src={resolveAsset('/images/2026_10_seite-2-1152x1536.webp')}
                  alt="The 2026 Annual International Photography Awards (IPA) Book Winner Spread"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </a>
              <div className="p-3.5 flex items-center justify-between text-xs text-stone-700">
                <span className="font-medium">{isDe ? 'Preisträger-Doppelseite Architektur' : isFa ? 'صفحه دوطرفه آثار برگزیده معماری' : 'Winner Architecture Spread'}</span>
                <span className="font-mono text-[11px] text-amber-800 font-semibold">Preisträger 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4B: IPA 2025 Book */}
        <div className="space-y-4 pt-4 border-t border-stone-200/80">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h5 className="text-base sm:text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-800" />
              <span>The 2025 Annual International Photography Awards (IPA) Book</span>
            </h5>
            <a
              href="https://www.photoawards.com/books/IPA-2025-EBOOK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isFa ? 'دانلود کتاب سالانه ۲۰۲۵ (PDF)' : isDe ? 'IPA 2025 E-Book (PDF)' : 'IPA 2025 E-Book (PDF)'}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Page 1 Cover 2025 */}
            <div className="group bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all flex flex-col">
              <a
                href="https://www.photoawards.com/books/IPA-2025-EBOOK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
              >
                <img
                  src={resolveAsset('/images/2026_06_ebook-01-1152x1536.webp')}
                  alt="The 2025 Annual International Photography Awards (IPA) Book Cover"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </a>
              <div className="p-3.5 flex items-center justify-between text-xs text-stone-700">
                <span className="font-medium">{isDe ? 'Titelseite / Cover des IPA 2025 Buchs' : isFa ? 'جلد کتاب سالانه IPA ۲۰۲۵' : 'IPA 2025 Book Cover'}</span>
                <span className="font-mono text-[11px] text-amber-800 font-semibold">PDF</span>
              </div>
            </div>

            {/* Page 2 Spread 2025 */}
            <div className="group bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all flex flex-col">
              <a
                href="https://www.photoawards.com/books/IPA-2025-EBOOK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
              >
                <img
                  src={resolveAsset('/images/2026_06_ebook-02-1152x1536.webp')}
                  alt="The 2025 Annual International Photography Awards (IPA) Book Spread"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </a>
              <div className="p-3.5 flex items-center justify-between text-xs text-stone-700">
                <span className="font-medium">{isDe ? 'Preisträger-Doppelseite »The Solitaire as an Abstraction«' : isFa ? 'صفحه انتشار اثر تک‌بنا به عنوان یک انتزاع' : 'Winner Spread "The Solitaire"'}</span>
                <span className="font-mono text-[11px] text-amber-800 font-semibold">Preisträger 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* =========================================================================
          5. BLACK & WHITE SPIDER AWARDS: THE CURATED COLLECTION 2026 & BEST OF SHOW
         ========================================================================= */}
      <div id="spider-books" className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                Official Awards Books
              </span>
              <span className="text-xs font-mono text-stone-500">20th Annual Spider Awards</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Black and White Spider Awards: The Curated Collection 2026 &amp; Best Of Show
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://www.thespiderawards.com/publications/CC26/a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors shadow-2xs"
            >
              <span>{isFa ? 'کتاب آنلاین CC26' : isDe ? 'Curated Collection 2026' : 'The Curated Collection 2026'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
            <a
              href="https://www.thespiderawards.com/publications/20th/#page=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-800 text-xs font-medium border border-stone-300 transition-colors shadow-2xs"
            >
              <span>{isFa ? 'کتاب برترین‌ها (Best of Show)' : isDe ? 'Best of Show Buch' : 'Best of Show Book'}</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl">
          {isDe
            ? 'In der offiziellen Buchausgabe »The Curated Collection 2026, Amateur Edition« ist ShirZans prämierte Arbeit »Piano« auf Seite 37 ganzseitig publiziert.'
            : isFa
            ? 'در کتاب رسمی «مجموعه برگزیده ۲۰۲۶ اسپایدر»، اثر شاخص پیانوی معماری شیرزن در صفحه ۳۷ منتشر گردیده است.'
            : 'In the official book edition "The Curated Collection 2026, Amateur Edition", ShirZan’s awarded work "Piano" is prominently featured on page 37.'}
        </p>

        {/* 4 Books/Pages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          {/* Book 1: Curated Collection Cover */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://www.thespiderawards.com/publications/CC26/a/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
            >
              <img
                src={resolveAsset('/images/2026_10_bwspider1-1157x1536.webp')}
                alt="The Curated Collection 2026 Cover"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
              <span className="text-xs font-medium text-stone-900 leading-snug">
                {isDe ? 'The Curated Collection 2026 (Buchcover)' : isFa ? 'جلد کتاب مجموعه برگزیده ۲۰۲۶' : 'The Curated Collection 2026 Cover'}
              </span>
              <a
                href="https://www.thespiderawards.com/publications/CC26/a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-800 font-semibold"
              >
                <span>thespiderawards.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Book 2: Page 37 Spread with Piano */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://www.thespiderawards.com/publications/CC26/a/#page=37"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
            >
              <img
                src={resolveAsset('/images/2026_10_ebook-08-206x300.webp')}
                alt="The Curated Collection 2026 Page 37 - Piano"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
              <span className="text-xs font-medium text-stone-900 leading-snug">
                {isDe ? 'Seite 37: Prämierte Arbeit »Piano«' : isFa ? 'صفحه ۳۷: اثر برگزیده پیانو' : 'Page 37: Awarded Work "Piano"'}
              </span>
              <a
                href="https://www.thespiderawards.com/publications/CC26/a/#page=37"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-800 font-semibold"
              >
                <span>{isFa ? 'صفحه ۳۷ در کتاب آنلاین' : isDe ? 'Seite 37 online aufrufen' : 'Open Page 37 Online'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Book 3: Best of Show Cover */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://www.thespiderawards.com/publications/20th/#page=1"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
            >
              <img
                src={resolveAsset('/images/2026_06_ebook-03-1152x1536.webp')}
                alt="20th Annual Spider Awards Best of Show Book Cover"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
              <span className="text-xs font-medium text-stone-900 leading-snug">
                {isDe ? 'The 2026 Best Of Show (Buchcover)' : isFa ? 'جلد کتاب بهترین‌های سال ۲۰۲۶' : 'The 2026 Best Of Show Cover'}
              </span>
              <a
                href="https://www.thespiderawards.com/publications/20th/#page=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-800 font-semibold"
              >
                <span>{isFa ? 'مشاهده کتاب آنلاین' : isDe ? 'Online Buch öffnen' : 'Open Online Book'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Book 4: Best of Show Spread / PDF */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://schahrsad-shahmirzadi.com/wp-content/uploads/2026/06/20th-spiderawards-bestofshow%202025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
            >
              <img
                src={resolveAsset('/images/2026_06_ebook-04-1152x1536.webp')}
                alt="20th Annual Spider Awards Best of Show 2025 PDF Spread"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
              <span className="text-xs font-medium text-stone-900 leading-snug">
                {isDe ? '20th Spider Awards Best of Show (PDF)' : isFa ? 'کتاب برترین‌ها نسخه پی‌دی‌اف' : '20th Spider Awards Best of Show (PDF)'}
              </span>
              <a
                href="https://schahrsad-shahmirzadi.com/wp-content/uploads/2026/06/20th-spiderawards-bestofshow%202025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-800 font-semibold"
              >
                <span>{isFa ? 'دانلود مستقیم PDF' : isDe ? 'PDF herunterladen' : 'Download PDF'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* =========================================================================
          6. ARCHITECTURE PHOTOGRAPHY MASTERPRIZE '25 – APMP WINNERS BOOK 2025
         ========================================================================= */}
      <div id="apmp-magcloud" className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                MagCloud Publication
              </span>
              <span className="text-xs font-mono text-stone-500">APMP '25</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Architecture Photography Masterprize '25 – APMP Winners Book 2025
            </h4>
          </div>

          <a
            href="https://www.magcloud.com/browse/issue/3262571"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors shadow-2xs"
          >
            <span>{isFa ? 'مشاهده در مگ‌کلود (MagCloud)' : isDe ? 'MagCloud Magazin öffnen' : 'View on MagCloud'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Beitext from WordPress */}
        <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200/80 text-amber-950 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-800 shrink-0" />
          <span>WINNER IN EXTERIOR ARCHITECTURE PHOTOGRAPHY - OTHER EXTERIOR</span>
        </div>

        {/* 3 MagCloud Previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {/* Spread 1 */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://www.magcloud.com/browse/issue/3262571"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 sm:aspect-2/3 relative"
            >
              <img
                src={resolveAsset('/images/2026_07_IMG_1474-3-1198x1536.webp')}
                alt="Architecture Photography MasterPrize '25 Winners Book Cover"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3.5 text-xs text-stone-800 font-medium">
              {isDe ? 'APMP Winners Book – Titelseite' : isFa ? 'جلد مجله بین‌المللی برگزیدگان APMP' : 'APMP Winners Book Cover'}
            </div>
          </div>

          {/* Spread 2 */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://www.magcloud.com/browse/issue/3262571"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 sm:aspect-2/3 relative"
            >
              <img
                src={resolveAsset('/images/2026_07_IMG_1475-2-1024x646.webp')}
                alt="Architecture Photography MasterPrize '25 Winners Spread"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3.5 text-xs text-stone-800 font-medium">
              {isDe ? 'Doppelseitige Preisträger-Strecke' : isFa ? 'صفحه دوطرفه انتشار اثر معماری' : 'Double-Page Winner Spread'}
            </div>
          </div>

          {/* Spread 3 */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://www.magcloud.com/browse/issue/3262571"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 sm:aspect-2/3 relative"
            >
              <img
                src={resolveAsset('/images/2026_07_IMG_1513-1024x991.webp')}
                alt="Architecture Photography MasterPrize '25 MagCloud Reader View"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3.5 text-xs text-stone-800 font-medium">
              {isDe ? 'MagCloud Druckausgabe & Leseprobe' : isFa ? 'پیش‌نمایش نسخه چاپی در مگ‌کلود' : 'MagCloud Print Edition & Sample'}
            </div>
          </div>
        </div>
      </div>


      {/* =========================================================================
          7. PERSPA AWARDS 2026 – ARCHITECTURAL PERSPECTIVE BOOK (HARDCOVER & E-BOOK)
         ========================================================================= */}
      <div id="perspa-book" className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-stone-900 text-white">
                Offizielle Buchausgabe
              </span>
              <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                Hardcover ISBN: 979-1044810359
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              PERSPA Awards 2026 – Architectural Perspective
            </h4>
          </div>

          <a
            href="https://perspa.fr/book/#cover"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors shadow-2xs"
          >
            <span>{isFa ? 'مشاهده کتاب دیجیتال' : isDe ? 'E-Book öffnen' : 'Open E-Book'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Beitext from WordPress: My work on pages 20-21, 26, 41, and 168 */}
        <div className="p-4 bg-white rounded-xl border border-stone-200/90 space-y-2">
          <div className="text-xs sm:text-sm font-semibold text-stone-900">
            {isDe
              ? 'ShirZans prämierte Werke publiziert auf den Seiten 20–21, 26, 41 und 168:'
              : isFa
              ? 'آثار برگزیده شیرزن منتشر شده در صفحات ۲۰–۲۱، ۲۶، ۴۱ و ۱۶۸:'
              : 'ShirZan’s awarded works published on pages 20–21, 26, 41, and 168:'}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href="https://perspa.fr/book/#page-20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-[#faf8f5] hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors font-mono font-medium"
            >
              Seite 20 →
            </a>
            <a
              href="https://perspa.fr/book/#page-21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-[#faf8f5] hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors font-mono font-medium"
            >
              Seite 21 →
            </a>
            <a
              href="https://perspa.fr/book/#page-26"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-[#faf8f5] hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors font-mono font-medium"
            >
              Seite 26 →
            </a>
            <a
              href="https://perspa.fr/book/#page-41"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-[#faf8f5] hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors font-mono font-medium"
            >
              Seite 41 →
            </a>
            <a
              href="https://perspa.fr/book/#page-168"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-[#faf8f5] hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors font-mono font-medium"
            >
              Seite 168 →
            </a>
          </div>
        </div>

        {/* 5 Pages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
          {/* Page 20 */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://perspa.fr/book/#page-20"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
            >
              <img
                src={resolveAsset('/images/2026_11_image001-709x1024.webp')}
                alt="PERSPA Awards 2026 Book Page 20"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3 text-center border-t border-stone-100">
              <a
                href="https://perspa.fr/book/#page-20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
              >
                <span>Seite 20</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Page 21 */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://perspa.fr/book/#page-21"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
            >
              <img
                src={resolveAsset('/images/2026_11_image002-709x1024.webp')}
                alt="PERSPA Awards 2026 Book Page 21"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3 text-center border-t border-stone-100">
              <a
                href="https://perspa.fr/book/#page-21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
              >
                <span>Seite 21</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Page 26 */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://perspa.fr/book/#page-26"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
            >
              <img
                src={resolveAsset('/images/2026_11_image003-707x1024.webp')}
                alt="PERSPA Awards 2026 Book Page 26"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3 text-center border-t border-stone-100">
              <a
                href="https://perspa.fr/book/#page-26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
              >
                <span>Seite 26</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Page 41 */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://perspa.fr/book/#page-41"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
            >
              <img
                src={resolveAsset('/images/2026_11_image004-768x571.webp')}
                alt="PERSPA Awards 2026 Book Page 41"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3 text-center border-t border-stone-100">
              <a
                href="https://perspa.fr/book/#page-41"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
              >
                <span>Seite 41</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Page 168 */}
          <div className="group flex flex-col bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-amber-700/50 transition-all">
            <a
              href="https://perspa.fr/book/#page-168"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-stone-100 aspect-3/4 relative"
            >
              <img
                src={resolveAsset('/images/2026_11_image005-709x1024.webp')}
                alt="PERSPA Awards 2026 Book Page 168"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="p-3 text-center border-t border-stone-100">
              <a
                href="https://perspa.fr/book/#page-168"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-stone-900 hover:text-amber-800 inline-flex items-center gap-1"
              >
                <span>Seite 168</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
