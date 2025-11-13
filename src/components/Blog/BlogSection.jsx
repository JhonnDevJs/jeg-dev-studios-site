"use client";
import Image from "next/image";
import Link from "next/link";

function cleanHTML(html) {
	if (!html || typeof html !== "string") return "";
	return html
		.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "") // Elimina <script>
		.replace(/on\w+="[^"]*"/gi, "") // Elimina eventos inline como onclick=""
		.replace(/javascript:/gi, ""); // Elimina javascript: en href
}

export default function BlogSection({ posts }) {
	if (!posts || !Array.isArray(posts) || posts.length === 0) {
		return (
			<section className="container py-5 text-center text-white-50">
				{/* Ajusta text-white-50 si el fondo de tu página es oscuro, o usa text-muted si es claro */}
				<p className="lead">
					No hay entradas destacadas para mostrar en este momento.
				</p>
			</section>
		);
	}

	const mainPost = posts[0];
	const sidePosts = posts.slice(1, 4);

	const cardThemeClasses = "bg-transparent text-white";

	return (
		<section className="container-fluid p-3 p-lg-4 p-xl-5 featured-blog-section gradient-effect-x">
			<h2 className="display-5 fw-bold mb-5 text-center text-white">
				{" "}
				{/* Asumiendo texto blanco para el título de sección */}
				Descubre temas interesantes en nuestro Blog
			</h2>

			<div className="row g-4 g-lg-5">
				{/* Entrada Principal (Izquierda) */}
				{mainPost && (
					<div className="col-lg-5">
						<article className={`card shadow-lg ${cardThemeClasses}`}>
							{mainPost.imageUrl && (
								<div
									style={{
										position: "relative",
										width: "100%",
										aspectRatio: "16/9",
									}}
								>
									<Image
										src={mainPost.imageUrl}
										alt={`Imagen para ${mainPost.title}`}
										title={`Imagen para ${mainPost.title}`}
										fill
										sizes="(max-width: 991px) 100vw, 42vw"
										style={{ objectFit: "cover" }}
										className="card-img-top"
									/>
								</div>
							)}
							<div className="card-body d-flex flex-column p-4">
								<h3 className="card-title h4 fw-bold mb-2">{mainPost.title}</h3>
								<p
									className={`card-text ${
										cardThemeClasses.includes("text-white")
											? "text-white-75"
											: "text-muted"
									} small mb-2`}
								>
									Publicado el{" "}
									{new Date(mainPost.pubDate).toLocaleDateString("es-ES", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</p>
								{mainPost.categories && mainPost.categories.length > 0 && (
									<div className="mb-2">
										{mainPost.categories.map((category, catIndex) => (
											<span
												key={catIndex}
												className="badge bg-secondary me-1 mb-1"
											>
												{category}
											</span>
										))}
									</div>
								)}
								<div
									className="card-text mb-3 flex-grow-1"
									dangerouslySetInnerHTML={{
										__html: cleanHTML(
											mainPost.contentSnippet || mainPost.content || ""
										),
									}}
									style={{ maxHeight: "6rem", overflow: "hidden" }}
								/>
								<Link
									href={mainPost.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`btn ${
										cardThemeClasses.includes("text-white")
											? "btn-outline-light" // Cambiado a outline-light
											: "btn-primary"
									} mt-auto align-self-start`}
									aria-label={`Leer artículo completo sobre ${mainPost.title}`}
									title={`Leer artículo completo sobre ${mainPost.title}`}
									tabIndex={0}
								>
									Leer artículo completo →
								</Link>
							</div>
						</article>
					</div>
				)}

				{/* Entradas Secundarias (Derecha, Apiladas) */}
				{sidePosts.length > 0 && (
					<div className="col-lg-7">
						{sidePosts.map((post, index) => (
							<article
								key={post.id || post.link || index} // <--- AÑADIR KEY AQUÍ
								className={`d-flex flex-column flex-md-row shadow-lg ${cardThemeClasses} ${
									index === sidePosts.length - 1 ? "mb-0" : "mb-4"
								}`}
								style={{ borderRadius: "0.375rem", overflow: "hidden" }}
							>
								{post.imageUrl && (
									<div className="side-post-image-container">
										{" "}
										{/* Nueva clase */}
										<Image
											src={post.imageUrl}
											alt={`Imagen para ${post.title}`}
											title={`Imagen para ${post.title}`}
											fill
											sizes="(max-width: 767px) 100vw, 270px"
											style={{ objectFit: "cover" }}
										/>
									</div>
								)}
								<div className="p-3 d-flex flex-column flex-grow-1">
									<h4 className="h6 fw-bold mb-1">{post.title}</h4>
									<p
										className={`${
											cardThemeClasses.includes("text-white")
												? "text-white-75"
												: "text-muted"
										} small mb-1`}
									>
										{new Date(post.pubDate).toLocaleDateString("es-ES", {
											day: "numeric",
											month: "short",
											year: "numeric",
										})}
									</p>
									{post.categories && post.categories.length > 0 && (
										<div className="mb-1">
											{post.categories.map((category, catIndex) => (
												<span
													key={catIndex}
													// Usamos un badge más pequeño para los side posts
													className="badge rounded-pill bg-secondary text-white me-1 mb-1" // Ajusta color y estilo
												>
													{category}
												</span>
											))}
										</div>
									)}
									<div
										className="small mb-2 blog-post-summary"
										dangerouslySetInnerHTML={{
											__html: cleanHTML(
												post.contentSnippet || post.content || ""
											),
										}}
										style={{
											maxHeight: "3.6em",
											overflow: "hidden",
											lineHeight: "1.2em",
										}}
									/>
									<Link
										href={post.link}
										target="_blank"
										rel="noopener noreferrer"
										className={`btn btn-sm ${
											cardThemeClasses.includes("text-white")
												? "btn-outline-light"
												: "btn-outline-primary"
										} mt-auto align-self-start`}
										aria-label={`Leer más sobre ${post.title}`}
										title={`Leer más sobre ${post.title}`}
										tabIndex={0}
									>
										Leer más →
									</Link>
								</div>
							</article>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
