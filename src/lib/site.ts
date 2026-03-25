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
  name: "Lucky Wenapere",
  title: "Lucky Wenapere",
  description:
    "Founder of Urganize. Engineer, creative operator, and builder working across product, software, brand, and media.",
  url: normalizeSiteUrl(siteUrl),
  locale: "en_US",
  email: "luckywenapere@gmail.com",
  keywords: [
    "Lucky Wenapere",
    "Urganize",
    "founder",
    "engineer",
    "creative operator",
    "builder",
    "product",
    "software",
    "writing",
  ],
  xHandle: "@luckydidthis",
  socialLinks: [
    "https://github.com/luckywenapere",
    "https://x.com/luckydidthis",
    "https://instagram.com/luckydidthis",
    "https://ng.linkedin.com/in/lucky-wenapere",
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
