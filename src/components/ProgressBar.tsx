import React, { useState, useEffect } from 'react';

export const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const current = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, current)));
            setIsVisible(window.scrollY > 40);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-label="Scroll Progress Bar"
      className={`fixed top-0 left-0 right-0 z-[60] pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background Track */}
      <div className="w-full h-[3px] bg-black/40 backdrop-blur-sm relative overflow-hidden">
        {/* Fill Indicator */}
        <div
          className="h-full bg-gradient-to-r from-[#d4ff00] via-[#ff007f] to-[#d4ff00] transition-[width] duration-150 ease-out relative shadow-[0_0_12px_rgba(212,255,0,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Subtle Leading Glow Pip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff] -mr-1" />
        </div>
      </div>

      {/* Floating Minimalist Percentage Badge on Top Right */}
      <div className="absolute top-2 right-4 pointer-events-auto">
        <div className="px-2 py-0.5 rounded-sm bg-black/80 backdrop-blur-md border border-white/10 font-mono-tech text-[10px] text-neutral-300 flex items-center gap-1.5 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
          <span className="text-white font-bold">{Math.round(scrollProgress)}%</span>
        </div>
      </div>
    </div>
  );
};
