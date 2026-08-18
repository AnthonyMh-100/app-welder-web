import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbeme para coordinar una visita y cotización sin costo. Atiendo en Ica y alrededores.",
};

export default function ContactPage() {
  return <Contact />;
}