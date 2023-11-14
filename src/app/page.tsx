"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Countdown from "./countdown";
import Footer from "./footer";
import moment from "moment";
import Sidebar from "./sidebar";

export default function Home() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css?family=Press+Start+2P";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    fontLink.onload = () => {
      setFontLoaded(true);
    };
  }, []);

  const targetTime = moment.utc("2023-10-25T13:00:00");

  return fontLoaded ? (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div
        className={`fixed inset-0 bg-black opacity-50 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <div className="fixed h-20 left-0 top-0 z-10 w-full flex items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {/* Contenedor para el texto, centrado */}
        <Countdown targetTime={targetTime} />

        {/* Contenedor para el botón, al final */}
        <img
          onClick={() => setIsSidebarOpen(true)}
          src="/menu.png"
          width={24}
          style={{ filter: "invert(100%)" }}
        ></img>
      </div>
      <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-2 pt-60 pb-60 mb-40">
        <a
          href="https://checker.4762armada.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            disabled
            className="eightbit-btn"
            type="button"
            style={{ color: "grey", width: "20.3em" }}
          >
            <p>Address Checker</p>
          </button>
        </a>

        <a
          href="https://mint.4762armada.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="eightbit-btn"
            type="button"
            disabled
            style={{ color: "grey", width: "20.3em" }}
          >
            <p>Mint PFP</p>
          </button>
        </a>
      </div>
      <Footer></Footer>
    </main>
  ) : (
    "..."
  );
}
