import HomeClient from "./homeClient";
import { getBlogPosts } from '@/lib/fetchRSS';
import { Post } from "@/types";

export const revalidate = 3600;

const POSTS_TO_SHOW_ON_HOME = 4;

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
