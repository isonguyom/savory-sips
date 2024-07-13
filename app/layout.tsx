import type { Metadata } from "next";
import { Inter, Inria_Serif } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext"; // Adjust the path as needed

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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inria_serif.variable}`}>
        <CartProvider>
          <TopNav />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
