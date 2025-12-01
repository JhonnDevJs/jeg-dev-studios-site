"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type DesignProjectCard = {
	project: {
		title: string;
		description: string;
		image: string;
		link?: string;
		figmaEmbedUrl?: string;
	};
};

function DesignProjectCard({ project }: DesignProjectCard) {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<div className="col-12 col-sm-6 col-lg-4">
				<div className="h-full shadow-lg border-none rounded-lg overflow-hidden bg-gray-800">
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
					<div className="p-4 flex flex-col h-full">
						<h3 className="text-xl text-white font-bold">
							{project.title}
						</h3>
						<p className="text-white mt-2 flex-grow">{project.description}</p>
						{project.link && (
							<Link
								href={project.link}
								className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-4"
								aria-label={`Visitar el sitio del proyecto ${project.title}`}
								title={`Visitar el sitio del proyecto ${project.title}`}
								target="_blank" // Opcional: abre el enlace en una nueva pestaña
								rel="noopener noreferrer" // Seguridad al usar target="_blank"
							>
								Visitar Proyecto
							</Link>
						)}
						{project.figmaEmbedUrl && (
							<button
								onClick={() => setShowModal(true)}
								className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-4 ml-2"
								aria-label={`Ver vista previa del diseño ${project.title}`}
								title={`Ver vista previa del diseño ${project.title}`}
							>
								Vista previa
							</button>
						)}
					</div>
				</div>
			</div>

			{showModal && project.figmaEmbedUrl && (
				<div
					className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
					tabIndex={-1}
					onClick={() => setShowModal(false)}
				>
					<div
						className="relative w-full max-w-6xl"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="bg-gray-900 rounded-lg shadow-xl">
							<div className="flex justify-between items-center p-4 border-b border-gray-700">
								<h5 className="text-white text-xl">{project.title}</h5>
								<button
									type="button"
									className="text-white text-3xl leading-none hover:text-gray-300"
									aria-label="Close"
									onClick={() => setShowModal(false)}
								>&times;</button>
							</div>
							<div className="p-0">
								<div className="aspect-w-16 aspect-h-9">
									<iframe
										src={project.figmaEmbedUrl}
										allowFullScreen
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default DesignProjectCard;
