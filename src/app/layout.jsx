import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientKlaro from "@/components/ClientKlaro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bildungsnest",
  description: "Bildungsnest Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientKlaro />
        {children}
      </body>
    </html>
  );
}
