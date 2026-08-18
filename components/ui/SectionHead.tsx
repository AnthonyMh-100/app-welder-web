import type { ReactNode } from "react";
import Eyebrow from "@/components/ui/Eyebrow";

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHead({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-14 max-w-160 ${isCentered ? "mx-auto text-center" : ""}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3.5 text-[clamp(1.9rem,2.6vw,2.5rem)] leading-[1.1] text-ink">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3.5 max-w-[52ch] text-base text-dim ${isCentered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
