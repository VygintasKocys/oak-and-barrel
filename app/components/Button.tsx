import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonOwnProps<C extends ElementType = "button"> = {
  as?: C;
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
};

type ButtonProps<C extends ElementType = "button"> = ButtonOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps<C>>;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-barrel-400 text-oak-950 shadow-[var(--shadow-xs)] hover:bg-barrel-500 hover:shadow-[var(--shadow-brand)] active:bg-barrel-600 active:shadow-none active:scale-[0.98]",
  secondary:
    "bg-transparent border-2 border-barrel-400 text-barrel-600 hover:bg-barrel-50 hover:border-barrel-500 active:bg-barrel-100",
  ghost:
    "bg-transparent text-barrel-600 hover:bg-barrel-50 active:bg-barrel-100",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.833rem]",
  md: "h-11 px-6 text-base",
  lg: "h-[3.25rem] px-8 text-[1.125rem]",
};

export function Button<C extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}: ButtonProps<C>) {
  const Component = href ? "a" : as || "button";

  return (
    <Component
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150 ease-[var(--ease-default)] focus:outline-2 focus:outline-barrel-400 focus:outline-offset-2 disabled:bg-oak-200 disabled:text-oak-400 disabled:shadow-none disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
