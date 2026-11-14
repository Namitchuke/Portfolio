import { motion } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { twMerge } from "tailwind-merge";

const rotations = myInfo.skills.map((_, i) => (i % 2 === 0 ? 8 : -8));

export const AnimatedSkillsBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 grid grid-cols-4 gap-4">
      <div className="col-span-2 flex items-center justify-center">
        <h2 className="font-bold text-xl">TECH STACK</h2>
      </div>
      {myInfo.skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          whileHover={{ scale: 1.08, rotate: rotations[i], y: -6 }}
          className={twMerge(
            "col-span-1 rounded size-full aspect-square flex flex-col items-center justify-center gap-1 bg-zinc-400 [&>svg]:size-8",
            skill.className
          )}
        >
          {skill.children}
          <span className="text-[11px] font-semibold leading-none text-white">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </AnimatedBox>
  );
};
