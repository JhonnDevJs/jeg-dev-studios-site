import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center min-h-[80vh] text-center px-4 bg-background-light dark:bg-background-dark">
      <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600 dark:text-blue-500 mb-2">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Página no encontrada</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-8 leading-relaxed">
        La ruta que buscas no existe, ha sido movida o estamos trabajando en ella.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 font-bold py-3 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-white/10 transform hover:-translate-y-1"
        tabIndex={0}
        title="Regresar a la página de inicio"
        aria-label="Regresar a la página de inicio"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
