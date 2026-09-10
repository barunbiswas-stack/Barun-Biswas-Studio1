/**
 * Web Audio API Synthesizer & Audio Visualizer Engine
 * Generates rich, loud, crystal-clear real-time cinematic synthwave, 
 * cyber basslines, and ambient soundscapes with robust browser autoplay unlock
 * and real-time FFT frequency analysis for waveform visualizers.
 */

class AudioSynthEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentTrackType: 'cyber' | 'ambient' | 'energetic' | null = null;
  private intervalId: number | null = null;
  private secondaryIntervalId: number | null = null;
  private analyzerNode: AnalyserNode | null = null;
  private masterGain: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private activeNodes: (AudioScheduledSourceNode | number)[] = [];
  private onStateChangeCallbacks: Set<(isPlaying: boolean, trackType: string | null) => void> = new Set();
  private volume: number = 0.85; // Louder, clearly audible default
  private isMutedState: boolean = false;
  private isUnlocked: boolean = false;

  constructor() {
    // Setup automatic unlock on user interaction
    if (typeof window !== 'undefined') {
      const unlock = () => {
        this.unlock();
      };
      window.addEventListener('click', unlock, { passive: true });
      window.addEventListener('keydown', unlock, { passive: true });
      window.addEventListener('touchstart', unlock, { passive: true });
      window.addEventListener('pointerdown', unlock, { passive: true });
    }
  }

  public async unlock(): Promise<void> {
    if (!this.ctx) {
      this.initContext();
    }
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        try {
          await this.ctx.resume();
          this.isUnlocked = true;
        } catch {
          // will resume on next direct gesture
        }
      } else if (this.ctx.state === 'running') {
        this.isUnlocked = true;
      }
    }
  }

  public initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.analyzerNode = this.ctx.createAnalyser();
      this.analyzerNode.fftSize = 64;
      this.analyzerNode.smoothingTimeConstant = 0.8;

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMutedState ? 0 : this.volume, this.ctx.currentTime);

      // Clean Direct Signal Chain: Master Gain -> Analyser -> Destination
      // Avoids aggressive dynamics compressor suppression so users clearly hear all notes
      this.masterGain.connect(this.analyzerNode);
      this.analyzerNode.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
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
      if (!this.ctx || !this.masterGain || this.isMutedState) return;
      const ctx = this.ctx;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      const t = ctx.currentTime;
      const sfxGain = ctx.createGain();
      sfxGain.connect(this.masterGain);

      if (type === 'click') {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, t);
        osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);
        sfxGain.gain.setValueAtTime(0.3, t);
        sfxGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
        osc.connect(sfxGain);
        osc.start(t);
        osc.stop(t + 0.06);
      } else if (type === 'whoosh') {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, t);
        osc.frequency.exponentialRampToValueAtTime(660, t + 0.1);
        osc.frequency.exponentialRampToValueAtTime(140, t + 0.22);
        sfxGain.gain.setValueAtTime(0.02, t);
        sfxGain.gain.linearRampToValueAtTime(0.35, t + 0.1);
        sfxGain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.connect(sfxGain);
        osc.start(t);
        osc.stop(t + 0.26);
      } else if (type === 'sub') {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(160, t);
        osc.frequency.exponentialRampToValueAtTime(60, t + 0.35);
        sfxGain.gain.setValueAtTime(0.45, t);
        sfxGain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
        osc.connect(sfxGain);
        osc.start(t);
        osc.stop(t + 0.42);
      } else {
        // Glitch
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(520, t);
        osc.frequency.setValueAtTime(960, t + 0.03);
        osc.frequency.setValueAtTime(320, t + 0.06);
        sfxGain.gain.setValueAtTime(0.25, t);
        sfxGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        osc.connect(sfxGain);
        osc.start(t);
        osc.stop(t + 0.13);
      }
    } catch {
      // audio context blocked
    }
  }

  /**
   * Explicit audio test sound to confirm audio output is working and audible
   */
  public async testSound(): Promise<void> {
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }
      this.isMutedState = false;
      this.setVolume(0.85);

      const ctx = this.ctx;
      const t = ctx.currentTime;
      const chord = [440, 554.37, 659.25, 880]; // A major arpeggio
      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t + idx * 0.08);
        gain.gain.setValueAtTime(0.01, t + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.35, t + idx * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(this.masterGain!);
        osc.start(t + idx * 0.08);
        osc.stop(t + idx * 0.08 + 0.55);
      });
    } catch {
      // blocked
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

  public async playTrack(trackType: 'cyber' | 'ambient' | 'energetic') {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === 'suspended') {
      try {
        await this.ctx.resume();
      } catch {
        // User gesture needed
      }
    }

    if (this.isPlaying && this.currentTrackType === trackType) {
      this.stop();
      return;
    }

    this.stop();
    this.isPlaying = true;
    this.currentTrackType = trackType;
    this.isMutedState = false;
    
    // Ensure master volume is unmuted and set
    this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

    this.notify();

    // Instant initial cue chord so sound is immediately heard from the first millisecond
    this.playImmediateCue(trackType);

    if (trackType === 'cyber') {
      this.startCyberTrack();
    } else if (trackType === 'ambient') {
      this.startAmbientTrack();
    } else {
      this.startEnergeticTrack();
    }
  }

  private playImmediateCue(trackType: string) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const ctx = this.ctx;
      const t = ctx.currentTime;
      const cueFreqs = trackType === 'ambient' ? [440, 554.37, 659.25] : trackType === 'energetic' ? [293.66, 369.99, 440] : [220, 329.63, 440];
      cueFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t + idx * 0.04);
        gain.gain.setValueAtTime(0.01, t + idx * 0.04);
        gain.gain.linearRampToValueAtTime(0.3, t + idx * 0.04 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.04 + 0.35);
        osc.connect(gain);
        gain.connect(this.masterGain!);
        osc.start(t + idx * 0.04);
        osc.stop(t + idx * 0.04 + 0.38);
      });
    } catch {
      // ignore
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
    if (this.secondaryIntervalId !== null) {
      clearInterval(this.secondaryIntervalId);
      this.secondaryIntervalId = null;
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
      currentTrackType: this.currentTrackType,
      isMuted: this.isMutedState,
      volume: this.volume
    };
  }

  // --- Track 1: CYBERPUNK OVERDRIVE (Driving Synthwave with Clear Melody & Beats) ---
  private startCyberTrack() {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const master = this.masterGain;

    // 1. Warm Resonant Bass Drone (Audible 110Hz + 220Hz Harmonics)
    const bassOsc1 = ctx.createOscillator();
    const bassOsc2 = ctx.createOscillator();
    const bassGain = ctx.createGain();
    const bassFilter = ctx.createBiquadFilter();

    bassOsc1.type = 'sawtooth';
    bassOsc1.frequency.setValueAtTime(110, ctx.currentTime); // A2 (audible bass)
    bassOsc2.type = 'triangle';
    bassOsc2.frequency.setValueAtTime(220, ctx.currentTime); // A3 harmonic

    bassFilter.type = 'lowpass';
    bassFilter.frequency.setValueAtTime(650, ctx.currentTime);
    bassFilter.Q.setValueAtTime(4, ctx.currentTime);

    bassGain.gain.setValueAtTime(0.35, ctx.currentTime);

    bassOsc1.connect(bassFilter);
    bassOsc2.connect(bassFilter);
    bassFilter.connect(bassGain);
    bassGain.connect(master);

    bassOsc1.start();
    bassOsc2.start();
    this.activeNodes.push(bassOsc1, bassOsc2);

    // 2. Clear, Bright Cyber Melody & Arpeggiator (Audible 300Hz - 900Hz)
    // Notes in D Minor / A Minor pentatonic: A3, C4, D4, E4, G4, A4, C5
    const melodyNotes = [220.00, 261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00];
    let step = 0;

    const interval = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const t = ctx.currentTime;
      const noteFreq = melodyNotes[step % melodyNotes.length];

      // Dual oscillator synth lead for rich harmonic bite
      const oscLead = ctx.createOscillator();
      const oscHarmonic = ctx.createOscillator();
      const noteGain = ctx.createGain();
      const noteFilter = ctx.createBiquadFilter();

      oscLead.type = 'sawtooth';
      oscLead.frequency.setValueAtTime(noteFreq, t);

      oscHarmonic.type = 'square';
      oscHarmonic.frequency.setValueAtTime(noteFreq * 1.5, t); // Perfect fifth overtone

      noteFilter.type = 'lowpass';
      noteFilter.frequency.setValueAtTime(noteFreq * 3.5, t);
      noteFilter.Q.setValueAtTime(3, t);

      // Louder, punchier envelope
      noteGain.gain.setValueAtTime(0.32, t);
      noteGain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      oscLead.connect(noteFilter);
      oscHarmonic.connect(noteFilter);
      noteFilter.connect(noteGain);
      noteGain.connect(master);

      oscLead.start(t);
      oscHarmonic.start(t);
      oscLead.stop(t + 0.24);
      oscHarmonic.stop(t + 0.24);

      // 3. Punchy Kick on beats 0, 4, 8, 12
      if (step % 4 === 0) {
        const kickOsc = ctx.createOscillator();
        const kickGain = ctx.createGain();
        kickOsc.frequency.setValueAtTime(160, t);
        kickOsc.frequency.exponentialRampToValueAtTime(48, t + 0.12);
        kickGain.gain.setValueAtTime(0.55, t);
        kickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
        kickOsc.connect(kickGain);
        kickGain.connect(master);
        kickOsc.start(t);
        kickOsc.stop(t + 0.18);
      }

      // 4. Snare / Noise Clap on beats 2, 6, 10, 14
      if (step % 4 === 2) {
        const snareOsc = ctx.createOscillator();
        const snareGain = ctx.createGain();
        snareOsc.type = 'triangle';
        snareOsc.frequency.setValueAtTime(340, t);
        snareOsc.frequency.exponentialRampToValueAtTime(90, t + 0.1);
        snareGain.gain.setValueAtTime(0.38, t);
        snareGain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
        snareOsc.connect(snareGain);
        snareGain.connect(master);
        snareOsc.start(t);
        snareOsc.stop(t + 0.15);
      }

      // 5. Hi-hat click on every offbeat
      if (step % 2 === 1) {
        const hatOsc = ctx.createOscillator();
        const hatGain = ctx.createGain();
        hatOsc.type = 'square';
        hatOsc.frequency.setValueAtTime(8000, t);
        hatGain.gain.setValueAtTime(0.12, t);
        hatGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        hatOsc.connect(hatGain);
        hatGain.connect(master);
        hatOsc.start(t);
        hatOsc.stop(t + 0.05);
      }

      step++;
    }, 130);

    this.intervalId = interval;
  }

  // --- Track 2: ASTRAL DRIFT (Cinematic Ambient Chords with Rich Harmonics & Bell Shimmer) ---
  private startAmbientTrack() {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const master = this.masterGain;

    // Cinematic chord progressions with rich, audible frequencies
    const ambientChords = [
      [220.00, 261.63, 329.63, 392.00, 440.00], // A minor 7 (A3, C4, E4, G4, A4)
      [174.61, 261.63, 329.63, 349.23, 523.25], // F major 7 (F3, C4, E4, F4, C5)
      [261.63, 329.63, 392.00, 493.88, 523.25], // C major 7 (C4, E4, G4, B4, C5)
      [196.00, 293.66, 329.63, 392.00, 587.33]  // G sus / add9 (G3, D4, E4, G4, D5)
    ];

    let chordIndex = 0;
    const playLushChord = () => {
      if (!this.isPlaying || !this.ctx) return;
      const currentChord = ambientChords[chordIndex % ambientChords.length];
      chordIndex++;

      // Play each note with warm stereo-like detuned pair
      currentChord.forEach((freq, i) => {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const noteGain = ctx.createGain();
        const noteFilter = ctx.createBiquadFilter();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(freq, ctx.currentTime);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freq * 1.004, ctx.currentTime); // Gentle chorus detune

        noteFilter.type = 'lowpass';
        noteFilter.frequency.setValueAtTime(800 + i * 150, ctx.currentTime);
        noteFilter.Q.setValueAtTime(2, ctx.currentTime);

        // Clear, audible volume with gentle swell and long release
        noteGain.gain.setValueAtTime(0.01, ctx.currentTime);
        noteGain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.8);
        noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.4);

        osc1.connect(noteFilter);
        osc2.connect(noteFilter);
        noteFilter.connect(noteGain);
        noteGain.connect(master);

        osc1.start(ctx.currentTime);
        osc2.start(ctx.currentTime);
        osc1.stop(ctx.currentTime + 3.5);
        osc2.stop(ctx.currentTime + 3.5);
      });

      // Add a delicate crystal chime on top of the chord
      const bellOsc = ctx.createOscillator();
      const bellGain = ctx.createGain();
      bellOsc.type = 'sine';
      bellOsc.frequency.setValueAtTime(currentChord[currentChord.length - 1] * 2, ctx.currentTime + 0.2);
      bellGain.gain.setValueAtTime(0.2, ctx.currentTime + 0.2);
      bellGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
      bellOsc.connect(bellGain);
      bellGain.connect(master);
      bellOsc.start(ctx.currentTime + 0.2);
      bellOsc.stop(ctx.currentTime + 1.9);
    };

    playLushChord();
    this.intervalId = window.setInterval(playLushChord, 3200);
  }

  // --- Track 3: VELOCITY PULSE (High-Energy Commercial Beat & Synth Brass) ---
  private startEnergeticTrack() {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const master = this.masterGain;

    let beat = 0;
    // Energetic driving bassline in D Minor
    const bassline = [146.83, 146.83, 174.61, 196.00, 146.83, 146.83, 220.00, 196.00];

    const interval = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const t = ctx.currentTime;

      // 1. Heavy Punchy Kick on every beat
      if (beat % 2 === 0) {
        const kickOsc = ctx.createOscillator();
        const kickGain = ctx.createGain();
        kickOsc.frequency.setValueAtTime(180, t);
        kickOsc.frequency.exponentialRampToValueAtTime(45, t + 0.1);
        kickGain.gain.setValueAtTime(0.65, t);
        kickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        kickOsc.connect(kickGain);
        kickGain.connect(master);
        kickOsc.start(t);
        kickOsc.stop(t + 0.16);
      }

      // 2. Punchy Snare on beats 2 and 6
      if (beat % 4 === 2) {
        const snareOsc = ctx.createOscillator();
        const snareGain = ctx.createGain();
        snareOsc.type = 'triangle';
        snareOsc.frequency.setValueAtTime(260, t);
        snareOsc.frequency.exponentialRampToValueAtTime(90, t + 0.1);
        snareGain.gain.setValueAtTime(0.42, t);
        snareGain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
        snareOsc.connect(snareGain);
        snareGain.connect(master);
        snareOsc.start(t);
        snareOsc.stop(t + 0.17);
      }

      // 3. Energetic Synth Bassline (Audible 146Hz - 220Hz)
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      const bassFilter = ctx.createBiquadFilter();

      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(bassline[beat % bassline.length], t);

      bassFilter.type = 'lowpass';
      bassFilter.frequency.setValueAtTime(900, t);
      bassFilter.frequency.exponentialRampToValueAtTime(300, t + 0.14);
      bassFilter.Q.setValueAtTime(5, t);

      bassGain.gain.setValueAtTime(0.38, t);
      bassGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

      bassOsc.connect(bassFilter);
      bassFilter.connect(bassGain);
      bassGain.connect(master);

      bassOsc.start(t);
      bassOsc.stop(t + 0.16);

      // 4. Synth Brass Stab on beat 0 and beat 4
      if (beat % 8 === 0 || beat % 8 === 3) {
        const brassFreqs = [293.66, 349.23, 440.00]; // D minor triad
        brassFreqs.forEach(f => {
          const brassOsc = ctx.createOscillator();
          const brassGain = ctx.createGain();
          brassOsc.type = 'sawtooth';
          brassOsc.frequency.setValueAtTime(f, t);
          brassGain.gain.setValueAtTime(0.2, t);
          brassGain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
          brassOsc.connect(brassGain);
          brassGain.connect(master);
          brassOsc.start(t);
          brassOsc.stop(t + 0.24);
        });
      }

      beat++;
    }, 120); // 125 BPM

    this.intervalId = interval;
  }
}

export const audioSynth = new AudioSynthEngine();
