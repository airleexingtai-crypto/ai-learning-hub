"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-[var(--bg)]/85 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav
        className="container-page flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold font-[family-name:var(--font-serif)] text-[var(--text)] tracking-tight"
        >
          AI Learning Hub
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="btn-primary text-white bg-[var(--accent)] px-4 py-2 rounded-lg text-[15px] font-medium hover:bg-[var(--accent-hover)] transition-colors duration-200"
          >
            Start Learning
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-[var(--text-secondary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-white">
          <div className="container-page py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[16px] font-medium text-[var(--text-secondary)] hover:text-[var(--text)] py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="text-center text-white bg-[var(--accent)] px-4 py-3 rounded-lg text-[15px] font-medium mt-2"
            >
              Start Learning
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
