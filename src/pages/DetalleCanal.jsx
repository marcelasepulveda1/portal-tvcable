import { useParams, useNavigate } from "react-router-dom";
import canales from "../data/canales";

function DetalleCanal() {
  const { id } = useParams();
  const navigate = useNavigate();

  // el id de la URL viene como texto, por eso lo pasamos a número
  const canal = canales.find((c) => c.id === Number(id));

  // si no existe el canal, mostramos un mensaje
  if (!canal) {
    return (
      <div className="mensaje">
        <h2>El canal no existe</h2>
        <button className="btn" onClick={() => navigate("/canales")}>
          Volver a canales
        </button>
      </div>
    );
  }

  return (
    <div className="detalle">
      <div className="card-logo grande">{canal.logo}</div>
      <h1>{canal.nombre}</h1>
      <p><strong>Número:</strong> {canal.numero}</p>
      <p><strong>Categoría:</strong> {canal.categoria}</p>
      <p><strong>Calidad:</strong> {canal.hd ? "HD" : "Estándar"}</p>
      <p>{canal.descripcion}</p>

      {/* navigate(-1) vuelve a la página anterior */}
      <button className="btn" onClick={() => navigate(-1)}>
        ← Volver
      </button>
    </div>
  );
}

export default DetalleCanal;
