"use client";

import { useTransform, motion } from "framer-motion";
import Image from "next/image.js";

export function ParallaxPhotoCard({
  photoSrc,
  index,
  meta,
  frameHeight = 450,
  photoExtraWidth = 250, // Ditingkatkan agar efek parallax lebih tajam/kentara
}) {
  const { x, step, itemWidth, containerWidth } = meta;

  // Menggunakan itemWidth dinamis dari carousel (bukan hardcode 320px)
  const currentWidth = itemWidth || 320;

  const scale = (currentWidth + photoExtraWidth) / currentWidth;
  const scaledWidth = currentWidth * scale;
  const scaledHeight = frameHeight * scale;
  const verticalOffset = (frameHeight - scaledHeight) / 2;

  const photoX = useTransform(x, (latestX) => {
    if (!containerWidth || !step) return 0;

    // Posisi X kartu relatif terhadap viewport/layar
    const cardLeft = index * step + latestX;
    const cardCenter = cardLeft + currentWidth / 2;

    // Nilai progress 0 (kartu di ujung kiri layar) hingga 1 (ujung kanan layar)
    const progress = Math.min(Math.max(cardCenter / containerWidth, 0), 1);

    // Menggeser gambar dari arah berlawanan untuk menciptakan efek kedalaman (Parallax)
    return (0.5 - progress) * photoExtraWidth;
  });

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{ width: "100%", height: frameHeight }}
    >
      {/* FOTO */}
      <motion.div
        className="absolute top-0 pointer-events-none"
        style={{
          width: scaledWidth,
          height: scaledHeight,
          top: verticalOffset,
          left: (currentWidth - scaledWidth) / 2, // Centering horizontal awal
          x: photoX,
        }}
      >
        <Image
          src={photoSrc}
          alt=""
          fill
          draggable={false}
          className="object-cover"
        />
      </motion.div>

      {/* OVERLAY / SHADOW */}
      <div className="absolute inset-0 pointer-events-none shadow-lg rounded-xl" />
    </div>
  );
}
