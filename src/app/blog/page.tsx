import { Metadata } from "next";
import { Suspense } from "react";
import { Section, NarrowContainer } from "@/components/shared/Container";
import { generateWebSiteSchema } from "@/lib/seo";
import { getAllArticles, getCategories } from "@/lib/articles";
import BlogClient from "./BlogClient";

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

      <Suspense fallback={null}>
        <BlogClient articles={articles} categories={categories} />
      </Suspense>
    </>
  );
}
