import React, { useEffect, useRef, useState } from 'react';

interface InteractiveRobotProps {
  size?: number;
  interactive?: boolean;
}

export const InteractiveRobot: React.FC<InteractiveRobotProps> = ({ size = 48, interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [headTilt, setHeadTilt] = useState({ rotateX: 0, rotateY: 0, rotateZ: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Periodic natural blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, []);

  // Track mouse coordinates across the entire window
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      // Max eye pupil shift inside eyeball
      const maxPupilShift = 4.5;
      const clampedDistance = Math.min(distance, 400);
      const angle = Math.atan2(deltaY, deltaX);

      const pupilX = Math.cos(angle) * (clampedDistance / 400) * maxPupilShift;
      const pupilY = Math.sin(angle) * (clampedDistance / 400) * maxPupilShift;

      // 3D head rotation tilt
      const maxTilt = 18; // degrees
      const rotY = Math.max(-maxTilt, Math.min(maxTilt, (deltaX / window.innerWidth) * (maxTilt * 2)));
      const rotX = Math.max(-maxTilt, Math.min(maxTilt, -(deltaY / window.innerHeight) * (maxTilt * 2)));
      const rotZ = rotY * 0.15;

      setEyeOffset({ x: pupilX, y: pupilY });
      setHeadTilt({ rotateX: rotX, rotateY: rotY, rotateZ: rotZ });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  const handleRobotClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1400);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleRobotClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer select-none group perspective-800 inline-flex items-center justify-center p-1"
      title="مساعد الذكاء الاصطناعي التفاعلي! انقر للتحية 👋"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        perspective: '1000px',
      }}
    >
      {/* Dynamic Glow Halo */}
      <div
        className={`absolute inset-0 rounded-full blur-md transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'bg-cyan-500/40 dark:bg-cyan-400/50 scale-125'
            : 'bg-indigo-500/20 dark:bg-cyan-500/20 scale-95'
        }`}
      />

      {/* Robot Main Body Wrapper with 3D Mouse Tracking */}
      <div
        className="w-full h-full relative transition-transform duration-100 ease-out flex items-center justify-center"
        style={{
          transform: `rotateX(${headTilt.rotateX}deg) rotateY(${headTilt.rotateY}deg) rotateZ(${headTilt.rotateZ}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md overflow-visible"
        >
          <defs>
            {/* Robot Head Gradients */}
            <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>

            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <radialGradient id="eyePupilGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </radialGradient>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Antenna */}
          <g className="antenna">
            <line
              x1="50"
              y1="18"
              x2="50"
              y2="6"
              stroke="#06b6d4"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Pulsing Antenna Light */}
            <circle
              cx="50"
              cy="5"
              r="4.5"
              fill={isHovered ? '#f43f5e' : '#38bdf8'}
              className="animate-pulse"
              filter="url(#neonGlow)"
            />
          </g>

          {/* Ears / Side Sound Sensors */}
          <rect
            x="12"
            y="35"
            width="7"
            height="18"
            rx="3.5"
            fill="#0284c7"
            className="transition-colors duration-200"
          />
          <rect
            x="81"
            y="35"
            width="7"
            height="18"
            rx="3.5"
            fill="#0284c7"
            className="transition-colors duration-200"
          />

          {/* Main Head Chassis */}
          <rect
            x="18"
            y="18"
            width="64"
            height="52"
            rx="16"
            fill="url(#headGrad)"
            stroke="#38bdf8"
            strokeWidth="1.8"
          />

          {/* Front Visor Glass */}
          <rect
            x="24"
            y="26"
            width="52"
            height="34"
            rx="10"
            fill="url(#visorGrad)"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Left Eye Socket */}
          <g transform={`translate(${eyeOffset.x}, ${eyeOffset.y})`}>
            {/* Left Eye */}
            <circle
              cx="38"
              cy="42"
              r={isBlinking ? 1 : 6.5}
              fill="url(#eyePupilGrad)"
              filter="url(#neonGlow)"
              className="transition-all duration-75"
            />
            {!isBlinking && (
              <circle cx="36" cy="40" r="2" fill="#ffffff" opacity="0.9" />
            )}

            {/* Right Eye */}
            <circle
              cx="62"
              cy="42"
              r={isBlinking ? 1 : 6.5}
              fill="url(#eyePupilGrad)"
              filter="url(#neonGlow)"
              className="transition-all duration-75"
            />
            {!isBlinking && (
              <circle cx="60" cy="40" r="2" fill="#ffffff" opacity="0.9" />
            )}
          </g>

          {/* Robot Smile / Status Line */}
          {isWaving ? (
            <path
              d="M 38 52 Q 50 60 62 52"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neonGlow)"
            />
          ) : (
            <path
              d="M 42 54 L 58 54"
              stroke="#06b6d4"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
          )}

          {/* Robot Neck Connection */}
          <rect x="42" y="70" width="16" height="6" rx="2" fill="#1e293b" />

          {/* Shoulders / Base Body Hint */}
          <path
            d="M 28 76 Q 50 82 72 76 L 76 88 Q 50 94 24 88 Z"
            fill="#1e3a8a"
            stroke="#38bdf8"
            strokeWidth="1.2"
            opacity="0.95"
          />

          {/* Interactive Waving Hand (animated when clicked) */}
          {isWaving && (
            <g className="animate-bounce origin-bottom-right">
              <path
                d="M 76 75 Q 88 62 92 52 Q 95 62 82 78 Z"
                fill="#38bdf8"
                filter="url(#neonGlow)"
              />
            </g>
          )}
        </svg>

        {/* Small Tooltip on Hover */}
        {isHovered && (
          <div className="absolute -bottom-8 whitespace-nowrap bg-neutral-900/90 text-cyan-300 text-[11px] font-medium px-2 py-0.5 rounded-full border border-cyan-500/30 shadow-lg pointer-events-none backdrop-blur-sm animate-fade-in z-50">
            {isWaving ? 'مرحباً بك! 👋' : 'أنا أتتبع الماوس معك 🤖'}
          </div>
        )}
      </div>
    </div>
  );
};
