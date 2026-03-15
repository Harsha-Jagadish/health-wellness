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
    <section id="services" className="bg-bg-accent py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 max-w-2xl lg:mb-28">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-sage-light">
            What We Handle
          </p>
          <h2 className="text-4xl leading-tight text-text-on-accent md:text-5xl">
            Every detail, <em>considered.</em>
          </h2>
        </div>

        <div>
          {services.map((s, i) => (
            <div
              key={i}
              className={`grid gap-4 border-t border-border-dark py-12 md:grid-cols-12 md:items-baseline md:gap-8 md:py-16 ${
                i === services.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="text-sm text-sage md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl text-text-on-accent md:col-span-4 md:text-2xl">
                {s.title}
              </h3>
              <p className="max-w-lg text-[15px] font-light leading-relaxed text-text-on-accent-muted md:col-span-7">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
