import { useEffect } from "react";
import { Link } from "react-router-dom";
import CanalCard from "../components/CanalCard";
import canales from "../data/canales";

function Inicio() {
  // useEffect para cambiar el título de la pestaña al entrar
  useEffect(() => {
    document.title = "CableMax | Inicio";
  }, []);

  // solo los primeros 3 canales
  const destacados = canales.slice(0, 3);

  return (
    <div>
      <section className="hero">
        <h1>Bienvenido a CableMax</h1>
        <p>Más de 180 canales para toda la familia, en HD y al mejor precio.</p>
        <Link to="/planes" className="btn">Ver planes</Link>
      </section>

      <h2>Canales destacados</h2>
      <div className="grilla">
        {destacados.map((canal) => (
          <CanalCard key={canal.id} canal={canal} />
        ))}
      </div>
    </div>
  );
}

export default Inicio;
