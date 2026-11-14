import { MapPin } from "lucide-react";
import type { Experience } from "../../lib/types";
import { SkillTag } from "../ui/SkillTag";
import { CurrentBadge } from "../ui/CurrentBadge";
import { Metrics } from "../ui/Metrics";

export type ExperienceItemProps = {
  experience: Experience;
  sm?: boolean;
};

export const ExperienceItem = ({ experience, sm }: ExperienceItemProps) => (
  <div className="rounded-lg relative">
    {experience.current ? (
      <CurrentBadge className="absolute top-0 right-0 bg-teal-500 text-zinc-900" />
    ) : null}
    <div>
      <h3
        className={`font-semibold text-zinc-100 ${sm ? "text-lg" : "text-xl"}`}
      >
        {experience.title}
      </h3>
      <div className="flex justify-between items-start mb-1">
        <p className="text-zinc-300">{experience.company}</p>
        <span className="text-zinc-300 p-1 px-2 rounded text-xs">
          {experience.dateRange}
        </span>
      </div>
    </div>
    <div className="flex items-center text-zinc-400 text-sm mb-3">
      <MapPin className="w-4 h-4 mr-1" />
      {experience.location}
    </div>
    <ul className="mb-2 lg:mb-4 space-y-1.5 lg:space-y-2 text-sm text-zinc-300">
      {experience.highlights.map((highlight) => (
        <li key={highlight} className="flex gap-2 leading-snug">
          <span
            aria-hidden="true"
            className="mt-[7px] size-1.5 shrink-0 rounded-full bg-teal-400"
          />
          <span>
            <Metrics text={highlight} />
          </span>
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-1">
      {experience.skills.map((skill) => (
        <SkillTag skill={skill} size={sm ? "xs" : "md"} key={skill} />
      ))}
    </div>
  </div>
);
