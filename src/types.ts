export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'CAMPUS DIGITAL TWIN' | 'EXPLORATION' | 'PROTOTYPE' | 'TOOLING';
  status: string;
  description: string;
  extendedDescription?: string;
  stack: string[];
  role?: string;
  features?: { title: string; icon: string; desc: string }[];
  caseStudy?: {
    step: string;
    label: string;
    title: string;
    desc: string;
    footerStatus: string;
  }[];
}

export interface CineFrame {
  id: string;
  tag: string;
  aspect: string;
  title: string;
  synopsis: string;
  phase: string;
  status: string;
  details?: {
    lens: string;
    format: string;
    locations: string;
    directorNote: string;
  };
}

export interface ScratchpadItem {
  id: string;
  category: string;
  titleTag: string;
  quote: string;
  meta: string;
  colorTag?: string;
}

export interface SkillPillar {
  number: string;
  name: string;
  skills: string[];
  focus: string;
}
