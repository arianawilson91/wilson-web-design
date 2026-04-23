"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Index", number: "00" },
  { href: "/portfolio", label: "Work", number: "01" },
  { href: "/services", label: "Services", number: "02" },
  { href: "/about", label: "About", number: "03" },
  { href: "/blog", label: "Journal", number: "04" },
  { href: "/contact", label: "Contact", number: "05" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark text on cream pages (anything except home)
  const isDarkText = !isHome && !scrolled && !mobileOpen;
  const showBg = !isHome || scrolled || mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg
          ? isHome
            ? "bg-dark/90 backdrop-blur-md border-b border-cream/10"
            : "bg-cream/90 backdrop-blur-md border-b border-dark/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className={`font-display text-xl tracking-tight transition-colors ${
              isDarkText ? "text-dark" : "text-cream"
            }`}
          >
            <span className="font-light">Wilson</span>
            <span className="italic text-gold ml-1">Web Design</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : isDarkText
                    ? "text-dark hover:text-gold-dark"
                    : "text-cream/80 hover:text-gold"
                }`}
              >
                <span className={`mr-2 ${isDarkText ? "text-dark/40" : "text-cream/40"}`}>
                  {link.number}
                </span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isDarkText ? "text-dark" : "text-cream"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-6 bg-current transition-transform ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-current transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-current transition-transform ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-dark border-t border-cream/10">
          <div className="px-6 py-8 space-y-5">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-baseline gap-4 text-2xl font-display ${
                  pathname === link.href ? "text-gold italic" : "text-cream/90"
                }`}
              >
                <span className="text-xs text-cream/40 tracking-[0.2em]">{link.number}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
