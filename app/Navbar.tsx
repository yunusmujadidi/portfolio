import { Github, GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="justify-between inset-x-0 top-0 items-center mb-20 flex flex-row">
      <div className="space-x-6">
        <Link href="/" className="text-white hover:text-slate-100/70">
          home
        </Link>
        <Link href="/projects" className="text-white hover:text-slate-100/70">
          projects
        </Link>
        <Link href="/blog" className="text-white hover:text-slate-100/70">
          blog
        </Link>
        <Link href="/sandbox" className="text-white hover:text-slate-100/70">
          sandbox
        </Link>
      </div>
      <Link
        href="https://github.com/yunusmujadidi"
        target="_blank"
        className="flex text-white"
      >
        <GithubIcon />
      </Link>
    </div>
  );
};

export default Navbar;
