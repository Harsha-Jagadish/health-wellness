export default function Trust() {
  const pillars = [
    {
      title: "Discretion",
      text: "Your health data, preferences, and routines — treated with the highest level of privacy.",
    },
    {
      title: "Safety",
      text: "Mandatory allergy protocols, vetted food safety standards, and cross-contamination awareness.",
    },
    {
      title: "Quality",
      text: "Licensed professionals, certified kitchens, and premium ingredients — no shortcuts.",
    },
    {
      title: "Consistency",
      text: "The same care, precision, and attention — every single week.",
    },
  ];

  return (
    <section id="trust" className="bg-bg-alt py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-20 max-w-xl text-center lg:mb-28">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-sage">
            Our Promise
          </p>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Built on <em>trust.</em>
          </h2>
          <p className="mt-6 text-lg font-light text-text-secondary">
            Premium service is meaningless without rigour behind it.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-bg p-10"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-green text-sm text-text-on-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-xl">{p.title}</h3>
              <p className="text-[15px] font-light leading-relaxed text-text-secondary">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
