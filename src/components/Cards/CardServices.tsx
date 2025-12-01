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
			className="flex flex-col bg-transparent border rounded-3xl text-white text-left shadow-md p-1 card-services w-[22rem]"
		>
			<div className="flex flex-col justify-evenly flex-grow p-4">
				<h3 className="text-3xl font-bold text-center">{title}</h3>
				<p className="text-xl text-center m-0">{description}</p>
			</div>
			<div className="flex flex-col justify-evenly flex-grow py-2 px-4">
				<Link
					href={url}
					className="btn-services self-center"
					role="button"
					aria-label={buttonLabel}
					title={buttonLabel}
					tabIndex={0}
				>
					<span className="font-bold">{buttonLabel}</span>
				</Link>

				<ul className="list-none p-0 mx-auto w-full">
					{items.map((item, idx) => (
						<li
							key={idx}
							className={`flex items-center bg-transparent text-white py-2 ${idx < items.length - 1 ? "border-b border-white/50" : ""
								}`}
						>
							<span className="icon-check-list text-xl mr-2"></span>
							<p className="flex-1 text-xl m-0">{item}</p>
						</li>
					))}
				</ul>
			</div>
		</li>
	);
}

export default CardServices;