import Link from "next/link";

type CTA = {
	title: string;
	paragraph: string;
	label: string;
	link: string;
};

export default function CTA({ title, paragraph, label, link }: CTA) {
	return (
		<section id="cta-contacto" className="text-white text-center">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
				<p className="text-lg md:text-xl mb-4 mx-auto" style={{ maxWidth: "720px" }}>
					{paragraph}
				</p>
				<div className="flex flex-col md:flex-row justify-center gap-3">
					<Link
						href={link}
						aria-label="Enlace a página de contacto"
						className="bg-white text-gray-900 hover:bg-gray-200 font-bold py-3 px-6 rounded-lg text-lg transition-colors"
						role="button"
						title="Enlace a página de contacto"
						tabIndex={0}
					>
						{label}
					</Link>
					<Link
						href="/servicios"
						aria-label="Enlace a página de servicios"
						className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg text-lg transition-colors"
						role="button"
						title="Enlace a página de servicios"
						tabIndex={0}
					>
						Ver nuestros servicios
					</Link>
				</div>
			</div>
		</section>
	);
}