"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconLogo from "@/assets/img/logo/logo-bg-transparent.webp";
import "./contactClient.css";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        alert("Correo enviado con éxito");
        setFormData({
          name: "",
          email: "",
          type: "",
          message: "",
        });
      } else {
        alert("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el correo");
    }
  };

  return (
    <>
      <section className="__image-background-sections d-flex justify-content-center align-items-center w-100 p-0 m-0">
        <h2 className="display-1 text-center text-white">Contacto</h2>
      </section>
      <section className="d-flex flex-md-row flex-column justify-content-center align-items-center w-100 p-xl-5 p-3 gap-5">
        <aside className="d-flex flex-column justify-content-center align-items-center w-100 h-100 gap-4">
          <Image
            src={iconLogo}
            width={164}
            height={164}
            alt="Logo JEG Dev Studios"
          ></Image>
          <p className="fs-3 text-center text-white">
            Estamos aquí para ayudarte. Escríbenos y nuestro equipo te
            responderá lo antes posible.
          </p>
          <Link
            href="mailto:jegdevstudioscontact@gmail.com"
            className="fs-4 text-center text-white"
          >
            jegdevstudioscontact@gmail.com
          </Link>
          <Link
            href="tel:+52 1 5512197135"
            className="fs-4 text-center text-white"
          >
            55-1219-7135
          </Link>
        </aside>
        <article className="d-flex flex-column justify-content-center align-items-center text-center w-100 h-100">
          <h2 className="text-white">Contactanos</h2>
          <form
            className="fs-5 fw-semibold custom-form"
            id="contactForm"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="type" className="text-white">
              Tipo de Consulta
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecciona un tipo
              </option>
              <option value="services" className="text-black">
                Servicios
              </option>
              <option value="support" className="text-black">
                Soporte
              </option>
              <option value="general" className="text-black">
                General
              </option>
            </select>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Escriba su mensaje..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="fs-5 fw-bold">
              Enviar
            </button>
          </form>
        </article>
      </section>
    </>
  );
}
