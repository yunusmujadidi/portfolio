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
        "Fullstack e-commerce app with cms using next js featuring server action, authentication (OAuth and email password credentials), search filtering parameters, next js caching, and shopping cart with stripe payment integration. built using next 15, prisma with postgres, shadcn, tailwind css and zod for global state",
      link: "https://commerce.yynoes.me/",
      github: "https://github.com/yunusmujadidi/commerce-app",
    },
    {
      title: "Finance App",
      description: "Finance Fullstack app using next 14, prisma, and shadcn.",
      link: "https://finance.yynoes.me/",
      github: "https://github.com/yunusmujadidi/finance-app",
    },

    {
      title: "Rent App",
      description:
        "An Airbnb clone built with Next.js, TypeScript, and Prisma with MongoDB. Implemented user authentication, property listings, reservation system, interactive map, favorite listings, and filter search. Utilized server actions, image upload with Cloudinary, and real-time updates using React Server Components.",
      link: "https://airbnb.yynoes.me/",
      github: "https://github.com/yunusmujadidi/airbnb",
    },

    {
      title: "Personal Web",
      description:
        "A modern and responsive personal website using Next.js for server-side rendering and static site generation. Showcases skills, projects, and experience in a visually appealing and user-friendly manner.",
      link: "https://yynoes.me/",
      github: "https://github.com/yunusmujadidi/portfolio",
    },
    {
      title: "Indonesia Hate Speech Detection",
      description:
        "An NLP fine-tuning model using BERT pre-trained and SVM for detecting Indonesian hate speech tweets with 86% accuracy. Built with Python for classification and streamlit for the web app.",
      link: "https://yunusmujadidi-bert-hatespeech-app-385k6r.streamlit.app/",
      github: "https://github.com/yunusmujadidi/bert-hatespeech",
    },
    {
      title: "Anicase",
      description: " Custom phone case user-friendly e-commerce ui design",
      link: "https://anicase.yynoes.me/",
      github: "https://github.com/yunusmujadidi/anicase",
    },
    {
      title: "Game Hub",
      description:
        "A responsive and user-friendly web application using React and Chakra UI. Leveraged the RAWG API to fetch and display video game data, implementing search functionality and genre filtering. Optimized performance through code-splitting and lazy loading techniques.",
      link: "https://game-hub-chi-peach.vercel.app/",
      github: "https://github.com/yunusmujadidi/game-hub",
    },
    {
      title: "KayuKaya Living",
      description:
        "A modern and responsive website for a furniture company, built with Next.js, TypeScript, and Tailwind CSS. Implemented dynamic project showcase, company information, and custom product catalog. Utilized Framer Motion for smooth animations and optimized performance through lazy loading techniques.",
      link: "https://kayukaya.yynoes.me/",
      github: "https://github.com/yunusmujadidi/kayukaya-living",
    },
    {
      title: "KayuKaya Blog",
      description:
        "A feature-rich blog application using Next.js, React, and Prisma. Implemented user authentication and authorization with Auth.js (NextAuth), seamless image uploads, and a rich text editor. Designed a responsive and intuitive user interface using shadcn and Tailwind CSS.",
      link: "",
      github: "https://github.com/yunusmujadidi/kayukaya-blog",
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
