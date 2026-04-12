import type { Education } from "../../lib/types";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedEducationBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-4 p-6">
      <div className="flex flex-col gap-6">
        {myInfo.studies.map((edu: Education, index: number) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-zinc-100">{edu.degreeTitle}</h3>
            <p className="text-zinc-300">{edu.institution}</p>
          </div>
        ))}
      </div>
    </AnimatedBox>
  );
};
