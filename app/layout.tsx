import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Julio Cárdenas — Estructuras Metálicas",
    template: "%s — Julio Cárdenas",
  },
  description:
    "Fabricación e instalación de puertas, ventanas, rejas, escaleras, techos y tuberías en acero y aluminio en Ica. Soldador independiente con 20+ años de oficio, visita y cotización sin costo.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Julio Cárdenas — Estructuras Metálicas",
    description:
      "Cada soldadura lleva mi nombre. Fabricación e instalación a medida en acero y aluminio. Ica y alrededores.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${oswald.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-void font-sans text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}