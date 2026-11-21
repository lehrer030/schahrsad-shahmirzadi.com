import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  MapPin,
  Trophy,
  Filter,
  Eye,
  Image as ImageIcon
} from 'lucide-react';
import type { Language, PhotoItem } from '../data/photographyData';
import { resolveAsset } from '../utils/resolveAsset';
import { SectionHeader } from './SectionHeader';

interface AwardReferencesSectionProps {
  currentLang: Language;
  onOpenLightbox?: (photos: PhotoItem[], index: number) => void;
}

interface AwardEntry {
  title: string;
  category: string;
  categoryFa?: string;
  zoomUrl?: string;
  badge?: string;
  image?: string;
}

export const AWARD_WORK_THUMBNAILS: Record<string, string> = {
  'Architectural Piano': '/images/wetransfer/architectural_piano_01.webp',
  'Berlin: Attack on Queer, Diversity and Freedom': '/images/wetransfer/berlin_attack_queer_01.webp',
  'Between Space and Time': '/images/2026_09_os-10-between-space-and-time-01-scaled.jpeg',
  'Black & White Solitaire': '/images/wetransfer/solitaire_bw_01.webp',
  'Black Red Gold – Office of the Federal President of Germany': '/images/wetransfer/black_red_gold_01.webp',
  'Blessed Are Those Who Mourn': '/images/wetransfer/blessed_mourn_01.webp',
  'Cloud Mirror Architecture I: Heaven’s Bridge': '/images/wetransfer/cloud_mirror_i_01.webp',
  'Cloud Mirror Architecture II: Stormy Sea (Black & White)': '/images/wetransfer/cloud_mirror_ii_bw_01.webp',
  'Columns in the Here and Now': '/images/2025_12_image00057-scaled.webp',
  'Dimensions of Sustainability': '/images/wetransfer/dimensions_sustainability_01.webp',
  'Echoes of a Water Tower': '/images/wetransfer/echoes_water_tower_01.webp',
  'Elegance of Structure – An Interior Symphony of Light, Forms and Lines': '/images/wetransfer/elegance_symphony_01.webp',
  'Elegance of Structure – Black and White': '/images/wetransfer/elegance_structure_bw_01.webp',
  'Fragments of Memory – Fragments of Time': '/images/wetransfer/fragments_of_memory_01.webp',
  'Hephaestus’ Legacy': '/images/wetransfer/hephaestus_legacy_01.webp',
  'In-Between Spaces': '/images/2026_07_In-Between-Spaces-scaled.jpg',
  'In-Between Spaces (Area 14)': '/images/2026_07_In-Between-Spaces-scaled.jpg',
  'Kickboxing – From Fighting in the Ring to Lightning in the Frame': '/images/2026_09_os-02-kickboxing-from-fighting-in-the-ring-01-scaled.jpeg',
  'LIFE – LOVE – FREEDOM · IRAN': '/images/2026_09_os-01-life-love-freedom-iran-01-scaled.jpeg',
  'Mirrored': '/images/wetransfer/mirrored_01.webp',
  'Mirrored II': '/images/wetransfer/mirrored_ii_01.webp',
  'Mirrored III (Black & White)': '/images/wetransfer/mirrored_iii_bw_01.webp',
  'Prismatic Berlin': '/images/wetransfer/prismatic_berlin_01.webp',
  'Razor Pull Berlin': '/images/wetransfer/razor_pull_berlin_01.webp',
  'Steps of Sustainability': '/images/wetransfer/steps_sustainability_01.webp',
  'Symmetric Networks': '/images/wetransfer/symmetric_networks_01.webp',
  'The Dignity of the Animal is Inviolable': '/images/2026_04_59097f0d6c9eece89abc78e06350bb1f-scaled.jpeg',
  'The Solitaire as Abstraction – In Harmony with Nature': '/images/wetransfer/solitaire_harmony_01.webp',
  'The Solitaire as an Abstraction': '/images/series_solitaire/solitaire_ipa/solitaire_ipa_01.jpeg',
  'The Solitaire as an Abstraction (Revised)': '/images/series_solitaire/solitaire_revised/solitaire_revised_01.jpeg',
  'The Solitaire as an Abstraction (Short Version)': '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_01.jpeg',
  'The Solitaire as an Abstraction – New Perspectives': '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_01.jpeg',
  'Transformer': '/images/wetransfer/transformer_01.webp'
};


export const AWARD_WORK_SERIES_PHOTOS_MAP: Record<string, string[]> = {
  'The Solitaire as an Abstraction (Revised)': [
    '/images/series_solitaire/solitaire_revised/solitaire_revised_01.jpeg',
    '/images/series_solitaire/solitaire_revised/solitaire_revised_02.jpeg',
    '/images/series_solitaire/solitaire_revised/solitaire_revised_03.jpeg',
    '/images/series_solitaire/solitaire_revised/solitaire_revised_04.jpeg',
    '/images/series_solitaire/solitaire_revised/solitaire_revised_05.jpeg'
  ],
  'The Solitaire as an Abstraction – New Perspectives': [
    '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_01.jpeg',
    '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_02.jpeg',
    '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_03.jpeg',
    '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_04.jpeg',
    '/images/series_solitaire/solitaire_new_perspectives/solitaire_new_perspectives_05.jpeg'
  ],
  'The Solitaire as an Abstraction': [
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_01.jpeg',
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_02.jpeg',
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_03.jpeg',
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_04.jpeg',
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_05.jpeg',
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_06.jpeg',
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_07.jpeg',
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_08.jpeg',
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_09.jpeg',
    '/images/series_solitaire/solitaire_ipa/solitaire_ipa_10.jpeg'
  ],
  'The Solitaire as an Abstraction (Short Version)': [
    '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_01.jpeg',
    '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_02.jpeg',
    '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_03.jpeg',
    '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_04.jpeg',
    '/images/series_solitaire/solitaire_nd_short/solitaire_nd_short_05.jpeg'
  ],
  'The Solitaire as Abstraction – In Harmony with Nature': [
    '/images/wetransfer/solitaire_harmony_01.webp',
    '/images/wetransfer/solitaire_harmony_02.webp',
    '/images/wetransfer/solitaire_harmony_03.webp',
    '/images/wetransfer/solitaire_harmony_04.webp',
    '/images/wetransfer/solitaire_harmony_05.webp',
    '/images/wetransfer/solitaire_harmony_06.webp',
    '/images/wetransfer/solitaire_harmony_07.webp'
  ],
  'Steps of Sustainability': [
    '/images/wetransfer/steps_sustainability_01.webp',
    '/images/wetransfer/steps_sustainability_02.webp',
    '/images/wetransfer/steps_sustainability_03.webp',
    '/images/wetransfer/steps_sustainability_04.webp',
    '/images/wetransfer/steps_sustainability_05.webp',
    '/images/wetransfer/steps_sustainability_06.webp'
  ],
  'Architectural Piano': [
    '/images/wetransfer/architectural_piano_01.webp',
    '/images/wetransfer/architectural_piano_02.webp',
    '/images/wetransfer/architectural_piano_03.webp',
    '/images/wetransfer/architectural_piano_04.webp'
  ],
  'Berlin: Attack on Queer, Diversity and Freedom': [
    '/images/wetransfer/berlin_attack_queer_01.webp',
    '/images/wetransfer/berlin_attack_queer_02.webp',
    '/images/wetransfer/berlin_attack_queer_03.webp',
    '/images/wetransfer/berlin_attack_queer_04.webp',
    '/images/wetransfer/berlin_attack_queer_05.webp'
  ],
  'Hephaestus’ Legacy': [
    '/images/wetransfer/hephaestus_legacy_01.webp',
    '/images/wetransfer/hephaestus_legacy_02.webp',
    '/images/wetransfer/hephaestus_legacy_03.webp',
    '/images/wetransfer/hephaestus_legacy_04.webp',
    '/images/wetransfer/hephaestus_legacy_05.webp'
  ],
  'Hephaestus‘ Legacy': [
    '/images/wetransfer/hephaestus_legacy_01.webp',
    '/images/wetransfer/hephaestus_legacy_02.webp',
    '/images/wetransfer/hephaestus_legacy_03.webp',
    '/images/wetransfer/hephaestus_legacy_04.webp',
    '/images/wetransfer/hephaestus_legacy_05.webp'
  ],
  'Hephaestus\' Legacy': [
    '/images/wetransfer/hephaestus_legacy_01.webp',
    '/images/wetransfer/hephaestus_legacy_02.webp',
    '/images/wetransfer/hephaestus_legacy_03.webp',
    '/images/wetransfer/hephaestus_legacy_04.webp',
    '/images/wetransfer/hephaestus_legacy_05.webp'
  ],
  'Symmetric Networks': [
    '/images/wetransfer/symmetric_networks_01.webp',
    '/images/wetransfer/symmetric_networks_02.webp',
    '/images/wetransfer/symmetric_networks_03.webp'
  ],
  'Elegance of Structure – An Interior Symphony of Light, Forms and Lines': [
    '/images/wetransfer/elegance_symphony_01.webp',
    '/images/wetransfer/elegance_symphony_02.webp',
    '/images/wetransfer/elegance_symphony_03.webp',
    '/images/wetransfer/elegance_symphony_04.webp'
  ],
  'Dimensions of Sustainability': [
    '/images/wetransfer/dimensions_sustainability_01.webp',
    '/images/wetransfer/dimensions_sustainability_02.webp',
    '/images/wetransfer/dimensions_sustainability_03.webp'
  ],
  'Fragments of Memory – Fragments of Time': [
    '/images/wetransfer/fragments_of_memory_01.webp',
    '/images/wetransfer/fragments_of_memory_02.webp',
    '/images/wetransfer/fragments_of_memory_03.webp'
  ],
  'Black Red Gold – Office of the Federal President of Germany': [
    '/images/wetransfer/black_red_gold_01.webp',
    '/images/wetransfer/black_red_gold_02.webp',
    '/images/wetransfer/black_red_gold_03.webp'
  ]
};

