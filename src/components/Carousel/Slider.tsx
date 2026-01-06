"use client";
import { useState, Children, ReactNode } from "react";

// 1. Definimos la interfaz para las props del componente
interface SliderProps {
	children: ReactNode;
}

// 2. Aplicamos la interfaz a las props
export default function Slider({ children }: SliderProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const items = Children.toArray(children);

	const goToSlide = (index: number) => {
		setActiveIndex(index);
	};

	const goToPrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === items.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="relative w-full px-5">
			{/* Contenedor de los slides */}
			<div className="overflow-hidden relative mx-auto" style={{ maxWidth: "77.5rem", minHeight: "14.25rem" }}>
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>
					{items.map((item, index) => (
						<div key={index} className="w-full flex-shrink-0">
							{item}
						</div>
					))}
				</div>
			</div>

			{/* Indicadores */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 p-2">
				{items.map((_, index) => (
					<button
						key={index}
						type="button"
						onClick={() => goToSlide(index)}
						className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-white" : "bg-white/50"
							}`}
						aria-label={`Slide ${index + 1}`}
					></button>
				))}
			</div>

			{/* Controles Prev/Next */}
			<button
				type="button"
				onClick={goToPrev}
				className="absolute bottom-5 left-0 z-1 flex items-center justify-center h-full w-16 cursor-pointer"
				aria-label="Previous"
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
					<svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" /></svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				onClick={goToNext}
				className="absolute bottom-5 right-0 z-1 flex items-center justify-center h-full w-16 cursor-pointer"
				aria-label="Next"
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
					<svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
}
