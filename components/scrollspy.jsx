"use client";

import { useEffect } from "react";

export default function ScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    let activeHash = window.location.hash;

    const observer = new IntersectionObserver(
      (entries) => {
        // Cari entry yang sedang masuk area pandang (intersecting)
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          const id = visibleSection.target.getAttribute("id");
          const newHash = `#${id}`;

          // Hanya update URL jika hash benar-benar berubah
          if (activeHash !== newHash) {
            activeHash = newHash;
            window.history.replaceState(null, "", newHash);
          }
        }
      },
      {
        // Garis batas deteksi (20% dari atas, 40% dari bawah)
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
