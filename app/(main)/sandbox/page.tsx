import { Link } from "next-view-transitions";
import React from "react";

export const metadata = {
  title: "soon",
  description: "coming soon",
};

const page = () => {
  return (
    <div className="text-white tracking-wide mb-10 lowercase">
      <h1 className="font-semibold text-2xl mb-12">
        my projects and portfolio
      </h1>

      <Link href="/component/sub-card">subscription card</Link>
    </div>
  );
};

export default page;
