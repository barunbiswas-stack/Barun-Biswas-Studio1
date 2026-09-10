import React from 'react';
import { User, Sparkles, Terminal, Code, Cpu, Film, Palette, Music, Check } from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-white/10 relative bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full" />
              <span>THE DIRECTOR</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-none">
              ABOUT <span className="text-[#ff007f]">BARUN BISWAS</span>
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono-tech text-neutral-400 max-w-md">
            Independent creative director operating at the convergence of generative neural systems, cinematic storytelling, and tactile design.
          </div>
        </div>

        {/* Profile / Director Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left: Director Avatar / Visual Plate */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative rounded-sm overflow-hidden border border-white/20 bg-neutral-950 aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                alt="Creative Director Barun Biswas Portrait"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-sm bg-black/85 backdrop-blur-md border border-white/10 font-mono-tech text-xs space-y-1">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>BARUN BISWAS</span>
                  <span className="text-[#d4ff00]">DIRECTOR</span>
                </div>
                <div className="text-[11px] text-neutral-400">
                  Concept • Direction • Narrative • Sound
                </div>
              </div>
            </div>

            {/* Quick Director Specs */}
            <div className="p-4 rounded-sm bg-neutral-950 border border-white/10 font-mono-tech text-xs space-y-2 text-neutral-400">
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>LOCATION:</span>
                <span className="text-white">GLOBAL / REMOTE STUDIO</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>SPECIALIZATION:</span>
                <span className="text-[#d4ff00]">FULL-PIPELINE CREATIVE DIRECTION</span>
              </div>
              <div className="flex justify-between">
                <span>AVAILABILITY:</span>
                <span className="text-white">OPEN FOR COMMISSIONS</span>
              </div>
            </div>
          </div>

          {/* Right: Personal Creative Philosophy & Bio */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 rounded-sm bg-neutral-950 border border-white/15 space-y-6">
              <div className="text-xs font-mono-tech uppercase tracking-widest text-[#ff007f] font-bold">
                DIRECTOR'S STATEMENT & APPROACH
              </div>

              <blockquote className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase leading-snug border-l-4 border-[#d4ff00] pl-6">
                “I explore the convergence where human emotion, narrative storytelling, and digital synthesis meet. Technology expands what can be envisioned, but the artistic taste, narrative soul, and final master are directed entirely by human hands.”
              </blockquote>

              <div className="space-y-4 text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed pt-2">
                <p>
                  We are living through a historic transformation in creative production. What once required a multi-million-dollar production house can now be realized by a single visionary director with uncompromising standards and mastery of modern generative tools.
                </p>
                <p>
                  However, technology without taste produces disposable noise. Every project from my studio is authored with intentional narrative hooks, bespoke acoustic compositions, and meticulous editorial color finishing.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-[#d4ff00] font-bold">01. NARRATIVE VISION</span>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    No visual exploration begins until the emotional core and story arc are crystal clear.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-[#ff007f] font-bold">02. EDITORIAL TASTE</span>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    Every pixel, cut, and audio transient is shaped, timed, and mastered by human hands.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-white font-bold">03. CULTURAL IMPACT</span>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    Rejecting generic templates in favor of cinematic work that commands immediate attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 13. TOOLS & TECHNOLOGY SECTION (Integrated in Workflow Context) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-1">
                PRODUCTION ECOSYSTEM
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                CREATIVE STACK & PRODUCTION TOOLS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOOL_CATEGORIES.map((categoryGroup) => (
              <div
                key={categoryGroup.category}
                className="p-5 rounded-sm bg-neutral-950 border border-white/15 space-y-4 hover:border-white/30 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className={`font-mono-tech text-xs font-bold ${
                    categoryGroup.accent === 'yellow' ? 'text-[#d4ff00]' : 'text-[#ff007f]'
                  }`}>
                    {categoryGroup.category}
                  </span>
                </div>

                <div className="space-y-3">
                  {categoryGroup.tools.map((tool) => (
                    <div key={tool.name} className="space-y-0.5">
                      <div className="font-mono-tech text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        {tool.name}
                      </div>
                      <div className="text-[11px] font-mono-tech text-neutral-400 pl-3 leading-tight">
                        {tool.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
