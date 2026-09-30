import Image from "next/image";
import MainSection from "../../components/main-section.jsx";
import PortfolioSection from "../../components/portfolio-section.jsx";
import PriceSection from "../../components/price-section.jsx";
import ContactSection from "../../components/contact-section.jsx";
import ScrollSpy from "../../components/scrollspy.jsx";

export default function Home() {
  return (
    <div>
      <ScrollSpy></ScrollSpy>
      <section id="home">
        <MainSection />
      </section>
      <section id="gallery">
        <PortfolioSection />
      </section>
      <section id="price">
        <PriceSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
