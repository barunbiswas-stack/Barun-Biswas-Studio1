import React, { useState, useMemo } from 'react';
import { Calendar, Award, Sparkles, Film, ArrowUpRight, Volume2, CheckCircle2, ChevronRight, Filter } from 'lucide-react';
import { Project } from '../types';
import { audioSynth } from '../utils/audioSynth';
import { useLanguage } from '../context/LanguageContext';

interface TimelineItem {
  id: string;
  year: string;
  quarter: string;
  title: string;
  category: 'COMMERCIAL' | 'NARRATIVE' | 'MUSIC' | 'EXHIBITION' | 'MILESTONE';
  role: string;
  clientOrVenue: string;
  description: string;
  highlight: string;
  projectId?: string; // links to Project in portfolio
  image?: string;
  badge?: string;
  audioTrack?: 'cyber' | 'ambient' | 'energetic';
}

const TIMELINE_EVENTS: TimelineItem[] = [
  {
    id: 'tl-1',
    year: '2026',
    quarter: 'Q3',
    title: 'KINETIC VOLT — GLOBAL BEVERAGE CAMPAIGN',
    category: 'COMMERCIAL',
    role: 'Commercial Director & Sound Designer',
    clientOrVenue: 'Kinetic Labs Global',
    description: 'Directed the breakthrough 45s commercial featuring micro-fluidic high-velocity splashes, 120fps motion vectors, and custom analog sub-bass foley.',
    highlight: '16:9 Hero Spot + 3D Holographic Billboard Master in Tokyo & NYC.',
    projectId: 'kinetic-volt-ad',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
    badge: 'COMMERCIAL LAUNCH',
    audioTrack: 'energetic'
  },
  {
    id: 'tl-2',
    year: '2026',
    quarter: 'Q2',
    title: 'NEON HORIZON — NARRATIVE RETROWAVE FILM',
    category: 'MUSIC',
    role: 'Director, Storyboard Artist & Music Producer',
    clientOrVenue: 'Astral Wave Records',
    description: 'Premiered 4K DCI 2.39:1 widescreen cyberpunk music video. Engineered a human-directed emotional narrative layered over analog Moog synthesizer arpeggiators.',
    highlight: 'Over 1.4M views in opening fortnight; official Spotify Canvas partner release.',
    projectId: 'neon-horizon-music-video',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    badge: 'OFFICIAL SELECTION',
    audioTrack: 'cyber'
  },
  {
    id: 'tl-3',
    year: '2026',
    quarter: 'Q1',
    title: 'LUMINA SPECTRE — AUTONOMOUS HYPER-EV',
    category: 'COMMERCIAL',
    role: 'Automotive Director & VFX Supervisor',
    clientOrVenue: 'Spectre Mobility Europe',
    description: 'Blended monolithic brutalist alpine architecture with liquid aerodynamic vehicle chassis. Spliced real studio rim lighting and ACEScc 12-bit color gamut.',
    highlight: 'Selected for Berlin Commercial Awards (Best Visual Craft Category).',
    projectId: 'lumina-spectre-ev',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop',
    badge: 'AWARDS CONTENDER',
    audioTrack: 'energetic'
  },
  {
    id: 'tl-4',
    year: '2025',
    quarter: 'Q4',
    title: 'THE LAST CARTOGRAPHER — SCI-FI NARRATIVE SHORT',
    category: 'NARRATIVE',
    role: 'Writer, Director & Ambient Composer',
    clientOrVenue: 'Runway AI Film Festival & Tribeca X',
    description: 'A quiet, introspective cinematic poem of a solitary cartographer mapping dying celestial star systems. Paced with Andrei Tarkovsky meditative breathing rooms.',
    highlight: 'Official Festival Selection; screened at Lincoln Center & London BFI.',
    projectId: 'the-last-cartographer',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    badge: 'FESTIVAL LAURELS',
    audioTrack: 'ambient'
  },
  {
    id: 'tl-5',
    year: '2025',
    quarter: 'Q3',
    title: 'CYBERNETIC POSTER SUITE & EDITORIAL SYSTEM',
    category: 'EXHIBITION',
    role: 'Typographer & Creative Technologist',
    clientOrVenue: 'Zurich Design Museum Exhibition (Special Feature)',
    description: 'Exploration of Swiss 12-column structural grid discipline colliding with generative mathematical topologies. Hand-set micro-kerning and neon Pantone spot inks.',
    highlight: 'Published in Swiss Design Annual & 6x B1 Screenprint Limited Edition.',
    projectId: 'cybernetic-biennale-posters',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
    badge: 'MUSEUM FEATURE'
  },
  {
    id: 'tl-6',
    year: '2025',
    quarter: 'Q1',
    title: 'SYNTHESIS VOL. 1 — MODULAR SOUNDSCAPE EP',
    category: 'MUSIC',
    role: 'Solo Electronic Artist & Sound Architect',
    clientOrVenue: 'Independent Sound Architecture',
    description: '5-track concept release merging tactile Eurorack modular synth patches, granular field recordings, and real acoustic guitar harmonics.',
    highlight: 'Binaural spatial audio release with interactive real-time visualizer.',
    projectId: 'synthesis-vol-1-music',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    badge: 'EP RELEASE',
    audioTrack: 'cyber'
  },
  {
    id: 'tl-7',
    year: '2024',
    quarter: 'Q4',
    title: '10M+ AGGREGATE DIGITAL VIEWS MILESTONE',
    category: 'MILESTONE',
    role: 'Studio Production Benchmark',
    clientOrVenue: 'Global Streaming, Social & Commercial Broadcast',
    description: 'Combined client campaigns, festival screenings, and viral short-form releases cross the 10,000,000 verified viewer milestone across YouTube, Vimeo, and OOH.',
    highlight: 'Proved commercial viability of Human-Directed AI hybrid pipelines.',
    badge: 'STUDIO RECORD'
  },
  {
    id: 'tl-8',
    year: '2024',
    quarter: 'Q2',
    title: 'BIOMORPHIC RESONANCE — LIVING DIGITAL CANVAS',
    category: 'EXHIBITION',
    role: 'Fine Artist & Installation Designer',
    clientOrVenue: 'Contemporary Gallery Showcase',
    description: 'Surreal visual art series investigating organic decay vs synthetic permanence. Paired 120x120cm Hahnemühle rag prints with 60fps breathing digital loops.',
    highlight: '12-piece limited physical print edition completely acquired on opening night.',
    projectId: 'biomorphic-resonance-art',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop',
    badge: 'SOLD OUT EXHIBITION',
    audioTrack: 'ambient'
  },
  {
    id: 'tl-9',
    year: '2023',
    quarter: 'Q3',
    title: 'STUDIO GENESIS — THE HUMAN + AI CREATIVE LAB',
    category: 'MILESTONE',
    role: 'Founder & Creative Director',
    clientOrVenue: 'Barun Biswas Studio',
    description: 'Established the studio core philosophy: "Simple is the Best". Committed to zero generic AI slop, 100% human editorial taste, frame-by-frame retouching, and bespoke sound design.',
    highlight: 'Pioneered proprietary workflow combining diffusion motion brushes with Premiere and After Effects.',
    badge: 'STUDIO FOUNDED'
  }
];

