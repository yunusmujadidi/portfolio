import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Maxwidthwrapper from "@/lib/MaxWidthWrapper";
import Navbar from "./Navbar";

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
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
      <body className={cn(MainFont.className, PantonFont.variable)}>
        <Maxwidthwrapper>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
          </main>
        </Maxwidthwrapper>
      </body>
    </html>
  );
}
