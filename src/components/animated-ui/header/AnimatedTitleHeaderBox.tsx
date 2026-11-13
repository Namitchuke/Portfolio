import { AnimatedBox } from "../AnimatedBox";
import { myInfo } from "../../../assets/data";
import { FiArrowRight } from "react-icons/fi";
import { useSectionContext } from "../../../hooks/useSectionContext";

export const AnimatedTitleHeaderBox = () => {
  const { setActiveSection } = useSectionContext();
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-6">
        <h1 className="text-3xl lg:text-4xl font-medium leading-tight">
          Hi, I'm {myInfo.alias}.
        </h1>
        <p className="text-zinc-400 text-3xl lg:text-4xl font-medium leading-tight mb-4">
          {myInfo.title}.
        </p>
        <p className="text-zinc-300 text-sm lg:text-base leading-relaxed mb-5">
          {myInfo.tagline}
        </p>
        <button
          className="flex items-center gap-1 text-teal-300 hover:underline"
          onClick={() => setActiveSection("contact")}
        >
          Contact me <FiArrowRight />
        </button>
      </div>
    </AnimatedBox>
  );
};
