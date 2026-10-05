"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { information } from "../data/information.js";

// 1. Parent Variant: Mengatur trigger viewport & stagger delay
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Judul, kolom info, dan form muncul berurutan
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

export default function ContactSection() {
  // STATE FORM TERPUSAT DALAM 1 OBJEK
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    weddingDate: "",
    guestCount: "",
    service: "Full Wedding Planning",
    message: "",
  });

  // Handler Perubahan Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler Submit & Redirect WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const waText =
      `Halo ${information.instagram},\n\n` +
      `Saya ingin berkonsultasi mengenai layanan Wedding Organizer:\n\n` +
      `• *Nama:* ${formData.name}\n` +
      `• *No. WhatsApp:* ${formData.phone}\n` +
      `• *Rencana Tanggal:* ${formData.weddingDate || "-"}\n` +
      `• *Estimasi Tamu:* ${formData.guestCount || "-"}\n` +
      `• *Layanan:* ${formData.service}\n` +
      `• *Catatan / Pesan:* ${formData.message || "-"}\n\n` +
      `Terima kasih!`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${information.phone}?text=${encodedText}`;

    window.open(waUrl, "_blank");
  };

  return (
    <motion.section
      className="w-full bg-primary text-white px-4 md:px-8 lg:px-24 py-28 flex flex-col items-center gap-8"
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
        Begin Your Journey
      </motion.h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* === SISI KIRI: INFORMASI KONTAK & EDITORIAL === */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col gap-12 overflow-hidden"
        >
          <p className="font-sans text-sm lg:text-base text-white/70 leading-relaxed">
            We invite you to share your vision with us. Fill out the form or
            reach out directly to schedule a private consultation with our lead
            event directors.
          </p>

          {/* DETAIL KONTAK */}
          <div className="flex flex-col gap-8 font-sans text-sm text-white/80">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-second">
                Direct Concierge
              </span>
              <p className="font-serif text-lg text-white">
                {information.phoneDisplay}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-second">
                Email Inquiry
              </span>
              <p className="font-serif text-lg text-white">
                {information.email}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-second">
                Atelier Studio
              </span>
              <p className="text-white/80 leading-relaxed">
                {information.address}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-second">
                Instagram
              </span>
              <p className="text-white/80">{information.instagram}</p>
            </div>
          </div>
        </motion.div>

        {/* === SISI KANAN: FORM KONSULTASI (WHATSAPP REDIRECT) === */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 bg-white/5 border border-white/10 p-4 md:p-8 lg:p-12 relative overflow-hidden"
        >
          {/* ACCENT LINE EMAS */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-second" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl text-white font-normal">
                Private Consultation Form
              </h3>
              <p className="font-sans text-xs text-white/60">
                Your details will be forwarded directly to our WhatsApp
                concierge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* NAMA LENGKAP */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-second">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Clarissa & Raditya"
                  className="w-full bg-primary/50 border border-white/10 px-4 py-4 text-sm text-white focus:outline-none focus:border-second transition-colors"
                />
              </div>

              {/* NO. WHATSAPP */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-second">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 08123456789"
                  className="w-full bg-primary/50 border border-white/10 px-4 py-4 text-sm text-white focus:outline-none focus:border-second transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ESTIMASI TANGGAL */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-second">
                  Estimated Wedding Date
                </label>
                <input
                  type="text"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  placeholder="e.g. Q4 2026 / Oct 2026"
                  className="w-full bg-primary/50 border border-white/10 px-4 py-4 text-sm text-white focus:outline-none focus:border-second transition-colors"
                />
              </div>

              {/* ESTIMASI TAMU */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs uppercase tracking-widest text-second">
                  Estimated Guests
                </label>
                <input
                  type="text"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="e.g. 300 - 500 guests"
                  className="w-full bg-primary/50 border border-white/10 px-4 py-4 text-sm text-white focus:outline-none focus:border-second transition-colors"
                />
              </div>
            </div>

            {/* PILIH SERVICE */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs uppercase tracking-widest text-second">
                Interested Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-primary border border-white/10 px-4 py-4 text-sm text-white focus:outline-none focus:border-second transition-colors cursor-pointer"
              >
                <option value="Full Wedding Planning">
                  Full Wedding Planning
                </option>
                <option value="Wedding Day Management">
                  Wedding Day Management
                </option>
                <option value="Intimate Wedding">Intimate Wedding</option>
                <option value="Custom Wedding">Custom Wedding</option>
              </select>
            </div>

            {/* CATATAN / PESAN */}
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs uppercase tracking-widest text-second">
                Vision & Notes
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your wedding concept, location, or any specific requests..."
                className="w-full bg-primary/50 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-second transition-colors resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-4 bg-second text-primary font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 cursor-pointer"
            >
              Send Inquiry via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
