import { motion } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { useState } from "react";
import { useSectionContext } from "../../hooks/useSectionContext";
import { IoHome } from "react-icons/io5";
import { TbUserScan } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { BiDownload } from "react-icons/bi";
import type { Section } from "../../context/SectionContext";

const menuItems: { id: Section; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Home", icon: <IoHome /> },
  { id: "about", label: "About", icon: <TbUserScan /> },
  { id: "experience", label: "Experience", icon: <MdWork /> },
  { id: "education", label: "Education", icon: <PiStudentFill /> },
  { id: "projects", label: "Projects", icon: <FaCode /> },
  { id: "contact", label: "Contact", icon: <RiContactsBook3Fill /> },
];

export const AnimatedMenuBox = () => {
  const { activeSection, setActiveSection } = useSectionContext();

  return (
    <AnimatedBox className="col-span-3 row-span-5 flex flex-col justify-around h-full p-4">
      <nav
        aria-label="Sections"
        className="flex flex-col justify-center gap-6 flex-1 mb-4"
      >
        {menuItems.map((item) => (
          <AnimatedMenuBoxItem
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            selected={item.id === activeSection}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </AnimatedMenuBoxItem>
        ))}
      </nav>
      <CvButton />
    </AnimatedBox>
  );
};

type AnimatedMenuBoxItemProps = {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
};

const AnimatedMenuBoxItem = ({
  children,
  onClick,
  selected,
}: AnimatedMenuBoxItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      aria-current={selected ? "page" : undefined}
      className="w-full cursor-pointer px-5 py-3 uppercase text-sm font-semibold tracking-wide relative"
    >
      <motion.span
        animate={{
          opacity: hovered || selected ? 1 : 0,
          scale: hovered || selected ? 1 : 0.6,
        }}
        transition={{ duration: 0.12 }}
        className={`absolute inset-0 w-full h-full rounded-full pointer-events-none ${
          selected ? "bg-zinc-200" : "bg-zinc-600"
        }`}
      />
      <span
        className={`relative z-10 flex items-center gap-3 transition-colors duration-100 ${
          selected ? "text-zinc-900" : "text-zinc-100"
        }`}
      >
        {children}
      </span>
    </motion.button>
  );
};

const CvButton = () => {
  return (
    <motion.div
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-zinc-400 to-teal-400 rounded-lg"></div>
      <motion.a
        href="/projects/Namit_Nitin_Chuke_Resume.pdf"
        download
        className="relative flex items-center gap-2 bg-zinc-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200 m-1"
        whileHover={{
          boxShadow: "0px 0px 12px rgb(255,255,255)",
        }}
      >
        <motion.span
          animate={{ y: [0, -2, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <BiDownload className="size-5" />
        </motion.span>
        <motion.span
          animate={{ y: [0, 2, -1, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          Download CV
        </motion.span>
      </motion.a>
    </motion.div>
  );
};
