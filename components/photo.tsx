import { cn } from "@/lib/utils";

/**
 * Stand-in for real photography. Generates a warm, grain-textured tile
 * with a subtle illustrative motif so the layout reads correctly before a
 * shoot lands. Replace usages with next/image once final assets exist.
 */
export function Photo({
  className,
  label,
  hue = "warm",
  rotate = 0,
}: {
  className?: string;
  label?: string;
  hue?: "warm" | "sage" | "butter" | "sky" | "deep";
  rotate?: number;
}) {
  const palette: Record<typeof hue, [string, string, string]> = {
    warm: ["#E8C9A8", "#C8633C", "#7A4A2E"],
    sage: ["#C8D2B4", "#7A8B5C", "#4F5C3D"],
    butter: ["#F4DDA0", "#D9A84A", "#8C6A2A"],
    sky: ["#C7DAE4", "#A8C5D6", "#5C7280"],
    deep: ["#D9C9B0", "#A14E2C", "#3D2A1F"],
  };
  const [bg, mid, dark] = palette[hue];
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md ring-1 ring-ink/5",
        className
      )}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        backgroundImage: `radial-gradient(120% 80% at 30% 20%, ${bg} 0%, ${mid} 60%, ${dark} 100%)`,
      }}
      role="img"
      aria-label={label || "Photograph placeholder"}
    >
      {/* abstract subject silhouette */}
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g opacity="0.55" fill={dark}>
          <ellipse cx="200" cy="430" rx="260" ry="80" />
        </g>
        <g opacity="0.7" fill={mid}>
          <circle cx="220" cy="240" r="70" />
          <rect x="150" y="300" width="140" height="170" rx="20" />
        </g>
        <g opacity="0.85" fill={bg}>
          <circle cx="220" cy="240" r="48" />
        </g>
      </svg>
      {/* soft grain */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.5) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
      {/* warm light vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 70% 25%, rgba(255,243,210,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}
