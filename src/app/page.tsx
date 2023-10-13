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
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Countdown />
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/cook_4762.gif"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
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
