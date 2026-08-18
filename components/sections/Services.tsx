import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { serviceIcons } from "@/components/shared/icons";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="py-[100px] steel-bg" id="servicios">
      <div className="wrap">
        <SectionHead
          eyebrow="Servicios"
          title="Todo lo que se trabaja con soldadura, en un solo taller."
          description="Desde una reja de ventana hasta la estructura de un techo. Fabrico a medida en taller y también trabajo directamente en obra."
        />

        <div className="services-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.title}>
                <div className="plate h-full">
                  <Icon className="plate-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="spec">{service.spec}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}