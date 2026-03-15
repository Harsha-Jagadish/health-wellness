export default function Experience() {
  const steps = [
    {
      num: "01",
      title: "Meet Your Health Concierge",
      text: "A private consultation to understand your goals, preferences, and lifestyle.",
    },
    {
      num: "02",
      title: "Shape Your Plan",
      text: "Diagnostics, expert coordination, and nutrition — tailored entirely to you.",
    },
    {
      num: "03",
      title: "Have It Handled",
      text: "Weekly meal delivery, ongoing refinement, and one point of contact for everything.",
    },
  ];

  return (
    <section id="experience" className="bg-bg py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-20 max-w-xl lg:mb-28">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-text-muted">
            The Experience
          </p>
          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Health, simplified.
          </h2>
        </div>

        {/* Steps — stacked rows */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid gap-4 border-t border-border py-12 md:grid-cols-12 md:items-baseline md:gap-8 md:py-16 lg:py-20 ${
                i === steps.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="text-sm text-text-faint md:col-span-1">
                {step.num}
              </span>
              <h3 className="text-2xl font-light md:col-span-5 md:text-3xl">
                {step.title}
              </h3>
              <p className="max-w-md text-base font-light leading-relaxed text-text-muted md:col-span-6 md:text-lg">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
