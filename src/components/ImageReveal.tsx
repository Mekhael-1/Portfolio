import React, { useState } from 'react';
import { getAssetUrl } from '../utils/assets';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  badge?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  badge,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-900/40 group ${aspectRatio} ${className}`}>
      {/* Skeleton Pulse during image loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
      )}

      {/* Floating Modern Image */}
      <img
        src={getAssetUrl(src)}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-108 group-hover:rotate-0.5 ${
          isLoaded
            ? 'opacity-100 scale-100 blur-0'
            : 'opacity-0 scale-105 blur-md'
        }`}
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

      {/* Optional Badge */}
      {badge && (
        <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md z-10">
          {badge}
        </div>
      )}

      {/* Hover Ripple Light Reflection */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </div>
  );
};