export const getAwardWorkSeriesPhotos = (title: string): string[] | undefined => {
  if (AWARD_WORK_SERIES_PHOTOS_MAP[title]) return AWARD_WORK_SERIES_PHOTOS_MAP[title];
  const cleanTitle = title.trim().toLowerCase().replace(/[’‘`´]/g, "'");
  for (const [k, v] of Object.entries(AWARD_WORK_SERIES_PHOTOS_MAP)) {
    const cleanKey = k.toLowerCase().replace(/[’‘`´]/g, "'");
    if (cleanKey === cleanTitle) {
      return v;
    }
  }
  return undefined;
};

export const getAwardWorkImage = (title: string, itemImg?: string): string | undefined => {
  if (itemImg) return itemImg;
  if (AWARD_WORK_THUMBNAILS[title]) return AWARD_WORK_THUMBNAILS[title];
  const cleanTitle = title.trim().toLowerCase().replace(/[’‘`´]/g, "'");
  for (const [k, v] of Object.entries(AWARD_WORK_THUMBNAILS)) {
    const cleanKey = k.toLowerCase().replace(/[’‘`´]/g, "'");
    if (cleanKey === cleanTitle || cleanTitle.includes(cleanKey) || cleanKey.includes(cleanTitle)) {
      return v;
    }
  }
  return undefined;
};

export const getCategoryTitle = (category: string, lang: Language, categoryFa?: string): string => {
  if (lang === 'fa' && categoryFa) return categoryFa;
  if (lang === 'en') return category;

  const deCategoryMap: Record<string, string> = {
    'Abstract – Amateur': 'Abstrakt – Amateur',
    'Architectural Perspective': 'Architektonische Perspektive',
    'Architectural – Amateur': 'Architektur – Amateur',
    'Architecture / Others – Non-Professional': 'Architektur / Sonstige – Non-Professional',
    'Architecture – Abstract': 'Architektur – Abstrakt',
    'Architecture – Abstract (Non-Pro)': 'Architektur – Abstrakt (Non-Pro)',
    'Architecture – Historic (Non-Pro)': 'Architektur – Historisch (Non-Pro)',
    'Architecture – Interiors (Non-Pro)': 'Architektur – Innenräume (Non-Pro)',
    'Architecture, Abstract': 'Architektur, Abstrakt',
    'Architecture, Abstract – Student/Non-Pro': 'Architektur, Abstrakt – Student/Non-Pro',
    'Architecture, Historic – Student/Non-Pro': 'Architektur, Historisch – Student/Non-Pro',
    'Architecture, Interior – Student/Non-Pro': 'Architektur, Innenraum – Student/Non-Pro',
    'Architecture, Other – Student/Non-Pro': 'Architektur, Sonstige – Student/Non-Pro',
    'Black and White': 'Schwarz-Weiß',
    'Editorial – Photo Essay (Non-Pro)': 'Redaktionell – Photo-Essay (Non-Pro)',
    'Exterior Architecture Photography': 'Außenarchitektur-Photographie',
    'Exterior Architecture Photography – Landscape / Urban Design': 'Außenarchitektur – Landschaft & Stadtgestaltung',
    'Exterior Architecture Photography – Other Exterior (Student)': 'Außenarchitektur – Sonstige Außenbauten (Student)',
    'Fine Art Architecture': 'Fine Art Architektur',
    'Fine Art, Architecture – Student/Non-Pro': 'Fine Art, Architektur – Student/Non-Pro',
    'Fine Art, Other – Student/Non-Pro': 'Fine Art, Sonstige – Student/Non-Pro',
    'Interior Architecture Photography – Interior Details': 'Innenarchitektur – Architekturdetails',
    'Interior Architecture Photography – Other Interior': 'Innenarchitektur – Sonstige Innenräume',
    'People, Self-Portrait – Student/Non-Pro': 'Menschen, Selbstporträt – Student/Non-Pro',
    'Shoot (Photo/Video)': 'Shoot (Photo/Video)',
    'Special, Other – Student/Non-Pro': 'Sonderkategorie, Sonstige – Student/Non-Pro',
    'Stairs': 'Treppen & Stufen',
    'Street & Social Documentation': 'Street & Sozialdokumentation',
    'Sustainable Interior Design Photography': 'Nachhaltige Innenarchitektur-Photographie',
    'Trieste Photo Fringe 2026 – La Preferita': 'Triest Photo Fringe 2026 – La Preferita'
  };

  return deCategoryMap[category] || category;
};

