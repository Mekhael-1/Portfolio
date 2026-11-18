import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  effect?: 'circular' | 'floating' | 'zoom' | 'slide-up' | 'flip';
  delay?: number;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // 1. Check if the element is already visible or close to the viewport
    const checkVisibility = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const windowH = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowH + 120 && rect.bottom >= -100) {
        setRevealed(true);
      }
    };

    checkVisibility();

    // 2. High performance IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '180px 0px 180px 0px',
        threshold: 0.05,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // 3. Native scroll listener ensuring smooth reveal on wheel
    const onScroll = () => {
      if (!revealed) checkVisibility();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
      window.removeEventListener('scroll', onScroll);
    };
  }, [revealed]);

  return (
    <div
      ref={elementRef}
      className={`circular-reveal ${revealed ? 'is-revealed' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
