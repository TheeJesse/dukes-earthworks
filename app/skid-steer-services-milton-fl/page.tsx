import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Skid Steer Services in Milton, FL – Duke's Earthworks",
  description:
    "Skid steer services in Milton, FL — land clearing, pasture prep, driveway grading, and rural property earthwork from your local experts at Duke's Earthworks.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skid Steer Services in Milton, FL",
  provider: { "@type": "LocalBusiness", name: "Duke's Earthworks" },
  serviceType: "Skid Steer and Earthwork Services",
  areaServed: "Milton, FL",
  description:
    "Professional skid steer services including land clearing, pasture prep, driveway grading, and rural property earthwork in Milton, Florida. Locally owned and operated.",
};

const services = [
  {
    title: "Land Clearing & Root Raking",
    desc: "Clear overgrown acreage, remove stumps, and root rake your Milton property for pasture, farming, or future building. We handle the thick Northwest Florida brush.",
  },
  {
    title: "Pasture & Driveway Grading",
    desc: "Grade and level pastures for livestock, shape gravel driveways for rural properties, and fix the washouts that come with Milton's heavy summer rains.",
  },
  {
    title: "Fence Line Clearing",
    desc: "Clear fence rows through brush and timber for new fencing installations. Clean, straight lines that make your fence builder's job easy.",
  },
  {
    title: "Erosion Control & Drainage",
    desc: "Silt fencing, drainage swales, and erosion solutions for Milton's rolling terrain and clay soils. Keep your topsoil where it belongs.",
  },
];

export default function MiltonPage() {
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
            Skid Steer Services in Milton, FL — Our Hometown
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Locally owned and operated right here in Milton. Jonathan Smyly provides dependable skid steer services for rural properties, homesteads, and new construction across Santa Rosa County.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Services in Milton
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
            Your Neighbor, Your Earthwork Contractor
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Milton is home — literally. Duke&apos;s Earthworks is based right here on Christmas Tree Road, and Jonathan takes pride in serving his own community. Whether it&apos;s clearing a few acres for a neighbor&apos;s new pasture, grading a driveway for a family up the road, or prepping a lot for a new home in one of Milton&apos;s growing subdivisions, this is the work that matters most. When you hire Duke&apos;s Earthworks in Milton, you&apos;re hiring someone who knows the land because he lives on it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Milton&apos;s mix of rural acreage, new developments, and agricultural land means no two jobs are the same. We&apos;ve worked everywhere from the Blackwater River area to the farmland south of town and the new neighborhoods springing up along Highway 90. Whatever your earthwork needs, give us a call — we&apos;re just down the road and always happy to come take a look. Free estimates for all Milton property owners.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#367C2B" }}>
            Why Milton Chooses Duke&apos;s Earthworks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🏡"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Hometown Owned</h3>
              <p className="text-gray-600 text-sm">We live and work right here in Milton. Your property gets the same care we'd give our own.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🌾"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Rural Property Experts</h3>
              <p className="text-gray-600 text-sm">Pastures, fence lines, driveways, and acreage clearing — we understand the work Milton landowners need.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">{"🤝"}</div>
              <h3 className="font-bold mb-2" style={{ color: "#367C2B" }}>Neighbor-to-Neighbor Service</h3>
              <p className="text-gray-600 text-sm">Honest work, fair prices, and a handshake that means something. That&apos;s how we do business in Milton.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Local earthwork done right. Get your free Milton estimate today." />
    </>
  );
}
