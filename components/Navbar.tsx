"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F0] text-[#071827] shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <nav className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold tracking-[0.2em]"
          >
            VIVIFY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="text-sm hover:text-[#B98222] transition"
            >
              Home
            </Link>

            <Link
              href="/spaces"
              className="text-sm hover:text-[#B98222] transition"
            >
              Spaces
            </Link>

            <Link
              href="/about"
              className="text-sm hover:text-[#B98222] transition"
            >
              About
            </Link>

            <Link
              href="/manufacturing"
              className="text-sm hover:text-[#B98222] transition"
            >
              Manufacturing
            </Link>

            <Link
              href="/contact"
              className="text-sm hover:text-[#B98222] transition"
            >
              Contact
            </Link>

           <Link
  href="/contact"
  className="bg-[#B98222] text-white px-5 py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-[#071827] transition"
>
  Book Consultation
</Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#071827] text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-[#071827] border-t border-white/10">

            <div className="flex flex-col py-4">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm hover:text-[#B98222]"
              >
                Home
              </Link>

              <Link
                href="/spaces"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm hover:text-[#B98222]"
              >
                Spaces
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm hover:text-[#B98222]"
              >
                About
              </Link>

              <Link
                href="/manufacturing"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm hover:text-[#B98222]"
              >
                Manufacturing
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm hover:text-[#B98222]"
              >
                Contact
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mx-4 mt-2 bg-[#B98222] px-5 py-3 text-center text-xs uppercase tracking-wider"
              >
                Book Consultation
              </Link>

            </div>

          </div>
        )}

      </div>
    </header>
  );
}