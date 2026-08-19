import {
  PencilRuler,
  Settings,
  Wrench,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: PencilRuler,
    title: "Design",
    text: "Thoughtful designs shaped around your lifestyle, preferences, and requirements.",
  },
  {
    icon: Settings,
    title: "Manufacture",
    text: "Precision manufacturing using advanced machinery and quality materials.",
  },
  {
    icon: Wrench,
    title: "Install",
    text: "Professional installation with attention to detail from start to finish.",
  },
  {
    icon: Headphones,
    title: "Support",
    text: "Reliable support and service even after your space is complete.",
  },
];

export default function Services() {
  return (
    <section className="bg-white border-b border-gray-200">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="p-8 lg:p-10 border-b md:border-r lg:border-b-0 last:border-r-0"
            >

              <Icon
                size={38}
                strokeWidth={1.3}
                className="text-[#B98222] mb-6"
              />

              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#071827] mb-4">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                {service.text}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}