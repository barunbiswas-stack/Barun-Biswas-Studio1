import React from 'react';
import { Film, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Introduction: React.FC = () => {
  const { t, isBengali } = useLanguage();

  const humanCreativeTraits = [
    {
      label: isBengali ? 'গল্প ও ভাব বিনির্মাণ' : 'Narrative & Worldbuilding',
      desc: isBengali
        ? 'প্রতিটি ফ্রেমের পেছনে গভীর গল্প, মনস্তাত্ত্বিক আকর্ষণ ও অনুভূতির নিখুঁত স্কেচ তৈরি।'
        : 'Developing the story treatment, psychological hook, and emotional resonance behind every frame.'
    },
    {
      label: isBengali ? 'সিনেম্যাটিক চোখ ও রুচি' : 'Cinematic Eye & Taste',
      desc: isBengali
        ? 'হাজারো বিকল্পের ভিড় থেকে অনন্য কম্পোজিশন ও আলো বেছে নেওয়ার দুর্লভ দৃষ্টি।'
        : 'Selecting and directing the rare, sublime composition out of hundreds of raw exploratory trials.'
    },
    {
      label: isBengali ? 'ছন্দ ও সুরের স্থাপত্য' : 'Rhythm & Acoustic Architecture',
      desc: isBengali
        ? 'মানুষের অনুভূতির ওঠানামার সাথে মিলিয়ে প্রতিটি দৃশ্যপটের কাট ও আবহসঙ্গীত নির্ধারণ।'
        : 'Pacing every cut and scoring every frequency to the cadence of human emotion.'
    },
    {
      label: isBengali ? 'নিখুঁত কালার ও ফিনিশিং' : 'Precision Editorial & Color',
      desc: isBengali
        ? 'আফটার ইফেক্টসে কম্পোজিটিং, অ্যানালগ ফিল্ম গ্রেইন, এসিইএস (ACES) গ্রেডিং ও মাস্টার ডেলিভারি।'
        : 'Compositing in After Effects, analog film emulation, ACES grading, and tactile sound finishing.'
    }
  ];

  return (
    <section id="introduction" className="py-24 border-b border-white/10 relative overflow-hidden bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label with Simple is the Best Flag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00]">
            <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full animate-ping" />
            <span>{t.intro.label}</span>
          </div>

          <div className="px-3 py-1 rounded-sm bg-black/80 border border-[#d4ff00]/40 font-mono-tech text-xs text-white flex items-center gap-2">
            <span className="text-[#d4ff00] font-bold">
              {isBengali ? 'মূল দর্শন:' : 'CORE PHILOSOPHY:'}
            </span>
            <span className="text-white uppercase font-display font-extrabold tracking-wider">
              {isBengali ? '“সহজতাই শ্রেষ্ঠ” (SIMPLE IS THE BEST)' : '“SIMPLE IS THE BEST”'}
            </span>
          </div>
        </div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-none uppercase">
              {t.intro.titleMain}
              <br />
              <span className="text-neutral-500">{t.intro.titleAccent}</span>
            </h2>

            <div className="p-5 rounded-sm bg-white/[0.02] border-l-2 border-[#ff007f] font-mono-tech text-xs sm:text-sm text-neutral-300 space-y-2">
              <p className="leading-relaxed">
                {t.intro.quote}
              </p>
              <div className="text-[11px] text-[#ff007f] uppercase tracking-wider font-bold">
                {t.intro.signature}
              </div>
            </div>

            {/* Simple is the best manifesto box */}
            <div className="p-4 rounded-sm bg-neutral-950 border border-white/10 space-y-1.5">
              <div className="text-xs font-mono-tech text-[#d4ff00] uppercase font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.intro.philosophyTitle}</span>
              </div>
              <p className="text-xs font-mono-tech text-neutral-300 leading-relaxed">
                {t.intro.philosophyBody}
              </p>
            </div>
          </div>

          {/* Right Column: Creative Principles */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-7 rounded-sm bg-neutral-950/90 border border-white/10 relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="font-mono-tech text-xs uppercase tracking-wider text-white flex items-center gap-2">
                  <Film className="w-4 h-4 text-[#d4ff00]" />
                  {isBengali ? 'পরিচালকের স্তম্ভসমূহ' : 'DIRECTORIAL PILLARS'}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#d4ff00]/10 text-[#d4ff00] font-mono-tech text-[10px] font-bold">
                  {isBengali ? 'স্টুডিও মানদণ্ড' : 'STUDIO STANDARDS'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {humanCreativeTraits.map((trait) => (
                  <div key={trait.label} className="space-y-1.5 p-3 rounded bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-1.5 text-xs font-mono-tech font-bold text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0" />
                      <span>{trait.label}</span>
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono-tech leading-normal">
                      {trait.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Creative Balance Banner */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono-tech">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Sparkles className="w-4 h-4 text-[#ff007f]" />
                  <span>
                    {isBengali
                      ? 'আধুনিক প্রযুক্তি: দ্রুততা ও গবেষণামূলক পরিসর'
                      : 'MODERN TOOLS: Exploratory Scale & Speed'}
                  </span>
                </div>
                <div className="text-[#d4ff00] font-semibold">
                  {isBengali
                    ? 'মানবিক পরিচালনা: দৃষ্টিভঙ্গি, রুচি ও সমাপ্ত মাস্টার'
                    : 'HUMAN DIRECTION: Vision, Taste & Finished Master'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
