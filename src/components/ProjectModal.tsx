import React, { useState, useEffect, useRef } from 'react';
import {
  X, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2,
  Film, Image as ImageIcon, Sparkles, Sliders, CheckCircle2,
  Copy, Check, Radio, Repeat, FastForward, RotateCcw
} from 'lucide-react';
import { Project } from '../types';
import { audioSynth } from '../utils/audioSynth';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPlayAudioSample: (type: 'cyber' | 'ambient' | 'energetic') => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onPlayAudioSample
}) => {
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);
  const [mediaMode, setMediaMode] = useState<'video' | 'still'>('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [freqBars, setFreqBars] = useState<number[]>(Array(24).fill(15));

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  if (!project) return null;

  // Aggregate media list
  const allImages = [project.coverImage, ...(project.secondaryImages || [])];
  const allVideos = [
    project.videoTeaser || 'https://videos.pexels.com/video-files/3044127/3044127-hd_1920_1080_24fps.mp4',
    ...(project.secondaryVideos || [])
  ];

  const currentVideoSrc = allVideos[activeMediaIdx % allVideos.length];
  const currentImageSrc = allImages[activeMediaIdx % allImages.length];

  // Automatic Smooth Playback with Sound on Open
  useEffect(() => {
    // Reset indices
    setActiveMediaIdx(0);
    setMediaMode('video');
    setIsPlaying(true);

    // Trigger Audio Synthesis for this project
    const synthType = project.audioSample?.synthWaveType || (project.category === 'MUSIC' ? 'cyber' : project.category === 'ADS' ? 'energetic' : 'ambient');
    audioSynth.playTrack(synthType);
    audioSynth.setVolume(volume);

    // Play video element
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser suspended
        });
      }
    }

    return () => {
      // Clean up audio on close
      audioSynth.stop();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [project]);

  // Handle Video element source updates
  useEffect(() => {
    if (mediaMode === 'video' && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activeMediaIdx, mediaMode]);

  // Waveform animation loop
  useEffect(() => {
    let tick = 0;
    const renderWave = () => {
      tick++;
      if (isPlaying && !isAudioMuted) {
        const data = audioSynth.getFrequencyData();
        const bars: number[] = [];
        for (let i = 0; i < 24; i++) {
          const val = data[i % data.length] || 0;
          const h = Math.max(12, (val / 255) * 88 + Math.sin(tick * 0.2 + i) * 6);
          bars.push(h);
        }
        setFreqBars(bars);
      } else {
        const idleBars = Array.from({ length: 24 }, (_, i) => 12 + Math.sin(tick * 0.06 + i * 0.4) * 4);
        setFreqBars(idleBars);
      }
      animFrameRef.current = requestAnimationFrame(renderWave);
    };

    animFrameRef.current = requestAnimationFrame(renderWave);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, isAudioMuted]);

  const handleTogglePlay = () => {
    audioSynth.playSfx('click');
    if (mediaMode === 'video' && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        if (!isAudioMuted) {
          audioSynth.playTrack(project.audioSample?.synthWaveType || 'cyber');
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        audioSynth.stop();
      }
    } else {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audioSynth.stop();
      } else {
        audioSynth.playTrack(project.audioSample?.synthWaveType || 'cyber');
      }
    }
  };

  const handleToggleMute = () => {
    const muted = audioSynth.toggleMute();
    setIsAudioMuted(muted);
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioSynth.setVolume(val);
    if (val === 0) {
      setIsAudioMuted(true);
    } else if (isAudioMuted) {
      setIsAudioMuted(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 0;
      setCurrentTime(cur);
      setDuration(dur);
      if (dur > 0) {
        setProgress((cur / dur) * 100);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = pos * videoRef.current.duration;
      setProgress(pos * 100);
    }
  };

  const handleFullscreenToggle = () => {
    audioSynth.playSfx('click');
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleSelectAngle = (idx: number) => {
    audioSynth.playSfx('click');
    setActiveMediaIdx(idx);
  };

  const handleCopyShare = () => {
    audioSynth.playSfx('click');
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex flex-col justify-start items-center p-3 sm:p-6 md:p-8 animate-fade-in"
    >
      {/* Top Floating Control Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between pb-3 mb-4 border-b border-white/10 sticky top-0 z-30 bg-black/80 backdrop-blur-md pt-2">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
          <span className="font-mono-tech text-xs text-[#d4ff00] font-bold tracking-wider">
            CINEMATIC ARCHIVE // {project.category}
          </span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono-tech text-neutral-300 hidden sm:inline">
            AUTOPLAY ENGINE: ACTIVE
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCopyShare}
            className="px-3 py-1.5 rounded-sm bg-white/5 border border-white/15 hover:border-[#d4ff00] text-xs font-mono-tech text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-[#d4ff00]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'LINK COPIED' : 'SHARE'}</span>
          </button>
          <button
            onClick={() => {
              audioSynth.playSfx('whoosh');
              onClose();
            }}
            id="close-project-modal-btn"
            className="p-2 rounded-sm bg-neutral-900 border border-white/20 text-neutral-300 hover:text-white hover:border-[#ff007f] hover:bg-[#ff007f]/10 transition-colors cursor-pointer"
            aria-label="Close Project View"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-5xl space-y-6 pb-16">
        {/* Header Title Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech text-[#ff007f] tracking-widest uppercase">
              {project.subtitle}
            </span>
            <span className="text-neutral-500 text-xs font-mono-tech">•</span>
            <span className="text-neutral-400 text-xs font-mono-tech">{project.duration || 'ORIGINAL PRODUCTION'}</span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-none">
            {project.title}
          </h1>
          <p className="text-xs sm:text-base font-mono-tech text-neutral-300 max-w-3xl leading-relaxed">
            {project.brief}
          </p>
        </div>

        {/* PRIMARY CINEMATIC VIDEO / MEDIA PLAYER STAGE */}
        <div
          ref={playerContainerRef}
          className="relative rounded-sm overflow-hidden border border-white/20 bg-black aspect-video group shadow-[0_0_40px_rgba(0,0,0,0.8)]"
        >
          {/* Active Media Renderer (Smooth Video or Hi-Res Still) */}
          {mediaMode === 'video' ? (
            <video
              ref={videoRef}
              src={currentVideoSrc}
              poster={currentImageSrc}
              autoPlay
              playsInline
              loop
              muted={isAudioMuted}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(true)}
              className="w-full h-full object-cover object-center transition-opacity duration-300"
            />
          ) : (
            <img
              src={currentImageSrc}
              alt={project.title}
              className="w-full h-full object-cover object-center animate-fade-in"
            />
          )}

          {/* Top HUD Overlay (Format & Status) */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-white/20 font-mono-tech text-[10px] text-[#d4ff00] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-ping" />
                {mediaMode === 'video' ? 'CINEMATIC MOTION' : 'HI-RES STILLS'}
              </span>
              <span className="px-2 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-white/10 font-mono-tech text-[10px] text-white/70 hidden sm:inline">
                ORIGINAL MASTER
              </span>
            </div>

            {/* Media Mode Switcher (Video vs Stills) */}
            <div className="pointer-events-auto flex items-center gap-1 bg-black/80 backdrop-blur-md border border-white/20 p-1 rounded-sm">
              <button
                onClick={() => {
                  audioSynth.playSfx('click');
                  setMediaMode('video');
                }}
                className={`px-2.5 py-1 rounded text-[10px] font-mono-tech uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 ${
                  mediaMode === 'video' ? 'bg-[#d4ff00] text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Film className="w-3 h-3" />
                <span>VIDEO</span>
              </button>
              <button
                onClick={() => {
                  audioSynth.playSfx('click');
                  setMediaMode('still');
                }}
                className={`px-2.5 py-1 rounded text-[10px] font-mono-tech uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 ${
                  mediaMode === 'still' ? 'bg-[#ff007f] text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3 h-3" />
                <span>STILLS</span>
              </button>
            </div>
          </div>

          {/* Interactive Player HUD Controls (Bottom Bar) */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-20 space-y-2.5 transition-opacity duration-300">
            {/* Clickable Progress Scrub Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full overflow-hidden cursor-pointer relative transition-all group/bar"
            >
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[#d4ff00] to-[#ff007f] relative transition-all duration-100"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_#d4ff00] opacity-0 group-hover/bar:opacity-100" />
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between gap-3 text-white">
              {/* Left: Play/Pause, Audio EQ Visualizer & Track Info */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="w-9 h-9 rounded-full bg-[#d4ff00] hover:bg-white text-black flex items-center justify-center transition-transform active:scale-95 cursor-pointer shrink-0"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
                </button>

                {/* Real-time Frequency Spectrum Wave */}
                <div className="hidden sm:flex items-end gap-0.5 h-6 px-2 py-1 bg-black/60 rounded border border-white/10">
                  {freqBars.map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`w-1 rounded-t-xs transition-all duration-75 ${
                        i % 2 === 0 ? 'bg-[#d4ff00]' : 'bg-[#ff007f]'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-left">
                  <div className="font-mono-tech text-xs text-white font-bold truncate max-w-[150px] sm:max-w-[200px]">
                    {project.audioSample?.trackName || 'Original Studio Soundscape'}
                  </div>
                  <div className="font-mono-tech text-[10px] text-neutral-400">
                    {formatTime(currentTime)} / {formatTime(duration || 45)} • {project.audioSample?.genre || 'Cinematic Score'}
                  </div>
                </div>
              </div>

              {/* Right: Audio Volume Slider, Mute, Fullscreen */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Audio Synth Track Preset Switcher */}
                <div className="hidden md:flex items-center gap-1 text-[10px] font-mono-tech text-neutral-400 bg-black/60 px-2 py-1 rounded border border-white/10">
                  <Radio className="w-3 h-3 text-[#d4ff00]" />
                  <span>SCORE:</span>
                  {(['cyber', 'ambient', 'energetic'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        audioSynth.playSfx('click');
                        onPlayAudioSample(type);
                      }}
                      className="px-1.5 py-0.5 rounded hover:text-white uppercase transition-colors"
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Volume Mute Toggle */}
                <button
                  onClick={handleToggleMute}
                  className="p-2 rounded-sm bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white transition-colors cursor-pointer"
                  title={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
                >
                  {isAudioMuted ? (
                    <VolumeX className="w-4 h-4 text-[#ff007f]" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-[#d4ff00]" />
                  )}
                </button>

                {/* Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isAudioMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-14 sm:w-20 accent-[#d4ff00] cursor-pointer hidden sm:block"
                />

                {/* Fullscreen Button */}
                <button
                  onClick={handleFullscreenToggle}
                  className="p-2 rounded-sm bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white transition-colors cursor-pointer"
                  title="Fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-angle Gallery Thumbnails (Click to switch view smoothly) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400">
            <span className="flex items-center gap-1.5 text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#d4ff00]" />
              CAMERA PASSES & PRODUCTION ANGLES (CLICK TO AUTOPLAY):
            </span>
            <span>0{activeMediaIdx + 1} / 0{allImages.length}</span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectAngle(idx)}
                className={`relative w-28 sm:w-36 aspect-video rounded-sm overflow-hidden border transition-all shrink-0 cursor-pointer ${
                  activeMediaIdx === idx
                    ? 'border-[#d4ff00] scale-105 shadow-[0_0_15px_rgba(212,255,0,0.35)]'
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 hover:bg-transparent" />
                <span className="absolute top-1 left-1 px-1 rounded bg-black/80 text-[8px] font-mono-tech text-[#d4ff00]">
                  PASS 0{idx + 1}
                </span>
                <span className="absolute bottom-1 right-1 px-1 bg-black/80 text-[8px] font-mono-tech text-white flex items-center gap-0.5">
                  <Play className="w-2 h-2 fill-current" />
                  PLAY
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* THE HUMAN PROCESS SECTION */}
        <div className="p-6 sm:p-8 rounded-sm bg-neutral-950 border border-white/20 relative space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff00]" />
              <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-wider uppercase">
                THE HUMAN PROCESS
              </h2>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#d4ff00]/15 border border-[#d4ff00]/30 text-[#d4ff00] font-mono-tech text-xs">
              DIRECTED BY BARUN BISWAS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Concept */}
            <div className="space-y-2 p-4 rounded-sm bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono-tech text-[#ff007f] font-bold uppercase tracking-wider">
                01. NARRATIVE TREATMENT & EMOTION
              </div>
              <p className="text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed">
                {project.humanProcess.concept}
              </p>
            </div>

            {/* 2. AI Workflow */}
            <div className="space-y-2 p-4 rounded-sm bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono-tech text-[#d4ff00] font-bold uppercase tracking-wider">
                02. SYNTHESIS & EXPLORATION
              </div>
              <p className="text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed">
                {project.humanProcess.aiWorkflow}
              </p>
            </div>

            {/* 3. Human Intervention */}
            <div className="space-y-2 p-4 rounded-sm bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono-tech text-white font-bold uppercase tracking-wider">
                03. EDITORIAL DIRECTION & FRAME SELECTION
              </div>
              <p className="text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed">
                {project.humanProcess.humanIntervention}
              </p>
            </div>

            {/* 4. Motion & Audio Refinement */}
            <div className="space-y-2 p-4 rounded-sm bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono-tech text-[#ff007f] font-bold uppercase tracking-wider">
                04. MOTION POLISH & BESPOKE AUDIO SCORE
              </div>
              <p className="text-xs sm:text-sm font-mono-tech text-neutral-300 leading-relaxed">
                {project.humanProcess.soundOrMotionNotes}
              </p>
            </div>
          </div>

          {/* Final Deliverables Box */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-tech text-neutral-400">
            <div>
              <span className="text-white font-semibold">FINAL PACKAGING: </span>
              {project.humanProcess.deliverableStats}
            </div>
            <div className="flex items-center gap-1 text-[#d4ff00]">
              <CheckCircle2 className="w-4 h-4" />
              <span>DIRECTOR APPROVED</span>
            </div>
          </div>
        </div>

        {/* Project Meta Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-sm bg-neutral-900 border border-white/15 text-xs font-mono-tech text-neutral-300"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
