import React from "react";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "my projects",
  description:
    "i am a software engineer and a self-taught designer. i am passionate about building things that live on the internet.",
};

const page = () => {
  return (
    <div className="text-white tracking-wide mb-10 lowercase">
      <h1 className="font-semibold text-2xl">my projects and portfolio</h1>
      <p className="mt-10 text-slate-300">
        on my journey i have built some projects as my excersises and some of my
        personal projects. i have also built some projects for my clients. here
        are some of my projects and portfolio.
      </p>
      <hr className="mt-5 opacity-30" />
      <a
        href="https://github.com/yunusmujadidi/anicase"
        className="hover:text-slate-300"
        target="_blank"
      >
        <h1 className="font-semibold text-2xl mt-5">
          anicase <ArrowUpRight className="w-3 h-3 inline mb-3" />
        </h1>
      </a>
      <p className="mt-5 text-slate-300">
        custom phone case user-friendly e-commerce platform built with Next.js
        for customizing and purchasing phone cases. Users can upload photos,
        preview their designs, and leave reviews. Implemented with React
        components, Tailwind CSS, and optimized image handling. Set up with
        ESLint, environment variables, and comprehensive git configuration.
        Supports multiple package managers for development.
      </p>

      <hr className="mt-5 opacity-30" />
      <a
        className="hover:text-slate-300"
        href="https://www.harapancharityfoundation.tech/"
        target="_blank"
      >
        <h1 className="font-semibold text-2xl mt-5">
          harapancharityfoundation website{" "}
          <ArrowUpRight className="w-3 h-3 inline mb-3" />
        </h1>
      </a>
      <p className="mt-5 text-slate-300">
        a non-profit organization website built with Next.js. The website is
        responsive and user-friendly. Provides vital information about the org
        and more fitures coming soon.
      </p>
      <hr className="mt-5 opacity-30" />
      <a
        href="https://gamehub.yynoes.me/"
        className="hover:text-slate-300"
        target="_blank"
      >
        <h1 className="font-semibold text-2xl mt-5">
          game-hub <ArrowUpRight className="w-3 h-3 inline mb-3" />
        </h1>
      </a>
      <p className="mt-5 text-slate-300">
        developed a responsive and user-friendly web application built with
        React and Chakra UI, leveraging the RAWG API to fetch and display video
        game data, implementing features such as search functionality, genre
        filtering and optimizing performance through code-splitting and lazy
        loading techniques.
      </p>
      <hr className="mt-5 opacity-30" />
      <a
        className="hover:text-slate-300"
        href=" https://indobert.yynoes.me/"
        target="_blank"
      >
        <h1 className="font-semibold text-2xl mt-5">
          indonesia hatespeech detection{" "}
          <ArrowUpRight className="w-3 h-3 inline mb-3" />
        </h1>
      </a>
      <p className="mt-5 text-slate-300">
        an NLP fine tuning model using BERT pre-trained and SVM for detecting
        Indonesian hate speech tweet with 86% accuracy. Using Python for
        classify and Next.js for the web app.
      </p>
    </div>
  );
};

export default page;
