export interface AwardBadge {
  id: string;
  name: string;
  year: string;
  category?: string;
  award: string;
  badgeImage: string;
  link: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'inline';
}

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  captionDe?: string;
  captionEn?: string;
}

export interface PhotoSeries {
  id: string;
  category: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits';
  titleDe: string;
  titleEn: string;
  subtitleDe: string;
  subtitleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  personalNoteDe?: string;
  personalNoteEn?: string;
  coverImage: string;
  photos: PhotoItem[];
  badges: AwardBadge[];
}

export interface FurtherWork {
  id: string;
  titleDe: string;
  titleEn: string;
  category: string;
  awardsDe: string;
  awardsEn: string;
  badgeNames: string[];
  link?: string;
}

export interface CategoryInfo {
  id: 'architecture' | 'fine-art' | 'social-environmental' | 'portraits';
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'architecture',
    titleDe: 'Architecture',
    titleEn: 'Architecture',
    descriptionDe: 'Internationale prämierte Architektur-Fotografie mit Fokus auf Solitäre, Licht, Geometrie und urbane Abstraktion.',
    descriptionEn: 'Internationally awarded architectural photography focusing on solitaires, light, geometry, and urban abstraction.'
  },
  {
    id: 'fine-art',
    titleDe: 'Fine Art',
    titleEn: 'Fine Art',
    descriptionDe: 'Künstlerische Erkundungen von Form, Raum, Zeit und Poesie des Lichts.',
    descriptionEn: 'Artistic explorations of form, space, time, and the poetry of light.'
  },
  {
    id: 'social-environmental',
    titleDe: 'Social & Environmental Themes',
    titleEn: 'Social & Environmental Themes',
    descriptionDe: 'Engagierte Fotografie für Menschenrechte, Vielfalt, Tierschutz und gesellschaftliche Verantwortung.',
    descriptionEn: 'Dedicated photography advocating for human rights, diversity, animal welfare, and social responsibility.'
  },
  {
    id: 'portraits',
    titleDe: 'Portraits',
    titleEn: 'Portraits',
    descriptionDe: 'Ausdrucksstarke Porträts und Selbstporträts im Spannungsfeld von Stärke und Authentizität.',
    descriptionEn: 'Expressive portraits and self-portraits bridging strength, dynamism, and authenticity.'
  }
];

