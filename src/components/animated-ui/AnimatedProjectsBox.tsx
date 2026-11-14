import { Code, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { SiGithub } from "react-icons/si";
import { useSectionContext } from "../../hooks/useSectionContext";

const SWIPE_DISTANCE = 50;

export const AnimatedProjectsBox = () => {
  const { projectIndex, setProjectIndex, nextProject, previousProject } =
    useSectionContext();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  // Load every cover up front so switching projects never flashes.
  useEffect(() => {
    myInfo.projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  const {
    title,
    description,
    image,
    technologies,
    liveLink,
    liveLabel,
    githubLink,
  } = myInfo.projects[projectIndex];

  const linkClass =
    "flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors";

  return (
    <AnimatedBox
      className="col-span-9 row-span-6 max-h-[90vh] overflow-y-auto"
      key={title}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchEnd={(e) => {
        if (!touchStart.current) return;
        const touch = e.changedTouches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) < SWIPE_DISTANCE || Math.abs(dx) < Math.abs(dy)) {
          return;
        }
        if (dx < 0) nextProject();
        else previousProject();
      }}
    >
      <div className="flex h-full flex-col">
        <h2 className="text-3xl md:text-4xl font-medium leading-tight flex items-center gap-3">
          <Code className="size-8 text-zinc-400" />
          My Personal Projects
        </h2>
        <img
          src={image}
          alt={`${title} cover`}
          width={1232}
          height={768}
          decoding="async"
          className="w-full h-auto aspect-[1232/768] object-cover mt-4 rounded border border-zinc-700 shadow-lg"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-zinc-100 mb-2">{title}</h3>
          <p className="text-zinc-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-zinc-300 bg-zinc-700/50 rounded px-2 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} bg-teal-400 text-zinc-900 hover:bg-teal-300`}
              >
                <ExternalLink className="w-4 h-4 mr-1.5" />
                {liveLabel ?? "Live Demo"}
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} bg-zinc-700 text-zinc-200 hover:bg-zinc-600`}
              >
                <SiGithub className="w-4 h-4 mr-1.5" />
                GitHub
              </a>
            )}
          </div>
          <div
            className="flex items-center gap-1"
            role="group"
            aria-label="Choose a project"
          >
            {myInfo.projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setProjectIndex(index)}
                aria-label={`Show ${project.title}`}
                aria-current={index === projectIndex ? "true" : undefined}
                className="group p-1.5 cursor-pointer"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    index === projectIndex
                      ? "w-6 bg-teal-300"
                      : "w-2 bg-zinc-600 group-hover:bg-zinc-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </AnimatedBox>
  );
};
