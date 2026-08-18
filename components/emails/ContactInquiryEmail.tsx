import type { CSSProperties } from "react";
import type { ContactInquiry } from "@/types";

interface ContactInquiryEmailProps {
  inquiry: ContactInquiry;
}

const labelStyle: CSSProperties = {
  width: "140px",
  padding: "10px 16px",
  border: "1px solid #e4e4e7",
  borderRight: "none",
  background: "#fafafa",
  fontSize: "13px",
  fontWeight: "bold",
  color: "#52525b",
  verticalAlign: "top",
  textAlign: "left",
};

const valueStyle: CSSProperties = {
  padding: "10px 16px",
  border: "1px solid #e4e4e7",
  fontSize: "14px",
  color: "#18181b",
  verticalAlign: "top",
  textAlign: "left",
  whiteSpace: "pre-wrap",
};

export const ContactInquiryEmail = ({ inquiry }: ContactInquiryEmailProps) => {
  const rows = [
    { label: "Nombre", value: inquiry.name },
    { label: "Teléfono", value: inquiry.phone },
    { label: "Tipo de trabajo", value: inquiry.workType },
    { label: "Detalle", value: inquiry.message },
  ];

  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
        background: "#f4f4f5",
        padding: "32px 16px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid #e4e4e7",
        }}
      >
        <div
          style={{
            background: "#ff7a1a",
            padding: "20px 28px",
            borderBottom: "3px solid #171106",
          }}
        >
          <h1
            style={{
              margin: "0",
              color: "#ffffff",
              fontSize: "20px",
              lineHeight: "1.3",
            }}
          >
            Nueva solicitud de cotización
          </h1>
          <p style={{ margin: "4px 0 0", color: "#fff4e8", fontSize: "13px" }}>
            Recibida desde el formulario de contacto del sitio web
          </p>
        </div>

        <div style={{ padding: "24px 28px 28px" }}>
          <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            style={{ borderCollapse: "collapse" }}
          >
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td style={labelStyle}>{row.label}</td>
                  <td style={valueStyle}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ margin: "20px 0 0", fontSize: "13px", color: "#71717a" }}>
            Responder a <strong>{inquiry.name}</strong> al teléfono{" "}
            <strong>{inquiry.phone}</strong> para coordinar la visita y la
            cotización.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInquiryEmail;