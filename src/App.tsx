import React, { useState, useCallback } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RatingAndTrust } from './components/RatingAndTrust';
import { SpecializationsSection } from './components/SpecializationsSection';
import { FeaturedWork } from './components/FeaturedWork';
import { WorkingProcess } from './components/WorkingProcess';
import { ClientReviews } from './components/ClientReviews';
import { PricingPackages } from './components/PricingPackages';
import { AboutSection } from './components/AboutSection';
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

        {/* 2. Ratings & Trust Metrics (Ordered sequentially right after Hero) */}
        <RatingAndTrust onOpenContact={() => handleOpenContact()} />

        {/* 3. Core Specializations (AI Animation, Graphic Design, Video Ads, Music Video, AI Content) */}
        <SpecializationsSection onSelectService={(service) => handleOpenContact(service)} />

        {/* 4. Featured Portfolio (Work Showcase to impress clients) */}
        <FeaturedWork
          onSelectProject={(p) => setSelectedProject(p)}
          onPlayAudioTrack={() => {}}
        />

        {/* 5. Clear Working Process (4 steps to build client confidence) */}
        <WorkingProcess />

        {/* 6. Client Reviews & Testimonials */}
        <ClientReviews />

        {/* 7. Pricing & Packages */}
        <PricingPackages onSelectPackage={(pkg) => handleOpenContact(pkg)} />

        {/* 8. About Barun Biswas & Creative Tools */}
        <AboutSection />

        {/* 9. Contact & Hire (WhatsApp, Email & Brief form) */}
        <ContactSection preselectedService={prefilledService} />
      </main>

      {/* 10. Clean Professional Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

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
