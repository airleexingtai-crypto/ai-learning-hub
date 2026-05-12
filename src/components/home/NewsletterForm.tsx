"use client";

import Button from "@/components/shared/Button";

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-2 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-4 py-2.5 text-sm bg-[var(--surface)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
