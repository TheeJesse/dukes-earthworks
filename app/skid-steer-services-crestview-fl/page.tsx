import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Skid Steer Services in Crestview, FL – Duke's Earthworks",
  description:
    "Skid steer services in Crestview, FL — land clearing, pasture prep, and grading for larger rural lots in Okaloosa County. Free quotes from Duke's Earthworks.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skid Steer Services in Crestview, FL",
  provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
  serviceType: "Skid Steer and Earthwork Services",
  areaServed: "Crestview, FL",
  description:
    "Professional skid steer services including land clearing, pasture preparation, driveway grading, and rural property earthwork in Crestview, Florida.",
};

const services = [
  {
    title: "Acreage & Pasture Clearing",
    desc: "Clear brush, timber, and undergrowth from large Crestview lots to create usable pasture, farmland, or home sites. We handle the heavy clearing that inland properties need.",
  },
  {
    title: "Rural Driveway Grading",
    desc: "Long rural driveways require proper crown and drainage to survive Northwest Florida's heavy rains. We grade and shape driveways that last on Crestview's clay and sandy soils.",
  },
  {
    title: "Land Grading & Leveling",
    desc: "Level uneven terrain for building pads, barns, arenas, or landscaped areas. Crestview's rolling hills mean grading is often the first step to making land usable.",
  },
  {
    title: "Root Raking & Stump Removal",
    desc: "Remove stubborn root systems and stumps after clearing. Root raking leaves a clean, plantable surface — ready for grass, pasture seed, or construction.",
  },
];

export default function CrestviewPage() {
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
            Skid Steer Services in Crestview, FL
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Land clearing, pasture prep, and rural property grading for Crestview&apos;s larger inland lots. Duke&apos;s Earthworks handles the heavy work so you can use your land.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Services in Crestview
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
            Making Crestview&apos;s Rural Land Work for You
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Crestview sits inland from the coast, and the land here tells a different story — bigger lots, more timber, heavier clay soils, and rolling terrain that needs proper grading to be useful. Duke&apos;s Earthworks specializes in exactly this kind of work. Jonathan has cleared acreage for pasture, graded long driveways through wooded lots, and prepped building sites on some of Crestview&apos;s most challenging terrain. If you&apos;ve got land that needs work, we&apos;ve got the machine and the know-how.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Crestview property owners often have larger tracts that need more than a quick pass — they need someone who can handle the timber, the stumps, and the root systems that come with inland Northwest Florida land. Our John Deere skid steer with root rake attachment makes quick work of even the most overgrown properties. Get in touch for a free on-site estimate.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#367C2B" }}>
            Why Crestview Landowners Choose Duke&apos;s Earthworks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🌳"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Heavy Clearing Specialists</h3>
              <p className="text-gray-600 text-sm">Timber, brush, stumps, and root systems — we clear the kind of heavy growth that Crestview's inland lots are known for.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"📏"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Large-Lot Experience</h3>
              <p className="text-gray-600 text-sm">We're comfortable working larger acreage — pastures, homesteads, and rural building sites are our bread and butter.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🚜"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Right Equipment, Right Job</h3>
              <p className="text-gray-600 text-sm">Our John Deere skid steer with root rake and multiple attachments means we can tackle any Crestview earthwork project efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Got land that needs work in Crestview? Get a free quote today." />
    </>
  );
}
