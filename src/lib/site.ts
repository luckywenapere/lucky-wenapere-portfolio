const fallbackSiteUrl = "https://lucky-wenapere.vercel.app";

function normalizeSiteUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  fallbackSiteUrl;

export const siteConfig = {
  name: "Oyin Wenapere",
  title: "Oyin Wenapere",
  description:
    "Founder of Urganize. Engineer, creative operator, and builder working across product, software, brand, and media.",
  url: normalizeSiteUrl(siteUrl),
  locale: "en_US",
  email: "wenapere@urganize.app",
  keywords: [
    "Oyin Wenapere",
    "Urganize",
    "founder",
    "engineer",
    "creative operator",
    "builder",
    "product",
    "software",
    "writing",
  ],
  xHandle: "@oyinwenapere",
  socialLinks: [
    "https://github.com/luckywenapere",
    "https://x.com/oyinwenapere",
    "https://instagram.com/oyinwenapere",
    "https://www.linkedin.com/in/oyinwenapere",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export const defaultOpenGraphImage = {
  url: absoluteUrl("/img/hero-image.png"),
  width: 1200,
  height: 630,
  alt: siteConfig.name,
} as const;
