import React, { useState } from 'react';
import { FlaskConical, Sliders, Sparkles, Eye, RefreshCw, Terminal, Check, Layers } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/portfolioData';

interface CreativeLabProps {
  onToggleVfxLayer?: (layer: string) => void;
}

export const CreativeLab: React.FC<CreativeLabProps> = () => {
  const [activeExpIdx, setActiveExpIdx] = useState(0);
  const [activeAspect, setActiveAspect] = useState<'16:9' | '9:16' | '1:1'>('16:9');
  const [scanlinesActive, setScanlinesActive] = useState(true);
  const [bloomActive, setBloomActive] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);
  const [chaosValue, setChaosValue] = useState(15);
  const [stylizeValue, setStylizeValue] = useState(250);

  const activeExp = LAB_EXPERIMENTS[activeExpIdx];

  const triggerGlitchPulse = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 400);
  };

  return (
    <section id="lab" className="py-24 border-b border-white/10 relative bg-[#09090c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full" />
              <span>07 // EXPERIMENTAL R&D BENCH</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-none">
              THE CREATIVE <span className="text-[#d4ff00]">LAB</span>
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono-tech text-neutral-400 max-w-md">
            Unpublished visual experiments, neural model stress-testing, custom LoRA weights, and shader anomalies. Where tomorrow's commercial aesthetics are forged.
          </div>
        </div>

        {/* Interactive VFX & Parameter Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visual Display Area (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div
              className={`relative rounded-sm overflow-hidden border border-white/20 bg-neutral-950 transition-all duration-300 flex items-center justify-center ${
                activeAspect === '16:9' ? 'aspect-video' : activeAspect === '9:16' ? 'aspect-[9/14] max-w-sm mx-auto' : 'aspect-square max-w-md mx-auto'
              } ${bloomActive ? 'glow-yellow' : ''} ${glitchActive ? 'animate-glitch' : ''}`}
            >
              <img
                src={activeExp.image}
                alt={activeExp.title}
                className="w-full h-full object-cover"
              />

              {/* Scanlines Overlay if enabled */}
              {scanlinesActive && (
                <div className="absolute inset-0 scanlines pointer-events-none opacity-60" />
              )}

              {/* Lab HUD Overlay */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2 py-0.5 rounded bg-black/80 font-mono-tech text-[10px] text-[#d4ff00] border border-[#d4ff00]/30">
                  {activeExp.badge}
                </span>
                <span className="px-2 py-0.5 rounded bg-black/80 font-mono-tech text-[10px] text-white/80 border border-white/10">
                  PASS: {activeExp.iterationCount} ITERATIONS
                </span>
              </div>

              {/* Prompt Bar Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded bg-black/90 backdrop-blur-md border border-white/15 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-neutral-400">
                  <span className="text-[#ff007f] font-bold">LATENT SEED CODE:</span>
                  <span>STYLE: RAW</span>
                </div>
                <div className="font-mono-tech text-xs text-white truncate">
                  {activeExp.promptSnippet} --chaos {chaosValue} --s {stylizeValue}
                </div>
              </div>
            </div>

            {/* Experiment selector pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {LAB_EXPERIMENTS.map((exp, idx) => (
                <button
                  key={exp.id}
                  onClick={() => {
                    setActiveExpIdx(idx);
                    triggerGlitchPulse();
                  }}
                  className={`p-3 rounded-sm border text-left transition-all cursor-pointer ${
                    activeExpIdx === idx
                      ? 'border-[#d4ff00] bg-[#d4ff00]/10 text-white'
                      : 'border-white/10 bg-neutral-900/60 text-neutral-400 hover:border-white/30'
                  }`}
                >
                  <div className="text-[10px] font-mono-tech text-[#d4ff00]">EXP // 0{idx + 1}</div>
                  <div className="font-display font-bold text-xs text-white truncate mt-0.5">
                    {exp.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive VFX Switchboard & Shaders */}
          <div className="lg:col-span-4 p-6 rounded-sm bg-neutral-950 border border-white/20 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono-tech text-xs text-[#d4ff00] uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                VFX RENDER CONTROLS
              </span>
              <span className="text-[10px] font-mono-tech text-neutral-400">
                LIVE INTERACTION
              </span>
            </div>

            {/* Aspect Ratio Switcher */}
            <div className="space-y-2">
              <label className="text-xs font-mono-tech text-neutral-300 block">
                CANVAS PROPORTIONS:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['16:9', '9:16', '1:1'] as const).map((aspect) => (
                  <button
                    key={aspect}
                    onClick={() => setActiveAspect(aspect)}
                    className={`py-1.5 px-2 rounded-sm text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer ${
                      activeAspect === aspect
                        ? 'bg-[#d4ff00] text-black font-bold'
                        : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white'
                    }`}
                  >
                    {aspect}
                  </button>
                ))}
              </div>
            </div>

            {/* Live VFX Layer Toggles */}
            <div className="space-y-2">
              <label className="text-xs font-mono-tech text-neutral-300 block">
                SHADER & VFX FILTERS:
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setScanlinesActive(!scanlinesActive)}
                  className={`w-full p-2.5 rounded-sm border text-xs font-mono-tech flex items-center justify-between cursor-pointer transition-colors ${
                    scanlinesActive ? 'border-[#d4ff00] bg-[#d4ff00]/10 text-white' : 'border-white/10 text-neutral-400'
                  }`}
                >
                  <span>CRT SCANLINES EMULATION</span>
                  <span className="font-bold">{scanlinesActive ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => setBloomActive(!bloomActive)}
                  className={`w-full p-2.5 rounded-sm border text-xs font-mono-tech flex items-center justify-between cursor-pointer transition-colors ${
                    bloomActive ? 'border-[#ff007f] bg-[#ff007f]/10 text-white' : 'border-white/10 text-neutral-400'
                  }`}
                >
                  <span>ANAMORPHIC NEON BLOOM</span>
                  <span className="font-bold">{bloomActive ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  onClick={triggerGlitchPulse}
                  className="w-full p-2.5 rounded-sm border border-white/20 bg-neutral-900 hover:border-white text-xs font-mono-tech flex items-center justify-between text-neutral-200 cursor-pointer"
                >
                  <span>TRIGGER TEMPORAL GLITCH</span>
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Param Sliders */}
            <div className="space-y-3 pt-2">
              <div>
                <div className="flex justify-between text-xs font-mono-tech text-neutral-400 mb-1">
                  <span>CHAOS SEED:</span>
                  <span className="text-[#d4ff00]">{chaosValue}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={chaosValue}
                  onChange={(e) => setChaosValue(Number(e.target.value))}
                  className="w-full accent-[#d4ff00] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono-tech text-neutral-400 mb-1">
                  <span>STYLIZE WEIGHT:</span>
                  <span className="text-[#ff007f]">{stylizeValue}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={stylizeValue}
                  onChange={(e) => setStylizeValue(Number(e.target.value))}
                  className="w-full accent-[#ff007f] cursor-pointer"
                />
              </div>
            </div>

            {/* Human touch explanation */}
            <div className="p-3 rounded-sm bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[10px] font-mono-tech text-neutral-400 uppercase">
                HUMAN INTERVENTION NOTE:
              </span>
              <p className="text-xs font-mono-tech text-neutral-300 leading-normal">
                {activeExp.humanTouch}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
