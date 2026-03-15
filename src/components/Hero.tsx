import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-6 pb-16 pt-32 lg:px-12 lg:pb-0 lg:pt-0 lg:pr-20">
          <span className="mb-8 inline-block w-fit rounded-full border border-sage-light/40 px-5 py-1.5 text-xs uppercase tracking-[0.2em] text-sage">
            Private Health Concierge
          </span>

          <h1 className="text-5xl leading-tight md:text-6xl lg:text-7xl">
            Personalized
            <br />
            health, <em>quietly</em>
            <br />
            handled.
          </h1>

          <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-text-secondary">
            Diagnostics, expert guidance, and ready-to-eat weekly meals —
            coordinated through one trusted point of contact.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#apply"
              className="rounded-full bg-green px-10 py-4 text-sm tracking-wider text-text-on-accent transition-colors duration-300 hover:bg-green-light"
            >
              Begin Your Journey
            </a>
            <a
              href="#experience"
              className="rounded-full border border-border px-10 py-4 text-sm tracking-wider text-text-secondary transition-colors duration-300 hover:border-green hover:text-green"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right — full-height image */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/images/hero.jpg"
            alt="Elegant luxury interior with warm natural light"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
