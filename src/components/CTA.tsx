export default function CTA() {
  return (
    <section id="apply" className="bg-bg-dark py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-sm font-light uppercase tracking-[0.2em] text-text-faint">
            Membership
          </p>

          <h2 className="text-4xl font-light leading-tight text-text-on-dark md:text-5xl lg:text-6xl">
            Begin with a <em>conversation.</em>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-lg font-light text-text-faint">
            Membership starts with a private consultation with your Health
            Concierge. No pressure — just a conversation about what matters to
            you.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="bg-bg px-10 py-4 text-sm tracking-wider text-text transition-colors duration-300 hover:bg-border"
            >
              Apply for Membership
            </a>
            <a
              href="#"
              className="border border-white/15 px-10 py-4 text-sm tracking-wider text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              Book a Consultation
            </a>
          </div>

          <p className="mt-10 text-xs tracking-widest text-text-on-dark-muted">
            By invitation and application &middot; Limited availability
          </p>
        </div>
      </div>
    </section>
  );
}
