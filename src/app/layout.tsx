import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbars";
import Footer from "@/components/Footer";

import FavIcon from "@/assets/favicon.ico";
import OGImage from "@/assets/og.png";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.METADATABASE!),
  title: "Protocol Pawns - Play Chess Fully On-Chain",
  description:
    "Play chess fully on chain powered by Near Protocol and the BOS.",
  keywords: [
    "chess",
    "near protocol",
    "blockchain",
    "on-chain",
    "play",
    "game",
    "protocol pawns",
    "BOS",
  ],
  icons: {
    icon: FavIcon.src,
  },
  appleWebApp: {
    title: "Protocol Pawns",
    statusBarStyle: "black",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    images: [
      {
        url: OGImage.src,
        width: 1920,
        height: 1080,
        alt: "Protocol Pawns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ProtocolPawns",
    images: [
      {
        url: OGImage.src,
        alt: "Protocol Pawns",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${inter.className} bg-black`}>
        <div className="w-full h-20 flex items-center">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
