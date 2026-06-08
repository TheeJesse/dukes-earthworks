import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Skid Steer Services in Niceville, FL – Duke's Earthworks",
  description:
    "Skid steer grading, driveway prep, and land clearing in Niceville, FL. Serving new subdivisions and residential properties. Free quotes from Duke's Earthworks.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skid Steer Services in Niceville, FL",
  provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
  serviceType: "Skid Steer and Earthwork Services",
  areaServed: "Niceville, FL",
  description:
    "Professional skid steer services including driveway grading, land clearing, and site prep for residential properties in Niceville, Florida.",
};

const services = [
  {
    title: "Driveway Grading & Installation",
    desc: "New driveways graded and installed for Niceville homes, or reshaping existing driveways that have developed ruts and low spots over time.",
  },
  {
    title: "Lot Clearing for New Builds",
    desc: "Clear trees, brush, and stumps for new home construction in Niceville's growing subdivisions. Clean, efficient prep work that's ready for your builder.",
  },
  {
    title: "Land Grading & Leveling",
    desc: "Level uneven ground for patios, outbuildings, pools, or landscaping. Proper grading prevents water problems before they start.",
  },
  {
    title: "Erosion Control & Drainage",
    desc: "Silt fencing, drainage swales, and erosion control for Niceville properties dealing with runoff from sloped terrain near Boggy Bayou.",
  },
];

export default function NicevillePage() {
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
            Skid Steer Services in Niceville, FL
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Driveway grading, lot clearing, and land prep for Niceville&apos;s growing neighborhoods. Professional skid steer work from Duke&apos;s Earthworks.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Services in Niceville
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
            Earthwork Services for Niceville Homeowners
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Niceville is one of the fastest-growing areas in the Emerald Coast region, with new subdivisions popping up from Bluewater Bay to the outskirts of town. Duke&apos;s Earthworks has helped homeowners and builders throughout Niceville with everything from grading a fresh driveway on a new lot to clearing brush for a backyard expansion. The mix of wooded terrain and clay-heavy soil here means you need someone who knows how the ground behaves after a good rain — and Jonathan does.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you&apos;re building in Niceville, don&apos;t let poor grading cause water problems down the road. A properly graded lot and driveway from day one saves thousands in repairs later. Give us a call or fill out our contact form for a free estimate on your project.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#367C2B" }}>
            Why Niceville Homeowners Choose Duke&apos;s Earthworks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🏠"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Residential Specialist</h3>
              <p className="text-gray-600 text-sm">From single driveways to full lot prep, we focus on the work Niceville homeowners actually need.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"⚡"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Fast Turnarounds</h3>
              <p className="text-gray-600 text-sm">We know construction schedules are tight. We show up on time and get the job done right — no delays.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"💰"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Fair, Honest Pricing</h3>
              <p className="text-gray-600 text-sm">Free estimates with no hidden fees. You&apos;ll know what the job costs before we put the machine in the dirt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Planning a project in Niceville? Get a free quote today." />
    </>
  );
}
