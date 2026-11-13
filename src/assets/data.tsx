import { BarChart3, Gamepad2, Plane, Trophy } from "lucide-react";
import { IoLogoTableau } from "react-icons/io5";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiN8N, SiPostgresql, SiPython } from "react-icons/si";
import type {
  Certification,
  Education,
  Experience,
  FreelanceJob,
  Project,
} from "../lib/types";

export const myInfo = {
  name: "Namit Nitin Chuke",
  alias: "Namit",
  title: "Growth Analytics",
  tagline:
    "I lead 0→1 growth bets at Leap Finance: new acquisition channels, a counsellor marketplace and funnels built from scratch, all measured in revenue.",
  image: "/personal.jpg",
  skills: [
    {
      name: "Excel",
      children: <PiMicrosoftExcelLogoFill className="size-10" />,
      className: "bg-[#217346]",
    },
    {
      name: "Power BI",
      children: <BarChart3 className="size-10 text-yellow-400" />,
      className: "bg-slate-800",
    },
    {
      name: "Python",
      children: <SiPython className="size-10" />,
      className: "bg-[#3776AB]",
    },
    {
      name: "SQL",
      children: <SiPostgresql className="size-10" />,
      className: "bg-[#4169E1]",
    },
    {
      name: "Tableau",
      children: <IoLogoTableau className="size-10" />,
      className: "bg-[#E97627]",
    },
    {
      name: "n8n",
      children: <SiN8N className="size-10" />,
      className: "bg-[#FF6D5B]",
    },
  ],
  about_me: {
    head: "Growth analyst at Leap Finance who leads 0→1 initiatives end to end: launching acquisition channels, building funnels from scratch and fixing lead quality. I turn funnel data into decisions that move revenue.",
    snapshot: [
      {
        label: "₹47L",
        value: "Revenue from 0→1 Yocket Elite masterclasses",
      },
      {
        label: "₹36L",
        value: "Month-1 enrollments, 0→1 counsellor marketplace",
      },
      {
        label: "58%",
        value: "Lower customer acquisition cost",
      },
      {
        label: "12% → 37%",
        value: "Lead Quality",
      },
    ],
    hobbies: [
      {
        name: "Chess",
        icon: <Trophy className="size-6 text-zinc-400" />,
      },
      {
        name: "Gaming",
        icon: <Gamepad2 className="size-6 text-zinc-400" />,
      },
      {
        name: "Travelling",
        icon: <Plane className="size-6 text-zinc-400" />,
      },
    ],
  },
  contact: {
    email: "namitchuke19@gmail.com",
    phone: "+91 9111009222",
    whatsapp: "https://wa.me/919111009222",
    linkedin: "https://www.linkedin.com/in/namit-nitin-chuke/",
    github: "https://github.com/Namitchuke",
    location: "Bengaluru, India",
  },
  experience: {
    intro:
      "Where data meets execution. At Leap Finance I run 0→1 launches and funnel fixes end to end: ₹47L from a new masterclass channel, ₹36L from a counsellor marketplace in month one, and 70% less time spent on reporting.",
    work: [
      {
        title: "Program Associate",
        company: "Leap Finance",
        location: "Bengaluru, India",
        dateRange: "Jul 2026 - Present",
        description:
          "Led 0→1 Yocket Elite masterclasses: ₹47L revenue at 58% lower CAC. Built a 0→1 counsellor marketplace: ₹36L in month one (20% L2A vs 11% BAU). Lead quality 12% → 37%.",
        skills: [
          "Growth Strategy",
          "Performance Marketing",
          "0→1 Launch",
          "Funnel Analytics",
          "Marketplace",
        ],
        current: true,
      },
      {
        title: "Program Intern",
        company: "Leap Finance",
        location: "Bengaluru, India",
        dateRange: "Jan 2026 - Jun 2026",
        description:
          "Branch performance 32% → 80%+ and NPS 7.2 → 8.4. EU LangSchool attach rate 10% → 26%, ₹12L in month one.",
        skills: ["Growth Strategy", "BranchOps", "0→1 Launch"],
      },
    ] satisfies Experience[],
    freelance: [
      {
        project: "Sales Analytics System",
        description: "−70% reporting time with automated funnel dashboards.",
        skills: ["Apps Script", "Python"],
      },
      {
        project: "Supply–Demand Mapping",
        description:
          "L2A 20% → 27% by matching lead archetypes to counsellor fit and capacity.",
        skills: ["Lead Routing", "Capacity Planning"],
      },
      {
        project: "Masterclass Attendance",
        description:
          "Lead-to-attendance 29% → 48% with an AI calling flow, automated reminders and better slots.",
        skills: ["AI Calling", "Automation"],
      },
    ] satisfies FreelanceJob[],
  },
  education: {
    intro:
      "Engineering at NIT Bhopal taught me to break problems into systems. IIM Udaipur added business judgment, and IBM's AI Product Manager program taught me to scope AI products. Together they shape how I build 0→1 businesses like the counsellor marketplace.",
  },
  studies: [
    {
      degreeTitle: "B.Tech",
      institution: "NIT Bhopal",
      location: "Bhopal, India",
      dateRange: "2022 - 2026",
      topics: [],
    },
    {
      degreeTitle: "Program in Management",
      institution: "IIM Udaipur",
      location: "Udaipur, India",
      dateRange: "2025",
      topics: [
        "Data analytics & financial decision-making",
        "Entrepreneurship & strategic management",
      ],
    },
  ] satisfies Education[],
  projects: [
    {
      title: "AI PM Planner",
      description: "Learning platform for aspiring AI PMs",
      technologies: ["Python", "FastAPI", "Gemini API"],
      liveLink: "https://ai-pm-learning-system-1.onrender.com/",
      githubLink: "https://github.com/Namitchuke/ai-pm-learning-system",
      image: "/projects/ai_pm_cover.jpg",
    },
    {
      title: "Zomato Spatial EDA",
      description:
        "Zomato data deep-dive: restaurant performance, customer preferences, and growth opportunities.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      liveLink: "https://zomato-eda-19.streamlit.app/",
      githubLink: "https://github.com/Namitchuke/Zomato-EDA",
      image: "/projects/zomato_cover.jpg",
    },
    {
      title: "Dhan Pro Expansion",
      description:
        "Solving the 'Trust Deficit' in retail investing through strategic feature roadmapping.",
      technologies: ["Figma", "User Research", "GTM Strategy"],
      liveLink:
        "https://docs.google.com/presentation/d/1TFpuWMgQIKBA2Z6S1GuCaNl-tsVhS_3WX4C9wnQHEYU/edit?usp=sharing",
      liveLabel: "View Deck",
      image: "/projects/dhan_cover.jpg",
    },
    {
      title: "Costo Coffee Sales Dashboard",
      description:
        "Interactive dashboard visualizing coffee sales metrics, regional trends, and business KPIs.",
      technologies: ["MySQL", "Power BI"],
      githubLink:
        "https://github.com/Namitchuke/Costo-Coffee-Sales-Performance-Dashboard",
      image: "/projects/costo_cover.jpg",
    },
  ] satisfies Project[],
  certifications: [
    {
      title: "Google Data Analytics",
      issuer: "Google",
      date: "2024",
      url: "https://drive.google.com/file/d/17tc4aGES_Pv0TfOnEb8-GPDbkS3Xq4Cn/view",
    },
    {
      title: "AI Product Manager",
      issuer: "IBM",
      date: "2026",
      url: "https://drive.google.com/file/d/1kaw_r5xvf7lSPhpOiKg8ANrVqOcpWxib/view",
    },
    {
      title: "Power BI",
      issuer: "PwC",
      date: "2025",
      url: "https://drive.google.com/file/d/1kXfTdBXSL5az8I5bdOZlq_WC87qtXwdB/view",
    },
  ] satisfies Certification[],
};
