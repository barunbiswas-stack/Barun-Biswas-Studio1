import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Film, Volume2, Sparkles, ArrowUpRight, Eye } from 'lucide-react';
import { Project } from '../types';
import { audioSynth } from '../utils/audioSynth';
import { useLanguage } from '../context/LanguageContext';

interface ProjectSlideshowProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onPlayAudioTrack?: (type: 'cyber' | 'ambient' | 'energetic') => void;
}

export const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({
  projects,
  onSelectProject,
  onPlayAudioTrack
}) => {
  const { t, isBengali } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const SLIDE_DURATION = 6000; // 6 seconds per slide
  const activeProject = projects[currentSlide] || projects[0];

  const handleNext = useCallback(() => {
    audioSynth.playSfx('whoosh');
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setProgress(0);
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    audioSynth.playSfx('whoosh');
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setProgress(0);
  }, [projects.length]);

  // Keyboard Navigation for Slideshow (Left & Right Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if inside modal or typing in input
      if (document.getElementById('project-detail-modal')) return;
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.code === 'Space' && isHovered) {
        e.preventDefault();
        setIsAutoplay((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isHovered]);

  // Autoplay Timer Loop
  useEffect(() => {
    if (!isAutoplay || isHovered) return;

    const intervalStep = 50; // update progress every 50ms
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + (intervalStep / SLIDE_DURATION) * 100;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isAutoplay, isHovered, handleNext]);

  const handleSlideSelect = (idx: number) => {
    audioSynth.playSfx('click');
    setCurrentSlide(idx);
    setProgress(0);
  };

  const handlePlaySlideAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const synthType = activeProject.audioSample?.synthWaveType || 
      (activeProject.category === 'MUSIC' ? 'cyber' : activeProject.category === 'ADS' ? 'energetic' : 'ambient');
    
    if (onPlayAudioTrack) {
      onPlayAudioTrack(synthType);
    } else {
      audioSynth.playTrack(synthType);
    }
  };

  if (!projects.length || !activeProject) return null;

  return (
    <section id="slideshow" className="py-20 bg-[#08080c] border-b border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#d4ff00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-[#ff007f]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation Hint */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-2">
              <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full animate-ping" />
              <span>{t.slideshow.badge}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-none">
              {isBengali ? (
                <>
                  প্রজেক্ট <span className="text-[#ff007f]">স্লাইডশো</span>
                </>
              ) : (
                <>
                  PROJECT <span className="text-[#ff007f]">SLIDESHOW</span>
                </>
              )}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono-tech text-neutral-400 border border-white/10 px-2.5 py-1 rounded bg-neutral-900/80 hidden sm:inline">
              {isBengali ? 'কীবোর্ড: [← পূর্ববর্তী] [→ পরবর্তী]' : 'KEYBOARD: [← PREV] [→ NEXT]'}
            </span>

            {/* Autoplay Pause/Play Toggle */}
            <button
              onClick={() => {
                audioSynth.playSfx('click');
                setIsAutoplay(!isAutoplay);
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-neutral-900 border border-white/15 text-xs font-mono-tech text-neutral-300 hover:text-white cursor-pointer"
              title={isAutoplay ? 'Pause Slideshow' : 'Resume Autoplay'}
            >
              {isAutoplay ? <Pause className="w-3.5 h-3.5 text-[#d4ff00]" /> : <Play className="w-3.5 h-3.5 text-[#d4ff00]" />}
              <span>{isAutoplay ? (isBengali ? 'অটোপ্লে চালু' : 'AUTOPLAY') : (isBengali ? 'স্থগিত' : 'PAUSED')}</span>
            </button>

            {/* Next/Prev Navigation Buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 rounded-sm bg-neutral-900 border border-white/15 hover:border-[#d4ff00] hover:text-white text-neutral-400 transition-colors cursor-pointer"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-sm bg-neutral-900 border border-white/15 hover:border-[#d4ff00] hover:text-white text-neutral-400 transition-colors cursor-pointer"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Stage Slide Card */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-sm overflow-hidden border border-white/20 bg-neutral-950 shadow-[0_0_50px_rgba(0,0,0,0.9)] aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-10 group"
        >
          {/* Background Backdrop Image */}
          <img
            key={activeProject.id}
            src={activeProject.coverImage}
            alt={activeProject.title}
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 filter brightness-90 group-hover:scale-102"
          />

          {/* Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

          {/* Top Info Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-[#d4ff00]/40 font-mono-tech text-[10px] text-[#d4ff00] font-bold uppercase tracking-wider">
                SLIDE 0{currentSlide + 1} // 0{projects.length}
              </span>
              <span className="px-2 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 font-mono-tech text-[10px] text-white/80 uppercase">
                {activeProject.category}
              </span>
              {activeProject.duration && (
                <span className="px-2 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 font-mono-tech text-[10px] text-neutral-400 hidden sm:inline">
                  {activeProject.duration}
                </span>
              )}
            </div>

            {/* Direct Audio Score Preview Button */}
            <button
              onClick={handlePlaySlideAudio}
              className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/80 backdrop-blur-md border border-[#ff007f]/40 hover:border-[#ff007f] text-white text-xs font-mono-tech transition-colors cursor-pointer glow-pink"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#ff007f]" />
              <span className="hidden sm:inline text-[11px]">PLAY SCORE</span>
            </button>
          </div>

          {/* Center-Bottom Project Details & Call to Action */}
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="space-y-1.5">
              <span className="text-xs sm:text-sm font-mono-tech text-[#ff007f] tracking-widest uppercase font-semibold">
                {activeProject.subtitle}
              </span>
              <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-none drop-shadow-md">
                {activeProject.title}
              </h3>
            </div>

            <p className="font-mono-tech text-xs sm:text-sm text-neutral-200 line-clamp-2 sm:line-clamp-3 leading-relaxed max-w-2xl">
              {activeProject.brief}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  audioSynth.playSfx('click');
                  onSelectProject(activeProject);
                }}
                className="px-5 py-3 rounded-sm bg-[#d4ff00] text-black font-display font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(212,255,0,0.3)] flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Film className="w-4 h-4 text-black" />
                <span>{isBengali ? 'চলচ্চিত্র ও প্রোডাকশন স্পেক্স দেখুন' : 'OPEN FILM & PRODUCTION SPECS'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-1.5">
                {activeProject.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-black/70 border border-white/15 text-[10px] font-mono-tech text-neutral-300 hidden md:inline"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Slideshow Progress Countdown Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-[#d4ff00] via-[#ff007f] to-[#d4ff00] transition-all duration-75"
            />
          </div>
        </div>

        {/* Thumbnail Filmstrip Reel */}
        <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {projects.map((proj, idx) => {
            const isSelected = idx === currentSlide;
            return (
              <button
                key={proj.id}
                onClick={() => handleSlideSelect(idx)}
                className={`flex-shrink-0 w-28 sm:w-36 rounded-sm overflow-hidden border text-left transition-all group relative cursor-pointer ${
                  isSelected
                    ? 'border-[#d4ff00] ring-2 ring-[#d4ff00]/40 scale-105 shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                    : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                }`}
              >
                <div className="aspect-[16/9] w-full relative">
                  <img
                    src={proj.coverImage}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <span className="absolute bottom-1 left-1.5 font-display font-bold text-[10px] text-white uppercase truncate max-w-[90%]">
                    {proj.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
