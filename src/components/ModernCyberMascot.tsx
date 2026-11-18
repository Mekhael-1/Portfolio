import React, { useEffect, useRef, useState } from 'react';

interface ModernCyberMascotProps {
  className?: string;
}

export const ModernCyberMascot: React.FC<ModernCyberMascotProps> = ({ className = '' }) => {
  const mascotRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ eyeX: 0, eyeY: 0, headRotX: 0, headRotY: 0, floatX: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [speechIndex, setSpeechIndex] = useState(0);

  const messages = [
    'مرحباً! أنا الـ AI Mascot الخاص بميخائيل ⚡',
    'أنا أراقب حركة الماوس بدقة حية في كل لحظة! 🛸',
    'جرب تصفح سلايدر المشاريع بالأسفل يميناً ويساراً! 🚀',
    'واجهات فائقة النعومة مبنية بـ React & TypeScript! ✨'
  ];

  // Natural blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, []);

  // Periodic Speech rotation
  useEffect(() => {
    const speechInterval = setInterval(() => {
      setSpeechIndex(prev => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(speechInterval);
  }, []);

  // Real-time mouse tracking for smooth 3D head and gaze movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.4;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const dist = Math.hypot(deltaX, deltaY);

      // Max eye travel inside visor
      const maxEyeDisplacement = 7;
      const angle = Math.atan2(deltaY, deltaX);
      const intensity = Math.min(dist / 400, 1);
      const eyeX = Math.cos(angle) * intensity * maxEyeDisplacement;
      const eyeY = Math.sin(angle) * intensity * maxEyeDisplacement;

      // 3D rotation angles
      const maxRotY = 22;
      const maxRotX = 18;
      const headRotY = Math.max(-maxRotY, Math.min(maxRotY, (deltaX / window.innerWidth) * (maxRotY * 2)));
      const headRotX = Math.max(-maxRotX, Math.min(maxRotX, -(deltaY / window.innerHeight) * (maxRotX * 2)));

      setCoords({ eyeX, eyeY, headRotX, headRotY, floatX: headRotY * 0.4 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    setIsWaving(true);
    setSpeechIndex(0);
    setTimeout(() => setIsWaving(false), 2000);
  };

  return (
    <div
      ref={mascotRef}
      onClick={handleClick}
      className={`relative select-none flex flex-col items-center justify-center cursor-pointer group w-full max-w-[340px] sm:max-w-[400px] mx-auto ${className}`}
      style={{ perspective: '1000px' }}
      title="اضغط على الأفتار الذكي للتفاعل! 👋"
    >
      {/* Dynamic Cyber Speech Bubble */}
      <div className="mb-3 z-30 transition-all duration-300 transform group-hover:scale-105 pointer-events-none">
        <div className="relative px-4 py-2 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 text-cyan-300 border border-cyan-500/40 shadow-xl backdrop-blur-md text-xs sm:text-sm font-bold flex items-center gap-2 max-w-xs text-center">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <span>{messages[speechIndex]}</span>
        </div>
      </div>

      {/* Cyber Neon Floor Platform */}
      <div className="absolute -bottom-4 w-64 h-14 bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse pointer-events-none" />

      {/* Main Floating Sphere / Avatar Body */}
      <div
        className="w-full aspect-square relative transition-transform duration-100 ease-out animate-float"
        style={{
          transform: `translateX(${coords.floatX}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 280 280"
          className="w-full h-full drop-shadow-[0_20px_40px_rgba(6,182,212,0.4)] overflow-visible"
        >
          <defs>
            {/* Glossy Sleek Chassis Gradient */}
            <radialGradient id="cyberSphereGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#e0f2fe" />
              <stop offset="55%" stopColor="#38bdf8" />
              <stop offset="85%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>

            {/* Jet Engine / Hologram Rings */}
            <linearGradient id="neonCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Deep Glass Visor */}
            <radialGradient id="glassVisorGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#082f49" />
              <stop offset="65%" stopColor="#020617" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>

            {/* Glowing Digital Eyes */}
            <radialGradient id="cyberPupilGrad" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#38bdf8" />
              <stop offset="85%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </radialGradient>

            <filter id="neonHalo" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Hologram Floating Rings Base */}
          <ellipse cx="140" cy="255" rx="75" ry="12" fill="none" stroke="#38bdf8" strokeWidth="2.5" opacity="0.6" filter="url(#neonHalo)" />
          <ellipse cx="140" cy="250" rx="55" ry="8" fill="none" stroke="#67e8f9" strokeWidth="1.5" opacity="0.8" />
          <ellipse cx="140" cy="245" rx="35" ry="5" fill="#38bdf8" opacity="0.4" className="animate-pulse" />

          {/* Left Levitating Wing Thruster */}
          <g className="left-thruster" transform="translate(18, 90)">
            <path
              d="M 25 15 Q 8 30 18 65 Q 32 50 35 25 Z"
              fill="url(#neonCyanGrad)"
              stroke="#67e8f9"
              strokeWidth="1.5"
            />
            <circle cx="20" cy="40" r="3.5" fill="#ffffff" filter="url(#neonHalo)" />
          </g>

          {/* Right Levitating Wing Thruster / Waving Wing */}
          <g
            className={`right-thruster origin-[240px_110px] transition-transform duration-300 ${
              isWaving ? 'animate-bounce' : ''
            }`}
            transform={isWaving ? 'translate(230, 75) rotate(-25)' : 'translate(225, 90)'}
          >
            <path
              d="M 12 15 Q 28 30 20 65 Q 4 50 2 25 Z"
              fill="url(#neonCyanGrad)"
              stroke="#67e8f9"
              strokeWidth="1.5"
            />
            <circle cx="16" cy="40" r="3.5" fill="#ffffff" filter="url(#neonHalo)" />
          </g>

          {/* Main Sphere Outer Pod Chassis */}
          <circle
            cx="140"
            cy="135"
            r="82"
            fill="url(#cyberSphereGrad)"
            stroke="#67e8f9"
            strokeWidth="3.5"
            filter="drop-shadow(0 0 16px rgba(56, 189, 248, 0.45))"
          />

          {/* Outer Pod Gloss Highlight */}
          <ellipse cx="115" cy="85" rx="35" ry="18" fill="#ffffff" opacity="0.45" transform="rotate(-25 115 85)" />

          {/* Dynamic 3D Tracking Head Face */}
          <g
            className="face-group"
            style={{
              transform: `rotateX(${coords.headRotX}deg) rotateY(${coords.headRotY}deg)`,
              transformOrigin: '140px 135px',
              transition: 'transform 0.08s ease-out',
            }}
          >
            {/* Curved Visor Screen */}
            <rect
              x="82"
              y="90"
              width="116"
              height="85"
              rx="38"
              fill="url(#glassVisorGrad)"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />

            {/* Visor Cyber Scanlines */}
            <path d="M 94 110 Q 140 106 186 110" stroke="#06b6d4" strokeWidth="0.8" opacity="0.4" fill="none" />
            <path d="M 90 132 Q 140 128 190 132" stroke="#06b6d4" strokeWidth="0.8" opacity="0.4" fill="none" />
            <path d="M 94 154 Q 140 150 186 154" stroke="#06b6d4" strokeWidth="0.8" opacity="0.4" fill="none" />

            {/* Real-time Tracking Cute Cyber Eyes */}
            <g transform={`translate(${coords.eyeX}, ${coords.eyeY})`}>
              {/* Left Eye */}
              <g className="left-eye">
                {isBlinking ? (
                  <line x1="102" y1="130" x2="124" y2="130" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                ) : (
                  <>
                    <ellipse cx="113" cy="128" rx="13" ry="17" fill="url(#cyberPupilGrad)" filter="url(#neonHalo)" />
                    {/* Big anime sparkle */}
                    <circle cx="109" cy="122" r="5" fill="#ffffff" />
                    <circle cx="117" cy="134" r="2.5" fill="#ffffff" opacity="0.8" />
                  </>
                )}
              </g>

              {/* Right Eye */}
              <g className="right-eye">
                {isBlinking ? (
                  <line x1="156" y1="130" x2="178" y2="130" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                ) : (
                  <>
                    <ellipse cx="167" cy="128" rx="13" ry="17" fill="url(#cyberPupilGrad)" filter="url(#neonHalo)" />
                    {/* Big anime sparkle */}
                    <circle cx="163" cy="122" r="5" fill="#ffffff" />
                    <circle cx="171" cy="134" r="2.5" fill="#ffffff" opacity="0.8" />
                  </>
                )}
              </g>

              {/* Digital Happy Smile Line */}
              <path
                d="M 132 152 Q 140 160 148 152"
                fill="none"
                stroke="#67e8f9"
                strokeWidth="2.8"
                strokeLinecap="round"
                filter="url(#neonHalo)"
              />
            </g>

            {/* Glowing Cheeks / Cyber Blushing */}
            <ellipse cx="98" cy="144" rx="6" ry="3.5" fill="#38bdf8" opacity="0.6" filter="url(#neonHalo)" />
            <ellipse cx="182" cy="144" rx="6" ry="3.5" fill="#38bdf8" opacity="0.6" filter="url(#neonHalo)" />
          </g>

          {/* Cute Top Cyber Antenna */}
          <path d="M 140 53 L 140 30" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="140" cy="24" r="7" fill="#67e8f9" filter="url(#neonHalo)" className="animate-pulse" />
          <circle cx="140" cy="24" r="3" fill="#ffffff" />
        </svg>

        {/* Floating Neon Badge */}
        <div className="mt-2 flex items-center justify-center gap-2 bg-slate-900/85 dark:bg-slate-900/90 border border-cyan-500/30 px-3.5 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-bold text-cyan-300">
            Smart AI Avatar &bull; تتبع حي للماوس
          </span>
        </div>
      </div>
    </div>
  );
};
