"use client";

import { useState } from "react";
import "@/styles/proyects.css";

const PROJECTS = [
  {
    type: "web",
    title: "Título del Proyecto Web",
    description: "Descripción del proyecto web",
    img: "#",
    url: "#",
  },
  {
    type: "movil",
    title: "Título del Proyecto Móvil",
    description: "Descripción del proyecto móvil",
    img: "#",
    url: "#",
  },
  {
    type: "desktop",
    title: "Título del Proyecto de Escritorio",
    description: "Descripción del proyecto de escritorio",
    img: "#",
    url: "#",
  },
  {
    type: "games",
    title: "Título del Proyecto de Videojuegos",
    description: "Descripción del proyecto de videojuegos",
    img: "#",
    url: "#",
  },
];

function Proyects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredProjects = PROJECTS.filter(
    (project) =>
      (filter === "" || project.type === filter) &&
      (search === "" ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section>
      <article>
        <div className="container-principal">
          <div className="container-title">
            <h1>Nuestros mejores proyectos</h1>
          </div>
          <div className="container-filter">
            <div className="filter-form">
              <div className="search-container">
                <label htmlFor="filterInput">Buscar: </label>
                <input
                  type="text"
                  id="filterInput"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar opciones..."
                />
              </div>
              <div className="container-filter2">
                <label htmlFor="filterSelect">Opciones: </label>
                <select
                  id="filterSelect"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="">Todas</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="movil">Desarrollo Móvil</option>
                  <option value="desktop">Desarrollo de Escritorio</option>
                  <option value="games">Desarrollo de Videojuegos</option>
                </select>
              </div>
            </div>
          </div>
          <div className="sub-container">
            <div className="container-list">
              <ul className="list-container">
                {filteredProjects.length === 0 && (
                  <li className="list-element">
                    <div className="container-description">
                      <div className="container-title">
                        <h1>No se encontraron proyectos</h1>
                      </div>
                    </div>
                  </li>
                )}
                {filteredProjects.map((project, idx) => (
                  <li
                    key={idx}
                    className="list-element filtered-item"
                    data-type={project.type}
                  >
                    <div className="container-img">
                      {project.img && (
                        <img
                          src={project.img}
                          alt={`imagen del proyecto ${project.title}`}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="container-description">
                      <div className="container-title">
                        <h1>{project.title}</h1>
                      </div>
                      <div className="container-text">
                        <p>{project.description}</p>
                      </div>
                      <div className="container-btn">
                        <button>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visitar Proyecto
                          </a>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Proyects;
