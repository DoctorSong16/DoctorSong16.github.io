import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Ibarra_Real_Nova } from "next/font/google";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

// const almendra = Almendra({
//   subsets: ["latin"],
//   variable: "--font-almendra",
//   weight: ["400", "700"],
// })

const ibarraRealNova = Ibarra_Real_Nova({
  subsets: ["latin"],
  variable: "--font-ibarra-real-nova",
  weight: ["400", "700"],
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dundu Does Stuff",
  description: "My corner of the internet.",
};

// Menu items as an array of Record<string, string>
const menuItems = [
  {name: "Home", path: "/"},
  {name: "Blog", path: "/post"},
  {name: "About", path: "/about"},
  {name: "Contact", path: "/contact"}
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="en">
      <body
        className={`${ibarraRealNova.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <Navbar menuItems={menuItems} currentPage={"Home"}/>
        {children}
        <Footer name="dundu does stuff" year={2024}/>
      </body>
    </html>
  );
}
