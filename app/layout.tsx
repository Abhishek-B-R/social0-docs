import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
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

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${GeistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <RootProvider>
          <DocsNavbar />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
