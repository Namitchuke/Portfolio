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
  image: "/personal.jpg",
  skills: [
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
      name: "Power BI",
      children: <BarChart3 className="size-10 text-yellow-400" />,
      className: "bg-slate-800",
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
    {
      name: "Excel",
      children: <PiMicrosoftExcelLogoFill className="size-10" />,
      className: "bg-[#217346]",
    },
  ],
  about_me: {
    head: "Growth analyst at Leap Finance. I launch acquisition channels, fix lead quality, and turn funnel data into decisions that move revenue.",
    snapshot: [
      {
        label: "₹47L",
        value: "Masterclass Revenue (2 cohorts)",
      },
      {
        label: "₹36L",
        value: "Marketplace Enrollments (Month 1)",
      },
      {
        label: "−58%",
        value: "CAC (₹75K → ₹31K)",
      },
      {
        label: "12% → 37%",
        value: "Lead-to-Relevant Rate",
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
      "I work where data meets execution: diagnosing funnels, launching programs and building the systems that let teams scale.",
    work: [
      {
        title: "Program Associate",
        company: "Leap Finance",
        location: "Bengaluru, India",
        dateRange: "Jul 2026 - Present",
        description:
          "Built a counsellor marketplace that hit 20% lead-to-attendance vs 11% BAU and ₹36L in month-one enrollments. Launched masterclasses as an acquisition channel, cutting CAC 58% and CPL 63% for ₹47L revenue. Fixed Meta lead quality, lifting lead-to-relevant from 12% to 37%.",
        skills: ["Growth Strategy", "Performance Marketing", "0→1 Launch"],
        current: true,
      },
      {
        title: "Program Intern",
        company: "Leap Finance",
        location: "Bengaluru, India",
        dateRange: "Jan 2026 - Jun 2026",
        description:
          "Owned the EU bottom-of-funnel: a pan-India branch tracker took branch performance from 32% to 80%+ and NPS from 7.2 to 8.4. Launched EU LangSchool, growing attach rate from 10% to 26% with ₹12L in month one.",
        skills: ["BranchOps", "0→1 Launch"],
      },
    ] satisfies Experience[],
    freelance: [
      {
        project: "Sales Analytics System",
        description:
          "Automated funnel reporting in Sheets and Apps Script (ad-level KPIs, stage-gated funnel, deduplicated lead sync), cutting reporting time 70%.",
        skills: ["Apps Script", "Google Sheets", "Python"],
      },
      {
        project: "LeapPlan AI",
        description:
          "LLM planner turning counselling inputs into personalized study-abroad plans in 3–5 minutes, down from 24 hours.",
        skills: ["FastAPI", "React", "Gemini"],
      },
    ] satisfies FreelanceJob[],
  },
  education: {
    intro:
      "My education shaped how I approach growth problems: with data, systems thinking, and a focus on measurable impact.",
  },
  studies: [
    {
      degreeTitle: "B.Tech",
      institution: "NIT Bhopal (MANIT)",
      location: "Bhopal, India",
      dateRange: "2022 - 2026",
      topics: [],
    },
    {
      degreeTitle: "Summer Program in Management",
      institution: "IIM Udaipur",
      location: "Udaipur, India",
      dateRange: "Summer 2025",
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
      image: "/projects/ai_pm_planner.jpg",
    },
    {
      title: "Zomato Spatial EDA",
      description:
        "Zomato data deep-dive: restaurant performance, customer preferences, and growth opportunities.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      liveLink: "https://zomato-eda-19.streamlit.app/",
      githubLink: "https://github.com/Namitchuke/Zomato-EDA",
      image: "/projects/zomato.jpg",
    },
    {
      title: "Dhan Pro Expansion",
      description:
        "Solving the 'Trust Deficit' in retail investing through strategic feature roadmapping.",
      technologies: ["Figma", "User Research", "GTM Strategy"],
      liveLink:
        "https://docs.google.com/presentation/d/1TFpuWMgQIKBA2Z6S1GuCaNl-tsVhS_3WX4C9wnQHEYU/edit?usp=sharing",
      liveLabel: "View Deck",
      image: "/projects/Dhan.jpg",
    },
    {
      title: "Costo Coffee Sales Dashboard",
      description:
        "Interactive dashboard visualizing coffee sales metrics, regional trends, and business KPIs.",
      technologies: ["MySQL", "Power BI"],
      githubLink:
        "https://github.com/Namitchuke/Costo-Coffee-Sales-Performance-Dashboard",
      image: "/projects/Costo_Coffee.jpg",
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
      title: "Power BI Job Simulation",
      issuer: "PwC (Forage)",
      date: "2025",
      url: "https://drive.google.com/file/d/1kXfTdBXSL5az8I5bdOZlq_WC87qtXwdB/view",
    },
    {
      title: "AI Product Manager",
      issuer: "IBM",
      date: "2026",
      url: "https://drive.google.com/file/d/1kaw_r5xvf7lSPhpOiKg8ANrVqOcpWxib/view",
    },
  ] satisfies Certification[],
};
