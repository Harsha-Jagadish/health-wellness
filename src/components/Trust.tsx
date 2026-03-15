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
    <section id="trust" className="bg-bg-elevated py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-xl text-center lg:mb-28">
          <p className="mb-4 text-[13px] uppercase tracking-[0.25em] text-gold">
            Our Promise
          </p>
          <h2 className="text-4xl font-normal leading-tight md:text-5xl">
            Built on <em className="text-gold">trust.</em>
          </h2>
          <p className="mt-6 text-lg font-light text-text-secondary">
            Premium service is meaningless without rigour behind it.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="border border-border bg-bg-card p-10 md:p-14 lg:p-20"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-gold/20 text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mb-4 text-2xl font-normal md:text-3xl">{p.title}</h3>
              <p className="max-w-xs text-[15px] font-light leading-relaxed text-text-secondary">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
