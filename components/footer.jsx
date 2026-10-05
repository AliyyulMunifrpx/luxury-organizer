import Link from "next/link.js";
import { information } from "../data/information.js";

export default function Footer() {
  // 1. SEMUA DATA FOOTER TERPUSAT DALAM 1 OBJEK
  const footerData = {
    navLinks: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Packages", href: "#packages" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="w-full min-h-[70dvh] bg-black text-white px-4 md:px-8 lg:px-24 py-16 flex flex-col justify-between border-t border-white/10 relative overflow-hidden">
      {/* ATAS: BRAND STATEMENT & BACK TO TOP */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-16 border-b border-white/10">
        <div className="flex flex-col gap-4 w-full lg:w-xl">
          <h2 className="font-serif text-3xl md:text-8xl font-normal text-second md:text-center lg:text-start leading-tight">
            {information.name}
          </h2>
        </div>

        {/* TOMBOL BACK TO TOP */}
        <Link
          href="#top"
          className="group flex items-center gap-4 text-xs font-sans uppercase tracking-[0.2em] text-white/70 hover:text-second transition-colors duration-300"
        >
          <span>back to top</span>
          <span className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-second group-hover:-translate-y-1 transition-all duration-300">
            ↑
          </span>
        </Link>
      </div>

      {/* TENGAH: MENU NAVIGASI (SPREAD SEYA) */}
      <div className="py-8">
        <nav className="flex flex-wrap items-center gap-8 lg:gap-16">
          {footerData.navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative font-sans text-xs lg:text-sm uppercase tracking-[0.2em] text-white/80 hover:text-second transition-colors duration-300 group py-2"
            >
              {item.name}
              {/* Garis Aksen Emas Animasi Saat Hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-second transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>

      {/* BAWAH: COPYRIGHT & SUBTLE CREDITS */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 font-sans text-xs text-white/50">
        <p>© 2026 {information.name}. All Rights Reserved.</p>
        <p className="tracking-widest uppercase">
          Designed for Luxury Celebrations
        </p>
      </div>
    </footer>
  );
}
