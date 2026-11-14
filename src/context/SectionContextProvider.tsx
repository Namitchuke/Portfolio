import { useCallback, useEffect, useMemo, useState } from "react";
import { myInfo } from "../assets/data";
import { SectionContext, sections, type Section } from "./SectionContext";

const BASE_TITLE = "Namit Chuke | Growth Analytics";

const sectionTitles: Record<Section, string> = {
  home: BASE_TITLE,
  about: "About · Namit Chuke",
  experience: "Experience · Namit Chuke",
  education: "Education · Namit Chuke",
  projects: "Projects · Namit Chuke",
  contact: "Contact · Namit Chuke",
};

// The section lives in the URL hash (e.g. /#projects) so it can be shared
// and the browser's back button moves between sections.
const sectionFromHash = (): Section => {
  const hash = window.location.hash.replace("#", "");
  return (sections as readonly string[]).includes(hash)
    ? (hash as Section)
    : "home";
};

export const SectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setSection] = useState<Section>(sectionFromHash);
  const [projectIndex, setProjectIndex] = useState(0);
  const projectCount = myInfo.projects.length;

  const setActiveSection = useCallback((section: Section) => {
    setSection(section);
    const hash = section === "home" ? "" : `#${section}`;
    if (window.location.hash !== hash) {
      window.history.pushState(
        null,
        "",
        hash || window.location.pathname + window.location.search
      );
    }
  }, []);

  useEffect(() => {
    const sync = () => setSection(sectionFromHash());
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  useEffect(() => {
    document.title = sectionTitles[activeSection];
  }, [activeSection]);

  const nextProject = useCallback(
    () => setProjectIndex((i) => (i + 1) % projectCount),
    [projectCount]
  );

  const previousProject = useCallback(
    () => setProjectIndex((i) => (i - 1 + projectCount) % projectCount),
    [projectCount]
  );

  // Left/right arrow keys flip through projects.
  useEffect(() => {
    if (activeSection !== "projects") return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") previousProject();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSection, nextProject, previousProject]);

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      projectIndex,
      setProjectIndex,
      nextProject,
      previousProject,
    }),
    [
      activeSection,
      setActiveSection,
      projectIndex,
      nextProject,
      previousProject,
    ]
  );

  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
};
