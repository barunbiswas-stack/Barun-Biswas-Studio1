import React, { useState, useEffect, useCallback } from 'react';
import { CanvasVFX } from './components/CanvasVFX';
import { ProgressBar } from './components/ProgressBar';
import { SectionBar } from './components/SectionBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { ProjectSlideshow } from './components/ProjectSlideshow';
import { ProjectStats } from './components/ProjectStats';
import { ProjectTimeline } from './components/ProjectTimeline';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedWork } from './components/FeaturedWork';
import { ProcessSection } from './components/ProcessSection';
import { AdvertisingShowcase } from './components/AdvertisingShowcase';
import { MusicSection } from './components/MusicSection';
import { CreativeLab } from './components/CreativeLab';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';
import { PORTFOLIO_PROJECTS } from './data/portfolioData';
import { Project } from './types';
import { audioSynth } from './utils/audioSynth';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Keyboard, Volume2 } from 'lucide-react';

function PortfolioInner() {
  const { t, isBengali, toggleLanguage } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [isKeyboardShortcutsOpen, setIsKeyboardShortcutsOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = audioSynth.subscribe((playing) => {
      setIsAudioPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const currentProjectIndex = selectedProject
    ? PORTFOLIO_PROJECTS.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handleNextProject = useCallback(() => {
    if (!selectedProject) return;
    const nextIdx = (currentProjectIndex + 1) % PORTFOLIO_PROJECTS.length;
    setSelectedProject(PORTFOLIO_PROJECTS[nextIdx]);
  }, [selectedProject, currentProjectIndex]);

  const handlePrevProject = useCallback(() => {
    if (!selectedProject) return;
    const prevIdx = (currentProjectIndex - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length;
    setSelectedProject(PORTFOLIO_PROJECTS[prevIdx]);
  }, [selectedProject, currentProjectIndex]);

  // Global Keyboard Navigation (when modal is not open)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in text input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === '?' || ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setIsKeyboardShortcutsOpen((prev) => !prev);
      } else if (e.key === 't' || e.key === 'T') {
        audioSynth.testSound();
      } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        toggleLanguage();
      } else if (!selectedProject) {
        // Section hotkeys
        if (e.key === '1') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (e.key === '2') {
          document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === '3') {
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === '4') {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === '5') {
          document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === '6') {
          document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === '7') {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === '8' || e.key === '0') {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'm' || e.key === 'M') {
          audioSynth.toggleMute();
        } else if (e.key === 'j' || e.key === 'J') {
          window.scrollBy({ top: 400, behavior: 'smooth' });
        } else if (e.key === 'k' || e.key === 'K') {
          window.scrollBy({ top: -400, behavior: 'smooth' });
        } else if (e.key === 'p' || e.key === 'P') {
          setSelectedProject(PORTFOLIO_PROJECTS[0]);
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [selectedProject, toggleLanguage]);

  const handleOpenContact = (service?: string) => {
    if (service) setPrefilledService(service);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayAudio = (type: 'cyber' | 'ambient' | 'energetic') => {
    audioSynth.playTrack(type);
  };

  const adProjects = PORTFOLIO_PROJECTS.filter((p) => p.category === 'ADS');
  const musicProjects = PORTFOLIO_PROJECTS.filter(
    (p) => p.category === 'MUSIC' || p.category === 'VIDEO'
  );

  return (
    <div className="min-h-screen bg-[#09090c] text-white selection:bg-[#d4ff00] selection:text-black relative bg-grain overflow-x-hidden">
      {/* 0. Top Scroll Progress Indicator */}
      <ProgressBar />

      {/* Floating Section Navigation Rail / Bar (Desktop Only) */}
      <SectionBar />

      {/* Interactive Background Canvas VFX (Particles, Stardust, Light Streaks) */}
      <CanvasVFX intensity={1} showGrid={true} />

      {/* Sticky Director Navigation */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="relative z-10">
        {/* 1. Full-Screen Dramatic Hero */}
        <Hero
          onSelectProject={(p) => setSelectedProject(p)}
          featuredProjects={PORTFOLIO_PROJECTS}
          onOpenContact={() => handleOpenContact()}
          onPlayAudioSample={handlePlayAudio}
        />

        {/* 2. Personal Manifesto & "Simple is the Best" Philosophy */}
        <Introduction />

        {/* 3. Featured Work & Production Showcases (All Work Hub) */}
        <div id="work" className="scroll-mt-16">
          {/* Featured Project Slideshow */}
          <ProjectSlideshow
            projects={PORTFOLIO_PROJECTS}
            onSelectProject={(p) => setSelectedProject(p)}
            onPlayAudioTrack={handlePlayAudio}
          />

          {/* Featured Work (Asymmetrical Editorial Masonry Grid with Filters) */}
          <FeaturedWork
            onSelectProject={(p) => setSelectedProject(p)}
            onPlayAudioTrack={handlePlayAudio}
          />

          {/* Commercial Advertising Showcase */}
          <AdvertisingShowcase
            onSelectProject={(p) => setSelectedProject(p)}
            adProjects={adProjects}
            onOpenContact={handleOpenContact}
          />

          {/* Music + Music Video Immersive Showcase & Real-Time Waveform */}
          <MusicSection
            onSelectProject={(p) => setSelectedProject(p)}
            musicProjects={musicProjects}
          />
        </div>

        {/* 4. Interactive Services & Commission Packages */}
        <ServicesSection
          onSelectCategoryFilter={(_category) => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenContact={handleOpenContact}
        />

        {/* 5. 5-Step AI + Human Creative Process & Lab */}
        <div id="process" className="scroll-mt-16">
          <ProcessSection />
          {/* The Creative Lab (VFX bench, shaders, parameters) */}
          <CreativeLab />
        </div>

        {/* 6. Chronological Projects Timeline & Milestones + Stats */}
        <div id="timeline" className="scroll-mt-16">
          <ProjectTimeline
            projects={PORTFOLIO_PROJECTS}
            onSelectProject={(p) => setSelectedProject(p)}
            onPlayAudioTrack={handlePlayAudio}
          />
          {/* Production Benchmarks & Project Stats */}
          <ProjectStats />
        </div>

        {/* 7. Human-Focused About & Technology Matrix */}
        <AboutSection />

        {/* 8. Contact & Project Brief Transmission */}
        <ContactSection preselectedService={prefilledService} />
      </main>

      {/* Floating Bottom Quick Control Helper (Desktop & Tablet) */}
      <aside aria-label="Audio & Keyboard Controls" className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => audioSynth.testSound()}
          className="px-3 py-1.5 rounded-sm bg-neutral-900/90 border border-white/20 hover:border-[#d4ff00] text-xs font-mono-tech text-neutral-300 hover:text-white flex items-center gap-1.5 backdrop-blur-md shadow-lg cursor-pointer transition-colors"
          title="Click to test / verify audio output"
        >
          <Volume2 className="w-3.5 h-3.5 text-[#d4ff00]" />
          <span className="hidden sm:inline">{t.common.testAudio}</span>
        </button>

        <button
          onClick={() => setIsKeyboardShortcutsOpen(true)}
          className="px-3 py-1.5 rounded-sm bg-neutral-900/90 border border-white/20 hover:border-[#ff007f] text-xs font-mono-tech text-neutral-300 hover:text-white flex items-center gap-1.5 backdrop-blur-md shadow-lg cursor-pointer transition-colors"
          title="Keyboard shortcuts cheatsheet [Press ?]"
        >
          <Keyboard className="w-3.5 h-3.5 text-[#ff007f]" />
          <span className="hidden sm:inline">{t.common.shortcuts}</span>
        </button>
      </aside>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Cinematic Project Detail Modal with entrance animation & keyboard nav */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPlayAudioSample={handlePlayAudio}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
        projectIndex={currentProjectIndex}
        totalProjects={PORTFOLIO_PROJECTS.length}
      />

      {/* Keyboard Shortcuts & Audio Diagnostics Cheatsheet Modal */}
      <KeyboardShortcutsModal
        isOpen={isKeyboardShortcutsOpen}
        onClose={() => setIsKeyboardShortcutsOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioInner />
    </LanguageProvider>
  );
}
