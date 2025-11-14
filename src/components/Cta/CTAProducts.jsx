import Link from "next/link";
import PropTypes from "prop-types";

export default function CTAProducts({ title, paragraph, links }) {
	return (
		<section>
			<article className="text-white text-center w-100">
				<h2 className="mb-3">{title}</h2>
				<p className="lead mb-4">{paragraph}</p>
				{links.map((link, index) => (
					<Link
						key={index}
						href={link.link}
						aria-label={link.label}
						className={`btn ${
							link.type === "services" ? "btn-services" : "btn-light"
						} btn-lg px-4`}
						role="button"
						title={link.label}
						tabIndex={0}
					>
						{link.label}
					</Link>
				))}
			</article>
		</section>
	);
}

CTAProducts.propTypes = {
	title: PropTypes.string,
	paragraph: PropTypes.string,
	links: PropTypes.array,
};
