"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import WeatherWidget from "@/components/widget/weatherWidget";
import PictureWidget from "@/components/widget/pictureWidget";
import NoteWidget from "@/components/widget/noteWidget";

import macbookBg from "@/public/macbook-bg.jpg";
import terminalIcon from "@/public/terminal-icon.png";
import trashIcon from "@/public/trash-icon.png";
import dockerIcon from "@/public/docker-icon.png";
import photoboothIcon from "@/public/photobooth-icon.png";

import me from "@/public/ME.JPG";
import cat from "@/public/cat.JPG";

const inter = Inter({ subsets: ["latin"] });

const DESKTOP_ICON = [
  { name: "Terminal", icon: terminalIcon, path: "terminal" },
  { name: "Photo Booth", icon: photoboothIcon, path: "photobooth" },
];

const DOCK_ICON = [
  { name: "Terminal", icon: terminalIcon, path: "terminal" },
  { name: "Docker", icon: dockerIcon, path: "docker" },
  { name: "Photo Booth", icon: photoboothIcon, path: "photobooth" },
  { name: "Separator", icon: "", path: "" },
  { name: "Trash", icon: trashIcon, path: "trash" },
];

const noteItems = [
  {
    title: "Athicha Phaepaijitkul",
    description:
      "Passionate Software Engineer specializing in full-stack web and mobile development",
  },
  {
    title: "About Me",
    description:
      "First-Class Honors graduate with a strong focus on building high-performance web applications",
  },
  {
    title: "Work Experience",
    description:
      "Frontend and Fullstack Developer at Innovative Extremist, Kitcharern Rungroeng LP, and Naruthee Consulting",
  },
  {
    title: "Technical Skills",
    description:
      "Proficient in React, Next.js, Node.js, TypeScript, MongoDB, Docker, Python, and modern web development practices",
  },
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
        <div className="grid grid-cols-[1fr_auto] w-screen">
          <div className="w-full h-full p-3 grid auto-rows-[90px] grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-3.5">
            <WeatherWidget />
            <PictureWidget
              col={2}
              row={2}
              colStart={5}
              rowStart={1}
              imgSrc={cat}
            />
            <PictureWidget imgSrc={me} />
            <NoteWidget notes={noteItems} />
          </div>

          <div className="w-full h-full p-3 grid [grid-auto-flow:column] [grid-template-rows:repeat(auto-fill,minmax(90px,1fr))] justify-end gap-3">
            {DESKTOP_ICON.map((item) => (
              <button
                key={`item-${item.name}-desktop`}
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
                  alt={item.name}
                />
                <p
                  className={`mt-1 font-semibold text-sm text-white text- ${
                    activeItem === item.path ? "bg-[#2556CA] rounded-md" : ""
                  }`}
                >
                  {item.name}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl mb-2 p-1 border border-[#efefef]/30 flex justify-center items-center">
          {DOCK_ICON.map((item) => {
            if (item.name === "Separator") {
              return (
                <button
                  key={`item-${item.name}-dock`}
                  className="mx-4 w-[1px] h-[50px] bg-white/20"
                />
              );
            }
            return (
              <button
                key={`item-${item.name}-dock`}
                onClick={(event) => {
                  event.stopPropagation();
                  router.push(item.path);
                }}
                className="hover:scale-110 transition-all hover:-translate-y-2"
              >
                <Image
                  src={item.icon}
                  className={`w-[65px] h-[65px] object-contain`}
                  alt={item.name}
                />
              </button>
            );
          })}
        </div>
        <div className="fixed top-10">{children}</div>
      </body>
    </html>
  );
}
