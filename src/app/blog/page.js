export const metadata = {
  title: "Blog de Desarrollo Web, Apps y SEO | JEG Dev Studios",
  description:
    "Explora nuestro blog con tips de desarrollo web, apps y SEO para emprendedores y negocios que buscan crecer en el mundo digital.",
  keywords:
    "blog desarrollo web México, noticias desarrollo digital, tendencias apps móviles, software empresarial México, consejos desarrollo web, tutoriales programación, innovación tecnológica México, recursos desarrollo software, diseño web, marketing digital México, tips SEO",
  openGraph: {
    title: "Blog | JEG Dev Studios",
    description:
      "Aprende sobre desarrollo web, apps y software. Consejos de UX, SEO y tecnología para potenciar tu negocio digital.",
    url: "https://www.jegdevstudios.com/blog",
    siteName: "JEG Dev Studios",
    images: [
      {
        url: "/img-SEO/metabackground.webp",
        width: 1200,
        height: 630,
        alt: "Blog JEG Dev Studios",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jegdevstudios.com/blog",
  },
};

import ClientOnly from '@/components/ClientOnly';
import BlogClient from './BlogClient';
import { getBlogPosts } from '@/lib/fetchRSS';

export const revalidate = 3600;

export default async function BlogPage() {
  let allBlogPosts = [];

  try {
    allBlogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Error al obtener los posts para la página del blog:", error);
  }

  return (
    <ClientOnly>
      <BlogClient posts={allBlogPosts} />
    </ClientOnly>
  );
}
