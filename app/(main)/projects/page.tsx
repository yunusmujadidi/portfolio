import React from "react";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "my projects",
  description:
    "i am a software engineer and a self-taught designer. i am passionate about building things that live on the internet.",
};

const page = () => {
  return (
    <div className="text-white tracking-wide leading-7 mb-10 lowercase">
      <h1 className="font-semibold text-2xl">my projects and portfolio</h1>
      <p className="mt-10 text-slate-300">
        on my journey i have built some projects as my exercises and some of my
        personal projects. i have also built some projects for my clients. here
        are some of my projects and portfolio.
      </p>

      <a
        href="https://kayukaya.yynoes.me/"
        className="hover:text-slate-300"
        target="_blank"
      >
        <h1 className="font-semibold text-xl mt-12">
          KayuKaya Living <ArrowUpRight className="w-3 h-3 inline mb-3" />
        </h1>
      </a>
      <p className="mt-5 text-slate-300">
        A website for custom furniture solutions for interiors and exteriors.
        Specialized in high-end hospitality projects, offering bespoke designs
        and sustainable practices. Built with Next.js, Tailwind CSS, Typescript,
        and Shadcn-ui. Also i&apos;m adding an animation using Framer Motion to
        make Parallax effect that looks cool!.
      </p>

      <hr className="mt-5 opacity-30" />
      <a
        href="https://anicase.yynoes.me/"
        className="hover:text-slate-300"
        target="_blank"
      >
        <h1 className="font-semibold text-xl mt-5">
          anicase <ArrowUpRight className="w-3 h-3 inline mb-3" />
        </h1>
      </a>
      <p className="mt-5 text-slate-300">
        Custom phone case user-friendly e-commerce platform built with Next.js.
        Users can upload photos, preview designs, and leave reviews. Implemented
        with React components, Tailwind CSS, and optimized image handling.
      </p>

      <hr className="mt-5 opacity-30" />
      <a
        className="hover:text-slate-300"
        href="https://www.harapancharityfoundation.tech/"
        target="_blank"
      >
        <h1 className="font-semibold text-xl mt-5">
          harapancharityfoundation website{" "}
          <ArrowUpRight className="w-3 h-3 inline mb-3" />
        </h1>
      </a>
      <p className="mt-5 text-slate-300">
        A non-profit organization website built with Next.js. The website is
        responsive and user-friendly, providing vital information about the
        organization with more features coming soon.
      </p>

      <hr className="mt-5 opacity-30" />
      <a
        href="https://gamehub.yynoes.me/"
        className="hover:text-slate-300"
        target="_blank"
      >
        <h1 className="font-semibold text-xl mt-5">
          game-hub <ArrowUpRight className="w-3 h-3 inline mb-3" />
        </h1>
      </a>
      <p className="mt-5 text-slate-300">
        Developed a responsive and user-friendly web application built with
        React and Chakra UI, leveraging the RAWG API to fetch and display video
        game data, implementing features such as search functionality and genre
        filtering.
      </p>

      <hr className="mt-5 opacity-30" />
      <a
        className="hover:text-slate-300"
        href="https://indobert.yynoes.me/"
        target="_blank"
      >
        <h1 className="font-semibold text-xl mt-5">
          indonesia hatespeech detection{" "}
          <ArrowUpRight className="w-3 h-3 inline mb-3" />
        </h1>
      </a>
      <p className="mt-5 text-slate-300">
        An NLP fine-tuning model using BERT pre-trained and SVM for detecting
        Indonesian hate speech tweets with 86% accuracy. Using Python for
        classification and Next.js for the web app.
      </p>
    </div>
  );
};

export default page;
