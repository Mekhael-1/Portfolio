import React, { useEffect, useRef, useState } from 'react';

interface CyberHologramAvatarProps {
  className?: string;
}

export const CyberHologramAvatar: React.FC<CyberHologramAvatarProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({
    eyeX: 0,
    eyeY: 0,
    headRotX: 0,
    headRotY: 0,
    bodyRotY: 0,
  });
  const [isBlinking, setIsBlinking] = useState(false);
  const [speechIdx, setSpeechIdx] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const speeches = [
    '⚡ نظام الذكاء الاصطناعي متصل وجاهز!',
    '🛸 أتبع حركة الماوس بزوايا 3D دقيقة',
    '✨ واجهات عصرية بأحدث تقنيات React & TS',
    '🚀 استكشف معرض المشاريع التفاعلي أدناه',
  ];

  // Natural blinking
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 140);
    }, 3500);
    return () => clearInterval(blinkTimer);
  }, []);

  // Periodic speech updates
  useEffect(() => {
    const speechTimer = setInterval(() => {
      setSpeechIdx(prev => (prev + 1) % speeches.length);
    }, 5500);
    return () => clearInterval(speechTimer);
  }, []);

  // Real-time mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.45;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const dist = Math.hypot(deltaX, deltaY);

      const maxEyeDisplacement = 7.5;
      const angle = Math.atan2(deltaY, deltaX);
      const intensity = Math.min(dist / 450, 1);
      const eyeX = Math.cos(angle) * intensity * maxEyeDisplacement;
      const eyeY = Math.sin(angle) * intensity * maxEyeDisplacement;

      const maxRotY = 22;
      const maxRotX = 18;
      const headRotY = Math.max(-maxRotY, Math.min(maxRotY, (deltaX / window.innerWidth) * (maxRotY * 2)));
      const headRotX = Math.max(-maxRotX, Math.min(maxRotX, -(deltaY / window.innerHeight) * (maxRotX * 2)));
      const bodyRotY = headRotY * 0.3;

      setCoords({
        eyeX,
        eyeY,
        headRotX,
        headRotY,
        bodyRotY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setSpeechIdx(0);
    setTimeout(() => setIsClicked(false), 1800);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className={`relative select-none flex flex-col items-center justify-center cursor-pointer group w-full max-w-[310px] sm:max-w-[350px] mx-auto pb-4 ${className}`}
      style={{ perspective: '1200px' }}
      title="أفتار الهولوغرام السيبراني ثلاثي الأبعاد 🤖 (انقر للتفاعل!)"
    >
      {/* Speech Bubble: Fixed Height */}
      <div className="h-10 flex items-center justify-center z-30 pointer-events-none mb-1">
        <div className="px-3.5 py-1.5 rounded-2xl bg-slate-950/90 dark:bg-slate-900/95 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.35)] backdrop-blur-md text-xs sm:text-sm font-bold flex items-center gap-2 max-w-xs text-center transition-all">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <span className="truncate">{speeches[speechIdx]}</span>
        </div>
      </div>

      {/* Cyberpunk Holographic Base Disc Aura */}
      <div className="absolute bottom-10 w-60 h-10 bg-gradient-to-r from-cyan-500/30 via-blue-600/35 to-indigo-600/30 rounded-full blur-xl animate-pulse pointer-events-none" />

      {/* 3D Main Avatar Body Wrapper - Lifted and perfectly contained */}
      <div
        className="w-full relative transition-transform duration-100 ease-out flex flex-col items-center"
        style={{
          transform: `rotateY(${coords.bodyRotY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 320 330"
          className="w-full h-auto drop-shadow-[0_15px_35px_rgba(6,182,212,0.4)] overflow-visible"
        >
          <defs>
            <linearGradient id="holoMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="25%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="85%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="neonCyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            <radialGradient id="deepVisorGrad" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#082f49" />
              <stop offset="60%" stopColor="#020617" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>

            <radialGradient id="cyberEyeLight" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#67e8f9" />
              <stop offset="70%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </radialGradient>

            <radialGradient id="coreReactorHolo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#67e8f9" />
              <stop offset="75%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>

            <filter id="neonBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Futuristic Base Ring */}
          <ellipse cx="160" cy="315" rx="85" ry="12" fill="#0284c7" opacity="0.25" />
          <ellipse cx="160" cy="310" rx="72" ry="9" stroke="#38bdf8" strokeWidth="2.5" fill="none" opacity="0.8" filter="url(#neonBlur)" />
          <ellipse cx="160" cy="305" rx="50" ry="6" stroke="#67e8f9" strokeWidth="1.8" fill="none" opacity="0.9" />

          {/* Torso & Armor */}
          <g className="torso">
            <path
              d="M 98 185 L 222 185 L 208 275 L 112 275 Z"
              fill="url(#holoMetalGrad)"
              stroke="#38bdf8"
              strokeWidth="3"
            />

            <path d="M 106 192 L 148 192 L 142 230 L 112 230 Z" fill="#0369a1" opacity="0.6" stroke="#38bdf8" strokeWidth="1" />
            <path d="M 172 192 L 214 192 L 208 230 L 178 230 Z" fill="#0369a1" opacity="0.6" stroke="#38bdf8" strokeWidth="1" />

            {/* Arc Reactor in Center */}
            <circle
              cx="160"
              cy="228"
              r="20"
              fill="url(#coreReactorHolo)"
              filter="url(#neonBlur)"
              stroke="#ffffff"
              strokeWidth="2.5"
              className="animate-pulse"
            />
            <circle cx="160" cy="228" r="13" fill="none" stroke="#67e8f9" strokeWidth="2" strokeDasharray="5,4" className="animate-spin-slow origin-center" />
            <polygon points="160,217 167,232 153,232" fill="#ffffff" opacity="0.9" />

            <line x1="130" y1="254" x2="190" y2="254" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="138" y1="264" x2="182" y2="264" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Left Arm */}
          <g className="left-arm">
            <circle cx="84" cy="198" r="13" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 80 208 L 64 256 L 76 260 L 90 212 Z" fill="url(#holoMetalGrad)" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="70" cy="268" r="9" fill="#0284c7" stroke="#67e8f9" strokeWidth="2" />
          </g>

          {/* Right Arm */}
          <g
            className={`right-arm origin-[236px_198px] transition-transform duration-300 ${
              isClicked ? 'animate-bounce' : ''
            }`}
            style={{
              transform: isClicked ? 'rotate(-40deg)' : 'rotate(0deg)',
            }}
          >
            <circle cx="236" cy="198" r="13" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            {isClicked ? (
              <g>
                <path d="M 240 188 L 270 135 L 285 142 L 250 198 Z" fill="url(#holoMetalGrad)" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="278" cy="128" r="11" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" filter="url(#neonBlur)" />
                <line x1="298" y1="116" x2="310" y2="105" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                <line x1="298" y1="132" x2="310" y2="132" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
              </g>
            ) : (
              <g>
                <path d="M 240 208 L 256 256 L 244 260 L 230 212 Z" fill="url(#holoMetalGrad)" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="250" cy="268" r="9" fill="#0284c7" stroke="#67e8f9" strokeWidth="2" />
              </g>
            )}
          </g>

          {/* Neck */}
          <rect x="145" y="166" width="30" height="20" rx="5" fill="#090d16" stroke="#38bdf8" strokeWidth="2" />

          {/* 3D Mouse Tracking Head */}
          <g
            className="head-group"
            style={{
              transform: `rotateX(${coords.headRotX}deg) rotateY(${coords.headRotY}deg)`,
              transformOrigin: '160px 110px',
              transition: 'transform 0.08s ease-out',
            }}
          >
            {/* Antenna */}
            <line x1="160" y1="48" x2="160" y2="16" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
            <circle cx="160" cy="14" r="8" fill="#38bdf8" filter="url(#neonBlur)" className="animate-pulse" />
            <circle cx="160" cy="14" r="3.5" fill="#ffffff" />

            {/* Ear Sensors */}
            <path d="M 70 95 L 82 82 L 82 135 L 70 122 Z" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="76" cy="108" r="4.5" fill="#67e8f9" filter="url(#neonBlur)" />

            <path d="M 250 95 L 238 82 L 238 135 L 250 122 Z" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="244" cy="108" r="4.5" fill="#67e8f9" filter="url(#neonBlur)" />

            {/* Helmet */}
            <rect
              x="82"
              y="45"
              width="156"
              height="120"
              rx="38"
              fill="url(#holoMetalGrad)"
              stroke="#67e8f9"
              strokeWidth="3.5"
            />

            <path d="M 98 52 L 222 52 L 210 70 L 110 70 Z" fill="url(#neonCyanGlow)" opacity="0.8" />

            {/* Visor Screen */}
            <rect
              x="96"
              y="68"
              width="128"
              height="76"
              rx="24"
              fill="url(#deepVisorGrad)"
              stroke="#1e293b"
              strokeWidth="2.5"
            />

            {/* Scanlines */}
            <line x1="102" y1="84" x2="218" y2="84" stroke="#06b6d4" strokeWidth="0.8" opacity="0.3" />
            <line x1="102" y1="98" x2="218" y2="98" stroke="#06b6d4" strokeWidth="0.8" opacity="0.3" />
            <line x1="102" y1="112" x2="218" y2="112" stroke="#06b6d4" strokeWidth="0.8" opacity="0.3" />
            <line x1="102" y1="126" x2="218" y2="126" stroke="#06b6d4" strokeWidth="0.8" opacity="0.3" />

            {/* Real-time Eyes Tracking */}
            <g transform={`translate(${coords.eyeX}, ${coords.eyeY})`}>
              <g className="left-eye">
                {isBlinking ? (
                  <line x1="116" y1="105" x2="140" y2="105" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
                ) : (
                  <>
                    <ellipse cx="128" cy="105" rx="15" ry="16" fill="url(#cyberEyeLight)" filter="url(#neonBlur)" />
                    <circle cx="124" cy="99" r="4.5" fill="#ffffff" />
                    <circle cx="132" cy="110" r="2.5" fill="#ffffff" opacity="0.8" />
                  </>
                )}
              </g>

              <g className="right-eye">
                {isBlinking ? (
                  <line x1="180" y1="105" x2="204" y2="105" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
                ) : (
                  <>
                    <ellipse cx="192" cy="105" rx="15" ry="16" fill="url(#cyberEyeLight)" filter="url(#neonBlur)" />
                    <circle cx="188" cy="99" r="4.5" fill="#ffffff" />
                    <circle cx="196" cy="110" r="2.5" fill="#ffffff" opacity="0.8" />
                  </>
                )}
              </g>

              <path
                d="M 138 132 Q 160 142 182 132"
                fill="none"
                stroke="#67e8f9"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#neonBlur)"
              />
            </g>
          </g>
        </svg>

        {/* Status Badge: Fully visible, clean margins, never clipped */}
        <div className="mt-3 inline-flex items-center justify-center gap-2 bg-slate-950/90 dark:bg-slate-900/95 border border-cyan-500/40 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-bold text-cyan-300">
            تتبع مباشر لحركة الماوس 3D
          </span>
        </div>
      </div>
    </div>
  );
};
