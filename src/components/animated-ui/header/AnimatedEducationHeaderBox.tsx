import { GraduationCap } from "lucide-react";
import { AnimatedBox } from "../AnimatedBox";
import { myInfo } from "../../../assets/data";

export const AnimatedEducationHeaderBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-6 lg:p-8 space-y-4">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <GraduationCap className="size-8 text-zinc-400" /> My Education
        </h2>
        <p className="text-zinc-300 text-sm lg:text-base">
          {myInfo.education.intro}
        </p>
      </div>
    </AnimatedBox>
  );
};
