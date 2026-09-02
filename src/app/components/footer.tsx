import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto px-6 py-10 mt-16 border-t border-rule text-sm text-ink-2 flex flex-col sm:flex-row gap-3 sm:justify-between">
      <p>Kaskaraa Instruments Inc. · Montreal, Quebec</p>
      <p className="flex gap-5">
        <a href="https://www.linkedin.com/company/106752688" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          LinkedIn
        </a>
        <Link href="/contact" className="hover:text-accent">Contact</Link>
        <span>&copy; {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
