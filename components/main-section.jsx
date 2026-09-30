"use client";

import { motion } from "framer-motion";

export default function MainSection() {
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
    <div className="bg-white h-[100dvh] w-full flex flex-col px-4 py-32 lg:px-72 lg:py-32 items-center">
      <motion.div
        className="h-[50dvh] flex flex-col"
        initial="hidden"
        animate="visible"
        variants={editorialReveal}
        custom={0}
      >
        <div className="h-20 w-30 bg-primary"></div>
        <h1 className="text-black text-6xl font-semibold">potohaze</h1>
      </motion.div>

      <motion.div
        className="text-black text-md lg:text-2xl flex flex-col gap-6"
        initial="hidden"
        animate="visible"
        variants={editorialReveal}
        custom={0.25}
      >
        <p>
          Based on <span className="font-bold">Yogyakarta.</span>
        </p>

        <p>
          We capture the little moments, the quiet expressions, and the way you
          naturally become yourself in front of the camera.
        </p>

        <p className="font-bold italic">
          Photography for portraits, graduation, couples, and moments worth
          keeping.
        </p>
      </motion.div>
    </div>
  );
}
