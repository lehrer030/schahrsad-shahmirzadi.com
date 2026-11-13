import React from 'react';
import { ACADEMIC_MILESTONES, type Language } from '../data/photographyData';
import { Award } from 'lucide-react';

interface ArtistVitaProps {
  currentLang: Language;
}

export const ArtistVita: React.FC<ArtistVitaProps> = ({ currentLang }) => {
  return (
    <div className="space-y-16 max-w-5xl mx-auto py-6 sm:py-10">
      
      {/* 1. ACADEMIC EDUCATION SECTION */}
      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="border-b border-stone-100 pb-6 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            {currentLang === 'de'
              ? 'Akademische Laufbahn'
              : currentLang === 'fa'
              ? 'سوابق تحصیلی و دانشگاهی'
              : 'Academic Background'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mt-1 font-bold">
            {currentLang === 'de'
              ? 'Interdisziplinärer Bildungsweg'
              : currentLang === 'fa'
              ? 'مسیر بین‌رشته‌ای آکادمیک'
              : 'Interdisciplinary Academic Education'}
          </h3>
          <p className="text-sm text-stone-600 mt-2 font-light max-w-2xl leading-relaxed">
            {currentLang === 'de'
              ? 'Die Verbindung von Rechtswissenschaften, Verwaltungsexpertise, Umweltwissenschaften und künstlerischer Photographie prägt das präzise Werk von SchirZan.'
              : currentLang === 'fa'
              ? 'تلفیق دانش حقوقی، تخصص مدیریتی، علوم محیط‌زیست و عکاسی فاخر، شالوده دقت و ژرفای آثار شیرزن را شکل داده است.'
              : 'The synthesis of jurisprudence, public administration, environmental sciences, and fine art photography informs the analytical rigor of SchirZan’s work.'}
          </p>
        </div>

        {/* Milestone Timeline / Table */}
        <div className="space-y-6">
          {ACADEMIC_MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200/60"
            >
              <div className="md:col-span-3 text-xs font-mono text-amber-800 font-bold">
                {item.period}
              </div>
              <div className="md:col-span-5">
                <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900">
                  {currentLang === 'de'
                    ? item.fieldDe
                    : currentLang === 'fa'
                    ? item.fieldFa
                    : item.fieldEn}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  {currentLang === 'de'
                    ? item.institutionDe
                    : currentLang === 'fa'
                    ? item.institutionFa
                    : item.institutionEn}
                </p>
              </div>
              <div className="md:col-span-4 text-xs text-stone-600 font-medium md:text-right rtl:md:text-left self-center">
                {currentLang === 'de'
                  ? item.degreeDe
                  : currentLang === 'fa'
                  ? item.degreeFa
                  : item.degreeEn}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ATHLETIC WORLD CHAMPIONSHIP & ENVIRONMENTAL COMMITMENT */}
      <section className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              {currentLang === 'de'
                ? 'Sport & Engagement'
                : currentLang === 'fa'
                ? 'ورزش قهرمانی و صلح'
                : 'Athletics & Activism'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
              {currentLang === 'de'
                ? 'Weltmeisterin im Kickboxen & Läufe für den Frieden'
                : currentLang === 'fa'
                ? 'قهرمان جهان در کیک‌بوکسینگ و دویدن در راه صلح'
                : 'Kickboxing World Champion & Runs for Peace'}
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-light">
              {currentLang === 'de'
                ? 'Für SchirZan ist Sport weit mehr als körperliche Höchstleistung: Er ist die lebendige Verkörperung von Standhaftigkeit, Mut und innerer Haltung. Allein im Jahr 2025 absolvierte sie elf Halbmarathons und den Berliner Marathon – stets unter dem Leitgedanken: »Für Umweltschutz & Frieden«.'
                : currentLang === 'fa'
                ? 'برای شیرزن، ورزش فراتر از تمرین بدنی است — ورزش تجلی استقامت، شجاعت و پیام‌رسانی ارزش‌هاست. او تنها در سال ۲۰۲۵، یازده نیمه‌ماراتن و ماراتن برلین را با شعار «برای صلح و حفاظت از محیط زیست» به پایان رساند.'
                : 'For SchirZan, high-performance sport is a powerful vehicle for advocacy. In 2025 alone, she completed eleven half-marathons and the full Berlin Marathon, carrying the message: "For Environmental Protection & Peace".'}
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs text-stone-600 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 rounded-lg border border-stone-200">
                <Award className="w-3.5 h-3.5 text-amber-800" />
                <span>{currentLang === 'fa' ? 'قهرمان جهان در کیک‌بوکسینگ' : 'World Champion Kickboxing'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 rounded-lg border border-stone-200">
                <span>{currentLang === 'fa' ? 'ماراتن برلین · ۱۱ نیمه‌ماراتن' : 'Berlin Marathon · 11 Half-Marathons'}</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#faf8f5] border border-stone-200/90 rounded-2xl p-6 space-y-3">
            <h4 className="text-base font-serif font-bold text-stone-900">
              {currentLang === 'de'
                ? 'Engagiert für Gewässerschutz & LAWA'
                : currentLang === 'fa'
                ? 'فعالیت در حوزه منابع آب و محیط زیست'
                : 'Dedicated to Water Issues & LAWA'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              {currentLang === 'de'
                ? 'Seit 2024 ist Schahrsad Shahmirzadi im Ministerium für Umwelt in Potsdam im Bereich Gewässerschutz sowie in der Bund/Länder-Arbeitsgemeinschaft Wasser (LAWA) aktiv und vertieft ihr Wissen im Masterstudiengang Angewandte Umweltwissenschaften.'
                : currentLang === 'fa'
                ? 'از سال ۲۰۲۴، شهزاد شاهمیرزادی در وزارت محیط زیست در حوزه حفاظت از منابع آب و کارگروه فدرال آب (LAWA) فعالیت نموده و همزمان در رشته کارشناسی ارشد علوم محیط‌زیست تحصیل می‌نماید.'
                : 'Since 2024, Schahrsad Shahmirzadi has served at the Ministry of Environment in Potsdam, contributing to water resource preservation within LAWA while completing her Master of Science.'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
