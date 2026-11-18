import React, { useState } from 'react';
import { Cpu, CheckCircle2, Sparkles, Layers, Code, Zap, Smartphone, Globe, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ScrollReveal } from '../components/ScrollReveal';

export const SkillsPage: React.FC = () => {
  const { language } = useTheme();
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal effect="slide-up">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'المهارات والتقنيات' : 'Technical Proficiency'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              {language === 'ar' ? 'أدوات وتقنيات العصر الرقمي' : 'Modern Frontend Tech Stack'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {language === 'ar'
                ? 'مجموعة متكاملة من التقنيات والمكتبات الحديثة التي أعتمد عليها لبناء واجهات ويب سريعة، مستقرة وتفاعلية.'
                : 'A carefully curated technology stack honed to craft fast, scalable, and responsive web products.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Categories Tab Selector */}
        <ScrollReveal effect="floating" delay={150}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {SKILL_CATEGORIES.map((category, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50'
                  }`}
                >
                  {language === 'ar' ? category.titleAr : category.title}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
            <ScrollReveal key={skill.name} effect="circular" delay={idx * 100}>
              <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-inner"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        color: skill.color,
                        border: `1px solid ${skill.color}35`,
                      }}
                    >
                      <Code className="w-6 h-6" />
                    </div>

                    <div className="text-right rtl:text-left">
                      <span className="text-base font-extrabold text-slate-900 dark:text-white">
                        {skill.level}%
                      </span>
                      <span className="block text-[10px] text-slate-500 uppercase tracking-wider">
                        {language === 'ar' ? 'مستوى الإتقان' : 'Proficiency'}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Visual Progress Bar */}
                <div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}80`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Visual Skills Showcase: Key Strengths */}
        <div className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {language === 'ar' ? 'معايير الجودة التي ألتزم بها' : 'Quality Standards I Enforce'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal effect="floating" delay={100}>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-3">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Mobile First</h4>
                <p className="text-xs text-slate-500">
                  {language === 'ar' ? 'تصميم يبدأ من أصغر شاشة هاتف وصولاً لأكبر الشاشات' : 'Flawless phone & tablet responsiveness'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="floating" delay={200}>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Instant Speed</h4>
                <p className="text-xs text-slate-500">
                  {language === 'ar' ? 'سرعة تحميل وتجاوب فائق بدون أي تأخير' : 'Optimized assets & sub-second loading'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="floating" delay={300}>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Cross Browser</h4>
                <p className="text-xs text-slate-500">
                  {language === 'ar' ? 'توافق تام مع Chrome و Safari و Firefox و Edge' : 'Consistent layout across all browsers'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="floating" delay={400}>
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-center">
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-3">
                  <Terminal className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Clean Architecture</h4>
                <p className="text-xs text-slate-500">
                  {language === 'ar' ? 'كود منظم بقواعد TypeScript الصارمة' : 'Modular scalable code that teams love'}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
