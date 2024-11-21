import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import icon from "@/public/logo.png";

const pixelOperator = localFont({
  src: "./fonts/PixelOperator-Bold.ttf",
  variable: "--font-pixel-operator",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Sunnyside",
  icons: icon.src,
  description: "Sunnyside",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelOperator.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
