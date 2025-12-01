
// src/lib/fetchRSS.js
import Parser, { Item as RssParserItem } from 'rss-parser';

/**
 * Extends the base rss-parser Item type to include custom fields
 * that might be present in the feed, like 'media:thumbnail'.
 */
interface CustomItem extends RssParserItem {
  'media:thumbnail'?: {
    $: { url: string };
  };
}

// Initialize the parser with our custom item type
const parser = new Parser<{}, CustomItem>();
// Es una buena práctica usar variables de entorno para URLs configurables.
// Puedes definir BLOG_FEED_URL en tu archivo .env.local
const FEED_URL = process.env.BLOG_FEED_URL || 'https://blog.jegdevstudios.com/feeds/posts/default?alt=rss';

/**
 * Extrae la URL de la primera imagen del contenido HTML de un post.
 * @param {string} htmlContent - El contenido HTML del post.
 * @returns {string|null} La URL de la imagen o null si no se encuentra.
 */
const extractImageUrl = (htmlContent: string | undefined) => {
  if (!htmlContent) {
    return null;
  }
  // Usamos optional chaining (?.) por si match no encuentra coincidencias y devuelve null.
  // Usamos nullish coalescing (??) para devolver null si el grupo de captura no existe.
  return htmlContent.match(/<img[^>]+src="([^">]+)"/)?.[1] ?? null;
};

/**
 * Obtiene y parsea los posts de un feed RSS.
 * @param {number} [limit] - El número máximo de posts a devolver.
 * @returns {Promise<Array<Object>>} Una promesa que resuelve a un array de objetos de post.
 */
export const getBlogPosts = async (limit: number) => {
  console.log(`Intentando obtener el feed RSS desde: ${FEED_URL}`);
  try {
    const feed = await parser.parseURL(FEED_URL);
    
    // Usamos optional chaining y nullish coalescing para manejar el caso de que `feed.items` no exista.
    const allItems = feed?.items ?? [];

    // El método slice no da error si el final es mayor que la longitud, así que podemos simplificar.
    const limitedItems = limit > 0 ? allItems.slice(0, limit) : allItems;

    return limitedItems.map((item: CustomItem) => {
      // Lógica para obtener la imagen, priorizando y con fallbacks.
      const imageUrl = 
        extractImageUrl(item.content) ?? 
        item['media:thumbnail']?.$?.url ?? 
        item.enclosure?.url ?? 
        null;

      // Lógica simplificada para procesar categorías.
      const categories = (item.categories ?? [])
        .map(cat => (typeof cat === 'string' ? cat : (cat as { _: string })?._))
        .filter(Boolean); // Elimina valores nulos o indefinidos.

      return {
        id: item.guid ?? item.link,
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        imageUrl,
        categories,
        contentSnippet: item.contentSnippet,
        content: item.content,
      };
    });
  } catch (error) {
    console.error('Error al obtener o parsear el feed RSS:', error);    
    // Devolver un array vacío en caso de error es una buena práctica para evitar que la UI se rompa.
    return [];
  }
};
