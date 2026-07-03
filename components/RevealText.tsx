import type { ReactNode } from "react";

type RevealTextProps = {
  as?: "h1" | "h2" | "p";
  children: ReactNode;
  className?: string;
};

export function RevealText({ as: Tag = "p", children, className = "" }: RevealTextProps) {
  return <Tag className={`reveal-text ${className}`}>{children}</Tag>;
}
