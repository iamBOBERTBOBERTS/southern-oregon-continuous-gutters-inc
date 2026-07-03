import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "border-amber bg-amber text-ink shadow-amber hover:bg-amber/90",
  secondary: "border-white/20 bg-white/[0.04] text-zinc-50 hover:border-rain hover:text-rain",
  ghost: "border-transparent bg-transparent text-zinc-300 hover:text-amber"
};

export function Button({ children, className = "", href, variant = "primary", ...props }: ButtonProps) {
  const classes = [
    "inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber",
    variants[variant],
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
