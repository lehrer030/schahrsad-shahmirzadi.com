import React from 'react';
import { ACADEMIC_MILESTONES, type Language } from '../data/photographyData';
import { ExternalLink, Sparkles, Trophy, GraduationCap, Camera, Compass, Heart } from 'lucide-react';
import { resolveAsset } from '../utils/resolveAsset';
import { SectionHeader } from './SectionHeader';

interface ArtistVitaProps {
  currentLang: Language;
}

export const ArtistVita: React.FC<ArtistVitaProps> = ({ currentLang }) => {
  const getField = (row: typeof ACADEMIC_MILESTONES[number]) => {
    if (currentLang === 'de') return row.fieldDe;
    if (currentLang === 'fa') return row.fieldFa;
    if (currentLang === 'fr') return row.fieldFr || row.fieldEn;
    if (currentLang === 'it') return row.fieldIt || row.fieldEn;
    if (currentLang === 'tr') return row.fieldTr || row.fieldEn;
    return row.fieldEn;
  };

  const getInstitution = (row: typeof ACADEMIC_MILESTONES[number]) => {
    if (currentLang === 'de') return row.institutionDe;
    if (currentLang === 'fa') return row.institutionFa;
    if (currentLang === 'fr') return row.institutionFr || row.institutionEn;
    if (currentLang === 'it') return row.institutionIt || row.institutionEn;
    if (currentLang === 'tr') return row.institutionTr || row.institutionEn;
    return row.institutionEn;
  };

  const getDegree = (row: typeof ACADEMIC_MILESTONES[number]) => {
    if (currentLang === 'de') return row.degreeDe;
    if (currentLang === 'fa') return row.degreeFa;
    if (currentLang === 'fr') return row.degreeFr || row.degreeEn;
    if (currentLang === 'it') return row.degreeIt || row.degreeEn;
    if (currentLang === 'tr') return row.degreeTr || row.degreeEn;
    return row.degreeEn;
  };
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
            <span>
              {currentLang === 'fa'
                ? 'هویت فردی'
                : currentLang === 'fr'
                ? 'Identité Personnelle'
                : currentLang === 'it'
                ? 'Identità Personale'
                : currentLang === 'tr'
                ? 'Kişisel Kimlik'
                : 'Personal Identity'}
            </span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'شهزاد شاهمیرزادی · هویت و پیشینه فرهنگی'
              : currentLang === 'de'
              ? 'Persönliche Identität'
              : currentLang === 'fr'
              ? 'Identité Personnelle'
              : currentLang === 'it'
              ? 'Identità Personale'
              : currentLang === 'tr'
              ? 'Kişisel Kimlik'
              : 'Personal Identity'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {currentLang === 'de'
              ? 'Schahrsad Shahmirzadi, geboren am 4. Februar 1985 in Berlin, ist deutsch-iranischer Herkunft. Ihre Mutter ist Deutsche, ihr Vater stammte aus dem Iran. Sie wuchs in Berlin-Wilmersdorf auf. Ihre bikulturelle Herkunft prägt ihr Identitätsverständnis und ihr Engagement für gesellschaftliche Vielfalt.'
              : currentLang === 'fa'
              ? 'شهزاد شاهمیرزادی، متولد ۴ فوریه ۱۹۸۵ در برلین، دارای اصالت دوگانه ایرانی-آلمانی است. مادر او آلمانی و پدرش اهل ایران بود. او در برلین-ویلمرسدورف بزرگ شد. میراث دوگانه فرهنگی او، درک هویتی و تعهد او به تنوع در جامعه را شکل می‌دهد.'
              : currentLang === 'fr'
              ? 'Schahrsad Shahmirzadi, née le 4 février 1985 à Berlin, est d’origine germano-iranienne. Sa mère est allemande et son père était iranien. Elle a grandi à Berlin-Wilmersdorf. Sa double culture façonne sa conception de l’identité et son engagement indéfectible en faveur de la diversité sociétale.'
              : currentLang === 'it'
              ? 'Schahrsad Shahmirzadi, nata il 4 febbraio 1985 a Berlino, è di origini tedesco-iraniane. Sua madre è tedesca e suo padre era iraniano. È cresciuta a Berlino-Wilmersdorf. La sua doppia eredità culturale plasma il suo senso di identità e il suo impegno per la diversità nella società.'
              : currentLang === 'tr'
              ? '4 Şubat 1985 Berlin doğumlu Schahrsad Shahmirzadi, Alman-İran kökenlidir. Annesi Alman, babası ise İranlıdır. Berlin-Wilmersdorf’ta büyümüştür. Sahip olduğu bu çift kültürlü miras, kimlik bilincini ve toplumsal çeşitliliğe olan güçlü bağlılığını şekillendirmiştir.'
              : 'Schahrsad Shahmirzadi, born on February 4, 1985, in Berlin, is German-Iranian. Her mother is German, and her father was from Iran. She grew up in Berlin-Wilmersdorf. Her dual cultural heritage shapes her sense of identity and her commitment to diversity in society.'}
          </p>
        </div>

        {/* 2. Artist Name SchirZan */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-mono text-xs uppercase tracking-wider font-bold">
            <Heart className="w-4 h-4 text-red-600" />
            <span>
              {currentLang === 'fa'
                ? 'نام هنری شیرزن'
                : currentLang === 'de'
                ? 'Künstlername SchirZan'
                : currentLang === 'fr'
                ? 'Nom d’Artiste SchirZan'
                : currentLang === 'it'
                ? 'Nome d’Arte SchirZan'
                : currentLang === 'tr'
                ? 'Sanatçı Adı SchirZan'
                : 'Artist Name SchirZan'}
            </span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'مفهوم و آرمان نام هنری «شیرزن»'
              : currentLang === 'de'
              ? 'Künstlername SchirZan'
              : currentLang === 'fr'
              ? 'Nom d’Artiste SchirZan'
              : currentLang === 'it'
              ? 'Nome d’Arte SchirZan'
              : currentLang === 'tr'
              ? 'Sanatçı Adı SchirZan'
              : 'Artist Name SchirZan'}
          </h4>
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 font-normal">
            <p>
              {currentLang === 'de'
                ? 'Ihr Künstlername SchirZan stammt aus dem Persischen und setzt sich aus zwei Wörtern zusammen:'
                : currentLang === 'fa'
                ? 'نام هنری او، شیرزن (SchirZan)، از زبان فارسی برگرفته شده و از دو واژه ترکیب یافته است:'
                : currentLang === 'fr'
                ? 'Son nom d’artiste SchirZan provient du persan et est composé de deux mots :'
                : currentLang === 'it'
                ? 'Il suo nome d’arte SchirZan deriva dal persiano ed è composto da due parole:'
                : currentLang === 'tr'
                ? 'SchirZan sanatçı ismi Farsçadan gelmekte olup iki kelimenin birleşiminden oluşur:'
                : 'Her artist name, SchirZan, comes from Persian and combines two words:'}
            </p>
            <ul className="space-y-1.5 pl-4 rtl:pr-4 font-medium text-stone-800">
              <li>• <strong>Schir (شیر)</strong>: {currentLang === 'de' ? 'bedeutet „Löwe“' : currentLang === 'fa' ? 'به معنای «شیر»' : currentLang === 'fr' ? 'signifie « lion »' : currentLang === 'it' ? 'significa «leone»' : currentLang === 'tr' ? '«aslan» anlamına gelir' : 'meaning “lion”'}</li>
              <li>• <strong>Zan (زن)</strong>: {currentLang === 'de' ? 'bedeutet „Frau“' : currentLang === 'fa' ? 'به معنای «زن»' : currentLang === 'fr' ? 'signifie « femme »' : currentLang === 'it' ? 'significa «donna»' : currentLang === 'tr' ? '«kadın» anlamına gelir' : 'meaning “woman”'}</li>
            </ul>
            <p>
              {currentLang === 'de'
                ? 'Zusammen bedeutet „SchirZan“ „Löwenfrau“ oder „Löwin“ und steht für den Mut, den eigenen Weg zu gehen.'
                : currentLang === 'fa'
                ? 'در کنار یکدیگر، «شیرزن» به معنای «زن شیردل» یا «شیرماده» است و نمادی از شجاعت برای پیمودن مسیر شخصی خود می‌باشد.'
                : currentLang === 'fr'
                ? 'Ensemble, « SchirZan » signifie « femme-lionne » ou « lionne », incarnant le courage de tracer sa propre voie.'
                : currentLang === 'it'
                ? 'Insieme, «SchirZan» significa «donna-leonessa» o «leonessa», rappresentando il coraggio di seguire la propria strada.'
                : currentLang === 'tr'
                ? 'Birlikte ele alındığında «SchirZan», «dişi aslan» veya «aslan kadın» anlamına gelir ve kişinin kendi özgün yolunu çizme cesaretini simgeler.'
                : 'Together, “SchirZan” means “lion-woman” or “lioness” and represents the courage to follow one’s own path.'}
            </p>
            <p className="italic text-stone-800 bg-white/80 p-3 rounded-xl border border-stone-200/70">
              {currentLang === 'de'
                ? '„SchirZan“ steht auch dafür, benachteiligte Menschen zu unterstützen, ihren Stimmen Gehör zu verschaffen und sich für Gerechtigkeit, Gleichberechtigung und Menschlichkeit einzusetzen.'
                : currentLang === 'fa'
                ? '«شیرزن» همچنین نماد حمایت از افراد محروم و حاشیه‌نشین، رساندن صدای آنان و ایستادگی در راه عدالت، برابری و انسانیت است.'
                : currentLang === 'fr'
                ? '« SchirZan » symbolise également le soutien aux personnes défavorisées, la volonté de porter leur voix et la défense de la justice, de l’égalité et de l’humanité.'
                : currentLang === 'it'
                ? '«SchirZan» rappresenta anche il sostegno alle persone svantaggiate, l’impegno a dare voce a chi non ne ha e la difesa di giustizia, uguaglianza e umanità.'
                : currentLang === 'tr'
                ? '«SchirZan», aynı zamanda toplumda dezavantajlı bireyleri desteklemeyi, seslerini duyurmayı ve adalet, eşitlik ile insan haklarını savunmayı temsil eder.'
                : '“SchirZan” also stands for supporting disadvantaged people, amplifying their voices, and standing up for justice, equality, and humanity.'}
            </p>
          </div>
        </div>

        {/* 3. Photographer & Artist – Multiple International Awards */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 space-y-4 shadow-2xs">
          <div className="flex items-center gap-2 text-amber-900 font-mono text-xs uppercase tracking-wider font-bold">
            <Camera className="w-4 h-4 text-amber-700" />
            <span>
              {currentLang === 'fa'
                ? 'عکاسی و هنر'
                : currentLang === 'fr'
                ? 'Photographe & Artiste'
                : currentLang === 'it'
                ? 'Fotografa & Artista'
                : currentLang === 'tr'
                ? 'Fotoğrafçı & Sanatçı'
                : 'Photographer & Artist'}
            </span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'عکاس و هنرمند – دارای جوایز متعدد بین‌المللی'
              : currentLang === 'de'
              ? 'Photographer & Artist – Multiple International Awards'
              : currentLang === 'fr'
              ? 'Photographe & Artiste – Multiples Prix Internationaux'
              : currentLang === 'it'
              ? 'Fotografa & Artista – Pluripremiata a Livello Internazionale'
              : currentLang === 'tr'
              ? 'Fotoğrafçı & Sanatçı – Çok Sayıda Uluslararası Ödül'
              : 'Photographer & Artist – Multiple International Awards'}
          </h4>
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 font-normal">
            <p>
              {currentLang === 'de'
                ? 'Sie arbeitet als Photographin und Künstlerin unter dem Namen SchirZan | Schahrsad Shahmirzadi.'
                : currentLang === 'fa'
                ? 'او با نام هنری شیرزن | شهزاد شاهمیرزادی (SchirZan | Schahrsad Shahmirzadi) به عنوان عکاس و هنرمند فعالیت می‌کند.'
                : currentLang === 'fr'
                ? 'Elle travaille comme photographe et artiste sous le nom de SchirZan | Schahrsad Shahmirzadi.'
                : currentLang === 'it'
                ? 'Lavora come fotografa e artista sotto il nome di SchirZan | Schahrsad Shahmirzadi.'
                : currentLang === 'tr'
                ? 'Fotoğrafçı ve sanatçı olarak çalışmalarını SchirZan | Schahrsad Shahmirzadi ismi altında sürdürmektedir.'
                : 'She works as a photographer and artist under the name SchirZan | Schahrsad Shahmirzadi.'}
            </p>
            <p>
              {currentLang === 'de'
                ? 'Obwohl sie die Photographie und Kunst erst im April 2025 für sich entdeckte, erlangte sie noch im selben Jahr internationale Anerkennung als non-professional Photographin. Ihr künstlerischer Schwerpunkt liegt auf der Architekturphotographie. Sie arbeitet auch in den Bereichen Abstraktion, Fine Art, Urban Spaces und widmet sich gesellschaftlich relevanten Themen.'
                : currentLang === 'fa'
                ? 'اگرچه او عکاسی و هنر را در آوریل ۲۰۲۵ کشف کرد، اما در همان سال موفق به کسب اعتبار و تحسین بین‌المللی به عنوان یک عکاس غیرحرفه‌ای شد. تمرکز اصلی هنری او بر عکاسی معماری است. او همچنین در حوزه‌های انتزاعی، فاین آرت، فضاهای شهری و کاوش پیرامون مضامین مهم اجتماعی فعالیت می‌کند.'
                : currentLang === 'fr'
                ? 'Bien qu’elle n’ait découvert la photographie et l’art qu’en avril 2025, elle a obtenu dès la même année une reconnaissance internationale en tant que photographe non professionnelle. Son axe artistique principal réside dans la photographie d’architecture. Elle explore également l’abstraction, les beaux-arts, les espaces urbains et les thématiques sociétales majeures.'
                : currentLang === 'it'
                ? 'Sebbene abbia scoperto la fotografia e l’arte solo nell’aprile 2025, ha ottenuto nello stesso anno un prestigioso riconoscimento internazionale come fotografa non professionista. Il suo fulcro artistico risiede nella fotografia di architettura, spaziando anche tra astrazione, fine art, spazi urbani e tematiche sociali.'
                : currentLang === 'tr'
                ? 'Fotoğrafçılık ve sanatı Nisan 2025’te keşfetmiş olmasına rağmen, henüz aynı yıl içinde profesyonel olmayan kategoride küresel takdir kazandı. Sanatsal odağını mimari fotoğrafçılık oluşturmaktadır; bunun yanı sıra soyutlama, güzel sanatlar, kentsel mekânlar ve toplumsal meseleler üzerine de çalışmaktadır.'
                : 'Although she only discovered photography and art in April 2025, she gained international recognition as a non-professional photographer within that same year. Her primary artistic focus is architectural photography. She also works in abstract, fine art, urban spaces and explores socially relevant themes.'}
            </p>
            <p>
              {currentLang === 'de'
                ? 'Ihre Arbeiten wurden bei renommierten internationalen Wettbewerben ausgezeichnet oder ausgewählt, darunter der Architecture MasterPrize, die International Photography Awards (IPA), die Budapest International Foto Awards (BIFA), die ND Awards, die Black & White Spider Awards, die London International Creative Competition (LICC), PERSPA und die URBAN Photo Awards.'
                : currentLang === 'fa'
                ? 'آثار او در رقابت‌های معتبر بین‌المللی از جمله Architecture MasterPrize، International Photography Awards (IPA)، Budapest International Foto Awards (BIFA)، ND Awards، Black & White Spider Awards، London International Creative Competition (LICC)، PERSPA و URBAN Photo Awards برگزیده و تقدیر شده‌اند.'
                : currentLang === 'fr'
                ? 'Ses œuvres ont été récompensées ou sélectionnées lors de concours internationaux majeurs, notamment l’Architecture MasterPrize, les International Photography Awards (IPA), les Budapest International Foto Awards (BIFA), les ND Awards, les Black & White Spider Awards, la London International Creative Competition (LICC), PERSPA et les URBAN Photo Awards.'
                : currentLang === 'it'
                ? 'Le sue opere sono state premiate o selezionate in rinomati concorsi internazionali, tra cui l’Architecture MasterPrize, gli International Photography Awards (IPA), i Budapest International Foto Awards (BIFA), gli ND Awards, i Black & White Spider Awards, la London International Creative Competition (LICC), PERSPA e gli URBAN Photo Awards.'
                : currentLang === 'tr'
                ? 'Eserleri; Architecture MasterPrize, International Photography Awards (IPA), Budapest International Foto Awards (BIFA), ND Awards, Black & White Spider Awards, London International Creative Competition (LICC), PERSPA ve URBAN Photo Awards gibi dünyanın en saygın yarışmalarında ödüllendirilmiş ve sergilenmeye layık görülmüştür.'
                : 'Her work has received awards or been selected by international competitions including the Architecture MasterPrize, the International Photography Awards (IPA), the Budapest International Foto Awards (BIFA), the ND Awards, the Black & White Spider Awards, the London International Creative Competition (LICC), PERSPA, and the URBAN Photo Awards.'}
            </p>
            <p>
              {currentLang === 'de'
                ? 'Zu ihren Erfolgen zählen zwei Gewinnerserien in der Kategorie „Other Exterior“ beim Architecture MasterPrize sowie zahlreiche Honorable Mentions, Shortlist-Platzierungen, Official Selections, Nominee- und Editor’s Choice-Auszeichnungen. Bei den International Photography Awards 2026 erhielt sie drei Honorable Mentions und 14 Official Selections.'
                : currentLang === 'fa'
                ? 'دستاوردهای او شامل دو مجموعه برنده عنوان اول در رده «Other Exterior» در مسابقات معتبر Architecture MasterPrize، همراه با چندین تقدیرنامه افتخاری (Honorable Mentions)، راه‌یابی به فهرست نهایی (Shortlist)، انتخاب رسمی (Official Selection)، نامزدی (Nominee) و برگزیده سردبیران (Editor’s Choice) است. در جوایز جهانی عکاسی IPA 2026، او موفق به دریافت ۳ تقدیرنامه و ۱۴ انتخاب رسمی گردید.'
                : currentLang === 'fr'
                ? 'Parmi ses succès figurent deux séries lauréates dans la catégorie « Other Exterior » à l’Architecture MasterPrize, ainsi que de multiples mentions d’honneur, sélections officielles et nominations. Aux International Photography Awards 2026, elle a obtenu trois mentions d’honneur et 14 sélections officielles.'
                : currentLang === 'it'
                ? 'Tra i suoi successi spiccano due serie vincitrici nella categoria «Other Exterior» all’Architecture MasterPrize, oltre a numerose menzioni d’onore e selezioni ufficiali. Agli International Photography Awards 2026 ha ricevuto tre menzioni d’onore e 14 selezioni ufficiali.'
                : currentLang === 'tr'
                ? 'Başarıları arasında Architecture MasterPrize’da «Other Exterior» kategorisinde iki kez birincilik kazanan serilerinin yanı sıra çok sayıda Mansiyon ve Resmi Seçki yer almaktadır. International Photography Awards 2026’da üç Mansiyon ve 14 Resmi Seçki kazanmıştır.'
                : 'Her achievements include two winner series in the “Other Exterior” category at the Architecture MasterPrize, alongside multiple Honorable Mentions, shortlist placements, Official Selections, Nominee, and Editor’s Choice selections. At the International Photography Awards 2026, she received three Honorable Mentions and 14 Official Selections.'}
            </p>
            <div className="pt-2">
              <a
                href="#photography-works"
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors inline-flex items-center gap-1 font-mono"
              >
                <span>
                  {currentLang === 'fa'
                    ? 'مشاهده تمامی آثار در بخش عکاسی ←'
                    : currentLang === 'de'
                    ? 'Weitere Details in den Bereichen „Photographer & Art“ und „Photography Works“ ansehen →'
                    : currentLang === 'fr'
                    ? 'Voir tous les détails dans les rubriques « Photographie & Beaux-Arts » →'
                    : currentLang === 'it'
                    ? 'Scopri tutti i dettagli nelle sezioni « Fotografia & Arte » →'
                    : currentLang === 'tr'
                    ? '«Fotoğrafçılık & Güzel Sanatlar» bölümündeki tüm eserleri inceleyin →'
                    : 'Further details can be found in the sections “Photographer & Art” and “Photography Works” →'}
                </span>
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
              : currentLang === 'fr'
              ? 'Championne du Monde de Kickboxing'
              : currentLang === 'it'
              ? 'Campionessa Mondiale di Kickboxing'
              : currentLang === 'tr'
              ? 'Kickboks Dünya Şampiyonu'
              : 'World Champion Kickboxing'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {currentLang === 'de'
              ? 'Während ihrer aktiven Wettkampfkarriere zählte Schahrsad Shahmirzadi zu den erfolgreichsten deutschen Kickboxerinnen. Zu ihren Titeln und Qualifikationen gehören:'
              : currentLang === 'fa'
              ? 'در دوران حرفه‌ای مسابقات ورزشی، شهزاد شاهمیرزادی یکی از موفق‌ترین کیک‌بوکسورهای زن آلمان به شمار می‌رفت. عناوین و افتخارات برجسته او عبارتند از:'
              : currentLang === 'fr'
              ? 'Au cours de sa carrière de compétition, Schahrsad Shahmirzadi comptait parmi les kickboxeuses allemandes les plus victorieuses. Ses titres et qualifications comprennent :'
              : currentLang === 'it'
              ? 'Durante la sua carriera agonistica, Schahrsad Shahmirzadi è stata una delle kickboxer tedesche di maggior successo. I suoi titoli e le sue qualifiche includono:'
              : currentLang === 'tr'
              ? 'Aktif müsabaka kariyeri boyunca Schahrsad Shahmirzadi, Almanya’nın en başarılı kadın kickboksörleri arasında yer aldı. Kazandığı unvan ve derecelerden bazıları:'
              : 'During her competitive career, Schahrsad Shahmirzadi was one of Germany’s most successful female kickboxers. Her titles and qualifications include:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '10-fache Weltmeisterin' : currentLang === 'fa' ? '۱۰ بار قهرمانی جهان' : currentLang === 'fr' ? '10× Championne du Monde' : currentLang === 'it' ? '10× Campionessa Mondiale' : currentLang === 'tr' ? '10× Dünya Şampiyonu' : '10-time World Champion'}
              </div>
              <p className="text-[11px] text-stone-600">
                WKU, ISKA, ICO; {currentLang === 'de' ? 'darunter zwei Profititel der WKU' : currentLang === 'fa' ? 'از جمله دو عنوان حرفه‌ای در سازمان WKU' : currentLang === 'fr' ? 'dont deux titres professionnels WKU' : currentLang === 'it' ? 'inclusi due titoli professionistici WKU' : currentLang === 'tr' ? 'iki WKU profesyonel unvanı dahil' : 'including two professional titles with the WKU'}
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '2-fache Europameisterin' : currentLang === 'fa' ? '۲ بار قهرمانی اروپا' : currentLang === 'fr' ? '2× Championne d’Europe' : currentLang === 'it' ? '2× Campionessa Europea' : currentLang === 'tr' ? '2× Avrupa Şampiyonu' : 'Two-time European Champion'}
              </div>
              <p className="text-[11px] text-stone-600">
                ICO; {currentLang === 'de' ? 'darunter ein Profititel der WKU' : currentLang === 'fa' ? 'از جمله یک عنوان حرفه‌ای در سازمان WKU' : currentLang === 'fr' ? 'dont un titre professionnel WKU' : currentLang === 'it' ? 'incluso un titolo professionistico WKU' : currentLang === 'tr' ? 'bir WKU profesyonel unvanı dahil' : 'including one professional title with the WKU'}
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '3-fache Weltcupsiegerin' : currentLang === 'fa' ? '۳ بار قهرمانی جام جهانی' : currentLang === 'fr' ? '3× Vainqueure de la Coupe du Monde' : currentLang === 'it' ? '3× Vincitrice della Coppa del Mondo' : currentLang === 'tr' ? '3× Dünya Kupası Galibi' : 'Three-time World Cup Winner'}
              </div>
              <p className="text-[11px] text-stone-600">
                WKU, WMAC, IAKSA
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? 'Deutsche Meisterin Pro/Am' : currentLang === 'fa' ? 'قهرمان حرفه‌ای/آماتور آلمان' : currentLang === 'fr' ? 'Championne d’Allemagne Pro/Am' : currentLang === 'it' ? 'Campionessa Tedesca Pro/Am' : currentLang === 'tr' ? 'Almanya Pro/Am Şampiyonu' : 'German Pro/Am Champion'}
              </div>
              <p className="text-[11px] text-stone-600">
                ISKA
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '15-fache Deutsche Meisterin' : currentLang === 'fa' ? '۱۵ بار قهرمان ملی و بین‌المللی آلمان' : currentLang === 'fr' ? '15× Championne d’Allemagne' : currentLang === 'it' ? '15× Campionessa Tedesca' : currentLang === 'tr' ? '15× Almanya Şampiyonu' : '15-time German or Int. German Champion'}
              </div>
              <p className="text-[11px] text-stone-600">
                WAKO, WKA, WKU, ISKA, ICO, IAKSA, WKC
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/80 space-y-1">
              <div className="font-serif font-bold text-sm text-stone-900">
                {currentLang === 'de' ? '3. Dan (Schwarzgurt)' : currentLang === 'fa' ? 'کمربند مشکی دان ۳' : currentLang === 'fr' ? '3e Dan (Ceinture Noire)' : currentLang === 'it' ? '3° Dan (Cintura Nera)' : currentLang === 'tr' ? '3. Dan (Siyah Kuşak)' : 'Third-degree Black Belt (3rd Dan)'}
              </div>
              <p className="text-[11px] text-stone-600">
                {currentLang === 'de' ? 'Eine von wenigen Frauen mit dieser Graduierung' : currentLang === 'fa' ? 'یکی از معدود زنانی که به این درجه عالی ورزشی نائل آمده است' : currentLang === 'fr' ? 'L’une des rares femmes à détenir ce grade d’élite' : currentLang === 'it' ? 'Una delle pochissime donne a conseguire questo grado' : currentLang === 'tr' ? 'Bu prestijli dereceye ulaşan az sayıdaki kadından biri' : 'One of the few women to hold this rank in kickboxing'}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal pt-2">
            {currentLang === 'de'
              ? 'Sie kämpfte überwiegend im Vollkontakt-Kickboxen und K-1 in den Gewichtsklassen zwischen 55 und 60 kg. Ihre sportliche Laufbahn entwickelte sich vollständig in Deutschland, und alle Erfolge erzielte sie für Deutschland.'
              : currentLang === 'fa'
              ? 'او عمدتاً در رشته‌های فول‌کنتاکت کیک‌بوکسینگ و K-1 در رده‌های وزنی بین ۵۵ تا ۶۰ کیلوگرم به مبارزه پرداخت. کارنامه ورزشی او تماماً در آلمان تکوین یافت و او تمامی عناوین پرافتخار خود را با نمایندگی از آلمان به دست آورد.'
              : currentLang === 'fr'
              ? 'Elle a combattu principalement en plein contact et en K-1 dans les catégories de 55 à 60 kg. Toute sa carrière sportive s’est déroulée en Allemagne, et elle a remporté l’intégralité de ses titres sous les couleurs de l’Allemagne.'
              : currentLang === 'it'
              ? 'Ha gareggiato principalmente nel full-contact e nel K-1 nelle categorie di peso tra 55 e 60 kg. La sua carriera sportiva si è sviluppata interamente in Germania, conquistando tutti i suoi successi in rappresentanza della Germania.'
              : currentLang === 'tr'
              ? 'Ağırlıklı olarak 55 ila 60 kg arasındaki sıkletlerde Full-Contact ve K-1 disiplinlerinde dövüştü. Tüm spor kariyeri Almanya’da şekillendi ve kazandığı tüm başarıları Almanya adına elde etti.'
              : 'She competed primarily in full-contact kickboxing and K-1, in weight divisions between 55 and 60 kg. Her sporting career developed entirely in Germany, and she achieved all her successes representing Germany.'}
          </p>

          <div className="pt-1">
            <a
              href="#kickboxen"
              className="text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors inline-flex items-center gap-1 font-mono"
            >
              <span>
                {currentLang === 'fa'
                  ? 'مشاهده تمامی مدال‌ها و بخش کیک‌بوکسینگ ←'
                  : currentLang === 'de'
                  ? 'Ausführliche Details im Abschnitt „Weltmeisterin Kickboxen“ ansehen →'
                  : currentLang === 'fr'
                  ? 'Voir tous les détails dans la section « Championne du Monde de Kickboxing » →'
                  : currentLang === 'it'
                  ? 'Visualizza tutti i dettagli nella sezione « Campionessa Mondiale Kickboxing » →'
                  : currentLang === 'tr'
                  ? '«Kickboks Dünya Şampiyonu» bölümündeki tüm detayları inceleyin →'
                  : 'Further details can be found in the “World Champion Kickboxing” section →'}
              </span>
            </a>
          </div>
        </div>

        {/* 5. Multiple Paths (Vielfältige Wege) */}
        <div className="p-6 sm:p-7 rounded-3xl bg-amber-50/40 border border-amber-200/60 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-mono text-xs uppercase tracking-wider font-bold">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>
              {currentLang === 'fa'
                ? 'مسیرهای چندگانه'
                : currentLang === 'de'
                ? 'Vielfältige Wege'
                : currentLang === 'fr'
                ? 'Parcours Multiples'
                : currentLang === 'it'
                ? 'Percorsi Molteplici'
                : currentLang === 'tr'
                ? 'Çok Yönlü Yolculuk'
                : 'Multiple Paths'}
            </span>
          </div>
          <h4 className="text-lg font-serif font-bold text-stone-900">
            {currentLang === 'fa'
              ? 'پیوند هنر، ورزش، علم و عمل'
              : currentLang === 'de'
              ? 'Multiple Paths'
              : currentLang === 'fr'
              ? 'Synergie de l’art, du sport, de la science et de l’action'
              : currentLang === 'it'
              ? 'Incontro tra arte, sport, scienza e impegno civile'
              : currentLang === 'tr'
              ? 'Sanat, spor, bilim ve toplumsal eylemin buluşması'
              : 'Multiple Paths'}
          </h4>
          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium italic">
            {currentLang === 'de'
              ? 'SchirZan | Schahrsad Shahmirzadi bringt Photographie, Sport, akademisches Studium und berufliche Praxis zusammen und schöpft aus diesen unterschiedlichen Bereichen eine vielschichtige und unverwechselbare Perspektive.'
              : currentLang === 'fa'
              ? 'شیرزن | شهزاد شاهمیرزادی عکاسی، ورزش، تحصیلات دانشگاهی و تجربیات حرفه‌ای را در کنار یکدیگر قرار داده و با بهره‌گیری از این حوزه‌های گوناگون، دیدگاهی گسترده، عمیق و منحصر‌به‌فرد را خلق می‌کند.'
              : currentLang === 'fr'
              ? 'SchirZan | Schahrsad Shahmirzadi réunit la photographie, le sport de haut niveau, les études universitaires et la pratique professionnelle, tirant de ces univers complémentaires une vision artistique d’une rare profondeur.'
              : currentLang === 'it'
              ? 'SchirZan | Schahrsad Shahmirzadi fonde fotografia, sport d’élite, formazione accademica ed esperienza professionale, traendo da questi ambiti complementari una prospettiva ricca e inconfondibile.'
              : currentLang === 'tr'
              ? 'SchirZan | Schahrsad Shahmirzadi; fotoğraf, elit sporculuk, akademik eğitim ve mesleki uzmanlığı bir araya getirerek bu farklı disiplinlerden beslenen derin ve benzersiz bir perspektif ortaya koymaktadır.'
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
            ) : currentLang === 'fr' ? (
              <>
                Après son baccalauréat au prestigieux Evangelisches Gymnasium zum Grauen Kloster à Berlin en 2004, elle a étudié le droit. Parallèlement à sa carrière sportive d'élite en kickboxing, elle est entrée au service de la police de Berlin, où elle a exercé à l'Office central de prévention auprès du Landeskriminalamt (LKA Berlin) en tant que référente pour la lutte contre l'inimitié ciblée envers certains groupes.
              </>
            ) : currentLang === 'it' ? (
              <>
                Dopo aver conseguito la maturità presso lo storico Evangelisches Gymnasium zum Grauen Kloster a Berlino nel 2004, ha intrapreso gli studi giuridici. Parallelamente alla sua carriera sportiva d'élite nel kickboxing, è entrata in servizio nella Polizia di Berlino, operando da ultimo presso l'Ufficio centrale per la prevenzione del Landeskriminalamt (LKA Berlino) come referente per il contrasto all'ostilità mirata contro specifici gruppi sociali.
              </>
            ) : currentLang === 'tr' ? (
              <>
                2004 yılında Berlin'in köklü okulu Evangelisches Gymnasium zum Grauen Kloster'dan Abitur diplomasını aldıktan sonra hukuk eğitimi gördü. Kickbokstaki profesyonel sporculuk kariyeriyle eş zamanlı olarak Berlin Polis Teşkilatı'nda görev aldı ve son olarak Eyalet Kriminal Dairesi (LKA Berlin) bünyesindeki Merkezi Önleme Ofisi'nde gruba yönelik düşmanlıkla mücadele irtibat sorumlusu olarak çalıştı.
              </>
            ) : (
              <>
                Following her graduation from the historic Evangelisches Gymnasium zum Grauen Kloster in Berlin in 2004, she studied law. Alongside her high-performance kickboxing career, she joined the Berlin Police, where she most recently served in the Central Office for Prevention at the State Criminal Police Office (LKA) as a Contact Person for Group-Focused Enmity.
              </>
            )}
          </p>

          {/* Berufliche Tätigkeit & Weiterbildung: Umweltministerium Potsdam, LAWA & Universität Koblenz */}
          <p className="text-sm sm:text-base text-stone-700 font-normal max-w-3xl leading-relaxed">
            {currentLang === 'de' ? (
              <>
                Seit 2024 arbeitet sie im Umweltministerium in Potsdam (MLEUV) mit dem Schwerpunkt Wasserfragen. Zunächst war sie in den Jahren 2024 und 2025 für die Geschäftsstelle der Bund/Länder-Arbeitsgemeinschaft Wasser (LAWA) tätig. Neben ihrer beruflichen Tätigkeit absolviert sie im Fernstudium an der Universität Koblenz (ZFUW) den Master of Science (M.Sc.) in Applied Environmental Sciences. Sie befindet sich derzeit im 5. Fachsemester.
              </>
            ) : currentLang === 'fa' ? (
              <>
                از سال ۲۰۲۴، او در وزارت محیط‌زیست در پوتسدام (MLEUV) با تمرکز بر مسائل آب فعالیت می‌کند. وی در ابتدا در سال‌های ۲۰۲۴ و ۲۰۲۵ در دبیرخانه کارگروه مشترک آب ایالت‌ها و دولت فدرال (LAWA) مشغول به کار بود. هم‌زمان با فعالیت حرفه‌ای، او در قالب دوره آموزش مجازی دانشگاه کوبلنتس (ZFUW) در مقطع کارشناسی ارشد (M.Sc.) علوم محیط‌زیست کاربردی مشغول به تحصیل است و در حال حاضر در پنجمین ترم تحصیلی خود قرار دارد.
              </>
            ) : currentLang === 'fr' ? (
              <>
                Depuis 2024, elle travaille au ministère de l’Environnement à Potsdam (MLEUV), axé sur les questions de l'eau. En parallèle de son activité professionnelle, elle prépare un Master of Science (M.Sc.) en sciences appliquées de l'environnement à l’Université de Coblence (ZFUW) et en est actuellement à son cinquième semestre.
              </>
            ) : currentLang === 'it' ? (
              <>
                Dal 2024 lavora presso il Ministero dell'Ambiente a Potsdam (MLEUV), con particolare attenzione alle risorse idriche. Parallelamente alla sua attività professionale, sta completando un Master of Science (M.Sc.) in Scienze Ambientali Applicate presso l'Università di Coblenza (ZFUW), frequentando attualmente il quinto semestre.
              </>
            ) : currentLang === 'tr' ? (
              <>
                2024'ten bu yana Potsdam Çevre Bakanlığı'nda (MLEUV) su kaynakları odaklı çalışmaktadır. Mesleki kariyerinin yanı sıra Koblenz Üniversitesi'nde (ZFUW) Uygulamalı Çevre Bilimleri alanında Master of Science (M.Sc.) uzaktan eğitimine devam etmekte olup şu anda 5. sömestrindedir.
              </>
            ) : (
              <>
                Alongside her professional work, she is pursuing a Master of Science (M.Sc.) in Applied Environmental Sciences through a distance-learning program at the University of Koblenz (ZFUW). She is currently in her fifth semester.
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
                  ? 'Laufendes Masterstudium (M.Sc.)'
                  : currentLang === 'fa'
                  ? 'تحصیلات جاری کارشناسی ارشد (M.Sc.)'
                  : currentLang === 'fr'
                  ? 'Programme de Master en cours (M.Sc.)'
                  : currentLang === 'it'
                  ? 'Corso di Laurea Magistrale in corso (M.Sc.)'
                  : currentLang === 'tr'
                  ? 'Devam Eden Yüksek Lisans Programı (M.Sc.)'
                  : 'Ongoing Master’s programme (M.Sc.)'}
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

          {/* Mobile View: Clean card layout without horizontal scrolling */}
          <div className="block md:hidden space-y-3.5">
            {ACADEMIC_MILESTONES.map((row, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 p-4 shadow-2xs space-y-3"
              >
                {/* Header: Period & Milestone index */}
                <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
                  <span className="px-2.5 py-0.5 rounded-md font-mono font-bold text-xs bg-amber-100 text-amber-900 border border-amber-300/70">
                    {row.period}
                  </span>
                  <span className="font-mono text-[11px] text-stone-500 font-semibold">
                    0{idx + 1} / 05
                  </span>
                </div>

                {/* Field of study / Ausbildung */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-0.5 font-bold">
                    {currentLang === 'de'
                      ? 'Studiengang / Ausbildung'
                      : currentLang === 'fa'
                        ? 'رشته / دوره آموزشی'
                        : currentLang === 'fr'
                        ? 'Cursus / Formation'
                        : currentLang === 'it'
                        ? 'Corso di Studi / Formazione'
                        : currentLang === 'tr'
                        ? 'Bölüm / Eğitim Alanı'
                        : 'Field of Study / Training'}
                  </span>
                  <h5 className="font-serif font-bold text-base text-stone-900 leading-snug">
                    {getField(row)}
                  </h5>
                </div>

                {/* Institution */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block mb-0.5 font-bold">
                    {currentLang === 'de'
                      ? 'Einrichtung / Institution'
                      : currentLang === 'fa'
                        ? 'موسسه / دانشگاه'
                        : currentLang === 'fr'
                        ? 'Établissement / Institution'
                        : currentLang === 'it'
                        ? 'Istituto / Università'
                        : currentLang === 'tr'
                        ? 'Kurum / Üniversite'
                        : 'Institution'}
                  </span>
                  <p className="text-xs text-stone-700 font-medium">
                    {getInstitution(row)}
                  </p>
                </div>

                {/* Degree / Status */}
                <div className="pt-1">
                  <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-stone-200/70">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900/90 block mb-1 font-bold">
                      {currentLang === 'de'
                        ? 'Abschluss / Stand'
                        : currentLang === 'fa'
                          ? 'مدرک / وضعیت تحصیلی'
                          : currentLang === 'fr'
                          ? 'Diplôme / Statut'
                          : currentLang === 'it'
                          ? 'Titolo / Stato'
                          : currentLang === 'tr'
                          ? 'Mezuniyet / Durum'
                          : 'Degree / Status'}
                    </span>
                    <p className="text-xs text-stone-800 leading-relaxed">
                      {getDegree(row)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet View: Semantic Full Table */}
          <div className="hidden md:block border border-stone-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-50/90 border-b border-stone-200 text-stone-700 font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold whitespace-nowrap min-w-[130px]">
                      {currentLang === 'de'
                        ? 'Zeitraum'
                        : currentLang === 'fa'
                          ? 'دوره زمانی'
                          : currentLang === 'fr'
                          ? 'Période'
                          : currentLang === 'it'
                          ? 'Periodo'
                          : currentLang === 'tr'
                          ? 'Dönem'
                          : 'Period'}
                    </th>
                    <th className="py-3 px-4 font-bold min-w-[180px]">
                      {currentLang === 'de'
                        ? 'Studiengang / Ausbildung'
                        : currentLang === 'fa'
                          ? 'رشته / دوره آموزشی'
                          : currentLang === 'fr'
                          ? 'Cursus / Formation'
                          : currentLang === 'it'
                          ? 'Corso di Studi / Formazione'
                          : currentLang === 'tr'
                          ? 'Bölüm / Eğitim Alanı'
                          : 'Field of Study / Training'}
                    </th>
                    <th className="py-3 px-4 font-bold min-w-[200px]">
                      {currentLang === 'de'
                        ? 'Einrichtung'
                        : currentLang === 'fa'
                          ? 'موسسه / دانشگاه'
                          : currentLang === 'fr'
                          ? 'Établissement'
                          : currentLang === 'it'
                          ? 'Istituto / Università'
                          : currentLang === 'tr'
                          ? 'Kurum / Üniversite'
                          : 'Institution'}
                    </th>
                    <th className="py-3 px-4 font-bold min-w-[220px]">
                      {currentLang === 'de'
                        ? 'Abschluss / Stand'
                        : currentLang === 'fa'
                          ? 'مدرک / وضعیت تحصیلی'
                          : currentLang === 'fr'
                          ? 'Diplôme / Statut'
                          : currentLang === 'it'
                          ? 'Titolo / Stato'
                          : currentLang === 'tr'
                          ? 'Mezuniyet / Durum'
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
                        {getField(row)}
                      </td>
                      <td className="py-3.5 px-4 text-stone-600 align-top">
                        {getInstitution(row)}
                      </td>
                      <td className="py-3.5 px-4 text-stone-700 align-top leading-relaxed">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-stone-100/90 border border-stone-200/70 text-xs font-normal">
                          {getDegree(row)}
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
                ) : currentLang === 'fr' ? (
                  <>
                    Parallèlement à sa carrière professionnelle et académique, <strong className="text-stone-900 font-semibold">SchirZan | Schahrsad Shahmirzadi</strong> s’engage pour la protection de l’environnement, les droits humains et la paix à travers ses propres projets, des initiatives sportives et photographiques et un dialogue constant.
                  </>
                ) : currentLang === 'it' ? (
                  <>
                    Accanto alla sua carriera professionale e accademica, <strong className="text-stone-900 font-semibold">SchirZan | Schahrsad Shahmirzadi</strong> è attivamente impegnata per la tutela dell’ambiente, i diritti umani e la pace attraverso progetti personali, iniziative sportive e fotografiche e il dialogo continuo.
                  </>
                ) : currentLang === 'tr' ? (
                  <>
                    Mesleki ve akademik kariyerinin yanı sıra <strong className="text-stone-900 font-semibold">SchirZan | Schahrsad Shahmirzadi</strong>, kendi projeleri, sportif ve sanatsal girişimleri ile çevre koruma, insan hakları ve barış ideallerine adanmış bir yaşam sürdürmektedir.
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
                    : currentLang === 'fr'
                    ? 'Elle utilise sa voix pour sensibiliser aux défis de société et inspirer un changement positif, incitant chacun à prendre ses responsabilités envers l’environnement, à défendre les droits humains et à vivre ensemble dans la paix et le respect mutuel.'
                    : currentLang === 'it'
                    ? 'Usa la propria voce per attirare l’attenzione sulle sfide della società e favorire un cambiamento positivo, incoraggiando ad assumersi responsabilità per l’ambiente, a difendere i diritti umani e a convivere in pace e rispetto reciproco.'
                    : currentLang === 'tr'
                    ? 'Sesini toplumsal sorunlara dikkat çekmek ve yapıcı bir dönüşüme katkı sunmak için kullanır; bireyleri çevreye karşı sorumluluk almaya, insan haklarını savunmaya, barış ve karşılıklı saygı içinde bir arada yaşamaya teşvik eder.'
                    : 'She uses her voice to raise awareness of societal challenges and contribute to positive change. She hopes to inspire people to take responsibility for the environment, support human rights, and live together in peace and mutual respect.'}
              </p>
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200/80">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  {currentLang === 'fa' ? 'پیام و آرمان اصلی' : 'Leitmotiv & Mission'}
                </span>
                <p className="text-base sm:text-lg font-serif italic text-stone-900 font-medium">
                  {currentLang === 'fa'
                    ? '«برای حفاظت از محیط زیست و صلح»'
                    : currentLang === 'fr'
                    ? '« Pour la protection de l’environnement & la paix »'
                    : currentLang === 'it'
                    ? '«Per la tutela dell’ambiente & la pace»'
                    : currentLang === 'tr'
                    ? '«Çevre Koruma & Barış İçin»'
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
                    alt="SchirZan – Halbmarathons & Marathon Berlin"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

        {/* Cohesive Main Feature: Personal Sporting Projects (Running) & ECCHR Spendenlauf */}
        <div id="spendenlauf-ecchr" className="p-6 sm:p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/90 space-y-6">
          <div className="border-b border-stone-200/80 pb-4 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-red-100 text-red-700 border border-red-200 shrink-0 whitespace-nowrap">
                  {currentLang === 'fa' ? 'پروژه‌های ورزشی و مسابقات خیریه' : currentLang === 'de' ? 'Sportprojekte & Spendenlauf' : 'Personal Sporting Projects (Running)'}
                </span>
                <span className="text-xs font-mono text-stone-500 whitespace-nowrap">ECCHR Spendenlauf</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                {currentLang === 'fa'
                  ? 'نیمه‌ماراتن برلین ۲۰۲۷ – دویدن برای حقوق بشر'
                  : currentLang === 'de'
                  ? 'Berliner Halbmarathon 2027 – Spendenlauf für Menschenrechte'
                  : 'Berlin Half Marathon 2027 – Support the Fundraising Run'}
              </h4>
            </div>

            <a
              href="https://www.ecchr.eu/jetzt-online-spenden/aktion/?tw_e=4C2D8&etitel=schirzan-running-for-human-rights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer shrink-0 whitespace-nowrap"
            >
              <span>{currentLang === 'fa' ? 'حمایت از کمپین آنلاین ECCHR' : currentLang === 'de' ? 'Spendenlauf unterstützen' : 'Support the fundraising run'}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
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
