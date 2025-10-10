import React from "react";

export default function Slider ({ children }) {
	const items = React.Children.toArray(children);
	const carouselId = "teamCarousel"; // ID único para el carrusel

	return (
		<div id={carouselId} className="carousel slide px-5">
			<div className="carousel-indicators">
				{items.map((_, index) => (
					<button
						key={index}
						type="button"
						data-bs-target={`#${carouselId}`}
						data-bs-slide-to={index}
						className={index === 0 ? "active" : ""}
						aria-current={index === 0 ? "true" : "false"}
						aria-label={`Slide ${index + 1}`}
					></button>
				))}
			</div>
			<div
				className="carousel-inner"
				style={{ maxWidth: "77.5rem", minHeight: "14.25rem" }}
			>
				{items.map((item, index) => (
					<div
						key={index}
						className={`carousel-item ${index === 0 ? "active" : ""}`}
					>
						{item}
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target={`#${carouselId}`}
				data-bs-slide="prev"
				style={{ left: "0rem", width: "4rem" }}
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target={`#${carouselId}`}
				data-bs-slide="next"
				style={{ right: "0rem", width: "4rem" }}
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
