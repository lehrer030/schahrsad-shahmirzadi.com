import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  MapPin,
  Trophy,
  Filter
} from 'lucide-react';
import type { Language } from '../data/photographyData';
import { resolveAsset } from '../utils/resolveAsset';

interface AwardReferencesSectionProps {
  currentLang: Language;
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
  'Architectural Piano': '/images/2026_10_amp-2026-architectural-piano-01-scaled.webp',
  'Berlin: Attack on Queer, Diversity and Freedom': '/images/2026_09_os-01-life-love-freedom-iran-02-scaled.jpeg',
  'Between Space and Time': '/images/2026_09_os-10-between-space-and-time-01-scaled.jpeg',
  'Black & White Solitaire': '/images/2026_10_amp-2026-elegance-structure-bw-01-scaled.webp',
  'Black Red Gold – Office of the Federal President of Germany': '/images/2026_10_amp-2026-black-red-gold-01-scaled.webp',
  'Blessed Are Those Who Mourn': '/images/2026_09_os-10-between-space-and-time-02-scaled.jpeg',
  'Cloud Mirror Architecture I: Heaven’s Bridge': '/images/2026_10_amp-2026-cloud-mirror-i-01-scaled.webp',
  'Cloud Mirror Architecture II: Stormy Sea (Black & White)': '/images/2026_10_amp-2026-cloud-mirror-ii-bw-01-scaled.webp',
  'Columns in the Here and Now': '/images/2026_10_amp-2026-razor-pull-berlin-03-scaled.webp',
  'Dimensions of Sustainability': '/images/2026_09_os-07-dimensions-of-sustainability-01-scaled.jpeg',
  'Echoes of a Water Tower': '/images/2026_10_amp-2026-echoes-water-tower-01-scaled.webp',
  'Elegance of Structure – An Interior Symphony of Light, Forms and Lines': '/images/2026_10_amp-2026-elegance-interior-symphony-01-scaled.webp',
  'Elegance of Structure – Black and White': '/images/2026_10_amp-2026-elegance-structure-bw-01-scaled.webp',
  'Fragments of Memory – Fragments of Time': '/images/2026_09_os-09-fragments-of-memory-fragments-of-time-01-scaled.webp',
  'Hephaestus’ Legacy': '/images/2026_09_os-06-hephaestus-legacy-01-scaled.webp',
  'In-Between Spaces': '/images/2026_07_In-Between-Spaces-scaled.jpg',
  'In-Between Spaces (Area 14)': '/images/2026_07_In-Between-Spaces-scaled.jpg',
  'Kickboxing – From Fighting in the Ring to Lightning in the Frame': '/images/2026_09_os-02-kickboxing-from-fighting-in-the-ring-01-scaled.jpeg',
  'LIFE – LOVE – FREEDOM · IRAN': '/images/2026_09_os-01-life-love-freedom-iran-01-scaled.jpeg',
  'Mirrored': '/images/2026_10_amp-2026-razor-pull-berlin-02-scaled.webp',
  'Mirrored II': '/images/2026_10_amp-2026-razor-pull-berlin-04-scaled.webp',
  'Mirrored III (Black & White)': '/images/2026_10_amp-2026-razor-pull-berlin-05-scaled.webp',
  'Prismatic Berlin': '/images/2026_10_amp-2026-cloud-mirror-i-02-scaled.webp',
  'Razor Pull Berlin': '/images/2026_10_amp-2026-razor-pull-berlin-01-scaled.webp',
  'Steps of Sustainability': '/images/2026_09_os-07-dimensions-of-sustainability-02-scaled.jpeg',
  'Symmetric Networks': '/images/2026_09_os-11-symmetric-networks-01-scaled.webp',
  'The Dignity of the Animal is Inviolable': '/images/2026_04_59097f0d6c9eece89abc78e06350bb1f-scaled.jpeg',
  'The Solitaire as Abstraction – In Harmony with Nature': '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp',
  'The Solitaire as an Abstraction': '/images/2026_10_amp-2026-winner-solitaire-revised-01-scaled.webp',
  'The Solitaire as an Abstraction (Revised)': '/images/2026_10_amp-2026-winner-solitaire-revised-01-scaled.webp',
  'The Solitaire as an Abstraction (Short Version)': '/images/2026_10_amp-2026-winner-solitaire-revised-02-scaled.webp',
  'The Solitaire as an Abstraction – New Perspectives': '/images/2026_10_amp-2026-winner-solitaire-revised-03-scaled.webp',
  'Transformer': '/images/2026_10_amp-2026-cloud-mirror-i-04-scaled.webp'
};

