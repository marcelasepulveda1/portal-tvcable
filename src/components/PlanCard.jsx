function PlanCard({ plan, onContratar }) {
  return (
    // si el plan es destacado le agregamos otra clase
    <div className={plan.destacado ? "card plan destacado" : "card plan"}>
      {plan.destacado && <p className="badge">⭐ Más vendido</p>}

      <h3>Plan {plan.nombre}</h3>
      <p className="precio">${plan.precio.toLocaleString("es-CL")} / mes</p>
      <p>{plan.cantidadCanales} canales</p>

      <ul>
        {plan.extras.map((extra, index) => (
          <li key={index}>✔ {extra}</li>
        ))}
      </ul>

      <button className="btn" onClick={() => onContratar(plan)}>
        Contratar
      </button>
    </div>
  );
}

export default PlanCard;
