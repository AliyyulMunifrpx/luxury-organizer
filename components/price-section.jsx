"use client";

import Image from "next/image.js";
import { motion } from "framer-motion";

export default function PriceSection() {
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
    <div className="min-h-[100dvh] bg-primary w-full px-4 lg:px-40 flex flex-col py-8 lg:py-0 gap-16 lg:gap-0">
      {/* Block 1: Potoluxe */}
      <div className="w-full min-h-[80dvh] lg:h-[80dvh] flex flex-col lg:flex-row gap-8 lg:gap-24">
        <motion.div
          className="w-full h-full flex flex-col py-8 lg:py-32 lg:pl-32 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={editorialReveal}
          custom={0}
        >
          {" "}
          <div className="w-full h-12 flex gap-8 items-center">
            <h3 className="text-2xl lg:text-3xl text-white">
              poto<span className="font-bold">luxe</span>
            </h3>
            <div className="h-full w-[3px] bg-white"></div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">450k</h3>
          </div>
          <div className="flex flex-col items-start gap-4">
            {" "}
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">90 Minutes</span> photo session
            </p>
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">25 Photos</span> edited
            </p>
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">Unlimited RAW</span> photos
            </p>
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">30-day</span> photo storage
            </p>
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">High resolution</span>
              delivery photos
            </p>
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">Proper-set</span> Kamera & lightings
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-auto h-auto lg:h-full aspect-[3/4] bg-black shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={editorialReveal}
          custom={0.2}
        >
          <Image
            className="w-full h-full object-cover"
            height={1200}
            width={900}
            alt=""
            src="/assets/price/1.webp"
          ></Image>
        </motion.div>
      </div>

      {/* Block 2: Potoessential */}
      <div className="w-full min-h-[80dvh] lg:h-[80dvh] flex flex-col lg:flex-row gap-8 lg:gap-24">
        <motion.div
          className="w-full lg:w-auto h-auto lg:h-full aspect-[3/4] bg-black shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={editorialReveal}
          custom={0}
        >
          <Image
            className="w-full h-full object-cover"
            height={1200}
            width={900}
            alt=""
            src="/assets/price/2.webp"
          ></Image>
        </motion.div>

        <motion.div
          className="w-full lg:pr-32 h-full flex flex-col py-8 lg:py-32 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={editorialReveal}
          custom={0.2}
        >
          {" "}
          <div className="w-full h-12 flex gap-8 items-center">
            <h3 className="text-2xl lg:text-3xl text-white">
              poto<span className="font-bold">essential</span>
            </h3>
            <div className="h-full w-[3px] bg-white"></div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">350k</h3>
          </div>
          <div className="flex flex-col items-start gap-4">
            {" "}
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">60 Minutes</span> photo session
            </p>
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">15 Photos</span> edited
            </p>
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">Unlimited RAW</span> photos
            </p>
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">14-day</span> photo storage
            </p>
            <p className="text-md lg:text-2xl text-white">
              <span className="font-bold">High resolution</span>
              delivery photos
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
