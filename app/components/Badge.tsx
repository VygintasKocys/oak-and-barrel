import type { BadgeType } from "../data/menu";

const variantStyles: Record<string, string> = {
  Featured: "bg-barrel-100 text-barrel-700",
  Vegetarian: "bg-sage-100 text-sage-700",
  Spicy: "bg-ember-100 text-ember-700",
};

export function Badge({ type }: { type: NonNullable<BadgeType> }) {
  return (
    <span
      className={`inline-flex items-center h-[22px] px-2 rounded-[6px] text-[0.694rem] font-medium uppercase tracking-[0.025em] ${variantStyles[type]}`}
    >
      {type}
    </span>
  );
}
