import React from "react";
import Widget from "../wrapper/widget";

const noteWidget = () => {
  return (
    <Widget col={4} row={4} colStart={3} rowStart={3}>
      <div className="bg-[rgb(30,30,30)] w-full h-full grid grid-rows-[auto_1fr]">
        <div className="w-full bg-[rgb(245,202,68)] p-3">
          <p className="text-lg">📝 Notes</p>
        </div>
        <div className="w-full h-full grid grid-rows-4">
          <NoteItem
            title="Athicha Phaepaijitkul"
            description="Passionate Software Engineer specializing in full-stack web and mobile development"
          />
          <NoteItem
            title="About Me"
            description="First-Class Honors graduate with a strong focus on building high-performance web applications"
          />
          <NoteItem
            title="Work Experience"
            description="Frontend and Fullstack Developer at Innovative Extremist, Kitcharern Rungroeng LP, and Naruthee Consulting"
          />
          <NoteItem
            title="Technical Skills"
            description="Proficient in React, Next.js, Node.js, TypeScript, MongoDB, Docker, Python, and modern web development practices"
          />
        </div>
      </div>
    </Widget>
  );
};

export default noteWidget;

const NoteItem = ({ title, description }) => {
  return (
    <div className="w-full border-t border-gray-500/30 p-2">
      <p className="text-sm font-semibold mb-1">{title}</p>
      <p className="text-sm text-white/60">{description}</p>
    </div>
  );
};
