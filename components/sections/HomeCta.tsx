import Button from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";

export default function HomeCta() {
  return (
    <section className="py-25 steel-bg">
      <div className="wrap">
        <SectionHead
          eyebrow="Empieza hoy"
          title="Tu proyecto en buenas manos."
          description="Explora los servicios, conoce el proceso o escríbeme para coordinar la visita sin costo."
          align="center"
        />
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button href="/services" variant="primary">
            Ver servicios
          </Button>
          <Button href="/process">Cómo trabajo</Button>
          <Button href="/contact">Pedir cotización</Button>
        </div>
      </div>
    </section>
  );
}
