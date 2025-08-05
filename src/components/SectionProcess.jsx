import Image from "next/image";

SectionProcess.defaultProps = {
  title: "",
  text: "",
}

export default function SectionProcess({title, text}) {
  return (
    // Cambiado p-3 a p-0 p-sm-3 para eliminar padding en móviles (xs) y mantenerlo en sm+
    <section className="section-process-waves d-flex flex-column bg-transparent justify-content-center align-items-center text-center text-white w-100 h-vh p-3 p-xl-5 position-relative overflow-hidden">
      <article className="process-waves-container d-flex flex-column align-items-center gap-3" style={{ zIndex: 1, position: 'relative' }}>
        <h2 className="text-white text-center">
          {title}
        </h2>
        <h3 className="text-white text-center">(Basado en Scrum)</h3>
        <Image
          src="/icons/line-gradient.svg"
          alt="Line gradient"
          title="Line gradient"
          width={311}
          height={8}
        />
        <p className="text-white text-center">
          {text}
        </p>
      </article>
    </section>
  );
}