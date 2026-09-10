import React, { useState, useEffect } from 'react';
import { Mail, Send, Check, Copy, MessageCircle, Phone, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const { isBengali, bi } = useLanguage();
  const [selectedService, setSelectedService] = useState(preselectedService || 'AI Animation (এআই অ্যানিমেশন)');
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [budget, setBudget] = useState('মানানসই / আলোচনা সাপেক্ষে');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const directEmail = 'barunbiswas0777@gmail.com';
  // WhatsApp link template (using international format or standard direct link)
  const whatsappNumber = '8801700000000'; // Standard format
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Hello Barun, I saw your portfolio and would like to discuss a project regarding ' + selectedService)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceOptions = [
    'AI Animation (এআই অ্যানিমেশন)',
    'Graphic Design (গ্রাফিক ডিজাইন ও থাম্বনেইল)',
    'Video Ads (বাণিজ্যিক ভিডিও বিজ্ঞাপন)',
    'Music Video (মিউজিক ভিডিও তৈরি)',
    'AI Content Creation (ভাইরাল রিলস ও কনটেন্ট)',
    'Full Creative Campaign (সম্পূর্ণ কাস্টম প্রোডাকশন)',
  ];

  const budgetOptions = isBengali
    ? ['স্ট্যান্ডার্ড / বাজেট অনুযায়ী', '৳৫,০০০ - ৳১৫,০০০', '৳১৫,০০০ - ৳৫০,০০০', '৳৫০,০০০+', 'আলোচনা সাপেক্ষে (Custom)']
    : ['Flexible / Discuss Scope', '$100 - $300', '$300 - $800', '$800 - $2,000+', 'Custom Scope'];

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-[#09090c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 font-mono-tech text-xs text-[#d4ff00] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-ping" />
            <span>{isBengali ? 'সরাসরি প্রজেক্ট শুরু করুন' : 'INITIATE A PROJECT // HIRE BARUN'}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight mb-4">
            {isBengali ? (
              <>
                চলুন আপনার প্রজেক্টের কাজ <span className="text-[#d4ff00]">শুরু করা যাক</span>
              </>
            ) : (
              <>
                LET'S BRING YOUR <span className="text-[#d4ff00]">VISION TO LIFE</span>
              </>
            )}
          </h2>

          <p className="font-mono-tech text-sm sm:text-base text-neutral-300">
            {isBengali
              ? 'আপনার ব্র্যান্ডের জন্য ভিডিও বিজ্ঞাপন, এআই অ্যানিমেশন, গ্রাফিক্স বা মিউজিক ভিডিও তৈরি করতে চান? নিচের ফর্মে মেসেজ দিন অথবা সরাসরি ইমেইল ও হোয়াটসঅ্যাপে যোগাযোগ করুন।'
              : 'Available for commercial video ads, AI animation, graphic design, and music video commissions. Direct inquiries answered within 12 hours.'}
          </p>
        </div>

        {/* Two-Column Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Instant Contact & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded bg-neutral-950 border border-white/10 space-y-5">
              <div className="space-y-1">
                <span className="font-mono-tech text-xs text-[#d4ff00] uppercase tracking-wider block">
                  {isBengali ? 'সরাসরি যোগাযোগের মাধ্যম' : 'DIRECT CONTACT CHANNELS'}
                </span>
                <h3 className="font-display font-black text-xl text-white uppercase">
                  BARUN BISWAS STUDIO
                </h3>
              </div>

              {/* Direct Email */}
              <div className="p-4 rounded bg-white/[0.02] border border-white/10 space-y-1.5">
                <div className="text-[10px] font-mono-tech text-neutral-400 uppercase">
                  {isBengali ? 'অফিসিয়াল ইমেইল:' : 'DIRECT EMAIL:'}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${directEmail}`}
                    className="font-mono-tech text-xs sm:text-sm text-white font-bold hover:text-[#d4ff00] transition-colors truncate"
                  >
                    {directEmail}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-white/10 hover:bg-[#d4ff00] hover:text-black transition-colors text-neutral-300 cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#d4ff00]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Quick WhatsApp Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{isBengali ? 'হোয়াটসঅ্যাপে চ্যাট করুন (Instant)' : 'CHAT ON WHATSAPP'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Response Time & Guarantee Badges */}
              <div className="space-y-2 pt-2 border-t border-white/5 font-mono-tech text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d4ff00]" />
                  <span>{isBengali ? '১২ ঘণ্টার মধ্যে নিশ্চিত রিপ্লাই' : 'Guaranteed reply within 12 hours'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ff007f]" />
                  <span>{isBengali ? 'ফ্রি প্রাথমিক কনসালটেশন ও আইডিয়া শেয়ারিং' : 'Free initial creative consultation'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded bg-neutral-950 border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#d4ff00]/20 border border-[#d4ff00] text-[#d4ff00] flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase">
                    {isBengali ? 'আপনার বার্তা সফলভাবে গৃহীত হয়েছে!' : 'PROJECT BRIEF TRANSMITTED!'}
                  </h3>
                  <p className="font-mono-tech text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    {isBengali
                      ? 'ধন্যবাদ! আপনার প্রজেক্টের রিকোয়েস্ট বরুণ বিশ্বাস পেয়েছেন। অতি দ্রুত আপনার সাথে যোগাযোগ করে প্রজেক্টের কাজ শুরু করার পরিকল্পনা জানানো হবে।'
                      : 'Thank you! Barun Biswas will personally review your brief and reply with timeline details within 12 hours.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setContactInfo('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded bg-white/10 hover:bg-white/20 text-xs font-mono-tech text-white uppercase cursor-pointer transition-colors"
                  >
                    {isBengali ? 'আরেকটি মেসেজ পাঠান' : 'SEND ANOTHER INQUIRY'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech text-neutral-300 uppercase">
                        {isBengali ? 'আপনার নাম / ব্র্যান্ডের নাম' : 'YOUR NAME / BRAND'} <span className="text-[#d4ff00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isBengali ? 'যেমন: মাহমুদ হাসান' : 'e.g. John Doe'}
                        className="w-full px-3.5 py-2.5 rounded bg-neutral-900 border border-white/15 text-white font-mono-tech text-sm focus:outline-none focus:border-[#d4ff00] transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech text-neutral-300 uppercase">
                        {isBengali ? 'ইমেইল বা ফোন / হোয়াটসঅ্যাপ নম্বর' : 'EMAIL OR WHATSAPP NO'} <span className="text-[#d4ff00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        placeholder={isBengali ? 'যেমন: 017xxxxxxxx বা name@brand.com' : 'e.g. +8801... or email'}
                        className="w-full px-3.5 py-2.5 rounded bg-neutral-900 border border-white/15 text-white font-mono-tech text-sm focus:outline-none focus:border-[#d4ff00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech text-neutral-300 uppercase">
                        {isBengali ? 'কাঙ্ক্ষিত সার্ভিস' : 'DESIRED SERVICE'}
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded bg-neutral-900 border border-white/15 text-white font-mono-tech text-sm focus:outline-none focus:border-[#d4ff00] transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-neutral-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech text-neutral-300 uppercase">
                        {isBengali ? 'আনুমানিক বাজেট' : 'BUDGET RANGE'}
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded bg-neutral-900 border border-white/15 text-white font-mono-tech text-sm focus:outline-none focus:border-[#d4ff00] transition-colors"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-neutral-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech text-neutral-300 uppercase">
                      {isBengali ? 'প্রজেক্টের বিবরণ ও আইডিয়া' : 'PROJECT BRIEF / DETAILS'} <span className="text-[#d4ff00]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={isBengali
                        ? 'আপনার প্রজেক্টের লক্ষ্য, কাঙ্ক্ষিত সময়সীমা ও ধারণা সম্পর্কে সংক্ষেপে লিখুন...'
                        : 'Describe your vision, timeline, target platform, or any sample references...'}
                      className="w-full px-3.5 py-2.5 rounded bg-neutral-900 border border-white/15 text-white font-mono-tech text-sm focus:outline-none focus:border-[#d4ff00] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-[#d4ff00] text-black font-display font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(212,255,0,0.25)]"
                  >
                    <span>{isBengali ? 'মেসেজ পাঠান ও কাজ শুরু করুন' : 'TRANSMIT BRIEF & HIRE'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
