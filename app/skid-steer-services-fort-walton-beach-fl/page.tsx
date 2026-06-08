import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Skid Steer Services in Fort Walton Beach, FL – Duke's Earthworks",
  description:
    "Skid steer services in Fort Walton Beach — commercial grading, erosion control, parking lot prep, and residential earthwork. Free quotes from Duke's Earthworks.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skid Steer Services in Fort Walton Beach, FL",
  provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
  serviceType: "Skid Steer and Earthwork Services",
  areaServed: "Fort Walton Beach, FL",
  description:
    "Professional skid steer services including commercial grading, parking lot prep, erosion control, and residential earthwork in Fort Walton Beach, Florida.",
};

const services = [
  {
    title: "Commercial Grading & Prep",
    desc: "Site grading and preparation for commercial projects throughout Fort Walton Beach. Parking lots, building pads, and storm water management areas.",
  },
  {
    title: "Erosion & Sediment Control",
    desc: "Silt fencing, sediment basins, and erosion control measures for construction sites and properties near Santa Rosa Sound and Choctawhatchee Bay.",
  },
  {
    title: "Residential Driveways & Grading",
    desc: "New driveway installation, regrading, and drainage correction for Fort Walton Beach homes. Fix standing water and washout issues for good.",
  },
  {
    title: "Land Clearing & Root Raking",
    desc: "Clear overgrown lots, remove stumps and root systems, and prepare land for new construction or landscaping projects in the Fort Walton area.",
  },
];

export default function FortWaltonBeachPage() {
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
            Skid Steer Services in Fort Walton Beach, FL
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Commercial and residential earthwork in Fort Walton Beach — grading, clearing, erosion control, and site prep from Duke&apos;s Earthworks.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Services in Fort Walton Beach
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
            Earthwork Solutions for Fort Walton Beach
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fort Walton Beach sits at the crossroads of residential neighborhoods, commercial corridors, and waterfront property — and each one has different earthwork needs. Duke&apos;s Earthworks has the experience to handle them all. From grading a new parking pad for a business on Beal Parkway to fixing drainage behind a home near the sound, Jonathan brings the versatility and local knowledge that Fort Walton projects demand.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The flat, low-lying terrain around Fort Walton Beach means proper grading and erosion control are critical — especially during hurricane season. Don&apos;t wait until storm water is pooling on your property. Let us assess your grading and drainage now. Free estimates, quick turnaround, and honest work every time.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#367C2B" }}>
            Why Fort Walton Beach Chooses Duke&apos;s Earthworks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🏢"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Commercial &amp; Residential</h3>
              <p className="text-gray-600 text-sm">We handle both commercial site work and residential projects — one call for all your earthwork needs in Fort Walton Beach.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🌧️"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Storm-Ready Grading</h3>
              <p className="text-gray-600 text-sm">Florida storms don't surprise us. We grade and prep properties to handle heavy rain and seasonal weather without flooding.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"📍"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Locally Based</h3>
              <p className="text-gray-600 text-sm">Headquartered in Milton, we&apos;re just up the road. Fast response times and a real person you can talk to about your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Need grading or clearing in Fort Walton Beach? Get a free quote." />
    </>
  );
}
