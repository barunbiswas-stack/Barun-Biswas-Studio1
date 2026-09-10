import React from 'react';
import { ArrowDown, ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSelectProject: (project: Project) => void;
  featuredProjects: Project[];
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectProject,
  featuredProjects,
  onOpenContact,
}) => {
  const { isBengali, isMixed, bi } = useLanguage();

  const primaryProject = featuredProjects[0];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-white/10 bg-[#09090c]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Status & Discipline Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono-tech tracking-wider text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
            <span className="text-white font-semibold">BARUN BISWAS</span>
            <span className="text-neutral-500">•</span>
            <span className="text-[#d4ff00]">{bi('CREATIVE DIRECTOR', 'চলচ্চিত্র ও ভিজ্যুয়াল পরিচালক')}</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono-tech text-neutral-400">
            <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-300">
              {bi('AVAILABLE FOR PROJECTS 2026', 'নতুন প্রজেক্ট বুকিং উন্মুক্ত')}
            </span>
            <span className="text-[#d4ff00]">✦ {bi('SIMPLE IS THE BEST', 'সহজতাই শ্রেষ্ঠ')}</span>
          </div>
        </div>

        {/* Main Dramatic Headline */}
        <div className="mb-6 max-w-5xl">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white uppercase select-none">
            {isMixed ? (
              <>
                DIRECTING <span className="text-[#d4ff00]">STORIES</span>,
                <br />
                COMMERCIAL FILMS & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff007f]">
                  VISUAL CINEMA.
                </span>
              </>
            ) : isBengali ? (
              <>
                চলচ্চিত্র <span className="text-[#d4ff00]">পরিচালনা</span>,
                <br />
                বাণিজ্যিক বিজ্ঞাপন ও <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff007f]">
                  ভিজ্যুয়াল দৃশ্যকাব্য।
                </span>
              </>
            ) : (
              <>
                DIRECTING <span className="text-[#d4ff00]">STORIES</span>,
                <br />
                COMMERCIAL FILMS & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff007f]">
                  VISUAL CINEMA.
                </span>
              </>
            )}
          </h1>
        </div>

        {/* Sub-headline description */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg font-mono-tech text-neutral-400 leading-relaxed tracking-wide mb-8 sm:mb-10">
          {bi(
            'Creating high-impact cinematic commercials, music videos, and experimental visual narratives. Guided by emotional clarity, bold aesthetics, and refined storytelling.',
            'সিনেমাটিক কমার্শিয়াল, শর্ট ফিল্ম, মিউজিক ভিডিও এবং মৌলিক ভিজ্যুয়াল নির্মাণ। আবেগ, নান্দনিকতা এবং শক্তিশালী স্টোরিটেলিং নিয়ে প্রতিটি কাজ পরিচালিত।'
          )}
        </p>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="#work"
            id="hero-view-work-btn"
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#d4ff00] text-black font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded hover:bg-white transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.25)] active:scale-95 cursor-pointer"
          >
            <span>{bi('VIEW PORTFOLIO', 'পোর্টফোলিও দেখুন')}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenContact}
            id="hero-lets-create-btn"
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-neutral-900 border border-white/20 text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase rounded hover:border-[#ff007f] hover:text-[#ff007f] transition-all duration-200 flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>{bi('GET IN TOUCH', 'যোগাযোগ করুন')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Director Reel Visual Card */}
        {primaryProject && (
          <div
            onClick={() => onSelectProject(primaryProject)}
            className="group relative rounded overflow-hidden border border-white/15 bg-neutral-950 cursor-pointer aspect-[16/9] sm:aspect-[21/9] max-h-[480px] w-full flex flex-col justify-end p-5 sm:p-8 transition-all duration-300 hover:border-[#d4ff00] hover:shadow-[0_0_30px_rgba(212,255,0,0.12)]"
          >
            {/* Background preview image */}
            <img
              src={primaryProject.thumbnailUrl}
              alt={primaryProject.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 opacity-60 group-hover:opacity-40"
            />

            {/* Subtle video teaser if available */}
            {primaryProject.videoTeaser && (
              <video
                src={primaryProject.videoTeaser}
                loop
                muted
                playsInline
                autoPlay
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-[#09090c]/40 to-transparent" />

            {/* Top Pill */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 font-mono-tech text-[10px] uppercase tracking-wider text-[#d4ff00] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                {bi('FEATURED SHOWREEL', 'নির্বাচিত ডিরেক্টর রিল')}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/80 border border-white/10 font-mono-tech text-[10px] text-neutral-300">
                <Sparkles className="w-3 h-3 text-[#ff007f]" />
                {primaryProject.year}
              </span>
            </div>

            {/* Bottom Info Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono-tech uppercase tracking-widest text-[#ff007f] mb-1">
                  {primaryProject.client} • {primaryProject.category}
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-wide uppercase group-hover:text-[#d4ff00] transition-colors">
                  {primaryProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-mono-tech mt-1 max-w-xl line-clamp-2">
                  {primaryProject.synopsis}
                </p>
              </div>

              {/* Play Button */}
              <div className="shrink-0 flex items-center gap-3">
                <span className="text-xs font-mono-tech text-neutral-300 group-hover:text-white uppercase tracking-wider hidden md:inline">
                  {bi('CLICK TO VIEW PROJECT', 'সম্পূর্ণ প্রজেক্ট দেখুন')}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#d4ff00] text-black flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4 Pillars of Work below Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-white/10 font-mono-tech text-xs text-neutral-400">
          <div className="p-3 rounded bg-white/[0.02] border border-white/5">
            <span className="text-[#d4ff00] block mb-1">01 //</span>
            <span className="text-white font-semibold block">{bi('FILM DIRECTING', 'চলচ্চিত্র পরিচালনা')}</span>
            <span className="text-[11px] text-neutral-400">Narrative & Short Films</span>
          </div>
          <div className="p-3 rounded bg-white/[0.02] border border-white/5">
            <span className="text-[#d4ff00] block mb-1">02 //</span>
            <span className="text-white font-semibold block">{bi('COMMERCIAL ADS', 'বাণিজ্যিক বিজ্ঞাপন')}</span>
            <span className="text-[11px] text-neutral-400">Brands & Campaigns</span>
          </div>
          <div className="p-3 rounded bg-white/[0.02] border border-white/5">
            <span className="text-[#d4ff00] block mb-1">03 //</span>
            <span className="text-white font-semibold block">{bi('MUSIC & SOUND', 'মিউজিক ও সাউন্ড')}</span>
            <span className="text-[11px] text-neutral-400">Audio-Visual Design</span>
          </div>
          <div className="p-3 rounded bg-white/[0.02] border border-white/5">
            <span className="text-[#d4ff00] block mb-1">04 //</span>
            <span className="text-white font-semibold block">{bi('VISUAL ART & AI', 'ডিজিটাল ও এআই আর্ট')}</span>
            <span className="text-[11px] text-neutral-400">Next-gen Art & Posters</span>
          </div>
        </div>
      </div>
    </section>
  );
};