export const INTRO_CONTENT = {
  mainHeader: 'Photography – Works – International Awards',
  subtitleDe: 'Fotografie & Kunst · Mehrfach international ausgezeichnet & prämiert',
  subtitleEn: 'Photography & Art · Internationally awarded & recognized multiple times',
  competitions: [
    'International Photography Awards (IPA) 2026',
    'Architecture MasterPrize (AMP) 2026',
    'PRIX DE LA PERSPECTIVE ARCHITECTURALE (PERSPA - FRANCE) 2026',
    'Budapest International Foto Awards (BIFA) 2026',
    'Architecture MasterPrize (AMP) 2025',
    'International Photography Awards (IPA) 2025',
    'ND Awards 2025',
    'Black & White Spider Awards 2025',
    'London International Creative Competition (LICC) 2025'
  ],
  photoCredit: 'Photo: Steve Barret',
  artistSectionTitleDe: 'Photographie, Künstlername und Inspiration',
  artistSectionTitleEn: 'Photography, Artist Name and Inspiration',
  artistNameDe: 'Schahrsad Shahmirzadi (SchirZan)',
  artistNameEn: 'Schahrsad Shahmirzadi (SchirZan)',
  artistExplanationDe: `Schahrsad Shahmirzadi präsentiert ihre Fotografie und Kunst unter dem Künstlernamen SchirZan. Der Name stammt aus dem Persischen und verbindet zwei Worte:

• Shir (شیر), bedeutet »Löwe«
• Zan (زن), bedeutet »Frau«

Zusammen bedeutet »SchirZan« die »Löwenfrau« oder »Löwin« und verkörpert den Mut, seinen eigenen Weg zu gehen.

Für sie steht »SchirZan« auch für das Engagement, sich für benachteiligte Menschen einzusetzen, deren Stimmen Sichtbarkeit zu verleihen und für Gerechtigkeit, Gleichberechtigung und Menschlichkeit einzutreten.

Durch Fotografie kann sie einen Moment gelebter Erfahrung für die Ewigkeit bewahren – ein Gedanke, der sie jedes Mal aufs Neue bewegt.

Das Wort »Photographie« leitet sich aus dem Altgriechischen ab: φῶς, phōs (Genitiv φωτός, phōtos), was »Licht« bedeutet, und γράφειν, gráphein, was »schreiben« oder »zeichnen« bedeutet. Im übertragenen Sinne bedeutet es »Zeichnen mit Licht«.

Ihre bewusste Wahl der traditionellen deutschen Schreibweise »Photographie« mit »ph« statt »f« spiegelt diesen Ursprung wider. Durch die konsequente Beibehaltung dieser Schreibweise macht sie die Verbindung zur Geschichte des Mediums sichtbar und unterstreicht ihren Anspruch, bewusst und künstlerisch mit dem Licht zu arbeiten.`,
  artistExplanationEn: `Schahrsad Shahmirzadi presents her photography and art under the artist name SchirZan. The name comes from Persian and combines two words:

• Shir (شیر), meaning "lion"
• Zan (زن), meaning "woman"

Together, "SchirZan" conveys "lion-woman" or "lioness" and embodies the courage to follow one's own path.

For her, "SchirZan" also represents a commitment to standing up for disadvantaged people, bringing visibility to their voices, and advocating for justice, equality, and humanity.

Through photography, she can preserve a moment of lived experience for eternity—a thought that moves her anew each time.

The word "photography" derives from Ancient Greek: φῶς, phōs (genitive phōtos), meaning "light," and γράφειν, gráphein, meaning "to write" or "to draw." Figuratively, it means "drawing with light."

Her deliberate use of the traditional German spelling "Photographie," with "ph" rather than "f," reflects this origin. By consistently choosing this spelling, she makes the connection to the medium's history visible and emphasises her commitment to working consciously and artistically with light.`
};

