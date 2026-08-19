import Image from "next/image";
import Link from "next/link";

const spaces = [
  {
    title: "Modular Kitchens",
    category: "Kitchen",
    description:
      "Functional kitchens designed around your lifestyle, storage needs, and aesthetic preferences.",
    image: "/images/kitchen.jpg",
  },
  {
    title: "Luxury Bedrooms",
    category: "Bedroom",
    description:
      "Calm, comfortable bedrooms combining smart storage with timeless design.",
    image: "/images/bedroom.jpg",
  },
  {
    title: "Living Spaces",
    category: "Living Room",
    description:
      "Elegant living spaces designed for comfort, conversations, and everyday life.",
    image: "/images/living-room.jpg",
  },
  {
    title: "Dining Spaces",
    category: "Dining",
    description:
      "Beautiful dining areas created to bring people together.",
    image: "/images/dining.jpg",
  },
];

export default function SpacesPage() {
  return (
    <main className="bg-white text-[#071827]">

      {/* Hero */}
      <section className="bg-[#071827] text-white pt-32 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
            Our Spaces
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
            Spaces made
            <br />
            <span className="text-[#B98222]">
              for you.
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mt-8 leading-7">
            Explore our collection of thoughtfully designed interiors,
            crafted to combine beauty, functionality, and everyday comfort.
          </p>

        </div>

      </section>

      {/* Projects */}
      <section className="py-20 md:py-28 bg-[#F7F5F0]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-6">

            {spaces.map((space) => (

              <div
                key={space.title}
                className="group bg-white"
              >

                {/* Image */}
                <div className="relative h-[420px] overflow-hidden">

                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Content */}
                <div className="p-7 md:p-9">

                  <p className="text-[#B98222] text-xs uppercase tracking-[0.2em] mb-3">
                    {space.category}
                  </p>

                  <h2 className="font-serif text-3xl mb-4">
                    {space.title}
                  </h2>

                  <p className="text-gray-600 leading-7 text-sm max-w-lg">
                    {space.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="bg-[#071827] text-white py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">

            <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
              Our Approach
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              From idea
              <br />
              <span className="text-[#B98222]">
                to reality.
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border-t border-gray-700 pt-6">
              <span className="text-[#B98222] text-sm">
                01
              </span>

              <h3 className="font-serif text-2xl mt-5 mb-3">
                Understand
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                We understand your lifestyle, requirements, preferences,
                and budget.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <span className="text-[#B98222] text-sm">
                02
              </span>

              <h3 className="font-serif text-2xl mt-5 mb-3">
                Design
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Our designers turn your requirements into a thoughtful
                and practical design.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <span className="text-[#B98222] text-sm">
                03
              </span>

              <h3 className="font-serif text-2xl mt-5 mb-3">
                Manufacture
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Your design is manufactured using precision machinery
                and quality materials.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <span className="text-[#B98222] text-sm">
                04
              </span>

              <h3 className="font-serif text-2xl mt-5 mb-3">
                Install
              </h3>

              <p className="text-gray-400 text-sm leading-6">
                Our installation team brings everything together
                with careful attention to detail.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#B98222] text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="font-serif text-4xl md:text-5xl">
            Have a space
            <br />
            in mind?
          </h2>

          <p className="mt-6 text-white/80">
            Let's discuss your ideas and create something that feels
            uniquely yours.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-[#071827] px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#071827] hover:text-white transition"
          >
            Book a Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}