import React from 'react';
import { ArrowDown, ArrowUpRight, Play, Star, Sparkles, CheckCircle2, Film, Palette, Video, Music, Wand2 } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSelectProject: (project: Project) => void;
  featuredProjects: Project[];
  onOpenContact: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectProject,
  featuredProjects,
  onOpenContact,
}) => {
  const { isBengali, bi } = useLanguage();
  const primaryProject = featuredProjects[0];

  const skillChips = [
    { label: isBengali ? 'AI Animation (এআই অ্যানিমেশন)' : 'AI Animation', icon: <Film className="w-3.5 h-3.5 text-[#d4ff00]" /> },
    { label: isBengali ? 'Graphic Design (গ্রাফিক ডিজাইন)' : 'Graphic Design', icon: <Palette className="w-3.5 h-3.5 text-[#ff007f]" /> },
    { label: isBengali ? 'Video Ads (ভিডিও বিজ্ঞাপন)' : 'Video Ads & Commercials', icon: <Video className="w-3.5 h-3.5 text-[#00f0ff]" /> },
    { label: isBengali ? 'Music Video (মিউজিক ভিডিও)' : 'Music Video Creation', icon: <Music className="w-3.5 h-3.5 text-[#d4ff00]" /> },
    { label: isBengali ? 'AI Content (এআই কনটেন্ট তৈরি)' : 'AI Content Creation', icon: <Wand2 className="w-3.5 h-3.5 text-[#ff007f]" /> },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-white/10 bg-[#09090c] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#d4ff00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-80 h-80 bg-[#ff007f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Status & Verified Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono-tech tracking-wider text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
            <span className="text-white font-bold">BARUN BISWAS</span>
            <span className="text-neutral-500">•</span>
            <span className="text-[#d4ff00] font-semibold">
              {isBengali ? 'AI অ্যানিমেশন, ভিডিও অ্যাড ও কনটেন্ট স্পেশালিস্ট' : 'AI Animator, Commercial Director & Designer'}
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 border border-white/10 text-xs font-mono-tech">
            <div className="flex text-[#d4ff00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-white font-bold">৫.০ রেটিং</span>
            <span className="text-neutral-500">•</span>
            <span className="text-[#d4ff00]">{isBengali ? '১০০+ সফল প্রজেক্ট' : '100+ Projects'}</span>
          </div>
        </div>

        {/* Main High-Impact Headline */}
        <div className="mb-6 max-w-5xl">
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white uppercase select-none">
            {isBengali ? (
              <>
                আপনার ব্র্যান্ডের জন্য তৈরি করি <br className="hidden sm:block" />
                <span className="text-[#d4ff00]">AI ANIMATION</span>,{' '}
                <span className="text-[#ff007f]">GRAPHIC DESIGN</span>, <br className="hidden sm:block" />
                <span className="text-white">VIDEO ADS</span> ও{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#d4ff00]">
                  MUSIC VIDEO।
                </span>
              </>
            ) : (
              <>
                DIRECTING <span className="text-[#d4ff00]">AI ANIMATION</span>, <br className="hidden sm:block" />
                HIGH-CONVERTING <span className="text-[#ff007f]">VIDEO ADS</span> & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#d4ff00]">
                  CINEMATIC MUSIC VIDEOS.
                </span>
              </>
            )}
          </h1>
        </div>

        {/* Sub-headline description */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg font-mono-tech text-neutral-300 leading-relaxed tracking-wide mb-8">
          {isBengali
            ? 'আমি সাধারণ কোনো কনটেন্ট বানাই না — প্রতিটি ফ্রেমে থাকে আকর্ষণীয় হুক, আধুনিক এআই প্রযুক্তি এবং বিশ্বমানের ভিজ্যুয়াল কোয়ালিটি, যা ক্লায়েন্টদের প্রথম দর্শনেই মুগ্ধ করে এবং বিক্রি বাড়ায়।'
            : 'Transforming brand visions and musical narratives into ultra-high-converting visual cinema, viral AI reels, and award-winning creative assets that compel viewers to take action.'}
        </p>

        {/* 5 Core Skill Chips (Immediately visualizes skills) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          <span className="text-xs font-mono-tech text-neutral-400 font-semibold uppercase mr-1">
            {isBengali ? 'প্রধান দক্ষতাসমূহ:' : 'CORE SKILLS:'}
          </span>
          {skillChips.map((chip, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/15 text-xs font-mono-tech text-white hover:border-[#d4ff00] transition-colors"
            >
              {chip.icon}
              <span>{chip.label}</span>
            </div>
          ))}
        </div>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <button
            onClick={() => onOpenContact()}
            id="hero-hire-me-btn"
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#d4ff00] text-black font-display font-black text-xs sm:text-sm tracking-wider uppercase rounded hover:bg-white transition-all duration-200 flex items-center gap-2.5 shadow-[0_0_25px_rgba(212,255,0,0.3)] active:scale-95 cursor-pointer"
          >
            <span>{isBengali ? 'সরাসরি প্রজেক্ট দিন / কাজ শুরু করুন' : 'HIRE ME FOR A PROJECT'}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>

          <a
            href="#work"
            id="hero-view-work-btn"
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-neutral-900 border border-white/20 text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase rounded hover:border-[#d4ff00] hover:text-[#d4ff00] transition-all duration-200 flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>{isBengali ? 'কাজের পোর্টফোলিও দেখুন' : 'EXPLORE PORTFOLIO'}</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Featured Showcase Reel Card (Immediate proof of quality) */}
        {primaryProject && (
          <div
            onClick={() => onSelectProject(primaryProject)}
            className="group relative rounded overflow-hidden border border-white/15 bg-neutral-950 cursor-pointer aspect-[16/9] sm:aspect-[21/9] max-h-[460px] w-full flex flex-col justify-end p-5 sm:p-8 transition-all duration-300 hover:border-[#d4ff00] hover:shadow-[0_0_35px_rgba(212,255,0,0.15)]"
          >
            <img
              src={primaryProject.coverImage}
              alt={primaryProject.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 opacity-60 group-hover:opacity-40"
            />

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
                {isBengali ? 'ফিচার্ড ডিরেক্টর শো-রিল' : 'FEATURED SHOWREEL'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/80 border border-white/10 font-mono-tech text-[10px] text-neutral-300">
                <Sparkles className="w-3 h-3 text-[#ff007f]" />
                {isBengali ? '৪K আল্ট্রা এইচডি কোয়ালিটি' : '4K Ultra HD'}
              </span>
            </div>

            {/* Bottom Info Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-1">
                  {primaryProject.category} // {primaryProject.subtitle}
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-wide uppercase group-hover:text-[#d4ff00] transition-colors">
                  {primaryProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-mono-tech mt-1 max-w-xl line-clamp-2">
                  {primaryProject.brief}
                </p>
              </div>

              {/* Play Button */}
              <div className="shrink-0 flex items-center gap-3">
                <span className="text-xs font-mono-tech text-neutral-300 group-hover:text-white uppercase tracking-wider hidden md:inline">
                  {isBengali ? 'সম্পূর্ণ প্রজেক্ট দেখুন' : 'CLICK TO VIEW'}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#d4ff00] text-black flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Value Guarantees Below Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10 font-mono-tech text-xs text-neutral-400">
          <div className="flex items-center gap-2 p-2.5 rounded bg-white/[0.02]">
            <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0" />
            <span className="text-neutral-200">{isBengali ? 'দ্রুত ডেলিভারির নিশ্চয়তা' : 'Fast Delivery Guaranteed'}</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded bg-white/[0.02]">
            <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0" />
            <span className="text-neutral-200">{isBengali ? '৪K আল্ট্রা রেজ্যুলুশন' : '4K Ultra Resolution'}</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded bg-white/[0.02]">
            <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0" />
            <span className="text-neutral-200">{isBengali ? 'মনের মতো আনলিমিটেড রিভিশন' : 'Satisfaction Revision'}</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded bg-white/[0.02]">
            <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0" />
            <span className="text-neutral-200">{isBengali ? '২৪ ঘণ্টা প্রজেক্ট রেসপন্স' : '24h Project Support'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
