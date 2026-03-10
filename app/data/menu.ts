export type BadgeType = "Featured" | "Vegetarian" | "Spicy" | null;
export type Category = "Starters" | "Mains" | "Sides" | "Desserts" | "Drinks";

export interface MenuItem {
  category: Category;
  name: string;
  description: string;
  price: number;
  badge: BadgeType;
  image: string;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    category: "Starters",
    name: "Smoked Oak Bruschetta",
    description: "Grilled sourdough topped with heirloom tomatoes and aged balsamic glaze",
    price: 12,
    badge: "Featured",
    image: "/images/menu-bruschetta.webp",
  },
  {
    category: "Starters",
    name: "Barrel-Aged Soup",
    description: "Slow-simmered French onion soup with gruyere crouton and sherry reduction",
    price: 14,
    badge: null,
    image: "/images/menu-calamari.webp",
  },
  {
    category: "Starters",
    name: "Crispy Calamari",
    description: "Lightly battered squid rings with saffron aioli and charred lemon",
    price: 13,
    badge: null,
    image: "/images/menu-tartare.webp",
  },
  {
    category: "Starters",
    name: "Beef Carpaccio",
    description: "Thinly sliced wagyu with arugula and truffle-parmesan dressing",
    price: 18,
    badge: null,
    image: "/images/menu-soup.webp",
  },
  {
    category: "Starters",
    name: "Roasted Beet Salad",
    description: "Golden and red beets with goat cheese and candied walnuts",
    price: 11,
    badge: "Vegetarian",
    image: "/images/menu-shrimp.webp",
  },
  // Mains
  {
    category: "Mains",
    name: "Grilled Ribeye Steak",
    description: "12oz prime ribeye with roasted garlic butter and seasonal vegetables",
    price: 38,
    badge: "Featured",
    image: "/images/menu-steak.webp",
  },
  {
    category: "Mains",
    name: "Pan-Seared Salmon",
    description: "Atlantic salmon fillet with lemon herb butter and wild rice pilaf",
    price: 32,
    badge: null,
    image: "/images/menu-salmon.webp",
  },
  {
    category: "Mains",
    name: "Slow-Roasted Lamb Shoulder",
    description: "Eight-hour braised lamb with rosemary jus and root vegetables",
    price: 36,
    badge: null,
    image: "/images/menu-risotto.webp",
  },
  {
    category: "Mains",
    name: "Chicken Shawarma",
    description: "Marinated free-range chicken with pickled turnips and garlic sauce",
    price: 24,
    badge: null,
    image: "/images/menu-lamb.webp",
  },
  {
    category: "Mains",
    name: "Barrel Burger",
    description: "Double smash patty with aged cheddar and caramelized onion on brioche",
    price: 22,
    badge: "Featured",
    image: "/images/menu-burger.webp",
  },
  {
    category: "Mains",
    name: "Fish Curry",
    description: "Red snapper in coconut curry with jasmine rice and crispy shallots",
    price: 26,
    badge: "Spicy",
    image: "/images/menu-pasta.webp",
  },
  {
    category: "Mains",
    name: "Mushroom Risotto",
    description: "Arborio rice with wild mushrooms and truffle oil finished with parmesan",
    price: 24,
    badge: "Vegetarian",
    image: "/images/menu-chicken.webp",
  },
  {
    category: "Mains",
    name: "Grilled Sea Bass",
    description: "Whole sea bass with fennel salad and salsa verde",
    price: 34,
    badge: null,
    image: "/images/menu-duck.webp",
  },
  // Sides
  {
    category: "Sides",
    name: "Truffle Fries",
    description: "Hand-cut fries tossed with truffle oil and grated parmesan",
    price: 9,
    badge: null,
    image: "/images/menu-fries.webp",
  },
  {
    category: "Sides",
    name: "Charred Broccolini",
    description: "Wood-fired broccolini with chili flakes and toasted almonds",
    price: 8,
    badge: "Vegetarian",
    image: "/images/menu-salad.webp",
  },
  {
    category: "Sides",
    name: "Creamy Mashed Potatoes",
    description: "Yukon gold potatoes whipped with roasted garlic and brown butter",
    price: 8,
    badge: null,
    image: "/images/menu-asparagus.webp",
  },
  {
    category: "Sides",
    name: "Oak-Grilled Corn",
    description: "Fire-roasted corn with smoked paprika butter and cotija cheese",
    price: 7,
    badge: null,
    image: "/images/menu-potatoes.webp",
  },
  // Desserts
  {
    category: "Desserts",
    name: "Bourbon Creme Brulee",
    description: "Classic vanilla custard with a barrel-aged bourbon caramel",
    price: 14,
    badge: "Featured",
    image: "/images/menu-cheesecake.webp",
  },
  {
    category: "Desserts",
    name: "Chocolate Lava Cake",
    description: "Dark chocolate fondant with salted caramel core and vanilla gelato",
    price: 16,
    badge: null,
    image: "/images/menu-chocolate.webp",
  },
  {
    category: "Desserts",
    name: "Seasonal Fruit Tart",
    description: "Almond frangipane tart with fresh seasonal fruits and honey glaze",
    price: 13,
    badge: null,
    image: "/images/menu-creme-brulee.webp",
  },
  {
    category: "Desserts",
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers with mascarpone cream and cocoa dust",
    price: 14,
    badge: null,
    image: "/images/menu-tiramisu.webp",
  },
  // Drinks
  {
    category: "Drinks",
    name: "Old Fashioned",
    description: "Bourbon with muddled sugar and angostura bitters over a large ice cube",
    price: 16,
    badge: "Featured",
    image: "/images/menu-old-fashioned.webp",
  },
  {
    category: "Drinks",
    name: "Barrel Aged Negroni",
    description: "House-aged gin and campari blend with sweet vermouth",
    price: 18,
    badge: null,
    image: "/images/menu-wine.webp",
  },
  {
    category: "Drinks",
    name: "Fresh Lemonade",
    description: "Hand-squeezed lemonade with mint and a touch of elderflower",
    price: 6,
    badge: null,
    image: "/images/menu-espresso-martini.webp",
  },
  {
    category: "Drinks",
    name: "Espresso Martini",
    description: "Double shot espresso shaken with vodka and coffee liqueur",
    price: 17,
    badge: null,
    image: "/images/menu-craft-beer.webp",
  },
];

export const categories: Category[] = ["Starters", "Mains", "Sides", "Desserts", "Drinks"];

export function getItemsByCategory(category: Category): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}
