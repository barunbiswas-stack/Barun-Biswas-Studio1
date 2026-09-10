import React, { useState, useCallback } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PORTFOLIO_PROJECTS } from './data/portfolioData';
import { Project } from './types';
import { LanguageProvider } from './context/LanguageContext';

function PortfolioInner() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

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

  const handleOpenContact = (service?: string) => {
    if (service) setPrefilledService(service);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090c] text-white selection:bg-[#d4ff00] selection:text-black relative overflow-x-hidden">
      {/* Top Scroll Reading Progress */}
      <ProgressBar />

      {/* Clean Minimalist Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="relative z-10">
        {/* 1. Hero & Director Intro */}
        <Hero
          onSelectProject={(p) => setSelectedProject(p)}
          featuredProjects={PORTFOLIO_PROJECTS}
          onOpenContact={() => handleOpenContact()}
        />

        {/* 2. Featured Portfolio (Work) */}
        <FeaturedWork
          onSelectProject={(p) => setSelectedProject(p)}
          onPlayAudioTrack={() => {}}
        />

        {/* 3. About Director & Philosophy */}
        <AboutSection />

        {/* 4. Services & What I Do */}
        <ServicesSection
          onSelectCategoryFilter={(_category) => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenContact={handleOpenContact}
        />

        {/* 5. Contact & Start a Project */}
        <ContactSection preselectedService={prefilledService} />
      </main>

      {/* 6. Minimal Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPlayAudioSample={() => {}}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
        projectIndex={currentProjectIndex}
        totalProjects={PORTFOLIO_PROJECTS.length}
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
