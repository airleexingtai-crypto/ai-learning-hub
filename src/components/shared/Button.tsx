import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-1.5 px-5 py-2.5 text-[15px] font-medium leading-none rounded-lg cursor-pointer transition-all duration-200 ease-out font-sans";

  const variants = {
    primary:
      "text-white bg-[var(--accent)] border border-transparent hover:bg-[var(--accent-hover)] hover:shadow-[0_2px_8px_rgba(var(--accent-rgb),0.25)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 disabled:bg-[#CBD5E1] disabled:text-[#94A3B8] disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none",
    secondary:
      "text-[var(--text)] bg-transparent border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
