import { Link } from "next-view-transitions";
import React from "react";

export const metadata = {
  title: "Sandbox",
  description: "A collection of UI components and design experiments.",
};

const components = [
  {
    name: "Subscription Card",
    path: "/component/sub-card",
    description:
      "A visually appealing subscription card component with a clean layout and smooth hover effects.",
  },
  {
    name: "Pricing Grid",
    path: "/component/pricing-grid",
    description:
      "A responsive pricing grid component showcasing different pricing tiers and their features.",
  },
  {
    name: "Product Modal",
    path: "/component/product-modal",
    description:
      "An interactive product modal component with a sleek design and detailed product information.",
  },
  {
    name: "Image Gallery",
    path: "/component/image-gallery",
    description:
      "A dynamic image gallery component with search functionality and a modern grid layout.",
  },
  {
    name: "Login Modal",
    path: "/component/login-modal",
    description:
      "A modern and responsive login modal with social login options and a sleek design.",
  },
];

const SandboxPage = () => {
  return (
    <div className="text-white tracking-wide mb-10 lowercase">
      <h1 className="font-semibold text-2xl mb-12">my sandbox</h1>
      <p className="text-slate-300 mb-8">Welcome to my sandbox!</p>
      <div className="space-y-4">
        {components.map((component, index) => (
          <div key={index}>
            <Link
              className="text-slate-300 hover:text-slate-400"
              href={component.path}
            >
              {component.name}
            </Link>
            <p className="text-slate-400 text-sm mt-1">
              {component.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SandboxPage;
