import { SectionHeader } from "../components/SectionHeader";
import { MenuBrowser } from "../components/MenuBrowser";
import { menuItems } from "../data/menu";

export default function MenuPage() {
  return (
    <section className="py-24 bg-oak-50">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-16">
        <SectionHeader
          title="Our Menu"
          subtitle="Browse our carefully curated selection of dishes, each crafted with the finest ingredients"
          decorated
        />
        <MenuBrowser items={menuItems} />
      </div>
    </section>
  );
}
