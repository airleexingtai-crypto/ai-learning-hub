import Link from "next/link";
import Tag from "@/components/shared/Tag";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  const date = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="card-link relative bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_6px_16px_rgba(0,0,0,0.03)] focus-within:outline-2 focus-within:outline-[var(--accent)] focus-within:outline-offset-2 transition-all duration-250 ease-out cursor-pointer">
      {/* Meta row — z-10 so tags float above the stretched link overlay */}
      <div className="relative z-10 flex items-center gap-3 mb-3">
        <Tag href={`/blog?category=${encodeURIComponent(article.category)}`}>
          {article.category}
        </Tag>
        <time
          dateTime={article.date}
          className="text-xs text-[var(--text-tertiary)]"
        >
          {date}
        </time>
      </div>

      {/* Title — ::after stretches across the entire card for the main link */}
      <h3 className="text-xl font-semibold text-[var(--text)] mb-2 leading-snug font-sans">
        <Link
          href={`/blog/${article.slug}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {article.title}
        </Link>
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
        {article.description}
      </p>

      {/* Tags */}
      {article.tags.length > 0 && (
        <div className="relative z-10 flex flex-wrap gap-1.5 mt-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-[var(--text-tertiary)] bg-[var(--surface-hover)] px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
