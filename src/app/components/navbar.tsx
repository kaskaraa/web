import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full max-w-5xl mx-auto px-6 py-6 flex items-baseline justify-between">
      <Link href="/" className="text-base">
        <strong>Kaskaraa</strong> Instruments
      </Link>
      <nav className="flex gap-6 text-sm">
        <Link href="/team" className="hover:text-accent">Team</Link>
        <Link href="/contact" className="hover:text-accent">Contact</Link>
      </nav>
    </header>
  );
}
