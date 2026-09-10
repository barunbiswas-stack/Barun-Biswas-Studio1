import React, { useState } from 'react';
import { ArrowUpRight, Eye, Play, Sparkles, Filter, Music2, Film } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { CategoryType, Project } from '../types';
import { audioSynth } from '../utils/audioSynth';
import { useLanguage } from '../context/LanguageContext';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
  onPlayAudioTrack: (type: 'cyber' | 'ambient' | 'energetic') => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  onSelectProject,
  onPlayAudioTrack
}) => {
  const { t, isBengali, isMixed, bi } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<CategoryType>('ALL');

  const filterCategories: { label: string; value: CategoryType }[] = [
    { label: bi('ALL WORK', 'সকল কাজ'), value: 'ALL' },
    { label: bi('COMMERCIAL ADS', 'বিজ্ঞাপন ও কমার্শিয়াল'), value: 'ADS' },
    { label: bi('AI MUSIC & SOUND', 'মিউজিক ও সাউন্ড'), value: 'MUSIC' },
    { label: bi('CINEMATIC FILMS', 'সিনেমাটিক ভিডিও'), value: 'VIDEO' },
    { label: bi('GRAPHICS & POSTERS', 'গ্রাফিক্স ও পোস্টার'), value: 'GRAPHICS' },
    { label: bi('DIGITAL ART', 'ডিজিটাল আর্ট'), value: 'AI ART' },
    { label: bi('SOCIAL REELS', 'সোশ্যাল রিলস'), value: 'SOCIAL' },
  ];

  const filteredProjects = selectedFilter === 'ALL'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="work" className="py-20 sm:py-24 border-b border-white/10 relative bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full" />
              <span>{bi('SELECTED PORTFOLIO', 'নির্বাচিত পোর্টফোলিও')}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
              {isMixed ? (
                <>
                  FEATURED <span className="text-[#ff007f]">PORTFOLIO</span>{' '}
                  <span className="text-xl sm:text-2xl md:text-3xl text-neutral-400 font-normal block sm:inline mt-1 sm:mt-0">
                    // নির্বাচিত কাজসমূহ
                  </span>
                </>
              ) : isBengali ? (
                <>
                  নির্বাচিত <span className="text-[#ff007f]">কাজসমূহ</span>
                </>
              ) : (
                <>
                  FEATURED <span className="text-[#ff007f]">PORTFOLIO</span>
                </>
              )}
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono-tech text-neutral-400 max-w-md">
            {bi(
              'A curated catalog of cinematic films, commercial campaigns, sound design, and experimental visual art. Click any project to inspect full reels, storyline, and assets.',
              'মৌলিক চলচ্চিত্র, বাণিজ্যিক ক্যাম্পেইন ও সাউন্ড ডিজাইনের কিউরেটেড পোর্টফোলিও। সম্পূর্ণ বিবরণ, রিল এবং স্টোরিলাইন দেখতে যেকোনো প্রজেক্টে ক্লিক করুন।'
            )}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-12 scrollbar-none">
          <span className="text-xs font-mono-tech text-neutral-500 uppercase tracking-wider mr-1 sm:mr-2 shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#d4ff00]" />
            {bi('FILTER:', 'ফিল্টার:')}
          </span>
          {filterCategories.map((tab) => (
            <button
              key={tab.value}
              id={`filter-tab-${tab.value.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => {
                audioSynth.playSfx('click');
                setSelectedFilter(tab.value);
              }}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono-tech uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === tab.value
                  ? 'bg-[#d4ff00] text-black font-extrabold shadow-[0_0_12px_rgba(212,255,0,0.3)]'
                  : 'bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30'
              }`}
            >
              {tab.label}
              {tab.value !== 'ALL' && (
                <span className="ml-1.5 text-[10px] opacity-70">
                  ({PORTFOLIO_PROJECTS.filter(p => p.category === tab.value).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Irregular Editorial Masonry Grid (Asymmetric layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {filteredProjects.map((project, index) => {
            // Calculate asymmetric editorial column spans
            const isLarge = index % 3 === 0;
            const isMedium = index % 3 === 1;
            const colSpan = isLarge ? 'md:col-span-8' : isMedium ? 'md:col-span-4' : 'md:col-span-6';
            const minHeight = isLarge ? 'min-h-[360px] sm:min-h-[460px]' : 'min-h-[300px] sm:min-h-[380px]';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => {
                  audioSynth.playSfx('whoosh');
                  onSelectProject(project);
                }}
                className={`${colSpan} group relative rounded-sm overflow-hidden border border-white/15 bg-neutral-950 flex flex-col justify-between p-6 ${minHeight} cursor-pointer transition-all duration-300 hover:border-[#d4ff00] hover:shadow-[0_0_35px_rgba(212,255,0,0.2)]`}
              >
                {/* Background Image with Hover Parallax Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40"
                  />
                  {/* Video loop teaser on hover */}
                  {project.videoTeaser && (
                    <video
                      src={project.videoTeaser}
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-[#09090c]/50 to-transparent" />
                </div>

                {/* Top Card HUD: Project Number & Category Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-white/15 font-mono-tech text-[10px] text-white tracking-widest uppercase flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${project.accentColor === 'yellow' ? 'bg-[#d4ff00]' : 'bg-[#ff007f]'}`} />
                    {project.category} // {project.year}
                  </span>

                  <div className="flex items-center gap-2">
                    {/* Hover Prompt */}
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/80 text-[9px] font-mono-tech text-[#d4ff00] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-2.5 h-2.5 fill-current" />
                      {isBengali ? 'অটোপ্লে' : 'AUTOPLAY'}
                    </span>

                    {project.audioSample && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audioSynth.playSfx('click');
                          onPlayAudioTrack(project.audioSample?.synthWaveType || 'cyber');
                        }}
                        title={isBengali ? 'অডিও শুনুন' : 'Preview Project Audio'}
                        className="px-2 py-1 rounded-sm bg-black/80 border border-white/20 text-[#d4ff00] hover:bg-[#d4ff00] hover:text-black transition-colors font-mono-tech text-[10px] flex items-center gap-1 cursor-pointer"
                      >
                        <Music2 className="w-3 h-3" />
                        <span>{isBengali ? 'অডিও' : 'AUDIO'}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom Card Content: Title, Subtitle & Deep Dive CTA */}
                <div className="relative z-10 space-y-3 pt-24">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono-tech uppercase tracking-widest text-[#ff007f]">
                      {project.subtitle}
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide uppercase group-hover:text-[#d4ff00] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <div className="w-9 h-9 rounded-sm bg-white/10 group-hover:bg-[#d4ff00] group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-mono-tech text-neutral-300 line-clamp-2 max-w-xl">
                    {project.brief}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 font-mono-tech text-[10px] text-neutral-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
