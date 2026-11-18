import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 overflow-hidden animate-pulse">
      <div className="w-full aspect-video rounded-xl bg-slate-200 dark:bg-slate-800 mb-4" />
      <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-md mb-3" />
      <div className="space-y-2 mb-4">
        <div className="h-3.5 w-full bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="h-3.5 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
      </div>
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-full" />
        <div className="h-6 w-14 bg-slate-200 dark:bg-slate-800 rounded-full" />
      </div>
      <div className="flex gap-3">
        <div className="h-9 flex-1 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        <div className="h-9 w-24 bg-slate-200 dark:bg-slate-800 rounded-lg" />
      </div>
    </div>
  );
};
