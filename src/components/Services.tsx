export default function Services() {
  const services = [
    {
      title: "Private Health Concierge",
      text: "Your single point of contact — someone who learns your goals, coordinates every detail, and ensures nothing is overlooked.",
    },
    {
      title: "Diagnostics Coordination",
      text: "Bloodwork, DEXA scans, and health assessments — scheduled and managed without the hassle.",
    },
    {
      title: "Expert Network",
      text: "Physicians, dietitians, and specialists — connected to your plan, not operating in silos.",
    },
    {
      title: "Personalized Meal Execution",
      text: "Ready-to-eat meals planned around your goals, preferences, and dietary needs — then prepared and delivered through vetted culinary partners.",
    },
    {
      title: "Ongoing Optimization",
      text: "As your routine, data, or goals evolve, your meals and support evolve with you.",
    },
  ];

  return (
    <section id="services" className="bg-bg-elevated py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-20 max-w-2xl lg:mb-28">
          <p className="mb-4 text-[13px] uppercase tracking-[0.25em] text-gold">
            What We Handle
          </p>
          <h2 className="text-4xl font-normal leading-tight md:text-5xl">
            Every detail, <em>considered.</em>
          </h2>
        </div>

        {/* Service cards — staggered grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group border border-border bg-bg-card p-10 transition-all duration-500 hover:border-gold/20 md:p-12 ${
                i === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <span className="mb-6 block text-sm text-gold/30 transition-colors group-hover:text-gold/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-4 text-xl font-normal md:text-2xl">{s.title}</h3>
              <p className="max-w-md text-[15px] font-light leading-relaxed text-text-secondary">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
