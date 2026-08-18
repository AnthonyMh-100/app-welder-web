import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import WorkGallery from "@/components/sections/WorkGallery";

export const metadata: Metadata = {
  title: "Trabajos",
  description:
    "Un vistazo real al trabajo terminado: portones, rejas, escaleras, techos y estructuras metálicas fabricados e instalados.",
};

export default function TrabajosPage() {
  return (
    <>
      <WorkGallery />
      <CtaBand />
    </>
  );
}