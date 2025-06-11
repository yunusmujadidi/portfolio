import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./../globals.css";
import { cn } from "@/lib/utils";
import Navbar from "../../components/navbar";
import { Analytics } from "@vercel/analytics/react";

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const PantonFont = localFont({
  src: "../../public/panton.ttf",
  variable: "--font-panton",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://yynn.me"),
  title: {
    default: "yynn portfolio",
    template: "%s | yynn portfolio",
  },
  description: "Software Engineer.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        MainFont.className,
        PantonFont.variable,
        "max-w-2xl flex flex-col md:flex-row mx-4 mt-8 sm:mx-auto"
      )}
    >
      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <Navbar />
        {children}
        <Analytics />
      </div>
    </div>
  );
}
