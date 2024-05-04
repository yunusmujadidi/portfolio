import Link from "next/link";
import React from "react";
import Cursor from "@/components/Cursor";
import GrainEffect from "@/components/visualEffects/GrainEffect";

const page = () => {
  return (
    <>
      <GrainEffect />
      <Cursor color="#fff" />
      <div className="h-screen p-20">
        <div className="text-white text-5xl flex flex-row justify-content items-center space-x-2 mx-auto">
          <a className="hover:underline" href="/portfolio/tailwind">
            Tailwind css landing page
          </a>
          <a className="hover:underline" href="/portfolio/tailwind">
            Harapan Charity Foundation
          </a>
          <a className="hover:underline" href="/portfolio/tailwind">
            Indonesian hate-speech detection using fine tuning BERT
          </a>
          <a className="hover:underline" href="/portfolio/tailwind">
            Airbnb Clone
          </a>
          <a className="hover:underline" href="/portfolio/tailwind">
            Netflix Clone
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
