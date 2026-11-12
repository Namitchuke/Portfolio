import { IoHome } from "react-icons/io5";
import { TbUserScan } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { useSectionContext } from "../hooks/useSectionContext";
import type { Section } from "../context/SectionContext";

const items: { id: Section; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Home", icon: <IoHome /> },
  { id: "about", label: "About", icon: <TbUserScan /> },
  { id: "experience", label: "Work", icon: <MdWork /> },
  { id: "education", label: "Education", icon: <PiStudentFill /> },
  { id: "projects", label: "Projects", icon: <FaCode /> },
  { id: "contact", label: "Contact", icon: <RiContactsBook3Fill /> },
];

export const MobileNav = () => {
  const { activeSection, setActiveSection } = useSectionContext();

  return (
    <nav
      aria-label="Sections"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t border-zinc-700 bg-zinc-900/95 backdrop-blur pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="flex justify-around px-1">
        {items.map((item) => {
          const active = item.id === activeSection;
          return (
            <li key={item.id} className="flex-1">
              <button
                onClick={() => {
                  setActiveSection(item.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-current={active ? "page" : undefined}
                className={`w-full flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
                  active ? "text-teal-300" : "text-zinc-400"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
