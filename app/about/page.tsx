import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "../components/CTABanner";
import content from "../../content/pages/about.json";

export const metadata: Metadata = {
  title: "About Us – Duke's Earthworks",
  description:
    "Learn about Jonathon Smyley and Duke's Earthworks — professional skid steer services including grading, driveways, erosion control, and land clearing across Northwest Florida.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Duke's Earthworks",
  description:
    "Professional skid steer services — driveways, grading, erosion control, silt fencing, land clearing, and custom skid steer work in Northwest Florida.",
  url: "https://dukeseathworks.com",
  telephone: "(850) 449-9885",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1641 Christmas Tree Road",
    addressLocality: "Milton",
    addressRegion: "FL",
    postalCode: "32583",
    addressCountry: "US",
  },
  openingHours: "Mo-Sa 07:00-18:00",
  priceRange: "$$",
  image: "https://dukeseathworks.com/logo.jpg",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5">
            {content.hero.heading}
          </h1>
          <p className="text-gray-300 text-lg">
            {content.hero.subheading}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <Image
              src={content.team_image}
              alt={content.team_image_alt}
              width={400}
              height={400}
              className="rounded-xl shadow-lg max-w-sm mx-auto w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#367C2B" }}>
              {content.story_heading}
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              {content.story_paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            {content.why_families_heading}
          </h2>
          <ul className="space-y-4">
            {content.why_families.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <span className="text-xl mt-0.5" style={{ color: "#367C2B" }}>✅</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="py-14 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {content.closing_text}
          </p>
          <p className="font-semibold text-lg mb-8" style={{ color: "#367C2B" }}>
            {content.closing_cta}
          </p>
        </div>
      </section>

      <CTABanner heading={content.cta_banner_heading} />
    </>
  );
}
