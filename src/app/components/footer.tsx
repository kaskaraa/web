import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-metal-dark/30 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/">
          <span className="text-lg font-[Avenir] text-white tracking-tight">
            Kaskaraa Instruments
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <Link href="/about" className="hover:text-text-secondary transition-colors">About</Link>
          <Link href="/about/team" className="hover:text-text-secondary transition-colors">Team</Link>
          <Link href="/partnership" className="hover:text-text-secondary transition-colors">Partners</Link>
          <Link href="/contact" className="hover:text-text-secondary transition-colors">Contact</Link>
          <Link href="/investment" className="hover:text-text-secondary transition-colors">Investment</Link>
          <a
            href="https://www.linkedin.com/company/106752688"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-8">
        <p className="text-xs text-text-muted text-center md:text-left">
          &copy; {new Date().getFullYear()} Kaskaraa Instruments Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
