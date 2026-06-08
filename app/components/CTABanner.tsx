export default function CTABanner({ heading = "Ready to get your project started?" }: { heading?: string }) {
  return (
    <section style={{ backgroundColor: "#367C2B" }} className="py-14 px-4 text-center text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
      <p className="text-gray-200 mb-7 max-w-xl mx-auto text-sm md:text-base">
        Call us or fill out our quick form — we&apos;ll get back to you with a free quote, usually within a day.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#FFCC00", color: "#1a1a1a" }}
        >
          Get a Free Quote →
        </a>
        <a
          href="/contact"
          className="px-7 py-3 rounded-full font-semibold border-2 border-white text-white text-sm hover:bg-white hover:text-gray-900 transition-colors"
        >
          📞 Request a Call
        </a>
      </div>
    </section>
  );
}
