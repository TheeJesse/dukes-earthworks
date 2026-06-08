import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "./components/CTABanner";
import homeContent from "../content/pages/home.json";
import settings from "../content/settings.json";

export const metadata: Metadata = {
  title: `${settings.business_name} | Professional Skid Steer Services on the Emerald Coast`,
  description:
    "Professional grading, driveways, erosion control, silt fencing, land clearing, and skid steer services across Northwest Florida. John Deere equipment. Free quotes. Serving the Emerald Coast.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Duke's Earthworks",
  description:
    "Professional skid steer services — driveways, grading, erosion control, silt fencing, land clearing, root raking, and custom skid steer work in Northwest Florida.",
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
  areaServed: [
    "Destin", "30A", "Santa Rosa Beach", "Niceville", "Fort Walton Beach",
    "Navarre", "Milton", "Pensacola", "Freeport", "Crestview", "Northwest Florida",
  ],
  openingHours: "Mo-Sa 07:00-18:00",
  priceRange: "$$",
  image: "https://dukeseathworks.com/logo.jpg",
};

export default function HomePage() {
  const { hero, services, why_us, about_snippet } = homeContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* HERO */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-widest mb-3" style={{ color: "#367C2B" }}>
              {hero.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              {hero.heading}
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              {hero.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FFCC00", color: "#1a1a1a" }}
              >
                Get a Free Quote →
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full font-bold border-2 border-white text-white text-base hover:bg-white hover:text-gray-900 transition-colors"
              >
                📞 Request a Call
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <Image
              src={hero.hero_image}
              alt={hero.hero_image_alt}
              width={600}
              height={400}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#367C2B" }}>
              Professional Skid Steer Services in Northwest Florida
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From driveways and grading to erosion control and land clearing — professional-grade John Deere equipment for every job.
            </p>
          </div>

          <div className="text-center mb-10">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full font-semibold"
              style={{ backgroundColor: "#FFCC00", color: "#1a1a1a" }}
            >
              Get a Free Quote →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="rounded-xl p-5 bg-white shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#367C2B" }}>
                  {svc.name}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">{svc.description}</p>
                <Link
                  href="/services"
                  className="mt-4 text-sm font-semibold hover:underline"
                  style={{ color: "#367C2B" }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full font-semibold"
              style={{ backgroundColor: "#FFCC00", color: "#1a1a1a" }}
            >
              Request Your Free Quote →
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#367C2B" }}>
            Why Choose Duke&apos;s Earthworks?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {why_us.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl mb-3">✅</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#367C2B" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#367C2B" }}>
            {about_snippet.heading}
          </h2>
          <p className="text-gray-600 text-base mb-6">
            {about_snippet.body}
          </p>
          <Link
            href="/about"
            className="inline-block px-7 py-3 rounded-full font-semibold text-white"
            style={{ backgroundColor: "#367C2B" }}
          >
            Our Story →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
