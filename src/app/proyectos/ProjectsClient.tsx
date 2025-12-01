"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProjectCard from "@/components/Cards/ProjectCard";
import DesignProjectCard from "@/components/Cards/DesignProjectCard";
import CTA from "@/components/Cta/CTA";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Projects.css";

interface FaqItem {
	question: string;
	answer: string;
}

// 1. Definimos la interfaz para un objeto de Proyecto
interface Project {
	id: string;
	image: string;
	category: string;
	title: string;
	description: string;
	technologies: string[];
	link?: string;
	// Añade aquí cualquier otra propiedad que venga de Firestore
}

const faqs: FaqItem[] = [
	{
		question: "¿Los proyectos del portafolio son de clientes reales?",
		answer:
			"Sí, la mayoría de los proyectos que mostramos son trabajos realizados para clientes reales. También incluimos algunos proyectos internos que desarrollamos para explorar nuevas tecnologías y demostrar nuestras capacidades.",
	},
	{
		question: "¿Por qué no veo proyectos en algunas categorías?",
		answer:
			"Nuestro portafolio está en constante actualización. Si una categoría aparece vacía, significa que estamos preparando los casos de estudio de nuestros proyectos más recientes en esa área. ¡Vuelve pronto para ver las novedades!",
	},
	{
		question: "Me gusta un proyecto, ¿pueden hacer algo similar para mí?",
		answer:
			"¡Claro! El portafolio es una excelente referencia para que nos muestres qué estilo o funcionalidades te interesan. Podemos tomarlo como punto de partida para crear una solución 100% personalizada para tu negocio.",
	},
];

