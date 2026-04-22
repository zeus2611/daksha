import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";

export const metadata: Metadata = {
  title: "Daksha — Full-Service Digital Agency",
  description:
    "We build mobile apps, web platforms, brands, and growth systems for startups and solopreneurs.",
  keywords: ["digital agency", "web development", "mobile app", "flutter", "next.js", "branding"],
  openGraph: {
    title: "Daksha — Full-Service Digital Agency",
    description: "We build mobile apps, web platforms, brands, and growth systems.",
    type: "website",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
