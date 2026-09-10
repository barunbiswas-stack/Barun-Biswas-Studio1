import React from 'react';
import { Sparkles, Check, CheckCircle2, Shield, Award, Terminal, Cpu } from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { isBengali, bi } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-24 border-b border-white/10 relative bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full" />
              <span>{isBengali ? 'পরিচয় ও দর্শন' : 'ABOUT & CREATIVE PHILOSOPHY'}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none">
              {isBengali ? (
                <>
                  আমি <span className="text-[#d4ff00]">বরুণ বিশ্বাস</span>
                </>
              ) : (
                <>
                  ABOUT <span className="text-[#d4ff00]">BARUN BISWAS</span>
                </>
              )}
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono-tech text-neutral-400 max-w-md">
            {isBengali
              ? 'আধুনিক এআই টুলস ও ক্রিয়েটিভ আর্টের মেলবন্ধনে ব্র্যান্ড, ইউটিউব চ্যানেল ও মিউজিক আর্টিস্টদের জন্য ভিজ্যুয়াল নির্মাণ করি।'
              : 'Synthesizing cutting-edge AI neural systems with human artistic direction, storytelling, and high-impact commercial outcomes.'}
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Avatar & Quick Specs */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative rounded overflow-hidden border border-white/20 bg-neutral-950 aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Barun Biswas"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded bg-black/85 backdrop-blur-md border border-white/10 font-mono-tech text-xs space-y-1">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>BARUN BISWAS</span>
                  <span className="text-[#d4ff00]">CREATIVE SPECIALIST</span>
                </div>
                <div className="text-[11px] text-neutral-400">
                  {isBengali ? 'AI Animation • Graphic Design • Video Ads • Music Video' : 'AI Animation • Graphic Design • Video Ads • Music Video'}
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="p-4 rounded bg-neutral-950 border border-white/10 font-mono-tech text-xs space-y-2.5 text-neutral-400">
              <div className="flex justify-between pb-1.5 border-b border-white/5">
                <span>{isBengali ? 'কাজের ধরণ:' : 'WORK SCOPE:'}</span>
                <span className="text-white">{isBengali ? 'রিমোট ও গ্লোবাল প্রজেক্ট' : 'Remote & Global Studio'}</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-white/5">
                <span>{isBengali ? 'মূল শক্তি:' : 'CORE STRENGTH:'}</span>
                <span className="text-[#d4ff00] font-bold">{isBengali ? 'উচ্চ ভিজ্যুয়াল মান ও দ্রুত ডেলিভারি' : 'High Retention & Fast Turnaround'}</span>
              </div>
              <div className="flex justify-between">
                <span>{isBengali ? 'ক্লায়েন্ট সন্তুষ্টি:' : 'SATISFACTION:'}</span>
                <span className="text-white">১০০% গ্যারান্টিযুক্ত</span>
              </div>
            </div>
          </div>

          {/* Right: Personal Statement & Approach */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 rounded bg-neutral-950 border border-white/15 space-y-6">
              <div className="text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] font-bold">
                {isBengali ? 'আমার কাজের দর্শন ও দৃষ্টিভঙ্গি' : 'CREATIVE MANIFESTO'}
              </div>

              <blockquote className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase leading-snug border-l-4 border-[#d4ff00] pl-5">
                {isBengali
                  ? '“প্রযুক্তি যত উন্নতই হোক, আসল গল্প আর মানুষের মনে দাগ কাটার অনুভূতি সম্পূর্ণ নির্ভর করে শৈল্পিক স্পর্শের ওপর।”'
                  : '“Technology expands what can be envisioned, but narrative emotion, pacing, and customer conversion are crafted through human mastery.”'}
              </blockquote>

              <div className="space-y-3 text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed">
                <p>
                  {isBengali
                    ? 'আমি বিশ্বাস করি, একটি নিখুঁত বিজ্ঞাপন বা ভিডিও শুধু দেখতে ভালো হলেই চলে না — তা দর্শককে প্রথম ৩ সেকেন্ডে আটকে রাখতে পারে এবং ব্র্যান্ডের প্রতি গভীর বিশ্বাস তৈরি করে।'
                    : 'A truly successful video ad or AI animation does not just look polished — it grips attention within the first three seconds and drives real commercial results.'}
                </p>
                <p>
                  {isBengali
                    ? 'আমি প্রতিটি প্রজেক্টে এআই-এর সীমাহীন সম্ভাবনাকে আমার নিজস্ব গ্রাফিক ডিজাইন সেন্স, সিনেমাটোগ্রাফি জ্ঞান ও সাউন্ড ডিজাইনের সাথে একীভূত করি। ফলে তৈরি হয় এমন এক ভিজ্যুয়াল আউটপুট যা আপনার প্রতিযোগীদের চেয়ে আপনাকে অনেক ধাপ এগিয়ে রাখবে।'
                    : 'Whether crafting viral 3D AI animation, high-converting product commercials, or beat-synced music videos, I ensure your assets surpass standard industry benchmarks.'}
                </p>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-xs font-mono-tech text-[#d4ff00] font-bold block">
                    ০১. {isBengali ? 'স্ক্রোল-স্টপিং হুক' : 'SCROLL-STOPPING HOOK'}
                  </span>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    {isBengali ? 'দর্শকের চোখ আটকে রেখে সম্পূর্ণ বার্তা পৌঁছানোর কৌশল।' : 'Hooking retention from frame zero.'}
                  </p>
                </div>
                <div className="p-3.5 rounded bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-xs font-mono-tech text-[#ff007f] font-bold block">
                    ০২. {isBengali ? 'নিখুঁত কালার ও সাউন্ড' : 'COLOR & AUDIO SYNC'}
                  </span>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    {isBengali ? 'সিনেমাটিক রঙের ভারসাম্য ও কানে লেগে থাকার মতো সাউন্ড।' : 'Tactile foley & tailored musical beats.'}
                  </p>
                </div>
                <div className="p-3.5 rounded bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-xs font-mono-tech text-[#00f0ff] font-bold block">
                    ০৩. {isBengali ? 'ব্যবসায়িক ফলাফল' : 'MEASURABLE RESULTS'}
                  </span>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    {isBengali ? 'সেলস বৃদ্ধি ও ব্র্যান্ডের গ্রহণযোগ্যতা শতভাগ বাড়ানো।' : 'Maximized CTR, sales and ROI.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Production Stack */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <div className="text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-1">
                {isBengali ? 'প্রযুক্তি ও সফটওয়্যার' : 'SOFTWARE & AI STACK'}
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                {isBengali ? 'যেসব আধুনিক প্রযুক্তিতে আমি কাজ করি' : 'PRODUCTION ARSENAL'}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono-tech text-xs">
            {[
              { name: 'Runway Gen-3', type: 'AI Animation / Video' },
              { name: 'Midjourney v6', type: 'Generative Visuals' },
              { name: 'Adobe Premiere', type: 'Editing & Timeline' },
              { name: 'After Effects', type: 'Motion VFX & 3D' },
              { name: 'Photoshop & AI', type: 'Graphic & Retouch' },
              { name: 'DaVinci Resolve', type: 'Color Grading & 4K' },
            ].map((tool, idx) => (
              <div key={idx} className="p-3.5 rounded bg-neutral-950 border border-white/10 text-center space-y-1">
                <div className="text-white font-bold">{tool.name}</div>
                <div className="text-[10px] text-neutral-400">{tool.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
