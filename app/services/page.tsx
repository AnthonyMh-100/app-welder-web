import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Soldadura estructural, puertas y portones, ventanas y rejas, tuberías, escaleras y techos. Fabricación a medida en acero y aluminio.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <CtaBand />
    </>
  );
}