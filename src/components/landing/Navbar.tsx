import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-white">
          Helix DB
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-zinc-400 transition-colors hover:text-white">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-zinc-400 transition-colors hover:text-white">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm text-zinc-400 transition-colors hover:text-white">
            FAQ
          </Link>
          <Link
            href="#cta"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
