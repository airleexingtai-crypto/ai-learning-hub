import { Metadata } from "next";
import { Section, NarrowContainer } from "@/components/shared/Container";
import ContactForm from "@/components/shared/ContactForm";
import { Mail } from "lucide-react";
import { generateWebSiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AI Learning Hub. Have a question, suggestion, or want to contribute? We would love to hear from you.",
};

export default function ContactPage() {
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
              Contact Us
            </h1>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-10">
              Have a question about AI? Found a mistake in one of our tutorials?
              Interested in contributing or collaborating? We would love to hear
              from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact form */}
              <ContactForm />

              {/* Info */}
              <div className="space-y-6">
                <div className="p-6 bg-[var(--surface-alt)] border border-[var(--border)] rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={18} className="text-[var(--accent)]" />
                    <h3 className="font-semibold text-[var(--text)]">Email</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    hello@ailearninghub.com
                  </p>
                </div>

                <div className="p-6 bg-[var(--surface-alt)] border border-[var(--border)] rounded-xl">
                  <h3 className="font-semibold text-[var(--text)] mb-2">
                    Content Submissions
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    We welcome guest contributions from AI practitioners and
                    educators. Send us your pitch with a brief outline and
                    writing samples. We prioritize original, tested content over
                    theoretical overviews.
                  </p>
                </div>

                <div className="p-6 bg-[var(--surface-alt)] border border-[var(--border)] rounded-xl">
                  <h3 className="font-semibold text-[var(--text)] mb-2">
                    Response Time
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    We typically respond within 2-3 business days. For urgent
                    matters, please include &quot;Urgent&quot; in your subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NarrowContainer>
      </Section>
    </>
  );
}
