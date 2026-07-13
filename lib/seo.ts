import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_DOCS_URL ?? "https://docs.social0.app";

export const siteName = "Social0 Docs";
export const siteDescription =
  "Official documentation for Social0 — guides for scheduling, publishing, and managing posts across X, Instagram, LinkedIn, TikTok, YouTube, and more.";

export const ogImage = {
  url: "/og-image.jpg",
  width: 1024,
  height: 682,
  alt: "Social0 — Post and schedule content to all platforms",
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl.replace(/\/$/, "")}${normalized}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} | ${siteName}`;
  const image = {
    url: absoluteUrl(ogImage.url),
    width: ogImage.width,
    height: ogImage.height,
    alt: ogImage.alt,
  };

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: "@social0_app",
      creator: "@social0_app",
      images: [image.url],
    },
  };
}

export function buildDocsPageMetadata(
  title: string,
  description: string,
  slug: string[],
): Metadata {
  const path = slug.length === 0 ? "/docs" : `/docs/${slug.join("/")}`;
  return buildPageMetadata({ title, description, path });
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Social0",
    url: "https://social0.app",
    logo: absoluteUrl("/favicon-light.png"),
    image: absoluteUrl(ogImage.url),
    sameAs: ["https://x.com/social0_app"],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    image: absoluteUrl(ogImage.url),
    publisher: buildOrganizationJsonLd(),
    inLanguage: "en",
  };
}

export function buildTechArticleJsonLd(input: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    publisher: buildOrganizationJsonLd(),
    inLanguage: "en",
  };
}
