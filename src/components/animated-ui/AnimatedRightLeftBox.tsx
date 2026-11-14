import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedBox } from "./AnimatedBox";
import { useSectionContext } from "../../hooks/useSectionContext";

export const AnimatedRightLeftBox = () => {
  const { nextProject, previousProject } = useSectionContext();

  return (
    <AnimatedBox className="col-span-3 row-span-1 flex p-0 w-full">
      <button
        className="flex-1 flex justify-center items-center rounded-l hover:bg-zinc-700 transition-colors cursor-pointer"
        onClick={previousProject}
        aria-label="Previous project"
      >
        <ChevronLeft className="size-8 my-2" />
      </button>
      <button
        className="flex-1 flex justify-center items-center rounded-r hover:bg-zinc-700 transition-colors cursor-pointer"
        onClick={nextProject}
        aria-label="Next project"
      >
        <ChevronRight className="size-8 my-2" />
      </button>
    </AnimatedBox>
  );
};
