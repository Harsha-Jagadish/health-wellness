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
          <Link href="/" className="text-xl tracking-wide text-green">
            [Brand Name]
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="#experience" className="text-sm font-light tracking-wider text-text-secondary transition-colors hover:text-green">
              Experience
            </a>
            <a href="#services" className="text-sm font-light tracking-wider text-text-secondary transition-colors hover:text-green">
              Services
            </a>
            <a href="#trust" className="text-sm font-light tracking-wider text-text-secondary transition-colors hover:text-green">
              Our Promise
            </a>
            <a
              href="#apply"
              className="rounded-full bg-green px-8 py-2.5 text-sm tracking-wider text-text-on-accent transition-colors duration-300 hover:bg-green-light"
            >
              Apply
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-green transition-all duration-300 ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-green transition-all duration-300 ${menuOpen ? "-translate-y-[2px] -rotate-45" : ""}`} />
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
            className="text-2xl font-light tracking-wide text-text-secondary transition-colors hover:text-green"
          >
            {label}
          </a>
        ))}
        <a
          href="#apply"
          onClick={() => setMenuOpen(false)}
          className="mt-4 rounded-full bg-green px-10 py-3.5 text-sm tracking-wider text-text-on-accent transition-colors duration-300 hover:bg-green-light"
        >
          Apply
        </a>
      </div>
    </>
  );
}
