import React from "react";
import Widget from "../wrapper/widget";

const noteWidget = ({
  col = 4,
  row = 4,
  colStart = 3,
  rowStart = 3,
  notes = [],
}) => {
  return (
    <Widget col={col} row={row} colStart={colStart} rowStart={rowStart}>
      <div className="bg-[rgb(30,30,30)] w-full h-full grid grid-rows-[auto_1fr]">
        <div className="w-full bg-[rgb(245,202,68)] p-3">
          <p className="text-lg">📝 Notes</p>
        </div>
        <div className="w-full h-full grid">
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
