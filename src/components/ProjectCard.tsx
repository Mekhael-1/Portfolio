import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';
import { ImageReveal } from './ImageReveal';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { language } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 backdrop-blur-sm p-4 sm:p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/40 flex flex-col justify-between"
    >
      {/* Visual Image with Circular / Floating Reveal */}
      <div>
        <div className="relative mb-5 overflow-hidden rounded-xl">
          <ImageReveal
            src={project.image}
            alt={project.title}
            aspectRatio="aspect-[16/10]"
            badge={language === 'ar' ? project.categoryAr : project.category}
          />

          {/* Quick Hover Overlay Button */}
          <div
            className={`absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-all hover:scale-105"
            >
              <span>{language === 'ar' ? 'معاينة حية' : 'Live Demo'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 border border-slate-700 hover:bg-slate-700 transition-all hover:scale-105"
            >
              <span>GitHub</span>
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Title & Category */}
        <div className="mb-2.5">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              {language === 'ar' ? project.categoryAr : project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Sparkles className="w-2.5 h-2.5" />
                {language === 'ar' ? 'مميز' : 'Featured'}
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
            {language === 'ar' ? project.titleAr : project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {language === 'ar' ? project.descriptionAr : project.description}
        </p>

        {/* Metrics Highlights if any */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800 mb-4 text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">{m.value}</div>
                <div className="text-[10px] text-slate-500">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold text-xs hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all"
        >
          <span>{language === 'ar' ? 'عرض حي للمشروع' : 'Launch Demo'}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {onOpenDetails ? (
          <button
            onClick={() => onOpenDetails(project)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 transition-colors"
            title={language === 'ar' ? 'تفاصيل أكثر' : 'More Details'}
          >
            <Layers className="w-4 h-4" />
          </button>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 transition-colors"
            title="GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
