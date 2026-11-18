import React, { useEffect, useRef, useState } from 'react';

interface GiantRobotProps {
  className?: string;
}

export const GiantRobot: React.FC<GiantRobotProps> = ({ className = '' }) => {
  const robotRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ eyeX: 0, eyeY: 0, headRotX: 0, headRotY: 0, bodyRotY: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [currentSpeechIndex, setCurrentSpeechIndex] = useState(0);
  const [isHandWaving, setIsHandWaving] = useState(false);

  const phrases = [
    'أهلاً بك في بورتفوليو ميخائيل نبيل! 🚀',
    'أنا أراقب حركة الماوس بدقة 3D في كل زاوية! 🤖',
    'استكشف مشاريع الكافيه، معارض السيارات، والرحلات! ✨',
    'تصميم فائق النعومة بـ React و TypeScript! ⚡'
  ];

  // Natural blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 3600);
    return () => clearInterval(blinkInterval);
  }, []);

  // Periodic greeting/speech rotation
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentSpeechIndex(prev => (prev + 1) % phrases.length);
      setIsTalking(true);
      setTimeout(() => setIsTalking(false), 2400);
    }, 6500);
    return () => clearInterval(phraseInterval);
  }, []);

  // Mouse Tracking across entire screen
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!robotRef.current) return;
      const rect = robotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.35; // focus near robot head

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const dist = Math.hypot(deltaX, deltaY);

      // Max eye pupil displacement
      const maxEyeDisplacement = 8;
      const angle = Math.atan2(deltaY, deltaX);
      const intensity = Math.min(dist / 450, 1);
      const eyeX = Math.cos(angle) * intensity * maxEyeDisplacement;
      const eyeY = Math.sin(angle) * intensity * maxEyeDisplacement;

      // 3D Head rotation
      const maxRotY = 20; // degrees left/right
      const maxRotX = 16; // degrees up/down
      const headRotY = Math.max(-maxRotY, Math.min(maxRotY, (deltaX / window.innerWidth) * (maxRotY * 2)));
      const headRotX = Math.max(-maxRotX, Math.min(maxRotX, -(deltaY / window.innerHeight) * (maxRotX * 2)));
      const bodyRotY = headRotY * 0.35;

      setCoords({ eyeX, eyeY, headRotX, headRotY, bodyRotY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerHandWave = () => {
    setIsHandWaving(true);
    setIsTalking(true);
    setCurrentSpeechIndex(0);
    setTimeout(() => {
      setIsHandWaving(false);
      setIsTalking(false);
    }, 2000);
  };

  return (
    <div
      ref={robotRef}
      onClick={triggerHandWave}
      className={`relative select-none flex flex-col items-center justify-center cursor-pointer group w-full max-w-[340px] sm:max-w-[400px] mx-auto ${className}`}
      style={{ perspective: '1200px' }}
      title="اضغط على الروبوت ليلوح بالتحية! 👋"
    >
      {/* Speech Bubble Above Robot */}
      <div className="mb-2 z-30 transition-all duration-300 transform group-hover:scale-105 pointer-events-none">
        <div className="relative px-3.5 py-1.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 text-cyan-300 border border-cyan-500/40 shadow-xl backdrop-blur-md text-xs sm:text-sm font-bold flex items-center gap-2 max-w-xs text-center">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <span>{phrases[currentSpeechIndex]}</span>
        </div>
      </div>

      {/* Futuristic Holographic Pedestal Aura */}
      <div className="absolute -bottom-4 w-60 h-12 bg-gradient-to-r from-cyan-500/30 via-blue-600/40 to-indigo-600/30 rounded-full blur-xl animate-pulse pointer-events-none" />

      {/* Robot Main 3D Container */}
      <div
        className="w-full aspect-[300/310] relative transition-transform duration-100 ease-out animate-float"
        style={{
          transform: `rotateY(${coords.bodyRotY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 300 320"
          className="w-full h-full drop-shadow-[0_15px_30px_rgba(6,182,212,0.35)] overflow-visible"
        >
          <defs>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="40%" stopColor="#0284c7" />
              <stop offset="85%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="faceScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#090d16" />
              <stop offset="50%" stopColor="#020617" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>

            <linearGradient id="armorHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            <radialGradient id="cyberEyeGrad" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#67e8f9" />
              <stop offset="70%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0e7490" />
            </radialGradient>

            <radialGradient id="coreReactor" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="40%" stopColor="#06b6d4" />
              <stop offset="85%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </radialGradient>

            <filter id="glowEffect" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Pedestal Rings (Floating Platform) */}
          <ellipse cx="150" cy="305" rx="85" ry="12" fill="#0369a1" opacity="0.3" />
          <ellipse cx="150" cy="303" rx="70" ry="9" stroke="#38bdf8" strokeWidth="2.5" fill="none" opacity="0.8" filter="url(#glowEffect)" />
          <ellipse cx="150" cy="298" rx="46" ry="6" stroke="#67e8f9" strokeWidth="1.5" fill="none" opacity="0.9" />

          {/* Robot Torso / Chest Body */}
          <g className="torso">
            <path
              d="M 90 185 L 210 185 L 195 275 L 105 275 Z"
              fill="url(#bodyGrad)"
              stroke="#38bdf8"
              strokeWidth="3"
            />
            
            <path d="M 98 190 L 140 190 L 135 230 L 104 230 Z" fill="#0369a1" opacity="0.6" />
            <path d="M 160 190 L 202 190 L 196 230 L 165 230 Z" fill="#0369a1" opacity="0.6" />

            {/* Arc Reactor in Center of Chest */}
            <circle
              cx="150"
              cy="228"
              r="20"
              fill="url(#coreReactor)"
              filter="url(#glowEffect)"
              stroke="#67e8f9"
              strokeWidth="2.5"
              className="animate-pulse"
            />
            <circle cx="150" cy="228" r="13" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeDasharray="5,4" className="animate-spin-slow origin-center" />
            <polygon points="150,218 157,232 143,232" fill="#ffffff" opacity="0.9" />

            <line x1="122" y1="252" x2="178" y2="252" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="130" y1="262" x2="170" y2="262" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Left Arm */}
          <g className="left-arm">
            <circle cx="80" cy="198" r="13" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 76 208 L 62 258 L 74 262 L 86 212 Z" fill="url(#bodyGrad)" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="68" cy="270" r="9" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          </g>

          {/* Right Arm (Waving Arm when clicked) */}
          <g
            className={`right-arm origin-[220px_198px] transition-transform duration-300 ${
              isHandWaving ? 'animate-bounce' : ''
            }`}
            style={{
              transform: isHandWaving ? 'rotate(-45deg)' : 'rotate(0deg)',
            }}
          >
            <circle cx="220" cy="198" r="13" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            {isHandWaving ? (
              <g>
                <path d="M 224 188 L 255 135 L 270 143 L 234 198 Z" fill="url(#bodyGrad)" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="265" cy="125" r="11" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" filter="url(#glowEffect)" />
                <line x1="285" y1="115" x2="295" y2="105" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                <line x1="285" y1="130" x2="298" y2="130" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
              </g>
            ) : (
              <g>
                <path d="M 224 208 L 238 258 L 226 262 L 214 212 Z" fill="url(#bodyGrad)" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="232" cy="270" r="9" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              </g>
            )}
          </g>

          {/* Robot Neck */}
          <rect x="135" y="166" width="30" height="20" rx="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />

          {/* 3D Moving Head Group */}
          <g
            className="head-group"
            style={{
              transform: `rotateX(${coords.headRotX}deg) rotateY(${coords.headRotY}deg)`,
              transformOrigin: '150px 115px',
              transition: 'transform 0.08s ease-out',
            }}
          >
            {/* Antenna */}
            <line x1="150" y1="52" x2="150" y2="18" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
            <circle cx="150" cy="15" r="8" fill="#38bdf8" filter="url(#glowEffect)" className="animate-pulse" />
            <circle cx="150" cy="15" r="3.5" fill="#ffffff" />

            {/* Side Ear Antennas */}
            <path d="M 64 100 L 76 86 L 76 140 L 64 126 Z" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="70" cy="112" r="4.5" fill="#38bdf8" filter="url(#glowEffect)" />

            <path d="M 236 100 L 224 86 L 224 140 L 236 126 Z" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="230" cy="112" r="4.5" fill="#38bdf8" filter="url(#glowEffect)" />

            {/* Main Outer Head Chassis */}
            <rect
              x="74"
              y="50"
              width="152"
              height="120"
              rx="36"
              fill="url(#bodyGrad)"
              stroke="#38bdf8"
              strokeWidth="3.5"
            />

            <path d="M 90 58 L 210 58 L 200 75 L 100 75 Z" fill="url(#armorHighlight)" opacity="0.8" />

            {/* Cyber Visor Screen */}
            <rect
              x="88"
              y="72"
              width="124"
              height="75"
              rx="22"
              fill="url(#faceScreenGrad)"
              stroke="#1e293b"
              strokeWidth="2.5"
            />

            {/* Scanlines */}
            <line x1="92" y1="88" x2="208" y2="88" stroke="#06b6d4" strokeWidth="0.8" opacity="0.25" />
            <line x1="92" y1="102" x2="208" y2="102" stroke="#06b6d4" strokeWidth="0.8" opacity="0.25" />
            <line x1="92" y1="116" x2="208" y2="116" stroke="#06b6d4" strokeWidth="0.8" opacity="0.25" />
            <line x1="92" y1="130" x2="208" y2="130" stroke="#06b6d4" strokeWidth="0.8" opacity="0.25" />

            {/* EYES (Mouse Tracking) */}
            <g transform={`translate(${coords.eyeX}, ${coords.eyeY})`} className="eyes-layer">
              <g className="left-eye">
                <ellipse cx="120" cy="105" rx="18" ry={isBlinking ? 1.5 : 18} fill="#083344" stroke="#0891b2" strokeWidth="2" />
                {!isBlinking && (
                  <>
                    <circle cx="120" cy="105" r="13" fill="url(#cyberEyeGrad)" filter="url(#glowEffect)" />
                    <circle cx="116" cy="100" r="4" fill="#ffffff" />
                    <circle cx="124" cy="109" r="2" fill="#ffffff" opacity="0.7" />
                  </>
                )}
              </g>

              <g className="right-eye">
                <ellipse cx="180" cy="105" rx="18" ry={isBlinking ? 1.5 : 18} fill="#083344" stroke="#0891b2" strokeWidth="2" />
                {!isBlinking && (
                  <>
                    <circle cx="180" cy="105" r="13" fill="url(#cyberEyeGrad)" filter="url(#glowEffect)" />
                    <circle cx="176" cy="100" r="4" fill="#ffffff" />
                    <circle cx="184" cy="109" r="2" fill="#ffffff" opacity="0.7" />
                  </>
                )}
              </g>
            </g>

            {/* Mouth */}
            {isTalking ? (
              <path
                d="M 122 135 Q 136 144 150 135 Q 164 144 178 135"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#glowEffect)"
                className="animate-pulse"
              />
            ) : (
              <path
                d="M 126 137 Q 150 148 174 137"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#glowEffect)"
              />
            )}
          </g>
        </svg>

        {/* Floating Interactive Badge Under Robot */}
        <div className="mt-2 flex items-center justify-center gap-2 bg-slate-900/85 dark:bg-slate-900/90 border border-cyan-500/30 px-3.5 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-bold text-cyan-300">
            تتبع مباشر لحركة الماوس 3D
          </span>
        </div>
      </div>
    </div>
  );
};
