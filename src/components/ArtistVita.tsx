import React from 'react';
import { ACADEMIC_MILESTONES, type Language } from '../data/photographyData';
import { ExternalLink, Sparkles, Trophy, GraduationCap, MapPin, Camera, Compass, Heart } from 'lucide-react';
import { resolveAsset } from '../utils/resolveAsset';
import { SectionHeader } from './SectionHeader';

interface ArtistVitaProps {
  currentLang: Language;
}

export const ArtistVita: React.FC<ArtistVitaProps> = ({ currentLang }) => {
  return (
    <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">

      {/* =========================================================================
          SECTION 1: BIOGRAFIE (ORIGINAL WORDPRESS POST 6: /vita/)
         ========================================================================= */}
      <section id="biography-profile" className="scroll-mt-16 lg:scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
        
        {/* 07 Biografie Header – Matching Navbar 07 */}
        <SectionHeader
          num="07"
          shortTitleDe="Biografie"
          shortTitleEn="Biography"
          shortTitleFa="زندگی‌نامه"
          fullTitleDe="Biografie – Persönliche Identität & Werdegang"
          fullTitleEn="Biography – Personal Identity & Profile"
          fullTitleFa="زندگی‌نامه – هویت فردی، سوابق و افتخارات شیرزن"
          descDe="Schahrsad Shahmirzadi (Künstlername SchirZan | شیر زن): Deutsch-iranische Wurzeln, fotografische Entdeckung und internationale Auszeichnungen."
          descEn="Schahrsad Shahmirzadi (Artist Name SchirZan): German-Iranian heritage, discovery of photography, and international acclaim."
          descFa="شهزاد شاهمیرزادی (نام هنری شیرزن): ریشه‌های آلمانی-ایرانی، کشف هنر عکاسی و موفقیت‌های بین‌المللی."
          currentLang={currentLang}
        />


        {/* 1. Personal Identity Block */}
        <div className="p-6 sm:p-7 rounded-3xl bg-amber-50/50 border border-amber-200/70 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-mono text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>{currentLang === 'fa' ? 'هویت فردی' : 'Personal Identity'}</span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'شهزاد شاهمیرزادی · هویت و پیشینه فرهنگی'
              : currentLang === 'de'
              ? 'Persönliche Identität'
              : 'Personal Identity'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {currentLang === 'de'
              ? 'Schahrsad Shahmirzadi, geboren am 4. Februar 1985 in Berlin, ist deutsch-iranischer Herkunft. Ihre Mutter ist Deutsche, ihr Vater stammte aus dem Iran. Sie wuchs in Berlin-Wilmersdorf auf. Ihre bikulturelle Herkunft prägt ihr Identitätsverständnis und ihr Engagement für gesellschaftliche Vielfalt.'
              : currentLang === 'fa'
              ? 'شهزاد شاهمیرزادی، متولد ۴ فوریه ۱۹۸۵ در برلین، دارای اصالت دوگانه ایرانی-آلمانی است. مادر او آلمانی و پدرش اهل ایران بود. او در برلین-ویلمرسدورف بزرگ شد. میراث دوگانه فرهنگی او، درک هویتی و تعهد او به تنوع در جامعه را شکل می‌دهد.'
              : 'Schahrsad Shahmirzadi, born on February 4, 1985, in Berlin, is German-Iranian. Her mother is German, and her father was from Iran. She grew up in Berlin-Wilmersdorf. Her dual cultural heritage shapes her sense of identity and her commitment to diversity in society.'}
          </p>
        </div>

        {/* 2. Artist Name SchirZan */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-mono text-xs uppercase tracking-wider font-bold">
            <Heart className="w-4 h-4 text-red-600" />
            <span>{currentLang === 'fa' ? 'نام هنری شیرزن' : currentLang === 'de' ? 'Künstlername SchirZan' : 'Artist Name SchirZan'}</span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'مفهوم و آرمان نام هنری «شیرزن»'
              : currentLang === 'de'
              ? 'Künstlername SchirZan'
              : 'Artist Name SchirZan'}
          </h4>
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 font-normal">
            <p>
              {currentLang === 'de'
                ? 'Ihr Künstlername SchirZan stammt aus dem Persischen und setzt sich aus zwei Wörtern zusammen:'
                : currentLang === 'fa'
                ? 'نام هنری او، شیرزن (SchirZan)، از زبان فارسی برگرفته شده و از دو واژه ترکیب یافته است:'
                : 'Her artist name, SchirZan, comes from Persian and combines two words:'}
            </p>
            <ul className="space-y-1.5 pl-4 rtl:pr-4 font-medium text-stone-800">
              <li>• <strong>Schir (شیر)</strong>: {currentLang === 'de' ? 'bedeutet „Löwe“' : currentLang === 'fa' ? 'به معنای «شیر»' : 'meaning “lion”'}</li>
              <li>• <strong>Zan (زن)</strong>: {currentLang === 'de' ? 'bedeutet „Frau“' : currentLang === 'fa' ? 'به معنای «زن»' : 'meaning “woman”'}</li>
            </ul>
            <p>
              {currentLang === 'de'
                ? 'Zusammen bedeutet „SchirZan“ „Löwenfrau“ oder „Löwin“ und steht für den Mut, den eigenen Weg zu gehen.'
                : currentLang === 'fa'
                ? 'در کنار یکدیگر، «شیرزن» به معنای «زن شیردل» یا «شیرماده» است و نمادی از شجاعت برای پیمودن مسیر شخصی خود می‌باشد.'
                : 'Together, “SchirZan” means “lion-woman” or “lioness” and represents the courage to follow one’s own path.'}
            </p>
            <p className="italic text-stone-800 bg-white/80 p-3 rounded-xl border border-stone-200/70">
              {currentLang === 'de'
                ? '„SchirZan“ steht auch dafür, benachteiligte Menschen zu unterstützen, ihren Stimmen Gehör zu verschaffen und sich für Gerechtigkeit, Gleichberechtigung und Menschlichkeit einzusetzen.'
                : currentLang === 'fa'
                ? '«شیرزن» همچنین نماد حمایت از افراد محروم و حاشیه‌نشین، رساندن صدای آنان و ایستادگی در راه عدالت، برابری و انسانیت است.'
                : '“SchirZan” also stands for supporting disadvantaged people, amplifying their voices, and standing up for justice, equality, and humanity.'}
            </p>
          </div>
        </div>

        {/* 3. Photographer & Artist – Multiple International Awards */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 space-y-4 shadow-2xs">
          <div className="flex items-center gap-2 text-amber-900 font-mono text-xs uppercase tracking-wider font-bold">
            <Camera className="w-4 h-4 text-amber-700" />
            <span>{currentLang === 'fa' ? 'عکاسی و هنر' : 'Photographer & Artist'}</span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'عکاس و هنرمند – دارای جوایز متعدد بین‌المللی'
              : currentLang === 'de'
              ? 'Photographer & Artist – Multiple International Awards'
              : 'Photographer & Artist – Multiple International Awards'}
          </h4>
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 font-normal">
            <p>
              {currentLang === 'de'
                ? 'Sie arbeitet als Photographin und Künstlerin unter dem Namen SchirZan | Schahrsad Shahmirzadi.'
                : currentLang === 'fa'
                ? 'او با نام هنری شیرزن | شهزاد شاهمیرزادی (SchirZan | Schahrsad Shahmirzadi) به عنوان عکاس و هنرمند فعالیت می‌کند.'
                : 'She works as a photographer and artist under the name SchirZan | Schahrsad Shahmirzadi.'}
            </p>
            <p>
              {currentLang === 'de'
                ? 'Obwohl sie die Photographie und Kunst erst im April 2025 für sich entdeckte, erlangte sie noch im selben Jahr internationale Anerkennung als non-professional Photographin. Ihr künstlerischer Schwerpunkt liegt auf der Architekturphotographie. Sie arbeitet auch in den Bereichen Abstraktion, Fine Art, Urban Spaces und widmet sich gesellschaftlich relevanten Themen.'
                : currentLang === 'fa'
                ? 'اگرچه او عکاسی و هنر را در آوریل ۲۰۲۵ کشف کرد، اما در همان سال موفق به کسب اعتبار و تحسین بین‌المللی به عنوان یک عکاس غیرحرفه‌ای شد. تمرکز اصلی هنری او بر عکاسی معماری است. او همچنین در حوزه‌های انتزاعی، فاین آرت، فضاهای شهری و کاوش پیرامون مضامین مهم اجتماعی فعالیت می‌کند.'
                : 'Although she only discovered photography and art in April 2025, she gained international recognition as a non-professional photographer within that same year. Her primary artistic focus is architectural photography. She also works in abstract, fine art, urban spaces and explores socially relevant themes.'}
            </p>
            <p>
              {currentLang === 'de'
                ? 'Ihre Arbeiten wurden bei renommierten internationalen Wettbewerben ausgezeichnet oder ausgewählt, darunter der Architecture MasterPrize, die International Photography Awards (IPA), die Budapest International Foto Awards (BIFA), die ND Awards, die Black & White Spider Awards, die London International Creative Competition (LICC), PERSPA und die URBAN Photo Awards.'
                : currentLang === 'fa'
                ? 'آثار او در رقابت‌های معتبر بین‌المللی از جمله Architecture MasterPrize، International Photography Awards (IPA)، Budapest International Foto Awards (BIFA)، ND Awards، Black & White Spider Awards، London International Creative Competition (LICC)، PERSPA و URBAN Photo Awards برگزیده و تقدیر شده‌اند.'
                : 'Her work has received awards or been selected by international competitions including the Architecture MasterPrize, the International Photography Awards (IPA), the Budapest International Foto Awards (BIFA), the ND Awards, the Black & White Spider Awards, the London International Creative Competition (LICC), PERSPA, and the URBAN Photo Awards.'}
            </p>
            <p>
              {currentLang === 'de'
                ? 'Zu ihren Erfolgen zählen zwei Gewinnerserien in der Kategorie „Other Exterior“ beim Architecture MasterPrize sowie zahlreiche Honorable Mentions, Shortlist-Platzierungen, Official Selections, Nominee- und Editor’s Choice-Auszeichnungen. Bei den International Photography Awards 2026 erhielt sie drei Honorable Mentions und 14 Official Selections.'
                : currentLang === 'fa'
                ? 'دستاوردهای او شامل دو مجموعه برنده عنوان اول در رده «Other Exterior» در مسابقات معتبر Architecture MasterPrize، همراه با چندین تقدیرنامه افتخاری (Honorable Mentions)، راه‌یابی به فهرست نهایی (Shortlist)، انتخاب رسمی (Official Selection)، نامزدی (Nominee) و برگزیده سردبیران (Editor’s Choice) است. در جوایز جهانی عکاسی IPA 2026، او موفق به دریافت ۳ تقدیرنامه و ۱۴ انتخاب رسمی گردید.'
                : 'Her achievements include two winner series in the “Other Exterior” category at the Architecture MasterPrize, alongside multiple Honorable Mentions, shortlist placements, Official Selections, Nominee, and Editor’s Choice selections. At the International Photography Awards 2026, she received three Honorable Mentions and 14 Official Selections.'}
            </p>
            <div className="pt-2">
              <a
                href="#photography-works"
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors inline-flex items-center gap-1 font-mono"
              >
                <span>{currentLang === 'fa' ? 'مشاهده تمامی آثار در بخش عکاسی ←' : currentLang === 'de' ? 'Weitere Details in den Bereichen „Photographer & Art“ und „Photography Works“ ansehen →' : 'Further details can be found in the sections “Photographer & Art” and “Photography Works” →'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. World Champion Kickboxing */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-mono text-xs uppercase tracking-wider font-bold">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>{currentLang === 'fa' ? 'کیک‌بوکسینگ حرفه‌ای' : 'World Champion Kickboxing'}</span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'قهرمان جهان در کیک‌بوکسینگ'
              : currentLang === 'de'
              ? 'World Champion Kickboxing'
              : 'World Champion Kickboxing'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {currentLang === 'de'
              ? 'Während ihrer aktiven Wettkampfkarriere zählte Schahrsad Shahmirzadi zu den erfolgreichsten deutschen Kickboxerinnen. Zu ihren Titeln und Qualifikationen gehören:'
              : currentLang === 'fa'
              ? 'در دوران حرفه‌ای مسابقات ورزشی، شهزاد شاهمیرزادی یکی از موفق‌ترین کیک‌بوکسورهای زن آلمان به شمار می‌رفت. عناوین و افتخارات برجسته او عبارتند از:'
              : 'During her competitive career, Schahrsad Shahmirzadi was one of Germany’s most successful female kickboxers. Her titles and qualifications include:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '10-fache Weltmeisterin' : currentLang === 'fa' ? '۱۰ بار قهرمانی جهان' : '10-time World Champion'}
              </div>
              <p className="text-[11px] text-stone-600">
                WKU, ISKA, ICO; {currentLang === 'de' ? 'darunter zwei Profititel der WKU' : currentLang === 'fa' ? 'از جمله دو عنوان حرفه‌ای در سازمان WKU' : 'including two professional titles with the WKU'}
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '2-fache Europameisterin' : currentLang === 'fa' ? '۲ بار قهرمانی اروپا' : 'Two-time European Champion'}
              </div>
              <p className="text-[11px] text-stone-600">
                ICO; {currentLang === 'de' ? 'darunter ein Profititel der WKU' : currentLang === 'fa' ? 'از جمله یک عنوان حرفه‌ای در سازمان WKU' : 'including one professional title with the WKU'}
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '3-fache Weltcupsiegerin' : currentLang === 'fa' ? '۳ بار قهرمانی جام جهانی' : 'Three-time World Cup Winner'}
              </div>
              <p className="text-[11px] text-stone-600">
                WKU, WMAC, IAKSA
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? 'Deutsche Meisterin Pro/Am' : currentLang === 'fa' ? 'قهرمان حرفه‌ای/آماتور آلمان' : 'German Pro/Am Champion'}
              </div>
              <p className="text-[11px] text-stone-600">
                ISKA
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '15-fache Deutsche Meisterin' : currentLang === 'fa' ? '۱۵ بار قهرمان ملی و بین‌المللی آلمان' : '15-time German or Int. German Champion'}
              </div>
              <p className="text-[11px] text-stone-600">
                WAKO, WKA, WKU, ISKA, ICO, IAKSA, WKC
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '3. Dan (Schwarzgurt)' : currentLang === 'fa' ? 'کمربند مشکی دان ۳' : 'Third-degree Black Belt (3rd Dan)'}
              </div>
              <p className="text-[11px] text-stone-600">
                {currentLang === 'de' ? 'Eine von wenigen Frauen mit dieser Graduierung' : currentLang === 'fa' ? 'یکی از معدود زنانی که به این درجه عالی ورزشی نائل آمده است' : 'One of the few women to hold this rank in kickboxing'}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal pt-2">
            {currentLang === 'de'
              ? 'Sie kämpfte überwiegend im Vollkontakt-Kickboxen und K-1 in den Gewichtsklassen zwischen 55 und 60 kg. Ihre sportliche Laufbahn entwickelte sich vollständig in Deutschland, und alle Erfolge erzielte sie für Deutschland.'
              : currentLang === 'fa'
              ? 'او عمدتاً در رشته‌های فول‌کنتاکت کیک‌بوکسینگ و K-1 در رده‌های وزنی بین ۵۵ تا ۶۰ کیلوگرم به مبارزه پرداخت. کارنامه ورزشی او تماماً در آلمان تکوین یافت و او تمامی عناوین پرافتخار خود را با نمایندگی از آلمان به دست آورد.'
              : 'She competed primarily in full-contact kickboxing and K-1, in weight divisions between 55 and 60 kg. Her sporting career developed entirely in Germany, and she achieved all her successes representing Germany.'}
          </p>

          <div className="pt-1">
            <a
              href="#kickboxen"
              className="text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors inline-flex items-center gap-1 font-mono"
            >
              <span>{currentLang === 'fa' ? 'مشاهده تمامی مدال‌ها و بخش کیک‌بوکسینگ ←' : currentLang === 'de' ? 'Ausführliche Details im Abschnitt „Weltmeisterin Kickboxen“ ansehen →' : 'Further details can be found in the “World Champion Kickboxing” section →'}</span>
            </a>
          </div>
        </div>

        {/* 5. Multiple Paths (Vielfältige Wege) */}
        <div className="p-6 sm:p-7 rounded-3xl bg-amber-50/40 border border-amber-200/60 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-mono text-xs uppercase tracking-wider font-bold">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>{currentLang === 'fa' ? 'مسیرهای چندگانه' : currentLang === 'de' ? 'Vielfältige Wege' : 'Multiple Paths'}</span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'پیوند هنر، ورزش، علم و عمل'
              : currentLang === 'de'
              ? 'Multiple Paths'
              : 'Multiple Paths'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium italic">
            {currentLang === 'de'
              ? 'SchirZan | Schahrsad Shahmirzadi bringt Photographie, Sport, akademisches Studium und berufliche Praxis zusammen und schöpft aus diesen unterschiedlichen Bereichen eine vielschichtige und unverwechselbare Perspektive.'
              : currentLang === 'fa'
              ? 'شیرزن | شهزاد شاهمیرزادی عکاسی، ورزش، تحصیلات دانشگاهی و تجربیات حرفه‌ای را در کنار یکدیگر قرار داده و با بهره‌گیری از این حوزه‌های گوناگون، دیدگاهی گسترده، عمیق و منحصر‌به‌فرد را خلق می‌کند.'
              : 'SchirZan | Schahrsad Shahmirzadi brings together photography, sport, academic study, and professional practice, drawing on these different fields to develop a broad and distinctive perspective.'}
          </p>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: EDUCATION, PROFESSIONAL CAREER & MASTER’S STUDIES (WP Post 1728)
         ========================================================================= */}
      <section id="education" className="scroll-mt-16 lg:scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">

        {/* 08 Bildungsweg Header – Matching Navbar 08 */}
        <SectionHeader
          num="08"
          shortTitleDe="Bildungsweg"
          shortTitleEn="Education"
          shortTitleFa="تحصیلات"
          fullTitleDe="Bildungsweg – Interdisziplinäre akademische Ausbildung"
          fullTitleEn="Education – Interdisciplinary Academic Education"
          fullTitleFa="تحصیلات – تحصیلات دانشگاهی بین‌رشته‌ای"
          descDe="Vom Evangelischen Gymnasium Graues Kloster über Rechtswissenschaften an der FU Berlin und die Berliner Polizei (LKA) bis zum Umweltministerium (MLEUV) in Potsdam und dem laufenden Masterstudium an der Universität Koblenz, kurz vor dem Abschluss M.Sc."
          descEn="From Graues Kloster Gymnasium and law studies at FU Berlin, through the Berlin Police (LKA), to the Environment Ministry (MLEUV) in Potsdam and ongoing Master’s studies at the University of Koblenz, nearing M.Sc. completion."
          descFa="از دیپلم دبیرستان گراوئن کلوستر و تحصیلات حقوق در دانشگاه آزاد برلین (FU)، پلیس برلین (LKA) تا وزارت محیط‌زیست (MLEUV) در پوتسدام و تحصیلات جاری کارشناسی ارشد (در آستانه اخذ مدرک M.Sc.) در دانشگاه کوبلنتس."
          currentLang={currentLang}
        />
          <p className="text-sm sm:text-base text-stone-700 font-normal max-w-3xl leading-relaxed">
            {currentLang === 'de' ? (
              <>
                Im Anschluss an ihr Abitur am traditionsreichen Evangelischen Gymnasium zum Grauen Kloster in Berlin im Jahr 2004 studierte sie Rechtswissenschaften. Parallel zu ihrer leistungssportlichen Laufbahn im Kickboxen trat sie in den Dienst der Berliner Polizei ein, wo sie zuletzt in der Zentralstelle für Prävention beim Landeskriminalamt (LKA Berlin) als Ansprechperson für gruppenbezogene Menschenfeindlichkeit tätig war.
              </>
            ) : currentLang === 'fa' ? (
              <>
                پس از اخذ دیپلم از دبیرستان تاریخی گراوئن کلوستر در برلین در سال ۲۰۰۴، او به تحصیل در رشته حقوق پرداخت. همزمان با دوران ورزش قهرمانی در کیک‌بوکسینگ، به خدمت پلیس برلین درآمد و در آخرین مسئولیت خود در اداره تحقیقات جنایی ایالت برلین (LKA) به عنوان مسئول تماس و پیشگیری از جرایم ناشی از نفرت و انسان‌ستیزی سازمان‌یافته فعالیت نمود.
              </>
            ) : (
              <>
                Following her graduation from the historic Evangelisches Gymnasium zum Grauen Kloster in Berlin in 2004, she studied law. Alongside her high-performance kickboxing career, she joined the Berlin Police, where she most recently served in the Central Office for Prevention at the State Criminal Police Office (LKA) as a Contact Person for Group-Focused Enmity.
              </>
            )}
          </p>

          {/* Berufliche Tätigkeit: Umweltministerium Potsdam & LAWA */}
          <p className="text-sm sm:text-base text-stone-700 font-normal max-w-3xl leading-relaxed">
            {currentLang === 'de' ? (
              <>
                Seit 2024 arbeitet sie im Umweltministerium in Potsdam (MLEUV) mit dem Schwerpunkt Wasserfragen. Zunächst war sie in den Jahren 2024 und 2025 für die Geschäftsstelle der Bund/Länder-Arbeitsgemeinschaft Wasser (LAWA) tätig. Neben ihrer beruflichen Tätigkeit absolviert sie ein Studium zum Master of Science (M.Sc.) in Angewandten Umweltwissenschaften an der Universität Koblenz und befindet sich nun in den letzten Zügen des berufsbegleitenden Studiengangs.
              </>
            ) : currentLang === 'fa' ? (
              <>
                از سال ۲۰۲۴، او در وزارت محیط‌زیست در پوتسدام (MLEUV) با تمرکز بر مسائل آب فعالیت می‌کند. وی در ابتدا در سال‌های ۲۰۲۴ و ۲۰۲۵ در دبیرخانه کارگروه مشترک آب ایالت‌ها و دولت فدرال (LAWA) مشغول به کار بود. هم‌زمان با نقش حرفه‌ای، او در مقطع کارشناسی ارشد (M.Sc.) علوم محیط‌زیست کاربردی در دانشگاه کوبلنتس مشغول به تحصیل است و اکنون در مراحل پایانی این دوره تحصیلی قرار دارد.
              </>
            ) : (
              <>
                Since 2024, she has been working at the Environment Ministry in Potsdam, focusing on water-related matters. She initially worked for the Coordination Office of the German Working Group on Water Issues of the Federal States and the Federal Government (LAWA) in 2024 and 2025. Alongside her professional role, she is pursuing a Master of Science (M.Sc.) in Applied Environmental Sciences at the University of Koblenz. She is now in the final stages of completing the part-time program.
              </>
            )}
          </p>

        {/* Official Campus Image: Universität Koblenz (ZFUW) */}
        <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 shadow-2xs">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[380px] w-full overflow-hidden bg-stone-100">
            <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-900/85 text-white rounded text-[10px] font-mono font-medium shadow-md tracking-wider backdrop-blur-xs">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentLang === 'fa' ? 'دانشگاه کوبلنتس · کوبلنتس، آلمان' : 'Universität Koblenz · Koblenz'}</span>
              </span>
            </div>
            <img
              src={resolveAsset('/images/2025_08_uni-koblenz.webp')}
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.src.endsWith('.jpg')) {
                  img.src = resolveAsset('/images/2025_08_uni-koblenz.jpg');
                }
              }}
              alt="Universität Koblenz – Zentrum für Fernstudien und Universitäre Weiterbildung ZFUW"
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
          <div className="p-3.5 sm:p-4 bg-stone-50/90 border-t border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <span className="font-mono text-stone-400">08 / 01</span>
              <span className="font-serif italic font-medium text-stone-800">
                {currentLang === 'de'
                  ? 'Universität Koblenz – Zentrum für Fernstudien und Universitäre Weiterbildung ZFUW'
                  : currentLang === 'fa'
                    ? 'دانشگاه کوبلنتس – مرکز آموزش‌های آزاد و مجازی ZFUW'
                    : 'University of Koblenz – Centre for Distance Studies & Further Education ZFUW'}
              </span>
            </div>
            <div className="flex flex-col sm:items-end gap-1 text-left sm:text-right rtl:sm:text-left">
              <span className="font-mono text-[11px] font-semibold text-amber-900 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full inline-block">
                {currentLang === 'de'
                  ? 'Laufendes Masterstudium · Kurz vor dem Abschluss (M.Sc.)'
                  : currentLang === 'fa'
                  ? 'تحصیلات جاری کارشناسی ارشد · در آستانه فارغ‌التحصیلی (M.Sc.)'
                  : 'Ongoing Master’s programme · Nearing completion (M.Sc.)'}
              </span>
              <span className="text-[10px] font-mono text-stone-500 block">
                {currentLang === 'de'
                  ? 'Seit 2024 · Derzeit im 5. Semester (Stand November 2026)'
                  : currentLang === 'fa'
                  ? 'از سال ۲۰۲۴ · در حال حاضر در ترم ۵ تحصیلی (نوامبر ۲۰۲۶)'
                  : 'Since 2024 · Currently in 5th Semester · as of November 2026'}
              </span>
            </div>
          </div>
        </div>

        {/* Authentic 4-Column Table: "Akademische Laufbahn – Übersicht" from WordPress Post 1728 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
              {currentLang === 'de'
                ? 'Akademische Laufbahn – Übersicht'
                : currentLang === 'fa'
                  ? 'جدول سوابق تحصیلی و دانشگاهی'
                  : 'Academic Career – Overview'}
            </h4>
            <span className="text-xs font-mono text-stone-400">
              {currentLang === 'fa' ? '۵ مرحله تحصیلی' : '5 Milestones'}
            </span>
          </div>

          <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-50/90 border-b border-stone-200 text-stone-700 font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold whitespace-nowrap min-w-[130px]">
                      {currentLang === 'de'
                        ? 'Zeitraum'
                        : currentLang === 'fa'
                          ? 'دوره زمانی'
                          : 'Period'}
                    </th>
                    <th className="py-3 px-4 font-bold min-w-[180px]">
                      {currentLang === 'de'
                        ? 'Studiengang / Ausbildung'
                        : currentLang === 'fa'
                          ? 'رشته / دوره آموزشی'
                          : 'Field of Study / Training'}
                    </th>
                    <th className="py-3 px-4 font-bold min-w-[200px]">
                      {currentLang === 'de'
                        ? 'Einrichtung'
                        : currentLang === 'fa'
                          ? 'موسسه / دانشگاه'
                          : 'Institution'}
                    </th>
                    <th className="py-3 px-4 font-bold min-w-[220px]">
                      {currentLang === 'de'
                        ? 'Abschluss / Stand'
                        : currentLang === 'fa'
                          ? 'مدرک / وضعیت تحصیلی'
                          : 'Degree / Status'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-normal text-stone-800">
                  {ACADEMIC_MILESTONES.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        idx % 2 === 0
                          ? 'bg-white hover:bg-amber-50/20 transition-colors'
                          : 'bg-[#faf8f5]/60 hover:bg-amber-50/20 transition-colors'
                      }
                    >
                      <td className="py-3.5 px-4 font-mono font-bold text-amber-800 whitespace-nowrap align-top text-xs">
                        {row.period}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-stone-900 align-top">
                        {currentLang === 'de'
                          ? row.fieldDe
                          : currentLang === 'fa'
                            ? row.fieldFa
                            : row.fieldEn}
                      </td>
                      <td className="py-3.5 px-4 text-stone-600 align-top">
                        {currentLang === 'de'
                          ? row.institutionDe
                          : currentLang === 'fa'
                            ? row.institutionFa
                            : row.institutionEn}
                      </td>
                      <td className="py-3.5 px-4 text-stone-700 align-top leading-relaxed">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-stone-100/90 border border-stone-200/70 text-xs font-normal">
                          {currentLang === 'de'
                            ? row.degreeDe
                            : currentLang === 'fa'
                              ? row.degreeFa
                              : row.degreeEn}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMMITTED TO ENVIRONMENTAL PROTECTION, HUMAN RIGHTS AND PEACE (WP Post 435)
         ========================================================================= */}
      <section id="engagement" className="scroll-mt-16 lg:scroll-mt-28 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-10">

        {/* 09 Engagement Header – Matching Navbar 09 */}
        <SectionHeader
          num="09"
          shortTitleDe="Engagement"
          shortTitleEn="Advocacy"
          shortTitleFa="فعالیت‌ها"
          fullTitleDe="Engagement – Umweltschutz, Menschenrechte & Frieden"
          fullTitleEn="Advocacy – Environmental Protection, Human Rights & Peace"
          fullTitleFa="فعالیت‌ها – حفاظت از محیط زیست، حقوق بشر و صلح"
          descDe="Solidarität mit benachteiligten Menschen, Berliner Halbmarathon Spendenlauf für ECCHR Menschenrechte und ehrenamtlicher Einsatz für den Gewässerschutz."
          descEn="Standing in solidarity with disadvantaged communities, Berlin Half Marathon charity run for human rights, and environmental advocacy."
          descFa="همبستگی با آسیب‌دیدگان، دویدن در نیمه‌ماراتن برلین برای حمایت از حقوق بشر ECCHR و فعالیت‌های محیط زیستی."
          currentLang={currentLang}
        />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Mission Text */}
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              <p>
                {currentLang === 'de' ? (
                  <>
                    Neben ihrer beruflichen und akademischen Laufbahn engagiert sich <strong className="text-stone-900 font-semibold">SchirZan | Schahrsad Shahmirzadi</strong> für Umweltschutz, Menschenrechte und Frieden durch eigene Projekte, sportliche und photographische Initiativen sowie den stetigen Dialog in ihrem persönlichen Umfeld.
                  </>
                ) : currentLang === 'fa' ? (
                  <>
                    در کنار فعالیت‌های حرفه‌ای و دانشگاهی، <strong className="text-stone-900 font-semibold">شیرزن | شهزاد شاهمیرزادی</strong> از طریق پروژه‌های شخصی، ابتکارات ورزشی و آثار عکاسی خود متعهد به ترویج حفاظت از محیط زیست، حقوق بشر و صلح است.
                  </>
                ) : (
                  <>
                    Alongside her professional and academic career, <strong className="text-stone-900 font-semibold">SchirZan | Schahrsad Shahmirzadi</strong> is committed to environmental protection, human rights, and peace through her own projects, sporting and photographic initiatives, and speaking engagements within her personal network.
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
                  <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-900/85 text-white rounded text-[10px] font-mono font-medium shadow-md tracking-wider backdrop-blur-xs">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{currentLang === 'fa' ? 'برلین · برای صلح و محیط‌زیست' : 'Berlin · Für Frieden & Umweltschutz'}</span>
                    </span>
                  </div>
                  <img
                    src={resolveAsset('/images/2025_07_image00001-768x1366.webp')}
                    alt="SchirZan – Halbmarathons & Marathon Berlin für Frieden und Umweltschutz"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
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
                    src={resolveAsset('/images/2026_08_ecchr-human-rights-support-4-1536x2048.webp')}
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
                    <span>{currentLang === 'fa' ? 'مشاهده تصاویر در گالری' : currentLang === 'de' ? 'Photos in der Galerie ansehen →' : 'View photos in the gallery →'}</span>
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
      </section>

    </div>
  );
};
