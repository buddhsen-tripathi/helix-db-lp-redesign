export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
      <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
        Your headline goes here
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
        A short description of your product. Explain the value proposition in one or two sentences.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#cta"
          className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
        >
          Get Started
        </a>
        <a
          href="#features"
          className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
