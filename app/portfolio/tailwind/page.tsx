"use client";
import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Main />
    </div>
  );
};

export default page;
