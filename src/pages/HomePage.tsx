import React from 'react';
import { ArrowRight, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PROJECTS } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';
import { CyberHologramAvatar } from '../components/CyberHologramAvatar';
import { ProjectsSlider } from '../components/ProjectsSlider';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { language } = useTheme();

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
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
                {language === 'ar' ? (
                  <>
                    أهلاً بك، أنا <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">ميخائيل نبيل</span>
                    <br />
                    <span className="text-2xl sm:text-4xl font-bold text-slate-700 dark:text-slate-300 mt-2 block">
                      مطور واجهات أمامية وتجارب رقمية متقدمة
                    </span>
                  </>
                ) : (
                  <>
                    Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Mekhael Nabil</span>
                    <br />
                    <span className="text-2xl sm:text-4xl font-bold text-slate-700 dark:text-slate-300 mt-2 block">
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
      <section className="py-12 bg-slate-100/60 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal effect="floating" delay={100}>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
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
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
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
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
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
