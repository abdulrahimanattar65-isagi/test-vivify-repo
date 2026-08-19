import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Spaces", href: "/spaces" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Modular Kitchens", href: "/spaces" },
  { name: "Bedrooms", href: "/spaces" },
  { name: "Living Spaces", href: "/spaces" },
  { name: "Dining Spaces", href: "/spaces" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071827] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-bold tracking-[0.2em]"
            >
              VIVIFY
            </Link>

            <p className="text-gray-400 text-sm leading-6 mt-6 max-w-xs">
              Creating thoughtful spaces through design, precision
              manufacturing, and professional installation.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-7">

              <a
                href="#"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-xs hover:border-[#B98222] hover:text-[#B98222] transition"
              >
                IG
              </a>

              <a
                href="#"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center text-xs hover:border-[#B98222] hover:text-[#B98222] transition"
              >
                IN
              </a>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6">
              Services
            </h3>

            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              <p>Bangalore, Karnataka</p>

              <a
                href="tel:+919999999999"
                className="block hover:text-white transition"
              >
                +91 99999 99999
              </a>

              <a
                href="mailto:hello@vivify.com"
                className="block hover:text-white transition"
              >
                hello@vivify.com
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#B98222] mt-3"
              >
                Get in touch
                <ArrowUpRight size={16} />
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-gray-500 text-xs">
            © 2026 VIVIFY. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-500">

            <Link
              href="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>
      </div>

    </footer>
  );
}