import { AnimatedHeaderBox } from "./animated-ui/AnimatedHeaderBox";
import { BiDownload } from "react-icons/bi";
import { MobileNav } from "./MobileNav";
import { AnimatedSocialsBox } from "./animated-ui/AnimatedSocialsBox";
import { AnimatedEmailBox } from "./animated-ui/AnimatedEmailBox";
import { AnimatedLocationBox } from "./animated-ui/AnimatedLocationBox";
import { AnimatedStatusBox } from "./animated-ui/AnimatedStatusBox";
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

export const MobileColumn = () => {
  return (
    <div className="z-10 w-full max-w-md md:hidden flex flex-col gap-5 px-6 pt-5 pb-28">
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
    </div>
  );
};

const ContentBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "home" || activeSection === "contact") {
    return (
      <>
        <AnimatedHeaderBox />
        <AnimatedStatusBox />
        <AnimatedSkillsBox />
        <AnimatedEmailBox />
        <AnimatedLocationBox />
        <div className="flex w-full gap-4">
          <AnimatedSocialsBox />
        </div>
      </>
    );
  }

  if (activeSection === "about") {
    return (
      <>
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
        <AnimatedProjectsBox />
        <AnimatedRightLeftBox />
      </>
    );
  }
};
