import { siteConfig } from "@/lib/site";

export default function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="brand-mark">
        <svg viewBox="0 0 40 40" fill="none">
          <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="#1c1e22" stroke="#8a929b" strokeWidth="1.2" />
          <circle cx="20" cy="6" r="1.4" fill="#8a929b" />
          <circle cx="20" cy="34" r="1.4" fill="#8a929b" />
          <text x="20" y="25" textAnchor="middle" className="font-display" fontSize="15" fontWeight="600" fill="#ff7a1a">
            JC
          </text>
        </svg>
      </div>
      <div className="brand-name">
        {siteConfig.name}
        <span>{siteConfig.tagline}</span>
      </div>
    </div>
  );
}