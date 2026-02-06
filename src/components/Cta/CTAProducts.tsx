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
			<article className="text-gray-900 dark:text-white text-center w-full">
				<h2 className="text-3xl font-bold mb-4">{title}</h2>
				<p className="text-xl mb-6 mx-auto text-gray-600 dark:text-gray-300" style={{ maxWidth: "720px" }}>{paragraph}</p>
				<div className="flex flex-wrap justify-center gap-4">
					{links.map((link, index) => (
						<Link key={index} href={link.link} aria-label={link.label} className={`${link.type === "services"
							? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 border border-transparent dark:border-white/10"
							: "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
							} font-bold py-3 px-6 rounded-lg text-lg transition-colors`} role="button" title={link.label} tabIndex={0}>
							{link.label}
						</Link>
					))}
				</div>
			</article>
		</section>
	);
}