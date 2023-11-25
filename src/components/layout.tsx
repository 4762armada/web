import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4762 Armada",
  description:
    "Rallying seafarers from over 100 diverse NFT projects, 4762 community is crafting the upcoming Armada of degens, artists and builders, destined to chart the course in the cycles to come.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
