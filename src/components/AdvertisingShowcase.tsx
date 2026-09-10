import React, { useState } from 'react';
import { Play, Sparkles, ArrowUpRight, Zap, Target, Gauge, ShieldCheck, Flame, Volume2 } from 'lucide-react';
import { Project } from '../types';
import { audioSynth } from '../utils/audioSynth';

interface AdvertisingShowcaseProps {
  onSelectProject: (project: Project) => void;
  adProjects: Project[];
  onOpenContact: (adService?: string) => void;
}

export const AdvertisingShowcase: React.FC<AdvertisingShowcaseProps> = ({
  onSelectProject,
  adProjects,
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'commercial' | 'social' | 'product'>('commercial');

  const adPillars = [
    {
      title: 'IMPOSSIBLE PRODUCT HERO SHOTS',
      desc: 'Liquid physics, macro condensation, zero-gravity levitation, and light rays that would cost $100k+ in traditional photography studios.',
      tag: 'VISUAL FIDELITY',
      accent: 'yellow'
    },
    {
      title: 'THE 0.8 SECOND RETENTION HOOK',
      desc: 'Engineered for Instagram, TikTok & YouTube pre-rolls. We shatter scroll numbness with unexpected visual collisions and rhythmic audio drops.',
      tag: 'HIGH CONVERSION',
      accent: 'pink'
    },
    {
      title: 'COHESIVE OMNICHANNEL SUITE',
      desc: 'One creative concept scaled across 16:9 television broadcasts, 9:16 vertical stories, OOH billboard motion graphics, and e-commerce stills.',
      tag: 'MULTI-FORMAT',
      accent: 'yellow'
    }
  ];

  return (
    <section id="advertising" className="py-24 border-b border-white/10 relative bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#ff007f] mb-3">
              <span className="w-1.5 h-1.5 bg-[#ff007f] rounded-full" />
              <span>COMMERCIAL & BRAND FILMS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-none">
              ADS THAT DON'T <br />
              <span className="text-[#d4ff00]">LOOK LIKE ADS.</span>
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono-tech text-neutral-400 max-w-md">
            Consumers skip boring ads. We design cinematic cultural statements — commercial campaigns that demand attention through visceral visual mastery.
          </div>
        </div>

        {/* Hero Commercial Featured Showcase */}
        {adProjects.length > 0 && (
          <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-sm border border-white/20 bg-neutral-950 p-6 sm:p-8 relative overflow-hidden">
            {/* Left Big Preview */}
            <div
              onClick={() => {
                audioSynth.playSfx('whoosh');
                onSelectProject(adProjects[0]);
              }}
              className="lg:col-span-7 group relative aspect-video rounded-sm overflow-hidden border border-white/15 bg-black cursor-pointer shadow-[0_0_30px_rgba(212,255,0,0.1)] hover:border-[#d4ff00]"
            >
              <img
                src={adProjects[0].coverImage}
                alt={adProjects[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-40"
              />

              {adProjects[0].videoTeaser && (
                <video
                  src={adProjects[0].videoTeaser}
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#d4ff00] text-black font-mono-tech text-[10px] font-bold uppercase tracking-wider">
                  FEATURED COMMERCIAL SPOT
                </span>
                <span className="px-2 py-0.5 rounded bg-black/80 border border-white/20 text-white font-mono-tech text-[9px] uppercase tracking-wider hidden sm:inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-2.5 h-2.5 fill-current text-[#d4ff00]" />
                  CLICK TO WATCH WITH SOUND
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono-tech text-[#ff007f] uppercase tracking-wider">
                    {adProjects[0].duration || 'COMMERCIAL SPOT'}
                  </div>
                  <div className="font-display font-black text-xl sm:text-2xl text-white uppercase group-hover:text-[#d4ff00] transition-colors">
                    {adProjects[0].title}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-[#d4ff00] group-hover:text-black flex items-center justify-center transition-all shadow-xl group-hover:scale-110 shrink-0">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Right Ad Metrics & Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono-tech text-xs text-[#d4ff00] tracking-wider uppercase">
                  COMMERCIAL METHODOLOGY
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase">
                  ELEVATING BRAND DESIRE
                </h3>
                <p className="text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed">
                  {adProjects[0].brief}
                </p>
              </div>

              {/* Pillars list */}
              <div className="space-y-3 pt-2">
                {adPillars.map((p) => (
                  <div key={p.title} className="p-3 rounded-sm bg-white/[0.02] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs font-bold text-white">
                        {p.title}
                      </span>
                      <span className={`text-[9px] font-mono-tech px-1.5 py-0.5 rounded ${
                        p.accent === 'yellow' ? 'text-[#d4ff00] bg-[#d4ff00]/10' : 'text-[#ff007f] bg-[#ff007f]/10'
                      }`}>
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-[11px] font-mono-tech text-neutral-400 leading-normal">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onOpenContact('Advertising & Commercials')}
                  className="py-3 px-6 bg-[#ff007f] text-white font-display font-extrabold text-xs uppercase tracking-wider rounded-sm hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  PITCH YOUR BRAND AD
                </button>
                <button
                  onClick={() => onSelectProject(adProjects[0])}
                  className="text-xs font-mono-tech text-neutral-300 hover:text-[#d4ff00] flex items-center gap-1 cursor-pointer"
                >
                  <span>READ FULL PROCESS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
