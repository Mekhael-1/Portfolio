import React, { useEffect, useRef, useState } from 'react';

interface NeonEnergyCoreProps {
  className?: string;
}

export const NeonEnergyCore: React.FC<NeonEnergyCoreProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rotX: 0, rotY: 0, depthZ: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const dist = Math.hypot(deltaX, deltaY);

      // Max magnetic translation
      const maxTranslate = 14;
      const angle = Math.atan2(deltaY, deltaX);
      const intensity = Math.min(dist / 400, 1);
      const x = Math.cos(angle) * intensity * maxTranslate;
      const y = Math.sin(angle) * intensity * maxTranslate;

      // 3D rotations for holographic orbital rings
      const rotY = Math.max(-25, Math.min(25, (deltaX / window.innerWidth) * 50));
      const rotX = Math.max(-25, Math.min(25, -(deltaY / window.innerHeight) * 50));

      setMousePos({ x, y, rotX, rotY, depthZ: intensity * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative select-none flex flex-col items-center justify-center cursor-pointer py-4 w-full max-w-[380px] sm:max-w-[420px] mx-auto ${className}`}
      style={{ perspective: '1200px' }}
      title="كرة طاقة النيون التفاعلية ثلاثية الأبعاد ⚡"
    >
      {/* Dynamic Floating Status Pill */}
      <div className="mb-4 z-30 transition-transform duration-300">
        <div className="px-4 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/90 text-cyan-300 border border-cyan-500/30 shadow-xl backdrop-blur-md text-xs font-semibold flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>AI Interactive Neural Core &bull; تتبع مباشر 3D</span>
        </div>
      </div>

      {/* Main 3D Sphere & Orbital Holographic System */}
      <div
        className="w-64 h-64 sm:w-72 sm:h-72 relative flex items-center justify-center transition-transform duration-100 ease-out"
        style={{
          transform: `rotateX(${mousePos.rotX}deg) rotateY(${mousePos.rotY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft Background Neon Glow */}
        <div
          className={`absolute inset-0 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none ${
            isHovered
              ? 'bg-gradient-to-tr from-cyan-500/40 via-blue-500/40 to-indigo-500/40 opacity-100 scale-110'
              : 'bg-gradient-to-tr from-cyan-500/25 via-blue-500/20 to-purple-500/20 opacity-80 scale-100'
          }`}
        />

        {/* Outer 3D Gyroscope Ring 1 */}
        <div
          className="absolute inset-0 rounded-full border border-cyan-500/40 border-dashed animate-spin-slow pointer-events-none"
          style={{
            transform: 'rotateX(75deg) rotateY(15deg)',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.25)',
          }}
        />

        {/* Outer 3D Gyroscope Ring 2 */}
        <div
          className="absolute inset-4 rounded-full border border-blue-400/50 pointer-events-none"
          style={{
            transform: 'rotateX(25deg) rotateY(65deg)',
            animation: 'spinSlow 16s linear infinite reverse',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.25)',
          }}
        />

        {/* Outer 3D Gyroscope Ring 3 with Glowing Particles */}
        <div
          className="absolute inset-8 rounded-full border-2 border-indigo-400/40 pointer-events-none"
          style={{
            transform: 'rotateX(45deg) rotateY(-45deg)',
            animation: 'spinSlow 20s linear infinite',
          }}
        >
          <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_12px_#67e8f9]" />
          <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_12px_#60a5fa]" />
        </div>

        {/* Inner Magnetic Plasma Energy Sphere (Follows Mouse Vector) */}
        <div
          className="w-36 h-36 sm:w-40 sm:h-40 rounded-full relative flex items-center justify-center transition-transform duration-75 ease-out shadow-2xl"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 20px)`,
            background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #67e8f9 20%, #06b6d4 45%, #0284c7 70%, #0f172a 100%)',
            boxShadow: '0 0 35px rgba(6, 182, 212, 0.6), inset 0 0 25px rgba(255, 255, 255, 0.6)',
          }}
        >
          {/* Surface Gloss Reflex */}
          <div className="absolute top-3 left-5 w-12 h-6 bg-white/60 rounded-full blur-[2px] transform -rotate-45" />

          {/* Central Glowing Energy Eye / Pulsing Singularity */}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_#ffffff] animate-pulse">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-inner" />
          </div>

          {/* Magnetic Digital Rings Surrounding Core */}
          <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-25" />
        </div>

        {/* Ground Light Reflection */}
        <div className="absolute -bottom-8 w-44 h-8 bg-cyan-400/20 rounded-full blur-xl pointer-events-none" />
      </div>
    </div>
  );
};
