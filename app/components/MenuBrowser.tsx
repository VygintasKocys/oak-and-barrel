"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Badge } from "./Badge";
import type { MenuItem, Category } from "../data/menu";
import { categories, getItemsByCategory } from "../data/menu";

export function MenuBrowser({ items }: { items: MenuItem[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("Starters");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);

  const categoryItems = getItemsByCategory(activeCategory);
  const current = categoryItems[currentIndex];

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
        setDirection(null);
      }, 250);
    },
    [isAnimating]
  );

  const prev = useCallback(() => {
    const next = currentIndex === 0 ? categoryItems.length - 1 : currentIndex - 1;
    goTo(next, "right");
  }, [currentIndex, categoryItems.length, goTo]);

  const next = useCallback(() => {
    const next = currentIndex === categoryItems.length - 1 ? 0 : currentIndex + 1;
    goTo(next, "left");
  }, [currentIndex, categoryItems.length, goTo]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(null);
    setIsAnimating(false);
  }, [activeCategory]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch swipe
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  }

  if (!current) return null;

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`h-10 px-6 rounded-full text-base font-semibold transition-all duration-150 ${
              activeCategory === cat
                ? "bg-barrel-400 text-oak-950 shadow-[var(--shadow-xs)]"
                : "bg-oak-150 text-oak-700 hover:bg-oak-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Spotlight */}
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-250 ease-[var(--ease-out)]"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating
              ? direction === "left"
                ? "translateX(-24px)"
                : "translateX(24px)"
              : "translateX(0)",
          }}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Details */}
          <div>
            <h3 className="font-display text-[1.953rem] md:text-[2.441rem] font-bold text-oak-950 mb-3">
              {current.name}
            </h3>
            <p className="text-[1.125rem] leading-relaxed text-oak-700 mb-4 max-w-[45ch]">
              {current.description}
            </p>
            <p className="font-mono text-[1.563rem] font-medium text-barrel-600 mb-4">
              ${current.price}
            </p>
            {current.badge && <Badge type={current.badge} />}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 w-11 h-11 rounded-full bg-white shadow-[var(--shadow-md)] flex items-center justify-center text-oak-700 hover:text-oak-950 hover:shadow-[var(--shadow-lg)] transition-all"
          aria-label="Previous item"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 w-11 h-11 rounded-full bg-white shadow-[var(--shadow-md)] flex items-center justify-center text-oak-700 hover:text-oak-950 hover:shadow-[var(--shadow-lg)] transition-all"
          aria-label="Next item"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dots + counter */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="flex gap-2">
          {categoryItems.map((_, i) => (
            <button
              key={i}
              onClick={() =>
                goTo(i, i > currentIndex ? "left" : "right")
              }
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === currentIndex
                  ? "bg-barrel-400 scale-125"
                  : "bg-oak-300 hover:bg-oak-400"
              }`}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-[0.833rem] text-oak-500 font-medium">
          {currentIndex + 1} of {categoryItems.length}
        </span>
      </div>
    </div>
  );
}
