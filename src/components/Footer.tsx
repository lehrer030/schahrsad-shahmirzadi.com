import React from 'react';
import { ExternalLink, ShieldCheck, Heart, Mail, Scale } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface FooterProps {
  currentLang: Language;
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenLegal,
  onOpenContact
}) => {
  return (
    <footer className="bg-[#f5f2eb] border-t border-stone-200 text-stone-600 text-xs py-12 sm:py-16 mt-16 sm:mt-24 w-full">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-8 border-b border-stone-200">
          
          {/* Brand & Artist */}
          <div className="space-y-2 md:col-span-1">
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

          {/* Quick Contact */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-stone-800 font-bold font-mono">
              {currentLang === 'de' ? 'Kontakt' : currentLang === 'fa' ? 'ارتباط' : 'Contact'}
            </span>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-amber-800 text-stone-700 font-medium flex items-center gap-1.5 cursor-pointer text-left rtl:text-right"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-800" />
                  <span>contact@schahrsad-shahmirzadi.com</span>
                </button>
              </li>
              <li className="text-stone-500 font-light">
                Berlin · Potsdam · Germany
              </li>
            </ul>
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

          {/* Legal / Impressum / Datenschutz */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-stone-800 font-bold font-mono flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-amber-800" />
              <span>{currentLang === 'de' ? 'Rechtliches' : currentLang === 'fa' ? 'اطلاعات حقوقی' : 'Legal'}</span>
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button
                  onClick={() => onOpenLegal('impressum')}
                  className="text-stone-700 hover:text-amber-800 font-medium hover:underline cursor-pointer"
                >
                  {currentLang === 'fa' ? 'شناسنامه سایت (Impressum)' : 'Impressum (Angaben gem. § 5 TMG)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('datenschutz')}
                  className="text-stone-700 hover:text-amber-800 font-medium hover:underline cursor-pointer"
                >
                  {currentLang === 'fa' ? 'سیاست حفظ حریم خصوصی (Privacy)' : 'Datenschutzerklärung (DSGVO)'}
                </button>
              </li>
              <li className="text-stone-500 font-light flex items-center gap-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-800" />
                <span>© SchirZan Signature Copyright</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500 gap-4 pt-2">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Schahrsad Shahmirzadi (SchirZan). All rights reserved.</p>

          {/* Webdesign by Emanuel Jurgait (Mittig mit E-Mail-Link zu info@re-mint.online) */}
          <div className="text-center py-1 md:py-0">
            <span className="text-stone-400">
              {currentLang === 'de' ? 'Webdesign: ' : currentLang === 'fa' ? 'طراحی وب: ' : 'Web Design: '}
            </span>
            <a
              href="mailto:info@re-mint.online"
              className="text-stone-700 hover:text-amber-800 font-medium underline decoration-stone-300 hover:decoration-amber-800 underline-offset-2 transition-colors"
              title="E-Mail an Emanuel Jurgait (info@re-mint.online)"
            >
              Emanuel Jurgait
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-1 text-stone-500 text-center md:text-right">
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
