import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'mediaThumbnail'],
      'enclosure',
    ],
  }
});

const FEED_URL = 'https://jegdevstudios.blogspot.com/feeds/posts/default?alt=rss';

export async function getBlogPosts() {
  if (FEED_URL === 'URL_DE_TU_FEED_RSS_DE_BLOGGER_AQUI') {
    console.error("ERROR: La FEED_URL en src/lib/fetchRSS.js no ha sido reemplazada. Por favor, actualízala con la URL de tu feed de Blogger.");
    return [];
  }

  console.log(`Intentando obtener el feed RSS desde: ${FEED_URL}`);
  try {
    const feed = await parser.parseURL(FEED_URL);

    if (feed && Array.isArray(feed.items)) {
      return feed.items.map(item => {
        let imageUrl = null;

        if (item.mediaThumbnail && item.mediaThumbnail.$ && item.mediaThumbnail.$.url) {
          imageUrl = item.mediaThumbnail.$.url;
        }
        else if (item.enclosure && item.enclosure.url && item.enclosure.type && item.enclosure.type.startsWith('image')) {
          imageUrl = item.enclosure.url;
        }
        else {
          const contentHtml = item.content;
          if (contentHtml && typeof contentHtml === 'string') {
            const match = contentHtml.match(/<img[^>]+src="([^">]+)"/);
            if (match && match[1]) {
              imageUrl = match[1];
            }
          }
        }

        if (imageUrl) {
          //imageUrl = imageUrl.replace(/\/[swh][\d-]+(?:-c)?(?:-rw)?\//, '/s1600/');
          imageUrl = imageUrl.replace(/\/[swh][\d\w-]+(?:-c)?(?:-rw)?\//, '/s0/');
        }

        return {
          title: item.title,
          link: item.link,
          pubDate: item.isoDate || item.pubDate,
          content: item.content,
          contentSnippet: item.contentSnippet || item.title,
          guid: item.guid,
          imageUrl: imageUrl,
        };
      });
    }
    console.warn('El feed RSS no contiene items o no es un array:', feed);
    return [];
  } catch (error) {
    console.error(`Error al obtener o parsear el feed RSS desde ${FEED_URL}:`, error);
    return [];
  }
}
