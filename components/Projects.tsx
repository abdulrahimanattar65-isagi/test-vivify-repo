import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Modern Kitchens",
    category: "Kitchens",
    image: "/images/kitchen.jpg",
  },
  {
    title: "Luxury Bedrooms",
    category: "Bedrooms",
    image: "/images/bedroom.jpg",
  },
  {
    title: "Living Spaces",
    category: "Living Rooms",
    image: "/images/living-room.jpg",
  },
  {
    title: "Elegant Dining",
    category: "Dining Spaces",
    image: "/images/dining.jpg",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#F7F5F0] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <p className="text-[#B98222] text-sm tracking-[0.25em] uppercase mb-4">
              Spaces We Create
            </p>

            <h2 className="text-[#071827] text-4xl md:text-5xl lg:text-6xl font-serif">
              Real Spaces.
              <br />
              <span className="text-[#B98222]">
                Real Stories.
              </span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm uppercase tracking-wider text-[#071827] hover:text-[#B98222] transition"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>

        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {projects.map((project) => (
            <Link
              href="/projects"
              key={project.title}
              className="group"
            >

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <p className="text-xs uppercase tracking-[0.2em] mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-serif">
                    {project.title}
                  </h3>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}