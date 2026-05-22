import { Metadata } from "next";
import { Section, NarrowContainer } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for AI Learning Hub. Learn how we handle your data, use cookies, and protect your privacy.",
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyPage() {
  const lastUpdated = "2026-05-11";

  return (
    <Section className="pt-20 pb-16 md:pt-28">
      <NarrowContainer>
        <div className="reveal">
          <h1 className="text-[2.25rem] md:text-[3rem] font-bold font-[family-name:var(--font-serif)] text-[var(--text)] leading-tight tracking-[-0.02em] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--text-tertiary)] mb-10">
            Last updated: {new Date(lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="text-base text-[var(--text-secondary)] leading-relaxed space-y-5">
            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                1. Information We Collect
              </h2>
              <p>
                AI Learning Hub collects minimal information to operate and
                improve the site:
              </p>
              <ul className="space-y-2 pl-5 list-disc mt-3">
                <li>
                  <strong className="text-[var(--text)]">Usage Data:</strong>{" "}
                  We use privacy-focused analytics (Google Analytics 4 with
                  anonymized IPs) to understand how visitors interact with our
                  content. This data is anonymized and does not include
                  personally identifiable information.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Contact Form:</strong>{" "}
                  If you use our contact form, we collect your name and email
                  address solely to respond to your inquiry. This information is
                  never shared or sold.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Newsletter:</strong>{" "}
                  If you subscribe to our newsletter, we store your email
                  address for the purpose of sending updates. You can
                  unsubscribe at any time.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                2. Cookies
              </h2>
              <p>
                This site uses minimal cookies for essential functionality.
                We do not use tracking cookies for advertising purposes. Our
                analytics provider (Google Analytics 4) uses first-party
                cookies with anonymized IP addresses. Google AdSense may set
                its own cookies for ad personalization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                3. Third-Party Services
              </h2>
              <p>We may use the following third-party services:</p>
              <ul className="space-y-2 pl-5 list-disc mt-3">
                <li>
                  <strong className="text-[var(--text)]">Cloudflare Pages:</strong>{" "}
                  Hosting provider. May collect standard server logs.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Google Analytics:</strong>{" "}
                  Site traffic analytics with anonymized IP addresses.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Google AdSense:</strong>{" "}
                  May be enabled in the future to display advertisements.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                4. Data Protection
              </h2>
              <p>
                We take reasonable measures to protect your information.
                However, no method of transmission over the Internet is 100%
                secure. We cannot guarantee absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                5. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="space-y-2 pl-5 list-disc mt-3">
                <li>Request access to any personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Unsubscribe from our newsletter at any time</li>
                <li>Opt out of analytics tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                6. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold font-[family-name:var(--font-serif)] text-[var(--text)] mt-10 mb-3">
                7. Contact
              </h2>
              <p>
                If you have questions about this privacy policy, please{" "}
                <a
                  href="/contact"
                  className="text-[var(--accent)] hover:underline"
                >
                  contact us
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </NarrowContainer>
    </Section>
  );
}
