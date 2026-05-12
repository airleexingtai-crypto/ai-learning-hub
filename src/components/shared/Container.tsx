import Link from "next/link";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  id?: string;
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={`container-page ${className}`}>
      {children}
    </Tag>
  );
}

export function NarrowContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container-prose ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
  alt = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-24 ${alt ? "bg-[var(--surface-alt)]" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
