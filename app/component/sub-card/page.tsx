import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row">
          <img
            alt="subscribe image"
            src="/image.jpg"
            className="object-cover md:object-fill rounded-l-2xl hover:rounded-2xl hover:scale-105 duration-300 h-80 md:h-64"
          />
          <div className="p-6 md:p-12 text-white">
            <h1 className="font-serif text-xl text-center md:text-left">
              Get diet and fitness tips in your inbox
            </h1>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center md:text-left">
              Eat better and exercise better. Sign up for the diet and fitness
              newslatter.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 mt-5 md:space-x-3 md:space-y-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="md:text-sm p-2 px-4 text-center rounded-sm bg-zinc-800 border border-zinc-600 focus:outline-none focus:border-zinc-400 focus:placeholder:text-zinc-600"
              />
              <button className="md:text-sm px-5 py-3 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
