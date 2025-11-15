import PropTypes from "prop-types";
import Link from "next/link";

function CardServices({
	title,
	description,
	url,
	buttonLabel,
	items = [],
}) {
	return (
		<li
			className="card d-flex flex-column bg-transparent border rounded-5 text-white text-start shadow-md p-1 card-services"
			style={{ width: "22rem" }}
		>
			<div className="card-header d-flex flex-column justify-content-evenly flex-grow-1">
				<h3 className="h2 fw-bolder card-title text-center">{title}</h3>
				<p className="fs-5 text-center m-0">{description}</p>
			</div>
			<div className="card-body d-flex flex-column justify-content-evenly flex-grow-1 py-2">
				<Link
					href={url}
					className="btn-services my-auto"
					role="button"
					aria-label={buttonLabel}
					title={buttonLabel}
					tabIndex={0}
				>
					<span className="fw-bolder">{buttonLabel}</span>
				</Link>
				
				<ul className="list-group list-group-flush mx-auto">
					{items.map((item, idx) => (
						<li
							key={idx}
							className={`row align-items-center bg-transparent text-white py-2 ${
								idx < items.length - 1 ? "border-bottom border-white-50" : ""
							}`}
						>
							<span className="col-auto icon-check-list fs-5 me-2"></span>
							<p className="col fs-5 m-0">{item}</p>
						</li>
					))}
				</ul>
			</div>
		</li>
	);
}

CardServices.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	url: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.string),
};

export default CardServices;
