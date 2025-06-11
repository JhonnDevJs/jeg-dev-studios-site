export const metadata = {
  title: "Blog | JEG Dev Studios",
  description:
    "Lee artículos, novedades y tutoriales sobre desarrollo web, software, aplicaciones, diseño UX/UI y SEO de JEG Dev Studios.",
  keywords:
    "blog, artículos, novedades, tutoriales, desarrollo web, software, apps, diseño, SEO, UX/UI, JEG Dev Studios",
  openGraph: {
    title: "Blog | JEG Dev Studios",
    description:
      "Lee artículos, novedades y tutoriales sobre desarrollo web, software, aplicaciones, diseño UX/UI y SEO de JEG Dev Studios.",
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

import BlogClient from './BlogClient';
import { getBlogPosts } from '@/lib/fetchRSS'; // Asegúrate que la ruta sea correcta

export const revalidate = 3600;

async function BlogPage() {
  let posts = [];

  try {
    const fetchedPosts = await getBlogPosts();
    if (Array.isArray(fetchedPosts)) {
      posts = fetchedPosts;
    } else {
      console.error("getBlogPosts no devolvió un array. Recibido:", fetchedPosts);
    }
  } catch (error) {
    //console.log('Posts para BlogClient (desde page.js):', JSON.stringify(posts, null, 2));
    console.error("Error al obtener las entradas del blog:", error);
  }

  return <BlogClient posts={posts} />;
}

export default BlogPage;