export const getAwardWorkTitle = (title: string, lang: Language): string => {
  if (lang !== 'de') return title;

  const deTitleMap: Record<string, string> = {
    'The Solitaire as an Abstraction (Revised)': 'Der Solitär als Abstraktion – Überarbeitete Fassung',
    'The Solitaire as Abstraction – In Harmony with Nature': 'Der Solitär als Abstraktion – Im Einklang mit der Natur',
    'The Solitaire as an Abstraction': 'Der Solitär als Abstraktion',
    'The Solitaire as an Abstraction (Short Version)': 'Der Solitär als Abstraktion – Kurzfassung',
    'The Solitaire as an Abstraction – New Perspectives': 'Der Solitär als Abstraktion – Neue Perspektiven',
    'Black & White Solitaire': 'Schwarz-Weiß-Solitär',
    'Echoes of a Water Tower': 'Echoes of a Water Tower – Echos eines Wasserturms',
    'Steps of Sustainability': 'Steps of Sustainability – Stufen der Nachhaltigkeit',
    'Between Space and Time': 'Between Space and Time – Zwischen Raum und Zeit',
    'The Dignity of the Animal is Inviolable': 'Die Würde des Tieres ist unantastbar',
    'Architectural Piano': 'Architectural Piano – Architektur-Piano',
    'Blessed Are Those Who Mourn': 'Selig sind die Trauernden',
    'Prismatic Berlin': 'Prismatisches Berlin',
    'Transformer': 'Transformer – Urbane Wandlung',
    'Berlin: Attack on Queer, Diversity and Freedom': 'Berlin: Angriff auf Vielfalt und Freiheit',
    'Black Red Gold – Office of the Federal President of Germany': 'Schwarz Rot Gold – Bundespräsidialamt Berlin',
    'Cloud Mirror Architecture I: Heaven’s Bridge': 'Cloud Mirror Architecture I: Himmelsbrücke',
    'Cloud Mirror Architecture II: Stormy Sea (Black & White)': 'Cloud Mirror Architecture II: Stormy Sea in Schwarz-Weiß',
    'Columns in the Here and Now': 'Säulen im Hier und Jetzt',
    'Dimensions of Sustainability': 'Dimensions of Sustainability – Dimensionen der Nachhaltigkeit',
    'Elegance of Structure – An Interior Symphony of Light, Forms and Lines': 'Elegance of Structure – Eine innere Symphonie aus Licht, Formen und Linien',
    'Elegance of Structure – Black and White': 'Elegance of Structure in Schwarz-Weiß',
    'Fragments of Memory – Fragments of Time': 'Fragmente der Erinnerung – Fragmente der Zeit',
    'Hephaestus’ Legacy': 'Hephaestus’ Legacy – Das Erbe des Hephaistos',
    'In-Between Spaces': 'In-Between Spaces – Zwischenräume',
    'In-Between Spaces (Area 14)': 'In-Between Spaces – Zwischenräume Area 14',
    'Kickboxing – From Fighting in the Ring to Lightning in the Frame': 'Kickboxen – Vom Kampf im Ring zum Blitzlicht im Bild',
    'LIFE – LOVE – FREEDOM · IRAN': 'LIFE – LOVE – FREEDOM · IRAN – Leben, Liebe, Freiheit',
    'Mirrored': 'Mirrored – Gespiegelt',
    'Mirrored II': 'Mirrored II – Gespiegelt II',
    'Mirrored III (Black & White)': 'Mirrored III in Schwarz-Weiß',
    'Razor Pull Berlin': 'Razor Pull Berlin – Rasierklingen-Zug Berlin',
    'Symmetric Networks': 'Symmetrische Netzwerke'
  };

  return deTitleMap[title] || title;
};

export const getHonorBadgeInfo = (type: string, lang: Language) => {
  switch (type) {
    case 'winner':
      return {
        label: lang === 'fa' ? 'برنده رتبه اول' : lang === 'en' ? 'Winner / 1st Prize' : 'Gewinnerin · 1. Platz',
        className: 'bg-amber-600/95 text-white border-amber-400'
      };
    case 'second':
      return {
        label: lang === 'fa' ? 'جایزه دوم' : lang === 'en' ? '2nd Prize / Silver' : '2. Platz · Silber',
        className: 'bg-amber-700/95 text-white border-amber-300'
      };
    case 'third':
      return {
        label: lang === 'fa' ? 'مقام سوم · برنز' : lang === 'en' ? '3rd Prize / Bronze' : '3. Platz · Bronze',
        className: 'bg-amber-800/95 text-white border-amber-300'
      };
    case 'hm':
      return {
        label: lang === 'fa' ? 'تقدیر ویژه' : lang === 'en' ? 'Honorable Mention' : 'Lobende Erwähnung',
        className: 'bg-stone-900/90 text-white border-white/30'
      };
    case 'selection':
      return {
        label: lang === 'fa' ? 'منتخب رسمی' : lang === 'en' ? 'Official Selection' : 'Offizielle Auswahl',
        className: 'bg-stone-900/90 text-stone-200 border-stone-600'
      };
    case 'selected-photographer':
      return {
        label: lang === 'fa' ? 'عکاس برگزیده' : lang === 'de' ? 'Ausgewählte Photographin' : lang === 'fr' ? 'Photographe sélectionnée' : lang === 'it' ? 'Fotografa selezionata' : lang === 'tr' ? 'Seçilen Fotoğrafçı' : 'Selected Photographer',
        className: 'bg-stone-900/90 text-stone-200 border-stone-600'
      };
    case 'official-exhibition':
      return {
        label: lang === 'fa' ? 'منتخب برای نمایشگاه رسمی' : 'Selected for Official Exhibition',
        className: 'bg-stone-900/90 text-stone-200 border-stone-600'
      };
    case 'editor':
      return {
        label: lang === 'fa' ? 'منتخب سردبیر' : lang === 'en' ? "Editor's Pick" : 'Editor’s Pick',
        className: 'bg-stone-900/90 text-stone-200 border-stone-600'
      };
    default:
      return {
        label: lang === 'fa' ? 'نامزد' : lang === 'en' ? 'Nominee' : 'Nominierung',
        className: 'bg-stone-900/90 text-stone-200 border-stone-600'
      };
  }
};

interface CompetitionItem {
  id: string;
  year: string;
  name: string;
  host: string;
  hostFa: string;
  scopeDe: string;
  scopeEn: string;
  scopeFa: string;
  badgeImage?: string;
  mainDirectoryUrl?: string;
  honors: {
    type: 'winner' | 'second' | 'third' | 'shortlist' | 'hm' | 'selection' | 'selected-photographer' | 'official-exhibition' | 'editor' | 'nominee';
    labelDe: string;
    labelEn: string;
    labelFa: string;
    items: AwardEntry[];
  }[];
}

