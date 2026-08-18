import type { ReactNode } from "react";

interface PlateChipProps {
  children: ReactNode;
}

export default function PlateChip({ children }: PlateChipProps) {
  return (
    <span className="inline-flex items-center gap-[7px] rounded-[3px] border border-line bg-panel px-3 py-2 font-mono text-xs tracking-[0.03em] text-steel-light">
      <span className="h-1.5 w-1.5 flex-none rounded-full bg-spark" />
      {children}
    </span>
  );
}