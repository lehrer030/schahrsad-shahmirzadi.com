import React from 'react';
import { ACADEMIC_MILESTONES, type Language } from '../data/photographyData';
import { Heart, ExternalLink, Leaf, Sparkles } from 'lucide-react';

interface ArtistVitaProps {
  currentLang: Language;
}

export const ArtistVita: React.FC<ArtistVitaProps> = ({ currentLang }) => {
  return (
    <div className="space-y-16 max-w-5xl mx-auto py-6 sm:py-10">
      
      {/* 1. INTERDISCIPLINARY ACADEMIC EDUCATION SECTION */}
      <section id="education" className="scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
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
              ? 'Interdisziplinärer akademischer Bildungsweg'
              : currentLang === 'fa'
              ? 'مسیر بین‌رشته‌ای آکادمیک'
              : 'Interdisciplinary Academic Education'}
          </h3>
          <p className="text-sm text-stone-700 mt-2 font-normal max-w-2xl leading-relaxed">
            {currentLang === 'de'
              ? 'Schahrsad Shahmirzadi verfügt über einen interdisziplinären Bildungs- und Berufsweg in den Bereichen Recht, Sicherheit und Umwelt mit einem Schwerpunkt im Wasserbereich.'
              : currentLang === 'fa'
              ? 'شهزاد شاهمیرزادی دارای پیشینه‌ای چندرشته‌ای در حوزه‌های حقوق، امنیت عمومی و علوم محیط‌زیست با گرایش تخصصی مدیریت منابع آب است.'
              : 'Schahrsad Shahmirzadi has an interdisciplinary academic and professional background in law, public security, and environmental sciences with a focus on water resource management.'}
          </p>
        </div>

        {/* Milestone Timeline / Table from WordPress Database */}
        <div className="space-y-4 mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold px-4 pb-2 border-b border-stone-100 hidden md:grid md:grid-cols-12 gap-4">
            <span className="col-span-3">{currentLang === 'fa' ? 'دوره' : 'Zeitraum / Period'}</span>
            <span className="col-span-5">{currentLang === 'fa' ? 'رشته / موسسه' : 'Studiengang / Ausbildung & Einrichtung'}</span>
            <span className="col-span-4 text-right rtl:text-left">{currentLang === 'fa' ? 'مدرک / وضعیت' : 'Abschluss / Stand'}</span>
          </div>

          {ACADEMIC_MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors border border-stone-100 md:border-transparent md:hover:border-stone-200/60"
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
                <span className="inline-block px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200/70 text-stone-800">
                  {currentLang === 'de'
                    ? item.degreeDe
                    : currentLang === 'fa'
                    ? item.degreeFa
                    : item.degreeEn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative context from WordPress Post 1728 */}
        <div className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/80 text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 font-normal">
          <p>
            {currentLang === 'de'
              ? 'Nach dem Abitur am traditionsreichen Evangelischen Gymnasium zum Grauen Kloster in Berlin im Jahr 2004 studierte sie Rechtswissenschaften an der Freien Universität Berlin (Grundstudium erfolgreich abgeschlossen). Im Zusammenhang mit ihrem leistungssportlichen Werdegang im Kickboxen wechselte sie in den Polizeivollzugsdienst des Landes Berlin. Dort schloss sie das Studium an der Hochschule für Wirtschaft und Recht Berlin als Diplom-Verwaltungswirtin (Polizeivollzugsdienst) ab und war unter anderem im Landeskriminalamt (LKA) sowie in stabsnahen Funktionen tätig.'
              : currentLang === 'fa'
              ? 'پس از اخذ دیپلم از کالج تاریخی گراوئن کلوستر برلین در سال ۲۰۰۴، او به تحصیل حقوق در دانشگاه آزاد برلین پرداخت و دوره پایه را با موفقیت گذراند. در پی ورزش قهرمانی، او به خدمات پلیس برلین پیوست و مدرک کارشناسی ارشد مدیریت عمومی پلیس را از HWR برلین دریافت نمود و در اداره مبارزه با جرایم (LKA) و دوایر ستادی خدمت کرد.'
              : 'After graduating from the prestigious Evangelisches Gymnasium zum Grauen Kloster in Berlin in 2004, she studied law at the Free University of Berlin. Alongside her high-performance athletic career in kickboxing, she joined the Berlin Police Department, graduating from the Berlin School of Economics and Law (HWR) as Diplom-Verwaltungswirtin, subsequently serving in the State Criminal Police Office (LKA) and executive staff functions.'}
          </p>
          <p>
            {currentLang === 'de'
              ? 'Seit 2024 arbeitet sie im Ministerium für Landwirtschaft, Umwelt und Klimaschutz des Landes Brandenburg in Potsdam mit Schwerpunkt Gewässerschutz und in der Bund/Länder-Arbeitsgemeinschaft Wasser (LAWA). Berufsbegleitend absolviert sie den interdisziplinären Masterstudiengang „Angewandte Umweltwissenschaften“ (M.Sc.) am Zentrum für Fernstudien und Universitäre Weiterbildung (ZFUW) der Universität Koblenz.'
              : currentLang === 'fa'
              ? 'از سال ۲۰۲۴، او در وزارت محیط زیست در پوتسدام با تمرکز بر حفاظت منابع آب و کارگروه فدرال آب (LAWA) فعالیت دارد و هم‌زمان در مقطع کارشناسی ارشد علوم کاربردی محیط‌زیست (M.Sc.) در دانشگاه کوبلنتس مشغول به تحصیل است.'
              : 'Since 2024, she has served at the Ministry of Environment in Potsdam focusing on water conservation within the German Working Group on Water Issues (LAWA), alongside pursuing her M.Sc. in Applied Environmental Sciences at the University of Koblenz.'}
          </p>
        </div>
      </section>

      {/* 2. COMMITTED TO ENVIRONMENTAL PROTECTION, HUMAN RIGHTS AND PEACE (Original WordPress Post 435) */}
      <section id="engagement" className="scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
        <div className="border-b border-stone-100 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold mb-1">
            <Leaf className="w-4 h-4 text-emerald-700" />
            <span>
              {currentLang === 'de'
                ? 'Gesellschaftliches Engagement'
                : currentLang === 'fa'
                ? 'مسئولیت اجتماعی و محیط زیست'
                : 'Social & Environmental Advocacy'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
            {currentLang === 'de'
              ? 'Committed to Environmental Protection, Human Rights and Peace'
              : currentLang === 'fa'
              ? 'متعهد به حفاظت از محیط زیست، حقوق بشر و صلح'
              : 'Committed to Environmental Protection, Human Rights and Peace'}
          </h3>
          <p className="text-sm sm:text-base text-stone-700 mt-2 font-normal max-w-3xl leading-relaxed">
            {currentLang === 'de'
              ? 'SchirZan engagiert sich für Umweltschutz, Menschenrechte und Frieden durch eigene Projekte, sportliche und photographische Initiativen sowie den stetigen Dialog in ihrer Gemeinschaft. Sie nutzt ihre Stimme, um Aufmerksamkeit auf gesellschaftliche Herausforderungen zu lenken und zu positivem Wandel zu inspirieren.'
              : currentLang === 'fa'
              ? 'شیرزن از طریق پروژه‌های شخصی، ابتکارات ورزشی و آثار عکاسی خود متعهد به ترویج حفاظت از محیط زیست، حقوق بشر و صلح است. او صدای خود را برای افزایش آگاهی عمومی پیرامون چالش‌های جامعه به کار می‌گیرد.'
              : 'SchirZan is committed to environmental protection, human rights, and peace through her own projects, sporting and photographic initiatives, and active dialogue within her community.'}
          </p>
        </div>

        {/* 3 Pillars of Engagement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Professional Background / Water Protection */}
          <div className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/80 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-stone-900">
                {currentLang === 'de' ? 'Gewässerschutz & LAWA' : currentLang === 'fa' ? 'حفاظت آب و LAWA' : 'Water Protection & LAWA'}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                {currentLang === 'de'
                  ? 'Tätigkeit im Umweltministerium in Potsdam im Gewässerschutz und in der Bund/Länder-Arbeitsgemeinschaft Wasser (LAWA). Berufsbegleitendes Masterstudium Angewandte Umweltwissenschaften an der Universität Koblenz.'
                  : currentLang === 'fa'
                  ? 'فعالیت در وزارت محیط‌زیست در حوزه حفاظت آب و کارگروه دولتی فدرال LAWA به همراه تحصیلات تکمیلی علوم محیط‌زیست در دانشگاه کوبلنتس.'
                  : 'Professional focus at the Ministry of Environment on water issues and LAWA, coupled with Master of Science studies at University of Koblenz.'}
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-800 font-semibold">
              Potsdam · Universität Koblenz
            </div>
          </div>

          {/* Pillar 2: Personal Sporting Projects / Running */}
          <div className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/80 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-red-600 text-red-600" />
              </div>
              <h4 className="text-base font-serif font-bold text-stone-900">
                {currentLang === 'de' ? 'Läufe für Menschenrechte' : currentLang === 'fa' ? 'دویدن برای حقوق بشر' : 'Running for Human Rights'}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                {currentLang === 'de'
                  ? 'Sport als Botschaft: Allein 2025 absolvierte SchirZan elf Halbmarathons und den Berlin Marathon unter dem Motto „Für Umweltschutz & Frieden“ und „Running for Free Iran“.'
                  : currentLang === 'fa'
                  ? 'ورزش به عنوان پیام‌رسان: ۱۱ نیمه‌ماراتن و ماراتن بزرگ برلین با شعارهای «برای حفاظت محیط‌زیست و صلح» و «دویدن برای آزادی ایران».'
                  : 'Sports as advocacy: 11 half-marathons and the Berlin Marathon carrying messages for environmental protection, human dignity, and Free Iran.'}
              </p>
            </div>
            <a
              href="https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-800 transition-colors"
            >
              <span>
                {currentLang === 'de'
                  ? 'Spendenlauf unterstützen →'
                  : currentLang === 'fa'
                  ? 'حمایت از کمپین ECCHR ←'
                  : 'Support the fundraising run →'}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 3: Photographic Projects */}
          <div className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/80 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-stone-900">
                {currentLang === 'de' ? 'Künstlerische Projekte' : currentLang === 'fa' ? 'پروژه‌های هنری' : 'Artistic Social Works'}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                {currentLang === 'de'
                  ? 'Internationale Serien zu gesellschaftlichen Themen: „In Between Spaces“ (Urban Photo Awards Triest), „Attack on Queer, Diversity & Freedom“ (BIFA), „LIFE LOVE FREEDOM · IRAN“ (IPA), „The Dignity of the Animal is Inviolable“ (LICC).'
                  : currentLang === 'fa'
                  ? 'مجموعه‌های عکاسی با تمرکز بر موضوعات اجتماعی: فضاهای میانی (فستیوال تریست)، دفاع از آزادی و تنوع (BIFA)، زن، زندگی، آزادی (IPA) و کرامت حیوانات (LICC).'
                  : 'Awarded series investigating social justice: In Between Spaces, Attack on Queer & Diversity, LIFE LOVE FREEDOM IRAN, and Dignity of the Animal is Inviolable.'}
              </p>
            </div>
            <a
              href="#social-environmental"
              className="text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors inline-flex items-center gap-1"
            >
              <span>{currentLang === 'fa' ? 'مشاهده آثار در گالری ←' : 'Zu den Werken →'}</span>
            </a>
          </div>

        </div>

      </section>

    </div>
  );
};
