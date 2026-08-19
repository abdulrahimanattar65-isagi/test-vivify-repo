import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-[#F7F5F0]">

      <div className="grid lg:grid-cols-2 min-h-[550px]">

        {/* LEFT — TESTIMONIAL */}
        <div className="flex items-center px-6 py-16 md:px-12 lg:px-20">

          <div className="max-w-xl">

            <p className="text-[#B98222] text-sm tracking-[0.25em] uppercase mb-6">
              Client Stories
            </p>

            <div className="text-[#B98222] text-6xl font-serif leading-none mb-6">
              “
            </div>

            <blockquote className="text-[#071827] text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed">
              The team understood our vision from day one and
              transformed our home into a space that feels
              completely ours.
            </blockquote>

            <div className="mt-8">
              <p className="text-[#071827] font-semibold">
                Rahul & Priya
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Homeowner, Bangalore
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative min-h-[450px] lg:min-h-full">

          <Image
            src="/images/testimonial.jpg"
            alt="Beautiful interior designed by Vivify"
            fill
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}