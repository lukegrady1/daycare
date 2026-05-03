import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function Acorn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <path d="M14 22c0-2 1-3 3-3h14c2 0 3 1 3 3v3c0 5-4 9-10 9s-10-4-10-9v-3z" />
      <path d="M12 22h24" />
      <path d="M14 22c-1-3 1-6 4-7" />
      <path d="M34 22c1-3-1-6-4-7" />
      <path d="M24 15v-4" />
      <path d="M22 11c0-1.5 1-2.5 2-2.5s2 1 2 2.5" />
    </svg>
  );
}

export function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <circle cx="24" cy="24" r="8" />
      <path d="M24 6v6" />
      <path d="M24 36v6" />
      <path d="M6 24h6" />
      <path d="M36 24h6" />
      <path d="M11 11l4 4" />
      <path d="M33 33l4 4" />
      <path d="M11 37l4-4" />
      <path d="M33 15l4-4" />
    </svg>
  );
}

export function PaperBoat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <path d="M8 28l16 6 16-6-3 8c-1 2-3 3-5 3H16c-2 0-4-1-5-3l-3-8z" />
      <path d="M24 34V12L8 28" />
      <path d="M24 34V12l16 16" />
    </svg>
  );
}

export function Leaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <path d="M10 38c0-15 12-28 28-28-1 16-12 28-28 28z" />
      <path d="M10 38l16-16" />
    </svg>
  );
}

export function Kite(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...base} {...props}>
      <path d="M24 6l12 14-12 14L12 20z" />
      <path d="M24 6v28" />
      <path d="M24 34c-2 3-5 5-9 6M24 34c1 1 1 3 0 4" />
    </svg>
  );
}

export function ScribbleUnderline({
  className,
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 220 18"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <path
        d="M3 12 C 30 4, 70 16, 110 9 S 190 4, 217 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="300"
        strokeDashoffset={animate ? "300" : "0"}
        className={animate ? "animate-draw-underline" : ""}
      />
    </svg>
  );
}

export function ScribbleArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" aria-hidden className={className} {...base}>
      <path d="M6 14c10 18 28 30 60 36" strokeWidth="2" />
      <path d="M58 44l8 6-2-10" strokeWidth="2" />
    </svg>
  );
}

export function VerticalLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 2 64" className={className} aria-hidden>
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="64"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckTiny(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden {...base} strokeWidth={2} {...props}>
      <path d="M3 8.5l3.5 3.5L13 5" />
    </svg>
  );
}
