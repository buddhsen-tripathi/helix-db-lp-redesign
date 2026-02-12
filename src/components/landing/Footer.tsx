import Image from "next/image";

const footerLinks = {
  Main: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "#blog" },
    { label: "Docs", href: "#docs" },
  ],
  Docs: [
    { label: "Introduction", href: "#" },
    { label: "Python SDK", href: "#" },
    { label: "HQL", href: "#" },
  ],
  Contact: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Discord", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pt-24 md:px-12">
      <div className="rounded-t-2xl border border-b-0 border-white/10 bg-white/[0.03] p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Logo */}
          <div className="flex items-start gap-3">
            <Image
              src="/helix-white.svg"
              alt="HelixDB"
              width={28}
              height={28}
              className="mt-0.5 h-7 w-7 object-contain"
            />
            <span className="text-xl font-bold text-white">HelixDB</span>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-zinc-500">Built in San Francisco</p>
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Helix DB, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
