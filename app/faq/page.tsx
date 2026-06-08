import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";
import content from "../../content/pages/faq.json";

export const metadata: Metadata = {
  title: "FAQ – Skid Steer Services Questions Answered",
  description:
    "Answers to common questions about skid steer services, driveways, grading, erosion control, land clearing, pricing, and more from Duke's Earthworks in Northwest Florida.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.categories.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            {content.hero.heading}
          </h1>
          <p className="text-gray-300">
            {content.hero.subheading}
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-3xl mx-auto space-y-12">
          {content.categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#367C2B" }}>
                {cat.title}
              </h2>
              <div className="space-y-4">
                {cat.questions.map((item) => (
                  <details key={item.q} className="group bg-white rounded-xl shadow-sm border border-gray-100">
                    <summary className="cursor-pointer p-5 font-semibold text-base flex justify-between items-center" style={{ color: "#1a1a1a" }}>
                      {item.q}
                      <span className="ml-4 text-lg group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner heading={content.cta_banner_heading} />
    </>
  );
}
