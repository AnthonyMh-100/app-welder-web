import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-spark to-[#d95e0c] text-[#171106] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_-6px_rgba(255,122,26,0.55)]",
  ghost: "border-line text-ink hover:border-steel",
};

export default function Button({
  href,
  variant = "ghost",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <a href={href} className={`btn ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}