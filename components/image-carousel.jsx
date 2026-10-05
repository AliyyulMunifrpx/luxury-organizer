"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function CircularCarousel({
  items = [],
  visibleCount = 4,
  gap = 16,
  renderItem,
  className = "",
  autoPlay = true,
  autoPlayInterval = 3000,
  pauseOnHover = true,
}) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const [containerWidth, setContainerWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const offsetRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const dragging = useRef(false);
  const hasDragged = useRef(false);

  const safeVisibleCount = Math.max(
    1,
    Math.min(visibleCount, items.length || 1),
  );

  const itemWidth =
    containerWidth > 0
      ? (containerWidth - gap * (safeVisibleCount - 1)) / safeVisibleCount
      : 0;

  // OFFEST UNTUK MEMBUAT KARTU AKTIF BERADA DI TENGAH (SISA INTIPAN TERBAGI SEIMBANG KIRI & KANAN)
  const centerOffset =
    containerWidth > 0 && itemWidth > 0 ? (containerWidth - itemWidth) / 2 : 0;

  const step = itemWidth + gap;
  const totalLoopWidth = items.length * step;

  const renderedItems = useMemo(() => {
    if (!items.length) return [];
    return [...items, ...items, ...items, ...items, ...items];
  }, [items]);

  const baseOffset = useMemo(() => {
    return items.length * 2 * step;
  }, [items.length, step]);

  const wrapOffset = (offset) => {
    if (!totalLoopWidth) return offset;
    let wrapped = offset;
    while (wrapped >= baseOffset + totalLoopWidth) {
      wrapped -= totalLoopWidth;
    }
    while (wrapped < baseOffset) {
      wrapped += totalLoopWidth;
    }
    return wrapped;
  };

  useEffect(() => {
    if (!containerWidth || !items.length || !step) return;

    offsetRef.current = baseOffset;
    x.set(-baseOffset + centerOffset);
  }, [containerWidth, step, baseOffset, items.length, x, centerOffset]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const moveToOffset = (targetOffset) => {
    if (!step) return;

    isAnimatingRef.current = true;
    offsetRef.current = targetOffset;

    animate(x, -targetOffset + centerOffset, {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
      onComplete: () => {
        const normalized = wrapOffset(offsetRef.current);
        offsetRef.current = normalized;
        x.set(-normalized + centerOffset);
        isAnimatingRef.current = false;
      },
    });
  };

  const next = () => {
    if (!items.length || !step || isAnimatingRef.current) return;
    const currentPos = Math.round((offsetRef.current - baseOffset) / step);
    const nextOffset = baseOffset + (currentPos + 1) * step;
    moveToOffset(nextOffset);
  };

  const previous = () => {
    if (!items.length || !step || isAnimatingRef.current) return;
    const currentPos = Math.round((offsetRef.current - baseOffset) / step);
    const prevOffset = baseOffset + (currentPos - 1) * step;
    moveToOffset(prevOffset);
  };

  const nextRef = useRef(next);
  useEffect(() => {
    nextRef.current = next;
  });

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      if (
        !dragging.current &&
        !isAnimatingRef.current &&
        (!pauseOnHover || !isHovered)
      ) {
        nextRef.current();
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, pauseOnHover, isHovered]);

  const handlePointerDown = (event) => {
    if (!items.length || !step) return;

    dragging.current = true;
    hasDragged.current = false;

    dragStartX.current = event.clientX;
    dragStartOffset.current = offsetRef.current;

    x.stop();
    isAnimatingRef.current = false;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragging.current || !step || !items.length) return;

    const delta = event.clientX - dragStartX.current;

    if (Math.abs(delta) > 8) {
      hasDragged.current = true;
    }

    let currentOffset = dragStartOffset.current - delta;

    while (currentOffset >= baseOffset + totalLoopWidth) {
      currentOffset -= totalLoopWidth;
      dragStartOffset.current -= totalLoopWidth;
    }
    while (currentOffset < baseOffset) {
      currentOffset += totalLoopWidth;
      dragStartOffset.current += totalLoopWidth;
    }

    offsetRef.current = currentOffset;
    x.set(-currentOffset + centerOffset);
  };

  const handlePointerUp = (event) => {
    if (!dragging.current) return;
    dragging.current = false;

    // BILA HANYA DI-TAP / DI-KLIK
    if (!hasDragged.current) {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const halfWidth = rect.width / 2;

        if (clickX < halfWidth) {
          previous();
        } else {
          next();
        }
      }
      return;
    }

    // BILA USER MEMANG SWIPE / NGE-DRAG
    if (!step) return;

    const velocity = x.getVelocity();
    isAnimatingRef.current = true;

    animate(x, x.get(), {
      type: "inertia",
      velocity,
      power: 0.6,
      timeConstant: 260,
      restDelta: 0.5,
      modifyTarget: (target) => {
        const targetOffset = -(target - centerOffset);
        const snappedStepIndex = Math.round(targetOffset / step);
        let snappedOffset = snappedStepIndex * step;

        return -(wrapOffset(snappedOffset) - centerOffset);
      },
      onComplete: () => {
        const rawOffset = -(x.get() - centerOffset);
        const finalOffset = wrapOffset(rawOffset);
        offsetRef.current = finalOffset;
        x.set(-finalOffset + centerOffset);
        isAnimatingRef.current = false;
      },
    });
  };

  if (!items.length) return null;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex cursor-grab select-none touch-pan-y active:cursor-grabbing"
        style={{ x, gap }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {renderedItems.map((item, index) => (
          <div
            key={`${item.id ?? item.src ?? index}-${index}`}
            className="relative shrink-0"
            style={{ width: itemWidth }}
          >
            {renderItem(item, index, { x, step, itemWidth, containerWidth })}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
