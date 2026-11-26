import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsNavbar } from "@/components/docs-navbar";
import {
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
  ogImage,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    site: "@social0_app",
    creator: "@social0_app",
    images: [ogImage.url],
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.png",
        type: "image/png",
      },
    ],
    apple: "/favicon-light.png",
  },
};

const jsonLd = [buildOrganizationJsonLd(), buildWebSiteJsonLd()];

// Same face as social0.app (home hero, headings, body).
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${GeistMono.variable} flex h-dvh flex-col overflow-hidden antialiased`}
      >
        <RootProvider>
          <DocsNavbar />
          <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
        </RootProvider>
      </body>
    </html>
  );
}
