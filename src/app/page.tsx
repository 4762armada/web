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
  const [buttonText1, setButtonText1] = useState("Address Checker");
  const [buttonText2, setButtonText2] = useState("Mint Punk Armada");

  const handleMouseEnter1 = () => {
    setButtonText1("Soon");
  };

  const handleMouseLeave1 = () => {
    setButtonText1("Address Checker");
  };

  const handleMouseEnter2 = () => {
    setButtonText2("Soon");
  };

  const handleMouseLeave2 = () => {
    setButtonText2("Mint Punk Armada");
  };

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
      <div className="header fixed h-20 left-0 top-0 z-10 w-full flex items-center justify-between pr-2 pl-2">
        <Countdown targetTime={targetTime} />
        <span
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="border-l-4 border-white pl-2 text-blue-600"
        >
          {"Menu"}
        </span>
      </div>
      <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-2 pt-60 pb-60 mb-40">
        <a
          href="#"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <button
            disabled
            className="eightbit-btn mb-4"
            type="button"
            style={{ color: "#538f40", width: "20.3em" }}
 
          >
            <p>{buttonText1}</p>
          </button>
        </a>

        <a
          href="#"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <button
            className="eightbit-btn mb-4"
            type="button"
            disabled
            style={{ color: "#538f40", width: "20.3em" }}
          >
            <p>{buttonText2}</p>
          </button>
        </a>
      </div>
      <Footer></Footer>
    </main>
  ) : (
    "..."
  );
}
