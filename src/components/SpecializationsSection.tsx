import React from 'react';
import { Film, Palette, Video, Music2, Sparkles, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SpecializationsProps {
  onSelectService: (serviceName: string) => void;
}

export const SpecializationsSection: React.FC<SpecializationsProps> = ({ onSelectService }) => {
  const { isBengali, bi } = useLanguage();

  const services = [
    {
      id: 'ai-animation',
      number: '০১',
      title: isBengali ? 'AI Animation' : 'AI Animation',
      subtitle: isBengali ? 'সিনেমাটিক এআই অ্যানিমেশন' : 'Cinematic AI Animation & 3D Motion',
      desc: isBengali
        ? 'উন্নত AI টুলস ও 3D মোশনের সমন্বয়ে তৈরি করি হাইপার-রিয়েলিস্টিক অ্যানিমেশন, সিনেমাটিক শর্ট স্টোরি, কাল্পনিক জগৎ ও দৃষ্টিনন্দন ক্যারেক্টার মুভমেন্ট।'
        : 'Creating cinematic AI animation, stylized character storytelling, hyper-realistic camera angles, and immersive visual worlds for brands and creators.',
      deliverables: isBengali
        ? ['সিনেমাটিক ৩ডি/২ডি এআই অ্যানিমেশন', 'ক্যারেক্টার স্টোরি ও সিনেমা শর্ট', 'ইউটিউব ও ফিল্মের জন্য অ্যানিমেটেড সিন', '৪K আল্ট্রা এইচডি রেন্ডারিং']
        : ['Cinematic 3D/2D AI Animation', 'Character Storylines & Shorts', 'VFX & Scene Generation', '4K Ultra HD Delivery'],
      icon: <Film className="w-6 h-6 text-[#d4ff00]" />,
      badge: isBengali ? 'জনপ্রিয় সার্ভিস' : 'MOST POPULAR',
      accent: 'border-[#d4ff00]/40',
    },
    {
      id: 'graphic-design',
      number: '০২',
      title: isBengali ? 'Graphic Design' : 'Graphic Design',
      subtitle: isBengali ? 'হাই-কনভার্টিং গ্রাফিক্স ও ব্র্যান্ডিং' : 'High-Converting Graphics & Visual Identity',
      desc: isBengali
        ? 'সোশ্যাল মিডিয়া পোস্টার, হাই-সিটিআর ইউটিউব থাম্বনেইল, ব্যানার, প্রোডাক্ট প্যাকেজিং আর্ট এবং আধুনিক ব্র্যান্ড আইডেন্টিটি ডিজাইন।'
        : 'High-CTR YouTube thumbnails, viral social media posters, promotional banners, album artworks, and distinctive brand visual identities.',
      deliverables: isBengali
        ? ['হাই-সিটিআর ইউটিউব থাম্বনেইল', 'সোশ্যাল মিডিয়া ব্যানার ও পোস্টার', 'প্রোডাক্ট প্যাকেজিং ও কমার্শিয়াল আর্ট', 'প্রিন্ট ও ডিজিটাল ফুল ফাইল']
        : ['High-CTR YouTube Thumbnails', 'Social Media Campaign Posters', 'Commercial Product Graphics', 'Print & Digital Ready Files'],
      icon: <Palette className="w-6 h-6 text-[#ff007f]" />,
      badge: isBengali ? 'উচ্চ ক্লিক রেট' : 'HIGH CTR',
      accent: 'border-[#ff007f]/40',
    },
    {
      id: 'video-ads',
      number: '০৩',
      title: isBengali ? 'Video Ads' : 'Video Ads & Commercials',
      subtitle: isBengali ? 'বাণিজ্যিক ও সোশ্যাল ভিডিও বিজ্ঞাপন' : 'High-Impact Brand & Product Commercials',
      desc: isBengali
        ? 'ফেসবুক, ইনস্টাগ্রাম, ইউটিউব ও টিকটকের জন্য স্ক্রোল-স্টপিং কমার্শিয়াল বিজ্ঞাপন। প্রথম ৩ সেকেন্ডের স্ট্রং হুক ও সেলস বাড়ানোর মতো পারফেক্ট পেসিং।'
        : 'Scroll-stopping commercial video ads tailored for Facebook, Instagram, YouTube & TikTok. Hook-driven pacing that turns viewers into paying customers.',
      deliverables: isBengali
        ? ['স্ক্রোল-স্টপিং সোশ্যাল মিডিয়া অ্যাডস', 'ই-কমার্স প্রোডাক্ট প্রমোশনাল ভিডিও', '১৬:৯ ও ৯:১৬ সব সাইজের ফরম্যাট', 'সাউন্ড ইফেক্টস ও ব্যাকগ্রাউন্ড স্কোর']
        : ['Scroll-Stopping Social Ads', 'E-Commerce Product Promos', 'Multi-Platform 16:9 & 9:16 Cuts', 'Sound Design & Dynamic Beats'],
      icon: <Video className="w-6 h-6 text-[#d4ff00]" />,
      badge: isBengali ? 'সেলস বুস্টিং' : 'HIGH ROI',
      accent: 'border-[#d4ff00]/40',
    },
    {
      id: 'music-video',
      number: '০৪',
      title: isBengali ? 'Music Video' : 'Music Video Creation',
      subtitle: isBengali ? 'সিনেমাটিক মিউজিক ভিডিও প্রোডাকশন' : 'Atmospheric & Narrative Music Videos',
      desc: isBengali
        ? 'গানের আবেগ ও বিটের সাথে নিখুঁতভাবে সিঙ্ক করা সিনেমাটিক মিউজিক ভিডিও, সাইবারপাঙ্ক বা ফ্যান্টাসি স্টোরিলাইন এবং দৃষ্টিনন্দন ভিজ্যুয়ালাইজার।'
        : 'Full narrative music videos synced seamlessly with musical rhythm and emotional arcs, visualizers, cyber/fantasy aesthetics, and Spotify Canvas loops.',
      deliverables: isBengali
        ? ['ফুল সিনেমাটিক মিউজিক ভিডিও', 'লিপ-সিঙ্ক ও রিদম ভিজ্যুয়ালাইজার', 'স্পটিফাই ক্যানভাস ও ইনস্টাগ্রাম রিলস', 'অ্যালবাম আর্ট ও মোশন পোস্টার']
        : ['Full Cinematic Music Video', 'Beat-Synced Visualizer', 'Spotify Canvas & Promo Loops', 'Album Artwork Suite'],
      icon: <Music2 className="w-6 h-6 text-[#00f0ff]" />,
      badge: isBengali ? 'সিনেমাটিক' : 'CINEMATIC',
      accent: 'border-[#00f0ff]/40',
    },
    {
      id: 'ai-content',
      number: '০৫',
      title: isBengali ? 'AI Content Creation' : 'AI Content Creation',
      subtitle: isBengali ? 'ভাইরাল এআই কনটেন্ট ও রিলস' : 'Viral AI Content & Multi-Platform Production',
      desc: isBengali
        ? 'ইউটিউব শর্টস, ইনস্টাগ্রাম রিলস এবং টিকটকের জন্য অটোমেটেড ও হাইপার-এনগেজিং এআই কনটেন্ট — ভিজ্যুয়াল আর্ট, এআই ভয়েস সিঙ্ক এবং ট্রেন্ডিং স্টোরিটেলিং।'
        : 'Hyper-engaging viral Reels & Shorts, autonomous faceless channel content, custom AI characters, voiceover sync, and scalable visual series.',
      deliverables: isBengali
        ? ['ভাইরাল ইউটিউব শর্টস ও রিলস', 'এআই ভয়েসওভার ও সাবটাইটেল সিঙ্ক', 'ফেসলেস চ্যানেল ফুল কনটেন্ট প্যাক', 'সাপ্তাহিক ও মাসিক কনটেন্ট প্যাকেজ']
        : ['Viral YouTube Shorts & Reels', 'AI Voice & Subtitle Sync', 'Faceless Channel Video Packs', 'Monthly Scalable Retainers'],
      icon: <Sparkles className="w-6 h-6 text-[#d4ff00]" />,
      badge: isBengali ? 'ট্রেন্ডিং' : 'TRENDING',
      accent: 'border-[#d4ff00]/40',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#09090c] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>{isBengali ? 'দক্ষতা ও সেবা' : 'CORE SKILLS & EXPERTISE'}</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
              {isBengali ? (
                <>
                  যেসব কাজে আমি <span className="text-[#d4ff00]">দক্ষ ও অভিজ্ঞ</span>
                </>
              ) : (
                <>
                  SERVICES DESIGNED TO <span className="text-[#d4ff00]">IMPRESS & CONVERT</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-sm font-mono-tech text-neutral-400 max-w-md">
            {isBengali
              ? 'আপনার ব্র্যান্ডের প্রচার, চ্যানেলের গ্রোথ বা গানের প্রচারণার জন্য আন্তর্জাতিক মানের কাজ সরবরাহ করি।'
              : 'Every service is built with obsessive attention to visual craft, emotional hooks, and client conversion results.'}
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={s.id}
              className={`p-6 sm:p-7 rounded bg-neutral-950 border border-white/10 hover:${s.accent} transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(212,255,0,0.08)]`}
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono-tech text-xs text-neutral-500 font-bold">
                    {s.number} //
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-[#d4ff00] uppercase tracking-wider">
                    {s.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="p-2.5 rounded bg-neutral-900 border border-white/15">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-white uppercase group-hover:text-[#d4ff00] transition-colors">
                      {s.title}
                    </h3>
                    <div className="text-xs font-mono-tech text-neutral-400 mt-0.5">
                      {s.subtitle}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Deliverables list */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono-tech text-neutral-400 uppercase tracking-wider block">
                    {isBengali ? 'যা যা পাবেন:' : 'WHAT IS DELIVERED:'}
                  </span>
                  {s.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono-tech text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(s.title)}
                className="w-full py-2.5 rounded bg-neutral-900 border border-white/15 text-white group-hover:bg-[#d4ff00] group-hover:text-black font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isBengali ? 'এই কাজের জন্য কথা বলুন' : 'HIRE FOR THIS SERVICE'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

          {/* 6th Card: Custom Solution Card */}
          <div className="p-6 sm:p-7 rounded bg-gradient-to-br from-[#121218] via-neutral-950 to-[#121218] border border-[#d4ff00]/30 flex flex-col justify-between shadow-[0_0_20px_rgba(212,255,0,0.05)]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono-tech text-xs text-[#d4ff00] font-bold">
                  ০৬ //
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[10px] font-mono-tech text-[#d4ff00] uppercase tracking-wider">
                  {isBengali ? 'কাস্টম রিকোয়েস্ট' : 'CUSTOM BRIEF'}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-white uppercase mb-2">
                {isBengali ? 'অন্যান্য বিশেষ প্রোডাকশন?' : 'NEED A CUSTOM PROJECT?'}
              </h3>
              <p className="text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed mb-6">
                {isBengali
                  ? 'আপনার কোনো ভিন্ন ধারণা বা দীর্ঘমেয়াদী প্রজেক্ট রয়েছে? সরাসরি আপনার আইডিয়া আমাকে জানান, আমি আপনার বাজেট ও লক্ষ্য অনুযায়ী সর্বোত্তম সমাধান দেব।'
                  : 'Have a unique idea, monthly channel retainer, or complex visual concept? Contact me directly with your requirements for a tailor-made plan.'}
              </p>

              <div className="p-4 rounded bg-white/[0.03] border border-white/10 space-y-2 mb-6">
                <div className="text-xs font-mono-tech text-[#d4ff00] font-bold">
                  ✓ {isBengali ? '২৪ ঘণ্টার মধ্যে কাস্টম প্রপোজাল' : 'Custom Proposal in 24h'}
                </div>
                <div className="text-xs font-mono-tech text-neutral-300">
                  ✓ {isBengali ? 'বাজেট ফ্রেন্ডলি ও পারফেক্ট প্ল্যানিং' : 'Budget-Friendly & Tailored Strategy'}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectService('Custom Production')}
              className="w-full py-3 rounded bg-[#d4ff00] text-black font-display font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>{isBengali ? 'কাস্টম প্রজেক্ট প্রস্তাব দিন' : 'DISCUSS CUSTOM BRIEF'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
