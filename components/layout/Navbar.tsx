"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Brand from "@/components/shared/Brand";
import { WhatsAppIcon } from "@/components/shared/icons";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navLinks, siteConfig } from "@/lib/site";
import { buildWhatsAppLink } from "@/utils/whatsappLink";

export default function Navbar() {
  const isScrolled = useScrollPosition();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const whatsappLink = buildWhatsAppLink(siteConfig.phoneRaw, siteConfig.whatsappMessage);

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="wrap flex items-center justify-between gap-4">
        <Link href="/" aria-label={siteConfig.name}>
          <Brand />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span />
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} className={isActive ? "active" : ""} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bg-gradient-to-br from-spark to-[#d95e0c] text-[#171106] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_-6px_rgba(255,122,26,0.55)]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}