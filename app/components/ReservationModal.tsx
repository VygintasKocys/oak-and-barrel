"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { useReservation } from "./ReservationContext";

export function ReservationModal() {
  const { isOpen, setIsOpen } = useReservation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState("");
  const [dateTime, setDateTime] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setError("");
      setName("");
      setPartySize("");
      setDateTime("");
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, setIsOpen]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, partySize: Number(partySize), dateTime }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to create reservation.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  const inputClass =
    "w-full h-11 rounded-[10px] border border-oak-200 bg-white px-4 text-base text-oak-950 placeholder:text-oak-400 focus:border-barrel-400 focus:outline-none focus:ring-[3px] focus:ring-barrel-400/15 transition-colors";

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[400] flex items-center justify-center p-4 animate-[fadeIn_250ms_ease-out]"
      style={{ backgroundColor: "var(--surface-overlay)" }}
      onClick={(e) => {
        if (e.target === overlayRef.current) setIsOpen(false);
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-[1.5rem] shadow-[var(--shadow-xl)] p-8 animate-[scaleIn_400ms_var(--ease-spring)]">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-oak-500 hover:text-oak-950 transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-100 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#527D52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="font-display text-[1.953rem] font-bold text-oak-950 mb-2">
              Reservation Confirmed!
            </h3>
            <p className="text-[1.125rem] text-oak-700">
              We look forward to welcoming you. Check your email for details.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-barrel-400 px-6 font-semibold text-oak-950 hover:bg-barrel-500 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display text-[1.953rem] font-bold text-oak-950 mb-1">
              Reserve a Table
            </h3>
            <p className="text-oak-700 mb-6">
              Fill in your details and we&apos;ll save your spot.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-[0.833rem] font-medium text-oak-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>
                {/* Party Size */}
                <div>
                  <label className="block text-[0.833rem] font-medium text-oak-700 mb-1.5">
                    Party Size
                  </label>
                  <select
                    required
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div>
                <label className="block text-[0.833rem] font-medium text-oak-700 mb-1.5">
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  required
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className={inputClass}
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[3.25rem] rounded-full bg-barrel-400 text-[1.125rem] font-semibold text-oak-950 hover:bg-barrel-500 hover:shadow-[var(--shadow-brand)] active:bg-barrel-600 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:pointer-events-none"
              >
                {loading ? "Reserving..." : "Reserve Table"}
              </button>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
