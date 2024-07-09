import type { Metadata } from "next";
import { Inter, Inria_Serif } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const inria_serif = Inria_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inria-serif",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Savory Sips",
  description: "Elevate your wine experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inria_serif.variable}`}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
