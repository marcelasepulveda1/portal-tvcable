import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">📡 CableMax</h2>

      <ul className="menu">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/canales">Canales</NavLink></li>
        <li><NavLink to="/planes">Planes</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
