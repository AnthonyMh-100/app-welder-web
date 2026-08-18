"use server";

import type { ContactInquiry } from "@/types";
import { sendEmail } from "@/services/services-send";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Record<string, string>;
}

const MIN_MESSAGE_LENGTH = 10;

const fieldsFormWelder = {
  name: { content: "Escribe tu nombre." },
  phone: { content: "Escribe tu número de contacto." },
  workType: { content: "Selecciona un tipo de trabajo." },
  message: {
    content: `Cuéntame un poco más (mínimo ${MIN_MESSAGE_LENGTH} caracteres).`,
  },
};

const getFieldErrors = (inquiry: ContactInquiry): Record<string, string> => {
  const fieldErrors: Record<string, string> = {};

  Object.entries(fieldsFormWelder).forEach(([key, value]) => {
    const field = key as keyof ContactInquiry;

    if (!inquiry[field]) fieldErrors[field] = value.content;
  });

  return fieldErrors;
}

export const submitContactForm = async (
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const inquiry: ContactInquiry = {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    workType: String(formData.get("workType") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const fieldErrors = getFieldErrors(inquiry);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors,
    };
  }

  await sendEmail(inquiry);

  return {
    status: "success",
    message: "Solicitud recibida. Te responderé el mismo día.",
    fieldErrors: {},
  };
}
