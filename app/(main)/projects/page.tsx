import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

export const metadata = {
  title: "My Projects",
  description:
    "Showcasing my web development projects using Next.js, React, and Tailwind CSS",
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce App",
      description:
        "Fullstack e-commerce platform with admin dashboard, OAuth authentication, Stripe payments, and advanced search filtering. Built with Next.js 15, Prisma, PostgreSQL.",
      link: "https://commerce.yynn.me/",
      github: "https://github.com/yunusmujadidi/commerce-app",
    },
    {
      title: "Finance App",
      description:
        "Personal finance management app with expense tracking, budget visualization, and analytics dashboard. Next.js 14, Prisma, shadcn/ui.",
      link: "https://finance.yynn.me/",
      github: "https://github.com/yunusmujadidi/finance-app",
    },
    {
      title: "KayuKaya Living",
      description:
        "Furniture company website with dynamic showcases, smooth animations, and SEO optimization. Next.js, TypeScript, Framer Motion.",
      link: "https://kayukaya.yynn.me/",
      github: "https://github.com/yunusmujadidi/kayukaya-living",
    },
    {
      title: "Proposal Tracker",
      description:
        "Internal business tool for proposal management and tracking with dashboard analytics. Next.js, TypeScript, Prisma, shadcn/ui.",
      link: "https://proposal.yynn.me/",
      github: "https://github.com/yunusmujadidi/proposal-tracker",
    },
    {
      title: "Little Lemon Restaurant (UX/UI Design)",
      description:
        "Complete UX/UI design process from research to high-fidelity prototypes for restaurant booking system. Created as Meta Frontend Certificate submission.",
      link: "https://www.figma.com/file/CrHo5f16MesKTc92g3t1Bv/meta-UX-UI-submission",
      github:
        "https://www.figma.com/file/CrHo5f16MesKTc92g3t1Bv/meta-UX-UI-submission",
    },
    {
      title: "Little Lemon Restaurant (Frontend)",
      description:
        "Restaurant website with table booking, form validation, accessibility features, and responsive design. React, TypeScript, TailwindCSS, TanStack Router.",
      link: "https://meta-frontend-capstone-pi.vercel.app/",
      github: "https://github.com/yunusmujadidi/meta-frontend-capstone",
    },
    {
      title: "Indonesia Hate Speech Detection",
      description:
        "Fine-tuned IndoBERT model for Indonesian hate speech detection with 89% accuracy using next.js.",
      link: "https://indobert.yynn.me/",
      github: "https://github.com/yunusmujadidi/bert-hatespeech-id-next",
    },
    {
      title: "Anicase",
      description:
        "Custom phone case e-commerce platform with modern UI design and seamless user experience. React, TypeScript.",
      link: "https://anicase.yynn.me/",
      github: "https://github.com/yunusmujadidi/anicase",
    },
    {
      title: "Game Hub",
      description:
        "Video game discovery platform with RAWG API integration, search functionality, and performance optimization. React, Chakra UI.",
      link: "https://game-hub-chi-peach.vercel.app/",
      github: "https://github.com/yunusmujadidi/game-hub",
    },
  ];

  return (
    <div className="text-white tracking-wide leading-7 mb-10 lowercase">
      <h1 className="font-semibold text-2xl">My Projects</h1>
      <p className="mt-10 text-slate-300">
        Showcasing my web development projects built with Next.js and Tailwind
        CSS. These projects demonstrate my skills in building modern,
        responsive, and feature-rich applications.
      </p>

      {projects.map((project, index) => (
        <div key={index}>
          <div className="flex items-center justify-between">
            <a
              href={project.link}
              className="hover:text-slate-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="font-semibold text-xl mt-12">
                {project.title} <ArrowUpRight className="w-3 h-3 inline mb-3" />
              </h2>
            </a>
            <a
              href={project.github}
              className="hover:text-slate-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 mt-10" />
            </a>
          </div>
          <p className="mt-5 text-slate-300">{project.description}</p>
          <hr className="mt-5 opacity-30" />
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
