import React from "react";

const widget = ({ children, col = 1, row = 1, className = "" }) => {
  return (
    <div
      className={`backdrop-blur-xl bg-gray-500/30 p-2 rounded-lg ${className}`}
      style={{
        gridColumn: `span ${col}`,
        gridRow: `span ${row}`,
      }}
    >
      {children}
    </div>
  );
};

export default widget;
