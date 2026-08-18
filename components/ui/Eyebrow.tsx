import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
}

export default function Eyebrow({ children }: EyebrowProps) {
  return <span className="eyebrow">{children}</span>;
}