export const SOLITAIRE_SERIES_1: PhotoSeries = {
  id: 'the-solitaire-as-abstraction-in-harmony-with-nature',
  category: 'architecture',
  titleDe: 'The Solitaire as Abstraction – In Harmony with Nature',
  titleEn: 'The Solitaire as Abstraction – In Harmony with Nature',
  subtitleDe: 'Architektur / Sonstige Außenaufnahmen (7 Werke)',
  subtitleEn: 'Architecture / Other Exterior (7 Works)',
  descriptionDe: `Diese Serie verwandelt eine solitäre urbane Fassade in ein abstraktes Statement von Individualität und Harmonie mit der Natur. Jedes Bild erkundet eine andere Facette von Geometrie, Licht und Perspektive – und offenbart, wie architektonische Form mit dem Himmel und der Umwelt verschmilzt. Das Zusammenspiel von klaren Linien, wandernden Schatten und subtilen Reflexionen lässt das »Solitär« zwischen materieller Präzision und poetischer Abstraktion oszillieren. Durch Minimalismus und rhythmische Komposition wird der Betrachter eingeladen, nicht nur die innere Ordnung der Struktur, sondern auch ihren unerwarteten Dialog mit der natürlichen Welt zu entdecken.`,
  descriptionEn: `This series transforms a singular urban facade into an abstract statement of individuality and harmony with nature. Each image explores a different facet of geometry, light, and perspective—revealing how architectural form merges with the sky and environment. The interplay of crisp lines, shifting shadows, and subtle reflections allows the “solitaire” to oscillate between material precision and poetic abstraction. Through minimalism and rhythmic composition, the viewer is invited to discover not only the structure’s inner order but also its unexpected dialogue with the natural world.`,
  coverImage: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp',
  badges: [
    {
      id: 'amp-2025-winner',
      name: 'Architecture MasterPrize 2025',
      year: '2025',
      award: 'Student Photography Winner (Other Exterior)',
      badgeImage: '/images/email_badges/amp_2025_winner.png',
      link: 'https://architectureprize.com/winners/winner.php?id=8533',
      position: 'top-left' // STRICT CLIENT RULE: AMP ALWAYS TOP-LEFT
    },
    {
      id: 'perspa-2026-hm',
      name: 'Prix de la Perspective Architecturale 2026',
      year: '2026',
      award: 'Honorable Mention & Editor’s Choice',
      badgeImage: '/images/email_badges/perspa_2026_silver.png',
      link: 'https://perspa.fr/winners/architectural-perspective/#work-132',
      position: 'bottom-left'
    },
    {
      id: 'bifa-2026-hm',
      name: 'Budapest International Foto Awards 2026',
      year: '2026',
      award: 'Honorable Mention 2026',
      badgeImage: '/images/email_badges/bifa_2026_gold.png',
      link: 'https://budapestfotoawards.com/',
      position: 'top-right'
    },
    {
      id: 'ipa-2026-hm',
      name: 'International Photography Awards 2026',
      year: '2026',
      award: 'Honorable Mention & Official Selection (Non-Professional)',
      badgeImage: '/images/email_badges/ipa_2026_hm_ribbon.png',
      link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613449-25',
      position: 'bottom-right' // STRICT CLIENT RULE: IPA ALWAYS BOTTOM-RIGHT
    }
  ],
  photos: [
    {
      id: 'solitaire-harmony-01',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-01-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature I',
      captionDe: 'Bild 01 · Aufstrebende Geometrie und der Beginn des Himmelsdialogs',
      captionEn: 'Image 01 · Ascending geometry and the beginning dialogue with the sky'
    },
    {
      id: 'solitaire-harmony-02',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-02-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature II',
      captionDe: 'Bild 02 · Fassadenschnitt und rhythmische Linienführung',
      captionEn: 'Image 02 · Facade section and rhythmic interplay of lines'
    },
    {
      id: 'solitaire-harmony-03',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-03-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature III',
      captionDe: 'Bild 03 · Lichtspiel und prismatische Schattensetzungen',
      captionEn: 'Image 03 · Play of light and prismatic shadow dynamics'
    },
    {
      id: 'solitaire-harmony-04',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-04-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature IV',
      captionDe: 'Bild 04 · Vertikale Akzente und Reflexionen',
      captionEn: 'Image 04 · Vertical accents and atmospheric reflections'
    },
    {
      id: 'solitaire-harmony-05',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-05-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature V',
      captionDe: 'Bild 05 · Geometrische Reduktion und Balance',
      captionEn: 'Image 05 · Geometric reduction and balance'
    },
    {
      id: 'solitaire-harmony-06',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-06-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature VI',
      captionDe: 'Bild 06 · Kantenschärfe und weicher Wolkenhorizont',
      captionEn: 'Image 06 · Edge clarity contrasting soft cloud horizons'
    },
    {
      id: 'solitaire-harmony-07',
      src: '/images/2026_09_hm-03-the-solitaire-as-abstraction-in-harmony-with-nature-07-scaled.webp',
      alt: 'The Solitaire as Abstraction – In Harmony with Nature VII',
      captionDe: 'Bild 07 · Synthese aus Baumaterial und natürlicher Weite',
      captionEn: 'Image 07 · Synthesis of architectural material and expansive nature'
    }
  ]
};

