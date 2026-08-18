"use client";

import SectionHead from "@/components/ui/SectionHead";
import { useWeldSeam } from "@/hooks/useWeldSeam";

const seamPath = "M40,250 C160,236 220,264 320,250 C420,236 480,264 580,250 C680,236 740,264 840,250 C940,236 1000,264 1100,250 L1160,250";

export default function ImpactBanner() {
  const { containerRef, pathRef } = useWeldSeam<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="impact-banner">
      <div className="wrap">
        <SectionHead
          eyebrow="Un solo oficio"
          title="Todo nace del mismo cordón de soldadura."
          description="Portones, ventanas, tuberías, escaleras y techos — distintos productos, el mismo trabajo hecho con cuidado."
          align="center"
        />

        <div ref={containerRef} className="impact-visual">
          <svg viewBox="0 0 1200 320" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="bannerSeam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffd166" />
                <stop offset="50%" stopColor="#ff7a1a" />
                <stop offset="100%" stopColor="#ffd166" />
              </linearGradient>
              <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffd166" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
              </radialGradient>
            </defs>

            <path
              ref={pathRef}
              className="weld-seam-path"
              d={seamPath}
              stroke="url(#bannerSeam)"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            <g className="impact-icon-group" transform="translate(110,120)">
              <g className="impact-icon" stroke="#8a929b" strokeWidth="1.8" fill="none">
                <rect x="0" y="0" width="60" height="90" rx="2" />
                <line x1="0" y1="22" x2="60" y2="22" />
                <line x1="0" y1="45" x2="60" y2="45" />
                <line x1="0" y1="68" x2="60" y2="68" />
              </g>
              <text x="30" y="112" textAnchor="middle" className="font-mono" fontSize="10" letterSpacing="1" fill="#a3a9af">
                PORTONES
              </text>
            </g>

            <g className="impact-icon-group" transform="translate(310,132)">
              <g className="impact-icon" stroke="#8a929b" strokeWidth="1.8" fill="none">
                <rect x="0" y="0" width="66" height="78" rx="2" />
                <line x1="33" y1="0" x2="33" y2="78" />
                <line x1="0" y1="39" x2="66" y2="39" />
              </g>
              <text x="33" y="100" textAnchor="middle" className="font-mono" fontSize="10" letterSpacing="1" fill="#a3a9af">
                VENTANAS
              </text>
            </g>

            <g transform="translate(555,90)">
              <circle className="impact-glow" cx="60" cy="55" r="70" fill="url(#torchGlow)" />
              <g stroke="#ff7a1a" strokeWidth="2.4" fill="none" strokeLinecap="round">
                <path d="M20 130 L20 70 Q20 45 45 45 L85 45" />
                <path d="M85 45 L112 45 Q118 45 118 51" />
              </g>
              <circle cx="118" cy="51" r="4.5" fill="#ffd166" />
              <circle cx="126" cy="44" r="2" fill="#ffd166" />
              <circle cx="124" cy="60" r="1.6" fill="#ff7a1a" />
              <rect x="8" y="125" width="24" height="16" rx="2" stroke="#8a929b" strokeWidth="1.8" />
              <text x="63" y="163" textAnchor="middle" className="font-display" fontSize="13" fontWeight="600" letterSpacing="1" fill="#edeef0">
                SOLDADURA
              </text>
            </g>

            <g className="impact-icon-group" transform="translate(800,140)">
              <g className="impact-icon" stroke="#8a929b" strokeWidth="1.8" fill="none">
                <path d="M0 60 L0 20 Q0 0 20 0 L60 0" />
                <circle cx="60" cy="0" r="6" />
              </g>
              <text x="30" y="92" textAnchor="middle" className="font-mono" fontSize="10" letterSpacing="1" fill="#a3a9af">
                TUBERÍAS
              </text>
            </g>

            <g className="impact-icon-group" transform="translate(985,118)">
              <g className="impact-icon" stroke="#8a929b" strokeWidth="1.8" fill="none">
                <path d="M0 84 L0 63 L18 63 L18 42 L36 42 L36 21 L54 21 L54 0 L70 0" />
              </g>
              <text x="30" y="106" textAnchor="middle" className="font-mono" fontSize="10" letterSpacing="1" fill="#a3a9af">
                ESCALERAS
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}