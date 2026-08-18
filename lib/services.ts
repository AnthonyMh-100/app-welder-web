import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    icon: "weld",
    title: "Soldadura estructural",
    description: "Refuerzos, bases y estructuras para techos, mezanines y ampliaciones.",
    spec: "Electrodo · MIG · TIG",
  },
  {
    icon: "door",
    title: "Puertas y portones",
    description: "Puertas de garaje, portones corredizos y rejas de seguridad a medida.",
    spec: "Plancha 1/16″–1/8″",
  },
  {
    icon: "window",
    title: "Ventanas y rejas",
    description: "Ventanas, mamparas y rejas de protección con acabado anticorrosivo.",
    spec: "Tubo cuadrado · Platina",
  },
  {
    icon: "pipe",
    title: "Tuberías e instalaciones",
    description: "Tendido y reparación de tuberías industriales y domésticas.",
    spec: "Roscado · Soldado",
  },
  {
    icon: "stairs",
    title: "Escaleras y barandas",
    description: "Escaleras tipo gato, barandas y pasamanos interiores y exteriores.",
    spec: "Tubo redondo · Inox",
  },
  {
    icon: "roof",
    title: "Techos y coberturas",
    description: "Estructura y cobertura para techos, cocheras y patios.",
    spec: "Correas · Cerchas",
  },
];

export const serviceTitles = services.map((service) => service.title);