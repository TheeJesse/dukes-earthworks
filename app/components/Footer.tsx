import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">Duke&apos;s Earthworks</h3>
            <p className="text-sm text-gray-300 mb-4">
              Professional skid steer services — driveways, grading, erosion control, land clearing, and more across the Emerald Coast and Northwest Florida.
            </p>
            <p className="text-sm text-gray-400">1641 Christmas Tree Road, Milton, FL 32583</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: "#FFCC00" }}>Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact + CTA */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: "#FFCC00" }}>Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-5">
              <li>
                <a href="tel:8504499885" className="hover:text-white transition-colors">
                  📞 <strong>(850) 449-9885</strong>
                </a>
              </li>
              <li className="text-gray-400">Mon–Sat: 7:00 AM – 6:00 PM</li>
            </ul>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FFCC00", color: "#1a1a1a" }}
            >
              Get a Free Quote →
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Duke&apos;s Earthworks. All rights reserved. | Milton, FL | Serving the Emerald Coast &amp; Northwest Florida</p>
        </div>
      </div>
    </footer>
  );
}
