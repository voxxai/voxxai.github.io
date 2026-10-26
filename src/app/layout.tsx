import type { Metadata } from "next";
import { Chakra_Petch, Orbitron } from "next/font/google";
import "../index.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "voxxai — Software Engineer",
    template: "%s | voxxai",
  },
  description:
    "Portfolio of Gilian (voxxai), a software engineer building web apps, APIs and product systems.",
  keywords: [
    "voxxai",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Frontend Engineer",
    "Portfolio",
    "Voxxai",
    "VOX",
    "Castle",
  ],
  authors: [{ name: "voxxai" }],
  creator: "voxxai",
  openGraph: {
    title: "voxxai — Software Engineer",
    description:
      "Gilian builds web apps, APIs and product systems.",
    type: "website",
    locale: "en_US",
    siteName: "voxxai Portfolio",
  },
  twitter: {
    card: "summary",
    title: "voxxai — Software Engineer",
    description:
      "Gilian builds web apps, APIs and product systems.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://voxxai.dev"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0d" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0d" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${chakra.variable}`} suppressHydrationWarning>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
