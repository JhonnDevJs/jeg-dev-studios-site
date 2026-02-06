"use client";
// Import Hooks
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

// Definimos la interfaz para los datos del formulario
interface ContactFormData {
  name: string;
  email: string;
  type: string;
  message: string;
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Estado inicial del formulario
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  // Manejador de cambios en los inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador del envío del formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://jegdevstudios.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({ name: "", email: "", type: "", message: "" });
        setShowModal(true);
      } else {
        alert("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el correo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-5 w-full lg:flex-1" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 ml-1" htmlFor="name">Nombre</label>
          <div className="relative">
            <input className="block w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" id="name" name="name" placeholder="Tu nombre completo" type="text" value={formData.name} onChange={handleChange} required />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" style={{ fontSize: '20px' }}>person</span>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 ml-1" htmlFor="email">Email</label>
          <div className="relative">
            <input className="block w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" id="email" name="email" placeholder="tu@empresa.com" type="email" value={formData.email} onChange={handleChange} required />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" style={{ fontSize: '20px' }}>mail</span>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 ml-1" htmlFor="type">Tipo de Consulta</label>
          <div className="relative">
            <select className="block w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#101922] p-4 text-gray-900 dark:text-white appearance-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-none" id="type" name="type" value={formData.type} onChange={handleChange} required>
              <option value="" disabled className="bg-white dark:bg-surface-dark">Selecciona un tipo</option>
              <option value="consulta" className="bg-white dark:bg-surface-dark">General (Cualquier otra consulta)</option>
              <option value="cotizacion" className="bg-white dark:bg-surface-dark">Cotización</option>
              <option value="soporte" className="bg-white dark:bg-surface-dark">Soporte</option>
              <option value="facturacion" className="bg-white dark:bg-surface-dark">Facturación</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" style={{ fontSize: '20px' }}>expand_more</span>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 ml-1" htmlFor="message">Mensaje</label>
          <textarea className="block w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark p-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none" id="message" name="message" placeholder="Cuéntanos los detalles..." rows={4} value={formData.message} onChange={handleChange} required></textarea>
        </div>

        <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-transform active:scale-95 hover:brightness-110" type="submit" disabled={loading}>
          {loading ? (
            <>
              <span className="mr-2">Enviando...</span>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            </>
          ) : (
            <>
              Enviar Solicitud
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
            </>
          )}
        </button>
      </form>

      {/* Modal de éxito */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-[#0B0D10] border border-gray-200 dark:border-white/10 p-6 text-center shadow-2xl">
            <div className="mb-4">
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                Tu mensaje ha sido enviado exitosamente.
              </div>
              <div className="text-base mt-2 text-gray-600 dark:text-gray-300">
                Nos comunicaremos contigo a la brevedad. :)
              </div>
            </div>
            <button className="rounded-xl bg-blue-500 px-6 py-2 text-sm font-bold text-white hover:bg-blue-600 transition-colors" onClick={() => setShowModal(false)}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  )
}