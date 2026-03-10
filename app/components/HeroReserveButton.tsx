"use client";

import { useReservation } from "./ReservationContext";

export function HeroReserveButton() {
  const { setIsOpen } = useReservation();
  return (
    <button
      onClick={() => setIsOpen(true)}
      className="inline-flex h-[3.25rem] items-center justify-center rounded-full bg-barrel-400 px-8 text-[1.125rem] font-semibold text-oak-950 shadow-[var(--shadow-xs)] transition-all duration-150 hover:bg-barrel-500 hover:shadow-[var(--shadow-brand)] active:bg-barrel-600 active:scale-[0.98]"
    >
      Reserve a Table
    </button>
  );
}
