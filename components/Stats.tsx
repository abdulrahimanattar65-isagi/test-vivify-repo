const stats = [
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "25+",
    label: "Advanced Machines",
  },
  {
    number: "40+",
    label: "Skilled Professionals",
  },
  {
    number: "7+",
    label: "Years of Experience",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                text-center px-6 py-8
                ${index < 3 ? "lg:border-r border-gray-200" : ""}
                ${index < 2 ? "border-b lg:border-b-0 border-gray-200" : ""}
              `}
            >

              <div className="text-[#B98222] font-serif text-5xl md:text-6xl">
                {stat.number}
              </div>

              <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.15em] text-gray-600">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}