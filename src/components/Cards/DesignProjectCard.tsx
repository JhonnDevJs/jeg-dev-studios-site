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
						<h3 className="text-xl text-white font-bold">
							{project.title}
						</h3>
						<p className="text-white mt-2 flex-grow">{project.description}</p>
						<div className="flex mt-auto pt-4">
							{project.link && (
								<Link
									href={project.link}
									className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
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
									className="block bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition-colors ml-2"
									aria-label={`Ver vista previa del diseño ${project.title}`}
									title={`Ver vista previa del diseño ${project.title}`}
								>
									Vista previa
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{showModal && project.figmaEmbedUrl && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4" // Agregué p-4 para que no pegue a los bordes en móviles
          tabIndex={-1}
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-7xl h-full max-h-[90vh] flex flex-col" // Hice el modal más alto y ancho
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-900 rounded-lg shadow-2xl flex flex-col h-full overflow-hidden border border-gray-700">
              
              {/* Header del Modal */}
              <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-800 shrink-0">
                <h5 className="text-white text-xl font-bold truncate pr-4">{project.title}</h5>
                <button
                  type="button"
                  className="text-white text-3xl leading-none hover:text-red-500 transition-colors focus:outline-none"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
              </div>

              {/* Cuerpo del Modal (Donde va el iframe) */}
              <div className="flex-grow relative bg-black w-full h-full">
                <iframe
                  src={project.figmaEmbedUrl}
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-none" // Clave: absolute + inset-0 + w-full + h-full
                  loading="lazy"
                ></iframe>
              </div>
              
            </div>
          </div>
        </div>
      )}
		</>
	);
}

export default DesignProjectCard;
