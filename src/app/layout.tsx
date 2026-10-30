import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const description =
  "Gilian (Voxxai), a software engineer in the Netherlands. TypeScript, React, Next.js, Laravel, and Postgres.";

export const metadata: Metadata = {
  title: {
    default: "Voxxai — Software engineer",
    template: "%s | Voxxai",
  },
  description,
  authors: [{ name: "Voxxai" }],
  creator: "Voxxai",
  openGraph: {
    title: "Voxxai — Software engineer",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Voxxai",
    url: "https://voxxai.dev",
    images: [
      {
        url: "/castle-portrait.webp",
        alt: "Vox, the original character Voxxai uses as an avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Voxxai — Software engineer",
    description,
    images: ["/castle-portrait.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  metadataBase: new URL("https://voxxai.dev"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-ink font-sans text-[1.0625rem] leading-7 text-fg antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
