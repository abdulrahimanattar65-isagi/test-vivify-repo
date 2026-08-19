import Image from "next/image";
import Link from "next/link";

const spaces = [
  {
    title: "Modular Kitchens",
    image: "/images/kitchen.jpg",
  },
  {
    title: "Bedrooms",
    image: "/images/bedroom.jpg",
  },
  {
    title: "Living Spaces",
    image: "/images/living-room.jpg",
  },
  {
    title: "Dining Spaces",
    image: "/images/dining.jpg",
  },
];

export default function SpacesPreview() {
  return (
    <section className="bg-[#F7F5F0] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-4">
              Our Spaces
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Designed around
              <br />
              <span className="text-[#B98222]">
                your life.
              </span>
            </h2>
          </div>

          <Link
            href="/spaces"
            className="text-sm uppercase tracking-wider border-b border-[#071827] pb-2 hover:text-[#B98222] transition"
          >
            View All Spaces
          </Link>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {spaces.map((space) => (
            <Link
              href="/spaces"
              key={space.title}
              className="group relative h-[360px] md:h-[430px] overflow-hidden"
            >

              <Image
                src={space.image}
                alt={space.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              <div className="absolute bottom-0 left-0 p-7 md:p-9 text-white">

                <h3 className="font-serif text-3xl md:text-4xl">
                  {space.title}
                </h3>

                <p className="text-sm mt-3 text-white/80">
                  Explore →
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}