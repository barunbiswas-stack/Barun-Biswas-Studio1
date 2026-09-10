import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Play, Eye, Sparkles, Layers, Sliders, Music2 } from 'lucide-react';
import { Project } from '../types';
import { audioSynth } from '../utils/audioSynth';

interface HeroProps {
  onSelectProject: (project: Project) => void;
  featuredProjects: Project[];
  onOpenContact: () => void;
  onPlayAudioSample: (type: 'cyber' | 'ambient' | 'energetic') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectProject,
  featuredProjects,
  onOpenContact,
  onPlayAudioSample
}) => {
  const [activeVisualIndex, setActiveVisualIndex] = useState(0);

  const heroCollageItems = [
    {
      type: 'COMMERCIAL AD',
      title: 'KINETIC VOLT',
      category: 'ADVERTISING',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=900&auto=format&fit=crop',
      accent: 'yellow',
      project: featuredProjects[0]
    },
    {
      type: 'CINEMATIC VIDEO',
      title: 'THE LAST CARTOGRAPHER',
      category: 'SHORT FILM',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop',
      accent: 'pink',
      project: featuredProjects[3] || featuredProjects[0]
    },
    {
      type: 'MUSIC VIDEO',
      title: 'NEON HORIZON',
      category: 'RETROWAVE',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=900&auto=format&fit=crop',
      accent: 'yellow',
      project: featuredProjects[1] || featuredProjects[0]
    },
    {
      type: 'AI ART & PACKAGING',
      title: 'CYBERNETIC POSTER',
      category: 'SWISS GRAPHICS',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=900&auto=format&fit=crop',
      accent: 'pink',
      project: featuredProjects[4] || featuredProjects[0]
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden border-b border-white/10"
    >
      {/* Studio Location & Editorial Note */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono-tech text-[10px] text-neutral-400 tracking-widest pointer-events-none hidden md:block">
        <div>BARUN BISWAS STUDIO</div>
        <div>CREATIVE DIRECTION & FILM</div>
      </div>

      <div className="absolute top-28 right-6 sm:right-12 font-mono-tech text-[10px] text-neutral-400 tracking-widest pointer-events-none text-right hidden md:block">
        <div>AVAILABLE WORLDWIDE</div>
        <div className="text-[#d4ff00]">OPEN FOR COMMISSIONS 2026</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-14 relative z-10">
        {/* Identity Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono-tech tracking-wider text-neutral-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
          <span className="text-white font-semibold">BARUN BISWAS</span>
          <span className="text-neutral-500">•</span>
          <span className="text-[#d4ff00]">CREATIVE DIRECTOR & VISUAL ARTIST</span>
        </div>

        {/* Main Dramatic Headline */}
        <div className="space-y-1 mb-8">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.94] text-white uppercase select-none">
            DIRECTING{' '}
            <span className="text-[#d4ff00]">CINEMATIC</span> STORIES,
            <br />
            BOLD ADS &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff007f]">
              FUTURE VISUALS.
            </span>
          </h1>
        </div>

        {/* Sub-Headline / Craft Categories */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg font-mono-tech text-neutral-300 leading-relaxed tracking-wide mb-10">
          Crafting high-impact commercial campaigns, narrative short films, music videos, and original soundscapes by marrying visionary human storytelling with modern digital synthesis.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
          <a
            href="#work"
            id="hero-view-work-btn"
            className="group px-7 py-3.5 bg-[#d4ff00] text-black font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase rounded-sm flex items-center gap-2 hover:bg-white transition-all duration-200 shadow-[0_0_25px_rgba(212,255,0,0.3)] active:scale-95"
          >
            <span>EXPLORE PORTFOLIO</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>

          <button
            onClick={onOpenContact}
            id="hero-lets-create-btn"
            className="group px-7 py-3.5 bg-transparent border border-white/20 text-white font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase rounded-sm flex items-center gap-2 hover:border-[#ff007f] hover:text-[#ff007f] hover:bg-[#ff007f]/5 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button
            onClick={() => onPlayAudioSample('cyber')}
            id="hero-quick-synth-btn"
            className="px-4 py-3 bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-white hover:border-[#d4ff00] rounded-sm text-xs font-mono-tech flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Music2 className="w-3.5 h-3.5 text-[#d4ff00]" />
            <span>PLAY DIRECTOR SOUNDSCAPE</span>
          </button>
        </div>

        {/* Creative Director's Digital Desk / Featured Production Reel */}
        <div className="relative mt-2 pt-6">
          {/* Section Header for the Desk */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#ff007f] rounded-full inline-block" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-neutral-300">
                FEATURED PRODUCTION SHOWCASE
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono-tech text-neutral-400">
              <span>PROJECT:</span>
              {heroCollageItems.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => setActiveVisualIndex(idx)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                    activeVisualIndex === idx
                      ? 'bg-[#d4ff00] text-black font-bold'
                      : 'bg-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Interactive Collage Container */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-stretch">
            {/* Primary Featured Frame */}
            <div
              onClick={() => {
                audioSynth.playSfx('whoosh');
                onSelectProject(heroCollageItems[activeVisualIndex].project);
              }}
              className="md:col-span-7 lg:col-span-8 group relative rounded-sm overflow-hidden border border-white/15 bg-neutral-950 cursor-pointer min-h-[360px] sm:min-h-[440px] flex flex-col justify-end p-6 transition-all duration-300 hover:border-[#d4ff00] hover:shadow-[0_0_35px_rgba(212,255,0,0.15)]"
            >
              {/* Background preview image */}
              <img
                src={heroCollageItems[activeVisualIndex].image}
                alt={heroCollageItems[activeVisualIndex].title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-30"
              />

              {/* Video loop teaser */}
              {heroCollageItems[activeVisualIndex].project.videoTeaser && (
                <video
                  key={heroCollageItems[activeVisualIndex].project.videoTeaser}
                  src={heroCollageItems[activeVisualIndex].project.videoTeaser}
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-[#09090c]/40 to-transparent" />

              {/* Top Bar inside card */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-white/20 font-mono-tech text-[10px] uppercase tracking-wider text-[#d4ff00] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-ping" />
                  {heroCollageItems[activeVisualIndex].type}
                </span>
                <span className="px-2.5 py-1 bg-black/80 font-mono-tech text-[10px] text-[#ff007f] border border-white/10 flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  CLICK TO VIEW WITH SOUND
                </span>
              </div>

              {/* Bottom Title & Meta */}
              <div className="relative z-10">
                <div className="text-xs font-mono-tech uppercase tracking-widest text-[#ff007f] mb-1">
                  {heroCollageItems[activeVisualIndex].category}
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-wide uppercase group-hover:text-[#d4ff00] transition-colors flex items-center justify-between">
                  <span>{heroCollageItems[activeVisualIndex].title}</span>
                  <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-[#d4ff00] group-hover:text-black flex items-center justify-center transition-all group-hover:scale-105 shadow-xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-mono-tech mt-2 max-w-xl">
                  {heroCollageItems[activeVisualIndex].project.brief}
                </p>
              </div>
            </div>

            {/* Secondary Visual Columns */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-3 justify-between">
              {heroCollageItems.map((item, index) => (
                <div
                  key={item.title}
                  onClick={() => {
                    audioSynth.playSfx('click');
                    setActiveVisualIndex(index);
                    if (activeVisualIndex === index) {
                      onSelectProject(item.project);
                    }
                  }}
                  className={`p-3 rounded-sm border transition-all cursor-pointer flex items-center gap-3 relative ${
                    activeVisualIndex === index
                      ? 'border-[#d4ff00] bg-[#d4ff00]/10 shadow-[0_0_15px_rgba(212,255,0,0.15)]'
                      : 'border-white/10 bg-neutral-900/60 hover:border-white/30'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-sm object-cover border border-white/10 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono-tech text-[#ff007f] tracking-wider uppercase">
                        {item.type}
                      </span>
                      <span className="text-[10px] font-mono-tech text-[#d4ff00] flex items-center gap-1">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        PREVIEW
                      </span>
                    </div>
                    <div className="font-display font-bold text-sm text-white uppercase truncate">
                      {item.title}
                    </div>
                    <div className="text-[11px] font-mono-tech text-neutral-400 truncate">
                      {item.category}
                    </div>
                  </div>
                  {activeVisualIndex === index && (
                    <div className="w-2 h-2 rounded-full bg-[#d4ff00]" />
                  )}
                </div>
              ))}

              {/* Director Credo Box */}
              <div className="p-3.5 rounded-sm bg-black/60 border border-white/10 font-mono-tech text-[11px] text-neutral-400 space-y-1">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1 text-[#d4ff00]">
                    <Layers className="w-3.5 h-3.5" />
                    DIRECTOR'S STUDIO:
                  </span>
                  <span className="text-white">BARUN BISWAS</span>
                </div>
                <div className="text-neutral-400 text-[10px] leading-tight">
                  Film Direction • Creative Treatment • Original Audio Score • DaVinci Color Science
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Statement */}
      <div className="w-full mt-12 py-3 bg-neutral-950 border-y border-white/10 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono-tech text-xs tracking-widest uppercase text-neutral-400">
          <span>CINEMATIC FILM DIRECTION</span>
          <span className="text-[#d4ff00]">✦</span>
          <span>COMMERCIAL ADVERTISING THAT COMMANDS ATTENTION</span>
          <span className="text-[#ff007f]">✦</span>
          <span>ORIGINAL MUSIC VIDEOS & BESPOKE AUDIO SOUNDSCAPES</span>
          <span className="text-[#d4ff00]">✦</span>
          <span>HIGH-RETENTION EDITORIAL REELS & KEY ART</span>
          <span className="text-[#ff007f]">✦</span>
          <span>DIRECTED & CRAFTED BY BARUN BISWAS</span>
          <span className="text-[#d4ff00]">✦</span>
          <span>CINEMATIC FILM DIRECTION</span>
          <span className="text-[#ff007f]">✦</span>
        </div>
      </div>
    </section>
  );
};
