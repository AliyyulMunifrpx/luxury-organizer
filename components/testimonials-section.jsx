"use client";

import { motion } from "framer-motion";

// 1. Parent Variant: Mengatur trigger awal dan stagger delay antar elemen
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Tiap kartu muncul bergantian dengan jeda 0.15s
    },
  },
};

// 2. Child Variant: Animasi clipPath + y-axis reveal
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

export default function TestimonialSection() {
  const testimonials = [
    {
      couple: "Alexander & Sophia",
      venue: "Cliffside Sanctuary, Bali",
      quote:
        "They transformed our vision into an effortlessly elegant reality. Every single detail was orchestrated with pure perfection, allowing us to truly be present in our moment.",
    },
    {
      couple: "Raditya & Clarissa",
      venue: "The Glasshouse Grand Ballroom",
      quote:
        "Having their team by our side was the best decision we made. Their composure, precision, and refined taste gave us absolute peace of mind throughout the entire journey.",
    },
    {
      couple: "William & Natasha",
      venue: "Heritage Estate Grounds",
      quote:
        "Unmatched attention to detail and impeccable execution. Months later, our guests are still raving about how seamless and breathtaking the entire celebration was.",
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
      {/* HEADER SECTION */}
      <motion.h2
        variants={itemVariants}
        className="text-center text-3xl md:text-5xl font-normal text-second"
      >
        Kind Words
      </motion.h2>

      {/* TESTIMONIALS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group bg-white/5 border border-white/10 p-4 md:p-8 lg:p-12 flex flex-col justify-between gap-8 transition-colors duration-500 hover:border-second/50 overflow-hidden"
          >
            {/* KUTIPAN & TEKS UTAMA */}
            <div className="flex flex-col gap-6">
              <span className="font-serif text-6xl text-second font-normal leading-none">
                “
              </span>
              <p className="font-sans text-base text-white/80 leading-relaxed">
                {item.quote}
              </p>
            </div>

            {/* DETAIL PASANGAN & VENUE */}
            <div className="flex flex-col gap-2 pt-6 border-t border-white/10">
              <h3 className="font-serif text-xl text-white font-normal tracking-wide">
                {item.couple}
              </h3>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-second">
                {item.venue}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
