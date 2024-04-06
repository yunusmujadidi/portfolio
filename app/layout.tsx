import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/GrainEffect";
import Cursor from "@/components/Cursor";

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const PantonFont = localFont({
  src: "../public/panton.ttf",
  variable: "--font-panton",
});

export const metadata: Metadata = {
  title: "Ahmad Yunus Mujadidi Portfolio",
  description: "Ahmad Yunus Mujadidi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
          PantonFont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
