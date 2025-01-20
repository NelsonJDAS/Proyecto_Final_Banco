import React from "react";
import "../../styles/politicas.css";
import ContenedorPresentacionPoliticas from "../component/Individuales/politicas/ContenedorPresentacionPoliticas.jsx";
import ContenedorInformacion from "../component/Individuales/politicas/ContenedorInformacion.jsx";
import ContenedorUsoInformacion from "../component/Individuales/politicas/ContenedorUsoInformacion.jsx";
import ContenedorProteccion from "../component/Individuales/politicas/ContenedorProteccion.jsx";
import ContenedorCompartir from "../component/Individuales/politicas/ContenedorCompartir.jsx";

export const Politicas = () => {
  return (
    <div>
      <ContenedorPresentacionPoliticas />
      <ContenedorInformacion />
      <ContenedorUsoInformacion />
      <ContenedorProteccion />
      <ContenedorCompartir />
    </div>
  );
};
