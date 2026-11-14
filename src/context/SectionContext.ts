import { createContext } from "react";

export const sections = [
  "home",
  "about",
  "experience",
  "education",
  "projects",
  "contact",
] as const;

export type Section = (typeof sections)[number];

export type SectionContextType = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  projectIndex: number;
  setProjectIndex: (index: number) => void;
  nextProject: () => void;
  previousProject: () => void;
};

export const SectionContext = createContext<SectionContextType>({
  activeSection: "home",
  setActiveSection: () => {},
  projectIndex: 0,
  setProjectIndex: () => {},
  nextProject: () => {},
  previousProject: () => {},
});
