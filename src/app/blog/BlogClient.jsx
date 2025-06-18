import Image from 'next/image';
import "./BlogClient.css"; // Asegúrate de que este archivo exista y contenga los estilos necesarios, como .text-bg-article

export default function BlogClient({ posts }) {
	if (!posts || !Array.isArray(posts)) {
		return (
			<div className="container pt-5 pb-5 text-white text-center">
				<h2 className="display-4 fw-bold mb-4">Blog</h2>
				<p className="lead">No se pudieron cargar las entradas del blog en este momento. Por favor, inténtalo de nuevo más tarde.</p>
			</div>
		);
	}

	if (posts.length === 0) {
		return (
			<div className="container pt-5 pb-5 text-white text-center">
				<h2 className="display-4 fw-bold mb-4">Blog</h2>
				<p className="lead">No hay entradas para mostrar.</p>
			</div>
		);
	}

	const firstPost = posts[0];
	const remainingPosts = posts.slice(1);

	return (
		<section className="container pt-5 pb-5">
			<h1 className="display-4 fw-bold pt-5 mb-4 text-center text-white">
				Conoce y aprende más con el blog de JEG Dev Studios
			</h1>
			<p className="lead text-center text-white mb-5"> {/* Aumenté el mb para más separación */}
				Aprende más y obten tips sobre desarrollo de sitios web, aplicaciones,
				software, diseño UX/UI y SEO
			</p>

			{/* <!-- Card grande para el primer post --> */}
			{firstPost && (
				<article className="card text-bg-article mb-5 shadow-lg"> {/* text-bg-article debe manejar el fondo y color de texto */}
					{firstPost.imageUrl && (
						<div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}> {/* Contenedor para aspect ratio */}
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
					{/* card-img-overlay necesita que la imagen esté presente o podría no verse como esperas */}
					{/* Asumimos que text-bg-article maneja el color del texto para que sea legible */}
					<div className={`card-img-overlay d-flex flex-column justify-content-end p-3 p-md-5 ${!firstPost.imageUrl ? 'position-relative' : ''}`}> {/* Padding de overlay ajustado */}
						<div className="d-flex flex-column p-2 p-md-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '0.3rem' }}> {/* Contenedor de texto flex y padding ajustado */}
							<h2 className="card-title fs-5 fs-sm-4 fs-md-1 fw-bold text-white">{firstPost.title}</h2> {/* Tamaño de fuente responsivo */}
							<div
								className="card-text lead mb-2 d-none d-md-block text-white" /* Ocultar en pantallas pequeñas, texto un poco más tenue */
								dangerouslySetInnerHTML={{
									__html: firstPost.contentSnippet || firstPost.content || "",
								}}
								// Aumentamos la altura máxima para el snippet del post destacado.
								style={{ maxHeight: '150px', overflow: 'hidden' }}
							/>
							<p className="card-text mb-3 text-white">
								<small>
									Publicado el {new Date(firstPost.pubDate).toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' })}
								</small>
							</p>
							<p className="card-text mb-2 d-none d-md-block">
								{firstPost.categories && firstPost.categories.length > 0 && (
									firstPost.categories.map((category, catIndex) => (
										<span
											key={catIndex}
											className="badge bg-light text-dark me-2 mb-1" // Badge claro para contraste en overlay oscuro
										>
											{category}
										</span>
									)))}
							</p>
							<a
								href={firstPost.link}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-light btn-xl-lg btn-sm mt-auto" // Botón claro para contraste
							>
								Leer artículo completo →
							</a>
						</div>
					</div>
				</article>
			)}

			{/* <!-- Grid para los posts restantes --> */}
			{remainingPosts.length > 0 && (
				<>
					{firstPost && <hr className="my-5 border-secondary" />} {/* Separador si hay post destacado y posts restantes */}
					<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
						{remainingPosts.map((post) => (
							<article key={post.id || post.link} className="col d-flex"> {/* Priorizar post.id si está disponible y es único */}
								<div
									className="card h-100 bg-transparent text-white shadow-lg d-flex flex-column" // d-flex y flex-column para estructura interna
									style={{ maxWidth: "28rem", margin: '0 auto' }} // Centrar cards si la columna es más ancha
								>
									{post.imageUrl && (
										<div style={{ width: "100%", aspectRatio: '16/9', position: 'relative' }}> {/* Contenedor para aspect ratio */}
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
										<h3 className="card-title fs-5 fw-semibold">{post.title}</h3> {/* Cambiado a h3 por semántica */}
										<p className="card-text text-white-75 small mb-2"> {/* texto un poco más tenue */}
											{new Date(post.pubDate).toLocaleDateString("es-ES", { day: 'numeric', month: 'short', year: 'numeric' })}
										</p>
										{post.categories && post.categories.length > 0 && (
											<div className="mb-2">
												{post.categories.map((category, catIndex) => (
													<span
														key={catIndex}
														className="badge bg-secondary me-1 mb-1" // Puedes usar otro color si prefieres
													>
														{category}
													</span>
												))}
											</div>
										)}

										<div
											className="card-text mb-3 blog-post-summary flex-grow-1" // flex-grow-1 para que ocupe espacio disponible
											dangerouslySetInnerHTML={{
												// Usamos contentSnippet si está disponible, sino content.
												// Asegúrate que estos campos tengan datos desde tu fetchRSS.js
												__html: post.contentSnippet || post.content || "No hay extracto disponible.",
											}}
										/>
										<a
											href={post.link}
											target="_blank"
											rel="noopener noreferrer"
											className="btn btn-outline-light mt-auto" // mt-auto para empujar el botón al final
										>
											Leer artículo completo →
										</a>
									</div>
								</div>
							</article>
						))}
					</div>
				</>
			)}
		</section>
	);
}
