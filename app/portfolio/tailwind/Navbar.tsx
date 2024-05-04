import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-full px-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center justify-start space-x-2">
            <Image
              className="block"
              src="/tailwindlogo.svg"
              alt="Logo"
              width={50}
              height={50}
            />
            <h1 className="text-white text-2xl flex justify-center items-center">
              tailwindcss
            </h1>
          </div>
          <div className="flex space-x-2">
            <a
              href="#"
              className="text-white text-sm bg-gray-700 px-3 py-2 font-medium rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-sm  px-3 py-2 font-medium rounded-md"
            >
              Testimonial
            </a>
            <a
              href="#"
              className="text-white text-sm  px-3 py-2 font-medium rounded-md"
            >
              Price
            </a>
            <a
              href="#"
              className="text-white text-sm  px-3 py-2 font-medium rounded-md"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
