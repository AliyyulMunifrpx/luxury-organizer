"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// 1. Parent Variant: Mengontrol pemicu viewport dan stagger delay antar elemen
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Judul & tiap kartu paket muncul berurutan beda 0.15s
    },
  },
};

// 2. Child Variant: Format clipPath konsisten dengan unit % di semua nilai
const itemVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    y: 24,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function PackagesSection() {
  const packages = [
    {
      name: "THE INTIMATE AFFAIR",
      tier: "Essential Tier",
      subtitle:
        "Curated coordination for close-knit celebrations with up to 150 guests.",
      isPopular: false,
      features: [
        "10 Dedicated Wedding Coordinator Team",
        "Final technical briefing & vendor alignment (1 month prior)",
        "Master rundown creation & timekeeping control",
        "Personal assistant for Bride & Groom",
        "Guest flow management & reception desk coordination",
      ],
    },
    {
      name: "THE GRAND ELEGANCE",
      tier: "Signature Tier",
      subtitle:
        "Comprehensive full planning designed for grand weddings up to 500 guests.",
      isPopular: true,
      features: [
        "15 Dedicated Wedding Coordinator Team",
        "End-to-end event conceptualization & mood board creation",
        "Vendor curation, negotiation & budget allocation",
        "Unlimited planning consultations & site visits",
        "Holy Matrimony & Grand Reception execution",
        "Dedicated VIP & family hospitality manager",
      ],
    },
    {
      name: "THE ROYAL EXPERIENCE",
      tier: "Bespoke Tier",
      subtitle:
        "Uncompromising luxury for high-profile or multi-day celebrations.",
      isPopular: false,
      features: [
        "20+ Dedicated Team including Lead Event Director",
        "Multi-day coverage (Tea Ceremony, Rehearsal, After-party)",
        "Bespoke spatial design & architectural lighting planning",
        "VIP & international guest concierge services",
        "Exclusive access to premier luxury artisans",
        "Priority contingency & emergency logistics management",
      ],
    },
  ];

  return (
    <motion.section
      className="w-full bg-primary text-white px-4 md:px-8 pt-28 flex flex-col gap-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* HEADER SECTION */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-normal text-second text-center"
      >
        Curated Packages
      </motion.h2>

      {/* PACKAGES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative flex flex-col justify-between p-4 md:p-8 lg:p-12 bg-white/5 border transition-all duration-500 gap-8 overflow-hidden ${
              pkg.isPopular
                ? "border-second shadow-2xl lg:-translate-y-4"
                : "border-white/10 hover:border-second/50"
            }`}
          >
            {/* TAG HIGHLIGHT UNTUK PAKET FAVORIT */}
            {pkg.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-second text-primary font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 z-10">
                Most Preferred
              </div>
            )}

            {/* KONTEN ATAS */}
            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-2">
                <span className="font-serif text-xs text-second uppercase tracking-[0.2em]">
                  {pkg.tier}
                </span>
                <h3 className="font-serif text-2xl text-white font-normal tracking-wide">
                  {pkg.name}
                </h3>
              </div>

              <p className="font-sans text-sm text-white/70 leading-relaxed min-h-[48px]">
                {pkg.subtitle}
              </p>

              <div className="w-full h-[1px] bg-white/10" />

              {/* FITUR PAKET */}
              <ul className="flex flex-col gap-4 font-sans text-xs lg:text-sm text-white/80">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <span className="text-second mt-1 text-xs">✦</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TOMBOL INQUIRE / CTA */}
            <Link
              href="#contact"
              className={`w-full py-4 text-center font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 block ${
                pkg.isPopular
                  ? "bg-second text-primary font-semibold hover:bg-white"
                  : "border border-white/20 text-white hover:border-second hover:text-second"
              }`}
            >
              Inquire Package
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
