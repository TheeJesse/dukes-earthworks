import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Skid Steer Services in Pensacola, FL – Duke's Earthworks",
  description:
    "Skid steer services in Pensacola — commercial site prep, urban grading, land clearing, and large-scale earthwork projects. Free quotes from Duke's Earthworks.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skid Steer Services in Pensacola, FL",
  provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
  serviceType: "Skid Steer and Earthwork Services",
  areaServed: "Pensacola, FL",
  description:
    "Professional skid steer services including commercial site prep, urban grading, land clearing, and large-scale earthwork projects in Pensacola, Florida.",
};

const services = [
  {
    title: "Commercial Site Preparation",
    desc: "Grading and site prep for commercial developments, retail pads, and business properties throughout the Pensacola metro area. On time and on grade.",
  },
  {
    title: "Large-Scale Land Clearing",
    desc: "Clearing large tracts of land for development, subdivision roads, and utility corridors in Pensacola and surrounding Escambia County areas.",
  },
  {
    title: "Subdivision & Road Grading",
    desc: "Rough and finish grading for new subdivision roads, building pads, and lot drainage throughout Pensacola's expanding neighborhoods.",
  },
  {
    title: "Erosion & Stormwater Management",
    desc: "Silt fencing, retention pond prep, and erosion control for Pensacola construction sites. Meet local permit requirements and keep your project moving.",
  },
];

export default function PensacolaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Skid Steer Services in Pensacola, FL
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Commercial grading, subdivision prep, and large-scale land clearing for Pensacola and Escambia County. Duke&apos;s Earthworks handles the big jobs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Services in Pensacola
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#367C2B" }}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City-Specific Content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#367C2B" }}>
            Pensacola Earthwork — From Downtown to the Suburbs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pensacola is the largest city in the region, and it takes a versatile earthwork contractor to handle the range of projects happening here at any given time. Duke&apos;s Earthworks has worked on everything from commercial site prep near downtown to subdivision grading out in Perdido Key and Beulah. Jonathan brings professional-grade equipment and a straightforward approach that general contractors and property owners appreciate — show up, do the work right, and move on.
          </p>
          <p className="text-gray-600 leading-relaxed">
            As Pensacola continues to grow, the demand for reliable earthwork contractors keeps rising. Whether you&apos;re a developer breaking ground on a new project or a business owner who needs a parking lot regraded, Duke&apos;s Earthworks delivers quality work at competitive rates. Reach out for a free estimate — we serve the entire Pensacola metro area from our Milton headquarters.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#367C2B" }}>
            Why Pensacola Contractors &amp; Developers Choose Duke&apos;s Earthworks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🏗️"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Big Project Capability</h3>
              <p className="text-gray-600 text-sm">Commercial pads, subdivision roads, and multi-acre clearing — we have the equipment and experience for Pensacola's larger projects.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"📑"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Code Compliant</h3>
              <p className="text-gray-600 text-sm">We understand Escambia County and City of Pensacola permit requirements for erosion control and stormwater management.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🗓️"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Schedule-Focused</h3>
              <p className="text-gray-600 text-sm">Construction timelines are tight. We coordinate with your schedule and deliver when we say we will — no excuses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Have a project in Pensacola? Get a free earthwork estimate." />
    </>
  );
}
