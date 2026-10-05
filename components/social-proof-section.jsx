"use client";

import { motion } from "framer-motion";

// 1. Parent Variant: Mengontrol pemicu animasi dan jeda waktu antar anak (stagger)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // Tiap kartu muncul berurutan beda 0.12 detik
    },
  },
};

// 2. Child Variant: Format clipPath WAJIB seragam menggunakan unit % di semua nilai
const cardVariants = {
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

function Card({ name, value }) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative group w-full bg-white/5 border border-white/10 p-8 lg:p-16 flex flex-col justify-center items-center gap-2 transition-colors duration-500 hover:border-second/50 overflow-hidden"
    >
      {/* Accent Line Emas yang Memanjang saat Di-hover */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-second transition-all duration-500 group-hover:w-full" />

      {/* Angka dengan Serif Font Elegan */}
      <p className="font-serif text-4xl lg:text-5xl font-normal text-second text-center leading-none">
        {value}
      </p>

      {/* Label dengan Letter Spacing Wide */}
      <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/70 text-center">
        {name}
      </p>
    </motion.div>
  );
}

export default function SocialProofSection() {
  const stats = [
    { value: "120+", name: "Weddings" },
    { value: "8+", name: "Years Experience" },
    { value: "35+", name: "Vendor Partners" },
    { value: "500+", name: "Happy Clients" },
  ];

  return (
    <section className="w-full bg-primary text-white p-4">
      {/* whileInView dipasang di container utama agar 100% stabil */}
      <motion.div
        className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {stats.map((item, index) => (
          <Card key={index} name={item.name} value={item.value} />
        ))}
      </motion.div>
    </section>
  );
}
