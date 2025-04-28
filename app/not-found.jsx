import React from "react";
import Window from "../components/wrapper/window";
import Link from "next/link";
import Image from "next/image";

import warningIcon from "@/public/warning-icon.png";

const notFound = () => {
  return (
    <Window w="w-[310px]" h="h-[350px]" className="mt-[60%]" hideTitle>
      <div className="flex flex-col items-center justify-center text-center p-6">
        <Image
          src={warningIcon}
          className="w-[100px] h-[100px]"
          alt="warning"
        />
        <h1 className="text-lg font-semibold mb-4">Access Denied</h1>
        <p className="text-sm text-gray-600 mb-2">
          You don’t have permission to view this page.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Please check your access rights or try again later.
        </p>
        <Link href="/desktop">
          <button className="px-10 py-1 rounded-md bg-[rgb(66,144,247)]">
            Go Back
          </button>
        </Link>
      </div>
    </Window>
  );
};

export default notFound;
