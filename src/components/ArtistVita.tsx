import React from 'react';
import { ACADEMIC_MILESTONES, type Language } from '../data/photographyData';
import { ExternalLink, Leaf, Sparkles, Trophy } from 'lucide-react';
import { resolveAsset } from '../utils/resolveAsset';

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
            {currentLang === 'de' ? (
              <>
                <strong className="font-semibold text-stone-900">Schahrsad Shahmirzadi</strong>{' '}
                verfügt über einen interdisziplinären Bildungs- und Berufsweg in den Bereichen Recht, Sicherheit und Umwelt mit einem Schwerpunkt im Wasserbereich.
              </>
            ) : currentLang === 'fa' ? (
              <>
                <strong className="font-semibold text-stone-900">شهزاد شاهمیرزادی</strong>{' '}
                دارای پیشینه‌ای چندرشته‌ای در حوزه‌های حقوق، امنیت عمومی و علوم محیط‌زیست با گرایش تخصصی مدیریت منابع آب است.
              </>
            ) : (
              <>
                <strong className="font-semibold text-stone-900">Schahrsad Shahmirzadi</strong>{' '}
                has an interdisciplinary academic and professional background in law, public security, and environmental sciences with a focus on water resource management.
              </>
            )}
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
              <div className="md:col-span-4 flex items-center md:justify-end rtl:md:justify-start">
                <span className="text-[11px] text-stone-600 font-medium px-2 py-0.5 rounded bg-stone-100/70 border border-stone-200/60 max-w-fit">
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
      <section id="engagement" className="scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-10">
        
        {/* Header & Hero Image with Mission Statement */}
        <div className="border-b border-stone-100 pb-8 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              <Leaf className="w-4 h-4 text-emerald-700" />
              <span>
                {currentLang === 'de'
                  ? 'Gesellschaftliches Engagement'
                  : currentLang === 'fa'
                  ? 'مسئولیت اجتماعی، محیط زیست و صلح'
                  : 'Social & Environmental Advocacy'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-bold">
              {currentLang === 'de'
                ? 'Committed to Environmental Protection, Human Rights & Peace'
                : currentLang === 'fa'
                ? 'متعهد به حفاظت از محیط زیست، حقوق بشر و صلح'
                : 'Committed to Environmental Protection, Human Rights & Peace'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Mission Text */}
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              <p>
                {currentLang === 'de' ? (
                  <>
                    <strong className="text-stone-900 font-semibold">SchirZan</strong> engagiert sich für Umweltschutz, Menschenrechte und Frieden durch eigene Projekte, sportliche und photographische Initiativen sowie den stetigen Dialog in ihrer Gemeinschaft.
                  </>
                ) : currentLang === 'fa' ? (
                  <>
                    <strong className="text-stone-900 font-semibold">شیرزن</strong> از طریق پروژه‌های شخصی، ابتکارات ورزشی و آثار عکاسی خود متعهد به ترویج حفاظت از محیط زیست، حقوق بشر و صلح است.
                  </>
                ) : (
                  <>
                    <strong className="text-stone-900 font-semibold">SchirZan</strong> is committed to environmental protection, human rights, and peace through her own projects, sporting and photographic initiatives, and conversations within her personal community.
                  </>
                )}
              </p>
              <p>
                {currentLang === 'de'
                  ? 'Sie nutzt ihre Stimme, um Aufmerksamkeit auf gesellschaftliche Herausforderungen zu lenken und zu positivem Wandel beizutragen. Sie möchte Menschen dazu inspirieren, Verantwortung für die Umwelt zu übernehmen, sich für Menschenrechte einzusetzen und in Frieden und gegenseitigem Respekt zusammenzuleben.'
                  : currentLang === 'fa'
                  ? 'او صدای خود را برای افزایش آگاهی عمومی پیرامون چالش‌های جامعه و ایجاد تغییرات مثبت به کار می‌گیرد و امیدوار است الهام‌بخش انسان‌ها در پذیرش مسئولیت محیط‌زیست، حمایت از حقوق بشر و همزیستی در صلح و احترام متقابل باشد.'
                  : 'She uses her voice to raise awareness of societal challenges and contribute to positive change. She hopes to inspire people to take responsibility for the environment, support human rights, and live together in peace and mutual respect.'}
              </p>
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200/80">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  {currentLang === 'fa' ? 'پیام و آرمان اصلی' : 'Leitmotiv & Mission'}
                </span>
                <p className="text-base sm:text-lg font-serif italic text-stone-900 font-medium">
                  {currentLang === 'fa'
                    ? '«برای حفاظت از محیط زیست و صلح»'
                    : '„Für Umweltschutz & Frieden“ · “For Environmental Protection & Peace”'}
                </p>
              </div>
            </div>

            {/* Hero Image (image00001 from WordPress Post 435) */}
            <div className="md:col-span-4">
              <div className="group bg-[#faf8f5] rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs">
                <div className="aspect-3/4 overflow-hidden bg-stone-100 relative">
                  <img
                    src={resolveAsset('/images/2025_07_image00001-768x1366.webp')}
                    alt="SchirZan – Halbmarathons & Marathon Berlin für Frieden und Umweltschutz"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center border-t border-stone-100">
                  <span className="text-[11px] font-mono text-stone-600 block">
                    {currentLang === 'fa'
                      ? 'دویدن در خیابان‌های برلین برای صلح و محیط‌زیست'
                      : currentLang === 'de'
                      ? 'Halbmarathons & Marathon Berlin: Für Frieden & Umweltschutz'
                      : 'Half Marathons & Marathon Berlin: For Peace & Environment'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cohesive Main Feature: Personal Sporting Projects (Running) & ECCHR Spendenlauf */}
        <div id="spendenlauf-ecchr" className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-6">
          <div className="border-b border-stone-200/80 pb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-red-100 text-red-700 border border-red-200">
                  {currentLang === 'fa' ? 'پروژه‌های ورزشی و مسابقات خیریه' : 'Personal Sporting Projects (Running)'}
                </span>
                <span className="text-xs font-mono text-stone-500">ECCHR Spendenlauf</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                {currentLang === 'fa'
                  ? 'نیمه‌ماراتن برلین ۲۰۲۷ – دویدن برای حقوق بشر'
                  : 'Berlin Half Marathon 2027 – Support the Fundraising Run'}
              </h4>
            </div>

            <a
              href="https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
            >
              <span>{currentLang === 'fa' ? 'حمایت از کمپین آنلاین ECCHR' : currentLang === 'de' ? 'Spendenlauf unterstützen →' : 'Support the fundraising run →'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Connected Campaign Image */}
            <div className="md:col-span-5">
              <a
                href="https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:border-red-400 transition-all"
              >
                <div className="aspect-3/4 sm:aspect-4/5 overflow-hidden bg-stone-100 relative">
                  <img
                    src={resolveAsset('/images/2026_08_ecchr-human-rights-support-4-1152x1536.webp')}
                    alt="SchirZan — Berlin Half Marathon 2027 · Support the fundraising run for ECCHR"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/10 transition-colors pointer-events-none" />
                </div>
                <div className="p-3.5 bg-white border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-900">
                    Berlin Half Marathon 2027
                  </span>
                  <span className="font-mono text-[11px] text-red-600 font-bold inline-flex items-center gap-1">
                    <span>{currentLang === 'fa' ? 'حمایت مالی' : 'Spendenlauf →'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            </div>

            {/* Connected Beitext & Message */}
            <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
              <div className="p-4 bg-white rounded-2xl border border-stone-200/80 space-y-2">
                <h5 className="font-serif font-bold text-base text-stone-900">
                  {currentLang === 'fa'
                    ? 'پیوند ورزش و آرمان‌خواهی حقوق بشری'
                    : 'Sport als Ausdruck gesellschaftlicher Verantwortung'}
                </h5>
                <p>
                  {currentLang === 'fa'
                    ? 'برای شیرزن، ورزش فراتر از تمرین بدنی است؛ ورزش بیانگر تعهد عمیق او به آرمان‌هایی است که به آن‌ها باور دارد.'
                    : currentLang === 'de'
                    ? 'Für SchirZan ist Sport mehr als körperliche Bewegung – er ist auch Ausdruck ihres Engagements für die Themen, die ihr am Herzen liegen.'
                    : 'For SchirZan, sport is more than physical exercise—it is also an expression of her commitment to the causes she cares about.'}
                </p>
                <p>
                  {currentLang === 'fa'
                    ? 'او از طریق دویدن در نیمه‌ماراتن‌ها و ماراتن‌های بین‌المللی پیام‌هایی چون «برای حفاظت از محیط زیست و صلح» را به گوش همگان می‌رساند.'
                    : currentLang === 'de'
                    ? 'Durch ihre Halbmarathons und Marathons vermittelt sie klare Botschaften wie „Für Umweltschutz & Frieden“.'
                    : 'Through her half-marathons and marathons, she shares messages such as “For Environmental Protection & Peace”.'}
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200/80 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-semibold">
                  <Trophy className="w-4 h-4 text-amber-700" />
                  <span>
                    {currentLang === 'fa' ? 'کارنامه دوهای امدادی و ماراتن' : 'Sportliche Laufbilanz in Berlin'}
                  </span>
                </div>
                <p>
                  {currentLang === 'fa'
                    ? 'تنها در سال ۲۰۲۵، او یازده نیمه‌ماراتن و یک ماراتن کامل را در برلین با موفقیت به پایان رساند.'
                    : currentLang === 'de'
                    ? 'Allein im Jahr 2025 absolvierte sie elf Halbmarathons und einen Marathon in Berlin.'
                    : 'In 2025 alone, she completed eleven half-marathons and one marathon in Berlin.'}
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 font-mono hover:underline"
                  >
                    <span>{currentLang === 'fa' ? 'مشاهده تصاویر در گالری' : currentLang === 'de' ? 'Fotos in der Galerie ansehen →' : 'View photos in the gallery →'}</span>
                  </a>
                  <a
                    href="https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-900 font-mono hover:underline"
                  >
                    <span>{currentLang === 'fa' ? 'صفحه رسمی کمپین ECCHR' : currentLang === 'de' ? 'Offizielle ECCHR Spendenseite öffnen' : 'Official ECCHR Campaign Page'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional 2 Pillars: Professional Background & Artistic Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Pillar: Professional Background / Water Protection */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/80 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-emerald-800 uppercase tracking-wider">
                  Professional Background
                </span>
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900">
                {currentLang === 'fa'
                  ? 'حفاظت از منابع آب، محیط زیست و مطالعات آکادمیک'
                  : currentLang === 'de'
                  ? 'Beruflicher Hintergrund & Umweltwissenschaften'
                  : 'Professional Background & Environmental Sciences'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {currentLang === 'de'
                  ? 'Seit 2024 ist Schahrsad Shahmirzadi im Umweltministerium in Potsdam tätig und befasst sich mit Gewässerschutzthemen, unter anderem im Rahmen der Bund/Länder-Arbeitsgemeinschaft Wasser (LAWA). Berufsbegleitend absolviert sie ein Masterstudium in Angewandten Umweltwissenschaften (M.Sc.) an der Universität Koblenz, um ihr fundiertes Fachwissen im Umweltschutz weiter auszubauen.'
                  : currentLang === 'fa'
                  ? 'از سال ۲۰۲۴، شهزاد شاهمیرزادی در وزارت محیط‌زیست در پوتسدام در حوزه مسائل منابع آب و در کارگروه فدرال آب (LAWA) فعالیت می‌کند. او هم‌زمان در مقطع کارشناسی ارشد علوم محیط‌زیست کاربردی در دانشگاه کوبلنتس مشغول به تحصیل است.'
                  : 'Since 2024, Schahrsad Shahmirzadi has worked at the Ministry of the Environment in Potsdam, focusing on water issues including work within the German Working Group on Water Issues (LAWA). Alongside, she is pursuing a master’s degree in Applied Environmental Sciences at the University of Koblenz.'}
              </p>
            </div>
            <div className="pt-2 border-t border-stone-200/60 text-[11px] font-mono text-emerald-900 font-semibold">
              Umweltministerium Potsdam · Universität Koblenz
            </div>
          </div>

          {/* Pillar: Her Own Photographic and Artistic Projects */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/80 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-800 uppercase tracking-wider">
                  Artistic Projects
                </span>
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900">
                {currentLang === 'fa'
                  ? 'پروژه‌های هنری و عکاسی با محوریت جامعه و محیط‌زیست'
                  : currentLang === 'de'
                  ? 'Eigene photographische und künstlerische Projekte'
                  : 'Her Own Photographic and Artistic Projects'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {currentLang === 'de'
                  ? 'In ihren photographischen und künstlerischen Arbeiten setzt sich SchirZan mit gesellschaftlichen und ökologischen Themen auseinander. Zu ihren prämierten Projekten zählen:'
                  : currentLang === 'fa'
                  ? 'در آثار عکاسی و هنری خود، شیرزن چالش‌های اجتماعی و زیست‌محیطی را بررسی می‌کند. از جمله پروژه‌های برجسته او:'
                  : 'In her photographic and artistic work, SchirZan explores social and environmental issues. Key projects include:'}
              </p>
              <ul className="text-xs text-stone-800 space-y-1.5 leading-relaxed font-medium">
                <li>• <strong>„In Between Spaces“</strong> (Trieste Photo Days / Urban Photo Awards)</li>
                <li>• <strong>„Berlin: Attack on Queer, Diversity and Freedom“</strong> (BIFA Honorable Mention)</li>
                <li>• <strong>„LIFE – LOVE – FREEDOM · IRAN“</strong> (IPA Official Selection)</li>
                <li>• <strong>„The Dignity of the Animal is Inviolable“</strong> (LICC Official Selection)</li>
              </ul>
            </div>
            <div className="pt-2 border-t border-stone-200/60">
              <a
                href="#social-environmental"
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors inline-flex items-center gap-1 font-mono"
              >
                <span>{currentLang === 'fa' ? 'مشاهده مجموعه‌ها در گالری آثار ←' : 'Zu den Werkserien im Portfolio →'}</span>
              </a>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
