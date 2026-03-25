import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lucky Wenapere",
    template: "%s | Lucky Wenapere",
  },
  description:
    "Founder of Urganize. Engineer, creative operator, and builder working across product, software, brand, and media.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${sourceSerif.variable} antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const storedTheme = localStorage.getItem("lucky-theme");
              const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const theme =
                storedTheme === "dark" || storedTheme === "light"
                  ? storedTheme
                  : systemPrefersDark
                    ? "dark"
                    : "light";
              document.documentElement.dataset.theme = theme;
            } catch {}
          `}
        </Script>
        {children}

        {/* Vercel Analytics */}
        <Analytics />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MB6JBGDBM1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MB6JBGDBM1');
          `}
        </Script>
      </body>
    </html>
  );
}
