import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section, NarrowContainer } from "@/components/shared/Container";
import Tag from "@/components/shared/Tag";
import AdUnit from "@/components/shared/AdUnit";
import {
  getArticleBySlug,
  getAllArticles,
  type ArticleMeta,
} from "@/lib/articles";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ailearninghub.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: true },
    };
  }

  const canonical = article.meta.canonical || `${SITE_URL}/blog/${slug}`;
  const ogImage = article.meta.image
    ? article.meta.image.startsWith("http")
      ? article.meta.image
      : `${SITE_URL}${article.meta.image}`
    : `${SITE_URL}/images/og-default.jpg`;

  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical },
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      type: "article",
      publishedTime: article.meta.date,
      modifiedTime: article.meta.lastModified,
      authors: [article.meta.author],
      tags: article.meta.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.meta.title,
        },
      ],
      section: article.meta.category,
    },
    twitter: {
      card: "summary_large_image",
      title: article.meta.title,
      description: article.meta.description,
      images: [ogImage],
    },
    keywords: article.meta.tags,
    robots: {
      index: true,
      follow: true,
    },
  };
}

const mdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[var(--text)] mt-10 mb-3 leading-tight" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-[var(--text)] mt-8 mb-2 leading-snug" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="font-sans text-lg font-semibold text-[var(--text)] mt-6 mb-2" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 leading-relaxed text-[var(--text-secondary)]" {...props} />
  ),
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a className="text-[var(--accent)] hover:underline" {...props} />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre className="bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg p-4 overflow-x-auto font-mono text-sm my-6" {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code className="font-mono text-sm bg-[var(--surface-alt)] px-1.5 py-0.5 rounded" {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l-[3px] border-[var(--accent)] pl-4 my-6 text-[var(--text-tertiary)] italic" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="pl-6 my-4 space-y-1.5 text-[var(--text-secondary)]" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="pl-6 my-4 space-y-1.5 text-[var(--text-secondary)] list-decimal" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  img: (props: React.ComponentPropsWithoutRef<"img">) => (
    <img className="rounded-lg max-w-full my-6" alt={props.alt || ""} loading="lazy" {...props} />
  ),
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="text-[var(--text)] font-semibold" {...props} />
  ),
  AdUnit: () => <AdUnit slot="mid-content" />,
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const date = new Date(article.meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const lastModified = article.meta.lastModified
    ? new Date(article.meta.lastModified).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const articleSchema = generateArticleSchema(article.meta);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: article.meta.title, url: `/blog/${slug}` },
  ]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-page pt-8 pb-0">
        <nav className="flex items-center gap-1.5 text-sm text-[var(--text-tertiary)]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[var(--text)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[var(--text)] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)] truncate max-w-[200px]">
            {article.meta.title}
          </span>
        </nav>
      </div>

      <article className="pt-8 pb-20">
        {/* Header */}
        <NarrowContainer>
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Tag href={`/blog?category=${encodeURIComponent(article.meta.category)}`}>
                {article.meta.category}
              </Tag>
              {article.meta.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-[var(--text-tertiary)] bg-[var(--surface-hover)] px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-[2rem] md:text-[2.5rem] font-bold font-[family-name:var(--font-serif)] text-[var(--text)] leading-[1.15] tracking-[-0.02em] text-balance">
              {article.meta.title}
            </h1>

            <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              {article.meta.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-[var(--text-tertiary)]">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {article.meta.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                <time dateTime={article.meta.date}>{date}</time>
              </span>
              {article.meta.readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {article.meta.readingTime} min read
                </span>
              )}
              {lastModified && (
                <span className="text-xs">
                  (Updated: <time dateTime={article.meta.lastModified}>{lastModified}</time>)
                </span>
              )}
            </div>
          </div>
        </NarrowContainer>

        {/* Article Content */}
        <NarrowContainer>
          <div className="prose">
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>
        </NarrowContainer>

        {/* Bottom Ad */}
        <NarrowContainer>
          <AdUnit slot="article-bottom" />
        </NarrowContainer>

        {/* Back Link */}
        <NarrowContainer>
          <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>
          </div>
        </NarrowContainer>
      </article>
    </>
  );
}
