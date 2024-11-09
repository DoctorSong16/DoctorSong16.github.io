import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Ibarra_Real_Nova } from "next/font/google";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibarraRealNova.variable} ${geistMono.variable} antialiased bg-maize`}
      >
        {children}
      </body>
    </html>
  );
}
