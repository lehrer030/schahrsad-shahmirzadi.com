import type { Language, PhotoSeries } from '../data/photographyData';

interface SeoConfig {
  lang: Language;
  selectedSeries?: PhotoSeries | null;
  sectionName?: string;
}

const BASE_URL = 'https://schirzan.com';

const DEFAULT_METAS: Record<Language, { title: string; description: string; locale: string }> = {
  de: {
    title: 'SchirZan | Schahrsad Shahmirzadi · Photographie',
    description: 'Offizielles Portfolio & Werkverzeichnis von Schahrsad Shahmirzadi (SchirZan). International prämierte Architektur- & Fine-Art-Photographie (AMP, IPA, BIFA).',
    locale: 'de_DE'
  },
  en: {
    title: 'SchirZan | Schahrsad Shahmirzadi · Photography',
    description: 'Official portfolio & catalog of Schahrsad Shahmirzadi (SchirZan). Internationally awarded architecture & fine art photography (AMP, IPA, BIFA).',
    locale: 'en_US'
  },
  fa: {
    title: 'شیرزن | شهزاد شاهمیرزادی · عکاسی معماری و جوایز بین‌المللی',
    description: 'مجموعه آثار رسمی و کارنامه عکاسی شهزاد شاهمیرزادی (شیرزن). برنده جوایز بین‌المللی عکاسی معماری و هنرهای زیبا (AMP، IPA، BIFA).',
    locale: 'fa_IR'
  },
  fr: {
    title: 'SchirZan | Schahrsad Shahmirzadi · Photographie & Prix Internationaux',
    description: 'Portfolio officiel et catalogue de Schahrsad Shahmirzadi (SchirZan). Photographie d\'architecture et beaux-arts primée à l\'échelle mondiale (AMP, IPA, BIFA).',
    locale: 'fr_FR'
  },
  it: {
    title: 'SchirZan | Schahrsad Shahmirzadi · Fotografia & Premi Internazionali',
    description: 'Portfolio ufficiale e catalogo ragionato di Schahrsad Shahmirzadi (SchirZan). Fotografia d\'architettura e fine art premiata a livello internazionale.',
    locale: 'it_IT'
  },
  tr: {
    title: 'SchirZan | Schahrsad Shahmirzadi · Fotoğrafçılık & Ödüller',
    description: 'Schahrsad Shahmirzadi\'nin (SchirZan) resmi portföyü ve eser kataloğu. Uluslararası ödüllü mimari ve güzel sanatlar fotoğrafçılığı (AMP, IPA, BIFA).',
    locale: 'tr_TR'
  }
};

export function updatePageSeo({ lang, selectedSeries }: SeoConfig) {
  if (typeof document === 'undefined') return;

  const defaultMeta = DEFAULT_METAS[lang] || DEFAULT_METAS.de;
  let pageTitle = defaultMeta.title;
  let pageDescription = defaultMeta.description;

  if (selectedSeries) {
    const seriesTitle =
      (lang === 'en' && selectedSeries.titleEn) ||
      (lang === 'fa' && selectedSeries.titleFa) ||
      (lang === 'fr' && selectedSeries.titleFr) ||
      (lang === 'it' && selectedSeries.titleIt) ||
      (lang === 'tr' && selectedSeries.titleTr) ||
      selectedSeries.titleDe ||
      selectedSeries.titleEn;

    const seriesDesc =
      (lang === 'en' && selectedSeries.descriptionEn) ||
      (lang === 'fa' && selectedSeries.descriptionFa) ||
      (lang === 'fr' && selectedSeries.descriptionFr) ||
      (lang === 'it' && selectedSeries.descriptionIt) ||
      (lang === 'tr' && selectedSeries.descriptionTr) ||
      selectedSeries.descriptionDe ||
      defaultMeta.description;

    if (lang === 'fa') {
      pageTitle = `${seriesTitle} | شیرزن (شهزاد شاهمیرزادی)`;
    } else {
      pageTitle = `${seriesTitle} · SchirZan | Schahrsad Shahmirzadi`;
    }

    if (seriesDesc) {
      pageDescription = seriesDesc.slice(0, 160).trim() + '...';
    }
  }

  // 1. Update Title
  document.title = pageTitle;

  // 2. Helper to set or create meta tags
  const setMeta = (selector: string, attr: string, value: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      const [attrName, attrVal] = selector.replace(/[\[\]"]/g, '').split('=');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  // 3. Update Standard Meta Tags
  setMeta('meta[name="description"]', 'content', pageDescription);
  setMeta('meta[name="title"]', 'content', pageTitle);

  // 4. Update OpenGraph Tags
  setMeta('meta[property="og:title"]', 'content', pageTitle);
  setMeta('meta[property="og:description"]', 'content', pageDescription);
  setMeta('meta[property="og:locale"]', 'content', defaultMeta.locale);

  // 5. Update Twitter Cards
  setMeta('meta[name="twitter:title"]', 'content', pageTitle);
  setMeta('meta[name="twitter:description"]', 'content', pageDescription);

  // 6. Update Canonical tag
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  const canonicalUrl = lang === 'de' ? `${BASE_URL}/` : `${BASE_URL}/?lang=${lang}`;
  canonicalEl.setAttribute('href', canonicalUrl);
}
