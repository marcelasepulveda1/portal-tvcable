import { useState, useEffect } from "react";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    document.title = "CableMax | Contacto";
  }, []);

  // un solo handleChange para todos los inputs (usa el "name" del input)
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // para que no se recargue la página

    if (form.nombre === "" || form.correo === "" || form.mensaje === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!form.correo.includes("@")) {
      setError("El correo no es válido");
      return;
    }

    setError("");
    setEnviado(true);
    console.log("Datos enviados:", form);
  }

  // si ya se envió, mostramos otra cosa en vez del formulario
  if (enviado) {
    return (
      <div className="mensaje">
        <h2>¡Gracias {form.nombre}!</h2>
        <p>Te responderemos a {form.correo} lo antes posible.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Contáctanos</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />

        <label>Correo</label>
        <input type="email" name="correo" value={form.correo} onChange={handleChange} />

        <label>Mensaje</label>
        <textarea name="mensaje" rows="4" value={form.mensaje} onChange={handleChange} />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
