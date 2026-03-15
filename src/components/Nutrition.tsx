import Image from "next/image";

export default function Nutrition() {
  const points = [
    {
      label: "Tailored to your needs",
      text: "Built around your goals, restrictions, preferences, and schedule.",
    },
    {
      label: "Chef-prepared weekly",
      text: "Crafted by vetted culinary partners with certified kitchen standards.",
    },
    {
      label: "Designed for consistency",
      text: "The same quality and care, delivered reliably — week after week.",
    },
  ];

  return (
    <section className="bg-bg-alt py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/food.jpg"
              alt="Chef-prepared meal with premium ingredients"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-text-muted">
              The Meal Experience
            </p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Nutrition, made <em>tangible.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-text-muted">
              Your plan becomes something you can actually live with: refined,
              ready-to-eat meals built around your preferences, schedule, and
              health priorities.
            </p>

            <div className="mt-12 space-y-8">
              {points.map((p, i) => (
                <div key={i} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-bg text-sm text-text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium">{p.label}</h3>
                    <p className="mt-1 text-[15px] font-light leading-relaxed text-text-muted">
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-md text-[15px] font-light italic leading-relaxed text-text-faint">
              From bloodwork and body composition analysis to chef-prepared
              weekly meals, every element is aligned around you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
