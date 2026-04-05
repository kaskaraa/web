"use client";

import { useEffect, useRef } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SvgLines from "./components/svg-lines";
import ScrollReveal from "./components/scroll-reveal";
import MetallicCard from "./components/metallic-card";
import Counter from "./components/counter";
import Link from "next/link";
import Image from "next/image";

/* ── Brushed titanium hero text with light sweep ── */
function TitaniumText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;
    function onMove(e: MouseEvent) {
      rafId = requestAnimationFrame(() => {
        if (!el) return;
        const x = (e.clientX / window.innerWidth) * 100;
        el.style.backgroundPosition = `${x}% 50%`;
      });
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className={`titanium-text ${className}`}
      style={{ backgroundPosition: "50% 50%" }}
    >
      {children}
    </h1>
  );
}

/* ── Light sweep overlay for hero ── */
function LightSweep() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;
    function onMove(e: MouseEvent) {
      rafId = requestAnimationFrame(() => {
        if (!el) return;
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        el.style.background = `radial-gradient(ellipse 600px 400px at ${x}% ${y}%, rgba(192,192,192,0.07) 0%, transparent 70%)`;
      });
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true" />;
}

/* ── Dot Grid with subtle parallax ── */
function DotGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    function onMove(e: MouseEvent) {
      rafId = requestAnimationFrame(() => {
        if (!ref.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        ref.current.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="dot-grid absolute -inset-10 opacity-20 transition-transform duration-1000 ease-out"
      aria-hidden="true"
    />
  );
}

/* ── Horizontal metallic divider line ── */
function MetalDivider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div ref={ref} className="line-draw specimen-line" />
    </div>
  );
}

/* ── Data ── */

const bentoItems = [
  {
    title: "Micron-Level Precision",
    description:
      "Robotic tissue sectioning engineered to tolerances previously unattainable by human hands.",
    span: "md:col-span-2",
  },
  {
    title: "Computer Vision QC",
    description:
      "Real-time quality control that detects folds, tears, and inconsistencies — flagging defects the human eye would miss.",
    span: "md:col-span-1",
  },
  {
    title: "Integrated Sample Tracking",
    description:
      "Automated barcode scanning ensures patient sample identity is never compromised.",
    span: "md:col-span-1",
  },
  {
    title: "Hands-Free Operation",
    description:
      "Continuous unattended runs allow a single technologist to oversee multiple units — scaling throughput without scaling headcount.",
    span: "md:col-span-2",
  },
];

const team = [
  { name: "Nathan Aruna", role: "Founder & CEO", image: "/images/team/Nathan.png" },
  { name: "Domenico Valentino", role: "Chief Software Architect", image: "/images/team/Domenico.png" },
  { name: "Raphael Ethier", role: "Chief Hardware Engineer", image: "/images/team/Raphael.png" },
  { name: "Majed Munazzit", role: "Business Development", image: "/images/team/Majed.png" },
];

const newsItems = [
  {
    date: "2025",
    title: "ThinkSci Partnership",
    description:
      "Official partnership with ThinkSci Outreach to advance STEM accessibility and cultivate the next generation of biomedical engineers across Montreal and Ottawa.",
  },
  {
    date: "2025",
    title: "Featured in La Presse",
    description:
      "Kaskaraa Instruments profiled by La Presse, highlighting the team's mission to transform pathology diagnostics through intelligent automation.",
  },
];

