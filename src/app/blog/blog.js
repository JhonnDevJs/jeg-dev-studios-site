export const metadata = {
  title: "Blog | JEG Dev Studios",
  description:
    "Lee artículos, novedades y tutoriales sobre desarrollo web, software, apps y videojuegos de JEG Dev Studios.",
  keywords:
    "blog, artículos, novedades, tutoriales, desarrollo web, software, apps, videojuegos, JEG Dev Studios",
  openGraph: {
    title: "Blog | JEG Dev Studios",
    description:
      "Lee artículos, novedades y tutoriales sobre desarrollo digital en JEG Dev Studios.",
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
};

import BlogClient from "./BlogClient";

export default function BlogPage() {
  return <BlogClient />;
}
