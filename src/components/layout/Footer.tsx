import Link from "next/link";

const footerLinks = {
  Explore: [
    { href: "/tools", label: "AI Tools" },
    { href: "/blog?category=Guides", label: "Beginner Guides" },
    { href: "/news", label: "AI News" },
    { href: "/blog", label: "All Articles" },
  ],
  Site: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white mt-24">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold font-[family-name:var(--font-serif)] text-[var(--text)]"
            >
              AI Learning Hub
            </Link>
            <p className="mt-3 text-sm text-[var(--text-tertiary)] leading-relaxed max-w-xs">
              Practical AI education for everyone. Master ChatGPT, Claude,
              Midjourney, and more with in-depth tutorials and guides.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-tertiary)]">
          <p>
            &copy; {new Date().getFullYear()} AI Learning Hub. All rights
            reserved.
          </p>
          <p>
            Built for learners. Optimized for search engines.
          </p>
        </div>
      </div>
    </footer>
  );
}
