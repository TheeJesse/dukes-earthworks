import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";
import PlaceholderImage from "../components/PlaceholderImage";
import content from "../../content/pages/gallery.json";

export const metadata: Metadata = {
  title: "Photo Gallery – Duke's Earthworks",
  description:
    "See real skid steer projects from Duke's Earthworks — driveways, grading, land clearing, erosion control, and more across Northwest Florida.",
};

export default function GalleryPage() {
  const hasItems = content.items && content.items.length > 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items: any[] = content.items || [];

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            {content.hero.heading}
          </h1>
          <p className="text-gray-300">
            {content.hero.subheading}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-6xl mx-auto">
          {hasItems ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item: any, i: number) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {item.type === "before-after" ? (
                    <div className="grid grid-cols-2 gap-1">
                      <PlaceholderImage label="Before" aspectRatio="aspect-square" />
                      <PlaceholderImage label="After" aspectRatio="aspect-square" />
                    </div>
                  ) : (
                    <PlaceholderImage label={item.title} />
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-sm" style={{ color: "#367C2B" }}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📸</div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#367C2B" }}>
                Gallery Coming Soon
              </h2>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                We&apos;re building our photo gallery with real project photos. Check back soon to see our work — or contact us to see examples in person!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <PlaceholderImage label="Driveway Project" />
                <PlaceholderImage label="Land Clearing" />
                <PlaceholderImage label="Grading Work" />
                <PlaceholderImage label="Erosion Control" />
                <PlaceholderImage label="Before & After" />
                <PlaceholderImage label="Site Prep" />
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner heading={content.cta_banner_heading} />
    </>
  );
}
