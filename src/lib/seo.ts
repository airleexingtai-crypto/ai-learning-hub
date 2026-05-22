import { ArticleMeta } from "@/lib/articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://masterai.blog";

// ── Organization (独立实体，含 logo) ──
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MasterAI.blog",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.svg`,
      width: 512,
      height: 512,
    },
  };
}

// ── Person (作者实体，E-E-A-T) ──
export function generatePersonSchema(name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: `${SITE_URL}/about`,
  };
}

// ── BlogPosting (比 Article 更精准的子类型) ──
export function generateBlogPostingSchema(article: ArticleMeta) {
  const base = baseArticleProps(article);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${article.slug}#article`,
    ...base,
  };
}

// ── TechArticle (教程/对比文章) ──
export function generateTechArticleSchema(article: ArticleMeta) {
  const base = baseArticleProps(article);
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_URL}/blog/${article.slug}#article`,
    proficiencyLevel: "Beginner",
    ...base,
  };
}

// ── Article (通用，保留向后兼容) ──
export function generateArticleSchema(article: ArticleMeta) {
  const base = baseArticleProps(article);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${article.slug}#article`,
    ...base,
  };
}

// ── HowTo (步骤教程) ──
export function generateHowToSchema(
  article: ArticleMeta,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: article.title,
    description: article.description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      itemListElement: {
        "@type": "HowToDirection",
        text: step.text,
      },
    })),
  };
}

// ── CollectionPage (新闻列表、博客列表等集合页) ──
export function generateCollectionPageSchema({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: {
    name: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified: string;
  }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${SITE_URL}${url}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Article",
          name: item.name,
          description: item.description,
          url: `${SITE_URL}${item.url}`,
          datePublished: item.datePublished,
          dateModified: item.dateModified,
        },
      })),
    },
  };
}

// ── FAQ (保持不变，已有) ──
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ── WebSite ──
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MasterAI.blog",
    description:
      "Practical AI tutorials, guides, and insights. Learn ChatGPT, Claude, Midjourney, and more from hands-on experience.",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// ── Breadcrumb (绝对 URL) ──
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// ── 共享属性构建 ──
function baseArticleProps(article: ArticleMeta) {
  const wordCount = article.wordCount || 0;
  return {
    headline: article.title,
    description: article.description,
    abstract: article.description,
    datePublished: article.date,
    dateModified: article.lastModified || article.date,
    wordCount,
    ...(article.readingTime && { timeRequired: `PT${article.readingTime}M` }),
    author: {
      "@type": "Person",
      name: article.author,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "MasterAI.blog",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.svg`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
    keywords: article.tags.join(", "),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    about: {
      "@type": "Thing",
      name: article.category,
    },
    ...(article.image && {
      image: {
        "@type": "ImageObject",
        url: article.image.startsWith("http")
          ? article.image
          : `${SITE_URL}${article.image}`,
        width: 1200,
        height: 630,
      },
    }),
  };
}
