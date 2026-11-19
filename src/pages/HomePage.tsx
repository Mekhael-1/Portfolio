import React, { useState } from 'react';
import { ArrowRight, Zap, Sparkles, ShieldCheck, User, Terminal, Laptop, Star, Award, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';
import { PROJECTS, INITIAL_REVIEWS } from '../data/portfolioData';
import { Review } from '../types';
import { ScrollReveal } from '../components/ScrollReveal';
import { CyberHologramAvatar } from '../components/CyberHologramAvatar';
import { ProjectsSlider } from '../components/ProjectsSlider';
import { getAssetUrl } from '../utils/assets';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { language } = useTheme();

  // Testimonials / Reviews state
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [rating, setRating] = useState<number>(5);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalReviews = reviews.length;
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || (language === 'ar' ? 'عميل / زائر' : 'Visitor'),
      rating,
      comment: comment.trim(),
      date: language === 'ar' ? 'الآن' : 'Just now',
      avatar: name.trim().slice(0, 2).toUpperCase()
    };

    setReviews([newRev, ...reviews]);
    setName('');
    setRole('');
    setComment('');
    setIsSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    setTimeout(() => setIsSubmitted(false), 4500);
  };

  const highlights = [
    {
      icon: Terminal,
      titleEn: 'Clean Code Advocate',
      titleAr: 'عاشق للكود النظيف',
      descEn: 'Writing clean, declarative, and maintainable TypeScript & React components that team members love reading.',
      descAr: 'كتابة كود معياري، نظيف وسهل الصيانة والتطوير باستخدام React و TypeScript مع توثيق واضح وهيكلية مدروسة.'
    },
    {
      icon: Sparkles,
      titleEn: 'Creative UI / UX',
      titleAr: 'إبداع في الواجهات والتجربة',
      descEn: 'Bridging design and code to produce interfaces that are visually captivating and ergonomically delightful.',
      descAr: 'الربط التام بين جماليات التصميم ودقة الكود لابتكار واجهات مستخدم ممتعة وسهلة التصفح تجذب الزوار.'
    },
    {
      icon: Laptop,
      titleEn: 'Continuous Learner',
      titleAr: 'شغف التعلم والتطوير المستمر',
      descEn: 'Constantly testing bleeding-edge web APIs, CSS capabilities, and modern bundlers to refine development velocity.',
      descAr: 'مواكبة أحدث تقنيات الويب، أدوات الحزم السريعة، وأفضل ممارسات تطوير الواجهات الأمامية باستمرار.'
    }
  ];

  const milestones = [
    {
      year: '2026',
      titleEn: 'Advanced Web Applications',
      titleAr: 'تطبيقات ومشاريع ويب متقدمة',
      descEn: 'Crafting complex luxury portfolios, automotive dealership platforms, specialty cafe experiences, and gaming server hubs.',
      descAr: 'تطوير منصات ومعارض إلكترونية تفاعلية، ومواقع طيران خاص وسيارات وكافيهات ومجتمعات ألعاب متطورة.'
    },
    {
      year: '2025',
      titleEn: 'React & Modern Frontend Mastery',
      titleAr: 'إتقان منظومة React و TypeScript',
      descEn: 'Specializing in reactive component architecture, state machines, Tailwind design tokens, and smooth scroll animations.',
      descAr: 'التخصص في بناء الواجهات التفاعلية بـ React، إتقان Tailwind CSS، وتطبيق حركات التمرير المتقدمة.'
    },
    {
      year: '2024',
      titleEn: 'Frontend Foundations & Standards',
      titleAr: 'تأسيس متين في الواجهات الأمامية',
      descEn: 'Deep dive into semantic HTML5, CSS Grid/Flexbox layouts, responsive mobile-first paradigms, and ES6+ JavaScript.',
      descAr: 'بناء أساس قوي في معايير HTML5 الدلالية، تنسيقات CSS الاحترافية، والتجاوب مع جميع مقاسات الهواتف.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 pb-6 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Status Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>
                {language === 'ar'
                  ? 'متاح لتطوير مشاريع ويب استثنائية وعصرية'
                  : 'Available for high-impact web development'}
              </span>
            </div>
          </div>

          {/* Hero Grid: Cyber Hologram Avatar on the left + Text Content on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* 3D Cyber Hologram Avatar (Interactive Real-Time Mouse Tracking) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1 rtl:lg:order-2">
              <CyberHologramAvatar />
            </div>

            {/* Headline and Bio Text Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left rtl:lg:text-right order-2 lg:order-2 rtl:lg:order-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2]">
                {language === 'ar' ? (
                  <>
                    <span className="cosmic-gradient-text">
                      أهلاً بك، أنا ميخائيل نبيل
                    </span>
                    <br />
                    <span className="cosmic-subtitle-text text-xl sm:text-3xl font-bold mt-2.5">
                      مطور واجهات أمامية وتجارب رقمية متقدمة
                    </span>
                  </>
                ) : (
                  <>
                    <span className="cosmic-gradient-text">
                      Hi, I'm Mekhael Nabil
                    </span>
                    <br />
                    <span className="cosmic-subtitle-text text-xl sm:text-3xl font-bold mt-2.5">
                      Front-End Developer & UI/UX Craftsman
                    </span>
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {language === 'ar'
                  ? 'أقوم بإنشاء مواقع وتطبيقات ويب فائقة السرعة، متجاوبة 100% مع جميع الشاشات، مع أنيميشن سلس وتفاعل ثلاثي الأبعاد هولوغرامي يتتبع حركة مؤشر الماوس بدقة حقيقية.'
                  : 'Crafting pixel-perfect, scalable web applications with React, TypeScript, and modern styling with real-time mouse tracking 3D interactions.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-3.5 pt-1">
                <button
                  onClick={() => onNavigate('projects')}
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
                >
                  <span>{language === 'ar' ? 'استعراض كل المشاريع' : 'Explore All Projects'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-xl font-bold text-sm border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{language === 'ar' ? 'تواصل معي مباشرة' : 'Get in Touch'}</span>
                </button>
              </div>

              {/* Quick Metrics */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 text-center lg:text-left rtl:lg:text-right">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-500">100%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {language === 'ar' ? 'متجاوب تماماً' : 'Responsive'}
                  </div>
                </div>
                <div className="border-x border-slate-200 dark:border-slate-800 px-2">
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-500">60 FPS</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {language === 'ar' ? 'أنيميشن ناعم' : 'Smooth Flow'}
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-500">React 19</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {language === 'ar' ? 'TypeScript & Tailwind' : 'Modern Stack'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight Section with Big Auto-Play Carousel Card */}
      <section className="relative pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1">
                {language === 'ar' ? 'معرض الأعمال الحقيقية' : 'Featured Real Projects'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {language === 'ar' ? 'مشاريع عملية متطورة ومصقولة' : 'Engineered for Performance & Scale'}
              </h2>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 font-bold text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 group cursor-pointer"
            >
              <span>{language === 'ar' ? 'عرض تفاصيل كل المشاريع' : 'View all projects'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Big Horizontal Auto-Play Carousel Card */}
          <ScrollReveal effect="circular" delay={100}>
            <ProjectsSlider projects={PROJECTS} onNavigateProjects={() => onNavigate('projects')} />
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights: Performance & Quality Standards */}
      <section className="py-12 bg-slate-100/60 dark:bg-black/60 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal effect="floating" delay={100}>
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {language === 'ar' ? 'سرعة فائقة وخفة في التصفح' : 'Blazing Fast Speed'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === 'ar'
                      ? 'مبني وفق أعلى معايير Lighthouse مع تحميل كسول للصور وضغط متطور للملفات.'
                      : 'Built with tree-shaking, responsive assets, and zero layout shift for instant render.'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="floating" delay={200}>
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {language === 'ar' ? 'كشف دائري وأنيميشن احترافي' : 'Circular Reveal Masks'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === 'ar'
                      ? 'العناصر تظهر بحركات دائرية انسيابية مع الاسكرول مع روبوت ثلاثي الأبعاد تفاعلي.'
                      : 'Circular lens reveal masks expanding smoothly as the user scrolls through the page.'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="floating" delay={300}>
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {language === 'ar' ? 'متجاوب تماماً مع جميع الشاشات' : '100% Fully Responsive'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === 'ar'
                      ? 'تصميم مثالي يبدأ من أصغر شاشات الهواتف المحمولة وصولاً للشاشات الكبيرة والمكتبية.'
                      : 'Flawless experience across mobile phones, foldables, tablets, and ultrawide screens.'}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 👤 FULL ABOUT ME SECTION EMBEDDED IN HOME PAGE           */}
      {/* ======================================================== */}
      <section id="about-section" className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollReveal effect="slide-up">
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
                <User className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'نبذة عني وشغفي' : 'About My Journey'}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? (
                  <span className="cosmic-gradient-text">ميخائيل نبيل — مطور واجهات أمامية</span>
                ) : (
                  <span className="cosmic-gradient-text">Mekhael Nabil — Front-End Developer</span>
                )}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'أؤمن بأن واجهة الموقع ليست مجرد كود، بل هي الانطباع الأول وأهم صلة وصل بين المشروع ومستخدميه.'
                  : 'Driven by passion, dedication, and attention to detail to construct web experiences that leave a memorable impression.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Story 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            
            {/* Visual Photo Card */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1 rtl:lg:order-2">
              <ScrollReveal effect="circular">
                <div className="relative group w-full max-w-[320px] sm:max-w-[360px]">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-white/10 shadow-2xl bg-zinc-950 aspect-[4/5]">
                    <img
                      src={getAssetUrl("/images/FB_IMG_1779625006967.jpg")}
                      alt="Mekhael Nabil Coding"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-semibold text-cyan-400">Front-End Developer</p>
                      <p className="text-sm font-bold">Mekhael Nabil</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Bio & Philosophy Text */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-2 rtl:lg:order-1 text-center lg:text-left rtl:lg:text-right">
              <ScrollReveal effect="floating" delay={150}>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {language === 'ar' ? 'من هو ميخائيل نبيل؟' : 'Who is Mekhael Nabil?'}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {language === 'ar'
                    ? 'أنا مطور واجهات أمامية متخصص في تحويل متطلبات وتصميمات الويب إلى واقع رقمي متفاعل. أعمل بشغف كبير مع أحدث أدوات الويب مثل React و TypeScript و Tailwind CSS و Framer Motion لتقديم مواقع فائقة السرعة ومتوافقة مع المعايير العالمية.'
                    : 'I am a dedicated Front-End Developer obsessed with turning UI concepts into intuitive, accessible, and ultra-smooth digital products. With solid hands-on experience in React, TypeScript, and modern styling libraries, I bring precision and aesthetic elegance to every project.'}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {language === 'ar'
                    ? 'قمت بتنفيذ مشاريع واقعية متكاملة تشمل معارض السيارات، كافيه ومحمصة القهوة، منصات رحلات السفاري الفاخرة، مجتمعات الألعاب، ومواقع الطيران الخاص، مما منحني فهماً عميقاً لاحتياجات العملاء وتحديات تجربة المستخدم عبر الشاشات المختلفة.'
                    : 'Having developed high-tier platforms ranging from automotive dealership showcases to specialty cafes, safari travel portals, gaming servers, and private aviation, I focus heavily on performance metrics and refined micro-interactions.'}
                </p>

                {/* Status Badges */}
                <div className="pt-2 flex flex-wrap justify-center lg:justify-start rtl:lg:justify-start gap-3">
                  <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {language === 'ar' ? '📍 متاح للعمل عن بعد وحول العالم' : '📍 Remote / Global Available'}
                  </span>
                  <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    {language === 'ar' ? '⚡ التزام تام بالمواعيد والجودة' : '⚡ Timely & Pixel-Perfect'}
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Highlights 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <ScrollReveal key={idx} effect="floating" delay={idx * 120}>
                  <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950/80 p-6 space-y-3 hover:border-cyan-500/40 transition-colors shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {language === 'ar' ? h.titleAr : h.titleEn}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {language === 'ar' ? h.descAr : h.descEn}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Timeline Milestones */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {language === 'ar' ? 'المسار والتطور المهني' : 'Career Progression'}
              </h3>
            </div>

            <div className="space-y-4">
              {milestones.map((m, idx) => (
                <ScrollReveal key={idx} effect="slide-up" delay={idx * 100}>
                  <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold flex items-center justify-center text-xs shrink-0">
                      {m.year}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                        {language === 'ar' ? m.titleAr : m.titleEn}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {language === 'ar' ? m.descAr : m.descEn}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ⭐ FULL TESTIMONIALS & REVIEWS SECTION IN HOME PAGE      */}
      {/* ======================================================== */}
      <section id="reviews-section" className="relative py-12 sm:py-16 bg-slate-100/50 dark:bg-black/80 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <ScrollReveal effect="slide-up">
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'التقييمات وآراء العملاء' : 'Testimonials & Ratings'}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? (
                  <span className="cosmic-gradient-text">انطباعات الزوار والعملاء</span>
                ) : (
                  <span className="cosmic-gradient-text">Client Feedback & Impressions</span>
                )}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                {language === 'ar'
                  ? 'شاركنا تقييمك الفوري لتجربة تصفح الموقع أو اقرأ انطباعات العملاء الذين تعاونت معهم.'
                  : 'Leave your thoughts or explore verified feedback from clients and visitors worldwide.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Live Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <ScrollReveal effect="floating" delay={100}>
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-white/10 text-center shadow-sm">
                <div className="text-4xl font-extrabold text-cyan-400 mb-1">1,480+</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                  {language === 'ar' ? 'زيارات وتفاعل حقيقي' : 'Live Portfolio Visits'}
                </div>
                <div className="text-xs text-slate-500">
                  {language === 'ar' ? 'تفاعل فوري مع الواجهات' : 'Active visitor sessions'}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="floating" delay={200}>
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-white/10 text-center shadow-sm">
                <div className="text-4xl font-extrabold text-amber-400 mb-1 flex items-center justify-center gap-1">
                  <span>{avgRating}</span>
                  <span className="text-lg text-slate-400">/ 5.0</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-500">
                  {language === 'ar' ? 'متوسط تقييم الرضا' : 'Average visitor rating'}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="floating" delay={300}>
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-white/10 text-center shadow-sm">
                <div className="text-4xl font-extrabold text-emerald-400 mb-1">100%</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                  {language === 'ar' ? 'نسبة رضا العملاء' : 'Client Satisfaction'}
                </div>
                <div className="text-xs text-slate-500">
                  {language === 'ar' ? 'بناءً على المشاريع المنجزة' : 'Based on real projects'}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Testimonials Grid & Add Review Form Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Reviews Grid (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-xl">
                  {language === 'ar' ? 'أحدث آراء العملاء' : 'Recent Client Reviews'}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20">
                  {totalReviews} {language === 'ar' ? 'تقييمات' : 'reviews'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reviews.map((rev) => (
                  <ScrollReveal key={rev.id} effect="circular">
                    <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950/80 border border-slate-200 dark:border-white/10 space-y-3 shadow-sm hover:border-cyan-500/40 transition-all flex flex-col justify-between h-full">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                              {rev.avatar || rev.name.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                                {rev.name}
                              </h4>
                              <span className="text-[10px] text-slate-400 block">{rev.role}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                          "{rev.comment}"
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-white/5 text-[10px] text-slate-500 flex items-center justify-between">
                        <span>{rev.date}</span>
                        <span className="text-cyan-400">Verified Review ✓</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Submit Your Review Interactive Form (5 cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal effect="floating" delay={150}>
                <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 shadow-xl space-y-5">
                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                      {language === 'ar' ? 'أضف تقييمك ورأيك' : 'Submit Your Rating'}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {language === 'ar' ? 'رأيك يظهر فوراً في القائمة أعلاه' : 'Your feedback appears immediately'}
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 mx-auto" />
                      <p className="text-sm font-bold">
                        {language === 'ar' ? 'شكراً جزيلاً لتقييمك الرائع!' : 'Thank you for your feedback!'}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      {/* Rating Stars Selection */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          {language === 'ar' ? 'اختر التقييم:' : 'Your Rating:'}
                        </label>
                        <div className="flex items-center gap-1.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setRating(star)}
                              className="p-1 hover:scale-110 transition-transform cursor-pointer"
                            >
                              <Star
                                className={`w-6 h-6 ${
                                  star <= rating
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-slate-300 dark:text-slate-700'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {language === 'ar' ? 'الاسم الكامل:' : 'Full Name:'}
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={language === 'ar' ? 'مثال: أحمد علي' : 'e.g. Alex Morgan'}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-black text-slate-900 dark:text-white text-xs focus:outline-none focus:border-cyan-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {language === 'ar' ? 'المسمى الوظيفي أو الشركة:' : 'Role or Company:'}
                        </label>
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          placeholder={language === 'ar' ? 'مثال: مؤسس شركة / مصمم' : 'e.g. Founder / UI Designer'}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-black text-slate-900 dark:text-white text-xs focus:outline-none focus:border-cyan-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {language === 'ar' ? 'رأيك وتعليقك:' : 'Your Feedback:'}
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder={language === 'ar' ? 'اكتب انطباعك عن العمل أو التجربة...' : 'Write your review here...'}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-black text-slate-900 dark:text-white text-xs focus:outline-none focus:border-cyan-500 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{language === 'ar' ? 'إرسال التقييم الآن' : 'Publish Review'}</span>
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal effect="zoom" delay={100}>
            <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white text-center shadow-2xl">
              <div className="relative z-10 space-y-3.5 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  {language === 'ar'
                    ? 'هل لديك فكرة أو مشروع ترغب في تنفيذه بجودة استثنائية؟'
                    : 'Ready to build something extraordinary together?'}
                </h2>
                <p className="text-cyan-100 text-xs sm:text-sm leading-relaxed">
                  {language === 'ar'
                    ? 'سواء كنت بحاجة إلى موقع لمعرض سيارات، موقع سفاري، أو شركة طيران، أنا هنا لتنفيذه بأعلى المعايير.'
                    : "Let's collaborate to craft high-performance digital products that captivate your audience and scale your business."}
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-7 py-3 rounded-xl font-bold text-sm bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-lg hover:scale-105 cursor-pointer"
                  >
                    {language === 'ar' ? 'تواصل معي الآن' : 'Start a Conversation'}
                  </button>
                  <button
                    onClick={() => onNavigate('projects')}
                    className="px-7 py-3 rounded-xl font-bold text-sm bg-cyan-700/60 hover:bg-cyan-700 text-white border border-white/20 transition-all cursor-pointer"
                  >
                    {language === 'ar' ? 'استعراض المشاريع' : 'Browse Projects'}
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
