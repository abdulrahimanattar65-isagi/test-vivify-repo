import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-[#071827]">

      {/* Hero */}
      <section className="bg-[#071827] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
            About VIVIFY
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
            Spaces designed
            <br />
            <span className="text-[#B98222]">
              for living.
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mt-8 leading-7">
            We create thoughtfully designed interiors that combine
            functionality, craftsmanship, and timeless aesthetics.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <div className="relative h-[450px] md:h-[600px]">

              <Image
                src="/images/about.jpg"
                alt="Modern interior designed by VIVIFY"
                fill
                className="object-cover"
              />

            </div>

            {/* Content */}
            <div>

              <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
                Our Story
              </p>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-7">
                More than interiors.
                <br />
                <span className="text-[#B98222]">
                  We create experiences.
                </span>
              </h2>

              <p className="text-gray-600 leading-7 mb-6">
                At VIVIFY, we believe a great interior should do more
                than look beautiful. It should work naturally with the
                way you live.
              </p>

              <p className="text-gray-600 leading-7 mb-6">
                From the first conversation to the final installation,
                our team focuses on understanding your requirements
                and turning your ideas into carefully crafted spaces.
              </p>

              <p className="text-gray-600 leading-7">
                Our approach brings design, manufacturing, and
                installation together under one roof, giving you
                greater control over quality and execution.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Values */}
      <section className="bg-[#F7F5F0] py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">

            <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
              What We Believe
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Our values shape
              <br />
              <span className="text-[#B98222]">
                every space.
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Value 1 */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-[#B98222] text-sm">
                01
              </span>

              <h3 className="font-serif text-2xl mt-6 mb-4">
                Thoughtful Design
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Every design decision starts with understanding
                the people who will use the space.
              </p>

            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-[#B98222] text-sm">
                02
              </span>

              <h3 className="font-serif text-2xl mt-6 mb-4">
                Precision Craft
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Quality materials, modern manufacturing, and
                attention to detail come together in every project.
              </p>

            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-[#B98222] text-sm">
                03
              </span>

              <h3 className="font-serif text-2xl mt-6 mb-4">
                Customer First
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                We believe communication and transparency are
                essential throughout the entire process.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#B98222] text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="font-serif text-4xl md:text-5xl">
            Let's create your
            <br />
            perfect space.
          </h2>

          <p className="mt-6 text-white/80">
            Tell us what you're imagining and let's turn it into reality.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-[#071827] px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#071827] hover:text-white transition"
          >
            Start a Conversation
          </Link>

        </div>

      </section>

    </main>
  );
}