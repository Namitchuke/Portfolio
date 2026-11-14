import { AnimatedBox } from "../AnimatedBox";
import { myInfo } from "../../../assets/data";
import { FiArrowRight } from "react-icons/fi";
import { useSectionContext } from "../../../hooks/useSectionContext";

export const AnimatedTitleHeaderBox = () => {
  const { setActiveSection } = useSectionContext();
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-6">
        <img
          src={myInfo.image}
          alt={`Photo of ${myInfo.name}`}
          className="md:hidden size-20 rounded-full object-cover object-top border-2 border-teal-400 mb-4"
        />
        <h1 className="text-3xl lg:text-4xl font-medium leading-tight">
          Hi, I'm {myInfo.alias}.
        </h1>
        <p className="text-zinc-400 text-3xl lg:text-4xl font-medium leading-tight mb-4">
          {myInfo.title}.
        </p>
        <p className="text-zinc-300 text-sm lg:text-base leading-relaxed mb-5">
          {myInfo.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            className="rounded-full bg-teal-400 px-4 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-teal-300 transition-colors cursor-pointer"
            onClick={() => setActiveSection("projects")}
          >
            View projects
          </button>
          <button
            className="flex items-center gap-1 text-teal-300 hover:underline cursor-pointer"
            onClick={() => setActiveSection("contact")}
          >
            Contact me <FiArrowRight />
          </button>
        </div>
      </div>
    </AnimatedBox>
  );
};
