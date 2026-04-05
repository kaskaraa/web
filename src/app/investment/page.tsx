"use client";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ScrollReveal from "../components/scroll-reveal";
import LetterReveal from "../components/letter-reveal";
import Link from "next/link";

export default function InvestmentPage() {
  return (
    <div className="flex flex-col min-h-screen page-enter">
      <Navbar />

      <main className="flex-grow pt-28">
        <section className="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center">
          <LetterReveal
            text="Invest in the Future"
            className="text-5xl sm:text-6xl lg:text-7xl font-[Avenir] tracking-tight"
            delay={300}
            letterDelay={35}
          />

          <ScrollReveal className="mt-8">
            <h2 className="text-2xl sm:text-3xl font-[Avenir] leading-tight">
              From Slide to Insight: Automating the{" "}
              <span className="font-[Sagona] text-accent">Pathology</span> Pipeline
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mt-8 text-text-secondary text-lg font-[Avenirlight] leading-relaxed max-w-2xl mx-auto">
              We&apos;re transforming the future of diagnostics by automating
              pathology workflows. Our platform enhances speed, accuracy, and
              accessibility — empowering clinicians with data-driven decisions
              and improving patient outcomes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-block bg-accent text-[#0a0a0a] font-[Avenir] px-10 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="inline-block border border-metal-dark text-text-secondary px-10 py-3 rounded-full text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300"
              >
                Our Mission
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
