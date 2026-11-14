import { FaLanguage } from "react-icons/fa";
import { useSectionContext } from "../../hooks/useSectionContext";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedStatusBox = () => {
  const { activeSection } = useSectionContext();

  const excludedSections = ["experience", "education"];
  if (excludedSections.includes(activeSection)) {
    return null;
  }

  return (
    <AnimatedBox className="col-span-5 row-span-1 flex items-center justify-between gap-3 p-2 px-6">
      <p className="flex items-center gap-2.5 font-medium whitespace-nowrap">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
        </span>
        {myInfo.availability}
      </p>
      <p className="hidden min-[360px]:flex items-center gap-2 text-sm text-zinc-400 whitespace-nowrap">
        <FaLanguage className="hidden md:block size-7 text-teal-300" />
        {myInfo.languages.join(" · ")}
      </p>
    </AnimatedBox>
  );
};
