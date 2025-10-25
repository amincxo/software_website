import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Rajdhani({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: "Software landing page",
  description: "Software landing page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
