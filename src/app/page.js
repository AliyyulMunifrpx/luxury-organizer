import MainSection from "../../components/main-section.jsx";
import AboutUsSection from "../../components/about-us-section";
import ContactSection from "../../components/contact-section";
import FaqSection from "../../components/faq-section";
import PackagesSection from "../../components/packages-section";
import WeddingSection from "../../components/portfolio-section";
import ScrollSpy from "../../components/scrollspy";
import ServicesSection from "../../components/service-section";
import SocialProofSection from "../../components/social-proof-section";
import TestimonialSection from "../../components/testimonials-section";

export default function Home() {
  return (
    <>
      <ScrollSpy />

      <section id="home">
        <MainSection />
        <SocialProofSection />
      </section>

      <section id="about">
        <AboutUsSection />
      </section>

      <section id="weddings">
        <WeddingSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="packages">
        <PackagesSection />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="faq">
        <FaqSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
