"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useReservation } from "./ReservationContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const { setIsOpen } = useReservation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ease-[var(--ease-in-out)] ${
        scrolled
          ? "h-[3.75rem] border-b border-oak-150"
          : "h-[4.5rem]"
      }`}
      style={{
        backgroundColor: "var(--nav-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav className="mx-auto flex h-full max-w-[80rem] items-center justify-between px-6 lg:px-16">
        {/* Logo */}
        <Link href="/" className="font-display text-[1.563rem] font-bold text-oak-950">
          Oak <span className="text-barrel-400">&amp;</span> Barrel
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors duration-150 ${
                  active
                    ? "text-barrel-500 border-b-2 border-barrel-500 pb-1"
                    : "text-oak-700 hover:text-oak-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => setIsOpen(true)}
            className="ml-4 inline-flex h-11 items-center justify-center rounded-full bg-barrel-400 px-6 font-semibold text-oak-950 shadow-[var(--shadow-xs)] transition-all duration-150 hover:bg-barrel-500 hover:shadow-[var(--shadow-brand)] active:bg-barrel-600 active:scale-[0.98]"
          >
            Reserve
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-[310] flex md:hidden flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-oak-950 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-oak-950 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[300] bg-oak-50 flex flex-col items-center justify-center gap-8 transition-all duration-400 ease-[var(--ease-out)] md:hidden ${
          mobileOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-[1.953rem] font-display font-bold transition-colors ${
                active ? "text-barrel-500" : "text-oak-950 hover:text-barrel-500"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <button
          onClick={() => {
            setMobileOpen(false);
            setIsOpen(true);
          }}
          className="mt-4 inline-flex h-[3.25rem] items-center justify-center rounded-full bg-barrel-400 px-8 text-[1.125rem] font-semibold text-oak-950"
        >
          Reserve a Table
        </button>
      </div>
    </header>
  );
}
