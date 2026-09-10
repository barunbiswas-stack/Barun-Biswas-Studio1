import React from 'react';
import { Check, Zap, Sparkles, Flame, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PricingPackagesProps {
  onSelectPackage: (pkgName: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  const { isBengali, bi } = useLanguage();

  const packages = [
    {
      id: 'starter',
      name: isBengali ? 'স্টার্টার ক্রিয়েটিভ' : 'Starter Asset Kit',
      subtitle: isBengali ? 'সোশ্যাল পোস্টার, ব্যানার বা থাম্বনেইল' : 'Thumbnails, Posters & Quick Visuals',
      highlight: false,
      deliveryTime: isBengali ? '২৪ - ৪৮ ঘণ্টা' : '24 - 48 Hours',
      features: isBengali
        ? [
            'হাই-সিপিআর ইউটিউব থাম্বনেইল / সোশ্যাল পোস্টার',
            '১টি কাস্টম গ্রাফিক ডিজাইন বা শর্ট রিল',
            '২টি ফ্রি রিভিশন রাউন্ড',
            'ফুল রেজ্যুলুশন জেপিজি/পিএনজি বা এমপি৪',
            'প্রোডাকশন সোর্স ফাইল সাপোর্ট',
          ]
        : [
            'High-CTR YouTube Thumbnail / Social Poster',
            '1x Custom Visual Asset or Short Reel',
            '2x Iterative Revision Rounds',
            'Full HD 1080p / 4K Asset Files',
            'Production Source File Access',
          ],
      badge: isBengali ? 'দ্রুত শুরু করার জন্য' : 'QUICK START',
    },
    {
      id: 'pro-ad',
      name: isBengali ? 'প্রো ভিডিও অ্যাড ও অ্যানিমেশন' : 'Commercial Ad & AI Animation',
      subtitle: isBengali ? 'হাই-কনভার্টিং কমার্শিয়াল বা ৩ডি সিন' : 'High-Impact Brand Ad / Character Motion',
      highlight: true,
      deliveryTime: isBengali ? '২ - ৪ দিন' : '2 - 4 Days',
      features: isBengali
        ? [
            'সম্পূর্ণ কমার্শিয়াল ভিডিও বিজ্ঞাপন বা AI Animation',
            '১৬:৯ ও ৯:১৬ (হরাইজন্টাল ও ভার্টিকাল) দুটি ভার্সন',
            'কাস্টম ব্যাকগ্রাউন্ড মিউজিক ও সাউন্ড এফেক্টস সিঙ্ক',
            '৩টি ডেডিকেটেড রিভিশন রাউন্ড',
            '৪K আল্ট্রা এইচডি মাস্টার এক্সপোর্ট',
            'সোশ্যাল মিডিয়া হুক অপটিমাইজেশন',
          ]
        : [
            'Full Commercial Video Ad or Cinematic AI Motion',
            'Multi-Platform Aspect Ratios (16:9 & 9:16 Vertical)',
            'Custom Foley Sound Design & Music Sync',
            '3x Iterative Feedback Revisions',
            'Pristine 4K Ultra HD Master',
            'First 3-Second Viral Hook Engineering',
          ],
      badge: isBengali ? 'সেরা ভ্যালু ও সবচেয়ে জনপ্রিয়' : 'MOST POPULAR',
    },
    {
      id: 'full-production',
      name: isBengali ? 'ফুল সিনেমাটিক মিউজিক ও কনটেন্ট' : 'Master Music Video & Full Campaign',
      subtitle: isBengali ? 'সম্পূর্ণ মিউজিক ভিডিও বা মান্থলি কনটেন্ট' : 'Full Narrative Music Video / Monthly Retainer',
      highlight: false,
      deliveryTime: isBengali ? '৫ - ৮ দিন' : '5 - 8 Days',
      features: isBengali
        ? [
            'সম্পূর্ণ সিনেমাটিক মিউজিক ভিডিও (২-৪ মিনিট)',
            'অথবা পুরো মাসের ভাইরাল এআই কনটেন্ট প্যাকেজ (১০+ ভিডিও)',
            'স্পটিফাই ক্যানভাস, মোশন ব্যানার ও প্রোমো টিজার',
            'আনলিমিটেড মাইনর রিভিশন',
            'ভিআইপি প্রায়োরিটি সাপোর্ট ও দ্রুত ডেলিভারি',
            'কমার্শিয়াল ব্যবহারের সম্পূর্ণ স্বত্বাধিকার',
          ]
        : [
            'Full Narrative Music Video (2 - 4 Minutes)',
            'Or Monthly Viral AI Content Retainer (10+ Reels)',
            'Spotify Canvas, Motion Banners & Teasers Suite',
            'Unlimited Minor Polish Iterations',
            'VIP Priority Direct Support',
            'Full Commercial Usage & Ownership Rights',
          ],
      badge: isBengali ? 'প্রিমিয়াম ভিআইপি' : 'ENTERPRISE / MASTER',
    },
  ];

  return (
    <section id="packages" className="py-20 bg-[#0c0c10] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-[#d4ff00] mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>{isBengali ? 'স্বচ্ছ প্যাকেজ ও বুকিং' : 'TRANSPARENT PACKAGES'}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            {isBengali ? (
              <>
                আপনার জন্য উপযুক্ত <span className="text-[#d4ff00]">প্যাকেজটি বেছে নিন</span>
              </>
            ) : (
              <>
                SELECT YOUR <span className="text-[#d4ff00]">PRODUCTION PLAN</span>
              </>
            )}
          </h2>
          <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 mt-3">
            {isBengali
              ? 'প্রতিটি প্যাকেজে রয়েছে সর্বোচ্চ কোয়ালিটি এবং সময়মত প্রজেক্ট ডেলিভারির শতভাগ নিশ্চয়তা।'
              : 'Flexible creative solutions engineered to give your brand or channel maximum impact.'}
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded p-7 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? 'bg-neutral-900 border-2 border-[#d4ff00] shadow-[0_0_30px_rgba(212,255,0,0.12)] -translate-y-1'
                  : 'bg-neutral-950 border border-white/10 hover:border-white/25'
              }`}
            >
              {/* Highlight badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-2.5 py-1 rounded text-[10px] font-mono-tech font-bold uppercase tracking-wider ${
                    pkg.highlight
                      ? 'bg-[#d4ff00] text-black'
                      : 'bg-white/10 text-neutral-300'
                  }`}
                >
                  {pkg.badge}
                </span>
                <span className="text-xs font-mono-tech text-neutral-400">
                  {isBengali ? 'ডেলিভারি:' : 'Timeline:'} <strong className="text-white">{pkg.deliveryTime}</strong>
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl text-white uppercase mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs font-mono-tech text-neutral-400 mb-6">
                  {pkg.subtitle}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-mono-tech text-neutral-300">
                      <div className="mt-0.5 rounded-full p-0.5 bg-[#d4ff00]/20 text-[#d4ff00] shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPackage(pkg.name)}
                className={`w-full py-3.5 rounded font-display font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.highlight
                    ? 'bg-[#d4ff00] text-black hover:bg-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-[#d4ff00] hover:text-black'
                }`}
              >
                <span>{isBengali ? 'এই প্যাকেজটি বুক করুন' : 'BOOK THIS PACKAGE'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Note below packages */}
        <div className="text-center mt-10 text-xs font-mono-tech text-neutral-400">
          {isBengali ? (
            <>
              💡 নির্দিষ্ট বাজেট বা বিশেষ ফ্রেমের কাজ প্রয়োজন? সরাসরি মেসেজ পাঠান — আমরা আপনার বাজেট অনুযায়ী কাস্টম কোটেশন দেব।
            </>
          ) : (
            <>
              💡 Custom budget or flexible retainer needed? Contact me directly for personalized project scoping.
            </>
          )}
        </div>
      </div>
    </section>
  );
};
