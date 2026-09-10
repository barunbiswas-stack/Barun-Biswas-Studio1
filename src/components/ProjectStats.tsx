import React, { useState } from 'react';
import { Award, Film, Eye, Sparkles, Zap, Clapperboard, CheckCircle, TrendingUp, MonitorPlay } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { useLanguage } from '../context/LanguageContext';

export const ProjectStats: React.FC = () => {
  const { t, isBengali } = useLanguage();
  const [activeMetricTab, setActiveMetricTab] = useState<'overview' | 'commercial' | 'festivals'>('overview');

  const coreMetrics = [
    {
      id: 'productions',
      number: '54+',
      label: isBengali ? 'পরিচালিত প্রজেক্ট' : 'PRODUCTIONS DIRECTED',
      subtext: isBengali ? 'বিজ্ঞাপন, সিনেমাটিক শর্ট ও মিউজিক ভিডিও' : 'Commercials, narrative shorts & music videos',
      icon: Film,
      color: '#d4ff00',
      badge: '2023 - 2026'
    },
    {
      id: 'views',
      number: '14.8M+',
      label: isBengali ? 'মোট ভিউ ও দর্শক সম্পৃক্ততা' : 'TOTAL ENGAGEMENT & VIEWS',
      subtext: isBengali ? 'গ্লোবাল স্ট্রিমিং, ইউটিউব ও সামাজিক যোগাযোগ মাধ্যম' : 'Global streaming, YouTube, OOH & social reach',
      icon: Eye,
      color: '#ff007f',
      badge: isBengali ? 'যাচাইকৃত' : 'VERIFIED METRICS'
    },
    {
      id: 'clients',
      number: '18',
      label: isBengali ? 'আন্তর্জাতিক ব্র্যান্ড ক্লায়েন্ট' : 'GLOBAL BRAND CLIENTS',
      subtext: isBengali ? 'অটোমোবাইল, ফিনটেক, এনার্জি ও মিউজিক লেবেল' : 'Automotive, fintech, energy & record labels',
      icon: Zap,
      color: '#d4ff00',
      badge: isBengali ? 'এজেন্সি পার্টনার' : 'AGENCY PARTNERS'
    },
    {
      id: 'festivals',
      number: '04',
      label: isBengali ? 'আন্তর্জাতিক চলচ্চিত্র উৎসব নির্বাচন' : 'FESTIVAL SELECTIONS',
      subtext: isBengali ? 'রানওয়ে এআই ফিল্ম ফেস্ট, ট্রিবেকা এক্স ও বার্লিন কমার্শিয়াল' : 'Runway AI Film Fest, Tribeca X & Berlin Commercial',
      icon: Award,
      color: '#ff007f',
      badge: isBengali ? 'সম্মাননা' : 'HONORS'
    }
  ];

  const categoryBreakdown = [
    {
      name: isBengali ? 'বিজ্ঞাপন ও বাণিজ্যিক ফিল্ম' : 'Commercials & Ads',
      count: 22,
      percentage: '41%',
      icon: Clapperboard,
      highlight: isBengali ? 'হিরো স্পট, ইভি লঞ্চ ও পানীয় বিজ্ঞাপন' : 'Hero spots, EV launch & beverage ads'
    },
    {
      name: isBengali ? 'মিউজিক ভিডিও ও সাউন্ডট্র্যাক' : 'Music Videos & Soundtracks',
      count: 18,
      percentage: '33%',
      icon: Sparkles,
      highlight: isBengali ? 'সাইবারপাঙ্ক ন্যারেটিভ ও আর্টিস্ট ক্যানভাস' : 'Cyberpunk narratives & artist canvases'
    },
    {
      name: isBengali ? 'শর্ট ফিল্ম ও সাই-ফাই' : 'Narrative Shorts & Sci-Fi',
      count: 14,
      percentage: '26%',
      icon: MonitorPlay,
      highlight: isBengali ? 'আন্তর্জাতিক উৎসবে নির্বাচিত চলচ্চিত্র' : 'Festival-selected speculative cinema'
    }
  ];

  const handleTabClick = (tab: 'overview' | 'commercial' | 'festivals') => {
    audioSynth.playSfx('click');
    setActiveMetricTab(tab);
  };

  return (
    <section id="stats" className="py-16 bg-[#07070a] border-y border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#d4ff00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#ff007f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-2">
              <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full animate-pulse" />
              <span>{t.stats.badge}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none">
              {isBengali ? (
                <>
                  কাজের <span className="text-[#d4ff00]">পরিসংখ্যান</span> ও সাফল্য
                </>
              ) : (
                <>
                  PROJECT <span className="text-[#d4ff00]">STATISTICS</span> & IMPACT
                </>
              )}
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 bg-neutral-900/80 border border-white/15 p-1 rounded-sm self-start md:self-auto">
            <button
              onClick={() => handleTabClick('overview')}
              className={`px-3 py-1.5 rounded text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer ${
                activeMetricTab === 'overview' ? 'bg-[#d4ff00] text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {isBengali ? 'একনজরে' : 'OVERVIEW'}
            </button>
            <button
              onClick={() => handleTabClick('commercial')}
              className={`px-3 py-1.5 rounded text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer ${
                activeMetricTab === 'commercial' ? 'bg-[#ff007f] text-white font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {isBengali ? 'ক্ষেত্রসমূহ' : 'DISCIPLINES'}
            </button>
            <button
              onClick={() => handleTabClick('festivals')}
              className={`px-3 py-1.5 rounded text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer ${
                activeMetricTab === 'festivals' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {isBengali ? 'মানদণ্ড' : 'STANDARDS'}
            </button>
          </div>
        </div>

        {/* Primary 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {coreMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className="p-6 rounded-sm bg-neutral-950/80 border border-white/15 hover:border-white/40 transition-all group relative overflow-hidden hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-sm bg-white/5 text-white group-hover:bg-[#d4ff00] group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-neutral-400 border border-white/10 px-2 py-0.5 rounded">
                    {metric.badge}
                  </span>
                </div>

                <div
                  className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-2 transition-transform duration-300 group-hover:scale-105 origin-left"
                  style={{ color: metric.color }}
                >
                  {metric.number}
                </div>

                <div className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider mb-1">
                  {metric.label}
                </div>

                <p className="font-mono-tech text-xs text-neutral-400 leading-relaxed">
                  {metric.subtext}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#d4ff00] transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Secondary Detail Panels depending on selected tab */}
        {activeMetricTab === 'overview' && (
          <div className="p-6 rounded-sm bg-neutral-900/50 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#d4ff00] uppercase">
                <CheckCircle className="w-4 h-4" />
                <span>{isBengali ? '৯৯.২% সময়মতো ডেলিভারি' : '99.2% ON-SCHEDULE DELIVERY'}</span>
              </div>
              <p className="text-xs font-mono-tech text-neutral-400 leading-relaxed">
                {isBengali
                  ? 'টেলিভিশন ব্রডকাস্ট ও ডিজিটাল সোশ্যাল লঞ্চের প্রতিটি ডেডলাইন নিখুঁতভাবে রক্ষা করা হয়েছে।'
                  : 'Zero missed release dates across broadcast cutdowns, theatrical deliverables, and social launch deadlines.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#ff007f] uppercase">
                <TrendingUp className="w-4 h-4" />
                <span>{isBengali ? '৩.৮ গুণ বেশি দর্শক স্থায়িত্ব' : '3.8X AVERAGE RETENTION BOOST'}</span>
              </div>
              <p className="text-xs font-mono-tech text-neutral-400 leading-relaxed">
                {isBengali
                  ? 'প্রথম ৩ সেকেন্ডের শক্তিশালী ভিজ্যুয়াল হুক দর্শকদের দীর্ঘ সময় ধরে ধরে রাখে।'
                  : 'Visual hook pacing in the first 3 seconds generates significantly higher viewer retention over generic commercials.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-white uppercase">
                <Sparkles className="w-4 h-4" />
                <span>{isBengali ? 'হাতে আঁকা নিখুঁত ফ্রেমিং ও টাচআপ' : 'FRAME-BY-FRAME HUMAN RETOUCH'}</span>
              </div>
              <p className="text-xs font-mono-tech text-neutral-400 leading-relaxed">
                {isBengali
                  ? 'প্রতিটি ফ্রেমে রোটোস্কোপিং, আলোর সূক্ষ্ম কারুকাজ ও অ্যানালগ ফোলি সাউন্ডের সমন্বয়।'
                  : 'Every AI iteration undergoes rotoscoping, hand-painted lighting fixes, optical flares, and tactile foley mixing.'}
              </p>
            </div>
          </div>
        )}

        {activeMetricTab === 'commercial' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categoryBreakdown.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <div key={idx} className="p-5 rounded-sm bg-neutral-950 border border-white/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CatIcon className="w-4 h-4 text-[#d4ff00]" />
                      <span className="font-display font-bold text-xs uppercase text-white">{cat.name}</span>
                    </div>
                    <span className="font-mono-tech text-xs text-[#ff007f] font-bold">
                      {cat.count} {isBengali ? 'টি ফিল্ম' : 'Films'}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      style={{ width: cat.percentage }}
                      className="h-full bg-gradient-to-r from-[#d4ff00] to-[#ff007f]"
                    />
                  </div>

                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    {cat.highlight} ({cat.percentage} {isBengali ? 'মোট কাজের' : 'of studio output'})
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {activeMetricTab === 'festivals' && (
          <div className="p-6 rounded-sm bg-neutral-950 border border-white/15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded border border-white/10 bg-neutral-900/40 space-y-1">
              <span className="text-[10px] font-mono-tech text-[#d4ff00] uppercase block">
                {isBengali ? 'কালার স্ট্যান্ডার্ড' : 'COLOR STANDARD'}
              </span>
              <div className="font-display font-bold text-base text-white">ACEScc 12-BIT</div>
              <span className="text-[11px] font-mono-tech text-neutral-400">Cinematic DCI-P3 Gamut</span>
            </div>
            <div className="p-4 rounded border border-white/10 bg-neutral-900/40 space-y-1">
              <span className="text-[10px] font-mono-tech text-[#ff007f] uppercase block">
                {isBengali ? 'সর্বোচ্চ রেজোলিউশন' : 'MAX RESOLUTION'}
              </span>
              <div className="font-display font-bold text-base text-white">4K UHD / DCI 2.39</div>
              <span className="text-[11px] font-mono-tech text-neutral-400">ProRes 4444 XQ Master</span>
            </div>
            <div className="p-4 rounded border border-white/10 bg-neutral-900/40 space-y-1">
              <span className="text-[10px] font-mono-tech text-[#d4ff00] uppercase block">
                {isBengali ? 'ফ্রেম রেট' : 'FRAME RATE'}
              </span>
              <div className="font-display font-bold text-base text-white">24 & 60 FPS FLUID</div>
              <span className="text-[11px] font-mono-tech text-neutral-400">{isBengali ? 'মসৃণ মোশন' : 'Zero motion judder'}</span>
            </div>
            <div className="p-4 rounded border border-white/10 bg-neutral-900/40 space-y-1">
              <span className="text-[10px] font-mono-tech text-[#ff007f] uppercase block">
                {isBengali ? 'অডিও মাস্টার' : 'AUDIO MASTER'}
              </span>
              <div className="font-display font-bold text-base text-white">24-BIT 48KHZ</div>
              <span className="text-[11px] font-mono-tech text-neutral-400">{isBengali ? 'কাস্টম সিন্থ ও আবহ' : 'Bespoke Synth & Foley'}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