export const SOLITAIRE_SERIES_2: PhotoSeries = {
  id: 'the-solitaire-as-an-abstraction-revised',
  category: 'architecture',
  titleDe: 'The Solitaire as an Abstraction (Revised)',
  titleEn: 'The Solitaire as an Abstraction (Revised)',
  subtitleDe: 'Architektur / Abstrakt (5 Werke)',
  subtitleEn: 'Architecture / Abstract (5 Works)',
  descriptionDe: `Diese Serie fängt die moderne Architektur einer urbanen Fassade im dynamischen Wechselspiel von Licht und Schatten ein. Klare Linien, geometrische Strukturen und ungewöhnliche Perspektiven betonen die Ästhetik und Energie des Bauwerks. Besonders faszinierend ist die Art und Weise, wie die Geometrie mit der Umgebung interagiert: Reflexionen und Kontraste zwischen Architektur und Himmel verleihen den Fotografien Tiefe und laden zum Erkunden ein. Durch sorgfältig gewählte Blickwinkel und Bildausschnitte werden sowohl die Strenge als auch die Leichtigkeit der Architektur spürbar.`,
  descriptionEn: `This series captures the modern architecture of an urban facade in a dynamic interplay of light and shadow. Clear lines, geometric structures, and unusual perspectives emphasize the building’s aesthetic and energy. Particularly fascinating is the way geometry interacts with the environment: reflections and contrasts between architecture and sky add depth to the photographs and invite viewers to explore. Through carefully chosen angles and framing, both the rigor and the lightness of the architecture are revealed.`,
  personalNoteDe: 'Persönliche Widmung: The Solitaire as an Abstraction entstand am Vatertag, dem 29. Mai 2025, in Berlin-Halensee und ist meinem Vater K. Shahmirzadi gewidmet.',
  personalNoteEn: 'Personal Note: The Solitaire as an Abstraction was created on Father’s Day, May 29, 2025, in Berlin-Halensee and is dedicated to my father, K. Shahmirzadi.',
  coverImage: '/images/2026_10_amp-2026-winner-solitaire-revised-01-scaled.webp',
  badges: [
    {
      id: 'amp-2026-winner',
      name: 'Architecture MasterPrize 2026',
      year: '2026',
      award: 'Student Photography Winner 2026',
      badgeImage: '/images/email_badges/amp_2026_winner.png',
      link: 'https://architectureprize.com/',
      position: 'top-left' // STRICT CLIENT RULE: AMP ALWAYS TOP-LEFT
    },
    {
      id: 'perspa-2026-2nd',
      name: 'Prix de la Perspective Architecturale 2026',
      year: '2026',
      award: 'Second Prize (Abstract)',
      badgeImage: '/images/email_badges/perspa_2026_second.png',
      link: 'https://perspa.fr/winners/architectural-perspective/#work-412',
      position: 'bottom-left'
    },
    {
      id: 'ipa-2026-os',
      name: 'International Photography Awards 2026',
      year: '2026',
      award: 'Official Selection (Non-Professional)',
      badgeImage: '/images/email_badges/ipa_2026_os_ribbon.png',
      link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722617898-26',
      position: 'bottom-right' // STRICT CLIENT RULE: IPA ALWAYS BOTTOM-RIGHT
    }
  ],
  photos: [
    {
      id: 'solitaire-revised-01',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-01-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) I',
      captionDe: 'Bild 01 · Monumentale Diagonale und Hell-Dunkel-Kontrast',
      captionEn: 'Image 01 · Monumental diagonal and chiaroscuro contrast'
    },
    {
      id: 'solitaire-revised-02',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-02-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) II',
      captionDe: 'Bild 02 · Geometrischer Rhythmus der Fassadenelemente',
      captionEn: 'Image 02 · Geometric rhythm of facade elements'
    },
    {
      id: 'solitaire-revised-03',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-03-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) III',
      captionDe: 'Bild 03 · Fluchtpunkt und Tiefenwirkung',
      captionEn: 'Image 03 · Vanishing point and profound depth'
    },
    {
      id: 'solitaire-revised-04',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-04-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) IV',
      captionDe: 'Bild 04 · Strukturierte Reduktion auf Form und Fläche',
      captionEn: 'Image 04 · Structured reduction to form and plane'
    },
    {
      id: 'solitaire-revised-05',
      src: '/images/2026_10_amp-2026-winner-solitaire-revised-05-scaled.webp',
      alt: 'The Solitaire as an Abstraction (Revised) V',
      captionDe: 'Bild 05 · Architektonischer Abschluss in Klarheit',
      captionEn: 'Image 05 · Architectural culmination in clarity'
    }
  ]
};

