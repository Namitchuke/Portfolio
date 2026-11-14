import { MdAlternateEmail } from "react-icons/md";
import { useSectionContext } from "../../hooks/useSectionContext";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { CopyButton } from "../ui/CopyButton";

export const AnimatedEmailBox = () => {
  const { activeSection } = useSectionContext();

  const excludedSections = ["experience", "education"];
  if (excludedSections.includes(activeSection)) {
    return null;
  }

  return (
    <AnimatedBox className="col-span-5 row-span-1 flex items-center justify-between gap-3 p-2 px-6">
      <MdAlternateEmail className="size-6 shrink-0 text-teal-300" />
      <div className="flex items-center gap-2 min-w-0">
        <a
          href={`mailto:${myInfo.contact.email}`}
          className="truncate hover:text-teal-300 transition-colors"
        >
          {myInfo.contact.email}
        </a>
        <CopyButton value={myInfo.contact.email} label="email" />
      </div>
    </AnimatedBox>
  );
};
