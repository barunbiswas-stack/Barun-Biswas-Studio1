import React, { useState } from 'react';
import { Lightbulb, Cpu, Eye, Wand2, PackageCheck, ChevronRight, Check } from 'lucide-react';
import { WORKFLOW_STAGES } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Lightbulb className="w-5 h-5" />;
      case 1: return <Cpu className="w-5 h-5" />;
      case 2: return <Eye className="w-5 h-5" />;
      case 3: return <Wand2 className="w-5 h-5" />;
      case 4: return <PackageCheck className="w-5 h-5" />;
      default: return <Lightbulb className="w-5 h-5" />;
    }
  };

  const activeStage = WORKFLOW_STAGES[activeStepIndex];

  return (
    <section id="process" className="py-24 border-b border-white/10 relative bg-[#09090c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full" />
              <span>CREATIVE WORKFLOW</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-none">
              FROM IDEA TO <span className="text-[#d4ff00]">FINAL FRAME</span>
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono-tech text-neutral-400 max-w-md">
            The 5-step symbiosis between artificial intelligence horsepower and human creative mastery. No blind prompts. Pure directorial intent.
          </div>
        </div>

        {/* 5-Step Progress Scrubber */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-sm border text-left transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? stage.accent === 'yellow'
                      ? 'border-[#d4ff00] bg-[#d4ff00]/10 shadow-[0_0_15px_rgba(212,255,0,0.2)]'
                      : 'border-[#ff007f] bg-[#ff007f]/10 shadow-[0_0_15px_rgba(255,0,127,0.2)]'
                    : 'border-white/10 bg-neutral-950/60 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono-tech text-xs font-bold ${
                    isActive
                      ? stage.accent === 'yellow' ? 'text-[#d4ff00]' : 'text-[#ff007f]'
                      : 'text-neutral-500'
                  }`}>
                    {stage.step}
                  </span>
                  <div className={`${
                    isActive
                      ? stage.accent === 'yellow' ? 'text-[#d4ff00]' : 'text-[#ff007f]'
                      : 'text-neutral-600'
                  }`}>
                    {getStepIcon(idx)}
                  </div>
                </div>
                <div className="font-display font-black text-base sm:text-lg text-white tracking-wide uppercase">
                  {stage.title}
                </div>
                <div className="text-[10px] font-mono-tech text-neutral-400 truncate mt-1">
                  {stage.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Display */}
        <div className="p-6 sm:p-10 rounded-sm bg-neutral-950 border border-white/20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-sm font-mono-tech text-xs font-bold ${
                  activeStage.accent === 'yellow'
                    ? 'bg-[#d4ff00] text-black'
                    : 'bg-[#ff007f] text-white'
                }`}>
                  STAGE {activeStage.step}
                </span>
                <span className="text-xs font-mono-tech text-neutral-400 uppercase tracking-wider">
                  {activeStage.subtitle}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-snug uppercase">
                {activeStage.headline}
              </h3>

              <p className="text-sm sm:text-base font-mono-tech text-neutral-300 leading-relaxed">
                {activeStage.description}
              </p>

              {/* Detail deliverables */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono-tech text-neutral-400 uppercase tracking-wider">
                  STAGE DELIVERABLES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStage.details.map((item) => (
                    <div key={item} className="flex items-center gap-2 p-2 rounded bg-white/[0.02] border border-white/5 text-xs font-mono-tech text-neutral-300">
                      <Check className={`w-3.5 h-3.5 shrink-0 ${
                        activeStage.accent === 'yellow' ? 'text-[#d4ff00]' : 'text-[#ff007f]'
                      }`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Director's Command Box */}
            <div className="lg:col-span-5 p-6 rounded-sm bg-[#09090c] border border-white/15 space-y-4">
              <div className="text-xs font-mono-tech text-[#d4ff00] uppercase tracking-wider flex items-center justify-between pb-3 border-b border-white/10">
                <span>DIRECTOR'S PERSPECTIVE</span>
                <span>STEP {activeStepIndex + 1} OF 5</span>
              </div>

              <div className="p-4 rounded bg-white/[0.02] border border-white/5">
                <div className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-widest mb-1">
                  DIRECTOR'S RULE:
                </div>
                <p className="text-xs font-mono-tech text-neutral-200 leading-relaxed italic">
                  "{activeStage.humanRole}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono-tech">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-neutral-300 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                >
                  ← PREVIOUS
                </button>
                <button
                  disabled={activeStepIndex === WORKFLOW_STAGES.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(WORKFLOW_STAGES.length - 1, prev + 1))}
                  className="px-4 py-1.5 rounded-sm bg-[#d4ff00] text-black font-bold hover:bg-white transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                >
                  NEXT STAGE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
