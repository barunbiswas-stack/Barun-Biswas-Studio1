import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles, Disc3 } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenQuickAudio?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    const unsubscribe = audioSynth.subscribe((playing, trackType) => {
      setIsAudioPlaying(playing);
      setActiveTrack(trackType);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const toggleSoundtrack = () => {
    audioSynth.playSfx('click');
    audioSynth.togglePlay('cyber');
  };

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'ADS', href: '#advertising' },
    { label: 'MUSIC & VIDEO', href: '#music' },
    { label: 'CREATIVE LAB', href: '#lab' },
    { label: 'ABOUT', href: '#about' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090c]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Director Mark */}
          <a
            href="#"
            id="brand-logo-btn"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-sm bg-neutral-900 border border-white/20 flex items-center justify-center overflow-hidden group-hover:border-[#d4ff00] transition-colors">
              <span className="font-display text-xs font-black text-white group-hover:text-[#d4ff00] transition-colors tracking-tight">
                BB
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4ff00] to-[#ff007f]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center gap-1.5 text-white">
                BARUN BISWAS
                <span className="hidden sm:inline-block text-[9px] font-mono-tech px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">
                  DIRECTOR
                </span>
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono-tech">
                Creative Direction & Visual Production
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="text-xs font-mono-tech text-neutral-300 hover:text-[#d4ff00] transition-colors tracking-wider uppercase relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4ff00] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons: Sound Preview & Let's Create */}
          <div className="flex items-center gap-3">
            {/* Audio Synth Toggle */}
            <button
              onClick={toggleSoundtrack}
              id="audio-synth-toggle-btn"
              title={isAudioPlaying ? 'Mute Ambient Soundtrack' : 'Listen to Ambient Soundtrack'}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-sm border text-xs font-mono-tech transition-all ${
                isAudioPlaying
                  ? 'border-[#ff007f] bg-[#ff007f]/15 text-white glow-pink'
                  : 'border-white/15 bg-neutral-900/80 text-neutral-400 hover:text-white hover:border-white/40'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Disc3 className="w-3.5 h-3.5 text-[#ff007f] animate-spin" />
                  <span className="hidden sm:inline text-[11px] text-[#ff007f] font-semibold">
                    SOUNDSCAPE: {activeTrack?.toUpperCase()}
                  </span>
                  <Volume2 className="w-3.5 h-3.5 text-white" />
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="hidden sm:inline text-[11px]">AMBIENT SOUND</span>
                </>
              )}
            </button>

            {/* Primary CTA: Let's Create */}
            <button
              onClick={onOpenContact}
              id="nav-lets-create-cta"
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-sm bg-[#d4ff00] text-black font-display font-extrabold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-white hover:shadow-[0_0_20px_rgba(212,255,0,0.5)] active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>LET'S CREATE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="xl:hidden p-2 rounded text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-40 bg-[#09090c]/98 backdrop-blur-xl xl:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-white/10"
        >
          <div className="flex flex-col gap-5">
            <div className="text-[11px] font-mono-tech text-neutral-500 uppercase tracking-widest pb-2 border-b border-white/10">
              NAVIGATION // DIRECTORY
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-bold text-2xl text-neutral-200 hover:text-[#d4ff00] flex items-center justify-between transition-colors border-b border-white/5 pb-3"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-500" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400">
              <span>STATUS:</span>
              <span className="text-[#d4ff00] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-ping inline-block" />
                AVAILABLE FOR COMMISSIONS
              </span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 bg-[#d4ff00] text-black font-display font-black text-sm uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-black" />
              START A PROJECT
            </button>
          </div>
        </div>
      )}
    </>
  );
};
