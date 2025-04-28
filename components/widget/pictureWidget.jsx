import React from "react";
import Widget from "../wrapper/widget";
import Image from "next/image";

const pictureWidget = ({ col = 2, row = 3, colStart = 0, rowStart = 3, imgSrc }) => {
  return (
    <Widget col={col} row={row} colStart={colStart} rowStart={rowStart}>
      <Image src={imgSrc} className="w-full h-full object-cover" />
    </Widget>
  );
};

export default pictureWidget;
