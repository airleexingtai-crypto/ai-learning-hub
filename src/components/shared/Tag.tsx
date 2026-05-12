import Link from "next/link";

type TagProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Tag({ children, href, className = "" }: TagProps) {
  const cls = `inline-flex items-center px-2.5 py-0.5 text-xs font-medium leading-relaxed rounded-full transition-colors duration-200 text-[var(--accent)] bg-[rgba(var(--accent-rgb),0.06)] hover:bg-[rgba(var(--accent-rgb),0.12)] font-sans ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return <span className={cls}>{children}</span>;
}
