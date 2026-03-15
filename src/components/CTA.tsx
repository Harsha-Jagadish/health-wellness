export default function CTA() {
  return (
    <section id="apply" className="relative bg-bg py-28 lg:py-40 overflow-hidden">
      {/* Decorative gold line */}
      <div className="absolute left-1/2 top-0 h-20 w-px -translate-x-1/2 bg-linear-to-b from-transparent to-gold/30" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-[13px] uppercase tracking-[0.25em] text-gold">
            Membership
          </p>

          <h2 className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
            Begin with a{" "}
            <em className="text-gold">conversation.</em>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-lg font-light text-text-secondary">
            Membership starts with a private consultation with your Health
            Concierge. No pressure — just a conversation about what matters to
            you.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#"
              className="bg-gold px-10 py-4 text-[13px] uppercase tracking-[0.15em] text-bg transition-colors duration-300 hover:bg-gold-bright"
            >
              Apply for Membership
            </a>
            <a
              href="#"
              className="border border-border-light px-10 py-4 text-[13px] uppercase tracking-[0.15em] text-text-secondary transition-all duration-300 hover:border-gold/40 hover:text-gold"
            >
              Book a Consultation
            </a>
          </div>

          <p className="mt-10 text-xs tracking-[0.15em] text-text-faint">
            By invitation and application &middot; Limited availability
          </p>
        </div>
      </div>
    </section>
  );
}
