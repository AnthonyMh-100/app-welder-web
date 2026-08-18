import type { ContactInquiry } from "@/types";

export const API_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const sendEmail = async (inquiry: ContactInquiry) => {
  const requestSendEmail = await fetch(`${API_URL}/api/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inquiry),
  });
  const dataSendEmail = await requestSendEmail.json();

  return dataSendEmail;
};