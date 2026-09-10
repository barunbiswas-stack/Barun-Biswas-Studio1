import { Language } from '../types';

export interface Translations {
  // Navigation
  nav: {
    slideshow: string;
    work: string;
    timeline: string;
    stats: string;
    services: string;
    process: string;
    ads: string;
    music: string;
    lab: string;
    about: string;
    contact: string;
    talkToDirector: string;
    toggleLangTitle: string;
    audioActive: string;
  };
  // Common / Badges
  common: {
    simpleIsTheBest: string;
    simpleIsTheBestDesc: string;
    directorCredit: string;
    roleDirector: string;
    allYears: string;
    allCategories: string;
    playScore: string;
    viewFilm: string;
    close: string;
    testAudio: string;
    shortcuts: string;
    scrollProgress: string;
    soundActive: string;
    mute: string;
    unmute: string;
    fullscreen: string;
    share: string;
  };
  // Hero
  hero: {
    roleTitle: string;
    location: string;
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    subheading: string;
    exploreWork: string;
    initiateBrief: string;
    audioPreview: string;
    creditsDirected: string;
    totalImpressions: string;
    globalBrands: string;
    colorProfile: string;
  };
  // Manifesto / Intro
  intro: {
    label: string;
    titleMain: string;
    titleAccent: string;
    quote: string;
    signature: string;
    philosophyTitle: string;
    philosophyBody: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
  };
  // Slideshow
  slideshow: {
    badge: string;
    label: string;
    titleMain: string;
    titleAccent: string;
    curatedProjects: string;
    clickToOpen: string;
    playSample: string;
    pauseAutoplay: string;
    startAutoplay: string;
  };
  // Work
  work: {
    badge: string;
    label: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
    filterAll: string;
    filterAds: string;
    filterMusic: string;
    filterVideo: string;
    filterGraphics: string;
    filterArt: string;
    filterSocial: string;
    showingCount: string;
  };
  // Timeline
  timeline: {
    badge: string;
    label: string;
    titleMain: string;
    titleAccent: string;
    philosophyTitle: string;
    philosophyDesc: string;
    roleLabel: string;
    benchmarkLabel: string;
    viewDetails: string;
    creedTitle: string;
    creedQuote: string;
    creedSub: string;
  };
  // Stats
  stats: {
    badge: string;
    label: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
    tabOverview: string;
    tabDisciplines: string;
    tabStandards: string;
    viewsTitle: string;
    projectsTitle: string;
    clientsTitle: string;
    awardsTitle: string;
  };
  // Services
  services: {
    label: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
    ctaButton: string;
    commercialTitle: string;
    musicTitle: string;
    vfxTitle: string;
    identityTitle: string;
  };
  // Process
  process: {
    label: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
  };
  // Ads
  ads: {
    label: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
  };
  // Music
  music: {
    label: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
    interactiveSynth: string;
  };
  // Lab
  lab: {
    label: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
  };
  // About
  about: {
    label: string;
    titleMain: string;
    titleAccent: string;
    bioParagraph1: string;
    bioParagraph2: string;
    directingInfluences: string;
    creativeArsenal: string;
  };
  // Contact
  contact: {
    label: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    serviceLabel: string;
    budgetLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    sentSuccess: string;
    directEmail: string;
    availability: string;
  };
  // Modal
  modal: {
    prevProject: string;
    nextProject: string;
    telemetry: string;
    client: string;
    year: string;
    duration: string;
    aspect: string;
    briefTitle: string;
    workflowTitle: string;
    listenTheme: string;
  };
  // Footer
  footer: {
    returnToTop: string;
  };
  // Shortcuts
  shortcuts: {
    title: string;
    subtitle: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  mixed: {
    nav: {
      slideshow: 'REEL // শো-রিল',
      work: 'WORK // নির্বাচিত কাজ',
      timeline: 'TIMELINE // সময়রেখা',
      stats: 'STATS // পরিসংখ্যান',
      services: 'SERVICES // সেবাসমূহ',
      process: 'PROCESS // নির্মাণ পদ্ধতি',
      ads: 'COMMERCIALS // বিজ্ঞাপন',
      music: 'SOUND // আবহসঙ্গীত',
      lab: 'AI LAB // ল্যাব',
      about: 'DIRECTOR // বরুণ বিশ্বাস',
      contact: 'CONTACT // যোগাযোগ',
      talkToDirector: 'DIRECTOR BRIEF // ব্রিফ পাঠান',
      toggleLangTitle: 'Language: Bengali & English Mixed // ভাষা নির্বাচন',
      audioActive: 'AUDIO ENGINE // অডিও ইঞ্জিন সক্রিয়'
    },
    common: {
      simpleIsTheBest: 'SIMPLE IS THE BEST // সহজতাই শ্রেষ্ঠ',
      simpleIsTheBestDesc: 'Cutting through digital noise with human emotion & cinematic craft. অপ্রয়োজনীয় কোলাহল দূর করে খাঁটি আবেগ ও আলো-ছায়ার গভীর প্রকাশ।',
      directorCredit: 'BARUN BISWAS // চলচ্চিত্র পরিচালক',
      roleDirector: 'DIRECTOR & VISUAL ARTIST // পরিচালক ও ভিজ্যুয়াল আর্টিস্ট',
      allYears: 'ALL YEARS // সব বছর',
      allCategories: 'ALL DISCIPLINES // সকল মাধ্যম',
      playScore: 'PLAY SOUNDSCAPE // আবহসঙ্গীত চালান',
      viewFilm: 'VIEW FILM // বিস্তারিত দেখুন',
      close: 'CLOSE [ESC] // বন্ধ করুন',
      testAudio: 'AUDIO TEST [T] // সাউন্ড টেস্ট',
      shortcuts: 'SHORTCUTS [?] // কিবোর্ড কমান্ড',
      scrollProgress: 'PROGRESS // অগ্রগতি',
      soundActive: 'AUDIO ON // সাউন্ড চালু',
      mute: 'MUTE [M] // নিঃশব্দ',
      unmute: 'UNMUTE [M] // শব্দ চালু',
      fullscreen: 'FULLSCREEN // পূর্ণস্ক্রিন',
      share: 'SHARE // শেয়ার'
    },
    hero: {
      roleTitle: 'FILM DIRECTOR & AI CINEMATOGRAPHER // চলচ্চিত্র পরিচালক',
      location: 'KOLKATA & WORLDWIDE // কলকাতা ও বিশ্বব্যাপী',
      headlinePart1: 'HUMAN TOUCH',
      headlinePart2: 'IN THE AGE OF',
      headlinePart3: 'AI CINEMA // কৃত্রিম বুদ্ধিমত্তা ও মানবিক সিনেমা',
      subheading: 'Crafting high-conversion commercial campaigns, evocative music videos, and visionary cinematic experiences. আধুনিক প্রযুক্তি ও মানবিক শৈল্পিক বোধের যুগলবন্দীতে নির্মিত চলচ্চিত্র ও বিজ্ঞাপন।',
      exploreWork: 'EXPLORE WORK // কাজ দেখুন',
      initiateBrief: 'COMMISSION A BRIEF // প্রজেক্ট শুরু করুন',
      audioPreview: 'LIVE SYNTH // অডিও প্রিভিউ',
      creditsDirected: 'DIRECTED PRODUCTIONS // সম্পন্ন প্রযোজনা',
      totalImpressions: 'GLOBAL AUDIENCE // আন্তর্জাতিক দর্শক',
      globalBrands: 'COMMISSIONED BRANDS // সহযোগী ব্র্যান্ডসমূহ',
      colorProfile: 'COLOR SCIENCE // কালার গ্রেডিং'
    },
    intro: {
      label: 'DIRECTOR PHILOSOPHY // পরিচালকের দর্শন',
      titleMain: 'SIMPLE IS',
      titleAccent: 'THE BEST // সহজতাই শ্রেষ্ঠ',
      quote: '“AI can generate a million frames, but only a human director knows which single moment touches the soul.”',
      signature: '— BARUN BISWAS // বরুণ বিশ্বাস',
      philosophyTitle: 'THE CREATIVE PRINCIPLES // নির্মাণ দর্শন',
      philosophyBody: 'In a landscape saturated by generative novelty, true mastery lies in subtraction. We anchor cutting-edge AI power to cinematic discipline, emotional truth, and human intention. প্রযুক্তির শক্তিকে মানুষের অনুভূতির সাথে মেলানোই আমাদের কাজ।',
      p1Title: '01. EMOTIONAL ANCHOR // মানবিক হৃদস্পন্দন',
      p1Desc: 'Every frame must resonate with human truth and feeling. শুধু প্রযুক্তি নয়, মানুষের ভালোবাসাই শিল্পের মূল শক্তি।',
      p2Title: '02. SURGICAL CURATION // নিখুঁত ফ্রেম নির্বাচন',
      p2Desc: 'Generating thousands of iterations to isolate 1 pristine, poetic master composition. হাজারো ফ্রেম থেকে নিখুঁত ফ্রেমটি বেছে নেওয়া।',
      p3Title: '03. CINEMATIC PACING // দৃশ্যকাব্য ও ছন্দ',
      p3Desc: 'Balancing negative space, lighting, and evocative audio design for enduring cinematic weight. অপ্রয়োজনীয় জটিলতামুক্ত স্পষ্ট সিনেমাটিক আবেদন।'
    },
    slideshow: {
      badge: 'FEATURED REEL // সিনেমাটিক শো-রিল',
      label: 'CURATED PRODUCTIONS // নির্বাচিত প্রযোজনা',
      titleMain: 'DIRECTOR',
      titleAccent: 'SHOWCASE // স্লাইডশো',
      curatedProjects: 'MASTERWORKS // মূল প্রজেক্ট',
      clickToOpen: 'INSPECT ARCHIVE // বিস্তারিত দেখতে ক্লিক করুন',
      playSample: 'PLAY SOUNDSCAPE // সুর চালান',
      pauseAutoplay: 'PAUSE // থামান',
      startAutoplay: 'AUTOPLAY // চালু রাখুন'
    },
    work: {
      badge: 'PORTFOLIO ARCHIVE // প্রজেক্ট সম্ভার',
      label: 'SELECTED PRODUCTIONS // নির্বাচিত কাজসমূহ',
      titleMain: 'FEATURED',
      titleAccent: 'WORKS // কাজসমূহ',
      subtitle: 'Curated commercial advertisements, music videos, 3D CGI & AI narrative cinema. বিজ্ঞাপন, মিউজিক ভিডিও ও সিনেমাটিক ভিজ্যুয়াল আর্টের নির্বাচিত সংগ্রহ।',
      filterAll: 'ALL // সব',
      filterAds: 'COMMERCIALS // বিজ্ঞাপন',
      filterMusic: 'MUSIC VIDEOS // মিউজিক ভিডিও',
      filterVideo: 'CINEMATIC // সিনেমা',
      filterGraphics: '3D & MOTION // মোশন গ্রাফিক্স',
      filterArt: 'AI LAB // এআই আর্ট',
      filterSocial: 'CAMPAIGNS // সোশ্যাল মিডিয়া',
      showingCount: 'SHOWING // প্রদর্শিত'
    },
    timeline: {
      badge: 'CHRONOLOGICAL RECORD // কাজের কালানুক্রম',
      label: 'PRODUCTION TIMELINE // সময়রেখা',
      titleMain: 'DIRECTOR',
      titleAccent: 'EVOLUTION // অভিযাত্রা',
      philosophyTitle: 'MILESTONES & STANDARDS // মাইলফলক',
      philosophyDesc: 'Tracking landmark projects from early generative explorations to full-scale 4K international commercial campaigns. প্রাথমিক গবেষণা থেকে শুরু করে আন্তর্জাতিক মানের পূর্ণাঙ্গ বিজ্ঞাপন নির্মাণ।',
      roleLabel: 'ROLE // ভূমিকা',
      benchmarkLabel: 'STANDARD // মানদণ্ড',
      viewDetails: 'INSPECT DETAILS // বিস্তারিত দেখুন',
      creedTitle: 'THE DIRECTOR CREED // পরিচালকের অঙ্গীকার',
      creedQuote: '“Simplicity is not the lack of clutter — it is the presence of purpose.”',
      creedSub: 'অসংখ্য জেনারেটিভ শব্দের ভিড়ে আসল কারিগর সেটাই বোঝে যা কেটে ফেলে দিলে কেবল অবিসংবাদিত খাঁটি সিনেমাই অবশিষ্ট থাকে।'
    },
    stats: {
      badge: 'PRODUCTION TELEMETRY // প্রযোজনা মেট্রিক্স ও পরিসংখ্যান',
      label: 'DIRECTOR METRICS // পরিচালকীয় অর্জন',
      titleMain: 'MEASURED',
      titleAccent: 'IMPACT // প্রভাব ও সাফল্য',
      subtitle: 'Empirical delivery standards across global viewership, render fidelity, and client satisfaction. আন্তর্জাতিক দর্শক গ্রহণযোগ্যতা, সর্বোচ্চ রেজোলিউশন ও পরিচালন নৈপুণ্যের সম্মিলিত খতিয়ান।',
      tabOverview: 'OVERVIEW // সামগ্রিক',
      tabDisciplines: 'DISCIPLINES // ক্ষেত্রসমূহ',
      tabStandards: 'STANDARDS // প্রযুক্তিগত মান',
      viewsTitle: 'TOTAL IMPRESSIONS // সর্বমোট ভিউ',
      projectsTitle: 'COMPLETED WORKS // সম্পন্ন প্রজেক্ট',
      clientsTitle: 'GLOBAL CLIENTS // আন্তর্জাতিক ক্লায়েন্ট',
      awardsTitle: 'INDUSTRY AWARDS // পুরস্কার ও স্বীকৃতি'
    },
    services: {
      label: 'COMMISSION SERVICES // সেবাসমূহ',
      titleMain: 'WHAT I',
      titleAccent: 'DIRECT // সেবা ও প্রযোজনা',
      subtitle: 'From initial narrative treatment to final 4K master delivery. Every engagement combines generative AI acceleration with uncompromising human vision. চিত্রনাট্য থেকে শুরু করে চূড়ান্ত ফ্রেম ডেলিভারি পর্যন্ত পূর্ণাঙ্গ প্রযোজনা সেবা।',
      ctaButton: 'COMMISSION SERVICE // সেবা বুক করুন',
      commercialTitle: 'COMMERCIAL ADS // বিজ্ঞাপন প্রযোজনা',
      musicTitle: 'MUSIC VIDEOS // মিউজিক ভিডিও নির্মাণ',
      vfxTitle: 'AI VFX & MOTION // ভিজ্যুয়াল এফেক্টস',
      identityTitle: 'BRAND IDENTITY // ভিজ্যুয়াল আইডেন্টিটি'
    },
    process: {
      label: 'PRODUCTION WORKFLOW // নির্মাণ প্রক্রিয়া',
      titleMain: 'HOW I',
      titleAccent: 'CREATE // নির্মাণ পদ্ধতি',
      subtitle: 'A hybrid pipeline blending generative AI velocity with rigorous human art direction and color science. এআই প্রযুক্তির গতি এবং মানবিক শিল্পবোধের এক নিখুঁত মেলবন্ধন।'
    },
    ads: {
      label: 'COMMERCIAL SHOWREEL // ব্র্যান্ড ও বিজ্ঞাপন',
      titleMain: 'COMMERCIAL',
      titleAccent: 'IMPACT // ব্র্যান্ড প্রচারণা',
      subtitle: 'High-conversion, visually arresting advertisements built for modern discerning audiences. ব্র্যান্ডের ভাবমূর্তি ও বাণিজ্যিক সাফল্য নিশ্চিত করতে তৈরি আকর্ষণীয় বিজ্ঞাপন।'
    },
    music: {
      label: 'SONIC ARCHITECTURE // আবহসঙ্গীত',
      titleMain: 'BESPOKE',
      titleAccent: 'SOUNDSCAPES // শব্দতরঙ্গ',
      subtitle: 'Every film demands its own sonic soul. Handcrafting bespoke cyber, ambient, and cinematic audio for each visual universe. প্রতিটি ভিজ্যুয়ালের নিজস্ব সুর — কাস্টম ব্যাকগ্রাউন্ড স্কোর ও সাউন্ড ডিজাইন।',
      interactiveSynth: 'LIVE SYNTH // রিয়েল-টাইম অডিও ইঞ্জিন'
    },
    lab: {
      label: 'R&D WORKSHOP // এআই ল্যাব ও গবেষণা',
      titleMain: 'THE AI',
      titleAccent: 'LABORATORY // গবেষণাগার',
      subtitle: 'Pushing the bleeding edge of neural rendering, custom LoRAs, and cinematic lighting models. কৃত্রিম বুদ্ধিমত্তা এবং ফিউচারিস্টিক ইমেজ জেনারেশনের সর্বশেষ পরীক্ষা-নিরীক্ষা।'
    },
    about: {
      label: 'ABOUT THE DIRECTOR // পরিচালকের পরিচিতি',
      titleMain: 'BARUN',
      titleAccent: 'BISWAS // বরুণ বিশ্বাস',
      bioParagraph1: 'I am Barun Biswas — a Director, Visual Artist, and AI Cinematographer based in Kolkata, working worldwide. I treat AI not as an automatic generator, but as an infinite lens. আমি বিশ্বাস করি প্রযুক্তি কখনোই মানুষের অনুভূতিকে ছাড়িয়ে যেতে পারে না; এটি কেবল আমাদের কল্পনাকে বাস্তবায়িত করে।',
      bioParagraph2: 'With a deep devotion to lighting, analog warmth, and purposeful editing, I help forward-thinking brands and musicians create landmark visual worlds. নিখুঁত ফ্রেম নির্বাচন ও নান্দনিক মানবীয় পরিচালনাই আমার কাজের প্রধান স্বাক্ষর।',
      directingInfluences: 'CINEMATIC INFLUENCES // অনুপ্রেরণা',
      creativeArsenal: 'TECHNICAL ARSENAL // প্রযুক্তিগত দক্ষতা'
    },
    contact: {
      label: 'COMMISSIONS & INQUIRIES // যোগাযোগ',
      titleMain: 'LET’S CREATE',
      titleAccent: 'CINEMA // নতুন কিছু গড়ি',
      subtitle: 'Ready to produce an unforgettable commercial, music video, or brand film? Send over your brief. আপনার বিজ্ঞাপন বা মিউজিক ভিডিও নির্মাণের জন্য সরাসরি যোগাযোগ করুন।',
      nameLabel: 'YOUR NAME // আপনার নাম',
      emailLabel: 'EMAIL ADDRESS // ইমেইল ঠিকানা',
      serviceLabel: 'PRODUCTION TYPE // সেবার ধরণ',
      budgetLabel: 'ESTIMATED BUDGET // আনুমানিক বাজেট',
      messageLabel: 'PROJECT BRIEF // প্রজেক্টের সংক্ষিপ্ত বিবরণ',
      sendButton: 'TRANSMIT BRIEF // বার্তা পাঠান',
      sending: 'TRANSMITTING // পাঠানো হচ্ছে...',
      sentSuccess: 'BRIEF TRANSMITTED! // বার্তা সফলভাবে পৌঁছেছে! পরিচালকের দল শীঘ্রই যোগাযোগ করবে।',
      directEmail: 'DIRECT EMAIL // সরাসরি ইমেইল:',
      availability: 'STATUS: OPEN FOR COMMISSIONS // নতুন কাজের বুকিং চলছে'
    },
    modal: {
      prevProject: 'PREV [←] // পূর্ববর্তী',
      nextProject: 'NEXT [→] // পরবর্তী',
      telemetry: 'PRODUCTION TELEMETRY // প্রযুক্তিগত বৈশিষ্ট্য',
      client: 'CLIENT // ক্লায়েন্ট',
      year: 'YEAR // বছর',
      duration: 'DURATION // সময়কাল',
      aspect: 'ASPECT // অনুপাত',
      briefTitle: 'PROJECT BRIEF & VISION // প্রজেক্টের উদ্দেশ্য',
      workflowTitle: 'THE HUMAN + AI WORKFLOW // নির্মাণ প্রক্রিয়া',
      listenTheme: 'PLAY SCORE // আবহসঙ্গীত শুনুন'
    },
    footer: {
      returnToTop: 'RETURN TO TOP [0] // উপরে চলুন'
    },
    shortcuts: {
      title: 'KEYBOARD CONTROLS // কিবোর্ড শর্টকাট',
      subtitle: 'Full keyboard navigation enabled. কিবোর্ড দিয়ে দ্রুত সাইট ঘুরে দেখুন ও অডিও শুনুন।'
    }
  },
  en: {
    nav: {
      slideshow: 'SLIDESHOW',
      work: 'WORK',
      timeline: 'TIMELINE',
      stats: 'STATS',
      services: 'SERVICES',
      process: 'PROCESS',
      ads: 'ADS',
      music: 'MUSIC',
      lab: 'LAB',
      about: 'ABOUT',
      contact: 'CONTACT',
      talkToDirector: 'DIRECTOR BRIEF',
      toggleLangTitle: 'বাংলায় দেখুন / Switch to Bengali',
      audioActive: 'AUDIO ENGINE'
    },
    common: {
      simpleIsTheBest: 'SIMPLE IS THE BEST',
      simpleIsTheBestDesc: 'Every cut, frequency, and frame stripped of unnecessary noise to amplify pure emotional impact.',
      directorCredit: 'BARUN BISWAS // DIRECTOR',
      roleDirector: 'Director & Visual Artist',
      allYears: 'ALL YEARS',
      allCategories: 'ALL DISCIPLINES',
      playScore: 'PLAY SCORE',
      viewFilm: 'VIEW FILM & SPECS',
      close: 'CLOSE',
      testAudio: 'TEST AUDIO',
      shortcuts: 'SHORTCUTS [?]',
      scrollProgress: 'READING PROGRESS',
      soundActive: 'SYNTH ACTIVE',
      mute: 'MUTE',
      unmute: 'UNMUTE',
      fullscreen: 'FULLSCREEN',
      share: 'SHARE PROJECT'
    },
    hero: {
      roleTitle: 'CREATIVE DIRECTOR // VISUAL ARTIST // SOUND ARCHITECT',
      location: 'GLOBAL PRODUCTIONS // AVAILABLE WORLDWIDE',
      headlinePart1: 'HUMAN VISION.',
      headlinePart2: 'KINETIC CINEMA.',
      headlinePart3: 'PURE CRAFT.',
      subheading: 'Directing cinematic films, international commercials, music videos, and experimental fine art. Grounded in timeless storytelling, deliberate pacing, and bespoke analog sound design.',
      exploreWork: 'EXPLORE REEL',
      initiateBrief: 'INITIATE BRIEF',
      audioPreview: 'PLAY SOUNDSCAPE',
      creditsDirected: '54+ PRODUCTIONS DIRECTED',
      totalImpressions: '14.8M+ GLOBAL AUDIENCE',
      globalBrands: '18 BRAND CLIENTS',
      colorProfile: 'DCI-P3 4K MASTERED'
    },
    intro: {
      label: "DIRECTOR'S STATEMENT // CRAFT CODE",
      titleMain: 'THE PURSUIT OF',
      titleAccent: 'TIMELESS IMPACT',
      quote: '“I approach modern creative production not as a prompt generator, but as a film director, visual artist, and sound designer. Technology gives us unprecedented velocity, but taste, story, and soul come strictly from human hands.”',
      signature: '— BARUN BISWAS // DIRECTOR & SOUND ARCHITECT',
      philosophyTitle: 'WHY SIMPLE IS THE BEST',
      philosophyBody: 'In a digital landscape drowned in algorithmic visual noise, subtraction is the ultimate superpower. We strip away gratuitous filler, leaving only unmistakable presence, crisp pacing, and genuine emotional resonance.',
      p1Title: 'HUMAN TASTE IS NON-NEGOTIABLE',
      p1Desc: 'AI generates possibilities; human directors make definitive artistic choices. Every cut, light angle, and sound texture is chosen with purpose.',
      p2Title: 'ANALOG SOUL IN DIGITAL WORLDS',
      p2Desc: 'Grounding hyper-modern digital imagery with authentic tactile grit, tape saturation, and real acoustic harmonics.',
      p3Title: 'PACING OVER SENSORY OVERLOAD',
      p3Desc: 'Respecting the viewer with deliberate cinematic cadence, negative space, and evocative visual poetry.'
    },
    slideshow: {
      badge: 'FEATURED REEL // CURATED CINEMA',
      label: 'FEATURED REEL // CURATED CINEMA',
      titleMain: 'PROJECT',
      titleAccent: 'SLIDESHOW',
      curatedProjects: 'A curated cycle of signature directional works across commercials, sci-fi narrative shorts, and electronic music videos.',
      clickToOpen: 'CLICK ANY SLIDE TO LAUNCH FULL BREAKDOWN',
      playSample: 'LISTEN SCORE',
      pauseAutoplay: 'PAUSE AUTOPLAY',
      startAutoplay: 'START AUTOPLAY'
    },
    work: {
      badge: 'PORTFOLIO ARCHIVE // SELECTED PRODUCTIONS',
      label: 'PORTFOLIO ARCHIVE // SELECTED PRODUCTIONS',
      titleMain: 'FEATURED',
      titleAccent: 'WORK',
      subtitle: 'An editorial collection of commercial campaigns, music videos, fine art installations, and speculative cinema.',
      filterAll: 'ALL WORKS',
      filterAds: 'COMMERCIALS',
      filterMusic: 'MUSIC & SOUND',
      filterVideo: 'NARRATIVE FILMS',
      filterGraphics: 'GRAPHICS & PRINT',
      filterArt: 'FINE ART & LAB',
      filterSocial: 'CAMPAIGNS',
      showingCount: 'SHOWING'
    },
    timeline: {
      badge: 'CHRONOLOGICAL RECORD // 2023 — 2026',
      label: 'CHRONOLOGICAL RECORD // 2023 — 2026',
      titleMain: 'PROJECTS',
      titleAccent: 'TIMELINE',
      philosophyTitle: 'DIRECTOR PHILOSOPHY',
      philosophyDesc: '“Simple is the best.” Every cut, frequency, and frame stripped of unnecessary noise to amplify pure emotional impact.',
      roleLabel: 'ROLE',
      benchmarkLabel: 'BENCHMARK',
      viewDetails: 'CLICK TO VIEW FULL FILM & BREAKDOWN',
      creedTitle: 'THE CREATIVE CREED',
      creedQuote: '“SIMPLE IS THE BEST. INTENTION OVER EXCESS.”',
      creedSub: 'In an era of endless generative noise, mastery is not about how much you can generate — it is about knowing what to cut away until only pure, undeniable cinema remains.'
    },
    stats: {
      badge: 'PRODUCTION BENCHMARKS & TELEMETRY',
      label: 'PRODUCTION BENCHMARKS & TELEMETRY',
      titleMain: 'DIRECTOR IMPACT',
      titleAccent: '& STATISTICS',
      subtitle: 'Quantifiable milestones from commercial campaigns, festival releases, and global audience engagement.',
      tabOverview: 'OVERVIEW',
      tabDisciplines: 'DISCIPLINES',
      tabStandards: 'CRAFT STANDARDS',
      viewsTitle: '14.8M+ DIGITAL VIEWS',
      projectsTitle: '54+ DIRECTED WORKS',
      clientsTitle: '18 GLOBAL BRANDS',
      awardsTitle: '4 FESTIVAL HONORS'
    },
    services: {
      label: 'COMMISSIONS & COLLABORATIONS',
      titleMain: 'SERVICES &',
      titleAccent: 'PRODUCTION TIERS',
      subtitle: 'End-to-end directorial and technical services for forward-thinking brands, musicians, and agencies.',
      ctaButton: 'REQUEST PROPOSAL',
      commercialTitle: 'COMMERCIAL DIRECTING',
      musicTitle: 'MUSIC VIDEO ARCHITECTURE',
      vfxTitle: 'EXPERIMENTAL VFX & ART',
      identityTitle: 'MOTION BRANDING'
    },
    process: {
      label: 'BEHIND THE CURTAIN',
      titleMain: 'THE 5-STEP',
      titleAccent: 'HYBRID WORKFLOW',
      subtitle: 'How human editorial vision guides advanced machine generation from initial concept to master delivery.'
    },
    ads: {
      label: 'COMMERCIAL REEL',
      titleMain: 'BRAND CAMPAIGNS &',
      titleAccent: 'COMMERCIALS',
      subtitle: 'High-impact advertising films crafted for broadcast, digital, and out-of-home experiential billboards.'
    },
    music: {
      label: 'SONIC ARCHITECTURE',
      titleMain: 'MUSIC VIDEOS &',
      titleAccent: 'SOUND DESIGN',
      subtitle: 'Bespoke electronic music composition, binaural audio foley, and cinematic music films.',
      interactiveSynth: 'INTERACTIVE ANALOG SYNTHESIZER'
    },
    lab: {
      label: 'EXPERIMENTAL DIVISION',
      titleMain: 'THE CREATIVE',
      titleAccent: 'LAB',
      subtitle: 'Real-time procedural shaders, particle dynamics, and custom visual research.'
    },
    about: {
      label: 'DIRECTOR PROFILE',
      titleMain: 'ABOUT',
      titleAccent: 'BARUN BISWAS',
      bioParagraph1: 'Barun Biswas is a director, visual artist, and electronic composer known for combining visceral human emotion with cutting-edge visual technology.',
      bioParagraph2: 'Driven by the core maxim "Simple is the Best", Barun rejects generic visual clutter in favor of strict compositional discipline, evocative color grading, and dynamic analog sound.',
      directingInfluences: 'CINEMATIC INFLUENCES',
      creativeArsenal: 'PRODUCTION ARSENAL'
    },
    contact: {
      label: 'INITIATE TRANSMISSION',
      titleMain: 'START A',
      titleAccent: 'PROJECT BRIEF',
      subtitle: 'Accepting commercial directing, music videos, and creative consulting commissions for upcoming quarters.',
      nameLabel: 'YOUR NAME / COMPANY',
      emailLabel: 'CONTACT EMAIL',
      serviceLabel: 'SERVICE INTEREST',
      budgetLabel: 'ESTIMATED BUDGET',
      messageLabel: 'PROJECT VISION & DETAILS',
      sendButton: 'TRANSMIT PROJECT BRIEF',
      sending: 'TRANSMITTING BRIEF...',
      sentSuccess: 'BRIEF TRANSMITTED SUCCESSFULLY! WE WILL RESPOND WITHIN 24 HOURS.',
      directEmail: 'DIRECT CONTACT',
      availability: 'CURRENTLY SCHEDULING NEW PRODUCTIONS'
    },
    modal: {
      prevProject: 'PREV PROJECT [←]',
      nextProject: 'NEXT PROJECT [→]',
      telemetry: 'TECHNICAL SPECIFICATIONS & CRAFT STANDARDS',
      client: 'CLIENT / VENUE',
      year: 'YEAR',
      duration: 'RUNTIME',
      aspect: 'ASPECT RATIO',
      briefTitle: 'PROJECT BRIEF & CREATIVE GOALS',
      workflowTitle: 'THE HUMAN + AI PRODUCTION BREAKDOWN',
      listenTheme: 'PLAY PROJECT SOUNDSCAPE'
    },
    footer: {
      returnToTop: 'RETURN TO TOP'
    },
    shortcuts: {
      title: 'KEYBOARD NAVIGATION & SHORTCUTS',
      subtitle: 'Rapidly navigate sections, inspect projects, or trigger audio testing.'
    }
  },
  bn: {
    nav: {
      slideshow: 'স্লাইডশো',
      work: 'প্রজেক্টসমূহ',
      timeline: 'টাইমলাইন',
      stats: 'পরিসংখ্যান',
      services: 'সেবাসমূহ',
      process: 'কাজের পদ্ধতি',
      ads: 'বিজ্ঞাপন',
      music: 'সঙ্গীত ও শব্দ',
      lab: 'ল্যাব',
      about: 'পরিচয়',
      contact: 'যোগাযোগ',
      talkToDirector: 'পরিচালকের সাথে বার্তা',
      toggleLangTitle: 'Switch to English / ইংরেজিতে দেখুন',
      audioActive: 'অডিও ইঞ্জিন সক্রিয়'
    },
    common: {
      simpleIsTheBest: 'সহজতাই শ্রেষ্ঠ',
      simpleIsTheBestDesc: 'অপ্রয়োজনীয় কোলাহল দূর করে খাঁটি আবেগ, আলো ও সুরের গভীর প্রকাশ ঘটানোই আমাদের লক্ষ্য।',
      directorCredit: 'বরুণ বিশ্বাস // চলচ্চিত্র পরিচালক',
      roleDirector: 'চলচ্চিত্র পরিচালক ও ভিজ্যুয়াল শিল্পী',
      allYears: 'সকল বছর',
      allCategories: 'সকল শাখা',
      playScore: 'সঙ্গীত শুনুন',
      viewFilm: 'চলচ্চিত্র ও বিবরণ',
      close: 'বন্ধ করুন',
      testAudio: 'অডিও পরীক্ষা',
      shortcuts: 'কিবোর্ড শর্টকাট [?]',
      scrollProgress: 'পড়ার অগ্রগতি',
      soundActive: 'সিন্থ সক্রিয়',
      mute: 'শব্দ বন্ধ',
      unmute: 'শব্দ চালু',
      fullscreen: 'ফুলস্ক্রিন',
      share: 'শেয়ার করুন'
    },
    hero: {
      roleTitle: 'ক্রিয়েটিভ ডিরেক্টর // ভিজ্যুয়াল শিল্পী // সাউন্ড আর্কিটেক্ট',
      location: 'আন্তর্জাতিক প্রযোজনা // বিশ্বব্যাপী উপলব্ধ',
      headlinePart1: 'মানবিক দর্শন।',
      headlinePart2: 'গতিশীল সিনেমা।',
      headlinePart3: 'নিখুঁত শিল্প।',
      subheading: 'আন্তর্জাতিক ব্র্যান্ড বিজ্ঞাপন, সঙ্গীতচিত্র, সিনেমাটিক ফিল্ম ও আধুনিক আর্ট ইনস্টলেশন নির্মাণ। মানুষের নিখুঁত সম্পাদনা, নান্দনিক রুচি ও নিজস্ব অ্যানালগ শব্দের মেলবন্ধন।',
      exploreWork: 'শো-রিল দেখুন',
      initiateBrief: 'প্রস্তাব পাঠান',
      audioPreview: 'সাউন্ডস্কেপ শুনুন',
      creditsDirected: '৫৪+ পরিচালিত প্রযোজনা',
      totalImpressions: '১৪.৮ মিলিয়ন+ বৈশ্বিক দর্শক',
      globalBrands: '১৮+ আন্তর্জাতিক ব্র্যান্ড ক্লায়েন্ট',
      colorProfile: 'DCI-P3 4K মাস্টার্ড'
    },
    intro: {
      label: 'পরিচালকের দৃষ্টিভঙ্গি // মূলনীতি',
      titleMain: 'চিরন্তন প্রভাবের',
      titleAccent: 'সন্ধানে',
      quote: '“আমি আধুনিক নির্মাণকে নিছক কোনো যান্ত্রিক কোড বা প্রম্পট হিসেবে দেখি না; বরং চলচ্চিত্র পরিচালনা, চিত্রাঙ্কন ও সুরের এক গভীর সমন্বয় হিসেবে বিবেচনা করি। প্রযুক্তি আমাদের দ্রুততা দেয়, কিন্তু রুচি, গল্প আর আত্মা আসে মানুষের হাত থেকেই।”',
      signature: '— বরুণ বিশ্বাস // চলচ্চিত্র পরিচালক ও সঙ্গীত স্থপতি',
      philosophyTitle: 'সহজতাই কেন শ্রেষ্ঠ (SIMPLE IS THE BEST)',
      philosophyBody: 'ডিজিটাল কোলাহলে অতিরিক্ত জাঁকজমক বাদ দিয়ে সবচেয়ে জরুরি ভাবটুকু স্পষ্ট করাই শ্রেষ্ঠ শিল্প। অযথা জটিলতা দূর করে কেবল গভীর অনুভূতি, সাবলীল গতি ও অকৃত্রিম নান্দনিকতা ফুটিয়ে তোলাই আমাদের সাধনা।',
      p1Title: 'মানবিক রুচিই আসল ভিত্তি',
      p1Desc: 'প্রযুক্তি অসংখ্য বিকল্প তৈরি করতে পারে, কিন্তু সঠিক ফ্রেম, আলোর কোণ ও রঙের মেজাজ নির্ধারণ করে মানবিক রুচি ও চোখ।',
      p2Title: 'আধুনিক ফ্রেমে মাটির সুর',
      p2Desc: 'উচ্চপ্রযুক্তির ফ্রেমের সাথে জীবন্ত শব্দ, বাস্তব আলো ও অ্যানালগ সিন্থেসাইজারের সমন্বয়ে নিখাদ অভিজ্ঞতা।',
      p3Title: 'ছন্দ ও কাব্যময় গতি',
      p3Desc: 'অপ্রয়োজনীয় ভিজ্যুয়াল ধাক্কা নয়; বরং দৃশ্যপট ও আবহসঙ্গীতের ভারসাম্য বজায় রেখে দর্শকের অন্তরে স্থায়ী জায়গা করে নেওয়া।'
    },
    slideshow: {
      badge: 'বাছাইকৃত সিনেমাটিক শো-রিল',
      label: 'বাছাইকৃত সিনেমাটিক শো-রিল',
      titleMain: 'প্রজেক্ট',
      titleAccent: 'স্লাইডশো',
      curatedProjects: 'বিজ্ঞাপনচিত্র, বৈজ্ঞানিক কল্পকাহিনীর সিনেমা ও ইলেকট্রনিক মিউজিক ভিডিওর নির্বাচিত সংকলন।',
      clickToOpen: 'সম্পূর্ণ বিবরণ ও ফিল্ম দেখতে ক্লিক করুন',
      playSample: 'সঙ্গীত শুনুন',
      pauseAutoplay: 'অটোপ্লে স্থগিত',
      startAutoplay: 'অটোপ্লে চালু'
    },
    work: {
      badge: 'কাজের আর্কাইভ // নির্বাচিত প্রযোজনা',
      label: 'কাজের আর্কাইভ // নির্বাচিত প্রযোজনা',
      titleMain: 'নির্বাচিত',
      titleAccent: 'কাজসমূহ',
      subtitle: 'আন্তর্জাতিক বাণিজ্যিক বিজ্ঞাপন, সঙ্গীত ভিডিও, ভিজ্যুয়াল আর্ট ও পূর্ণাঙ্গ চলচ্চিত্রের এক অনন্য সংগ্রহ।',
      filterAll: 'সকল কাজ',
      filterAds: 'বাণিজ্যিক বিজ্ঞাপন',
      filterMusic: 'সঙ্গীত ও সাউন্ড',
      filterVideo: 'সিনেম্যাটিক চলচ্চিত্র',
      filterGraphics: 'গ্রাফিক্স ও প্রিন্ট',
      filterArt: 'ভিজ্যুয়াল আর্ট ও ল্যাব',
      filterSocial: 'প্রচারণা',
      showingCount: 'প্রদর্শিত'
    },
    timeline: {
      badge: 'কালানুক্রমিক কাজের ইতিহাস // ২০২৩ — ২০২৬',
      label: 'কালানুক্রমিক কাজের ইতিহাস // ২০২৩ — ২০২৬',
      titleMain: 'প্রজেক্টস',
      titleAccent: 'টাইমলাইন',
      philosophyTitle: 'পরিচালকের দর্শন',
      philosophyDesc: '“সহজতাই শ্রেষ্ঠ।” অপ্রয়োজনীয় কোলাহল পরিহার করে প্রতিটি ফ্রেমে খাঁটি আবেগের তীব্রতা ফুটিয়ে তোলা।',
      roleLabel: 'ভূমিকা',
      benchmarkLabel: 'অর্জন ও বৈশিষ্ট্য',
      viewDetails: 'সম্পূর্ণ ফিল্ম ও নির্মাণ-ইতিহাস দেখুন',
      creedTitle: 'শিল্পের অঙ্গীকার',
      creedQuote: '“সহজতাই শ্রেষ্ঠ। অপচয় নয়, আসল ভাব প্রকাশই শিল্প।”',
      creedSub: 'অসংখ্য জেনারেটিভ শব্দের ভিড়ে আসল কারিগর সেটাই বোঝে যা কেটে ফেলে দিলে কেবল অবিসংবাদিত খাঁটি সিনেমাই অবশিষ্ট থাকে।'
    },
    stats: {
      badge: 'প্রযোজনা সাফল্য ও পরিসংখ্যান',
      label: 'প্রযোজনা সাফল্য ও পরিসংখ্যান',
      titleMain: 'পরিচালনার প্রভাব',
      titleAccent: 'ও মেট্রিক্স',
      subtitle: 'বাণিজ্যিক ক্যাম্পেইন, আন্তর্জাতিক চলচ্চিত্র উৎসব এবং কোটি দর্শকের গ্রহণযোগ্যতার বাস্তব সংখ্যা।',
      tabOverview: 'সারসংক্ষেপ',
      tabDisciplines: 'শাখাভিত্তিক বিবরণ',
      tabStandards: 'কারিগরি মানদণ্ড',
      viewsTitle: '১৪.৮M+ মোট ভিউ ও প্রচারণা',
      projectsTitle: '৫৪+ সফলভাবে পরিচালিত প্রজেক্ট',
      clientsTitle: '১৮ বৈশ্বিক ব্র্যান্ড ক্লায়েন্ট',
      awardsTitle: '৪টি আন্তর্জাতিক উৎসব সম্মাননা'
    },
    services: {
      label: 'সহযোগিতা ও চুক্তি',
      titleMain: 'সেবাসমূহ ও',
      titleAccent: 'প্রযোজনা কাঠামো',
      subtitle: 'উদ্ভাবনী ব্র্যান্ড, সঙ্গীতশিল্পী এবং বিশ্বমানের এজেন্সির জন্য সামগ্রিক পরিচালনা ও পোস্ট-প্রোডাকশন সেবা।',
      ctaButton: 'প্রস্তাবনা চান',
      commercialTitle: 'বাণিজ্যিক বিজ্ঞাপন পরিচালনা',
      musicTitle: 'মিউজিক ভিডিও স্থাপত্য',
      vfxTitle: 'উন্নত ভিজ্যুয়াল আর্ট ও ভিএফএক্স',
      identityTitle: 'মোশন ব্র্যান্ডিং ও টাইপোগ্রাফি'
    },
    process: {
      label: 'নির্মাণের নেপথ্যে',
      titleMain: '৫-ধাপের',
      titleAccent: 'সৃজনশীল কর্মপদ্ধতি',
      subtitle: 'প্রাথমিক ভাবনা থেকে চূড়ান্ত ৪কে মাস্টার ডেলিভারি পর্যন্ত কীভাবে মানবিক পরিচালনা অত্যাধুনিক প্রযুক্তিকে পথ দেখায়।'
    },
    ads: {
      label: 'বাণিজ্যিক কাজ',
      titleMain: 'ব্র্যান্ড ক্যাম্পেইন ও',
      titleAccent: 'বিজ্ঞাপনচিত্র',
      subtitle: 'টেলিভিশন সম্প্রচার, ডিজিটাল প্ল্যাটফর্ম এবং বৃহৎ ওওএইচ (OOH) ৩ডি বিলবোর্ডের জন্য নির্মিত চলচ্চিত্র।'
    },
    music: {
      label: 'সুর ও স্পন্দন',
      titleMain: 'সঙ্গীত ভিডিও ও',
      titleAccent: 'সাউন্ড ডিজাইন',
      subtitle: 'কাস্টম ইলেকট্রনিক মিউজিক, বাইনোরাল স্পেশিয়াল সাউন্ড এবং সঙ্গীতচিত্রের সমন্বিত সৃষ্টি।',
      interactiveSynth: 'ইন্টারেক্টিভ অ্যানালগ সিন্থেসাইজার'
    },
    lab: {
      label: 'পরীক্ষামূলক বিভাগ',
      titleMain: 'ক্রিয়েটিভ',
      titleAccent: 'ল্যাব',
      subtitle: 'রিয়েল-টাইম শেডার, পার্টিকেল সিমুলেশন এবং আধুনিক অ্যালগরিদমিক ভিজ্যুয়াল গবেষণা।'
    },
    about: {
      label: 'পরিচালকের জীবনী',
      titleMain: 'পরিচিতি:',
      titleAccent: 'বরুণ বিশ্বাস',
      bioParagraph1: 'বরুণ বিশ্বাস একজন চলচ্চিত্র পরিচালক, ভিজ্যুয়াল শিল্পী ও সাউন্ড আর্কিটেক্ট — যিনি মানবমনস্তত্ত্ব এবং চরম প্রযুক্তির মেলবন্ধনে অনন্য দৃশ্যকাব্য রচনা করেন।',
      bioParagraph2: '“সহজতাই শ্রেষ্ঠ” এই নীতিতে অবিচল থেকে বরুণ কোনো কৃত্রিম বা অগভীর ভিজ্যুয়াল কোলাহল তৈরি করেন না; বরং সুদৃঢ় কম্পোজিশন, মনোমুগ্ধকর রঙ ও বাস্তব অ্যানালগ শব্দের গভীরে কাজ করেন।',
      directingInfluences: 'অনুপ্রেরণাদায়ী চলচ্চিত্র ব্যক্তিত্ব',
      creativeArsenal: 'প্রযোজনা সরঞ্জাম ও সফটওয়্যার'
    },
    contact: {
      label: 'যোগাযোগের সূত্রপাত',
      titleMain: 'প্রজেক্টের জন্য',
      titleAccent: 'বার্তা পাঠান',
      subtitle: 'বাণিজ্যিক চলচ্চিত্র পরিচালনা, মিউজিক ভিডিও নির্মাণ এবং সৃজনশীল পরামর্শের জন্য প্রস্তাবনা গ্রহণ করা হচ্ছে।',
      nameLabel: 'আপনার নাম / প্রতিষ্ঠানের নাম',
      emailLabel: 'ইমেইল ঠিকানা',
      serviceLabel: 'প্রয়োজনীয় সেবা',
      budgetLabel: 'আনুমানিক বাজেট',
      messageLabel: 'প্রজেক্টের বিবরণ ও দৃষ্টিভঙ্গি',
      sendButton: 'বার্তা ও প্রস্তাব পাঠান',
      sending: 'বার্তা পাঠানো হচ্ছে...',
      sentSuccess: 'আপনার বার্তা সফলভাবে প্রেরিত হয়েছে! ২৪ ঘণ্টার মধ্যে পরিচালকের দল উত্তর দেবে।',
      directEmail: 'সরাসরি ইমেইল',
      availability: 'নতুন প্রযোজনার জন্য শিডিউল উন্মুক্ত'
    },
    modal: {
      prevProject: 'পূর্ববর্তী প্রজেক্ট [←]',
      nextProject: 'পরবর্তী প্রজেক্ট [→]',
      telemetry: 'প্রযুক্তিগত বৈশিষ্ট্য ও মাস্টার স্পেসিফিকেশন',
      client: 'ক্লায়েন্ট / মাধ্যম',
      year: 'বছর',
      duration: 'সময়কাল',
      aspect: 'অ্যাসপেক্ট রেশিও',
      briefTitle: 'প্রজেক্টের লক্ষ্য ও সৃজনশীল সংক্ষিপ্তসার',
      workflowTitle: 'মানবিক পরিচালনা ও প্রযুক্তিগত ধাপ',
      listenTheme: 'প্রজেক্টের আবহসঙ্গীত শুনুন'
    },
    footer: {
      returnToTop: 'উপরে ফিরে যান'
    },
    shortcuts: {
      title: 'কিবোর্ড শর্টকাট ও নিয়ন্ত্রণ',
      subtitle: 'কিবোর্ড দিয়ে দ্রুত বিভাগে যান, প্রজেক্ট খুলুন বা অডিও পরীক্ষা করুন।'
    }
  }
};
