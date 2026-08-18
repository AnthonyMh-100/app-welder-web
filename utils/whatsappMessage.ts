import { buildWhatsAppLink } from "@/utils/whatsappLink";

export interface WhatsAppMessageFields {
  name: string;
  phone: string;
  workType: string;
  message: string;
}

export const buildWhatsAppMessageLink = (
  phone: string,
  fields: WhatsAppMessageFields,
): string => {
  const lines = [
    "Hola Julio, quiero coordinar una visita.",
    "",
    `Nombre: ${fields.name}`,
    `Teléfono: ${fields.phone}`,
    `Tipo de trabajo: ${fields.workType}`,
    `Detalles: ${fields.message}`,
  ];
  return buildWhatsAppLink(phone, lines.join("\n"));
};