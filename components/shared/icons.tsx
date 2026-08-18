import type { ComponentType, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const outlineProps: IconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  viewBox: "0 0 24 24",
};

export function WeldIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M3 21 12 3l9 18" />
      <path d="M8 14h8" />
      <path d="M6 21h12" />
    </svg>
  );
}

export function DoorIcon(props: IconProps) {
  return (
    <svg {...outlineProps} strokeWidth={1.6} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <circle cx="15" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WindowIcon(props: IconProps) {
  return (
    <svg {...outlineProps} strokeWidth={1.6} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}

export function PipeIcon(props: IconProps) {
  return (
    <svg {...outlineProps} strokeWidth={1.6} {...props}>
      <path d="M4 20 20 4" />
      <path d="M4 14h6M10 20v-6" />
      <circle cx="19" cy="5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StairsIcon(props: IconProps) {
  return (
    <svg {...outlineProps} strokeWidth={1.6} {...props}>
      <path d="M4 20V10l16-6v16" />
      <path d="M4 14h16M4 20h16" />
    </svg>
  );
}

export function RoofIcon(props: IconProps) {
  return (
    <svg {...outlineProps} strokeWidth={1.6} {...props}>
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M3 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
      <circle cx="8" cy="7" r="3" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...outlineProps} {...props}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PhotoIcon(props: IconProps) {
  return (
    <svg {...outlineProps} strokeWidth={1.5} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="m21 16-4.5-4.5L9 19" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.45 1.29 4.9L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Z" opacity=".18" />
      <path d="M12.04 3.6c4.58 0 8.31 3.73 8.31 8.31 0 4.58-3.73 8.31-8.31 8.31a8.26 8.26 0 0 1-4.22-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.24 8.24 0 0 1-1.29-4.44c0-4.58 3.73-8.31 8.3-8.31Zm4.62 11.86c-.19-.1-1.14-.56-1.31-.62-.18-.07-.31-.1-.44.1-.13.19-.5.62-.61.75-.11.13-.22.14-.42.05-.19-.1-.82-.3-1.56-.96-.58-.51-.96-1.15-1.08-1.34-.11-.19-.01-.3.09-.4.09-.09.19-.22.29-.34.1-.11.13-.19.2-.32.06-.13.03-.24-.02-.34-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.24-.18.19-.68.66-.68 1.61s.7 1.87.8 2c.1.13 1.37 2.1 3.33 2.94.47.2.83.32 1.11.41.47.15.89.13 1.23.08.38-.06 1.14-.46 1.3-.91.16-.45.16-.83.11-.91-.05-.08-.18-.13-.37-.23Z" />
    </svg>
  );
}

export const serviceIcons: Record<string, ComponentType<IconProps>> = {
  weld: WeldIcon,
  door: DoorIcon,
  window: WindowIcon,
  pipe: PipeIcon,
  stairs: StairsIcon,
  roof: RoofIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  users: UsersIcon,
  box: BoxIcon,
  photo: PhotoIcon,
};