import { useState, useEffect } from "react";
import CanalCard from "../components/CanalCard";
import datosCanales from "../data/canales";

function Canales() {
  const [canales, setCanales] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  // simulamos que los canales vienen de una API (se demora 1 segundo)
  useEffect(() => {
    document.title = "CableMax | Canales";

    const timer = setTimeout(() => {
      setCanales(datosCanales);
      setCargando(false);
    }, 1000);

    // limpieza: si salimos de la página antes, se cancela el timer
    return () => clearTimeout(timer);
  }, []);

  // filtramos por nombre y por categoría
  const canalesFiltrados = canales.filter((canal) => {
    const coincideNombre = canal.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todas" || canal.categoria === categoria;
    return coincideNombre && coincideCategoria;
  });

  return (
    <div>
      <h1>Grilla de canales</h1>

      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar canal..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option>Todas</option>
          <option>Noticias</option>
          <option>Deportes</option>
          <option>Películas</option>
          <option>Infantil</option>
          <option>Series</option>
        </select>
      </div>

      {/* renderizado condicional con operador ternario */}
      {cargando ? (
        <p className="mensaje">Cargando canales...</p>
      ) : canalesFiltrados.length === 0 ? (
        <p className="mensaje">No se encontraron canales 😕</p>
      ) : (
        <div className="grilla">
          {canalesFiltrados.map((canal) => (
            <CanalCard key={canal.id} canal={canal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Canales;
