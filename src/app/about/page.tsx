import { Metadata } from "next";
import { Section, NarrowContainer } from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";
import { generateWebSiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Alex Chen",
  description:
    "I'm Alex Chen, the person behind MasterAI.blog. I write practical AI tutorials and share what I learn about AI tools, automation, and the future of work.",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema()),
        }}
      />

      <Section className="pt-20 pb-16 md:pt-28">
        <NarrowContainer>
          <div className="reveal">
            <h1 className="text-[2.25rem] md:text-[3rem] font-bold font-[family-name:var(--font-serif)] text-[var(--text)] leading-tight tracking-[-0.02em] mb-6">
              About Me
            </h1>

            <div className="text-base text-[var(--text-secondary)] leading-relaxed space-y-5">
              <p>
                Hi, I am <strong className="text-[var(--text)]">Alex Chen</strong>.
                I started MasterAI.blog because I believe learning AI should be
                straightforward, not overwhelming.
              </p>

              <p>
                A few years ago, I was the person googling "how to use ChatGPT"
                at 11 PM. The tutorials I found were either too technical or too
                vague. So I started writing my own notes. Those notes turned into
                articles, and those articles turned into this site.
              </p>

              <p>
                Today, I spend my time testing AI tools, building workflows, and
                sharing what actually works. Every article on this site reflects
                something I have personally tried and found useful.
              </p>

              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                What You Will Find Here
              </h2>

              <ul className="space-y-3 pl-5 list-disc">
                <li>
                  <strong className="text-[var(--text)]">Practical Tutorials</strong>
                  {" "}— Step-by-step guides for ChatGPT, Claude, Midjourney, and
                  more. No jargon, just actionable instructions.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Tool Comparisons</strong>
                  {" "}— Honest, detailed comparisons of AI tools so you can choose
                  the right one for your needs.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Beginner Guides</strong>
                  {" "}— If you are new to AI, start here. I explain concepts in
                  plain English.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Industry Insights</strong>
                  {" "}— Analysis of AI trends, model releases, and what they mean
                  for you.
                </li>
              </ul>

              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                How I Work
              </h2>

              <p>
                I test every tool and workflow before writing about it. If I
                recommend something, it is because I have used it myself and
                found it genuinely helpful. I focus on clarity — if a tutorial
                does not make sense to someone trying it for the first time, I
                rewrite it.
              </p>

              <p>
                I cover what interests me: new AI models, productivity workflows,
                automation tools, and how AI is changing the way we work. If you
                have a topic you would like me to cover,{" "}
                <a href="/contact" className="text-[var(--accent)] hover:underline">
                  send me a message
                </a>
                .
              </p>
            </div>

            <div className="mt-12">
              <Button href="/blog" variant="primary">
                Start Learning
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </NarrowContainer>
      </Section>
    </>
  );
}
