import Button from "@/components/ui/Button";

interface CtaBandProps {
  title?: string;
  description?: string;
}

export default function CtaBand({
  title = "¿Tienes un trabajo en mente?",
  description = "Escríbeme y coordinamos la visita. Te respondo el mismo día con fecha para ir a medir.",
}: CtaBandProps) {
  return (
    <section className="py-[100px]">
      <div className="wrap text-center">
        <h2 className="font-display text-[clamp(1.9rem,2.6vw,2.5rem)] leading-[1.1] text-ink">{title}</h2>
        <p className="mx-auto mt-3.5 max-w-[52ch] text-base text-dim">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-[14px]">
          <Button href="/contact" variant="primary">
            Pedir cotización
          </Button>
        </div>
      </div>
    </section>
  );
}