import ClientOnly from '@/components/ClientOnly';
import BlogClient from './BlogClient';
import { getBlogPosts } from '@/lib/fetchRSS';

export const metadata = {
  title: "Blog de Tecnologías | JEG Dev Studios",
  description:
    "Descubre artículos sobre desarrollo web, apps móviles, software empresarial y tecnología en el blog de JEG Dev Studios.",
  keywords:
    "blog de tecnologías, desarrollo web, software, apps móviles, SEO, eventos tech y tendencias digitales",
  openGraph: {
    title: "Blog de Tecnologías | JEG Dev Studios",
    description:
      "Explora ideas, consejos y tendencias tecnológicas para empresas y emprendedores mexicanos.",
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

export const revalidate = 3600;

export default async function BlogPage() {
  let allBlogPosts = [];

  try {
    allBlogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Error al obtener los posts para la página del blog:", error);
  }

  // Si hay posts, genera el schema para el primero
  const firstPost = allBlogPosts[0];
  const blogPostingSchema = firstPost
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": firstPost.title,
        "description": firstPost.contentSnippet?.replace(/"/g, ''),
        "url": firstPost.link,
        "datePublished": new Date(firstPost.pubDate).toISOString(),
        "author": {
          "@type": "Organization",
          "name": "JEG Dev Studios"
        },
        "publisher": {
          "@type": "Organization",
          "name": "JEG Dev Studios",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.jegdevstudios.com/icons-SEO/favicon-96x96.png"
          }
        }
      }
    : null;

  return (
    <>
      {blogPostingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      )}
      <ClientOnly>
        <BlogClient posts={allBlogPosts} />
      </ClientOnly>
    </>
  );
}