"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const PHONE_NUMBER = "6281234567890";

  const [formData, setFormData] = useState({
    name: "",
    needs: "",
    date: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    const message =
      `Halo, saya tertarik dan ingin konsultasi:\n\n` +
      `*Nama:* ${formData.name || "-"}\n` +
      `*Kebutuhan:* ${formData.needs || "-"}\n` +
      `*Tanggal:* ${formData.date || "-"}\n` +
      `*Lokasi:* ${formData.location || "-"}\n` +
      `*Catatan:* ${formData.notes || "-"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const editorialReveal = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: (delay = 0) => ({
      clipPath: "inset(0% 0 0 0)",
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  return (
    <div className="w-full min-h-[100dvh] bg-white py-6 px-4 md:px-6 text-black flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl space-y-6">
        {/* HEADER SECTION */}
        <motion.div
          className="text-center space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={editorialReveal}
          custom={0}
        >
          <h2 className="font-bold text-black text-2xl lg:text-3xl">
            Looking for something else?
          </h2>
          <p className="text-black text-md lg:text-lg">
            Let us know. We’d be delighted to assist.
          </p>
        </motion.div>

        {/* FORM CONTACT */}
        <motion.form
          onSubmit={handleSendWhatsApp}
          className="space-y-6 bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={editorialReveal}
          custom={0.2}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* NAME */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-black transition text-black placeholder-neutral-400"
              />
            </div>

            {/* NEEDS */}
            <div className="space-y-2">
              <label htmlFor="needs" className="text-sm font-medium text-black">
                Needs
              </label>
              <input
                type="text"
                id="needs"
                name="needs"
                required
                value={formData.needs}
                onChange={handleChange}
                placeholder="Graduation / Event / Personal Photo"
                className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-black transition text-black placeholder-neutral-400"
              />
            </div>

            {/* DATE */}
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium text-black">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-black transition text-black placeholder-neutral-400 [color-scheme:light]"
              />
            </div>

            {/* LOCATION */}
            <div className="space-y-2">
              <label
                htmlFor="location"
                className="text-sm font-medium text-black"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="Jakarta / Studio / On-location"
                className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-black transition text-black placeholder-neutral-400"
              />
            </div>
          </div>

          {/* NOTES */}
          <div className="space-y-2">
            <label htmlFor="notes" className="text-sm font-medium text-black">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us more about your ideas or requests..."
              className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-black transition text-black placeholder-neutral-400 resize-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/80 active:scale-[0.99] transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            Send via WhatsApp
          </button>
        </motion.form>
      </div>
    </div>
  );
}
