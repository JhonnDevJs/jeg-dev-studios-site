"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

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

  // --- INICIO DE LA LÓGICA DE SERVICIO OPTIMIZADA ---

  // 1. Validación de props más robusta
  if (type === "Product" && Array.isArray(data) && serviceInfo?.name) {
    
    // --- Cálculo de la fecha de vencimiento (Sin cambios) ---
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    const priceValidUntilDate = expirationDate.toISOString().split("T")[0];
    
    // 2. 'provider' mejorado con 'Organization', 'logo' y 'sameAs'
    // Esto conecta tu servicio con la entidad de tu marca (Knowledge Graph)
    const providerData = {
      "@type": "Organization", // <-- Mejorado
      name: "JEG Dev Studios",
      url: "https://www.jegdevstudios.com/",
      logo: "https://www.jegdevstudios.com/icons-SEO/logo.webp", // <-- Nuevo
      sameAs: [ // <-- Nuevo
        "https://www.facebook.com/JEGDevStudios",
        "https://instagram.com/jegdevstudios/",
        "https://www.tiktok.com/@jeg.dev.studios",
        "https://www.youtube.com/@jegdevstudios",
        "https://linkedin.com/company/jegdevstudios",
        "https://x.com/JEGDevStudios",
        "https://github.com/JEGDevStudios"
      ],
    };

    // Construimos el schema "Product"
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `https://www.jegdevstudios.com${pathname}`, 

      name: serviceInfo.name,
      serviceType: serviceInfo.serviceType,
      description: serviceInfo.description,
      image: serviceInfo.image,

      provider: providerData, // <-- Usando el 'provider' mejorado
      areaServed: {
        "@type": "Country",
        name: "MX",
      },

      // 3. 'serviceOutput' añadido para describir el resultado
      // Le decimos a Google que el resultado de tu servicio es un producto digital
      serviceOutput: { // <-- Nuevo
        "@type": "WebApplication", // Puedes usar "WebSite" si lo prefieres
        name: serviceInfo.name,
        url: `https://www.jegdevstudios.com${pathname}`
      },

      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: serviceInfo.ratingValue,
        reviewCount: serviceInfo.reviewCount,
        // 'itemReviewed' se omite correctamente aquí
      },

      offers: data.map((pkg) => ({
        "@type": "Offer",
        // 4. '@id' único añadido a cada oferta
        "@id": `https://www.jegdevstudios.com${pathname}#${pkg.id}`, // <-- Nuevo
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
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: 0,
              maxValue: 1,
              unitCode: "DAY",
            },
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

  // --- FIN DE LA LÓGICA DE SERVICIO OPTIMIZADA ---

  if (!schema) {
    return null;
  }

  // 5. 'dangerouslySetInnerHTML' con escapado de caracteres
  // Esto añade una capa extra de seguridad a tu script
  return (
    <Script
      id={`structured-data-${idPage}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
          .replace(/</g, "\\u003c")
          .replace(/>/g, "\\u003e")
      }}
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
      name: segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      item: `https://www.jegdevstudios.com${currentPath}`,
    };

    breadcrumbs.push(breadcrumb);
  });

  return breadcrumbs;
};

export default StructuredData;