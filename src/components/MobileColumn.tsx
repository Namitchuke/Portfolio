import { motion } from "framer-motion";
import { AnimatedHeaderBox } from "./animated-ui/AnimatedHeaderBox";
import { BiDownload } from "react-icons/bi";
import { MobileNav } from "./MobileNav";
import { AnimatedImageBox } from "./animated-ui/AnimatedImageBox";
import { AnimatedSocialsBox } from "./animated-ui/AnimatedSocialsBox";
import { AnimatedEmailBox } from "./animated-ui/AnimatedEmailBox";
import { AnimatedLocationBox } from "./animated-ui/AnimatedLocationBox";
import { AnimatedLanguagesBox } from "./animated-ui/AnimatedLanguagesBox";
import { AnimatedSkillsBox } from "./animated-ui/AnimatedSkillsBox";
import { useSectionContext } from "../hooks/useSectionContext";
import { AnimatedSnapshotBox } from "./animated-ui/AnimatedSnapshotBox";
import { AnimatedHobbiesBox } from "./animated-ui/AnimatedHobbiesBox";
import { AnimatedExperienceBox } from "./animated-ui/AnimatedExperienceBox";
import { myInfo } from "../assets/data";
import { AnimatedFreelanceBox } from "./animated-ui/AnimatedFreelanceBox";
import { AnimatedEducationBox } from "./animated-ui/AnimatedEducationBox";
import { AnimatedProjectsBox } from "./animated-ui/AnimatedProjectsBox";
import { AnimatedRightLeftBox } from "./animated-ui/AnimatedRightLeftBox";
import { useBoundedCounter } from "../hooks/useBoundedCounter";

export const MobileColumn = () => {
  return (
    <motion.div className="z-10 w-full max-w-md md:hidden flex flex-col gap-5 px-6 pt-5 pb-28">
      <header className="flex items-center justify-between">
        <span className="font-semibold tracking-wide">{myInfo.name}</span>
        <a
          href="/projects/Namit_Nitin_Chuke_Resume.pdf"
          download
          className="flex items-center gap-1.5 rounded-md border border-teal-400 px-3 py-1.5 text-sm font-semibold"
        >
          <BiDownload className="size-4" /> CV
        </a>
      </header>
      <ContentBox />
      <MobileNav />
    </motion.div>
  );
};

const ContentBox = () => {
  const { activeSection } = useSectionContext();

  const { value, next, previous } = useBoundedCounter(
    0,
    0,
    myInfo.projects.length - 1
  );

  if (activeSection === "home" || activeSection === "contact") {
    return (
      <>
        <AnimatedHeaderBox />

        <AnimatedImageBox className="h-80" />
        <div className="flex w-full gap-4">
          <AnimatedSocialsBox />
        </div>
        <AnimatedSkillsBox />
        <AnimatedLocationBox />
        <AnimatedEmailBox />
        <AnimatedLanguagesBox />
      </>
    );
  }

  if (activeSection === "about") {
    return (
      <>
        <AnimatedImageBox className="h-80" />
        <AnimatedHeaderBox />
        <AnimatedSnapshotBox />
        <AnimatedHobbiesBox />
        <AnimatedLocationBox />
        <div className="flex w-full gap-4">
          <AnimatedSocialsBox />
        </div>
      </>
    );
  }

  if (activeSection === "experience") {
    return (
      <>
        <AnimatedHeaderBox />
        <AnimatedExperienceBox experience={myInfo.experience.work[0]} />
        <AnimatedExperienceBox experience={myInfo.experience.work[1]} />
        <AnimatedFreelanceBox freelanceJobs={myInfo.experience.freelance} />
        <div className="flex w-full gap-4">
          <AnimatedSocialsBox />
        </div>
      </>
    );
  }

  if (activeSection === "education") {
    return (
      <>
        <AnimatedHeaderBox />
        <AnimatedEducationBox />
        <div className="flex w-full gap-4">
          <AnimatedSocialsBox />
        </div>
      </>
    );
  }

  if (activeSection === "projects") {
    return (
      <>
        <AnimatedProjectsBox currentProjectId={value} />
        <AnimatedRightLeftBox onLeftClick={previous} onRightClick={next} />
      </>
    );
  }
};
