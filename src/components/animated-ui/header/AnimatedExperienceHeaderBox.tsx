import { BriefcaseBusiness } from "lucide-react";
import { AnimatedBox } from "../AnimatedBox";
import { myInfo } from "../../../assets/data";

export const AnimatedExperienceHeaderBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <BriefcaseBusiness className="size-8 text-zinc-400" /> Experience
        </h2>
        <p className="text-zinc-300">{myInfo.experience.intro}</p>
      </div>
    </AnimatedBox>
  );
};
