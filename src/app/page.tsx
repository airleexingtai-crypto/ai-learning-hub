import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Globe } from "lucide-react";
import { Section } from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import ArticleCard from "@/components/blog/ArticleCard";
import Tag from "@/components/shared/Tag";
import NewsletterForm from "@/components/home/NewsletterForm";
import AdUnit from "@/components/shared/AdUnit";
import { getAllArticles, getCategories } from "@/lib/articles";
import { generateWebSiteSchema } from "@/lib/seo";

const hubSections = [
  {
    name: "AI Tools",
    description:
      "Discover the best AI tools — ChatGPT, Claude, Gemini, Midjourney, and more. Honest comparisons, pricing breakdowns, and when to use each one.",
    href: "/tools",
    icon: Sparkles,
    gradient: "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
    accent: "bg-amber-100 text-amber-700",
  },
  {
    name: "Beginner Guides",
    description:
      "New to AI? Start here. No jargon, no assumptions. Learn how to write prompts, understand AI terms, and spot hallucinations — from zero.",
    href: "/blog?category=Guides",
    icon: BookOpen,
    gradient: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    accent: "bg-blue-100 text-blue-700",
  },
  {
    name: "AI News",
    description:
      "What's happening in AI this week. Industry moves, model releases, policy shifts — curated and explained in plain English, not press-release-speak.",
    href: "/news",
    icon: Globe,
    gradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
    accent: "bg-emerald-100 text-emerald-700",
  },
];

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.filter((a) => a.featured).slice(0, 3);
  const recent = articles.slice(0, 6);
  const allCategories = getCategories();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema()),
        }}
      />

      {/* ======== Hero ======== */}
      <Section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="reveal text-center max-w-3xl mx-auto">
          <h1 className="text-[2.25rem] md:text-[3.5rem] font-bold font-[family-name:var(--font-serif)] text-[var(--text)] leading-[1.1] tracking-[-0.03em] text-balance">
            Master AI,
            <br />
            <span className="text-[var(--accent)]">One Tutorial at a Time</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto text-balance">
            Practical, in-depth guides on ChatGPT, Claude, Midjourney, and the
            AI tools shaping our future. From first prompt to advanced workflows.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button href="/blog" variant="primary">
              Browse Tutorials
              <ArrowRight size={16} />
            </Button>
            <Button href="/about" variant="secondary">
              About This Site
            </Button>
          </div>
        </div>
      </Section>

      {/* ======== Hub Sections — 3 Cards ======== */}
      <Section alt>
        <div className="reveal">
          <h2 className="text-2xl md:text-[2rem] font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] text-center mb-2">
            What do you want to explore?
          </h2>
          <p className="text-sm text-[var(--text-tertiary)] text-center mb-10">
            Three ways to dive into AI — pick your path
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {hubSections.map((section) => (
              <Link
                key={section.name}
                href={section.href}
                className="group relative flex flex-col items-center gap-5 p-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl hover:border-[var(--border-hover)] hover:-translate-y-1 hover:shadow-sm transition-all duration-300 text-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${section.accent}`}
                >
                  <section.icon size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                    {section.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ======== Featured Articles ======== */}
      {featured.length > 0 && (
        <Section id="featured">
          <div className="reveal">
            <h2 className="text-2xl md:text-[2rem] font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mb-2">
              Featured Articles
            </h2>
            <p className="text-sm text-[var(--text-tertiary)] mb-10">
              Our best content to get you started
            </p>
            <div className="article-grid">
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ======== Ad Banner ======== */}
      <div className="container-page">
        <AdUnit slot="homepage-banner" />
      </div>

      {/* ======== Latest Articles ======== */}
      <Section alt={featured.length === 0} id="latest">
        <div className="reveal">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-[2rem] font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mb-2">
                Latest Articles
              </h2>
              <p className="text-sm text-[var(--text-tertiary)]">
                Fresh tutorials and insights
              </p>
            </div>
            {allCategories.length > 0 && (
              <div className="hidden sm:flex flex-wrap items-center gap-2">
                {allCategories
                  .filter((cat) => cat !== "Tool Guides")
                  .slice(0, 2)
                  .map((cat) => (
                    <Tag key={cat} href={`/blog?category=${encodeURIComponent(cat)}`}>
                      {cat}
                    </Tag>
                  ))}
                <a
                  href="/tools"
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium leading-relaxed rounded-full transition-colors duration-200 font-sans text-[var(--accent)] bg-[rgba(var(--accent-rgb),0.06)] hover:bg-[rgba(var(--accent-rgb),0.12)]"
                >
                  AI Tools
                </a>
              </div>
            )}
          </div>

          {recent.length > 0 ? (
            <div className="article-grid">
              {recent.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-[var(--border)] rounded-xl">
              <p className="text-[var(--text-tertiary)] mb-4">
                Articles coming soon. Check back for AI tutorials and guides.
              </p>
              <Button href="/about" variant="secondary">
                Learn About This Project
              </Button>
            </div>
          )}

          {articles.length > 6 && (
            <div className="mt-10 text-center">
              <Button href="/blog" variant="secondary">
                View All Articles
                <ArrowRight size={16} />
              </Button>
            </div>
          )}
        </div>
      </Section>

      {/* ======== Newsletter CTA ======== */}
      <Section id="newsletter">
        <div className="reveal text-center max-w-lg mx-auto">
          <h2 className="text-2xl md:text-[2rem] font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mb-3">
            Stay Updated
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            New AI tutorials every week. No spam, just quality content.
          </p>
          <NewsletterForm />
          <p className="mt-3 text-xs text-[var(--text-tertiary)]">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </Section>
    </>
  );
}
