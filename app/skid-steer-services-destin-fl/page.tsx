import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Skid Steer Services in Destin, FL – Duke's Earthworks",
  description:
    "Professional skid steer services in Destin, FL — grading, drainage, erosion control, and site prep for coastal properties and vacation homes. Free quotes from Duke's Earthworks.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skid Steer Services in Destin, FL",
  provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
  serviceType: "Skid Steer and Earthwork Services",
  areaServed: "Destin, FL",
  description:
    "Professional skid steer services including grading, drainage, erosion control, land clearing, and site preparation in Destin, Florida.",
};

const services = [
  {
    title: "Drainage & Grading",
    desc: "Proper grading and drainage solutions for Destin's flat, coastal terrain. Protect your property from standing water and storm runoff with professional grade work.",
  },
  {
    title: "Erosion Control & Silt Fencing",
    desc: "Keep sand and soil in place near the coast. We install silt fencing and erosion barriers designed for Destin's beachfront and waterfront lots.",
  },
  {
    title: "New Construction Site Prep",
    desc: "Clearing, grading, and prepping lots for new homes and vacation properties. From brush removal to final grade, we get your build site ready.",
  },
  {
    title: "Driveway Installation & Repair",
    desc: "Gravel and dirt driveway installation and reshaping for Destin properties. We handle the sandy soil conditions that make driveways shift and wash out.",
  },
];

export default function DestinPage() {
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
            Skid Steer Services in Destin, FL
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Professional grading, drainage, and site prep for Destin&apos;s coastal properties. Jonathan Smyly and his John Deere skid steer deliver quality earthwork across the Emerald Coast.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Services in Destin
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
            Earthwork Services Near You in Destin
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Destin presents unique challenges for earthwork — sandy soils, high water tables, and strict coastal building requirements. Duke&apos;s Earthworks understands these conditions firsthand. Whether you&apos;re building a new vacation home near the harbor, fixing drainage behind a beachfront property, or prepping a lot on the north side of town, Jonathan brings the right equipment and local know-how to get it done right.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From Harbor Docks to Crystal Beach and everything in between, we serve property owners and contractors throughout Destin. Our John Deere skid steer is compact enough for tight lots but powerful enough for serious grading and clearing work. Reach out for a free estimate — we typically respond within a day.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#367C2B" }}>
            Why Destin Property Owners Choose Duke&apos;s Earthworks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🏖️"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Coastal Expertise</h3>
              <p className="text-gray-600 text-sm">We know Destin&apos;s sandy soil, salt air, and drainage challenges — and how to work with them, not against them.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🚜"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>John Deere Reliability</h3>
              <p className="text-gray-600 text-sm">Quality equipment means quality results. Our John Deere skid steer handles everything from fine grading to heavy clearing.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"📋"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Free Estimates</h3>
              <p className="text-gray-600 text-sm">No pressure, no surprises. We&apos;ll look at your project and give you a straightforward quote before we start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Need skid steer work in Destin? Get a free quote today." />
    </>
  );
}
