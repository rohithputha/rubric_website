import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rubric AI — Reasoning & Verification Infrastructure",
  description:
    "Rubric AI builds infrastructure that converts credentialed human judgment into structured, auditable intelligence for healthcare, finance, and life sciences AI.",
  openGraph: {
    title: "Rubric AI — Reasoning & Verification Infrastructure",
    description:
      "AI commoditized production. The new bottleneck is judgment. We're building the infrastructure for it.",
    siteName: "Rubric AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable}`}>
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
