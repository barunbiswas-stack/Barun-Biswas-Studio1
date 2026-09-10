import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ClientReviews: React.FC = () => {
  const { isBengali, bi } = useLanguage();

  const reviews = [
    {
      name: 'Riaz Ahmed',
      role: isBengali ? 'ই-কমার্স ফ্যাশন ব্র্যান্ড প্রতিষ্ঠাতা' : 'Founder, Apex Apparel (D2C)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      projectType: isBengali ? 'ভিডিও বিজ্ঞাপন ও প্রোডাক্ট প্রমো' : 'Video Ads & Commercials',
      feedback: isBengali
        ? 'আমাদের নতুন প্রোডাক্ট লঞ্চের জন্য বরুণ ভাই যে ৩টি ভিডিও বিজ্ঞাপন বানিয়ে দিয়েছেন, তা দিয়ে আমাদের ফেসবুক অ্যাডের আরওএএস (ROAS) প্রায় ৩ গুণ বেড়ে গেছে! হুক এবং মিউজিক সিঙ্ক ছিল এক কথায় অসাধারণ।'
        : 'The video commercials Barun created skyrocketed our ad ROAS by nearly 3x! The opening hooks, visual transitions, and rhythm pacing hooked our audience instantly. Outstanding work.',
      result: isBengali ? '৩ গুণ বেশি সেলস ও কনভার্সন' : '3x Higher Ad Conversion',
    },
    {
      name: 'Tanvir Hossain',
      role: isBengali ? 'ইউটিউব কনটেন্ট ক্রিয়েটর (৮৫০K সাবস্ক্রাইবার)' : 'YouTube Creator (850K Subs)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      projectType: isBengali ? 'AI Animation & থাম্বনেইল' : 'AI Animation & Thumbnail Suite',
      feedback: isBengali
        ? 'আমার চ্যানেলের জন্য এআই অ্যানিমেশন ভিডিও এবং থাম্বনেইল ডিজাইন করিয়েছিলাম। ভিডিও রিলিজের পর দর্শকের রেসপন্স ছিল অবিশ্বাস্য! প্রফেশনাল এবং নির্দিষ্ট ডেডলাইনের আগে ডেলিভারি দেন।'
        : 'Barun handled our channel’s cinematic AI animations and custom thumbnails. The visual polish helped us cross 1.2M views on that video alone. Unbeatable speed and dedication.',
      result: isBengali ? '১.২ মিলিয়ন+ অর্গানিক ভিউ' : '1.2M+ Views Gained',
    },
    {
      name: 'Shovon Roy',
      role: isBengali ? 'ইন্ডিপেন্ডেন্ট মিউজিশিয়ান ও গীতিকার' : 'Independent Music Artist',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      projectType: isBengali ? 'ফুল মিউজিক ভিডিও তৈরি' : 'Full Cinematic Music Video',
      feedback: isBengali
        ? 'আমার নতুন ট্র্যাকের জন্য সিনেমাটিক সাইবারপাঙ্ক স্টাইলের ফুল মিউজিক ভিডিও তৈরি করে দেন। প্রতিটি ড্রপ এবং লিরিকের সাথে ভিজ্যুয়াল যেভাবে মিলিয়েছেন, তা দেখে আমাদের পুরো ব্যান্ড মুগ্ধ।'
        : 'The music video Barun directed for our single captured the exact cyberpunk melancholia we dreamed of. Every drum drop and guitar riff was visually alive.',
      result: isBengali ? 'স্পটিফাই ও ইউটিউবে ব্যাপক প্রশংসা' : 'Viral Reception on Spotify & YouTube',
    },
    {
      name: 'Nusrat Jahan',
      role: isBengali ? 'ডিজিটাল মার্কেটিং ম্যানেজার' : 'Digital Agency Campaign Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      projectType: isBengali ? 'গ্রাফিক ডিজাইন ও সোশ্যাল ক্যাম্পেইন' : 'Graphic Design & Ad Creatives',
      feedback: isBengali
        ? 'এজেন্সির জরুরি ক্যাম্পেইনের জন্য অল্প সময়ে ২০+ সোশ্যাল মিডিয়া পোস্টার ও ব্যানার প্রয়োজন ছিল। বরুণ ভাই অত্যন্ত দক্ষতার সাথে প্রিমিয়াম কোয়ালিটিতে সম্পূর্ণ কাজ সম্পন্ন করেছেন।'
        : 'Tight 48-hour deadline for a multi-platform graphic campaign. Barun delivered 20+ flawless assets that completely satisfied our corporate client.',
      result: isBengali ? '৪৮ ঘণ্টায় জরুরি ডেলিভারি সম্পন্ন' : 'Delivered on 48h Emergency Deadline',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#09090c] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-2">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{isBengali ? 'ক্লায়েন্টদের মূল্যায়ন' : 'CLIENT EXPERIENCES'}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
              {isBengali ? (
                <>
                  ক্লায়েন্টরা আমার কাজ সম্পর্কে <span className="text-[#d4ff00]">কী বলেন</span>
                </>
              ) : (
                <>
                  WORDS FROM <span className="text-[#d4ff00]">CLIENTS & CREATORS</span>
                </>
              )}
            </h2>
          </div>
          <div className="flex items-center gap-3 p-3 rounded bg-neutral-950 border border-white/10 text-xs font-mono-tech text-neutral-300">
            <CheckCircle2 className="w-4 h-4 text-[#d4ff00]" />
            <span>{isBengali ? '১০০% আসল ও ভেরিফায়েড ক্লায়েন্ট প্রতিক্রিয়া' : '100% Verified Project Reviews'}</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded bg-neutral-950 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header: Avatar, Name & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover border border-white/15"
                    />
                    <div>
                      <h4 className="font-display font-bold text-base text-white">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] font-mono-tech text-neutral-400">
                        {rev.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex text-[#d4ff00]">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Project Badge */}
                <div className="inline-block px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-neutral-300 uppercase tracking-wider">
                  {rev.projectType}
                </div>

                {/* Feedback quote */}
                <p className="text-xs sm:text-sm font-mono-tech text-neutral-200 leading-relaxed italic">
                  "{rev.feedback}"
                </p>
              </div>

              {/* Outcome pill */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech">
                <span className="text-neutral-400">
                  {isBengali ? 'ফলাফল:' : 'Result:'}
                </span>
                <span className="text-[#d4ff00] font-semibold">
                  ✓ {rev.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
