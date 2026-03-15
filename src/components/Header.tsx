"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-bg/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
          <Link href="/" className="text-lg tracking-[0.15em] uppercase text-gold">
            [Brand Name]
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="#experience" className="text-[13px] uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-gold">
              Experience
            </a>
            <a href="#services" className="text-[13px] uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-gold">
              Services
            </a>
            <a href="#trust" className="text-[13px] uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-gold">
              Our Promise
            </a>
            <a
              href="#apply"
              className="border border-gold/40 px-7 py-2.5 text-[13px] uppercase tracking-[0.15em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-bg"
            >
              Apply
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-gold transition-all duration-300 ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-gold transition-all duration-300 ${menuOpen ? "-translate-y-[2px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-bg transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {["Experience", "Services", "Our Promise"].map((label) => (
          <a
            key={label}
            href={`#${label === "Our Promise" ? "trust" : label.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-2xl tracking-[0.1em] uppercase text-text-secondary transition-colors hover:text-gold"
          >
            {label}
          </a>
        ))}
        <a
          href="#apply"
          onClick={() => setMenuOpen(false)}
          className="mt-4 border border-gold/40 px-10 py-3.5 text-[13px] uppercase tracking-[0.15em] text-gold transition-all duration-300 hover:bg-gold hover:text-bg"
        >
          Apply
        </a>
      </div>
    </>
  );
}
