export default function Footer() {
  const links = [
    { label: "The Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Our Promise", href: "#trust" },
    { label: "Apply", href: "#apply" },
  ];

  return (
    <footer className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 md:grid-cols-3 md:gap-12">
          <div>
            <span className="text-xl tracking-wide text-green">
              [Brand Name]
            </span>
            <p className="mt-5 max-w-xs text-[15px] font-light leading-relaxed text-text-secondary">
              Personalized health, quietly handled.
              <br />A premium Health-as-a-Service membership.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-sage">
              Navigate
            </p>
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[15px] font-light text-text-secondary transition-colors hover:text-green"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-sage">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@example.com"
                className="text-[15px] font-light text-text-secondary transition-colors hover:text-green"
              >
                hello@example.com
              </a>
              <p className="text-[15px] font-light text-text-secondary">
                By appointment only
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs tracking-[0.1em] text-text-faint">
            &copy; {new Date().getFullYear()} [Brand Name]. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs tracking-[0.1em] text-text-faint transition-colors hover:text-text-secondary">
              Privacy
            </a>
            <a href="#" className="text-xs tracking-[0.1em] text-text-faint transition-colors hover:text-text-secondary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
