import React from 'react';
import { MessageSquare, Cpu, Repeat, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WorkingProcess: React.FC = () => {
  const { isBengali, bi } = useLanguage();

  const steps = [
    {
      num: '০১',
      title: isBengali ? 'আইডিয়া ও কনসেপ্ট আলোচনা' : 'Brief & Creative Alignment',
      subtitle: isBengali ? 'Step 1: Concept & Goal' : 'Phase 01',
      desc: isBengali
        ? 'আপনার ব্র্যান্ডের লক্ষ্য, টার্গেট অডিয়েন্স এবং কাঙ্ক্ষিত স্টাইল নিয়ে বিস্তারিত আলোচনা করি। কোন ধরনের ভিজ্যুয়াল আপনার সবচেয়ে বেশি কাজ দেবে তা নির্ধারণ করি।'
        : 'Deep dive into your campaign vision, audience psychology, and key objectives. We align on visual moodboards and precise project milestones.',
      icon: <MessageSquare className="w-5 h-5 text-[#d4ff00]" />,
    },
    {
      num: '০২',
      title: isBengali ? 'এআই প্রোডাকশন ও প্রিমিয়াম ডিজাইন' : 'AI Generation & Direction',
      subtitle: isBengali ? 'Step 2: Crafting' : 'Phase 02',
      desc: isBengali
        ? 'লেটেস্ট AI প্রযুক্তি (Runway, Midjourney, etc.) এবং মানবীয় ক্রিয়েটিভ স্কিলের সমন্বয়ে সিনেমাটিক ফ্রেম, অ্যানিমেশন ও গ্রাফিক্স তৈরি করি।'
        : 'Generating pristine AI assets combined with meticulous human direction, typography, cinematic composition, and color grading.',
      icon: <Cpu className="w-5 h-5 text-[#ff007f]" />,
    },
    {
      num: '০৩',
      title: isBengali ? 'ফিডব্যাক ও ফাইন টিউনিং' : 'Review & Precision Polish',
      subtitle: isBengali ? 'Step 3: Refinement' : 'Phase 03',
      desc: isBengali
        ? 'প্রথম ড্রাফট দেখার পর আপনার মতামত অনুযায়ী নিখুঁত রিভিশন দিই। সাউন্ড ইফেক্টস, টাইমিং ও রঙের সামঞ্জস্য চূড়ান্ত করি।'
        : 'Presenting high-resolution review drafts. Iterating based on your feedback with seamless sound design, pacing, and visual adjustments.',
      icon: <Repeat className="w-5 h-5 text-[#00f0ff]" />,
    },
    {
      num: '০৪',
      title: isBengali ? 'ফাইনাল ৪K আল্ট্রা ডেলিভারি' : 'Final 4K Master Delivery',
      subtitle: isBengali ? 'Step 4: Ready to Launch' : 'Phase 04',
      desc: isBengali
        ? 'সোশ্যাল মিডিয়া, ইউটিউব বা টিভি ব্রডকাস্টের জন্য প্রয়োজনীয় সব সাইজে (16:9, 9:16, 1:1) সম্পূর্ণ ফাইল ও হাই-রেজ্যুলুশন ডেলিভারি।'
        : 'Delivering full-resolution 4K masters, multi-aspect social cutdowns, and raw assets ready for immediate ad campaigns and viral release.',
      icon: <CheckCircle className="w-5 h-5 text-[#d4ff00]" />,
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#0c0c10] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-[#d4ff00] mb-3">
            <span>{isBengali ? 'সহজ ও পেশাদার নিয়ম' : 'THE PRODUCTION BLUEPRINT'}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            {isBengali ? (
              <>
                যেভাবে আমি আপনার প্রজেক্ট <span className="text-[#d4ff00]">নিখুঁত করি</span>
              </>
            ) : (
              <>
                HOW WE CRAFT <span className="text-[#d4ff00]">FLAWLESS WORK</span>
              </>
            )}
          </h2>
          <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 mt-3">
            {isBengali
              ? 'জিরো কনফিউশন, স্পষ্ট কমিউনিকেশন এবং সময়মতো প্রিমিয়াম কোয়ালিটি ডেলিভারির প্রতিশ্রুতি।'
              : 'Zero guesswork, continuous communication, and guaranteed cinematic standards from start to finish.'}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-neutral-950 border border-white/10 relative group hover:border-[#d4ff00]/40 transition-colors"
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tech font-black text-xl text-[#d4ff00]">
                  {step.num}
                </span>
                <div className="p-2 rounded bg-neutral-900 border border-white/10">
                  {step.icon}
                </div>
              </div>

              <div className="text-[11px] font-mono-tech text-neutral-400 uppercase tracking-widest mb-1">
                {step.subtitle}
              </div>
              <h3 className="font-display font-bold text-lg text-white uppercase mb-3">
                {step.title}
              </h3>
              <p className="text-xs font-mono-tech text-neutral-300 leading-relaxed">
                {step.desc}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-neutral-600">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
