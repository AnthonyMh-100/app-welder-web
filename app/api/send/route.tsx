import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactInquiryEmail } from "@/components/emails/ContactInquiryEmail";
import type { ContactInquiry } from "@/types";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  const inquiry = (await request.json()) as ContactInquiry;

  const { data, error } = await resend.emails.send({
    from: "Sitio web Julio Cárdenas <contact@resend.dev>",
    to: ["almh100w@gmail.com"],
    subject: `Nueva cotización: ${inquiry.workType} — ${inquiry.name}`,
    react: <ContactInquiryEmail inquiry={inquiry} />,
  });

  if (error) return NextResponse.json({ error }, { status: 500 });

  return NextResponse.json(data);
};