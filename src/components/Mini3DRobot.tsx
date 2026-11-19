import React from 'react';

interface Mini3DRobotProps {
  className?: string;
  size?: number;
}

export const Mini3DRobot: React.FC<Mini3DRobotProps> = ({ className = '', size = 26 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      title="Cyber Robot Assistant"
    >
      {/* Ambient Pulsing Glow behind robot */}
      <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-[4px] animate-pulse" />

      {/* SVG 3D Isometric / Cyber Cute Robot */}
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(56,189,248,0.6)] animate-float"
      >
        {/* Antenna */}
        <line x1="18" y1="2" x2="18" y2="7" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="2" r="2" fill="#38bdf8" className="animate-ping opacity-75" />
        <circle cx="18" cy="2" r="1.5" fill="#f0f9ff" />

        {/* Robot Head Outer (3D Gradient) */}
        <rect x="6" y="7" width="24" height="20" rx="6" fill="url(#headGradient)" stroke="#38bdf8" strokeWidth="1.5" />
        
        {/* Head highlight shine */}
        <rect x="9" y="9" width="18" height="4" rx="2" fill="white" fillOpacity="0.25" />

        {/* Visor / Screen */}
        <rect x="9" y="12" width="18" height="11" rx="4" fill="#020617" stroke="#1e293b" strokeWidth="1" />

        {/* Glowing Eyes */}
        <circle cx="14" cy="17.5" r="2.2" fill="#38bdf8" className="animate-pulse">
          <animate attributeName="r" values="2.2;1.6;2.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="14" cy="17.5" r="0.8" fill="#ffffff" />

        <circle cx="22" cy="17.5" r="2.2" fill="#38bdf8" className="animate-pulse">
          <animate attributeName="r" values="2.2;1.6;2.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="17.5" r="0.8" fill="#ffffff" />

        {/* Happy Visor Smile */}
        <path d="M15 20.5Q18 22 21 20.5" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />

        {/* Ears / Side Bolts */}
        <rect x="3" y="13" width="3" height="8" rx="1.5" fill="#0284c7" />
        <rect x="30" y="13" width="3" height="8" rx="1.5" fill="#0284c7" />

        {/* Body Neck Base */}
        <path d="M13 27L11 33H25L23 27Z" fill="url(#neckGradient)" stroke="#0284c7" strokeWidth="1" />
        <circle cx="18" cy="30" r="1.2" fill="#38bdf8" />

        {/* Gradients */}
        <defs>
          <linearGradient id="headGradient" x1="6" y1="7" x2="30" y2="27" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e293b" />
            <stop offset="0.5" stopColor="#0f172a" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="neckGradient" x1="11" y1="27" x2="25" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0f172a" />
            <stop offset="1" stopColor="#0284c7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
