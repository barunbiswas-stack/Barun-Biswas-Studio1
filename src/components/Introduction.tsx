import React from 'react';
import { HeartHandshake, Film, Sparkles, CheckCircle2 } from 'lucide-react';

export const Introduction: React.FC = () => {
  const humanCreativeTraits = [
    { label: 'Narrative & Worldbuilding', desc: 'Developing the story treatment, psychological hook, and emotional resonance behind every frame.' },
    { label: 'Cinematic Eye & Taste', desc: 'Selecting and directing the rare, sublime composition out of hundreds of raw exploratory trials.' },
    { label: 'Rhythm & Acoustic Architecture', desc: 'Pacing every cut and scoring every frequency to the cadence of human emotion.' },
    { label: 'Precision Editorial & Color', desc: 'Compositing in After Effects, analog film emulation, ACES grading, and tactile sound finishing.' }
  ];

  return (
    <section id="introduction" className="py-24 border-b border-white/10 relative overflow-hidden bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-4">
          <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full" />
          <span>DIRECTOR'S STATEMENT</span>
        </div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-none uppercase">
              ORIGINAL VISION.
              <br />
              <span className="text-neutral-500">FEARLESS CRAFT.</span>
            </h2>

            <div className="p-5 rounded-sm bg-white/[0.02] border-l-2 border-[#ff007f] font-mono-tech text-xs sm:text-sm text-neutral-300 space-y-2">
              <p className="leading-relaxed">
                “I approach modern creative production not as a prompt generator, but as a film director, visual artist, and sound designer. Technology gives us unprecedented velocity, but taste, story, and soul come strictly from human hands.”
              </p>
              <div className="text-[11px] text-[#ff007f] uppercase tracking-wider font-bold">
                — BARUN BISWAS
              </div>
            </div>

            <p className="text-sm text-neutral-400 font-mono-tech leading-relaxed">
              In a digital landscape crowded with generic templates and disposable content, 
              true impact requires bold art direction, meticulous pacing, and relentless editorial refinement. 
              Every project from my studio is engineered to command attention and endure.
            </p>
          </div>

          {/* Right Column: Creative Principles */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-7 rounded-sm bg-neutral-950/90 border border-white/10 relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="font-mono-tech text-xs uppercase tracking-wider text-white flex items-center gap-2">
                  <Film className="w-4 h-4 text-[#d4ff00]" />
                  DIRECTORIAL PILLARS
                </span>
                <span className="px-2.5 py-1 rounded bg-[#d4ff00]/10 text-[#d4ff00] font-mono-tech text-[10px] font-bold">
                  STUDIO STANDARDS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {humanCreativeTraits.map((trait) => (
                  <div key={trait.label} className="space-y-1.5 p-3 rounded bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-1.5 text-xs font-mono-tech font-bold text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0" />
                      <span>{trait.label}</span>
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono-tech leading-normal">
                      {trait.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Creative Balance Banner */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono-tech">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Sparkles className="w-4 h-4 text-[#ff007f]" />
                  <span>MODERN TOOLS: Exploratory Scale & Speed</span>
                </div>
                <div className="text-[#d4ff00] font-semibold">
                  HUMAN DIRECTION: Vision, Taste & Finished Master
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
