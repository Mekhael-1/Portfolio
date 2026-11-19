import React, { useMemo } from 'react';

interface StarfieldBackgroundProps {
  starCount?: number;
}

export const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({ starCount = 85 }) => {
  // Generate deterministic stars
  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => {
      // Pseudo-random coordinates and timings based on index
      const top = ((i * 37 + 13) % 100);
      const left = ((i * 59 + 29) % 100);
      const size = (i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5);
      const duration = 2.5 + ((i % 5) * 1.2);
      const delay = (i % 7) * 0.7;
      const opacity = 0.3 + ((i % 5) * 0.15);
      const isGold = i % 8 === 0;
      const isCyan = i % 6 === 0;

      return {
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        size: `${size}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        opacity,
        color: isGold ? '#fbbf24' : isCyan ? '#38bdf8' : '#ffffff',
      };
    });
  }, [starCount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Space Black gradient (dark mode only) */}
      <div className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(ellipse_at_top,_#0b0d14_0%,_#050608_50%,_#000000_100%)] transition-colors duration-500" />

      {/* Cosmic Nebula Glows in dark mode */}
      <div className="hidden dark:block absolute -top-40 left-1/4 w-[35rem] h-[35rem] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden dark:block absolute top-1/2 -right-32 w-[32rem] h-[32rem] bg-purple-950/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="hidden dark:block absolute -bottom-32 left-1/3 w-[30rem] h-[30rem] bg-cyan-950/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Twinkling Starfield visible in Dark Mode */}
      <div className="hidden dark:block absolute inset-0">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full animate-twinkle pointer-events-none"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              boxShadow: `0 0 6px ${star.color}`,
              animationDuration: star.duration,
              animationDelay: star.delay,
              opacity: star.opacity,
            }}
          />
        ))}

        {/* Shooting Stars (Occasional cosmic streak) */}
        <div className="absolute top-12 left-1/4 w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rotate-[-25deg] opacity-0 animate-shooting-star" />
        <div className="absolute top-1/3 right-1/4 w-36 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent rotate-[-35deg] opacity-0 animate-shooting-star-delayed" />
      </div>

      {/* Light Mode subtle soft ambient circles */}
      <div className="dark:hidden absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[140px]" />
      </div>
    </div>
  );
};
