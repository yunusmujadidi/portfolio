import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./../globals.css";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import Navbar from "../Navbar";
import { Analytics } from "@vercel/analytics/react";
import { usePathname } from "next/navigation";

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const PantonFont = localFont({
  src: "../../public/panton.ttf",
  variable: "--font-panton",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://yynoes.me"),
  title: {
    default: "yynoes portfolio",
    template: "%s | yynoes portfolio",
  },
  description: "Software Engineer.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <div
        className={cn(
          MainFont.className,
          PantonFont.variable,
          "max-w-2xl flex flex-col md:flex-row mt-8 mx-auto justify-center items-center lowercase"
        )}
      >
        <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
        </div>
      </div>
    </ViewTransitions>
  );
}
