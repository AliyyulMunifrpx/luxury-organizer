"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Gallery", href: "#gallery" },
    { name: "Price", href: "#price" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-primary backdrop-blur-md border-b border-neutral-200 py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* BRAND LOGO */}
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          POTOHAZE
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:opacity-60 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-white focus:outline-none cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 pt-4 pb-2 border-t border-neutral-100 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-white hover:opacity-60 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
