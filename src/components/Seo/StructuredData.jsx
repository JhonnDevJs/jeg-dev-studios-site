"use client";

import Script from "next/script";

const StructuredData = ({ data, type, idPage }) => {
	let schema = data;

	// Si se pasa un array y el tipo es 'FAQPage', construye el schema.
	// Esto asume que los elementos del array tienen 'question' y 'answer'.
	if (type === "FAQPage" && Array.isArray(data)) {
		schema = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: data.map((faq) => ({
				"@type": "Question",
				name: faq.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: faq.answer,
				},
			})),
		};
	}

	return (
		<Script id={`structured-data-${idPage}`} type="application/ld+json">
			{JSON.stringify(schema)}
		</Script>
	);
};

export default StructuredData;
