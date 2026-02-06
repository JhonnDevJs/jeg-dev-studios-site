import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/fetchRSS";
import { Post } from "@/types";

const POSTS_TO_SHOW = 4;

// 3. Tipamos el argumento 'html' como string
function cleanHTML(html: string): string {
	if (!html || typeof html !== "string") return "";
	return html
		.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "") // Elimina <script>
		.replace(/on\w+="[^"]*"/gi, "") // Elimina eventos inline como onclick=""
		.replace(/javascript:/gi, ""); // Elimina javascript: en href
}

export default async function BlogSection() {
	let rawPosts: Post[] = [];
	try {
		rawPosts = await getBlogPosts(POSTS_TO_SHOW);
	} catch (error) {
		console.error("Error fetching blog posts in BlogSection:", error);
	}

	// Mapeo de datos (lógica movida desde HomeClient)
	const posts = rawPosts
		.map((post) => {
			if (post.title && post.link && post.pubDate) {
				return {
					...post,
					title: post.title,
					link: post.link,
					pubDate: post.pubDate,
					contentSnippet: post.excerpt,
					imageUrl: post.imageUrl ?? undefined,
					categories: (post as any).categories as string[] | undefined,
				};
			}
			return null;
		})
		.filter((post): post is NonNullable<typeof post> => post !== null);

	// Validación inicial
	if (!posts || !Array.isArray(posts) || posts.length === 0) {
		return (
			<section className="container mx-auto py-5 text-center text-white/50">
				<p className="lead">
					No hay entradas destacadas para mostrar en este momento.
				</p>
			</section>
		);
	}

	const mainPost = posts[0];
	const sidePosts = posts.slice(1, 4);

	return (
		<section className="w-full py-3 lg:py-4 xl:py-5 featured-blog-section">
			<h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
				Descubre temas interesantes en nuestro Blog
			</h2>

			<div className="flex flex-wrap">
				{/* Entrada Principal (Izquierda) */}
				{mainPost && (
					<div className="w-full lg:w-5/12 pr-0 lg:pr-4 pb-4 lg:pb-0 ">
						<article className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white transition-colors">
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
										className=""
									/>
								</div>
							)}
							<div className="flex flex-col p-4">
								<h3 className="text-xl font-bold mb-2">{mainPost.title}</h3>
								<p
									className="text-gray-500 dark:text-white/75 small mb-2"
								>
									Publicado el{" "}
									{new Date(mainPost.pubDate).toLocaleDateString("es-ES", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</p>
								{/* Al haber tipado 'BlogPost', TypeScript ya sabe que 'categories' es un string[].
                   Por tanto, 'category' dentro del map se infiere automáticamente como string.
                */}
								{mainPost.categories && mainPost.categories.length > 0 && (
									<div className="mb-2">
										{mainPost.categories.map((category, catIndex) => (
											<span
												key={catIndex}
												className="inline-block bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-white text-xs font-semibold mr-1 mb-1 px-2.5 py-0.5 rounded-full"
											>
												{category}
											</span>
										))}
									</div>
								)}
								<div
									className="mb-3 flex-grow"
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
									className="inline-block bg-blue-600 text-white hover:bg-blue-700 dark:border dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black mt-auto self-start px-4 py-2 rounded-md text-sm font-semibold transition-colors"
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
					<div className="w-full lg:w-7/12">
						{sidePosts.map((post, index) => (
							<article
								key={post.id || post.link}
								className={`flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white transition-colors ${index === sidePosts.length - 1 ? "mb-0" : "mb-4"}`}
							>
								{post.imageUrl && (
									<div className="relative h-48 w-full md:w-48 md:h-auto shrink-0">
										<Image
											src={post.imageUrl}
											alt={`Imagen para ${post.title}`}
											title={`Imagen para ${post.title}`}
											fill
											sizes="(max-width: 767px) 100vw, 270px"
											className="object-cover"
										/>
									</div>
								)}
								<div className="p-3 flex flex-col flex-grow">
									<h4 className="text-base font-bold mb-1">{post.title}</h4>
									<p
										className="text-sm text-gray-500 dark:text-white/75 small mb-1"
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
													className="inline-block bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-white text-xs font-semibold mr-1 mb-1 px-2 py-0.5 rounded-full"
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
										className="inline-block text-xs font-semibold border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-auto self-start px-3 py-1.5 rounded-md transition-colors"
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