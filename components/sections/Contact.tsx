import ContactForm from "@/components/forms/ContactForm";
import Button from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/shared/icons";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/utils/whatsappLink";

const contactRows = [
  {
    icon: PhoneIcon,
    label: "Teléfono / WhatsApp",
    value: siteConfig.phoneDisplay,
  },
  { icon: MailIcon, label: "Correo", value: siteConfig.email },
  { icon: PinIcon, label: "Zona de trabajo", value: siteConfig.zone },
  { icon: ClockIcon, label: "Horario", value: siteConfig.hours },
];

export default function Contact() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.phoneRaw,
    siteConfig.whatsappMessage,
  );

  return (
    <section className="py-25" id="contacto">
      <div className="wrap">
        <SectionHead
          eyebrow="Contacto"
          title="¿Tienes un trabajo en mente? Escríbeme y coordinamos la visita."
          description="Te respondo el mismo día con fecha para ir a medir. Atiendo en Ica y alrededores; si tu proyecto está fuera de la zona, escríbeme igual y lo vemos."
        />
        <div className="mb-10 flex flex-wrap gap-3.5">
          <Button
            href={whatsappLink}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </Button>
          <Button href={`tel:${siteConfig.phoneRaw}`}>Llamar ahora</Button>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <dl className="m-0">
              {contactRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div className="row" key={row.label}>
                    <Icon />
                    <div>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
