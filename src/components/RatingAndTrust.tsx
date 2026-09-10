import React from 'react';
import { Star, ShieldCheck, Clock, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RatingAndTrust: React.FC = () => {
  const { isBengali, bi } = useLanguage();

  const metrics = [
    {
      value: '৫.০',
      suffix: '/ ৫',
      label: isBengali ? 'গড় ক্লায়েন্ট রেটিং' : 'Average Client Rating',
      sublabel: isBengali ? '৯৮+ সন্তুষ্ট রিভিউ' : '98+ Verified Reviews',
      highlight: true,
    },
    {
      value: '১২০+',
      suffix: '',
      label: isBengali ? 'সম্পন্ন প্রজেক্ট' : 'Completed Projects',
      sublabel: isBengali ? 'অ্যানিমেশন, বিজ্ঞাপন ও ডিজাইন' : 'Animation, Ads & Design',
      highlight: false,
    },
    {
      value: '৯৯%',
      suffix: '',
      label: isBengali ? 'অন-টাইম ডেলিভারি' : 'On-Time Delivery Rate',
      sublabel: isBengali ? 'সময়মত নির্ভরযোগ্য হস্তান্তর' : 'Guaranteed Deadline Delivery',
      highlight: false,
    },
    {
      value: '১০০%',
      suffix: '',
      label: isBengali ? 'কোয়ালিটি গ্যারান্টি' : 'Satisfaction Guarantee',
      sublabel: isBengali ? 'পছন্দ হওয়া পর্যন্ত রিভিশন' : 'Revisions Until Perfect',
      highlight: false,
    },
  ];

  const clientTypes = [
    { name: isBengali ? 'ইউটিউব ক্রিয়েটর ও ইনফ্লুয়েন্সার' : 'YouTube Creators & Influencers', count: '৪০+' },
    { name: isBengali ? 'ই-কমার্স ও ব্র্যান্ড ওনার' : 'E-Commerce & D2C Brands', count: '৩৫+' },
    { name: isBengali ? 'মিউজিশিয়ান ও রেকর্ড লেবেল' : 'Musicians & Music Labels', count: '২৫+' },
    { name: isBengali ? 'ডিজিটাল মার্কেটিং এজেন্সি' : 'Marketing & Ad Agencies', count: '২০+' },
  ];

  return (
    <section id="reviews" className="relative py-12 sm:py-16 bg-[#0c0c10] border-y border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4ff00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/25 text-xs font-mono-tech text-[#d4ff00] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isBengali ? 'রেটিং ও ক্লায়েন্ট বিশ্বাস' : 'TRUST & VERIFIED RATINGS'}</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
              {isBengali ? (
                <>
                  ক্লায়েন্টদের <span className="text-[#d4ff00]">১০০% ভরসা</span> ও সফল কাজের প্রমাণ
                </>
              ) : (
                <>
                  PROVEN CLIENT TRUST & <span className="text-[#d4ff00]">5-STAR RESULTS</span>
                </>
              )}
            </h2>
          </div>

          {/* 5-Star Highlight Badge */}
          <div className="flex items-center gap-3 p-3.5 rounded bg-neutral-900 border border-white/15 shrink-0 shadow-lg">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#d4ff00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono-tech text-white font-bold mt-0.5">
                {isBengali ? '৫.০ / ৫.০ রেটেড প্রফেশনাল' : '5.0 / 5.0 Rated Creator'}
              </span>
            </div>
            <div className="h-8 w-px bg-white/15" />
            <div className="text-[11px] font-mono-tech text-neutral-400">
              {isBengali ? 'টপ-রেটেড ফ্রিল্যান্সার ও কনটেন্ট ডিরেক্টর' : 'Top-Rated Video & AI Specialist'}
            </div>
          </div>
        </div>

        {/* 4 Core Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-8">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded bg-neutral-950 border transition-all duration-300 hover:border-[#d4ff00]/40 ${
                m.highlight
                  ? 'border-[#d4ff00]/30 shadow-[0_0_20px_rgba(212,255,0,0.06)]'
                  : 'border-white/10'
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  {m.value}
                </span>
                {m.suffix && (
                  <span className="font-display font-bold text-lg sm:text-xl text-[#d4ff00]">
                    {m.suffix}
                  </span>
                )}
              </div>
              <div className="font-display font-bold text-sm sm:text-base text-neutral-200 mt-2">
                {m.label}
              </div>
              <div className="text-xs font-mono-tech text-neutral-400 mt-1">
                {m.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Client Quote / Real Voice Box */}
        <div className="mt-2 p-5 sm:p-6 rounded bg-neutral-900/90 border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <div className="flex text-[#d4ff00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] font-mono-tech text-neutral-400 uppercase tracking-wider">
                {isBengali ? 'ভেরিফায়েড ক্লায়েন্ট রিভিউ' : 'Verified Client Review'}
              </span>
            </div>
            <p className="text-sm sm:text-base text-neutral-200 font-mono-tech leading-relaxed italic">
              {isBengali
                ? '"বরুণ বিশ্বাসের তৈরি করা ভিডিও বিজ্ঞাপন ও এআই অ্যানিমেশন আমাদের ব্র্যান্ডের সেলস আশাতীত বাড়িয়েছে! কাজের গতি, কোয়ালিটি ও কমিউনিকেশন এক কথায় অসাধারণ।"'
                : '"Barun\'s AI animation and high-impact commercial video doubled our social engagement. Fast turnaround, pristine 4K quality, and absolute professionalism!"'}
            </p>
            <div className="text-xs font-mono-tech text-[#d4ff00]">
              — {isBengali ? 'মাহমুদ হাসান, প্রতিষ্ঠাতা ও হেড অফ গ্রোথ (D2C Brand)' : 'Mahmud Hassan, Founder & Head of Growth'}
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded bg-[#d4ff00] hover:bg-white text-black font-display font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-[0_0_15px_rgba(212,255,0,0.2)] flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isBengali ? 'আপনার প্রজেক্ট শুরু করুন' : 'START YOUR PROJECT'}</span>
          </a>
        </div>

        {/* Audience Served Badges */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech text-neutral-400">
          <span className="text-neutral-500 font-semibold uppercase">
            {isBengali ? 'যাদের জন্য নিয়মিত কাজ করি:' : 'EXPERIENCE SERVING:'}
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            {clientTypes.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-neutral-300 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                <span>{c.name}</span>
                <span className="text-[#d4ff00] font-bold">({c.count})</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
