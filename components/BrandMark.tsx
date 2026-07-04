type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className = "", compact = false }: BrandMarkProps) {
  return (
    <span
      aria-label="Southern Oregon Continuous Gutters Inc."
      className={["brand-lockup", compact ? "brand-lockup--compact" : "", className].filter(Boolean).join(" ")}
    >
      <span className="brand-lockup__script">Southern Oregon</span>
      <span className="brand-lockup__body">
        <span className="brand-lockup__mark" aria-hidden="true">
          <svg viewBox="0 0 52 56" focusable="false" aria-hidden="true">
            <path className="brand-lockup__mark-fill" d="M24 5h4l6 45H18L24 5Z" />
            <path className="brand-lockup__mark-side" d="M15 14 7 50h9l5-36h-6Z" />
            <path className="brand-lockup__mark-side" d="m37 14 8 36h-9l-5-36h6Z" />
            <path className="brand-lockup__mark-line" d="M18 17h16" />
            <path className="brand-lockup__mark-line" d="M16 28h20" />
            <path className="brand-lockup__mark-line" d="M14 39h24" />
          </svg>
        </span>
        <span className="brand-lockup__text">
          <span className="brand-lockup__primary">Continuous Gutters</span>
          <span className="brand-lockup__suffix">Inc.</span>
        </span>
      </span>
    </span>
  );
}
