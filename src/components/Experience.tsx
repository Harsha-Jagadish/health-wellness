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
      text: "Weekly execution, ongoing optimization, and one point of contact for everything.",
    },
  ];

  return (
    <section id="experience" className="bg-bg py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 max-w-xl lg:mb-28">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-sage">
            The Experience
          </p>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Health, simplified.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-border bg-bg-alt p-10 md:p-12"
            >
              <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-green text-sm text-text-on-accent">
                {step.num}
              </span>
              <h3 className="mb-4 text-2xl md:text-[1.65rem]">{step.title}</h3>
              <p className="text-base font-light leading-relaxed text-text-secondary">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
