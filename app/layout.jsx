"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import WeatherWidget from "@/components/widget/weatherWidget";
import PictureWidget from "@/components/widget/pictureWidget";
import NoteWidget from "@/components/widget/noteWidget";
import StickerWidget from "@/components/widget/stickerWidget";

import macbookBg from "@/public/macbook-bg.jpg";
import terminalIcon from "@/public/terminal-icon.png";
import trashIcon from "@/public/trash-icon.png";
import dockerIcon from "@/public/docker-icon.png";
import photoboothIcon from "@/public/photobooth-icon.png";
import githubIcon from "@/public/github-icon.png";
import goodooIcon from "@/public/goodoo-icon.png";
import archeryTrackerIcon from "@/public/archerytracker-icon.png";

import me from "@/public/ME.JPG";
import cat from "@/public/cat.JPG";

const inter = Inter({ subsets: ["latin"] });

const DESKTOP_ICON = [
  { name: "Terminal", icon: terminalIcon, path: "terminal", external: false },
  {
    name: "Photo Booth",
    icon: photoboothIcon,
    path: "photobooth",
    external: false,
  },
  {
    name: "Github",
    icon: githubIcon,
    path: "https://github.com/Jeammm",
    external: true,
  },
  {
    name: "Goodoo",
    icon: goodooIcon,
    path: "https://goodo-angular.vercel.app",
    external: true,
  },
  {
    name: "Archery Tracker",
    icon: archeryTrackerIcon,
    path: "https://www.archery-tracker.online/",
    external: true,
  },
];

const DOCK_ICON = [
  { name: "Terminal", icon: terminalIcon, path: "terminal", external: false },
  { name: "Docker", icon: dockerIcon, path: "docker", external: false },
  {
    name: "Photo Booth",
    icon: photoboothIcon,
    path: "photobooth",
    external: false,
  },
  {
    name: "Github",
    icon: githubIcon,
    path: "https://github.com/Jeammm",
    external: true,
  },
  {
    name: "Goodoo",
    icon: goodooIcon,
    path: "https://goodo-angular.vercel.app",
    external: true,
  },
  {
    name: "Archery Tracker",
    icon: archeryTrackerIcon,
    path: "https://www.archery-tracker.online/",
    external: true,
  },
  { name: "Separator", icon: "", path: "" },
  { name: "Trash", icon: trashIcon, path: "trash", external: false },
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
  {
    title: "Contact Information",
    description: "Email: athicha.phjkl@gmail.com | Phone: (+66) 90 923 7174",
  },
];

export default function RootLayout({ children }) {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(null);

  const openExternalLink = (path) => {
    const width = 800;
    const height = 600;

    // Calculate center position
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    window.open(
      path,
      "_blank",
      `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars`
    );
  };

  const onClickItem = (path, external) => {
    if (activeItem === path) {
      if (external) {
        router.push("/desktop");
        openExternalLink(path);
      } else {
        router.push(`${path}`);
      }

      setActiveItem(null);
    } else {
      setActiveItem(path);
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
        <div className="flex w-screen">
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
            <StickerWidget notes={noteItems} />
          </div>

          <div className="flex-1 w-full h-full p-3 grid [grid-auto-flow:column] [grid-template-rows:repeat(auto-fill,minmax(90px,1fr))] justify-end gap-4">
            {DESKTOP_ICON.map((item) => (
              <button
                key={`item-${item.name}-desktop`}
                onClick={(event) => {
                  event.stopPropagation();
                  onClickItem(item.path, item.external);
                }}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={item.icon}
                  className={`w-[80px] h-[80px] object-contain ${
                    activeItem === item.path
                      ? "border bg-black/40 rounded-md border-[#efefef]/70"
                      : "border border-transparent"
                  }`}
                  alt={item.name}
                />
                <p
                  className={`break-all mt-1 font-semibold text-xs text-white text- ${
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
                  if (item.external) {
                    router.push("desktop");
                    openExternalLink(item.path);
                  } else {
                    router.push(item.path);
                  }
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
