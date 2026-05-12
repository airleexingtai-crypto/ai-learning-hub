import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastModified?: string;
  category: string;
  tags: string[];
  author: string;
  image?: string;
  featured?: boolean;
  readingTime?: number;
  wordCount?: number;
  canonical?: string;
}

const articlesDir = join(process.cwd(), "src/content/articles");
const WORDS_PER_MINUTE = 225;

function countWords(text: string): number {
  return text
    .replace(/[#*[\]()>`\-|~]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

function computeReadingTime(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

function parseMeta(slug: string, data: Record<string, unknown>, content: string): ArticleMeta {
  const wordCount = countWords(content);
  return {
    slug,
    title: (data.title as string) || "Untitled",
    description: (data.description as string) || "",
    date: data.date
      ? new Date(data.date as string).toISOString()
      : new Date().toISOString(),
    lastModified: data.lastModified
      ? new Date(data.lastModified as string).toISOString()
      : undefined,
    category: (data.category as string) || "Uncategorized",
    tags: (data.tags as string[]) || [],
    author: (data.author as string) || "AI Learning Hub",
    image: data.image as string | undefined,
    featured: (data.featured as boolean) || false,
    readingTime: computeReadingTime(wordCount),
    wordCount,
    canonical: data.canonical as string | undefined,
  };
}

export function getAllArticles(): ArticleMeta[] {
  try {
    const files = readdirSync(articlesDir).filter((f) => f.endsWith(".mdx"));
    const articles = files
      .map((file) => {
        const raw = readFileSync(join(articlesDir, file), "utf-8");
        const { data, content } = matter(raw);
        return parseMeta(file.replace(/\.mdx$/, ""), data, content);
      })
      .sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    return articles;
  } catch {
    return [];
  }
}

export function getFeaturedArticles(): ArticleMeta[] {
  return getAllArticles().filter((a) => a.featured);
}

export function getArticleBySlug(slug: string): {
  meta: ArticleMeta;
  content: string;
} | null {
  try {
    const filePath = join(articlesDir, `${slug}.mdx`);
    const raw = readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return {
      meta: parseMeta(slug, data, content),
      content,
    };
  } catch {
    return null;
  }
}

export function getCategories(): string[] {
  const articles = getAllArticles();
  const cats = new Set(articles.map((a) => a.category));
  return Array.from(cats).sort();
}
