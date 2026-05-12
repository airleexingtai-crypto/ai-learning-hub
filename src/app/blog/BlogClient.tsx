"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ArticleCard from "@/components/blog/ArticleCard";
import Button from "@/components/shared/Button";
import { Section } from "@/components/shared/Container";
import type { ArticleMeta } from "@/lib/articles";

export default function BlogClient({
  articles: allArticles,
  categories,
}: {
  articles: ArticleMeta[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    setActiveCategory(cat ? decodeURIComponent(cat) : null);
  }, []);

  const blogCategories = categories.filter((c) => c !== "Tool Guides");

  const articles = activeCategory
    ? allArticles.filter((a) => a.category === activeCategory)
    : allArticles;

  const handleCategoryClick = (cat: string | null) => {
    if (cat === null) {
      window.history.pushState({}, "", "/blog");
      setActiveCategory(null);
    } else {
      window.history.pushState({}, "", `/blog?category=${encodeURIComponent(cat)}`);
      setActiveCategory(cat);
    }
  };

  return (
    <>
      <div className="container-page pb-8">
        <div className="reveal flex flex-wrap justify-center items-center gap-2">
          <span
            onClick={() => handleCategoryClick(null)}
            className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium leading-relaxed rounded-full transition-colors duration-200 font-sans cursor-pointer ${
              !activeCategory
                ? "text-white bg-[var(--accent)]"
                : "text-[var(--accent)] bg-[rgba(var(--accent-rgb),0.06)] hover:bg-[rgba(var(--accent-rgb),0.12)]"
            }`}
          >
            All
          </span>
          {blogCategories.map((cat) => (
            <span
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium leading-relaxed rounded-full transition-colors duration-200 font-sans cursor-pointer ${
                cat === activeCategory
                  ? "text-white bg-[var(--accent)]"
                  : "text-[var(--accent)] bg-[rgba(var(--accent-rgb),0.06)] hover:bg-[rgba(var(--accent-rgb),0.12)]"
              }`}
            >
              {cat}
            </span>
          ))}
          <span className="mx-1 w-px h-5 bg-[var(--border)]" />
          <Link
            href="/tools"
            className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium leading-relaxed rounded-full transition-colors duration-200 font-sans text-[var(--accent)] bg-[rgba(var(--accent-rgb),0.06)] hover:bg-[rgba(var(--accent-rgb),0.12)]"
          >
            AI Tools
            <ExternalLink size={11} />
          </Link>
        </div>
      </div>

      {activeCategory && (
        <div className="container-page pb-4 text-center">
          <button
            onClick={() => handleCategoryClick(null)}
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-tertiary)] hover:text-[var(--text)] transition-colors mb-2"
          >
            <ArrowLeft size={14} />
            Back to all articles
          </button>
        </div>
      )}

      <Section className="pt-4">
        {articles.length > 0 ? (
          <div className="reveal-stagger article-grid">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="reveal text-center py-20 border border-dashed border-[var(--border)] rounded-xl">
            <p className="text-[var(--text-tertiary)] text-lg mb-2">
              No articles in this category yet
            </p>
            <p className="text-sm text-[var(--text-tertiary)] mb-6">
              Check back soon or browse all articles.
            </p>
            <Button href="/blog" variant="secondary">
              View All Articles
            </Button>
          </div>
        )}
      </Section>
    </>
  );
}
