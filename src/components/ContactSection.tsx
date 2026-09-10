import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Instagram, Youtube, Linkedin, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const { isBengali, bi } = useLanguage();
  const [selectedService, setSelectedService] = useState(preselectedService || 'Commercial Film & Direction');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'barunbiswas0777@gmail.com';

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
    'Commercial Film & Direction',
    'Short Film & Narrative',
    'Music Video & Audio-Visual',
    'Visual Production & AI Art',
    'Creative Consulting & Post',
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-[#09090c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 border border-white/10 font-mono-tech text-xs text-[#d4ff00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
            <span>{bi('GET IN TOUCH // INITIATE BRIEF', 'যোগাযোগ // প্রজেক্ট আলোচনা')}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight mb-4">
            {isBengali ? (
              <>
                চলুন নতুন কিছু <span className="text-[#d4ff00]">সৃষ্টি করি</span>।
              </>
            ) : (
              <>
                LET'S CREATE SOMETHING <span className="text-[#d4ff00]">MEMORABLE</span>.
              </>
            )}
          </h2>

          <p className="font-mono-tech text-sm sm:text-base text-neutral-400">
            {bi(
              'Available for commercial campaigns, narrative films, music videos, and creative commissions. Send a direct inquiry below.',
              'বাণিজ্যিক বিজ্ঞাপন, সিনেমাটিক ফিল্ম, মিউজিক ভিডিও বা যেকোনো সৃজনশীল প্রজেক্টের জন্য যোগাযোগ করুন।'
            )}
          </p>
        </div>

        {/* Two-Column Form & Direct Contact Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded bg-neutral-950 border border-white/10 space-y-5">
              <div className="space-y-1">
                <span className="font-mono-tech text-xs text-[#d4ff00] uppercase tracking-wider block">
                  {bi('DIRECT CONTACT', 'সরাসরি যোগাযোগ')}
                </span>
                <h3 className="font-display font-bold text-lg text-white uppercase">
                  BARUN BISWAS STUDIO
                </h3>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-[10px] font-mono-tech text-neutral-400 uppercase">
                  {bi('EMAIL ADDRESS:', 'ইমেইল অ্যাড্রেস:')}
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

              {/* Status Badge */}
              <div className="flex items-center gap-2 p-3 rounded bg-neutral-900 border border-white/10 text-xs font-mono-tech text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
                <span>{bi('Status: Open for new commissions & productions', 'স্ট্যাটাস: নতুন প্রজেক্টের জন্য উন্মুক্ত')}</span>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono-tech text-[10px] text-neutral-400 uppercase tracking-widest block">
                  {bi('ONLINE PLATFORMS:', 'সোশ্যাল লিংক:')}
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono-tech text-xs">
                  {[
                    { name: 'Instagram', handle: '@barunbiswas', icon: <Instagram className="w-3.5 h-3.5" /> },
                    { name: 'YouTube', handle: 'Barun Biswas Films', icon: <Youtube className="w-3.5 h-3.5" /> },
                    { name: 'LinkedIn', handle: 'Barun Biswas', icon: <Linkedin className="w-3.5 h-3.5" /> },
                    { name: 'X / Twitter', handle: '@barunbiswas', icon: <Share2 className="w-3.5 h-3.5" /> },
                  ].map((s) => (
                    <div
                      key={s.name}
                      className="p-2 rounded bg-white/[0.02] border border-white/5 text-neutral-300 flex items-center gap-2"
                    >
                      {s.icon}
                      <span className="text-[11px] truncate">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded bg-neutral-950 border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#d4ff00]/20 border border-[#d4ff00] text-[#d4ff00] flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase">
                    {bi('MESSAGE TRANSMITTED', 'বার্তা সফলভাবে পাঠানো হয়েছে')}
                  </h3>
                  <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                    {bi(
                      'Thank you for reaching out. Barun Biswas will review your project brief and respond shortly.',
                      'ধন্যবাদ। আপনার বার্তাটি সফলভাবে গৃহীত হয়েছে। দ্রুতই আপনার সাথে যোগাযোগ করা হবে।'
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-5 py-2 rounded bg-white/10 hover:bg-white/20 text-xs font-mono-tech text-white uppercase cursor-pointer"
                  >
                    {bi('SEND ANOTHER INQUIRY', 'আরেকটি বার্তা পাঠান')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech text-neutral-400 uppercase">
                        {bi('YOUR NAME', 'আপনার নাম')} <span className="text-[#d4ff00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded bg-neutral-900 border border-white/15 text-white font-mono-tech text-sm focus:outline-none focus:border-[#d4ff00] transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-tech text-neutral-400 uppercase">
                        {bi('EMAIL ADDRESS', 'ইমেইল অ্যাড্রেস')} <span className="text-[#d4ff00]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded bg-neutral-900 border border-white/15 text-white font-mono-tech text-sm focus:outline-none focus:border-[#d4ff00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech text-neutral-400 uppercase">
                      {bi('PROJECT TYPE / SERVICE', 'প্রজেক্টের ধরন / সার্ভিস')}
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

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech text-neutral-400 uppercase">
                      {bi('PROJECT BRIEF / MESSAGE', 'প্রজেক্টের বিস্তারিত')} <span className="text-[#d4ff00]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={bi(
                        'Describe your project, timeline, deliverables, or creative direction...',
                        'আপনার প্রজেক্টের লক্ষ্য, সময়সীমা ও ধারণা সম্পর্কে সংক্ষেপে লিখুন...'
                      )}
                      className="w-full px-3.5 py-2.5 rounded bg-neutral-900 border border-white/15 text-white font-mono-tech text-sm focus:outline-none focus:border-[#d4ff00] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-[#d4ff00] text-black font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(212,255,0,0.2)]"
                  >
                    <span>{bi('SEND INQUIRY', 'বার্তা পাঠান')}</span>
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
