import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { isBengali, language, setLanguage, bi } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: bi('WORK', 'কাজ'), href: '#work' },
    { label: bi('ABOUT', 'পরিচয়'), href: '#about' },
    { label: bi('SERVICES', 'সেবা'), href: '#services' },
    { label: bi('CONTACT', 'যোগাযোগ'), href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090c]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo / Director Mark */}
          <a
            href="#"
            id="brand-logo-btn"
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="w-8 h-8 rounded bg-neutral-900 border border-white/20 flex items-center justify-center group-hover:border-[#d4ff00] transition-colors">
              <span className="font-display text-xs font-black text-white group-hover:text-[#d4ff00] transition-colors tracking-tight">
                BB
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-wider uppercase text-white group-hover:text-[#d4ff00] transition-colors leading-tight">
                BARUN BISWAS
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono-tech hidden sm:block">
                Creative Director
              </span>
            </div>
          </a>

          {/* Minimal Desktop Navigation - Clean & Simple */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono-tech text-neutral-300 hover:text-[#d4ff00] transition-colors tracking-wider uppercase relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4ff00] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switcher & Contact CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Minimal Language Switcher */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="px-2 py-1 rounded bg-neutral-900 border border-white/15 text-[11px] font-mono-tech font-semibold text-neutral-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer flex items-center gap-1"
              title="Toggle Language (বাংলা / English)"
            >
              <span className={language === 'bn' ? 'text-[#d4ff00] font-bold' : 'text-neutral-400'}>BN</span>
              <span className="text-neutral-600">/</span>
              <span className={language === 'en' ? 'text-[#d4ff00] font-bold' : 'text-neutral-400'}>EN</span>
            </button>

            {/* Primary Contact CTA */}
            <button
              onClick={onOpenContact}
              id="nav-lets-create-cta"
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded bg-[#d4ff00] text-black font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-white active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0 shadow-[0_0_15px_rgba(212,255,0,0.2)]"
            >
              <span>{isBengali ? 'যোগাযোগ' : "LET'S TALK"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="md:hidden p-2 rounded text-neutral-300 hover:text-white focus:outline-none cursor-pointer"
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
          className="fixed inset-0 z-40 bg-[#09090c]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-white/10"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono-tech text-xs text-neutral-400 tracking-wider">
                {isBengali ? 'মেনু' : 'NAVIGATION'}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display font-bold text-white hover:text-[#d4ff00] transition-colors py-2.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded bg-[#d4ff00] text-black font-display font-bold text-sm uppercase text-center cursor-pointer shadow-lg"
            >
              {isBengali ? 'প্রজেক্ট শুরু করুন' : 'START A PROJECT'}
            </button>
            <div className="text-center font-mono-tech text-xs text-neutral-500">
              barunbiswas0777@gmail.com
            </div>
          </div>
        </div>
      )}
    </>
  );
};