export const getAwardWorkImage = (title: string, itemImg?: string): string | undefined => {
  if (itemImg) return itemImg;
  if (AWARD_WORK_THUMBNAILS[title]) return AWARD_WORK_THUMBNAILS[title];
  const cleanTitle = title.trim().toLowerCase();
  for (const [k, v] of Object.entries(AWARD_WORK_THUMBNAILS)) {
    const cleanKey = k.toLowerCase();
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
    'Editorial – Photo Essay (Non-Pro)': 'Redaktionell – Foto-Essay (Non-Pro)',
    'Exterior Architecture Photography': 'Außenarchitektur-Fotografie',
    'Exterior Architecture Photography – Landscape / Urban Design': 'Außenarchitektur – Landschaft & Stadtgestaltung',
    'Exterior Architecture Photography – Other Exterior (Student)': 'Außenarchitektur – Sonstige Außenbauten (Student)',
    'Fine Art Architecture': 'Fine Art Architektur',
    'Fine Art, Architecture – Student/Non-Pro': 'Fine Art, Architektur – Student/Non-Pro',
    'Fine Art, Other – Student/Non-Pro': 'Fine Art, Sonstige – Student/Non-Pro',
    'Interior Architecture Photography – Interior Details': 'Innenarchitektur – Architekturdetails',
    'Interior Architecture Photography – Other Interior': 'Innenarchitektur – Sonstige Innenräume',
    'People, Self-Portrait – Student/Non-Pro': 'Menschen, Selbstporträt – Student/Non-Pro',
    'Shoot (Photo/Video)': 'Shoot (Foto/Video)',
    'Special, Other – Student/Non-Pro': 'Sonderkategorie, Sonstige – Student/Non-Pro',
    'Stairs': 'Treppen & Stufen',
    'Street & Social Documentation': 'Street & Sozialdokumentation',
    'Sustainable Interior Design Photography': 'Nachhaltige Innenarchitektur-Fotografie',
    'Trieste Photo Fringe 2026 – La Preferita': 'Triest Photo Fringe 2026 – La Preferita'
  };

  return deCategoryMap[category] || category;
};

