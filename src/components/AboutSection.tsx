import React from 'react';
import { User, Sparkles, Terminal, Code, Cpu, Film, Palette, Music, Check } from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, isBengali, isMixed, bi } = useLanguage();

  return (
    <section id="about" className="py-24 border-b border-white/10 relative bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full" />
              <span>{t.about.label}</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-none">
              {t.about.titleMain} <span className="text-[#ff007f]">{t.about.titleAccent}</span>
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono-tech text-neutral-400 max-w-md">
            {t.about.bioParagraph1}
          </div>
        </div>

        {/* Profile / Director Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left: Director Avatar / Visual Plate */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative rounded-sm overflow-hidden border border-white/20 bg-neutral-950 aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                alt="Creative Director Barun Biswas Portrait"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-sm bg-black/85 backdrop-blur-md border border-white/10 font-mono-tech text-xs space-y-1">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>{bi('BARUN BISWAS', 'বরুণ বিশ্বাস')}</span>
                  <span className="text-[#d4ff00]">{bi('DIRECTOR', 'চলচ্চিত্র পরিচালক')}</span>
                </div>
                <div className="text-[11px] text-neutral-400">
                  {bi('Concept • Direction • Narrative • Sound', 'ধারণা • পরিচালনা • ন্যারেটিভ • সঙ্গীত')}
                </div>
              </div>
            </div>

            {/* Quick Director Specs */}
            <div className="p-4 rounded-sm bg-neutral-950 border border-white/10 font-mono-tech text-xs space-y-2 text-neutral-400">
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>{bi('LOCATION:', 'অবস্থান:')}</span>
                <span className="text-white">{bi('GLOBAL / REMOTE STUDIO', 'বিশ্বব্যাপী / রিমোট স্টুডিও')}</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-white/5">
                <span>{bi('SPECIALIZATION:', 'দক্ষতা:')}</span>
                <span className="text-[#d4ff00]">{bi('FULL-PIPELINE CREATIVE DIRECTION', 'সম্পূর্ণ সিনেমাটিক সৃজনশীল পরিচালনা')}</span>
              </div>
              <div className="flex justify-between">
                <span>{bi('AVAILABILITY:', 'প্রাপ্যতা:')}</span>
                <span className="text-white">{bi('OPEN FOR COMMISSIONS', 'নতুন কাজের জন্য প্রস্তুত')}</span>
              </div>
            </div>
          </div>

          {/* Right: Personal Creative Philosophy & Bio */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 rounded-sm bg-neutral-950 border border-white/15 space-y-6">
              <div className="text-xs font-mono-tech uppercase tracking-widest text-[#ff007f] font-bold">
                {bi("DIRECTOR'S STATEMENT & APPROACH", 'পরিচালকের দৃষ্টিভঙ্গি ও মূলনীতি')}
              </div>

              <blockquote className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white tracking-tight uppercase leading-snug border-l-4 border-[#d4ff00] pl-6">
                {isMixed
                  ? '“I explore where human emotion, narrative storytelling, and digital synthesis meet. // আবেগ, গল্প ও প্রযুক্তির সমন্বয় — সৃজনশীল নান্দনিকতা ও চলচ্চিত্রের প্রাণ মানুষের হাতের স্পর্শেই জন্ম নেয়।”'
                  : isBengali
                  ? '“আবেগ, গল্প ও প্রযুক্তির মেলবন্ধন — প্রযুক্তি কল্পনার সীমানা বৃদ্ধি করে, তবে শৈল্পিক স্বাদ এবং চলচ্চিত্রের প্রাণ সম্পূর্ণ মানুষের হাতের স্পর্শেই জীবন্ত হয়।”'
                  : '“I explore the convergence where human emotion, narrative storytelling, and digital synthesis meet. Technology expands what can be envisioned, but the artistic taste, narrative soul, and final master are directed entirely by human hands.”'}
              </blockquote>

              <div className="space-y-4 text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed pt-2">
                <p>
                  {t.about.bioParagraph2}
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-[#d4ff00] font-bold">
                    {bi('01. NARRATIVE VISION', '০১. গল্পের গভীরতা')}
                  </span>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    {bi('Emotional core and story arc are crystal clear before any visual exploration begins.', 'গল্পের গভীর আবেগ এবং মূল চরিত্র স্পষ্ট না হওয়া পর্যন্ত কোনো দৃশ্য নির্মাণ শুরু হয় না।')}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-[#ff007f] font-bold">
                    {bi('02. EDITORIAL TASTE', '০২. শৈল্পিক রুচি')}
                  </span>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    {bi('Every cut, color grade, and audio transient is shaped, timed, and mastered by human hands.', 'প্রতিটি ফ্রেম, রঙের বিন্যাস এবং শব্দের ওঠানামা মানুষের সতর্ক পরিচালনায় নিখুঁত করা হয়।')}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-white font-bold">
                    {bi('03. CULTURAL IMPACT', '০৩. সাংস্কৃতিক প্রভাব')}
                  </span>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    {bi('Rejecting generic templates in favor of cinematic work that commands immediate attention.', 'গতানুগতিক টেমপ্লেট বর্জন করে এমন ভিজ্যুয়াল যা দর্শকের গভীর মনোযোগ আকর্ষণ করে।')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 13. TOOLS & TECHNOLOGY SECTION (Integrated in Workflow Context) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-1">
                {bi('PRODUCTION ECOSYSTEM', 'প্রযোজনা ইকোসিস্টেম')}
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                {t.about.creativeArsenal}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOOL_CATEGORIES.map((categoryGroup) => (
              <div
                key={categoryGroup.category}
                className="p-5 rounded-sm bg-neutral-950 border border-white/15 space-y-4 hover:border-white/30 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className={`font-mono-tech text-xs font-bold ${
                    categoryGroup.accent === 'yellow' ? 'text-[#d4ff00]' : 'text-[#ff007f]'
                  }`}>
                    {categoryGroup.category}
                  </span>
                </div>

                <div className="space-y-3">
                  {categoryGroup.tools.map((tool) => (
                    <div key={tool.name} className="space-y-0.5">
                      <div className="font-mono-tech text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        {tool.name}
                      </div>
                      <div className="text-[11px] font-mono-tech text-neutral-400 pl-3 leading-tight">
                        {tool.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
