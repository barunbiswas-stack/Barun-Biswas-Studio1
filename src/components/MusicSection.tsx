import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Disc3, Volume2, Music, Video, Radio, Sparkles, Sliders } from 'lucide-react';
import { Project } from '../types';
import { audioSynth } from '../utils/audioSynth';

interface MusicSectionProps {
  onSelectProject: (project: Project) => void;
  musicProjects: Project[];
}

export const MusicSection: React.FC<MusicSectionProps> = ({
  onSelectProject,
  musicProjects
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackType, setCurrentTrackType] = useState<'cyber' | 'ambient' | 'energetic'>('cyber');
  const [activeTab, setActiveTab] = useState<'audio' | 'video'>('audio');
  const [waveformBars, setWaveformBars] = useState<number[]>(Array(36).fill(12));
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const unsub = audioSynth.subscribe((playing, trackType) => {
      setIsPlaying(playing);
      if (trackType) {
        setCurrentTrackType(trackType as 'cyber' | 'ambient' | 'energetic');
      }
    });

    return () => unsub();
  }, []);

  // Real-time audio waveform animation loop
  useEffect(() => {
    let frame = 0;
    const updateWaveform = () => {
      frame++;
      if (isPlaying) {
        const freqData = audioSynth.getFrequencyData();
        const bars: number[] = [];
        for (let i = 0; i < 36; i++) {
          const sample = freqData[i % freqData.length] || 0;
          // Scale to height percentage (15% to 95%)
          const height = Math.max(14, (sample / 255) * 85 + Math.sin(frame * 0.15 + i) * 6);
          bars.push(height);
        }
        setWaveformBars(bars);
      } else {
        // Idle gentle breathing wave
        const bars = Array.from({ length: 36 }, (_, i) => {
          return 14 + Math.sin(frame * 0.05 + i * 0.4) * 8;
        });
        setWaveformBars(bars);
      }
      animFrameRef.current = requestAnimationFrame(updateWaveform);
    };

    animFrameRef.current = requestAnimationFrame(updateWaveform);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const soundSuites = [
    {
      id: 'cyber',
      title: 'CYBERPUNK OVERDRIVE',
      bpm: 128,
      key: 'D MINOR',
      desc: 'Driving cyber-industrial basslines, 16th-note arpeggiators, and distorted synth stabs.',
      color: '#d4ff00'
    },
    {
      id: 'ambient',
      title: 'ASTRAL DRIFT (AMBIENT SCORE)',
      bpm: 78,
      key: 'C MAJOR 7',
      desc: 'Floating ethereal choir pads, sub-frequency drones, and generative harmonic textures.',
      color: '#ff007f'
    },
    {
      id: 'energetic',
      title: 'VELOCITY PULSE (ELECTRO AD BEAT)',
      bpm: 120,
      key: 'A MINOR',
      desc: 'High-octane commercial percussion, mechanical transients, and punchy synth wave.',
      color: '#d4ff00'
    }
  ];

  const handleTogglePlay = (type: 'cyber' | 'ambient' | 'energetic') => {
    if (isPlaying && currentTrackType === type) {
      audioSynth.stop();
    } else {
      audioSynth.playTrack(type);
    }
  };

  return (
    <section id="music" className="py-24 border-b border-white/10 relative bg-[#0a0a0f] overflow-hidden">
      {/* Background audio grid glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#ff007f]/5 via-[#d4ff00]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#d4ff00] mb-3">
              <span className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full" />
              <span>SOUND DESIGN & MUSIC VIDEOS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase leading-none">
              SEE IT. <br />
              <span className="text-[#ff007f]">HEAR IT.</span>
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono-tech text-neutral-400 max-w-md">
            Original acoustic soundscapes meeting cinematic music video directing. Test the live studio synthesizer below or explore complete visual productions.
          </div>
        </div>

        {/* Interactive Audio Synthesizer Deck (Visualizer Bar) */}
        <div className="p-6 sm:p-8 rounded-sm bg-neutral-950 border border-white/20 mb-14 space-y-6 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-sm ${isPlaying ? 'bg-[#ff007f] text-white animate-pulse' : 'bg-white/5 text-neutral-400'}`}>
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-bold text-base text-white uppercase tracking-wider">
                  STUDIO SOUNDSCAPE PLAYER
                </div>
                <div className="text-[11px] font-mono-tech text-neutral-400">
                  {isPlaying ? `NOW PLAYING: ${currentTrackType.toUpperCase()} SUITE` : 'STANDBY // SELECT TRACK PREVIEW'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono-tech text-xs">
              <span className="text-neutral-400">STATUS:</span>
              <span className={`px-2 py-0.5 rounded ${isPlaying ? 'bg-[#d4ff00] text-black font-bold' : 'bg-white/10 text-neutral-400'}`}>
                {isPlaying ? 'ACTIVE' : 'STANDBY'}
              </span>
            </div>
          </div>

          {/* Real-time Frequency Waveform Visualizer */}
          <div className="h-28 w-full bg-black/60 rounded-sm border border-white/10 p-4 flex items-end justify-between gap-1 sm:gap-2">
            {waveformBars.map((height, idx) => (
              <div
                key={idx}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-t-xs transition-all duration-75 ${
                  isPlaying
                    ? idx % 2 === 0 ? 'bg-[#d4ff00]' : 'bg-[#ff007f]'
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Sound Suite Track Selector Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {soundSuites.map((suite) => {
              const isThisPlaying = isPlaying && currentTrackType === suite.id;
              return (
                <div
                  key={suite.id}
                  onClick={() => handleTogglePlay(suite.id as 'cyber' | 'ambient' | 'energetic')}
                  className={`p-4 rounded-sm border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isThisPlaying
                      ? 'border-[#d4ff00] bg-[#d4ff00]/10 shadow-[0_0_15px_rgba(212,255,0,0.2)]'
                      : 'border-white/10 bg-neutral-900/60 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-[10px] text-neutral-400">
                      {suite.bpm} BPM // {suite.key}
                    </span>
                    <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isThisPlaying ? 'bg-[#d4ff00] text-black' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}>
                      {isThisPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>
                  </div>

                  <div>
                    <div className="font-display font-bold text-sm text-white uppercase tracking-wide">
                      {suite.title}
                    </div>
                    <p className="text-[11px] font-mono-tech text-neutral-400 mt-1 leading-normal">
                      {suite.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Music Video & Cinematic Art Gallery */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#ff007f] flex items-center gap-2">
              <Video className="w-4 h-4" />
              FEATURED MUSIC VIDEO RELEASES
            </span>
            <span className="text-xs font-mono-tech text-neutral-400">
              4K CINEMATOGRAPHY
            </span>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {musicProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => {
                    audioSynth.playSfx('whoosh');
                    onSelectProject(proj);
                  }}
                  className="group relative aspect-video rounded-sm overflow-hidden border border-white/15 bg-neutral-950 cursor-pointer p-6 flex flex-col justify-end transition-all hover:border-[#d4ff00] hover:shadow-[0_0_30px_rgba(212,255,0,0.15)]"
                >
                  {/* Poster Image */}
                  <img
                    src={proj.coverImage}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-40"
                  />

                  {/* Video loop teaser on hover */}
                  {proj.videoTeaser && (
                    <video
                      src={proj.videoTeaser}
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Autoplay Badge */}
                  <div className="absolute top-4 left-4 px-2 py-0.5 rounded bg-black/80 border border-white/20 text-[#d4ff00] font-mono-tech text-[9px] uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-ping" />
                    <span>CLICK FOR 4K + AUDIO</span>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <div className="text-[10px] font-mono-tech uppercase tracking-widest text-[#d4ff00]">
                      {proj.duration || 'MUSIC VIDEO'}
                    </div>
                    <h3 className="font-display font-black text-2xl text-white uppercase group-hover:text-[#d4ff00] transition-colors flex items-center justify-between">
                      <span>{proj.title}</span>
                      <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#d4ff00] group-hover:text-black flex items-center justify-center transition-all shadow-lg shrink-0">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </h3>
                    <p className="text-xs font-mono-tech text-neutral-300 line-clamp-1">
                      {proj.brief}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};
