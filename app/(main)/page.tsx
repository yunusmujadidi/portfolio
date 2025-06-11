import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight, Github, Mail, X } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Ahmad Yunus Mujadidi Portfolio",
};

export default function Home() {
  return (
    <div className="text-white mb-10">
      <h1 className="font-semibold text-2xl tracking-tighter">
        Hello there, I&apos;m Yunus 👋{" "}
      </h1>
      <div>
        <div className="mt-10 tracking-wider leading-7 font-light text-balance text-slate-300">
          passionate and dedicated informatics engineering student from
          Universitas Negeri Semarang as a front-end dev. With a strong
          foundation in programming principles and web development technologies,
          I am very confident in building modern and responsive web applications
          using cutting-edge frameworks like{" "}
          <Link href="https://react.dev">
            <Badge>
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
          </Link>
          and{" "}
          <Link href="https://nextjs.org">
            <Badge>
              <Image
                alt="Next.js logomark"
                src="/next-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Next.js
            </Badge>{" "}
          </Link>
          along with back-end technologies like Node.js and Prisma. Throughout
          my academic journey, online courses and internship experiences, I have
          honed my skills in front-end and back-end development, version
          control, problem-solving, and collaboration.
        </div>
        <div className="mt-10 tracking-wider leading-7 font-light text-balance text-slate-300">
          i am driven by a desire to contribute to dynamic teams, continuously
          learn and grow as a software engineer, and create wonderful products
          and i am currently seeking opportunities to work with talented
          individuals or companies to build innovative and impactful products.
        </div>
        <div className="mt-10 tracking-wider leading-7 font-light text-balance text-slate-300">
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
        </div>
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

            <a href="http://github.com/yunusmujadidi" target="_blank">
              <Github className=" transition-all duration-300 cursor-pointer text-white hover:text-slate-100/70" />
            </a>
            <a href="http://x.com/yynn" target="_blank">
              <X className=" transition-all duration-300 cursor-pointer text-white hover:text-slate-100/70" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
