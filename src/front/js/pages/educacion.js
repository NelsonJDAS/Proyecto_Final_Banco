import React from "react";
import "../../styles/individuales.css";
import ContenedorPresentacionEducacion from "../component/Individuales/educacion/ContenedorPresentacionEducacion.jsx";
import ContenedorImportanciaEducacion from "../component/Individuales/educacion/ContenedorImportanciaEducacion.jsx";
import ContenedorRecursosEducacion from "../component/Individuales/educacion/ContenedorRecursosEducacion.jsx";
import ContenedorConsejosEducacion from "../component/Individuales/educacion/ContenedorConsejosEducacion.jsx";

export const Educacion = () => {
  return (
    <div>
      <ContenedorPresentacionEducacion />
      <ContenedorImportanciaEducacion />
      <ContenedorRecursosEducacion />
      <ContenedorConsejosEducacion />
    </div>
  );
};
