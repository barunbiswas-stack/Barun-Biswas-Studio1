import { Project, ServiceItem, LabExperiment, WorkflowStage } from '../types';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'kinetic-volt-ad',
    title: 'KINETIC VOLT',
    category: 'ADS',
    subtitle: 'Next-Gen Isotonic Energy Beverage Global Ad',
    year: '2026',
    clientPlaceholder: 'Kinetic Labs Global',
    duration: '0:45 Commercial',
    aspectRatio: '16:9',
    coverImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop'
    ],
    videoTeaser: 'https://videos.pexels.com/video-files/3044127/3044127-hd_1920_1080_24fps.mp4',
    secondaryVideos: [
      'https://videos.pexels.com/video-files/3044127/3044127-hd_1920_1080_24fps.mp4',
      'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4'
    ],
    audioSample: {
      trackName: 'Volt Pulse Sub-Bass Mix',
      artist: 'Barun Biswas (Original Score)',
      bpm: 130,
      genre: 'Industrial Electro Ad Score',
      synthWaveType: 'energetic'
    },
    accentColor: 'yellow',
    brief: 'A commercial advertisement that refuses to look like conventional corporate beverage marketing. High-energy micro-fluidics, electric neon lighting, and cinematic slow-motion impact.',
    humanProcess: {
      concept: 'Developing the rebellious visual narrative: "Fuel For The Midnight Mind". We mapped the tension curve across 45 seconds rather than standard 5-second product loops.',
      aiWorkflow: 'Iterated through creative passes exploring hyper-realistic condensation, electric droplets, and fluid motion vectors.',
      humanIntervention: 'Curated the strongest frames, spliced camera moves in Premiere, built custom 3D typography in After Effects, and painted physical imperfections on bottle labels.',
      soundOrMotionNotes: 'Custom tactile sound design: organic metallic clicks, sub-bass riser synced with 120fps fluid splash, and analog distortion filters.',
      deliverableStats: '16:9 Hero Spot, 9:16 Social Cutdowns, 3D Billboard Still Renders, Animated OOH City Displays.'
    },
    tags: ['Commercial Direction', 'Fluid Dynamics', 'Sound Design', 'Color Grading', 'Brand Campaign'],
    featuredInHero: true
  },
  {
    id: 'neon-horizon-music-video',
    title: 'NEON HORIZON',
    category: 'MUSIC',
    subtitle: 'Cyberpunk Retrowave Narrative Music Video',
    year: '2026',
    clientPlaceholder: 'Astral Wave Records',
    duration: '3:24 Full Music Video',
    aspectRatio: '16:9',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop'
    ],
    videoTeaser: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
    secondaryVideos: [
      'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
      'https://videos.pexels.com/video-files/855018/855018-hd_1920_1080_24fps.mp4'
    ],
    audioSample: {
      trackName: 'Midnight Horizon (Director Master)',
      artist: 'Barun Biswas (Director Cut Score)',
      bpm: 118,
      genre: 'Dark Synthwave / Cinematic',
      synthWaveType: 'cyber'
    },
    accentColor: 'pink',
    brief: 'An evocative cinematic music video set in a rain-drenched megacity, synchronizing synthetic arpeggiators with human emotional storytelling.',
    humanProcess: {
      concept: 'A lonely android courier seeking a forgotten cassette tape in 2088 Neo-Tokyo. Human storyboarding determined every beat transition.',
      aiWorkflow: 'Generated scene frames and animated motion trajectories with custom camera control weights.',
      humanIntervention: 'Fixed anatomical inconsistencies and visual artifacts frame-by-frame. Spliced real optical lens flares, 35mm film grain, and directional color grading.',
      soundOrMotionNotes: 'Layered analog moog synth patches over atmospheric harmonic pads. Mastered bass response specifically for club acoustics.',
      deliverableStats: '4K Cinematic 2.39:1 Music Video, Spotify Canvas Loops, Vinyl Cover Art Suite.'
    },
    tags: ['Music Video', 'Cinematic Direction', 'Synthwave', 'World Building', 'Motion VFX'],
    featuredInHero: true
  },
  {
    id: 'lumina-spectre-ev',
    title: 'LUMINA SPECTRE',
    category: 'ADS',
    subtitle: 'Autonomous Hyper-EV Commercial Campaign',
    year: '2026',
    clientPlaceholder: 'Spectre Mobility Europe',
    duration: '1:10 Film',
    aspectRatio: '16:9',
    coverImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop'
    ],
    videoTeaser: 'https://videos.pexels.com/video-files/857032/857032-hd_1920_1080_30fps.mp4',
    secondaryVideos: [
      'https://videos.pexels.com/video-files/857032/857032-hd_1920_1080_30fps.mp4',
      'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4'
    ],
    audioSample: {
      trackName: 'Aerodynamic Velocity',
      artist: 'Barun Biswas (Original Score)',
      bpm: 124,
      genre: 'Cinematic Techno Drone',
      synthWaveType: 'energetic'
    },
    accentColor: 'yellow',
    brief: 'High-contrast automotive advertisement blending monolithic brutalist architectures with liquid-aerodynamic electric vehicle chassis.',
    humanProcess: {
      concept: 'Challenging sterile car commercials by staging the vehicle inside an alpine concrete wind tunnel during an eclipse.',
      aiWorkflow: 'Utilized multi-angle camera modeling to maintain vehicle proportions across 18 distinct tracking shots.',
      humanIntervention: 'Rotoscoped real studio rim lighting, wheel spokes motion blur, and precise brand badging.',
      soundOrMotionNotes: 'Acoustic foley captured from electric turbine engines, blended with deep sub-octave rumble.',
      deliverableStats: '60s Global Broadcast, 15s YouTube Pre-Rolls, Print Magazine 2-Page Spreads.'
    },
    tags: ['Automotive Ad', 'Luxury Brand', 'VFX Integration', 'Cinematography', 'Sound Design']
  },
  {
    id: 'the-last-cartographer',
    title: 'THE LAST CARTOGRAPHER',
    category: 'VIDEO',
    subtitle: 'Sci-Fi Cinematic Short Narrative',
    year: '2026',
    clientPlaceholder: 'Independent Studio Release',
    duration: '4:15 Narrative Short',
    aspectRatio: '16:9',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop'
    ],
    videoTeaser: 'https://videos.pexels.com/video-files/855018/855018-hd_1920_1080_24fps.mp4',
    secondaryVideos: [
      'https://videos.pexels.com/video-files/855018/855018-hd_1920_1080_24fps.mp4',
      'https://videos.pexels.com/video-files/3044127/3044127-hd_1920_1080_24fps.mp4'
    ],
    audioSample: {
      trackName: 'Solar Flare Overture',
      artist: 'Barun Biswas (Cinematic Score)',
      bpm: 85,
      genre: 'Cinematic Ambient Score',
      synthWaveType: 'ambient'
    },
    accentColor: 'pink',
    brief: 'A melancholic philosophical exploration of a solitary cartographer mapping dying star systems at the edge of the galaxy.',
    humanProcess: {
      concept: 'Written as a human poem before any visual generation. Pacing influenced by Andrei Tarkovsky and Denis Villeneuve.',
      aiWorkflow: 'Explored surreal celestial landscapes based on Hubble space photographs and architectural concrete forms.',
      humanIntervention: 'Paced every cut manually to create breathing space. Added atmospheric haze, anamorphic horizontal streak glints, and dust motes.',
      soundOrMotionNotes: 'Recorded live cello recordings over ambient drone pads for genuine human emotional gravitas.',
      deliverableStats: 'Film Festival Screening Cut, Behind-The-Scenes Interactive Dossier.'
    },
    tags: ['Cinematic Film', 'Storytelling', 'Space Narrative', 'Original Score', 'Film Direction'],
    featuredInHero: true
  },
  {
    id: 'cybernetic-biennale-posters',
    title: 'CYBERNETIC POSTER SUITE',
    category: 'GRAPHICS',
    subtitle: 'Editorial Typography & Generative Visual System',
    year: '2025',
    clientPlaceholder: 'Zurich Design Museum (Concept)',
    aspectRatio: '4:5',
    coverImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
    ],
    videoTeaser: 'https://videos.pexels.com/video-files/3044127/3044127-hd_1920_1080_24fps.mp4',
    secondaryVideos: [
      'https://videos.pexels.com/video-files/3044127/3044127-hd_1920_1080_24fps.mp4'
    ],
    audioSample: {
      trackName: 'Swiss Kinetic Rhythms',
      artist: 'Barun Biswas (Sound Design)',
      bpm: 110,
      genre: 'Experimental Kinetic Beat',
      synthWaveType: 'cyber'
    },
    accentColor: 'yellow',
    brief: 'A high-impact Swiss editorial poster series investigating the collision of human typographic discipline with algorithmic visual density.',
    humanProcess: {
      concept: 'Strict 12-column grid structure confronting unpredictable mathematical topologies.',
      aiWorkflow: 'Rendered abstract generative glass structures and iridescent chrome textures.',
      humanIntervention: '100% human typesetting, typographic micro-kerning, print registration marks, and spot Pantone neon yellow ink separations.',
      soundOrMotionNotes: 'Static poster accompanied by 10-second kinetic typography loop for digital OOH displays.',
      deliverableStats: '6x B1 Screenprint Poster Series, Exhibition Catalog, Kinetic Instagram Teasers.'
    },
    tags: ['Graphic Design', 'Editorial System', 'Typography', 'Print Production', 'Swiss Grid']
  },
  {
    id: 'synthesis-vol-1-music',
    title: 'SYNTHESIS VOL. 1',
    category: 'MUSIC',
    subtitle: 'Modular Synth & Soundscape EP',
    year: '2026',
    clientPlaceholder: 'Personal Creative Release',
    duration: '5 Track EP',
    aspectRatio: '1:1',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop'
    ],
    videoTeaser: 'https://videos.pexels.com/video-files/857134/857134-sd_640_360_24fps.mp4',
    secondaryVideos: [
      'https://videos.pexels.com/video-files/857134/857134-sd_640_360_24fps.mp4',
      'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4'
    ],
    audioSample: {
      trackName: 'Neural Distortion in D Minor',
      artist: 'Barun Biswas (Modular Analog EP)',
      bpm: 128,
      genre: 'Experimental Modular Techno',
      synthWaveType: 'cyber'
    },
    accentColor: 'pink',
    brief: 'A conceptual audio project generating harmonic roots, then routing them through vintage analog outboard compressors and patch cables.',
    humanProcess: {
      concept: 'Exploring organic machine breathing — audio that feels alive, shifting, and emotionally resonant.',
      aiWorkflow: 'Generated stem seeds via customized audio algorithms and synth patches.',
      humanIntervention: 'Stem-splitting in Ableton Live, manual EQ sculpting, sidechain compression, and recording real acoustic guitar harmonics on top.',
      soundOrMotionNotes: 'Dynamic spatial audio mix with binaural pan movements.',
      deliverableStats: 'Streaming Release, Vinyl Master, Interactive 3D Audio Visualizer.'
    },
    tags: ['Music Production', 'Sound Design', 'Modular Synth', 'Audio Engineering', 'EP Release']
  },
  {
    id: 'biomorphic-resonance-art',
    title: 'BIOMORPHIC RESONANCE',
    category: 'AI ART',
    subtitle: 'Surreal Organic-Cybernetic Visual Investigation',
    year: '2026',
    clientPlaceholder: 'Gallery Exhibition',
    aspectRatio: '1:1',
    coverImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop'
    ],
    videoTeaser: 'https://videos.pexels.com/video-files/855018/855018-hd_1920_1080_24fps.mp4',
    secondaryVideos: [
      'https://videos.pexels.com/video-files/855018/855018-hd_1920_1080_24fps.mp4'
    ],
    audioSample: {
      trackName: 'Bio-Frequency Resonance',
      artist: 'Barun Biswas (Ambient Study)',
      bpm: 92,
      genre: 'Atmospheric Bio-Drone',
      synthWaveType: 'ambient'
    },
    accentColor: 'yellow',
    brief: 'Visual art series questioning natural biological growth patterns, lichen fractals, and porcelain fragility.',
    humanProcess: {
      concept: 'Study of organic decay versus synthetic permanence. Inspired by natural history fossils and microscopic diatom shells.',
      aiWorkflow: 'Explored generative biological forms using semantic anchors and detailed inpainting.',
      humanIntervention: 'Digital painting over every seam, lighting adjustment curves, and hand-textured surface scratches.',
      soundOrMotionNotes: 'Static gallery prints paired with subtle 60fps breathing loop installations.',
      deliverableStats: '12 Fine-Art Giclée Prints on Hahnemühle Rag Paper (120x120cm).'
    },
    tags: ['Visual Art', 'Philosophy', 'Surrealism', 'Exhibition', 'Digital Painting']
  },
  {
    id: 'hyper-drop-streetwear-social',
    title: 'APEX STREETWEAR',
    category: 'SOCIAL',
    subtitle: 'High-Retention Visual Campaign',
    year: '2026',
    clientPlaceholder: 'Apex Street Lab Tokyo',
    duration: '0:15 Dynamic Reels',
    aspectRatio: '9:16',
    coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop'
    ],
    videoTeaser: 'https://videos.pexels.com/video-files/857134/857134-sd_640_360_24fps.mp4',
    secondaryVideos: [
      'https://videos.pexels.com/video-files/857134/857134-sd_640_360_24fps.mp4',
      'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4'
    ],
    audioSample: {
      trackName: 'Hyper-Hook Trap Stutter',
      artist: 'Barun Biswas (Sound Design)',
      bpm: 142,
      genre: 'Future Trap Reel Audio',
      synthWaveType: 'energetic'
    },
    accentColor: 'pink',
    brief: 'Vertical short-form content designed to shatter scroll-fatigue within the first seconds using impossible architectural fashion physics.',
    humanProcess: {
      concept: 'High-velocity visual storytelling: jacket fabric transforming into liquid chrome mid-stride.',
      aiWorkflow: 'Frame interpolation combined with motion brush masking.',
      humanIntervention: 'Audio beat-matching on key frames, kinetic motion typography tracking the model, and high-impact sound fx.',
      soundOrMotionNotes: 'Bass drops tailored for phone speakers with crisp transient percussion.',
      deliverableStats: '9x 9:16 Social Reels, 4x Story Polls, 3.2M organic benchmark views.'
    },
    tags: ['Social Campaign', 'Vertical Video', 'High Retention', 'Fashion Film', 'Motion Graphics']
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'graphics-design',
    number: '01',
    title: 'GRAPHIC DESIGN & KEY ART',
    shortDesc: 'Poster suites, campaign artwork, album packaging, and distinctive visual identities.',
    fullDesc: 'We craft iconic visual systems that refuse to blend into corporate homogeneity. By combining cutting-edge image synthesis with rigorous Swiss typographic disciplines, every poster, album sleeve, and branding asset commands immediate cultural attention.',
    deliverables: [
      'Exhibition & Event Posters',
      'Music Album & Vinyl Packaging',
      'High-Resolution Key Visuals (8K+)',
      'Digital Brand Graphic Systems',
      'Print-Ready CMYK / Pantone Separation'
    ],
    accentColor: 'yellow',
    iconName: 'Palette',
    sampleVisualTitle: 'CYBERNETIC POSTER SUITE',
    previewImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'advertising-commercials',
    number: '02',
    title: 'COMMERCIALS & ADVERTISING',
    shortDesc: 'Product commercials, high-impact campaigns, and bold marketing narratives that do not look like boring ads.',
    fullDesc: 'Stop making ads people skip. We direct cinematic commercial stories with custom visual FX, impossible camera trajectories, and bespoke audio design that elevate products from commodities into objects of desire.',
    deliverables: [
      'Full Commercial Direction (15s/30s/60s)',
      'Product Hero Shots & Macro Renders',
      'Social Video Ad Variations',
      'Narrative Brand Storyboards',
      'Multi-Platform Campaign Toolkits'
    ],
    accentColor: 'pink',
    iconName: 'Megaphone',
    sampleVisualTitle: 'KINETIC ENERGY COMMERCIAL',
    previewImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ai-music-videos',
    number: '03',
    title: 'MUSIC VIDEOS & CINEMATIC VISUALS',
    shortDesc: 'Cinematic music videos combining visionary aesthetics, human storytelling, frame-by-frame rhythm, and VFX.',
    fullDesc: 'A song is only half of the experience. We construct whole visual universes for musicians, producers, and labels — weaving visionary world-building, rhythm-synced camera work, and poetic direction into unforgettable video journeys.',
    deliverables: [
      'Full-Length Music Videos (4K 2.39:1)',
      'Spotify Canvas & YouTube Visualizer Loops',
      'Teaser Reels & Social Rollout Packs',
      'Storyboards & Narrative Treatment PDF',
      'Color Grading & Film Grain Master'
    ],
    accentColor: 'yellow',
    iconName: 'Video',
    sampleVisualTitle: 'NEON HORIZON ODYSSEY',
    previewImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ai-music-sound',
    number: '04',
    title: 'ORIGINAL SCORE & SOUND DESIGN',
    shortDesc: 'Original music composition, bespoke soundtracks, sonic branding, and audio experiments.',
    fullDesc: 'Sound drives emotion. We harness generative acoustic models alongside analog synthesizers, field recordings, and human mix engineering to produce immersive audio tracks, film scores, and commercial sonic identities.',
    deliverables: [
      'Commercial Soundtrack Composition',
      'Bespoke Sound Design & Foley FX',
      'Sonic Logos & Audio Brand Watermarks',
      'Atmospheric Ambient Soundscapes',
      'Full Stereo & Spatial Master Files'
    ],
    accentColor: 'pink',
    iconName: 'Music',
    sampleVisualTitle: 'SYNTHESIS MODULAR SOUNDS',
    previewImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cinematic-ai-video',
    number: '05',
    title: 'CINEMATIC SHORT FILMS',
    shortDesc: 'Narrative shorts, cinematic sequences, atmospheric world teasers, and visual storytelling films.',
    fullDesc: 'Where traditional film budgets require millions, human-directed digital production enables uncompromising cinematic scale. Monolithic architectures, distant planetary surfaces, and complex narrative moods rendered with cinematic optical accuracy.',
    deliverables: [
      'Narrative Sci-Fi & Speculative Shorts',
      'Atmospheric Visual Mood Films',
      'Pre-Visualization & Film Pitches',
      'Custom Voiceover Splicing & Pacing',
      'Film Festival Master Exports'
    ],
    accentColor: 'yellow',
    iconName: 'Film',
    sampleVisualTitle: 'THE LAST CARTOGRAPHER',
    previewImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'social-media-content',
    number: '06',
    title: 'HIGH-RETENTION SOCIAL CONTENT',
    shortDesc: 'Short-form videos, 9:16 reels, high-hook clips, and branded visual content designed for retention.',
    fullDesc: 'Attention is earned through genuine visual novelty. We craft 9:16 vertical content that grabs the viewer instantly and holds retention with hypnotic pacing, motion typography, and sound-synced kinetic edits.',
    deliverables: [
      'High-Conversion 9:16 Reels & TikToks',
      'Interactive Story Sequences',
      'Kinetic Typography Social Overlays',
      'Product Launch Teaser Carousels',
      'Content Calendar Production Batches'
    ],
    accentColor: 'pink',
    iconName: 'Smartphone',
    sampleVisualTitle: 'APEX STREETWEAR REELS',
    previewImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'product-brand-visuals',
    number: '07',
    title: 'PRODUCT & BRAND VISUALS',
    shortDesc: 'Creative product hero presentations, campaign imagery, and tactile brand storytelling.',
    fullDesc: 'Stage your product in environments impossible in standard photography studios. Floating through zero-gravity chambers, immersed in crystal-clear alpine waters, or bathed in neon twilight.',
    deliverables: [
      'High-Fidelity Product Hero Renders',
      'Lifestyle & Environment Mockups',
      'E-Commerce High-End Assets',
      'Brand Moodbooks & Style Guides',
      'Multi-Angle Packaging Presentations'
    ],
    accentColor: 'yellow',
    iconName: 'Sparkles',
    sampleVisualTitle: 'LUMINA SPECTRE SHOWCASE',
    previewImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'creative-experiments',
    number: '08',
    title: 'VISUAL RESEARCH & EXPERIMENTS',
    shortDesc: 'Experimental art, visual R&D, VFX innovation, interactive media, and new frontier techniques.',
    fullDesc: 'The frontier of digital art shifts constantly. We run continuous visual research testing novel generative models, motion vectors, and custom digital workflows to discover aesthetics nobody has seen before.',
    deliverables: [
      'Bespoke Experimental Fine Art Series',
      'Interactive Digital Installations',
      'Custom Model Tuning & Aesthetic Research',
      'Visual R&D Consultations',
      'Limited Edition Digital Collectibles'
    ],
    accentColor: 'pink',
    iconName: 'FlaskConical',
    sampleVisualTitle: 'BIOMORPHIC RESONANCE LAB',
    previewImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop'
  }
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: '01',
    title: 'CONCEPT',
    subtitle: 'Human Spark & Narrative Foundation',
    headline: 'Every project starts with human intuition and emotional truth.',
    description: 'We do not ask machines what to make. We formulate the story, the psychological hook, the lighting mood, and the artistic thesis before touching any software.',
    details: [
      'Creative Brief & Narrative Concept Treatment',
      'Visual Moodboards & Color Palette Development',
      'Shot-List & Emotional Pacing Timeline'
    ],
    humanRole: '100% Human Conception — defining meaning, intent, and storytelling.',
    accent: 'yellow'
  },
  {
    step: '02',
    title: 'RESEARCH',
    subtitle: 'Worldbuilding & Visual Exploration',
    headline: 'Exploring aesthetic territories and sensory references.',
    description: 'We deploy advanced generative tools as our digital sketchbook, rapidly exploring textures, impossible camera setups, and acoustic soundbeds to build a cohesive world.',
    details: [
      'Aesthetic Prototyping & Form Studies',
      'Lighting Simulation & Optical Camera Framing',
      'Harmonic Sketches & Sonic Seeds'
    ],
    humanRole: 'Creative Direction — curating the visual language and guiding every trial.',
    accent: 'pink'
  },
  {
    step: '03',
    title: 'CURATE',
    subtitle: 'Taste, Selection & Story Alignment',
    headline: 'AI creates countless variations. Human taste selects the one that resonates.',
    description: 'Anyone can generate content. What separates art from noise is human curation: rejecting empty hallucinations, measuring emotional weight, and refining composition.',
    details: [
      'Frame-by-Frame Curation & Visual Cohesion',
      'Anatomical, Spatial & Perspective Verification',
      'Rhythmic Beat-Sync & Dramatic Continuity'
    ],
    humanRole: 'The Director — ensuring every frame serves the human story.',
    accent: 'yellow'
  },
  {
    step: '04',
    title: 'REFINE',
    subtitle: 'Editorial, Sound Design, VFX & Grading',
    headline: 'Where raw material turns into polished cinema.',
    description: 'This is where true craftsmanship happens: frame-by-frame compositing in After Effects, color grading in DaVinci Resolve, layering live analog instruments, adding 35mm film grain, and Swiss typography.',
    details: [
      'VFX Compositing & Seamless Inpainting',
      'Optical Lens Flares, Grain & Color Grading',
      'Multi-Track Audio Mixing & Dynamic EQ Mastering'
    ],
    humanRole: 'Master Craftsman — human hands on every pixel and sound wave.',
    accent: 'pink'
  },
  {
    step: '05',
    title: 'DELIVER',
    subtitle: 'Finished Campaign, Film, or Experience',
    headline: 'A complete masterwork ready to inspire audiences worldwide.',
    description: 'Delivered at maximum fidelity across all required formats: 4K cinema master, 9:16 high-retention social, print-ready high-DPI posters, and lossless audio distribution files.',
    details: [
      'Multi-Format Deliverable Suite (16:9, 9:16, 1:1, 4:5)',
      'Lossless Archival Master Files',
      'Behind-The-Scenes Creative Dossier'
    ],
    humanRole: 'Executive Producer — ensuring perfection on every screen.',
    accent: 'yellow'
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'exp-01',
    title: 'FLUID DISPERSION STUDY',
    category: 'OPTICAL LIGHT LAB',
    description: 'Simulating liquid mercury refraction through high-velocity glass prisms under 800nm ultraviolet lighting.',
    promptSnippet: '85mm Anamorphic lens, 800nm ultraviolet prism lighting, high-speed shutter',
    humanTouch: 'Hand-painted caustics and physical dispersion curves refined in Photoshop.',
    iterationCount: 84,
    badge: 'VISUAL STUDY',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'exp-02',
    title: 'BOTANICAL MORPHOLOGY',
    category: 'ORGANIC FORM STUDY',
    description: 'Microscopic examination of fungal mycorrhizal networks interwoven with fiber-optic microcircuits.',
    promptSnippet: 'Macro 100mm f/2.8 lens, speculative botany, Ernst Haeckel anatomical lighting',
    humanTouch: 'Custom aesthetic model trained on 19th-century natural history botanical lithographs.',
    iterationCount: 142,
    badge: 'GALLERY PRINT',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'exp-03',
    title: 'DUSK ATMOSPHERIC STUDY',
    category: 'CINEMATIC LIGHT STUDY',
    description: 'Testing temporal light consistency across continuous tracking shots in simulated heavy rainfall.',
    promptSnippet: 'Anamorphic blue streak flares, Kodak Vision3 500T film stock, Panavision C-Series',
    humanTouch: 'Frame-by-frame motion vector tracking and composited rain splatter on lens glass.',
    iterationCount: 110,
    badge: 'MOTION BENCHMARK',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop'
  }
];

