import { Metadata } from "next";
import { Section, NarrowContainer } from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";
import { generateWebSiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About AI Learning Hub",
  description:
    "Learn about AI Learning Hub — our mission to make AI education practical and accessible for everyone. From beginners to developers.",
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
              About AI Learning Hub
            </h1>

            <div className="text-base text-[var(--text-secondary)] leading-relaxed space-y-5">
              <p>
                AI Learning Hub was created with a simple belief:{" "}
                <strong className="text-[var(--text)]">
                  everyone deserves access to clear, practical AI education
                </strong>
                . Whether you are a complete beginner writing your first prompt
                or a developer building AI-powered applications, our goal is to
                be your trusted guide.
              </p>

              <p>
                The AI landscape moves fast. New tools launch every week, models
                improve monthly, and keeping up can feel overwhelming. We cut
                through the noise with step-by-step tutorials, honest tool
                comparisons, and in-depth guides that focus on what actually
                works.
              </p>

              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                What You Will Find Here
              </h2>

              <ul className="space-y-3 pl-5 list-disc">
                <li>
                  <strong className="text-[var(--text)]">Practical Tutorials</strong>{" "}
                  — Step-by-step guides for ChatGPT, Claude, Midjourney, and
                  more. No jargon, just actionable instructions.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Tool Comparisons</strong>{" "}
                  — Honest, detailed comparisons of AI tools so you can choose
                  the right one for your needs.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Beginner Guides</strong>{" "}
                  — If you are new to AI, start here. We explain concepts in
                  plain English.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Industry Insights</strong>{" "}
                  — Analysis of AI trends, model releases, and what they mean
                  for you.
                </li>
              </ul>

              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                Our Approach
              </h2>

              <p>
                Every article on this site is written with three principles in
                mind: <strong className="text-[var(--text)]">clarity</strong>{" "}
                (no unnecessary complexity),{" "}
                <strong className="text-[var(--text)]">accuracy</strong> (we
                test everything we write about), and{" "}
                <strong className="text-[var(--text)]">practicality</strong>{" "}
                (you should be able to apply what you learn immediately).
              </p>

              <p>
                We do not chase trends or publish AI-generated filler content.
                Every tutorial is researched, tested, and written by humans who
                genuinely care about teaching.
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
