'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import FAQ from "@/components/FAQ";
import CTA from '@/components/CTA';
import "./BlogClient.css";

const faqs = [
  {
    question: "¿Qué tipo de contenido publican en el blog de JEG Dev Studios?",
    answer:
      "Publicamos artículos sobre desarrollo web, diseño UX/UI, apps móviles, software empresarial, SEO, tendencias digitales y herramientas útiles para emprendedores y empresas mexicanas.",
  },
  {
    question: "¿A quién va dirigido el blog?",
    answer:
      "Está dirigido a emprendedores, negocios, profesionistas del área digital y cualquier persona interesada en la tecnología, innovación y desarrollo digital en México.",
  },
  {
    question: "¿Con qué frecuencia publican nuevos artículos?",
    answer:
      "Publicamos nuevos contenidos de forma semanal o quincenal, dependiendo de la relevancia de los temas y los avances tecnológicos del momento.",
  },
  {
    question: "¿Qué beneficios ofrece leer el blog de JEG Dev Studios?",
    answer:
      "Obtendrás información útil para tomar mejores decisiones en tus proyectos digitales, ideas para mejorar tu presencia online y consejos sobre herramientas, desarrollo y estrategias digitales.",
  },
  {
    question: "¿Puedo sugerir un tema para el blog?",
    answer:
      "Claro. Puedes escribirnos desde la página de contacto y proponer un tema o enviarnos tus dudas. Si es relevante, lo abordaremos en un próximo artículo.",
  },
  {
    question: "¿Tienen un boletín para recibir los artículos?",
    answer:
      "Sí. Puedes suscribirte a nuestro boletín para recibir los artículos más recientes directamente en tu correo electrónico junto con consejos y noticias relevantes.",
  },
];


// ...existing imports y faqs...

