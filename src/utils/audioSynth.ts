/**
 * Web Audio API Synthesizer & Audio Visualizer Engine
 * Generates rich, real-time cinematic synthwave, cyber basslines, and ambient soundscapes
 * along with real-time FFT frequency analysis for waveform visualizers.
 */

class AudioSynthEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentTrackType: 'cyber' | 'ambient' | 'energetic' | null = null;
  private intervalId: number | null = null;
  private analyzerNode: AnalyserNode | null = null;
  private masterGain: GainNode | null = null;
  private activeNodes: (AudioNode | number)[] = [];
  private onStateChangeCallbacks: Set<(isPlaying: boolean, trackType: string | null) => void> = new Set();
  private volume: number = 0.35;
  private isMutedState: boolean = false;

  public initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyzerNode = this.ctx.createAnalyser();
      this.analyzerNode.fftSize = 64;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMutedState ? 0 : this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.analyzerNode);
      this.analyzerNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx && !this.isMutedState) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public toggleMute(): boolean {
    this.initContext();
    this.isMutedState = !this.isMutedState;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMutedState ? 0 : this.volume, this.ctx.currentTime);
    }
    return this.isMutedState;
  }

  public isMuted(): boolean {
    return this.isMutedState;
  }

  public playSfx(type: 'click' | 'whoosh' | 'glitch' | 'sub' = 'click') {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      const ctx = this.ctx;
      const t = ctx.currentTime;
      const sfxGain = ctx.createGain();
      sfxGain.connect(this.masterGain);

      if (type === 'click') {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, t);
        osc.frequency.exponentialRampToValueAtTime(200, t + 0.04);
        sfxGain.gain.setValueAtTime(0.12, t);
        sfxGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        osc.connect(sfxGain);
        osc.start(t);
        osc.stop(t + 0.05);
      } else if (type === 'whoosh') {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, t);
        osc.frequency.exponentialRampToValueAtTime(440, t + 0.1);
        osc.frequency.exponentialRampToValueAtTime(90, t + 0.2);
        sfxGain.gain.setValueAtTime(0.01, t);
        sfxGain.gain.linearRampToValueAtTime(0.15, t + 0.08);
        sfxGain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
        osc.connect(sfxGain);
        osc.start(t);
        osc.stop(t + 0.24);
      } else if (type === 'sub') {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, t);
        osc.frequency.exponentialRampToValueAtTime(38, t + 0.35);
        sfxGain.gain.setValueAtTime(0.25, t);
        sfxGain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
        osc.connect(sfxGain);
        osc.start(t);
        osc.stop(t + 0.42);
      } else {
        // Glitch
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.setValueAtTime(640, t + 0.03);
        osc.frequency.setValueAtTime(180, t + 0.06);
        sfxGain.gain.setValueAtTime(0.08, t);
        sfxGain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        osc.connect(sfxGain);
        osc.start(t);
        osc.stop(t + 0.12);
      }
    } catch {
      // Audio context might be restricted
    }
  }

  public subscribe(cb: (isPlaying: boolean, trackType: string | null) => void) {
    this.onStateChangeCallbacks.add(cb);
    return () => this.onStateChangeCallbacks.delete(cb);
  }

  private notify() {
    this.onStateChangeCallbacks.forEach(cb => cb(this.isPlaying, this.currentTrackType));
  }

  public getFrequencyData(): Uint8Array {
    if (!this.analyzerNode) return new Uint8Array(32);
    const dataArray = new Uint8Array(this.analyzerNode.frequencyBinCount);
    this.analyzerNode.getByteFrequencyData(dataArray);
    return dataArray;
  }

  public playTrack(trackType: 'cyber' | 'ambient' | 'energetic') {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    if (this.isPlaying && this.currentTrackType === trackType) {
      this.stop();
      return;
    }

    this.stop();
    this.isPlaying = true;
    this.currentTrackType = trackType;
    this.notify();

    if (trackType === 'cyber') {
      this.startCyberTrack();
    } else if (trackType === 'ambient') {
      this.startAmbientTrack();
    } else {
      this.startEnergeticTrack();
    }
  }

  public togglePlay(trackType: 'cyber' | 'ambient' | 'energetic' = 'cyber') {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.playTrack(trackType);
    }
  }

  public stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.activeNodes.length > 0) {
      this.activeNodes.forEach(item => {
        if (typeof item === 'object' && item !== null && 'stop' in item) {
          try {
            (item as AudioScheduledSourceNode).stop();
          } catch {
            // Already stopped
          }
        }
      });
      this.activeNodes = [];
    }

    this.isPlaying = false;
    this.currentTrackType = null;
    this.notify();
  }

  public getStatus() {
    return {
      isPlaying: this.isPlaying,
      currentTrackType: this.currentTrackType
    };
  }

  // --- Track Synthesizers ---
  private startCyberTrack() {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const master = this.masterGain;

    // 1. Deep Sub Bass drone (D1 = 36.71 Hz)
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sawtooth';
    subOsc.frequency.setValueAtTime(55, ctx.currentTime); // A1

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, ctx.currentTime);
    filter.Q.setValueAtTime(6, ctx.currentTime);

    subGain.gain.setValueAtTime(0.18, ctx.currentTime);
    subOsc.connect(filter);
    filter.connect(subGain);
    subGain.connect(master);
    subOsc.start();
    this.activeNodes.push(subOsc);

    // 2. 16th-note arpeggio notes in D Minor Pentatonic (D3, F3, G3, A3, C4)
    const arpNotes = [146.83, 174.61, 196.00, 220.00, 261.63, 293.66];
    let step = 0;

    const interval = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const t = ctx.currentTime;
      const noteFreq = arpNotes[step % arpNotes.length];
      
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      const noteFilter = ctx.createBiquadFilter();

      osc.type = step % 4 === 0 ? 'square' : 'sawtooth';
      osc.frequency.setValueAtTime(noteFreq, t);

      noteFilter.type = 'bandpass';
      noteFilter.frequency.setValueAtTime(noteFreq * 2, t);
      noteFilter.Q.setValueAtTime(3, t);

      noteGain.gain.setValueAtTime(0.12, t);
      noteGain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

      osc.connect(noteFilter);
      noteFilter.connect(noteGain);
      noteGain.connect(master);

      osc.start(t);
      osc.stop(t + 0.2);

      // Add a punchy click/kick every 4 beats
      if (step % 4 === 0) {
        const kickOsc = ctx.createOscillator();
        const kickGain = ctx.createGain();
        kickOsc.frequency.setValueAtTime(130, t);
        kickOsc.frequency.exponentialRampToValueAtTime(30, t + 0.12);
        kickGain.gain.setValueAtTime(0.25, t);
        kickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        kickOsc.connect(kickGain);
        kickGain.connect(master);
        kickOsc.start(t);
        kickOsc.stop(t + 0.16);
      }

      step++;
    }, 140);

    this.intervalId = interval;
  }

  private startAmbientTrack() {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const master = this.masterGain;

    const chords = [
      [130.81, 196.00, 261.63, 329.63], // C major 7
      [110.00, 164.81, 220.00, 277.18], // A minor
      [146.83, 220.00, 293.66, 349.23], // D minor 7
      [98.00, 146.83, 196.00, 246.94]   // G sus
    ];

    let chordIdx = 0;
    const playChord = () => {
      if (!this.isPlaying || !this.ctx) return;
      const currentChord = chords[chordIdx % chords.length];
      chordIdx++;

      currentChord.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(master);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 4.0);
      });
    };

    playChord();
    this.intervalId = window.setInterval(playChord, 3500);
  }

  private startEnergeticTrack() {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const master = this.masterGain;

    let beat = 0;
    const interval = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const t = ctx.currentTime;

      // Snare / clap on beats 2 and 4
      if (beat % 2 === 1) {
        const snareNoise = ctx.createOscillator();
        const snareGain = ctx.createGain();
        snareNoise.type = 'triangle';
        snareNoise.frequency.setValueAtTime(280, t);
        snareNoise.frequency.exponentialRampToValueAtTime(60, t + 0.08);
        snareGain.gain.setValueAtTime(0.18, t);
        snareGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        snareNoise.connect(snareGain);
        snareGain.connect(master);
        snareNoise.start(t);
        snareNoise.stop(t + 0.14);
      }

      // Driving bass rhythm
      const bassFreqs = [73.42, 73.42, 87.31, 98.00];
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(bassFreqs[beat % 4], t);

      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.setValueAtTime(400, t);
      f.frequency.exponentialRampToValueAtTime(100, t + 0.15);

      bassGain.gain.setValueAtTime(0.2, t);
      bassGain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

      bassOsc.connect(f);
      f.connect(bassGain);
      bassGain.connect(master);

      bassOsc.start(t);
      bassOsc.stop(t + 0.22);

      beat++;
    }, 125); // ~120 BPM

    this.intervalId = interval;
  }
}

export const audioSynth = new AudioSynthEngine();
