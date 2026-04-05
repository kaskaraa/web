"use client";

import Link from "next/link";
import Navbar from "../components/navbar";
import SvgLines from "../components/svg-lines";

export default function ComingSoon() {
  return (
    <div className="flex flex-col min-h-screen page-enter">
      <Navbar />

      <main className="flex-grow relative flex items-center justify-center overflow-hidden">
        <SvgLines className="opacity-20" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl sm:text-8xl font-[Avenir] text-white tracking-tight">
            Coming <span className="font-[Sagona] text-accent">Soon</span>
          </h1>

          <p className="mt-6 text-text-muted text-lg font-[Avenirlight]">
            Something new is in the works.
          </p>

          <Link
            href="/"
            className="inline-block mt-10 text-sm uppercase tracking-widest text-text-secondary hover:text-accent transition-colors border-b border-metal-dark hover:border-accent pb-1"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
