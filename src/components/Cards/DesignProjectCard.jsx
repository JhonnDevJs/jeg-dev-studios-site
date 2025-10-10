"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function DesignProjectCard({ project }) {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<div className="col-12 col-sm-6 col-lg-4">
				<div className="card h-100 shadow-lg border-0">
					<div className="project-card-img-web position-relative">
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
					<div className="card-body">
						<h3 className="h5 card-title text-white fw-bold">
							{project.title}
						</h3>
						<p className="card-text text-white">{project.description}</p>
						{project.link && (
							<Link
								href={project.link}
								className="btn btn-primary mt-auto"
								aria-label={`Visitar el sitio del proyecto ${project.title}`}
								title={`Visitar el sitio del proyecto ${project.title}`}
								target="_blank" // Opcional: abre el enlace en una nueva pestaña
								rel="noopener noreferrer" // Seguridad al usar target="_blank"
							>
								Visitar proyecto
							</Link>
						)}
						{project.figmaEmbedUrl && (
							<button
								onClick={() => setShowModal(true)}
								className="btn btn-primary mt-auto ms-2"
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
					className="modal fade show"
					style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
					tabIndex="-1"
					onClick={() => setShowModal(false)}
				>
					<div
						className="modal-dialog modal-xl"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="modal-content bg-dark">
							<div className="modal-header border-secondary">
								<h5 className="modal-title text-white">{project.title}</h5>
								<button
									type="button"
									className="btn-close btn-close-white"
									aria-label="Close"
									onClick={() => setShowModal(false)}
								></button>
							</div>
							<div className="modal-body p-0">
								<div className="ratio ratio-16x9">
									<iframe
										style={{ border: "none" }}
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