export const AWARD_COMPETITIONS: CompetitionItem[] = [
  {
    id: 'ipa-2026',
    year: '2026',
    name: 'International Photography Awards (IPA) 2026',
    host: 'Los Angeles / International',
    hostFa: 'لس‌آنجلس / بین‌المللی',
    scopeDe: 'Renommierter globaler Wettbewerb mit über 14.000 Einreichungen aus 139 Ländern im Jahr 2026 (Student / Non-Professional).',
    scopeEn: 'Premier global competition with over 14,000 entries from 139 countries in 2026 (Student / Non-Professional).',
    scopeFa: 'مسابقه معتبر جهانی با بیش از ۱۴,۰۰۰ اثر ارسالی از ۱۳۹ کشور جهان در سال ۲۰۲۶.',
    badgeImage: '/images/docx_badges/ipa_2026_official_selection_rose.png',
    mainDirectoryUrl: 'https://photoawards.com/winner/hmention.php?compName=IPA%202026&level=student',
    honors: [
      {
        type: 'hm',
        labelDe: '3× Lobende Erwähnung · Honorable Mention',
        labelEn: '3× Honorable Mentions',
        labelFa: '۳ عنوان تقدیر ویژه · Honorable Mention',
        items: [
          {
            title: 'Echoes of a Water Tower',
            category: 'Fine Art, Architecture – Student/Non-Pro',
            categoryFa: 'هنرهای زیبا، معماری',
            badge: '/images/email_badges/ipa_2026_hm_ribbon.png',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26'
          },
          {
            title: 'Mirrored',
            category: 'Architecture, Other – Student/Non-Pro',
            categoryFa: 'معماری، سازه‌های ویژه',
            badge: '/images/email_badges/ipa_2026_hm_ribbon.png',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722624747-26'
          },
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Architecture, Other – Student/Non-Pro',
            categoryFa: 'معماری، سازه‌های بیرونی',
            badge: '/images/email_badges/ipa_2026_hm_ribbon.png',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613449-25'
          }
        ]
      },
      {
        type: 'selection',
        labelDe: 'Sonder- & Porträtreihen · 2× Offizielle Auswahl',
        labelEn: 'Special & People · 2× Official Selections',
        labelFa: 'مجموعه‌های ویژه و پرتره · ۲ اثر منتخب رسمی',
        items: [
          {
            title: 'LIFE – LOVE – FREEDOM · IRAN',
            category: 'Special, Other – Student/Non-Pro',
            categoryFa: 'ویژه، موضوعات اجتماعی',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722616352-26'
          },
          {
            title: 'Kickboxing – From Fighting in the Ring to Lightning in the Frame',
            category: 'People, Self-Portrait – Student/Non-Pro',
            categoryFa: 'مردم، خودنگاره',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722619299-26'
          }
        ]
      },
      {
        type: 'selection',
        labelDe: 'Architektur · 12× Offizielle Auswahl (Official Selection)',
        labelEn: 'Architecture · 12× Official Selections',
        labelFa: 'معماری · ۱۲ اثر منتخب رسمی (Official Selection)',
        items: [
          {
            title: 'The Solitaire as an Abstraction (Revised)',
            category: 'Architecture, Abstract – Student/Non-Pro',
            categoryFa: 'معماری، انتزاعی',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722617898-26'
          },
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Architecture, Other – Student/Non-Pro',
            categoryFa: 'معماری، سازه‌های بیرونی',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613449-25'
          },
          {
            title: 'Elegance of Structure – Black and White',
            category: 'Architecture, Interior – Student/Non-Pro',
            categoryFa: 'معماری، فضای داخلی سیاه‌وسفید',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722624977-26'
          },
          {
            title: 'Elegance of Structure – An Interior Symphony of Light, Forms and Lines',
            category: 'Architecture, Interior – Student/Non-Pro',
            categoryFa: 'معماری، فضای داخلی رنگی',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613460-25'
          },
          {
            title: 'Echoes of a Water Tower',
            category: 'Fine Art, Architecture – Student/Non-Pro',
            categoryFa: 'هنرهای زیبا، معماری',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26'
          },
          {
            title: 'Hephaestus’ Legacy',
            category: 'Architecture, Historic – Student/Non-Pro',
            categoryFa: 'معماری، تاریخی',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722626529-26'
          },
          {
            title: 'Mirrored',
            category: 'Architecture, Other – Student/Non-Pro',
            categoryFa: 'معماری، بازتاب‌ها',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722624747-26'
          },
          {
            title: 'Dimensions of Sustainability',
            category: 'Architecture, Abstract – Student/Non-Pro',
            categoryFa: 'معماری، پایداری و انتزاع',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613455-25'
          },
          {
            title: 'Architectural Piano',
            category: 'Architecture, Abstract – Student/Non-Pro',
            categoryFa: 'معماری، ریتم و سازه',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613457-25'
          },
          {
            title: 'Fragments of Memory – Fragments of Time',
            category: 'Architecture, Historic – Student/Non-Pro',
            categoryFa: 'معماری تاریخی و حافظه زمان',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613512-25'
          },
          {
            title: 'Between Space and Time',
            category: 'Fine Art, Other – Student/Non-Pro',
            categoryFa: 'هنرهای زیبا، میان فضا و زمان',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613510-25'
          },
          {
            title: 'Symmetric Networks',
            category: 'Architecture, Other – Student/Non-Pro',
            categoryFa: 'معماری، شبکه‌های متقارن',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613543-25'
          }
        ]
      }
    ]
  },
  {
    id: 'amp-2026',
    year: '2026',
    name: 'Architecture MasterPrize (AMP) 2026 – APMP',
    host: 'Los Angeles / United States',
    hostFa: 'ایالات متحده آمریکا',
    scopeDe: 'Führender US-amerikanischer Architekturpreis. Eine internationale Fachjury bewertet photographische Arbeiten aus mehreren tausend Einreichungen aus über 94 Ländern.',
    scopeEn: 'Premier US architecture awards program. An esteemed international jury evaluates architectural photography from thousands of entries across 94+ countries.',
    scopeFa: 'معتبرترین جایزه معماری ایالات متحده آمریکا با ارزیابی هیئت داوران بین‌المللی از بیش از ۹۴ کشور.',
    badgeImage: '/images/docx_badges/amp_2026_student_hm_orange.png',
    mainDirectoryUrl: 'https://architectureprize.com/winners/2026_photo_s.php',
    honors: [
      {
        type: 'winner',
        labelDe: 'Gewinnerin des Architecture MasterPrize · Kategorie Student',
        labelEn: 'Winner – Architecture Photography MasterPrize · Student',
        labelFa: 'برنده اصلی · عکاسی معماری APMP',
        items: [
          {
            title: 'The Solitaire as an Abstraction (Revised)',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            categoryFa: 'عکاسی معماری خارجی – سازه‌های بیرونی',
            badge: '/images/2026_10_winners_badge-AMP-2026-768x355.webp',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=10332'
          }
        ]
      },
      {
        type: 'hm',
        labelDe: '10× Lobende Erwähnung · Honorable Mention',
        labelEn: '10× Honorable Mentions',
        labelFa: '۱۰ عنوان تقدیر ویژه · Honorable Mention',
        items: [
          {
            title: 'Black Red Gold – Office of the Federal President of Germany',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14722&mode=hm&compID=12821'
          },
          {
            title: 'Cloud Mirror Architecture I: Heaven’s Bridge',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14719&mode=hm&compID=12821'
          },
          {
            title: 'Cloud Mirror Architecture II: Stormy Sea (Black & White)',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14704&mode=hm&compID=12821'
          },
          {
            title: 'Razor Pull Berlin',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14703&mode=hm&compID=12821'
          },
          {
            title: 'Echoes of a Water Tower',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14715&mode=hm&compID=12821'
          },
          {
            title: 'Architectural Piano',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14668&mode=hm&compID=12821'
          },
          {
            title: 'Mirrored II',
            category: 'Exterior Architecture Photography – Landscape / Urban Design',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14661&mode=hm&compID=12821'
          },
          {
            title: 'Mirrored III (Black & White)',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14725&mode=hm&compID=12821'
          },
          {
            title: 'Elegance of Structure – Black and White',
            category: 'Interior Architecture Photography – Interior Details',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14789&mode=hm&compID=12821'
          },
          {
            title: 'Elegance of Structure – An Interior Symphony of Light, Forms and Lines',
            category: 'Interior Architecture Photography – Other Interior',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14793&mode=hm&compID=12821'
          }
        ]
      }
    ]
  },
  {
    id: 'perspa-2026',
    year: '2026',
    name: 'PERSPA – Prix de la Perspective Architecturale 2026',
    host: 'Bourges / France',
    hostFa: 'فرانسه، بورژ',
    scopeDe: 'Französischer Architekturphotopreis für Bilder, die über bloße Dokumentation hinausgehen und Maßstab, Atmosphäre und menschliche Wahrnehmung erlebbar machen.',
    scopeEn: 'French architectural photography award recognizing works that transcend mere depiction to capture scale, atmosphere, and human experience.',
    scopeFa: 'جایزه عکاسی معماری فرانسه برای آثاری که اتمسفر، مقیاس و ادراک انسانی فضا را به تصویر می‌کشند.',
    badgeImage: '/images/docx_badges/perspa_2026_second_prize_abstract.jpeg',
    mainDirectoryUrl: 'https://perspa.fr/winners/architectural-perspective/',
    honors: [
      {
        type: 'second',
        labelDe: 'Gewinnerin · 2. Platz Silber',
        labelEn: 'Winner · 2nd Place Silver',
        labelFa: 'برنده جایزه دوم · مدال نقره',
        items: [
          {
            title: 'The Solitaire as an Abstraction (Revised)',
            category: 'Architecture, Abstract',
            badge: '/images/docx_badges/perspa_2026_second_prize_abstract.jpeg',
            zoomUrl: 'https://perspa.fr/winners/architectural-perspective/#work-412'
          }
        ]
      },
      {
        type: 'hm',
        labelDe: '3× Lobende Erwähnung · Honorable Mention',
        labelEn: '3× Honorable Mentions',
        labelFa: '۳ عنوان تقدیر ویژه · Honorable Mention',
        items: [
          {
            title: 'Steps of Sustainability',
            category: 'Stairs',
            badge: '/images/docx_badges/perspa_2026_hm_stairs.png',
            zoomUrl: 'https://perspa.fr/winners/architectural-perspective/#work-152'
          },
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Architecture, Abstract',
            badge: '/images/docx_badges/perspa_2026_hm_abstract.png',
            zoomUrl: 'https://perspa.fr/2026/season-1-architectural-perspective/the-solitaire-as-abstraction-in-harmony-with-nature/'
          },
          {
            title: 'Echoes of a Water Tower',
            category: 'Black and White',
            badge: '/images/docx_badges/perspa_2026_hm_bw.png',
            zoomUrl: 'https://perspa.fr/winners/architectural-perspective/#work-211'
          }
        ]
      },
      {
        type: 'editor',
        labelDe: '3× Empfehlung der Redaktion · Editor’s Choice',
        labelEn: '3× Editor’s Choice',
        labelFa: '۳ انتخاب ویژه سردبیر · Editor’s Choice',
        items: [
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Architectural Perspective',
            zoomUrl: 'https://perspa.fr/editor-choice/'
          },
          {
            title: 'Elegance of Structure – Black and White',
            category: 'Architectural Perspective',
            zoomUrl: 'https://perspa.fr/2026/architectural-perspective/elegance-of-structure-black-and-white-2/'
          },
          {
            title: 'Hephaestus’ Legacy',
            category: 'Architectural Perspective',
            zoomUrl: 'https://perspa.fr/2026/season-1-architectural-perspective/hephaestus-legacy-3/'
          }
        ]
      }
    ]
  },
  {
    id: 'globallens-2026',
    year: '2026',
    name: 'Global Lens Photography Awards (GL) 2026',
    host: 'International',
    hostFa: 'بین‌المللی',
    scopeDe: 'Internationale Auszeichnung für herausragende kuratorische Bildgestaltung in der zeitgenössischen Photographie.',
    scopeEn: 'International recognition honoring outstanding curatorial vision in contemporary fine art photography.',
    scopeFa: 'تقدیر بین‌المللی برای نگاه نوآورانه در عکاسی معاصر.',
    badgeImage: '/images/badges_custom/globallens_2026_3rd_place.png',
    mainDirectoryUrl: 'https://globallensawards.com/winners-gallery/2026/architecture-photography/',
    honors: [
      {
        type: 'third',
        labelDe: '3. Platz · Architecture Photography: Abstract (Third Place)',
        labelEn: '3rd Place · Architecture Photography: Abstract',
        labelFa: 'مقام سوم · عکاسی معماری: انتزاعی (Third Place)',
        items: [
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Architecture Photography – Abstract',
            badge: '/images/badges_custom/globallens_2026_3rd_place.png',
            zoomUrl: 'https://globallensawards.com/2026/schirzan-schahrsad-shahmirzadi/the-solitaire-as-abstraction-in-harmony-with-nature/'
          }
        ]
      }
    ]
  },
  {
    id: 'urban-2026',
    year: '2026',
    name: 'URBAN Photo Awards 2026 (Trieste Photo Days)',
    host: 'Trieste / Italy',
    hostFa: 'تریست / ایتالیا',
    scopeDe: 'Internationales Festival in Triest, Italien. Ausgewählt für die kuratierte Hauptausstellung im historischen Mercato Coperto.',
    scopeEn: 'Renowned international festival in Trieste, Italy. Selected photographer for curated exhibition at the historic Mercato Coperto.',
    scopeFa: 'فستیوال بین‌المللی عکاسی در تریست ایتالیا و نمایشگاه برگزیدگان در مرکاتو کوپرتو.',
    badgeImage: '/images/URBAN-Photo-Awards-2026-2.png',
    mainDirectoryUrl: 'https://www.urbanphotoawards.com/en/photonew/?id=333556%2Fschirzan%2Fin-between-spaces',
    honors: [
      {
        type: 'selected-photographer',
        labelDe: 'Ausgewählte Photographin · Sparte STREETS',
        labelEn: 'Selected Photographer · STREETS',
        labelFa: 'عکاس برگزیده بخش خیابانی · Selected Photographer',
        items: [
          {
            title: 'In-Between Spaces',
            category: 'Street & Social Documentation',
            zoomUrl: 'https://www.urbanphotoawards.com/en/photonew/?id=333556%2Fschirzan%2Fin-between-spaces'
          }
        ]
      },
      {
        type: 'official-exhibition',
        labelDe: 'Gruppenausstellungen 2026 – Triest, Italien',
        labelEn: 'Group Exhibitions 2026 – Trieste, Italy',
        labelFa: 'نمایشگاه‌های گروهی ۲۰۲۶ – تریست ایتالیا',
        items: [
          {
            title: 'In-Between Spaces (Area 14)',
            category: 'Mercato Coperto | Via Giosuè Carducci 36, Triest (05. Okt – 21. Nov 2026)',
            zoomUrl: 'https://www.triestephotodays.com/en/events/urban-photographs-trieste-and-the-cities-of-the-world/'
          },
          {
            title: 'Elegance of Structure – Black and White',
            category: 'Trieste Photo Fringe 2026 – La Preferita',
            zoomUrl: 'https://www.triestephotodays.com/en/events/la-preferita-2026/'
          }
        ]
      }
    ]
  },
  {
    id: 'bifa-2026',
    year: '2026',
    name: 'Budapest International Foto Awards (BIFA) 2026',
    host: 'Budapest / Hungary',
    hostFa: 'بوداپست / مجارستان',
    scopeDe: 'Mitteleuropäischer Wettbewerb mit Fokus auf photographische Exzellenz, kuratiert von einer internationalen Jury.',
    scopeEn: 'Central European photography awards celebrating outstanding visual narratives and artistic distinction.',
    scopeFa: 'مسابقه عکاسی اروپای مرکزی با داوری بین‌المللی برای تجلیل از خلاقیت بصری.',
    badgeImage: '/images/badges_custom/bifa_2026_hm.png',
    mainDirectoryUrl: 'https://budapestfotoawards.com/honorable-mention/?comp=bifa&comp_year=2026',
    honors: [
      {
        type: 'hm',
        labelDe: 'Editorial & Photo-Essay · Lobende Erwähnung',
        labelEn: 'Editorial & Photo Essay · Honorable Mention',
        labelFa: 'عکاسی مطبوعاتی و مقاله تصویری · تقدیر ویژه',
        items: [
          {
            title: 'Berlin: Attack on Queer, Diversity and Freedom',
            category: 'Editorial – Photo Essay (Non-Pro)',
            zoomUrl: 'https://budapestfotoawards.com/winners/hm/2026/93-41283-26/'
          }
        ]
      },
      {
        type: 'hm',
        labelDe: 'Architektur · 3× Lobende Erwähnung (Honorable Mention)',
        labelEn: 'Architecture · 3× Honorable Mentions',
        labelFa: 'معماری · ۳ عنوان تقدیر ویژه (Honorable Mention)',
        items: [
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Architecture – Abstract (Non-Pro)',
            zoomUrl: 'https://budapestfotoawards.com/winners/hm/2026/93-40415-26/'
          },
          {
            title: 'Elegance of Structure – Black and White',
            category: 'Architecture – Interiors (Non-Pro)',
            zoomUrl: 'https://budapestfotoawards.com/winners/hm/2026/93-40416-26/'
          },
          {
            title: 'Hephaestus’ Legacy',
            category: 'Architecture – Historic (Non-Pro)',
            zoomUrl: 'https://budapestfotoawards.com/winners/hm/2026/93-40542-26/'
          }
        ]
      }
    ]
  },
  {
    id: 'ipa-2025',
    year: '2025',
    name: 'International Photography Awards (IPA) 2025',
    host: 'Los Angeles / International',
    hostFa: 'لس‌آنجلس / بین‌المللی',
    scopeDe: 'Über 14.000 Einreichungen aus 100 Ländern im Jahr 2025.',
    scopeEn: 'Over 14,000 submissions from 100 countries in 2025.',
    scopeFa: 'بیش از ۱۴,۰۰۰ اثر از ۱۰۰ کشور جهان.',
    badgeImage: '/images/docx_badges/ipa_2025_hm_green.png',
    mainDirectoryUrl: 'https://photoawards.com/winner/hmention.php?compName=IPA%202025&level=student',
    honors: [
      {
        type: 'hm',
        labelDe: 'Lobende Erwähnung · Non-Professional',
        labelEn: 'Honorable Mention · Non-Professional',
        labelFa: 'تقدیر ویژه · بخش آزاد و دانشجویی',
        items: [
          {
            title: 'The Solitaire as an Abstraction',
            category: 'Architecture – Abstract',
            badge: '/images/docx_badges/ipa_2025_hm_green.png',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722606309-25'
          }
        ]
      }
    ]
  },
  {
    id: 'amp-2025',
    year: '2025',
    name: 'Architecture MasterPrize (AMP) 2025',
    host: 'Los Angeles / United States',
    hostFa: 'ایالات متحده آمریکا',
    scopeDe: 'Internationaler US-Architekturpreis mit Einreichungen aus über 72 Ländern.',
    scopeEn: 'Prestigious global architecture program with submissions from over 72 nations.',
    scopeFa: 'جایزه معتبر معماری با حضور شرکت‌کنندگانی از بیش از ۷۲ کشور.',
    badgeImage: '/images/docx_badges/amp_2025_hm_orange.png',
    mainDirectoryUrl: 'https://architectureprize.com/winners/2025_photo_s.php',
    honors: [
      {
        type: 'winner',
        labelDe: 'Gewinnerin · Andere Außenarchitektur · Student',
        labelEn: 'Winner · Other Exterior · Student',
        labelFa: 'برنده اصلی · معماری سازه‌های بیرونی',
        items: [
          {
            title: 'The Solitaire as an Abstraction',
            category: 'Exterior Architecture Photography',
            badge: '/images/2026_01_winners_badge-AMP-2025-768x355.webp',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=8533'
          }
        ]
      },
      {
        type: 'hm',
        labelDe: 'Lobende Erwähnung – Nachhaltiges Interieur',
        labelEn: 'Honorable Mention – Sustainable Interior',
        labelFa: 'تقدیر ویژه در معماری داخلی پایدار',
        items: [
          {
            title: 'Steps of Sustainability',
            category: 'Sustainable Interior Design Photography',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=12441&mode=hm&compID=12816'
          }
        ]
      }
    ]
  },
  {
    id: 'nd-2025',
    year: '2025',
    name: 'ND Awards 2025 – 12th Annual Photography Contest',
    host: 'International',
    hostFa: 'بین‌المللی',
    scopeDe: 'Globaler Wettbewerb mit einer renommierten Jury aus internationalen Galerist:innen, Bildredakteur:innen und Verleger:innen.',
    scopeEn: 'Highly respected international competition juried by leading gallery owners, publishers, and photography editors.',
    scopeFa: 'مسابقه معتبر عکاسی با داوری مدیران گالری‌ها و ناشران برجسته بین‌المللی.',
    badgeImage: '/images/badges_custom/nd_awards_2025_hm.png',
    mainDirectoryUrl: 'https://ndawards.net/winners-gallery/nd-awards-2025/non-professional/honorable-mentions/',
    honors: [
      {
        type: 'hm',
        labelDe: 'Lobende Erwähnung · Architektur und Sonstige',
        labelEn: 'Honorable Mention · Architecture and Others',
        labelFa: 'تقدیر ویژه در بخش معماری',
        items: [
          {
            title: 'The Solitaire as an Abstraction (Short Version)',
            category: 'Architecture / Others – Non-Professional',
            zoomUrl: 'https://ndawards.net/winners-gallery/nd-awards-2025/non-professional/other/hm/23252/'
          }
        ]
      }
    ]
  },
  {
    id: 'spider-2025',
    year: '2025',
    name: 'Black & White Spider Awards 2025 – 20th Edition',
    host: 'Beverly Hills / London',
    hostFa: 'بورلی هیلز / لندن',
    scopeDe: 'Führender weltweiter Preis für Schwarz-Weiß-Photographie. Jury mit Vertreter:innen der Tate Modern, Sotheby\'s, Serpentine Galleries, Artnet, Ogilvy und Financial Times bei ca. 6.000 Einreichungen aus 64 Ländern.',
    scopeEn: 'The leading international accolade for black and white photography. Jurors include Tate Modern, Sotheby\'s, Serpentine Galleries, Artnet, Ogilvy, and Financial Times.',
    scopeFa: 'معتبرترین جایزه جهانی عکاسی سیاه‌وسفید با حضور داورانی از تیت مدرن، ساتبیز، گالری سرپنتین و آرت‌نت.',
    badgeImage: '/images/2025_12_spiderfellow20thwinner.webp',
    mainDirectoryUrl: 'https://www.thespiderawards.com/gallery/20th/gallery.php?x=a&cid=653&g=w',
    honors: [
      {
        type: 'hm',
        labelDe: 'Lobende Erwähnung · Architektur · Amateur',
        labelEn: 'Honorable Mention · Architectural · Amateur',
        labelFa: 'تقدیر ویژه در عکاسی معماری',
        items: [
          {
            title: 'Architectural Piano',
            category: 'Architectural – Amateur',
            zoomUrl: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=653&fid=309239'
          }
        ]
      },
      {
        type: 'nominee',
        labelDe: '3× Nominierung · Architektur und Abstrakt',
        labelEn: '3× Nominee · Architectural and Abstract',
        labelFa: '۳ عنوان نامزدی رسمی · Nominee',
        items: [
          {
            title: 'Architectural Piano',
            category: 'Architectural – Amateur',
            zoomUrl: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=653&fid=309239'
          },
          {
            title: 'Columns in the Here and Now',
            category: 'Architectural – Amateur',
            badge: '/images/docx_badges/spider_20th_nominee.png',
            zoomUrl: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238'
          },
          {
            title: 'Black & White Solitaire',
            category: 'Abstract – Amateur',
            badge: '/images/badges_custom/spider_awards_2025_nominee.jpg',
            zoomUrl: 'https://www.thespiderawards.com/gallery/20th/gallery.php?x=a&cid=651&g=w'
          }
        ]
      }
    ]
  },
  {
    id: 'licc-2025',
    year: '2025',
    name: 'London International Creative Competition (LICC) 2025',
    host: 'London / United Kingdom',
    hostFa: 'لندن / انگلستان',
    scopeDe: 'Genreübergreifender Kreativwettbewerb mit tausenden Einreichungen aus über 80 Ländern und der Hauptsparte „Shoot (Photo/Video)“.',
    scopeEn: 'Multidisciplinary creative awards program juried by international curators across 80+ nations, featuring Shoot (Photo/Video).',
    scopeFa: 'مسابقه خلاقیت بین‌المللی لندن با حضور هنرمندانی از بیش از ۸۰ کشور.',
    badgeImage: '/images/docx_badges/licc_2025_official_selection.png',
    mainDirectoryUrl: 'https://www.licc.uk/winners/officialselection.php?comp_name=LICC%202025',
    honors: [
      {
        type: 'shortlist',
        labelDe: '2× Shortlist-Nominierung · Sparte Shoot Photo & Video',
        labelEn: '2× Shortlisted · Category Shoot Photo & Video',
        labelFa: '۲ اثر در فهرست نهایی · Shortlisted',
        items: [
          {
            title: 'The Solitaire as an Abstraction (Revised)',
            category: 'Shoot (Photo/Video)',
            badge: '/images/docx_badges/licc_2025_shortlist.png',
            zoomUrl: 'https://www.licc.uk/winners/winner.php?id=125857'
          },
          {
            title: 'The Solitaire as an Abstraction – New Perspectives',
            category: 'Shoot (Photo/Video)',
            badge: '/images/docx_badges/licc_2025_shortlist.png',
            zoomUrl: 'https://www.licc.uk/winners/winner.php?id=125858'
          }
        ]
      },
      {
        type: 'selection',
        labelDe: '6× Offizielle Auswahl · Sparte Shoot Photo & Video',
        labelEn: '6× Official Selection · Category Shoot Photo & Video',
        labelFa: '۶ اثر منتخب رسمی · Official Selection',
        items: [
          {
            title: 'The Dignity of the Animal is Inviolable',
            category: 'Shoot (Photo/Video)',
            badge: '/images/docx_badges/licc_2025_official_selection.png',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37357-25&OS=true'
          },
          {
            title: 'Blessed Are Those Who Mourn',
            category: 'Shoot (Photo/Video)',
            badge: '/images/docx_badges/licc_2025_official_selection.png',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37355-25&OS=true'
          },
          {
            title: 'Prismatic Berlin',
            category: 'Shoot (Photo/Video)',
            badge: '/images/docx_badges/licc_2025_official_selection.png',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37342-25&OS=true'
          },
          {
            title: 'Transformer',
            category: 'Shoot (Photo/Video)',
            badge: '/images/docx_badges/licc_2025_official_selection.png',
            zoomUrl: 'https://www.licc.uk/winners/winner.php?id=2-37351-25&OS=true'
          },
          {
            title: 'Architectural Piano',
            category: 'Shoot (Photo/Video)',
            badge: '/images/docx_badges/licc_2025_official_selection.png',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37822-25&OS=true'
          },
          {
            title: 'Between Space and Time',
            category: 'Shoot (Photo/Video)',
            badge: '/images/docx_badges/licc_2025_official_selection.png',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37352-25&OS=true'
          }
        ]
      }
    ]
  }
];

