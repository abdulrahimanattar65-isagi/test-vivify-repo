import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F7F5F0]">
      <div className="grid lg:grid-cols-2 min-h-[650px]">

        {/* LEFT SIDE */}
        <div className="flex items-center px-6 py-16 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-xl">

            <p className="text-[#B98222] text-sm tracking-[0.25em] uppercase mb-6">
              — Designed For Living
            </p>

            <h1 className="text-[#071827] text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.95]">
              Built With
              <br />
              <span className="text-[#B98222]">
                Precision.
              </span>
            </h1>

            <p className="mt-8 text-gray-600 leading-7 max-w-lg">
              From thoughtful design to precision manufacturing and
              professional installation, we create spaces that are
              made around you.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/contact"
                className="bg-[#B98222] text-white px-7 py-4 flex items-center gap-3 text-sm tracking-wide"
              >
                BOOK A CONSULTATION
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/spaces"
                className="border border-gray-400 text-[#071827] px-7 py-4 flex items-center gap-3 text-sm tracking-wide"
              >
                EXPLORE SPACES
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative min-h-[450px] lg:min-h-full">

          <Image
            src="/images/hero.jpg"
            alt="Luxury interior design"
            fill
            priority
            className="object-cover"
          />

        </div>

      </div>
    </section>
  );
}