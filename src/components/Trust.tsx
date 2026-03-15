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
        {/* Header */}
        <div className="mx-auto mb-20 max-w-xl text-center lg:mb-28">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-text-muted">
            Our Promise
          </p>
          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Built on <em>trust.</em>
          </h2>
          <p className="mt-6 text-lg font-light text-text-muted">
            Premium service is meaningless without rigour behind it.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid gap-px overflow-hidden border border-border sm:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={i} className="border border-border bg-bg-alt p-10 md:p-14 lg:p-20">
              <span className="mb-5 block text-sm text-text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-light md:text-3xl">{p.title}</h3>
              <p className="mt-5 max-w-xs text-base font-light leading-relaxed text-text-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
