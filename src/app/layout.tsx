import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: {
    default: "voxxxiee — Software Engineer",
    template: "%s | voxxxiee",
  },
  description:
    "Portfolio of Gilian Kranendonk (voxxxiee), a software engineer building web apps, APIs and product systems.",
  keywords: [
    "voxxxiee",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Frontend Engineer",
    "Portfolio",
  ],
  authors: [{ name: "voxxxiee" }],
  creator: "voxxxiee",
  openGraph: {
    title: "voxxxiee — Software Engineer",
    description:
      "Gilian Kranendonk builds web apps, APIs and product systems.",
    type: "website",
    locale: "en_US",
    siteName: "voxxxiee Portfolio",
  },
  twitter: {
    card: "summary",
    title: "voxxxiee — Software Engineer",
    description:
      "Gilian Kranendonk builds web apps, APIs and product systems.",
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
  themeColor: "#080a0f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
