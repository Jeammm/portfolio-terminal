import React from "react";
import Widget from "../wrapper/widget";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { FolderClosed } from "lucide-react";

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
            "w-full py-2 px-3 transition-colors duration-200 ease-in-out",
            pathname === "/desktop"
              ? "bg-[rgb(245,202,68)]"
              : "bg-white/30 backdrop-blur-2xl",
          ])}
        >
          <div className="flex items-center gap-3">
            <FolderClosed strokeWidth={1.5}/>
            <p className="text-lg">Notes</p>
          </div>
        </div>
        <div
          className={cn([
            "grid grid-rows-5 w-full h-full transition-colors duration-200 ease-in-out pt-2",
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
    <div className="w-full border-t border-gray-500/30 px-2 pt-1">
      <p className="text-xs font-semibold mb-1">{title}</p>
      <p className="text-xs text-white/60">{description}</p>
    </div>
  );
};
