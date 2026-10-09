import { useState, useEffect } from "react";
import PlanCard from "../components/PlanCard";
import planes from "../data/planes";

function Planes() {
  const [planElegido, setPlanElegido] = useState(null);

  useEffect(() => {
    document.title = "CableMax | Planes";
  }, []);

  function elegirPlan(plan) {
    setPlanElegido(plan);
  }

  return (
    <div>
      <h1>Nuestros planes</h1>

      <div className="grilla">
        {planes.map((plan) => (
          <PlanCard key={plan.id} plan={plan} onContratar={elegirPlan} />
        ))}
      </div>

      {/* solo se muestra si ya eligió un plan */}
      {planElegido && (
        <div className="alerta">
          Elegiste el plan <strong>{planElegido.nombre}</strong> por $
          {planElegido.precio.toLocaleString("es-CL")} al mes. ¡Un ejecutivo te contactará!
          <button className="btn-secundario" onClick={() => setPlanElegido(null)}>
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}

export default Planes;
