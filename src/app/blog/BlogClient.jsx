"use client";
import { useState } from "react";

export default function BlogClient() {
  const [search, setSearch] = useState("");

  // Aquí puedes agregar lógica para filtrar, cargar posts, etc.

  return (
    <section className="container py-5">
      <h1>Blog de JEG Dev Studios</h1>
      <input
        type="text"
        placeholder="Buscar en el blog..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control my-3"
      />
      {/* Aquí renderiza tus posts filtrados */}
      <div>
        <p>No hay publicaciones aún.</p>
      </div>
    </section>
  );
}
