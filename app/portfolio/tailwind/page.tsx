"use client";
import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default page;
