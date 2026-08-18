import Link from "next/link";
import Brand from "@/components/shared/Brand";
import { navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="steel-bg border-t border-line py-12">
      <div className="wrap">
        <div className="footer-grid">
          <Link href="/" aria-label={siteConfig.name}>
            <Brand />
          </Link>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {siteConfig.name} — {siteConfig.tagline}. Todos los derechos reservados.</span>
          <span>Maqueta de sitio — reemplazar datos de contacto antes de publicar.</span>
        </div>
      </div>
    </footer>
  );
}