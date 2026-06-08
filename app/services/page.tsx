import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "../components/CTABanner";
import content from "../../content/pages/services.json";

export const metadata: Metadata = {
  title: "Our Services – Professional Skid Steer Services on the Emerald Coast",
  description:
    "Driveways, grading, erosion control, silt fencing, land clearing, root raking, and custom skid steer work across Destin, 30A, Milton, Pensacola, and Northwest Florida.",
};

const serviceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Driveway Installation & Grading",
    provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
    serviceType: "Driveway Installation and Grading",
    areaServed: "Northwest Florida",
    description: "New driveway construction, regrading, and repair with professional skid steer equipment.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Erosion Control & Silt Fencing",
    provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
    serviceType: "Erosion Control and Silt Fencing",
    areaServed: "Northwest Florida",
    description: "Professional silt fence installation and erosion control for construction sites and new builds.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Land Clearing & Root Raking",
    provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
    serviceType: "Land Clearing",
    areaServed: "Northwest Florida",
    description: "Lot clearing, root raking, and land preparation for building, farming, or landscaping.",
  },
];

export default function ServicesPage() {
  const { hero, primary_services, process_steps, why_stand_out, cta_banner_heading } = content;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Banner */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5">
            {hero.heading}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-7">
            {hero.subheading}
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            {hero.climate_note}
          </p>
        </div>
      </section>

      {/* Anchor nav */}
      <div style={{ backgroundColor: "#F0EBE3" }} className="sticky top-14 z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2 flex gap-6 text-sm font-semibold overflow-x-auto">
          <a href="#services" className="whitespace-nowrap hover:underline" style={{ color: "#367C2B" }}>Our Services</a>
          <a href="#process" className="whitespace-nowrap hover:underline" style={{ color: "#367C2B" }}>Our Process</a>
          <a href="#why" className="whitespace-nowrap hover:underline" style={{ color: "#367C2B" }}>Why We Stand Out</a>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: "#367C2B" }}>
            🔧 Skid Steer Services
          </h2>
          <div className="space-y-12">
            {primary_services.map((svc, i) => (
              <div
                key={svc.name}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
              >
                {"img" in svc && svc.img && (
                  <div className="flex-1">
                    <Image
                      src={svc.img as string}
                      alt={svc.name}
                      width={600}
                      height={340}
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                )}
                <div className={("img" in svc && svc.img) ? "flex-1" : "w-full"}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#367C2B" }}>{svc.name}</h3>
                  <p className="text-gray-600">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 px-4" style={{ backgroundColor: "#F0EBE3" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#367C2B" }}>
            Our {process_steps.length}-Step Process
          </h2>
          <div className="space-y-6">
            {process_steps.map((step, i) => (
              <div key={step.title} className="flex gap-5 items-start bg-white rounded-xl p-5 shadow-sm">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: "#367C2B" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#367C2B" }}>{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE STAND OUT */}
      <section id="why" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Why Our Services Stand Out
          </h2>
          <ul className="space-y-3">
            {why_stand_out.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <span style={{ color: "#367C2B" }}>✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner heading={cta_banner_heading} />

      <div className="text-center py-8 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <p className="text-gray-600 text-sm">
          Have questions?{" "}
          <a href="/faq" className="font-semibold underline" style={{ color: "#367C2B" }}>
            See our full FAQ page →
          </a>
        </p>
      </div>
    </>
  );
}
