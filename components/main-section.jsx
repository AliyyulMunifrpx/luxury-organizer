"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { information } from "../data/information.js";

export default function MainSection() {
  // Variant reveal berbasis clipPath & translateY (tanpa opacity/scale)
  const editorialReveal = {
    hidden: {
      clipPath: "inset(100% 0 0 0)",
      y: 24,
    },
    visible: (delay = 0) => ({
      clipPath: "inset(0% 0 0 0)",
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier untuk gerakan halus
      },
    }),
  };

  return (
    <div className="bg-primary h-[100dvh] w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-3 overflow-hidden">
      {/* 1. BACKGROUND IMAGE REVEAL (Delay 0s) */}
      <motion.div
        className="relative row-start-1 row-end-2 mt-16 md:mt-0 col-start-1 bg-white lg:col-span-full lg:row-span-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={editorialReveal}
        custom={0}
      >
        <Image
          alt="Background Image"
          src="/assets/main/background.webp"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* 2. HEADLINE & SUBTITLE REVEAL (Delay 0.2s) */}
      <motion.div
        className="col-start-1 lg:col-end-4 my-auto row-start-2 px-4"
        initial="hidden"
        animate="visible"
        variants={editorialReveal}
        custom={0.2}
      >
        <h2 className="text-3xl lg:text-7xl text-center text-second lg:text-white leading-tight">
          We Create Moments <br />
          <span className="italic">Worth Remembering.</span>
        </h2>
        <h1 className="font-sans text-center text-md mt-8 lg:mt-4 lg:text-2xl font-extralight tracking-[0.3rem]">
          Event & Wedding Planner {information.city}
        </h1>
      </motion.div>

      {/* 3. CTA BUTTON REVEAL (Delay 0.4s) */}
      <motion.div
        className="lg:col-start-2 lg:col-end-3 mx-auto my-auto lg:my-0 row-start-3 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={editorialReveal}
        custom={0.4}
      >
        <Link
          className="text-md font-sans border border-white px-6 py-2.5 rounded-full text-white text-center hover:bg-white hover:text-primary transition-colors duration-300"
          href="#weddings"
        >
          PLAN YOUR WEDDING
        </Link>
      </motion.div>
    </div>
  );
}
