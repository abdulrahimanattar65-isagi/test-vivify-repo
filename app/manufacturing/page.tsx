import Image from "next/image";
import Link from "next/link";

const process = [
  {
    number: "01",
    title: "Cutting",
    description:
      "Precision cutting ensures every component is produced to the exact dimensions required by the design.",
    image: "/images/factory-1.jpg",
  },
  {
    number: "02",
    title: "Edge Banding",
    description:
      "Edges are carefully finished to provide durability, protection, and a clean premium appearance.",
    image: "/images/factory-2.jpg",
  },
  {
    number: "03",
    title: "Pressing",
    description:
      "Advanced pressing techniques ensure strong, consistent, and long-lasting construction.",
    image: "/images/factory-3.jpg",
  },
  {
    number: "04",
    title: "Assembly",
    description:
      "Each component is carefully assembled and checked before moving to the installation stage.",
    image: "/images/factory-4.jpg",
  },
  {
    number: "05",
    title: "Quality Check",
    description:
      "Every finished component goes through detailed quality checks before it leaves our facility.",
    image: "/images/factory-5.jpg",
  },
];

export default function ManufacturingPage() {
  return (
    <main className="bg-white text-[#071827]">

      {/* Hero */}
      <section className="bg-[#071827] text-white pt-32 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
            Manufacturing
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight max-w-5xl">
            Precision behind
            <br />
            <span className="text-[#B98222]">
              every detail.
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mt-8 leading-7">
            Great design deserves great execution. Our manufacturing
            process combines skilled craftsmanship, modern machinery,
            and rigorous quality control.
          </p>

        </div>

      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
                Built With Precision
              </p>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-7">
                From raw materials
                <br />
                to finished spaces.
              </h2>

              <p className="text-gray-600 leading-7 mb-6">
                Our manufacturing process is designed to maintain
                consistency at every stage. Every panel, component,
                and fitting is produced with attention to detail.
              </p>

              <p className="text-gray-600 leading-7">
                By combining technology with experienced craftsmanship,
                we are able to turn detailed designs into precisely
                manufactured interiors.
              </p>

            </div>

            <div className="relative h-[450px] md:h-[550px]">

              <Image
                src="/images/factory-4.jpg"
                alt="Furniture manufacturing process"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="bg-[#071827] text-white py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">

            <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
              Our Process
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Five stages.
              <br />
              <span className="text-[#B98222]">
                One standard.
              </span>
            </h2>

          </div>

          <div className="space-y-10">

            {process.map((step, index) => (

              <div
                key={step.number}
                className="grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-10 border-t border-gray-700 pt-8"
              >

                {/* Number */}
                <div>
                  <span className="text-[#B98222] text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>

                  <h3 className="font-serif text-3xl md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-7 mt-4 max-w-md">
                    {step.description}
                  </p>

                </div>

                {/* Image */}
                <div className="relative h-[240px] overflow-hidden">

                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Quality */}
      <section className="bg-[#F7F5F0] py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-8 md:p-10">
              <span className="text-[#B98222] text-sm">
                01
              </span>

              <h3 className="font-serif text-2xl mt-5 mb-4">
                Modern Machinery
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Technology helps us maintain precision and consistency
                throughout the manufacturing process.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10">
              <span className="text-[#B98222] text-sm">
                02
              </span>

              <h3 className="font-serif text-2xl mt-5 mb-4">
                Skilled Craftsmanship
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Experienced professionals bring knowledge and attention
                to detail to every stage of production.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10">
              <span className="text-[#B98222] text-sm">
                03
              </span>

              <h3 className="font-serif text-2xl mt-5 mb-4">
                Quality Control
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Every finished component is inspected before it reaches
                the installation stage.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#B98222] text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="font-serif text-4xl md:text-5xl">
            Let's build something
            <br />
            exceptional.
          </h2>

          <p className="mt-6 text-white/80">
            Talk to our team about your next interior project.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-[#071827] px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#071827] hover:text-white transition"
          >
            Contact Our Team
          </Link>

        </div>

      </section>

    </main>
  );
}