import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="section-label text-sm font-bold uppercase tracking-[0.22em] text-rain">
      {children}
    </p>
  );
}
