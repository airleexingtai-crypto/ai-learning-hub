import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Clock } from "lucide-react";
import { Section, NarrowContainer } from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import ArticleCard from "@/components/blog/ArticleCard";
import { getAllArticles, getCategories } from "@/lib/articles";
import { generateWebSiteSchema, generateCollectionPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI News — Latest Artificial Intelligence News Explained in Plain English",
  description:
    "Breaking AI news curated and explained — OpenAI, Google, Anthropic, DeepSeek, chip wars, policy shifts, and more. No press-release-speak, just what matters and why.",
  openGraph: {
    title: "AI News — Latest Artificial Intelligence News Explained",
    description:
      "Curated AI news in plain English. Industry moves, model releases, policy shifts — what's happening and what it means for you.",
  },
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  const articles = getAllArticles();
  const newsArticles = articles.filter((a) => a.category === "News");
  const headlines = newsArticles.slice(0, 3);
  const rest = newsArticles.slice(3);
  const allCategories = getCategories();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCollectionPageSchema({
              name: "AI News",
              description:
                "Breaking AI news curated and explained in plain English.",
              url: "/news",
              items: newsArticles.map((a) => ({
                name: a.title,
                description: a.description,
                url: `/blog/${a.slug}`,
                datePublished: a.date,
                dateModified: a.lastModified || a.date,
              })),
            })
          ),
        }}
      />

      {/* ======== Hero ======== */}
      <Section className="pt-20 pb-8 md:pt-28">
        <NarrowContainer>
          <div className="reveal text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold mb-6">
              <Globe size={14} />
              Updated Daily
            </div>
            <h1 className="text-[2.25rem] md:text-[3rem] font-bold font-[family-name:var(--font-serif)] text-[var(--text)] leading-tight tracking-[-0.02em]">
              AI News
            </h1>
            <p className="mt-4 text-base text-[var(--text-secondary)] max-w-lg mx-auto text-balance">
              Breaking AI news curated and explained in plain English. What
              happened, why it matters, and what it means for you — not just
              the press release version.
            </p>
          </div>
        </NarrowContainer>
      </Section>

      {/* ======== Top Headlines ======== */}
      {headlines.length > 0 && (
        <Section className="pt-0 pb-8">
          <div className="reveal">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <h2 className="text-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-widest">
                Top Headlines
              </h2>
            </div>
            <div className="article-grid">
              {headlines.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ======== More News ======== */}
      {rest.length > 0 && (
        <Section alt className="pt-0">
          <div className="reveal">
            <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mb-8">
              More News
            </h2>
            <div className="article-grid">
              {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ======== Empty State ======== */}
      {newsArticles.length === 0 && (
        <Section className="pt-0">
          <div className="reveal text-center py-20 border border-dashed border-[var(--border)] rounded-xl">
            <p className="text-[var(--text-tertiary)] text-lg mb-2">
              No news articles yet
            </p>
            <p className="text-sm text-[var(--text-tertiary)] mb-6">
              Check back soon for the latest AI news.
            </p>
          </div>
        </Section>
      )}

      {/* ======== Bottom CTA ======== */}
      <Section>
        <NarrowContainer>
          <div className="reveal text-center p-10 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
            <Clock size={28} className="mx-auto mb-3 text-[var(--text-tertiary)]" />
            <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mb-2">
              Want weekly AI news in your inbox?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mb-5 max-w-sm mx-auto">
              Every Sunday morning — the 5 most important AI stories of the
              week, explained in 3 minutes.
            </p>
            <Button href="/blog" variant="primary">
              Browse All Articles
              <ArrowRight size={16} />
            </Button>
          </div>
        </NarrowContainer>
      </Section>
    </>
  );
}
