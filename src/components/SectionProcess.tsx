import Image from "next/image";

// 1. Definimos la interfaz de las props con los tipos correctos
interface SectionProcessProps {
	title: string;
	text: string;
};

export default function SectionProcess({ title, text }: SectionProcessProps) {
	return (
		<section className="section-process-waves flex flex-col justify-center items-center text-center text-white w-full h-1/2 relative overflow-hidden p-4">
			<article
				className="process-waves-container flex flex-col items-center gap-3 relative z-10"
			>
				<h2 className="text-white text-center text-4xl font-bold">{title}</h2>
				<h3 className="text-white text-center text-2xl font-light">(Basado en Scrum)</h3>
				<Image
					src="/icons/line-gradient.svg"
					alt="Line gradient"
					title="Line gradient"
					width={311}
					height={8}
					className="my-2"
				/>
				<p className="text-white text-center text-lg max-w-3xl">{text}</p>
			</article>
		</section>
	);
}
