"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Countdown from "./countdown";

export default function Home() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css?family=Press+Start+2P";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    fontLink.onload = () => {
      setFontLoaded(true);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Countdown />
        </p>
      </div>

      <div className="mb-60 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <button
            className="rpgui-button ml-1 mr-1 text-center"
            type="button"
            style={{ width: "20.3em" }}
          >
            <p>Home</p>
          </button>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <button
            style={{ width: "20.3em" }}
            className="rpgui-button ml-1 mr-1 text-center"
            type="button"
          >
            <p>Address Checker</p>
          </button>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <button
            style={{ width: "20.3em" }}
            className="rpgui-button ml-1 mr-1 text-center"
            type="button"
          >
            <p>Mint Corsair</p>
          </button>
        </a>
      </div>
    </main>
  );
}
