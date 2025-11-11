"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// 1. ACEPTAMOS UNA NUEVA PROP 'serviceInfo'
const StructuredData = ({ data, type, idPage, serviceInfo }) => {
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

	// 2. AÑADIMOS LA NUEVA LÓGICA PARA "Service"
	if (type === "Service" && Array.isArray(data) && serviceInfo) {
		// --- 1. CÁLCULO DE LA FECHA DE VENCIMIENTO ---
		// Creamos una fecha para un año en el futuro
		const expirationDate = new Date();
		expirationDate.setFullYear(expirationDate.getFullYear() + 1);

		// La formateamos como YYYY-MM-DD
		const priceValidUntilDate = expirationDate.toISOString().split("T")[0];
		// Esto generará algo como "2026-11-10"
		// ---------------------------------------------

		// Definimos al proveedor (tu empresa)
		const providerData = {
			"@type": "ProfessionalService",
			name: "JEG Dev Studios",
			url: "https://www.jegdevstudios.com/",
		};

		// Construimos el schema "Service"
		schema = {
			"@context": "https://schema.org",
			"@type": "Service",
			"@id": `https://www.jegdevstudios.com${pathname}`, // ID único para el servicio

			// Usamos la info estática de la prop 'serviceInfo'
			name: serviceInfo.name,
			serviceType: serviceInfo.serviceType,
			description: serviceInfo.description,
			image: serviceInfo.image,

			provider: providerData,
			areaServed: {
				"@type": "Country",
				name: "MX",
			},

			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: serviceInfo.ratingValue,
				reviewCount: serviceInfo.reviewCount,
				itemReviewed: {
					"@type": "Service",
					"@id": `https://www.jegdevstudios.com${pathname}`,
				},
			},

			offers: data.map((pkg) => ({
				"@type": "Offer",
				name: pkg.name,
				description: `${pkg.description}. Incluye: ${pkg.items.join(", ")}.`,
				price: pkg.price,
				priceCurrency: pkg.currency,
				sku: pkg.id,
				availability: "https://schema.org/InStock",
				url: `https://www.jegdevstudios.com${pathname}`,

				priceValidUntil: priceValidUntilDate,

				hasMerchantReturnPolicy: {
					"@type": "MerchantReturnPolicy",
					applicableCountry: "MX",
					returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
				},

				shippingDetails: {
					"@type": "OfferShippingDetails",
					shippingDestination: {
						"@type": "DefinedRegion",
						addressCountry: "MX",
					},
					shippingRate: {
						"@type": "MonetaryAmount",
						value: 0,
						currency: "MXN",
					},
					deliveryTime: {
						"@type": "ShippingDeliveryTime",
						// Tiempo de "manejo" o procesamiento del pedido
						handlingTime: {
							"@type": "QuantitativeValue",
							minValue: 0, // 0 días
							maxValue: 1, // 1 día (para procesar el pago/alta)
							unitCode: "DAY",
						},
						// Tiempo de "tránsito" (para un servicio digital, es 0)
						transitTime: {
							"@type": "QuantitativeValue",
							minValue: 0,
							maxValue: 0,
							unitCode: "DAY",
						},
					},
				},
			})),
		};
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

// --- (Tu función buildBreadcrumbs se mantiene igual) ---
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
			// Lógica de capitalización mejorada
			name: segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
			item: `https://www.jegdevstudios.com${currentPath}`,
		};

		breadcrumbs.push(breadcrumb);
	});

	return breadcrumbs;
};

export default StructuredData;
