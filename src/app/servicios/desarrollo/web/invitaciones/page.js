// --- 1. METADATOS DE LA PÁGINA ---
// Ruta: /servicios/desarrollo/web/invitaciones/page.jsx

// --- 1. METADATOS DE LA PÁGINA (ACTUALIZADOS) ---
export const metadata = {
  // TÍTULO MEJORADO: Ataca las keywords de alta intención
  title: "Invitaciones Digitales para Boda y XV Años | JEG Dev Studios",
  
  // DESCRIPCIÓN MEJORADA: Incluye todas las keywords
  description:
    "Servicio de creación de invitaciones digitales para Boda, XV Años y toda ocasión especial. Opciones en Google Sites ($299) e invitaciones digitales Canva ($399).",
  
  // KEYWORDS MEJORADAS:
  keywords:
    "creación de invitaciones digitales, invitaciones para boda, invitaciones para xv años, invitaciones digitales canva, invitaciones web, invitaciones para eventos, creador de invitaciones",
  
  alternates: {
    canonical:
      "https://www.jegdevstudios.com/servicios/desarrollo/web/invitaciones",
  },
  openGraph: {
    title: "JEG Dev Studios | Invitaciones Digitales para tu Evento Especial",
    description:
      "Diseñamos invitaciones web interactivas para Bodas, XV Años y más. Opciones en Google Sites y Canva. Haz tu evento inolvidable.",
    url: "https://www.jegdevstudios.com/servicios/desarrollo/web/invitaciones",
    images: [
      {
        url: "/img-SEO/og-background-serv-invitaciones.webp", // <-- DEBES CREAR ESTA IMAGEN OG
        width: 1200,
        height: 630,
        alt: "Servicio de Creación de Invitaciones Digitales Web",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

import InvitationsClient from "./InvitationsClient";

export default function DevWebPage() {
	return <InvitationsClient />;
}