export const TOOL_CATEGORIES = [
  {
    category: 'AI IMAGE & VISION',
    accent: 'yellow',
    tools: [
      { name: 'Midjourney v6', role: 'Initial aesthetic exploration & high-concept texture seeds' },
      { name: 'Stable Diffusion XL / Forge', role: 'Local deterministic generation & custom LoRA training' },
      { name: 'FLUX.1 Dev', role: 'Photorealistic anatomy, text fidelity & prompt compliance' },
      { name: 'ComfyUI Workflows', role: 'Advanced node-based latent upscaling & controlnet passes' }
    ]
  },
  {
    category: 'AI VIDEO & MOTION',
    accent: 'pink',
    tools: [
      { name: 'Runway Gen-3 Alpha', role: 'Cinematic camera moves & physics-accurate motion control' },
      { name: 'Kling AI 1.5', role: 'High-frame continuity & intricate character motion' },
      { name: 'Luma Dream Machine', role: 'Fluid camera fly-throughs & surreal environmental shifts' },
      { name: 'Topaz Video AI', role: 'Temporal interpolation, 4K restoration & frame denoising' }
    ]
  },
  {
    category: 'AI MUSIC & AUDIO',
    accent: 'yellow',
    tools: [
      { name: 'Suno v4 / Udio Pro', role: 'Generative melody stems, orchestral beds & chord textures' },
      { name: 'ElevenLabs Studio', role: 'Voice performance modulation, emotional nuance & vocal synthesis' },
      { name: 'Ableton Live 12', role: 'Human mixing, hardware synth integration & dynamic mastering' }
    ]
  },
  {
    category: 'HUMAN CRAFT & FINISHING',
    accent: 'pink',
    tools: [
      { name: 'Adobe Premiere Pro', role: 'Story pacing, rhythm cutting, editorial structure' },
      { name: 'After Effects & Boris FX', role: 'Compositing, optical flares, motion typography, visual cleanup' },
      { name: 'DaVinci Resolve Studio', role: 'Color science, ACES color grading & film stock emulation' },
      { name: 'Adobe Photoshop / Illustrator', role: 'Manual inpainting, Swiss grid design, spot color separations' }
    ]
  }
];
