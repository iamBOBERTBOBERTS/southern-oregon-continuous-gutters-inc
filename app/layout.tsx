import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { siteData } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: `${siteData.businessName} | Seamless Gutter Installation`,
    template: `%s | ${siteData.businessName}`
  },
  description:
    "Premium seamless gutter installation, gutter replacement, gutter protection, downspouts, and exterior water management for Southern Oregon homes.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteData.businessName,
    description:
      "Seamless gutter installation, gutter replacement, gutter protection, and downspouts for Southern Oregon homeowners.",
    url: siteData.siteUrl,
    siteName: siteData.businessName,
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} bg-ink text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
