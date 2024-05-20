"use client";

import { GithubIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import React from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="justify-between inset-x-0 top-0 items-center mb-20 flex flex-row">
      <div className="space-x-6">
        <Link
          href="/"
          className={`hover:text-slate-100/70 ${
            isActive("/") ? "text-slate-100/70" : "text-white"
          }`}
        >
          home
        </Link>
        <Link
          href="/projects"
          className={`hover:text-slate-100/70 ${
            isActive("/projects") ? "text-slate-100/70" : "text-white"
          }`}
        >
          projects
        </Link>
        <Link
          href="/blog"
          className={`hover:text-slate-100/70 ${
            isActive("/blog") ? "text-slate-100/70" : "text-white"
          }`}
        >
          blog
        </Link>
        <Link
          href="/sandbox"
          className={`hover:text-slate-100/70 ${
            isActive("/sandbox") ? "text-slate-100/70" : "text-white"
          }`}
        >
          sandbox
        </Link>
      </div>
      <div className="flex flex-row gap-4 text-white">
        <a
          href="https://github.com/yunusmujadidi/portfolio"
          target="_blank"
          className=" hover:text-slate-100/70 cursor-pointer"
        >
          <GithubIcon />
        </a>
        {isDark ? (
          <Sun
            className=" transition-all duration-300 cursor-pointer text-white hover:text-slate-100/70"
            onClick={() => setIsDark(!isDark)}
          />
        ) : (
          <Moon
            className=" transition-all duration-300 cursor-pointer text-white hover:text-slate-100/70"
            onClick={() => setIsDark(!isDark)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
