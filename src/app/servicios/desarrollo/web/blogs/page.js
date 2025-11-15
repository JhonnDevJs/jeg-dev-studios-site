
// --- 1. METADATOS DE LA PÁGINA ---
export const metadata = {
  // Resuelve el error de <title> tag
  title: "Servicio de Desarrollo de Blogs con CMS en Next.js | JEG Dev Studios",
  description:
    "Servicio de desarrollo de blogs a medida. Creamos un blog para tu empresa con un CMS (Blogger, WordPress o Next.js/Strapi). Optimizado para SEO y marketing de contenidos.",
  keywords:
    "servicio de desarrollo de blogs, crear blog para empresa, blog con cms, blog en next.js, desarrollo de blogs a medida, crear un blog profesional",
  alternates: {
    canonical:
      "https://www.jegdevstudios.com/servicios/desarrollo/web/blogs",
  },
  openGraph: {
    title: "JEG Dev Studios | Servicio de Desarrollo de Blogs Profesionales",
    description:
      "Transforma tu estrategia de contenidos. Ofrecemos el servicio de desarrollo de blogs a medida, optimizados para SEO y autoadministrables.",
    url: "https://www.jegdevstudios.com/servicios/desarrollo/web/blogs",
    images: [
      {
        url: "/img-SEO/og-background-serv-blogs.webp",
        width: 1200,
        height: 630,
        alt: "Servicio de Creación de Blogs Profesionales",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

import BlogsClient from './BlogsClient'

export default function DevWebPage() {
  return <BlogsClient />;
}
