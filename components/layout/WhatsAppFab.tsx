import { WhatsAppIcon } from "@/components/shared/icons";
import { siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/utils/whatsappLink";

export default function WhatsAppFab() {
  const whatsappLink = buildWhatsAppLink(siteConfig.phoneRaw, siteConfig.whatsappMessage);

  return (
    <a className="fab" href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp">
      <WhatsAppIcon />
    </a>
  );
}