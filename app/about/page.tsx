import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";
import { ScrollReveal } from "../components/ScrollReveal";

const values = [
  {
    title: "Patience",
    description:
      "Great food, like great bourbon, cannot be rushed. We slow-cook, slow-roast, and slow-age because flavor takes time.",
  },
  {
    title: "Craft",
    description:
      "Every dish is built from scratch with hand-selected ingredients. We honor the traditions that make each recipe timeless.",
  },
  {
    title: "Community",
    description:
      "Our table is big enough for everyone. Families, friends, first dates, and regulars all find a home at Oak & Barrel.",
  },
];

const galleryImages = [
  {
    src: "/images/bar-counter.webp",
    alt: "Warm restaurant interior with oak tables and ambient lighting",
  },
  {
    src: "/images/bartender.webp",
    alt: "Beautifully plated dish with fresh garnish",
  },
  {
    src: "/images/wine-cellar.webp",
    alt: "Bar area with spirit bottles and warm lighting",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/restaurant-interior.webp"
          alt="The Oak and Barrel restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oak-950/70 via-oak-950/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-[80rem] w-full px-6 lg:px-16 pb-16">
            <h1 className="font-display text-[3.052rem] md:text-[3.815rem] font-bold text-oak-100 mb-2">
              Our Story
            </h1>
            <p className="text-[1.125rem] text-oak-300 max-w-[50ch]">
              Two decades of crafting unforgettable meals in the heart of New York
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER STORY ===== */}
      <section className="py-24 bg-oak-50">
        <div className="mx-auto max-w-[80rem] px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative aspect-[3/4] max-w-[400px] mx-auto lg:mx-0 overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/chef-cooking.webp"
                  alt="Chef Leon Fonale in the kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <h2 className="font-display text-[2.441rem] md:text-[3.052rem] font-bold text-oak-950 mb-6">
                  Meet Leon Fonale
                </h2>
                <div className="space-y-4 text-[1.125rem] leading-relaxed text-oak-700">
                  <p>
                    Leon grew up in the sun-drenched countryside of southern France,
                    where food was the language of family. Trained at Le Cordon Bleu
                    in Paris, he spent his twenties working kitchens from Lyon to
                    New York, absorbing every technique and tradition along the way.
                  </p>
                  <p>
                    In 2003, a road trip through Kentucky&apos;s bourbon country
                    changed everything. Walking through aging warehouses filled with
                    oak barrels, Leon saw the parallel between bourbon-making and
                    cooking: both demand patience, quality ingredients, and an
                    unwillingness to cut corners.
                  </p>
                  <p>
                    He opened The Oak &amp; Barrel in 2004 in Manhattan&apos;s
                    Garment District, blending French technique with American
                    heartiness. The restaurant became a neighborhood staple &mdash;
                    a place where date nights and family dinners feel equally at home.
                  </p>
                  <p className="font-display text-[1.25rem] italic text-oak-950">
                    &ldquo;Great food, like great bourbon, cannot be rushed.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-24 bg-oak-100">
        <div className="mx-auto max-w-[80rem] px-6 lg:px-16">
          <ScrollReveal>
            <SectionHeader
              title="What We Stand For"
              subtitle="The principles that guide every dish, every evening, every guest"
              decorated
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 100}>
                <div className="bg-white rounded-[1.5rem] p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 transition-all duration-250">
                  <h3 className="font-display text-[1.563rem] font-bold text-oak-950 mb-3">
                    {val.title}
                  </h3>
                  <p className="text-base leading-relaxed text-oak-700">
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-24 bg-oak-50">
        <div className="mx-auto max-w-[80rem] px-6 lg:px-16">
          <ScrollReveal>
            <SectionHeader
              title="The Ambiance"
              subtitle="A warm, inviting space where every detail has been considered"
              decorated
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 100}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
