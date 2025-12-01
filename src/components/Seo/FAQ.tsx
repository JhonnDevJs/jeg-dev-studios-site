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
  subtitle?: string; // El ? indica que es opcional (puede venir o no)
}

export default function FAQ({ faqs, subtitle }: FAQProps) {
  // 3. Indicamos que el estado puede ser un número (el índice) o null (cerrado)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Preguntas Frecuentes
        </h2>

        {/* Como 'subtitle' es opcional en la interfaz, esta comprobación es segura */}
        {subtitle && (
          <p className="text-center mb-8 text-gray-300 font-light">{subtitle}</p>
        )}

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="btn-services w-full text-left flex justify-between items-center p-4"
                onClick={() => toggle(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span
                  className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                >
                  ▶
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-300 px-4 py-3 bg-gray-900 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}