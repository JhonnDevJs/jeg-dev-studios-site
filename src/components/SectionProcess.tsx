interface SectionProcessProps {
	title: string;
	text: string;
}

export default function SectionProcess({ title, text }: SectionProcessProps) {
	return (
		<div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto gap-8 p-8 md:p-12 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-[2.5rem] shadow-xl dark:shadow-none relative overflow-hidden group transition-all duration-300 hover:border-blue-500/30">
			{/* Decorative background blur */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

			<div className="relative z-10 flex flex-col items-center gap-3">
				<h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
					{title}
				</h2>
				<h3 className="text-lg md:text-xl font-semibold text-center text-blue-600 dark:text-blue-400 tracking-wide uppercase">
					(Basado en Scrum)
				</h3>
			</div>

			<div className="relative z-10 w-24 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"></div>

			<p className="relative z-10 text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
				{text}
			</p>
		</div>
	);
}
