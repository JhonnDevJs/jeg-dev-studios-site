"use client";
import { useMemo } from "react";
import CardPacksProduct from "@/components/CardPacksProduct";
import CardSmallList from "@/components/CardSmallList";
import SectionProcess from "@/components/SectionProcess";
import CTAProducts from "@/components/CTAProducts";
import Image from "next/image";
import imgSoftProduct1 from "@/assets/img/img/services/dev-web/pack-1/imagen-muestra-de-pagina-web.webp";
import imgSoftProduct2 from "@/assets/img/img/services/dev-web/pack-2/imagen-muestra-de-pagina-web.webp";
import imgSoftProduct3 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import imgSoftProduct4 from "@/assets/img/img/services/dev-web/pack-3/imagen-muestra-de-pagina-web.webp";
import "./DevSoftClient.css";

export default function DevSoftClient() {
	const products = useMemo(
		() => [
			{
				id: "solucion_basica",
				name: "Solución Básica",
				price: 9499,
				currency: "MXN",
				imageSrc: imgSoftProduct1.src,
				description:
					"1 módulo funcional (ventas, citas, inventario, etc.). Interfaz gráfica simple y amigable. Software de escritorio o app web local. Base de datos local (ej. SQLite). Manual básico de usuario. Instalación en un equipo.",
			},
			{
				id: "solucion_estandar",
				name: "Solución Estándar",
				price: 17299,
				currency: "MXN",
				imageSrc: imgSoftProduct2.src,
				description:
					"Hasta 3 módulos integrados (ej. ventas, productos, clientes). Sistema multiusuario con login y control de acceso. Interfaz responsiva (web o escritorio). Base de datos local o en red. Exportación de reportes a PDF/Excel. Instalación en hasta 3 dispositivos.",
			},
			{
				id: "solucion_avanzada",
				name: "Solución Avanzada",
				price: 34499,
				currency: "MXN",
				imageSrc: imgSoftProduct3.src,
				description:
					"Hasta 6 módulos personalizados (ventas, compras, almacén, clientes, empleados, reportes). Diseño visual adaptado a tu identidad corporativa. Base de datos en red o en la nube. Panel de control y estadísticas con gráficas. Acceso por roles y permisos. Instalación en red local o servidor. Capacitación inicial para tu equipo.",
			},
			{
				id: "solucion_profesional",
				name: "Solución Profesional",
				price: 66899,
				currency: "MXN",
				imageSrc: imgSoftProduct4.src,
				description:
					"Módulos ilimitados según flujo de trabajo personalizado. Desarrollo basado en análisis detallado de procesos. Interfaz avanzada y adaptable (modo oscuro, responsiva, accesible). Control de usuarios y auditoría de acciones. Integraciones externas (facturación electrónica, CRMs, etc.). Seguridad avanzada (respaldos automáticos, cifrado de datos). Capacitación y documentación completa. Soporte técnico durante el primer mes incluido.",
			},
		],
		[]
	);

	// Fragmento enriquecido para SEO
	const productSchema = products.map((product) => ({
		"@context": "https://schema.org/",
		"@type": "Product",
		name: product.name,
		image: product.imageSrc,
		description: product.description,
		sku: product.id,
		offers: {
			"@type": "Offer",
			priceCurrency: product.currency,
			price: product.price,
			availability: "https://schema.org/InStock",
		},
	}));

	const handleWhatsAppRedirect = (productName) => {
		const message = `Hola, estoy interesado en la solución de software "${productName}". ¿Podrían darme más información?`;
		// Reemplaza con tu número de WhatsApp en formato internacional
		const whatsappLink = `https://wa.me/5215512197135?text=${encodeURIComponent(
			message
		)}`;
		window.open(whatsappLink, "_blank");
	};
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
			/>
			<section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0">
				<Image
					src="/fondos/Software.webp"
					alt="Conoce nuestros servicios de desarrollo de software empresarial"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<h1 className="display-1 text-center text-white">
					Nuestros servicios de Software Empresarial
				</h1>
				<p className="lead w-100 px-3 px-md-5">
					En JEG Dev Studios te ofrecemos paquetes adaptados a tus necesidades y
					presupuesto. Ya sea que estés comenzando con un sistema de inventarios
					o necesites un software más robusto, tenemos la solución perfecta para
					ti.
				</p>
				<ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-startcenter w-100 h-100 gap-5 p-0 m-0">
					<CardPacksProduct
						idProduct="solucion_basica"
						dataPrice={9499}
						title="Solución Básica"
						price="9499"
						moneda="MXN"
						imageUrl={imgSoftProduct1.src}
						items={[
							"1 módulo funcional (ventas, citas, inventario, etc.).",
							"Interfaz gráfica simple y amigable. ",
							"Software de escritorio o app web local.",
							"Base de datos local (ej. SQLite).",
							"Manual básico de usuario.",
							"Instalación en un equipo.",
						]}
						onQuote={() => handleWhatsAppRedirect("Solución Básica")}
					/>
					<CardPacksProduct
						idProduct={"solucion_estandar"}
						dataPrice={17299}
						title="Solución Estándar"
						price="17299"
						moneda="MXN"
						imageUrl={imgSoftProduct2.src}
						items={[
							"Hasta 3 módulos integrados (ej. ventas, productos, clientes).",
							"Sistema multiusuario con login y control de acceso.",
							"Interfaz responsiva (web o escritorio).",
							"Base de datos local o en red.",
							"Exportación de reportes a PDF/Excel.",
							"Instalación en hasta 3 dispositivos.",
						]}
						onQuote={() => handleWhatsAppRedirect("Solución Estándar")}
					/>
					<CardPacksProduct
						idProduct={"solucion_avanzada"}
						dataPrice={34499}
						title="Solución Avanzada"
						price="34499"
						moneda="MXN"
						imageUrl={imgSoftProduct3.src}
						items={[
							"Hasta 6 módulos personalizados (ventas, compras, almacén, clientes, empleados, reportes).",
							"Diseño visual adaptado a tu identidad corporativa.",
							"Base de datos en red o en la nube.",
							"Panel de control y estadísticas con gráficas.",
							"Acceso por roles y permisos.",
							"Instalación en red local o servidor.",
							"Capacitación inicial para tu equipo.",
						]}
						onQuote={() => handleWhatsAppRedirect("Solución Avanzada")}
					/>
					<CardPacksProduct
						idProduct={"solucion_profesional"}
						dataPrice={66899}
						title="Solución Profesional"
						price="66899"
						moneda="MXN"
						imageUrl={imgSoftProduct4.src}
						items={[
							"Módulos ilimitados según flujo de trabajo personalizado.",
							"Desarrollo basado en análisis detallado de procesos.",
							"Interfaz avanzada y adaptable (modo oscuro, responsiva, accesible).",
							"Control de usuarios y auditoría de acciones.",
							"Integraciones externas (facturación electrónica, CRMs, etc.).",
							"Seguridad avanzada (respaldos automáticos, cifrado de datos).",
							"Capacitación y documentación completa.",
							"Soporte técnico durante el primer mes incluido.",
						]}
						onQuote={() => handleWhatsAppRedirect("Solución Profesional")}
					/>
				</ul>
			</section>
			<SectionProcess
				title={"Nuestro Proceso de Desarrollo de Software"}
				text={
					"En JEG Dev Studios seguimos una metodología clara y estructurada para asegurarnos de que tu software cumpla con tus objetivos y funcione correctamente desde el día uno."
				}
			/>
			<section className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100 p-xl-5 p-3 gap-3 gradient-effect-y">
				<CardSmallList
					titulo="Proceso"
					subtitulo="Desde el primer contacto, nos enfocamos en comprender tu visión, objetivos y necesidades específicas. ¿Qué hacemos en esta fase?"
					list={[
						"  Diagnóstico y Consultoría: Nos reunimos contigo para comprender tu negocio, tus procesos y los problemas que deseas resolver. Identificamos puntos críticos y definimos los módulos necesarios.",
						" Propuesta y Cotización: Con base en el diagnóstico, elaboramos una propuesta con el paquete adecuado, el tiempo estimado de desarrollo y el costo total, incluyendo una cronología por fases.",
						" Diseño y Prototipado: Creamos los primeros bocetos del sistema (interfaces, navegación, funciones clave) y los validamos contigo para asegurar que se ajusten a tus necesidades.",
						" Desarrollo por Fases: Desarrollamos el software por etapas. Cada módulo se construye, prueba y presenta individualmente para permitir revisiones rápidas. Utilizamos tecnologías como Python, C#, Java, Node.js, Electron, y React, según el proyecto.",
						" Pruebas y Revisión Final: Antes de la entrega, hacemos pruebas internas y contigo para asegurar que todo funcione como debe. Se hacen ajustes finales según tus observaciones.",
						" Entrega y Capacitación: Instalamos el sistema en tus equipos o servidores y capacitamos a tu personal para que puedan utilizarlo sin problemas..",
						" Soporte y Mantenimiento: Ofrecemos soporte técnico posterior a la entrega durante el tiempo establecido en el contrato. También puedes contratar mantenimiento mensual o por demanda.",
					]}
					lastText="Tecnologías: Según el paquete, usamos stacks modernos como Figma, HTML, JavaScript, Tailwind, Next.js, Bootstrap, Node.js, PHP (Laravel) o Java."
				/>
			</section>
			<section className="d-flex flex-column justify-content-center align-items-center text-center w-100 p-xl-5 p-3 gap-3 gradient-effect-x">
				<h2 className="text-white">Compromiso con la exelencia</h2>
				<p className="text-white fs-4">
					Cada línea de código que escribimos en JEG Dev Studios refleja nuestro
					compromiso con la calidad, la funcionalidad y la innovación. Nos
					enfocamos en que tu software sea útil, estable, seguro y fácil de
					usar. No desarrollamos software genérico: desarrollamos soluciones que
					resuelven problemas reales.
				</p>
				<p className="text-white fs-4">
					Tu empresa merece una herramienta que trabaje por ella. Nosotros la
					creamos
				</p>
			</section>
			<CTAProducts />
		</>
	);
}
