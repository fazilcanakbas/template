import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digivisor",
  description: "Focus on your next breakthrough. We'll handle the shadow work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>
        <HeaderTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
