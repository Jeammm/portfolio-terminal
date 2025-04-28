import React from "react";
import Widget from "../wrapper/widget";
import Image from "next/image";
import me from "@/public/me.jpg";

const pictureWidget = () => {
  return (
    <Widget col={2} row={3} colStart={0} rowStart={3}>
      <Image src={me} className="w-full h-full object-cover" />
    </Widget>
  );
};

export default pictureWidget;
