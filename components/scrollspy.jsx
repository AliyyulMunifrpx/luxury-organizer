"use client";

import { useEffect } from "react";

export default function ScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            // Update hash di URL tanpa trigger page refresh/scroll jump
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        // Adjust posisi deteksi: section dianggap aktif jika sudah masuk 40% area tengah layar
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}