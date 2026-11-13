import React from 'react';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  return (
    <footer className="bg-[#f5f2eb] border-t border-stone-200 text-stone-600 text-xs py-10 sm:py-14 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-stone-200">
          
          {/* Brand & Artist */}
          <div className="space-y-2">
            <span className="text-xl font-serif text-amber-900 font-bold tracking-wider">
              {currentLang === 'fa' ? 'شیرزن (SchirZan)' : 'SchirZan'}
            </span>
            <p className="text-stone-800 font-sans text-xs font-semibold">
              {currentLang === 'de'
                ? 'Schahrsad Shahmirzadi · Künstlerin & Photographin'
                : currentLang === 'fa'
                ? 'شهزاد شاهمیرزادی · هنرمند، عکاس و پژوهشگر'
                : 'Schahrsad Shahmirzadi · Artist & Photographer'}
            </p>
            <p className="text-stone-600 text-[11px] leading-relaxed font-light">
              {currentLang === 'de'
                ? 'Ausgezeichnete Architektur-, Fine-Art- und sozial-ökologische Dokumentarfotografie.'
                : currentLang === 'fa'
                ? 'عکاسی فاخر و برنده جوایز بین‌المللی در حوزه‌های معماری، فاین آرت و مستندهای اجتماعی و زیست‌محیطی.'
                : 'Award-winning architectural, fine art, and socio-environmental documentary photography.'}
            </p>
          </div>

          {/* Domains */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-stone-800 font-bold font-mono">
              {currentLang === 'de'
                ? 'Offizielle Domains'
                : currentLang === 'fa'
                ? 'دامنه‌های رسمی'
                : 'Official Domains'}
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a
                  href="https://schahrsad-shahmirzadi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-800 transition-colors flex items-center gap-1 text-stone-700 font-medium"
                >
                  <span>schahrsad-shahmirzadi.com</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
              <li>
                <a
                  href="http://schirzan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-800 transition-colors flex items-center gap-1 text-stone-700 font-medium"
                >
                  <span>schirzan.com</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright & Urheberschaft */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-stone-800 font-bold font-mono flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>
                {currentLang === 'de'
                  ? 'Urheberrecht'
                  : currentLang === 'fa'
                  ? 'حقوق مالکیت معنوی'
                  : 'Copyright'}
              </span>
            </span>
            <p className="text-stone-600 text-[11px] leading-relaxed font-light">
              {currentLang === 'de'
                ? 'Alle Fotografien, Bildserien und Texte sind urheberrechtlich geschützt. Jedes Foto trägt das offizielle SchirZan Signatur-Wasserzeichen.'
                : currentLang === 'fa'
                ? 'کلیه عکس‌ها، مجموعه‌های هنری و متن‌ها تحت حمایت حقوق بین‌المللی کپی‌رایت هستند. هر اثر دارای امضا و واترمارک رسمی شیرزن (SchirZan) است.'
                : 'All photographs, series, and texts are protected by international copyright. Each artwork carries the official SchirZan signature watermark.'}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Schahrsad Shahmirzadi (SchirZan). All rights reserved.</p>
          <div className="flex items-center gap-1 text-stone-500">
            <span>
              {currentLang === 'fa'
                ? 'طراحی‌شده با دقت و استانداردهای نمایش جوایز بین‌المللی'
                : 'Designed for precision & international awards presentation'}
            </span>
            <Heart className="w-3 h-3 text-amber-700 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
