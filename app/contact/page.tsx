import type { Metadata } from "next";
import content from "../../content/pages/contact.json";

export const metadata: Metadata = {
  title: "Contact Us – Get a Free Quote from Duke's Earthworks",
  description:
    "Contact Duke's Earthworks for a free quote on skid steer services in Northwest Florida. Call (850) 449-9885 or fill out our form. Serving Destin, 30A, Milton, Pensacola, and the Emerald Coast.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#1a1a1a" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            {content.hero.heading}
          </h1>
          <p className="text-gray-300 text-base">
            {content.hero.subheading}
          </p>
        </div>
      </section>

      <section className="py-14 px-4" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#367C2B" }}>
              Get In Touch
            </h2>
            <div className="space-y-6">
              {content.contacts.map((contact) => (
                <div key={contact.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">{contact.name}</p>
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                    className="text-2xl font-bold hover:underline"
                    style={{ color: "#367C2B" }}
                  >
                    {contact.phone}
                  </a>
                  <p className="text-gray-500 text-sm mt-1">{contact.note}</p>
                </div>
              ))}

              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Hours</p>
                <p className="font-semibold" style={{ color: "#367C2B" }}>{content.hours_label}</p>
                <p className="text-gray-600">{content.hours_detail}</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Location</p>
                <p className="font-semibold" style={{ color: "#367C2B" }}>{content.location_address}</p>
                <p className="text-gray-600 text-sm mt-1">{content.location_note}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#367C2B" }}>
              {content.form_heading}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-500 text-sm mb-5">
                {content.form_intro}
              </p>

              {content.form_url ? (
                <iframe
                  src={content.form_url}
                  className="w-full rounded-lg border-0"
                  style={{ minHeight: "600px" }}
                  title="Request a Free Quote"
                />
              ) : (
                <div className="text-center py-12 rounded-lg" style={{ backgroundColor: "#F0EBE3" }}>
                  <div className="text-4xl mb-4">📋</div>
                  <p className="text-gray-600 font-semibold mb-2">Online form coming soon!</p>
                  <p className="text-gray-500 text-sm mb-4">In the meantime, give us a call or send a text.</p>
                  <a
                    href="tel:8504499885"
                    className="inline-block px-7 py-3 rounded-full font-semibold"
                    style={{ backgroundColor: "#FFCC00", color: "#1a1a1a" }}
                  >
                    📞 Call (850) 449-9885
                  </a>
                </div>
              )}

              <p className="text-center text-xs text-gray-400 mt-4">
                Or call us directly — we&apos;re happy to answer questions!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area mention */}
      <section className="py-10 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm">
            {content.service_area_note}
          </p>
        </div>
      </section>
    </>
  );
}
