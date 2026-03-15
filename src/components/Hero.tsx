import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Elegant luxury interior with warm natural light"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/60 via-transparent to-bg" />
      </div>

      {/* Content — centered */}
      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center lg:px-12">
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="block h-px w-10 bg-gold/40" />
          <p className="text-[13px] uppercase tracking-[0.25em] text-gold">
            Private Health Concierge
          </p>
          <span className="block h-px w-10 bg-gold/40" />
        </div>

        <h1 className="text-5xl font-normal leading-tight md:text-6xl lg:text-7xl">
          Personalized health,
          <br />
          <em className="text-gold">quietly handled.</em>
        </h1>

        <p className="mx-auto mt-8 max-w-lg text-lg font-light leading-relaxed text-text-secondary">
          Diagnostics, expert guidance, and ready-to-eat weekly meals —
          coordinated through one trusted point of contact.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#apply"
            className="bg-gold px-10 py-4 text-[13px] uppercase tracking-[0.15em] text-bg transition-colors duration-300 hover:bg-gold-bright"
          >
            Begin Your Journey
          </a>
          <a
            href="#experience"
            className="border border-text-faint/30 px-10 py-4 text-[13px] uppercase tracking-[0.15em] text-text-secondary transition-all duration-300 hover:border-gold/40 hover:text-gold"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-bg to-transparent" />
    </section>
  );
}
