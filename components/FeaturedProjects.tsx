import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Contemporary Residence",
    location: "Bangalore",
    image: "/images/project-1.jpg",
  },
  {
    title: "Modern Family Home",
    location: "Bangalore",
    image: "/images/project-2.jpg",
  },
  {
    title: "Minimalist Apartment",
    location: "Bangalore",
    image: "/images/project-3.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-4">
              Selected Projects
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Spaces we've
              <br />
              <span className="text-[#B98222]">
                brought to life.
              </span>
            </h2>
          </div>

          <Link
            href="/spaces"
            className="text-sm uppercase tracking-wider border-b border-[#071827] pb-2 hover:text-[#B98222] hover:border-[#B98222] transition"
          >
            View All Projects
          </Link>

        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <Link
              href="/spaces"
              key={project.title}
              className="group"
            >

              <div className="relative h-[450px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition" />

              </div>

              <div className="pt-5">

                <h3 className="font-serif text-2xl">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {project.location}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}