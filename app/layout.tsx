import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
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
    default: `${siteData.businessName} | Continuous Gutters in Southern Oregon`,
    template: `%s | ${siteData.businessName}`
  },
  description: siteData.description,
  keywords: [
    "Southern Oregon continuous gutters",
    "Southern Oregon seamless gutters",
    "gutter installation Southern Oregon",
    "gutter replacement Southern Oregon",
    "downspouts Southern Oregon",
    "gutter protection Southern Oregon",
    ...siteData.seoServices
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${siteData.businessName} | Continuous Gutters in Southern Oregon`,
    description: siteData.description,
    url: siteData.siteUrl,
    siteName: siteData.businessName,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.businessName} | Continuous Gutters in Southern Oregon`,
    description: siteData.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
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
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
