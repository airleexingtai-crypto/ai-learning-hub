"use client";

import { useState } from "react";
import Button from "@/components/shared/Button";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--text)] mb-1.5"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full px-4 py-2.5 text-sm bg-[var(--surface)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-[var(--text)] mb-1.5"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          className="w-full px-4 py-2.5 text-sm bg-[var(--surface)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--text)] mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 text-sm bg-[var(--surface)] border border-[var(--border)] rounded-lg text-[var(--text)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-y"
          placeholder="What would you like to say?"
        />
      </div>
      <Button type="submit">
        <Send size={14} />
        Send Message
      </Button>
    </form>
  );
}
