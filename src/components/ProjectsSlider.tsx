import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, Pause, Play } from 'lucide-react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';
import { ImageReveal } from './ImageReveal';
import { GithubIcon } from './SocialIcons';

interface ProjectsSliderProps {
  projects: Project[];
  onNavigateProjects?: () => void;
}

export const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ projects }) => {
  const { language } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer: smoothly switches every 2 seconds (2000ms) as requested
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  const currentProject = projects[currentIndex] || projects[0];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Featured Big Showcase Card */}
      <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
        
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center relative z-10">
          
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/80 group">
              <ImageReveal
                key={currentProject.id}
                src={currentProject.image}
                alt={currentProject.title}
                aspectRatio="aspect-[16/10]"
                badge={language === 'ar' ? currentProject.categoryAr : currentProject.category}
              />

              {/* Slide Counter Overlay */}
              <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md text-white border border-white/10 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <span className="text-cyan-400">{currentIndex + 1}</span>
                <span className="text-slate-400">/</span>
                <span>{projects.length}</span>
              </div>
            </div>
          </div>

          {/* Project Content & Cleanly Spaced Action Buttons (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  {language === 'ar' ? currentProject.categoryAr : currentProject.category}
                </span>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    <Sparkles className="w-3 h-3" />
                    <span>{language === 'ar' ? 'مشروع معتمد' : 'Verified Work'}</span>
                  </span>

                  {/* Auto-play status icon */}
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-1 rounded-md text-slate-400 hover:text-cyan-500 transition-colors cursor-pointer"
                    title={isPaused ? 'استئناف الحركة التلقائية' : 'إيقاف الحركة مؤقتاً'}
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5 text-cyan-500" /> : <Pause className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug mb-3">
                {language === 'ar' ? currentProject.titleAr : currentProject.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {language === 'ar' ? currentProject.descriptionAr : currentProject.description}
              </p>

              {/* Architecture & Tech Specs */}
              <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                  {language === 'ar' ? 'التفاصيل والتقنيات:' : 'Tech Architecture:'}
                </span>
                {language === 'ar' ? currentProject.detailsAr : currentProject.details}
              </div>

              {/* Metrics Highlights */}
              {currentProject.metrics && (
                <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-500/20 mb-4 text-center">
                  {currentProject.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                {currentProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: Distinct Action Buttons (Well-spaced and never sticky) */}
            <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-4">
              
              {/* Separate Row: Live Demo button & GitHub repository button with comfortable gap */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>{language === 'ar' ? 'معاينة حية للمشروع' : 'Live Demo'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-cyan-500 hover:text-cyan-500 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{language === 'ar' ? 'مستودع الكود (GitHub)' : 'Source Code'}</span>
                </a>
              </div>

              {/* Slider Navigation Row (Previous / Dots / Next) */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-500 transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="Previous project"
                  title={language === 'ar' ? 'المشروع السابق' : 'Previous Project'}
                >
                  {language === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>

                {/* Progress Dots */}
                <div className="flex items-center gap-2">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === currentIndex
                          ? 'w-7 bg-cyan-500 shadow-md shadow-cyan-500/50'
                          : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-cyan-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-500 transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="Next project"
                  title={language === 'ar' ? 'المشروع التالي' : 'Next Project'}
                >
                  {language === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
