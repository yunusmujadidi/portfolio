import { Link } from "next-view-transitions";
import React from "react";

export const metadata = {
  title: "soon",
  description: "coming soon",
};

const page = () => {
  return (
    <div className="text-white tracking-wide mb-10 lowercase">
      <h1 className="font-semibold text-2xl mb-12">my sandbox</h1>
      <div>
        <Link
          className="text-slate-300 hover:text-slate-400"
          href="/component/sub-card"
        >
          subscription card
        </Link>
      </div>
      <div>
        <Link
          className="text-slate-300 hover:text-slate-400"
          href="/component/pricing-grid"
        >
          pricing grid
        </Link>
      </div>
      <div>
        <Link
          className="text-slate-300 hover:text-slate-400"
          href="/component/product-modal"
        >
          product modal
        </Link>
      </div>
    </div>
  );
};

export default page;
