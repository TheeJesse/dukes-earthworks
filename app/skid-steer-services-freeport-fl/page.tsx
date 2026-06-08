import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Skid Steer Services in Freeport, FL – Duke's Earthworks",
  description:
    "Skid steer services in Freeport, FL — lot clearing, grading, and site prep for new construction in one of the Emerald Coast's fastest-growing areas. Free quotes.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skid Steer Services in Freeport, FL",
  provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
  serviceType: "Skid Steer and Earthwork Services",
  areaServed: "Freeport, FL",
  description:
    "Professional skid steer services including lot clearing, grading, driveway installation, and site prep for new construction in Freeport, Florida.",
};

const services = [
  {
    title: "New Construction Lot Prep",
    desc: "Clearing, grading, and prepping lots for the new homes going up across Freeport's growing neighborhoods. Ready for your builder to pour the slab.",
  },
  {
    title: "Driveway Grading & Installation",
    desc: "Build new gravel driveways or fix existing ones that have washed out. Freeport's sandy soil requires proper base preparation — and we do it right.",
  },
  {
    title: "Land Clearing & Brush Removal",
    desc: "Clear overgrown lots, remove trees and stumps, and get your Freeport property ready for construction, landscaping, or agricultural use.",
  },
  {
    title: "Drainage & Erosion Solutions",
    desc: "Grade for proper drainage and install erosion control measures to protect new construction sites near Freeport's wetlands and low-lying areas.",
  },
];

export default function FreeportPage() {
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
            Skid Steer Services in Freeport, FL
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Lot clearing, grading, and driveway prep for Freeport&apos;s booming residential growth. Duke&apos;s Earthworks helps new homeowners break ground the right way.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Services in Freeport
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
            Keeping Up with Freeport&apos;s Growth
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Freeport is one of the fastest-growing communities in Walton County, and it seems like new subdivisions are going up everywhere you look. Duke&apos;s Earthworks has been right there with the growth — clearing lots, grading driveways, and prepping sites for the homes that are transforming this area. Jonathan understands that Freeport&apos;s mix of sandy coastal soil and wetland-adjacent terrain requires careful grading to avoid future drainage nightmares.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re a homeowner building on a lot you just purchased or a contractor working through a multi-lot development, we offer the same dependable service. Fast quotes, honest pricing, and earthwork that&apos;s done right the first time. Give us a call or fill out our contact form to get started.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#367C2B" }}>
            Why Freeport Builders &amp; Homeowners Choose Duke&apos;s Earthworks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"📈"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Growth-Area Experience</h3>
              <p className="text-gray-600 text-sm">We know Freeport's developing neighborhoods and the soil conditions that come with them — because we've worked in them.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🏗️"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Builder-Friendly</h3>
              <p className="text-gray-600 text-sm">We work around construction schedules and coordinate with your builder to keep the project moving forward.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"💵"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Competitive Rates</h3>
              <p className="text-gray-600 text-sm">Quality earthwork doesn't have to break the budget. We deliver professional results at prices that work for Freeport homeowners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Building in Freeport? Get your free earthwork quote today." />
    </>
  );
}
