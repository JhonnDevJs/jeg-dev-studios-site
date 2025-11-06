import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function CardTeam({ imageUrl, name, position, description, links }) {
	return (
		<div
			// Se eliminó el style={{ width: "77.5rem" }} para permitir que la tarjeta sea responsiva dentro del carrusel.
			className="card d-block bg-black border rounded-5 text-white text-start shadow-md p-3 card-team w-100" // Añadido w-100 para ocupar el ancho del contenedor del carrusel
		>
			<div className="card-header d-md-flex d-block justify-content-between align-itmes-center p-0">
				<div className="d-block gap-2">
					<div className="d-flex justify-content-start align-itmes-center mb-2 gap-2">
						<Image
							src={imageUrl}
							className="card-img-top img-fluid rounded-circle"
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
						<h3 className="card-title d-flex justify-content-center align-items-center m-0">{name}</h3>
					</div>
					<div>
						<p className="text-light fst-italic">{position}</p>
					</div>
				</div>

				<div className="d-flex justify-content-between text-white align-items-md-start align-items-center m-md-0 my-4">
					<div className="d-flex gap-2">
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
								<span className={`${link.icon} fs-3 __icons-color`}></span>
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="card-body p-0">
				<p>{description}</p>
			</div>
		</div>
	);
}

CardTeam.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default CardTeam;
