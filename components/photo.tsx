import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Renders a real photo via next/image when `src` is provided, otherwise falls
 * back to a warm, grain-textured gradient tile so layouts read correctly
 * before final assets land.
 */
export function Photo({
  className,
  label,
  hue = "warm",
  rotate = 0,
  src,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: {
  className?: string;
  label?: string;
  hue?: "warm" | "sage" | "butter" | "sky" | "deep";
  rotate?: number;
  src?: string;
  priority?: boolean;
  sizes?: string;
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
        backgroundImage: src
          ? undefined
          : `radial-gradient(120% 80% at 30% 20%, ${bg} 0%, ${mid} 60%, ${dark} 100%)`,
        backgroundColor: src ? "#E8DDC9" : undefined,
      }}
      role="img"
      aria-label={label || "Photograph placeholder"}
    >
      {src ? (
        <Image
          src={src}
          alt={label || ""}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <>
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
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-multiply opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.5) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 70% 25%, rgba(255,243,210,0.35), transparent 70%)",
            }}
          />
        </>
      )}
    </div>
  );
}
