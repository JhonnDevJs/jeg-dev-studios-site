import Link from "next/link";

export default function CTAProducts() {
  return (
    <section>
      <article className="text-white rounded-4 p-4 text-center mt-5 w-100">
        <h2 className="mb-3">¿Ninguno de estos paquetes se ajusta a lo que necesitas?</h2>
        <p className="lead mb-4">
          No te preocupes, en JEG Dev Studios desarrollamos soluciones 100% personalizadas. Cuéntanos tu idea y te ayudaremos a crear un proyecto a tu medida, con todo lo que realmente necesitas y nada que no.
        </p>
        <Link
          href="/contacto"
          className="btn btn-light btn-lg px-4 py-2"
          role="button"
          aria-label="Enlace a página de contacto"
          title="Enlace a página de contacto"
          tabIndex={0}
        >
          Solicita una cotización personalizada
        </Link>
      </article>
    </section>
  );
}