export const getAwardWorkTitle = (title: string, lang: Language): string => {
  if (lang !== 'de') return title;

  const deTitleMap: Record<string, string> = {
    'The Solitaire as an Abstraction (Revised)': 'Der Solitär als Abstraktion (Überarbeitet)',
    'The Solitaire as Abstraction – In Harmony with Nature': 'Der Solitär als Abstraktion – Im Einklang mit der Natur',
    'The Solitaire as an Abstraction': 'Der Solitär als Abstraktion',
    'The Solitaire as an Abstraction (Short Version)': 'Der Solitär als Abstraktion (Kurzfassung)',
    'The Solitaire as an Abstraction – New Perspectives': 'Der Solitär als Abstraktion – Neue Perspektiven',
    'Black & White Solitaire': 'Schwarz-Weiß-Solitär',
    'Echoes of a Water Tower': 'Echoes of a Water Tower (Echos eines Wasserturms)',
    'Steps of Sustainability': 'Steps of Sustainability (Stufen der Nachhaltigkeit)',
    'Between Space and Time': 'Between Space and Time (Zwischen Raum und Zeit)',
    'The Dignity of the Animal is Inviolable': 'Die Würde des Tieres ist unantastbar',
    'Architectural Piano': 'Architectural Piano (Architektur-Piano)',
    'Blessed Are Those Who Mourn': 'Selig sind die Trauernden',
    'Prismatic Berlin': 'Prismatisches Berlin',
    'Transformer': 'Transformer (Transformation)',
    'Berlin: Attack on Queer, Diversity and Freedom': 'Berlin: Angriff auf Vielfalt und Freiheit',
    'Black Red Gold – Office of the Federal President of Germany': 'Schwarz Rot Gold – Bundespräsidialamt Berlin',
    'Cloud Mirror Architecture I: Heaven’s Bridge': 'Cloud Mirror Architecture I: Himmelsbrücke',
    'Cloud Mirror Architecture II: Stormy Sea (Black & White)': 'Cloud Mirror Architecture II: Stürmische See (Schwarz-Weiß)',
    'Columns in the Here and Now': 'Säulen im Hier und Jetzt',
    'Dimensions of Sustainability': 'Dimensions of Sustainability (Dimensionen der Nachhaltigkeit)',
    'Elegance of Structure – An Interior Symphony of Light, Forms and Lines': 'Elegance of Structure – Eine innere Symphonie aus Licht, Formen und Linien',
    'Elegance of Structure – Black and White': 'Elegance of Structure – Schwarz-Weiß',
    'Fragments of Memory – Fragments of Time': 'Fragmente der Erinnerung – Fragmente der Zeit',
    'Hephaestus’ Legacy': 'Hephaestus’ Legacy (Das Erbe des Hephaistos)',
    'In-Between Spaces': 'In-Between Spaces (Zwischenräume)',
    'In-Between Spaces (Area 14)': 'In-Between Spaces (Zwischenräume – Area 14)',
    'Kickboxing – From Fighting in the Ring to Lightning in the Frame': 'Kickboxen – Vom Kampf im Ring zum Blitzlicht im Bild',
    'LIFE – LOVE – FREEDOM · IRAN': 'LIFE – LOVE – FREEDOM · IRAN (Leben – Liebe – Freiheit)',
    'Mirrored': 'Mirrored (Gespiegelt)',
    'Mirrored II': 'Mirrored II (Gespiegelt II)',
    'Mirrored III (Black & White)': 'Mirrored III (Gespiegelt III – Schwarz-Weiß)',
    'Razor Pull Berlin': 'Razor Pull Berlin (Rasierklingen-Zug Berlin)',
    'Symmetric Networks': 'Symmetrische Netzwerke'
  };

  return deTitleMap[title] || title;
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
    type: 'winner' | 'second' | 'shortlist' | 'hm' | 'selection' | 'editor' | 'nominee';
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
    badgeImage: '/images/2026_08_create_hmention_seal22-1024x630.webp',
    mainDirectoryUrl: 'https://photoawards.com/winner/hmention.php?compName=IPA%202026&level=student',
    honors: [
      {
        type: 'hm',
        labelDe: '3× Lobende Erwähnungen (Honorable Mentions)',
        labelEn: '3× Honorable Mentions',
        labelFa: '۳ عنوان تقدیر ویژه (Honorable Mention)',
        items: [
          {
            title: 'Echoes of a Water Tower',
            category: 'Fine Art, Architecture – Student/Non-Pro',
            categoryFa: 'هنرهای زیبا، معماری',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26'
          },
          {
            title: 'Mirrored',
            category: 'Architecture, Other – Student/Non-Pro',
            categoryFa: 'معماری، سازه‌های ویژه',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722624747-26'
          },
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Architecture, Other – Student/Non-Pro',
            categoryFa: 'معماری، سازه‌های بیرونی',
            zoomUrl: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613449-25'
          }
        ]
      },
      {
        type: 'selection',
        labelDe: '14× Offizielle Auswahlen (Official Selections)',
        labelEn: '14× Official Selections',
        labelFa: '۱۴ اثر منتخب رسمی (Official Selection)',
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
          },
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
    scopeDe: 'Führender US-amerikanischer Architekturpreis. Eine internationale Fachjury bewertet fotografische Arbeiten aus mehreren tausend Einreichungen aus über 94 Ländern.',
    scopeEn: 'Premier US architecture awards program. An esteemed international jury evaluates architectural photography from thousands of entries across 94+ countries.',
    scopeFa: 'معتبرترین جایزه معماری ایالات متحده آمریکا با ارزیابی هیئت داوران بین‌المللی از بیش از ۹۴ کشور.',
    badgeImage: '/images/2026_10_winners_badge-AMP-2026-1024x474.webp',
    mainDirectoryUrl: 'https://architectureprize.com/winners/2026_photo_s.php',
    honors: [
      {
        type: 'winner',
        labelDe: 'Gewinnerin – Architecture MasterPrize (Student)',
        labelEn: 'Winner – Architecture Photography MasterPrize (Student)',
        labelFa: 'برنده اصلی (Winner) – عکاسی معماری APMP',
        items: [
          {
            title: 'The Solitaire as an Abstraction (Revised)',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            categoryFa: 'عکاسی معماری خارجی – سازه‌های بیرونی',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=10332'
          }
        ]
      },
      {
        type: 'hm',
        labelDe: '10× Lobende Erwähnungen (Honorable Mentions)',
        labelEn: '10× Honorable Mentions',
        labelFa: '۱۰ عنوان تقدیر ویژه (Honorable Mention)',
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
            title: 'Mirrored III (Black & White)',
            category: 'Exterior Architecture Photography – Other Exterior (Student)',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14725&mode=hm&compID=12821'
          },
          {
            title: 'Mirrored II',
            category: 'Exterior Architecture Photography – Landscape / Urban Design',
            zoomUrl: 'https://architectureprize.com/winners/winner.php?id=14661&mode=hm&compID=12821'
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
    scopeDe: 'Französischer Architekturfotopreis für Bilder, die über bloße Dokumentation hinausgehen und Maßstab, Atmosphäre und menschliche Wahrnehmung erlebbar machen.',
    scopeEn: 'French architectural photography award recognizing works that transcend mere depiction to capture scale, atmosphere, and human experience.',
    scopeFa: 'جایزه عکاسی معماری فرانسه برای آثاری که اتمسفر، مقیاس و ادراک انسانی فضا را به تصویر می‌کشند.',
    badgeImage: '/images/2026_10_perspa-awards-2026-second-prize-abstract.webp',
    mainDirectoryUrl: 'https://perspa.fr/winners/architectural-perspective/',
    honors: [
      {
        type: 'second',
        labelDe: 'Gewinnerin – 2. Platz (Silber)',
        labelEn: 'Winner – 2nd Place',
        labelFa: 'برنده جایزه دوم (2nd Place Winner)',
        items: [
          {
            title: 'The Solitaire as an Abstraction (Revised)',
            category: 'Architecture, Abstract',
            zoomUrl: 'https://perspa.fr/winners/architectural-perspective/#work-132'
          }
        ]
      },
      {
        type: 'hm',
        labelDe: '3× Lobende Erwähnungen (Honorable Mentions)',
        labelEn: '3× Honorable Mentions',
        labelFa: '۳ عنوان تقدیر ویژه (Honorable Mentions)',
        items: [
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Architecture, Abstract',
            zoomUrl: 'https://perspa.fr/2026/season-1-architectural-perspective/the-solitaire-as-abstraction-in-harmony-with-nature/'
          },
          {
            title: 'Echoes of a Water Tower',
            category: 'Black and White',
            zoomUrl: 'https://perspa.fr/winners/architectural-perspective/#work-211'
          },
          {
            title: 'Steps of Sustainability',
            category: 'Stairs',
            zoomUrl: 'https://perspa.fr/winners/architectural-perspective/'
          }
        ]
      },
      {
        type: 'editor',
        labelDe: '3× Empfehlung der Redaktion (Editor’s Choice)',
        labelEn: '3× Editor’s Choice',
        labelFa: '۳ انتخاب ویژه سردبیر (Editor’s Choice)',
        items: [
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Architectural Perspective',
            zoomUrl: 'https://perspa.fr/editor-choice/'
          },
          {
            title: 'Elegance of Structure – Black and White',
            category: 'Architectural Perspective',
            zoomUrl: 'https://perspa.fr/editor-choice/'
          },
          {
            title: 'Hephaestus’ Legacy',
            category: 'Architectural Perspective',
            zoomUrl: 'https://perspa.fr/editor-choice/'
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
    scopeDe: 'Internationale Auszeichnung für herausragende kuratorische Bildgestaltung in der zeitgenössischen Fotografie.',
    scopeEn: 'International recognition honoring outstanding curatorial vision in contemporary fine art photography.',
    scopeFa: 'تقدیر بین‌المللی برای نگاه نوآورانه در عکاسی معاصر.',
    badgeImage: '/images/Global@LENS.png',
    mainDirectoryUrl: 'https://globallensawards.com/',
    honors: [
      {
        type: 'editor',
        labelDe: 'Empfehlung der Redaktion (Editor’s Choice)',
        labelEn: 'Editor’s Choice',
        labelFa: 'انتخاب ویژه سردبیر (Editor’s Choice)',
        items: [
          {
            title: 'The Solitaire as Abstraction – In Harmony with Nature',
            category: 'Fine Art Architecture',
            zoomUrl: 'https://globallensawards.com/'
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
        type: 'winner',
        labelDe: 'Ausgewählte Fotografin (STREETS)',
        labelEn: 'Selected Photographer (STREETS)',
        labelFa: 'عکاس برگزیده بخش خیابانی (Selected Photographer)',
        items: [
          {
            title: 'In-Between Spaces',
            category: 'Street & Social Documentation',
            zoomUrl: 'https://www.urbanphotoawards.com/en/photonew/?id=333556%2Fschirzan%2Fin-between-spaces'
          }
        ]
      },
      {
        type: 'selection',
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
    scopeDe: 'Mitteleuropäischer Wettbewerb mit Fokus auf fotografische Exzellenz, kuratiert von einer internationalen Jury.',
    scopeEn: 'Central European photography awards celebrating outstanding visual narratives and artistic distinction.',
    scopeFa: 'مسابقه عکاسی اروپای مرکزی با داوری بین‌المللی برای تجلیل از خلاقیت بصری.',
    badgeImage: '/images/2026_10_winners_badge-1024x474.webp',
    mainDirectoryUrl: 'https://budapestfotoawards.com/honorable-mention/?comp=bifa&comp_year=2026',
    honors: [
      {
        type: 'hm',
        labelDe: '4× Lobende Erwähnungen (Honorable Mentions)',
        labelEn: '4× Honorable Mentions',
        labelFa: '۴ عنوان تقدیر ویژه (Honorable Mentions)',
        items: [
          {
            title: 'Berlin: Attack on Queer, Diversity and Freedom',
            category: 'Editorial – Photo Essay (Non-Pro)',
            zoomUrl: 'https://budapestfotoawards.com/winners/hm/2026/93-41283-26/'
          },
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
    badgeImage: '/images/2026_08_ipa-2026-3.webp',
    mainDirectoryUrl: 'https://photoawards.com/winner/hmention.php?compName=IPA%202025&level=student',
    honors: [
      {
        type: 'hm',
        labelDe: 'Lobende Erwähnung (Non-Professional)',
        labelEn: 'Honorable Mention (Non-Professional)',
        labelFa: 'تقدیر ویژه (Honorable Mention)',
        items: [
          {
            title: 'The Solitaire as an Abstraction',
            category: 'Architecture – Abstract',
            zoomUrl: 'https://www.photoawards.com/winner/zoom.php?eid=8-1722606309-25'
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
    badgeImage: '/images/2026_01_winners_badge-AMP-2025-1024x474.webp',
    mainDirectoryUrl: 'https://architectureprize.com/winners/2025_photo_s.php',
    honors: [
      {
        type: 'winner',
        labelDe: 'Gewinnerin – Andere Außenarchitektur (Student)',
        labelEn: 'Winner – Other Exterior (Student)',
        labelFa: 'برنده اصلی (Winner)',
        items: [
          {
            title: 'The Solitaire as an Abstraction',
            category: 'Exterior Architecture Photography',
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
    badgeImage: '/images/2026_01_winners_badge-AMP-2025-Honorable-Mention-1024x474.webp',
    mainDirectoryUrl: 'https://ndawards.net/winners-gallery/nd-awards-2025/non-professional/honorable-mentions/',
    honors: [
      {
        type: 'hm',
        labelDe: 'Lobende Erwähnung (Architektur / Sonstige)',
        labelEn: 'Honorable Mention (Architecture / Others)',
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
    scopeDe: 'Führender weltweiter Preis für Schwarz-Weiß-Fotografie. Jury mit Vertreter:innen der Tate Modern, Sotheby\'s, Serpentine Galleries, Artnet, Ogilvy und Financial Times bei ca. 6.000 Einreichungen aus 64 Ländern.',
    scopeEn: 'The leading international accolade for black and white photography. Jurors include Tate Modern, Sotheby\'s, Serpentine Galleries, Artnet, Ogilvy, and Financial Times.',
    scopeFa: 'معتبرترین جایزه جهانی عکاسی سیاه‌وسفید با حضور داورانی از تیت مدرن، ساتبیز، گالری سرپنتین و آرت‌نت.',
    badgeImage: '/images/2025_12_spiderfellow20thwinner.webp',
    mainDirectoryUrl: 'https://www.thespiderawards.com/gallery/20th/gallery.php?x=a&cid=653&g=w',
    honors: [
      {
        type: 'hm',
        labelDe: 'Lobende Erwähnung (Architektur – Amateur)',
        labelEn: 'Honorable Mention (Architectural – Amateur)',
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
        labelDe: '3× Nominierungen (Architektur & Abstrakt)',
        labelEn: '3× Nominee (Architectural & Abstract)',
        labelFa: '۳ عنوان نامزدی (Nominee)',
        items: [
          {
            title: 'Architectural Piano',
            category: 'Architectural – Amateur',
            zoomUrl: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=653&fid=309239'
          },
          {
            title: 'Columns in the Here and Now',
            category: 'Architectural – Amateur',
            zoomUrl: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238'
          },
          {
            title: 'Black & White Solitaire',
            category: 'Abstract – Amateur',
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
    badgeImage: '/images/LICC-logo-horizontal-final-ver.png',
    mainDirectoryUrl: 'https://www.licc.uk/winners/officialselection.php?comp_name=LICC%202025',
    honors: [
      {
        type: 'shortlist',
        labelDe: '2× Shortlist-Nominierungen (Shoot – Foto/Video)',
        labelEn: '2× Shortlisted (Shoot – Photo/Video)',
        labelFa: '۲ اثر در فهرست نهایی (Shortlisted)',
        items: [
          {
            title: 'The Solitaire as an Abstraction (Revised)',
            category: 'Shoot (Photo/Video)',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=125857'
          },
          {
            title: 'The Solitaire as an Abstraction – New Perspectives',
            category: 'Shoot (Photo/Video)',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=125858'
          }
        ]
      },
      {
        type: 'selection',
        labelDe: '6× Offizielle Auswahlen (Shoot – Foto/Video)',
        labelEn: '6× Official Selections (Shoot – Photo/Video)',
        labelFa: '۶ اثر منتخب رسمی (Official Selection)',
        items: [
          {
            title: 'The Dignity of the Animal is Inviolable',
            category: 'Shoot (Photo/Video)',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37357-25&OS=true'
          },
          {
            title: 'Blessed Are Those Who Mourn',
            category: 'Shoot (Photo/Video)',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37355-25&OS=true'
          },
          {
            title: 'Prismatic Berlin',
            category: 'Shoot (Photo/Video)',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37342-25&OS=true'
          },
          {
            title: 'Transformer',
            category: 'Shoot (Photo/Video)',
            zoomUrl: 'https://www.licc.uk/winners/winner.php?id=2-37351-25&OS=true'
          },
          {
            title: 'Architectural Piano',
            category: 'Shoot (Photo/Video)',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37822-25&OS=true'
          },
          {
            title: 'Between Space and Time',
            category: 'Shoot (Photo/Video)',
            zoomUrl: 'http://www.licc.uk/winners/winner.php?id=2-37352-25&OS=true'
          }
        ]
      }
    ]
  }
];

export const AwardReferencesSection: React.FC<AwardReferencesSectionProps> = ({ currentLang }) => {
  const [filterYear, setFilterYear] = useState<'all' | '2026' | '2025'>('all');

  const filteredCompetitions = AWARD_COMPETITIONS.filter(c => {
    if (filterYear === 'all') return true;
    return c.year === filterYear;
  });

  return (
    <div className="space-y-12 max-w-6xl mx-auto py-8">

      {/* Editorial Section Header */}
      <div className="border-b border-stone-200 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-800">
            <Trophy className="w-3.5 h-3.5 text-amber-700" />
            <span>
              {currentLang === 'fa'
                ? 'مراجع رسمی و استعلام جوایز'
                : 'International Award References & Verifications'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-stone-900 font-bold tracking-tight">
            {currentLang === 'de'
              ? 'Internationale Auszeichnungen & Zertifikate'
              : currentLang === 'fa'
                ? 'جوایز بین‌المللی، داوری و لینک‌های تایید رسمی'
                : 'International Photography Award References & Directory'}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal pt-1">
            {currentLang === 'de'
              ? 'Vollständige Übersicht aller internationalen Fotopreise, offiziellen Siegel, Fachjurys und Verifikationslinks führender Institutionen aus den USA, Frankreich, Italien, Großbritannien und Ungarn.'
              : currentLang === 'fa'
                ? 'فهرست جامع تمامی جوایز بین‌المللی عکاسی، کاتالوگ‌های رسمی برگزیدگان و لینک‌های زوم مستقیم جهت استعلام اصالت افتخارات از ایالات متحده، فرانسه، ایتالیا و انگلستان.'
                : 'Complete register of international photography honors, official juror panels, winner compendiums, and verified direct zoom links across premier institutions.'}
          </p>
        </div>

        {/* Quick Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 text-xs shrink-0 self-start md:self-end">
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
      </div>

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
                    className="h-10 sm:h-12 w-auto object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
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
                const isTopHonor = honorGroup.type === 'winner' || honorGroup.type === 'second';

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

                    {/* List of awarded works */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {honorGroup.items.map((item, itemIdx) => {
                        const thumbImg = getAwardWorkImage(item.title, item.image);

                        return (
                          <div
                            key={itemIdx}
                            className="relative bg-white p-2.5 sm:p-3 rounded-xl border border-stone-200/70 flex items-center justify-between gap-3 hover:border-amber-700/50 hover:shadow-sm hover:z-30 transition-all group"
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              {thumbImg && (
                                <div className="relative group/thumb shrink-0 z-10 hover:z-50">
                                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/90 shadow-2xs transition-all duration-300 ease-out group-hover/thumb:scale-[1.75] group-hover/thumb:shadow-2xl group-hover/thumb:border-amber-700/80 group-hover/thumb:ring-2 group-hover/thumb:ring-amber-500/40 cursor-zoom-in origin-left rtl:origin-right">
                                    <img
                                      src={resolveAsset(thumbImg)}
                                      alt={getAwardWorkTitle(item.title, currentLang)}
                                      loading="lazy"
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                                    />
                                  </div>
                                </div>
                              )}
                              <div className="space-y-0.5 min-w-0 flex-1">
                                <h5
                                  className="font-serif font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-1 sm:truncate"
                                  title={getAwardWorkTitle(item.title, currentLang)}
                                >
                                  {getAwardWorkTitle(item.title, currentLang)}
                                </h5>
                                <p className="text-[11px] text-stone-500 font-mono line-clamp-1 sm:truncate">
                                  {getCategoryTitle(item.category, currentLang, item.categoryFa)}
                                </p>
                              </div>
                            </div>

                            {item.zoomUrl && (
                              <a
                                href={item.zoomUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-900 text-stone-700 hover:text-white transition-colors text-[10px] font-mono font-semibold shrink-0 cursor-pointer shadow-2xs"
                                title={currentLang === 'fa' ? 'مشاهده اثر' : currentLang === 'en' ? 'View artwork' : 'Werk ansehen'}
                              >
                                <span>{currentLang === 'fa' ? 'مشاهده' : currentLang === 'en' ? 'View' : 'Ansehen'}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
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
