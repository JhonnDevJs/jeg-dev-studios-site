import Link from "next/link";
import PropTypes from "prop-types";

export default function CTA({ title, paragraph, label, link }) {
	return (
		<section id="cta-contacto" className="text-white text-center">
			<div className="container">
				<h2 className="display-5 fw-bold mb-4">{title}</h2>
				<p className="lead mb-4 mx-auto" style={{ maxWidth: "720px" }}>
					{paragraph}
				</p>
				<div className="d-flex flex-column flex-md-row justify-content-center gap-3">
					<Link
						href={link}
						aria-label="Enlace a página de contacto"
						className="btn btn-light btn-lg px-4"
						role="button"
						title="Enlace a página de contacto"
						tabIndex={0}
					>
						{label}
					</Link>
					<Link
						href="/servicios"
						aria-label="Enlace a página de servicios"
						className="btn btn-outline-light btn-lg px-4"
						role="button"
						title="Enlace a página de servicios"
						tabIndex={0}
					>
						Ver nuestros servicios
					</Link>
				</div>
			</div>
		</section>
	);
}

PropTypes.propTypes = {
	title: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};
