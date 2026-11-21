import React from 'react';
import type { Language } from '../data/photographyData';

interface SectionHeaderProps {
  num: string; // '01', '02', ..., '10'
  shortTitleDe: string;
  shortTitleEn: string;
  shortTitleFa: string;
  shortTitleFr?: string;
  shortTitleIt?: string;
  shortTitleTr?: string;
  fullTitleDe: string;
  fullTitleEn: string;
  fullTitleFa: string;
  fullTitleFr?: string;
  fullTitleIt?: string;
  fullTitleTr?: string;
  descDe?: string;
  descEn?: string;
  descFa?: string;
  descFr?: string;
  descIt?: string;
  descTr?: string;
  currentLang: Language;
  extraRight?: React.ReactNode;
}

const SECTION_I18N: Record<string, {
  fr: { short: string; full: string; desc: string };
  it: { short: string; full: string; desc: string };
  tr: { short: string; full: string; desc: string };
}> = {
  '01': {
    fr: {
      short: 'Photographie',
      full: 'Photographie – Œuvres & Distinctions',
      desc: 'Photographies d’architecture primées, axées sur les structures solitaires et les formes géométriques.'
    },
    it: {
      short: 'Fotografia',
      full: 'Fotografia – Opere & Riconoscimenti',
      desc: 'Fotografie di architettura premiate con focus su strutture solitarie e forme geometriche.'
    },
    tr: {
      short: 'Fotoğrafçılık',
      full: 'Fotoğrafçılık – Eserler & Ödüller',
      desc: 'Tekil yapılar ve geometrik formlara odaklanan ödüllü mimari fotoğraf serileri.'
    }
  },
  '02': {
    fr: {
      short: 'Prix Internationaux',
      full: 'Prix Internationaux – Références Photographiques Mondiales',
      desc: 'Palmarès vérifié des concours internationaux majeurs : Architecture MasterPrize (AMP Los Angeles), International Photography Awards (IPA New York/Athènes), PERSPA (France) et BIFA (Budapest).'
    },
    it: {
      short: 'Premi Internazionali',
      full: 'Premi Internazionali – Riconoscimenti Fotografici Mondiali',
      desc: 'Riconoscimenti verificati nei principali concorsi internazionali: Architecture MasterPrize (AMP Los Angeles), International Photography Awards (IPA New York/Atene), PERSPA (Francia) e BIFA (Budapest).'
    },
    tr: {
      short: 'Uluslararası Ödüller',
      full: 'Uluslararası Ödüller – Küresel Fotoğrafçılık Başarıları',
      desc: 'Önde gelen uluslararası yarışmalarda kazanılan doğrulanmış başarılar: Architecture MasterPrize (AMP Los Angeles), International Photography Awards (IPA New York/Atina), PERSPA (Fransa) ve BIFA (Budapeşte).'
    }
  },
  '03': {
    fr: {
      short: 'Expositions',
      full: 'Expositions – Expositions Collectives 2026 (Trieste Photo Days)',
      desc: 'Sélection officielle et participation aux expositions internationales en galerie et festivals photographiques.'
    },
    it: {
      short: 'Mostre',
      full: 'Mostre – Mostre Collettive 2026 (Trieste Photo Days)',
      desc: 'Selezione ufficiale e partecipazione a mostre internazionali in gallerie e festival fotografici.'
    },
    tr: {
      short: 'Sergiler',
      full: 'Sergiler – Karma Sergiler 2026 (Trieste Photo Days)',
      desc: 'Uluslararası fotoğraf festivalleri ve sergilerde resmi seçkiler ve gösterimler.'
    }
  },
  '04': {
    fr: {
      short: 'Publications',
      full: 'Publications – Catalogues, Choix de la Rédaction & E-Books',
      desc: 'Publications dans les livres d’art internationaux, revues photographiques et catalogues officiels de concours.'
    },
    it: {
      short: 'Pubblicazioni',
      full: 'Pubblicazioni – Cataloghi, Scelta della Redazione & E-Book',
      desc: 'Pubblicazioni su libri d’arte internazionali, riviste fotografiche e cataloghi ufficiali dei concorsi.'
    },
    tr: {
      short: 'Yayınlar',
      full: 'Yayınlar – Kitaplar, Kataloglar & Editörün Seçimi',
      desc: 'Uluslararası sanat kitapları, fotoğraf dergileri ve resmi ödül kataloglarında yer alan yayınlar.'
    }
  },
  '05': {
    fr: {
      short: 'Presse',
      full: 'Presse – Couverture Médiatique & Critiques Internationales',
      desc: 'Articles de presse, interviews et reportages internationaux consacrés à SchirZan et à ses œuvres.'
    },
    it: {
      short: 'Stampa',
      full: 'Stampa – Articoli dei Media & Recensioni Internazionali',
      desc: 'Articoli dei media, interviste e servizi giornalistici internazionali dedicati a SchirZan e alle sue opere.'
    },
    tr: {
      short: 'Basın',
      full: 'Basın – Uluslararası Basın Haberleri & İncelemeler',
      desc: 'SchirZan ve eserleri hakkında uluslararası basında yer alan haberler, röportajlar ve değerlendirmeler.'
    }
  },
  '06': {
    fr: {
      short: 'Kickboxing',
      full: 'Kickboxing – 10× Championne du Monde SchirZan | Schahrsad Shahmirzadi',
      desc: 'L’une des kickboxeuses allemandes les plus titrées : 10-fache championne du monde (WKU, ISKA, ICO), double championne d’Europe, triple vainqueure de la Coupe du Monde et ceinture noire 3e Dan.'
    },
    it: {
      short: 'Kickboxing',
      full: 'Kickboxing – 10× Campionessa Mondiale SchirZan | Schahrsad Shahmirzadi',
      desc: 'Una delle kickboxer tedesche più titolate: 10 volte campionessa del mondo (WKU, ISKA, ICO), 2 volte campionessa europea, 3 volte vincitrice della Coppa del Mondo e cintura nera 3° Dan.'
    },
    tr: {
      short: 'Kickboks',
      full: 'Kickboks – 10× Dünya Şampiyonu SchirZan | Schahrsad Shahmirzadi',
      desc: 'Almanya’nın en başarılı kadın kickboksörlerinden biri: 10 kez Dünya Şampiyonu (WKU, ISKA, ICO), 2 kez Avrupa Şampiyonu, 3 kez Dünya Kupası Galibi ve 3. Dan Siyah Kuşak sahibi.'
    }
  },
  '07': {
    fr: {
      short: 'Biographie',
      full: 'Biographie – Identité Personnelle & Parcours',
      desc: 'Schahrsad Shahmirzadi (Nom d’artiste SchirZan | شیر زن) : Origines germano-iraniennes, découverte de la photographie et reconnaissance internationale.'
    },
    it: {
      short: 'Biografia',
      full: 'Biografia – Identità Personale & Profilo',
      desc: 'Schahrsad Shahmirzadi (Nome d’arte SchirZan | شیر زن): Radici tedesco-iraniane, scoperta della fotografia e affermazione internazionale.'
    },
    tr: {
      short: 'Biyografi',
      full: 'Biyografi – Kişisel Kimlik & Kariyer Yolculuğu',
      desc: 'Schahrsad Shahmirzadi (Sanatçı Adı SchirZan | شیر زن): Alman-İran kökenleri, fotoğraf tutkusu ve küresel başarıları.'
    }
  },
  '08': {
    fr: {
      short: 'Formation',
      full: 'Formation – Parcours Académique Interdisciplinaire',
      desc: 'Du Graues Kloster aux études de droit à la FU Berlin, de la police criminelle (LKA) au Ministère de l’Environnement (MLEUV) à Potsdam et Master M.Sc. à l’Université de Coblence.'
    },
    it: {
      short: 'Formazione',
      full: 'Formazione – Percorso Accademico Interdisciplinare',
      desc: 'Dal Graues Kloster agli studi di giurisprudenza alla FU Berlino, dalla Polizia (LKA) al Ministero dell’Ambiente (MLEUV) a Potsdam e Master M.Sc. all’Università di Coblenza.'
    },
    tr: {
      short: 'Eğitim',
      full: 'Eğitim – Disiplinlerarası Akademik Eğitim',
      desc: 'Graues Kloster Lisesi ve FU Berlin hukuk eğitiminden Berlin Polisi (LKA), Potsdam Çevre Bakanlığı (MLEUV) ve Koblenz Üniversitesi M.Sc. yüksek lisansına uzanan akademik kariyer.'
    }
  },
  '09': {
    fr: {
      short: 'Engagement',
      full: 'Engagement – Protection de l’Environnement, Droits Humains & Paix',
      desc: 'Solidarité avec les personnes vulnérables, courses caritatives pour les droits humains (ECCHR) lors du semi-marathon de Berlin et engagement actif pour la préservation des eaux.'
    },
    it: {
      short: 'Impegno',
      full: 'Impegno – Tutela Ambientale, Diritti Umani & Pace',
      desc: 'Solidarietà con le persone vulnerabili, corse di beneficenza per i diritti umani (ECCHR) alla mezza maratona di Berlino e impegno per la tutela delle acque.'
    },
    tr: {
      short: 'Sosyal Sorumluluk',
      full: 'Sosyal Sorumluluk – Çevre Koruma, İnsan Hakları & Barış',
      desc: 'Dezavantajlı bireylerle dayanışma, Berlin Yarı Maratonu ECCHR insan hakları yardım koşusu ve su kaynaklarının korunması.'
    }
  },
  '10': {
    fr: {
      short: 'Galerie',
      full: 'Galerie – Sport, Engagement & Gala IPA Athènes',
      desc: 'Moments choisis en images : victoires en kickboxing, engagement humanitaire et remise de prix au gala IPA à Athènes.'
    },
    it: {
      short: 'Galleria',
      full: 'Galleria – Sport, Impegno & Gala IPA Atene',
      desc: 'Momenti salienti in immagini: vittorie nel kickboxing, impegno umanitario e cerimonia di premiazione al gala IPA di Atene.'
    },
    tr: {
      short: 'Galeri',
      full: 'Galeri – Spor, Mücadele & Atina IPA Galası',
      desc: 'Fotoğraflarla önemli anlar: Kickboks şampiyonlukları, insani yardım projeleri ve Atina IPA galası ödül töreni.'
    }
  }
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  num,
  shortTitleDe,
  shortTitleEn,
  shortTitleFa,
  shortTitleFr,
  shortTitleIt,
  shortTitleTr,
  fullTitleDe,
  fullTitleEn,
  fullTitleFa,
  fullTitleFr,
  fullTitleIt,
  fullTitleTr,
  descDe,
  descEn,
  descFa,
  descFr,
  descIt,
  descTr,
  currentLang,
  extraRight
}) => {
  const dict = SECTION_I18N[num];

  const shortTitle =
    currentLang === 'de'
      ? shortTitleDe
      : currentLang === 'fa'
      ? shortTitleFa
      : currentLang === 'fr'
      ? (shortTitleFr || dict?.fr.short || shortTitleEn)
      : currentLang === 'it'
      ? (shortTitleIt || dict?.it.short || shortTitleEn)
      : currentLang === 'tr'
      ? (shortTitleTr || dict?.tr.short || shortTitleEn)
      : shortTitleEn;

  const fullTitle =
    currentLang === 'de'
      ? fullTitleDe
      : currentLang === 'fa'
      ? fullTitleFa
      : currentLang === 'fr'
      ? (fullTitleFr || dict?.fr.full || fullTitleEn)
      : currentLang === 'it'
      ? (fullTitleIt || dict?.it.full || fullTitleEn)
      : currentLang === 'tr'
      ? (fullTitleTr || dict?.tr.full || fullTitleEn)
      : fullTitleEn;

  const desc =
    currentLang === 'de'
      ? descDe
      : currentLang === 'fa'
      ? descFa
      : currentLang === 'fr'
      ? (descFr || dict?.fr.desc || descEn)
      : currentLang === 'it'
      ? (descIt || dict?.it.desc || descEn)
      : currentLang === 'tr'
      ? (descTr || dict?.tr.desc || descEn)
      : descEn;

  return (
    <div className="border-b-2 border-stone-200/90 pb-5 mb-8 sm:mb-10 relative">
      <div className="space-y-2.5 w-full">
        {/* Header pill matching navbar */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#1c1917] text-white shadow-xs">
          <span className="px-1.5 py-0.5 rounded bg-amber-400 text-stone-950 font-mono font-bold text-xs tracking-tight">
            {num}
          </span>
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-stone-100">
            {shortTitle}
          </span>
        </div>

        {/* Prominent main title - proportional and elegant font size */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-serif text-stone-900 font-bold tracking-tight leading-snug">
          {fullTitle}
        </h2>

        {/* Explanatory description and optional right-side controls */}
        {(desc || extraRight) && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-0.5">
            {desc ? (
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-3xl">
                {desc}
              </p>
            ) : <div />}

            {extraRight && (
              <div className="shrink-0 self-start md:self-end">
                {extraRight}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Visual Accent bar on the divider */}
      <div className="absolute -bottom-[2px] left-0 w-24 h-[2px] bg-amber-500 rounded-full" />
    </div>
  );
};
