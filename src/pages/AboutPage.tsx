import React from 'react';
import { User, Terminal, Sparkles, Laptop, Award, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutPage: React.FC = () => {
  const { language } = useTheme();

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
      descEn: 'Crafting complex luxury portfolios, automotive dealership platforms, and aviation charters.',
      descAr: 'تطوير منصات ومعارض إلكترونية تفاعلية، ومواقع طيران خاص وسيارات وسفاري متطورة.'
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
    <div className="pt-24 sm:pt-32 pb-24 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal effect="slide-up">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <User className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'نبذة عني وشغفي' : 'About My Journey'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              {language === 'ar' ? 'ميخائيل نبيل — مطور واجهات أمامية' : 'Mekhael Nabil — Front-End Developer'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'أؤمن بأن واجهة الموقع ليست مجرد كود، بل هي الانطباع الأول وأهم صلة وصل بين المشروع ومستخدميه.'
                : 'Driven by passion, dedication, and attention to detail to construct web experiences that leave a memorable impression.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Story Section: Perfectly Aligned 2 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left Column in RTL / Visual Card */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-1 rtl:lg:order-2">
            <ScrollReveal effect="circular">
              <div className="relative group w-full max-w-[320px] sm:max-w-[360px]">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900 aspect-[4/5]">
                  <img
                    src="/images/FB_IMG_1779625006967.jpg"
                    alt="Mekhael Nabil Coding"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-cyan-400">Front-End Developer</p>
                    <p className="text-sm font-bold">Mekhael Nabil</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column in RTL / Bio & Experience Text */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-2 rtl:lg:order-1 text-center lg:text-left rtl:lg:text-right">
            <ScrollReveal effect="floating" delay={150}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {language === 'ar' ? 'من هو ميخائيل نبيل؟' : 'Who is Mekhael Nabil?'}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {language === 'ar'
                  ? 'أنا مطور واجهات أمامية متخصص في تحويل متطلبات وتصميمات الويب إلى واقع رقمي متفاعل. أعمل بشغف كبير مع أحدث أدوات الويب مثل React و TypeScript و Tailwind CSS و Framer Motion لتقديم مواقع فائقة السرعة ومتوافقة مع المعايير العالمية.'
                  : 'I am a dedicated Front-End Developer obsessed with turning UI concepts into intuitive, accessible, and ultra-smooth digital products. With solid hands-on experience in React, TypeScript, and modern styling libraries, I bring precision and aesthetic elegance to every project.'}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {language === 'ar'
                  ? 'قمت بتنفيذ مشاريع واقعية متكاملة تشمل معارض السيارات، منصات رحلات السفاري الفاخرة، ومواقع الطيران الخاص، مما منحني فهماً عميقاً لاحتياجات العملاء وتحديات تجربة المستخدم عبر الشاشات المختلفة.'
                  : 'Having developed high-tier platforms ranging from automotive dealership showcases to safari travel portals and private aviation services, I focus heavily on performance metrics, responsiveness, and refined micro-interactions.'}
              </p>

              {/* Status Badges */}
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start rtl:lg:justify-start gap-3">
                <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  {language === 'ar' ? '📍 متاح للعمل عن بعد وحول العالم' : '📍 Remote / Global Available'}
                </span>
                <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {language === 'ar' ? '⚡ التزام تام بالمواعيد والجودة' : '⚡ Timely & Pixel-Perfect'}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <ScrollReveal key={idx} effect="floating" delay={idx * 120}>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 space-y-3 hover:border-cyan-500/40 transition-colors shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {language === 'ar' ? h.titleAr : h.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === 'ar' ? h.descAr : h.descEn}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Milestones Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'ar' ? 'المسار والتطور المهني' : 'Career Progression'}
            </h2>
          </div>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <ScrollReveal key={idx} effect="slide-up" delay={idx * 100}>
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 font-bold flex items-center justify-center text-xs shrink-0">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {language === 'ar' ? m.titleAr : m.titleEn}
                    </h3>
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
    </div>
  );
};
