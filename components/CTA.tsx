import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#B98222] text-white py-20 md:py-28">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-sm tracking-[0.3em] uppercase mb-6">
          Let's Create Together
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
          Ready to Transform
          <br />
          Your Space?
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-white/80 leading-7">
          Tell us about your space, your vision, and what you have in mind.
          Our team will help bring it to life.
        </p>

        <div className="mt-10 flex justify-center">

          <Link
            href="/contact"
            className="bg-white text-[#071827] px-8 py-4 flex items-center gap-3 text-sm tracking-wide hover:bg-[#071827] hover:text-white transition"
          >
            BOOK A CONSULTATION
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}