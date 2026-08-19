"use client";

import { FormEvent } from "react";

export default function ContactPage() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    project: formData.get("project"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Something went wrong");
    }

    alert("Thank you! Your enquiry has been received.");
    form.reset();

  } catch (error) {
    console.error(error);
    alert("Unable to send your enquiry. Please try again.");
  }
}

  return (
    <main className="bg-white text-[#071827]">

      {/* Hero */}
      <section className="bg-[#071827] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
            Contact Us
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
            Let's create
            <br />
            <span className="text-[#B98222]">
              your space.
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mt-8 leading-7">
            Tell us about your project and our team will get in touch
            to understand your requirements.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">

            {/* Contact Information */}
            <div>

              <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
                Get In Touch
              </p>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Start a conversation
                <br />
                with our team.
              </h2>

              <p className="text-gray-600 leading-7 max-w-lg mb-10">
                Whether you're planning a complete home interior,
                a modular kitchen, or a single room, we'd love to
                hear about your project.
              </p>

              {/* Details */}
              <div className="space-y-7">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B98222] mb-2">
                    Phone
                  </p>

                  <a
                    href="tel:+919999999999"
                    className="text-lg hover:text-[#B98222] transition"
                  >
                    +91 99999 99999
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B98222] mb-2">
                    Email
                  </p>

                  <a
                    href="mailto:hello@vivify.com"
                    className="text-lg hover:text-[#B98222] transition"
                  >
                    hello@vivify.com
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B98222] mb-2">
                    Location
                  </p>

                  <p className="text-lg">
                    Bangalore, Karnataka
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B98222] mb-2">
                    Working Hours
                  </p>

                  <p className="text-lg">
                    Monday – Saturday
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    10:00 AM – 7:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Form */}
            <div className="bg-[#F7F5F0] p-7 md:p-10">

              <h3 className="font-serif text-3xl mb-8">
                Tell us about your project
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-[#B98222]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm mb-2"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91"
                    className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-[#B98222]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-[#B98222]"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm mb-2"
                  >
                    Project Type
                  </label>

                  <select
                    id="project"
                    name="project"
                    required
                    defaultValue=""
                    className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-[#B98222]"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>

                    <option value="full-home">
                      Full Home Interior
                    </option>

                    <option value="kitchen">
                      Modular Kitchen
                    </option>

                    <option value="bedroom">
                      Bedroom
                    </option>

                    <option value="living">
                      Living Room
                    </option>

                    <option value="commercial">
                      Commercial Space
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2"
                  >
                    Tell us about your project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-[#B98222] resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#071827] text-white py-4 text-sm uppercase tracking-[0.15em] hover:bg-[#B98222] transition"
                >
                  Request a Consultation
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="bg-[#B98222] text-white py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="font-serif text-3xl md:text-4xl">
            Prefer to speak directly?
          </h2>

          <p className="mt-4 text-white/80">
            Call our team and let's discuss your project.
          </p>

          <a
            href="tel:+919999999999"
            className="inline-block mt-7 bg-white text-[#071827] px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#071827] hover:text-white transition"
          >
            Call Us
          </a>

        </div>

      </section>

    </main>
  );
}