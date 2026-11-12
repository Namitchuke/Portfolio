import type { Education } from "../../lib/types";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { CurrentBadge } from "../ui/CurrentBadge";

export const AnimatedEducationBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-4 p-6">
      <div className="flex flex-col gap-6">
        {myInfo.studies.map((edu: Education) => (
          <div key={edu.institution}>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-zinc-100">
                {edu.degreeTitle}
              </h3>
              {edu.current ? (
                <CurrentBadge className="bg-teal-500 text-zinc-900 shrink-0" />
              ) : null}
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-zinc-300">{edu.institution}</p>
              <span className="text-zinc-400 text-xs shrink-0">
                {edu.dateRange}
              </span>
            </div>
            {edu.topics.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-zinc-400 font-medium">
                {edu.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </AnimatedBox>
  );
};
