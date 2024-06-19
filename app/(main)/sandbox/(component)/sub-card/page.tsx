"use client";
import React from "react";
import { Link } from "next-view-transitions";

const handleReload = () => {
  window.location.reload();
};

const page = () => {
  return (
    <div>
      <a onClick={handleReload} href="/sandbox">
        1
      </a>
    </div>
  );
};

export default page;
