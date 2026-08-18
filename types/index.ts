export type IconName =
  | "weld"
  | "door"
  | "window"
  | "pipe"
  | "stairs"
  | "roof"
  | "shield"
  | "clock"
  | "users"
  | "box"
  | "phone"
  | "mail"
  | "pin"
  | "whatsapp"
  | "photo";

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
  spec: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TrustItem {
  icon: IconName;
  text: string;
}

export interface WorkChip {
  icon: IconName;
  label: string;
}

export interface WorkGalleryItem {
  src: string;
  alt: string;
  label: string;
}

export interface ContactInquiry {
  name: string;
  phone: string;
  workType: string;
  message: string;
}