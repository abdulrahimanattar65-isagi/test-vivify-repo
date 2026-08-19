const stats = [
  {
    number: "10+",
    label: "Years of Experience",
  },
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "100%",
    label: "Quality Focus",
  },
  {
    number: "1",
    label: "Complete Interior Journey",
  },
];

export default function WhyVivify() {
  return (
    <section className="bg-[#071827] text-white py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-16">

          <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
            Why VIVIFY
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            One team.
            <br />
            <span className="text-[#B98222]">
              One seamless journey.
            </span>
          </h2>

          <p className="text-gray-400 mt-7 leading-7 max-w-2xl">
            From the first idea to the final installation, we bring
            design, manufacturing, and execution together to make
            your interior journey simpler.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-700">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-10 md:py-12 border-b lg:border-b-0 border-gray-700 lg:border-r last:border-r-0"
            >

              <div className="text-[#B98222] font-serif text-4xl md:text-5xl lg:text-6xl">
                {stat.number}
              </div>

              <p className="text-gray-400 text-sm mt-4 max-w-[150px] leading-6">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}