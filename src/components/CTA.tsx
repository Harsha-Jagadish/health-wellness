export default function CTA() {
  return (
    <section id="apply" className="bg-bg-accent py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-sm font-light uppercase tracking-[0.2em] text-sage-light">
            Membership
          </p>

          <h2 className="text-4xl leading-tight text-text-on-accent md:text-5xl lg:text-6xl">
            Begin with a <em>conversation.</em>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-lg font-light text-text-on-accent-muted">
            Membership starts with a private consultation with your Health
            Concierge. No pressure — just a conversation about what matters to
            you.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#"
              className="rounded-full bg-bg px-10 py-4 text-sm tracking-wider text-green transition-colors duration-300 hover:bg-bg-alt"
            >
              Apply for Membership
            </a>
            <a
              href="#"
              className="rounded-full border border-border-dark px-10 py-4 text-sm tracking-wider text-text-on-accent-muted transition-all duration-300 hover:border-sage hover:text-text-on-accent"
            >
              Book a Consultation
            </a>
          </div>

          <p className="mt-10 text-xs tracking-[0.15em] text-sage">
            By invitation and application &middot; Limited availability
          </p>
        </div>
      </div>
    </section>
  );
}
