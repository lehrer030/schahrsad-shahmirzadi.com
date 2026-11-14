import React from 'react';
import { ExternalLink, ShieldCheck, Heart, Mail, Scale, Share2 } from 'lucide-react';
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
            <p className="text-stone-700 text-[11px] leading-relaxed font-normal">
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
              <li className="text-stone-600 font-normal">
                Berlin · Potsdam · Germany
              </li>
              <li className="pt-2">
                <span className="text-[10px] uppercase font-mono text-stone-500 block mb-1">
                  {currentLang === 'de' ? 'Portfolio teilen:' : currentLang === 'fa' ? 'اشتراک‌گذاری:' : 'Share:'}
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fschahrsad-shahmirzadi.com%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-stone-200 rounded text-stone-700 hover:text-amber-800 hover:border-stone-400 transition-colors text-[10px] font-medium"
                    title="Auf LinkedIn teilen"
                  >
                    <Share2 className="w-2.5 h-2.5 text-stone-500" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?text=SchirZan%20-%20Photography%20%26%20Awards%3A%20https%3A%2F%2Fschahrsad-shahmirzadi.com%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-stone-200 rounded text-stone-700 hover:text-amber-800 hover:border-stone-400 transition-colors text-[10px] font-medium"
                    title="Per WhatsApp teilen"
                  >
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fschahrsad-shahmirzadi.com%2F&text=SchirZan%20-%20Photography%20%26%20Awards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-stone-200 rounded text-stone-700 hover:text-amber-800 hover:border-stone-400 transition-colors text-[10px] font-medium"
                    title="Auf X teilen"
                  >
                    <span>X</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Domains */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-stone-800 font-bold font-mono">
              {currentLang === 'de'
                ? 'Offizielle Domains & Profile'
                : currentLang === 'fa'
                ? 'دامنه‌ها و نمایه‌ها'
                : 'Official Domains & Profiles'}
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a
                  href="https://de.wikipedia.org/wiki/Schahrsad_Shahmirzadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-stone-700 font-medium"
                  title="Wikipedia: Schahrsad Shahmirzadi"
                >
                  <span className="font-serif font-black text-[10px] px-1.5 py-0.2 rounded bg-stone-200 text-stone-800">W</span>
                  <span>Wikipedia ({currentLang === 'fa' ? 'زندگی‌نامه' : currentLang === 'en' ? 'Biography' : 'Biografie'})</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </li>
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
              <li className="text-stone-600 font-normal flex items-center gap-1 pt-1">
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
