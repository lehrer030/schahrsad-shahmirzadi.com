import React from 'react';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  currentLang: 'de' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-xs py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-neutral-900">
          
          {/* Brand & Artist */}
          <div className="space-y-2">
            <span className="text-xl font-serif text-amber-400 font-bold tracking-wider">
              SchirZan
            </span>
            <p className="text-neutral-300 font-sans text-xs">
              Schahrsad Shahmirzadi · {currentLang === 'de' ? 'Künstlerin & Photographin' : 'Artist & Photographer'}
            </p>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              {currentLang === 'de'
                ? 'Ausgezeichnete Architektur-, Fine-Art- und sozial-ökologische Dokumentarfotografie.'
                : 'Award-winning architectural, fine art, and socio-environmental documentary photography.'}
            </p>
          </div>

          {/* Domains */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-neutral-300 font-semibold font-mono">
              {currentLang === 'de' ? 'Offizielle Domains' : 'Official Domains'}
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a
                  href="https://schahrsad-shahmirzadi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 text-neutral-300"
                >
                  <span>schahrsad-shahmirzadi.com</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="http://schirzan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 text-neutral-300"
                >
                  <span>schirzan.com</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright & Urheberschaft */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-neutral-300 font-semibold font-mono flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentLang === 'de' ? 'Urheberrecht' : 'Copyright'}</span>
            </span>
            <p className="text-neutral-500 text-[11px] leading-relaxed">
              {currentLang === 'de'
                ? 'Alle Fotografien, Bildserien und Texte sind urheberrechtlich geschützt. Jedes Foto trägt das offizielle SchirZan Signatur-Wasserzeichen.'
                : 'All photographs, series, and texts are protected by international copyright. Each artwork carries the official SchirZan signature watermark.'}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Schahrsad Shahmirzadi (SchirZan). All rights reserved.</p>
          <div className="flex items-center gap-1 text-neutral-500">
            <span>Designed for precision &amp; international awards presentation</span>
            <Heart className="w-3 h-3 text-amber-500/70 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};

