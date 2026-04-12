import { BarChart3, Gamepad2, Plane, Trophy } from "lucide-react";
import { SiFigma, SiJira, SiN8N, SiPostgresql, SiPython } from "react-icons/si";
import type { Experience } from "../lib/types";

export const myInfo = {
  name: "Namit Nitin Chuke",
  alias: "Namit",
  title: "Product | Data Analytics",
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
      name: "n8n",
      children: <SiN8N className="size-10" />,
      className: "bg-[#FF6D5B]",
    },
    {
      name: "Figma",
      children: <SiFigma className="size-10" />,
      className: "bg-[#F24E1E]",
    },
    {
      name: "Jira",
      children: <SiJira className="size-10" />,
      className: "bg-[#0052CC]",
    },
  ],
  about_me: {
    head: "Product Builder & Data Analyst. I obsess over growth funnels, KPIs, and the decisions that move them. I turn ambiguity into actionable strategy.",
    snapshot: [
      {
        label: "28% → 46%",
        value: "EU Funnel Attach Rate",
      },
      {
        label: "₹6 Lakh",
        value: "EU LangSchool Revenue (in 1st month )",
      },
      {
        label: "24h → 5m",
        value: "Decision Time Reduction",
      },
      {
        label: "130+",
        value: "Placements Coordinated",
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
    other:
      "A 0→1 mindset coupled with deep analytical curiosity. Currently leading growth initiatives at Leap Finance and spearheading student leadership milestones at NIT Bhopal. Focused on engineering workflows that eliminate process friction and drive scale.",
  },
  contact: {
    email: "namitchuke19@gmail.com",
    phone: "+91 9111009222",
    whatsapp: "https://wa.me/919111009222",
    linkedin: "https://www.linkedin.com/in/namit-nitin-chuke/",
    github: "https://www.github.com/Namitchuke",
    location: "Bengaluru, India",
  },
  experience: {
    work: [
      {
        title: "Program Intern",
        company: "Leap Finance",
        location: "Bengaluru, India",
        dateRange: "2026 - Present",
        description:
          "Spearheaded EU funnel optimization. Engineered LeapPlan AI to solve trust bottlenecks, establishing the EU LangSchool which generated 6L revenue within its first month.",
        skills: ["Product Strategy", "Growth Ops", "Automation"],
        current: true,
      },
      {
        title: "Placement Coordinator",
        company: "NIT Bhopal",
        location: "Bhopal, India",
        dateRange: "2024 - 2025",
        description:
          "Managed professional outreach for 130+ students and streamlined placement workflows.",
        skills: ["Stakeholder", "Leadership"],
      },
    ] satisfies Experience[],
    freelance: [
      {
        project: "LeapPlan AI",
        description:
          "Built a full-stack AI decision engine, reducing evaluation time from 24h into 5 minutes.",
        duration: "Jan 2026 - Present",
        skills: ["Python", "FastAPI", "Claude Code"],
      },
      {
        project: "Articulate AI",
        description:
          "Built an n8n pipeline to eliminate manual documentation overhead.",
        duration: "Feb 2026 - Present",
        skills: ["n8n", "LLM Prompting", "Gemini"],
      },
    ],
  },
  studies: [
    {
      degreeTitle: "B.Tech",
      institution: "NIT Bhopal",
      location: "Bhopal, India",
      dateRange: "2022 - 2026",
      topics: ["Product thinking", "Data analysis"],
      current: true,
    },
    {
      degreeTitle: "Summer Program Management (SPM)",
      institution: "IIM Udaipur",
      location: "Udaipur, India",
      dateRange: "2025",
      topics: ["Business case analysis", "Strategic frameworks"],
      current: false,
    },
  ],
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
      title: "Costo Coffee Sales Dashboard",
      description:
        "Interactive dashboard visualizing coffee sales metrics, regional trends, and business KPIs.",
      technologies: ["MySQL", "Power BI"],
      githubLink: "https://github.com/Namitchuke/Costo-Coffee-Sales-Performance-Dashboard",
      image: "/projects/Costo_Coffee.jpg",
    },
    {
      title: "Zomato Spatial EDA",
      description: "Zomato data deep-dive: restaurant performance, customer preferences, and growth opportunities.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      githubLink: "https://github.com/Namitchuke/Zomato-EDA",
      image: "/projects/zomato.jpg",
    },
    {
      title: "Dhan Pro Expansion",
      description:
        "Solving the 'Trust Deficit' in retail investing through strategic feature roadmapping.",
      technologies: ["Figma", "User Research", "GTM Strategy"],
      liveLink: "https://docs.google.com/presentation/d/1TFpuWMgQIKBA2Z6S1GuCaNl-tsVhS_3WX4C9wnQHEYU/edit?slide=id.p1#slide=id.p1",
      image: "/projects/Dhan.jpg",
    },
  ],
  certifications: [
    {
      title: "Google Data Analytics",
      date: "2025",
      description:
        "Demonstrates foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
      credentialId: "HZDTAVOW93DS",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/HZDTAVOW93DS",
    },
    {
      title: "IBM AI Product Manager Professional Certificate",
      date: "2026",
      description:
        "Buildproduct management and generative AI skills",
    },
  ],
};
