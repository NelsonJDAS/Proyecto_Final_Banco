import React from "react";
import "../../styles/not_found.css";
import ContenedorPresentacionTerminos from "../component/Individuales/terminos/ContenedorPresentacionTerminos.jsx";
import ContenedorUsoServicios from "../component/Individuales/terminos/ContenedorUsoServicios.jsx";
import ContenedorResponsabilidad from "../component/Individuales/terminos/ContenedorResponsabilidad.jsx"
import ContenedorTarifasCargos from "../component/Individuales/terminos/ContenedorTarifasCargos.jsx"
import ContenedorLimitaciones from "../component/Individuales/terminos/ContenedorLimitaciones.jsx"
import ContenedorModificaciones from "../component/Individuales/terminos/ContenedorModificaciones.jsx"
import ContenedorContacto from "../component/Individuales/terminos/ContenedorContacto.jsx"

export const Terminos = () => {
  return (
    <div>
      <ContenedorPresentacionTerminos />
      <ContenedorUsoServicios />
      <ContenedorResponsabilidad />
      <ContenedorTarifasCargos />
      <ContenedorLimitaciones />
      <ContenedorModificaciones />
      <ContenedorContacto />
    </div>
  );
};
