"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import macbookBg from "@/public/macbook-bg.jpg";
import terminalIcon from "@/public/terminal-icon.png";

const inter = Inter({ subsets: ["latin"] });

const DESKTOP_ICON = [
  { name: "Terminal", icon: terminalIcon, path: "terminal" },
];

const DOCK_ICON = [
  { name: "Terminal", icon: terminalIcon, path: "terminal" },
  { name: "Terminal", icon: terminalIcon, path: "terminal" },
];

export default function RootLayout({ children }) {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(null);

  const onClickItem = (item) => {
    if (activeItem === item) {
      router.push(`${item}`);
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

  const onClickDesktop = () => {
    setActiveItem(null);
  };

  return (
    <html lang="en" className={`${inter.className}`}>
      <head>
        <title>🖥️ TERMINAL</title>
      </head>
      <body
        className="grid grid-rows-[1fr_auto] justify-items-center h-screen bg-black overflow-hidden"
        style={{
          backgroundImage: `url(${macbookBg.src})`,
          backgroundSize: "cover",
        }}
        onClick={() => onClickDesktop()}
      >
        <div className="w-screen h-full p-3 grid [grid-auto-flow:column] [grid-template-rows:repeat(auto-fill,minmax(90px,1fr))] justify-end gap-3">
          {DESKTOP_ICON.map((item) => (
            <button
              onClick={(event) => {
                event.stopPropagation();
                onClickItem(item.path);
              }}
            >
              <Image
                src={item.icon}
                className={`w-[80px] h-[80px] ${
                  activeItem === item.path
                    ? "border bg-black/40 rounded-md border-[#efefef]/70"
                    : "border border-transparent"
                }`}
              />
              <p
                className={`mt-1 font-semibold text-sm text-white text- ${
                  activeItem === item.path ? "bg-[#2556CA] rounded-md" : ""
                }`}
              >
                Terminal
              </p>
            </button>
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl mb-2 pt-1 px-1 border border-[#efefef]/30">
          {DOCK_ICON.map((item) => (
            <button
              onClick={(event) => {
                event.stopPropagation();
                router.push(item.path);
              }}
              className="hover:scale-110 transition-all hover:-translate-y-2"
            >
              <Image src={item.icon} className={`w-[65px] h-[65px] `} />
            </button>
          ))}
        </div>
        <div className="fixed top-10">{children}</div>
      </body>
    </html>
  );
}
