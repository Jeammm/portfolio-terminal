import "./globals.css";
import { Inter } from "next/font/google";
import macbookBg from "@/public/macbook-bg.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Terminal",
  description: "eh eh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body
        className="flex justify-center items-center h-screen bg-black overflow-hidden"
        style={{ backgroundImage: `url(${macbookBg.src})` }}
      >
        <div className="grid grid-rows-[auto_1fr] bg-background h-[90vh] overflow-hidden w-[90vw] rounded-xl border border-[#787878]">
          <div className="w-full bg-[#231B2E] h-[30px] flex items-center px-2">
            <div className="group flex gap-2">
              <button className="cursor-auto w-3 h-3 bg-red-500 rounded-full relative">
                <p className="hidden group-hover:block text-xs font-semibold absolute top-[-3px] left-[3px] text-black">
                  x
                </p>
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
              visitor@terminal.athicha.dev
            </p>
          </div>
          <div className="overflow-scroll">{children}</div>
        </div>
      </body>
    </html>
  );
}
