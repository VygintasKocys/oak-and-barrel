import Image from "next/image";
import { Badge } from "./Badge";
import type { MenuItem } from "../data/menu";

export function DishCard({ item }: { item: MenuItem }) {
  return (
    <div className="group bg-white rounded-[1.5rem] shadow-[var(--shadow-sm)] transition-all duration-250 ease-[var(--ease-out)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 cursor-pointer overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 pb-6">
        <h3 className="text-[1.25rem] font-semibold text-oak-950 truncate">
          {item.name}
        </h3>
        {item.badge && (
          <div className="mt-2">
            <Badge type={item.badge} />
          </div>
        )}
        <p className="mt-2 font-mono text-[1.125rem] font-medium text-barrel-600">
          ${item.price}
        </p>
      </div>
    </div>
  );
}
