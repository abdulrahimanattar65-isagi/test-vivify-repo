import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Cutting",
    image: "/images/factory-1.jpg",
  },
  {
    number: "02",
    title: "Edge Banding",
    image: "/images/factory-2.jpg",
  },
  {
    number: "03",
    title: "Pressing",
    image: "/images/factory-3.jpg",
  },
  {
    number: "04",
    title: "Assembly",
    image: "/images/factory-4.jpg",
  },
  {
    number: "05",
    title: "Quality Check",
    image: "/images/factory-5.jpg",
  },
];

export default function Manufacturing() {
  return (
    <section className="bg-[#071827] text-white py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          <div>
            <p className="text-[#B98222] text-sm tracking-[0.25em] uppercase mb-5">
              Where Design Becomes Real
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Precision is
              <br />
              <span className="text-[#B98222]">
                Manufactured.
              </span>
            </h2>
          </div>

          <div className="lg:flex lg:items-end">
            <p className="text-gray-300 leading-7 max-w-xl">
              Every piece is manufactured with precision, consistency,
              and attention to detail. From raw material to finished
              product, our process is designed to deliver exceptional
              quality.
            </p>
          </div>

        </div>

        {/* Manufacturing Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {steps.map((step) => (
            <div key={step.number} className="group">

              {/* Image */}
              <div className="relative h-[300px] overflow-hidden bg-gray-800">

                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                <span className="absolute top-4 left-4 text-[#B98222] text-sm font-semibold">
                  {step.number}
                </span>

              </div>

              {/* Title */}
              <div className="border-b border-gray-700 py-5">
                <h3 className="text-sm uppercase tracking-[0.15em]">
                  {step.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}