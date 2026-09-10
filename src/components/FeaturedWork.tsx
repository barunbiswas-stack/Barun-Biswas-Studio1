import React, { useState } from 'react';
import { ArrowUpRight, Play, Filter, Music2, Star, Sparkles } from 'lucide-react';
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
  const { isBengali, bi } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterCategories = [
    { label: isBengali ? 'সকল কাজ (All)' : 'ALL WORK', value: 'ALL' },
    { label: isBengali ? 'AI Animation (এআই অ্যানিমেশন)' : 'AI ANIMATION', value: 'AI_ANIMATION' },
    { label: isBengali ? 'Video Ads (বিজ্ঞাপন)' : 'VIDEO ADS', value: 'ADS' },
    { label: isBengali ? 'Music Video (মিউজিক ভিডিও)' : 'MUSIC VIDEOS', value: 'MUSIC' },
    { label: isBengali ? 'Graphic Design (গ্রাফিক্স)' : 'GRAPHIC DESIGN', value: 'GRAPHICS' },
    { label: isBengali ? 'AI Content (এআই কনটেন্ট)' : 'AI CONTENT', value: 'AI_CONTENT' },
  ];

  const filteredProjects = selectedFilter === 'ALL'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => {
        if (selectedFilter === 'AI_ANIMATION') {
          return p.category === 'VIDEO' || p.tags.some(t => t.toLowerCase().includes('animation') || t.toLowerCase().includes('vfx'));
        }
        if (selectedFilter === 'ADS') {
          return p.category === 'ADS';
        }
        if (selectedFilter === 'MUSIC') {
          return p.category === 'MUSIC';
        }
        if (selectedFilter === 'GRAPHICS') {
          return p.category === 'GRAPHICS';
        }
        if (selectedFilter === 'AI_CONTENT') {
          return p.category === 'AI ART' || p.category === 'SOCIAL' || p.category === 'VIDEO';
        }
        return true;
      });

  return (
    <section id="work" className="py-20 sm:py-24 border-b border-white/10 relative bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-3">
              <span className="w-2 h-2 bg-[#d4ff00] rounded-full animate-ping" />
              <span>{isBengali ? 'বাস্তব প্রজেক্ট পোর্টফোলিও' : 'SELECTED CLIENT PORTFOLIO'}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none">
              {isBengali ? (
                <>
                  আমার তৈরি করা <span className="text-[#d4ff00]">সফল প্রজেক্টসমূহ</span>
                </>
              ) : (
                <>
                  PROVEN CLIENT <span className="text-[#d4ff00]">PORTFOLIO</span>
                </>
              )}
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono-tech text-neutral-400 max-w-md">
            {isBengali
              ? 'বাণিজ্যিক বিজ্ঞাপন, এআই অ্যানিমেশন, সিনেমাটিক মিউজিক ভিডিও ও গ্রাফিক্সের বাছাইকৃত শোকেস। সম্পূর্ণ ডিটেইল ও রিল দেখতে যেকোনো প্রজেক্টে ক্লিক করুন।'
              : 'Click any project to inspect behind-the-scenes workflows, full reels, and delivery results.'}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-12 scrollbar-none">
          <span className="text-xs font-mono-tech text-neutral-500 uppercase tracking-wider mr-1 sm:mr-2 shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#d4ff00]" />
            {isBengali ? 'ক্যাটাগরি:' : 'FILTER:'}
          </span>
          {filterCategories.map((tab) => (
            <button
              key={tab.value}
              id={`filter-tab-${tab.value.toLowerCase()}`}
              onClick={() => {
                audioSynth.playSfx('click');
                setSelectedFilter(tab.value);
              }}
              className={`px-3.5 py-1.5 rounded text-xs font-mono-tech uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === tab.value
                  ? 'bg-[#d4ff00] text-black font-extrabold shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                  : 'bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {filteredProjects.map((project, index) => {
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
                className={`${colSpan} group relative rounded overflow-hidden border border-white/15 bg-neutral-950 flex flex-col justify-between p-6 ${minHeight} cursor-pointer transition-all duration-300 hover:border-[#d4ff00] hover:shadow-[0_0_35px_rgba(212,255,0,0.2)]`}
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
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/15 font-mono-tech text-[10px] text-white tracking-widest uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                    {project.category} // {project.year}
                  </span>

                  <div className="flex items-center gap-2">
                    {/* 5-star rating */}
                    <div className="flex items-center gap-0.5 px-2 py-1 rounded bg-black/80 text-[#d4ff00] text-[10px] font-mono-tech">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-white font-bold ml-0.5">৫.০</span>
                    </div>

                    {project.audioSample && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audioSynth.playSfx('click');
                          onPlayAudioTrack(project.audioSample?.synthWaveType || 'cyber');
                        }}
                        title={isBengali ? 'অডিও শুনুন' : 'Preview Project Audio'}
                        className="px-2 py-1 rounded bg-black/80 border border-white/20 text-[#d4ff00] hover:bg-[#d4ff00] hover:text-black transition-colors font-mono-tech text-[10px] flex items-center gap-1 cursor-pointer"
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
                    <div className="text-[11px] font-mono-tech uppercase tracking-widest text-[#d4ff00]">
                      {project.clientPlaceholder || 'Featured Production'} • {project.duration || 'Full Deliverable'}
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide uppercase group-hover:text-[#d4ff00] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <div className="w-9 h-9 rounded bg-white/10 group-hover:bg-[#d4ff00] group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-mono-tech text-neutral-200 line-clamp-2 max-w-xl">
                    {project.brief}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono-tech text-[10px] text-neutral-300"
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
