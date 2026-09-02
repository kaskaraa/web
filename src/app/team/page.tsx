import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Team · Kaskaraa Instruments" };

const team = [
  {
    name: "Nathan Aruna",
    role: "Founder. Research and development.",
    image: "/images/team/Nathan.png",
    bio: "Nathan founded Kaskaraa and leads research and development. He is an electrical engineering student and has presented his robotics research at international conferences.",
  },
  {
    name: "Domenico Valentino",
    role: "Co-founder. Software.",
    image: "/images/team/Domenico.png",
    bio: "Domenico leads software. He is a software engineering student focused on systems design, and co-directed the best-performing robotics team in Quebec.",
  },
  {
    name: "Raphael Ethier",
    role: "Co-founder. Hardware.",
    image: "/images/team/Raphael.png",
    bio: "Raphael leads hardware and mechanical design. He is an aerospace engineering student who came up through competitive robotics, where he now mentors younger teams.",
  },
  {
    name: "Majed Munazzit",
    role: "Co-founder. Business and clinical development.",
    image: "/images/team/Majed.png",
    bio: "Majed spent ten years in pathology laboratory operations, moving from medical technologist to lab manager to digital pathology project lead, and has run digital pathology and AI imaging deployments at hospitals across North America. He keeps the instrument pointed at what labs need and what regulators will accept.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="py-20 sm:py-28 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl tracking-tight">Team</h1>
        <p className="mt-6 text-lg leading-relaxed">
          Four people in Montreal. Three engineering students and one person who has spent a
          decade running the labs we are building for.
        </p>
      </section>
      <section className="border-t border-rule">
        {team.map((m) => (
          <article key={m.name} className="py-10 border-b border-rule grid gap-6 sm:grid-cols-[6rem_1fr]">
            <Image src={m.image} alt={m.name} width={96} height={96} className="w-24 h-24 object-cover" />
            <div className="max-w-2xl">
              <h2 className="text-xl">{m.name}</h2>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-2 mt-1">{m.role}</p>
              <p className="mt-4 leading-relaxed">{m.bio}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
