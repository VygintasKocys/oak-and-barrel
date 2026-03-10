interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  decorated?: boolean;
  align?: "center" | "left";
}

export function SectionHeader({
  title,
  subtitle,
  decorated = false,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="font-display text-[2.441rem] md:text-[3.052rem] font-bold tracking-[-0.015em] text-oak-950">
        {title}
      </h2>
      {decorated && (
        <div
          className={`mt-4 h-[3px] w-[60px] rounded-full bg-barrel-400 ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      )}
      {subtitle && (
        <p
          className={`mt-3 text-[1.125rem] leading-relaxed text-oak-700 max-w-[50ch] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
