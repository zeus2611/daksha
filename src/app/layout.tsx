import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { SanityLive } from "@/sanity/lib/live";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://daksha.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Daksha — Full-Service Digital Agency",
  description:
    "We build mobile apps, web platforms, brands, and growth systems for startups and solopreneurs.",
  keywords: ["digital agency", "web development", "mobile app", "flutter", "next.js", "branding"],
  openGraph: {
    title: "Daksha — Full-Service Digital Agency",
    description: "We build mobile apps, web platforms, brands, and growth systems for startups and solopreneurs.",
    type: "website",
    url: siteUrl,
    siteName: "Daksha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daksha — Full-Service Digital Agency",
    description: "We build mobile apps, web platforms, brands, and growth systems for startups and solopreneurs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-bg text-text">
        <ThemeProvider>
          <CursorGlow />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <SanityLive />
        </ThemeProvider>
      </body>
    </html>
  );
}
