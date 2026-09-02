import Link from "next/link";
import Image from "next/image";

const status: [string, string][] = [
  ["2025-08-15", "Kaskaraa Instruments incorporated in Montreal."],
  ["2025", "Joined District 3 Innovation Centre at Concordia University."],
  ["2025", "Profiled in La Presse."],
  ["2025", "Partnered with ThinkSci Outreach on STEM programming in Montreal and Ottawa."],
  ["Now", "Prototype in development. Weekly conversations with pathology labs and university groups."],
  ["Next", "A prototype we can put on a lab bench in front of a histotechnologist."],
];

const asks = [
  {
    who: "Pathology laboratories",
    text: "If you run or work in a histology lab, we would like an hour of your time. We need to understand your workflow now, and we will need pilot sites later.",
  },
  {
    who: "Universities and students",
    text: "We collaborate with university labs and take on student researchers in mechatronics, computer vision, and pathology.",
  },
  {
    who: "Investors",
    text: "We are raising a pre-seed round. Deck on request.",
  },
];

const team = [
  ["Nathan Aruna", "Founder, research and development. Electrical engineering student."],
  ["Domenico Valentino", "Co-founder, software. Software engineering student."],
  ["Raphael Ethier", "Co-founder, hardware. Aerospace engineering student."],
  ["Majed Munazzit", "Co-founder, business and clinical. Ten years in pathology lab operations."],
];

function Section({ id, label, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-rule py-12 sm:py-16 grid gap-5 md:grid-cols-[11rem_1fr]">
      <h2 className="font-mono font-light text-xs uppercase tracking-[0.15em] text-ink-2 pt-1.5">{label}</h2>
      <div className="max-w-2xl space-y-5 text-[1.0625rem] leading-relaxed">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section className="py-20 sm:py-28 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          We are automating tissue sectioning.
        </h1>
        <p className="mt-8 text-lg sm:text-xl leading-relaxed max-w-2xl">
          Kaskaraa Instruments is a Montreal company founded in 2025. We are building an
          instrument that cuts tissue blocks into sections for diagnosis, the one step in the
          histology lab still done entirely by hand. The device is in prototype.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-10 border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-paper transition-colors"
        >
          Work with us
        </Link>
      </section>

      <Section id="problem" label="The problem">
        <p>
          Nearly every cancer diagnosis passes through a histology lab. Tissue is embedded in
          paraffin, cut into sections a few microns thick, mounted on glass, stained, and read
          under a microscope. The cutting is done by a technologist at a rotary microtome, one
          block at a time, on a design that has not fundamentally changed since the 1880s.
        </p>
        <dl className="grid grid-cols-2 gap-8 py-4">
          <div>
            <dt className="font-mono text-4xl sm:text-5xl text-accent">2.04M</dt>
            <dd className="mt-2 text-sm">new cancer cases projected in the United States in 2025</dd>
            <dd className="text-xs text-ink-2">American Cancer Society</dd>
          </div>
          <div>
            <dt className="font-mono text-4xl sm:text-5xl text-accent">20.5%</dt>
            <dd className="mt-2 text-sm">vacancy rate in histology laboratories</dd>
            <dd className="text-xs text-ink-2">ASCP 2024 Vacancy Survey</dd>
          </div>
        </dl>
        <p>
          Case volume is rising while the people who cut the blocks retire faster than they are
          replaced. Labs cover the gap with overtime and send-outs, turnaround gets longer, and
          somewhere a patient is waiting on the result.
        </p>
      </Section>

      <Section id="status" label="Where we are">
        <dl className="grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-3 text-base">
          {status.map(([date, note]) => (
            <div key={date + note} className="contents">
              <dt className="font-mono text-sm text-ink-2 pt-0.5">{date}</dt>
              <dd>{note}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="looking-for" label="Who we want to hear from">
        {asks.map((a) => (
          <div key={a.who}>
            <h3 className="text-base">{a.who}</h3>
            <p className="mt-1">{a.text}</p>
          </div>
        ))}
        <p>
          <Link href="/contact" className="underline underline-offset-4 hover:text-accent">
            Get in touch
          </Link>
        </p>
      </Section>

      <Section id="team" label="Team">
        <Image
          src="/images/about1.png"
          alt="The four founders in a histology lab"
          width={1200}
          height={900}
          className="w-full aspect-[4/3] object-cover object-[center_40%]"
          sizes="(min-width: 768px) 42rem, 100vw"
        />
        <ul className="space-y-2 text-base">
          {team.map(([name, line]) => (
            <li key={name}>
              <strong>{name}</strong> <span className="text-ink-2">{line}</span>
            </li>
          ))}
        </ul>
        <p>
          <Link href="/team" className="underline underline-offset-4 hover:text-accent">
            More about the team
          </Link>
        </p>
      </Section>

      <Section label="Affiliations">
        <p className="text-base">
          <a href="https://www.district3.co" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            District 3 Innovation Centre, Concordia University
          </a>
          <span className="text-ink-2"> · </span>
          <a href="https://linktr.ee/thinkscioutreach" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            ThinkSci Outreach
          </a>
          <span className="text-ink-2"> · </span>
          <span>La Presse</span>
        </p>
      </Section>
    </>
  );
}
