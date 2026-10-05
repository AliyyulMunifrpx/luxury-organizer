"use client";

import { useState } from "react";
import Link from "next/link";
import { information } from "../data/information.js";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menu1 = { name: "About Us", href: "#about" };
  const menu2 = { name: "Weddings", href: "#weddings" };
  const menu3 = { name: "Packages", href: "#packages" };
  const menu4 = {
    name: "Others",
    items: [
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-primary font-sans font-extralight text-white px-4 lg:px-16 xl:gap-32 py-4">
      {" "}
      <div className="w-full flex items-center justify-between">
        {/* === TAMPILAN DESKTOP (TIDAK DIUBAH) === */}
        <nav className="hidden md:flex items-center justify-center w-full gap-16 xl:gap-32">
          {/* Sisi Kiri: Menu 1 & Menu 2 */}
          <div className="flex items-center gap-16 xl:gap-32">
            <Link
              href={menu1.href}
              className="hover:text-second transition-colors"
            >
              {menu1.name}
            </Link>
            <Link
              href={menu2.href}
              className="hover:text-second transition-colors"
            >
              {menu2.name}
            </Link>
          </div>

          {/* Tengah: Logo */}
          <div className="flex items-center justify-center font-bold text-xl">
            <Link href="/" className="flex items-center gap-4">
              <span className="text-2xl font-serif font-normal text-second tracking-wider">
                {information.name}
              </span>
            </Link>
          </div>

          {/* Sisi Kanan: Menu 3 & Menu 4 (Dropdown) */}
          <div className="flex items-center gap-16 xl:gap-32">
            <Link
              href={menu3.href}
              className="hover:text-second transition-colors"
            >
              {menu3.name}
            </Link>

            {/* Menu 4: Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-4 hover:text-second transition-colors focus:outline-none cursor-pointer"
              >
                <span>{menu4.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Isi Dropdown Desktop */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-4 bg-primary p-4 flex flex-col gap-4 min-w-[160px] z-50">
                  {menu4.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="hover:text-second transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* === BAR TAMPILAN MOBILE (HEADER KECIL) === */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link href="/"              className="text-2xl font-serif font-normal text-second tracking-wider">
            {information.name}{" "}
          </Link>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* === MENU MOBILE FULL SCREEN OVERLAY === */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-primary z-50 md:hidden flex flex-col p-4 justify-between overflow-y-auto">
          {/* Header Mobile Fullscreen (Logo & Tombol Close) */}
          <div className="flex items-center justify-between w-full">
            <Link
              href="/"
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-serif font-normal text-second tracking-wider"
            >
              {information.name}
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Daftar Navigasi Mobile (Semua Menu Langsung Dikeluarkan Tanpa Wrap 'Others') */}
          <nav className="flex flex-col gap-8 my-auto pt-8 pb-8">
            <Link
              href={menu1.href}
              onClick={() => setIsMobileOpen(false)}
              className="hover:text-second text-2xl transition-colors"
            >
              {menu1.name}
            </Link>
            <Link
              href={menu2.href}
              onClick={() => setIsMobileOpen(false)}
              className="hover:text-second text-2xl transition-colors"
            >
              {menu2.name}
            </Link>
            <Link
              href={menu3.href}
              onClick={() => setIsMobileOpen(false)}
              className="hover:text-second text-2xl transition-colors"
            >
              {menu3.name}
            </Link>

            {/* Isian 'Others' langsung di-render sejajar */}
            {menu4.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="hover:text-second text-2xl transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Spacer Bawah */}
          <div className="h-4"></div>
        </div>
      )}
    </header>
  );
}
