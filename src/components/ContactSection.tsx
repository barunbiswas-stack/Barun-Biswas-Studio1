import React, { useState } from 'react';
import { Mail, Send, Check, ArrowUpRight, Copy, Sparkles, MessageSquare, Instagram, Youtube, Linkedin, Share2 } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [selectedService, setSelectedService] = useState(preselectedService || 'AI Advertising');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'barun@barunbiswas.studio';

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
    'AI Advertising & Commercials',
    'AI Music Videos',
    'AI Music & Sound Creation',
    'Cinematic AI Short Film',
    'AI Graphics & Poster Suite',
    '9:16 Social Media Campaign',
    'Experimental Creative Art Lab'
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#09090c] overflow-hidden">
      {/* Background neon ambient pulse */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4ff00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-0 w-96 h-96 bg-[#ff007f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono-tech text-xs text-[#d4ff00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
            <span>CONTACT & COMMISSIONS</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.92]">
            HAVE AN IDEA? <br />
            <span className="text-[#d4ff00]">LET'S TURN IT</span> INTO SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-400 to-[#ff007f]">
              PEOPLE REMEMBER.
            </span>
          </h2>

          <p className="font-mono-tech text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Ready to discuss an advertising campaign, music video, or visual production? Send a direct message below.
          </p>
        </div>

        {/* Two-Column Form & Transmission Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left: Direct Transmissions & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-sm bg-neutral-950 border border-white/15 space-y-5">
              <div className="space-y-1">
                <span className="font-mono-tech text-xs text-[#d4ff00] uppercase tracking-wider">
                  DIRECT INQUIRIES
                </span>
                <h3 className="font-display font-black text-xl text-white uppercase">
                  STUDIO DESK
                </h3>
              </div>

              {/* Direct email box */}
              <div className="p-4 rounded-sm bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-[10px] font-mono-tech text-neutral-400 uppercase">
                  STUDIO EMAIL:
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-xs sm:text-sm text-white font-bold truncate">
                    {directEmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-white/10 hover:bg-[#d4ff00] hover:text-black transition-colors text-neutral-300 cursor-pointer shrink-0 ml-2"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#d4ff00]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-3 p-3 rounded-sm bg-neutral-900 border border-white/10 text-xs font-mono-tech text-neutral-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff00] animate-ping" />
                <span>STATUS: OPEN FOR NEW COMMISSIONS & CAMPAIGNS</span>
              </div>

              {/* Social Channels (Placeholders ready to customize) */}
              <div className="space-y-3 pt-2">
                <span className="font-mono-tech text-[10px] text-neutral-400 uppercase tracking-widest block">
                  SOCIAL & PORTFOLIO LINKS:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Instagram', handle: '@barunbiswas.studio', icon: <Instagram className="w-3.5 h-3.5" /> },
                    { name: 'YouTube', handle: '@barunbiswasfilms', icon: <Youtube className="w-3.5 h-3.5" /> },
                    { name: 'LinkedIn', handle: 'Barun Biswas', icon: <Linkedin className="w-3.5 h-3.5" /> },
                    { name: 'X / Twitter', handle: '@barunbiswas', icon: <Share2 className="w-3.5 h-3.5" /> }
                  ].map((s) => (
                    <a
                      key={s.name}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="p-2.5 rounded-sm bg-white/[0.02] border border-white/10 hover:border-[#d4ff00] hover:text-[#d4ff00] text-xs font-mono-tech text-neutral-300 flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {s.icon}
                        <span className="font-semibold">{s.name}</span>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Creative Brief Submission Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-sm bg-neutral-950 border border-white/20 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#d4ff00]/20 border border-[#d4ff00] text-[#d4ff00] flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white uppercase">
                    MESSAGE RECEIVED
                  </h3>
                  <p className="font-mono-tech text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you {name || 'there'}. Your inquiry for <span className="text-[#d4ff00]">{selectedService}</span> has been sent directly to Barun Biswas. I typically reply within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-xs font-mono-tech uppercase text-white rounded-sm cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono-tech text-xs text-[#ff007f] uppercase tracking-wider">
                      START A PROJECT
                    </span>
                    <span className="font-mono-tech text-[10px] text-neutral-500">
                      DIRECT INQUIRY
                    </span>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono-tech text-neutral-300 block">
                      PROJECT MEDIUM / FOCUS:
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#09090c] border border-white/15 rounded-sm p-3 text-xs font-mono-tech text-white focus:outline-none focus:border-[#d4ff00] cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-neutral-300 block">
                        YOUR NAME / BRAND:
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Elena Vance / Apex Brand"
                        className="w-full bg-[#09090c] border border-white/15 rounded-sm p-3 text-xs font-mono-tech text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#d4ff00]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-neutral-300 block">
                        CONTACT EMAIL:
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-[#09090c] border border-white/15 rounded-sm p-3 text-xs font-mono-tech text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#d4ff00]"
                      />
                    </div>
                  </div>

                  {/* Message / Creative Brief */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-tech text-neutral-300 block">
                      PROJECT DETAILS & VISION:
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about the campaign, visual tone, sound direction, or timeline..."
                      className="w-full bg-[#09090c] border border-white/15 rounded-sm p-3 text-xs font-mono-tech text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#d4ff00]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-brief-btn"
                    className="w-full py-4 px-6 bg-[#d4ff00] text-black font-display font-black text-sm uppercase tracking-widest rounded-sm hover:bg-white hover:shadow-[0_0_25px_rgba(212,255,0,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>SEND PROJECT INQUIRY</span>
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