interface ProjectTimelineProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onPlayAudioTrack?: (type: 'cyber' | 'ambient' | 'energetic') => void;
}

export const ProjectTimeline: React.FC<ProjectTimelineProps> = ({
  projects,
  onSelectProject,
  onPlayAudioTrack
}) => {
  const { t, isBengali } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredEvents = useMemo(() => {
    return TIMELINE_EVENTS.filter((item) => {
      const matchYear = selectedYear === 'ALL' || item.year === selectedYear;
      const matchCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
      return matchYear && matchCategory;
    });
  }, [selectedYear, selectedCategory]);

  const handleCardClick = (item: TimelineItem) => {
    if (!item.projectId) return;
    const proj = projects.find((p) => p.id === item.projectId);
    if (proj) {
      audioSynth.playSfx('click');
      onSelectProject(proj);
    }
  };

  const handlePlayAudio = (e: React.MouseEvent, type?: 'cyber' | 'ambient' | 'energetic') => {
    e.stopPropagation();
    if (!type) return;
    if (onPlayAudioTrack) onPlayAudioTrack(type);
    else audioSynth.playTrack(type);
  };

  return (
    <section id="timeline" className="py-24 bg-[#08080c] border-b border-white/10 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#d4ff00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff007f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-2">
              <Calendar className="w-4 h-4" />
              <span>{t.timeline.badge}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none">
              {isBengali ? (
                <>
                  প্রজেক্ট <span className="text-[#d4ff00]">টাইমলাইন</span> ও মাইলফলক
                </>
              ) : (
                <>
                  PROJECTS <span className="text-[#d4ff00]">TIMELINE</span> & MILESTONES
                </>
              )}
            </h2>
          </div>

          {/* Philosophy Highlight Pill: Simple is the best */}
          <div className="p-3 rounded-sm bg-neutral-950 border border-white/15 max-w-sm self-start md:self-auto">
            <div className="flex items-center gap-2 text-[11px] font-mono-tech text-[#ff007f] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBengali ? 'পরিচালনার দর্শন' : 'DIRECTOR PHILOSOPHY'}</span>
            </div>
            <p className="text-xs font-mono-tech text-neutral-300 leading-relaxed">
              <strong className="text-white">{isBengali ? '“সহজতাই শ্রেষ্ঠ”' : '“Simple is the best.”'}</strong>{' '}
              {isBengali
                ? 'অতিরিক্ত ভিজ্যুয়াল গোলমাল মুছে ফেলে খাঁটি মানবিক আবেগের প্রতিফলন।'
                : 'Every cut, frequency, and frame stripped of unnecessary noise to amplify pure emotional impact.'}
            </p>
          </div>
        </div>

        {/* Filter Controls: Year & Category */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          {/* Year Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {['ALL', '2026', '2025', '2024', '2023'].map((yr) => (
              <button
                key={yr}
                onClick={() => {
                  audioSynth.playSfx('click');
                  setSelectedYear(yr);
                }}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  selectedYear === yr
                    ? 'bg-[#d4ff00] text-black font-bold shadow-[0_0_12px_rgba(212,255,0,0.4)]'
                    : 'bg-neutral-900/80 border border-white/15 text-neutral-400 hover:text-white hover:border-white/30'
                }`}
              >
                {yr === 'ALL' ? (isBengali ? 'সকল বছর' : 'ALL YEARS') : (isBengali ? `${yr} সাল` : yr)}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'ALL', label: isBengali ? 'সকল ক্ষেত্র' : 'ALL DISCIPLINES' },
              { id: 'COMMERCIAL', label: isBengali ? 'বিজ্ঞাপন' : 'COMMERCIALS' },
              { id: 'NARRATIVE', label: isBengali ? 'কাহিনী চিত্র' : 'NARRATIVE' },
              { id: 'MUSIC', label: isBengali ? 'সঙ্গীত' : 'MUSIC' },
              { id: 'EXHIBITION', label: isBengali ? 'প্রদর্শনী' : 'EXHIBITIONS' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  audioSynth.playSfx('click');
                  setSelectedCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#ff007f] text-white font-bold shadow-[0_0_12px_rgba(255,0,127,0.4)]'
                    : 'bg-neutral-900/80 border border-white/15 text-neutral-400 hover:text-white hover:border-white/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chronological Vertical Timeline Stem & Cards */}
        <div className="relative">
          {/* Central Vertical Spine Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d4ff00] via-white/20 to-[#ff007f] -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {filteredEvents.map((item, index) => {
              const isEven = index % 2 === 0;
              const hasProject = Boolean(item.projectId);

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12 group`}
                >
                  {/* Timeline Center Node Pip */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 z-20 hidden sm:flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-black border-2 border-[#d4ff00] flex items-center justify-center group-hover:scale-125 group-hover:border-[#ff007f] transition-all duration-300 shadow-[0_0_10px_rgba(212,255,0,0.6)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] group-hover:bg-[#ff007f]" />
                    </div>
                  </div>

                  {/* Date & Quarter Marker (Opposite side) */}
                  <div
                    className={`hidden sm:flex sm:w-1/2 items-center ${
                      isEven ? 'justify-start pl-8' : 'justify-end pr-8'
                    } pt-4`}
                  >
                    <div className="text-right flex items-center gap-3 font-mono-tech">
                      <span className="text-2xl md:text-3xl font-display font-black text-white group-hover:text-[#d4ff00] transition-colors">
                        {item.year}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/10 text-xs text-[#ff007f] font-bold border border-white/15">
                        {item.quarter}
                      </span>
                    </div>
                  </div>

                  {/* Main Event Card (Half Width) */}
                  <div
                    onClick={() => hasProject && handleCardClick(item)}
                    className={`w-full sm:w-1/2 p-6 rounded-sm bg-neutral-950/90 border border-white/15 transition-all duration-300 relative overflow-hidden ${
                      hasProject ? 'cursor-pointer hover:border-[#d4ff00] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.9)]' : ''
                    }`}
                  >
                    {/* Mobile Date Header */}
                    <div className="flex sm:hidden items-center justify-between mb-3 pb-2 border-b border-white/10 font-mono-tech text-xs">
                      <span className="font-bold text-[#d4ff00] text-sm">{item.year} // {item.quarter}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded bg-[#ff007f]/20 text-[#ff007f] font-bold text-[10px]">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Top Row: Category & Badges */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono-tech text-[#d4ff00] font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-neutral-400 text-xs font-mono-tech hidden sm:inline">
                          {item.clientOrVenue}
                        </span>
                      </div>

                      {item.badge && (
                        <span className="hidden sm:inline px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-neutral-300">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight mb-2 group-hover:text-[#d4ff00] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      {hasProject && <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#d4ff00] shrink-0 ml-2" />}
                    </h3>

                    {/* Role */}
                    <div className="text-xs font-mono-tech text-[#ff007f] font-semibold mb-3">
                      ROLE: {item.role}
                    </div>

                    {/* Optional Image Preview thumbnail */}
                    {item.image && (
                      <div className="aspect-[21/9] sm:aspect-[16/9] w-full rounded-sm overflow-hidden mb-3 border border-white/10 relative group-hover:border-white/30">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center filter brightness-90 group-hover:brightness-105 transition-all duration-500 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        
                        {item.audioTrack && (
                          <button
                            onClick={(e) => handlePlayAudio(e, item.audioTrack)}
                            className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-[#ff007f]/40 hover:border-[#ff007f] text-[10px] font-mono-tech text-white flex items-center gap-1.5 cursor-pointer"
                          >
                            <Volume2 className="w-3 h-3 text-[#ff007f]" />
                            <span>PLAY SCORE</span>
                          </button>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs font-mono-tech text-neutral-300 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Key Highlight */}
                    <div className="p-2.5 rounded bg-white/[0.03] border-l-2 border-[#d4ff00] text-[11px] font-mono-tech text-neutral-400">
                      <strong className="text-white uppercase font-display tracking-wider">
                        {isBengali ? 'বিশেষ অর্জন: ' : 'BENCHMARK: '}
                      </strong>
                      <span>{item.highlight}</span>
                    </div>

                    {/* Interactive CTA */}
                    {hasProject && (
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-[#d4ff00]">
                        <span className="flex items-center gap-1">
                          <Film className="w-3.5 h-3.5" />
                          <span>{isBengali ? 'সম্পূর্ণ চলচ্চিত্র ও ব্রেকডাউন দেখতে ক্লিক করুন' : 'CLICK TO VIEW FULL FILM & BREAKDOWN'}</span>
                        </span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Timeline Summary Quote: Simple is the best */}
        <div className="mt-16 p-6 sm:p-8 rounded-sm bg-neutral-950 border border-white/15 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4ff00]/10 border border-[#d4ff00]/30 font-mono-tech text-xs text-[#d4ff00] uppercase font-bold tracking-widest">
            <span>{isBengali ? 'পরিচালনার মূল অঙ্গীকার' : 'THE CREATIVE CREED'}</span>
          </div>
          <p className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
            {isBengali
              ? '“সহজতাই শ্রেষ্ঠ। অপরিমিতির চেয়ে স্পষ্ট ইচ্ছাশক্তিই প্রধান।”'
              : '“SIMPLE IS THE BEST. INTENTION OVER EXCESS.”'}
          </p>
          <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {isBengali
              ? 'অন্তহীন জেনারেটিভ বিশৃঙ্খলার যুগে, মুন্সিয়ানা কতটুকু সৃষ্টি করলেন তাতে নয় — বরং অপ্রয়োজনীয়কে ছেঁটে ফেলে বিশুদ্ধ সিনেমাটিক সত্যকে তুলে ধরার মধ্যেই সার্থকতা।'
              : 'In an era of endless generative noise, mastery is not about how much you can generate — it is about knowing what to cut away until only pure, undeniable cinema remains.'}
          </p>
        </div>
      </div>
    </section>
  );
};
