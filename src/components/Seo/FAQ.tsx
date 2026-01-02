"use client";
import { useState } from "react";

// 1. Definimos la forma que debe tener cada objeto dentro del array de FAQs
interface FaqItem {
  question: string;
  answer: string;
}

// 2. Definimos las props que recibe el componente
interface FAQProps {
  faqs: FaqItem[];   // Un array de objetos FaqItem
}

export default function FAQ({ faqs }: FAQProps) {
  // 3. Indicamos que el estado puede ser un número (el índice) o null (cerrado)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col w-full gap-6 py-8">
      <div className="text-center mb-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4 backdrop-blur-sm">
          <span className="text-xs font-medium text-blue-500">Dudas Comunes</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white">Preguntas Frecuentes</h2>
        <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto">
          Resolvemos tus inquietudes sobre desarrollo, SEO y procesos de trabajo.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl bg-surface-dark border p-5 transition-all ${openIndex === index
              ? "border-blue-500/30"
              : "border-white/5 hover:border-white/10 cursor-pointer"
              }`}
            onClick={() => toggle(index)}
          >
            <div className={`flex justify-between gap-4 ${openIndex === index ? "items-start" : "items-center"}`}>
              <h3 className={`font-bold text-white ${openIndex === index ? "text-lg" : "text-base"}`}>{faq.question}</h3>
              <span className={`material-symbols-outlined ${openIndex === index ? "text-blue-500" : "text-gray-500"}`} style={{ fontSize: '24px' }}>
                {openIndex === index ? "remove" : "add"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section >
  );
}