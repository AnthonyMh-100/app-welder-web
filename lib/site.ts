export const siteConfig = {
  name: "Julio Cárdenas",
  tagline: "Estructuras metálicas",
  phoneDisplay: "+51 999 999 999",
  phoneRaw: "51999999999",
  email: "julio.cardenas.metal@example.com",
  zone: "Ica y alrededores",
  hours: "Lunes a sábado, 8:00 a.m. – 6:00 p.m.",
  heroEyebrow: "Soldador independiente · 20+ años de oficio",
  whatsappMessage: "Hola Julio, me gustaría pedir una cotización.",
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/process", label: "Cómo trabajo" },
  { href: "/work", label: "Trabajos" },
  { href: "/contact", label: "Contacto" },
] as const;