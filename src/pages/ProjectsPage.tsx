import React, { useState, useMemo } from 'react';
import { ExternalLink, Sparkles, Layers, X, Car, Plane, Compass, Coffee, Gamepad2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { GithubIcon } from '../components/SocialIcons';

export const ProjectsPage: React.FC = () => {
  const { language } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Projects (5)', labelAr: 'جميع المشاريع (5)' },
    { id: 'auto', labelEn: 'Car Showroom', labelAr: 'معرض السيارات 🏎️', icon: Car },
    { id: 'safari', labelEn: 'Safari & Travel', labelAr: 'السياحة والسفاري 🦁', icon: Compass },
    { id: 'aviation', labelEn: 'Aviation', labelAr: 'شركة الطيران ✈️', icon: Plane },
    { id: 'cafe', labelEn: 'Cafe & Coffee', labelAr: 'كافيه بن وحكاية ☕', icon: Coffee },
    { id: 'gaming', labelEn: 'KalOnline Hub', labelAr: 'مجتمع KalOnline 🎮', icon: Gamepad2 },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS;
    if (selectedCategory === 'auto') return PROJECTS.filter(p => p.id === 'car-showroom');
    if (selectedCategory === 'safari') return PROJECTS.filter(p => p.id === 'luxury-safari');
    if (selectedCategory === 'aviation') return PROJECTS.filter(p => p.id === 'private-jet-site');
    if (selectedCategory === 'cafe') return PROJECTS.filter(p => p.id === 'cafe-website');
    if (selectedCategory === 'gaming') return PROJECTS.filter(p => p.id === 'kalonline-project');
    return PROJECTS;
  }, [selectedCategory]);

  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal effect="slide-up">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'معرض المشاريع والأعمال التطبيقية' : 'Featured Portfolio Work'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              {language === 'ar' ? 'أعمال تم بناؤها بشغف ودقة متناهية' : 'Crafted with Precision & Passion'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {language === 'ar'
                ? 'استكشف قائمة المشاريع متضمنة الروابط المباشرة (Live Demos)، مستودعات GitHub، والتفاصيل التقنية.'
                : 'Browse through projects featuring responsive layouts, live demos, and clean source code.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Categories Filter Tabs */}
        <ScrollReveal effect="floating" delay={50}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50'
                  }`}
                >
                  <span>{language === 'ar' ? cat.labelAr : cat.labelEn}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid: Fast immediate rendering with smooth scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} effect="circular" delay={idx * 50}>
              <ProjectCard
                project={project}
                onOpenDetails={(proj) => setSelectedProject(proj)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800">
            <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-500">
              {language === 'ar' ? 'لا توجد مشاريع في هذا القسم حالياً' : 'No projects found in this category'}
            </p>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-rose-500 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">
                {language === 'ar' ? selectedProject.categoryAr : selectedProject.category}
              </span>
              
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {language === 'ar' ? selectedProject.titleAr : selectedProject.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar' ? selectedProject.descriptionAr : selectedProject.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'ar' ? 'التفاصيل المعمارية والتقنية' : 'Architectural & Technical Details'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === 'ar' ? selectedProject.detailsAr : selectedProject.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/30 cursor-pointer"
                >
                  <span>{language === 'ar' ? 'معاينة المشروع المباشرة' : 'Launch Project'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
