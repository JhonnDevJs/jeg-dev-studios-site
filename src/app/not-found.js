import Link from "next/link";

export default function NotFound() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1>404 - Página no encontrada</h1>
      <p>La ruta que buscas no existe o ha sido movida.</p>
      <Link href="/" className="btn btn-dark mt-3">
        Volver al inicio
      </Link>
    </section>
  );
}
