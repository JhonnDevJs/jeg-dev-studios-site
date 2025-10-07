"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import "./Projects.css";

function ProjectsClient() {
	const [activeCategory, setActiveCategory] = useState("web");
	const navRef = useRef(null);
	const [indicatorStyle, setIndicatorStyle] = useState({});

	const categories = [
		{ id: "web", title: "Desarrollo Web" },
		{ id: "mobile", title: "Aplicaciones Móviles" },
		// { id: "software", title: "Software" },
		{ id: "design", title: "Diseño" },
		// { id: "seo", title: "SEO" },
	];

	// Nota: He reestructurado tus proyectos. Ahora cada categoría tiene su propia lista.
	// Por ahora, he copiado los proyectos web en las otras categorías como ejemplo.
	// Deberás reemplazarlos con los proyectos correctos para cada una.
	const projectsByCategory = {
		web: [
			{
				imgSrc:
					"https://jhoneg-17.github.io/JhonDev/src/assets/img/proyects/proyects-img/CalculFisc.webp",
				alt: "Sitio Web para Agencia Creativa",
				title: "Sitio Web para Agencia Creativa",
				description:
					"Un sitio web dinámico y atractivo para una agencia creativa, destacando su trabajo y servicios.",
				link: "https://calculfisc-web.vercel.app/",
			},
			{
				imgSrc:
					"https://jhoneg-17.github.io/JhonDev/src/assets/img/proyects/proyects-img/vivabus-proyecto-portafolio.webp",
				alt: "Plataforma de E-commerce Vivabus",
				title: "Plataforma de E-commerce Vivabus",
				description:
					"Una plataforma de comercio electrónico de recerva de boletos de autobus, con una experiencia de compra fluida.",
				link: "https://vivabus-web.com/",
			},
			{
				imgSrc:
					"https://jhoneg-17.github.io/JhonDev/src/assets/img/proyects/proyects-img/liverpool-shope-clone.webp",
				alt: "Clon de tienda E-commerce",
				title: "Clon de tienda E-commerce Liverpool",
				description:
					"Clon funcional de una popular tienda departamental, enfocado en la experiencia de usuario y el catálogo de productos.",
				link: "https://liverpool-shop-clone.vercel.app/",
			},
		],
		mobile: [
			// TODO: Reemplazar con proyectos de Apps Móviles
			{
				imgSrc:
					"https://jhoneg-17.github.io/JhonDev/src/assets/img/proyects/proyects-img/CalculFisc.webp",
				alt: "App Web CalCulFisc una herramienta de calculo de ISR",
				title: "App Web CalCulFisc herramienta de calculo de ISR",
				description:
					"Un sitio web dinámico y atractivo para una agencia creativa, destacando su trabajo y servicios.",
				link: "https://calculfisc-web.vercel.app/",
			},
		],
		software: [
			// TODO: Reemplazar con proyectos de Software
			{
				imgSrc:
					"https://jhoneg-17.github.io/JhonDev/src/assets/img/proyects/proyects-img/liverpool-shope-clone.webp",
				alt: "Plataforma de E-commerce",
				title: "Plataforma de E-commerce",
				description:
					"Una plataforma de comercio electrónico completa para una tienda de moda, con una experiencia de compra fluida.",
				link: "https://liverpool-shop-clone.vercel.app/",
			},
		],
		seo: [
			// TODO: Reemplazar con proyectos de SEO
			{
				imgSrc:
					"https://jhoneg-17.github.io/JhonDev/src/assets/img/proyects/proyects-img/CalculFisc.webp",
				alt: "Sitio Web para Agencia Creativa",
				title: "Sitio Web para Agencia Creativa",
				description:
					"Un sitio web dinámico y atractivo para una agencia creativa, destacando su trabajo y servicios.",
				link: "https://calculfisc-web.vercel.app/",
			},
		],
		design: [
			
			{
				imgSrc:
					"https://jhoneg-17.github.io/JhonDev/src/assets/img/proyects/proyects-img/CalculFisc.webp",
				alt: "Sitio Web para Agencia Creativa",
				title: "Sitio Web para Agencia Creativa",
				description:
					"Un sitio web dinámico y atractivo para una agencia creativa, destacando su trabajo y servicios.",
				link: "https://calculfisc-web.vercel.app/",
			},
			{
				imgSrc:
					"https://jhoneg-17.github.io/JhonDev/src/assets/img/proyects/proyects-img/vivabus-proyecto-portafolio.webp",
				alt: "Plataforma de E-commerce Vivabus",
				title: "Plataforma de E-commerce Vivabus",
				description:
					"Una plataforma de comercio electrónico de recerva de boletos de autobus, con una experiencia de compra fluida.",
				link: "https://vivabus-web.com/",
			},
			{
				imgSrc:
					"https://jhoneg-17.github.io/JhonDev/src/assets/img/proyects/proyects-img/liverpool-shope-clone.webp",
				alt: "Clon de tienda E-commerce",
				title: "Clon de tienda E-commerce Liverpool",
				description:
					"Clon funcional de una popular tienda departamental, enfocado en la experiencia de usuario y el catálogo de productos.",
				link: "https://liverpool-shop-clone.vercel.app/",
			},
		],
	};

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
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/fondos/Proyectos.webp"
					alt="Nuestra colección de proyectos en JEG Dev Studios"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
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
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<article className="container">
					<div className="row g-4">
						{activeProjects.length > 0 ? (
							activeProjects.map((project, index) => (
								<ProjectCard
									key={`${activeCategory}-${index}`}
									project={project}
								/>
							))
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
		</>
	);
}

export default ProjectsClient;
