import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { serviceIcons } from "@/components/shared/icons";
import { workChips, workGallery } from "@/lib/work";

export default function WorkGallery() {
  return (
    <section className="py-25 steel-bg" id="trabajos">
      <div className="wrap">
        <SectionHead
          eyebrow="Trabajos"
          title="Un vistazo real al trabajo terminado."
          description="Fotos de trabajos recientes. Se irán sumando más con cada proyecto."
        />

        <div className="photo-gallery">
          {workGallery.map((item) => (
            <Reveal key={item.src}>
              <div className="photo-frame">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 980px) 33vw, (min-width: 720px) 50vw, 100vw"
                  className="object-cover"
                  priority={item.src.includes("welder-1")}
                />
                <span className="frame-label">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="work-chips">
          {workChips.map((chip) => {
            const Icon = serviceIcons[chip.icon];
            return (
              <span className="work-chip" key={chip.label}>
                <Icon />
                {chip.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}