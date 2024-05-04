import React from "react";

const Main = () => {
  return (
    <main className="h-screen custom-bg bg-no-repeat bg-cover">
      <div className="relative px-2">
        <div className="pt-48 pb-36 mx-auto max-w-3xl">
          <h1 className=" font-bold text-7xl tracking-tight bg-clip-text text-center bg-gradient-to-t from-cyan-500 to-cyan-300 text-transparent">
            Data to enrich your online bussiness
          </h1>
          <p className="mt-4 leading-8 text-gray-800 text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo
            odio exercitationem consectetur ab quod architecto numquam quas ut
            doloribus dolorum hic in consequatur.
          </p>
          <div className="flex gap-x-6 justify-center mt-8 ">
            <a
              href="#"
              className="font-semibold inline-block p-3 text-white shadow-sm ring-1 ring-cyan-600 hover:bg-cyan-700 bg-cyan-600 rounded-md"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
