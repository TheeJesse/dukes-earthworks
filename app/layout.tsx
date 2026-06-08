import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dukeseathworks.com"),
  title: {
    default: "Duke's Earthworks | Professional Skid Steer Services on the Emerald Coast",
    template: "%s | Duke's Earthworks",
  },
  description:
    "Professional skid steer services in Northwest Florida. Driveways, grading, erosion control, land clearing, silt fencing, and more. Serving Destin, 30A, Milton, Pensacola, and the Emerald Coast.",
  keywords: [
    "skid steer services Milton FL",
    "driveway grading Destin FL",
    "land clearing Emerald Coast",
    "erosion control Northwest Florida",
    "silt fencing Pensacola",
    "grading contractor 30A",
    "Duke's Earthworks",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dukeseathworks.com",
    siteName: "Duke's Earthworks",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body style={{ backgroundColor: "#FAF7F2" }} className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
