import React, { ReactNode } from "react";
import { cn } from "../lib/utils";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
