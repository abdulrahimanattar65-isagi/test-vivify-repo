import Image from "next/image";
import Link from "next/link";

export default function ManufacturingPreview() {
  return (
    <section className="bg-[#F7F5F0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative h-[450px] md:h-[600px] overflow-hidden">
            <Image
              src="/images/factory-4.jpg"
              alt="VIVIFY manufacturing facility"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>

            <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
              Manufacturing
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Made with
              <br />
              <span className="text-[#B98222]">
                precision.
              </span>
            </h2>

            <p className="text-gray-600 leading-7 mt-7 max-w-xl">
              Behind every beautiful interior is a carefully controlled
              manufacturing process. We combine modern technology,
              experienced craftsmanship, and detailed quality checks
              to create interiors that are built to last.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="border-t border-gray-300 pt-5">
                <p className="font-serif text-2xl">
                  Precision
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Accurate manufacturing at every stage.
                </p>
              </div>

              <div className="border-t border-gray-300 pt-5">
                <p className="font-serif text-2xl">
                  Quality
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Carefully checked before installation.
                </p>
              </div>

            </div>

            <Link
              href="/manufacturing"
              className="inline-block mt-10 bg-[#071827] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#B98222] transition"
            >
              Explore Manufacturing
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}