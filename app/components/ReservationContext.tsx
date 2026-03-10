"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface ReservationContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ReservationContext = createContext<ReservationContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ReservationContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  return useContext(ReservationContext);
}
