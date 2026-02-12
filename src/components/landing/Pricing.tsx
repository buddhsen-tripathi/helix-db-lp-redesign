const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals getting started.",
    features: ["Feature A", "Feature B", "Feature C"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For teams that need more.",
    features: ["Everything in Free", "Feature D", "Feature E", "Feature F"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments.",
    features: ["Everything in Pro", "Feature G", "Feature H", "Priority Support"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
        Pricing
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
        Simple, transparent pricing for every stage.
      </p>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-8 ${
              plan.highlighted
                ? "border-white/30 bg-white/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <p className="mt-1 text-sm text-zinc-400">{plan.description}</p>
            <p className="mt-6 text-4xl font-bold text-white">
              {plan.price}
              {plan.price !== "Custom" && (
                <span className="text-base font-normal text-zinc-400">/mo</span>
              )}
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="text-white">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full rounded-full py-3 text-sm font-medium transition-colors ${
                plan.highlighted
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
