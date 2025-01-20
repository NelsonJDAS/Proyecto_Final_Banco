import React from "react";
import "../../styles/terminos.css";
import "../../styles/politicas.css";
import ContenedorPresentacionTerminos from "../component/Individuales/terminos/ContenedorPresentacionTerminos.jsx";
import ContenedorUsoServicios from "../component/Individuales/terminos/ContenedorUsoServicios.jsx";
import ContenedorResponsabilidad from "../component/Individuales/terminos/ContenedorResponsabilidad.jsx";
import ContenedorLimitaciones from "../component/Individuales/terminos/ContenedorLimitaciones.jsx";

export const Terminos = () => {
  return (
    <div>
      <ContenedorPresentacionTerminos />
      <ContenedorUsoServicios />
      <ContenedorResponsabilidad />
      <ContenedorLimitaciones />
    </div>
  );
};
