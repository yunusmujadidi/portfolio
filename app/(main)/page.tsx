import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  X,
} from "lucide-react";
import Image from "next/image";

import { Link } from "next-view-transitions";
import Badge from "@/components/Badge";

export const metadata = {
  title: "Home",
  description: "Yunus Mujadidi Portfolio",
};

export default function Home() {
  return (
    <div className="text-white mb-10">
      <h1 className="font-semibold text-2xl tracking-tighter">
        hello there, i&apos;m Yunus 👋{" "}
      </h1>
      <div>
        <p className="mt-10 tracking-wider font-light text-balance text-slate-300">
          passionate and dedicated fresh graduate CS major from Universitas
          Negeri Semarang as a front-end dev. With a strong foundation in
          programming principles and web development technologies, I am very
          confident in building modern and responsive web applications using
          cutting-edge frameworks like{" "}
          <Badge href="https://react.dev">
            <svg
              width="14"
              height="14"
              role="img"
              aria-label="React logo"
              className="!mr-1"
            >
              <use href="/sprite.svg#react" />
            </svg>
            React
          </Badge>{" "}
          and{" "}
          <Badge href="https://nextjs.org">
            <Image
              alt="Next.js logomark"
              src="/next-logo.svg"
              className="!mr-1 "
              width="14"
              height="14"
            />
            Next.js
          </Badge>{" "}
          . Throughout my academic journey, online courses and internship
          experiences, I have honed my skills in front-end and back-end
          development, version control, problem-solving, and collaboration.
        </p>
        <p className="mt-10 tracking-wider font-light text-balance text-slate-300">
          i am driven by a desire to contribute to dynamic teams, continuously
          learn and grow as a software engineer, and create wonderful products
          and i am currently seeking opportunities to work with talented
          individuals or companies to build innovative and impactful products.
        </p>
        <p className="mt-10 tracking-wider font-light text-balance text-slate-300">
          in addition to my skills and experience, I also have working on
          various{" "}
          <Link className=" text-white hover:underline" href="/projects">
            projects
            <ArrowUpRight className="w-3 h-3 inline mb-3" />
          </Link>{" "}
          and building a{" "}
          <Link className=" text-white hover:underline" href="/sandbox">
            sandbox
            <ArrowUpRight className="w-3 h-3 inline mb-3" />
          </Link>{" "}
          for fun to showcase my skills.
        </p>
        <hr className="mt-20 opacity-30" />
        <div className="flex flex-row mt-10 justify-between group ">
          <p className=" text-slate-200 group-hover:underline">
            Let&apos;s Connect{" "}
            <ArrowRight className="w-6 inline transition-all duration-300 group-hover:ml-5 group-hover:w-5" />
          </p>
          <div className="flex gap-6">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yunusmujadidi@gmail.com">
              <Mail className=" transition-all duration-300 cursor-pointer text-white hover:text-slate-100/70" />
            </a>
            <a href="http://linkedin.com/in/yunusmujadidi" target="_blank">
              <Linkedin className=" transition-all duration-300 cursor-pointer text-white hover:text-slate-100/70" />
            </a>
            <a href="http://github.com/yunusmujadidi" target="_blank">
              <Github className=" transition-all duration-300 cursor-pointer text-white hover:text-slate-100/70" />
            </a>
            <a href="http://x.com/yynoes" target="_blank">
              <X className=" transition-all duration-300 cursor-pointer text-white hover:text-slate-100/70" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
