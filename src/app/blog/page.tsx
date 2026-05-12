import { Metadata } from "next";
import Link from "next/link";
import { Section, NarrowContainer } from "@/components/shared/Container";
import ArticleCard from "@/components/blog/ArticleCard";
import Tag from "@/components/shared/Tag";
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

export default function BlogListPage() {
  const articles = getAllArticles();
  const categories = getCategories();

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
            <h1 className="text-[2.25rem] md:text-[3rem] font-bold font-[family-name:var(--font-serif)] text-[var(--text)] leading-tight tracking-[-0.02em]">
              AI Tutorials &amp; Guides
            </h1>
            <p className="mt-4 text-base text-[var(--text-secondary)]">
              Practical articles to help you master AI tools and technology
            </p>
          </div>
        </NarrowContainer>
      </Section>

      {/* Category filter */}
      {categories.length > 0 && (
        <div className="container-page pb-8">
          <div className="reveal flex flex-wrap justify-center gap-2">
            <Tag href="/blog">All</Tag>
            {categories.map((cat) => (
              <Tag key={cat} href={`/blog?category=${encodeURIComponent(cat)}`}>
                {cat}
              </Tag>
            ))}
          </div>
        </div>
      )}

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
              No articles yet
            </p>
            <p className="text-sm text-[var(--text-tertiary)]">
              Check back soon for AI tutorials and guides.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
