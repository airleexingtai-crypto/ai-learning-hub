const { readFileSync, readdirSync, writeFileSync } = require("fs");
const { join } = require("path");
const matter = require("gray-matter");

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://masterai.blog";
const SITE_TITLE = "AI Learning Hub";
const SITE_DESCRIPTION =
  "Comprehensive AI tutorials, guides, and insights. Learn ChatGPT, Claude, Midjourney, and more.";
const WORDS_PER_MINUTE = 225;

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function countWords(text) {
  return text
    .replace(/[#*[\]()>`\-|~]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

function getAllArticles() {
  const articlesDir = join(process.cwd(), "src/content/articles");
  const files = readdirSync(articlesDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = readFileSync(join(articlesDir, file), "utf-8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.mdx$/, "");
      const wordCount = countWords(content);
      const readingTime = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
      return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        lastModified: data.lastModified ? new Date(data.lastModified).toISOString() : null,
        category: data.category || "Uncategorized",
        tags: data.tags || [],
        author: data.author || "AI Learning Hub",
        wordCount,
        readingTime,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function generateRSS(articles) {
  const now = new Date().toUTCString();

  const items = articles
    .map((article) => {
      const url = `${SITE_URL}/blog/${article.slug}`;
      const pubDate = new Date(article.date).toUTCString();
      const tagXml = article.tags.map((t) => `      <category>${escapeXml(t)}</category>`).join("\n");
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.category)}</category>
${tagXml}
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <atom:link href="${SITE_URL}/atom.xml" rel="alternate" type="application/atom+xml"/>
${items}
  </channel>
</rss>`;

  // Write to public/ (picked up by static export)
  writeFileSync(join(process.cwd(), "public", "rss.xml"), rss, "utf-8");
  // Write to out/ (final deployment directory)
  writeFileSync(join(process.cwd(), "out", "rss.xml"), rss, "utf-8");
  console.log("✅ RSS feed generated");
}

function generateAtom(articles) {
  const entries = articles
    .map((article) => {
      const url = `${SITE_URL}/blog/${article.slug}`;
      const updated = (article.lastModified || article.date).slice(0, 10);
      const published = article.date.slice(0, 10);
      return `  <entry>
    <title>${escapeXml(article.title)}</title>
    <link href="${url}"/>
    <id>${url}</id>
    <published>${published}</published>
    <updated>${updated}</updated>
    <summary>${escapeXml(article.description)}</summary>
    <author><name>${escapeXml(article.author)}</name></author>
    <category term="${escapeXml(article.category)}"/>
  </entry>`;
    })
    .join("\n");

  const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(SITE_TITLE)}</title>
  <link href="${SITE_URL}" rel="alternate"/>
  <link href="${SITE_URL}/atom.xml" rel="self"/>
  <id>${SITE_URL}</id>
  <updated>${new Date().toISOString()}</updated>
  <subtitle>${escapeXml(SITE_DESCRIPTION)}</subtitle>
${entries}
</feed>`;

  writeFileSync(join(process.cwd(), "public", "atom.xml"), atom, "utf-8");
  writeFileSync(join(process.cwd(), "out", "atom.xml"), atom, "utf-8");
  console.log("✅ Atom feed generated");
}

const articles = getAllArticles();
generateRSS(articles);
generateAtom(articles);
