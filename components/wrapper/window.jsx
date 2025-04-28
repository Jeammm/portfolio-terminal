"use client"; // needed if you are using it in Next.js app router

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export default function Window({
  children,
  w,
  h,
  className,
  title = "visitor@terminal.athicha.dev",
  hideTitle = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 70 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.5,
      }}
      className={cn([
        "grid grid-rows-[auto_1fr] bg-background overflow-hidden rounded-xl border border-[#787878]",
        w || " w-[90vw]",
        h || "h-[85vh]",
        className,
      ])}
    >
      {hideTitle ? null : (
        <div className="w-full bg-[#231B2E] h-[30px] flex items-center px-2 relative">
          <div className="group flex gap-2">
            <button className="cursor-auto w-3 h-3 bg-red-500 rounded-full relative">
              <Link href="/desktop">
                <p className="hidden group-hover:block text-xs font-semibold absolute top-[-3px] left-[3px] text-black">
                  x
                </p>
              </Link>
            </button>
            <button className="cursor-auto w-3 h-3 bg-yellow rounded-full relative">
              <p className="hidden group-hover:block text-sm font-semibold absolute top-[-5px] left-[3px] text-black">
                -
              </p>
            </button>
            <button className="cursor-auto w-3 h-3 bg-green rounded-full relative">
              <p className="hidden group-hover:block text-xs font-semibold absolute top-[-0.2px] left-[2.5px] text-black">
                ^
              </p>
            </button>
          </div>
          <p className="text-sm absolute left-1/2 transform -translate-x-1/2 text-[#c0c0c0]">
            {title}
          </p>
        </div>
      )}
      <div className="overflow-scroll">{children}</div>
    </motion.div>
  );
}
