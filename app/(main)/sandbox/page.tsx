import { Link } from "next-view-transitions";
import React from "react";

export const metadata = {
  title: "soon",
  description: "coming soon",
};

const page = () => {
  return (
    <div className="text-white">
      <Link href="/sandbox/sub-card">1</Link>
    </div>
  );
};

export default page;
