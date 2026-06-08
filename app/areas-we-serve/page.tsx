import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Areas We Serve – Duke's Earthworks | Skid Steer Services Across Northwest Florida",
  description:
    "Duke's Earthworks provides professional skid steer services across the Emerald Coast and Northwest Florida — Destin, 30A, Niceville, Fort Walton Beach, Navarre, Milton, Pensacola, Freeport, and Crestview.",
};

const cities = [
  {
    name: "Destin",
    slug: "skid-steer-services-destin-fl",
    desc: "Coastal grading, drainage solutions, erosion control, and site prep for vacation homes and waterfront properties along the Emerald Coast's most famous beach destination.",
  },
  {
    name: "Santa Rosa Beach & 30A",
    slug: "skid-steer-services-santa-rosa-beach-fl",
    desc: "Lot clearing, dune-safe erosion control, and precision grading for luxury beach communities along the 30A corridor — Seaside, WaterColor, Grayton Beach, and beyond.",
  },
  {
    name: "Niceville",
    slug: "skid-steer-services-niceville-fl",
    desc: "Driveway grading, lot clearing, and land prep for Niceville's growing neighborhoods and new subdivisions near Bluewater Bay and Boggy Bayou.",
  },
  {
    name: "Fort Walton Beach",
    slug: "skid-steer-services-fort-walton-beach-fl",
    desc: "Commercial and residential earthwork — parking lot grading, erosion control, and site prep for properties near Santa Rosa Sound and Choctawhatchee Bay.",
  },
  {
    name: "Navarre",
    slug: "skid-steer-services-navarre-fl",
    desc: "Hurricane-season grading, erosion control, and coastal site prep for new construction and existing properties in Navarre and Navarre Beach.",
  },
  {
    name: "Milton",
    slug: "skid-steer-services-milton-fl",
    desc: "Our hometown — land clearing, pasture grading, fence line clearing, and rural driveway prep for homesteads, farms, and new builds across Santa Rosa County.",
  },
  {
    name: "Pensacola",
    slug: "skid-steer-services-pensacola-fl",
    desc: "Commercial site prep, subdivision grading, and large-scale land clearing for the Pensacola metro area and Escambia County's expanding developments.",
  },
  {
    name: "Freeport",
    slug: "skid-steer-services-freeport-fl",
    desc: "Lot clearing, driveway grading, and site prep for one of Walton County's fastest-growing communities — new construction and residential earthwork.",
  },
  {
    name: "Crestview",
    slug: "skid-steer-services-crestview-fl",
    desc: "Inland rural land clearing, pasture prep, root raking, and driveway grading for larger acreage and rural properties across northern Okaloosa County.",
  },
];

export default function AreasWeServePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Areas We Serve Across Northwest Florida
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Duke&apos;s Earthworks provides professional skid steer services from the Emerald Coast beaches to the inland rural communities of Northwest Florida. Based in Milton, serving the entire region.
          </p>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#367C2B" }}>
            Our Service Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow block"
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#367C2B" }}>
                  {city.name}, FL
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{city.desc}</p>
                <span
                  className="inline-block text-sm font-semibold"
                  style={{ color: "#367C2B" }}
                >
                  View {city.name} Services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Coverage */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#367C2B" }}>
            Your Local Earthwork Contractor
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jonathan Smyly founded Duke&apos;s Earthworks right here in Milton, FL, and has since expanded service across the entire Emerald Coast and Northwest Florida region. From the coastal communities of Destin and 30A to the inland acreage around Crestview, we bring the same quality equipment and honest work ethic to every job.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our John Deere skid steer is versatile enough to handle everything from tight residential lots to multi-acre clearing projects. Whether you need a simple driveway graded or a full site prepped for construction, we&apos;re the local team that shows up on time and gets it done right. Contact us for a free estimate on your project.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Need skid steer services in Northwest Florida? Get a free quote today." />
    </>
  );
}
