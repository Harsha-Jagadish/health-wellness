import Image from "next/image";

export default function Editorial() {
  return (
    <section className="bg-bg py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Large food image */}
          <div className="relative aspect-3/4 w-full overflow-hidden md:aspect-4/5">
            <Image
              src="/images/food.jpg"
              alt="Beautifully plated gourmet meal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right column: copy + smaller image */}
          <div className="flex flex-col justify-between gap-16">
            <div className="flex flex-1 flex-col justify-center">
              <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-text-muted">
                The Standard
              </p>
              <h2 className="text-4xl font-light leading-tight md:text-5xl">
                Where precision
                <br />
                meets <em>care.</em>
              </h2>
              <p className="mt-8 max-w-sm text-lg font-light leading-relaxed text-text-muted">
                Data informs the plan. Meals make it real. Discretion keeps it
                effortless.
              </p>
              <a
                href="#apply"
                className="group mt-10 inline-flex items-center gap-3 self-start text-sm tracking-wider text-text"
              >
                <span className="border-b border-text/20 pb-0.5 transition-colors group-hover:border-text">
                  Explore membership
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>

            {/* Smaller ingredients image */}
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/ingredients.jpg"
                alt="Fresh premium ingredients"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
