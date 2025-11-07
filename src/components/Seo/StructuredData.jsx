"use client"; // Directiva de Next.js para componentes de cliente

import Script from "next/script";
import { usePathname } from "next/navigation";

const StructuredData = ({ data, type, idPage }) => {
	const pathname = usePathname();
	let schema = data;

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

	if (type === "BreadcrumbList" && pathname !== "/") {
		const breadcrumbs = buildBreadcrumbs(pathname);
		if (breadcrumbs.length > 0) {
			schema = {
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: breadcrumbs,
			};
		}
	}

	if (!schema) {
		return null;
	}

	return (
		<Script
			id={`structured-data-${idPage}`}
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
};

const buildBreadcrumbs = (pathname) => {
	const pathSegments = pathname.split("/").filter((segment) => segment);
	const breadcrumbs = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Inicio",
			item: "https://www.jegdevstudios.com/",
		},
	];

	let currentPath = "";
	pathSegments.forEach((segment, index) => {
		currentPath += `/${segment}`;
		const breadcrumb = {
			"@type": "ListItem",
			position: index + 2,
			name: segment.charAt(0).toUpperCase() + segment.slice(1),
		};

		if (index < pathSegments.length - 1) {
			breadcrumb.item = `https://www.jegdevstudios.com${currentPath}`;
		}

		breadcrumbs.push(breadcrumb);
	});

	return breadcrumbs;
};

export default StructuredData;
