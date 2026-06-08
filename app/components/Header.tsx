"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#1a1a1a" }} className="text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-wide">Duke&apos;s Earthworks</span>
          <span className="text-xs" style={{ color: "#367C2B" }}>Emerald Coast&apos;s Skid Steer Specialist</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-200 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-yellow-200 transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-yellow-200 transition-colors">Gallery</Link>
          <Link href="/faq" className="hover:text-yellow-200 transition-colors">FAQ</Link>
          <Link href="/about" className="hover:text-yellow-200 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-yellow-200 transition-colors">Contact</Link>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-full font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FFCC00", color: "#1a1a1a" }}
          >
            Get a Free Quote
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div style={{ backgroundColor: "#111" }} className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-700 hover:text-yellow-200">Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-700 hover:text-yellow-200">Services</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-700 hover:text-yellow-200">Gallery</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-700 hover:text-yellow-200">FAQ</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-700 hover:text-yellow-200">About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2 border-b border-gray-700 hover:text-yellow-200">Contact</Link>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3 rounded-full font-semibold text-center"
            style={{ backgroundColor: "#FFCC00", color: "#1a1a1a" }}
          >
            Get a Free Quote
          </a>
          <a href="tel:8504499885" className="text-center py-2 font-semibold" style={{ color: "#367C2B" }}>
            📞 (850) 449-9885
          </a>
        </div>
      )}
    </header>
  );
}