function ProjectsClient() {
	// 2. Tipamos el estado para que sea un diccionario de arrays de Proyectos
	const [projectsByCategory, setProjectsByCategory] = useState<Record<string, Project[]>>({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			setLoading(true);
			try {
				// 1. Obtener los datos de los proyectos desde Firestore
				const querySnapshot = await getDocs(collection(db, "projects"));
				const projectsData = querySnapshot.docs.map((doc) => ({ // TypeScript ahora sabe que esto puede tener cualquier propiedad
					id: doc.id,
					...doc.data(),
				})) as Project[]; // Forzamos el tipado a nuestro array de Proyectos

				// 2. Asignar la URL de la imagen directamente desde los datos de Firestore
				const projectsWithCorrectedImages = projectsData.map((project: Project) => {
					let imageUrl = project.image || "/placeholder.png";

					// Si la imagen es de Google Drive, la transformamos a un enlace directo.
					if (imageUrl.includes("drive.google.com/file/d/")) {
						try {
							const fileId = imageUrl.split("/d/")[1].split("/")[0];
							imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
						} catch (e) {
							console.error("Could not parse Google Drive URL:", project.image);
							imageUrl = "/placeholder.png"; // Volvemos al placeholder si falla
						}
					}

					return { ...project, image: imageUrl }; // Sobrescribimos la propiedad 'image'
				});

				// 3. Agrupar proyectos por categoría
				const groupedProjects = projectsWithCorrectedImages.reduce(
					(acc: Record<string, Project[]>, project: Project) => {
						const category = project.category || "web"; // Categoría por defecto
						if (!acc[category]) acc[category] = [];
						acc[category].push(project);
						return acc;
					},
					{} // El tipo del acumulador (acc) ahora está definido
				);

				setProjectsByCategory(groupedProjects);
			} catch (error) {
				console.error("Error fetching projects data: ", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	const [activeCategory, setActiveCategory] = useState("web");
	// 3. Tipamos la referencia para que apunte a un elemento de navegación HTML
	const navRef = useRef<HTMLElement>(null);
	const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

	const categories = [
		{ id: "web", title: "Desarrollo Web" },
		{ id: "mobile", title: "Aplicaciones Móviles" },
		{ id: "software", title: "Software" },
		{ id: "design", title: "Diseño" },
		{ id: "seo", title: "SEO" },
	];

	const activeProjects: Project[] = projectsByCategory[activeCategory] || [];

	useEffect(() => {
		if (navRef.current) {
			// 1. Especificamos que el elemento buscado es un HTMLElement
			const activeButton = navRef.current.querySelector<HTMLElement>(
				`button[data-category-id="${activeCategory}"]`
			);
			if (activeButton) {
				// Ahora TypeScript sabe que offsetWidth, offsetHeight y offsetLeft existen
				setIndicatorStyle({
					width: activeButton.offsetWidth,
					height: activeButton.offsetHeight,
					transform: `translateX(${activeButton.offsetLeft}px)`,
				});
			}
		}
	}, [activeCategory]);

	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-projects" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-projects" />
			<section className="__image-background-sections flex justify-center items-center w-full p-0">
				<Image
					src="/banners/Christmas/Proyectos.webp"
					alt="Nuestra colección de proyectos en JEG Dev Studios"
					width={2000}
					height={600}
					className="w-full h-auto"
				/>
			</section>
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-4 xl:p-20 gap-3">
				<article className="container text-center text-white">
					<h1 className="text-5xl md:text-7xl font-extrabold">
						Portafolio de Proyectos
					</h1>
					<p
						className="mt-4 mx-auto text-base md:text-lg text-white/50"
						style={{ maxWidth: "48rem" }}
					>
						Explora una colección diversa de proyectos que abarcan desarrollo
						web, aplicaciones móviles, software, SEO y diseño. Cada proyecto
						muestra nuestro enfoque en la innovación y la calidad.
					</p>
					{/* Menú de navegación por categorías */}
					<nav
						ref={navRef}
						className="relative flex flex-wrap justify-center md:justify-start mt-5 gap-2"
					>
						<div className="absolute top-0 left-0 h-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-in-out" style={indicatorStyle} />
						{categories.map((category) => (
							<button
								key={category.id}
								data-category-id={category.id}
								type="button"
								className={`relative z-10 px-4 py-2 text-lg font-bold shadow-lg rounded-md transition-colors duration-300 ${activeCategory === category.id ? "text-white" : "text-gray-300 hover:text-white"
									}`}
								onClick={() => setActiveCategory(category.id)}
							>
								{category.title}
							</button>
						))}
					</nav>
				</article>
			</section>

			{/* Sección de Proyectos Activos */}
			{loading ? (
				<p className="text-xl text-white/50 text-center py-10">
					Cargando los proyectos disponibles..
				</p>
			) : (
				<section className="flex flex-col justify-center items-center text-center text-white w-full p-4 xl:p-20 gap-3 gradient-effect-x">
					<article className="container">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{activeProjects.length > 0 ? (
								activeProjects.map((project: Project) => {
									// 2. Aseguramos que el link siempre sea un string para cumplir con el tipo del componente hijo
									const projectWithRequiredLink = {
										...project,
										link: project.link || "#", // Proporcionamos un valor por defecto
									};
									return activeCategory === "design" ? (
										<DesignProjectCard key={project.id} project={projectWithRequiredLink} />
									) : (
										<ProjectCard key={project.id} project={projectWithRequiredLink} />
									);
								}
								)
							) : (
								<div className="col-span-full">
									<p className="text-xl text-white/50 py-10">
										Próximamente tendremos proyectos en esta categoría.
									</p>
								</div>
							)}
						</div>
					</article>
				</section>
			)}
			<section className="flex flex-col justify-center items-center text-center text-white w-full p-4 xl:p-20 gap-3 gradient-effect-y">
				<CTA
					title={"¿Listo para dar el siguiente paso digital?"}
					paragraph={
						"Es momento de convertir tu idea en una solución tecnológica escalable y atractiva. Agenda tu consulta gratuita o contáctanos directamente."
					}
					label={"Solicita tu Auditoría Gratuita"}
					link={"/contacto"}
				/>
			</section>
			<FAQ
				faqs={faqs}
				subtitle="Preguntas frecuentes sobre nuestro portafolio."
			/>
		</>
	);
}

export default ProjectsClient;
