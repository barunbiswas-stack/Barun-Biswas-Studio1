import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Keyboard, X, Volume2, VolumeX, Sparkles, Music, Play, Check } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { useLanguage } from '../context/LanguageContext';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose
}) => {
  const { t, isBengali } = useLanguage();
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [playedChime, setPlayedChime] = useState(false);

  useEffect(() => {
    setVolume(audioSynth.getVolume());
    setIsMuted(audioSynth.isMuted());
  }, [isOpen]);

  const handleSoundTest = () => {
    audioSynth.testSound();
    setPlayedChime(true);
    setTimeout(() => setPlayedChime(false), 1500);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioSynth.setVolume(val);
    if (val === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };

  const handleToggleMute = () => {
    const m = audioSynth.toggleMute();
    setIsMuted(m);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="shortcuts-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            key="shortcuts-card"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-neutral-950 border border-white/20 rounded-sm p-6 space-y-6 shadow-2xl relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-[#d4ff00]/10 text-[#d4ff00]">
                  <Keyboard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-wide">
                    {t.shortcuts.title}
                  </h3>
                  <p className="text-[11px] font-mono-tech text-neutral-400">
                    {t.shortcuts.subtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded bg-neutral-900 border border-white/15 text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Audio Diagnostics & Sound Verification */}
            <div className="p-4 rounded bg-neutral-900/60 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#d4ff00] font-bold uppercase flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  {isBengali ? 'অডিও ইঞ্জিন ও সাউন্ড পরীক্ষা' : 'AUDIO ENGINE & SOUND TEST'}
                </span>
                <button
                  onClick={handleSoundTest}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#d4ff00] text-black font-display font-bold text-xs uppercase cursor-pointer hover:bg-white transition-colors"
                >
                  {playedChime ? <Check className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{playedChime ? (isBengali ? 'শব্দ বাজছে!' : 'SOUND PLAYING!') : (isBengali ? 'এখনই পরীক্ষা করুন' : 'TEST SOUND NOW')}</span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={handleToggleMute}
                  className="p-2 rounded bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white cursor-pointer"
                  title={isMuted ? (isBengali ? 'আনমিউট' : 'Unmute') : (isBengali ? 'মিউট' : 'Mute')}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-[#ff007f]" /> : <Volume2 className="w-4 h-4 text-[#d4ff00]" />}
                </button>

                <div className="flex-1 flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech text-neutral-400">{isBengali ? 'ভলিউম' : 'VOLUME'}</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="flex-1 accent-[#d4ff00] cursor-pointer"
                  />
                  <span className="text-[10px] font-mono-tech text-neutral-300 w-8">
                    {Math.round(volume * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Shortcut Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[11px] font-mono-tech text-neutral-400 uppercase tracking-wider block mb-1">
                  // {isBengali ? 'ন্যাভিগেশন শর্টকাট' : 'NAVIGATION SHORTCUTS'}
                </span>
                <div className="space-y-1.5 text-xs font-mono-tech">
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'হিরো / রিল বিভাগে যান' : 'Jump to Hero / Reel'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#d4ff00]">1</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'মূলনীতি / দর্শন' : 'Manifesto & Vision'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#d4ff00]">2</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'নির্বাচিত কাজসমূহ' : 'Featured Work Hub'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#d4ff00]">3</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'সার্ভিস ও প্যাকেজ' : 'Services & Commission'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#d4ff00]">4</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'কর্মপদ্ধতি ও ল্যাব' : 'Process & Creative Lab'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#d4ff00]">5</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'টাইমলাইন ও পরিসংখ্যান' : 'Timeline & Statistics'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#d4ff00]">6</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'পরিচালক পরিচয়' : 'About Director'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#d4ff00]">7</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'যোগাযোগ / ব্রিফ' : 'Contact / Brief'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#d4ff00]">8 / 0</kbd>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono-tech text-neutral-400 uppercase tracking-wider block mb-1">
                  // {isBengali ? 'ইন্টারেক্টিভ কন্ট্রোল' : 'INTERACTIVE CONTROLS'}
                </span>
                <div className="space-y-1.5 text-xs font-mono-tech">
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'পূর্ববর্তী / পরবর্তী প্রজেক্ট' : 'Prev / Next Project'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#ff007f]">← / →</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'ভিডিও চালু / থামান' : 'Play / Pause Video'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#ff007f]">SPACE</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'মিউট / আনমিউট' : 'Toggle Mute / Unmute'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#ff007f]">M</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'ফুলস্ক্রিন মোড' : 'Toggle Fullscreen'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#ff007f]">F</kbd>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                    <span className="text-neutral-300">{isBengali ? 'মডেল বন্ধ করুন' : 'Close Modal'}</span>
                    <kbd className="px-2 py-0.5 rounded bg-neutral-900 border border-white/20 text-[#ff007f]">ESC</kbd>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Tip */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-neutral-400">
              <span>
                {isBengali ? (
                  <>যেকোনো সময় এই তালিকা খুলতে <kbd className="px-1 py-0.5 bg-neutral-900 rounded border border-white/20 text-white">?</kbd> চাপুন</>
                ) : (
                  <>Press <kbd className="px-1 py-0.5 bg-neutral-900 rounded border border-white/20 text-white">?</kbd> anytime to reopen this cheatsheet</>
                )}
              </span>
              <button
                onClick={onClose}
                className="px-3 py-1 rounded bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              >
                {isBengali ? 'বুঝেছি' : 'GOT IT'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
