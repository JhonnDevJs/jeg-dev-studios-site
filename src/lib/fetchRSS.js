
// src/lib/fetchRSS.js
import Parser from 'rss-parser';

const parser = new Parser();
// Es una buena práctica usar variables de entorno para URLs configurables.
// Puedes definir BLOG_FEED_URL en tu archivo .env.local
const FEED_URL = process.env.BLOG_FEED_URL || 'https://blog.jegdevstudios.com/feeds/posts/default?alt=rss';

/**
 * Extrae la URL de la primera imagen del contenido HTML de un post.
 * @param {string} htmlContent - El contenido HTML del post.
 * @returns {string|null} La URL de la imagen o null si no se encuentra.
 */
function extractImageUrl(htmlContent) {
  if (!htmlContent) return null;
  const imgTagMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : null;
}

/**
 * Obtiene y parsea los posts de un feed RSS.
 * @param {number} [limit] - El número máximo de posts a devolver.
 * @returns {Promise<Array<Object>>} Una promesa que resuelve a un array de objetos de post.
 */
export async function getBlogPosts(limit) {
  console.log(`Intentando obtener el feed RSS desde: ${FEED_URL}`);
  try {
    const feed = await parser.parseURL(FEED_URL);
    let items = feed.items || []; // Asegurarse de que items sea un array

    if (limit && typeof limit === 'number' && limit > 0 && items.length > 0) {
      items = items.slice(0, limit);
    }

    return items.map(item => ({
      id: item.guid || item.link, 
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      imageUrl: extractImageUrl(item.content) || (item['media:thumbnail'] && item['media:thumbnail'].$.url) || (item.enclosure && item.enclosure.url) || null,
      categories: (item.categories && Array.isArray(item.categories))
        ? item.categories.map(cat => {
            if (typeof cat === 'string') return cat;
            if (typeof cat === 'object' && cat !== null && typeof cat._ === 'string') return cat._; // Común en rss-parser para texto de elemento con atributos
            return 'Categoría Desconocida'; // Fallback
          }).filter(cat => cat !== 'Categoría Desconocida') // Opcional: filtrar fallbacks
        : [],
      contentSnippet: item.contentSnippet, // Asegúrate que item.contentSnippet exista en el feed parseado
      content: item.content, 
    }));
  } catch (error) {
    console.error('Error al obtener o parsear el feed RSS:', error);
    return []; // Devuelve un array vacío en caso de error para evitar que la app rompa.
  }
}
