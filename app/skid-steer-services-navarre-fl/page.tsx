import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Skid Steer Services in Navarre, FL – Duke's Earthworks",
  description:
    "Skid steer services in Navarre, FL — hurricane prep, erosion control, lot clearing, and grading for coastal new construction. Free quotes from Duke's Earthworks.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skid Steer Services in Navarre, FL",
  provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
  serviceType: "Skid Steer and Earthwork Services",
  areaServed: "Navarre, FL",
  description:
    "Professional skid steer services including hurricane prep grading, erosion control, lot clearing, and site preparation in Navarre, Florida.",
};

const services = [
  {
    title: "Hurricane Season Grading",
    desc: "Proper grading and drainage shaping before storm season hits. Move water away from your Navarre home's foundation and prevent flood damage before it happens.",
  },
  {
    title: "Erosion Control & Silt Fencing",
    desc: "Installation of silt fencing and erosion barriers for coastal lots in Navarre. Meet code requirements and protect your property from sand and soil loss.",
  },
  {
    title: "New Construction Site Prep",
    desc: "Full site preparation for new builds throughout Navarre — clearing, grading, driveway rough-in, and erosion measures, all in one package.",
  },
  {
    title: "Driveway Installation",
    desc: "Gravel driveways built right for Navarre's sandy soil. We grade, compact, and shape driveways that won't wash out in the first heavy rain.",
  },
];

export default function NavarrePage() {
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
            Skid Steer Services in Navarre, FL
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Hurricane-ready grading, erosion control, and site prep for Navarre&apos;s coastal properties. Duke&apos;s Earthworks keeps your land protected year-round.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Services in Navarre
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
            Protecting Navarre Properties from Storm to Shoreline
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Navarre sits directly in the path of Gulf Coast weather — and that means grading and erosion control aren&apos;t optional, they&apos;re essential. Duke&apos;s Earthworks helps Navarre homeowners and builders prepare for hurricane season with proper drainage grading, silt fence installation, and lot prep that holds up when the storms roll in. Jonathan has worked throughout the Navarre area and understands the unique challenges of building on this barrier island-adjacent terrain.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From new homes going up along Gulf Boulevard to drainage fixes on established properties near Navarre Beach, we deliver reliable skid steer work at fair prices. Don&apos;t wait for the next named storm to find out your grading isn&apos;t adequate — let us take a look. Free estimates, no obligation.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#367C2B" }}>
            Why Navarre Property Owners Choose Duke&apos;s Earthworks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🌀"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Storm-Ready Work</h3>
              <p className="text-gray-600 text-sm">We grade with hurricane season in mind. Proper drainage and erosion control that stands up to Gulf Coast weather.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🔧"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Full Service Prep</h3>
              <p className="text-gray-600 text-sm">Clearing, grading, driveway, and erosion — one call covers everything your Navarre lot needs before construction begins.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"⭐"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Reputation Built on Results</h3>
              <p className="text-gray-600 text-sm">We treat every property like our own. That&apos;s why homeowners and contractors across the Emerald Coast recommend us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Preparing your Navarre property? Get a free estimate today." />
    </>
  );
}
