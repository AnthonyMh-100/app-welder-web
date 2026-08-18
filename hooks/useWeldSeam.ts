"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { spawnSparks } from "@/utils/sparks";

interface WeldSeamOptions {
  autoDraw?: boolean;
  threshold?: number;
}

export const useWeldSeam = <T extends HTMLElement>(options: WeldSeamOptions = {}) => {
  const { autoDraw = false, threshold = 0.4 } = options;
  const containerRef = useRef<T>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const isReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const drawSeam = () => {
      if (path.dataset.done) return;
      path.dataset.done = "1";

      const length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = isReducedMotion ? "0" : String(length);
      if (isReducedMotion) return;

      path.getBoundingClientRect();
      path.style.transition = "stroke-dashoffset 1.5s cubic-bezier(.22,.61,.36,1)";
      requestAnimationFrame(() => {
        path.style.strokeDashoffset = "0";
      });
      window.setTimeout(() => spawnSparks(path, container), 1500);
    };

    if (autoDraw) {
      if (document.readyState === "complete") {
        drawSeam();
      } else {
        const onLoad = () => drawSeam();
        window.addEventListener("load", onLoad);
        return () => window.removeEventListener("load", onLoad);
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            drawSeam();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [autoDraw, isReducedMotion, threshold]);

  return { containerRef, pathRef };
}