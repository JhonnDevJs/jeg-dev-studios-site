import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// 1. Definimos la interfaz de las props con TypeScript
interface CardTeamProps {
	imageUrl: StaticImageData | string;
	name: string;
	position: string;
	description: string;
	links: {
		url: string;
		title: string;
		icon: string;
	}[];
}

// 2. Aplicamos la interfaz a las props del componente
export default function CardTeam({ imageUrl, name, position, description, links }: CardTeamProps) {
	return (
		<div
			// Se eliminó el style={{ width: "77.5rem" }} para permitir que la tarjeta sea responsiva dentro del carrusel.
			className="block bg-black border rounded-3xl text-white text-left shadow-md p-3 card-team w-full" // Añadido w-full para ocupar el ancho del contenedor del carrusel
		>
			<div className="block md:flex justify-between items-center p-0">
				<div className="block">
					<div className="flex justify-start items-center mb-2 gap-2">
						<Image
							src={imageUrl}
							className="rounded-full"
							alt={`Foto de ${name}`}
							title={`Foto de ${name}`}
							loading="lazy"
							width={44}
							height={44}
							style={{
								width: "2.75rem",
								height: "2.75rem",
								objectFit: "cover",
							}}
						/>
						<h3 className="flex justify-center items-center m-0 text-xl font-bold">
							{name}
						</h3>
					</div>
					<div>
						<p className="text-gray-200 italic">{position}</p>
					</div>
				</div>

				<div className="flex justify-between text-white items-center md:items-start my-4 md:m-0">
					<div className="flex gap-2">
						{links.map((link, idx) => (
							<Link
								key={idx}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								tabIndex={0}
								title={link.title}
								aria-label={link.title}
								className={`link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover`}
							>
								<span className={`${link.icon} text-2xl __icons-color`}></span>
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="p-0">
				<p>{description}</p>
			</div>
		</div>
	);
}