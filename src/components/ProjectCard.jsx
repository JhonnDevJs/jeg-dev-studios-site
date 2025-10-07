import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
	return (
		<div className="col-12 col-sm-6 col-lg-4">
			<div className="card h-100 shadow-lg border-0">
				<div className="project-card-img-web position-relative">
					<Image
						loading="lazy"
						src={project.imgSrc}
						alt={project.alt}
						fill
						sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
						style={{ objectFit: "cover" }}
						className="project-card-img"
					/>
				</div>
				<div className="card-body">
					<h3 className="h5 card-title text-white fw-bold">{project.title}</h3>
					<p className="card-text text-white">{project.description}</p>
					<Link
						href={project.link}
						className="btn btn-primary mt-auto"
						aria-label={`Visitar el sitio del proyecto ${project.title}`}
						title={`Visitar el sitio del proyecto ${project.title}`}
						target="_blank" // Opcional: abre el enlace en una nueva pestaña
						rel="noopener noreferrer" // Seguridad al usar target="_blank"
					>
						Visitar sitio
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
