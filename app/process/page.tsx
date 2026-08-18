import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Cómo trabajo",
  description:
    "Un proceso claro de la visita a la garantía: contacto, visita y medición, cotización, fabricación y garantía escrita.",
};

export default function ProcessPage() {
  return (
    <>
      <Process />
      <CtaBand />
    </>
  );
}