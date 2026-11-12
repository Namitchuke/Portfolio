import { motion } from "framer-motion";
import { myInfo } from "../assets/data";
import { AnimatedMenuBox } from "./animated-ui/AnimatedMenuBox";
import { AnimatedHeaderBox } from "./animated-ui/AnimatedHeaderBox";
import { AnimatedSkillsHobbiesBox } from "./animated-ui/AnimatedSkillsHobbiesBox";
import { AnimatedExperienceBox } from "./animated-ui/AnimatedExperienceBox";
import { AnimatedFreelanceBox } from "./animated-ui/AnimatedFreelanceBox";
import { AnimatedSnapshotBox } from "./animated-ui/AnimatedSnapshotBox";
import { AnimatedImageBox } from "./animated-ui/AnimatedImageBox";
import { AnimatedHobbiesBox } from "./animated-ui/AnimatedHobbiesBox";
import { AnimatedEducationBox } from "./animated-ui/AnimatedEducationBox";
import { useSectionContext } from "../hooks/useSectionContext";
import { AnimatedRightLeftBox } from "./animated-ui/AnimatedRightLeftBox";
import { AnimatedProjectsBox } from "./animated-ui/AnimatedProjectsBox";
import { AnimatedSocialsBox } from "./animated-ui/AnimatedSocialsBox";
import { AnimatedEmailBox } from "./animated-ui/AnimatedEmailBox";
import { AnimatedLocationBox } from "./animated-ui/AnimatedLocationBox";
import { AnimatedLanguagesBox } from "./animated-ui/AnimatedLanguagesBox";
import { useBoundedCounter } from "../hooks/useBoundedCounter";

export const VentoGrid = () => {
  return (
    <motion.section
      transition={{
        staggerChildren: 0.15,
      }}
      className="hidden md:grid gap-4 grid-flow-dense grid-cols-12 grid-rows-[160px_160px_112px_112px_56px_56px] max-w-4xl z-10"
    >
      <NormalOrProjectsBox />
    </motion.section>
  );
};

const NormalOrProjectsBox = () => {
  const { activeSection } = useSectionContext();

  const { value, next, previous } = useBoundedCounter(
    0,
    0,
    myInfo.projects.length - 1
  );

  return (
    <>
      {activeSection === "projects" ? (
        <AnimatedProjectsBox currentProjectId={value} />
      ) : null}
      {activeSection !== "projects" ? <AnimatedHeaderBox /> : null}
      {activeSection !== "projects" ? <ExperienceOrAboutOrImageBox /> : null}
      <AnimatedMenuBox />
      {activeSection !== "projects" ? <SecondaryInformationBox /> : null}
      {activeSection !== "projects" ? <AnimatedLanguagesBox /> : null}
      {activeSection !== "projects" ? <FreelanceOrSocialsBox /> : null}
      {activeSection !== "projects" ? <AnimatedEmailBox /> : null}
      {activeSection !== "projects" ? <AnimatedLocationBox /> : null}
      {activeSection === "projects" ? (
        <AnimatedRightLeftBox onLeftClick={previous} onRightClick={next} />
      ) : null}
    </>
  );
};

const SecondaryInformationBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "experience") {
    return <AnimatedExperienceBox experience={myInfo.experience.work[0]} />;
  }

  if (activeSection === "about") {
    return <AnimatedHobbiesBox />;
  }

  if (activeSection === "education") {
    return <AnimatedEducationBox />;
  }

  return <AnimatedSkillsHobbiesBox />;
};

const ExperienceOrAboutOrImageBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "experience") {
    return (
      <AnimatedExperienceBox
        className="col-span-4 row-span-2"
        experience={myInfo.experience.work[1]}
        sm
      />
    );
  }

  if (activeSection === "about") {
    return <AnimatedSnapshotBox />;
  }

  return <AnimatedImageBox />;
};

const FreelanceOrSocialsBox = () => {
  const { activeSection } = useSectionContext();

  if (activeSection === "experience") {
    return <AnimatedFreelanceBox freelanceJobs={myInfo.experience.freelance} />;
  }

  return <AnimatedSocialsBox />;
};
