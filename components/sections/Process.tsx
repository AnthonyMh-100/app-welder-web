import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import WeldSeam from "@/components/ui/WeldSeam";
import { processSteps } from "@/lib/process";

const processSeamPath =
  "M4,10 C120,2 180,18 280,10 C380,2 440,18 540,10 C640,2 700,18 800,10 C880,2 940,18 996,10";

export default function Process() {
  return (
    <section className="py-25" id="proceso">
      <div className="wrap process">
        <SectionHead
          eyebrow="Cómo trabajo"
          title="Un proceso claro, de la visita a la garantía."
          description="Nada de intermediarios ni presupuestos a ciegas: yo mismo mido, cotizo, fabrico e instalo."
        />

        <div className="process-list">
          <div className="process-seam">
            <WeldSeam d={processSeamPath} viewBox="0 0 1000 20" />
          </div>
          {processSteps.map((step) => (
            <Reveal key={step.number} className="process-step">
              <span className="process-dot" />
              <span className="num">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