export const AwardReferencesSection: React.FC<AwardReferencesSectionProps> = ({ currentLang, onOpenLightbox }) => {
  const [filterYear, setFilterYear] = useState<'all' | '2026' | '2025'>('all');

  const filteredCompetitions = AWARD_COMPETITIONS.filter(c => {
    if (filterYear === 'all') return true;
    return c.year === filterYear;
  });

  return (
    <div className="space-y-12 max-w-6xl mx-auto py-8">

      {/* 02 Awards Header – Matching Navbar 02 */}
      <SectionHeader
        num="02"
        shortTitleDe="International Awards"
        shortTitleEn="International Awards"
        shortTitleFa="جوایز بین‌المللی"
        fullTitleDe="International Awards – Internationale Photopreis‑Referenzen"
        fullTitleEn="International Awards – International Photography Honors & Directory"
        fullTitleFa="جوایز بین‌المللی – مراجع عکاسی و استعلام رسمی"
        descDe="Vollständige Übersicht aller internationalen Photopreise, offiziellen Siegel, Fachjurys und Verifikationslinks führender Institutionen aus den USA, Frankreich, Italien, Großbritannien und Ungarn."
        descEn="Complete register of international photography honors, official juror panels, winner compendiums, and verified direct zoom links across premier institutions."
        descFa="فهرست جامع تمامی جوایز بین‌المللی عکاسی، کاتالوگ‌های رسمی برگزیدگان و لینک‌های زوم مستقیم جهت استعلام اصالت افتخارات از ایالات متحده، فرانسه، ایتالیا و انگلستان."
        currentLang={currentLang}
        extraRight={
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-stone-500 font-mono flex items-center gap-1.5 mr-1 text-[11px]">
              <Filter className="w-3.5 h-3.5 text-stone-400" />
              <span>{currentLang === 'fa' ? 'فیلتر:' : 'Filter:'}</span>
            </span>
            <button
              onClick={() => setFilterYear('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${filterYear === 'all'
                ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-2xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
            >
              {currentLang === 'fa' ? 'همه (۱۱ رقابت)' : 'Alle Wettbewerbe (11)'}
            </button>
            <button
              onClick={() => setFilterYear('2026')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${filterYear === '2026'
                ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-2xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
            >
              2026 (6)
            </button>
            <button
              onClick={() => setFilterYear('2025')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${filterYear === '2025'
                ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-2xs'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
            >
              2025 (5)
            </button>
          </div>
        }
      />

      {/* Competitions Cards Grid */}
      <div className="space-y-6">
        {filteredCompetitions.map((comp) => (
          <div
            key={comp.id}
            className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs transition-all hover:border-amber-800/40"
          >
            {/* Competition Card Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-stone-100 pb-5 mb-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-xs font-bold">
                    {comp.year}
                  </span>
                  <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{currentLang === 'fa' ? comp.hostFa : comp.host}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  {comp.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal pt-1">
                  {currentLang === 'de'
                    ? comp.scopeDe
                    : currentLang === 'fa'
                      ? comp.scopeFa
                      : comp.scopeEn}
                </p>
              </div>

              {/* Badge Image & Main Directory Link */}
              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
                {comp.badgeImage && (
                  <img
                    src={resolveAsset(comp.badgeImage)}
                    alt={comp.name}
                    className="h-11 sm:h-13 w-auto max-w-[150px] sm:max-w-[180px] object-contain drop-shadow-2xs transition-transform duration-200 hover:scale-105 shrink-0"
                    loading="lazy"
                    onError={(e) => {
                      const currentSrc = e.currentTarget.src;
                      if (currentSrc.endsWith('.webp')) {
                        e.currentTarget.src = currentSrc.replace(/\.webp$/, '.png');
                      } else {
                        e.currentTarget.style.display = 'none';
                      }
                    }}
                  />
                )}

                {comp.mainDirectoryUrl && (
                  <a
                    href={comp.mainDirectoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors"
                  >
                    <span>
                      {currentLang === 'fa'
                        ? 'سایت رسمی مسابقه'
                        : currentLang === 'en'
                          ? 'Official Winners Directory'
                          : 'Offizielles Gewinner-Verzeichnis'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Honors & Awarded Works Breakdown */}
            <div className="space-y-6">
              {comp.honors.map((honorGroup, hIdx) => {
                const isTopHonor = honorGroup.type === 'winner' || honorGroup.type === 'second' || honorGroup.type === 'third';

                return (
                  <div
                    key={hIdx}
                    className={`p-4 sm:p-5 rounded-2xl border ${isTopHonor
                      ? 'bg-amber-50/70 border-amber-300/80'
                      : 'bg-[#faf8f5] border-stone-200/80'
                      }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {isTopHonor ? (
                        <Trophy className="w-4 h-4 text-amber-700" />
                      ) : (
                        <Award className="w-4 h-4 text-stone-600" />
                      )}
                      <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900">
                        {currentLang === 'de'
                          ? honorGroup.labelDe
                          : currentLang === 'fa'
                            ? honorGroup.labelFa
                            : honorGroup.labelEn}
                      </h4>
                    </div>

                    {/* List of awarded works in generous Gallery-style Cards */}
                    <div
                      className={`grid gap-4 sm:gap-6 ${
                        honorGroup.items.length === 1
                          ? 'grid-cols-1 max-w-sm'
                          : honorGroup.items.length === 2
                          ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl'
                          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      }`}
                    >
                      {honorGroup.items.map((item, itemIdx) => {
                        const thumbImg = getAwardWorkImage(item.title, item.image);
                        const workTitle = getAwardWorkTitle(item.title, currentLang);
                        const categoryName = getCategoryTitle(item.category, currentLang, item.categoryFa);
                        const badgeInfo = getHonorBadgeInfo(honorGroup.type, currentLang);
                        const seriesPhotos = getAwardWorkSeriesPhotos(item.title);
                        const displayBadge = item.badge || comp.badgeImage;

                        const handleArtworkClick = (startIdx = 0) => {
                          if (seriesPhotos && seriesPhotos.length > 0 && onOpenLightbox) {
                            onOpenLightbox(
                              seriesPhotos.map((src, idx) => ({
                                id: `award-${item.title}-${idx}`,
                                src,
                                alt: `${workTitle} — ${idx + 1}/${seriesPhotos.length}`,
                                captionDe: `${workTitle} (${idx + 1}/${seriesPhotos.length}) — ${categoryName} · ${comp.name} (${comp.year}) [${honorGroup.labelDe}]`,
                                captionEn: `${workTitle} (${idx + 1}/${seriesPhotos.length}) — ${categoryName} · ${comp.name} (${comp.year}) [${honorGroup.labelEn}]`,
                                captionFa: `${workTitle} (${idx + 1}/${seriesPhotos.length}) — ${categoryName} · ${comp.name} (${comp.year}) [${honorGroup.labelFa}]`,
                              })),
                              startIdx
                            );
                          } else if (thumbImg && onOpenLightbox) {
                            onOpenLightbox([
                              {
                                id: `award-${item.title}`,
                                src: thumbImg,
                                alt: workTitle,
                                captionDe: `${workTitle} — ${categoryName} · ${comp.name} (${comp.year}) [${honorGroup.labelDe}]`,
                                captionEn: `${workTitle} — ${categoryName} · ${comp.name} (${comp.year}) [${honorGroup.labelEn}]`,
                                captionFa: `${workTitle} — ${categoryName} · ${comp.name} (${comp.year}) [${honorGroup.labelFa}]`,
                              }
                            ], 0);
                          } else if (item.zoomUrl) {
                            window.open(item.zoomUrl, '_blank', 'noopener,noreferrer');
                          }
                        };

                        return (
                          <div
                            key={itemIdx}
                            className="bg-white rounded-2xl border border-stone-200/90 hover:border-amber-700/60 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                          >
                            {/* Card Image Header: Gallery Proportions with Honor & Year Badges */}
                            {thumbImg ? (
                              <div
                                onClick={() => handleArtworkClick(0)}
                                className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden bg-stone-900 group/img flex items-center justify-center cursor-pointer select-none"
                                title={currentLang === 'de' ? 'Klicken für Vollbild-Ansicht' : currentLang === 'fa' ? 'کلیک برای مشاهده تمام‌صفحه' : 'Click for full view'}
                              >
                                <img
                                  src={resolveAsset(thumbImg)}
                                  alt={workTitle}
                                  loading="lazy"
                                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 protected-art"
                                  onError={(e) => {
                                    const currentSrc = e.currentTarget.src;
                                    if (currentSrc.endsWith('.webp')) {
                                      e.currentTarget.src = currentSrc.replace(/\.webp$/, '.jpg');
                                    }
                                  }}
                                />
                                <div className="absolute inset-0 bg-stone-950/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                  <div className="bg-white/95 backdrop-blur-xs text-stone-900 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-mono font-semibold transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                                    <Eye className="w-3.5 h-3.5 text-amber-800" />
                                    <span>{currentLang === 'fa' ? 'مشاهده بزرگ‌تر' : currentLang === 'en' ? 'Enlarge' : 'Großansicht'}</span>
                                  </div>
                                </div>

                                {/* Photo count indicator bottom-left if series has multiple photos */}
                                {seriesPhotos && seriesPhotos.length > 1 && (
                                  <div className="absolute bottom-2.5 left-2.5 rtl:left-auto rtl:right-2.5 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1 shadow-sm z-10">
                                    <ImageIcon className="w-3 h-3 text-stone-300" />
                                    <span>
                                      {currentLang === 'fa'
                                        ? `${seriesPhotos.length} تصویر`
                                        : `${seriesPhotos.length} Photos`}
                                    </span>
                                  </div>
                                )}

                                {/* Watermark bottom-right */}
                                <div className="absolute bottom-2.5 right-2.5 rtl:right-auto rtl:left-2.5 text-[9px] sm:text-[9.5px] tracking-wider text-white/95 font-serif pointer-events-none select-none bg-stone-900/60 px-1.5 py-0.5 rounded backdrop-blur-xs z-10">
                                  SchirZan | Schahrsad Shahmirzadi
                                </div>
                              </div>
                            ) : (
                              <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-stone-100 flex items-center justify-center border-b border-stone-100">
                                <Award className="w-10 h-10 text-amber-700/50" />
                              </div>
                            )}

                            {/* Award Badges Bar: Sauber außerhalb des Bildes positioniert, um nicht vom Kunstwerk abzulenken */}
                            <div className="px-4 pt-3 pb-2 border-b border-stone-100 flex items-center justify-between gap-2 flex-wrap bg-stone-50/50">
                              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-bold tracking-tight border ${
                                isTopHonor 
                                  ? 'bg-amber-100 text-amber-950 border-amber-300' 
                                  : 'bg-white text-stone-800 border-stone-200/90 shadow-2xs'
                              }`}>
                                {isTopHonor ? <Trophy className="w-3 h-3 text-amber-700" /> : <Award className="w-3 h-3 text-stone-500" />}
                                <span>{badgeInfo.label}</span>
                              </span>

                              <div className="flex items-center gap-1.5 shrink-0">
                                {displayBadge && (
                                  <div className="p-0.5 bg-white rounded border border-stone-200/80 shadow-2xs flex items-center justify-center">
                                    <img
                                      src={resolveAsset(displayBadge)}
                                      alt={comp.name}
                                      className="h-6 sm:h-7 w-auto object-contain max-w-[80px]"
                                    />
                                  </div>
                                )}
                                <span className="px-2 py-0.5 rounded bg-white border border-stone-200/80 text-stone-700 text-[10.5px] font-mono font-bold shadow-2xs">
                                  {comp.year}
                                </span>
                              </div>
                            </div>

                            {/* Card Content: Thema / Kategorie + Werk-Titel + Serie Thumbnails + Wettbewerb */}
                            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-900 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 inline-block">
                                    {categoryName}
                                  </span>
                                </div>
                                <h5
                                  onClick={() => handleArtworkClick(0)}
                                  className="font-serif font-bold text-base sm:text-lg text-stone-900 group-hover:text-amber-900 transition-colors leading-snug cursor-pointer"
                                  title={workTitle}
                                >
                                  {workTitle}
                                </h5>

                                {/* Thumbnail strip of all series photos (only shown if series has more than 1 photo) */}
                                {seriesPhotos && seriesPhotos.length > 1 && (
                                  <div className="pt-1.5">
                                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mb-1 font-semibold">
                                      {currentLang === 'de'
                                        ? `Photos der Serie (${seriesPhotos.length}):`
                                        : currentLang === 'fa'
                                        ? `تصاویر مجموعه (${seriesPhotos.length}):`
                                        : `Series Photos (${seriesPhotos.length}):`}
                                    </span>
                                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                                      {seriesPhotos.map((pSrc, pIdx) => (
                                        <button
                                          key={pIdx}
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleArtworkClick(pIdx);
                                          }}
                                          className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-stone-200/90 hover:border-amber-700/80 shrink-0 group/thumb cursor-pointer shadow-2xs hover:shadow-xs transition-all"
                                          title={`${workTitle} · Photo ${pIdx + 1}`}
                                        >
                                          <img
                                            src={resolveAsset(pSrc)}
                                            alt={`${workTitle} ${pIdx + 1}`}
                                            className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300 select-none protected-art"
                                            loading="lazy"
                                            onError={(e) => {
                                              (e.currentTarget.parentElement as HTMLElement)?.style.setProperty('display', 'none');
                                            }}
                                          />
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Footer Action */}
                              <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                                {seriesPhotos && seriesPhotos.length > 1 ? (
                                  <button
                                    type="button"
                                    onClick={() => handleArtworkClick(0)}
                                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors cursor-pointer group/btn"
                                  >
                                    <span className="group-hover/btn:underline">
                                      {currentLang === 'fa'
                                        ? `مشاهده سری · ${seriesPhotos.length} اثر ←`
                                        : currentLang === 'de'
                                        ? `Serie ansehen · ${seriesPhotos.length} Photos →`
                                        : `View Series · ${seriesPhotos.length} Photos →`}
                                    </span>
                                  </button>
                                ) : (
                                  <span className="text-xs font-mono text-stone-600 font-medium" title={comp.name}>
                                    {comp.name}
                                  </span>
                                )}
                                {item.zoomUrl && (
                                  <a
                                    href={item.zoomUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-amber-800 text-white transition-colors text-xs font-mono font-semibold shrink-0 cursor-pointer shadow-2xs"
                                    title={currentLang === 'fa' ? 'مشاهده اثر رسمی' : currentLang === 'en' ? 'View Official Entry' : 'Werk ansehen'}
                                  >
                                    <span>{currentLang === 'fa' ? 'مشاهده' : currentLang === 'en' ? 'View' : 'Ansehen'}</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
