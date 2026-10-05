"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 1. Parent Variant: Mengatur trigger viewport dan stagger delay
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Judul & tiap kartu muncul bergantian selisih 0.15s
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

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "FULL WEDDING PLANNING",
      image: "/assets/service/1.webp",
      description: "From concept to celebration, we handle every detail.",
      details: [
        "End-to-end event conceptualization & mood board design",
        "Vendor curation, negotiation, and contract management",
        "Comprehensive budget planning & timeline scheduling",
        "Full team on-site execution on your wedding day",
      ],
    },
    {
      number: "02",
      title: "WEDDING DAY MANAGEMENT",
      image: "/assets/service/2.webp",
      description: "You enjoy the day. We manage everything behind it.",
      details: [
        "Vendor alignment & final technical briefing (1 month prior)",
        "Detailed master rundown creation & timekeeping",
        "Dedicated bride, groom & family assistants on standby",
        "Complete guest flow & VIP hospitality management",
      ],
    },
    {
      number: "03",
      title: "INTIMATE WEDDING",
      image: "/assets/service/3.webp",
      description:
        "Thoughtful planning for celebrations with your closest people.",
      details: [
        "Tailored coordination for curated guest lists (up to 100 guests)",
        "Micro-wedding venue sourcing & spatial layout design",
        "Personalized ceremony details & curated dining experience",
        "Streamlined vendor management suited for intimate setups",
      ],
    },
    {
      number: "04",
      title: "CUSTOM WEDDING",
      image: "/assets/service/4.webp",
      description: "A celebration built entirely around your story.",
      details: [
        "Unrestricted bespoke planning tailored to your exact vision",
        "Destination wedding logistics & guest accommodations",
        "Multi-day celebration planning (Sangeet, Tea Ceremony, After-party)",
        "Exclusive access to high-profile luxury vendors & artisans",
      ],
    },
  ];

  return (
    <motion.section
      className="w-full bg-primary text-white px-4 md:px-8 pt-28 flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* JUDUL SECTION */}
      <motion.h2
        variants={itemVariants}
        className="text-center text-3xl md:text-5xl font-normal text-second"
      >
        Our Services
      </motion.h2>

      {/* GRID SERVICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {services.map((item) => (
          <motion.div
            key={item.number}
            variants={itemVariants}
            className="relative group bg-white/5 border border-white/10 p-4 md:p-8 flex flex-col gap-8 transition-colors duration-500 hover:border-second/50 overflow-hidden"
          >
            {/* BINGKAI FOTO EDITORIAL */}
            <div className="relative w-full aspect-[16/9] bg-white/5 border border-white/10 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={1050}
                height={750}
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="flex flex-col gap-4">
              {/* NOMOR URUT SERIF */}
              <span className="font-serif text-xl lg:text-2xl text-second">
                {item.number}
              </span>

              {/* JUDUL LAYANAN */}
              <h3 className="font-serif text-xl lg:text-2xl text-white font-normal tracking-wide">
                {item.title}
              </h3>

              {/* DESKRIPSI UTAMA */}
              <p className="font-sans text-sm lg:text-base text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* GARIS PEMBATAS TIPIS */}
            <div className="w-full h-[1px] bg-white/10" />

            {/* DAFTAR DETAIL LAYANAN */}
            <ul className="flex flex-col gap-4 font-sans text-xs lg:text-sm text-white/80">
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-second mt-1 text-xs">✦</span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
