"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CircularCarousel from "./image-carousel.jsx";
import { ParallaxPhotoCard } from "./parallax-photo-card.jsx";

const images = [
  {
    src: "/assets/gallery/1.webp",
    alt: "Graduation photography",
    man: "Dimas",
    woman: "Siti",
  },
  {
    src: "/assets/gallery/2.webp",
    alt: "Graduation photography",
    man: "Rian",
    woman: "Nadia",
  },
  {
    src: "/assets/gallery/3.webp",
    alt: "Graduation photography",
    man: "Kevin",
    woman: "Jessica",
  },
  {
    src: "/assets/gallery/4.webp",
    alt: "Graduation photography",
    man: "Fajar",
    woman: "Anisa",
  },
  {
    src: "/assets/gallery/5.webp",
    alt: "Graduation photography",
    man: "Alex",
    woman: "Sarah",
  },
  {
    src: "/assets/gallery/6.webp",
    alt: "Graduation photography",
    man: "William",
    woman: "Anya",
  },
];

export default function WeddingSection() {
  // State untuk mengontrol jumlah kartu & tinggi responsif
  const [visibleCount, setVisibleCount] = useState(4);
  const [frameHeight, setFrameHeight] = useState(450);
  const [photoExtraWidth, setPhotoExtraWidth] = useState(240);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Layar HP: Tampilkan 1.2 kartu agar ukurannya proporsional & gagah
        setVisibleCount(1.2);
        setFrameHeight(380);
        setPhotoExtraWidth(150);
      } else if (width < 1050) {
        // Layar Tablet: Tampilkan 3 kartu
        setVisibleCount(3);
        setFrameHeight(420);
        setPhotoExtraWidth(200);
      } else {
        // Layar Desktop
        setVisibleCount(3);
        setFrameHeight(600);
        setPhotoExtraWidth(240);
      }
    };

    handleResize(); // Jalankan sekali saat mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="flex min-h-[80dvh] w-full flex-col bg-primary gap-8 pt-28 overflow-hidden">
      <motion.div
        className="flex h-fit shrink-0 items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={editorialReveal}
        custom={0}
      >
        <h2 className=" text-3xl md:text-5xl font-normal text-second text-center">
          Weddings We&apos;ve Created{" "}
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-1 items-center  px-4 md:px-8 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={editorialReveal}
        custom={0.25}
      >
        <CircularCarousel
          items={images}
          visibleCount={visibleCount}
          gap={16}
          renderItem={(item, index, meta) => (
            <ParallaxPhotoCard
              photoSrc={item.src}
              index={index}
              man={item.man}
              woman={item.woman}
              meta={meta}
              photoExtraWidth={photoExtraWidth}
              frameHeight={frameHeight} // Passing tinggi dinamis
            />
          )}
        />
      </motion.div>
    </div>
  );
}
