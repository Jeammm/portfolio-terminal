import React, { useEffect, useState } from "react";
import Widget from "../wrapper/widget";
import { Square, TriangleRight, AppWindow } from "lucide-react";

const STICKER_STORAGE_KEY = "sticker-note";

const StickerWidget = ({
  col = 3,
  row = 2,
  colStart = 2,
  rowStart = 7,
  imgSrc,
}) => {
  const [note, setNote] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const savedNote = localStorage.getItem(STICKER_STORAGE_KEY);
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  // Save to localStorage on change
  const handleChange = (e) => {
    const { value } = e.target;
    setNote(value);
    localStorage.setItem(STICKER_STORAGE_KEY, value);
  };

  return (
    <Widget
      col={col}
      row={row}
      colStart={colStart}
      rowStart={rowStart}
      className="rounded-none shadow-lg border border-black/30"
    >
      <div className="bg-[#a2edfd] flex items-center justify-between px-3 py-0.5">
        <Square color="#64cde6" size={12} className="fill-[#bcf2fd]" />
        <div className="flex items-center gap-1">
          <TriangleRight color="#64cde6" size={12} className="fill-[#bcf2fd]" />
          <AppWindow color="#64cde6" size={12} className="fill-[#bcf2fd]" />
        </div>
      </div>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Write your note here..."
        className="bg-[#bcf2fd] w-full h-full text-start p-2 outline-none text-xs text-black resize-none"
      />
    </Widget>
  );
};

export default StickerWidget;
