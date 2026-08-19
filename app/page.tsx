import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import SpacesPreview from "@/components/SpacesPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyVivify from "@/components/WhyVivify";
import Testimonial from "@/components/Testimonial";
import ManufacturingPreview from "@/components/ManufacturingPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
 return (
  <main>
    <Navbar />

    <Hero />

    <Introduction />

    <Services />

    <SpacesPreview />

    <FeaturedProjects />

    <WhyVivify />

    <ManufacturingPreview />

    <Testimonial />

    <CTA />

    <Footer />
  </main>
);
}