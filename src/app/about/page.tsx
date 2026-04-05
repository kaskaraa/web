"use client";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ScrollReveal from "../components/scroll-reveal";
import LetterReveal from "../components/letter-reveal";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen page-enter">
      <Navbar />

      <main className="flex-grow pt-28">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <LetterReveal
            text="About Kaskaraa"
            className="text-5xl sm:text-6xl lg:text-7xl font-[Avenir] tracking-tight"
            delay={300}
            letterDelay={40}
          />

          {/* Metallic divider */}
          <div className="mt-8 specimen-line max-w-md" />
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <ScrollReveal>
                <h2 className="text-3xl sm:text-4xl font-[Avenir] leading-tight">
                  Building the Future of{" "}
                  <span className="font-[Sagona] text-accent">Pathology</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-text-secondary text-lg font-[Avenirlight] leading-relaxed">
                  Kaskaraa Instruments is a Montreal-based team of four students
                  and professionals passionate about medicine, engineering, and
                  innovation. Focused on advancing pathology, we design automated
                  robotic solutions to improve accuracy, efficiency, and patient
                  outcomes.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-text-secondary text-lg font-[Avenirlight] leading-relaxed">
                  We believe robotics can transform healthcare, and we are
                  committed to building the future of diagnostics one
                  breakthrough at a time. Our team works constantly to bridge the
                  gap between science, robotics, and real-world medical needs.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Link
                  href="/about/team"
                  className="inline-block border border-accent text-accent px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-accent hover:text-[#0a0a0a] transition-all duration-300"
                >
                  Meet the Team &rarr;
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="slide-label rounded-xl overflow-hidden">
                <Image
                  src="/images/about1.png"
                  alt="Kaskaraa lab work"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
