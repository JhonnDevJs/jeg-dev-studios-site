import Link from "next/link";

type LinkProps = {
	link: string;
	label: string;
	type: 'services' | 'light';
};

type CTAProductsProps = {
	title: string;
	paragraph: string;
	links: LinkProps[];
};

export default function CTAProducts({ title, paragraph, links }: CTAProductsProps) {
	return (
		<section>
			<article className="text-white text-center w-full">
				<h2 className="text-3xl font-bold mb-4">{title}</h2>
				<p className="text-xl mb-6 mx-auto" style={{ maxWidth: "720px" }}>{paragraph}</p>
				<div className="flex flex-wrap justify-center gap-4">
					{links.map((link, index) => (
						<Link key={index} href={link.link} aria-label={link.label} className={`${link.type === "services"
							? "btn-services"
							: "bg-white text-gray-900 hover:bg-gray-200"
							} font-bold py-3 px-6 rounded-lg text-lg transition-colors`} role="button" title={link.label} tabIndex={0}>
							{link.label}
						</Link>
					))}
				</div>
			</article>
		</section>
	);
}