/* ── Page ── */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen page-enter">
      <Navbar />

      <main className="flex-grow">
        {/* ═══ HERO — TITANIUM STYLE ═══ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-x-clip overflow-y-visible">
          <DotGrid />
          <SvgLines className="opacity-30" />
          <LightSweep />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(180,160,130,0.08) 0%, rgba(199,125,186,0.03) 40%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center px-6 sm:px-10 w-full max-w-6xl mx-auto">
            <div className="opacity-0 animate-[pageIn_0.6s_ease_0.4s_forwards] mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-text-muted font-[Avenirlight]">
                Kaskaraa Instruments
              </span>
            </div>

            <div className="opacity-0 animate-[pageIn_0.8s_ease_0.8s_forwards]">
              <TitaniumText className="text-6xl sm:text-8xl lg:text-9xl font-[Avenir] uppercase tracking-tight leading-[0.85]">
                PRECISION.
              </TitaniumText>
            </div>
            <div className="opacity-0 animate-[pageIn_0.8s_ease_1.1s_forwards] mt-2">
              <TitaniumText className="text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85]">
                <span className="font-[Sagona] italic">Automated.</span>
              </TitaniumText>
            </div>

            <div className="opacity-0 animate-[pageIn_0.6s_ease_1.6s_forwards] mt-10">
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-metal-light to-transparent" />
            </div>

            <p className="mt-8 text-lg sm:text-xl text-text-secondary font-[Avenirlight] max-w-2xl mx-auto opacity-0 animate-[pageIn_0.6s_ease_1.8s_forwards] px-4">
              Next-generation robotic instrumentation for pathology.
              <br />
              <span className="text-metal-light">Engineered in Montreal.</span>
            </p>

            <div className="mt-12 opacity-0 animate-[pageIn_0.6s_ease_2.1s_forwards]">
              <a
                href="#challenge"
                className="inline-block border border-metal-mid/40 text-metal-light px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white/5 hover:border-metal-light transition-all duration-300"
              >
                Discover More
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-[pageIn_0.6s_ease_3s_forwards]">
            <div className="w-px h-16 bg-gradient-to-b from-metal-mid to-transparent mx-auto" />
          </div>
        </section>

        {/* ═══ THE CHALLENGE ═══ */}
        <MetalDivider />

        <section id="challenge" className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <ScrollReveal className="md:col-span-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[Avenir] leading-tight">
                A Collapsing{" "}
                <span className="font-[Sagona] text-accent">Workforce.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-2" delay={200}>
              <p className="text-text-secondary text-lg font-[Avenirlight] leading-relaxed">
                Rising cancer incidence is colliding with a hemorrhaging talent
                pipeline. Labs face record-breaking caseloads while histology
                positions go unfilled — and 19th-century rotary microtomes remain
                the standard. Every block is still cut by hand.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-24">
            <ScrollReveal delay={0}>
              <div className="text-center space-y-3">
                <div className="text-5xl sm:text-6xl font-[Avenir] titanium-text inline-block">
                  <Counter target={2} suffix=".04M" />
                </div>
                <p className="text-text-muted text-sm uppercase tracking-wider leading-snug">
                  New U.S. cancer cases<br />projected for 2025
                </p>
                <p className="text-text-muted/60 text-xs font-[Avenirlight]">
                  Source: MSKCC
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="text-center space-y-3">
                <div className="text-5xl sm:text-6xl font-[Avenir] titanium-text inline-block">
                  <Counter target={20} suffix=".5%" />
                </div>
                <p className="text-text-muted text-sm uppercase tracking-wider leading-snug">
                  Current vacancy rate<br />in histology labs
                </p>
                <p className="text-text-muted/60 text-xs font-[Avenirlight]">
                  Source: ASCP 2024 Vacancy Survey
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center space-y-3">
                <div className="text-5xl sm:text-6xl font-[Avenir] titanium-text inline-block">
                  $<Counter target={38} suffix=".3B" />
                </div>
                <p className="text-text-muted text-sm uppercase tracking-wider leading-snug">
                  Total addressable<br />market opportunity
                </p>
                <p className="text-text-muted/60 text-xs font-[Avenirlight]">
                  Global Anatomic Pathology
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══ BENTO GRID — CAPABILITIES ═══ */}
        <MetalDivider />

        <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[Avenir] text-center mb-4">
              Engineered Without{" "}
              <span className="font-[Sagona] text-accent">Compromise.</span>
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-2xl mx-auto font-[Avenirlight] mb-16">
              Purpose-built instrumentation that redefines what&apos;s possible
              in pathology automation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {bentoItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className={item.span}>
                <MetallicCard className="h-full">
                  <div className="flex flex-col justify-between h-full px-3 py-4 min-h-[220px]">
                    <h3 className="text-xl sm:text-2xl font-[Avenir] text-white leading-tight mb-auto">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary font-[Avenirlight] leading-relaxed text-sm mt-6">
                      {item.description}
                    </p>
                  </div>
                </MetallicCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ═══ PARTNERS ═══ */}
        <MetalDivider />

        <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-[Avenir] text-center mb-4">
              Our <span className="font-[Sagona] text-accent">Partners.</span>
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-2xl mx-auto font-[Avenirlight] mb-16">
              Partnered with organizations driving real impact in health technology and STEM education.
            </p>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <MetallicCard className="h-full">
                <div className="flex flex-col h-full px-3 py-4">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-[Avenir] text-white leading-tight">
                        ThinkSci Outreach
                      </h3>
                      <p className="text-xs text-text-muted font-[Avenirlight] mt-0.5">
                        Montreal &amp; Ottawa
                      </p>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm font-[Avenirlight] leading-relaxed mb-5">
                    A youth-led STEM initiative empowering underrepresented students
                    through hands-on workshops, mentorship, and community-driven
                    research. Together with ThinkSci, we&apos;re building pathways for
                    the next generation of biomedical engineers and scientists — making
                    cutting-edge science accessible to those who need it most.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["STEM Outreach", "Mentorship", "Community Research"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full slide-frosted text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MetallicCard>
            </ScrollReveal>
          </div>

          <ScrollReveal className="text-center mt-10" delay={200}>
            <Link
              href="/partnership"
              className="text-sm uppercase tracking-widest text-text-secondary hover:text-accent transition-colors border-b border-metal-dark hover:border-accent pb-1"
            >
              View all partners &rarr;
            </Link>
          </ScrollReveal>
        </section>

        {/* ═══ THE TEAM ═══ */}
        <MetalDivider />

        <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-[Avenir] text-center mb-16">
              The Team
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 100} className="text-center group">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full metal-ring" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full rounded-full object-cover relative z-10 group-hover:ring-2 group-hover:ring-accent/50 transition-all duration-300"
                  />
                </div>
                <h4 className="text-lg font-[Avenir] text-white group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-sm text-text-muted font-[Avenirlight] mt-1">
                  {member.role}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12" delay={400}>
            <Link
              href="/about/team"
              className="text-sm uppercase tracking-widest text-text-secondary hover:text-accent transition-colors border-b border-metal-dark hover:border-accent pb-1"
            >
              Meet the full team &rarr;
            </Link>
          </ScrollReveal>
        </section>

        {/* ═══ MILESTONES ═══ */}
        <MetalDivider />

        <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-[Avenir] text-center mb-4">
              Milestones
            </h2>
            <p className="text-text-secondary text-lg text-center max-w-xl mx-auto font-[Avenirlight] mb-16">
              Tracking our progress from concept to commercialization.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="brushed-metal slide-label rounded-xl px-7 py-8 h-full flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-accent font-[Avenirlight]">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-[Avenir] text-white mt-3 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm font-[Avenirlight] leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ═══ CONTACT CTA ═══ */}
        <MetalDivider />

        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(199,125,186,0.06) 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center px-6">
            <ScrollReveal>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-[Avenir]">
                Let&apos;s Talk.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mt-6 text-text-secondary text-lg font-[Avenirlight] max-w-lg mx-auto">
                Whether you&apos;re a pathology lab, a healthcare investor, or a
                potential collaborator — we&apos;d love to hear from you.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block bg-accent text-[#0a0a0a] font-[Avenir] px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
