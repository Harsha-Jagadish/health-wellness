import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-bg pt-20">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <p className="mb-6 text-sm font-light uppercase tracking-[0.2em] text-text-muted">
              Private Health Concierge
            </p>

            <h1 className="text-5xl font-light leading-tight md:text-6xl lg:text-7xl">
              Personalized health,
              <br />
              <em>quietly handled.</em>
            </h1>

            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-text-muted">
              Diagnostics, expert guidance, and weekly meals — coordinated
              through one trusted point of contact.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="bg-bg-dark px-10 py-4 text-sm tracking-wider text-text-on-dark transition-colors duration-300 hover:bg-text"
              >
                Begin Your Journey
              </a>
              <a
                href="#experience"
                className="border border-border px-10 py-4 text-sm tracking-wider text-text-muted transition-colors duration-300 hover:border-text-muted"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-4/5 w-full overflow-hidden">
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
      </div>
    </section>
  );
}
