'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon, DocsIcon, BlogIcon, DemoIcon, GitHubIcon } from '../ui/Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Docs', icon: DocsIcon, href: '#docs' },
  { label: 'Blog', icon: BlogIcon, href: '#blog' },
  { label: 'Demo', icon: DemoIcon, href: '#demo' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-6 left-0 right-0 z-50 mx-auto max-w-5xl transition-all duration-300",
        scrolled ? "px-4" : "px-0"
      )}
    >
      <div className={cn(
        "flex h-14 items-center justify-between rounded-full border px-6 backdrop-blur-xl transition-all",
        scrolled
          ? "border-white/10 bg-black/50 shadow-lg"
          : "border-transparent bg-transparent"
      )}>
        <div className="flex items-center gap-2">
          <Image
            src="/helix-white.svg"
            alt="Helix DB Logo"
            width={16}
            height={16}
            className="h-5 w-5 object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-white">Helix DB</span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://github.com/HelixDB/helix-db"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
          >
            <GitHubIcon className="h-4 w-4" />
            3.8k
          </a>
          <button
            className="md:hidden p-2 text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 left-4 right-4 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-4 shadow-2xl"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-base font-medium text-slate-300 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/HelixDB/helix-db"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <GitHubIcon className="h-4 w-4" />
                3.8k
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
