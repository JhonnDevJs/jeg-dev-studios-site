import React, { useState } from "react";

export default function FAQ({ faqs, subtitle }) {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			style={{ backgroundColor: "black", color: "white", padding: "3rem 0" }}
		>
			<div className="container">
				<h2 className="text-center mb-4">Preguntas Frecuentes</h2>
				{subtitle && (
					<p className="text-center mb-5 text-white fw-lighter">{subtitle}</p>
				)}
				<div className="accordion">
					{faqs.map((faq, index) => (
						<div key={index} className="mb-3">
							<button
								className="btn-services w-100 text-start d-flex justify-content-between align-items-center"
								onClick={() => toggle(index)}
							>
								<h3 className="fs-5">{faq.question}</h3>
								<span
									style={{
										transform:
											openIndex === index ? "rotate(90deg)" : "rotate(0deg)",
										transition: "transform 0.3s",
										filter: "brightness(10)",
									}}
								>
									▶
								</span>
							</button>
							{openIndex === index && (
								<div
									className="mt-2 text-white px-3 py-2"
									style={{ backgroundColor: "#111", borderRadius: "10px" }}
								>
									<p>{faq.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
