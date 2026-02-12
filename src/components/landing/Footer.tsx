export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Helix DB. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-white">
            Terms
          </a>
          <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
