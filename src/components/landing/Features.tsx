const features = [
  {
    title: "Feature One",
    description: "Describe the first key feature of your product here.",
  },
  {
    title: "Feature Two",
    description: "Describe the second key feature of your product here.",
  },
  {
    title: "Feature Three",
    description: "Describe the third key feature of your product here.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
        Features
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
        A brief overview of what makes your product great.
      </p>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20"
          >
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
