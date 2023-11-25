"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Countdown from "@/components/countdown";
import Footer from "@/components/footer";
import Head from "next/head";

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

  return fontLoaded ? (
    <>
      <Head>
        <title>4762 Armada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div
          className={`fixed inset-0 bg-black opacity-50 ${
            isSidebarOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
        <div className="header fixed h-20 left-0 top-0 z-10 w-full flex items-center justify-between pr-2 pl-2">
          <Countdown />
          <span
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="border-l-4 border-white pl-2 text-blue-600"
          >
            {"Menu"}
          </span>
        </div>
        <div className="grid text-left lg:w-8/12  pt-20 pb-60 mb-40">
          <div className="text-onchain">
            <p className="c4 title mb-6" id="h.aqyw0zgiuvt4">
              <span className="c7">Why On-Chain?</span>
            </p>
            <p className="c1">
              <span className="c0">
                Because we&rsquo;re Punks - we don&rsquo;t ask for permission
                and we don&rsquo;t depend on &ldquo;trusted third
                parties.&rdquo; Your Punks will be perpetually secured on the
                Ethereum network, representing everlasting value and
                transforming each piece into a prized collectible asset.
                We&rsquo;re not building a PFP collection, we&rsquo;re building
                a collectible of legendary quality and establishing our
                Legacies.
              </span>
            </p>
            <p className="c1 c2">
              <span className="c0"></span>
            </p>
            <p className="c1">
              <span className="c0">
                -On-chain means you don&rsquo;t rely on a trusted third party to
                give you permission to view your NFT.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                -On-chain means you don&rsquo;t risk Web2 technology securing
                the value of your assets.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                -On-chain means your NFT itself hosts all its media and data,
                ensuring immutability.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                -On-chain means as long as the blockchain exists, your NFT
                collection remains intact.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                -On-chain means increased liquidity and value added.
              </span>
            </p>
            <p className="c1">
              <span className="c0">
                -On-chain means permanence. We&rsquo;re here to stay.
              </span>
            </p>
            <p className="c1 c2">
              <span className="c0"></span>
            </p>
            <p className="c1">
              <span className="c0">
                On-chain means your PUNK Armada NFTs are immortal and your
                metadata can never be taken from you. On-chain = Sovereignty.
              </span>
            </p>
            <p className="c1 c2">
              <span className="c0"></span>
            </p>
            <p className="c1">
              <span>According to </span>
              <a href="https://github.com/1devNdogs">1devndogs</a>
              <span className="c0">
                , the developer for the PUNK Armada collection, there are five
                key advantages to going on-chain with an NFT collection:
              </span>
            </p>
            <p className="c1 c2">
              <span className="c0"></span>
            </p>
            <p className="c1">
              <span className="c3">
                -Immutable Proof of Ownership and Authenticity:
              </span>
              <span className="c0">
                &nbsp;On-chain NFTs are stored directly on a blockchain, which
                means that the ownership and transaction history of each NFT is
                permanently and publicly verifiable. This makes it much easier
                to prove the authenticity of an NFT and track its ownership
                history, a key aspect for collectors and artists alike
              </span>
            </p>
            <p className="c1 c2">
              <span className="c0"></span>
            </p>
            <p className="c1">
              <span className="c3">
                -Increased Security and Reduced Fraud Risk:
              </span>
              <span className="c0">
                &nbsp;Because on-chain NFTs exist within the secure framework of
                a blockchain, they are less susceptible to fraud and
                duplication. Off-chain NFTs, on the other hand, rely on external
                systems to prove ownership, which can be more vulnerable to
                hacking and other security breaches.
              </span>
            </p>
            <p className="c1 c2">
              <span className="c0"></span>
            </p>
            <p className="c1">
              <span className="c3">
                -Decentralization and Elimination of Intermediaries:
              </span>
              <span className="c0">
                &nbsp;On-chain NFTs benefit from the decentralized nature of
                blockchain technology. This means there is no need for a central
                authority or intermediary to validate transactions or manage the
                NFTs, leading to a more direct and transparent relationship
                between creators and collectors.
              </span>
            </p>
            <p className="c1 c2">
              <span className="c0"></span>
            </p>
            <p className="c1">
              <span className="c3">-Permanence and Durability:</span>
              <span className="c0">
                &nbsp;On-chain data is typically more permanent because it is
                distributed across multiple nodes in a blockchain network. This
                reduces the risk of data loss due to server failure or company
                shutdown, a problem that can plague off-chain NFTs stored on
                centralized servers.
              </span>
            </p>
            <p className="c1 c2">
              <span className="c0"></span>
            </p>
            <p className="c1">
              <span className="c3">-Smart Contract Integration: </span>
              <span className="c0">
                On-chain NFTs can incorporate smart contracts, which are
                self-executing contracts with the terms of the agreement
                directly written into code. This allows for innovative features
                like royalties for artists on secondary sales, automatic
                donations to charities, or unlocking of additional digital
                content, adding unique value to the NFTs.
              </span>
            </p>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  ) : (
    "..."
  );
}
