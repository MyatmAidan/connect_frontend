import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { BRAND_NAME } from "@/lib/brand";
import "./globals.css";

export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} Admin`,
  description: `${BRAND_NAME} developer collaboration admin dashboard`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <body className={geistSans.className}>
        <NextTopLoader color="#7DB9E8" height={3} showSpinner={false} easing="ease" speed={280} />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
