import { Metadata } from "next";
import { ExternalLink, Sparkles, Code, Image, Search, Bot, Wrench, MessageSquare } from "lucide-react";
import { Section, NarrowContainer } from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "AI Tools Directory — Best AI Tools Compared",
  description:
    "A curated directory of the best AI tools in 2026. ChatGPT, Claude, Gemini, Midjourney, and more — with honest descriptions, pricing, and when to use each one.",
  openGraph: {
    title: "AI Tools Directory — AI Learning Hub",
    description:
      "Curated directory of the best AI tools. Compare features, pricing, and find the right tool for your needs.",
  },
};

interface Tool {
  name: string;
  description: string;
  longDescription: string;
  url: string;
  pricing: string;
  bestFor: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const tools: Tool[] = [
  // ── Chatbots & Assistants ──
  {
    name: "ChatGPT",
    description: "The most versatile AI assistant. Writing, coding, analysis, images — it does everything well.",
    longDescription:
      "OpenAI's flagship product and still the most widely-used AI assistant. GPT-4o handles text, images, and voice in a single model. The plugin ecosystem and GPT Store give it capabilities no other assistant matches — from data analysis to custom workflows. Best for users who want one tool that handles everything reasonably well.",
    url: "https://chatgpt.com",
    pricing: "Free (GPT-4o mini) / Plus $20/mo (GPT-4o) / Pro $200/mo",
    bestFor: "All-rounder — coding, writing, brainstorming, image generation, everyday tasks",
    category: "Chatbots",
    icon: MessageSquare,
  },
  {
    name: "Claude",
    description: "Best writing quality and long-form reasoning. 200K context — upload entire books.",
    longDescription:
      "Anthropic's Claude excels where precision and thoughtfulness matter. It writes with a natural, human-like voice that ChatGPT can't match. The 200K token context window handles entire documentation sites or book-length manuscripts. Claude Code (the developer tool) has become the preferred coding environment for many professionals. Best for users who prioritize quality over breadth.",
    url: "https://claude.ai",
    pricing: "Free (Haiku) / Pro $20/mo (Opus 4) / Team $25/user/mo / Enterprise custom",
    bestFor: "Long-form writing, document analysis, deep reasoning, coding (via Claude Code)",
    category: "Chatbots",
    icon: Bot,
  },
  {
    name: "Gemini",
    description: "Google's AI with native search, YouTube, Maps, and Workspace. 1M token window.",
    longDescription:
      "Google's Gemini (formerly Bard) has the deepest integration with the services you already use — Gmail, Docs, YouTube, Maps, and Search. Its 1M token context window is unmatched. For anyone in Google's ecosystem, Gemini offers workflows that ChatGPT and Claude can't replicate. The free tier (Gemini 2.5 Flash) is surprisingly capable.",
    url: "https://gemini.google.com",
    pricing: "Free (2.5 Flash) / Advanced $19.99/mo (2.5 Pro)",
    bestFor: "Research, Google Workspace users, real-time web info, large document analysis",
    category: "Chatbots",
    icon: Search,
  },
  {
    name: "Grok",
    description: "xAI's assistant with real-time X (Twitter) access. Best for trending topics.",
    longDescription:
      "Built by Elon Musk's xAI, Grok has one unique advantage: real-time access to X (Twitter) data. This makes it the best AI for understanding what's happening right now — trending topics, breaking news, public sentiment. It's also notably less filtered than other assistants, which some users prefer and others find concerning. Tesla integration lets you continue conversations between your car and phone.",
    url: "https://x.ai/grok",
    pricing: "Free (with X account) / Premium included with X Premium",
    bestFor: "Real-time trends, fact-checking, X/Twitter power users, Tesla owners",
    category: "Chatbots",
    icon: MessageSquare,
  },
  {
    name: "Perplexity",
    description: "AI search engine with citations. Every answer comes with sources.",
    longDescription:
      "Perplexity sits between a search engine and a chatbot. It answers questions in natural language but includes citations to the web pages it drew from — something no other AI assistant does reliably. Perfect for research where you need to verify sources. The Pro plan adds file upload, image generation, and access to multiple models (GPT-4o, Claude, Gemini) in one interface.",
    url: "https://perplexity.ai",
    pricing: "Free (5 Pro searches/day) / Pro $20/mo (unlimited)",
    bestFor: "Research with sources, fact-checking, academic work, competitive analysis",
    category: "Search",
    icon: Search,
  },

  // ── Image Generation ──
  {
    name: "Midjourney",
    description: "Still the gold standard for AI art. Unmatched aesthetic quality.",
    longDescription:
      "Despite being overtaken in market share by all-in-one platforms, Midjourney remains the tool professionals reach for when image quality matters most. Its latest V6.1 model produces images that are often indistinguishable from professional photography and digital art. Style references and character references give you consistent visual identity across projects. The learning curve is steeper than DALL-E, but the ceiling is much higher.",
    url: "https://midjourney.com",
    pricing: "Basic $10/mo (~200 images) / Standard $30/mo (unlimited relaxed) / Pro $60/mo",
    bestFor: "Professional-quality AI art, consistent visual style, creative projects",
    category: "Images",
    icon: Image,
  },
  {
    name: "DALL-E 3",
    description: "OpenAI's image generator, built into ChatGPT. Best at following literal prompts.",
    longDescription:
      "DALL-E 3 is integrated directly into ChatGPT, which means you can generate images in the same conversation where you're brainstorming or writing. Where Midjourney takes artistic liberties, DALL-E follows instructions more literally — better for when you have a specific image in mind. The ChatGPT integration means you can iterate on images through natural conversation rather than learning prompt syntax.",
    url: "https://chatgpt.com",
    pricing: "Included with ChatGPT Plus ($20/mo) or free tier (limited)",
    bestFor: "Specific, literal image requests; ChatGPT users who need images in their workflow",
    category: "Images",
    icon: Image,
  },

  // ── Coding ──
  {
    name: "GitHub Copilot",
    description: "AI pair programmer in VS Code and JetBrains. The coding AI with the most users.",
    longDescription:
      "Microsoft's Copilot pioneered AI-assisted coding and still has the largest user base. It integrates directly into VS Code, Visual Studio, and JetBrains IDEs. The latest version includes agent mode — it can plan multi-file changes, run terminal commands, and fix errors across your project. Best for developers who want AI deeply integrated into their existing editor rather than switching to a new one.",
    url: "https://github.com/features/copilot",
    pricing: "Free (2000 completions/month) / Individual $10/mo / Business $19/user/mo",
    bestFor: "VS Code/JetBrains users, in-IDE completions, multi-file agentic coding",
    category: "Coding",
    icon: Code,
  },
  {
    name: "Cursor",
    description: "AI-first code editor. Full project context, best for agentic coding workflows.",
    longDescription:
      "Cursor is a fork of VS Code rebuilt from the ground up for AI-assisted development. Unlike Copilot (which adds AI to a traditional editor), Cursor makes AI the central interaction model. It understands your entire project context, can make multi-file edits, and supports a conversational coding workflow where you describe what you want and it implements across your codebase. The tab-to-accept prediction quality is notably higher than Copilot's.",
    url: "https://cursor.com",
    pricing: "Free (limited) / Pro $20/mo / Business $40/user/mo",
    bestFor: "Agentic coding, project-wide refactors, developers who want AI-first workflows",
    category: "Coding",
    icon: Code,
  },
  {
    name: "Windsurf",
    description: "Codeium's AI IDE. Cascade mode for multi-file agentic editing. Fast and lightweight.",
    longDescription:
      "Windsurf (by Codeium) is another AI-first IDE competing with Cursor. Its standout feature is Cascade — an agentic mode that plans, executes, and verifies multi-file changes. Windsurf tends to be faster and lighter than Cursor while offering similar agentic capabilities. The free tier is generous, making it a good entry point for developers new to AI coding tools.",
    url: "https://codeium.com/windsurf",
    pricing: "Free (generous) / Pro $15/mo",
    bestFor: "Developers wanting a fast AI IDE, multi-file agentic editing, free tier users",
    category: "Coding",
    icon: Code,
  },

  // ── Productivity ──
  {
    name: "Notion AI",
    description: "AI built into Notion. Writing, summarization, Q&A across your workspace.",
    longDescription:
      "Notion AI adds writing assistance, summarization, translation, and Q&A directly into the Notion workspace where your documents already live. It can search across your entire Notion database to answer questions, generate meeting agendas from notes, and translate documents. Best for teams already using Notion who want AI without leaving their workflow.",
    url: "https://notion.so/product/ai",
    pricing: "$10/member/month (add-on to any Notion plan)",
    bestFor: "Notion users, team knowledge base Q&A, in-context writing assistance",
    category: "Productivity",
    icon: Wrench,
  },
  {
    name: "Granola",
    description: "AI meeting notes that actually work. Transcribes and summarizes intelligently.",
    longDescription:
      "Granola takes meeting transcription beyond literal word-for-word capture. It understands conversation structure — identifying decisions, action items, open questions, and follow-ups. The output reads like notes a smart human would take, not a raw transcript. It works across Zoom, Google Meet, Teams, and in-person meetings.",
    url: "https://granola.ai",
    pricing: "Free (5 meetings/month) / Pro $20/mo (unlimited)",
    bestFor: "Meeting-heavy roles, cross-functional teams, anyone who takes notes for a living",
    category: "Productivity",
    icon: Wrench,
  },
];

const categories = [
  { name: "Chatbots", icon: MessageSquare },
  { name: "Coding", icon: Code },
  { name: "Images", icon: Image },
  { name: "Search", icon: Search },
  { name: "Productivity", icon: Wrench },
];

export default function ToolsPage() {
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28">
        <NarrowContainer>
          <div className="reveal text-center">
            <h1 className="text-[2.25rem] md:text-[3rem] font-bold font-[family-name:var(--font-serif)] text-[var(--text)] leading-tight tracking-[-0.02em]">
              AI Tools Directory
            </h1>
            <p className="mt-4 text-base text-[var(--text-secondary)] max-w-xl mx-auto">
              A curated list of the best AI tools we use and recommend. All have solid free tiers — try them before you pay.
            </p>
          </div>
        </NarrowContainer>
      </Section>

      {/* Category navigation */}
      <div className="container-page pb-12">
        <div className="reveal flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`#${cat.name.toLowerCase()}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              <cat.icon size={14} />
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {/* Tools by category */}
      {categories.map((cat) => {
        const catTools = tools.filter((t) => t.category === cat.name);
        if (catTools.length === 0) return null;
        return (
          <Section
            key={cat.name}
            alt={categories.indexOf(cat) % 2 === 0}
            id={cat.name.toLowerCase()}
          >
            <div className="reveal">
              <div className="flex items-center gap-3 mb-2">
                <cat.icon size={22} className="text-[var(--accent)]" />
                <h2 className="text-xl md:text-2xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)]">
                  {cat.name}
                </h2>
              </div>
              <p className="text-sm text-[var(--text-tertiary)] mb-8">
                {cat.name === "Chatbots" && "General-purpose AI assistants for conversation, writing, coding, and everyday tasks."}
                {cat.name === "Coding" && "AI-powered code editors and assistants for software development."}
                {cat.name === "Images" && "AI image generators for art, design, and visual content creation."}
                {cat.name === "Search" && "AI-powered search and research tools with verifiable sources."}
                {cat.name === "Productivity" && "AI tools for meetings, writing, and knowledge management."}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {catTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col gap-4 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-[var(--border-hover)] transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[var(--surface-alt)] flex items-center justify-center flex-shrink-0">
                          <tool.icon size={20} className="text-[var(--accent)]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--text)]">{tool.name}</h3>
                          <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                            {tool.pricing}
                          </p>
                        </div>
                      </div>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[var(--accent)] border border-[var(--accent)]/30 rounded-lg hover:bg-[var(--accent)] hover:text-white transition-colors"
                      >
                        Visit
                        <ExternalLink size={11} />
                      </a>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {tool.longDescription}
                    </p>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[11px] text-[var(--text-tertiary)] bg-[var(--surface-alt)] px-2 py-0.5 rounded-full">
                        {tool.bestFor}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* Bottom CTA */}
      <Section>
        <div className="reveal text-center">
          <p className="text-sm text-[var(--text-tertiary)] mb-4">
            Using a tool that should be on this list?
          </p>
          <Button href="/contact" variant="secondary">
            Suggest a Tool
          </Button>
        </div>
      </Section>
    </>
  );
}
