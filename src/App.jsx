import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Canales from "./pages/Canales";
import DetalleCanal from "./pages/DetalleCanal";
import Planes from "./pages/Planes";
import Contacto from "./pages/Contacto";
import NoEncontrado from "./pages/NoEncontrado";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/canales" element={<Canales />} />
          {/* :id es un parámetro, cambia según el canal */}
          <Route path="/canales/:id" element={<DetalleCanal />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* si la ruta no existe muestra la página 404 */}
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
