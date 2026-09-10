import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-white/10 py-16 text-neutral-400 font-mono-tech relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Footer Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-1">
            <div className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider flex items-center gap-2">
              <span>BARUN BISWAS</span>
              <span className="text-[#d4ff00]">STUDIO</span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400 font-mono-tech">
                CREATIVE DIRECTION
              </span>
            </div>
            <p className="text-xs text-neutral-500 max-w-md">
              Cinematic direction, commercial advertising, original sound design, and future-forward visual productions.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 border border-white/10 hover:border-[#d4ff00] hover:text-white transition-colors text-xs uppercase cursor-pointer"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d4ff00]" />
          </button>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Barun Biswas. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-white transition-colors">WORK</a>
            <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
            <a href="#process" className="hover:text-white transition-colors">PROCESS</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
