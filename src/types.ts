export type Language = 'mixed' | 'en' | 'bn';

export type CategoryType = 
  | 'ALL'
  | 'ADS'
  | 'MUSIC'
  | 'VIDEO'
  | 'GRAPHICS'
  | 'AI ART'
  | 'SOCIAL';

export interface HumanProcessStep {
  phase: string;
  title: string;
  aiContribution: string;
  humanDirection: string;
  toolsUsed: string[];
  keyDecision: string;
}

export interface Project {
  id: string;
  title: string;
  category: CategoryType;
  subtitle: string;
  year: string;
  clientPlaceholder?: string;
  duration?: string;
  aspectRatio: '16:9' | '9:16' | '1:1' | '4:5';
  coverImage: string;
  secondaryImages?: string[];
  videoTeaser?: string;
  secondaryVideos?: string[];
  audioSample?: {
    trackName: string;
    artist: string;
    bpm: number;
    genre: string;
    synthWaveType?: 'cyber' | 'ambient' | 'energetic';
  };
  accentColor: 'yellow' | 'pink' | 'white';
  brief: string;
  humanProcess: {
    concept: string;
    aiWorkflow: string;
    humanIntervention: string;
    soundOrMotionNotes: string;
    deliverableStats: string;
  };
  tags: string[];
  featuredInHero?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  accentColor: 'yellow' | 'pink';
  iconName: string;
  sampleVisualTitle: string;
  previewImage: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  description: string;
  promptSnippet: string;
  humanTouch: string;
  iterationCount: number;
  badge: string;
  image: string;
}

export interface WorkflowStage {
  step: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  details: string[];
  humanRole: string;
  accent: 'yellow' | 'pink';
}
