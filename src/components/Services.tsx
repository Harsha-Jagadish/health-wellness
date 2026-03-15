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
      text: "Weekly meals crafted to your plan, prepared by vetted chefs, delivered with precision.",
    },
    {
      title: "Ongoing Optimization",
      text: "Your plan evolves with you. Regular check-ins, data review, and adjustments to keep you moving forward.",
    },
  ];

  return (
    <section id="services" className="bg-bg-dark py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-20 max-w-2xl lg:mb-28">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-text-faint">
            What We Coordinate
          </p>
          <h2 className="text-4xl font-light leading-tight text-text-on-dark md:text-5xl">
            Every detail, <em>considered.</em>
          </h2>
        </div>

        {/* Service rows */}
        <div>
          {services.map((s, i) => (
            <div
              key={i}
              className={`grid gap-4 border-t border-white/10 py-12 md:grid-cols-12 md:items-baseline md:gap-8 md:py-16 ${
                i === services.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="text-sm text-text-on-dark-muted md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-light text-text-on-dark md:col-span-4 md:text-2xl">
                {s.title}
              </h3>
              <p className="max-w-lg text-base font-light leading-relaxed text-text-faint md:col-span-7">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
