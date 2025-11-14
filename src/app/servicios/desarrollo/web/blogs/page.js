
// --- 1. METADATOS DE LA PÁGINA ---
export const metadata = {
  title: "Servicio de Creación de Blogs Profesionales | JEG Dev Studios",
  description:
    "Servicio de desarrollo de blogs a medida. Creamos blogs profesionales en Next.js con CMS autoadministrable, optimizados para SEO y tu estrategia de contenidos.",
  keywords:
    "crear un blog profesional, servicio de desarrollo de blogs, desarrollo de blogs a medida, crear blog para empresa, blog con cms, blog en next.js",
  alternates: {
    canonical:
      "https://www.jegdevstudios.com/servicios/desarrollo/web/blogs",
  },
  openGraph: {
    title: "JEG Dev Studios | Servicio de Creación de Blogs Profesionales",
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
