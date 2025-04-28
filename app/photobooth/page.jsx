"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Window from "../../components/wrapper/window";
import cat from "@/public/cat.JPG";

const page = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    // Open the camera
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        streamRef.current = stream; // Save the stream so we can stop it later
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((err) => {
        console.error("Error accessing camera:", err);
      });

    // Cleanup function to close the camera when component unmounts
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [videoRef]);

  return (
    <Window
      className="bg-black/20 backdrop-blur-3xl w-[min(960px,90vw)]"
      title="Photo Booth"
    >
      <div className="h-full grid grid-rows-[1fr_auto_auto] overflow-hidden">
        <div className="relative flex items-center justify-center bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute bottom-0 w-full backdrop-blur-3xl bg-black/60">
          <div className="h-20 w-full  px-2 overflow-hidden flex items-center">
            <div className="overflow-scroll flex gap-2">
              <ImagePreview image={cat} />
              <ImagePreview image={cat} />
              <ImagePreview image={cat} />
              <ImagePreview image={cat} />
              <ImagePreview image={cat} />
            </div>
          </div>
          <div className="flex justify-center p-1 w-full bg-black/30">
            <button className="relative text-3xl bg-red-500 w-14 h-14 rounded-full">
              <span className="top-[50%] left-[50%] -translate-x-[50%] -translate-y-[55%] absolute grayscale">
                📷
              </span>
            </button>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default page;

const ImagePreview = ({ image }) => {
  return (
    <div className="shrink-0">
      <Image
        src={image}
        alt="Preview"
        className="h-16 w-auto aspect-video object-cover rounded-sm"
      />
    </div>
  );
};
