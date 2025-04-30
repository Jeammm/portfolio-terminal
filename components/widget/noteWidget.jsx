import React from "react";
import Widget from "../wrapper/widget";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const noteWidget = ({
  col = 4,
  row = 4,
  colStart = 3,
  rowStart = 3,
  notes = [],
}) => {
  const pathname = usePathname();

  return (
    <Widget col={col} row={row} colStart={colStart} rowStart={rowStart}>
      <div className={cn(["w-full h-full grid grid-rows-[auto_1fr]"])}>
        <div
          className={cn([
            "w-full p-3 transition-colors duration-200 ease-in-out",
            pathname === "/desktop"
              ? "bg-[rgb(245,202,68)]"
              : "bg-white/30 backdrop-blur-2xl",
          ])}
        >
          <p className="text-lg">📝 Notes</p>
        </div>
        <div
          className={cn([
            "w-full h-full grid transition-colors duration-200 ease-in-out",
            pathname === "/desktop"
              ? "bg-[rgb(30,30,30)]"
              : "bg-black/10 backdrop-blur-2xl",
          ])}
        >
          {notes.map((note, index) => (
            <NoteItem
              key={index}
              title={note.title}
              description={note.description}
            />
          ))}
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
