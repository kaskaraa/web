import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaskaraa Instruments",
  description:
    "Montreal company founded in 2025, building an instrument that automates tissue sectioning in the histology lab. Currently in prototype.",
  metadataBase: new URL("https://kaskaraa.com"),
  openGraph: {
    title: "Kaskaraa Instruments",
    description:
      "Automating tissue sectioning, the last step in histology still done entirely by hand. Montreal, founded 2025, in prototype.",
    url: "https://kaskaraa.com",
    siteName: "Kaskaraa Instruments",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/images/about1.png", width: 1200, height: 630, alt: "The Kaskaraa team in the lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaskaraa Instruments",
    description: "Automating tissue sectioning. Montreal, founded 2025, in prototype.",
    images: ["/images/about1.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full max-w-5xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
