import Button from "@/components/ui/Button";
import PlateChip from "@/components/ui/PlateChip";
import WeldSeam from "@/components/ui/WeldSeam";
import { WhatsAppIcon } from "@/components/shared/icons";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/utils/whatsappLink";

const heroBadges = [
  "20+ años de oficio",
  "Visita y cotización sin costo",
  "Garantía por escrito",
];

const heroSeamPath = "M4,12 C60,4 100,20 160,12 C220,4 260,20 320,12 C380,4 420,20 480,12 L512,12";

export default function Hero() {
  const whatsappLink = buildWhatsAppLink(siteConfig.phoneRaw, siteConfig.whatsappMessage);

  return (
    <header className="hero steel-bg">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">{siteConfig.heroEyebrow}</span>
            <h1 className="mt-[18px] mb-[22px] text-[clamp(2.5rem,4.4vw,3.9rem)] leading-[1.06] text-ink">
              Cada soldadura
              <br />
              lleva <em className="bg-gradient-to-br from-spark-hot to-spark bg-clip-text text-transparent not-italic">mi nombre.</em>
            </h1>
            <p className="mb-[34px] max-w-[46ch] text-[17.5px] text-dim">
              Fabrico e instalo puertas, ventanas, rejas, escaleras, techos y tuberías en acero y
              aluminio. Visito, mido y cotizo en el sitio — sin intermediarios ni sorpresas en el
              precio.
            </p>

            <WeldSeam d={heroSeamPath} viewBox="0 0 520 24" autoDraw className="mb-2 max-w-[520px]" />

            <div className="mb-11 flex flex-wrap gap-[14px]">
              <Button href={whatsappLink} variant="primary" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Pedir cotización
              </Button>
              <Button href="/services">Ver tipos de trabajo</Button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {heroBadges.map((badge) => (
                <PlateChip key={badge}>{badge}</PlateChip>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <svg viewBox="0 0 200 200" fill="none">
              <rect x="20" y="20" width="160" height="160" rx="4" stroke="#3a3d43" strokeWidth="1" />
              <line x1="100" y1="20" x2="100" y2="180" stroke="#3a3d43" strokeWidth="1" strokeDasharray="2 4" />
              <line x1="20" y1="100" x2="180" y2="100" stroke="#3a3d43" strokeWidth="1" strokeDasharray="2 4" />
              <path d="M55 150 L55 70 Q55 50 75 50 L110 50" stroke="#8a929b" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M110 50 L145 50 Q150 50 150 55" stroke="#ff7a1a" strokeWidth="4" fill="none" strokeLinecap="round" />
              <circle cx="150" cy="55" r="4" fill="#ffd166" />
              <rect x="45" y="145" width="20" height="14" rx="2" fill="#26292e" stroke="#8a929b" strokeWidth="1" />
              <text x="100" y="196" textAnchor="middle" className="font-mono" fontSize="8" fill="#a3a9af">
                ESQUEMA DE ESTRUCTURA
              </text>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}