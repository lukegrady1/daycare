export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* sun */}
      <circle cx="20" cy="20" r="7" strokeWidth="1.6" />
      <g strokeWidth="1.4">
        <path d="M20 4.5v3.5" />
        <path d="M20 32v3.5" />
        <path d="M4.5 20H8" />
        <path d="M32 20h3.5" />
        <path d="M9 9l2.5 2.5" />
        <path d="M28.5 28.5L31 31" />
        <path d="M9 31l2.5-2.5" />
        <path d="M28.5 11.5L31 9" />
      </g>
    </svg>
  );
}
