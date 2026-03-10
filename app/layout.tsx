import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ReservationProvider } from "./components/ReservationContext";
import { ReservationModal } from "./components/ReservationModal";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Oak & Barrel | New York Restaurant",
  description:
    "A family-friendly New York restaurant specializing in steaks, fish, burgers, and wines. Reserve your table today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
      >
        <ReservationProvider>
          <Navbar />
          <main className="pt-[4.5rem]">{children}</main>
          <Footer />
          <ReservationModal />
        </ReservationProvider>
      </body>
    </html>
  );
}