export const FURTHER_WORKS_ARCHITECTURE: FurtherWork[] = [
  {
    id: 'solitaire-new-perspectives',
    titleDe: 'The Solitaire as an Abstraction – New Perspectives and Revised',
    titleEn: 'The Solitaire as an Abstraction – New Perspectives and Revised',
    category: 'Architecture / Abstract',
    awardsDe: 'LICC 2025 — 2 × Shortlisted (Kategorien: »New Perspectives« & »Revised«)',
    awardsEn: 'LICC 2025 — 2 × Shortlisted ("New Perspectives" and "Revised")',
    badgeNames: ['LICC 2025 Shortlisted', 'LICC 2025 Revised'],
    link: 'http://www.licc.uk/winners/winner.php?id=125858'
  },
  {
    id: 'bw-solitaire',
    titleDe: 'Black & White Solitaire',
    titleEn: 'Black & White Solitaire',
    category: 'Architecture / Monochromatic',
    awardsDe: 'Black & White Spider Awards 2025 — Nominee',
    awardsEn: 'Black & White Spider Awards 2025 — Nominee',
    badgeNames: ['Spider Awards 2025 Nominee'],
    link: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238'
  },
  {
    id: 'solitaire-ipa-2025',
    titleDe: 'The Solitaire as an Abstraction',
    titleEn: 'The Solitaire as an Abstraction',
    category: 'Architecture / Abstract',
    awardsDe: 'IPA 2025 — Honorable Mention',
    awardsEn: 'IPA 2025 — Honorable Mention',
    badgeNames: ['IPA 2025 HM'],
    link: 'https://www.photoawards.com/winner/zoom.php?eid=8-1722606309-25'
  },
  {
    id: 'solitaire-short-version',
    titleDe: 'The Solitaire as an Abstraction (Short Version)',
    titleEn: 'The Solitaire as an Abstraction (Short Version)',
    category: 'Architecture / Others',
    awardsDe: 'ND Awards 2025 — Honorable Mention',
    awardsEn: 'ND Awards 2025 — Honorable Mention',
    badgeNames: ['ND Awards 2025 HM'],
    link: 'https://ndawards.net/winners-gallery/nd-awards-2025/non-professional/other/hm/23252/'
  },
  {
    id: 'echoes-water-tower',
    titleDe: 'Echoes of a Water Tower',
    titleEn: 'Echoes of a Water Tower',
    category: 'Architecture & Fine Art',
    awardsDe: 'IPA 2026 — Honorable Mention & Official Selection · AMP 2026 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    awardsEn: 'IPA 2026 — Honorable Mention & Official Selection · AMP 2026 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    badgeNames: ['IPA 2026 HM', 'AMP 2026 HM', 'PERSPA 2026 HM'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26'
  },
  {
    id: 'architectural-piano',
    titleDe: 'Architectural Piano',
    titleEn: 'Architectural Piano',
    category: 'Architecture / Abstract',
    awardsDe: 'Black & White Spider Awards 2025 — HM & Nominee · AMP 2026 — HM · IPA 2026 — Official Selection · LICC 2025 — Official Selection',
    awardsEn: 'Black & White Spider Awards 2025 — HM & Nominee · AMP 2026 — HM · IPA 2026 — Official Selection · LICC 2025 — Official Selection',
    badgeNames: ['Spider Awards 2025 HM', 'AMP 2026 HM', 'IPA 2026 OS', 'LICC 2025 OS'],
    link: 'https://architectureprize.com/'
  },
  {
    id: 'elegance-of-structure',
    titleDe: 'Elegance of Structure (B&W / Symphony of Light)',
    titleEn: 'Elegance of Structure (B&W / Symphony of Light)',
    category: 'Architecture / Interior',
    awardsDe: 'AMP 2026 — HM (Interior Details) · BIFA 2026 — HM · PERSPA 2026 — Editor’s Choice · IPA 2026 — Official Selection',
    awardsEn: 'AMP 2026 — HM (Interior Details) · BIFA 2026 — HM · PERSPA 2026 — Editor’s Choice · IPA 2026 — Official Selection',
    badgeNames: ['AMP 2026 HM', 'BIFA 2026 HM', 'PERSPA Editor’s Choice', 'IPA 2026 OS'],
    link: 'https://perspa.fr/2026/season-1-architectural-perspective/elegance-of-structure-black-and-white-2/'
  },
  {
    id: 'cloud-mirror-architecture',
    titleDe: 'Cloud Mirror Architecture I & II',
    titleEn: 'Cloud Mirror Architecture I & II',
    category: 'Architecture / Exterior',
    awardsDe: 'AMP 2026 — 2 × Honorable Mention (Heaven’s Bridge & Stormy Sea B&W)',
    awardsEn: 'AMP 2026 — 2 × Honorable Mention (Heaven’s Bridge & Stormy Sea B&W)',
    badgeNames: ['AMP 2026 HM (Heaven’s Bridge)', 'AMP 2026 HM (Stormy Sea)'],
    link: 'https://architectureprize.com/'
  },
  {
    id: 'black-red-gold',
    titleDe: 'Black Red Gold – Office of the Federal President of Germany',
    titleEn: 'Black Red Gold – Office of the Federal President of Germany',
    category: 'Architecture / Exterior',
    awardsDe: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsEn: 'AMP 2026 — Honorable Mention (Other Exterior)',
    badgeNames: ['AMP 2026 HM'],
    link: 'https://architectureprize.com/'
  },
  {
    id: 'mirrored-series',
    titleDe: 'Mirrored I, II & III',
    titleEn: 'Mirrored I, II & III',
    category: 'Architecture / Urban & Landscape',
    awardsDe: 'IPA 2026 — HM & Official Selection · AMP 2026 — 2 × Honorable Mention',
    awardsEn: 'IPA 2026 — HM & Official Selection · AMP 2026 — 2 × Honorable Mention',
    badgeNames: ['IPA 2026 HM & OS', 'AMP 2026 HM (Urban)', 'AMP 2026 HM (B&W)'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722624747-26'
  },
  {
    id: 'steps-of-sustainability',
    titleDe: 'Steps of Sustainability',
    titleEn: 'Steps of Sustainability',
    category: 'Architecture / Sustainable Design',
    awardsDe: 'AMP 2025 — Honorable Mention (Sustainable Interior) · PERSPA 2026 — Honorable Mention (Stairs)',
    awardsEn: 'AMP 2025 — Honorable Mention (Sustainable Interior) · PERSPA 2026 — Honorable Mention (Stairs)',
    badgeNames: ['AMP 2025 HM', 'PERSPA 2026 HM Stairs'],
    link: 'https://perspa.fr/winners/architectural-perspective/#work-152'
  },
  {
    id: 'hephaestus-legacy',
    titleDe: 'Hephaestus’ Legacy',
    titleEn: 'Hephaestus’ Legacy',
    category: 'Architecture / Historic',
    awardsDe: 'BIFA 2026 — Honorable Mention · PERSPA 2026 — Editor’s Choice · IPA 2026 — Official Selection',
    awardsEn: 'BIFA 2026 — Honorable Mention · PERSPA 2026 — Editor’s Choice · IPA 2026 — Official Selection',
    badgeNames: ['BIFA 2026 HM', 'PERSPA Editor’s Choice', 'IPA 2026 OS'],
    link: 'https://perspa.fr/2026/season-1-architectural-perspective/hephaestus-legacy-3/'
  },
  {
    id: 'razor-pull-berlin',
    titleDe: 'Razor Pull Berlin',
    titleEn: 'Razor Pull Berlin',
    category: 'Architecture / Exterior',
    awardsDe: 'AMP 2026 — Honorable Mention (Other Exterior)',
    awardsEn: 'AMP 2026 — Honorable Mention (Other Exterior)',
    badgeNames: ['AMP 2026 HM'],
    link: 'https://architectureprize.com/'
  },
  {
    id: 'dimensions-of-sustainability',
    titleDe: 'Dimensions of Sustainability',
    titleEn: 'Dimensions of Sustainability',
    category: 'Architecture / Abstract',
    awardsDe: 'IPA 2026 — Official Selection',
    awardsEn: 'IPA 2026 — Official Selection',
    badgeNames: ['IPA 2026 OS'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613455-25'
  },
  {
    id: 'fragments-of-memory',
    titleDe: 'Fragments of Memory – Fragments of Time',
    titleEn: 'Fragments of Memory – Fragments of Time',
    category: 'Architecture / Historic',
    awardsDe: 'IPA 2026 — Official Selection',
    awardsEn: 'IPA 2026 — Official Selection',
    badgeNames: ['IPA 2026 OS'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613512-25'
  },
  {
    id: 'symmetric-networks',
    titleDe: 'Symmetric Networks',
    titleEn: 'Symmetric Networks',
    category: 'Architecture / Other',
    awardsDe: 'IPA 2026 — Official Selection',
    awardsEn: 'IPA 2026 — Official Selection',
    badgeNames: ['IPA 2026 OS'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613543-25'
  },
  {
    id: 'prismatic-berlin',
    titleDe: 'Prismatic Berlin',
    titleEn: 'Prismatic Berlin',
    category: 'Architecture / Shoot',
    awardsDe: 'LICC 2025 — Official Selection (Photo–Video)',
    awardsEn: 'LICC 2025 — Official Selection (Photo–Video)',
    badgeNames: ['LICC 2025 OS'],
    link: 'https://licc.uk/'
  },
  {
    id: 'transformer',
    titleDe: 'Transformer',
    titleEn: 'Transformer',
    category: 'Architecture / Shoot',
    awardsDe: 'LICC 2025 — Official Selection (Photo–Video)',
    awardsEn: 'LICC 2025 — Official Selection (Photo–Video)',
    badgeNames: ['LICC 2025 OS'],
    link: 'https://licc.uk/'
  },
  {
    id: 'columns-here-and-now',
    titleDe: 'Columns in the Here and Now',
    titleEn: 'Columns in the Here and Now',
    category: 'Architecture / Monochromatic',
    awardsDe: 'Black & White Spider Awards 2025 — Nominee (Architectural)',
    awardsEn: 'Black & White Spider Awards 2025 — Nominee (Architectural)',
    badgeNames: ['Spider Awards 2025 Nominee'],
    link: 'https://www.thespiderawards.com/gallery/20th/gallery.php?g=w&x=a&cid=651&fid=309238'
  }
];

export const FINE_ART_WORKS: FurtherWork[] = [
  {
    id: 'echoes-water-tower-fineart',
    titleDe: 'Echoes of a Water Tower',
    titleEn: 'Echoes of a Water Tower',
    category: 'Fine Art / Architecture',
    awardsDe: 'IPA 2026 — Honorable Mention & Official Selection · AMP 2026 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    awardsEn: 'IPA 2026 — Honorable Mention & Official Selection · AMP 2026 — Honorable Mention · PERSPA 2026 — Honorable Mention',
    badgeNames: ['IPA 2026 HM', 'AMP 2026 HM', 'PERSPA 2026 HM'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722625538-26'
  },
  {
    id: 'between-space-time',
    titleDe: 'Between Space and Time',
    titleEn: 'Between Space and Time',
    category: 'Fine Art / Conceptual',
    awardsDe: 'IPA 2026 — Official Selection · LICC 2025 — Official Selection',
    awardsEn: 'IPA 2026 — Official Selection · LICC 2025 — Official Selection',
    badgeNames: ['IPA 2026 OS', 'LICC 2025 OS'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722613510-25'
  },
  {
    id: 'blessed-are-those-who-mourn',
    titleDe: 'Blessed Are Those Who Mourn',
    titleEn: 'Blessed Are Those Who Mourn',
    category: 'Fine Art / Expressive',
    awardsDe: 'LICC 2025 — Official Selection (Shoot / Photo–Video)',
    awardsEn: 'LICC 2025 — Official Selection (Shoot / Photo–Video)',
    badgeNames: ['LICC 2025 OS'],
    link: 'https://licc.uk/'
  }
];

export const SOCIAL_ENVIRONMENTAL_WORKS: FurtherWork[] = [
  {
    id: 'berlin-attack-on-queer',
    titleDe: 'Berlin: Attack on Queer, Diversity and Freedom',
    titleEn: 'Berlin: Attack on Queer, Diversity and Freedom',
    category: 'Editorial / Photo Essay',
    awardsDe: 'BIFA 2026 — Honorable Mention (Editorial / Photo Essay)',
    awardsEn: 'BIFA 2026 — Honorable Mention (Editorial / Photo Essay)',
    badgeNames: ['BIFA 2026 HM'],
    link: 'https://budapestfotoawards.com/'
  },
  {
    id: 'life-love-freedom-iran',
    titleDe: 'LIFE – LOVE – FREEDOM · IRAN',
    titleEn: 'LIFE – LOVE – FREEDOM · IRAN',
    category: 'Special / Human Rights',
    awardsDe: 'IPA 2026 — Official Selection (Special / Other)',
    awardsEn: 'IPA 2026 — Official Selection (Special / Other)',
    badgeNames: ['IPA 2026 OS'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722616352-26'
  },
  {
    id: 'dignity-of-animal',
    titleDe: 'The Dignity of the Animal is Inviolable',
    titleEn: 'The Dignity of the Animal is Inviolable',
    category: 'Environmental & Animal Welfare',
    awardsDe: 'LICC 2025 — Official Selection (Shoot / Photo–Video)',
    awardsEn: 'LICC 2025 — Official Selection (Shoot / Photo–Video)',
    badgeNames: ['LICC 2025 OS'],
    link: 'https://licc.uk/'
  },
  {
    id: 'in-between-spaces',
    titleDe: 'In-Between Spaces',
    titleEn: 'In-Between Spaces',
    category: 'Street & Social Documentation',
    awardsDe: 'URBAN Photo Awards 2026 — Selected Photographer (Streets)',
    awardsEn: 'URBAN Photo Awards 2026 — Selected Photographer (Streets)',
    badgeNames: ['URBAN Photo Awards 2026 Selected'],
    link: 'https://www.urbanphotoawards.com/'
  }
];

export const PORTRAIT_WORKS: FurtherWork[] = [
  {
    id: 'kickboxing-self-portrait',
    titleDe: 'Kickboxing – From Fighting in the Ring to Lightning in the Frame',
    titleEn: 'Kickboxing – From Fighting in the Ring to Lightning in the Frame',
    category: 'People / Self-Portrait',
    awardsDe: 'IPA 2026 — Official Selection (People / Self-Portrait)',
    awardsEn: 'IPA 2026 — Official Selection (People / Self-Portrait)',
    badgeNames: ['IPA 2026 OS'],
    link: 'https://www.photoawards.com/social/zoom.php?eid=8-1722619299-26'
  }
];

