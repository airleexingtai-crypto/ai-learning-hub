import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Learning Hub — Master AI Tools & Technology",
    template: "%s | AI Learning Hub",
  },
  description:
    "Comprehensive AI tutorials, guides, and insights. Learn ChatGPT, Claude, Midjourney, and more. From beginners to developers — practical, in-depth AI education.",
  keywords: [
    "AI tutorials",
    "learn AI",
    "ChatGPT guide",
    "Claude AI",
    "Midjourney tutorial",
    "artificial intelligence",
    "AI tools",
    "machine learning",
    "AI for beginners",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Learning Hub",
    title: "AI Learning Hub — Master AI Tools & Technology",
    description:
      "Comprehensive AI tutorials, guides, and insights. Practical AI education for everyone.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Learning Hub — Master AI Tools & Technology",
    description:
      "Comprehensive AI tutorials, guides, and insights. Practical AI education for everyone.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "mznaPbJk8FPygn8UlXe8TgFF5rF3QKxGZoREoNIw7sA",
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
      className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="AI Learning Hub RSS"
          href="/rss.xml"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="AI Learning Hub Atom"
          href="/atom.xml"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NPZ4BWE5VQ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NPZ4BWE5VQ', { anonymize_ip: true });
            `,
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6304085792373924"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
