import type { FreelanceJob } from "../../lib/types";
import { Metrics } from "../ui/Metrics";
import { SkillTag } from "../ui/SkillTag";
import { AnimatedBox } from "./AnimatedBox";

export type AnimatedFreelanceBoxProps = {
  freelanceJobs: FreelanceJob[];
};

export const AnimatedFreelanceBox = ({
  freelanceJobs,
}: AnimatedFreelanceBoxProps) => {
  return (
    <AnimatedBox className="col-span-4 row-span-4 p-4">
      <h3 className="text-lg leading-6 font-semibold text-zinc-100">
        Projects
      </h3>
      <div className="mt-1 divide-y divide-zinc-700">
        {freelanceJobs.map((job) => (
          <div key={job.project} className="py-1.5 first:pt-0 last:pb-0">
            <h4 className="text-zinc-100 font-medium leading-snug">
              {job.project}
              {job.client ? (
                <span className="text-zinc-400 font-normal">
                  {" "}
                  · {job.client}
                </span>
              ) : null}
            </h4>
            <p className="text-zinc-400 text-sm leading-snug">
              <Metrics text={job.description} />
            </p>
            <div className="mt-1 flex flex-wrap gap-1">
              {job.skills.map((skill) => (
                <SkillTag key={skill} skill={skill} size="xs" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedBox>
  );
};
