import Link from "next/link";

export default function NotFound() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-1 text-center text-white mb-4">404 - Página no encontrada</h1>
      <p className="text-white">La ruta que buscas no existe, ha sido movida o estamos trabajando en ella.</p>
      <Link href="/" className="btn btn-light mt-3">
        Volver al inicio
      </Link>
    </section>
  );
}
