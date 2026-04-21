"use client";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ScrollReveal from "../../components/scroll-reveal";
import LetterReveal from "../../components/letter-reveal";
import MetallicCard from "../../components/metallic-card";
import Image from "next/image";

const team = [
  {
    name: "Nathan Aruna",
    role: "Founder & CEO — Engineering & Technology",
    image: "/images/team/Nathan.png",
    bio: "Nathan leads engineering and product development at Kaskaraa Instruments. Currently studying electrical engineering with a deep passion for technology and robotics, he is driven to create innovative solutions that can advance humanity. Nathan drives the research and development of our automation tools, working to ensure they are built to the highest standards of quality and performance. He has presented his research on the international stage, reflecting his commitment to pushing the boundaries of robotics.",
  },
  {
    name: "Domenico Valentino",
    role: "Co-Founder — Chief Software Architect",
    image: "/images/team/Domenico.png",
    bio: "Domenico leads software architecture and development at Kaskaraa Instruments. As a software engineering student with a strong focus on systems design, algorithms, and full-stack development, he is driven to build solutions that push the boundaries of what software can achieve in medical and scientific applications. He co-directed the best-performing robotics team in Quebec, demonstrating his technical ability.",
  },
  {
    name: "Raphael Ethier",
    role: "Co-Founder — Chief of Hardware Engineering",
    image: "/images/team/Raphael.png",
    bio: "Raphael leads hardware engineering and mechanical design at Kaskaraa Instruments. Currently studying aerospace engineering with a strong foundation in mechanical design, his passion for engineering was sparked through competitive robotics, where he developed the technical expertise to lead and mentor the next generation of engineers. Raphael drives the research and development of our hardware systems, working to ensure our tools are designed for precision and reliability.",
  },
  {
    name: "Majed Munazzit",
    role: "Co-Founder — Business Development & Clinical Applications",
    image: "/images/team/Majed.png",
    bio: "With a career spanning over 10 years in pathology laboratory operations, Majed has evolved from a medical technologist to a lab manager and digital pathology project leader. He has successfully spearheaded large-scale digital transformations and AI-powered imaging deployments across North America, bridging the gap between complex hospital IT requirements and clinical workflows. At Kaskaraa Instruments, Majed leads market validation, ensuring our automation solutions are perfectly aligned with the operational needs and regulatory standards of modern pathology labs.",
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen page-enter">
      <Navbar />

      <main className="flex-grow pt-28">
        <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <LetterReveal
            text="Our Team"
            className="text-5xl sm:text-6xl lg:text-7xl font-[Avenir] tracking-tight text-center"
            delay={300}
            letterDelay={50}
          />

          <ScrollReveal className="mt-4">
            <p className="text-text-secondary text-lg font-[Avenirlight] text-center max-w-xl mx-auto">
              Four minds on a mission to transform pathology.
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 120}>
                <MetallicCard className="h-full">
                  <div className="flex flex-col h-full p-2">
                    <div className="flex items-center gap-5 mb-5">
                      <div className="relative w-20 h-20 shrink-0">
                        <div className="absolute inset-0 rounded-full metal-ring" />
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="w-full h-full rounded-full object-cover relative z-10"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-[Avenir] text-white leading-tight">{member.name}</h3>
                        <p className="text-sm text-accent font-[Avenirlight] mt-1">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm font-[Avenirlight] leading-relaxed flex-grow">
                      {member.bio}
                    </p>
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
