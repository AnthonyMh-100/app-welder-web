# Sitio web — Estructuras Metálicas

Sitio web de presentación y captación de cotizaciones para un taller de estructuras metálicas en Ica, Perú. Muestra los servicios, el proceso de trabajo y una galería de trabajos realizados, y permite enviar solicitudes de cotización desde un formulario de contacto.

Construido con [Next.js](https://nextjs.org) (App Router), React y Tailwind CSS v4.

## Tecnologías

- **Next.js 16** (App Router, React Server Components, Server Actions)
- **React 19** + TypeScript
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **Resend** + `@react-email/render` (envío de correos del formulario)

## Estructura de rutas

| Ruta | Sección |
| --- | --- |
| `/` | Portada: hero, confianza, banner y CTA |
| `/services` | Servicios ofrecidos |
| `/process` | Proceso de trabajo |
| `/work` | Galería de trabajos realizados |
| `/contact` | Formulario de contacto y datos |

## Estructura del proyecto

```text
app/
├── api/send/route.tsx     # API de envío de correos (Resend)
├── contact/actions.ts     # Server Action del formulario (validación + envío)
└── ...                    # Páginas de cada ruta
components/
├── layout/                # Navbar, Footer, WhatsAppFab
├── sections/              # Secciones de cada página
├── ui/                    # Botones, títulos, reveal, etc.
├── forms/                 # ContactForm
├── emails/                # ContactInquiryEmail (plantilla del correo)
└── shared/                # Brand, iconos
hooks/                     # Hooks personalizados (scroll, reveal, etc.)
lib/                       # Datos del sitio (config, servicios, proceso, trabajos)
services/                  # services-send.ts (cliente del envío)
types/                     # Tipos compartidos
utils/                     # Utilidades (whatsapp, sparks)
```

## Características

- Diseño oscuro estilo industrial con acentos naranja, tipografías `Inter`, `Oswald` y `JetBrains Mono`.
- Rutas estáticas generadas en build con SEO por página (título, descripción, Open Graph).
- Galería de trabajos con `next/image` (optimización de imágenes).
- Botones de contacto por WhatsApp en toda la navegación.
- Formulario de contacto con validación en cliente y servidor, estados de envío y plantilla de correo HTML con todos los campos (nombre, teléfono, tipo de trabajo, detalle).

## Variables de entorno

Crear un archivo `.env` en la raíz:

```env
NEXT_RESEND_API_KEY=re_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

- `NEXT_RESEND_API_KEY`: API key de [Resend](https://resend.com) para el envío de correos.
- `NEXT_PUBLIC_SITE_URL`: URL base del sitio (usada para llamar a `/api/send`).

Para producción, revisar en `app/api/send/route.tsx` los valores de `from` y `to` (reemplazar `contact@resend.dev` por el dominio verificado y el destinatario final).

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev     # servidor de desarrollo
npm run build   # build de producción
npm run start   # servidor de producción
npm run lint    # ESLint
```

## Convenciones

El proyecto sigue las convenciones definidas en [`RULE.md`](./RULE.md): separación de componentes por responsabilidad, App Router para rutas, Tailwind CSS, nombres en `camelCase`, hooks en `hooks/`, utilidades separadas, programación funcional y uso preferente de funciones flecha.
