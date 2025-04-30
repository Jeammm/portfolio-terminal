import React from "react";
import Widget from "../wrapper/widget";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const pictureWidget = ({
  col = 2,
  row = 3,
  colStart = 0,
  rowStart = 3,
  imgSrc,
}) => {
  const pathname = usePathname();

  return (
    <Widget
      col={col}
      row={row}
      colStart={colStart}
      rowStart={rowStart}
      className={cn([
        pathname !== "/desktop"
          ? "filter grayscale-[60%] sepia-[30%] transition-filter"
          : "",
      ])}
    >
      <Image src={imgSrc} className="w-full h-full object-cover" alt="widget" />
    </Widget>
  );
};

export default pictureWidget;
