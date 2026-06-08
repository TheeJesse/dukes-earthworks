import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Skid Steer Services in Santa Rosa Beach & 30A, FL – Duke's Earthworks",
  description:
    "Skid steer services along 30A and Santa Rosa Beach — lot clearing, grading, and erosion control for luxury beach properties. Free quotes from Duke's Earthworks.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skid Steer Services in Santa Rosa Beach & 30A, FL",
  provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
  serviceType: "Skid Steer and Earthwork Services",
  areaServed: "Santa Rosa Beach, FL",
  description:
    "Professional skid steer services including lot clearing, grading, erosion control, and site preparation in Santa Rosa Beach and along 30A, Florida.",
};

const services = [
  {
    title: "Lot Clearing for Custom Homes",
    desc: "Clearing brush, trees, and debris from your 30A build site while respecting the natural dune landscape. We prep your lot for construction the right way.",
  },
  {
    title: "Erosion Control Near Dunes",
    desc: "Protect sensitive dune ecosystems with proper silt fencing, erosion barriers, and grading that keeps sand and soil where it belongs on coastal properties.",
  },
  {
    title: "Driveway & Access Road Grading",
    desc: "Build and maintain gravel driveways and private access roads for beach houses and coastal communities along 30A's narrow lots.",
  },
  {
    title: "Irrigation & Landscape Prep",
    desc: "Grade and trench for irrigation systems, landscape beds, and drainage swales that keep your Santa Rosa Beach property looking its best year-round.",
  },
];

export default function SantaRosaBeachPage() {
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
            Skid Steer Services in Santa Rosa Beach &amp; Along 30A
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Expert lot clearing, grading, and erosion control for 30A&apos;s luxury beach communities. Jonathan Smyly brings precision earthwork to Santa Rosa Beach properties.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Services Along 30A
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
            Earthwork Services on the 30A Corridor
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The 30A corridor is one of the most sought-after stretches of coastline in Florida — and building here requires earthwork that respects both the landscape and the regulations. Duke&apos;s Earthworks specializes in working within the tight lot lines and sensitive dune systems that define Santa Rosa Beach, Seaside, WaterColor, and surrounding communities. Jonathan understands that erosion control isn&apos;t optional here — it&apos;s essential to protecting your investment and the environment.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re a homeowner building your dream beach house or a contractor prepping multiple lots, we bring the same attention to detail to every project. Our John Deere skid steer is nimble enough for tight 30A lots yet powerful enough to handle serious clearing and grading. Contact us for a free on-site estimate.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#367C2B" }}>
            Why 30A Homeowners &amp; Builders Choose Duke&apos;s Earthworks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🌊"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Dune-Safe Practices</h3>
              <p className="text-gray-600 text-sm">We work carefully around protected dune systems and follow all local coastal construction guidelines.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"📐"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Tight-Lot Specialists</h3>
              <p className="text-gray-600 text-sm">30A lots are narrow and close together. Our compact equipment and experienced operation get the job done without damage to neighboring properties.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🤝"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Contractor-Friendly</h3>
              <p className="text-gray-600 text-sm">We work with general contractors and builders regularly — reliable scheduling, clean work, and no corners cut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Building along 30A? Get a free earthwork estimate today." />
    </>
  );
}
