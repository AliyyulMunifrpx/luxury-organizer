"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// 1. Parent Variant: Mengontrol trigger viewport dan stagger delay
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Judul, foto, dan tiap baris FAQ muncul berurutan
    },
  },
};

// 2. Child Variant: Format clipPath % konsisten & y-axis reveal
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How far in advance should we book your services?",
      answer:
        "We recommend securing your date 8 to 12 months prior to your wedding day, especially for peak wedding seasons. However, we also accommodate short-timeline celebrations depending on availability.",
    },
    {
      question: "Can we bring our own vendors or do we have to use yours?",
      answer:
        "While we maintain an exclusive list of trusted high-caliber artisans, we completely welcome your preferred vendors. We will coordinate seamlessly with them to uphold your overall aesthetic and vision.",
    },
    {
      question: "Do you handle destination or international weddings?",
      answer:
        "Yes. Our Custom Wedding tier is tailored for destination celebrations. We oversee all travel logistics, local vendor communications, spatial layouts, and multi-day itinerary execution anywhere worldwide.",
    },
    {
      question: "What is the initial process to start working together?",
      answer:
        "It begins with a private consultation where we discuss your preferences, budget, and vision. Following this, we present a curated proposal. Upon agreement, we immediately commence event conceptualization.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="w-full min-h-[100dvh] bg-primary text-white px-4 md:px-8 flex flex-col items-center gap-8 pt-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* JUDUL SECTION */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-normal text-second text-center"
      >
        Questions and Answers
      </motion.h2>

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* === SISI KIRI: BINGKAI FOTO EDITORIAL === */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative flex h-full justify-center items-center lg:sticky lg:top-32 overflow-hidden w-full"
        >
          {/* Container Foto Utama */}
          <div className="relative h-full aspect-[4/5] w-full bg-white/5 border border-second/30 z-10 overflow-hidden">
            <Image
              src="/assets/gallery/2.webp"
              alt="Wedding Planning Consultation"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* === SISI KANAN: ACCORDION FAQ === */}
        <div className="lg:col-span-7 flex flex-col gap-8 w-full">
          {/* List Accordion */}
          <div className="flex flex-col gap-4 w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 border border-white/10 transition-colors duration-300 hover:border-second/40 overflow-hidden"
                >
                  {/* Pertanyaan / Button Toggle */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 md:p-8 flex justify-between items-center text-left gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif text-lg lg:text-xl text-white font-normal">
                      {faq.question}
                    </span>
                    <span className="font-serif text-2xl text-second transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Jawaban dengan Animasi Smooth Height */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:p-8 font-sans text-sm lg:text-base text-white/70 leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
