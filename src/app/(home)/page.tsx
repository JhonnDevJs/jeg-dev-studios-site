// Import hooks


// Import Custom Hooks


// Imports libs
import { getPageFaqs, getPageAssets } from "@/lib/data-service.";
import { getBlogPosts } from '@/lib/fetchRSS';

// Import Types
import { Post } from "@/types";

// Import Components

import HomeClient from "./homeClient";

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

	const faqs = await getPageFaqs("home");
	const assets = await getPageAssets("home");

  return <HomeClient posts={postsToShow} initialFaqs={faqs} assets={assets}/>;
}
