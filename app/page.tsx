import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./components/SectionHeader";
import { DishCard } from "./components/DishCard";
import { HeroReserveButton } from "./components/HeroReserveButton";
import { ScrollReveal } from "./components/ScrollReveal";
import { menuItems } from "./data/menu";

const popularDishes = menuItems.filter(
  (item) =>
    item.badge === "Featured" || item.name === "Pan-Seared Salmon"
);

const events = [
  {
    title: "Friday Live Jazz",
    time: "Every Friday, 7pm \u2013 10pm",
    description:
      "Enjoy classic jazz standards performed live while you dine under warm amber lights.",
    image:
      "/images/hero-cocktail.webp",
  },
  {
    title: "Sunday Acoustic Brunch",
    time: "Every Sunday, 12pm \u2013 3pm",
    description:
      "Unwind with acoustic melodies, bottomless mimosas, and our seasonal brunch menu.",
    image:
      "/images/interior.webp",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[calc(100svh-4.5rem)] flex items-center bg-oak-50">
        <div className="mx-auto flex w-full max-w-[80rem] flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-16 py-16 lg:py-0">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-display text-[3.815rem] lg:text-[5.96rem] font-black leading-[1] tracking-[-0.03em] text-oak-950 max-w-[10ch] mx-auto lg:mx-0">
              We Serve The Taste You Love
            </h1>
            <p className="mt-6 text-[1.125rem] leading-relaxed text-oak-700 max-w-[40ch] mx-auto lg:mx-0">
              Experience the art of slow-cooked comfort paired with aged spirits
              in a warm, inviting atmosphere that feels like home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <HeroReserveButton />
              <Link
                href="/menu"
                className="inline-flex h-[3.25rem] items-center justify-center rounded-full border-2 border-barrel-400 px-8 text-[1.125rem] font-semibold text-barrel-600 hover:bg-barrel-50 hover:border-barrel-500 active:bg-barrel-100 transition-all duration-150"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] lg:w-[480px] lg:h-[480px]">
              <Image
                src="/images/food-spread.webp"
                alt="Beautifully plated dish at The Oak and Barrel restaurant"
                fill
                className="object-cover rounded-[2rem]"
                priority
                sizes="(max-width: 1024px) 280px, 480px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR DISHES ===== */}
      <section className="py-24 bg-oak-50">
        <div className="mx-auto max-w-[80rem] px-6 lg:px-16">
          <ScrollReveal>
            <SectionHeader
              title="Popular Dishes"
              subtitle="Our most loved creations, crafted with care and served with pride"
              decorated
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDishes.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 75}>
                <DishCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-24 bg-oak-100">
        <div className="mx-auto max-w-[80rem] px-6 lg:px-16">
          <ScrollReveal>
            <SectionHeader
              title="Upcoming Events"
              subtitle="Join us for memorable evenings of music, food, and great company"
              decorated
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((evt, i) => (
              <ScrollReveal key={evt.title} delay={i * 100}>
                <div className="relative overflow-hidden rounded-[1.5rem] h-[320px] group cursor-pointer">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oak-950/80 via-oak-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-[0.833rem] font-semibold uppercase tracking-[0.05em] text-barrel-300 mb-2">
                      {evt.time}
                    </p>
                    <h3 className="font-display text-[1.953rem] font-bold text-oak-100 mb-2">
                      {evt.title}
                    </h3>
                    <p className="text-base text-oak-300 max-w-[45ch]">
                      {evt.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="theme-dark bg-oak-900 py-20">
        <div className="mx-auto max-w-[80rem] px-6 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="font-display text-[2.441rem] md:text-[3.052rem] font-bold text-oak-100 mb-4">
              Do You Have Any Dinner Plan Today?
            </h2>
            <p className="text-[1.125rem] text-oak-300/80 max-w-[50ch] mx-auto mb-8">
              Let us take care of the details. Reserve your table and enjoy an
              unforgettable evening at Oak &amp; Barrel.
            </p>
            <HeroReserveButton />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
