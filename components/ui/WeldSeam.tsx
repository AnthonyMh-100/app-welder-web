"use client";

import { useId } from "react";
import { useWeldSeam } from "@/hooks/useWeldSeam";

interface WeldSeamProps {
  d: string;
  viewBox: string;
  autoDraw?: boolean;
  className?: string;
}

export default function WeldSeam({ d, viewBox, autoDraw = false, className = "" }: WeldSeamProps) {
  const gradientId = useId().replace(/:/g, "");
  const { containerRef, pathRef } = useWeldSeam<HTMLDivElement>({ autoDraw });

  return (
    <div ref={containerRef} className={`weld-seam ${className}`} aria-hidden="true">
      <svg viewBox={viewBox} preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffd166" />
            <stop offset="100%" stopColor="#ff7a1a" />
          </linearGradient>
        </defs>
        <path ref={pathRef} d={d} stroke={`url(#${gradientId})`} />
      </svg>
    </div>
  );
}