export default function BlogClient({ posts }) {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!posts || !Array.isArray(posts)) {
    return (
      <div className="container pt-5 pb-5 text-white text-center">
        <h2 className="display-4 fw-bold mb-4">Blog de desarrollo web, apps y tecnología</h2>
        <p className="lead">No se pudieron cargar las entradas del blog en este momento. Por favor, inténtalo de nuevo más tarde.</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="container pt-5 pb-5 text-white text-center">
        <h2 className="display-4 fw-bold mb-4">Blog de desarrollo web, apps y tecnología</h2>
        <p className="lead">No hay entradas para mostrar.</p>
      </div>
    );
  }

  if (!mounted) return null;

  // Filtrado de posts por título, categoría o contenido
  const filteredPosts = posts.filter(post => {
    const searchLower = search.toLowerCase();
    const titleMatch = post.title?.toLowerCase().includes(searchLower);
    const categoryMatch = post.categories?.some(cat =>
      cat.toLowerCase().includes(searchLower)
    );
    const contentMatch =
      post.contentSnippet?.toLowerCase().includes(searchLower) ||
      post.content?.toLowerCase().includes(searchLower);

    return titleMatch || categoryMatch || contentMatch;
  });

  // Secciones y categorías populares
  const categoriasPopulares = [
    { key: "Desarrollo Web", label: "Desarrollo Web" },
    { key: "Aplicaciones Móviles", label: "Aplicaciones Móviles" },
    { key: "Software Empresarial", label: "Software Empresarial" },
    { key: "Diseño UX/UI", label: "Diseño UX/UI" },
    { key: "SEO y Marketing Digital", label: "SEO y Marketing Digital" },
    { key: "Emprendimiento y Negocios", label: "Emprendimiento y Negocios" },
  ];

  // Helper para renderizar cards
  function BlogCards({ posts }) {
    return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {posts.map((post) => (
          <article key={post.id || post.link} className="col d-flex">
            <div className="card h-100 bg-transparent text-white shadow-lg d-flex flex-column" style={{ maxWidth: "28rem", margin: '0 auto' }}>
              {post.imageUrl && (
                <div style={{ width: "100%", aspectRatio: '16/9', position: 'relative' }}>
                  <Image
                    className="card-img-top"
                    src={post.imageUrl}
                    alt={`Imagen para ${post.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="card-body d-flex flex-column">
                <h3 className="card-title fs-5 fw-semibold">{post.title}</h3>
                <p className="card-text text-white-75 small mb-2">
                  {new Date(post.pubDate).toLocaleDateString("es-ES", { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
                {post.categories && post.categories.length > 0 && (
                  <div className="mb-2">
                    {post.categories.map((category, i) => (
                      <span key={i} className="badge bg-secondary me-1 mb-1">{category}</span>
                    ))}
                  </div>
                )}
                <div
                  className="card-text mb-3 blog-post-summary flex-grow-1"
                  dangerouslySetInnerHTML={{ __html: post.contentSnippet || post.content || "No hay extracto disponible." }}
                />
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mt-auto">
                  Leer artículo completo →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }

  // Últimos artículos
  const firstPost = filteredPosts[0];
  const nextThreePosts = filteredPosts.slice(1, 4);

  // Posts por categoría popular
  const postsPorCategoria = (categoria) =>
    filteredPosts.filter(post =>
      post.categories?.some(cat =>
        cat.toLowerCase().includes(categoria.toLowerCase())
      )
    );

  // Consejos y tendencias digitales
  const consejosPosts = filteredPosts.filter(post =>
    post.categories?.some(cat =>
      ["tendencias", "consejos", "tips", "digital"].some(keyword =>
        cat.toLowerCase().includes(keyword)
      )
    ) ||
    post.title?.toLowerCase().includes("tendencia") ||
    post.title?.toLowerCase().includes("consejo")
  );

  return (
    <>
      <section className="container pt-5 pb-5">
        <h1 className="display-4 fw-bold pt-5 mb-4 text-center text-white">
          Blog de desarrollo web, apps, software empresarial y tecnología
        </h1>
        <p className="lead text-center text-white mb-5">
          Explora ideas, consejos prácticos y tendencias tecnológicas que transforman negocios. Aprende sobre desarrollo digital, diseño UX/UI, SEO, software personalizado y más, con contenido pensado para emprendedores y empresas en México.
        </p>

        {/* Buscador */}
        <div className="mb-5 d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-100 w-md-50"
            style={{ maxWidth: 500 }}
            placeholder="Buscar por título, categoría o contenido..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Buscar artículos del blog"
          />
        </div>

        {/* Últimos artículos */}
        <h2 className="text-white mt-5 mb-3">Últimos artículos</h2>
        <p className="text-white mb-4">Descubre los artículos más recientes publicados en nuestro blog.</p>
        {firstPost && (
          <article className="card text-bg-article mb-5 shadow-lg">
            {firstPost.imageUrl && (
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                <Image
                  src={firstPost.imageUrl}
                  alt={`Imagen destacada para ${firstPost.title}`}
                  className="card-img"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            )}
            <div className={`card-img-overlay d-flex flex-column justify-content-end p-3 p-md-5 ${!firstPost.imageUrl ? 'position-relative' : ''}`}>
              <div className="d-flex flex-column p-2 p-md-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '0.3rem' }}>
                <h2 className="card-title fs-5 fs-sm-4 fs-md-1 fw-bold text-white">{firstPost.title}</h2>
                <div
                  className="card-text lead mb-2 d-none d-md-block text-white"
                  dangerouslySetInnerHTML={{ __html: firstPost.contentSnippet || firstPost.content || "" }}
                  style={{ maxHeight: '150px', overflow: 'hidden' }}
                />
                <p className="card-text mb-3 text-white">
                  <small>
                    Publicado el {new Date(firstPost.pubDate).toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' })}
                  </small>
                </p>
                <p className="card-text mb-2 d-none d-md-block">
                  {firstPost.categories && firstPost.categories.length > 0 && firstPost.categories.map((category, i) => (
                    <span key={i} className="badge bg-light text-dark me-2 mb-1">{category}</span>
                  ))}
                </p>
                <a href={firstPost.link} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-xl-lg btn-sm mt-auto">
                  Leer artículo completo →
                </a>
              </div>
            </div>
          </article>
        )}
        {nextThreePosts.length > 0 && <BlogCards posts={nextThreePosts} />}

        {/* Categorías populares */}
        <h2 className="text-center text-white mt-5 mb-3">Categorías populares</h2>
        <p className="text-center text-white mb-4">Explora artículos destacados por categoría.</p>
        {categoriasPopulares.map(cat => {
          const postsCat = postsPorCategoria(cat.key);
          if (postsCat.length === 0) return null;
          return (
            <div key={cat.key} className="mb-5">
              <h3 className="text-white">{cat.label}</h3>
              <p className="text-white mb-3">Artículos sobre {cat.label.toLowerCase()}.</p>
              <BlogCards posts={postsCat} />
            </div>
          );
        })}

        {/* Consejos y tendencias digitales */}
        <h2 className="text-white mt-5 mb-3">Consejos y tendencias digitales</h2>
        <p className="text-white mb-4">Mantente actualizado con los mejores consejos y tendencias del mundo digital.</p>
        {consejosPosts.length > 0 ? <BlogCards posts={consejosPosts} /> : <p className="text-white">No hay artículos en esta sección.</p>}

      </section>
      <FAQ faqs={faqs} />
      <CTA />
    </>
  );
}