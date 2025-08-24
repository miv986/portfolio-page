export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  longDescription: {
    es: {
      overview: string,
      implementation: string,
      learnings: string,
    },
    en: {
      overview: string,
      implementation: string,
      learnings: string,
    },
  };
  image: string;
  images: string[],
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  position: {
    es: string;
    en: string;
  };
  period: string;
  description: {
    es: string;
    en: string;
  };
}

export interface Education {
  institution: string;
  degree: {
    es: string;
    en: string;
  };
  period: string;
}