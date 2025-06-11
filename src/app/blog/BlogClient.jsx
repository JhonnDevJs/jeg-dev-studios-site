import Image from 'next/image';
import "./BlogClient.css";

export default function BlogClient({ posts }) {
  if (!posts || !Array.isArray(posts)) {
    return (
      <div className="container pt-5 pb-5 text-white text-center">
        <h1 className="display-4 fw-bold mb-4">Blog</h1>
        <p className="lead">No se pudieron cargar las entradas del blog en este momento. Por favor, inténtalo de nuevo más tarde.</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="container pt-5 pb-5 text-white text-center">
        <h1 className="display-4 fw-bold mb-4">Blog</h1>
        <p className="lead">No hay entradas para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="container pt-5 pb-5">
      <h1 className="display-4 fw-bold pt-5 mb-4 text-center text-white">Aprende más con nuestro blog de JEG Dev Studios</h1>{" "}
      {/* Título principal con Bootstrap y texto blanco, quité mt-5 para consistencia con mensajes de error */}
      <p className="lead text-center text-white mb-4">Aprende más y obten tips sobre desarrollo de sitios web, aplicaciones, software y diseño UX/UI</p>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {" "}
        {/* Bootstrap grid para mostrar 2 tarjetas por fila en md y superior */}
        {posts.map((post) => (
          <div key={post.link || post.guid || post.title} className="col">
            <div
              className="card h-100 bg-transparent text-white shadow-lg"
              style={{ maxWidth: "28rem" }}
            >
              {" "}
              {/* Corregido: bg-transparent, y text-white para consistencia */}
              {post.imageUrl && (
                <div style={{ width: "100%" }}>
                  {" "}
                  {/* Contenedor para asegurar que la imagen no exceda el ancho de la tarjeta */}
                  <Image
                    className="card-img-top"
                    src={post.imageUrl}
                    alt={`Imagen para ${post.title}`}
                    width={16}
                    height={9}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="card-body d-flex flex-column">
                {" "}
                {/* card-body y flex para alinear el botón abajo */}
                <h2 className="card-title fs-5 fw-semibold">{post.title}</h2>
                <p className="card-text text-white small mb-2">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>
                <div
                  className="card-text mb-3 blog-post-summary "
                  dangerouslySetInnerHTML={{
                    __html: post.contentSnippet || post.content || "",
                  }}
                />
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light mt-auto" // mt-auto para empujar el botón al final si la tarjeta es flex
                >
                  Leer artículo completo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
