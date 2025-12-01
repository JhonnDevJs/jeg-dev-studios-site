import Image from "next/image";
import Link from "next/link";

type ProjectCard = {
	project: {
		title: string;
		description: string;
		image: string;
		link: string;
	};
};

function ProjectCard({ project }: ProjectCard) {
	return (
		// Las clases de columna (col-*) se han eliminado. Debes aplicar el grid de Tailwind en el componente padre.
		// Por ejemplo: <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<div className="w-full">
			<div className="h-full shadow-lg border-none rounded-lg overflow-hidden bg-gray-800 flex flex-col">
				<div className="project-card-img-web relative">
					<Image
						loading="lazy"
						src={project.image}
						alt={project.title}
						fill
						sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
						style={{ objectFit: "cover" }}
						className="project-card-img"
					/>
				</div>
				<div className="p-4 flex flex-col flex-grow">
					<h3 className="text-xl text-white font-bold">{project.title}</h3>
					<p className="text-white my-2 flex-grow">{project.description}</p>
					<Link
						href={project.link}
						className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center"
						aria-label={`Visitar el sitio del proyecto ${project.title}`}
						title={`Visitar el sitio del proyecto ${project.title}`}
						target="_blank" // Opcional: abre el enlace en una nueva pestaña
						rel="noopener noreferrer" // Seguridad al usar target="_blank"
					>
						Visitar Sitio
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
