import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelrhman - AI Engineer & Software Developer",
  description: "Portfolio of Abdelrhman, an AI Engineer and Software Developer specializing in machine learning, web development, and cloud technologies.",
  keywords: "AI Engineer, Software Developer, Machine Learning, Web Development, Portfolio",
  authors: [{ name: "Abdelrhman" }],
  openGraph: {
    title: "Abdelrhman - AI Engineer & Software Developer",
    description: "Portfolio of Abdelrhman, an AI Engineer and Software Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
