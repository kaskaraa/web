"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { title: "About", path: "/about" },
  { title: "Team", path: "/about/team" },
  { title: "Partners", path: "/partnership" },
  { title: "Investment", path: "/investment" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass relative rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl transition-all duration-300 ${
          scrolled ? "bg-[rgba(10,10,10,0.85)] shadow-lg shadow-black/20" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-lg font-[Avenir] text-white tracking-tight">
            .ﾒ
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 md:absolute md:left-1/2 md:-translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-sm uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1 text-sm uppercase tracking-widest border border-metal-dark rounded-full px-4 py-1.5 text-text-secondary hover:border-accent hover:text-accent transition-all duration-200"
        >
          Contact
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[rgba(10,10,10,0.95)] backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          onClick={() => setMobileOpen(false)}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-3xl font-[Avenir] text-white hover:text-accent transition-colors"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-3xl font-[Avenir] text-accent hover:text-accent-hover transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
