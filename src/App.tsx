import React, { useState } from 'react';
import { CanvasVFX } from './components/CanvasVFX';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
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
import { PORTFOLIO_PROJECTS } from './data/portfolioData';
import { Project } from './types';
import { audioSynth } from './utils/audioSynth';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

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

  const adProjects = PORTFOLIO_PROJECTS.filter(p => p.category === 'ADS');
  const musicProjects = PORTFOLIO_PROJECTS.filter(p => p.category === 'MUSIC' || p.category === 'VIDEO');

  return (
    <div className="min-h-screen bg-[#09090c] text-white selection:bg-[#d4ff00] selection:text-black relative bg-grain">
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

        {/* 2. Personal Manifesto & Introduction */}
        <Introduction />

        {/* 3. Interactive Services Section */}
        <ServicesSection
          onSelectCategoryFilter={(category) => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenContact={handleOpenContact}
        />

        {/* 4. Featured Work (Asymmetrical Editorial Masonry Grid) */}
        <FeaturedWork
          onSelectProject={(p) => setSelectedProject(p)}
          onPlayAudioTrack={handlePlayAudio}
        />

        {/* 5. 5-Step AI + Human Creative Process */}
        <ProcessSection />

        {/* 6. Commercial Advertising Showcase */}
        <AdvertisingShowcase
          onSelectProject={(p) => setSelectedProject(p)}
          adProjects={adProjects}
          onOpenContact={handleOpenContact}
        />

        {/* 7. Music + Music Video Immersive Showcase */}
        <MusicSection
          onSelectProject={(p) => setSelectedProject(p)}
          musicProjects={musicProjects}
        />

        {/* 8. The Creative Lab (VFX bench, shaders, parameters) */}
        <CreativeLab />

        {/* 9. Human-Focused About & Technology Matrix */}
        <AboutSection />

        {/* 10. Contact & Project Brief Transmission */}
        <ContactSection preselectedService={prefilledService} />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Cinematic Project Detail Modal (The Human Process Breakdown) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPlayAudioSample={handlePlayAudio}
      />
    </div>
  );
}
