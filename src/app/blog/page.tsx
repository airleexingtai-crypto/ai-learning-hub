import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Section, NarrowContainer } from "@/components/shared/Container";
import ArticleCard from "@/components/blog/ArticleCard";
import Tag from "@/components/shared/Tag";
import Button from "@/components/shared/Button";
import { getAllArticles, getCategories } from "@/lib/articles";
import { generateWebSiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Tutorials & Guides — Blog",
  description:
    "Browse our collection of AI tutorials, guides, and insights. Learn ChatGPT, Claude, Midjourney, and more with practical step-by-step articles.",
  openGraph: {
    title: "AI Tutorials & Guides — AI Learning Hub Blog",
    description:
      "Practical AI tutorials and in-depth guides. From beginner to advanced.",
  },
};

export default async function BlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: activeCategory } = await searchParams;
  const allArticles = getAllArticles();
  const categories = getCategories();

  const blogCategories = categories.filter((c) => c !== "Tool Guides");

  const articles = activeCategory
    ? allArticles.filter((a) => a.category === activeCategory)
    : allArticles;

  const title = activeCategory
    ? `${activeCategory} Articles`
    : "AI Tutorials & Guides";

  const description = activeCategory
    ? `Articles about ${activeCategory.toLowerCase()} — tutorials, guides, and in-depth coverage.`
    : "Practical articles to help you master AI tools and technology";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema()),
        }}
      />

      <Section className="pt-20 pb-8 md:pt-28">
        <NarrowContainer>
          <div className="reveal text-center">
            {activeCategory && (
              <div className="mb-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--text-tertiary)] hover:text-[var(--text)] transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to all articles
                </Link>
              </div>
            )}
            <h1 className="text-[2.25rem] md:text-[3rem] font-bold font-[family-name:var(--font-serif)] text-[var(--text)] leading-tight tracking-[-0.02em]">
              {title}
            </h1>
            <p className="mt-4 text-base text-[var(--text-secondary)]">
              {description}
            </p>
          </div>
        </NarrowContainer>
      </Section>

      {/* Category filter + AI Tools link */}
      <div className="container-page pb-8">
        <div className="reveal flex flex-wrap justify-center items-center gap-2">
          <Tag href="/blog" active={!activeCategory}>
            All
          </Tag>
          {blogCategories.map((cat) => (
            <Tag
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              active={cat === activeCategory}
            >
              {cat}
            </Tag>
          ))}
          {/* Divider + AI Tools directory link */}
          <span className="mx-1 w-px h-5 bg-[var(--border)]" />
          <a
            href="/tools"
            className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium leading-relaxed rounded-full transition-colors duration-200 font-sans text-[var(--accent)] bg-[rgba(var(--accent-rgb),0.06)] hover:bg-[rgba(var(--accent-rgb),0.12)]"
          >
            AI Tools
            <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Articles Grid */}
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
