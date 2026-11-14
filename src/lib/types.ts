export type Experience = {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  highlights: string[];
  skills: string[];
  current?: boolean;
};

export type Education = {
  degreeTitle: string;
  institution: string;
  location: string;
  dateRange: string;
  topics: string[];
  current?: boolean;
  url?: string;
};

export type FreelanceJob = {
  project: string;
  client?: string;
  description: string;
  duration?: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  liveLabel?: string;
  githubLink?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
};
