import React, { useState, useEffect } from 'react';
import { audioSynth } from '../utils/audioSynth';
import { ChevronUp, Compass, Sparkles, SlidersHorizontal } from 'lucide-react';

interface SectionItem {
  id: string;
  label: string;
  shortLabel: string;
  number: string;
}

const SECTIONS: SectionItem[] = [
  { id: 'hero', label: 'DIRECTOR REEL', shortLabel: 'HERO', number: '01' },
  { id: 'introduction', label: 'MANIFESTO', shortLabel: 'VISION', number: '02' },
  { id: 'slideshow', label: 'PROJECT SLIDESHOW', shortLabel: 'REEL', number: '03' },
  { id: 'work', label: 'FEATURED WORK', shortLabel: 'WORK', number: '04' },
  { id: 'timeline', label: 'PROJECTS TIMELINE', shortLabel: 'TIME', number: '05' },
  { id: 'stats', label: 'PROJECT STATS', shortLabel: 'STATS', number: '06' },
  { id: 'services', label: 'SERVICES & PRICING', shortLabel: 'SRV', number: '07' },
  { id: 'process', label: 'AI + HUMAN PROCESS', shortLabel: 'PROC', number: '08' },
  { id: 'advertising', label: 'COMMERCIAL ADS', shortLabel: 'ADS', number: '09' },
  { id: 'music', label: 'MUSIC & VISUALS', shortLabel: 'MUSIC', number: '10' },
  { id: 'lab', label: 'CREATIVE LAB', shortLabel: 'LAB', number: '11' },
  { id: 'about', label: 'ABOUT & BIO', shortLabel: 'BIO', number: '12' },
  { id: 'contact', label: 'INITIATE BRIEF', shortLabel: 'TALK', number: '13' },
];

export const SectionBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    audioSynth.playSfx('click');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSectionItem = SECTIONS.find((s) => s.id === activeSection) || SECTIONS[0];

  return (
    <>
      {/* DESKTOP FLOATING RIGHT SECTION BAR */}
      <aside
        aria-label="Section Navigation Rail"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-2 pointer-events-auto"
      >
        {/* Main Section Rail Card */}
        <div className="bg-neutral-950/85 backdrop-blur-xl border border-white/15 p-2 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col items-center gap-2">
          {/* Top Quick Jump to Top */}
          <button
            onClick={() => {
              audioSynth.playSfx('click');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            title="Scroll to Top"
            className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ChevronUp className="w-4 h-4" />
          </button>

          <div className="w-4 h-[1px] bg-white/15 my-0.5" />

          {/* Section Pips List */}
          <nav className="flex flex-col gap-1.5 items-center">
            {SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <div key={sec.id} className="relative flex items-center justify-end group">
                  {/* Hover Floating Tooltip Label (Left of the pip) */}
                  <div
                    className={`absolute right-9 px-2.5 py-1 rounded-sm bg-neutral-900/95 border border-white/20 text-white text-[10px] font-mono-tech uppercase tracking-wider whitespace-nowrap pointer-events-none transition-all duration-200 shadow-xl flex items-center gap-1.5 ${
                      isActive || isHovered
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  >
                    <span className="text-[#d4ff00] font-bold">{sec.number}</span>
                    <span>{sec.label}</span>
                  </div>

                  {/* Pip Button */}
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    aria-label={`Jump to ${sec.label}`}
                    className={`transition-all duration-200 flex items-center justify-center cursor-pointer rounded-full ${
                      isActive
                        ? 'w-7 h-7 bg-[#d4ff00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.8)] scale-110'
                        : 'w-3 h-3 bg-neutral-700 hover:bg-white hover:scale-125'
                    }`}
                  >
                    {isActive && (
                      <span className="text-[10px] font-mono-tech font-extrabold leading-none">
                        {sec.number}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Minimalist "Simple Is The Best" micro-badge */}
        <div className="text-[9px] font-mono-tech text-neutral-500 uppercase tracking-widest pt-1 px-1 text-right">
          <span className="text-[#d4ff00]">0{SECTIONS.findIndex((s) => s.id === activeSection) + 1}</span>
          <span> / </span>
          <span>{SECTIONS.length < 10 ? `0${SECTIONS.length}` : SECTIONS.length}</span>
        </div>
      </aside>

      {/* MOBILE / TABLET FLOATING BOTTOM SECTION BAR */}
      <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden flex justify-center pointer-events-none">
        <div className="pointer-events-auto bg-black/90 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 flex items-center justify-between gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.9)] max-w-sm w-full">
          {/* Active section info */}
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse shrink-0" />
            <span className="font-mono-tech text-xs text-white font-bold truncate">
              {currentSectionItem.number} // {currentSectionItem.shortLabel}
            </span>
          </div>

          {/* Quick jump actions */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => {
                const currentIdx = SECTIONS.findIndex((s) => s.id === activeSection);
                const prevIdx = (currentIdx - 1 + SECTIONS.length) % SECTIONS.length;
                scrollToSection(SECTIONS[prevIdx].id);
              }}
              className="px-2 py-1 rounded bg-neutral-900 border border-white/10 text-[10px] font-mono-tech text-neutral-300 hover:text-white"
            >
              PREV
            </button>
            <button
              onClick={() => {
                const currentIdx = SECTIONS.findIndex((s) => s.id === activeSection);
                const nextIdx = (currentIdx + 1) % SECTIONS.length;
                scrollToSection(SECTIONS[nextIdx].id);
              }}
              className="px-2 py-1 rounded bg-[#d4ff00] text-black font-bold text-[10px] font-mono-tech"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
