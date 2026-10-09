import { Link } from "react-router-dom";

// recibe la prop "canal" (usamos desestructuración)
function CanalCard({ canal }) {
  return (
    <div className="card">
      <div className="card-logo">{canal.logo}</div>
      <h3>{canal.nombre}</h3>
      <p>Canal {canal.numero}</p>
      <p className="categoria">{canal.categoria}</p>

      {/* renderizado condicional: solo muestra HD si el canal es HD */}
      {canal.hd && <span className="etiqueta-hd">HD</span>}

      <Link to={`/canales/${canal.id}`} className="btn">
        Ver detalle
      </Link>
    </div>
  );
}

export default CanalCard;
