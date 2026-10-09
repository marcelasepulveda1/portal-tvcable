import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <div className="mensaje">
      <h1>404</h1>
      <p>Ups, esta página no existe 📡❌</p>
      <Link to="/" className="btn">Ir al inicio</Link>
    </div>
  );
}

export default NoEncontrado;
