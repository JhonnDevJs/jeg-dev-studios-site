import FAQ from "@/components/Seo/FAQ";
import StructuredData from "@/components/Seo/StructuredData";
import CTA from "@/components/Cta/CTA";

export const metadata = {
	title: "Desarrollo de Software | Saber Más | JEG Dev Studios",
	description:
		"Descubre cómo JEG Dev Studios innova en el desarrollo de software. Conoce nuestro proceso, tecnologías y proyectos internos de software.",
	keywords:
		"desarrollo de software, saber más, aplicaciones, soluciones de software, JEG Dev Studios, Python, Java, C#, React Native, Node.js, Flutter",
	openGraph: {
		title: "Desarrollo de Software | Saber Más | JEG Dev Studios",
		description:
			"Conoce el proceso, tecnologías y proyectos de desarrollo de software en JEG Dev Studios.",
		url: "https://www.jegdevstudios.com/saber-mas/soft-dev",
		siteName: "JEG Dev Studios",
		images: [
			{
				url: "/img-SEO/og-background-home.webp",
				width: 1200,
				height: 630,
				alt: "Desarrollo de Software JEG Dev Studios",
			},
		],
		locale: "es_MX",
		type: "website",
	},
	alternates: {
		canonical: "https://www.jegdevstudios.com/saber-mas/soft-dev",
	},
};


const faqs = [
	{
		question: "¿El servicio de desarrollo de software está disponible para clientes?",
		answer:
			"Por el momento, nuestro desarrollo de software se concentra en proyectos internos y productos propios. Esta estrategia nos permite innovar y perfeccionar nuestras soluciones antes de ofrecerlas al público general.",
	},
	{
		question: "¿Qué tipo de software crean como proyectos propios?",
		answer:
			"Creamos diversas soluciones, desde herramientas de gestión hasta aplicaciones especializadas. Nuestro objetivo es construir software robusto, escalable y que ofrezca un valor real a los futuros usuarios.",
	},
	{
		question:
			"¿Qué tecnologías utilizan para sus proyectos de software interno?",
		answer:
			"Utilizamos un conjunto de tecnologías modernas y probadas como Java, PHP con Laravel, React Native para soluciones móviles, y Node.js para backends eficientes. Esto nos garantiza flexibilidad y calidad en cada desarrollo.",
	},
	{
		question: "¿Cómo puedo saber si este servicio estará disponible en el futuro?",
		answer:
			"Te recomendamos seguirnos en nuestras redes sociales y visitar nuestro sitio web regularmente. Anunciaremos cualquier actualización sobre la disponibilidad de nuestros servicios de desarrollo de software para clientes.",
	},
];

function SoftDev() {
	return (
		<>
			<StructuredData data={faqs} type="FAQPage" />
			<section className="d-flex flex-column text-white w-100 p-5 m-0 gap-5 gradient-effect-x">
				<article className="d-flex flex-column pt-5 gap-3">
					<h1>Saber Más sobre Nuestro Servicio de Desarrollo de Software</h1>
					<p>
						En <strong>JEG Dev Studios</strong>, nuestro enfoque en el
						desarrollo de software es impulsado por la pasión por la innovación
						y la creatividad. Actualmente, nuestra empresa se dedica a la
						creación y desarrollo de aplicaciones y soluciones de software que
						son gestionadas y lanzadas como proyectos propios. Aunque este
						servicio no está abierto al público en general en este momento,
						seguimos explorando nuevas ideas y conceptos que nos permitan crear
						productos de software únicos y de alta calidad.
					</p>
				</article>
				<article className="d-flex flex-column gap-3">
					<h2>Nuestro Proceso de Desarrollo</h2>
					<p>
						El desarrollo de software en <strong>JEG Dev Studios</strong> se
						basa en un ciclo de innovación continua, desde la conceptualización
						hasta la implementación y el lanzamiento. Utilizamos herramientas y
						tecnologías modernas como{" "}
						<strong>Java, PHP Laravel, React Native, Node.js</strong>, y{" "}
						<strong>Flutter</strong> para crear soluciones robustas y
						escalables. Nuestro equipo trabaja de manera ágil, permitiéndonos
						iterar rápidamente y lanzar productos que respondan a las tendencias
						del mercado y las necesidades emergentes.
					</p>
				</article>
				<article className="d-flex flex-column gap-3">
					<h2>Compromiso con la Excelencia</h2>
					<p>
						Aunque por ahora el desarrollo de software en{" "}
						<strong>JEG Dev Studios</strong> se centra en proyectos internos,
						nuestro compromiso con la excelencia sigue siendo inquebrantable.
						Cada línea de código que escribimos y cada aplicación que lanzamos
						refleja nuestra dedicación a la calidad, la innovación y la
						experiencia del usuario. Nos esforzamos por crear soluciones que no
						solo funcionen de manera eficiente, sino que también proporcionen un
						valor significativo a nuestros usuarios finales.
					</p>
				</article>
			</section>
			<CTA />
			<FAQ
				faqs={faqs}
				subtitle="Preguntas frecuentes sobre nuestro desarrollo de software."
			/>
		</>
	);
}

export default SoftDev;
