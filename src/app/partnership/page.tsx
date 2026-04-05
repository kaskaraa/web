"use client";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ScrollReveal from "../components/scroll-reveal";
import LetterReveal from "../components/letter-reveal";
import MetallicCard from "../components/metallic-card";
import Image from "next/image";

const partners = [
  {
    name: "District 3 Innovation Centre",
    subtitle: "Concordia University, Montreal",
    bio: "Quebec's premier startup incubator — having supported over 1,400 ventures across biotech, healthtech, and deep technology. District 3 is the only incubator in Quebec with specialized expertise in the biotech sector, providing world-class 1:1 coaching, access to state-of-the-art labs and collaborative workspaces, and a zero-equity model that lets founders retain full ownership of their intellectual property. Kaskaraa Instruments is proud to be part of this ecosystem of innovators transforming healthcare.",
    link: "https://www.district3.co",
    image: "/images/partnership/thinksci.png",
    tags: ["Biotech Incubator", "1,400+ Startups Supported", "Zero Equity Model"],
  },
  {
    name: "ThinkSci Outreach",
    subtitle: "Montreal & Ottawa",
    bio: "A youth-led STEM initiative dedicated to empowering underrepresented students through hands-on workshops, mentorship, and community-based research opportunities. ThinkSci fosters curiosity, creativity, and critical thinking — bridging the gap between classroom learning and real-world scientific discovery. Together, we're building pathways for the next generation of biomedical engineers and scientists, making cutting-edge science accessible to those who need it most.",
    link: "https://linktr.ee/thinkscioutreach",
    image: "/images/partnership/thinksci.png",
    tags: ["STEM Outreach", "Mentorship", "Community Research"],
  },
];

export default function PartnerPage() {
  return (
    <div className="flex flex-col min-h-screen page-enter">
      <Navbar />

      <main className="flex-grow pt-28">
        <section className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
          <LetterReveal
            text="Our Partners"
            className="text-5xl sm:text-6xl lg:text-7xl font-[Avenir] tracking-tight text-center"
            delay={300}
            letterDelay={50}
          />

          <ScrollReveal className="mt-4">
            <p className="text-text-secondary text-lg font-[Avenirlight] text-center max-w-xl mx-auto">
              Backed by leading institutions and partnered with organizations driving real impact.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-8">
            {partners.map((partner, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <MetallicCard>
                  <div className="flex flex-col sm:flex-row gap-6 items-start p-2">
                    <div className="w-full sm:w-48 shrink-0 metal-border rounded-lg overflow-hidden">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={200}
                        height={200}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-[Avenir] text-white leading-tight">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-text-muted font-[Avenirlight] mt-1 mb-4">
                        {partner.subtitle}
                      </p>
                      <p className="text-text-secondary text-sm font-[Avenirlight] leading-relaxed mb-5">
                        {partner.bio}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {partner.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1.5 rounded-full border border-metal-dark/50 text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm uppercase tracking-widest text-accent hover:text-accent-hover transition-colors border-b border-accent pb-0.5"
                      >
                        Learn more &rarr;
                      </a>
                    </div>
                  </div>
                </MetallicCard>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
