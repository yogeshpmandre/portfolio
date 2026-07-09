import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://yogeshpmandre.github.io/portfolio"
  ),

  title: "Yogesh Mandre | Senior Principal Data Analyst",

  description:
    "Senior Principal Data Analyst specializing in Analytics Engineering, AI-Ready Data Products, Snowflake, dbt, Tableau and GenAI.",

  openGraph: {
    title: "Yogesh Mandre",
    description:
      "Analytics Engineering | AI-Ready Data Products | Snowflake | dbt | Tableau | GenAI",
    url: "https://yogeshpmandre.github.io/portfolio",
    siteName: "Yogesh Mandre",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
      <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </body>
    </html>
  );
}