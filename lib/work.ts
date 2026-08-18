import type { TrustItem, WorkChip, WorkGalleryItem } from "@/types";

export const trustItems: TrustItem[] = [
  { icon: "shield", text: "Garantía por escrito en cada trabajo" },
  { icon: "clock", text: "Cotización en la primera visita" },
  { icon: "users", text: "Trabajo propio, sin subcontratar" },
  { icon: "box", text: "Materiales certificados" },
];

export const workChips: WorkChip[] = [
  { icon: "weld", label: "Soldadura estructural" },
  { icon: "door", label: "Puertas y portones" },
  { icon: "window", label: "Ventanas y rejas" },
  { icon: "pipe", label: "Tuberías" },
  { icon: "stairs", label: "Escaleras y barandas" },
  { icon: "roof", label: "Techos y coberturas" },
];

export const workGallery: WorkGalleryItem[] = [
  {
    src: "/img/welder-1.jpg",
    alt: "Trabajo de estructuras metálicas terminado por Julio Cárdenas",
    label: "Trabajo 01",
  },
  {
    src: "/img/welder-2.jpg",
    alt: "Trabajo de estructuras metálicas terminado por Julio Cárdenas",
    label: "Trabajo 02",
  },
  {
    src: "/img/welder-3.jpg",
    alt: "Trabajo de estructuras metálicas terminado por Julio Cárdenas",
    label: "Trabajo 03",
  },
];