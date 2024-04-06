import React from "react";
import AnimatedCursor from "react-animated-cursor";

interface CursorProps {
  color: string;
}

const Cursor = ({ color }: CursorProps) => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      clickables={["a", "button", "input", "select", ".link"]}
      innerStyle={{
        backgroundColor: color,
      }}
      outerStyle={{
        border: `1px solid ${color}`,
      }}
    />
  );
};

export default Cursor;
