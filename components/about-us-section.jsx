"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// 1. Parent Variant: Mengontrol trigger viewport & jeda antar elemen (stagger)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Elemen muncul berurutan beda 0.15 detik
    },
  },
};

// 2. Child Variant: Format clipPath konsisten menggunakan unit % di semua nilai
const itemVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    y: 24,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function AboutUsSection() {
  return (
    <motion.section
      className="w-full min-h-[80dvh] bg-primary flex flex-col gap-8 text-white px-4 md:px-8 pt-28 items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 1. Header Section */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-normal text-second text-center"
      >
        About US
      </motion.h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* === SISI KIRI: BINGKAI FOTO EDITORIAL === */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Container Foto Utama */}
          <div className="relative w-full aspect-[4/5] bg-white/5 border border-second/30 z-10 overflow-hidden">
            <Image
              src="/assets/gallery/1.webp"
              alt="Wedding Organizer Concept"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Accent Gold Frame (Siku Emas di Belakang Foto) */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b-2 border-r-2 border-second z-0 hidden md:block" />
        </motion.div>

        {/* === SISI KANAN: KONTEN NARASI === */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Judul & Headline */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-normal leading-tight">
              Crafting Bespoke Celebrations with Seamless Precision
            </h2>
          </div>

          {/* Paragraf Utama (Wedding Organizer Copy) */}
          <div className="flex flex-col gap-8 font-sans text-lg text-white/80 leading-relaxed">
            <p>
              We believe a wedding is more than just an event—it is the art of
              orchestrating genuine emotions, subtle details, and unscripted
              elegance into a seamless, unforgettable celebration.
            </p>
            <p>
              With years of dedication and an unyielding commitment to
              excellence, our passion lies in bringing your unique vision to
              life, managing every intricate detail so you can fully cherish
              every moment.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
