import { cn } from "@/utils/cn";
import React from "react";

const widget = ({
  children,
  col = 1,
  row = 1,
  colStart,
  rowStart,
  className = "",
}) => {
  return (
    <div
      className={cn([
        "backdrop-blur-xl bg-gray-500/30 rounded-2xl overflow-hidden",
        className,
      ])}
      style={{
        gridColumn: `${colStart ? `${colStart} / span ${col}` : `span ${col}`}`,
        gridRow: `${rowStart ? `${rowStart} / span ${row}` : `span ${row}`}`,
      }}
    >
      {children}
    </div>
  );
};

export default widget;
