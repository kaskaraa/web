import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kaskaraa Instruments | Automated Pathology Instrumentation",
  description: "Next-generation robotic instrumentation for pathology. Precision-engineered in Montreal to automate tissue sectioning with micron-level accuracy and computer vision quality control.",
  keywords: [
    "pathology instrumentation",
    "automated histology",
    "tissue sectioning",
    "robotic pathology",
    "computer vision QC",
    "histopathology automation",
    "medical instrumentation",
    "laboratory automation",
    "Nathan Aruna",
    "Domenico Valentino",
    "Raphael Ethier",
    "Majed Munazzit"
  ],
  authors: [{ name: "Kaskaraa Instruments" }],
  metadataBase: new URL("https://kaskaraa.com"),
  openGraph: {
    title: "Kaskaraa Instruments | Automated Pathology Instrumentation",
    description: "Precision robotic instrumentation engineered to automate pathology. Micron-level accuracy. Real-time quality control. Enterprise-grade automation.",
    url: "https://kaskaraa.com",
    siteName: "Kaskaraa Instruments",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/about1.png", 
        width: 1200,
        height: 630,
        alt: "Kaskaraa Instruments - Automated Pathology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaskaraa Instruments | Automated Pathology",
    description: "Next-generation robotic instrumentation for pathology. Engineered in Montreal.",
    images: ["/images/about1.png"],
  },
  applicationName: "Kaskaraa Instruments",
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
