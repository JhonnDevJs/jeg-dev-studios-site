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
