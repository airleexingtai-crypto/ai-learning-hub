import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Globe, ExternalLink } from "lucide-react";
import { Section } from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import ArticleCard from "@/components/blog/ArticleCard";
import Tag from "@/components/shared/Tag";
import NewsletterForm from "@/components/home/NewsletterForm";
import AdUnit from "@/components/shared/AdUnit";
import { getAllArticles, getCategories } from "@/lib/articles";
import { generateWebSiteSchema } from "@/lib/seo";

const aiTools = [
  {
    name: "ChatGPT",
    description: "The most versatile AI assistant. Best for coding, writing, brainstorming, and everyday tasks.",
    url: "https://chatgpt.com",
    tags: ["Free + $20/mo", "OpenAI"],
  },
  {
    name: "Gemini",
    description: "Google's AI with native search, YouTube, Maps, and Workspace integration. Best for research.",
    url: "https://gemini.google.com",
    tags: ["Free + $19.99/mo", "Google"],
  },
  {
    name: "Claude",
    description: "Best writing quality and longest context window. Ideal for long documents and deep analysis.",
    url: "https://claude.ai",
    tags: ["Free + $20/mo", "Anthropic"],
  },
  {
    name: "Grok",
    description: "xAI's assistant with real-time X (Twitter) access. Best for trending topics and fact-checking.",
    url: "https://x.ai/grok",
    tags: ["Free + Premium", "xAI"],
  },
  {
    name: "Perplexity",
    description: "AI-powered search engine with citations. Great for research that needs sources.",
    url: "https://perplexity.ai",
    tags: ["Free + $20/mo", "Search"],
  },
  {
    name: "Midjourney",
    description: "Still the gold standard for AI image generation. Best for artistic and professional visuals.",
    url: "https://midjourney.com",
    tags: ["From $10/mo", "Images"],
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer integrated into VS Code and JetBrains. Best for in-IDE coding help.",
    url: "https://github.com/features/copilot",
    tags: ["Free + $10/mo", "Microsoft"],
  },
  {
    name: "Cursor",
    description: "AI-first code editor built on VS Code. Best for agentic coding with full project context.",
    url: "https://cursor.com",
    tags: ["Free + $20/mo", "Editor"],
  },
];

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles.filter((a) => a.featured).slice(0, 3);
  const recent = articles.slice(0, 6);
  const allCategories = getCategories();

  const beginnerGuides = articles.filter(
    (a) => a.category === "Guides" && a.tags.includes("beginner")
  ).slice(0, 3);

  const newsArticles = articles
    .filter((a) => a.category === "News")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

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

      {/* ======== AI Tools Section ======== */}
      <Section alt id="ai-tools">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles size={24} className="text-[var(--accent)]" />
            <h2 className="text-2xl md:text-[2rem] font-semibold font-[family-name:var(--font-serif)] text-[var(--text)]">
              Popular AI Tools
            </h2>
          </div>
          <p className="text-sm text-[var(--text-tertiary)] mb-10">
            The tools we use and recommend. All have solid free tiers — try them before you pay.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-[var(--border-hover)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {tool.name}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors opacity-0 group-hover:opacity-100"
                  />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[var(--text-tertiary)] bg-[var(--surface-alt)] px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ======== Beginner Guides Section ======== */}
      <Section id="beginner-guides">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={24} className="text-[var(--accent)]" />
            <h2 className="text-2xl md:text-[2rem] font-semibold font-[family-name:var(--font-serif)] text-[var(--text)]">
              Beginner Guides
            </h2>
          </div>
          <p className="text-sm text-[var(--text-tertiary)] mb-10">
            New to AI? Start here. No jargon, no assumptions, no prior knowledge needed.
          </p>

          {beginnerGuides.length > 0 ? (
            <div className="article-grid">
              {beginnerGuides.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-[var(--border)] rounded-xl">
              <p className="text-[var(--text-tertiary)]">Beginner guides coming soon.</p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Button href="/blog?category=Guides" variant="secondary">
              All Beginner Guides
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>

      {/* ======== AI News Section ======== */}
      <Section alt id="ai-news">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-2">
            <Globe size={24} className="text-[var(--accent)]" />
            <h2 className="text-2xl md:text-[2rem] font-semibold font-[family-name:var(--font-serif)] text-[var(--text)]">
              Latest AI News
            </h2>
          </div>
          <p className="text-sm text-[var(--text-tertiary)] mb-10">
            What's happening in AI this week. Curated, not generated.
          </p>

          {newsArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {newsArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col gap-2 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-[var(--border-hover)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <h3 className="font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors text-[15px] leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 mt-auto pt-2">
                    <span className="text-xs text-[var(--text-tertiary)]">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-xs text-[var(--accent)] group-hover:translate-x-0.5 transition-transform">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
              {newsArticles.length < 5 &&
                Array.from({ length: 5 - newsArticles.length }).map((_, i) => (
                  <div
                    key={`placeholder-${i}`}
                    className="flex flex-col gap-2 p-5 bg-[var(--surface)] border border-dashed border-[var(--border)] rounded-xl"
                  >
                    <div className="h-4 bg-[var(--surface-alt)] rounded w-3/4" />
                    <div className="h-3 bg-[var(--surface-alt)] rounded w-full" />
                    <div className="h-3 bg-[var(--surface-alt)] rounded w-1/2" />
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-[var(--border)] rounded-xl">
              <p className="text-[var(--text-tertiary)]">News articles coming soon.</p>
            </div>
          )}

          {newsArticles.length > 0 && (
            <div className="mt-8 text-center">
              <Button href="/blog?category=News" variant="secondary">
                More AI News
                <ArrowRight size={16} />
              </Button>
            </div>
          )}
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
              <div className="hidden sm:flex flex-wrap gap-2">
                {allCategories.slice(0, 4).map((cat) => (
                  <Tag key={cat} href={`/blog?category=${encodeURIComponent(cat)}`}>
                    {cat}
                  </Tag>
                ))}
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
