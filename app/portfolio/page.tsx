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
        <div className="text-white font-panton text-5xl hover:underline">
          <a href="/portfolio/tailwind">Tailwind css landing page</a>
        </div>
      </div>
    </>
  );
};

export default page;
