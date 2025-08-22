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
    es: string;
    en: string;
  };
  image: string;
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