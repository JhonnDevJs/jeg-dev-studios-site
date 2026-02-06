import Link from "next/link";

interface CardServicesProps {
	title: string;
	description: string;
	url: string;
	buttonLabel: string;
	items: string[];
}

function CardServices({ title,
	description,
	buttonLabel,
	url,
	items
}: CardServicesProps) {
	return (
		<li
			className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg dark:shadow-none w-full max-w-[24rem]"
		>
			{/* Decorative blur */}
			<div className="absolute right-0 top-0 h-32 w-32 translate-x-10 translate-y-[-10px] rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-all pointer-events-none"></div>

			<div className="relative z-10 flex flex-col flex-grow gap-4">
				<h3 className="text-2xl font-extrabold text-center text-gray-900 dark:text-white">{title}</h3>
				<p className="text-base text-center text-gray-600 dark:text-gray-300 m-0 leading-relaxed">{description}</p>
			</div>

			<div className="relative z-10 flex flex-col flex-grow pt-6 gap-6">
				<ul className="list-none p-0 mx-auto w-full space-y-3">
					{items.map((item, idx) => (
						<li
							key={idx}
							className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium"
						>
							<span className="material-symbols-outlined text-blue-500 shrink-0 text-lg mt-0.5">check_circle</span>
							<p className="flex-1 m-0">{item}</p>
						</li>
					))}
				</ul>

				<Link
					href={url}
					className="mt-auto flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 border border-transparent dark:border-white/10 font-bold py-3 px-6 transition-all active:scale-95"
					role="button"
					aria-label={buttonLabel}
					title={buttonLabel}
					tabIndex={0}
				>
					<span>{buttonLabel}</span>
					<span className="material-symbols-outlined text-lg">arrow_forward</span>
				</Link>
			</div>
		</li >
	);
}

export default CardServices;