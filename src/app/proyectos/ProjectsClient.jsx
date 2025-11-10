"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProjectCard from "@/components/Cards/ProjectCard";
import DesignProjectCard from "@/components/Cards/DesignProjectCard";
import CTA from "@/components/Cta/CTA";
import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import { storage, db } from "@/lib/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import "./Projects.css";

const faqs = [
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
	const [projectsByCategory, setProjectsByCategory] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			setLoading(true);
			try {
				// 1. Obtener los datos de los proyectos desde Firestore
				const querySnapshot = await getDocs(collection(db, "projects"));
				const projectsData = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				// 2. Asignar la URL de la imagen directamente desde los datos de Firestore
				const projectsWithCorrectedImages = projectsData.map((project) => {
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
					(acc, project) => {
						const category = project.category || "web"; // Categoría por defecto
						if (!acc[category]) acc[category] = [];
						acc[category].push(project);
						return acc;
					},
					{}
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
	const navRef = useRef(null);
	const [indicatorStyle, setIndicatorStyle] = useState({});

	const categories = [
		{ id: "web", title: "Desarrollo Web" },
		{ id: "mobile", title: "Aplicaciones Móviles" },
		{ id: "software", title: "Software" },
		{ id: "design", title: "Diseño" },
		{ id: "seo", title: "SEO" },
	];

	const activeProjects = projectsByCategory[activeCategory] || [];

	useEffect(() => {
		if (navRef.current) {
			const activeButton = navRef.current.querySelector(
				`button[data-category-id="${activeCategory}"]`
			);
			if (activeButton) {
				setIndicatorStyle({
					width: `${activeButton.offsetWidth}px`,
					height: `${activeButton.offsetHeight}px`,
					transform: `translateX(${activeButton.offsetLeft}px)`,
				});
			}
		}
	}, [activeCategory]);

	return (
		<>
			<StructuredData type="BreadcrumbList" idPage="breadcrumbs-projects" />
			<StructuredData data={faqs} type="FAQPage" idPage="faqs-projects" />
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/banners/Christmas/Proyectos.webp"
					alt="Nuestra colección de proyectos en JEG Dev Studios"
					width={2000}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3">
				<article className="container text-center text-white">
					<h1 className="display-md-2 display-4 fw-bolder">
						Portafolio de Proyectos
					</h1>
					<p
						className="mt-4 mx-auto fs-6 fs-md-5 text-white-50"
						style={{ maxWidth: "48rem" }}
					>
						Explora una colección diversa de proyectos que abarcan desarrollo
						web, aplicaciones móviles, software, SEO y diseño. Cada proyecto
						muestra nuestro enfoque en la innovación y la calidad.
					</p>
					{/* Menú de navegación por categorías */}
					<nav
						ref={navRef}
						className="nav nav-pills project-nav-pills justify-content-start mt-5 gap-2"
					>
						<div className="active-indicator" style={indicatorStyle} />
						{categories.map((category) => (
							<button
								key={category.id}
								data-category-id={category.id}
								type="button"
								className={`nav-link btn btn-lg fw-bold shadow-lg ${
									activeCategory === category.id ? "active" : ""
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
				<p className="fs-5 text-white-50 text-center">
					Cargando los proyectos disponibles..
				</p>
			) : (
				<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
					<article className="container">
						<div className="row g-4">
							{activeProjects.length > 0 ? (
								activeProjects.map((project, index) =>
									activeCategory === "design" ? (
										<DesignProjectCard key={project.id} project={project} />
									) : (
										<ProjectCard key={project.id} project={project} />
									)
								)
							) : (
								<div className="col-12">
									<p className="fs-5 text-white-50">
										Próximamente tendremos proyectos en esta categoría.
									</p>
								</div>
							)}
						</div>
					</article>
				</section>
			)}
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
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
