import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Maxwidthwrapper from "@/lib/MaxWidthWrapper";

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const PantonFont = localFont({
  src: "../public/panton.ttf",
  variable: "--font-panton",
});

<div>
  asdasdas<h1>asdasd</h1>
</div>;
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
            {children}
          </main>
        </Maxwidthwrapper>
      </body>
    </html>
  );
}
