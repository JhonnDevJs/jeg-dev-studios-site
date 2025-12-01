import HomeClient from "./homeClient";
import { getBlogPosts } from '@/lib/fetchRSS';

export const revalidate = 3600;

const POSTS_TO_SHOW_ON_HOME = 4;

interface Post {
  slug?: string; // Was missing, now optional
  title?: string;
  date?: string; // Was missing, now optional
  link?: string;
  pubDate?: string;
  imageUrl?: string; // Usaremos imageUrl para consistencia
  excerpt?: string; // Renamed from contentSnippet
}

export default async function Home() {
  let postsToShow: Post[] = [];
  try {
    // Llama a getBlogPosts con el límite deseado
    postsToShow = await getBlogPosts(POSTS_TO_SHOW_ON_HOME);
  } catch (error) {
    // Aunque getBlogPosts ya maneja errores internos, puedes tener un catch aquí por si acaso.
    console.error("Error al obtener posts para HomePage:", error);
    postsToShow = []; // Asegúrate de que postsToShow sea un array
  }

  return <HomeClient posts={postsToShow} />;
}
