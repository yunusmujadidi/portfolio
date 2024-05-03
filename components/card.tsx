import React from "react";

interface CardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const card = ({ title, className }: CardProps) => {
  return <div>card</div>;
};

export default card;
