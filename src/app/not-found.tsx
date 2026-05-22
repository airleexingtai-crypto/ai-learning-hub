import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-[6rem] font-bold font-[family-name:var(--font-serif)] text-[var(--text)] leading-none tracking-[-0.04em]">
        404
      </p>
      <h1 className="mt-4 text-xl font-semibold text-[var(--text)]">
        Page not found
      </h1>
      <p className="mt-2 text-[var(--text-secondary)] max-w-md">
        The page you were looking for has moved, was deleted, or never existed.
      </p>
      <div className="flex flex-wrap gap-3 mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium border border-[var(--border)] text-[var(--text)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
        >
          <Search size={16} />
          Browse Articles
        </Link>
      </div>
    </div>
  );
}
